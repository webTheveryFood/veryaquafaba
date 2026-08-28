# veryaquafaba

Exact local replica of https://veryaquafaba.com built on Next.js 16.

## Branch roles

- `fix/local-routing-mirror`: live reference mirror. It can proxy the current WordPress site and contains the original downloaded assets.
- `feat/exact-local-replica`: frozen local replica. Runtime rendering does **not** fetch WordPress.

## Fidelity rules

- preserve the 71 public sitemap routes exactly;
- preserve EN / DE / FR / NL URL structure;
- preserve the current WordPress/Elementor markup and styling as the visual reference;
- preserve image files exactly as downloaded: no `next/image`, resizing, transcoding or recompression;
- keep WordPress upload paths such as `/wp-content/uploads/...`;
- localize first-party HTML/CSS/JS URLs so the replica does not need the production WordPress host to render.

## How the frozen replica works

`npm run freeze:site` downloads the HTML/XML/text for the 71 known pages plus `robots.txt`, `sitemap_index.xml` and `page-sitemap.xml`. The snapshots are stored in `content/pages/` and first-party production/CDN URLs are converted to local paths.

`npm run localize:assets` scans text assets already committed under `public/` and converts absolute first-party references inside CSS/JS/JSON to local paths. Binary images, SVG artwork and fonts are not rewritten.

The catch-all App Router handler reads only `content/pages/manifest.json` and the corresponding local snapshot. There is no production `fetch()` in the runtime route.

## Prepare manually

Normally GitHub Actions freezes the branch automatically. To regenerate locally:

```bash
npm install
npm run prepare:replica
npm run dev
```

Open:

```text
http://localhost:3000/
http://localhost:3000/buy-aquafaba/
http://localhost:3000/aquafaba-recipes/
http://localhost:3000/fr/acheter-aquafaba/
http://localhost:3000/de/aquafaba-kaufen/
http://localhost:3000/nl/aquafaba-kopen/
```

## Verify routing

With the dev server running:

```bash
npm run check:routes
```

The canonical route inventory is `data/routes.json`.

## Next phase

This frozen branch is the pixel-faithful safety net. Once it matches the current site, each Elementor section can be replaced incrementally by native React/Next.js components while comparing against the frozen local version and reusing the same original assets.
