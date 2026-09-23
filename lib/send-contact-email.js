// Origin marker reproduced from the WordPress/CF7 notification, keyed by the
// form locale so the recipient can tell which language version was used.
const LOCALE_MARK = {
  'en-GB': '(Site en version anglaise)',
  'de-DE': '(Site en version allemande)',
  'fr-FR': '(Site en version française)',
  'nl-NL': '(Site en version néerlandaise)',
};

// Auto-reply sent to the visitor, per locale. (Wording is editable.)
const CONFIRM = {
  'en-GB': {
    subject: 'We received your message — VERY AQUAFABA',
    body: (name) => `Hi ${name},\n\nThanks for reaching out to VERY AQUAFABA. We've received your message and will get back to you shortly.\n\n— VERY AQUAFABA`,
  },
  'de-DE': {
    subject: 'Wir haben Ihre Nachricht erhalten — VERY AQUAFABA',
    body: (name) => `Hallo ${name},\n\nvielen Dank für Ihre Nachricht an VERY AQUAFABA. Wir haben Ihre Anfrage erhalten und melden uns in Kürze bei Ihnen.\n\n— VERY AQUAFABA`,
  },
  'fr-FR': {
    subject: 'Nous avons bien reçu votre message — VERY AQUAFABA',
    body: (name) => `Bonjour ${name},\n\nMerci d'avoir contacté VERY AQUAFABA. Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.\n\n— VERY AQUAFABA`,
  },
  'nl-NL': {
    subject: 'We hebben je bericht ontvangen — VERY AQUAFABA',
    body: (name) => `Hallo ${name},\n\nBedankt voor je bericht aan VERY AQUAFABA. We hebben je aanvraag ontvangen en nemen spoedig contact met je op.\n\n— VERY AQUAFABA`,
  },
};

// Auto-reply to the B2B lead, per locale: it repeats what was asked (application and
// volume) so the sender has a record, and says what comes back. Same gate as the visitor
// confirmation. (Wording is editable.)
const ENQUIRY_CONFIRM = {
  'en-GB': {
    subject: 'We received your production enquiry - VERY AQUAFABA',
    body: ({ company, application, volume }) => `Hello ${company},\n\nThanks for your enquiry about VERY AQUAFABA.\n\nApplication: ${application}\nEstimated monthly volume: ${volume}\n\nWe answer with the formats that fit, the technical sheet and what is possible for your country. If anything changes in the meantime, reply to this email and it reaches the same person.\n\n- VERY AQUAFABA`,
  },
  'de-DE': {
    subject: 'Wir haben Ihre Anfrage erhalten - VERY AQUAFABA',
    body: ({ company, application, volume }) => `Hallo ${company},\n\nvielen Dank für Ihre Anfrage zu VERY AQUAFABA.\n\nAnwendung: ${application}\nGeschätztes Monatsvolumen: ${volume}\n\nWir antworten mit den passenden Formaten, dem technischen Datenblatt und dem, was für Ihr Land möglich ist. Wenn sich zwischenzeitlich etwas ändert, antworten Sie einfach auf diese E-Mail.\n\n- VERY AQUAFABA`,
  },
  'fr-FR': {
    subject: 'Nous avons bien reçu votre demande - VERY AQUAFABA',
    body: ({ company, application, volume }) => `Bonjour ${company},\n\nMerci pour votre demande concernant VERY AQUAFABA.\n\nApplication : ${application}\nVolume mensuel estimé : ${volume}\n\nNous répondons avec les formats adaptés, la fiche technique et ce qui est possible pour votre pays. Si quelque chose change entre-temps, répondez à cet e-mail et il arrive à la même personne.\n\n- VERY AQUAFABA`,
  },
  'nl-NL': {
    subject: 'We hebben uw aanvraag ontvangen - VERY AQUAFABA',
    body: ({ company, application, volume }) => `Hallo ${company},\n\nBedankt voor uw aanvraag over VERY AQUAFABA.\n\nToepassing: ${application}\nGeschat maandvolume: ${volume}\n\nWij antwoorden met de passende formaten, het technische blad en wat mogelijk is voor uw land. Verandert er intussen iets, antwoord dan op deze e-mail en die komt bij dezelfde persoon aan.\n\n- VERY AQUAFABA`,
  },
};

// True once a real (verified) sending domain is configured. With Resend's test
// domain (onboarding@resend.dev) you can only send to the account owner, so the
// visitor auto-reply must stay off until theveryfood.co is verified.
function hasVerifiedDomain() {
  const from = process.env.CONTACT_FROM || '';
  return from !== '' && !from.includes('resend.dev');
}

// POST to the Resend REST API. Raw fetch (not the SDK) with an explicit
// charset=utf-8 — the SDK omits it and Resend then mangles accents/"—".
async function postToResend(payload) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error('[contact] Resend API error:', res.status, JSON.stringify(data));
    throw new Error(data?.message || `Resend HTTP ${res.status}`);
  }
  return data;
}

// Notification to the business (required). Inputs are validated by the route.
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

  const data = await postToResend({
    from: `VERY AQUAFABA <${process.env.CONTACT_FROM}>`,
    to: process.env.CONTACT_TO,
    reply_to: email, // REST API uses snake_case
    subject,
    text,
  });
  console.log('[contact] Resend accepted id:', data?.id, '| from:', process.env.CONTACT_FROM, '| to:', process.env.CONTACT_TO);
  return data;
}

// Auto-reply to the visitor. Gated: only sends once a verified domain is set
// (test domain can't email arbitrary recipients). Non-fatal for the caller.
export async function sendVisitorConfirmation({ name, email, locale }) {
  if (!hasVerifiedDomain()) {
    console.log('[contact] visitor confirmation skipped (test domain — verify theveryfood.co to enable)');
    return null;
  }
  const c = CONFIRM[locale] || CONFIRM['en-GB'];
  const data = await postToResend({
    from: `VERY AQUAFABA <${process.env.CONTACT_FROM}>`,
    to: email,
    subject: c.subject,
    text: c.body(name),
  });
  console.log('[contact] visitor confirmation sent id:', data?.id, '→', email);
  return data;
}

// B2B production enquiry from an application guide (client request 2026-09-16).
// The source page is the lead's context: subject and body both carry it.
export async function sendEnquiryEmail({ company, country, email, application, volume, project, locale, sourcePath }) {
  const url = `https://veryaquafaba.com${sourcePath || ''}`;
  const mark = LOCALE_MARK[locale] || LOCALE_MARK['en-GB'];
  const text = [
    `Company: ${company}`,
    `Country: ${country}`,
    `Email: ${email}`,
    `Application: ${application}`,
    `Estimated monthly volume: ${volume}`,
    '',
    'Project description:',
    project,
    '',
    `Source page: ${url}`,
    '--',
    mark,
    `This is a B2B production enquiry submitted from an application guide on your website (VERY AQUAFABA ${url}).`,
  ].join('\n');
  const data = await postToResend({
    from: `VERY AQUAFABA <${process.env.CONTACT_FROM}>`,
    to: process.env.CONTACT_TO,
    reply_to: email,
    subject: `[B2B lead] ${application} (${country}) via ${sourcePath || 'application guide'}`,
    text,
  });
  console.log('[enquiry] Resend accepted id:', data?.id, '| source:', sourcePath);
  return data;
}

// Auto-reply to the B2B lead. Same gate as the visitor confirmation: it only sends once a
// verified domain is configured, because the Resend test domain can only reach the account
// owner. Non-fatal for the caller.
export async function sendEnquiryConfirmation({ company, email, application, volume, locale }) {
  if (!hasVerifiedDomain()) {
    console.log('[enquiry] lead confirmation skipped (test domain - verify theveryfood.co to enable)');
    return null;
  }
  const c = ENQUIRY_CONFIRM[locale] || ENQUIRY_CONFIRM['en-GB'];
  const data = await postToResend({
    from: `VERY AQUAFABA <${process.env.CONTACT_FROM}>`,
    to: email,
    reply_to: process.env.CONTACT_TO,
    subject: c.subject,
    text: c.body({ company, application, volume }),
  });
  console.log('[enquiry] lead confirmation sent id:', data?.id, '->', email);
  return data;
}
