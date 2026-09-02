// Origin marker reproduced from the WordPress/CF7 notification, keyed by the
// form locale so the recipient can tell which language version was used.
const LOCALE_MARK = {
  'en-GB': '(Site en version anglaise)',
  'de-DE': '(Site en version allemande)',
  'fr-FR': '(Site en version française)',
  'nl-NL': '(Site en version néerlandaise)',
};

// Sends the contact-form notification via the Resend REST API.
// Uses a raw fetch (not the SDK) with an explicit `charset=utf-8` — the SDK
// omits the charset and Resend then mis-decodes UTF-8 as Latin-1, turning "—"
// and accents (é, ç, …) into mojibake. Inputs are validated by the route.
export async function sendContactEmail({ name, email, interests, message, locale, path }) {
  const subject = interests.length ? interests.join(', ') : 'Nueva consulta — VERY AQUAFABA';
  const mark = LOCALE_MARK[locale] || LOCALE_MARK['en-GB'];
  const url = `https://veryaquafaba.com${path || ''}`;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Interest: ${interests.length ? interests.join(', ') : '—'}`,
    '',
    'Message Body:',
    message,
    '',
    '--',
    mark,
    `This is a notification that a contact form was submitted on your website (VERY AQUAFABA ${url}).`,
  ].join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({
      from: `VERY AQUAFABA <${process.env.CONTACT_FROM}>`,
      to: process.env.CONTACT_TO,
      reply_to: email, // REST API uses snake_case
      subject,
      text,
    }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error('[contact] Resend API error:', res.status, JSON.stringify(data));
    throw new Error(data?.message || `Resend HTTP ${res.status}`);
  }
  console.log('[contact] Resend accepted id:', data?.id, '| from:', process.env.CONTACT_FROM, '| to:', process.env.CONTACT_TO);
  return data;
}
