// Differentiation pass: six application pages per locale must not read alike.
// Embeds every section (Tontin rag/embed), finds pairs of DIFFERENT applications
// above the threshold, and sends only the sections involved through the normal
// field-level repair (generate-copy.mjs --repair --issue) with application-specific
// guidance taken from the recipes. Re-measures after each round.
// Usage: node scripts/applications/differentiate.mjs --locale fr [--threshold 0.95] [--rounds 2] [--dry-run]
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { readJson, strip, LOCALES, APPS } from './validate.mjs';
import { ROOT, requireToken, embed, cosine } from './tontin.mjs';

const argv = process.argv.slice(2);
const opt = (name, dflt) => { const i = argv.indexOf(`--${name}`); return i < 0 ? dflt : (argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : true); };
const locale = opt('locale');
const threshold = Number(opt('threshold', 0.9));
const rounds = Number(opt('rounds', 2));
const dry = opt('dry-run') === true;
if (!LOCALES.includes(locale)) { console.error('usage: --locale en|de|fr|nl [--threshold 0.95] [--rounds 2] [--dry-run]'); process.exit(2); }
requireToken();

// What makes each application specific (from the published recipes; qualitative only).
const SPECIFICS = {
  meringue: 'chilled liquid whipped to stiff glossy peaks, sugar added gradually, piping, slow drying at low oven temperature, meringues stored airtight away from humidity, consistent concentration for industrial batches',
  'chocolate-mousse': 'whipping to glossy peaks, folding cooled melted chocolate without deflating the foam, portioning into verrines or moulds and chilling to set, plated desserts and pre-portioned retail formats',
  mayonnaise: 'cold emulsion built by drizzling oil in a thin stream, high-shear blending for large batches, mustard and acid in the base, flavoured or coloured variations, hygienic refrigerated handling after making',
  baking: 'replacing whole eggs or only egg whites, whipping for aerated sponges and génoises versus adding directly for binding and moisture in cookies, brownies and enriched doughs, adjusting hydration of the batter',
  cocktails: 'dry shake without ice to build the foam, then shake with ice, fine straining, à la minute service, pre-batched bases with the aquafaba added at service, foam head and mouthfeel of sours and fizzes',
  macarons: 'stable meringue base, macaronage to a lava-like batter, piping even shells, resting until a skin forms, baking with the fan off, maturing the filled macarons before service',
};
const SECTION_HINT = {
  liquid: 'how the liquid is used in this application',
  powder: 'why the powder fits this application, in terms of its production context (never its preparation)',
  when: 'at least four bullets tied to this application, at most two about batch size or storage',
  pro: 'prose about professional and industrial use of this application specifically',
};

const file = path.join(ROOT, 'data/applications', `copy.${locale}.json`);

async function measure() {
  const copy = readJson(file);
  const items = [];
  for (const app of APPS) for (const s of copy[app]?.sections || []) items.push({ app, key: s.key, text: strip(s.html) });
  const vectors = await embed(items.map((i) => i.text));
  if (!vectors) throw new Error('embeddings unavailable');
  const pairs = [];
  for (let a = 0; a < items.length; a++) for (let b = a + 1; b < items.length; b++) {
    if (items[a].app === items[b].app) continue;
    const sim = cosine(vectors[a], vectors[b]);
    if (sim >= threshold) pairs.push({ sim, a: items[a], b: items[b] });
  }
  return pairs.sort((x, y) => y.sim - x.sim);
}

for (let round = 1; round <= rounds; round++) {
  const pairs = await measure();
  console.log(`\n[${locale}] round ${round}: ${pairs.length} pair(s) >= ${threshold}`);
  for (const p of pairs.slice(0, 12)) console.log(`   ${p.sim.toFixed(3)} ${p.a.app}#${p.a.key} ~ ${p.b.app}#${p.b.key}`);
  if (!pairs.length) break;
  // Sections to rewrite: for each pair, the section of the page that appears in more pairs
  // (the most generic one); both when tied.
  const count = {};
  for (const p of pairs) for (const s of [p.a, p.b]) count[`${s.app}#${s.key}`] = (count[`${s.app}#${s.key}`] || 0) + 1;
  const targets = {};
  for (const p of pairs) {
    const ka = `${p.a.app}#${p.a.key}`, kb = `${p.b.app}#${p.b.key}`;
    const pick = count[ka] === count[kb] ? [p.a, p.b] : count[ka] > count[kb] ? [p.a] : [p.b];
    for (const s of pick) (targets[s.app] ||= new Set()).add(s.key);
  }
  // The field-level repair keeps returning the same generic text for these, so each
  // target section is regenerated with the section prompt (generate-copy --section),
  // which forces the application's production context; the rest of the page is untouched.
  for (const [app, keys] of Object.entries(targets)) {
    for (const key of keys) {
      console.log(`   rewrite ${app}#${key} (${SECTION_HINT[key]})`);
      if (dry) continue;
      const args = [path.join(ROOT, 'scripts/applications/generate-copy.mjs'), '--locale', locale, '--apps', app, '--section', key];
      const r = spawnSync(process.execPath, args, { cwd: ROOT, encoding: 'utf8' });
      const out = (r.stdout || '') + (r.stderr || '');
      const line = out.split('\n').find((l) => /\[saved\]|\[FAIL\]/.test(l)) || `exit ${r.status}`;
      console.log(`      ${line.trim()}`);
    }
  }
  if (dry) break;
}
const finalPairs = dry ? [] : await measure();
console.log(`\n[${locale}] remaining pair(s) >= ${threshold}: ${finalPairs.length}`);
for (const p of finalPairs) console.log(`   ${p.sim.toFixed(3)} ${p.a.app}#${p.a.key} ~ ${p.b.app}#${p.b.key}`);
process.exitCode = finalPairs.length ? 1 : 0;
