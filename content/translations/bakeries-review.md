# Bakery expansion translations

English source: `data/resources/texts/bakeries.en.js` on `expansion-bakeries`.
Scope: all 41 bakery expansion pages, translated into French, German and Dutch.

The translations preserve the English source's facts, tokens, section order, lists,
tables, FAQs and links. Generated ingredient and comparison tables and calculator
controls are localized separately in `data/resources/bakeries-localization.js`.
All recipe and pack calculations continue to use the existing facts files.

## Validation

Source validation uses `node scripts/applications/check-bakery-translations.mjs`
for matching page structure, tokens, HTML tags, links and table labels, and
`node scripts/applications/check-guides.mjs` for existing guides.

The production build, server checks and browser checks are intentionally skipped
at the user's request. Browser test scripts are included for a later review;
their presence does not mean these checks have been run.

## Terminology for native review

Formal address: **vous**, **Sie**, **u**. Aquafaba is masculine in French, neuter
in German and a de-word in Dutch. Reconstitution: **reconstituer**, **anrühren**,
**aanmaken**. Technical sheet: **fiche technique**, **technisches Datenblatt**,
**technische fiche**. A batch is a **préparation** (or **fournée** for baking), an
**Ansatz**, or a **bereiding**. Cornflour in the recipes is translated as maize
starch, not maize flour.

The source's competitor product names and dated label comparisons are retained,
as explicitly requested. Translations do not add product or allergen claims.
