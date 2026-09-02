import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Origin marker reproduced from the WordPress/CF7 notification, keyed by the
// form locale so the recipient can tell which language version was used.
const LOCALE_MARK = {
  'en-GB': '(Site en version anglaise)',
  'de-DE': '(Site en version allemande)',
  'fr-FR': '(Site en version française)',
  'nl-NL': '(Site en version néerlandaise)',
};

// Sends the contact-form notification via Resend.
// Inputs are already validated/sanitised by the route handler.
// IMPORTANT: the Resend SDK returns { data, error } and does NOT throw on API
// errors — we check `error` explicitly and throw so the caller returns 500.
export async function sendContactEmail({ name, email, interests, message, locale }) {
  const subject = interests.length ? interests.join(', ') : 'Nueva consulta — VERY AQUAFABA';
  const mark = LOCALE_MARK[locale] || LOCALE_MARK['en-GB'];

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    'Message Body:',
    message,
    '',
    '--',
    mark,
    'This is a notification that a contact form was submitted on your website (VERY AQUAFABA https://veryaquafaba.com).',
  ].join('\n');

  const { data, error } = await resend.emails.send({
    from: `VERY AQUAFABA <${process.env.CONTACT_FROM}>`,
    to: process.env.CONTACT_TO,
    replyTo: email,
    subject,
    text,
  });

  if (error) throw new Error(error.message || 'Resend email failed');
  return data;
}
