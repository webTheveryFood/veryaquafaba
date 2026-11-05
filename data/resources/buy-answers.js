import facts from '../applications/facts.json';
import { PACK_LABELS, RANGE_WORDS, LOCALE_TAGS } from '../applications/ui.js';

// The short answer block at the top of the Products pages and of the where to buy directories (EN/FR/DE, November
// 2026): can I buy aquafaba on its own, how long it keeps, which format, which countries, how fast we reply. Every
// figure comes from the facts file. Arnaud, 27 October 2026: every country is served through distributors, the reply
// comes within two working days, and of shipping only that powder is cheaper to send than liquid, with no figures.
// `unopened: false` on the Products pages: their technical block still says "6-24 months" (flagged to the client), so
// the block gives the opened life only and never prints a second unopened figure on the same page.

const n = (locale, v) => Number(v).toLocaleString(LOCALE_TAGS[locale]);
const range = (locale, [a, b]) => `${n(locale, a)} ${RANGE_WORDS[locale]} ${n(locale, b)}`;

function facts_(locale) {
  const { shelf_life: s, powder_reconstitution: r, packs } = facts.shared;
  const grams = (id) => packs.find((p) => p.id === id).egg_whites * r.egg_white_powder_g;
  const L = PACK_LABELS[locale];
  return {
    months: n(locale, s.unopened_months),
    days: range(locale, s.liquid_opened_days),
    temp: range(locale, s.liquid_opened_temp_c),
    powder: n(locale, r.egg_white_powder_g),
    water: n(locale, r.egg_white_water_ml),
    p30: n(locale, grams('powder_30g')),
    p200: n(locale, grams('powder_200g')),
    p3: n(locale, grams('powder_3kg') / 1000),
    l1: L.liquid_1l,
    l10: L.bib_10l.replace('Bag-in-box', 'bag-in-box'),
    t1: L.ibc_1t,
  };
}

const COPY = {
  en: (f, unopened, href) => ({
    title: 'Before you order',
    items: [
      ['Can I buy aquafaba on its own?', `Yes. VERY AQUAFABA sells aquafaba itself: liquid in a ${f.l1}, a ${f.l10} or a ${f.t1}, and powder in ${f.p30} g, ${f.p200} g or ${f.p3} kg pouches.`],
      ['How long does it keep?', `${unopened ? `Unopened, both formats keep at least ${f.months} months at room temperature. ` : ''}Opened, the liquid keeps ${f.days} days at ${f.temp} °C. The powder, kept dry and closed, keeps until the best-before date on the pouch.`],
      ['Should I buy liquid or powder?', `The liquid if you get through an opened pack in ${f.days} days, the powder if you don't: you make up only what each batch needs, ${f.powder} g with ${f.water} ml of water per egg white. Powder is also cheaper to ship than liquid.`],
      ['Do you deliver to my country?', `Every country is served through our distributors. <a href="${href}">Send us an enquiry</a> and we reply within two working days.`],
    ],
  }),
  fr: (f, unopened, href) => ({
    title: 'Avant de commander',
    items: [
      ['Puis-je acheter l’aquafaba seul, sans les pois chiches ?', `Oui. VERY AQUAFABA vend l’aquafaba tel quel : liquide en ${f.l1}, en ${f.l10} ou en ${f.t1}, et en poudre en sachets de ${f.p30} g, ${f.p200} g ou ${f.p3} kg.`],
      ['Combien de temps se conserve-t-il ?', `${unopened ? `Fermés, les deux formats se gardent au moins ${f.months} mois à température ambiante. ` : ''}Ouvert, le liquide se conserve ${f.days} jours à ${f.temp} °C. Au sec et bien fermée, la poudre se garde jusqu’à la date de durabilité minimale indiquée sur le sachet.`],
      ['Dois-je prendre le liquide ou la poudre ?', `Le liquide si vous terminez un emballage entamé en ${f.days} jours, la poudre sinon : vous reconstituez juste ce que demande chaque préparation, ${f.powder} g de poudre avec ${f.water} ml d’eau par blanc d’œuf. La poudre coûte aussi moins cher à expédier que le liquide.`],
      ['Livrez-vous dans mon pays ?', `Tous les pays sont servis par nos distributeurs. <a href="${href}">Envoyez-nous votre demande</a> : nous répondons sous deux jours ouvrés.`],
    ],
  }),
  de: (f, unopened, href) => ({
    title: 'Bevor Sie bestellen',
    items: [
      ['Kann ich Aquafaba direkt kaufen?', `Ja. VERY AQUAFABA gibt es flüssig im ${f.l1}, in der ${f.l10} oder im ${f.t1} und als Pulver in Beuteln mit ${f.p30} g, ${f.p200} g oder ${f.p3} kg.`],
      ['Wie lange ist es haltbar?', `${unopened ? `Ungeöffnet sind beide Formen mindestens ${f.months} Monate bei Raumtemperatur haltbar. ` : ''}Geöffnet hält die Flüssigkeit ${f.days} Tage bei ${f.temp} °C. Trocken und verschlossen hält das Pulver bis zum Mindesthaltbarkeitsdatum auf dem Beutel.`],
      ['Soll ich flüssig oder Pulver nehmen?', `Flüssig, wenn Sie eine geöffnete Packung in ${f.days} Tagen aufbrauchen, sonst das Pulver: Sie rühren nur an, was der Ansatz braucht, ${f.powder} g mit ${f.water} ml Wasser je Eiweiß. Pulver ist außerdem günstiger im Versand als Flüssigkeit.`],
      ['Liefern Sie in mein Land?', `Alle Länder werden über unsere Vertriebspartner beliefert. <a href="${href}">Senden Sie uns Ihre Anfrage</a>, wir antworten innerhalb von zwei Werktagen.`],
    ],
  }),
};

// { title, items: [{ q, a }] }, a in HTML (one link to the form of the page); null for a language without the block.
export function buyAnswers(locale, { unopened = true, href = '#contact' } = {}) {
  const make = COPY[locale];
  if (!make) return null;
  const { title, items } = make(facts_(locale), unopened, href);
  // English house style, as gramStyle does for the guides: 1L, 200g, 1T IBC (ml and °C keep their space).
  const style = (t) => (locale === 'en' ? t.replace(/(\d) (kg|g|L)\b/g, '$1$2').replace(/(\d) T IBC/g, '$1T IBC') : t);
  // A number never ends a line apart from its unit (2 to 6 °C, 30 ml, 200 g).
  const keep = (t) => t.replace(/(\d) (°C|ml|kg|g|L|T)\b/g, '$1\u00a0$2').replace(/(\d) °C/g, '$1\u00a0°C');
  // French punctuation keeps its space before : and ? on the same line.
  const fr = (t) => (locale === 'fr' ? t.replace(/ ([:?])/g, '\u00a0$1') : t);
  return { title, items: items.map(([q, a]) => ({ q: fr(q), a: fr(keep(style(a))) })) };
}

// The Products pages show it in their own FAQ style, with the page's Q/A prefixes (components/buy/ProductFaq.jsx).
const PREFIX = { en: ['Q: ', 'A: '], fr: ['Q : ', 'R : '], de: ['F: ', 'A: '] };
export function buyAnswersFaq(locale) {
  const block = buyAnswers(locale, { unopened: false, href: '#contact' });
  if (!block) return null;
  const [q, a] = PREFIX[locale];
  return { title: block.title, items: block.items.map((i) => ({ question: q + i.q, answerHtml: a + i.a })) };
}

// The same answers as the first section of a where to buy directory (rich text of the resource pages).
export function buyAnswersSection(locale) {
  const block = buyAnswers(locale, { href: '#enquiry-form' });
  return {
    id: 'before-you-order',
    title: block.title,
    html: block.items.map(({ q, a }) => `<p><strong>${q}</strong> ${a}</p>`).join('\n'),
  };
}
