// Prompts for Tontin (/api/llm/completion): writer system prompt, page prompt,
// field-level repair prompt, and the independent auditor (audit 2).
// The model writes prose only: the app renders every figure from facts.json.
import { readJson } from './validate.mjs';

const LANG_NAME = { en: 'British English', de: 'German (formal Sie)', fr: 'French (formal vous)', nl: 'Dutch (formal u)' };
const APP_LABEL = {
  meringue: 'meringue', 'chocolate-mousse': 'chocolate mousse', mayonnaise: 'mayonnaise (vegan mayo)',
  baking: 'baking (cakes, cookies, doughs, sponges)', cocktails: 'cocktail foams (sours, fizzes)', macarons: 'macarons',
};

const FORBIDDEN_WORDS = 'economical, economic, cost, costs, price, cheaper, savings, budget, économique, économie, coût, prix, rentable, wirtschaftlich, günstig, Kosten, Preis, sparen, voordelig, goedkoop, kosten, prijs, besparen; dispersed, dispersion, dissolved, diluted, reconstituted, rehydrated, dispersé, dissous, dilué, reconstitué, réhydraté, angerührt, aufgelöst, opgelost, aangemaakt; guarantee, guarantees, garantit, garantie, garantiert, garandeert, gewährleistet, waarborgt';

export const ALLOWED_CLAIMS = 'the liquid is ready to pour and to whip; the powder is easy to store and to measure and suits factories, bakeries and professional kitchens; both are plant-based, egg-free (allergen-free), shelf-stable before opening, a functional egg-white replacement for foaming, emulsifying and binding; stable, reproducible results; safer than raw egg white; technical sheets and free samples on request; formats: 1 L Tetrapak (liquid), 200 g pouch (powder), 1 T IBC on request.';

export const SYSTEM = `You are the technical B2B copywriter of VERY AQUAFABA, a chickpea aquafaba producer selling two formats: liquid (ready to pour) and powder (to be measured), for pastry chefs, bakeries, bars, foodservice and industrial food production.

You write ONE decision page per application answering "liquid or powder aquafaba for this application?". It is NOT a recipe: the recipe already exists on the site and is linked from the page.

HARD RULES (a page that breaks one is rejected):
1. Never write any digit (0-9) and never write a number in words (no "five", "fünf", "cinq", "vijf", "half", "double"...). The website renders every figure itself from a verified data sheet. Refer to quantities qualitatively ("the dose shown in the key figures", "a small quantity", "per batch"). The ONLY exception: the pack names "1 L" (Tetrapak, liquid), "200 g" (pouch, powder) and "1 T" (IBC) may be written exactly like that. No temperatures, times, grams, percentages, ratios, shelf-life days or counts anywhere, not even in the FAQ.
2. Never use an em dash or an en dash. Use commas, full stops or parentheses.
3. Name only the brand VERY AQUAFABA (always written in capitals). Never name any other brand, competitor or retailer.
4. No placeholders, no brackets, no "TODO", no health claims, no guarantees, no superlatives about performance you cannot back. Allowed claims, and nothing beyond them: ${ALLOWED_CLAIMS}
5. Do not describe HOW the powder is prepared (it is not published), do not compare shelf lives, do not mention price, cost, savings or economy, and do not invent industrial specifications. For all of that, say that the technical sheet and samples are available on request.
6. Write in the requested language only, formal register, professional and concrete. Short sentences.
   FORBIDDEN WORDS in any language (the page is rejected if one appears): ${FORBIDDEN_WORDS}; waste, gaspillage, Verschwendung, verspilling; superlatives such as perfect, optimal, best, record, parfait, optimal, meilleur, perfekt, beste. Talk about precise measuring, storage space and logistics instead of money or waste, and about "preparation according to the technical sheet" instead of describing how the powder is prepared (never call the powder "easy to prepare").
   Storage: both formats are shelf-stable before opening (ambient); never write that the product must be kept refrigerated, never give a shelf-life duration ("several weeks", "long shelf life"). Chilling the LIQUID right before whipping is a recipe step and may be mentioned. Never contradict the recipe summary (for example the recipe whips at high speed and uses chilled liquid).
   "Allergen-free" describes the product (it contains no egg): never call the finished dish, dessert, sauce or baked goods allergen-free. No "excellent", "without any risk", "optimised", "ensures food safety", "eliminates the risks" (say "safer than raw egg white"), no delivery terms ("immediate delivery"), no "freshness" claims. FAQ questions must all be different. Refer to doses as "the dose shown in the key figures on this page", in the page's own language (EN "key figures", DE "Kennzahlen", FR "chiffres clés", NL "kerncijfers"; never "Schlüsselwert", never a German word in another language). Write the target keyword with natural capitalisation inside a sentence, never as a lowercase tag. Every field, including "answer" and "seo.description", must be in the requested language. The "pro" section is prose (paragraphs), never a copy of the "when" list. The site is B2B: address professionals, never home cooks.
7. HTML allowed inside "html" fields: <p>, <ul>, <li>, <strong> only. No headings, no links, no other tags.
8. Output strictly the JSON object requested, with no markdown fences and no commentary.`;

export function factsProse(facts, app) {
  const f = facts.applications[app];
  const shared = facts.shared;
  return [
    `Ratio published on the Products page: ${shared.ratio.egg_white_liquid_g} g of liquid replaces one egg white, ${shared.ratio.egg_white_powder_g} g of powder replaces one egg white, ${shared.ratio.egg_liquid_g} g of liquid replaces one whole egg.`,
    f.dose_g ? `Recipe dose for this application: ${f.dose_g} g of liquid per batch.` : 'This page is about baking in general: there is no single dose, only the egg equivalences above.',
    'Packs with a published equivalence: 1 L Tetrapak (liquid) and 200 g pouch (powder). A 1 T IBC exists for industrial buyers, on request.',
    'Not published (do NOT state them): powder preparation, shelf life after opening, industrial specifications, prices.',
    `Process parameters that the page shows in its table: ${(f.process || []).map((p) => p.key).join(', ')}.`,
  ].join('\n');
}

const SCHEMA = (app) => `{
  "seo": { "description": "meta description of AT MOST twenty-two words in total (search engines cut longer ones): two short sentences, the first states the choice (liquid or powder for this application) with the keyword, the second says who it is for; no digits" },
  "answer": "one or two sentences that complete the answer to 'liquid or powder?' for this application, qualitatively, no digits; they FOLLOW a sentence that already starts with the application name and the dose, so do not open with 'For <application>' again: start directly with the decision (e.g. 'The liquid suits ..., the powder suits ...')",
  "sections": [
    { "key": "liquid", "title": "...", "html": "<p>...</p>  (when the liquid format is the right choice for this application, how it is used, its practical advantages)" },
    { "key": "powder", "title": "...", "html": "<p>...</p>  (when the powder format is the right choice: storage and measuring advantages, large batches, logistics; preparation according to the technical sheet, never describe it and never say it follows the same steps as the liquid)" },
    { "key": "when",   "title": "...", "html": "<ul><li>...</li></ul>  (decision list: choose liquid if..., choose powder if..., by kitchen type, volume, storage, logistics)" },
    { "key": "pro",    "title": "...", "html": "<p>...</p>  (professional and industrial use: consistency, batching, food safety versus raw egg, allergen-free, packs available, technical sheet and samples on request)" }
  ],
  "faq": [ { "q": "...", "a": "plain text answer, two to four sentences" } ],
  "relatedLabel": "link label to the existing ${APP_LABEL[app]} recipe on the site"
}`;

export function buildPrompt({ locale, app, keyword, h1, title, facts, recipeText, productsText, ragSnippets = [] }) {
  const rag = ragSnippets.length
    ? `\nVERIFIED NOTES FROM THE KNOWLEDGE BASE (use what is relevant, never contradict them, never copy figures from them):\n${ragSnippets.map((s) => `- ${s.content.replace(/\s+/g, ' ').slice(0, 400)}`).join('\n')}\n`
    : '';
  return `Language: ${LANG_NAME[locale]}.
Application: ${APP_LABEL[app]}.
Target keyword (must appear naturally in the meta description and at least once in the sections): "${keyword}".
Page title already fixed by the site (do not repeat it as a heading): "${title}". H1: "${h1}".

VERIFIED FACTS (context only; never rewrite figures, the page displays them in a table):
${factsProse(facts, app)}
${rag}
EXISTING RECIPE ON THE SITE (summary, for consistency; do not copy it, do not repeat its steps):
${recipeText}

PRODUCTS PAGE POSITIONING (for consistency):
${productsText}

REQUIREMENTS:
- Each of the four sections: between eighty and one hundred sixty words, in ${LANG_NAME[locale]}. The "when" section is a list of at least six bullets, each bullet a complete sentence (choose liquid if..., choose powder if...).
- APPLICATION-SPECIFIC, not generic: this site has six of these pages and they must not read alike. At least half of the "when" bullets and most of the "pro" section must refer to what is particular to ${APP_LABEL[app]} (its process from the recipe summary: whipping, drying, macaronage and maturing, folding chocolate, emulsifying with oil, dry shake and à la minute bar service, replacing whole eggs or whites in doughs; its texture goals; its production context). "Small batches versus large batches" and "storage space" may appear once each, not in every bullet.
- Between four and six FAQ items; questions a chef or a purchasing manager would ask about choosing liquid or powder for ${APP_LABEL[app]}; each answer also reflected in the sections. Never state or imply that the powder goes through the same or common steps as the liquid: for the powder, "preparation according to the technical sheet" is the only thing you may say.
- No digits anywhere, no numbers in words, no dashes, only the brand VERY AQUAFABA.

Return exactly this JSON structure:
${SCHEMA(app)}`;
}

// Field-level repair: the model rewrites ONLY the listed fields; the merge in
// generate-copy.mjs copies back only those paths, so nothing else can change.
export function buildRepairPrompt({ locale, app, candidate, problems, facts, recipeText = '' }) {
  return `Language: ${LANG_NAME[locale]}. Application: ${APP_LABEL[app]}.
Below is the current JSON of the page. Some fields were REJECTED. Rewrite ONLY the rejected fields so that they respect the rules, keeping their meaning, length and register; return the COMPLETE JSON object with every other field exactly as it is.

VERIFIED FACTS (context only):
${factsProse(facts, app)}

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

export function buildSectionPrompt({ locale, app, key, current, recipeText, facts }) {
  const brief = {
    when: `a decision list: <ul> with six <li>, each a complete sentence. Each bullet describes a concrete PRODUCTION SITUATION of ${APP_LABEL[app]} (who makes it, service rhythm, test batches of new flavours, daily small runs, seasonal peaks, pre-batched bases, industrial lines, limited storage in that kind of business) and says which format suits it: the liquid because it is ready to pour and whip and comes in 1 L Tetrapak (or 1 T IBC for industry), the powder because it is measured precisely and stored compactly in 200 g pouches. NEVER claim that a format changes how a recipe step behaves (whipping, drying, macaronage, folding, emulsifying, dry shake work the same once the product is used as the recipe says): the choice is about logistics, volume and service, not about technique. Process words from ${SPECIFICS[app]} may only set the scene.`,
    pro: `prose (<p>) about professional and industrial use of ${APP_LABEL[app]} specifically: how the foam or emulsion behaves in this process (${SPECIFICS[app]}), consistency between batches, safety versus raw egg white, egg-free, the 1 L Tetrapak and 200 g pouch, 1 T IBC on request, technical sheet and samples on request.`,
    liquid: `prose (<p>) about when the liquid format is the right choice for ${APP_LABEL[app]} and how it is used in that process (${SPECIFICS[app]}); ready to pour and whip, chilled as in the recipe.`,
    powder: `prose (<p>) about when the powder format is the right choice for ${APP_LABEL[app]}: production context, storage and precise measuring, large batches, preparation only "according to the technical sheet" (never describe it), never "the same steps as the liquid".`,
  }[key];
  return `Language: ${LANG_NAME[locale]}. Application: ${APP_LABEL[app]}.
Rewrite ONE section of the page: "${key}". Return JSON {"title": "...", "html": "..."} only.
The new text must be ${brief}
Between eighty and one hundred forty words. No digits, no numbers in words, no dashes, no forbidden words, only the brand VERY AQUAFABA. It must NOT resemble the current text, which is too generic and identical across applications.

CURRENT TEXT (do not reuse its sentences):
${current}

VERIFIED FACTS (context only, never write figures):
${factsProse(facts, app)}

RECIPE PUBLISHED ON THE SITE (source of the application-specific wording):
${recipeText}`;
}

// ---- audit 2: an independent reviewer, not the writer ----
export const AUDITOR = `You are an independent quality auditor for B2B food-ingredient web copy. You do NOT rewrite; you judge. You check one page of VERY AQUAFABA (chickpea aquafaba, liquid and powder formats, egg-white replacement) against the facts sheet and the rules below, and you answer with strict JSON only.

Rules the copy must respect:
- No digits and no numbers in words (except the pack names "1 L", "200 g", "1 T").
- Claims allowed: (a) this list: ${ALLOWED_CLAIMS} (b) anything stated in the FACTS SHEET below, including the recipe process for the LIQUID (chilling, whipping, adding sugar, baking, dry shake, folding) described qualitatively; (c) "preparation according to the technical sheet", "technical sheet and samples on request", "follow the technical sheet after opening": these are NOT violations, they are the required way to defer unpublished details.
- Violations: describing HOW the powder is prepared (dispersing, dissolving, diluting, reconstituting, rehydrating, or saying it follows the same steps as the liquid), prices or costs, shelf-life comparisons or durations, invented specifications, health claims, guarantees, figures.
- Only the brand VERY AQUAFABA; no competitor or retailer names.
- Native, grammatical, formal language of the requested locale; no machine-translation artefacts; no em/en dash.
- Internal consistency: the FAQ answers agree with the sections; the "when" list gives a balanced decision (liquid cases and powder cases); nothing contradicts the facts sheet.

Severity: "high" = must be fixed before publishing (unsupported claim, wrong language, contradiction, forbidden content); "low" = style or clarity.
Output: {"verdict":"pass"|"fix","issues":[{"path":"sections[1].html","severity":"high"|"low","issue":"...","suggestion":"..."}],"language_quality":"native"|"acceptable"|"poor","summary":"one sentence"}`;

export function buildAuditPrompt({ locale, app, entry, facts, keyword, recipeText = '' }) {
  return `Locale: ${LANG_NAME[locale]}. Application: ${APP_LABEL[app]}. Target keyword: "${keyword}".

FACTS SHEET:
${factsProse(facts, app)}

RECIPE PUBLISHED ON THE SITE (the copy must not contradict it: temperatures, chilling, speed, order of steps, storage):
${recipeText || '(not available)'}

Also flag as "high": marketing absolutes limited to these words and their translations: perfect/parfait/perfekt, optimal, best/meilleur/beste, record, unique, incomparable (NOT "ideal", "suitable", "practical", "recommended": those are fine); storage instructions telling to refrigerate the product (it is shelf-stable before opening; "keeps in its original packaging until use" and "after opening see the technical sheet" are fine); "easy to prepare" for the powder; and any statement that contradicts the recipe above. Reminder: "prepared/measured according to the technical sheet", "technical sheet and samples on request" and chilling the LIQUID before whipping (the recipes use chilled aquafaba) are NOT violations; do not flag them.

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
  const products = 'Powder: easy to store and measure, best for factories, bakeries and professional kitchens. Liquid: ready to pour and use, perfect for bakeries, bars and kitchens. Both are plant-based, allergen-free (no egg), shelf-stable before opening, a functional egg-white replacement for foaming, emulsifying and binding. Technical sheets and free samples on request through the contact form.';
  return { recipes, products };
}
