import fs from 'node:fs/promises';
import path from 'node:path';

const CONTENT_DIR = path.join(process.cwd(), 'content', 'pages');
let manifestPromise;

async function getManifest() {
  manifestPromise ??= fs.readFile(path.join(CONTENT_DIR, 'manifest.json'), 'utf8').then(JSON.parse);
  return manifestPromise;
}

function match(html, regex, fallback = '') {
  return html.match(regex)?.[1]?.trim() || fallback;
}

function decodeEntities(value = '') {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#039;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');
}

function stripScripts(markup = '') {
  return markup.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
}

// The frozen WordPress markup carries attributes React rejects when the HTML is
// rendered as React elements: inline on* handlers (which never ran anyway — the
// switcher toggle is handled by SwitcherToggle) and `fetchpriority` (an unknown
// React DOM prop, only a loading hint). Drop them so they stop throwing console
// errors; neither has any visual effect.
function sanitizeMarkup(markup = '') {
  return markup
    .replace(/\son[a-z]+\s*=\s*("[^"]*"|'[^']*')/gi, '')
    .replace(/\sfetchpriority\s*=\s*("[^"]*"|'[^']*')/gi, '');
}

function parseAttributes(raw = '') {
  const attrs = {};
  const attrRegex = /([:\w-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  for (const item of raw.matchAll(attrRegex)) {
    const [, name, doubleQuoted, singleQuoted, bare] = item;
    attrs[name] = doubleQuoted ?? singleQuoted ?? bare ?? true;
  }
  return attrs;
}

function extractScripts(markup = '', scope = 'body') {
  return [...markup.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)]
    .map((item, index) => ({
      id: `${scope}-snapshot-script-${index}`,
      attrs: parseAttributes(item[1] || ''),
      code: item[2] || '',
    }))
    .filter((script) => script.attrs.type !== 'application/ld+json');
}

// Each frozen page links its own per-page Elementor CSS (e.g. post-2844.css)
// that carries page-specific rules — hero background size/position, layout — and
// is NOT in the global stylesheet list. Without it a snapshot page renders with
// the wrong styling (e.g. the hero macaron background missing). Pull every
// stylesheet href from the frozen head so the page loads its complete CSS.
function extractStyleHrefs(head = '') {
  return [...head.matchAll(/<link\b[^>]*rel=["']stylesheet["'][^>]*>/gi)]
    .map((tag) => tag[0].match(/href=["']([^"']+)["']/i)?.[1])
    .filter((href) => href && href.startsWith('/'));
}

function extractJsonLd(head = '') {
  return [...head.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .map((item) => item[1].trim())
    .filter(Boolean);
}

function extractStyleMarkup(head = '') {
  return [...head.matchAll(/<link\b[^>]*>|<style\b[^>]*>[\s\S]*?<\/style>/gi)]
    .map((item) => item[0])
    .filter((tag) => tag.toLowerCase().startsWith('<style') || /\brel=["'][^"']*stylesheet/i.test(tag))
    .join('\n');
}

export async function getSnapshot(route) {
  const manifest = await getManifest();
  const entry = manifest[route];
  if (!entry) return null;

  const filePath = path.resolve(CONTENT_DIR, entry.file);
  if (!filePath.startsWith(`${path.resolve(CONTENT_DIR)}${path.sep}`)) return null;

  const html = await fs.readFile(filePath, 'utf8');
  const head = match(html, /<head[^>]*>([\s\S]*?)<\/head>/i);
  const bodyTag = html.match(/<body\b([^>]*)>/i)?.[1] || '';
  const bodyHtml = match(html, /<body\b[^>]*>([\s\S]*?)<\/body>/i);
  const bodyClass = match(bodyTag, /class=["']([^"']*)["']/i);
  const lang = match(html, /<html\b[^>]*lang=["']([^"']+)["']/i, 'en-GB');

  return {
    route,
    entry,
    html,
    lang,
    headMarkup: sanitizeMarkup(stripScripts(head)),
    styleMarkup: extractStyleMarkup(head),
    styleHrefs: extractStyleHrefs(head),
    bodyMarkup: sanitizeMarkup(stripScripts(bodyHtml)),
    headScripts: extractScripts(head, 'head'),
    bodyScripts: extractScripts(bodyHtml, 'body'),
    jsonLd: extractJsonLd(head),
    bodyClass,
    metadata: {
      title: decodeEntities(match(head, /<title[^>]*>([\s\S]*?)<\/title>/i)),
      description: decodeEntities(match(head, /<meta\b[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i)),
      ogImage: match(head, /<meta\b[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["'][^>]*>/i),
      robots: match(head, /<meta\b[^>]*name=["']robots["'][^>]*content=["']([^"']*)["'][^>]*>/i),
    },
  };
}
