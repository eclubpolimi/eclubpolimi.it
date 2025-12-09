import type { APIRoute } from 'astro';
import { readRefreshToken, refreshAccessToken } from '../../../lib/google';

function isoNowPlus(days = 0) {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toISOString();
}

export const GET: APIRoute = async ({ request }) => {
    const url = new URL(request.url);
    // accept calendarId CSV, timeMin, timeMax
    const calendarIds = url.searchParams.get('calendarId')?.split(',').map(s => decodeURIComponent(s)) ?? [];
    const timeMin = url.searchParams.get('timeMin') ?? isoNowPlus(-30);
    const timeMax = url.searchParams.get('timeMax') ?? isoNowPlus(60);

    const refresh = await readRefreshToken();
    if (!refresh) return new Response(JSON.stringify({ connected: false }), { status: 200 });

    try {
        const token = await refreshAccessToken(refresh);
        const access = token.access_token;

        const calendarsToQuery = calendarIds.length > 0 ? calendarIds : ['primary'];
        const results: any[] = [];

        for (const calId of calendarsToQuery) {
            const encodedId = encodeURIComponent(calId);
            const eventsUrl = `https://www.googleapis.com/calendar/v3/calendars/${encodedId}/events?singleEvents=true&showDeleted=true&timeMin=${encodeURIComponent(timeMin)}&timeMax=${encodeURIComponent(timeMax)}&orderBy=startTime`;
            const res = await fetch(eventsUrl, { headers: { Authorization: `Bearer ${access}` } });
            if (!res.ok) {
                const txt = await res.text();
                return new Response(txt, { status: res.status });
            }
            const data = await res.json();
            const mapped = (data.items || []).map((ev: any) => ({
                id: ev.id,
                title: ev.summary ?? '(No title)',
                start: ev.start?.dateTime ?? ev.start?.date,
                end: ev.end?.dateTime ?? ev.end?.date,
                allDay: !!ev.start?.date && !ev.start?.dateTime,
                status: ev.status,
                calendarId: calId,
                extendedProps: { description: ev.description, location: ev.location, googleEvent: ev },
            }));
            results.push(...mapped);
        }

        return new Response(JSON.stringify({ connected: true, events: results }), { status: 200 });
    } catch (e: any) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500 });
    }
};
