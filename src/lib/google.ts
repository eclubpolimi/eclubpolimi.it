export async function refreshAccessToken() {
    const client_id = process.env.GOOGLE_CLIENT_ID;
    const client_secret = process.env.GOOGLE_CLIENT_SECRET;
    const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
    if (!client_id || !client_secret || !refreshToken) throw new Error('Missing GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET or GOOGLE_REFRESH_TOKEN');

    const params = new URLSearchParams();
    params.set('client_id', client_id);
    params.set('client_secret', client_secret);
    params.set('refresh_token', refreshToken);
    params.set('grant_type', 'refresh_token');

    const res = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
    });
    if (!res.ok) {
        const txt = await res.text();
        throw new Error(`Failed refresh token: ${res.status} ${txt}`);
    }
    const data = await res.json();
    // data.access_token, expires_in
    return data;
}
