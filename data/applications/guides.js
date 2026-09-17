// Hand-written "v2" guide content (2026-09-17 rework): application first, then the format
// decision, written for the person doing the job. When an entry exists for (locale, app)
// it replaces the generated lead, sections and FAQ of copy.<locale>.json, and the key
// figures move below the text. Pages without an entry keep the generated layout.
// ponytail: staged rollout, one page at a time. Once all 24 pages have an entry, delete
// the legacy branch in index.js/ApplicationTemplate and the unused copy.*.json fields.
//
// Figures rule (unchanged): every product figure is a {token} filled from facts.json in
// index.js (guideTokens); a missing token fails the build. The only literal digits are the
// other ingredients of the sourced recipe (whiskey, lemon, syrup), quoted from
// /aquafaba-recipes/whiskey-sour/. No em dash / en dash anywhere in this file.
// Draft and review notes: content/drafts/resources-cocktails.en.md

export const GUIDES = {
  en: {
    cocktails: {
      lead: 'Use {dose} g of chilled VERY AQUAFABA per drink, dry shake first, then shake with ice. Pour sours every service? Go liquid. Pour a few a week? Go powder, it keeps once opened.',
      glance: [
        { value: '{dose} g', label: 'per cocktail' },
        { value: '{dry_shake} s', label: 'dry shake, then {wet_shake} s with ice' },
        { value: '{drinks_1l}', label: 'cocktails per 1 L Tetrapak' },
        { value: '{drinks_200g}', label: 'cocktails per 200 g pouch' },
      ],
      sections: [
        {
          id: 'how',
          title: 'How to shake an aquafaba sour',
          html: `<p>One swap, same spec. Aquafaba replaces the egg white, everything else stays as you build it today.</p>
<ol>
<li>Build without ice: 50 ml whiskey, 25 ml fresh lemon juice, 20 ml simple syrup and {dose} g chilled aquafaba.</li>
<li>Dry shake hard for {dry_shake} seconds. This is where the foam is made.</li>
<li>Add ice and shake another {wet_shake} seconds to chill and dilute.</li>
<li>Fine strain into a chilled coupe. The head is firm enough to carry a few drops of bitters.</li>
</ol>
<p>Busy service? Pre-batch the whiskey, lemon and syrup. Add the aquafaba at the shake, never in the batch.</p>
<p><a href="{recipe_href}">See the full Whiskey Sour recipe</a></p>`,
        },
        {
          id: 'decide',
          title: 'Liquid or powder? Start with how many sours you pour',
          html: `<p>Sealed, both formats sit on a shelf at room temperature for {unopened_months} months. The choice starts the day you open the pack. Opened liquid lives in the fridge and is used within {opened_days} days. Opened powder does not spoil, it only needs to stay dry and closed.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Your bar</th><th scope="col">Pick</th><th scope="col">Why</th></tr></thead>
<tbody>
<tr><td data-label="Your bar">Sours on the menu, ordered every service</td><td data-label="Pick">Liquid, 1 L Tetrapak</td><td data-label="Why">{drinks_1l} drinks per pack, finished well inside {opened_days} days</td></tr>
<tr><td data-label="Your bar">A few sours a week</td><td data-label="Pick">Powder, 200 g pouch</td><td data-label="Why">No clock once opened, mix what tonight needs</td></tr>
<tr><td data-label="Your bar">No fridge space to spare</td><td data-label="Pick">Powder</td><td data-label="Why">Lives on a dry shelf</td></tr>
<tr><td data-label="Your bar">Events and outside catering</td><td data-label="Pick">Powder</td><td data-label="Why">Travels dry, no cold chain</td></tr>
<tr><td data-label="Your bar">Busy weekends, quiet weekdays</td><td data-label="Pick">Both</td><td data-label="Why">Liquid for the rush, powder for the rest</td></tr>
<tr><td data-label="Your bar">Hotel group, bottled sour bases, beverage line</td><td data-label="Pick">Liquid, 5 L bag-in-box or 1 T IBC</td><td data-label="Why">Continuous use, so the opened-pack clock never matters</td></tr>
</tbody>
</table>
<p>Prefer liquid but can't finish a pack in time? Freeze it in small portions, thaw in the fridge and stir before use.</p>`,
        },
        {
          id: 'formats',
          title: 'Working with each format',
          html: `<div class="va-guide-cols">
<div>
<h3>Liquid</h3>
<ul>
<li>Ready to pour, straight from the fridge into the tin.</li>
<li>Once opened: closed, at {opened_temp} °C or below, used within {opened_days} days.</li>
<li>Discard it if it smells off, shows bubbles or has separated.</li>
<li>Freezes at {freeze_temp} °C for up to {freeze_months} months in {portion} g portions. Never refreeze.</li>
<li>Packs: 1 L Tetrapak, 5 L bag-in-box, 1 T IBC.</li>
</ul>
</div>
<div>
<h3>Powder</h3>
<ul>
<li>Mix {powder_parts} part powder with {water_parts} parts water, by weight.</li>
<li>For one drink: {powder_dose} g powder + {water_dose} g water.</li>
<li>Make it up before service and chill it. Cold aquafaba foams faster and holds longer.</li>
<li>Once opened: keep the pouch dry and closed. It does not spoil.</li>
<li>Packs: 200 g, 500 g and 5 kg pouches.</li>
</ul>
</div>
</div>`,
        },
        {
          id: 'fix',
          title: 'When the foam falls flat',
          html: `<table class="va-guide-grid va-guide-grid--fix">
<thead><tr><th scope="col">What you see</th><th scope="col">Why</th><th scope="col">Fix</th></tr></thead>
<tbody>
<tr><td data-label="What you see">Thin head</td><td data-label="Why">Ice went in from the start</td><td data-label="Fix">Dry shake first, ice second</td></tr>
<tr><td data-label="What you see">Slow, slack foam</td><td data-label="Why">Aquafaba at room temperature</td><td data-label="Fix">Keep it chilled until the shake</td></tr>
<tr><td data-label="What you see">No height by mid-service</td><td data-label="Why">Aquafaba was added to the pre-batch</td><td data-label="Fix">Batch the base only, add aquafaba per drink</td></tr>
<tr><td data-label="What you see">Foam drops before it reaches the guest</td><td data-label="Why">The drink waited on the pass</td><td data-label="Fix">Shake to order and serve at once</td></tr>
<tr><td data-label="What you see">Uneven from drink to drink</td><td data-label="Why">Free pouring</td><td data-label="Fix">Weigh or jigger {dose} g every time</td></tr>
</tbody>
</table>`,
        },
      ],
      // FAQ rule: facts may repeat from the page, framed as the question people type;
      // sentences never repeat word for word. Feeds the FAQPage JSON-LD.
      faq: [
        { q: 'How much aquafaba do I use per cocktail?', a: '{dose} g of chilled aquafaba per drink, in place of the egg white. A 1 L Tetrapak makes {drinks_1l} cocktails and a 200 g pouch of powder makes {drinks_200g}.' },
        { q: 'Should my bar buy liquid or powder?', a: 'Count your sours. If an opened 1 L pack is empty within {opened_days} days, liquid is the easy choice because it pours straight into the tin. If not, powder is safer: it does not spoil once the pouch is opened.' },
        { q: 'How long does an opened pack last behind the bar?', a: 'Opened liquid stays closed in the fridge at {opened_temp} °C or below and is used within {opened_days} days. Opened powder keeps as long as the pouch stays dry and sealed. Unopened, both last {unopened_months} months at room temperature.' },
        { q: 'Can one bar stock both formats?', a: 'Yes, and some do. Liquid covers the weekend rush, powder covers quiet weekdays and outside events, where it travels dry with no fridge needed.' },
        { q: 'How do I make up the powder for service?', a: 'Mix {powder_parts} part powder with {water_parts} parts water by weight, so {powder_dose} g powder and {water_dose} g water for one drink. Make it up ahead and chill it before service.' },
        { q: 'Does aquafaba change the taste of the drink?', a: 'No. It carries the foam and the smooth mouthfeel. The flavour stays with your whiskey, lemon and syrup.' },
        { q: 'Is it safer than egg white?', a: 'A sour is never cooked, so raw egg white is a known concern behind the bar. Aquafaba is plant-based and egg-free, which also makes the drink suitable for vegan guests.' },
        { q: 'Does the powder foam as well as the liquid?', a: 'Yes. Made up with water and chilled, it builds the same head in the dry shake. The order of the shakes and the temperature matter more than the pack it came from.' },
        { q: 'Where do I get specifications for a drinks programme?', a: 'Ask for the technical sheet with the form below. For bag-in-box or IBC volumes, tell us your pour rate and monthly volume and we will come back to you.' },
      ],
    },
  },
};
