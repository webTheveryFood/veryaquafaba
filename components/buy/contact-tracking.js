// Contact-form analytics: exactly ONE CONVERSION per server-confirmed submit.
// Interests travel inside the same event as sub_goals + boolean flags (panel
// rules are built on the flags), never as extra conversions.
export const FORM_ID = 'contact-form';

// Index of content.interests in every buy.<locale>.js: samples / technical sheets / other.
const SUB_GOALS = ['samples', 'technical-sheets', 'other'];

// A conversion also goes to GA4 as an event named after its goal (contact-form-success → contact_form_success), so it
// can be marked as a key event there: until November 2026 GA4 got none and showed zero conversions while ours counted
// them. window.gtag only exists in production (the root layout's loader).
export const ga4Name = (goal) => String(goal).replace(/[^a-zA-Z0-9_]/g, '_').slice(0, 40);

export function track(event, props) {
  try { window.an?.track(event, props); } catch { /* tracker missing or blocked */ }
  if (event === 'CONVERSION' && props?.goal_key) {
    try { window.gtag?.('event', ga4Name(props.goal_key), { form_id: props.form_id, intent: props.props?.intent, lang: props.props?.lang }); } catch { /* GA4 missing or blocked */ }
  }
}

// The Products form's `props` (measurement brief, 13 October 2026): what was asked for comes from
// the samples / technical sheets button that led to the form (recorded in sessionStorage by the
// root layout), else from the ticked interests, else "contact"; the form lives on the page, outside
// the CTA dialog.
export function withProps(conversion, locale) {
  let intent = null;
  try { intent = sessionStorage.getItem('cta-intent'); sessionStorage.removeItem('cta-intent'); } catch { /* storage blocked */ }
  if (!['samples', 'technical-sheets'].includes(intent)) intent = conversion.samples ? 'samples' : conversion.technical_sheets ? 'technical-sheets' : 'contact';
  return { ...conversion, props: { intent, route: 'none', origin: 'page', lang: String(locale).slice(0, 2) } };
}

export function buildConversion(interests, allInterests, locale) {
  const sub_goals = allInterests
    .map((label, i) => (interests.includes(label) ? SUB_GOALS[i] : null))
    .filter(Boolean);
  return {
    goal_key: 'contact-form-success',
    form_id: FORM_ID,
    locale,
    sub_goals,
    samples: sub_goals.includes('samples'),
    technical_sheets: sub_goals.includes('technical-sheets'),
    other: sub_goals.includes('other'),
  };
}
