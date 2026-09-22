import { TOPIC_SLUGS, topicRoute } from '../applications/routes.js';
import { whereToBuy } from '../applications/index.js';
import { RES_UI } from './ui.js';
import { TOPIC_TEXTS } from './texts/topics.js';

// Purchase route per country, exactly as the client set it (Arnaud, email of 28 August 2026,
// "Purchase URL for every country"): the United States and Germany on Amazon, France on
// InstantChef, and EVERY OTHER COUNTRY through the contact form. The distributors of the
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
};

export const STOCKISTS = CHANNELS;
export const COUNTRY_KEYS = Object.keys(TOPIC_SLUGS['where-to-buy']);
export const hasChannel = (key) => Boolean(CHANNELS[key]?.length);

// The block of a country page: the confirmed listings of that country when there are any,
// then the same technical sheet CTA and B2B enquiry form as the guides (country as the
// application). Without a confirmed listing the block is the form alone.
function stockistBlock(locale, key, text) {
  const S = RES_UI[locale].stockist;
  const items = CHANNELS[key] || [];
  return (contact, route) => {
    const base = whereToBuy(locale, null, contact, route, text.country);
    return {
      ...base,
      buy: null,
      title: (items.length ? S.title : S.titleForm).replace('{country}', text.country),
      labels: { channel: S.channel, formats: S.formats },
      items: items.map((c) => ({ label: c.label, href: c.href, formats: S[c.format] })),
      note: items.length ? S.note : S.noteForm,
    };
  };
}

// One page per (country, language of that country).
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
