import type { APIRoute } from 'astro';
import { readRefreshToken, refreshAccessToken } from '../../../lib/google';

export const GET: APIRoute = async ({ request }) => {
    const refresh = await readRefreshToken();
    if (!refresh) return new Response(JSON.stringify({ connected: false }), { status: 200 });

    try {
        const token = await refreshAccessToken(refresh);
        const access = token.access_token;
        const res = await fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList', {
            headers: { Authorization: `Bearer ${access}` },
        });
        if (!res.ok) {
            const txt = await res.text();
            return new Response(txt, { status: res.status });
        }
        const data = await res.json();
        return new Response(JSON.stringify({ connected: true, calendars: data.items }), { status: 200 });
    } catch (e: any) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500 });
    }
};
