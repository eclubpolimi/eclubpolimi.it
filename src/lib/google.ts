import fs from 'fs/promises';
import path from 'path';

const TOKEN_PATH = path.resolve('./data/google_tokens.json');

type StoredTokens = {
    refresh_token?: string;
    scope?: string;
    token_type?: string;
    expiry_date?: number;
};

export async function saveRefreshToken(refreshToken: string) {
    const data: StoredTokens = { refresh_token: refreshToken };
    await fs.mkdir(path.dirname(TOKEN_PATH), { recursive: true });
    await fs.writeFile(TOKEN_PATH, JSON.stringify(data, null, 2), 'utf8');
}

export async function readRefreshToken(): Promise<string | null> {
    try {
        const raw = await fs.readFile(TOKEN_PATH, 'utf8');
        const parsed = JSON.parse(raw) as StoredTokens;
        return parsed.refresh_token ?? null;
    } catch (e) {
        return null;
    }
}

export async function refreshAccessToken(refreshToken: string) {
    const client_id = process.env.GOOGLE_CLIENT_ID;
    const client_secret = process.env.GOOGLE_CLIENT_SECRET;
    if (!client_id || !client_secret) throw new Error('Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET');

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
