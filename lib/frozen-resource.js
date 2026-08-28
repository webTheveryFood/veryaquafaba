import fs from 'node:fs/promises';
import path from 'node:path';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'pages');
let manifestPromise;

async function manifest() {
  manifestPromise ??= fs.readFile(path.join(CONTENT_DIR, 'manifest.json'), 'utf8').then(JSON.parse);
  return manifestPromise;
}

export async function frozenResourceResponse(route) {
  const data = await manifest();
  const entry = data[route];
  if (!entry) return new Response('Not found', { status: 404 });

  const target = path.resolve(CONTENT_DIR, entry.file);
  if (!target.startsWith(`${path.resolve(CONTENT_DIR)}${path.sep}`)) {
    return new Response('Invalid frozen resource path', { status: 500 });
  }

  const body = await fs.readFile(target);
  return new Response(body, {
    status: entry.status || 200,
    headers: {
      'content-type': entry.contentType || 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=0, must-revalidate',
      'x-veryaquafaba-replica': 'frozen-seo-resource',
    },
  });
}
