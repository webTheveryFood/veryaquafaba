// Writes data/image-sizes.json: the intrinsic width and height of every image under public/, keyed by
// its URL path. lib/image-size.js reads it so each <img> carries width and height and the browser
// reserves its space before the file arrives (layout shift, CLS). An SVG is listed only when its root
// declares a numeric width and height: one with a viewBox alone has no intrinsic size to give.
// Run it again after adding images:  node scripts/image-sizes.mjs
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const PUBLIC = path.join(process.cwd(), 'public');
const RASTER = /\.(webp|png|jpe?g|gif|avif)$/i;

function* files(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* files(full);
    else yield full;
  }
}

function svgSize(file) {
  const root = fs.readFileSync(file, 'utf8').match(/<svg\b[^>]*>/i)?.[0] || '';
  const num = (attr) => root.match(new RegExp(`\\s${attr}="\\s*([\\d.]+)(px)?\\s*"`))?.[1];
  const [w, h] = [num('width'), num('height')];
  return w && h ? [Math.round(+w), Math.round(+h)] : null;
}

const sizes = {};
for (const file of files(PUBLIC)) {
  const url = '/' + path.relative(PUBLIC, file).split(path.sep).join('/');
  if (/\.svg$/i.test(file)) {
    const s = svgSize(file);
    if (s) sizes[url] = s;
  } else if (RASTER.test(file)) {
    const { width, height } = await sharp(file).metadata();
    if (width && height) sizes[url] = [width, height];
  }
}

const sorted = Object.fromEntries(Object.entries(sizes).sort(([a], [b]) => a.localeCompare(b)));
fs.writeFileSync(path.join(process.cwd(), 'data', 'image-sizes.json'), `${JSON.stringify(sorted, null, 0).replace(/\],"/g, '],\n"')}\n`);
console.log(`data/image-sizes.json: ${Object.keys(sorted).length} images`);
