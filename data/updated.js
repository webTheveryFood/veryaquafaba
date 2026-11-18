import { LOCALE_TAGS, UI } from './applications/ui';

// The one "Updated" date of the site: the day of the deploy. next.config.mjs stamps BUILD_DATE at each build, so every
// deploy moves it on every page at once; outside a build (scripts, checks) it is the day the code runs. The build
// refuses a pinned value that is not a real date; the same test here keeps "Invalid Date" off the page in any script.
const pinned = process.env.BUILD_DATE || '';
const real = /^\d{4}-\d{2}-\d{2}$/.test(pinned) && !Number.isNaN(Date.parse(`${pinned}T12:00:00Z`)) && new Date(`${pinned}T12:00:00Z`).toISOString().slice(0, 10) === pinned;
export const UPDATED = real ? pinned : new Date().toISOString().slice(0, 10);

// What a page carries: the ISO date (JSON-LD dateModified, sitemap lastmod, llms-full.txt), the label and the date in
// the words of its language. Noon UTC, so the day never shifts with the time zone of the machine that builds.
export const dated = (locale) => ({
  updated: UPDATED,
  updatedLabel: UI[locale].updatedLabel,
  updatedText: new Date(`${UPDATED}T12:00:00Z`).toLocaleDateString(LOCALE_TAGS[locale], { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }),
});
