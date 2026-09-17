// Hand-written guide text per (locale, application). English lives here; de/fr/nl are
// imported below. Product figures are {tokens} filled from facts.json in index.js; an
// unknown token fails the build. No em/en dash. FAQ answers may carry one link, written
// [label]({contact_href}). Check translations with scripts/applications/check-guides.mjs.

import guidesDe from './guides.de.js';
import guidesFr from './guides.fr.js';
import guidesNl from './guides.nl.js';

const grid = (heads, rows, cls = '') => `<table class="va-guide-grid${cls ? ` ${cls}` : ''}">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;
const list = (items) => `<ul>\n${items.map((i) => `<li>${i}</li>`).join('\n')}\n</ul>`;

// Strings shared by every page of one language.
const L10N = {
  en: {
    pick: ['Your kitchen', 'Pick', 'Why'], fix: ['What you see', 'Why', 'Fix'], liquid: 'Liquid', powder: 'Powder',
    discard: 'Discard it if it smells off, shows bubbles or has separated.',
    mix: 'Mix {powder_parts} part powder with {water_parts} parts water, by weight.',
    white: '{white_powder} g powder + {white_water} ml water = 1 egg white = {white_liquid} g of liquid aquafaba.',
  },
  de: {
    pick: ['Ihr Betrieb', 'Empfehlung', 'Warum'], fix: ['Was Sie sehen', 'Ursache', 'Lösung'], liquid: 'Flüssig', powder: 'Pulver',
    discard: 'Entsorgen Sie es, wenn es unangenehm riecht, Bläschen bildet oder sich abgesetzt hat.',
    mix: '{powder_parts} Teil Pulver mit {water_parts} Teilen Wasser anrühren, nach Gewicht.',
    white: '{white_powder} g Pulver + {white_water} ml Wasser = 1 Eiweiß = {white_liquid} g flüssiges Aquafaba.',
  },
  fr: {
    pick: ['Votre activité', 'Notre conseil', 'Pourquoi'], fix: ['Ce que vous constatez', 'La cause', 'La solution'], liquid: 'Liquide', powder: 'Poudre',
    discard: "Jetez-le s'il dégage une mauvaise odeur, s'il présente des bulles ou s'il s'est séparé.",
    mix: "Mélangez {powder_parts} part de poudre avec {water_parts} parts d'eau, en poids.",
    white: "{white_powder} g de poudre + {white_water} ml d'eau = 1 blanc d'œuf = {white_liquid} g d'aquafaba liquide.",
  },
  nl: {
    pick: ['Uw keuken', 'Onze keuze', 'Waarom'], fix: ['Wat u ziet', 'Oorzaak', 'Oplossing'], liquid: 'Vloeibaar', powder: 'Poeder',
    discard: 'Gooi het weg als het vreemd ruikt, belletjes vertoont of gescheiden is.',
    mix: 'Meng {powder_parts} deel poeder met {water_parts} delen water, op gewicht.',
    white: '{white_powder} g poeder + {white_water} ml water = 1 eiwit = {white_liquid} g vloeibare aquafaba.',
  },
};
// Key figures under the intro: dose and pack yield per format.
const figures = (loc, note, liquid, powder) => ({
  note,
  groups: [
    { title: L10N[loc].liquid, items: liquid.map(([value, label]) => ({ value, label })) },
    { title: L10N[loc].powder, items: powder.map(([value, label]) => ({ value, label })) },
  ],
});
const PICK = L10N.en.pick;
const FIX = L10N.en.fix;

const formats = ({ liquid, powder }, loc = 'en') => `<div class="va-guide-cols">
<div>
<h3>${L10N[loc].liquid}</h3>
${list([...liquid, L10N[loc].discard])}
</div>
<div>
<h3>${L10N[loc].powder}</h3>
${list([L10N[loc].mix, L10N[loc].white, ...powder])}
</div>
</div>`;

export const GUIDES = {
  en: {
    cocktails: {
      lead: "Aquafaba gives your sours a stable, silky foam head, with no raw egg white behind the bar. All it takes is {dose} g per drink and two shakes. Below you'll find the method, what to do when the foam falls flat, and how to choose between liquid and powder for the way your bar works.",
      glance: figures('en', null, [['{dose} g', 'per cocktail'], ['{batches_1l} cocktails', 'from a 1 L Tetrapak']], [['{powder_dose} g', 'per cocktail, mixed with water'], ['{batches_200g} cocktails', 'from a 200 g pouch']]),
      sections: [
        {
          id: 'how',
          title: 'How to shake an aquafaba sour',
          html: `<p>Nothing changes in your recipe except one ingredient: aquafaba replaces the egg white.</p>
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
<tr><td data-label="Your bar">Sours on the menu, ordered every service</td><td data-label="Pick">Liquid, 1 L Tetrapak</td><td data-label="Why">{batches_1l} drinks per pack, finished well inside {opened_days} days</td></tr>
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
          html: formats({
            liquid: ['Ready to pour, straight from the fridge into the tin.', 'Close it and put it back in the fridge between services.'],
            powder: ['For one drink: {powder_dose} g powder + {water_dose} g water.', 'Make it up before service and chill it. Cold aquafaba foams faster and holds longer.'],
          }),
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
      faq: [
        { q: 'How much aquafaba do I use per cocktail?', a: '{dose} g of chilled aquafaba per drink, in place of the egg white. A 1 L Tetrapak makes {batches_1l} cocktails and a 200 g pouch of powder makes {batches_200g}.' },
        { q: 'Should my bar buy liquid or powder?', a: 'Count your sours. If an opened 1 L pack is empty within {opened_days} days, liquid is the easy choice because it pours straight into the tin. If not, powder is safer: it does not spoil once the pouch is opened.' },
        { q: 'How long does an opened pack last behind the bar?', a: 'Opened liquid stays closed in the fridge at {opened_temp} °C or below and is used within {opened_days} days. Opened powder keeps as long as the pouch stays dry and sealed. Unopened, both last {unopened_months} months at room temperature.' },
        { q: 'Can one bar stock both formats?', a: 'Yes, and some do. Liquid covers the weekend rush, powder covers quiet weekdays and outside events, where it travels dry with no fridge needed.' },
        { q: 'How do I make up the powder for service?', a: 'Mix {powder_parts} part powder with {water_parts} parts water by weight, so {powder_dose} g powder and {water_dose} g water for one drink. Make it up ahead and chill it before service. The rule per egg white: {white_powder} g powder + {white_water} ml water = 1 egg white = {white_liquid} g of liquid aquafaba.' },
        { q: 'Does aquafaba change the taste of the drink?', a: 'No. It carries the foam and the smooth mouthfeel. The flavour stays with your whiskey, lemon and syrup.' },
        { q: 'Is it safer than egg white?', a: 'A sour is never cooked, so raw egg white is a known concern behind the bar. Aquafaba is plant-based and egg-free, which also makes the drink suitable for vegan guests.' },
        { q: 'Does the powder foam as well as the liquid?', a: 'Yes. Made up with water and chilled, it builds the same head in the dry shake. The order of the shakes and the temperature matter more than the pack it came from.' },
        { q: 'Where do I get specifications for a drinks programme?', a: 'Ask for the technical sheet through our [contact form]({contact_href}). For bag-in-box or IBC volumes, tell us your pour rate and monthly volume and we will come back to you.' },
      ],
    },
    meringue: {
      lead: "Aquafaba whips into crisp, glossy meringues, with no egg white at all. You only need two ingredients in equal weights: {dose} g of aquafaba and {sugar} g of sugar. This guide takes you through the method step by step, explains what to do when a batch goes wrong, and helps you pick between liquid and powder.",
      glance: figures('en', 'One batch makes {yield}.', [['{dose} g', 'per batch, in place of {eggs} egg whites'], ['{batches_1l} batches', 'from a 1 L Tetrapak']], [['{powder_dose} g', 'per batch, mixed with water'], ['{batches_200g} batches', 'from a 200 g pouch']]),
      sections: [
        {
          id: 'how',
          title: 'How to make aquafaba meringue',
          html: `<p>The recipe is simple, but the order matters. Follow the steps as they come, and don't rush the sugar.</p>
<ol>
<li>Chill the aquafaba to {chill} °C. Cold aquafaba whips faster and holds more air.</li>
<li>Whip {dose} g on high speed in a clean, grease-free bowl to soft peaks, about {whip} minutes.</li>
<li>Optional stabiliser, added while whipping: 2 g cream of tartar or 1 g citric acid.</li>
<li>Drop to medium speed and add {sugar} g caster sugar one tablespoon at a time, letting each dissolve. Back to high speed until glossy and stiff.</li>
<li>Pipe 3-4 cm shapes straight away and dry at {bake} °C, fan off, for {bake_time} hours, until completely dry.</li>
<li>Cool fully on the tray. Store airtight at room temperature, with a desiccant pouch if you have one.</li>
</ol>
<p>Running industrial batches? Hold the aquafaba concentration at {concentration} g/ml so the foam behaves the same on every run.</p>
<p><a href="{recipe_href}">See the full meringue recipe</a></p>`,
        },
        {
          id: 'decide',
          title: 'Liquid or powder? Start with how often you fill the oven',
          html: `<p>The right format depends on how often you bake meringues. Unopened, both formats keep {unopened_months} months at room temperature. Once opened, liquid goes in the fridge, while powder simply stays dry and closed. A 1 L pack makes {batches_1l} batches of meringues. If you won't bake that many in the {opened_days} days after opening it, powder is the better choice.</p>
${grid(PICK, [
  ['Pastry section piping meringue most days', 'Liquid, 1 L Tetrapak', '{batches_1l} batches per pack, used up well inside {opened_days} days'],
  ['Restaurant with a seasonal meringue dessert', 'Powder, 200 g pouch', '{batches_200g} batches per pouch and no date once opened'],
  ['No chilled space to spare', 'Powder', 'Your meringues already live in the dry store, and so does the pouch'],
  ['You want the concentration settled before it reaches the bench', 'Liquid', 'It arrives at a fixed density, with nothing to make up'],
  ['Line drying shells every working day', 'Liquid, 5 L bag-in-box or 1 T IBC', 'Continuous use and no reconstitution step'],
])}
<p>Prefer liquid but bake irregularly? Freeze it in portions, thaw overnight in the fridge and stir until even before whipping.</p>`,
        },
        {
          id: 'formats',
          title: 'Working with each format',
          html: formats({
            liquid: ['Goes from the fridge to the bowl, already at whipping temperature.', 'One pack is {batches_1l} batches, so open it at the start of a run of oven days.'],
            powder: ['For one batch of meringues: {powder_dose} g powder + {water_dose} g water.', 'Chill it to {chill} °C before whipping. Warm aquafaba gives a slower, weaker foam.'],
          }),
        },
        {
          id: 'fix',
          title: 'When the meringue goes wrong',
          html: grid(FIX, [
            ['Foam never reaches full volume', 'Grease on the bowl or whisk', 'Degrease everything before you start'],
            ['Foam builds slowly and stays weak', 'Aquafaba too warm', 'Chill to {chill} °C first'],
            ['Syrup beads on the meringues in storage', 'Sugar went in faster than it could dissolve', 'One tablespoon at a time, at medium speed'],
            ['Volume lost before piping', 'The bowl stood waiting', 'Pipe and dry straight after stiff peaks'],
            ['Meringues turn soft and sticky', 'Meringue pulls moisture from the air', 'Store airtight in a dry place, with a desiccant pouch'],
            ['Results change from batch to batch', 'Aquafaba concentration drifted', 'Hold {concentration} g/ml on industrial batches'],
          ], 'va-guide-grid--fix'),
        },
      ],
      faq: [
        { q: 'How much aquafaba do I need for meringues?', a: '{dose} g of chilled aquafaba for {yield}, with {sugar} g of sugar. That replaces {eggs} egg whites. A 1 L Tetrapak covers {batches_1l} batches and a 200 g pouch of powder covers {batches_200g}.' },
        { q: 'Should a pastry kitchen buy liquid or powder?', a: 'Look at your oven planning. If you bake enough meringue to empty an opened 1 L pack within {opened_days} days, liquid is the simple choice. If meringue comes round now and then, powder is safer because the opened pouch does not spoil.' },
        { q: 'How long does an opened pack keep?', a: 'Opened liquid is kept closed at {opened_temp} °C or below and used within {opened_days} days. Opened powder keeps as long as the pouch stays dry and sealed. Before opening, both last {unopened_months} months at room temperature.' },
        { q: 'Can I freeze liquid aquafaba if my meringue work is irregular?', a: 'Yes. Portion it, freeze it for up to {freeze_months} months, thaw it overnight in the fridge and stir it until even before whipping. Thawed aquafaba whips for meringues as fresh does, but it is never refrozen.' },
        { q: 'Why do my meringues weep in the container?', a: 'The sugar did not fully dissolve. Drop the mixer to medium, add the sugar spoon by spoon, let each one disappear before the next, then lift the speed again until the foam is glossy and stiff.' },
        { q: 'Do I still need cream of tartar or citric acid with aquafaba?', a: 'It is optional, but it strengthens the foam before the sugar goes in. Add it while the mixer is running, once the foam has reached soft peaks, not at the start.' },
        { q: 'How do I make up the powder for a batch?', a: 'Mix {powder_parts} part powder with {water_parts} parts water by weight, so {powder_dose} g powder and {water_dose} g water for one batch. Chill it to {chill} °C before it goes in the mixer. The rule per egg white: {white_powder} g powder + {white_water} ml water = 1 egg white = {white_liquid} g of liquid aquafaba.' },
        { q: 'Where do I get specifications for production?', a: 'Ask for the technical sheet through our [contact form]({contact_href}). For bag-in-box or IBC volumes, tell us your meringue volumes and production pattern and we will come back to you.' },
      ],
    },
    'chocolate-mousse': {
      lead: "In this mousse, whipped aquafaba replaces both the egg whites and the cream, for a lighter set and a clean chocolate flavour. One batch uses {dose} g of aquafaba, and the step that decides everything is letting the chocolate cool to {fold_temp} °C before you fold it in. We cover the method, how to rescue a mousse that collapses, and whether liquid or powder fits your dessert menu.",
      glance: figures('en', 'One batch makes {yield}.', [['{dose} g', 'per batch, in place of {eggs} egg whites'], ['{batches_1l} batches', 'from a 1 L Tetrapak']], [['{powder_dose} g', 'per batch, mixed with water'], ['{batches_200g} batches', 'from a 200 g pouch']]),
      sections: [
        {
          id: 'how',
          title: 'How to make aquafaba chocolate mousse',
          html: `<p>The whipped aquafaba replaces both the egg whites and the cream. All the structure comes from the foam, so temperature and folding decide the result.</p>
<ol>
<li>Melt {chocolate} g dark couverture to 45-50 °C, then let it cool to {fold_temp} °C.</li>
<li>Whip {dose} g chilled aquafaba on high speed in a clean, grease-free bowl to soft peaks, about {whip} minutes. Optional stabiliser at this point: 2 g cream of tartar or 1 g citric acid.</li>
<li>Add {sugar} g caster sugar gradually while whipping, to glossy stiff peaks. The meringue should be dense and stable.</li>
<li>Fold the cooled chocolate in by hand with a spatula, quickly and lightly. Stop as soon as it is combined.</li>
<li>Pipe or spoon into cups straight away and chill for at least {set_time} hours.</li>
</ol>
<p>Large batches? Emulsify part of the chocolate with a little aquafaba first, then fold in the rest of the foam. It keeps big runs homogeneous.</p>
<p><a href="{recipe_href}">See the full chocolate mousse recipe</a></p>`,
        },
        {
          id: 'decide',
          title: 'Liquid or powder? Start with how often mousse is on the menu',
          html: `<p>Mousse is kept in the fridge anyway, so storing an opened pack of liquid aquafaba is not a problem. What matters is how quickly you use it. Sealed, both formats keep {unopened_months} months, and opened powder does not spoil. A 1 L pack makes {batches_1l} batches of mousse. If you won't make that many in the {opened_days} days after opening it, powder is the better choice.</p>
${grid(PICK, [
  ['Patisserie piping mousse cups for the counter every morning', 'Liquid, 1 L Tetrapak', '{batches_1l} batches per pack, emptied well inside {opened_days} days'],
  ['Restaurant with mousse as a rotating dessert, a few verrines at a time', 'Powder, 200 g pouch', '{batches_200g} batches per pouch, and it waits between menus'],
  ['Tight chiller, deep dry store', 'Powder', 'The chilled shelves stay free for the portions you just moulded'],
  ['You want aquafaba ready to whip', 'Liquid', 'Already cold, straight into the mixer, with no making up'],
  ['Central kitchen where each outlet whips its own', 'Powder', 'The pouch survives a quiet week on site'],
  ['Line filling pre-portioned retail cups', 'Liquid, 5 L bag-in-box or 1 T IBC', 'Continuous draw, and the chocolate pre-emulsion uses the same liquid'],
])}
<p>Prefer liquid but your dessert rotation is irregular? Freeze it in portions, thaw overnight in the fridge and stir until even before whipping.</p>`,
        },
        {
          id: 'formats',
          title: 'Working with each format',
          html: formats({
            liquid: ['Weighed cold, straight from the fridge into the mixer.', 'Sits on the same chilled shelving as the setting cups. Mark the opening date on the pack.'],
            powder: ['For one batch of mousse: {powder_dose} g powder + {water_dose} g water.', 'Make it up ahead and chill it. Warm aquafaba gives less volume.'],
          }),
        },
        {
          id: 'fix',
          title: 'When the mousse goes wrong',
          html: grid(FIX, [
            ['Mousse collapses as the chocolate goes in', 'Chocolate above {fold_temp} °C melted the foam', 'Cool it to {fold_temp} °C or lower before folding'],
            ['Dense, heavy mousse', 'Over-folding knocked the air out', 'Fold just until combined'],
            ['Foam will not build', 'Grease in the bowl, or sugar added before soft peaks', 'Clean bowl, and sugar only once soft peaks have formed'],
            ['Volume lost before folding', 'The foam stood waiting for the chocolate', 'Have the chocolate cooled and ready before you whip'],
            ['Weak, slow foam', 'Aquafaba too warm', 'Whip it chilled'],
            ['Uneven foam from frozen stock', 'Not fully thawed or not stirred', 'Thaw completely and stir until even. Never refreeze'],
          ], 'va-guide-grid--fix'),
        },
      ],
      faq: [
        { q: 'How much aquafaba do I need for chocolate mousse?', a: '{dose} g of chilled aquafaba for {yield}, with {sugar} g of sugar and {chocolate} g of dark chocolate. That replaces {eggs} egg whites. A 1 L Tetrapak covers {batches_1l} batches and a 200 g pouch of powder covers {batches_200g}.' },
        { q: 'Should my kitchen buy liquid or powder for mousse?', a: 'It depends on how often you set a batch. Mousse most days empties an opened 1 L pack within {opened_days} days, so liquid works. Mousse as an occasional dessert calls for powder, because the opened pouch does not spoil between menus.' },
        { q: 'Does the format change the finished mousse?', a: 'No. Once the aquafaba is cold and weighed to the dose, the foam behaves the same in the bowl. What differs is how you handle the stock before the batch, not the dessert on the plate.' },
        { q: 'Can aquafaba replace the cream as well as the egg white?', a: 'Yes. The recipe builds the whole structure from the whipped foam and the couverture, with no dairy cream folded in. The set is lighter and the chocolate comes through clearly.' },
        { q: 'How long does the finished mousse keep?', a: 'It sets for at least {set_time} hours in the fridge, then keeps {keep} days refrigerated in sealed packaging. It is a make-ahead product, not a dessert made to order.' },
        { q: 'Can I whip liquid aquafaba that has been frozen and thawed?', a: 'Yes. For mousse it behaves as fresh does, provided it is thawed slowly in the fridge and stirred back to an even consistency. Stock that is still part frozen whips unevenly, and thawed aquafaba is never refrozen.' },
        { q: 'How do I make up the powder for a batch?', a: 'Mix {powder_parts} part powder with {water_parts} parts water by weight, so {powder_dose} g powder and {water_dose} g water for one batch. Chill it before it goes in the mixer. The rule per egg white: {white_powder} g powder + {white_water} ml water = 1 egg white = {white_liquid} g of liquid aquafaba.' },
        { q: 'Where do I get figures for my own formulation?', a: 'Tell us your mousse volumes, the format you are considering and your production pattern through our [contact form]({contact_href}). The technical sheet is sent on request.' },
      ],
    },
    mayonnaise: {
      lead: "Aquafaba makes a thick, stable vegan mayo, with no egg yolk at all. The whole recipe rests on one ratio: {oil_ratio} oil to aquafaba, by weight. This guide walks you through the method and the common pitfalls, then helps you decide whether liquid or powder makes more sense in your kitchen.",
      glance: figures('en', 'One batch makes {yield} of mayonnaise.', [['{dose} g', 'per batch, with {oil} g of oil'], ['{batches_1l} batches', 'from a 1 L Tetrapak']], [['{powder_dose} g', 'per batch, mixed with water'], ['{batches_200g} batches', 'from a 200 g pouch']]),
      sections: [
        {
          id: 'how',
          title: 'How to make vegan mayo with aquafaba',
          html: `<p>Here aquafaba stands in for the egg yolk, not the white. Nothing is whipped: it is a cold emulsion, built with shear.</p>
<ol>
<li>In a tall, narrow vessel, combine {dose} g chilled aquafaba with the mustard, salt and lemon juice or vinegar.</li>
<li>Start the stick blender and drizzle in {oil} g of oil in a thin, steady stream. Keep the shear high so the emulsion takes.</li>
<li>Once it thickens, taste and season. Too tight? Blend in a few grams of cold water.</li>
<li>Transfer to a clean container and refrigerate at once. Made hygienically, it keeps up to {keep} days in the fridge.</li>
</ol>
<p>Large batches? Use a high-shear blender to control droplet size and keep the emulsion stable.</p>
<p><a href="{recipe_href}">See the full mayonnaise recipe</a></p>`,
        },
        {
          id: 'decide',
          title: 'Liquid or powder? Start with how often you make mayo',
          html: `<p>A batch of mayo uses very little aquafaba: {dose} g. So a 1 L pack makes {batches_1l} batches, and once it is open you have {opened_days} days to use it. If you won't make that many in that time, powder is the better choice: a 200 g pouch makes {batches_200g} batches and has no date to watch once opened. The finished mayo needs the fridge either way, so the choice is about the opened pack, not the sauce.</p>
${grid(PICK, [
  ['Deli or sandwich counter making fresh mayo every service', 'Liquid, 1 L Tetrapak', 'Poured at blending temperature, and the pack turns over in time'],
  ['Restaurant with mayo on one menu dish', 'Powder, 200 g pouch', 'An opened litre would outlast its {opened_days} days'],
  ['Cold store already full of finished sauce', 'Powder', 'The pouch never takes a chilled slot'],
  ['You want fewer dated items on the sauce station', 'Powder', 'No opened, perishable pack to label, log and inspect'],
  ['Producer blending dry sauce bases', 'Powder', 'It goes into the premix dry'],
  ['Central kitchen or industrial line', 'Liquid, 5 L bag-in-box or 1 T IBC', 'Drawn by the kilo each shift, straight into the high-shear mixer'],
])}
<p>Prefer liquid but make mayo rarely? Freeze it in portions: two {white_liquid} g portions make one batch. Thaw fully in the fridge and stir until even before blending.</p>`,
        },
        {
          id: 'formats',
          title: 'Working with each format',
          html: formats({
            liquid: ['Lives in the fridge once opened, so it is at blending temperature when you pour.', 'Weighs on any kitchen scale.'],
            powder: ['For one batch of mayo: {powder_dose} g powder + {water_dose} g water. Use a fine scale.', 'Make it up with cold water, or chill it to {chill} °C before blending.'],
          }),
        },
        {
          id: 'fix',
          title: 'When the emulsion goes wrong',
          html: grid(FIX, [
            ['The emulsion never starts', 'Oil added too fast, or too little shear', 'Thin, steady stream with the blender at full speed'],
            ['Slow, unstable emulsion', 'Aquafaba too warm', 'Use it at {chill} °C'],
            ['Too thick to work', 'The emulsion tightened', 'Blend in a few grams of cold water, not more oil'],
            ['Unstable on large batches', 'Droplet size not controlled', 'Move to a high-shear blender'],
            ['Thin result from frozen stock', 'Thawed aquafaba came back thinner', 'Stir until even. If still thin, reduce briefly over low heat'],
            ['Shelf life shorter than {keep} days', 'Hygiene or a slow trip to the fridge', 'Clean container, refrigerate immediately'],
          ], 'va-guide-grid--fix'),
        },
      ],
      faq: [
        { q: 'How much aquafaba do I need for vegan mayo?', a: '{dose} g of chilled aquafaba and {oil} g of oil make {yield} of mayonnaise, an oil to aquafaba ratio of {oil_ratio} by weight. A 1 L Tetrapak covers {batches_1l} batches and a 200 g pouch of powder covers {batches_200g}.' },
        { q: 'Should my kitchen buy liquid or powder for mayonnaise?', a: 'Count your batches. Only a kitchen emulsifying every day works through an opened 1 L pack within {opened_days} days. If mayo comes round now and then, take the powder: the opened pouch does not spoil.' },
        { q: 'Does the format change the taste of the sauce?', a: 'No. In a base built on mustard, salt and an acid, neither format leaves a noticeable pulse note once the emulsion has taken. Flavoured versions with herbs, garlic or spices sit on the same base with the same aquafaba dose.' },
        { q: 'How do I make up the powder for a batch?', a: 'Mix {powder_parts} part powder with {water_parts} parts water by weight, so {powder_dose} g powder and {water_dose} g water for one batch. The rule per egg white: {white_powder} g powder + {white_water} ml water = 1 egg white = {white_liquid} g of liquid aquafaba. Use cold water, or chill it to {chill} °C before blending.' },
        { q: 'Can I switch a running formula from one format to the other?', a: 'Yes. {white_liquid} g of liquid equals {white_powder} g of powder made up with water, so the aquafaba weight converts directly. The oil ratio, the mustard and the acid stay untouched.' },
        { q: 'How long does aquafaba mayonnaise keep?', a: 'Up to {keep} days refrigerated, provided it was made under hygienic conditions, stored in a clean container and chilled straight after blending.' },
        { q: 'Can the liquid be frozen when my rotation is slow?', a: 'Yes. Mayonnaise is among the preparations where thawed aquafaba performs as fresh does. Freeze portions for up to {freeze_months} months, thaw completely and stir back to an even texture before emulsifying. Never refreeze a thawed portion.' },
        { q: 'What does an opened pack add to my HACCP records?', a: 'An opened liquid pack is a dated perishable item on the sauce station: logged, held cold and inspected before use. Mayonnaise is raw and served cold, so that check matters. A closed dry pouch does not create that control point.' },
        { q: 'Which pack suits a continuous production line?', a: 'Continuous lines take the liquid: bag-in-box for central kitchens and the 1 T IBC where aquafaba is drawn by the kilo each shift. Ask for the technical sheet and set out your volumes through our [contact form]({contact_href}).' },
      ],
    },
    baking: {
      lead: "Aquafaba for baking can stand in for whole eggs or just the whites, from génoise to brioche. Count {egg_liquid} g for each egg you replace. You'll see how it goes into each kind of bake, what to adjust in your recipe, and how to pick the format that suits your production.",
      glance: figures('en', 'One whole egg = {egg_liquid} g of liquid aquafaba.', [['{white_liquid} g', 'per egg white'], ['{whites_1l} egg whites', 'from a 1 L Tetrapak']], [['{white_powder} g', 'per egg white, mixed with water'], ['{whites_200g} egg whites', 'from a 200 g pouch']]),
      sections: [
        {
          id: 'how',
          title: 'How to use aquafaba in your bakes',
          html: `<p>Aquafaba does three jobs in baking: it traps air, it binds, and it holds moisture. So it works in two ways. Whip it when it replaces egg whites. Pour it in as it is when it replaces the binding and moisture of whole eggs.</p>
${grid(['What you bake', 'How the aquafaba goes in', 'What it brings'], [
  ['Sponges and génoise', 'Whipped at {chill} °C, then folded in gently and promptly', 'The air'],
  ['Cakes, cookies and muffins', 'Mixed with the sugar before it meets the fat', 'A more stable emulsion'],
  ['High-sugar batters', 'Whipped with part of the sugar first, then combined with the fats', 'Volume that lasts through the bake'],
  ['Cookies and brownies', 'Added directly, unwhipped', 'Binding and moisture'],
  ['Brioche and sweet rolls', 'Unwhipped, with the liquids of the dough', 'Softness and keeping quality'],
], 'va-guide-grid--wrap')}
<p>Replacing whole eggs? Aquafaba carries more water than egg. Reduce the milk or water slightly, or raise the dry ingredients, and bake fully. Replacing only the whites, as in meringues or macarons, normally needs no adjustment.</p>
<p><a href="{recipe_href}">Read the full guide to baking with aquafaba</a></p>`,
        },
        {
          id: 'decide',
          title: 'Liquid or powder? Start with how often you bake egg-free',
          html: `<p>Made up with water, the powder brings the same water into the batter as the liquid, so the recipe work is identical. The choice is about pace and storage. A 1 L Tetrapak replaces {eggs_1l} whole eggs or {whites_1l} egg whites and, once opened, is used within {opened_days} days in the fridge. A 200 g pouch replaces {whites_200g} egg whites and does not spoil after opening.</p>
${grid(PICK, [
  ['Bakery with an egg-free line every day', 'Liquid, 1 L Tetrapak', 'An opened pack is empty well inside {opened_days} days'],
  ['Kitchen with occasional vegan orders', 'Powder, 200 g pouch', 'Make up what the order needs, the rest waits'],
  ['Sponges and génoise whipped for volume', 'Liquid', 'The opened pack already sits at whipping temperature'],
  ['Chilled shelves committed to creams and fillings', 'Powder', 'It lives on a dry rack'],
  ['Daily line plus irregular orders', 'Both', 'The conversion is fixed, so a recipe runs on either'],
  ['Industrial bakery line or multi-outlet foodservice', 'Liquid, 5 L bag-in-box or 1 T IBC', 'Continuous dosing, no reconstitution step'],
])}
<p>Uneven rotation but you prefer liquid? Freezing in portions works, at the cost of freezer space, an overnight thaw and a viscosity check. That is the workflow the powder removes.</p>`,
        },
        {
          id: 'formats',
          title: 'Working with each format',
          html: formats({
            liquid: ['Weigh {egg_liquid} g per whole egg or {white_liquid} g per egg white, straight from the pack.'],
            powder: ['For whipped bakes, chill it to {chill} °C first. For doughs and batters it goes in as it is.'],
          }),
        },
        {
          id: 'fix',
          title: 'When the bake goes wrong',
          html: grid(FIX, [
            ['Flat sponge', 'The foam stood waiting, or was folded too hard', 'Fold in promptly and gently'],
            ['Loose, wet batter', 'Whole eggs swapped one for one, water not reduced', 'Reduce the milk or water slightly, or add dry ingredients'],
            ['Wet centre', 'The extra water lengthens the bake', 'Bake fully before you pull it'],
            ['Weak foam', 'Aquafaba too warm', 'Whip it at {chill} °C'],
            ['Weak foam or binding from frozen stock', 'Thawed aquafaba came back thinner', 'Reduce briefly over low heat. Never refreeze'],
            ['Shelf life of the product has shifted', 'Changing moisture changes water activity', 'Re-check shelf life and microbial stability after reformulating'],
          ], 'va-guide-grid--fix'),
        },
      ],
      faq: [
        { q: 'How much aquafaba replaces one egg in baking?', a: '{egg_liquid} g of liquid aquafaba replaces one whole egg and {white_liquid} g replaces one egg white. In powder, that is {white_powder} g per egg white, made up with water. These are starting values: adjust the other liquids to keep your batter consistency.' },
        { q: 'Can aquafaba replace whole eggs, or only the whites?', a: 'Both. Whipped, it stands in for the whites and brings the air to sponges and génoise. Poured in unwhipped, it stands in for the binding and moisture of a whole egg, as in cookies, brownies and enriched doughs.' },
        { q: 'Should my bakery buy liquid or powder?', a: 'It follows your egg-free rhythm. A daily line empties an opened 1 L pack within {opened_days} days, so liquid works. Occasional vegan orders call for powder, because the opened pouch does not spoil.' },
        { q: 'How do I make up the powder?', a: 'Mix {powder_parts} part powder with {water_parts} parts water by weight. The rule per egg white: {white_powder} g powder + {white_water} ml water = 1 egg white = {white_liquid} g of liquid aquafaba. For whipped bakes, chill it to {chill} °C before it goes in the mixer.' },
        { q: 'Does the powder avoid the recipe adjustment the liquid needs?', a: 'No. Made up with water, it brings the same water into the batter, so other liquids still come down slightly or dry ingredients go up. The pouch changes rotation and storage, not formulation.' },
        { q: 'Which format suits brioche and other enriched doughs?', a: 'Either one. The aquafaba goes in unwhipped with the liquids of the dough, for softness and keeping quality, so whipping temperature decides nothing. Choose by how often you make that dough and where you have room to store the pack.' },
        { q: 'How do I know an opened liquid pack is no longer usable?', a: 'A sour smell, bubbles in the pack or a separated look mean it is discarded, not baked with. The same goes for a pack kept above {opened_temp} °C or past {opened_days} days after opening.' },
        { q: 'Can a bakery stock both formats?', a: 'Yes, and several do: liquid for the daily egg-free line, the pouch for irregular orders. The conversion is fixed, so a recipe developed on one format runs on the other.' },
        { q: 'Where do I get specifications for industrial production?', a: 'Ask for the technical sheet through our [contact form]({contact_href}). For bag-in-box or IBC volumes, describe your line and monthly volume and we will come back to you.' },
      ],
    },
    macarons: {
      lead: "Yes, you can make macarons without egg whites. Simply use {dose} g of aquafaba in place of the egg whites, and keep the rest of your recipe as it is. This guide walks you through each step, shows you what to watch for along the way, and helps you choose between liquid and powder.",
      glance: figures('en', 'One batch makes {yield}.', [['{dose} g', 'per batch, in place of {eggs} egg whites'], ['{batches_1l} batches', 'from a 1 L Tetrapak']], [['{powder_dose} g', 'per batch, mixed with water'], ['{batches_200g} batches', 'from a 200 g pouch']]),
      sections: [
        {
          id: 'how',
          title: 'How to make aquafaba macarons',
          html: `<p>Aquafaba replaces the egg whites only, so the almond flour, icing sugar and caster sugar of your formula stay as they are. The foam has to survive two steps, the fold and the rest, so timing matters more than the whipping itself.</p>
<ol>
<li>Sift the almond flour and icing sugar together and set aside. Line the trays now.</li>
<li>Whip {dose} g chilled aquafaba on high speed in a clean, grease-free bowl to soft peaks. Add the cream of tartar, then {sugar} g caster sugar gradually, to glossy stiff peaks.</li>
<li>Fold the dry mix in three additions. Stop when the batter runs off the spatula in thick, slow ribbons.</li>
<li>Pipe 3-4 cm rounds onto parchment, evenly spaced.</li>
<li>Rest at room temperature until a dry skin forms: {rest} minutes, depending on humidity.</li>
<li>Bake at {bake} °C, fan off, for {bake_time} minutes. Cool fully on the tray before handling.</li>
<li>Pair, fill and refrigerate for {mature} hours before serving, so the texture develops.</li>
</ol>
<p>Running industrial batches? Hold the aquafaba concentration at {concentration} g/ml for shells that match from run to run.</p>
<p><a href="{recipe_href}">See the full macaron recipe</a></p>`,
        },
        {
          id: 'decide',
          title: 'Liquid or powder? Start with how often you pipe',
          html: `<p>Your macarons already mature in the fridge, so keeping an opened pack of liquid aquafaba cold is easy. What matters is how quickly you use it. A 1 L pack makes {batches_1l} batches of macarons. If you won't bake that many in the {opened_days} days after opening it, powder is the better choice: a 200 g pouch makes {batches_200g} batches and does not spoil after opening. Sealed, both keep {unopened_months} months at room temperature.</p>
${grid(PICK, [
  ['Patisserie piping shells most service days', 'Liquid, 1 L Tetrapak', '{batches_1l} batches per pack, used up inside {opened_days} days'],
  ['Shop baking macarons to order', 'Powder, 200 g pouch', 'It covers the long gaps between runs'],
  ['Fridge already full of maturing macarons and ganache', 'Powder', 'It keeps dry and closed, outside the cold store'],
  ['You whip the moment the trays are lined', 'Liquid', 'Cold and ready for the whisk, with nothing to make up'],
  ['Plant-based patisserie line piping continuously', 'Liquid, 5 L bag-in-box or 1 T IBC', 'The feed never stops, and the cold chain belongs to the plant'],
])}
<p>Powder is not a dry-mix shortcut. The aquafaba is whipped on its own first, so make the powder up with water before it goes anywhere near the almond flour.</p>`,
        },
        {
          id: 'formats',
          title: 'Working with each format',
          html: formats({
            liquid: ['Leaves the opened pack cold, which is how the recipe wants it for whipping.', 'It shares the fridge with your maturing macarons, so mark the opening date on the pack.'],
            powder: ['For one batch of macarons: {powder_dose} g powder + {water_dose} g water.', 'Make it up and chill it before you whip. Cold aquafaba whips faster into a more stable foam.'],
          }),
        },
        {
          id: 'fix',
          title: 'When the shells go wrong',
          html: grid(FIX, [
            ['Foam will not reach volume', 'Grease on the bowl or whisk', 'Degrease everything before you start'],
            ['Meringue deflates before piping', 'It stood while the dry mix or trays were prepared', 'Sift and line the trays first, whip last'],
            ['Shells lose their lift', 'Folded past the ribbon stage, or folded roughly', 'Stop at thick, slow ribbons'],
            ['No skin after resting', 'Humid room', 'Rest longer and judge by touch, not the clock'],
            ['Shells weep in storage', 'Sugar not fully dissolved', 'Add the caster sugar gradually'],
            ['Shells soften in storage', 'Shells pull moisture from the air', 'Store in a low-humidity place'],
            ['Shells vary from batch to batch', 'Aquafaba concentration drifted', 'Hold {concentration} g/ml on industrial batches'],
          ], 'va-guide-grid--fix'),
        },
      ],
      faq: [
        { q: 'How much aquafaba do I need for macarons?', a: '{dose} g of chilled aquafaba for {yield}, with {sugar} g of caster sugar. That replaces {eggs} egg whites. A 1 L Tetrapak covers {batches_1l} batches and a 200 g pouch of powder covers {batches_200g}.' },
        { q: 'Should my atelier buy liquid or powder?', a: 'Count your runs. If you pipe often enough to finish an opened 1 L pack within {opened_days} days, liquid keeps pace. If you bake macarons on order, take the powder: the opened pouch waits without spoiling.' },
        { q: 'Do I have to adjust the rest of my formula?', a: 'No. Macarons replace egg whites only, not whole eggs, so the swap is direct. The almond flour, icing sugar and caster sugar stay exactly as they are in your formula.' },
        { q: 'Should I still add an acid stabiliser to the meringue?', a: 'The recipe treats it as optional. Cream of tartar or citric acid goes in once soft peaks are there and before the caster sugar, and it supports the foam through the fold and the rest. Add it to the foam, never to the dry mix.' },
        { q: 'Does the resting time change in a humid room?', a: 'Yes, and it is judged by touch. The shells are ready when the surface feels dry to a light finger. In a damp room that skin forms slowly, so {rest} minutes is a guide, not a rule.' },
        { q: 'How long does an opened pack keep?', a: 'Opened liquid is kept closed at {opened_temp} °C or below and used within {opened_days} days. Trust your senses too: a sour smell, bubbles or separation keep it out of the meringue. Opened powder keeps as long as the pouch stays dry and sealed.' },
        { q: 'How do I make up the powder for a batch?', a: 'Mix {powder_parts} part powder with {water_parts} parts water by weight, so {powder_dose} g powder and {water_dose} g water for one batch. Chill it before whipping. The rule per egg white: {white_powder} g powder + {white_water} ml water = 1 egg white = {white_liquid} g of liquid aquafaba.' },
        { q: 'Can you send the concentration specification for my production file?', a: 'Yes, the technical sheet is sent on request. Use our [contact form]({contact_href}) to describe your production, your sites and the format you are considering.' },
      ],
    },
  },
  de: guidesDe,
  fr: guidesFr,
  nl: guidesNl,
};
