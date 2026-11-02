// Translation fidelity checks: structure, facts tokens, formatting and destinations.
// Run with an optional locale while translations are being written.
import assert from 'node:assert/strict';
import en from '../../data/resources/texts/bakeries.en.js';
import { BAKERY_LOCALE_ROUTES, BAKERY_ROUTE_KEYS } from '../../data/resources/bakeries-routes.js';
import fs from 'node:fs';
const locales = process.argv.slice(2).length ? process.argv.slice(2) : ['fr', 'de', 'nl'];
const routes = JSON.parse(fs.readFileSync(new URL('../../data/routes.json', import.meta.url)));
const match = (s, re) => (s.match(re) || []).sort().join('\n');
const tokens = (s) => match(s, /\{\w+\}/g);
const tags = (s) => (s.match(/<\/?[a-z0-9]+/gi) || []).join(' ');
const links = (s) => match(s, /href="[^"]*"|\]\([^)]*\)/g);
const errors = [];
const fail = (p, message) => errors.push(`${p}: ${message}`);
function compare(source, translated, path) {
  if (typeof source === 'string') {
    if (typeof translated !== 'string') return fail(path, 'missing string');
    if (/\.(?:id|type)$|\.links\[\d+\]$/.test(path)) {
      if (source !== translated) fail(path, 'structural value changed');
      return;
    }
    if (!translated.trim()) fail(path, 'empty translation');
    if (tokens(source) !== tokens(translated)) fail(path, 'fact tokens differ');
    if (tags(source) !== tags(translated)) fail(path, 'HTML structure differs');
    if (links(source) !== links(translated)) fail(path, 'link destinations differ');
    if (/[—–]/.test(translated)) fail(path, 'long dash');
    const prose = source.replace(/\{\w+\}|<[^>]*>/g, '').trim();
    if (prose.length > 25 && /[a-z]{4}/i.test(prose) && source === translated) fail(path, 'English text retained');
    for (const table of translated.match(/<table[\s\S]*?<\/table>/g) || []) {
      const heads = [...table.matchAll(/<th\b[^>]*>(.*?)<\/th>/g)].map((m) => m[1]);
      for (const row of table.match(/<tr><td[\s\S]*?<\/tr>/g) || []) {
        [...row.matchAll(/<td data-label="([^"]*)">/g)].forEach((m, i) => {
          if (m[1] !== heads[i]) fail(path, `mobile table label ${m[1]} differs from heading ${heads[i]}`);
        });
      }
    }
    return;
  }
  if (source === null || typeof source !== 'object') {
    if (source !== translated) fail(path, 'value differs');
    return;
  }
  if (Array.isArray(source)) {
    if (!Array.isArray(translated) || source.length !== translated.length) return fail(path, `expected ${source.length} items, got ${translated?.length}`);
    source.forEach((v, i) => compare(v, translated[i], `${path}[${i}]`));
    return;
  }
  if (!translated || typeof translated !== 'object') return fail(path, 'missing object');
  if (Object.keys(source).sort().join() !== Object.keys(translated).sort().join()) fail(path, 'keys differ');
  for (const key of Object.keys(source)) compare(source[key], translated[key], `${path}.${key}`);
}
for (const locale of locales) {
  const { default: translated } = await import(`../../data/resources/texts/bakeries.${locale}.js`);
  const start = errors.length;
  compare(en, translated, locale);
  assert.equal(Object.keys(BAKERY_LOCALE_ROUTES[locale]).length, Object.keys(en).length);
  for (const key of Object.keys(en)) {
    const route = BAKERY_LOCALE_ROUTES[locale][key];
    if (!routes.includes(route)) fail(`${locale}.${key}`, 'not registered');
    if (BAKERY_ROUTE_KEYS[route] !== key) fail(`${locale}.${key}`, 'translation grouping differs');
  }
  console.log(`${locale}: ${Object.keys(translated).length}/${Object.keys(en).length} pages, ${errors.length - start} errors`);
}
for (const error of errors) console.error(error);
process.exitCode = errors.length ? 1 : 0;
