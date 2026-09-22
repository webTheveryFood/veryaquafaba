import { pageRegistry } from '../../lib/page-registry';
import { getNativePage } from '../../data/native-pages';
import { contentSeoTitles } from '../../data/content-seo';

// /llms.txt (llmstxt.org): a curated, static map of the site for AI assistants,
// so answers about aquafaba formats cite veryaquafaba.com. Built from the same
// registry as the sitemap; the application guides carry their sourced answer
// sentence as description. Companion: /llms-full.txt (full text of the guides).
export const dynamic = 'force-static';

const SITE = 'https://veryaquafaba.com';
const LANG = { en: 'EN', de: 'DE', fr: 'FR', nl: 'NL' };
const strip = (html) => String(html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const clip = (s, n = 220) => (s.length > n ? `${s.slice(0, n - 1).replace(/\s+\S*$/, '')}…` : s);

function describe(page) {
  const native = getNativePage(page.route) || {};
  const title = native.seo?.title || contentSeoTitles[page.route] || native.hero?.title || page.route;
  const text = native.hero?.text || native.seo?.description || strip(native.sections?.[0]?.html || '');
  return { title: String(title).replace(/\s+-\s+VERY AQUAFABA$/, ''), description: clip(strip(text)) };
}

const line = (page) => {
  const { title, description } = describe(page);
  return `- [${title}](${SITE}${page.route}) (${LANG[page.locale]})${description ? `: ${description}` : ''}`;
};

export function GET() {
  const order = ['en', 'de', 'fr', 'nl'];
  const pub = pageRegistry
    .filter((p) => p.locale !== 'es' && p.type !== 'utility')
    .sort((a, b) => order.indexOf(a.locale) - order.indexOf(b.locale) || a.route.localeCompare(b.route));
  const by = (type) => pub.filter((p) => p.type === type);
  const out = [
    '# VERY AQUAFABA',
    '',
    '> VERY AQUAFABA (The Very Food Co., France) produces chickpea aquafaba for professionals in two formats: liquid (1 L Tetrapak, ready to pour, 1 L = 33 egg whites) and powder (200 g pouch, 200 g = 100 egg whites), plus a 1 T IBC for industry. Published equivalence: 30 g of liquid or 2 g of powder replace one egg white; 45 g of liquid replace one whole egg. Plant-based, egg-free, shelf-stable before opening; used for foaming (meringue, mousse, cocktails, macarons), emulsifying (mayonnaise) and binding (baking). Site in English, German, French and Dutch.',
    '',
    'Every figure on this site comes from the Products page or the recipe it is linked to, with the source and date shown on the page. Technical sheets and free samples are available through the contact form.',
    '',
    '## Products and formats',
    ...by('buy').map(line),
    '',
    '## Professional application guides: liquid or powder?',
    ...by('resources').map(line),
    ...by('application-index').map(line),
    ...by('application').map(line),
    '',
    '## Tools per application: quantity calculators and process sheets',
    ...by('application-child').map(line),
    '',
    '## Recipes and guides',
    ...by('recipe-index').map(line),
    ...by('recipe').map(line),
    '',
    '## About',
    ...[...by('home'), ...by('about')].map(line),
    '',
    '## Optional',
    ...by('legal').map(line),
    `- [Full text of the application guides](${SITE}/llms-full.txt)`,
    `- [Sitemap](${SITE}/sitemap.xml)`,
    '',
  ];
  return new Response(out.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
