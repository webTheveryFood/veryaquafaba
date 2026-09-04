// Native robots.txt (served at /robots.txt).
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://veryaquafaba.com/sitemap.xml',
  };
}
