// Style pass over approved copy: every prose field of a page goes through the normal
// field-level repair with a STYLE-ONLY instruction (same facts, same claims, same
// length; more natural, concrete professional prose; no filler, no repeated
// sentences). Gates still apply, nothing is edited by hand.
// Usage: node scripts/applications/polish.mjs --locale fr [--apps a,b] [--dry-run]
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { readJson, LOCALES, APPS } from './validate.mjs';
import { ROOT } from './tontin.mjs';

const argv = process.argv.slice(2);
const opt = (name) => { const i = argv.indexOf(`--${name}`); return i < 0 ? null : (argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : true); };
const locale = opt('locale');
const apps = typeof opt('apps') === 'string' ? opt('apps').split(',') : APPS;
const dry = opt('dry-run') === true;
if (!LOCALES.includes(locale)) { console.error('usage: --locale en|de|fr|nl [--apps a,b] [--dry-run]'); process.exit(2); }

const STYLE = 'STYLE ONLY, same facts and claims, same length: rewrite for a native professional reader; concrete and specific; vary the sentence openings; remove filler and clichés (ideal, perfect, simple and quick solution, in a flash, meets your needs); do not repeat a sentence or an idea already used in another section of this page; keep every pack name, every reference to the technical sheet and every recipe detail exactly as they are; no new claims';

const copy = readJson(path.join(ROOT, 'data/applications', `copy.${locale}.json`));
for (const app of apps) {
  const e = copy[app];
  if (!e) continue;
  const issues = [];
  issues.push(`answer: ${STYLE}`);
  e.sections.forEach((s, i) => issues.push(`sections[${i}].html: ${STYLE}`));
  e.faq.forEach((f, i) => issues.push(`faq[${i}].a: ${STYLE}`));
  console.log(`[${locale}/${app}] polish ${issues.length} field(s)`);
  if (dry) continue;
  const args = [path.join(ROOT, 'scripts/applications/generate-copy.mjs'), '--locale', locale, '--apps', app, '--repair'];
  for (const issue of issues) args.push('--issue', issue);
  const r = spawnSync(process.execPath, args, { cwd: ROOT, encoding: 'utf8' });
  const out = (r.stdout || '') + (r.stderr || '');
  for (const line of out.split('\n')) if (/repair \d|\[saved\]|\[FAIL\]|^   - .*\("/.test(line)) console.log('   ' + line.trim());
}
