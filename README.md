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

## Environment variables

Set in Vercel (Project → Settings → Environment Variables). Values never go in the repo.

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | yes | Sends the contact and B2B enquiry emails |
| `CONTACT_FROM` | yes | Sender address of those emails |
| `CONTACT_TO` | yes | Recipient address |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | recommended | Captcha widget on both forms (no key = no captcha) |
| `TURNSTILE_SECRET_KEY` | recommended | Server side captcha check |
| `NEXT_PUBLIC_AMAZON_LINK_PARAMS_US` | optional | Amazon tracking for amazon.com links, see below |
| `NEXT_PUBLIC_AMAZON_LINK_PARAMS_DE` | optional | Amazon tracking for amazon.de links, see below |

### Amazon tracking (when the Amazon tag is available)

Amazon tracking is per marketplace: an Associates or Attribution tag only works on its own
Amazon, so there is one variable per marketplace. `data/applications/tracking.js` (`purchaseHref`)
detects the marketplace from each link and appends that variable.

| Variable | Links it applies to |
|---|---|
| `NEXT_PUBLIC_AMAZON_LINK_PARAMS_US` | amazon.com: purchase button of the 6 EN guides |
| `NEXT_PUBLIC_AMAZON_LINK_PARAMS_DE` | amazon.de: purchase button of the 6 DE guides, Amazon logo in the partner carousel (home and Products) |

1. Add the variable of the marketplace the tag belongs to in Vercel, environment Production, with the
   querystring Amazon provides, without the leading `?`:
   - Associates: `tag=<your-tag>`
   - Amazon Attribution: the full querystring of the campaign, e.g. `maas=<...>&ref_=aa_maas&aa_campaignid=<...>`
2. Redeploy: `NEXT_PUBLIC_*` variables are inlined at build time, a running deployment will not pick it up.
3. Check: open a guide of that marketplace (EN `/resources/applications/meringue/`, DE
   `/de/ressourcen/anwendungen/baiser/`) and confirm the "buy on Amazon" link ends with the new parameters.

Without a variable, the guide buttons of that marketplace carry a default UTM
(`utm_source=veryaquafaba.com&utm_medium=referral&utm_campaign=application-guides`) and the carousel
keeps its original link. When the variable is set it replaces that UTM; to keep both, include the UTM
keys in the value. InstantChef (FR) is never changed. The click goals (`data-goal`) are independent of
these parameters and keep working unchanged. `node scripts/applications/test-purchase-links.mjs` checks
the logic.

## Routing inventory

The canonical route list is `data/routes.json`. Verify against the dev server:

```bash
npm run check:routes
```

The `freeze:*`, `localize:*`, `mirror:*` and `snapshot` scripts are leftover
migration tooling from the WordPress-mirror phase and are not part of the
runtime.
