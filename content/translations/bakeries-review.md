# Bakery expansion translations

English source: `data/resources/texts/bakeries.en.js` on `expansion-bakeries`.
Scope: all 41 bakery expansion pages, translated into French, German and Dutch.

The translations preserve the English source's facts, tokens, section order, lists,
tables, FAQs and links. Generated ingredient and comparison tables and calculator
controls are localized separately in `data/resources/bakeries-localization.js`.
All recipe and pack calculations continue to use the existing facts files.

## Validation

- `node scripts/applications/check-bakery-translations.mjs`
- `node scripts/applications/check-guides.mjs`
- `npm run build`
- `node scripts/applications/check-pages.mjs http://localhost:3058`
- `node scripts/check-internal-links.mjs http://localhost:3058`
- `node scripts/check-overlap.mjs http://localhost:3058`
- Browser checks of the translated pages at desktop and mobile widths, including
  quantity calculators, process sheets and pack finder.

## Terminology for native review

Formal address: **vous**, **Sie**, **u**. Aquafaba is masculine in French, neuter
in German and a de-word in Dutch. Reconstitution: **reconstituer**, **anrühren**,
**aanmaken**. Technical sheet: **fiche technique**, **technisches Datenblatt**,
**technische fiche**. A batch is a **préparation** (or **fournée** for baking), an
**Ansatz**, or a **bereiding**. Cornflour in the recipes is translated as maize
starch, not maize flour.

The source's competitor product names and dated label comparisons are retained,
as explicitly requested. Translations do not add product or allergen claims.
