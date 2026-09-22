import { applicationPages } from '../../data/applications';
import { applicationChildPages } from '../../data/resources/children';

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
    ...page.figures.groups.flatMap((g) => [`### ${g.title}`, ...g.rows.map((r) => `- ${r.label}: ${r.value}`)]),
    `${page.figures.source.label}: ${page.figures.source.text} (${page.figures.source.period})`,
    '',
    `## ${page.packs.title}`,
    ...page.packs.groups.flatMap((g) => [`### ${g.title}`, ...g.rows.map((r) => `- ${r.label} ${r.value}`)]),
  ];
  if (page.storage?.groups?.some((g) => g.rows.length)) {
    out.push('', `## ${page.storage.title}`, ...page.storage.groups.flatMap((g) => [`### ${g.title}`, ...g.rows.map((r) => `- ${r.label}: ${r.value}`)]), `${page.storage.source.label}: ${page.storage.source.text} (${page.storage.source.period})`);
  }
  for (const s of page.sections) out.push('', `## ${s.title}`, strip(s.html));
  if (page.faq.items.length) {
    out.push('', `## ${page.faq.title}`);
    for (const f of page.faq.items) out.push(`Q: ${f.q}`, `A: ${f.a}`, '');
  }
  out.push(`Related: ${page.related.items.map((i) => `${i.label} ${SITE}${i.href}`).join(' | ')}`, '', '---', '');
  return out;
}

// Set-2 children: the calculator's reference batch or the sheet's steps and checks, then the copy.
function child(page) {
  const t = page.tool;
  const out = [`# ${page.hero.title}`, `URL: ${SITE}${page.route}`, `Language: ${page.locale}`, `${page.updatedLabel}: ${page.updated}`, '', page.hero.text, ''];
  if (t.kind === 'substitution') {
    const p = t.per;
    out.push(`## ${t.labels.subTitle}`, `- ${t.labels.eggs}: ${p.egg} g`, `- ${t.labels.whites}: ${p.white} g`, `- ${t.labels.yolks}: ${p.yolk} g + ${p.yolkOil} g ${t.labels.oilYolks}`, `- ${t.labels.powder}: ${p.powderPerG * p.white} g / ${p.white} g`);
  } else if (t.kind === 'calculator') {
    const r = t.reference;
    out.push(`## ${t.labels.title}`, `- ${t.labels.liquid}: ${r.dose} g`, `- ${t.labels.powder}: ${r.powder} g`, `- ${t.labels.water}: ${r.water} ml`);
    for (const i of r.ingredients) out.push(`- ${i.label}: ${i.value} ${i.unit}`);
    if (r.eggWhites != null) out.push(`- ${t.labels.eggWhites}: ${r.eggWhites}`);
    if (r.yield) out.push(`- ${t.labels.makes} ${r.yield.count} ${r.yield.unit}`);
    for (const f of t.fixed) out.push(`- ${f.label}: ${f.value}`);
  } else {
    out.push(`## ${t.labels.title}`, ...t.steps.map((s, i) => `${i + 1}. ${s.step}: ${s.reference}`));
    if (t.powderNote) out.push(t.powderNote);
    out.push('', `### ${t.labels.checks}`, ...t.checks.map((c) => `- ${c.see}: ${c.check}. ${c.fix}`));
  }
  out.push(`${t.source.label}: ${t.source.text} (${t.source.period})`);
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
  const children = Object.values(applicationChildPages);
  const out = [
    '# VERY AQUAFABA: professional application guides (full text)',
    '',
    `Source site: ${SITE} (index: ${SITE}/llms.txt). Chickpea aquafaba in liquid (1 L Tetrapak) and powder (200 g pouch) formats; 30 g of liquid or 2 g of powder replace one egg white. Figures below come from the Products page and the linked recipes, with the source and date on each guide.`,
    '',
    ...pages.flatMap(guide),
    ...children.flatMap(child),
  ];
  return new Response(out.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
