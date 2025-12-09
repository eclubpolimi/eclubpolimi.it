import type { APIRoute } from 'astro';

function isoNowPlus(days = 0) {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toISOString();
}

export const GET: APIRoute = async ({ request }) => {
    const url = new URL(request.url);
    const calendarId = url.searchParams.get('calendarId') || process.env.PUBLIC_GOOGLE_CALENDAR_ID;
    if (!calendarId) {
        return new Response(JSON.stringify({ error: 'missing calendarId' }), { status: 400 });
    }

    const key = process.env.GOOGLE_API_KEY;
    if (!key) return new Response(JSON.stringify({ error: 'missing GOOGLE_API_KEY' }), { status: 500 });

    // Debug logging to help with local env issues (won't log the API key)
    try {
        // eslint-disable-next-line no-console
        console.log('[public-events] calendarId=', calendarId, 'GOOGLE_API_KEY set=', !!key);
    } catch (e) { }

    const timeMin = url.searchParams.get('timeMin') ?? isoNowPlus(-30);
    const timeMax = url.searchParams.get('timeMax') ?? isoNowPlus(365);

    const endpoint = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?key=${encodeURIComponent(key)}&singleEvents=true&orderBy=startTime&timeMin=${encodeURIComponent(timeMin)}&timeMax=${encodeURIComponent(timeMax)}`;

    const res = await fetch(endpoint, { headers: { Accept: 'application/json' } });
    if (!res.ok) {
        const txt = await res.text();
        return new Response(txt, { status: res.status });
    }
    const data = await res.json();

    const items = (data.items || []).map((ev: any) => ({
        id: ev.id,
        title: ev.summary || '(No title)',
        start: ev.start?.dateTime ?? ev.start?.date,
        end: ev.end?.dateTime ?? ev.end?.date,
        allDay: !!ev.start?.date && !ev.start?.dateTime,
        status: ev.status,
        extendedProps: {
            description: ev.description,
            location: ev.location,
            original: ev,
        },
    }));

    return new Response(JSON.stringify({ events: items }), {
        headers: { 'Content-Type': 'application/json' },
    });
};
