// Outbound purchase links: tracking parameters, rel and click goal, configured centrally
// (client request 2026-09-16: parameters from day one, swappable later for Amazon's own
// tracking without touching any page).
//
// Amazon's own tracking is PER MARKETPLACE (an Associates or Attribution tag only works on
// its own Amazon), so there is one variable per marketplace, set in Vercel when the client
// gets the tag. Value = the querystring Amazon provides, without "?", e.g.
//   NEXT_PUBLIC_AMAZON_LINK_PARAMS_US="tag=<tag>"                                  (amazon.com, EN guides)
//   NEXT_PUBLIC_AMAZON_LINK_PARAMS_DE="maas=<...>&ref_=aa_maas&aa_campaignid=<...>" (amazon.de, DE guides + carousel)
// NEXT_PUBLIC_* are inlined at build time (redeploy after setting), so each one is
// referenced literally. Without a variable the guides carry the default UTM below and the
// partner carousel keeps its original link.
const DEFAULT_AMAZON_PARAMS = 'utm_source=veryaquafaba.com&utm_medium=referral&utm_campaign=application-guides';

const AMAZON_PARAMS = {
  us: process.env.NEXT_PUBLIC_AMAZON_LINK_PARAMS_US,
  de: process.env.NEXT_PUBLIC_AMAZON_LINK_PARAMS_DE,
};

// rel for paid/retail destinations (client: "sponsored nofollow"; noopener for target=_blank).
export const PURCHASE_REL = 'sponsored nofollow noopener';

function hostOf(href) {
  try { return new URL(href).hostname.replace(/^www\./, ''); } catch { return ''; }
}

// Amazon marketplace of a link: amazon.com = us, amazon.de = de, amazon.co.uk = uk, ...
function amazonMarket(href) {
  const m = hostOf(href).match(/^amazon\.(?:co\.)?([a-z.]+)$/);
  return m ? (m[1] === 'com' ? 'us' : m[1]) : null;
}

// Appends the marketplace's parameters to an Amazon URL, or `fallback` when that
// marketplace has none (the guides pass the default UTM, the carousel passes null).
// Other stockists are left untouched.
export function purchaseHref(href, fallback = DEFAULT_AMAZON_PARAMS) {
  const market = amazonMarket(href);
  const params = market && (AMAZON_PARAMS[market] || fallback);
  if (!params) return href;
  const url = new URL(href);
  for (const [k, v] of new URLSearchParams(params)) url.searchParams.set(k, v);
  return url.toString();
}

// Click goal per purchase destination, for every shop link on the site (guides, logo
// carousel): the snippet turns a click on an element with data-goal into a CONVERSION
// with that goal_key. Any Amazon marketplace (amazon-click-us, amazon-click-de, ...);
// InstantChef is the FR stockist. Other distributors arrive as OUTBOUND_CLICK.
export function purchaseGoal(href) {
  const market = amazonMarket(href);
  if (market) return `amazon-click-${market}`;
  return hostOf(href) === 'instantchef.com' ? 'stockist-click-fr' : null;
}
