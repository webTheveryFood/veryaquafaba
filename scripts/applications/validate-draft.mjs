// Validates ONE draft page against the same gate as the pipeline (audit 1), so a writer
// can iterate on its own file before it is merged into copy.<locale>.json.
// Usage: node scripts/applications/validate-draft.mjs data/applications/drafts/fr.meringue.json
// The file name carries the locale and the application: <locale>.<app>.json
import path from 'node:path';
import { validateCopy, formatProblems, sanitizeEntry, readJson, loadTitles, LOCALES, APPS } from './validate.mjs';

const file = process.argv[2];
if (!file) { console.error('usage: validate-draft.mjs <draft file>'); process.exit(2); }
const base = path.basename(file).replace(/\.json$/, '');
const [locale, app] = [base.slice(0, base.indexOf('.')), base.slice(base.indexOf('.') + 1)];
if (!LOCALES.includes(locale) || !APPS.includes(app)) {
  console.error(`file name must be <locale>.<app>.json with locale in ${LOCALES.join('|')} and app in ${APPS.join('|')}`);
  process.exit(2);
}

let entry;
try { entry = sanitizeEntry(readJson(file)); } catch (err) { console.error(`cannot read ${file}: ${err.message}`); process.exit(2); }
const problems = validateCopy(entry, locale, app, (await loadTitles())[locale][app]);
if (!problems.length) {
  console.log(`OK ${locale}/${app}: passes the gate`);
  process.exit(0);
}
console.log(`${problems.length} problem(s) in ${locale}/${app}:`);
for (const p of formatProblems(problems)) console.log(' -', p);
process.exit(1);
