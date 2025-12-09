import type { APIRoute } from 'astro';
import { saveRefreshToken } from '../../../lib/google';

export const GET: APIRoute = async ({ request }) => {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    if (!code) return new Response('Missing code', { status: 400 });

    const client_id = process.env.GOOGLE_CLIENT_ID;
    const client_secret = process.env.GOOGLE_CLIENT_SECRET;
    const base = process.env.BASE_URL || (request.url.replace(/\/api\/.*$/, ''));
    const redirect_uri = `${base}/api/google/callback`;

    const params = new URLSearchParams();
    params.set('code', code);
    params.set('client_id', client_id || '');
    params.set('client_secret', client_secret || '');
    params.set('redirect_uri', redirect_uri);
    params.set('grant_type', 'authorization_code');

    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
    });

    if (!tokenRes.ok) {
        const txt = await tokenRes.text();
        return new Response(`Token exchange failed: ${tokenRes.status} ${txt}`, { status: 500 });
    }

    const data = await tokenRes.json();
    // data contains access_token, expires_in, refresh_token (if granted)
    if (data.refresh_token) {
        await saveRefreshToken(data.refresh_token);
    }

    // Redirect back to site (events page)
    return new Response('', { status: 302, headers: { Location: '/events' } });
};
