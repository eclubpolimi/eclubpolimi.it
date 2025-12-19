export async function refreshAccessToken(refreshTokenArg?: string) {
    const client_id = process.env.GOOGLE_CLIENT_ID;
    const client_secret = process.env.GOOGLE_CLIENT_SECRET;
    const refreshToken = refreshTokenArg || process.env.GOOGLE_REFRESH_TOKEN;
    if (!client_id || !client_secret || !refreshToken) throw new Error('Missing GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET or refresh token');

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

export async function saveRefreshToken(refreshToken: string) {
    // In a production environment, you would store this securely
    // For now, this is a placeholder that logs the token
    // The actual implementation depends on your infrastructure
    console.log('Refresh token received (should be stored securely):', refreshToken.substring(0, 20) + '...');

    // If you need to store this persistently, consider:
    // 1. Database storage (recommended for production)
    // 2. File system (if using a persistent volume)
    // 3. Environment variable update (requires restart)

    return { success: true };
}

export async function readRefreshToken(): Promise<string | null> {
    // Prefer an env var (set in deployment). Return null if not available.
    const token = process.env.GOOGLE_REFRESH_TOKEN ?? null;
    return token;
}
