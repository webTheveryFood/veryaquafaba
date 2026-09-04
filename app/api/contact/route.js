import { sendContactEmail, sendVisitorConfirmation } from '../../../lib/send-contact-email';

export const runtime = 'nodejs';

const LOCALES = ['en-GB', 'de-DE', 'fr-FR', 'nl-NL'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const stripCrlf = (s) => String(s).replace(/[\r\n]+/g, ' ').trim();
const bad = (error) => {
  console.warn('[contact] 400 invalid:', error);
  return Response.json({ ok: false, error }, { status: 400 });
};

// Cloudflare Turnstile server-side check. Fail-OPEN when the secret isn't
// configured (loud warning) so a missing env var never takes the live form down.
async function verifyTurnstile(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.warn('[contact] WARNING: TURNSTILE_SECRET_KEY not set — captcha NOT verified, form is unprotected');
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
    if (!data.success) console.warn('[contact] turnstile rejected:', JSON.stringify(data['error-codes'] || data));
    return !!data.success;
  } catch (err) {
    console.error('[contact] turnstile verify error:', err?.message || err);
    return false;
  }
}

export async function POST(request) {
  console.log('[contact] --- POST /api/contact received ---');
  console.log('[contact] env:', {
    hasKey: !!process.env.RESEND_API_KEY,
    from: process.env.CONTACT_FROM || '(unset)',
    to: process.env.CONTACT_TO || '(unset)',
  });

  let body;
  try {
    body = await request.json();
  } catch {
    return bad('invalid_json');
  }
  if (!body || typeof body !== 'object') return bad('invalid_body');

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const { locale } = body;
  console.log('[contact] input:', {
    name: name || '(empty)',
    email: email || '(empty)',
    locale,
    interests: Array.isArray(body.interests) ? body.interests.length : 'not-array',
    messageLen: message.length,
  });

  if (!name || name.length > 400) return bad('invalid_name');
  if (!email || email.length > 400 || !EMAIL_RE.test(email)) return bad('invalid_email');
  if (!message || message.length > 2000) return bad('invalid_message');
  if (!LOCALES.includes(locale)) return bad('invalid_locale');

  const rawInterests = Array.isArray(body.interests) ? body.interests : [];
  if (rawInterests.length > 10) return bad('invalid_interests');
  if (!rawInterests.every((i) => typeof i === 'string' && i.length <= 150)) return bad('invalid_interests');
  const interests = rawInterests.map(stripCrlf).filter(Boolean);

  // Exact page the form was submitted from (e.g. /nl/aquafaba-kopen/).
  let path = typeof body.path === 'string' ? stripCrlf(body.path) : '';
  if (!path.startsWith('/') || path.length > 200) path = '';

  // Anti-spam: Cloudflare Turnstile token (required only when the secret is configured).
  const turnstileToken = typeof body.turnstileToken === 'string' ? body.turnstileToken : '';
  if (process.env.TURNSTILE_SECRET_KEY && !turnstileToken) return bad('missing_captcha');
  const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || request.headers.get('x-real-ip') || undefined;
  if (!(await verifyTurnstile(turnstileToken, ip))) {
    return Response.json({ ok: false, error: 'captcha_failed' }, { status: 403 });
  }

  try {
    const result = await sendContactEmail({
      name: stripCrlf(name),
      email: stripCrlf(email),
      interests,
      message, // body text — newlines preserved
      locale,
      path,
    });
    console.log('[contact] ✅ sent OK — Resend id:', result?.id, '→ to:', process.env.CONTACT_TO);

    // Auto-reply to the visitor — non-fatal (only fires once a verified domain is set).
    try {
      await sendVisitorConfirmation({ name: stripCrlf(name), email: stripCrlf(email), locale });
    } catch (err) {
      console.error('[contact] visitor confirmation failed (non-fatal):', err?.message || err);
    }

    return Response.json({ ok: true, id: result?.id });
  } catch (err) {
    console.error('[contact] ❌ send FAILED:', err?.message || err);
    return Response.json({ ok: false, error: 'send_failed' }, { status: 500 });
  }
}
