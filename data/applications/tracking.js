// Outbound purchase links: tracking parameters and rel, configured centrally (client
// request 2026-09-16: parameters from day one, swappable later for Amazon Attribution
// tags without touching any page).
//
// NEXT_PUBLIC_AMAZON_LINK_PARAMS: querystring appended to every amazon.* link, e.g.
//   "tag=veryaquafaba-20"                       (Associates)
//   "maas=maas_adg_...&ref_=aa_maas&aa_campaignid=..."  (Amazon Attribution, later)
// Default (no env): UTM parameters that identify the site as the referrer.
const DEFAULT_AMAZON_PARAMS = 'utm_source=veryaquafaba.com&utm_medium=referral&utm_campaign=application-guides';

export const AMAZON_LINK_PARAMS = process.env.NEXT_PUBLIC_AMAZON_LINK_PARAMS || DEFAULT_AMAZON_PARAMS;

// rel for paid/retail destinations (client: "sponsored nofollow"; noopener for target=_blank).
export const PURCHASE_REL = 'sponsored nofollow noopener';

const isAmazon = (href) => /^https?:\/\/(www\.)?amazon\./i.test(href);

// Appends the central parameters to Amazon URLs (other stockists are left untouched).
export function purchaseHref(href) {
  if (!href || !isAmazon(href) || !AMAZON_LINK_PARAMS) return href;
  const url = new URL(href);
  for (const [k, v] of new URLSearchParams(AMAZON_LINK_PARAMS)) url.searchParams.set(k, v);
  return url.toString();
}

// Click goal per purchase destination, for every shop link on the site (guides, logo
// carousel): the snippet turns a click on an element with data-goal into a CONVERSION
// with that goal_key. Any Amazon marketplace (amazon.com = us, amazon.de = de, ...);
// InstantChef is the FR stockist. Other distributors arrive as OUTBOUND_CLICK.
export function purchaseGoal(href) {
  let host = '';
  try { host = new URL(href).hostname.replace(/^www./, ''); } catch { return null; }
  const amazon = host.match(/^amazon.(?:co.)?([a-z.]+)$/);
  if (amazon) return `amazon-click-${amazon[1] === 'com' ? 'us' : amazon[1]}`;
  return host === 'instantchef.com' ? 'stockist-click-fr' : null;
}
