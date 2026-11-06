import sizes from '../data/image-sizes.json';

// Intrinsic width and height of a public image, spread on an <img> so the browser reserves its space
// before the file arrives (CLS). Every image carries `height: auto` in the site's CSS, so the
// attributes only set the aspect ratio. An image missing from the map (scripts/image-sizes.mjs
// writes it) renders without them, as before.
export function imageSize(src) {
  const size = sizes[String(src || '').split(/[?#]/)[0]];
  return size ? { width: size[0], height: size[1] } : {};
}
