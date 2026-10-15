import { TOPIC_SLUGS, topicRoute } from '../applications/routes.js';
import { whereToBuy } from '../applications/index.js';
import { RES_UI } from './ui.js';
import { TOPIC_TEXTS } from './texts/topics.js';
import { COUNTRY_SHOPS } from '../applications/country-shops.js';

// Purchase route per country, exactly as the client set it (Arnaud, email of 28 August 2026,
// "Purchase URL for every country"): the United States and Germany on Amazon, France on
// InstantChef, and EVERY OTHER COUNTRY through the contact form. Arnaud added on 15 October 2026:
// Austria on Amazon Germany, Switzerland on Siradis and Canada on Qualifirst (Australia stays on the form). The distributors of the
// Products page carousel are partners, not a confirmed purchase route per country, so they
// are never presented here as the way to buy: no country claim we cannot back.

const CHANNELS = {
  'united-states': [
    { label: 'Amazon', href: 'https://www.amazon.com/dp/B0DH34RT6K', format: 'liquid_1l' },
    { label: 'Amazon', href: 'https://www.amazon.com/dp/B0H73834LS', format: 'cocktails' },
    { label: 'Amazon', href: 'https://www.amazon.com/dp/B0HF1PZY7F', format: 'pack4' },
  ],
  germany: [
    { label: 'Amazon', href: 'https://www.amazon.de/dp/B0DH34RT6K', format: 'liquid_1l' },
    { label: 'Amazon', href: 'https://www.amazon.de/dp/B0FZWKL5QJ', format: 'powder_200g' },
  ],
  // The client's note: Amazon replaces InstantChef in France later, which changes this entry only.
  france: [
    { label: 'Instantchef', href: 'https://instantchef.com/products/aquafaba-1l', format: 'liquid_1l' },
    { label: 'Instantchef', href: 'https://instantchef.com/products/very-aquafaba-poudre-200g', format: 'powder_200g' },
  ],
  austria: [
    { label: 'Amazon', href: 'https://www.amazon.de/dp/B0DH34RT6K', format: 'liquid_1l' },
    { label: 'Amazon', href: 'https://www.amazon.de/dp/B0FZWKL5QJ', format: 'powder_200g' },
  ],
  // Siradis lists the 200 g pouch; the link opens the shop until it has a product page of its own.
  switzerland: [{ label: 'Siradis', href: COUNTRY_SHOPS.CH.href, format: 'powder_200g' }],
  canada: [{ label: 'Qualifirst', href: COUNTRY_SHOPS.CA.href, format: 'range' }],
};

export const STOCKISTS = CHANNELS;
export const COUNTRY_KEYS = Object.keys(TOPIC_SLUGS['where-to-buy']);
export const hasChannel = (key) => Boolean(CHANNELS[key]?.length);

// The block of a country page: the confirmed listings of that country when there are any,
// then the same technical sheet CTA and B2B enquiry form as the guides (the application
// field starts empty: the visitor names it). Without a confirmed listing the block is the
// form alone. The listings are the country's, whatever the language of the page.
function stockistBlock(locale, key, text) {
  const S = RES_UI[locale].stockist;
  const items = CHANNELS[key] || [];
  return (contact, route) => {
    const base = whereToBuy(locale, null, contact, route, '');
    return {
      ...base,
      buy: null,
      title: (items.length ? S.title : S.titleForm).replace('{in_country}', text.inCountry),
      labels: { channel: S.channel, formats: S.formats },
      items: items.map((c) => ({ label: c.label, href: c.href, formats: S[c.format] })),
      // The note may carry one [label](href) link, written like the FAQ answers.
      note: (items.length ? text.note || S.note : S.noteForm).replace('{contact_href}', contact),
    };
  };
}

// One page per country and language (six countries in the four languages).
export function stockistPages(buildTopic, gramStyle) {
  const pages = [];
  for (const key of COUNTRY_KEYS) {
    for (const locale of Object.keys(TOPIC_SLUGS['where-to-buy'][key])) {
      const text = TOPIC_TEXTS['where-to-buy']?.[locale]?.[key];
      if (!text) continue;
      const page = buildTopic(locale, 'where-to-buy', key, text, {
        route: topicRoute(locale, 'where-to-buy', key),
        stockists: stockistBlock(locale, key, text),
      });
      pages.push([page.route, locale === 'en' && gramStyle ? gramStyle(page) : page]);
    }
  }
  return pages;
}
