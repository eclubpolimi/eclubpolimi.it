import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ request }) => {
    const base = process.env.BASE_URL || (request.url.replace(/\/api\/.*$/, ''));
    const client_id = process.env.GOOGLE_CLIENT_ID;
    const redirect_uri = `${base}/api/google/callback`;
    const params = new URLSearchParams({
        client_id: client_id || '',
        redirect_uri,
        response_type: 'code',
        scope: 'https://www.googleapis.com/auth/calendar.readonly',
        access_type: 'offline',
        include_granted_scopes: 'true',
        prompt: 'consent',
    });

    const url = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
    return new Response('', { status: 302, headers: { Location: url } });
};
