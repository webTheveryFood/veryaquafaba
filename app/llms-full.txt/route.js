import { applicationPages } from '../../data/applications';

// /llms-full.txt: the full, citable text of the 24 application guides (answer
// sentence with sourced figures, key figures, packs, FAQ, source line, date),
// in the four languages. Same data as the HTML pages; nothing is generated here.
export const dynamic = 'force-static';

const SITE = 'https://veryaquafaba.com';
const strip = (html) => String(html || '').replace(/<\/(p|li)>/g, '\n').replace(/<[^>]+>/g, '').replace(/[ \t]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim();

function guide(page) {
  const out = [
    `# ${page.hero.title}`,
    `URL: ${SITE}${page.route}`,
    `Language: ${page.locale}`,
    `${page.updatedLabel}: ${page.updated}`,
    '',
    page.hero.text,
    '',
    `## ${page.figures.title}`,
    ...page.figures.rows.map((r) => `- ${r.label}: ${r.value}`),
    `${page.figures.source.label}: ${page.figures.source.text} (${page.figures.source.period})`,
    '',
    `## ${page.packs.title}`,
    ...page.packs.items.map((r) => `- ${r.label} ${r.value}`),
  ];
  for (const s of page.sections) out.push('', `## ${s.title}`, strip(s.html));
  if (page.faq.items.length) {
    out.push('', `## ${page.faq.title}`);
    for (const f of page.faq.items) out.push(`Q: ${f.q}`, `A: ${f.a}`, '');
  }
  out.push(`Related: ${page.related.items.map((i) => `${i.label} ${SITE}${i.href}`).join(' | ')}`, '', '---', '');
  return out;
}

export function GET() {
  const pages = Object.values(applicationPages);
  const out = [
    '# VERY AQUAFABA: professional application guides (full text)',
    '',
    `Source site: ${SITE} (index: ${SITE}/llms.txt). Chickpea aquafaba in liquid (1 L Tetrapak) and powder (200 g pouch) formats; 30 g of liquid or 2 g of powder replace one egg white. Figures below come from the Products page and the linked recipes, with the source and date on each guide.`,
    '',
    ...pages.flatMap(guide),
  ];
  return new Response(out.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
