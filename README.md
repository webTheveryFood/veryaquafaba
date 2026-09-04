# veryaquafaba

Native Next.js 16 rebuild of veryaquafaba.com. The site was fully migrated off
the original WordPress/Elementor stack: every page now renders from React
components and plain data modules — no runtime WordPress fetch, no Elementor
markup.

## Stack

- Next.js 16 (App Router) + React 19
- Multi-locale: EN (root) + DE / FR / NL / ES
- No CMS at runtime; content lives in `data/native-pages.js` and the components under `components/`

## How it renders

The catch-all route `app/[[...path]]/page.js` resolves each URL through
`lib/page-registry`, then renders the matching native template from
`components/templates/` with content from `data/native-pages.js`. Locale
alternates and canonical URLs come from the same registry.

Localized nav slugs (`/aquafaba-kaufen/`, `/acheter-aquafaba/`, …) are mapped to
their locale-prefixed routes via `redirects()` in `next.config.mjs`.

`/sitemap.xml` and `/robots.txt` are native Next metadata routes (`app/sitemap.js`,
`app/robots.js`): absolute `https://veryaquafaba.com` URLs for every public
EN/DE/FR/NL page with `hreflang` alternates, built from `lib/page-registry.js`.
The old WordPress `/sitemap_index.xml` and `/page-sitemap.xml` redirect to it.
Nothing is snapshotted anymore (`content/pages/manifest.json` is empty).

## Images

All raster assets were re-encoded (mostly to **WebP**) preserving visual quality
to cut payload and improve load performance. Files live under `public/`.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run start
```

Sample routes:

```text
/
/buy-aquafaba/
/aquafaba-recipes/
/fr/acheter-aquafaba/
/de/aquafaba-kaufen/
/nl/aquafaba-kopen/
/es/
```

## Routing inventory

The canonical route list is `data/routes.json`. Verify against the dev server:

```bash
npm run check:routes
```

The `freeze:*`, `localize:*`, `mirror:*` and `snapshot` scripts are leftover
migration tooling from the WordPress-mirror phase and are not part of the
runtime.
