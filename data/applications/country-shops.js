// Where a home buyer goes, per visitor country: Arnaud's emails of 28 August 2026 (Amazon in the
// United States and Germany, InstantChef in France) and 15 October 2026 (Austria on Amazon
// Germany, Canada on Qualifirst, Switzerland on Siradis). Every other country, Australia
// included, goes to the contact form. Shared by the CTA dialog and the partner carousel's
// Amazon logo, so the plain module stays small enough for the client bundle.
const AMAZON_DE = 'https://www.amazon.de/dp/B0DH34RT6K';

export const COUNTRY_SHOPS = {
  US: { name: 'Amazon', href: 'https://www.amazon.com/dp/B0DH34RT6K' },
  DE: { name: 'Amazon', href: AMAZON_DE },
  AT: { name: 'Amazon', href: AMAZON_DE },
  CH: { name: 'Siradis', href: 'https://www.siradis.ch/' }, // ponytail: the shop's home until Siradis lists the product page
  FR: { name: 'InstantChef', href: 'https://instantchef.com/products/aquafaba-1l' },
  CA: { name: 'Qualifirst', href: 'https://www.qualifirst.com/fr_CA/food/preserving_and_balancing_agents/vegan-egg-white-substitute-l-28440' },
};
