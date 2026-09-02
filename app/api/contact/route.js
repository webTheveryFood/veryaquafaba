import { sendContactEmail } from '../../../lib/send-contact-email';

export const runtime = 'nodejs';

const LOCALES = ['en-GB', 'de-DE', 'fr-FR', 'nl-NL'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const stripCrlf = (s) => String(s).replace(/[\r\n]+/g, ' ').trim();
const bad = (error) => Response.json({ ok: false, error }, { status: 400 });

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return bad('invalid_json');
  }
  if (!body || typeof body !== 'object') return bad('invalid_body');

  // Honeypot: a filled `vf_hp` field means a bot — pretend success, send nothing.
  // (Named to avoid browser autofill, which would false-positive a real user.)
  if (typeof body.vf_hp === 'string' && body.vf_hp.trim() !== '') {
    return Response.json({ ok: true });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const { locale } = body;

  if (!name || name.length > 400) return bad('invalid_name');
  if (!email || email.length > 400 || !EMAIL_RE.test(email)) return bad('invalid_email');
  if (!message || message.length > 2000) return bad('invalid_message');
  if (!LOCALES.includes(locale)) return bad('invalid_locale');

  const rawInterests = Array.isArray(body.interests) ? body.interests : [];
  if (rawInterests.length > 10) return bad('invalid_interests');
  if (!rawInterests.every((i) => typeof i === 'string' && i.length <= 150)) return bad('invalid_interests');
  const interests = rawInterests.map(stripCrlf).filter(Boolean);

  try {
    await sendContactEmail({
      name: stripCrlf(name),
      email: stripCrlf(email),
      interests,
      message, // body text — newlines preserved
      locale,
    });
  } catch (err) {
    console.error('contact send failed:', err?.message || err);
    return Response.json({ ok: false, error: 'send_failed' }, { status: 500 });
  }

  return Response.json({ ok: true });
}
