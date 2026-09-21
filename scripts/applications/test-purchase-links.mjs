// Unit check of data/applications/tracking.js: Amazon parameters per marketplace, fallback
// (guides: default UTM; carousel: original link) and click goal per destination.
// Usage: node scripts/applications/test-purchase-links.mjs
import assert from 'node:assert/strict';

const US = 'https://www.amazon.com/dp/B0DH34RT6K';
const DE = 'https://www.amazon.de/-/en/stores/theVERYfoodco/page/X?lp_asin=Y';
const IC = 'https://instantchef.com/products/aquafaba-1l';

// Only DE configured: US falls back, DE gets its own tag and keeps its original query.
process.env.NEXT_PUBLIC_AMAZON_LINK_PARAMS_DE = 'tag=test-21';
delete process.env.NEXT_PUBLIC_AMAZON_LINK_PARAMS_US;
const { purchaseHref, purchaseGoal } = await import('../../data/applications/tracking.js');

assert.match(purchaseHref(US), /[?&]utm_source=veryaquafaba\.com/);
assert.doesNotMatch(purchaseHref(US), /tag=/);
assert.equal(purchaseHref(US, null), US);
assert.equal(new URL(purchaseHref(DE, null)).searchParams.get('tag'), 'test-21');
assert.equal(new URL(purchaseHref(DE)).searchParams.get('lp_asin'), 'Y');
assert.doesNotMatch(purchaseHref(DE), /utm_source/);
assert.equal(purchaseHref(IC), IC);
assert.equal(purchaseHref(null), null);

assert.equal(purchaseGoal(US), 'amazon-click-us');
assert.equal(purchaseGoal(DE), 'amazon-click-de');
assert.equal(purchaseGoal('https://www.amazon.co.uk/dp/X'), 'amazon-click-uk');
assert.equal(purchaseGoal(IC), 'stockist-click-fr');
assert.equal(purchaseGoal('https://fr.ankorstore.com/x'), null);
assert.equal(purchaseGoal('/buy-aquafaba/#contact'), null);
assert.equal(purchaseGoal(null), null);

console.log('purchase links OK: per marketplace params, fallbacks, goals');
