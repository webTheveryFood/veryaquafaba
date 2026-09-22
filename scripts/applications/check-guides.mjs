// Checks the translated guides (data/applications/guides.js, de/fr/nl) against the English
// source: same structure, same {tokens} in every string, same HTML tags in the same order,
// table cell labels equal to their column heading, one contact link per linked FAQ answer,
// no em/en dash. It checks mechanics, not language quality.
// Usage (Node >= 22):  node scripts/applications/check-guides.mjs
//                      node scripts/applications/check-guides.mjs --file de path/to/guides.de.json
import fs from 'node:fs';
import { GUIDES } from '../../data/applications/guides.js';
import { CHILD_TEXTS } from '../../data/resources/texts/index.js';
import { TOPIC_TEXTS } from '../../data/resources/texts/topics.js';

const tokens = (s) => (s.match(/\{\w+\}/g) || []).sort().join(' ');
const tags = (s) => (s.match(/<\/?[a-z0-9]+/gi) || []).join(' ');
const hrefs = (s) => (s.match(/href="[^"]*"|\]\([^)]*\)/g) || []).sort().join(' ');

function compare(en, tr, path, out) {
  if (typeof en === 'string') {
    if (typeof tr !== 'string') return out.push(`${path}: expected a string`);
    if (path.endsWith('.id')) { if (en !== tr) out.push(`${path}: id changed (${tr})`); return; }
    if (tokens(en) !== tokens(tr)) out.push(`${path}: tokens differ\n    en: ${tokens(en)}\n    tr: ${tokens(tr)}`);
    if (tags(en) !== tags(tr)) out.push(`${path}: HTML tags differ`);
    if (hrefs(en) !== hrefs(tr)) out.push(`${path}: link targets differ`);
    if (/[—–]/.test(tr)) out.push(`${path}: em/en dash`);
    if (!tr.trim()) out.push(`${path}: empty`);
    // A string made only of tokens and units ("{dose} g, {whip} min") is the same in every language.
    if (en.length > 25 && en === tr && /[a-z]{4,}/i.test(en.replace(/\{\w+\}/g, ''))) out.push(`${path}: left in English`);
    // td data-label must equal the heading of its column
    for (const table of tr.match(/<table[\s\S]*?<\/table>/g) || []) {
      const heads = [...table.matchAll(/<th[^>]*>([^<]*)<\/th>/g)].map((m) => m[1]);
      for (const row of table.match(/<tr><td[\s\S]*?<\/tr>/g) || []) {
        [...row.matchAll(/<td data-label="([^"]*)">/g)].forEach((m, i) => {
          if (m[1] !== heads[i]) out.push(`${path}: data-label "${m[1]}" is not the heading "${heads[i]}"`);
        });
      }
    }
    return;
  }
  if (en === null || typeof en !== 'object') { if (en !== tr) out.push(`${path}: value changed`); return; }
  if (Array.isArray(en)) {
    if (!Array.isArray(tr) || tr.length !== en.length) return out.push(`${path}: expected ${en.length} items, got ${tr?.length}`);
    en.forEach((v, i) => compare(v, tr[i], `${path}[${i}]`, out));
    return;
  }
  if (!tr || typeof tr !== 'object') return out.push(`${path}: missing`);
  const a = Object.keys(en).sort().join(','); const b = Object.keys(tr).sort().join(',');
  if (a !== b) return out.push(`${path}: keys differ (${b} vs ${a})`);
  for (const k of Object.keys(en)) compare(en[k], tr[k], `${path}.${k}`, out);
}

const fileArg = process.argv.indexOf('--file');
const targets = fileArg > -1
  ? [[process.argv[fileArg + 1], JSON.parse(fs.readFileSync(process.argv[fileArg + 2], 'utf8'))]]
  : ['de', 'fr', 'nl'].map((l) => [l, GUIDES[l] || {}]);

let bad = 0;
for (const [locale, guides] of targets) {
  const apps = fileArg > -1 ? Object.keys(guides) : Object.keys(GUIDES.en);
  for (const app of apps) {
    const out = [];
    if (!GUIDES.en[app]) out.push(`${app}: no English source`);
    else if (!guides[app]) out.push(`${app}: not translated`);
    else compare(GUIDES.en[app], guides[app], app, out);
    bad += out.length;
    console.log(`${locale}/${app}: ${out.length ? `${out.length} problem(s)` : 'ok'}`);
    out.forEach((m) => console.log(`  - ${m}`));
  }
}
// Set-2 children (data/resources/texts): same parity rules per child type and application.
if (fileArg === -1) {
  for (const child of Object.keys(CHILD_TEXTS)) {
    for (const locale of ['de', 'fr', 'nl']) {
      for (const app of Object.keys(CHILD_TEXTS[child].en)) {
        const out = [];
        const tr = CHILD_TEXTS[child][locale]?.[app];
        if (!tr) out.push(`${app}: not translated`);
        else compare(CHILD_TEXTS[child].en[app], tr, `${child}/${app}`, out);
        bad += out.length;
        console.log(`${locale}/${child}/${app}: ${out.length ? `${out.length} problem(s)` : 'ok'}`);
        out.forEach((m) => console.log(`  - ${m}`));
      }
    }
  }
}
// Set-2 section pages (data/resources/texts/<section>.<locale>.js): same parity rules per page.
if (fileArg === -1) {
  for (const section of Object.keys(TOPIC_TEXTS)) {
    for (const locale of ['de', 'fr', 'nl']) {
      for (const key of Object.keys(TOPIC_TEXTS[section].en)) {
        const out = [];
        const tr = TOPIC_TEXTS[section][locale]?.[key];
        if (!tr) out.push(`${key}: not translated`);
        else compare(TOPIC_TEXTS[section].en[key], tr, `${section}/${key}`, out);
        bad += out.length;
        console.log(`${locale}/${section}/${key}: ${out.length ? `${out.length} problem(s)` : 'ok'}`);
        out.forEach((m) => console.log(`  - ${m}`));
      }
    }
  }
}
console.log(`problems: ${bad}`);
process.exitCode = bad ? 1 : 0;
