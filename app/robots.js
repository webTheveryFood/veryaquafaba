// Native robots.txt (served at /robots.txt).
// GoogleOther (Google's non-Search crawlers) is blocked: it adds crawl load
// with no indexing benefit for this site.
export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: ['GoogleOther', 'GoogleOther-Image', 'GoogleOther-Video'], disallow: '/' },
    ],
    sitemap: 'https://veryaquafaba.com/sitemap.xml',
  };
}
