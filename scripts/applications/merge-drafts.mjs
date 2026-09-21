// Merges validated drafts (data/applications/drafts/<locale>.<app>.json) into
// copy.<locale>.json. A draft that does not pass the gate is refused, so nothing
// unvalidated reaches the pages. Usage: node scripts/applications/merge-drafts.mjs [--locale fr] [--dry-run]
import fs from 'node:fs';
import path from 'node:path';
import { validateCopy, formatProblems, sanitizeEntry, readJson, writeJson, loadTitles, LOCALES, APPS } from './validate.mjs';
import { ROOT } from './tontin.mjs';

const argv = process.argv.slice(2);
const opt = (name) => { const i = argv.indexOf(`--${name}`); return i < 0 ? null : (argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : true); };
const TITLES = await loadTitles();
const only = typeof opt('locale') === 'string' ? [opt('locale')] : LOCALES;
const dry = opt('dry-run') === true;
const dir = path.join(ROOT, 'data/applications/drafts');

let merged = 0;
let refused = 0;
for (const locale of only) {
  const file = path.join(ROOT, 'data/applications', `copy.${locale}.json`);
  const copy = fs.existsSync(file) ? readJson(file) : {};
  const titles = TITLES[locale];
  let changed = 0;
  for (const app of APPS) {
    const draft = path.join(dir, `${locale}.${app}.json`);
    if (!fs.existsSync(draft)) continue;
    const entry = sanitizeEntry(readJson(draft));
    const problems = validateCopy(entry, locale, app, titles[app]);
    if (problems.length) {
      refused++;
      console.log(`REFUSED ${locale}/${app}: ${problems.length} problem(s)`);
      for (const p of formatProblems(problems)) console.log('   -', p);
      continue;
    }
    copy[app] = entry;
    changed++;
    merged++;
    console.log(`merged ${locale}/${app}`);
  }
  if (changed && !dry) writeJson(file, copy);
}
console.log(`\nmerged ${merged}, refused ${refused}${dry ? ' (dry run, nothing written)' : ''}`);
process.exitCode = refused ? 1 : 0;
