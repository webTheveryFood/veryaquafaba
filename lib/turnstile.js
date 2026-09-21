// Cloudflare Turnstile server-side check, shared by the API routes that accept forms.
// Fail-OPEN when the secret is not configured (loud warning) so a missing env var
// never takes a live form down. Same behaviour as app/api/contact/route.js.
export async function verifyTurnstile(token, ip, tag = 'turnstile') {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.warn(`[${tag}] WARNING: TURNSTILE_SECRET_KEY not set, captcha NOT verified`);
    return true;
  }
  if (!token) return false;
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, response: token, ...(ip ? { remoteip: ip } : {}) }),
    });
    const data = await res.json().catch(() => ({}));
    if (!data.success) console.warn(`[${tag}] turnstile rejected:`, JSON.stringify(data['error-codes'] || data));
    return !!data.success;
  } catch (err) {
    console.error(`[${tag}] turnstile verify error:`, err?.message || err);
    return false;
  }
}

export const clientIp = (request) =>
  (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || request.headers.get('x-real-ip') || undefined;
