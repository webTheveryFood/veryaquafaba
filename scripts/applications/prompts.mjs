// Prompts for Tontin (/api/llm/completion): writer system prompt, page prompt,
// field-level repair prompt, and the independent auditor (audit 2).
// The model writes prose only: the app renders every figure from facts.json.
import { readJson } from './validate.mjs';
import { briefProse } from './briefs.js';

const LANG_NAME = { en: 'British English', de: 'German (formal Sie)', fr: 'French (formal vous)', nl: 'Dutch (formal u)' };
const APP_LABEL = {
  meringue: 'meringue', 'chocolate-mousse': 'chocolate mousse', mayonnaise: 'mayonnaise (vegan mayo)',
  baking: 'baking (cakes, cookies, doughs, sponges)', cocktails: 'cocktail foams (sours, fizzes)', macarons: 'macarons',
};

const FORBIDDEN_WORDS = 'economical, economic, cost, costs, price, cheaper, savings, budget, économique, économie, coût, prix, rentable, wirtschaftlich, günstig, Kosten, Preis, sparen, voordelig, goedkoop, kosten, prijs, besparen; waste, gaspillage, Verschwendung, verspilling; free sample, échantillon gratuit, kostenloses Muster, gratis staal, gratis monster';

export const ALLOWED_CLAIMS = 'the liquid is ready to pour and to whip, used chilled as in the recipe; once opened, the liquid is kept refrigerated and used within days (the key figures on the page give the days); the powder does not spoil after opening and is kept dry and closed; the powder is reconstituted with water in the proportion shown in the key figures (the page prints it: never write the numbers); the powder is easy to store and to measure and blends into dry premixes; both formats are plant-based, egg-free, shelf-stable before opening, a functional egg-white replacement for foaming, emulsifying and binding; both are safer than raw egg white; formats: 1 L Tetrapak (liquid), 10 L bag-in-box (liquid, foodservice and industry), 1 T IBC (liquid, industrial lines), 200 g pouch (powder); the technical sheet is available on request; professional buyers can describe their production needs through the enquiry form on the page';

export const SYSTEM = `You are the technical B2B copywriter of VERY AQUAFABA, a chickpea aquafaba producer selling two formats: liquid (ready to pour) and powder (reconstituted with water), for pastry chefs, bakeries, bars, foodservice and industrial food production.

You write ONE decision page per application answering "liquid or powder aquafaba for this application?". It is NOT a recipe: the recipe already exists on the site and is linked from the page.

THE DECISION IS NOT ABOUT BATCH SIZE. The owner's brief: customers choose by shelf life after opening versus their rotation (an opened liquid pack must be finished within days, refrigerated; the powder does not spoil after opening, so a venue with little rotation prefers powder even for tiny quantities), by storage space, by cold chain, by dosing precision and by production workflow. Large industrial lines run on LIQUID in 1 T IBC and 10 L bag-in-box; the powder blends into dry premixes. These drivers weigh differently per application: build every page on the DRIVERS, PROCESS DETAILS and FAILURE POINTS given in the brief, never on "small batches versus large batches".

HARD RULES (a page that breaks one is rejected):
1. Never write any digit (0-9) and never write a number in words (no "five", "fünf", "cinq", "vijf", "half", "double"...). The website renders every figure itself (dose, egg-white equivalence, reconstitution, days after opening, temperatures, timings) from a verified data sheet. Refer to them qualitatively ("the dose shown in the key figures", "within the days shown on this page", "the proportion of water shown above"). The only exceptions are the pack names "1 L", "5 L", "200 g" and "1 T".
2. Never use an em dash or an en dash. Use commas, full stops or parentheses.
3. Name only the brand VERY AQUAFABA (always written in capitals). Never name any other brand, competitor or retailer.
4. No placeholders, no brackets, no "TODO", no health claims, no guarantees, no superlatives about performance. Allowed claims, and nothing beyond them: ${ALLOWED_CLAIMS}
5. Do not offer samples (the page has no sample button any more). Mention "the technical sheet" at most twice on the whole page and "on request" at most twice: they are references, not arguments. Never repeat a sentence or an idea on the page: every paragraph, bullet and FAQ answer carries something the others do not.
6. Write in the requested language only, formal register, professional and concrete. Short sentences.
   FORBIDDEN WORDS in any language (the page is rejected if one appears): ${FORBIDDEN_WORDS}; superlatives such as perfect, optimal, best, ideal, record, parfait, idéal, meilleur, perfekt, beste, ideaal. Say "suited to", "a practical choice", "the right format when".
   Storage: both formats are shelf-stable before opening (ambient). The OPENED liquid is kept refrigerated and used within days (say it, without the number); the opened powder does not spoil. Never write a shelf life in weeks or months. Chilling the liquid right before whipping is a recipe step and may be mentioned. Never contradict the recipe (order of steps, temperatures in words, chilling, resting, maturing).
   "Allergen-free" describes the product (it contains no egg): never call the finished dish, dessert, sauce or baked goods allergen-free. No "excellent", "without any risk", "optimised", "ensures food safety", "eliminates the risks" (say "safer than raw egg white"), no delivery terms.
   The 1 T IBC and the 10 L bag-in-box are LIQUID formats: never place them with the powder.
7. HTML allowed inside "html" fields: <p>, <ul>, <li>, <strong> only. No headings, no links, no other tags.
8. Output strictly the JSON object requested, with no markdown fences and no commentary.`;

export function factsProse(facts, app) {
  const f = facts.applications[app];
  const shared = facts.shared;
  const sl = shared.shelf_life;
  const r = shared.powder_reconstitution;
  return [
    `Ratio published on the Products page: ${shared.ratio.egg_white_liquid_g} g of liquid replaces one egg white, ${shared.ratio.egg_white_powder_g} g of powder replaces one egg white, ${shared.ratio.egg_liquid_g} g of liquid replaces one whole egg.`,
    r?.publicar ? `Powder reconstitution, printed on the page: ${r.egg_white_powder_g} g of powder + ${r.egg_white_water_ml} ml of water = ${r.egg_white_total_g} g of aquafaba, equivalent to the same mass of liquid aquafaba; ${r.egg_white_powder_g} g of powder replaces one egg white. Refer to it as "the proportion shown in the key figures".` : 'Powder preparation: not published.',
    f.dose_g ? `Recipe dose for this application: ${f.dose_g} g of liquid per batch.` : 'This page is about baking in general: there is no single dose, only the egg equivalences above.',
    'Formats: liquid 1 L Tetrapak, 10 L bag-in-box, 1 T IBC; powder 30 g, 200 g and 3 kg.',
    `Shelf life, printed on the page: both formats keep ${sl.unopened_months} months unopened at room temperature; the opened liquid is refrigerated at ${sl.liquid_opened_max_c} °C or below and used within ${sl.liquid_opened_days.join(' to ')} days; the opened powder does not spoil (kept dry and closed).`,
    'Not published (do NOT state them): prices, industrial specifications, shelf life in weeks or months, sample offers.',
    `Process parameters that the page shows in its table: ${(f.process || []).map((p) => p.key).join(', ')}.`,
  ].join('\n');
}

const SCHEMA = (app) => `{
  "seo": { "description": "meta description of AT MOST twenty-two words in total (search engines cut longer ones): two short sentences, the first states the choice (liquid or powder for this application) with the keyword and its real criterion, the second says who it is for; no digits" },
  "answer": "one or two sentences that complete the answer to 'liquid or powder?' for this application, qualitatively, no digits; they FOLLOW a sentence that already starts with the application name and the dose, so do not open with 'For <application>' again: start directly with the decision and its driver (rotation and shelf life after opening, cold chain, dosing, workflow), never 'liquid for small batches, powder for large'",
  "sections": [
    { "key": "liquid", "title": "...", "html": "<p>...</p>  (when the liquid format is the right choice for this application and why: which venues and rhythms finish an opened pack in time, how it is used in this process with at least two process details from the brief, industrial lines on IBC or bag-in-box where relevant)" },
    { "key": "powder", "title": "...", "html": "<p>...</p>  (when the powder format is the right choice and why: low rotation, no refrigeration of an opened pack, dosing precision, dry premixes, storage; reconstituted with water in the proportion shown in the key figures; how the reconstituted aquafaba then behaves in this process)" },
    { "key": "when",   "title": "...", "html": "<ul><li>...</li></ul>  (decision list: six concrete production situations of this application, each naming the driver that decides it and the format; liquid and powder cases both present; no two bullets with the same reason)" },
    { "key": "pro",    "title": "...", "html": "<p>...</p>  (professional and industrial use: the failure points of this application from the brief and how to avoid them, the finished product's storage as in the recipe, consistency between batches, safer than raw egg white, egg-free; formats named once)" }
  ],
  "faq": [ { "q": "...", "a": "plain text answer, two to four sentences, each answering something the sections do not already say" } ],
  "relatedLabel": "link label to the existing ${APP_LABEL[app]} recipe on the site"
}`;

export function buildPrompt({ locale, app, keyword, h1, title, facts, recipeText, productsText, ragSnippets = [], brief }) {
  const rag = ragSnippets.length
    ? `\nVERIFIED NOTES FROM THE KNOWLEDGE BASE (use what is relevant, never contradict them, never copy figures from them):\n${ragSnippets.map((s) => `- ${s.content.replace(/\s+/g, ' ').slice(0, 400)}`).join('\n')}\n`
    : '';
  return `Language: ${LANG_NAME[locale]}.
Application: ${APP_LABEL[app]}.
Target keyword (must appear naturally in the meta description and at least once in the sections): "${keyword}".
Page title already fixed by the site (do not repeat it as a heading): "${title}". H1: "${h1}".

VERIFIED FACTS (context only; never rewrite figures, the page displays them in a table):
${factsProse(facts, app)}

BRIEF FOR THIS APPLICATION (verified against the site's recipes and the owner; the page is built on it):
${briefProse(brief)}
${rag}
EXISTING RECIPE ON THE SITE (summary, for consistency; do not copy it, do not repeat its steps):
${recipeText}

PRODUCTS PAGE POSITIONING (for consistency):
${productsText}

REQUIREMENTS:
- Each of the four sections: between eighty and one hundred sixty words, in ${LANG_NAME[locale]}. The "when" section is a list of six bullets, each bullet a complete sentence naming a concrete situation, the driver that decides it and the format.
- Build the decision on the BRIEF's drivers: rotation versus shelf life of the opened liquid, cold chain, dosing precision, storage space, workflow, industrial lines on liquid IBC or bag-in-box, dry premixes. "Small batches versus large batches" on its own is rejected.
- Use at least three PROCESS DETAILS and at least two FAILURE POINTS from the brief, in words (no figures), where they matter for the format choice or for professional use.
- APPLICATION-SPECIFIC: this site has six of these pages and they must not read alike; the brief's unique angles must be visible.
- Between four and six FAQ items a chef or a purchasing manager would ask; each answer adds something not already in the sections. Never state or imply that the powder goes through the same steps as the liquid.
- "Technical sheet" at most twice on the page, "on request" at most twice, no sample offers, no sentence repeated, no digits anywhere, no numbers in words, no dashes, only the brand VERY AQUAFABA.

Return exactly this JSON structure:
${SCHEMA(app)}`;
}

// Field-level repair: the model rewrites ONLY the listed fields; the merge in
// generate-copy.mjs copies back only those paths, so nothing else can change.
export function buildRepairPrompt({ locale, app, candidate, problems, facts, recipeText = '', brief }) {
  return `Language: ${LANG_NAME[locale]}. Application: ${APP_LABEL[app]}.
Below is the current JSON of the page. Some fields were REJECTED. Rewrite ONLY the rejected fields so that they respect the rules, keeping their meaning, length and register; return the COMPLETE JSON object with every other field exactly as it is.

VERIFIED FACTS (context only):
${factsProse(facts, app)}

BRIEF FOR THIS APPLICATION (drivers, process details, failure points):
${briefProse(brief)}

RECIPE PUBLISHED ON THE SITE (for application-specific wording; never copy its figures):
${recipeText || '(not available)'}

REJECTED FIELDS:
${problems.map((p) => `- ${p.path}: ${p.message}`).join('\n')}

CURRENT JSON:
${JSON.stringify(candidate, null, 2)}`;
}

// Rewrite ONE section from scratch with application-specific constraints (used when
// the six pages of a locale read alike: the field-level repair keeps returning the
// same generic text). Only that section changes; the rest of the page is untouched.
export const SPECIFICS = {
  meringue: 'chilled liquid whipped to stiff glossy peaks, sugar added gradually, piping, slow drying at low oven temperature, meringues stored airtight away from humidity, consistent concentration for industrial batches',
  'chocolate-mousse': 'whipping to glossy peaks, folding cooled melted chocolate without deflating the foam, portioning into verrines or moulds and chilling to set, plated desserts and pre-portioned retail formats',
  mayonnaise: 'cold emulsion built by drizzling oil in a thin stream, high-shear blending for large batches, mustard and acid in the base, flavoured or coloured variations, hygienic refrigerated handling after making',
  baking: 'replacing whole eggs or only egg whites, whipping for aerated sponges and génoises versus adding directly for binding and moisture in cookies, brownies and enriched doughs, adjusting hydration of the batter',
  cocktails: 'dry shake without ice to build the foam, then shake with ice, fine straining, à la minute service, pre-batched bases with the aquafaba added at service, foam head and mouthfeel of sours and fizzes',
  macarons: 'stable meringue base, macaronage to a lava-like batter, piping even shells, resting until a skin forms, baking with the fan off, maturing the filled macarons before service',
};

export function buildSectionPrompt({ locale, app, key, current, recipeText, facts, brief }) {
  const sectionBrief = {
    when: `a decision list: <ul> with six <li>, each a complete sentence. Each bullet describes a concrete PRODUCTION SITUATION of ${APP_LABEL[app]} (who makes it, service rhythm, test batches of new flavours, daily small runs, seasonal peaks, pre-batched bases, industrial lines, limited storage in that kind of business) and says which format suits it: the liquid because it is ready to pour and whip and comes in 1 L Tetrapak (or 1 T IBC for industry), the powder because it is measured precisely and stored compactly in 200 g pouches. NEVER claim that a format changes how a recipe step behaves (whipping, drying, macaronage, folding, emulsifying, dry shake work the same once the product is used as the recipe says): the choice is about logistics, volume and service, not about technique. Process words from ${SPECIFICS[app]} may only set the scene.`,
    pro: `prose (<p>) about professional and industrial use of ${APP_LABEL[app]} specifically: how the foam or emulsion behaves in this process (${SPECIFICS[app]}), consistency between batches, safety versus raw egg white, egg-free, the formats named once (1 L Tetrapak, 10 L bag-in-box and 1 T IBC for the liquid, 200 g pouch for the powder), the technical sheet at most once.`,
    liquid: `prose (<p>) about when the liquid format is the right choice for ${APP_LABEL[app]} and how it is used in that process (${SPECIFICS[app]}); ready to pour and whip, chilled as in the recipe.`,
    powder: `prose (<p>) about when the powder format is the right choice for ${APP_LABEL[app]}: production context, storage and precise measuring, large batches, reconstituted with water in the proportion shown in the key figures (never write the figures), it does not spoil after opening; never "the same steps as the liquid".`,
  }[key];
  return `Language: ${LANG_NAME[locale]}. Application: ${APP_LABEL[app]}.
Rewrite ONE section of the page: "${key}". Return JSON {"title": "...", "html": "..."} only.
The new text must be ${sectionBrief}
Between eighty and one hundred forty words. No digits, no numbers in words, no dashes, no forbidden words, only the brand VERY AQUAFABA. It must NOT resemble the current text, which is too generic and identical across applications.

CURRENT TEXT (do not reuse its sentences):
${current}

VERIFIED FACTS (context only, never write figures):
${factsProse(facts, app)}

BRIEF FOR THIS APPLICATION (build on its drivers, process details and failure points):
${briefProse(brief)}

RECIPE PUBLISHED ON THE SITE (source of the application-specific wording):
${recipeText}`;
}

// ---- audit 2: an independent reviewer, not the writer ----
export const AUDITOR = `You are an independent quality auditor for B2B food-ingredient web copy. You do NOT rewrite; you judge. You check one page of VERY AQUAFABA (chickpea aquafaba, liquid and powder formats, egg-white replacement) against the facts sheet and the rules below, and you answer with strict JSON only.

Rules the copy must respect:
- No digits and no numbers in words (except the pack names "1 L", "10 L", "1 T", "30 g", "200 g", "3 kg").
- Claims allowed: (a) this list: ${ALLOWED_CLAIMS} (b) anything stated in the FACTS SHEET and the BRIEF below, including the recipe process (chilling, whipping, adding sugar, drying, dry shake, folding, emulsifying, macaronage, resting) described qualitatively and the failure points of the recipe; (c) "the technical sheet is available on request" and "the proportion shown in the key figures": these are NOT violations.
- Violations: prices or costs, shelf life in weeks or months, invented specifications, health claims, guarantees, figures in the prose, sample offers, the 1 T IBC or the bag-in-box presented as powder formats, "small batches versus large batches" as the only decision criterion, the same sentence or idea repeated on the page, "technical sheet" more than twice.
- Only the brand VERY AQUAFABA; no competitor or retailer names.
- Native, grammatical, formal language of the requested locale; no machine-translation artefacts; no em/en dash.
- Internal consistency: the FAQ answers agree with the sections; the "when" list names a concrete driver per bullet (rotation and shelf life after opening, cold chain, dosing precision, storage, workflow, industrial lines) with liquid and powder cases both present; nothing contradicts the facts sheet or the recipe.

Severity: "high" = must be fixed before publishing (unsupported claim, wrong language, contradiction, forbidden content, repetition); "low" = style or clarity.
Output: {"verdict":"pass"|"fix","issues":[{"path":"sections[1].html","severity":"high"|"low","issue":"...","suggestion":"..."}],"language_quality":"native"|"acceptable"|"poor","summary":"one sentence"}`;

export function buildAuditPrompt({ locale, app, entry, facts, keyword, recipeText = '', brief }) {
  return `Locale: ${LANG_NAME[locale]}. Application: ${APP_LABEL[app]}. Target keyword: "${keyword}".

FACTS SHEET:
${factsProse(facts, app)}

BRIEF (verified drivers, process details and failure points for this application):
${briefProse(brief)}

RECIPE PUBLISHED ON THE SITE (the copy must not contradict it: temperatures, chilling, speed, order of steps, storage):
${recipeText || '(not available)'}

Also flag as "high": marketing absolutes limited to these words and their translations: perfect/parfait/perfekt, optimal, best/meilleur/beste, ideal/idéal/ideaal, record, unique, incomparable (NOT "suitable", "practical", "recommended": those are fine); storage instructions telling to refrigerate the UNOPENED product (it is shelf-stable before opening; refrigerating the OPENED liquid is correct and published).

PAGE COPY (JSON; paths are seo.description, answer, sections[i].title, sections[i].html, faq[i].q, faq[i].a, relatedLabel):
${JSON.stringify(entry, null, 2)}

Audit it and return the JSON verdict.`;
}

export function loadFacts() {
  return readJson(new URL('../../data/applications/facts.json', import.meta.url));
}

const APPS_LIST = ['meringue', 'chocolate-mousse', 'mayonnaise', 'baking', 'cocktails', 'macarons'];

// Site context shared by writer and auditor: recipe summaries (locale's recipe,
// EN fallback) as plain text, plus the Products positioning.
export async function loadSiteContext(loc) {
  const strip = (h) => String(h || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const { contentPages } = await import('../../data/pages/content-pages.js');
  const { RECIPE_TO_APPLICATION } = await import('../../data/applications/ui.js');
  const recipeKeyFor = Object.fromEntries(Object.entries(RECIPE_TO_APPLICATION).map(([k, v]) => [v, k.replace('recipe:', '')]));
  const aliases = { en: {}, fr: { meringues: 'meringues', 'chocolate-mousse': 'mousse-au-chocolat', 'how-to-use-aquafaba-in-baking': 'comment-utiliser-laquafaba-en-patisserie-et-boulangerie' },
    de: { meringues: 'baiser', 'chocolate-mousse': 'schokoladenmousse', 'how-to-use-aquafaba-in-baking': 'wie-man-aquafaba-beim-backen-verwendet' },
    nl: { meringues: 'aquafaba-meringues', 'chocolate-mousse': 'chocolademousse', mayonnaise: 'mayonaise', 'how-to-use-aquafaba-in-baking': 'hoe-aquafaba-in-het-bakken-gebruiken' } };
  const roots = { en: '/aquafaba-recipes/', fr: '/fr/aquafaba-recettes/', de: '/de/rezepte/', nl: '/nl/aquafaba-recepten/' };
  const recipes = {};
  for (const app of APPS_LIST) {
    const slug = aliases[loc][recipeKeyFor[app]] || recipeKeyFor[app];
    const page = contentPages[`${roots[loc]}${slug}/`] || contentPages[`${roots.en}${recipeKeyFor[app]}/`];
    recipes[app] = page ? `${page.hero?.title}. ${page.sections.map((s) => `${s.title ? s.title + ': ' : ''}${strip(s.html)}`).join(' ').slice(0, 1800)}` : '(no recipe found)';
  }
  const products = 'Powder: easy to store and measure, does not spoil after opening, reconstituted with water in a published proportion, suited to factories, bakeries, professional kitchens and venues with little rotation. Liquid: ready to pour and use, chilled before whipping, used within days once opened, the format of bakeries, bars and kitchens with daily rotation and of industrial lines (10 L bag-in-box, 1 T IBC). Both are plant-based, egg-free, shelf-stable before opening, a functional egg-white replacement for foaming, emulsifying and binding. Technical sheet on request; professional enquiries through the form on the page.';
  return { recipes, products };
}
