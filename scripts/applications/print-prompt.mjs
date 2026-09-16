// Prints the exact writer brief for one page (same SYSTEM + prompt that Tontin receives):
// rules, verified facts, the application's brief (drivers, process details, failure points),
// the site recipe and the Products positioning. Used when the copy is written here instead
// of through Tontin (client deadline, 2026-09-16).
// Usage: node scripts/applications/print-prompt.mjs <locale> <app>
import { SYSTEM, buildPrompt, loadFacts, loadSiteContext } from './prompts.mjs';
import { loadBriefs } from './briefs.js';
import { loadTitles, LOCALES, APPS } from './validate.mjs';

const [locale, app] = process.argv.slice(2);
if (!LOCALES.includes(locale) || !APPS.includes(app)) {
  console.error(`usage: print-prompt.mjs <${LOCALES.join('|')}> <${APPS.join('|')}>`);
  process.exit(2);
}
const facts = loadFacts();
const t = (await loadTitles())[locale][app];
const context = await loadSiteContext(locale);
const prompt = buildPrompt({
  locale, app, keyword: t.keyword, h1: t.h1, title: t.title, facts,
  brief: loadBriefs()[app], recipeText: context.recipes[app], productsText: context.products,
});
console.log(`===== SYSTEM =====\n${SYSTEM}\n\n===== PROMPT =====\n${prompt}`);
