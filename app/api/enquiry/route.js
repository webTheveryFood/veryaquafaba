import { sendEnquiryEmail, sendEnquiryConfirmation } from '../../../lib/send-contact-email';
import { verifyTurnstile, clientIp } from '../../../lib/turnstile';

// B2B production enquiry from the application guides ("Discuss your production needs").
// The source page is part of the lead (client request 2026-09-16): it travels in the
// payload, is validated as a site path and is written into the notification.
export const runtime = 'nodejs';

const LOCALES = ['en-GB', 'de-DE', 'fr-FR', 'nl-NL'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FIELDS = [
  ['company', 200], ['country', 100], ['email', 200], ['application', 200], ['volume', 200], ['project', 3000],
];

const line = (s) => String(s ?? '').replace(/[\r\n]+/g, ' ').trim();
const bad = (error) => Response.json({ ok: false, error }, { status: 400 });

export async function POST(request) {
  let body;
  try { body = await request.json(); } catch { return bad('invalid_json'); }
  if (!body || typeof body !== 'object') return bad('invalid_body');

  const data = {};
  for (const [key, max] of FIELDS) {
    const raw = typeof body[key] === 'string' ? body[key].trim() : '';
    if (!raw || raw.length > max) return bad(`invalid_${key}`);
    data[key] = key === 'project' ? raw : line(raw);
  }
  if (!EMAIL_RE.test(data.email)) return bad('invalid_email');
  if (!LOCALES.includes(body.locale)) return bad('invalid_locale');

  // Exact application page the form was submitted from (e.g. /de/anwendungen/baiser/).
  let sourcePath = typeof body.sourcePath === 'string' ? line(body.sourcePath) : '';
  if (!/^\/[a-z0-9\-/]*$/i.test(sourcePath) || sourcePath.length > 200) return bad('invalid_source');

  const token = typeof body.turnstileToken === 'string' ? body.turnstileToken : '';
  if (process.env.TURNSTILE_SECRET_KEY && !token) return bad('missing_captcha');
  if (!(await verifyTurnstile(token, clientIp(request), 'enquiry'))) {
    return Response.json({ ok: false, error: 'captcha_failed' }, { status: 403 });
  }

  try {
    const result = await sendEnquiryEmail({ ...data, locale: body.locale, sourcePath });

    // Auto-reply to the lead - non-fatal (only fires once a verified domain is set).
    try {
      await sendEnquiryConfirmation({ ...data, locale: body.locale });
    } catch (err) {
      console.error('[enquiry] lead confirmation failed (non-fatal):', err?.message || err);
    }

    return Response.json({ ok: true, id: result?.id });
  } catch (err) {
    console.error('[enquiry] send FAILED:', err?.message || err);
    return Response.json({ ok: false, error: 'send_failed' }, { status: 500 });
  }
}
