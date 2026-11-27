// Writes the card copies of every photo shown in a card grid of the Resources pages, and data/card-images.json.
// A card shows its photo as a square, cropped at the centre (object-fit: cover, 50% 50%), about 390 px wide on a phone
// and 372 px on a desktop, while the photos are files of up to 1920 px. Each photo gets the same centre square at
// 480 px and 960 px (never larger than the original), so a card looks the same and weighs a fraction.
// Run it against a running build after adding cards:  node scripts/card-images.mjs http://localhost:3058
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const BASE = process.argv[2] || 'http://localhost:3058';
const PUBLIC = path.join(process.cwd(), 'public');
const OUT = path.join(PUBLIC, 'cards');
const SIZES = [480, 960];

// The pages with card grids: every page of the sitemap whose main is a Resources page (the square cards).
const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
const photos = new Set();
for (let i = 0; i < urls.length; i += 12) {
  await Promise.all(urls.slice(i, i + 12).map(async (u) => {
    const html = await (await fetch(BASE + u)).text();
    if (!/<main class="va-page va-page-resources"/.test(html)) return;
    for (const m of html.matchAll(/<article class="va-card"[^>]*>\s*<img\b[^>]*?\ssrc="([^"]+)"/g)) {
      const src = m[1].replace(/&amp;/g, '&');
      if (src.startsWith('/') && !src.startsWith('/cards/')) photos.add(src.split(/[?#]/)[0]);
    }
  }));
}

fs.mkdirSync(OUT, { recursive: true });
const manifest = {};
let before = 0; let after = 0;
for (const src of [...photos].sort()) {
  const file = path.join(PUBLIC, decodeURI(src));
  if (!fs.existsSync(file)) { console.log('missing', src); continue; }
  const { width, height } = await sharp(file).metadata();
  const side = Math.min(width, height);
  const name = decodeURI(src).replace(/^\/(wp-content\/uploads\/)?/, '').replace(/\.[a-z]+$/i, '').replace(/[^\w-]+/g, '-');
  const widths = [...new Set(SIZES.map((s) => Math.min(s, side)))];
  for (const w of widths) {
    await sharp(file)
      .extract({ left: Math.floor((width - side) / 2), top: Math.floor((height - side) / 2), width: side, height: side })
      .resize(w, w).webp({ quality: 80 }).toFile(path.join(OUT, `${name}-${w}.webp`));
  }
  manifest[src] = { base: `/cards/${name}`, widths };
  before += fs.statSync(file).size; after += fs.statSync(path.join(OUT, `${name}-${widths.at(-1)}.webp`)).size;
}
fs.writeFileSync(path.join(process.cwd(), 'data/card-images.json'), `${JSON.stringify(manifest, null, 1)}\n`);
console.log(`${Object.keys(manifest).length} card photos: ${Math.round(before / 1024)} KB as originals, ${Math.round(after / 1024)} KB at the larger card size`);
