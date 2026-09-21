// Crawls every route of a running build and checks the conversion instrumentation:
// every Amazon / InstantChef link carries data-goal = purchaseGoal(href) (the snippet turns
// that click into a CONVERSION), every <form> has a stable id, every guide has the B2B
// enquiry toggle. Prints the inventory the goals in the panel are built on.
// Usage: node scripts/applications/check-tracking.mjs [http://localhost:3058]
import { readFileSync } from 'node:fs';
import { purchaseGoal } from '../../data/applications/tracking.js';
import { applicationRoute, APPLICATION_KEYS, APPLICATION_LOCALES } from '../../data/applications/routes.js';

const BASE = process.argv[2] || 'http://localhost:3058';
const routes = JSON.parse(readFileSync(new URL('../../data/routes.json', import.meta.url), 'utf8'));
const guides = new Set(APPLICATION_LOCALES.flatMap((l) => APPLICATION_KEYS.map((k) => applicationRoute(l, k))));
let bad = 0;
const fail = (where, msg) => { bad++; console.log(`FAIL ${where}: ${msg}`); };
const goals = {}, forms = {};
const add = (map, k, r) => (map[k] ||= new Set()).add(r);

for (const r of routes) {
  const html = (await (await fetch(BASE + r)).text()).replace(/<script[\s\S]*?<\/script>/g, '');
  for (const [a, href] of html.matchAll(/<a\b[^>]*href="(https?:\/\/[^"]+)"[^>]*>/g)) {
    const want = purchaseGoal(href.replace(/&amp;/g, '&'));
    if (!want) continue;
    const got = a.match(/data-goal="([^"]*)"/)?.[1];
    if (got !== want) fail(r, `${href.slice(0, 60)} data-goal=${got} (expected ${want})`);
    add(goals, want, r);
  }
  for (const [f] of html.matchAll(/<form\b[^>]*>/g)) {
    const id = f.match(/\bid="([^"]*)"/)?.[1];
    if (!id) fail(r, 'form without id');
    add(forms, id || '(no id)', r);
  }
  if (guides.has(r)) {
    if (!/data-enquiry-toggle/.test(html)) fail(r, 'no B2B enquiry toggle');
    add(forms, 'enquiry-form (opens on click)', r);
  }
}

console.log('\npurchase click goals (CONVERSION on click):');
for (const [k, s] of Object.entries(goals)) console.log(`  ${k.padEnd(20)} ${s.size} pages`);
console.log('forms:');
for (const [k, s] of Object.entries(forms)) console.log(`  ${k.padEnd(30)} ${s.size} pages`);
console.log(bad ? `\n${bad} failures` : `\ntracking OK: ${routes.length} routes crawled`);
process.exitCode = bad ? 1 : 0;
