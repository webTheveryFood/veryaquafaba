// Apply an independent reader's findings (audit 3) through the normal field-level
// repair: each finding becomes an --issue "path: fix (reason, quote)" for its page;
// only those paths are rewritten, the rest of the page is untouched, gates still apply.
// --scan adds the mechanical patterns the readers flagged (pack names, absolutes,
// typography) on every path where they still occur, so a fix is not limited to the
// one path the reader happened to quote.
// Usage: node scripts/applications/apply-findings.mjs --locale fr --file <findings.json> [--apps a,b] [--scan] [--dry-run]
// findings.json: { findings: [{ app, path, quote, category, issue, fix }] }
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { LOCALES, APPS, readJson } from './validate.mjs';
import { ROOT } from './tontin.mjs';

const argv = process.argv.slice(2);
const opt = (name) => { const i = argv.indexOf(`--${name}`); return i < 0 ? null : (argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : true); };
const locale = opt('locale');
const file = opt('file');
const only = typeof opt('apps') === 'string' ? opt('apps').split(',') : APPS;
const dry = opt('dry-run') === true;
if (!LOCALES.includes(locale) || typeof file !== 'string') { console.error('usage: --locale xx --file findings.json [--apps a,b] [--scan] [--dry-run]'); process.exit(2); }

// Patterns confirmed by the readers; message = what the rewrite must do.
const SCANS = {
  fr: [
    [/pochette/i, 'use "sachet de 200 g" (trade term, matches the packs table)'],
    [/\b1 L Tetrapak\b|\b1 T IBC\b/, 'French word order for pack names: "Tetrapak de 1 L", "IBC de 1 T"'],
    [/\bidéal(e|es|s)?\b/i, '"idéal" is a forbidden absolute; use "adapté(e)" or "convient"'],
    [/Est-ce que/, 'use the inverted question form ("La poudre est-elle ... ?")'],
    [/[^\s ]\?/, 'French typography: a space before the question mark'],
    [/\bdoit on\b/, 'hyphenate the inversion: "doit-on"'],
    [/alternative sûre\b|sécurité alimentaire accrue|sans les risques/i, 'safety claims: only "plus sûre que le blanc d\'œuf cru" (comparative) is allowed'],
    [/\bmixeur\b/i, 'whipping is done in "la cuve du batteur", not a "mixeur" (blender)'],
    [/(meringue|dessert|mayonnaise|formulation)[^.]{0,60}sans allergènes?/i, '"sans allergène" may only describe the product (sans œuf), never the finished dish'],
    [/\bdurable\b/i, 'the foam is "persistante" (recipe wording), not "durable": it is served immediately'],
    [/mêmes propriétés/i, 'properties are "comparables à celles du blanc d\'œuf", not "les mêmes"'],
  ],
  de: [
    [/\bideal(e|er|es|en)?\b/i, '"ideal" is a forbidden absolute; use "geeignet" or "eine praktische Wahl"'],
    [/ohne (weitere |zusätzliche |vorherige )?(Vorbereitung|Zubereitung)|direkt aus (der|dem) (Packung|Tetrapak|Karton)/i, 'the liquid is chilled before whipping as in the recipe: never "ohne Vorbereitung" or "direkt aus der Packung"'],
    [/sichere (Lösung|Wahl|Alternative|Option)\b|ohne (die |das )?Risik/i, 'safety claims: only the comparative "sicherer als rohes Eiweiß" is allowed'],
    [/\bpouch(es)?\b/i, 'anglicism: the German pack name is "200 g Beutel" (as in the packs table)'],
    [/Aquafaba Pulver|Pulver Aquafaba/, 'closed compound: "Aquafaba-Pulver"'],
    [/\b(optimal|perfekt|hervorragend|exzellent)\b/i, 'forbidden superlative; describe without it'],
  ],
  en: [
    [/\bideal(ly)?\b/i, '"ideal" is a forbidden absolute; use "suited to" or "a practical choice"'],
    [/no (prior |further |additional )?preparation|straight from the (pack|carton|tetrapak)|without (any )?preparation/i, 'the liquid is chilled and whipped as in the recipe: never "no preparation"'],
    [/safe alternative|safe (choice|option|solution)|without the risks?|eliminates? (the )?(need|risk)/i, 'safety and elimination claims: only the comparative "safer than raw egg white" is allowed; never "eliminates"'],
    [/\b(optimal|perfect|excellent|superior)\b|\bbest (results?|performance|choice|option)\b/i, 'forbidden superlative; describe without it'],
    [/\bsame (properties|steps)\b/i, 'never "same" as the liquid or as egg white: "comparable"'],
  ],
  nl: [
    [/\bpouch(es)?\b/i, 'anglicism: write "200 g zakje" (as elsewhere on the pages)'],
    [/aquafaba poeder|poeder aquafaba/i, 'closed compound: "aquafaba-poeder" or "poederaquafaba"'],
    [/\bidea(a)?l(e)?\b/i, '"ideaal" is a forbidden absolute; use "geschikt" or "een praktische keuze"'],
    [/technische specificaties|gegevensblad(en)?/i, 'one document name only: "technische fiche"'],
    [/allergenvrij/i, 'spelling: "allergeenvrij"'],
    [/zonder (extra )?voorbereiding(stijd)?|direct uit de verpakking/i, 'the liquid is chilled before use as in the recipe: never "without preparation" or "straight from the pack"'],
    [/zonder de risico|veilige (en betrouwbare )?(oplossing|manier|toepassing|keuze)/i, 'safety claims: only "veiliger dan rauw eiwit" (comparative) is allowed'],
    [/cocktail schuim/i, 'closed compound: "cocktailschuim"'],
    [/\bsponges\b/i, 'English: write "biscuit en génoise" as in the Dutch guide'],
    [/\bverzeker(t|en)\b/i, '"verzekeren" is guarantee wording; describe, do not guarantee'],
  ],
};

const walk = (o, p, out) => { if (typeof o === 'string') out.push([p, o]); else if (Array.isArray(o)) o.forEach((v, i) => walk(v, `${p}[${i}]`, out)); else if (o && typeof o === 'object') for (const k of Object.keys(o)) walk(o[k], p ? `${p}.${k}` : k, out); return out; };
// Readers write paths loosely: "sections[2]" alone means its html, "faq[1]" its answer.
const norm = (p) => p.replace(/^sections\[(\d+)\]$/, 'sections[$1].html').replace(/^faq\[(\d+)\]$/, 'faq[$1].a');

const copy = readJson(path.join(ROOT, 'data/applications', `copy.${locale}.json`));
const findings = JSON.parse(fs.readFileSync(file, 'utf8')).findings.filter((f) => only.includes(f.app) && f.confirmed !== false);
const byApp = {};
for (const f of findings) {
  const p = norm(f.path);
  (byApp[f.app] ||= []).push({ path: p, msg: `${f.fix} (reason: ${f.issue}; current text: "${f.quote}")` });
  // "Rewrite the pair: Q '...' A '...'" on an answer also rewrites its question.
  if (/\bQ ['"]/.test(f.fix) && /^faq\[\d+\]\.a$/.test(p)) byApp[f.app].push({ path: p.replace(/\.a$/, '.q'), msg: f.fix });
}
if (opt('scan') === true) {
  for (const app of only) {
    const seen = new Set((byApp[app] || []).map((i) => i.path));
    for (const [p, s] of walk(copy[app] || {}, '', [])) for (const [re, msg] of SCANS[locale] || []) {
      const m = re.exec(s);
      if (m && !seen.has(p)) { seen.add(p); (byApp[app] ||= []).push({ path: p, msg: `${msg} (current text: "...${s.slice(Math.max(0, m.index - 40), m.index + 60).replace(/\s+/g, ' ')}...")` }); }
    }
  }
}

for (const [app, list] of Object.entries(byApp)) {
  console.log(`[${locale}/${app}] ${list.length} issue(s) on ${new Set(list.map((i) => i.path)).size} path(s)`);
  if (dry) { for (const i of list) console.log('   -', `${i.path}: ${i.msg}`.slice(0, 150)); continue; }
  const args = [path.join(ROOT, 'scripts/applications/generate-copy.mjs'), '--locale', locale, '--apps', app, '--repair'];
  for (const i of list) args.push('--issue', `${i.path}: ${i.msg}`);
  const r = spawnSync(process.execPath, args, { cwd: ROOT, encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
  const out = (r.stdout || '') + (r.stderr || '');
  for (const line of out.split('\n')) if (/repair \d|rewrote|\[saved\]|\[FAIL\]|\[ok\]|structural|via /.test(line)) console.log('   ' + line.trim());
  if (r.status !== 0) console.log(`   exit ${r.status}`);
}
