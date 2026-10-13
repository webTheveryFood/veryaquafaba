// IndexNow: tells Bing (and the engines that read IndexNow: Yandex, Seznam, Naver; DuckDuckGo,
// Yahoo, Ecosia and Qwant through the Bing index) which live pages are new or changed.
//   node scripts/indexnow.mjs                  every page in the live sitemap (first notice)
//   node scripts/indexnow.mjs /route/ /other/  only those pages
//   node scripts/indexnow.mjs --diff <sha>     the pages that commit added to data/routes.json
//                                              (run by .github/workflows/indexnow.yml after each
//                                              production deploy)
// The key file lives in public/ and must be live on veryaquafaba.com before the first call.
import { execSync } from 'node:child_process';

const HOST = 'veryaquafaba.com';
const KEY = 'e47bd3b9f79cfe62b48a4d0e1c9b113d';
const SITE = `https://${HOST}`;

const args = process.argv.slice(2);
let routes;
if (args[0] === '--diff') {
  const sha = args[1];
  if (!/^[0-9a-f]{7,40}$/.test(sha || '')) throw new Error('--diff needs a commit sha');
  const diff = execSync(`git diff ${sha}~1 ${sha} -- data/routes.json`, { encoding: 'utf8' });
  routes = [...diff.matchAll(/^\+\s*"(\/[^"]*)"/gm)].map((m) => m[1]).filter((r) => !r.startsWith('/es/'));
  if (!routes.length) { console.log('no new pages in this deploy'); process.exit(0); }
} else {
  routes = args;
}
const urls = routes.length
  ? routes.map((r) => (r.startsWith('http') ? r : `${SITE}${r}`))
  : [...(await (await fetch(`${SITE}/sitemap.xml`)).text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const keyLive = await fetch(`${SITE}/${KEY}.txt`).then((r) => (r.ok ? r.text() : ''));
if (keyLive.trim() !== KEY) throw new Error(`key file not live at ${SITE}/${KEY}.txt`);

// IndexNow takes up to 10,000 URLs per call.
for (let i = 0; i < urls.length; i += 10000) {
  const urlList = urls.slice(i, i + 10000);
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
  });
  console.log(`${urlList.length} URLs -> ${res.status} ${res.statusText}`);
  if (res.status >= 400) process.exitCode = 1;
}
