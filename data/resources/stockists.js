import { distributionPartners } from '../distribution-partners.js';
import { WHERE_TO_BUY } from '../applications/ui.js';
import { TOPIC_SLUGS, topicRoute } from '../applications/routes.js';
import { whereToBuy } from '../applications/index.js';
import { RES_UI } from './ui.js';
import { TOPIC_TEXTS } from './texts/topics.js';

// Where to buy, by country (set-2 exit). A country page exists only where a real channel is
// recorded: the partners of the Products page carousel (data/distribution-partners.js), the
// Amazon listings of the purchase block (data/applications/ui.js) and the Swiss retailer
// siradis.ch, which links to the site and carries the product in its own listing. No price,
// no stock: those belong to the distributor. A country without a channel gets no page.

const PARTNERS = Object.fromEntries(distributionPartners.map((p) => [p.label, p.href]));
const SIRADIS = 'https://www.siradis.ch/';

// format keys are translated by RES_UI[locale].stockist; the URL of each listing is what
// says which format it carries (aquafaba-1l, AQUA1L, the cocktail ASIN).
const CHANNELS = {
  'united-states': [
    { label: 'Amazon', href: WHERE_TO_BUY.en.buy, format: 'liquid_1l' },
    { label: 'Amazon', href: WHERE_TO_BUY.en.overrides.cocktails, format: 'cocktails' },
  ],
  canada: [{ label: 'Qualifirst', href: PARTNERS.Qualifirst, format: 'liquid_1l' }],
  australia: [{ label: 'Apromo Trading', href: PARTNERS.Apromo, format: 'liquid_1l' }],
  sweden: [{ label: 'Chokladhuset', href: PARTNERS.Chokladhuset, format: 'liquid_1l' }],
  france: [
    { label: 'Instantchef', href: PARTNERS.Instantchef, format: 'liquid_1l' },
    { label: 'Maison Medelys', href: PARTNERS['Maison-Medelys'], format: 'liquid_1l' },
    { label: 'Ankorstore', href: PARTNERS.Ankorstore, format: 'liquid_1l' },
    { label: 'The Cocktailist', href: PARTNERS['The-cocktailist'], format: 'cocktails' },
    { label: 'JMillet', href: PARTNERS.JMillet, format: 'range' },
    { label: 'Vitodistribution', href: PARTNERS.Vitodistribution, format: 'range' },
  ],
  belgium: [
    { label: 'Botanica', href: PARTNERS.Botanica, format: 'liquid_1l' },
    { label: 'Horeca Totaal', href: PARTNERS['Horeca-Totaal'], format: 'range' },
  ],
  luxembourg: [{ label: 'Provencale', href: PARTNERS.Provencale, format: 'liquid_1l' }],
  switzerland: [{ label: 'Siradis', href: SIRADIS, format: 'range' }],
  germany: [
    { label: 'Amazon', href: WHERE_TO_BUY.de.buy, format: 'liquid_1l' },
    { label: 'Baba Gourmet', href: PARTNERS['Baba-Gourmet'], format: 'range' },
  ],
};

export const STOCKISTS = CHANNELS;
export const COUNTRY_KEYS = Object.keys(CHANNELS);
// Countries listed on the directory page of one language, in the order above.
export const countriesFor = (locale) => COUNTRY_KEYS.filter((key) => TOPIC_SLUGS['where-to-buy'][key][locale]);

// The block of a country page: the channels of that country, then the same technical sheet
// CTA and B2B enquiry form as the purchase block of the guides (country as the application).
function stockistBlock(locale, key, text) {
  const S = RES_UI[locale].stockist;
  return (contact, route) => {
    const base = whereToBuy(locale, null, contact, route, text.country);
    return {
      ...base,
      buy: null,
      title: S.title.replace('{country}', text.country),
      labels: { channel: S.channel, formats: S.formats },
      items: CHANNELS[key].map((c) => ({ label: c.label, href: c.href, formats: S[c.format] })),
      note: S.note,
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
