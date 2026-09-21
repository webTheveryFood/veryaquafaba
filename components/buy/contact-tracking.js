// Contact-form analytics: exactly ONE CONVERSION per server-confirmed submit.
// Interests travel inside the same event as sub_goals + boolean flags (panel
// rules are built on the flags), never as extra conversions.
export const FORM_ID = 'contact-form';

// Index of content.interests in every buy.<locale>.js: samples / technical sheets / other.
const SUB_GOALS = ['samples', 'technical-sheets', 'other'];

export function track(event, props) {
  try { window.an?.track(event, props); } catch { /* tracker missing or blocked */ }
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
