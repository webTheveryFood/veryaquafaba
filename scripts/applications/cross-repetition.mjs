// Cross-page repetition: phrases shared between the six application pages of the same
// locale (client, 2026-09-16: "the pages mostly restate the same sentences"). The gate in
// validate.mjs only catches repetition INSIDE a page; this one catches it BETWEEN pages.
// Reads the drafts first (data/applications/drafts/<locale>.<app>.json) and falls back to
// the published copy.<locale>.json.
// Usage: node scripts/applications/cross-repetition.mjs [--locale en] [--min 7] [--max 12]
import fs from 'node:fs';
import path from 'node:path';
import { readJson, strip, allStrings, LOCALES, APPS } from './validate.mjs';
import { ROOT } from './tontin.mjs';

const argv = process.argv.slice(2);
const opt = (name, def) => { const i = argv.indexOf(`--${name}`); return i < 0 ? def : argv[i + 1]; };
const only = LOCALES.includes(opt('locale')) ? [opt('locale')] : LOCALES;
const MIN = Number(opt('min', 7));      // shortest shared phrase reported, in words
const MAX_REPORT = Number(opt('max', 12));

// Pack names and the brand are facts, not prose: they repeat by definition on every page
// and must not count as shared wording.
const PACKS = /1 ?L tetrapak|tetrapak de 1 ?L|5 ?L bag.in.box|bag.in.box de 5 ?L|bag.in.box|1 ?T ibc|ibc de 1 ?T|\bibc\b|200 ?g (pouch|beutel|zakje|pouches)|sachet de 200 ?g|zakje van 200 ?g|very aquafaba/gi;

const words = (s) => strip(s)
  .toLowerCase()
  .replace(PACKS, ' ')
  .replace(/[^\p{L}\p{N} ]/gu, ' ')
  .split(/\s+/)
  .filter(Boolean);

function entryFor(locale, app) {
  const draft = path.join(ROOT, 'data/applications/drafts', `${locale}.${app}.json`);
  if (fs.existsSync(draft)) return { entry: readJson(draft), from: 'draft' };
  const file = path.join(ROOT, 'data/applications', `copy.${locale}.json`);
  const copy = fs.existsSync(file) ? readJson(file) : {};
  return copy[app] ? { entry: copy[app], from: 'copy' } : null;
}

let total = 0;
for (const locale of only) {
  // shingle -> [{app, path}]
  const index = new Map();
  const present = [];
  for (const app of APPS) {
    const found = entryFor(locale, app);
    if (!found) continue;
    present.push(app);
    for (const [p, s] of allStrings(found.entry)) {
      const w = words(s);
      for (let i = 0; i + MIN <= w.length; i++) {
        const key = w.slice(i, i + MIN).join(' ');
        const list = index.get(key) || [];
        if (!list.some((x) => x.app === app)) list.push({ app, path: p });
        index.set(key, list);
      }
    }
  }
  if (present.length < 2) continue;
  // Keep only shingles in more than one application, then drop those contained in a longer hit.
  const hits = [...index.entries()].filter(([, list]) => list.length > 1).sort((a, b) => b[0].length - a[0].length);
  const kept = [];
  for (const [phrase, list] of hits) {
    if (kept.some((k) => k.phrase.includes(phrase))) continue;
    kept.push({ phrase, list });
  }
  console.log(`\n[${locale}] ${present.length} pages, ${kept.length} phrase(s) of ${MIN}+ words shared between applications`);
  for (const k of kept.slice(0, MAX_REPORT)) {
    console.log(`  "${k.phrase}"`);
    console.log(`     ${k.list.map((x) => `${x.app}#${x.path}`).join(' | ')}`);
  }
  if (kept.length > MAX_REPORT) console.log(`  ... and ${kept.length - MAX_REPORT} more`);
  total += kept.length;
}
console.log(`\nshared phrases: ${total}`);
process.exitCode = total ? 1 : 0;
