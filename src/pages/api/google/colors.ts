/* 
 * Endpoint reserved for future dynamic color legend.
 * Fetches official Google Calendar color mappings (colorId → hex).
 * Currently not consumed by the frontend.
 */

import type { APIRoute } from 'astro';
import { readRefreshToken, refreshAccessToken } from '../../../lib/google';

export const GET: APIRoute = async () => {
  const refresh = await readRefreshToken();
  if (!refresh) {
    return new Response(JSON.stringify({ connected: false }), { status: 200 });
  }

  try {
    const token = await refreshAccessToken(refresh);
    const access = token.access_token;

    const colorsUrl = 'https://www.googleapis.com/calendar/v3/colors';
    const res = await fetch(colorsUrl, {
      headers: { Authorization: `Bearer ${access}` },
    });

    if (!res.ok) {
      const txt = await res.text();
      return new Response(txt, { status: res.status });
    }

    const data = await res.json();

    return new Response(
      JSON.stringify({
        connected: true,
        eventColors: data.event ?? {},
        calendarColors: data.calendar ?? {},
      }),
      { status: 200 }
    );
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
};