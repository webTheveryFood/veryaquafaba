// Session-written drafts, explicitly requested while Tontin's editorial mode is pending.
// Product figures resolve from applications/facts.json; pastry facts from bakeries-facts.json.
// See content/expansion-bakeries/README.md for provenance and source discrepancies.
const grid = (heads, rows) => `<table class="va-guide-grid va-guide-grid--wrap">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>${rows.map((row) => `<tr>${row.map((cell, i) => `<td data-label="${heads[i]}">${cell}</td>`).join('')}</tr>`).join('\n')}</tbody>
</table>`;

export default {
  tetrapak: {
    title: 'How Much Can You Make With 1L of Aquafaba?',
    h1: 'How much can you make with 1L of aquafaba?',
    crumb: '{liquid_1l_label}',
    eyebrow: 'Liquid and formats',
    description: 'A {liquid_1l_label} of aquafaba makes {meringue_batches_1l} meringue batches, {mayonnaise_batches_1l} mayonnaise batches or {cocktails_batches_1l} cocktails. The full yield table, the storage window and where to buy it.',
    lead: 'You open a {liquid_1l_label} for a tray of meringues, then reach for the same pack again for mousse, mayonnaise or a run of sours before the week is out. That is where the 1L format works well: several different preparations can share the same open pack over a few production days. One Tetrapak gives you {meringue_batches_1l} meringue batches, {mayonnaise_batches_1l} mayonnaise batches, {chocolate_mousse_batches_1l} full chocolate mousse batches or {cocktails_batches_1l} cocktails. Put those numbers next to what you already make and check whether you will use the pack within {opened_days} days.',
    sections: [
      {
        id: 'yield', title: 'What can you make from one 1L Tetrapak?',
        html: `${grid(['What you are making', 'From one {liquid_1l_label}'], [
  ['Meringue', '{meringue_batches_1l} batches, about {liquid_1l_meringues} meringues'],
  ['Mayonnaise', '{mayonnaise_batches_1l} batches'],
  ['Chocolate mousse', '{chocolate_mousse_batches_1l} full batches'],
  ['Cocktails', '{cocktails_batches_1l} drinks'],
])}
<p>A pastry section may split the pack between mousse and meringue, while a bar may use it entirely for sours. Whether you <a href="{meringue_href}">whip a meringue</a>, <a href="{mayonnaise_href}">make mayonnaise</a> or <a href="{chocolate_mousse_href}">make chocolate mousse</a>, keep the method for that recipe rather than changing it for the pack size.</p>`,
      },
      {
        id: 'liquid', title: 'Why choose liquid for regular use?',
        html: `<p>Liquid aquafaba is already prepared, so there is no reconstitution step before you weigh it into a recipe. For egg-white replacement, use {white_liquid}g of liquid VERY AQUAFABA per egg white. Where aquafaba replaces a whole egg for binding or moisture, use {egg_liquid}g.</p>
<p>Behind the bar, the cocktail recipes use {cocktails_dose} ml per drink. At that dose, one Tetrapak makes {cocktails_batches_1l} cocktails. If that matches your service, you can <a href="{cocktails_href}">shake cocktails with aquafaba</a> straight from the chilled pack.</p>`,
      },
      {
        id: 'storage', title: 'Will you finish an opened 1L pack in time?',
        html: `<p>Once opened, keep the liquid at {opened_temp} °C and use it within {opened_days} days. Put that storage window next to the yield table: {meringue_batches_1l} meringue batches or {cocktails_batches_1l} cocktails may be easy to use in that time for one kitchen or bar and far too much for another.</p>
<p>If you know you will not get through the liquid in {opened_days} days, <a href="{powder_href}">powder</a> lets you make up only what the next batch needs. <a href="{storage_href}">Check how to store opened aquafaba</a> when you compare the two formats.</p>`,
      },
      {
        id: 'larger', title: 'Are you using more than one Tetrapak over the same few days?',
        html: `<p>Consider a larger format when you are regularly using more than one {liquid_1l_label} over the same production window. <a href="{bib_href}">The {liquid_10l_label}</a> is for continuous liquid use rather than occasional batches. If one Tetrapak still covers several production days comfortably, stay with 1L.</p>`,
      },
      {
        id: 'buy', title: 'Where can you buy the 1L Tetrapak?',
        html: `<p>You can buy the {liquid_1l_label} through Amazon in the United States, Germany and Austria, InstantChef in France and Qualifirst in Canada. For other countries, <a href="{where_to_buy_href}">send a buying enquiry</a> with your location and what you are making.</p>`,
      },
    ],
    faq: [
      { q: 'How many meringues can I make from 1L of aquafaba?', a: 'One {liquid_1l_label} makes {meringue_batches_1l} meringue batches, or about {liquid_1l_meringues} meringues.' },
      { q: 'How many mayonnaise batches can I make from 1L?', a: 'One {liquid_1l_label} makes {mayonnaise_batches_1l} mayonnaise batches of {mayonnaise_dose}g of aquafaba each.' },
      { q: 'How many chocolate mousse batches can I make from 1L?', a: 'At the batch of {chocolate_mousse_eggs} egg whites, one {liquid_1l_label} covers {chocolate_mousse_batches_1l} full chocolate mousse batches.' },
      { q: 'How many cocktails can I make from 1L of aquafaba?', a: 'At {cocktails_dose} ml per drink in the cocktail recipes, one {liquid_1l_label} makes {cocktails_batches_1l} cocktails.' },
      { q: 'How long does an opened 1L pack keep?', a: 'Keep it at {opened_temp} °C and use it within {opened_days} days.' },
      { q: 'Where can I buy the 1L Tetrapak?', a: 'Amazon lists it in the United States, Germany and Austria, InstantChef in France and Qualifirst in Canada. For other countries, send an enquiry with your country and what you are making.' },
    ],
    links: ['liquid', 'bib', 'ibc'],
  },
  bib: {
    title: 'Is a 10L Bag-in-Box of Aquafaba Right for Your Kitchen?',
    h1: 'Is a 10L bag-in-box of aquafaba right for your kitchen?',
    crumb: '{liquid_10l_label}',
    eyebrow: 'Liquid and formats',
    description: 'A {liquid_10l_label} of aquafaba replaces {liquid_10l_whites} egg whites. Who this format is for, what it covers in production and how to ask for a professional quote.',
    lead: 'If you are opening one {liquid_1l_label} after another through service or production, the smaller format may have stopped matching the way you work. The {liquid_10l_label} is for continuous use: hotel kitchens, bars with a steady run of sours, beverage production or foodservice operations using liquid aquafaba every day. It replaces {tetrapaks_in_10l} Tetrapaks and represents {liquid_10l_whites} egg whites. The question is whether you can use that amount within the same {opened_days} day opened-pack window.',
    sections: [
      {
        id: 'who', title: 'Are you already using liquid aquafaba every day?',
        html: `<p>Choose 10L when you already use liquid aquafaba continuously through service or production. A hotel group may use it across several kitchens. A bar may pour sours throughout service. A beverage line or foodservice kitchen may use the same liquid across repeated production runs.</p>
<p>In each case, you are using the opened liquid regularly rather than storing it between occasional batches.</p>`,
      },
      {
        id: 'yield', title: 'What does 10L cover in production?',
        html: `${grid(['Production use', 'From one {liquid_10l_label}'], [
  ['Meringue', '{meringue_batches_10l} batches'],
  ['Mayonnaise', '{mayonnaise_batches_10l} batches'],
  ['Cocktails', '{cocktails_batches_10l} sours'],
  ['1L Tetrapaks', '{tetrapaks_in_10l} packs'],
])}
<p>Compare those numbers with a normal few days of production. A pastry operation can <a href="{meringue_href}">run meringue batches</a> from the same supply, while a bar can <a href="{cocktails_href}">pour sours through service</a> without opening another Tetrapak.</p>`,
      },
      {
        id: 'recipe', title: 'Does anything change in the recipe?',
        html: `<p>No. Use {white_liquid}g of liquid VERY AQUAFABA for each egg white you want to replace. The larger format changes the amount you have on hand, not the recipe ratio or method. If you <a href="{mayonnaise_href}">make mayonnaise</a>, whip meringue or use aquafaba in another established preparation, keep the method for that application.</p>`,
      },
      {
        id: 'storage', title: 'Can you use 10L within {opened_days} days?',
        html: `<p>Opened liquid VERY AQUAFABA is kept at {opened_temp} °C and used within {opened_days} days. Only choose 10L if you can use the opened liquid within that window. That usually means using it throughout service or across repeated production runs rather than waiting for the next occasional batch.</p>
<p>If you would be pushing to finish it, <a href="{tetrapak_href}">the {liquid_1l_label}</a> is the better quantity to keep open. <a href="{storage_href}">Check how to store opened aquafaba</a> before deciding which pack size fits your production rhythm.</p>`,
      },
      {
        id: 'quote', title: 'How do you get a quote for 10L?',
        html: `<p>The {liquid_10l_label} is quoted by enquiry rather than sold as a standard retail pack. When you are ready to <a href="{where_to_buy_href}">ask for a 10L quote</a>, send your country, what you are making and roughly how much aquafaba you use, using the business option in the purchase window below. We reply with the quote, the technical sheet, the minimum order and the lead time for your market.</p>`,
      },
    ],
    faq: [
      { q: 'How many egg whites does a 10L bag-in-box replace?', a: 'A {liquid_10l_label} replaces {liquid_10l_whites} egg whites, at {white_liquid}g per white.' },
      { q: 'How many meringue batches are in 10L?', a: 'One {liquid_10l_label} covers {meringue_batches_10l} meringue batches of {meringue_dose}g each.' },
      { q: 'How many mayonnaise batches are in 10L?', a: 'One {liquid_10l_label} covers {mayonnaise_batches_10l} mayonnaise batches.' },
      { q: 'How many cocktails can I make from 10L?', a: 'At {cocktails_dose} ml per drink in the cocktail recipes, one {liquid_10l_label} makes {cocktails_batches_10l} sours.' },
      { q: 'Who is the 10L format for?', a: 'Choose it when you already use liquid aquafaba continuously through service or production, such as in hotel kitchens, beverage production, foodservice or a bar with a steady run of sours.' },
      { q: 'How do I get a price for 10L?', a: 'Send a professional enquiry with your country, application and expected use. We reply with the quote, the technical sheet, the minimum order and the lead time.' },
    ],
    links: ['liquid', 'tetrapak', 'ibc'],
  },
  ibc: {
    title: 'What to Know Before Ordering a 1T IBC of Aquafaba',
    h1: 'What should you know before ordering a 1T IBC of aquafaba?',
    crumb: '{liquid_1t_label}',
    eyebrow: 'Liquid and formats',
    description: 'A {liquid_1t_label} of aquafaba represents {liquid_1t_whites} egg whites. When it fits established production, what the enquiry returns and what your line confirms before ordering.',
    lead: 'You have already tested the recipe, fixed the dose and moved aquafaba into regular production. Smaller packs now mean repeated orders, repeated handling and more packaging around an ingredient that is already established on the line. A {liquid_1t_label} is for that stage of production. It represents {liquid_1t_whites} egg whites, with the same {white_liquid}g working ratio used in the smaller liquid formats. Before you order, check whether that volume matches your use, what your setup needs to handle the format, and which order details we need to confirm for your market.',
    sections: [
      {
        id: 'when', title: 'Have you already established the recipe and process?',
        html: `<p>Consider an IBC only after the recipe and production process are already established. It can suit a site making the same egg-free product regularly, a central production operation supplying several lines, or a manufacturer that has already validated aquafaba and now needs a larger supply format.</p>
<p>If the application is still being developed, <a href="{index_href}">test it at recipe scale</a> first. Move to the IBC after aquafaba is already part of the process.</p>`,
      },
      {
        id: 'volume', title: 'How does {liquid_1t_whites} egg whites compare with your production?',
        html: `<p>One {liquid_1t_label} represents {liquid_1t_whites} egg whites. Compare that directly with the number of egg whites your production already replaces. If your use is close to that scale, an IBC is worth discussing.</p>
<p>If your volume is lower, <a href="{bib_href}">compare the {liquid_10l_label}</a> for continuous professional use, or <a href="{tetrapak_href}">the {liquid_1l_label}</a> when you use smaller quantities.</p>`,
      },
      {
        id: 'ratio', title: 'Does the working ratio change at this scale?',
        html: `<p>No. The liquid is still ready to use, and the working ratio stays at {white_liquid}g of VERY AQUAFABA for each egg white you want to replace. Changing to an IBC changes the supply format, not the recipe ratio. Establish the application in a smaller format before changing the way you order and handle the ingredient.</p>`,
      },
      {
        id: 'enquiry', title: 'What should you include in the enquiry?',
        html: `<p>Send your country, the application and the volume you expect to use. Add any questions your line raises about handling the IBC on site. If you need to confirm a connection, a dosing step or another part of the setup, include it rather than working from an assumption.</p>
<p>We reply with the technical sheet, the minimum order and the lead time for your market. <a href="{where_to_buy_href}">Send the production details you already know</a>, through the business option in the purchase window below, so we can answer the practical points before you place the order.</p>`,
      },
    ],
    faq: [
      { q: 'How many egg whites does a 1T IBC replace?', a: 'One {liquid_1t_label} represents {liquid_1t_whites} egg whites, at {white_liquid}g per white.' },
      { q: 'Is the aquafaba in the IBC ready to use?', a: 'Yes. Liquid VERY AQUAFABA is supplied ready to use in every pack size.' },
      { q: 'Does the ratio change at industrial scale?', a: 'No. Use {white_liquid}g of liquid VERY AQUAFABA for each egg white you want to replace.' },
      { q: 'What can I ask for before ordering an IBC?', a: 'Ask for the technical sheet, the minimum order and the lead time, and include any handling questions your line raises.' },
      { q: 'What should I put in the enquiry?', a: 'Your country, the application, the expected volume and any practical questions you need us to confirm for your line.' },
    ],
    links: ['liquid', 'tetrapak', 'bib'],
  },
  pavlova: {
    title: 'Aquafaba Pavlova: How to Make a 20 cm Base',
    h1: 'Aquafaba pavlova: how to make a {pavlova_diameter} cm base',
    crumb: 'Pavlova',
    eyebrow: 'Application guide',
    description: 'A pavlova base with {pavlova_aquafaba}g of aquafaba and {pavlova_sugar}g of sugar, dried at {pavlova_oven} °C: the ingredients, the method, baking ahead, and what goes wrong.',
    lead: 'You need a pavlova base that stays crisp outside and soft in the centre. For one {pavlova_diameter} cm base, use {pavlova_aquafaba}g of chilled VERY AQUAFABA, equivalent to {pavlova_whites} egg whites, with {pavlova_sugar}g of caster sugar. If you use powder, make up {pavlova_powder}g with {pavlova_water} ml of water first. The starch, acid, drying and cooling steps are what separate this base from a standard dried meringue.',
    sections: [
      {
        id: 'ingredients', title: 'What do you need for one base?',
        html: `${grid(['Ingredient', 'Quantity'], [
  ['VERY AQUAFABA', '{pavlova_aquafaba}g'],
  ['Caster sugar', '{pavlova_sugar}g'],
  ['Corn starch', '{pavlova_cornstarch}g'],
  ['White wine vinegar or lemon juice', '{pavlova_vinegar}g'],
  ['Cream of tartar', '{pavlova_tartar}g, optional'],
  ['Citric acid', '{pavlova_citric}g instead of cream of tartar, optional'],
])}
<p>For powder, use {pavlova_powder}g of powder with {pavlova_water} ml of water, then chill the prepared aquafaba. <a href="{pavlova_calc_href}">Scale the quantities with the calculator</a> for more than one base.</p>`,
      },
      {
        id: 'method', title: 'How do you make the base?',
        html: `<ol>
<li>Chill the aquafaba to {pavlova_chill} °C.</li>
<li>Whip it in a clean, grease-free bowl until you reach soft peaks.</li>
<li>Add the optional cream of tartar or citric acid, then continue whipping.</li>
<li>Add the caster sugar gradually until the meringue is glossy, stiff and dense.</li>
<li>Fold in the corn starch and vinegar or lemon juice.</li>
<li>Shape a {pavlova_diameter} cm disc with slightly raised edges on a lined tray.</li>
<li>Dry at {pavlova_oven} °C, fan off, for {pavlova_hours} hours.</li>
<li>Switch the oven off and let the base cool inside with the door ajar.</li>
<li>Add the cream and fruit just before service.</li>
</ol>
<p><a href="{pavlova_process_href}">The process sheet</a> puts each step beside its reference value, with a column for your own batch.</p>`,
      },
      {
        id: 'ahead', title: 'Are you baking the base ahead?',
        html: `<p>You can bake the base {pavlova_ahead} day ahead. Keep it airtight with a desiccant pouch until assembly. Do not add the cream and fruit until service, because the moisture from the topping softens the shell.</p>`,
      },
      {
        id: 'often', title: 'How often do you make pavlova?',
        html: `<p>A {liquid_1l_label} covers {pavlova_batches_1l} bases. If you make pavlova often enough to finish the liquid within {opened_days} days, weigh {pavlova_aquafaba}g directly from the chilled pack for each base.</p>
<p>If pavlova appears for occasional menus, banquets or weekend production, <a href="{p_pavlova_href}">powder</a> lets you prepare the aquafaba for the bases in that oven run and keep the remaining pouch dry and closed. <a href="{powder_href}">Compare the powder pouches</a> if you work from powder regularly.</p>`,
      },
      {
        id: 'wrong', title: 'What should you check when the pavlova goes wrong?',
        html: `${grid(['What you see', 'Why', 'Fix'], [
  ['Foam does not reach volume', 'Warm aquafaba or grease on equipment', 'Chill to {pavlova_chill} °C and use clean equipment'],
  ['Shell cracks while cooling', 'Cooling was too fast', 'Cool in the switched-off oven with the door ajar'],
  ['Centre is soft throughout', 'Base needs more drying', 'The full {pavlova_hours} hours at {pavlova_oven} °C'],
  ['Centre dries completely', 'Starch and acid left out, or dried too far', 'Fold them in; pull the base while the centre still gives'],
  ['Base softens after assembly', 'Topping went on too early', 'Add cream and fruit at service'],
])}`,
      },
    ],
    faq: [
      { q: 'How much aquafaba do I use for one pavlova?', a: '{pavlova_aquafaba}g for one {pavlova_diameter} cm base, the equivalent of {pavlova_whites} egg whites.' },
      { q: 'How much powder do I use?', a: '{pavlova_powder}g of powder with {pavlova_water} ml of water, chilled before whipping.' },
      { q: 'What temperature do I use?', a: '{pavlova_oven} °C, fan off, for {pavlova_hours} hours.' },
      { q: 'Can I bake the base in advance?', a: 'Yes. Bake it {pavlova_ahead} day ahead and keep it airtight with a desiccant pouch.' },
      { q: 'Why do I add starch and acid?', a: 'They create the soft centre beneath the crisp shell. Fold in {pavlova_cornstarch}g of starch and {pavlova_vinegar}g of vinegar or lemon juice after the sugar.' },
    ],
    links: ['pavlova_calc', 'pavlova_process', 'p_pavlova', 'dacquoise'],
  },
  pavlova_calc: {
    title: 'How Much Aquafaba Do You Need for Pavlova? Calculator',
    h1: 'How much aquafaba do you need for pavlova?',
    crumb: 'Quantity calculator',
    eyebrow: 'Quantity calculator',
    description: 'Scale the pavlova base to the number you bake: aquafaba in liquid or powder with its water, sugar, starch, acid and toppings per base, and bases per pack.',
    lead: 'Each {pavlova_diameter} cm pavlova base starts from the same reference batch: {pavlova_aquafaba}g of aquafaba, {pavlova_whites} egg whites, with {pavlova_sugar}g of sugar. Use the calculator to scale the ingredients. Keep the oven temperature, the drying time and the base size unchanged.',
    sections: [
      {
        id: 'scales', title: 'What scales with the number of bases?',
        html: `<p>Aquafaba, sugar, starch, acid, cream and fruit all scale with the bases. Do not increase the oven temperature because you are making more bases: each base still dries at {pavlova_oven} °C, fan off, for {pavlova_hours} hours, and the aquafaba is whipped at {pavlova_chill} °C whatever the batch.</p>
<p>The powder is counted per egg white: {white_powder}g with {white_water} ml of water for each of the {pavlova_whites} whites in a base, so {pavlova_powder}g and {pavlova_water} ml per base, made up and chilled before whipping.</p>`,
      },
      {
        id: 'packs', title: 'How many bases can you make from each pack?',
        html: `${grid(['Pack', '{pavlova_diameter} cm bases'], [
  ['{liquid_1l_label}', '{pavlova_batches_1l}'],
  ['{liquid_10l_label}', '{pavlova_batches_10l}'],
  ['{small_pouch_g}g pouch', '{pavlova_batches_30g}'],
  ['{medium_pouch_g}g pouch', '{pavlova_batches_200g}'],
  ['{large_pouch_kg}kg pouch', '{pavlova_batches_3kg}'],
])}
<p>Use the pack table for stock planning and the calculator for the recipe quantities. <a href="{pavlova_href}">Follow the pavlova method</a> before scaling a first production run.</p>`,
      },
      {
        id: 'example', title: 'A worked example: ten bases for a banquet',
        html: `<p>Ten {pavlova_diameter} cm bases take {ten_bases_aquafaba}g of liquid aquafaba, which is {ten_bases_packs} Tetrapaks opened, or {ten_bases_powder}g of powder made up with {ten_bases_water_l}L of water from a {medium_pouch_g}g pouch. They need {ten_bases_sugar}g of caster sugar, and for the toppings {ten_bases_cream_l}L of whipped plant-based cream and {ten_bases_fruit_kg}kg of fruit, added at service.</p>
<p>Baked {pavlova_ahead} day ahead and stored airtight with a desiccant pouch, the bases wait; only the assembly happens on the day. <a href="{pavlova_process_href}">The process sheet</a> lists each step with its reference value for the oven team.</p>`,
      },
    ],
    faq: [
      { q: 'How much aquafaba do I use for two bases?', a: '{two_bases_aquafaba}g of liquid, or {two_bases_powder}g of powder with {two_bases_water} ml of water.' },
      { q: 'Does the drying time double for two bases?', a: 'No. Use {pavlova_oven} °C, fan off, for {pavlova_hours} hours per base.' },
      { q: 'How many bases can I make from a 200g pouch?', a: '{pavlova_batches_200g}.' },
      { q: 'Do the toppings scale with the bases?', a: 'Yes. The reference is {pavlova_cream} ml of cream and {pavlova_fruit}g of fruit per base.' },
    ],
    links: ['pavlova', 'pavlova_process', 'p_pavlova'],
  },
  pavlova_process: {
    title: 'How to Make an Aquafaba Pavlova: Process Sheet',
    h1: 'How to make an aquafaba pavlova: process sheet',
    crumb: 'Process sheet',
    eyebrow: 'Process sheet',
    description: 'Every step of the aquafaba pavlova base with its reference value and a column for your own batch, then the checks: what you see, why, the fix. Ready to print.',
    lead: 'Use this sheet at the station once the recipe quantities are weighed. For a different number of bases, scale the ingredients first. The sequence and the reference states stay the same: {pavlova_aquafaba}g of aquafaba at {pavlova_chill} °C, {pavlova_sugar}g of sugar, {pavlova_oven} °C for {pavlova_hours} hours.',
    powderNote: 'Powder: make up {pavlova_powder}g with {pavlova_water} ml of water per base and chill it before step 1.',
    steps: [
      { step: 'Chill the aquafaba', reference: '{pavlova_aquafaba}g at {pavlova_chill} °C per base' },
      { step: 'Whip to soft peaks', reference: 'Clean, grease-free bowl' },
      { step: 'Add the optional stabiliser', reference: '{pavlova_tartar}g cream of tartar or {pavlova_citric}g citric acid' },
      { step: 'Add the sugar gradually', reference: '{pavlova_sugar}g, to glossy stiff peaks' },
      { step: 'Fold in the starch and the acid', reference: '{pavlova_cornstarch}g + {pavlova_vinegar}g' },
      { step: 'Shape the base', reference: '{pavlova_diameter} cm disc with raised edges' },
      { step: 'Dry', reference: '{pavlova_oven} °C, fan off, {pavlova_hours} hours' },
      { step: 'Cool', reference: 'Oven off, door ajar' },
      { step: 'Store or assemble', reference: 'Airtight up to {pavlova_ahead} day; top at service' },
    ],
    checks: [
      { see: 'Foam does not reach volume', check: 'Temperature and grease', fix: 'Chill the aquafaba and use clean equipment' },
      { see: 'Meringue stays loose', check: 'Peak stage and sugar addition', fix: 'Continue according to the recipe before shaping' },
      { see: 'Shell cracks while cooling', check: 'Cooling speed', fix: 'Leave it in the switched-off oven with the door ajar' },
      { see: 'Centre is soft throughout', check: 'Drying time', fix: 'The full {pavlova_hours} hours' },
      { see: 'Base dries through', check: 'Starch, acid and drying time', fix: 'Fold them in; pull the base at the reference time while the centre still gives' },
      { see: 'Base softens after topping', check: 'Topping time', fix: 'Assemble at service' },
    ],
    sections: [
      {
        id: 'ready', title: 'What should you have ready before whipping?',
        html: `<p>Before you start the mixer: chill the aquafaba, weigh the sugar, measure the starch and the acid, line the tray, mark the {pavlova_diameter} cm circle, and heat the oven to {pavlova_oven} °C with the fan off. Once the foam is ready, move directly into the next stage.</p>
<p><a href="{pavlova_calc_href}">Scale the quantities first</a> when you are making more than one base; <a href="{pavlova_href}">the pavlova method</a> has the recipe and what goes wrong.</p>`,
      },
      {
        id: 'good', title: 'What a good base looks like at each step',
        html: `<p>Soft peaks that lean, then firm peaks that stand. After the sugar, a meringue that is glossy and dense. After the fold, the same meringue, barely moved. Out of the oven, a shell that is dry and pale over a centre that gives slightly under the finger. Cooled, a base with no crack across the top. Assembled, a crisp edge under the cream right up to service.</p>
<p>Tick each step as its state is reached, not as it is done. A step whose state is not there is the moment to stop and check, before the next one hides it.</p>`,
      },
    ],
    faq: [
      { q: 'When do I add the sugar?', a: 'After the initial foam has formed, add it gradually while whipping until the meringue is glossy, stiff and dense.' },
      { q: 'How do I know the base is dried?', a: 'The shell is crisp outside after {pavlova_hours} hours at {pavlova_oven} °C, while the centre remains slightly soft.' },
      { q: 'Can I use this sheet with powder?', a: 'Yes. Make up {pavlova_powder}g with {pavlova_water} ml of water per base, chill it, then start at step 1.' },
      { q: 'How far ahead can I make the base?', a: 'Up to {pavlova_ahead} day, stored airtight with a desiccant pouch.' },
    ],
    links: ['pavlova', 'pavlova_calc', 'p_pavlova'],
  },
  p_pavlova: {
    title: 'Can You Make a Pavlova With Aquafaba Powder?',
    h1: 'Can you make a pavlova with aquafaba powder?',
    crumb: 'Powder for pavlova',
    eyebrow: 'Powder by application',
    description: 'Yes. {pavlova_powder}g of aquafaba powder with {pavlova_water} ml of water replaces the {pavlova_whites} egg whites of a pavlova base. The make-up, the soft centre, and the bases a pouch gives.',
    lead: 'A pavlova base is often made ahead of service, while the next batch may not be needed for several days. Powder lets you prepare the aquafaba for the bases you are baking today and keep the rest of the pouch dry for the next oven day. For one {pavlova_diameter} cm base, make up {pavlova_powder}g of VERY AQUAFABA powder with {pavlova_water} ml of water. That replaces {pavlova_whites} egg whites.',
    sections: [
      {
        id: 'make-up', title: 'How do you prepare the powder for pavlova?',
        html: `<p>Make up {pavlova_powder}g of powder with {pavlova_water} ml of water and chill it to {pavlova_chill} °C before whipping. Whip to soft peaks, then add {pavlova_tartar}g of cream of tartar and continue to firm peaks. Add {pavlova_sugar}g of caster sugar progressively until the meringue is glossy and dense. Fold in {pavlova_cornstarch}g of corn starch and {pavlova_vinegar}g of vinegar.</p>
<p>Shape a {pavlova_diameter} cm disc and dry it at {pavlova_oven} °C, fan off, for {pavlova_hours} hours. Cool it in the switched-off oven with the door ajar. <a href="{pavlova_href}">Follow the complete pavlova method</a> for drying and troubleshooting.</p>`,
      },
      {
        id: 'centre', title: 'How do you keep the soft centre?',
        html: `<p>The powder does not change the pavlova method once you have made up the aquafaba. The starch and the vinegar in the meringue, and the drying time, are what keep the centre soft. Follow those quantities and the same drying method rather than changing the recipe for the powder format.</p>`,
      },
      {
        id: 'pouch', title: 'How many pavlova bases can you make from each pouch?',
        html: `${grid(['Pouch', '{pavlova_diameter} cm pavlova bases'], [
  ['{small_pouch_g}g', '{pavlova_batches_30g}'],
  ['{medium_pouch_g}g', '{pavlova_batches_200g}'],
  ['{large_pouch_kg}kg', '{pavlova_batches_3kg}'],
])}
<p>If pavlova appears for weekends, banquets or seasonal menus, powder lets you make up the aquafaba for each oven run without opening a litre of liquid for occasional use. If you make pavlova most production days and can finish a liquid pack within {opened_days} days, <a href="{tetrapak_href}">compare the {liquid_1l_label}</a>.</p>`,
      },
      {
        id: 'wrong', title: 'What should you check when a pavlova goes wrong?',
        html: `${grid(['What you see', 'Why', 'Fix'], [
  ['Foam will not reach volume', 'Made-up aquafaba is too warm or equipment is greasy', 'Chill it and degrease the bowl and whisk'],
  ['Nothing happens in the bowl', 'Powder was added dry', 'Make it up with {pavlova_water} ml of water first'],
  ['Shell cracks while cooling', 'It cooled too quickly', 'Switch the oven off and cool it with the door ajar'],
  ['Base dries through', 'Starch and acid left out, or drying went too far', 'Fold them in; pull the base while the centre still gives'],
  ['Base softens in storage', 'It absorbed moisture', 'Keep the dried base airtight with a desiccant pouch'],
])}`,
      },
    ],
    faq: [
      { q: 'How much aquafaba powder do I need for a pavlova?', a: 'Use {pavlova_powder}g of powder with {pavlova_water} ml of water for one {pavlova_diameter} cm base. That replaces {pavlova_whites} egg whites.' },
      { q: 'Do I chill the made-up aquafaba before whipping?', a: 'Yes. Chill it to {pavlova_chill} °C before whipping.' },
      { q: 'Does powder change the pavlova method?', a: 'No. Once you have made up the aquafaba, follow the same quantities and drying method as the pavlova recipe.' },
      { q: 'How many pavlova bases can I make from a 200g pouch?', a: 'A {medium_pouch_g}g pouch makes {pavlova_batches_200g} bases at {pavlova_powder}g of powder per base.' },
      { q: 'Can I keep the pouch for the next oven day?', a: 'Yes. Keep the opened pouch dry and closed and use it by the best-before date.' },
    ],
    links: ['pavlova', 'pavlova_calc', 'powder'],
  },
  dacquoise_calc: {
    title: 'How Much Aquafaba Do You Need for Dacquoise? Calculator',
    h1: 'How much aquafaba do you need for dacquoise?',
    crumb: 'Quantity calculator',
    eyebrow: 'Quantity calculator',
    description: 'Scale the almond dacquoise to the frames you bake: aquafaba in liquid or powder with its water, plus the sugars, ground almonds, baking powder and cornflour.',
    lead: 'Scale the dacquoise from the frame, not from an approximate egg-white count. One reference frame uses {dacquoise_aquafaba}g of VERY AQUAFABA and bakes for {dacquoise_minutes} minutes at {dacquoise_oven} °C. The powder preparation gives slightly more than the recipe dose: make up {dacquoise_powder}g with {dacquoise_water} ml of water, chill it, then weigh the {dacquoise_aquafaba}g you need.',
    sections: [
      {
        id: 'scales', title: 'What scales?',
        html: `<p>All six ingredients scale with the number of frames. The reference oven does not: keep {dacquoise_oven} °C and {dacquoise_minutes} minutes, then check the bake in your own frame or ring. The aquafaba is whipped cold whatever the batch, and the dry ingredients go in only once the meringue holds. Two frames are two trays at the same setting, not one deeper frame for twice the time.</p>`,
      },
      {
        id: 'packs', title: 'How many frames can you make from each pack?',
        html: `${grid(['Pack', 'Reference frames'], [
  ['{liquid_1l_label}', '{dacquoise_batches_1l}'],
  ['{small_pouch_g}g pouch', '{dacquoise_batches_30g}'],
  ['{medium_pouch_g}g pouch', '{dacquoise_batches_200g}'],
  ['{large_pouch_kg}kg pouch', '{dacquoise_batches_3kg}'],
])}
<p>Use the calculator for recipe quantities and the pack figures for stock planning. <a href="{dacquoise_href}">Follow the dacquoise method</a> before fixing a production yield.</p>`,
      },
      {
        id: 'example', title: 'A worked example: the double batch',
        html: `<p>Two frames take {dacquoise_double_aquafaba}g of liquid aquafaba, or {dacquoise_double_powder}g of powder with {dacquoise_double_water} ml of water, with the almonds, sugars, baking powder and cornflour doubled alongside: {dacquoise_double_ground_almonds}g of ground almonds, {dacquoise_double_sugar}g of sugar, {dacquoise_double_icing_sugar}g of icing sugar, {dacquoise_double_baking_powder}g of baking powder and {dacquoise_double_cornflour}g of cornflour. The oven stays at {dacquoise_oven} °C for {dacquoise_minutes} minutes per frame.</p>
<p>At {dacquoise_aquafaba}g a frame the litre goes quickly, {dacquoise_batches_1l} frames inside its {opened_days} days, which suits a section that bakes dacquoise through the week. For an occasional entremets, the pouch keeps dry and closed between frames. <a href="{dacquoise_process_href}">The process sheet</a> puts each step beside its reference.</p>`,
      },
    ],
    faq: [
      { q: 'How much aquafaba do I need for one frame?', a: '{dacquoise_aquafaba}g.' },
      { q: 'How much powder do I prepare?', a: '{dacquoise_powder}g with {dacquoise_water} ml of water, then weigh {dacquoise_aquafaba}g of the prepared aquafaba.' },
      { q: 'Does the baking time change for two frames?', a: 'No. The reference remains {dacquoise_minutes} minutes at {dacquoise_oven} °C.' },
      { q: 'Do the almonds and sugars scale with the frames?', a: 'Yes. Scale all recipe ingredients by the same factor.' },
    ],
    links: ['dacquoise', 'dacquoise_process', 'powder'],
  },
  dacquoise_process: {
    title: 'How to Make an Aquafaba Dacquoise: Process Sheet',
    h1: 'How to make an aquafaba dacquoise: process sheet',
    crumb: 'Process sheet',
    eyebrow: 'Process sheet',
    description: 'Every step of the aquafaba dacquoise with its reference value and a column for your own batch, then the checks: what you see, why, the fix. Ready to print.',
    lead: 'Use this sheet once the ingredients are weighed and the frame is ready. The critical check happens before the almonds go in: build the meringue first, then add the dry ingredients progressively. The reference values are {dacquoise_aquafaba}g of aquafaba, {dacquoise_sugar}g of sugar, {dacquoise_minutes} minutes at {dacquoise_oven} °C.',
    powderNote: 'Powder: make up {dacquoise_powder}g with {dacquoise_water} ml of water, chill it and weigh {dacquoise_aquafaba}g before step 1.',
    steps: [
      { step: 'Whip the chilled aquafaba', reference: '{dacquoise_aquafaba}g, clean grease-free bowl' },
      { step: 'Add the sugar', reference: '{dacquoise_sugar}g' },
      { step: 'Check the meringue', reference: 'It should hold before the dry ingredients' },
      { step: 'Add the dry ingredients progressively', reference: '{dacquoise_ground_almonds}g almonds, {dacquoise_icing_sugar}g icing sugar, {dacquoise_baking_powder}g baking powder, {dacquoise_cornflour}g cornflour' },
      { step: 'Mix', reference: 'Stop once combined' },
      { step: 'Fill the frame or ring', reference: 'Level the batter' },
      { step: 'Bake', reference: '{dacquoise_oven} °C for {dacquoise_minutes} minutes' },
    ],
    checks: [
      { see: 'Meringue does not stiffen', check: 'Temperature and grease', fix: 'Chill the aquafaba and use clean equipment' },
      { see: 'Batter becomes loose', check: 'Dry ingredients were added before the meringue held', fix: 'Build the meringue first' },
      { see: 'Dacquoise is dense', check: 'Mixing continued too long', fix: 'Stop as soon as the dry ingredients are incorporated' },
      { see: 'Centre is under-baked', check: 'Oven, mould or bake', fix: 'Check the reference {dacquoise_minutes} minute bake in your equipment' },
      { see: 'Edges are dry', check: 'Bake ran too far', fix: 'Check at the reference time' },
    ],
    sections: [
      {
        id: 'ready', title: 'What should you prepare before the mixer starts?',
        html: `<p>Have ready: the chilled aquafaba, the {dacquoise_sugar}g of sugar, the ground almonds, the icing sugar, the baking powder, the cornflour, the prepared frame or ring, and the oven at {dacquoise_oven} °C. Do not stop after whipping to weigh the ingredients that come next.</p>
<p><a href="{dacquoise_calc_href}">Scale the ingredients with the calculator</a> before a larger run; <a href="{dacquoise_href}">the dacquoise recipe</a> has the method and the double batch.</p>`,
      },
      {
        id: 'good', title: 'What a good dacquoise looks like at each step',
        html: `<p>A meringue that stiffens and holds on the whisk before the sugar, glossy after it. A batter that stays airy as the almonds go in, mixed just until no dry patch remains. A frame filled level. Out of the oven after {dacquoise_minutes} minutes, a top that is set and lightly coloured over a centre that is baked through but still tender, the almond flavour clean.</p>
<p>Tick each step as its state is reached. The one state that matters most is the meringue holding before the dry ingredients go in; if it is not there, stop and check the bowl and the temperature.</p>`,
      },
    ],
    faq: [
      { q: 'When do I add the almonds?', a: 'After the meringue holds.' },
      { q: 'How long does the dacquoise bake?', a: '{dacquoise_minutes} minutes at {dacquoise_oven} °C in the reference method.' },
      { q: 'Can I use this sheet with powder?', a: 'Yes. Make up the powder, chill it, weigh {dacquoise_aquafaba}g and begin at step 1.' },
      { q: 'Why did my dacquoise come out dense?', a: 'Check whether the meringue had formed before the dry ingredients went in and whether the batter was mixed longer than necessary.' },
    ],
    links: ['dacquoise', 'dacquoise_calc', 'powder'],
  },
  pack_finder: {
    title: 'Which VERY AQUAFABA Pack Fits the Way You Work?',
    h1: 'Which VERY AQUAFABA pack fits the way you work?',
    crumb: 'Pack finder',
    eyebrow: 'Tool',
    description: "Type the egg whites you replace in 3 to 4 days and in a week, and the pack finder names the VERY AQUAFABA pack that fits, with the reason and the dose.",
    lead: 'You use 20 egg-white equivalents one week and 40 the next. The number that decides the pack is not the size of your biggest batch. It is how much liquid you can finish after opening it and how much powder you use over time. The pack finder uses those two rhythms to narrow the choice.',
    sections: [
      { type: 'pack-finder', id: 'finder', title: 'Find your pack' },
      {
        id: 'rule', title: 'How the finder decides',
        html: `${grid(['Egg whites in {opened_days} days', 'Egg whites in a week', 'Pack'], [
  ['{liquid_1l_whites} or more', 'any', '{liquid_1l_label}: the opened pack is used in time'],
  ['{liquid_10l_whites} or more', 'any', '{liquid_10l_label}: continuous use, quoted for your project'],
  ['Fewer than {liquid_1l_whites}', 'up to {powder_30g_whites}', '{small_pouch_g}g powder pouch: the trial size'],
  ['Fewer than {liquid_1l_whites}', '{powder_30g_whites} to {powder_200g_whites}', '{medium_pouch_g}g powder pouch: dry and closed between batches'],
  ['Fewer than {liquid_1l_whites}', 'more than {powder_200g_whites}', '{large_pouch_kg}kg powder pouch: repeated runs, quoted for your project'],
])}
<p>The finder suggests a format and a pack to investigate; it does not replace the recipe quantities on your prep sheet. The dose does not change with the pack: {white_liquid}g of liquid or {white_powder}g of powder with {white_water} ml of water per egg white, {egg_liquid}g of liquid per whole egg.</p>`,
      },
      {
        id: 'days', title: 'First, how much do you use in {opened_days} days?',
        html: `<p>An opened liquid pack is kept at {opened_temp} °C and used within {opened_days} days. A {liquid_1l_label} represents {liquid_1l_whites} egg whites. If you regularly use around that quantity within the opened-pack window, <a href="{tetrapak_href}">liquid</a> may fit your normal production. The {liquid_10l_label} represents {liquid_10l_whites} egg whites and is for established continuous liquid use.</p>`,
      },
      {
        id: 'week', title: 'Then, how much do you use across a longer period?',
        html: `<p>Powder does not have the same opened-liquid window. Keep the opened pouch dry and closed and use it by the best-before date. The {small_pouch_g}g pouch, {powder_30g_whites} egg whites, is <a href="{small_pouch_href}">the trial size</a>. The {medium_pouch_g}g pouch, {powder_200g_whites} egg whites, suits <a href="{pouch_href}">regular powder use across separated production days</a>. The {large_pouch_kg}kg pouch, {powder_3kg_whites} egg whites, is for established repeated powder use and is quoted for your project.</p>`,
      },
      {
        id: 'count', title: 'How do you count your use?',
        html: `<p>Take the preparations you already make. The recipes use {meringue_eggs} egg whites for one meringue batch, {chocolate_mousse_eggs} for one mousse batch and {macarons_eggs} for one macaron batch. For cocktails, use the {cocktails_dose} ml per drink rather than converting every drink into one egg white. Add the applications that fall inside your busiest {opened_days} days, then look at the longer production pattern.</p>
<p>If the answer sits on a threshold, choose from the production pattern as well as the arithmetic. If liquid would regularly remain open beyond {opened_days} days, use a smaller liquid pack or compare powder. If you repeatedly open several {liquid_1l_label}s within the same few days, compare the {liquid_10l_label}. If the {medium_pouch_g}g pouch is becoming a constant reorder, discuss the {large_pouch_kg}kg pouch. <a href="{supply_href}">Planning the stock from the egg-white count</a> turns the week into an order.</p>`,
      },
      {
        id: 'buy', title: 'Where can you buy the pack?',
        html: `<p>The {liquid_1l_label} and the {medium_pouch_g}g pouch are sold online through Amazon in the United States, Germany and Austria, InstantChef in France, Siradis in Switzerland and Qualifirst in Canada. The {liquid_10l_label}, the {liquid_1t_label} and the {large_pouch_kg}kg pouch are quoted for your project. <a href="{where_to_buy_href}">Check the buying route for your country</a> when you know which format you want to test.</p>`,
      },
    ],
    faq: [
      { q: 'How do I know which pack to buy?', a: 'Start with how much liquid you would use within {opened_days} days, then compare the longer production rhythm for powder.' },
      { q: 'Why does the finder ask about 3 to 4 days?', a: 'That is the opened storage window for liquid VERY AQUAFABA at {opened_temp} °C.' },
      { q: 'Which pouch should I use for a first test?', a: 'The {small_pouch_g}g pouch is the trial format, {powder_30g_whites} egg whites made up by the batch.' },
      { q: 'When should I compare the 10L bag-in-box?', a: 'When you already use liquid continuously and open several {liquid_1l_label}s over the same few production days.' },
      { q: 'Which formats are quoted?', a: 'The {liquid_10l_label}, the {liquid_1t_label} and the {large_pouch_kg}kg pouch.' },
    ],
    links: ['supply', 'liquid', 'powder'],
  },
  p_meringue: {
    title: 'Can You Make Meringue With Aquafaba Powder?',
    h1: 'Can you make meringue with aquafaba powder?',
    crumb: 'Powder for meringue',
    eyebrow: 'Powder by application',
    description: 'Yes. {meringue_powder}g of aquafaba powder with {meringue_water} ml of water replaces the {meringue_eggs} egg whites of a meringue batch. The make-up, the whip, and how many batches a pouch gives.',
    lead: 'You have meringue on the menu this weekend, then nothing planned for another week. That is exactly the kind of production rhythm where powder is useful: make up the aquafaba for the batches in front of you, then keep the pouch dry and closed until the next oven day. For one batch, make up {meringue_powder}g of VERY AQUAFABA powder with {meringue_water} ml of water. That replaces {meringue_eggs} egg whites and makes about {meringue_yield} small meringues with {meringue_sugar}g of caster sugar.',
    sections: [
      {
        id: 'make-up', title: 'How do you make up the powder for meringue?',
        html: `<p>Make up {meringue_powder}g of powder with {meringue_water} ml of water, then chill the aquafaba to {meringue_chill} °C before whipping. Use a clean, grease-free bowl and whip to soft peaks. Add {meringue_sugar}g of caster sugar progressively, then continue whipping until the meringue is glossy and stiff.</p>
<p>Pipe straight away and dry at {meringue_bake} °C, fan off, for {meringue_bake_time} hours. <a href="{meringue_href}">Follow the full meringue method</a> for drying, storage and troubleshooting.</p>`,
      },
      {
        id: 'pouch', title: 'How many meringue batches can you make from each pouch?',
        html: `${grid(['Pouch', 'Meringue batches', 'About'], [
  ['{small_pouch_g}g', '{small_meringue_batches}', '{three_batches_meringues} meringues'],
  ['{medium_pouch_g}g', '{meringue_batches_200g}', '{medium_pouch_meringues} meringues'],
  ['{large_pouch_kg}kg', '{meringue_batches_3kg}', 'Higher-volume production'],
])}
<p>Each row assumes the whole pouch is used for meringue. <a href="{small_pouch_href}">The {small_pouch_g}g pouch</a> works well when you want to test the recipe or run a few batches. If meringue comes back regularly but not every day, <a href="{pouch_href}">the {medium_pouch_g}g pouch</a> gives you more production days without requiring you to make up the whole pouch at once.</p>`,
      },
      {
        id: 'rhythm', title: 'Do you bake meringue every day or in runs?',
        html: `<p>Powder works particularly well when meringue production comes in runs. A seasonal dessert, a weekend menu or an occasional banquet may only need a few batches at a time. Make up the amount you need, then keep the rest of the pouch dry and closed until the best-before date.</p>
<p>If you pipe meringue most days, liquid may suit that rhythm better. <a href="{tetrapak_href}">One {liquid_1l_label} makes {meringue_batches_1l} meringue batches</a> and should be used within {opened_days} days after opening.</p>`,
      },
      {
        id: 'wrong', title: 'What should you check when the meringue goes wrong?',
        html: `${grid(['What you see', 'Why', 'Fix'], [
  ['Foam never reaches full volume', 'Grease on the bowl or whisk', 'Degrease everything before you start'],
  ['Foam builds slowly and stays weak', 'Made-up aquafaba is too warm', 'Chill it to {meringue_chill} °C before whipping'],
  ['Nothing happens in the bowl', 'Powder was added dry', 'Make it up with {meringue_water} ml of water first'],
  ['Syrup beads on the meringues', 'Sugar was added too quickly', 'Add it progressively'],
  ['Meringues turn soft in storage', 'They absorbed moisture', 'Store airtight in a dry place with a desiccant pouch'],
])}`,
      },
    ],
    faq: [
      { q: 'How much aquafaba powder do I need for meringue?', a: 'Use {meringue_powder}g of powder with {meringue_water} ml of water for one batch. That replaces {meringue_eggs} egg whites and makes about {meringue_yield} small meringues with {meringue_sugar}g of sugar.' },
      { q: 'Can I add the powder straight to the sugar?', a: 'No. Make up the powder with water first, chill the aquafaba, then whip it.' },
      { q: 'How many meringue batches can I make from a 200g pouch?', a: 'A {medium_pouch_g}g pouch gives you {meringue_batches_200g} batches if you use the whole pouch for meringue.' },
      { q: 'Does powder change the drying method?', a: 'No. Once the aquafaba has been made up and whipped, follow the same meringue method: {meringue_bake} °C, fan off, for {meringue_bake_time} hours.' },
      { q: 'Which pouch should I choose for meringue?', a: 'Use the {small_pouch_g}g pouch for testing or a few batches. The {medium_pouch_g}g pouch suits regular oven days with gaps between them. The {large_pouch_kg}kg pouch is for established higher-volume production.' },
    ],
    links: ['p_macarons', 'p_mousse', 'powder'],
  },
  p_mousse: {
    title: 'Can You Make Chocolate Mousse With Aquafaba Powder?',
    h1: 'Can you make chocolate mousse with aquafaba powder?',
    crumb: 'Powder for mousse',
    eyebrow: 'Powder by application',
    description: 'Yes. {chocolate_mousse_powder}g of aquafaba powder with {chocolate_mousse_water} ml of water replaces the {chocolate_mousse_eggs} egg whites of a mousse batch. The temperatures that decide it.',
    lead: 'You can have chocolate mousse on the menu without keeping an opened litre of aquafaba in the fridge between services. For one batch of about {chocolate_mousse_yield} portions, make up {chocolate_mousse_powder}g of VERY AQUAFABA powder with {chocolate_mousse_water} ml of water. That replaces {chocolate_mousse_eggs} egg whites. Chill the made-up aquafaba before whipping, and have the chocolate cooled to the right temperature before you start folding.',
    sections: [
      {
        id: 'make-up', title: 'How do you make up the powder for chocolate mousse?',
        html: `<p>Make up {chocolate_mousse_powder}g of powder with {chocolate_mousse_water} ml of water and chill it. Melt {chocolate_mousse_chocolate}g of dark couverture to 45 to 50 °C, then let it cool to {chocolate_mousse_fold_temp} °C.</p>
<p>Whip the aquafaba in a clean, grease-free bowl to soft peaks. Add {chocolate_mousse_sugar}g of sugar and continue until you have glossy, stiff peaks. Fold in the chocolate quickly and lightly, pipe into cups and chill for at least {chocolate_mousse_set_time} hours. <a href="{chocolate_mousse_href}">Follow the chocolate mousse method</a> for the full preparation.</p>`,
      },
      {
        id: 'temperature', title: 'Which temperatures do you need to control?',
        html: `<p>Have the chocolate at {chocolate_mousse_fold_temp} °C before you fold it into the foam. If it is too hot, the foam can collapse as you fold. The made-up aquafaba should also be chilled before whipping.</p>
<p>Prepare the chocolate before you start whipping so the foam does not have to sit waiting while the chocolate cools.</p>`,
      },
      {
        id: 'pouch', title: 'How many mousse batches can you make from each pouch?',
        html: `${grid(['Pouch', 'Mousse batches', 'About'], [
  ['{small_pouch_g}g', '{small_mousse_batches}', '{small_mousse_portions} portions'],
  ['{medium_pouch_g}g', '{chocolate_mousse_batches_200g}', '{medium_mousse_portions} portions'],
  ['{large_pouch_kg}kg', '{chocolate_mousse_batches_3kg}', 'Higher-volume production'],
])}
<p>If mousse appears on the menu occasionally, you can make up only what that service or production run needs and keep the rest of the pouch dry and closed. If you make mousse every day and use the opened liquid within {opened_days} days, <a href="{tetrapak_href}">compare the {liquid_1l_label}</a>.</p>`,
      },
      {
        id: 'wrong', title: 'What should you check when the mousse goes wrong?',
        html: `${grid(['What you see', 'Why', 'Fix'], [
  ['Mousse collapses as the chocolate goes in', 'Chocolate is too hot', 'Let it cool to {chocolate_mousse_fold_temp} °C before folding'],
  ['Weak foam', 'Made-up aquafaba is too warm', 'Chill it before whipping'],
  ['Dense mousse', 'Too much air was knocked out during folding', 'Fold only until combined'],
  ['Foam will not build', 'Grease in the bowl or sugar added too early', 'Clean the bowl and add sugar after soft peaks'],
  ['Volume drops before folding', 'Foam sat waiting', 'Have the chocolate cooled before you whip'],
])}`,
      },
    ],
    faq: [
      { q: 'How much aquafaba powder do I need for chocolate mousse?', a: 'Use {chocolate_mousse_powder}g of powder with {chocolate_mousse_water} ml of water for one batch of about {chocolate_mousse_yield} portions. That replaces {chocolate_mousse_eggs} egg whites.' },
      { q: 'At what temperature should I fold in the chocolate?', a: 'Cool the chocolate to {chocolate_mousse_fold_temp} °C after melting it to 45 to 50 °C.' },
      { q: 'Do I chill the made-up aquafaba before whipping?', a: 'Yes. Make it up first, chill it, then whip.' },
      { q: 'How many mousse batches can I make from a 200g pouch?', a: 'A {medium_pouch_g}g pouch makes {chocolate_mousse_batches_200g} batches, or about {medium_mousse_portions} portions, if you use the whole pouch for mousse.' },
      { q: 'How long does the mousse keep?', a: 'The mousse keeps {chocolate_mousse_keep} days in the fridge after chilling for at least {chocolate_mousse_set_time} hours.' },
    ],
    links: ['p_meringue', 'p_macarons', 'powder'],
  },
  p_mayonnaise: {
    title: 'Can You Make Mayonnaise With Aquafaba Powder?',
    h1: 'Can you make mayonnaise with aquafaba powder?',
    crumb: 'Powder for mayonnaise',
    eyebrow: 'Powder by application',
    description: 'Yes. {mayonnaise_powder}g of aquafaba powder with {mayonnaise_water} ml of water holds {mayonnaise_oil}g of oil in a batch of mayonnaise. Why the small dose suits the powder.',
    lead: 'A mayonnaise batch uses much less aquafaba than a tray of meringue or a run of mousse. If you only make a few batches over the week, that small dose can make powder particularly practical. For one batch, make up {mayonnaise_powder}g of VERY AQUAFABA powder with {mayonnaise_water} ml of water. That quantity is used with {mayonnaise_oil}g of oil and makes about {mayonnaise_yield}g of mayonnaise.',
    sections: [
      {
        id: 'make-up', title: 'How do you make up the powder for mayonnaise?',
        html: `<p>Make up {mayonnaise_powder}g of powder with {mayonnaise_water} ml of water and chill it to {mayonnaise_chill} °C. Put it in a tall, narrow vessel with {mayonnaise_mustard}g of mustard, {mayonnaise_salt}g of salt and {mayonnaise_lemon}g of lemon juice. Start the stick blender and add {mayonnaise_oil}g of oil in a thin, steady stream until the emulsion forms.</p>
<p>Once it has thickened, taste and season. If it is too tight, blend in a small amount of cold water. Transfer it to a clean container and refrigerate immediately. <a href="{mayonnaise_href}">Follow the mayonnaise method</a> for the full preparation.</p>`,
      },
      {
        id: 'rhythm', title: 'How many mayonnaise batches do you make in {opened_days} days?',
        html: `<p>A {liquid_1l_label} makes {mayonnaise_batches_1l} mayonnaise batches at {mayonnaise_dose}g of aquafaba per batch. If you regularly make that kind of volume within {opened_days} days, <a href="{tetrapak_href}">liquid</a> can work well.</p>
<p>If you only need a few batches, powder lets you make up {mayonnaise_dose}g at a time and keep the rest of the pouch dry and closed until the best-before date.</p>`,
      },
      {
        id: 'pouch', title: 'How many mayonnaise batches can you make from each pouch?',
        html: `${grid(['Pouch', 'Mayonnaise batches', 'About'], [
  ['{small_pouch_g}g', '{small_mayonnaise_batches}', '{small_mayonnaise_kg}kg mayonnaise'],
  ['{medium_pouch_g}g', '{mayonnaise_batches_200g}', '{medium_mayonnaise_kg}kg mayonnaise'],
  ['{large_pouch_kg}kg', '{mayonnaise_batches_3kg}', 'Higher-volume production'],
])}
<p>The {small_pouch_g}g pouch is enough to test the recipe several times. The {medium_pouch_g}g pouch suits kitchens making mayonnaise regularly without needing an opened liquid pack throughout the week. For repeated higher-volume production, <a href="{large_pouch_href}">the {large_pouch_kg}kg pouch</a> is the larger powder format.</p>`,
      },
      {
        id: 'wrong', title: 'What should you check when the emulsion goes wrong?',
        html: `${grid(['What you see', 'Why', 'Fix'], [
  ['The emulsion never starts', 'Oil went in too quickly or there was too little shear', 'Add the oil in a thin, steady stream'],
  ['Slow or unstable emulsion', 'Made-up aquafaba is too warm', 'Chill it before blending'],
  ['Too thick', 'The emulsion tightened', 'Blend in a little cold water'],
  ['Thin result', 'Powder or water was measured incorrectly', 'Use {mayonnaise_powder}g with {mayonnaise_water} ml'],
  ['Large batch becomes unstable', 'Droplet size not controlled', 'Move to a high-shear blender'],
])}`,
      },
    ],
    faq: [
      { q: 'How much aquafaba powder do I need for mayonnaise?', a: 'Use {mayonnaise_powder}g of powder with {mayonnaise_water} ml of water for one batch with {mayonnaise_oil}g of oil.' },
      { q: 'Do I whip the aquafaba for mayonnaise?', a: 'No. The made-up aquafaba is emulsified with the other ingredients and oil rather than whipped.' },
      { q: 'How many mayonnaise batches can I make from a 200g pouch?', a: 'A {medium_pouch_g}g pouch makes {mayonnaise_batches_200g} batches if you use the whole pouch for mayonnaise.' },
      { q: 'When should I choose powder for mayonnaise?', a: 'Powder is useful when you make a few batches at a time and would not finish a 1L liquid pack within {opened_days} days.' },
      { q: 'How long does aquafaba mayonnaise keep?', a: 'Up to {mayonnaise_keep} days in the fridge when it is made hygienically and refrigerated immediately.' },
    ],
    links: ['p_baking', 'sauces', 'powder'],
  },
  p_macarons: {
    title: 'Can Aquafaba Powder Replace Egg Whites in Macarons?',
    h1: 'Can aquafaba powder replace egg whites in macarons?',
    crumb: 'Powder for macarons',
    eyebrow: 'Powder by application',
    description: 'Yes. {macarons_powder}g of aquafaba powder with {macarons_water} ml of water replaces the {macarons_eggs} egg whites of a macaron batch. Why it is not a dry mix, and the humidity rule.',
    lead: 'Macarons give you very little room for improvisation. Before you start whipping, the trays should be lined, the dry ingredients sifted and the aquafaba made up and chilled. For one batch of about {macarons_yield} shells, make up {macarons_powder}g of VERY AQUAFABA powder with {macarons_water} ml of water. That replaces {macarons_eggs} egg whites.',
    sections: [
      {
        id: 'make-up', title: 'How do you prepare aquafaba powder for macarons?',
        html: `<p>Make up the powder with water before it goes anywhere near the almond flour or icing sugar. Use {macarons_powder}g of powder with {macarons_water} ml of water, chill the aquafaba and whip it in a clean, grease-free bowl to soft peaks.</p>
<p>Prepare the trays and sift the dry ingredients before you whip. That way, you can move straight from the finished meringue into macaronage.</p>`,
      },
      {
        id: 'method', title: 'How do you take the batter from meringue to tray?',
        html: `<p>Fold the dry ingredients into the meringue in three additions. Stop when the batter runs from the spatula in thick, slow ribbons. Pipe 3 to 4 cm rounds and leave them at room temperature until a dry skin forms: {macarons_rest} minutes, but humid conditions can extend that time, so check the surface by touch.</p>
<p>Bake at {macarons_bake} °C, fan off, for {macarons_bake_time} minutes. Cool the shells fully before filling. <a href="{macarons_href}">Follow the full macaron method</a> for the complete preparation.</p>`,
      },
      {
        id: 'pouch', title: 'How many macaron batches can you make from each pouch?',
        html: `${grid(['Pouch', 'Macaron batches', 'About'], [
  ['{small_pouch_g}g', '{small_macarons_batches}', '{small_macarons_shells} shells'],
  ['{medium_pouch_g}g', '{macarons_batches_200g}', '{medium_macarons_shells} shells'],
  ['{large_pouch_kg}kg', '{macarons_batches_3kg}', 'Higher-volume production'],
])}
<p>If you bake macarons to order or leave several days between runs, powder lets you make up only the aquafaba needed for the trays you are preparing. If you pipe shells most production days and use an opened liquid pack within {opened_days} days, <a href="{tetrapak_href}">compare the {liquid_1l_label}</a>.</p>`,
      },
      {
        id: 'wrong', title: 'What should you check when the shells go wrong?',
        html: `${grid(['What you see', 'Why', 'Fix'], [
  ['Foam will not reach volume', 'Grease on equipment or powder was not made up first', 'Degrease everything and make up {macarons_powder}g with {macarons_water} ml'],
  ['Meringue loses volume before piping', 'Trays or dry ingredients were not ready', 'Prepare them before whipping'],
  ['Shells lose lift', 'Batter was folded too far or too roughly', 'Stop at thick, slow ribbons'],
  ['No skin forms', 'High humidity', 'Leave them longer and check by touch'],
  ['Shells weep in storage', 'Sugar was not fully dissolved', 'Add caster sugar progressively'],
])}`,
      },
    ],
    faq: [
      { q: 'How much aquafaba powder replaces the egg whites in macarons?', a: 'Use {macarons_powder}g of powder with {macarons_water} ml of water for one batch of about {macarons_yield} shells. That replaces {macarons_eggs} egg whites.' },
      { q: 'Can I add the aquafaba powder to the almond flour?', a: 'No. Make it up with water first, chill it and whip it before you start macaronage.' },
      { q: 'How long should I rest the shells?', a: '{macarons_rest} minutes at room temperature, until the surface is dry to the touch. Humidity can make that longer.' },
      { q: 'How many macaron batches can I make from a 200g pouch?', a: 'A {medium_pouch_g}g pouch gives you {macarons_batches_200g} batches, or about {medium_macarons_shells} shells, if you use the whole pouch for macarons.' },
      { q: 'Which pouch suits occasional macaron production?', a: 'The {small_pouch_g}g pouch works for testing and a few batches. The {medium_pouch_g}g pouch gives you more production days while the opened pouch stays dry and closed between runs.' },
    ],
    links: ['p_meringue', 'p_mousse', 'powder'],
  },
  p_baking: {
    title: 'Can You Bake With Aquafaba Powder?',
    h1: 'Can you bake with aquafaba powder?',
    crumb: 'Powder for baking',
    eyebrow: 'Powder by application',
    description: 'Yes. Make the aquafaba powder up, then weigh {white_liquid}g per egg white or {egg_liquid}g per whole egg from it. How it goes into cakes, cookies and brioche.',
    lead: 'A cake or cookie recipe does not care whether your aquafaba started in a liquid pack or a powder pouch. What you need to get right is the dose and whether the recipe needs the aquafaba whipped or unwhipped. Make up the powder first: {white_powder}g of powder with {white_water} ml of water makes one egg-white equivalent. From there, weigh the amount the recipe calls for: {white_liquid}g of prepared aquafaba per egg white, or {egg_liquid}g per whole egg where you need binding and moisture.',
    sections: [
      {
        id: 'make-up', title: 'How do you prepare powder for baking?',
        html: `<p>Make up enough aquafaba for the recipe, then weigh from the prepared quantity. If the recipe uses whipped egg whites, chill the made-up aquafaba before whipping. If you are replacing whole eggs for binding and moisture, use it unwhipped.</p>
<p><a href="{reconstitution_href}">Check the powder reconstitution table</a> when you need to scale the quantity.</p>`,
      },
      {
        id: 'how', title: 'When do you whip it and when do you leave it unwhipped?',
        html: `${grid(['What you bake', 'How to use the aquafaba'], [
  ['Sponges and génoise', 'Chill, whip and fold in gently'],
  ['Cakes and muffins', 'Mixed with the sugar before it meets the fat'],
  ['Cookies and brownies', 'Add unwhipped for binding and moisture'],
  ['Brioche and sweet rolls', 'Add unwhipped with the liquids'],
])}
<p>Whip it where the eggs brought air; leave it unwhipped where they bound the batter and brought moisture. <a href="{baking_href}">Follow the baking method</a> for the preparation you are making rather than changing the method because you are using powder.</p>`,
      },
      {
        id: 'rhythm', title: 'Do you bake with aquafaba every day?',
        html: `<p>If egg-free baking is part of daily production and you finish an opened {liquid_1l_label} within {opened_days} days, <a href="{tetrapak_href}">liquid</a> gives you aquafaba ready to weigh. If the orders are occasional, powder lets you make up only the amount needed for that bake and keep the rest of the pouch dry and closed.</p>
<p>The {medium_pouch_g}g pouch is useful when those orders return regularly but not every day. <a href="{pouch_href}">Compare what the {medium_pouch_g}g pouch gives you</a> against the egg whites you normally replace.</p>`,
      },
      {
        id: 'wrong', title: 'What should you check when a bake goes wrong?',
        html: `${grid(['What you see', 'What to check'], [
  ['Loose batter', 'Check the dose, and reduce the other liquids by {reduce_liquids} percent when replacing whole eggs'],
  ['Wet centre', 'Make sure the bake is fully cooked before removing it'],
  ['Flat sponge', 'Fold the whipped aquafaba in promptly and gently'],
  ['Weak foam', 'Chill the made-up aquafaba before whipping'],
  ['Gritty batter', 'Make up the powder with water before adding it to the recipe'],
])}`,
      },
    ],
    faq: [
      { q: 'How much aquafaba powder replaces one egg in baking?', a: 'Make up the powder first. Use {white_liquid}g of prepared aquafaba per egg white, or {egg_liquid}g per whole egg where the recipe needs binding and moisture.' },
      { q: 'Can I add aquafaba powder dry to the flour?', a: 'No. Make it up with water first, then weigh the prepared aquafaba into the recipe.' },
      { q: 'Do I whip aquafaba for a cake?', a: 'Only when the recipe uses whipped egg or egg white for aeration. For binding and moisture, use it unwhipped.' },
      { q: 'How long does made-up aquafaba keep?', a: 'Treat it like liquid aquafaba: keep it at {opened_temp} °C and use it within {opened_days} days. Keep the remaining powder dry and closed.' },
      { q: 'Which pouch should I use for occasional baking?', a: 'Choose from the amount of aquafaba you actually use. The smaller pouches work well when egg-free baking comes in occasional orders rather than daily production.' },
    ],
    links: ['p_mayonnaise', 'whole_egg', 'powder'],
  },
  wholesale: {
    title: 'Aquafaba Wholesale: Bulk Formats for Professional Buyers',
    h1: 'Aquafaba wholesale: bulk formats for professional buyers',
    crumb: 'Wholesale',
    eyebrow: 'For professionals',
    description: 'Buy aquafaba in bulk: the 10L bag-in-box, the 1T IBC and the 3kg powder pouch, what each replaces, how it keeps and what an enquiry returns.',
    lead: 'You already know the recipe and the retail pack is no longer enough for the volume you run. VERY AQUAFABA has three larger formats: the {liquid_10l_label}, the {liquid_1t_label} and the {large_pouch_kg}kg powder pouch. Which one you discuss depends on how the ingredient moves through production.',
    sections: [
      {
        id: 'formats', title: 'Which bulk formats can you order?',
        html: `${grid(['Format', 'Egg-white equivalents', 'Typical use'], [
  ['<a href="{bib_href}">{liquid_10l_label}</a>', '{liquid_10l_whites}', 'Continuous liquid use'],
  ['<a href="{ibc_href}">{liquid_1t_label}</a>', '{liquid_1t_whites}', 'Established industrial production'],
  ['<a href="{large_pouch_href}">{large_pouch_kg}kg powder pouch</a>', '{powder_3kg_whites}', 'Repeated powder use and dry premixes'],
])}
<p>All three are quoted for your project. Unopened, they keep for at least {unopened_months} months at room temperature. Once opened, liquid is kept at {opened_temp} °C and used within {opened_days} days; powder stays dry and closed until the best-before date on the pouch.</p>`,
      },
      {
        id: 'bib', title: 'Are you using liquid continuously?',
        html: `<p>Use the {liquid_10l_label} when you already move through several {liquid_1l_label}s over the same few production days. It represents {liquid_10l_whites} egg whites. The ratio does not change with the larger pack: use {white_liquid}g of liquid VERY AQUAFABA per egg white.</p>`,
      },
      {
        id: 'ibc', title: 'Is aquafaba already established on your production line?',
        html: `<p>The {liquid_1t_label} represents {liquid_1t_whites} egg whites. Discuss that format after the recipe, the dose and the production process are already established. Include any handling, connection or dosing questions in the enquiry so they can be answered alongside the commercial details.</p>`,
      },
      {
        id: 'powder', title: 'Do you need a larger powder format?',
        html: `<p>The {large_pouch_kg}kg pouch represents {powder_3kg_whites} egg whites. Use it when you already work from powder repeatedly and want to prepare the aquafaba by production run. For recipes that use prepared aquafaba, make up the powder before use: for one egg-white equivalent, {white_powder}g of powder with {white_water} ml of water. <a href="{supply_href}">Planning the stock from your egg-white count</a> turns a normal week into the number to send.</p>`,
      },
      {
        id: 'enquiry', title: 'What should you send with a wholesale enquiry?',
        html: `<p>Send your country, what you make, the format you are considering, your estimated monthly volume, and any handling or dosing questions from your production setup, through the business option in the purchase window below. We reply with the quote, the technical sheet, the minimum order and the lead time for your market.</p>
<p>For initial testing, the {liquid_1l_label} and the {medium_pouch_g}g pouch are sold online on Amazon in the United States, Germany and Austria, InstantChef in France, Siradis in Switzerland and Qualifirst in Canada; <a href="{where_to_buy_href}">check the route for your country</a>.</p>`,
      },
    ],
    faq: [
      { q: 'Can I buy VERY AQUAFABA in bulk?', a: 'Yes. The larger formats are the {liquid_10l_label}, the {liquid_1t_label} and the {large_pouch_kg}kg powder pouch, quoted for your project.' },
      { q: 'How many egg whites does each bulk format replace?', a: '{liquid_10l_whites} for the {liquid_10l_label}, {liquid_1t_whites} for the {liquid_1t_label} and {powder_3kg_whites} for the {large_pouch_kg}kg pouch.' },
      { q: 'How do I store an opened bulk pack?', a: 'Keep opened liquid at {opened_temp} °C and use it within {opened_days} days. Keep powder dry and closed and use it by the best-before date.' },
      { q: 'Is there a minimum order?', a: 'It depends on the format and the market. We confirm it with the quote.' },
      { q: 'What do I need to send for a quote?', a: 'Your country, application and expected volume, plus any handling questions relevant to the format.' },
    ],
    links: ['bib', 'ibc', 'large_pouch', 'supply'],
  },
  sauces: {
    title: 'Aquafaba for Sauce and Dressing Production',
    h1: 'Aquafaba for sauce and dressing production',
    crumb: 'Sauces and dressings',
    eyebrow: 'For professionals',
    description: 'Egg-free mayonnaise at production scale: {mayonnaise_dose}g of aquafaba holds {mayonnaise_oil}g of oil, the high-shear method, what a 10L pack makes, and the raw egg it removes.',
    lead: 'Your mayonnaise recipe is working and now you need to repeat it at service or production scale. The VERY AQUAFABA mayonnaise starts with {mayonnaise_dose}g of chilled aquafaba and {mayonnaise_oil}g of oil, an oil-to-aquafaba ratio of {mayonnaise_oil_ratio} by weight. Use that recipe as the reference when you scale the emulsion.',
    sections: [
      {
        id: 'ratio', title: 'What is the production ratio?',
        html: `<p>One batch uses {mayonnaise_dose}g of VERY AQUAFABA, {mayonnaise_mustard}g of mustard, {mayonnaise_salt}g of salt, {mayonnaise_lemon}g of lemon juice or vinegar and {mayonnaise_oil}g of oil. Use the aquafaba at {mayonnaise_chill} °C. Add the oil in a thin, steady stream while maintaining enough shear to build the emulsion. For larger production runs, move to a high-shear blender suited to the volume.</p>`,
      },
      {
        id: 'packs', title: 'How much can you make from a liquid pack?',
        html: `${grid(['Pack', '{mayonnaise_yield}g mayonnaise batches'], [
  ['{liquid_1l_label}', '{mayonnaise_batches_1l}'],
  ['{liquid_10l_label}', '{mayonnaise_batches_10l}'],
  ['{liquid_1t_label}', '{mayonnaise_batches_1t}'],
])}
<p>Use those numbers against the quantity you make per shift, not as a reason to move automatically to the largest pack. Once you open liquid VERY AQUAFABA, keep it at {opened_temp} °C and use it within {opened_days} days.</p>`,
      },
      {
        id: 'format', title: 'Are you making fresh sauce or a dry base?',
        html: `<p>For fresh mayonnaise made every service or shift, <a href="{tetrapak_href}">liquid</a> can go directly into the blending vessel. For less frequent production, <a href="{p_mayonnaise_href}">powder</a> lets you make up the aquafaba for the batches you need while the remaining pouch stays dry and closed.</p>
<p>A producer blending dry sauce bases puts the powder into the premix dry, from <a href="{large_pouch_href}">the {large_pouch_kg}kg pouch</a>. For the bulk liquid packs, <a href="{wholesale_href}">buy aquafaba wholesale</a> and send the volume with the enquiry.</p>`,
      },
      {
        id: 'yolk', title: 'What changes when you remove egg yolk?',
        html: `<p>The mayonnaise contains no egg yolk. That removes raw egg from this cold emulsion, but you still need to check every ingredient and your own hygiene process. Made hygienically and refrigerated immediately, the mayonnaise keeps for up to {mayonnaise_keep} days. Re-check shelf life if you change the formula, the process or the moisture.</p>`,
      },
      {
        id: 'wrong', title: 'What should you check when the emulsion goes wrong?',
        html: `${grid(['What you see', 'What to check', 'What to do'], [
  ['Emulsion does not start', 'Oil addition and shear', 'Add oil in a thin, steady stream'],
  ['Emulsion is slow or unstable', 'Aquafaba temperature', 'Use it at {mayonnaise_chill} °C'],
  ['Sauce is too thick', 'Final consistency', 'Blend in a small amount of cold water'],
  ['Large batch is unstable', 'Mixing equipment', 'Move to a high-shear blender'],
])}
<p><a href="{mayonnaise_href}">Follow the mayonnaise method</a> for the complete recipe and troubleshooting.</p>`,
      },
    ],
    faq: [
      { q: 'How much aquafaba do I use for mayonnaise?', a: 'Use {mayonnaise_dose}g of chilled aquafaba with {mayonnaise_oil}g of oil for one batch.' },
      { q: 'What is the oil-to-aquafaba ratio?', a: '{mayonnaise_oil_ratio} by weight.' },
      { q: 'How long does the mayonnaise keep?', a: 'Up to {mayonnaise_keep} days when made hygienically and refrigerated immediately.' },
      { q: 'Can I use powder for mayonnaise?', a: 'Yes. Make up the powder before using the prepared aquafaba in the recipe: {mayonnaise_powder}g with {mayonnaise_water} ml of water per batch.' },
      { q: 'Which format suits continuous sauce production?', a: 'Compare the quantity you use each shift with the {opened_days} day opened-liquid window. The {liquid_10l_label} and the {liquid_1t_label} are quoted for established continuous use.' },
    ],
    links: ['wholesale', 'catering', 'yolk'],
  },
  catering: {
    title: 'Aquafaba for Catering and Events',
    h1: 'Aquafaba for catering and events',
    crumb: 'Catering and events',
    eyebrow: 'For professionals',
    description: 'Which aquafaba needs a cold chain on the way to an event, what to prepare before leaving, how to size the powder from the recipe, and the allergen answer.',
    lead: 'You know how many guests are coming. Now decide which aquafaba needs refrigeration during transport, what you can prepare before leaving and what should wait until service. Powder travels dry. Unopened liquid can travel at room temperature. Once liquid is open, keep it at {opened_temp} °C and use it within {opened_days} days.',
    sections: [
      {
        id: 'cold', title: 'What needs a cold chain?',
        html: `${grid(['What you carry', 'During transport', 'After opening or making up'], [
  ['Powder pouch', 'Dry storage', 'Keep the unused powder dry and closed'],
  ['Unopened liquid', 'Room temperature', 'Refrigerate after opening'],
  ['Opened liquid', '{opened_temp} °C', 'Use within {opened_days} days'],
  ['Made-up powder', 'Treat as prepared aquafaba', 'Chill according to the recipe'],
])}
<p>Do not prepare the entire pouch before the event if you only need part of it. Make up the quantity the service needs: {white_powder}g of powder with {white_water} ml of water per egg white, and <a href="{reconstitution_href}">the reconstitution table</a> for any count. <a href="{storage_href}">Check how to store opened aquafaba</a> for the cool box.</p>`,
      },
      {
        id: 'ahead', title: 'What should you prepare before leaving?',
        html: `<p>For cocktails, pre-batch the spirit, citrus and syrup when the recipe allows it. Add the aquafaba when you shake the drink, not to the pre-batched base. The cocktail dose is {cocktails_dose} ml per drink, measured with a jigger; one {liquid_1l_label} covers {cocktails_batches_1l} drinks. <a href="{cocktails_href}">Use the cocktail guide</a> when you need quantities for a specific service.</p>
<p>For meringue-based desserts, the oven work can happen before the event. Dried meringues store airtight in a dry place, and <a href="{pavlova_href}">pavlova bases</a> can be baked {pavlova_ahead} day ahead and assembled with cream and fruit at service.</p>`,
      },
      {
        id: 'size', title: 'How do you size powder for an event?',
        html: `<p>Start from the recipe or drink dose rather than converting every serve into an egg white. For <a href="{p_meringue_href}">meringue</a>, one batch uses {meringue_powder}g of powder with {meringue_water} ml of water and makes about {meringue_yield} small meringues. For pavlova, one {pavlova_diameter} cm base uses the same {pavlova_powder}g of powder with {pavlova_water} ml of water. For cocktails, use the {cocktails_dose} ml drink dose and the cocktail quantity tools rather than the egg-white conversion.</p>
<p>That keeps the event order aligned with the recipe you are serving.</p>`,
      },
      {
        id: 'allergen', title: 'What should you tell guests about allergens?',
        html: `<p>VERY AQUAFABA itself contains no egg, dairy, gluten or soy. Chickpea is not one of the {eu_allergens} allergens covered by EU mandatory allergen labelling, but chickpea and other legume allergies can still exist. Check every other ingredient before describing the finished dish or drink as vegan or allergen-free, and <a href="{allergen_href}">answer the allergen question before a guest asks</a>.</p>`,
      },
    ],
    faq: [
      { q: 'Which format can I transport without refrigeration?', a: 'Powder travels dry, and unopened liquid keeps at room temperature. Once liquid is opened or powder is made up, follow the handling required for the prepared aquafaba.' },
      { q: 'Can I transport opened liquid?', a: 'Yes, with a cold chain that keeps it at {opened_temp} °C, and use it within {opened_days} days of opening.' },
      { q: 'Can I pre-batch aquafaba cocktails?', a: 'Pre-batch the base. Add the aquafaba when you shake the individual drink.' },
      { q: 'How much aquafaba do I use per cocktail?', a: '{cocktails_dose} ml per drink in the cocktail recipes.' },
      { q: 'What can I prepare the day before?', a: 'Dried meringues and pavlova bases, stored airtight with a desiccant pouch. Assemble perishable toppings at service.' },
    ],
    links: ['sauces', 'wholesale', 'powder'],
  },
  versus: {
    title: 'Aquafaba or Egg White: Which One for Your Kitchen?',
    h1: 'Aquafaba or egg white: which one for your kitchen?',
    crumb: 'Aquafaba or egg white',
    eyebrow: 'Egg substitutes',
    description: 'Aquafaba against egg white, decided from the dish and your production: vegan menus, uncooked serves, allergens, stock between production days, and the dose.',
    lead: 'You already know how the recipe works. The decision is what you need around it: a vegan menu, an uncooked serve, a different allergen profile, or stock that may sit between production days. VERY AQUAFABA and egg white are different ingredients, so compare them from the requirements of the dish and your production. In place of egg white, use {white_liquid}g of liquid or make up {white_powder}g of powder with {white_water} ml of water.',
    sections: [
      {
        id: 'vegan', title: 'Does the menu need to be vegan or plant-based?',
        html: `<p>VERY AQUAFABA itself is vegan and contains no egg. If the finished dish or drink needs to be described as vegan, check every other ingredient before applying that description. An egg-white recipe contains egg and therefore does not meet that requirement.</p>`,
      },
      {
        id: 'raw', title: 'Are you serving the foam without cooking it?',
        html: `<p>A sour, mousse or mayonnaise may be served without cooking the foaming or emulsifying ingredient. Using VERY AQUAFABA means there is no raw egg white in that preparation. In cocktails, the recipes use {cocktails_dose} ml of VERY AQUAFABA per drink, measured with a jigger.</p>`,
      },
      {
        id: 'allergens', title: 'What do you need to know about allergens?',
        html: `<p>VERY AQUAFABA itself contains no egg, dairy, gluten or soy. Chickpea is not one of the {eu_allergens} allergens covered by EU mandatory allergen labelling, but chickpea and legume allergies can still exist. Changing one ingredient does not make the finished dish allergen-free: check the full recipe, and <a href="{allergen_href}">answer the allergen question</a> the way the cocktail pages do.</p>`,
      },
      {
        id: 'often', title: 'How often do you use it?',
        html: `<p>Unopened VERY AQUAFABA keeps for at least {unopened_months} months at room temperature. Once opened, keep liquid at {opened_temp} °C and use it within {opened_days} days. Keep opened powder dry and closed and use it by the best-before date on the pouch.</p>
<p>If you use aquafaba regularly enough to finish an opened liquid pack within that window, liquid is ready to weigh straight from the fridge. If you use it occasionally, powder lets you make up smaller quantities between production days. <a href="{storage_href}">Check how to store opened aquafaba</a> when you compare the two.</p>`,
      },
      {
        id: 'whisk', title: 'What changes at the whisk?',
        html: `<p>Chill VERY AQUAFABA before whipping. Cold aquafaba whips faster and forms a more stable foam: in the meringue method, {meringue_dose}g chilled to {meringue_chill} °C reaches soft peaks in about {meringue_whip} minutes on high speed. Use a clean, grease-free bowl and follow the recipe for the sugar, the stabiliser and the final peak. <a href="{whip_href}">How to whip aquafaba</a> gives each step.</p>`,
      },
      {
        id: 'eggs', title: 'What about whole eggs and yolks?',
        html: `<p>If the recipe uses whole eggs, the starting ratio is {egg_liquid}g of aquafaba per egg. Aquafaba contains more water than egg, so whole-egg baking may need a {reduce_liquids} percent reduction in other liquids; <a href="{whole_egg_href}">replacing whole eggs</a> goes through it. For a functional yolk replacement, use {yolk_liquid}g of aquafaba plus {yolk_oil}g of oil per yolk.</p>
<p>Those rules are for different functions. Do not use the egg-white conversion automatically when the recipe calls for a whole egg or a yolk.</p>`,
      },
      {
        id: 'format', title: 'Which VERY AQUAFABA format suits your production?',
        html: `<p>If you use it regularly and finish an open pack within {opened_days} days, use <a href="{liquid_href}">the liquid</a>. If production is irregular, <a href="{powder_href}">powder</a> lets you prepare the amount you need and keep the rest dry and closed. <a href="{products_href}">Compare the available packs</a> against the quantities you already use before ordering.</p>`,
      },
    ],
    faq: [
      { q: 'How much aquafaba replaces one egg white?', a: 'Use {white_liquid}g of liquid VERY AQUAFABA, or make up {white_powder}g of powder with {white_water} ml of water.' },
      { q: 'Is VERY AQUAFABA vegan?', a: 'Yes. The product itself is vegan. Check every ingredient before describing the finished dish or drink as vegan.' },
      { q: 'Does VERY AQUAFABA contain egg?', a: 'No. VERY AQUAFABA itself contains no egg.' },
      { q: 'Can I use aquafaba in an uncooked recipe instead of raw egg white?', a: 'Yes. The VERY AQUAFABA recipes include uncooked applications such as cocktails, mousse and mayonnaise.' },
      { q: 'Does aquafaba taste different?', a: 'VERY AQUAFABA has a light roasted note in the pack. When shaken into a cocktail, that note disappears.' },
      { q: 'When should I use liquid rather than powder?', a: 'Use liquid when you regularly finish the opened pack within {opened_days} days. Use powder when you need smaller or less predictable quantities.' },
    ],
    links: ['whole_egg', 'yolk', 'before'],
  },
  composition: {
    title: "What's in VERY AQUAFABA? Ingredients, Labels and Dates",
    h1: "What's in VERY AQUAFABA? Ingredients, labels and dates",
    crumb: 'Composition',
    eyebrow: 'Facts and figures',
    description: 'What VERY AQUAFABA is made of, what the label declares, how long a pack keeps before and after opening, and what one pack replaces, in one place.',
    lead: 'Turn the pack around and the ingredient list is two words long: water and chickpeas. VERY AQUAFABA is chickpea aquafaba for whipping, binding and emulsifying. The liquid is ready to use; the powder is the same aquafaba in dried form and is made up with water before use. Here are the ingredients, the allergen information, the storage rules and the quantities you may need when a guest, a buyer or an auditor asks.',
    sections: [
      {
        id: 'ingredients', title: 'What is VERY AQUAFABA made from?',
        html: `<p>VERY AQUAFABA is made from the water in which chickpeas have been cooked. The liquid lists water and chickpeas. The powder is dried aquafaba and has the same ingredient list. There are no additives or preservatives.</p>`,
      },
      {
        id: 'label', title: 'What does the label say about allergens?',
        html: `<p>VERY AQUAFABA itself contains no egg, dairy, gluten or soy. Chickpea is not one of the {eu_allergens} allergens covered by EU mandatory allergen labelling, but chickpea and other legume allergies can still exist, so anyone with a known chickpea or legume allergy should avoid the product. <a href="{allergen_href}">How the allergen question is answered behind a bar</a> applies to a kitchen too.</p>
<p>"Vegan" and "allergen-free" describe VERY AQUAFABA itself. Check every ingredient before applying either description to a finished dish or drink: <a href="{vegan_href}">vegan and allergen information answer different questions</a>.</p>`,
      },
      {
        id: 'taste', title: 'What does VERY AQUAFABA taste like?',
        html: `<p>Straight from the pack, VERY AQUAFABA has a light roasted note from the cooking of the chickpeas. When it is shaken into a cocktail, that note disappears and the flavour stays with the spirit, the citrus and the syrup. For desserts and other preparations, taste the first finished batch before you scale production.</p>`,
      },
      {
        id: 'dates', title: 'How long does VERY AQUAFABA keep?',
        html: `<p>Unopened liquid and powder keep for at least {unopened_months} months at room temperature. Work from the best-before date printed on the pack you have in front of you. Once opened, keep liquid VERY AQUAFABA at {opened_temp} °C and use it within {opened_days} days. Keep an opened pouch of powder dry and closed and use it by the best-before date printed on the pouch.</p>
<p>Opened liquid can also be frozen at {freeze_temp} °C for up to {freeze_months} months in portions of {freeze_portion_min} to {freeze_portion_max}g. Thaw it in the fridge, stir until even and never refreeze it. <a href="{storage_href}">Check how to store and freeze aquafaba</a> when you need to keep opened liquid beyond {opened_days} days.</p>`,
      },
      {
        id: 'equivalence', title: 'What does each pack replace?',
        html: `<p>Use {white_liquid}g of liquid VERY AQUAFABA for one egg white. For powder, {white_powder}g of powder with {white_water} ml of water makes {white_total}g of aquafaba and replaces one egg white. Where you replace a whole egg, use {egg_liquid}g of aquafaba.</p>
${grid(['Pack', 'Egg-white equivalents'], [
  ['{liquid_1l_label}', '{liquid_1l_whites}'],
  ['{liquid_10l_label}', '{liquid_10l_whites}'],
  ['{liquid_1t_label}', '{liquid_1t_whites}'],
  ['{small_pouch_g}g pouch', '{powder_30g_whites}'],
  ['{medium_pouch_g}g pouch', '{powder_200g_whites}'],
  ['{large_pouch_kg}kg pouch', '{powder_3kg_whites}'],
])}
<p>Use those quantities to compare a pack with the amount you already use in production, then <a href="{products_href}">compare the packs</a>.</p>`,
      },
    ],
    faq: [
      { q: 'What is VERY AQUAFABA made from?', a: 'Water and chickpeas, with no additives or preservatives. The powder is the same aquafaba in dried form.' },
      { q: 'Does VERY AQUAFABA contain any of the 14 EU allergens?', a: 'No. Chickpea is not one of the {eu_allergens} allergens covered by EU mandatory allergen labelling. Anyone with a known chickpea or legume allergy should still avoid it.' },
      { q: 'How long does liquid VERY AQUAFABA keep after opening?', a: 'Keep it at {opened_temp} °C and use it within {opened_days} days.' },
      { q: 'How long does opened aquafaba powder keep?', a: 'Keep the pouch dry and closed and use it by the best-before date printed on the pouch.' },
      { q: 'Does VERY AQUAFABA taste of chickpeas?', a: 'It has a light roasted note in the pack. When shaken into a cocktail, that note disappears.' },
    ],
    links: ['before', 'choose', 'vegan'],
  },
  before: {
    title: 'What to Know Before You Use Aquafaba',
    h1: 'What to know before you use aquafaba',
    crumb: 'Before you use it',
    eyebrow: 'Facts and figures',
    description: 'Five checks before a first batch with aquafaba: the opened-pack clock, which egg you replace, the water it brings, the whipping temperature and the powder.',
    lead: 'You have the recipe weighed out and the aquafaba ready to open. Before you start, check whether you need a foam, how much of the pack you will use, and whether you are replacing an egg white, a whole egg or a yolk. For an egg white, use {white_liquid}g of liquid aquafaba; with powder, make up {white_powder}g with {white_water} ml of water first. These checks prevent most of the adjustments from happening halfway through the batch.',
    sections: [
      {
        id: 'clock', title: 'Will you finish an opened liquid pack in {opened_days} days?',
        html: `<p>Once opened, liquid VERY AQUAFABA is kept at {opened_temp} °C and used within {opened_days} days. A {liquid_1l_label} represents {liquid_1l_whites} egg whites. Compare that quantity with the recipes you expect to make over the next few production days.</p>
<p>If you will not finish it, freeze the remaining liquid at {freeze_temp} °C for up to {freeze_months} months in portions of {freeze_portion_min} to {freeze_portion_max}g. Thaw it in the fridge, stir until even and never refreeze it. <a href="{powder_href}">Powder</a> lets you make up smaller quantities while the remaining pouch stays dry and closed until its best-before date. <a href="{storage_href}">Check the storage method</a> before opening more liquid than you expect to use.</p>`,
      },
      {
        id: 'which', title: 'Are you replacing a white, a whole egg or a yolk?',
        html: `<p>Use the rule that matches the recipe:</p>
${grid(['What you replace', 'VERY AQUAFABA'], [
  ['One egg white', '{white_liquid}g'],
  ['One whole egg', '{egg_liquid}g'],
  ['One egg yolk', '{yolk_liquid}g aquafaba + {yolk_oil}g oil'],
])}
<p>If the recipe uses whipped whites for aeration, chill the aquafaba and whip it. For whole eggs used for binding and moisture, use the aquafaba unwhipped. The yolk rule adds oil because aquafaba does not bring the fat of an egg yolk; <a href="{yolk_href}">replacing egg yolk</a> says where it applies.</p>`,
      },
      {
        id: 'water', title: 'Are you replacing whole eggs in a bake?',
        html: `<p>Aquafaba contains about {water_aquafaba_pct} percent water, compared with about {water_egg_pct} percent for egg. When you replace whole eggs, reduce the other liquids by about {reduce_liquids} percent as a starting adjustment. Dense cakes, brownies and enriched doughs are the preparations where that extra water is most likely to show.</p>
<p>When you replace egg whites only, as in meringue or macarons, no additional liquid adjustment is normally needed. <a href="{whole_egg_href}">Follow the whole-egg method</a> when you reformulate an existing bake.</p>`,
      },
      {
        id: 'whip', title: 'Are you whipping it?',
        html: `<p>Chill aquafaba before whipping. Cold aquafaba whips faster and forms a more stable foam. For the meringue method, chill it to {meringue_chill} °C, then whip in a clean, grease-free bowl. The meringue recipe reaches soft peaks in about {meringue_whip} minutes on high speed; an optional stabiliser is 2g of cream of tartar or 1g of citric acid.</p>
<p>Mousse, macarons and pavlova have their own next steps, so follow the application once the foam reaches the required stage. <a href="{whip_href}">Follow the whipping steps</a> when you need soft or stiff peaks.</p>`,
      },
      {
        id: 'powder', title: 'Are you using powder?',
        html: `<p>Make up the powder before using it in a recipe that calls for prepared aquafaba. For one egg-white equivalent, use {white_powder}g of powder with {white_water} ml of water. That gives {white_total}g of prepared aquafaba. If the recipe needs a foam, chill the made-up aquafaba before whipping. <a href="{reconstitution_href}">Use the powder reconstitution table</a> for larger quantities.</p>`,
      },
      {
        id: 'flavour', title: 'What should you expect from the flavour?',
        html: `<p>VERY AQUAFABA has a light roasted note in the pack. When shaken into a cocktail, that note disappears. For a dessert or a new production formula, taste the first finished batch before scaling it.</p>`,
      },
    ],
    faq: [
      { q: 'How much aquafaba replaces one egg white?', a: 'Use {white_liquid}g of liquid VERY AQUAFABA, or make up {white_powder}g of powder with {white_water} ml of water.' },
      { q: 'Do I have to chill aquafaba before whipping?', a: 'Yes. Cold aquafaba whips faster and forms a more stable foam.' },
      { q: 'Can I add aquafaba powder directly to a recipe?', a: 'Make it up first where the recipe calls for prepared aquafaba. Use {white_powder}g of powder with {white_water} ml of water per egg-white equivalent.' },
      { q: 'Can I freeze opened liquid aquafaba?', a: 'Yes. Freeze it at {freeze_temp} °C for up to {freeze_months} months in portions of {freeze_portion_min} to {freeze_portion_max}g. Thaw it in the fridge, stir until even and never refreeze it.' },
      { q: 'Does aquafaba change the taste of a cocktail?', a: 'It has a light roasted note in the pack. That note disappears once it is shaken into the drink.' },
    ],
    links: ['whip', 'composition', 'reference'],
  },
  whip: {
    title: 'How Do You Whip Aquafaba? Stiff Peaks Step by Step',
    h1: 'How do you whip aquafaba? Stiff peaks step by step',
    crumb: 'How to whip it',
    eyebrow: 'Facts and figures',
    description: 'Whip aquafaba to stiff peaks in five steps, with what to look for at each one, which recipe comes next, and the fix when the foam stays flat or falls.',
    lead: 'The trays are lined, the sugar is weighed and the mixer is ready. Now chill the aquafaba before it goes into the bowl. Cold aquafaba whips faster and holds more air: in the meringue method, {meringue_dose}g chilled to {meringue_chill} °C reaches soft peaks in about {meringue_whip} minutes on high speed. From there, the recipe determines what you add and when.',
    sections: [
      {
        id: 'step-1', title: '1. Chill the aquafaba',
        html: `<p>For the meringue method, chill the aquafaba to {meringue_chill} °C. Cold aquafaba whips faster and forms a more stable foam. If you are using powder, make it up first: {white_powder}g of powder with {white_water} ml of water for each egg-white equivalent, then chill it.</p>`,
      },
      {
        id: 'step-2', title: '2. Use a clean, grease-free bowl and whisk',
        html: `<p>Grease interferes with foam formation. Check that the bowl and whisk are clean and grease-free before you start.</p>`,
      },
      {
        id: 'step-3', title: '3. Whip to soft peaks',
        html: `<p>For {meringue_dose}g of chilled aquafaba, the meringue method gives about {meringue_whip} minutes on high speed. At soft peaks, the foam forms a peak that bends over when you lift the whisk. If the recipe uses a stabiliser, add it at the stage given in that method; the meringue recipe uses either 2g of cream of tartar or 1g of citric acid.</p>`,
      },
      {
        id: 'step-4', title: '4. Add the sugar according to the recipe',
        html: `<p>For meringue, reduce the mixer to medium speed and add {meringue_sugar}g of caster sugar one tablespoon at a time. Continue according to the recipe until the foam is glossy and reaches stiff peaks. Mousse, macarons and pavlova use different quantities, so do not carry the meringue sugar dose into another application.</p>`,
      },
      {
        id: 'step-5', title: '5. Continue to stiff peaks',
        html: `<p>At stiff peaks, the peak stands when you lift the whisk and the foam is glossy and dense. Move directly into the next recipe step. For meringue, pipe the foam. For chocolate mousse, have the chocolate cooled before you start folding. For macarons, prepare the dry mix and trays before whipping so you can move straight into macaronage.</p>`,
      },
      {
        id: 'next', title: 'Which recipe are you making next?',
        html: `<p>For <a href="{meringue_href}">meringue</a>, pipe and dry at {meringue_bake} °C, fan off, for {meringue_bake_time} hours. For <a href="{chocolate_mousse_href}">chocolate mousse</a>, fold in the couverture once it has cooled to {chocolate_mousse_fold_temp} °C. For <a href="{macarons_href}">macarons</a>, fold the almond flour and icing sugar into the foam until the batter runs in thick, slow ribbons.</p>
<p>Mayonnaise is not whipped. It uses aquafaba to build an emulsion with oil.</p>`,
      },
      {
        id: 'wrong', title: 'What should you check when the foam goes wrong?',
        html: `${grid(['What you see', 'Why', 'Fix'], [
  ['Foam never reaches full volume', 'Grease on the bowl or whisk', 'Use clean, grease-free equipment'],
  ['Foam builds slowly and stays weak', 'Aquafaba is too warm', 'Chill it before whipping'],
  ['Syrup beads on meringues', 'Sugar went in faster than it could dissolve', 'Add it gradually at medium speed'],
  ['Volume drops before piping or folding', 'The finished foam was left standing', 'Prepare the next step before you whip'],
  ['Powder does not foam', 'It was used dry', 'Make it up with water before whipping'],
])}`,
      },
    ],
    faq: [
      { q: 'How long does it take me to whip aquafaba?', a: 'For the meringue method, {meringue_dose}g chilled to {meringue_chill} °C reaches soft peaks in about {meringue_whip} minutes on high speed.' },
      { q: 'Do I need cream of tartar?', a: 'It is optional. The meringue method uses 2g of cream of tartar or 1g of citric acid as an optional stabiliser.' },
      { q: 'Can I whip aquafaba powder?', a: 'Yes. Make it up with water first, chill it, then whip it.' },
      { q: 'How do I know when I have soft peaks?', a: 'Lift the whisk. The peak forms and bends over.' },
      { q: 'How do I know when I have stiff peaks?', a: 'The peak stands when you lift the whisk and the foam is glossy and dense.' },
    ],
    links: ['before', 'composition', 'reference'],
  },
  whole_egg: {
    title: 'How to Replace Whole Eggs With Aquafaba',
    h1: 'How to replace whole eggs with aquafaba',
    crumb: 'Replacing whole eggs',
    eyebrow: 'Egg substitutes',
    description: 'Replace a whole egg with {egg_liquid}g of aquafaba in cakes, cookies, muffins and brioche: how it goes in, the liquid adjustment, and what to watch in the bake.',
    lead: 'You are reformulating a cake that uses whole eggs rather than separated whites. Start with {egg_liquid}g of VERY AQUAFABA per egg, then check the moisture before you scale the batch. Aquafaba contains more water than egg, so whole-egg replacement needs a little more attention than replacing whites in meringue or macarons.',
    sections: [
      {
        id: 'dose', title: 'How much aquafaba replaces one whole egg?',
        html: `<p>Use {egg_liquid}g of aquafaba per whole egg. If you are using powder, make it up first and weigh {egg_liquid}g of the prepared aquafaba. The egg-white rule is different: use {white_liquid}g per white. For a functional yolk replacement, use {yolk_liquid}g of aquafaba with {yolk_oil}g of oil per yolk.</p>`,
      },
      {
        id: 'how', title: 'How do you use it in different bakes?',
        html: `${grid(['What you bake', 'How you use the aquafaba', 'What it brings'], [
  ['Sponges and génoise', 'Whipped and folded in', 'Aeration'],
  ['Cakes, cookies and muffins', 'Mixed with the sugar before the fat', 'A more stable emulsion'],
  ['Cookies and brownies', 'Added unwhipped', 'Binding and moisture'],
  ['Brioche and sweet rolls', 'Added unwhipped with the liquids', 'Softness and keeping quality'],
])}
<p>For fat-rich batters, mix the aquafaba with the sugar before adding the fat. For yeast doughs, add it with the liquids. For sponges that rely on aeration, chill and whip it before folding. <a href="{baking_recipe_href}">Use the baking method</a> for the preparation you are making, and <a href="{baking_href}">the baking guide</a> for the format question in a bakery.</p>`,
      },
      {
        id: 'water', title: 'How much should you adjust the liquids?',
        html: `<p>Egg contains about {water_egg_pct} percent water. VERY AQUAFABA contains about {water_aquafaba_pct} percent. When you replace whole eggs, reduce the other liquids by about {reduce_liquids} percent as a starting adjustment. For a dense cake, brownie or enriched bread, check the batter consistency and bake fully before you pull it.</p>
<p>When you replace egg whites only, as in meringue or macarons, no further liquid adjustment is normally needed. <a href="{ratio_href}">The egg ratio page</a> has the three numbers side by side: whole egg, white and yolk.</p>`,
      },
      {
        id: 'production', title: 'What changes in commercial production?',
        html: `<p>Changing the moisture of an established product can change its water activity. If you adjust the hydration of a commercial formula, re-check shelf life and microbial stability before fixing the new production specification. Record the quantities that work in the test batch rather than carrying a general adjustment into every product.</p>`,
      },
      {
        id: 'wrong', title: 'What should you check when the bake goes wrong?',
        html: `${grid(['What you see', 'Why', 'Fix'], [
  ['Loose, wet batter', 'Whole eggs were replaced without reducing other liquid', 'Reduce the milk or water slightly'],
  ['Wet centre', 'The additional water lengthened the bake', 'Bake fully before removing it'],
  ['Flat sponge', 'The foam lost volume before or during folding', 'Fold promptly and gently'],
  ['Weak foam', 'Aquafaba was too warm', 'Chill before whipping'],
  ['Shelf life changes', 'Moisture and water activity changed', 'Re-check shelf life after reformulation'],
])}`,
      },
    ],
    faq: [
      { q: 'How much aquafaba equals one whole egg?', a: 'Use {egg_liquid}g of aquafaba per whole egg.' },
      { q: 'How much aquafaba equals one egg white?', a: 'Use {white_liquid}g per egg white.' },
      { q: 'Do I whip aquafaba when it replaces whole eggs?', a: 'Not when you use it for binding and moisture. Whip it when the recipe relies on aeration.' },
      { q: 'Why is my batter wetter with aquafaba?', a: 'Aquafaba contains about {water_aquafaba_pct} percent water compared with about {water_egg_pct} percent for egg. Reduce the other liquids by about {reduce_liquids} percent as a starting adjustment.' },
      { q: 'Can I use aquafaba powder to replace whole eggs?', a: 'Yes. Make up the powder first, then weigh {egg_liquid}g of prepared aquafaba per whole egg.' },
    ],
    links: ['yolk', 'liquid', 'powder'],
  },
  yolk: {
    title: 'Can Aquafaba Replace Egg Yolk?',
    h1: 'Can aquafaba replace egg yolk?',
    crumb: 'Replacing egg yolk',
    eyebrow: 'Egg substitutes',
    description: "Yes, for the yolk's emulsifying job: {yolk_liquid}g of aquafaba plus {yolk_oil}g of oil per yolk. What it brings, what it does not, and the mayonnaise that proves it.",
    lead: 'Yes, where you need a functional replacement for the yolk in an emulsion. Use {yolk_liquid}g of aquafaba plus {yolk_oil}g of oil per yolk. That oil matters because aquafaba does not bring the fat of an egg yolk. For recipes where yolk thickens as it cooks, such as custard, the substitution needs to be tested rather than treated as a direct swap.',
    sections: [
      {
        id: 'rule', title: 'How much aquafaba replaces one yolk?',
        html: `<p>Use {yolk_liquid}g of aquafaba plus {yolk_oil}g of oil per egg yolk. For powder, make up the aquafaba first and weigh {yolk_liquid}g of the prepared liquid. <a href="{ratio_href}">The egg ratio page</a> has the three rules side by side.</p>
${grid(['What you replace', 'Aquafaba', 'Plus'], [
  ['One egg yolk', '{yolk_liquid}g', '{yolk_oil}g oil'],
  ['One egg white', '{white_liquid}g', 'Nothing'],
  ['One whole egg', '{egg_liquid}g', 'Nothing'],
])}`,
      },
      {
        id: 'emulsion', title: 'Are you making an emulsion?',
        html: `<p>Mayonnaise is the clearest case. One batch uses {mayonnaise_dose}g of chilled aquafaba with {mayonnaise_oil}g of oil, an oil-to-aquafaba ratio of {mayonnaise_oil_ratio} by weight. Put the aquafaba, mustard, salt and acid into a tall, narrow vessel. Add the oil in a thin, steady stream while blending. For larger batches, a high-shear blender helps control droplet size and keep the emulsion stable.</p>
<p><a href="{mayonnaise_href}">Follow the mayonnaise method</a> for the full recipe.</p>`,
      },
      {
        id: 'custard', title: 'Are you replacing yolks in a custard or cooked cream?',
        html: `<p>Do not treat the {yolk_liquid}g plus {yolk_oil}g of oil rule as a direct custard conversion. In custards, curds and crème anglaise, the yolk also thickens as it cooks. Test the formula before changing production. The functional yolk rule is more straightforward where emulsification is the main job.</p>`,
      },
      {
        id: 'dough', title: 'Are you working with an enriched dough?',
        html: `<p>Aquafaba brings no yolk fat or colour on its own. Use the {yolk_liquid}g of aquafaba plus {yolk_oil}g of oil rule as the starting functional replacement, then test the finished crumb, colour and texture before scaling. If the original recipe uses whole eggs rather than separated yolks, <a href="{whole_egg_href}">use the whole-egg rule</a> instead.</p>`,
      },
    ],
    faq: [
      { q: 'How much aquafaba replaces one egg yolk?', a: 'Use {yolk_liquid}g of aquafaba plus {yolk_oil}g of oil. The oil replaces the fat that aquafaba does not bring.' },
      { q: 'Can I make mayonnaise without egg yolk?', a: 'Yes. The mayonnaise recipe uses {mayonnaise_dose}g of chilled aquafaba with {mayonnaise_oil}g of oil.' },
      { q: 'What is the oil-to-aquafaba ratio for mayonnaise?', a: 'The recipe uses a {mayonnaise_oil_ratio} oil-to-aquafaba ratio by weight.' },
      { q: 'Can I replace yolks in custard with aquafaba?', a: 'Not as a direct swap. A yolk also thickens during cooking, so test the formula before changing production.' },
      { q: 'Does the yolk rule apply to powder?', a: 'Yes. Make the powder up first, then weigh {yolk_liquid}g of prepared aquafaba and add {yolk_oil}g of oil per yolk.' },
    ],
    links: ['whole_egg', 'liquid', 'powder'],
  },
  choose: {
    title: '6 Questions to Ask Before Buying Aquafaba',
    h1: '6 questions to ask before buying aquafaba',
    crumb: 'Which aquafaba to buy',
    eyebrow: 'Facts and figures',
    description: 'Before buying aquafaba, ask six practical questions about ingredients, working dose, consistency, storage and technical information for professional use.',
    lead: 'Buying aquafaba is not just a question of finding a carton or pouch and checking the price. If you are going to build a recipe, a bar spec or a production run around it, you need to know what you are working with. Six questions help you do that: are all aquafaba products the same, what is in the product, is the working dose clear, is it consistently specified, what happens after opening, and can you get the technical information you need if your volumes grow?',
    sections: [
      {
        id: 'same', title: '1. Are all aquafaba products the same?',
        html: `<p>No. Aquafaba is a category of ingredient, not a single standard recipe. Different products can arrive with different ingredient lists, concentrations, formats and working instructions. Some are liquid, some are powder, and the way they are dosed or stored can vary.</p>
<p>For a professional kitchen or bar, that matters because the product has to fit a written recipe or spec. Before you decide what to buy, make sure the pack gives you enough information to work from the same numbers every time.</p>`,
      },
      {
        id: 'ingredients', title: '2. Do you know exactly what is in it?',
        html: `<p>Read the ingredient list before you read the claims on the front. VERY AQUAFABA lists water and chickpeas, with no additives and no preservatives. It contains no eggs, dairy, gluten or soy.</p>
<p>If allergens matter in your kitchen or bar, <a href="{allergen_href}">read the allergen information separately</a> too. Chickpea is not one of the {eu_allergens} allergens covered by EU mandatory allergen labelling, but chickpea or legume allergy can still exist. Anyone with a known chickpea or legume allergy should avoid the product.</p>
<p>Those statements apply to the aquafaba itself. A finished dish or drink still needs to be checked ingredient by ingredient.</p>`,
      },
      {
        id: 'dose', title: '3. Is the working dose clear?',
        html: `<p>You should be able to move from the pack to the recipe without guessing. With liquid VERY AQUAFABA, {white_liquid}g replaces one egg white. Where aquafaba is used for binding or moisture, {egg_liquid}g replaces one whole egg. With powder, {white_powder}g of powder plus {white_water} ml of water makes {white_total}g of prepared aquafaba, the equivalent of one egg white.</p>
<p>If you are considering powder, <a href="{reconstitution_href}">check the powder reconstitution ratio</a> against the quantities you normally use.</p>`,
      },
      {
        id: 'consistency', title: '4. Will it behave consistently from one pack to the next?',
        html: `<p>A professional recipe depends on a repeatable input. The first thing to look for is a working dose you can write into the recipe and use again with the next pack. With VERY AQUAFABA, that is {white_liquid}g of liquid per egg white, or {white_powder}g of powder with {white_water} ml of water for one egg-white equivalent.</p>
<p>For larger production, the technical sheet is available through enquiry. Before committing to the product, <a href="{index_href}">test it in the recipe you make</a>. A meringue, mousse, mayonnaise or sour is the practical check that matters.</p>`,
      },
      {
        id: 'storage', title: '5. Are the storage instructions practical for your work?',
        html: `<p>Storage is part of the buying decision because it tells you what happens after the first use. Opened liquid VERY AQUAFABA is kept at {opened_temp} °C and used within {opened_days} days. Opened powder stays dry and closed and is used by the best-before date. Sealed packs keep at least {unopened_months} months at room temperature.</p>
<p>Neither format always wins. The storage instructions should make sense for the way the product will be handled once it reaches your kitchen, bar or production area. <a href="{storage_href}">How to store and freeze aquafaba</a> covers the opened pack in detail.</p>`,
      },
      {
        id: 'scale', title: '6. Can you get the technical information you need if you scale up?',
        html: `<p>A retail pack may be enough for a first test. Larger production brings different questions: you may need a technical sheet, a minimum order, a lead time or an answer about how a larger format fits your process. Those details should be available before you build the next production run around the product.</p>
<p>For VERY AQUAFABA, you can <a href="{where_to_buy_href}">ask for the technical sheet or a quote</a> with your country, application and expected volume. If you are considering the largest liquid format, <a href="{ibc_href}">check what to confirm before ordering an IBC</a>.</p>`,
      },
      {
        id: 'which', title: 'So which aquafaba should you buy?',
        html: `<p>Choose the product that gives you enough information to write a repeatable recipe or spec around it. You should know what is in it, the exact working dose, how it is stored, and what technical information is available when you need more than a retail pack. Then test it in the preparation you make.</p>
<p>That is a more useful standard than a generic label, because it gives you something concrete to check before you commit. When you are ready to order, <a href="{products_href}">compare the packs</a> for your country, or send an enquiry for the professional format you need through the purchase window below.</p>`,
      },
    ],
    faq: [
      { q: 'Are all aquafaba products the same?', a: 'No. Products can differ in ingredients, format, concentration, working instructions and storage. Check those points before building a recipe or production spec around one.' },
      { q: 'What should I check before buying aquafaba?', a: 'The ingredient list, the exact working dose, the consistency of the specification, the storage instructions and whether technical information is available if you need to scale up.' },
      { q: 'How do I know how much aquafaba to use?', a: 'The product should give you a clear working ratio. For VERY AQUAFABA, {white_liquid}g of liquid replaces one egg white, or {white_powder}g of powder with {white_water} ml of water makes one egg-white equivalent.' },
      { q: 'Why does consistency matter when buying aquafaba?', a: 'A repeatable recipe needs a repeatable input. Look for a clear working dose, ask for the technical sheet when you move into larger production, and test the product in the preparation you make.' },
      { q: 'What should I ask for when buying aquafaba for production?', a: 'The technical sheet, the minimum order, the lead time and any information your process needs before you move to a larger format.' },
    ],
    links: ['reference', 'liquid', 'powder'],
  },
  reference: {
    title: 'Aquafaba Reference: Facts and Figures for Professionals',
    h1: 'Aquafaba reference: facts and figures for professionals',
    crumb: 'Reference',
    eyebrow: 'Facts and figures',
    description: 'The lookup page for aquafaba figures: the dose per egg white, whole egg and yolk, the opened-pack windows, what each pack contains, and where the method lives.',
    lead: 'You are halfway through a prep sheet and need one number: the dose per egg white, the opened-pack window or the quantity in a pouch. This is the lookup page for those figures. Use the linked guides when you need the method, troubleshooting or a production decision.',
    sections: [
      {
        id: 'dose', title: 'How much aquafaba do you use?',
        html: `${grid(['What you replace', 'Liquid VERY AQUAFABA', 'Powder'], [
  ['One egg white', '{white_liquid}g', '{white_powder}g + {white_water} ml water'],
  ['One whole egg', '{egg_liquid}g', '{egg_liquid}g of made-up aquafaba'],
  ['One egg yolk', '{yolk_liquid}g + {yolk_oil}g oil', '{yolk_liquid}g of made-up aquafaba + {yolk_oil}g oil'],
])}
<p>For powder, {white_powder}g with {white_water} ml of water gives {white_total}g of prepared aquafaba. <a href="{reconstitution_href}">Check the powder reconstitution table</a> when you need to prepare several egg-white equivalents at once.</p>`,
      },
      {
        id: 'storage', title: 'How long can you keep it?',
        html: `<p>Unopened liquid and powder keep for at least {unopened_months} months at room temperature. Once opened, keep liquid at {opened_temp} °C and use it within {opened_days} days; keep powder dry and closed and use it by the best-before date on the pouch.</p>
<p>Opened liquid can also be frozen at {freeze_temp} °C for up to {freeze_months} months in portions of {freeze_portion_min} to {freeze_portion_max}g. <a href="{storage_href}">Check the storage method</a> before freezing or thawing an opened pack.</p>`,
      },
      {
        id: 'packs', title: 'How much does each pack contain?',
        html: `${grid(['Pack', 'Egg-white equivalents'], [
  ['{liquid_1l_label}', '{liquid_1l_whites}'],
  ['{liquid_10l_label}', '{liquid_10l_whites}'],
  ['{liquid_1t_label}', '{liquid_1t_whites}'],
  ['{small_pouch_g}g powder pouch', '{powder_30g_whites}'],
  ['{medium_pouch_g}g powder pouch', '{powder_200g_whites}'],
  ['{large_pouch_kg}kg powder pouch', '{powder_3kg_whites}'],
])}
<p><a href="{products_href}">Compare the packs</a> when you know how much you use and how quickly you will finish an opened liquid pack, or <a href="{pack_finder_href}">let the pack finder name one</a> from your week.</p>`,
      },
      {
        id: 'method', title: 'Where do you go for the method?',
        html: `<p>Use the application guide for the preparation in front of you. <a href="{meringue_href}">Meringue</a> covers whipping, sugar and drying. <a href="{chocolate_mousse_href}">Chocolate mousse</a> covers the foam and chocolate temperatures. <a href="{mayonnaise_href}">Mayonnaise</a> covers the {mayonnaise_oil_ratio} oil-to-aquafaba emulsion. <a href="{baking_href}">Baking</a> covers whole eggs, whites and hydration adjustments. <a href="{macarons_href}">Macarons</a> covers macaronage, resting and baking. <a href="{cocktails_href}">Cocktails</a> use {cocktails_dose} ml per drink.</p>
<p>When a batch is not behaving, each guide carries a table of what you see, why, and the fix for its recipe. Start with what you can see in the bowl, then work back through the method before changing the amount of aquafaba.</p>`,
      },
    ],
    faq: [
      { q: 'How much VERY AQUAFABA do I use for one egg white?', a: 'Use {white_liquid}g of liquid, or make up {white_powder}g of powder with {white_water} ml of water.' },
      { q: 'How long can I keep opened liquid aquafaba?', a: 'Keep it at {opened_temp} °C and use it within {opened_days} days.' },
      { q: 'How long can I keep opened powder?', a: 'Keep it dry and closed and use it by the best-before date on the pouch.' },
      { q: 'Where do I find troubleshooting?', a: 'Use the application guide for the preparation you are making. The figures live here; the application pages carry the method and the fixes.' },
    ],
    links: ['composition', 'before', 'whip', 'choose'],
  },
  liquid: {
    title: 'Liquid Aquafaba: How to Use It and Where to Buy It',
    h1: 'Liquid aquafaba: how to use it and where to buy it',
    crumb: 'Liquid aquafaba',
    eyebrow: 'Liquid and formats',
    description: 'How bakers use liquid aquafaba in meringues, sponges and egg-free bakes, how much replaces an egg, which pack to choose and where to buy it.',
    lead: 'You have meringue on Monday, mousse on Tuesday and an egg-free cake later in the week. If the same open pack can cover all three without sitting around, liquid aquafaba fits naturally into that production rhythm. VERY AQUAFABA is ready to weigh straight from the pack: {white_liquid}g for one egg white, or {egg_liquid}g for one whole egg where you need binding and moisture. Once opened, keep it at {opened_temp} °C and use it within {opened_days} days. That window is what decides whether liquid belongs in your regular production.',
    sections: [
      {
        id: 'figures', title: 'What one pack gives you',
        html: `${grid(['What you count', 'Liquid aquafaba'], [
  ['One egg white', '{white_liquid}g'],
  ['One whole egg', '{egg_liquid}g'],
  ['{liquid_1l_label}', '{liquid_1l_whites} egg whites'],
  ['{liquid_10l_label}', '{liquid_10l_whites} egg whites'],
  ['Once opened', '{opened_days} days at {opened_temp} °C'],
  ['Unopened', 'At least {unopened_months} months at room temperature'],
])}`,
      },
      {
        id: 'jobs', title: 'Are you replacing an egg white or a whole egg?',
        html: `<p>How you use liquid aquafaba depends on whether you are replacing an egg white or a whole egg. For meringue, macaron shells, génoise and other preparations where you need aeration, use {white_liquid}g per egg white and chill the aquafaba before whipping.</p>
<p>For cakes, cookies and muffins where you need binding and moisture, use {egg_liquid}g per whole egg and add it unwhipped. In cakes, <a href="{baking_href}">the baking method</a> combines it with the sugar before it meets the fat.</p>
<p>A meringue made with {meringue_eggs} egg whites needs {meringue_dose}g of liquid aquafaba. A cake replacing whole eggs uses the {egg_liquid}g dose instead. The same pack can cover both, but the dose and method follow the recipe.</p>`,
      },
      {
        id: 'meringue', title: 'A worked example: one batch of meringue',
        html: `<p>For one batch of meringue, use {meringue_dose}g of liquid aquafaba with {meringue_sugar}g of caster sugar. That replaces {meringue_eggs} egg whites and makes about {meringue_yield} small meringues.</p>
<p>Chill the aquafaba to {meringue_chill} °C, then whip it in a clean, grease-free bowl to soft peaks. Add the sugar progressively and keep whipping until the meringue is glossy and stiff. <a href="{meringue_href}">Follow the meringue method</a> for the drying stage and troubleshooting.</p>
<p>At that dose, a {liquid_1l_label} makes {meringue_batches_1l} batches, or around {liquid_1l_meringues} small meringues. If you use the same pack for meringue, mousse or macarons over the next few production days, compare that use with the {opened_days} day opened-pack window.</p>`,
      },
      {
        id: 'rhythm', title: 'Will you use an opened pack within {opened_days} days?',
        html: `<p>Liquid works well when you use it regularly across the week. Meringues on Monday, macaron shells on Tuesday, an egg-free cake on Wednesday: you can use the same open pack across all three preparations. Keep it at {opened_temp} °C and finish it within {opened_days} days.</p>
<p>If those jobs are occasional or unpredictable, <a href="{powder_href}">powder</a> lets you make up only what the next batch needs and keep the rest of the pouch dry and closed. <a href="{storage_href}">Check how to store opened aquafaba</a> before deciding which format suits your production rhythm.</p>
<p>Some kitchens keep both formats: liquid for regular production and powder for quieter weeks, trials or less frequent recipes.</p>`,
      },
      {
        id: 'packs', title: 'How many egg whites do you use in three or four days?',
        html: `<p>Use that count to choose the pack. A {liquid_1l_label} replaces {liquid_1l_whites} egg whites; if you use roughly that amount over a few production days, 1L is easy to rotate. A {liquid_10l_label} replaces {liquid_10l_whites} egg whites; consider it when you are already using several hundred egg-white equivalents over the same few days. If you would struggle to finish 1L in {opened_days} days, powder lets you prepare only what the next batch needs.</p>
<p>Take a normal week and count the egg whites across the preparations you would move to aquafaba: {meringue_eggs} for a batch of meringue, {chocolate_mousse_eggs} for a mousse, plus the whites used in macarons, sponges or other recipes. Convert the total at {white_liquid}g of liquid per white and <a href="{supply_href}">plan your stock from that number</a>.</p>`,
      },
      {
        id: 'buy', title: 'Where can you buy liquid VERY AQUAFABA?',
        html: `<p>The {liquid_1l_label} is sold online through Amazon in the United States, Germany and Austria, InstantChef in France and Qualifirst in Canada. <a href="{where_to_buy_href}">Check the route for your country</a> before ordering.</p>
<p>For professional volumes, including the {liquid_10l_label}, send an enquiry with your country, what you produce and your estimated monthly volume, using the business option in the purchase window below. We reply with the available format, the technical sheet, the minimum order and the lead time for your market.</p>`,
      },
    ],
    faq: [
      { q: 'How much liquid aquafaba replaces one egg white?', a: 'Use {white_liquid}g of liquid VERY AQUAFABA for one egg white. When the recipe needs the white whipped, chill the aquafaba before whipping.' },
      { q: 'How much liquid aquafaba replaces one whole egg?', a: 'Use {egg_liquid}g of liquid aquafaba per whole egg where you need binding and moisture, as in cakes, cookies and muffins.' },
      { q: 'Do I need to whip liquid aquafaba?', a: 'Whip it when the recipe needs aeration, as in meringue or macaron shells. Where you are replacing a whole egg for binding and moisture, use it unwhipped.' },
      { q: 'How long does liquid aquafaba keep after opening?', a: 'Keep the opened pack at {opened_temp} °C and use it within {opened_days} days. Unopened, it keeps at least {unopened_months} months at room temperature.' },
      { q: 'How many egg whites does a 1L Tetrapak replace?', a: 'A {liquid_1l_label} replaces {liquid_1l_whites} egg whites at {white_liquid}g of liquid aquafaba per white. For meringue, that is {meringue_batches_1l} batches of {meringue_dose}g.' },
      { q: 'Where can a bakery buy liquid VERY AQUAFABA?', a: 'The {liquid_1l_label} is sold through Amazon in the United States, Germany and Austria, InstantChef in France and Qualifirst in Canada. For the {liquid_10l_label} and other professional formats, send an enquiry with your country, application and monthly volume.' },
    ],
    links: ['tetrapak', 'bib', 'ibc', 'powder'],
  },
  powder: {
    title: 'Aquafaba Powder: How to Use It and Which Pouch to Buy',
    h1: 'Aquafaba powder: how to use it and which pouch to buy',
    crumb: 'Aquafaba powder',
    eyebrow: 'Powder and formats',
    description: 'Make up aquafaba powder, compare the 30g, 200g and 3kg pouches and choose the format for your kitchen, with egg white equivalents, recipe doses and storage.',
    lead: 'Aquafaba powder is the format for a kitchen that does not whip every day. Keep the pouch in the dry store, make up exactly what today\'s recipes call for, and the rest stays closed for another day. {white_powder}g of powder with {white_water} ml of water replaces one egg white, whether you are whipping meringue, folding mousse or starting an emulsion.',
    sections: [
      {
        id: 'make-up', title: 'Making up aquafaba powder',
        html: `<p>Say meringues are on the production list. One batch needs {meringue_powder}g of powder and {meringue_water} ml of water.</p>
<ol>
<li>Count the egg whites represented by the recipes you are making.</li>
<li>Weigh {white_powder}g of powder for each one.</li>
<li>Add {white_water} ml of water per egg white.</li>
<li>Chill the made-up aquafaba before using it.</li>
<li>Close the pouch and return it to the dry store.</li>
</ol>
<p>Once made up, the aquafaba is used at the same weight as the liquid version in the recipe. That means the pouch can cover meringue one day, mayonnaise the next and macarons a week later without forcing you to make up the whole pouch at once. <a href="{reconstitution_href}">The reconstitution table</a> gives the powder and water for any egg-white count.</p>`,
      },
      {
        id: 'recipes', title: 'What that looks like in a recipe',
        html: `${grid(['Recipe', 'Recipe dose', 'Powder + water'], [
  ['<a href="{meringue_href}">Meringue</a>', '{meringue_dose}g', '{meringue_powder}g + {meringue_water} ml'],
  ['<a href="{chocolate_mousse_href}">Chocolate mousse</a>', '{chocolate_mousse_dose}g', '{chocolate_mousse_powder}g + {chocolate_mousse_water} ml'],
  ['<a href="{macarons_href}">Macarons</a>', '{macarons_dose}g', '{macarons_powder}g + {macarons_water} ml'],
  ['<a href="{mayonnaise_href}">Mayonnaise</a>', '{mayonnaise_dose}g', '{mayonnaise_powder}g + {mayonnaise_water} ml'],
])}
<p>The made-up batch weighs a little more than the recipe dose: {meringue_powder}g of powder and {meringue_water} ml of water make {meringue_prepared}g, from which you weigh the {meringue_dose}g the meringue asks for. Once it is made up and chilled, follow the recipe as written: whip the meringues, fold the chocolate mousse or emulsify the mayonnaise with the same aquafaba quantity shown for the liquid.</p>`,
      },
      {
        id: 'pouch', title: 'Which pouch fits the way you work?',
        html: `${grid(['Your use', 'Pouch', 'What it gives you'], [
  ['You want to test one or two recipes', '<a href="{small_pouch_href}">{small_pouch_g}g</a>', '{powder_30g_whites} egg whites, or {small_meringue_batches} batches of meringue'],
  ['You bake or prep with aquafaba regularly', '<a href="{pouch_href}">{medium_pouch_g}g</a>', '{powder_200g_whites} egg whites, or {meringue_batches_200g} batches of meringue'],
  ['You run aquafaba recipes in production', '<a href="{large_pouch_href}">{large_pouch_kg}kg</a>', '{powder_3kg_whites} egg whites, or {meringue_batches_3kg} batches of meringue'],
])}
<p>A {medium_pouch_g}g pouch, for example, gives you enough aquafaba for {meringue_batches_200g} meringue batches, {chocolate_mousse_batches_200g} mousse batches or {mayonnaise_batches_200g} mayonnaise batches. You only make up the amount needed for the production in front of you.</p>`,
      },
      {
        id: 'liquid', title: 'When liquid is the easier choice',
        html: `<p>Powder removes the opened-pack clock, but it also adds one preparation step. If your kitchen can finish a {liquid_1l_label} within {opened_days} days of opening it, <a href="{liquid_href}">liquid</a> is straightforward: keep it at {opened_temp} °C and pour the quantity the recipe needs.</p>
<p>If egg white recipes only appear a few times a week, powder is easier to hold. Make up what the day needs, then close the pouch and return it to the dry store. Kept dry and closed, it keeps until the best-before date; unopened, both formats keep at least {unopened_months} months at room temperature. <a href="{storage_href}">Check how to store opened aquafaba</a> when you compare the two.</p>
<p>The {medium_pouch_g}g pouch is sold online on Amazon in Germany, which also serves Austria, on InstantChef in France and through Siradis in Switzerland; <a href="{where_to_buy_href}">check the route for your country</a>. For the {small_pouch_g}g and {large_pouch_kg}kg pouches, or from another country, tell us which format you need through the business option in the purchase window below.</p>`,
      },
    ],
    faq: [
      { q: 'How much aquafaba powder replaces one egg white?', a: 'Use {white_powder}g of powder with {white_water} ml of water. That makes {white_total}g of aquafaba, equivalent to the same mass of liquid aquafaba.' },
      { q: 'How long does opened aquafaba powder keep?', a: 'Keep the pouch dry and closed and use it by the best-before date printed on the pack. Unopened pouches keep at least {unopened_months} months at room temperature.' },
      { q: 'How many egg whites does a 200g pouch replace?', a: '{powder_200g_whites} egg whites. At {meringue_powder}g of powder per batch, that gives you {meringue_batches_200g} batches of meringue.' },
      { q: 'Can I use made-up powder like liquid aquafaba?', a: 'Yes. Once it has been made up with water and chilled, use the same weight of aquafaba that the recipe gives for the liquid.' },
      { q: 'Can I order powder for a professional kitchen?', a: 'Yes. Compare the {small_pouch_g}g, {medium_pouch_g}g and {large_pouch_kg}kg pouches, then use the business option in the purchase window to tell us your application and volumes.' },
    ],
    links: ['p_meringue', 'p_mousse', 'p_mayonnaise', 'p_macarons', 'p_baking', 'p_pavlova', 'liquid', 'supply'],
  },

  small_pouch: {
    title: 'What Does a {small_pouch_g}g Pouch of Aquafaba Powder Give You?',
    h1: 'What does a {small_pouch_g}g pouch of aquafaba powder give you?',
    crumb: '{small_pouch_g}g pouch',
    eyebrow: 'Powder and formats',
    description: 'A {small_pouch_g}g pouch of aquafaba powder replaces {powder_30g_whites} egg whites. What that gives you in real recipe tests, how to make up each batch and where to ask for it.',
    lead: 'A {small_pouch_g}g pouch of VERY AQUAFABA powder replaces {powder_30g_whites} egg whites. That makes it the pouch to look at when you want to test aquafaba in real recipes before deciding whether you need a larger format. Instead of thinking about the pouch as one quantity to use up, think about the recipes you want to try: a meringue batch uses the equivalent of {meringue_eggs} egg whites, macarons and chocolate mousse use {macarons_eggs}. That is enough powder to run several full tests and compare how aquafaba behaves across preparations.',
    sections: [
      {
        id: 'tests', title: 'What can you test with {powder_30g_whites} egg whites?',
        html: `<p>With the VERY AQUAFABA recipes, the {small_pouch_g}g pouch gives you enough powder for several full test batches.</p>
${grid(['Recipe', 'Egg whites per batch', 'Batches from {small_pouch_g}g'], [
  ['<a href="{meringue_href}">Meringue</a>', '{meringue_eggs}', '{small_meringue_batches}'],
  ['<a href="{chocolate_mousse_href}">Chocolate mousse</a>', '{chocolate_mousse_eggs}', '{small_mousse_batches}'],
  ['<a href="{macarons_href}">Macarons</a>', '{macarons_eggs}', '{small_macarons_batches}'],
])}
<p>You will not make all three recipes from one pouch; the table shows what the pouch covers if one of them is the preparation you want to test.</p>`,
      },
      {
        id: 'make-up', title: 'Make up only what each test needs',
        html: `<p>Dose the powder from the egg-white count in the recipe. For each egg white, use {white_powder}g of powder with {white_water} ml of water. One meringue batch therefore uses {meringue_powder}g of powder with {meringue_water} ml of water. One macaron or chocolate mousse batch uses {macarons_powder}g of powder with {macarons_water} ml of water.</p>
<p>For whipped preparations, chill the made-up aquafaba to the whipping temperature the recipe asks for before it goes in the bowl. <a href="{reconstitution_href}">The reconstitution table</a> gives the quantities and the temperatures from one egg white upward.</p>`,
      },
      {
        id: 'who', title: 'Who the {small_pouch_g}g pouch is for',
        html: `<p>The {small_pouch_g}g pouch is most useful when you have a specific recipe or application you want to test before buying more powder. That might be a pastry section comparing aquafaba with its current meringue method, a bakery testing an egg-free mousse or macaron, or a bar trying powder in a few drinks before adding it to regular service.</p>
<p>Once the tests are done, the question changes from whether aquafaba works in the recipe to how many egg whites you would replace in a normal week.</p>`,
      },
      {
        id: 'storage', title: 'How to store the opened pouch',
        html: `<p>After opening, keep the powder dry and closed and use it by the best-before date printed on the pouch. Before opening, it keeps at least {unopened_months} months at room temperature.</p>
<p>Because you measure the powder per batch, the rest can stay in the pouch until the next test or production run. There is no need to make up more aquafaba than the recipe calls for.</p>`,
      },
      {
        id: 'buy', title: 'Where can you get the {small_pouch_g}g pouch?',
        html: `<p>Online, the stockists list the {liquid_1l_label} and the {medium_pouch_g}g pouch; <a href="{where_to_buy_href}">check the route for your country</a>. For the {small_pouch_g}g pouch, send an enquiry with your country and what you want to test, using the business option in the purchase window below.</p>
<p>Count how many egg whites you would normally replace in a week. If {powder_30g_whites} go in a week or two, <a href="{pouch_href}">compare that number with the {medium_pouch_g}g pouch</a> before choosing your next format.</p>`,
      },
    ],
    faq: [
      { q: 'Can I test aquafaba with the {small_pouch_g}g pouch?', a: 'Yes. It gives you enough powder for {small_meringue_batches} meringue batches, {small_macarons_batches} macaron batches or {small_mousse_batches} chocolate mousse batches.' },
      { q: 'How much powder do I use per egg white?', a: 'Use {white_powder}g of powder with {white_water} ml of water for each egg white in the recipe.' },
      { q: 'Do I need to prepare the whole pouch at once?', a: 'No. Measure the powder and water for the batch you are making and leave the rest of the powder in the pouch.' },
      { q: 'How should I store an opened pouch?', a: 'Keep it dry and closed and use it by the best-before date printed on the pouch. Unopened, it keeps at least {unopened_months} months at room temperature.' },
      { q: 'Where can I buy the {small_pouch_g}g pouch?', a: 'The online stockists list the {liquid_1l_label} and the {medium_pouch_g}g pouch. For the {small_pouch_g}g pouch, send an enquiry with your country and what you want to make.' },
    ],
    links: ['pouch', 'powder', 'reference'],
  },
  large_pouch: {
    title: 'Who Needs a {large_pouch_kg}kg Pouch of Aquafaba Powder?',
    h1: 'Who needs a {large_pouch_kg}kg pouch of aquafaba powder?',
    crumb: '{large_pouch_kg}kg pouch',
    eyebrow: 'Powder and formats',
    description: 'A {large_pouch_kg}kg pouch of aquafaba powder replaces {powder_3kg_whites} egg whites. When that volume fits established production, how to dose each run and how to order it.',
    lead: 'A {large_pouch_kg}kg pouch of VERY AQUAFABA powder replaces {powder_3kg_whites} egg whites. That number starts to matter once aquafaba is already part of regular production and the smaller pouches are being used up one after another. For a pastry lab, a central kitchen or a food producer, the question is not whether the whole pouch will be made up at once. It is whether the scale of the work has outgrown the {medium_pouch_g}g pouch.',
    sections: [
      {
        id: 'when', title: 'When {powder_3kg_whites} egg whites becomes a useful number',
        html: `<p>The {large_pouch_kg}kg pouch is the format to compare once your use has moved past recipe tests and into repeated production. A {medium_pouch_g}g pouch replaces {powder_200g_whites} egg whites; the {large_pouch_kg}kg pouch replaces {powder_3kg_whites}, which is {pouches_200g_in_3kg} of the smaller pouches in one pack.</p>
<p>Those two figures give you the comparison: look at how often you replace the {medium_pouch_g}g pouch and whether that format still fits the scale of the work. Nobody makes up {powder_3kg_whites} egg whites at once; the pouch is there so repeated runs keep the same dosing per recipe without reopening a small pack.</p>`,
      },
      {
        id: 'use', title: 'What higher-volume use looks like',
        html: `<p>Higher-volume use is still spread across preparations. A pastry lab draws from the same pouch for macarons, meringues and mousses. A central kitchen uses it in several parts of production. A food producer runs it through repeated egg-free batches, and <a href="{supply_href}">plans the stock from the egg-white count</a> rather than from the pack.</p>
<p>The {large_pouch_kg}kg format is for that stage: aquafaba is established in the work, and opening a {medium_pouch_g}g pouch every few days is no longer practical.</p>`,
      },
      {
        id: 'make-up', title: 'Make up only what the run needs',
        html: `<p>The ratio does not change with the volume: {white_powder}g of powder with {white_water} ml of water for each egg white in the recipe. A run calling for {run_whites} egg whites uses {run_powder}g of powder with {run_water_l}L of water.</p>
<p>For whipped preparations, chill the made-up aquafaba to the whipping temperature the recipe asks for before use. <a href="{reconstitution_href}">The reconstitution table</a> gives the quantities and the temperatures from one egg white upward, and larger runs scale from the same ratio.</p>`,
      },
      {
        id: 'storage', title: 'How to store the pouch between runs',
        html: `<p>After opening, keep the powder dry and closed and use it by the best-before date printed on the pouch. Before opening, it keeps at least {unopened_months} months at room temperature.</p>
<p>So the pouch stays dry between production runs, and no run has to make up more aquafaba than its recipe needs.</p>`,
      },
      {
        id: 'order', title: 'How do you order the {large_pouch_kg}kg pouch?',
        html: `<p>The {large_pouch_kg}kg pouch is a professional format, quoted for your project in every country rather than sold as a standard online pack. Send an enquiry with your country, what you are making and roughly how much aquafaba you expect to use, and we confirm the ordering details and the technical sheet for your market.</p>
<p>Watch how quickly the {medium_pouch_g}g pouch is replaced in your normal production. If you open them one after another, <a href="{products_href}">compare the formats</a> and use the business option in the purchase window below before the next order.</p>`,
      },
    ],
    faq: [
      { q: 'How do I know whether I need the {large_pouch_kg}kg pouch?', a: 'Compare how fast you use the {medium_pouch_g}g pouch with the {powder_3kg_whites} egg whites of the {large_pouch_kg}kg pouch. If smaller pouches are opened one after another, the larger format is the one to compare.' },
      { q: 'Do I need to prepare the whole {large_pouch_kg}kg pouch at once?', a: 'No. Dose each production run from the recipe, at {white_powder}g of powder with {white_water} ml of water per egg white.' },
      { q: 'How should I store an opened {large_pouch_kg}kg pouch?', a: 'Keep the powder dry and closed and use it by the best-before date printed on the pouch. Unopened, it keeps at least {unopened_months} months at room temperature.' },
      { q: 'Can the {large_pouch_kg}kg pouch be used across different recipes?', a: 'Yes. Measure the powder for each recipe or run and leave the rest dry for later.' },
      { q: 'How do I buy the {large_pouch_kg}kg pouch?', a: 'By enquiry, in every country. Send your country, what you are making and roughly how much aquafaba you expect to use, and we quote the pouch for your project.' },
    ],
    links: ['pouch', 'small_pouch', 'powder'],
  },
  pouch: {
    title: 'How Far Does a {medium_pouch_g}g Pouch of Aquafaba Powder Go?',
    h1: 'How far does a {medium_pouch_g}g pouch of aquafaba powder go?',
    crumb: '{medium_pouch_g}g pouch',
    eyebrow: 'Powder and formats',
    description: 'A {medium_pouch_g}g pouch of aquafaba powder replaces {powder_200g_whites} egg whites. What that means in regular production, how to dose each batch, store it and where to buy it.',
    lead: 'A {medium_pouch_g}g pouch of VERY AQUAFABA powder replaces {powder_200g_whites} egg whites. What that looks like across the recipes you already make is the number to work from. A pastry section might use some for meringue, some for macarons and leave the rest for another production day; a bar draws from the same pouch more slowly. Because the powder is dosed per egg white, you make up only what each batch needs. At the recipe doses, the pouch is {meringue_batches_200g} meringue batches, {chocolate_mousse_batches_200g} chocolate mousse batches or {mayonnaise_batches_200g} mayonnaise batches.',
    sections: [
      {
        id: 'yield', title: 'What {powder_200g_whites} egg whites looks like in your recipes',
        html: `<p>Each row takes the powder one preparation uses and divides the pouch by it. The water is added when you make up the batch, so it never uses up any powder.</p>
${grid(['Recipe', 'Powder per batch', 'Water per batch', 'Complete batches per pouch'], [
  ['Meringue', '{meringue_powder}g', '{meringue_water} ml', '{meringue_batches_200g}'],
  ['Chocolate mousse', '{chocolate_mousse_powder}g', '{chocolate_mousse_water} ml', '{chocolate_mousse_batches_200g}'],
  ['Macarons', '{macarons_powder}g', '{macarons_water} ml', '{macarons_batches_200g}'],
  ['Mayonnaise', '{mayonnaise_powder}g', '{mayonnaise_water} ml', '{mayonnaise_batches_200g}'],
])}
<p>Those rows are alternatives: a pouch shared between recipes covers a mixture of them. The figures are reference points to set against the mix you already produce, then <a href="{meringue_href}">whip and bake the meringues</a> or <a href="{macarons_href}">make the macaron shells</a> with the method for that recipe.</p>`,
      },
      {
        id: 'week', title: 'How many weeks of baking does that cover?',
        html: `<p>If you bake {weekly_meringue_batches} batches of meringue a week, you use {weekly_meringue_powder}g of powder, and a pouch covers {meringue_weeks} weeks. If you make {weekly_mayonnaise_batches} batches of mayonnaise a week instead, you use {weekly_mayonnaise_powder}g, which is {mayonnaise_weeks} weeks.</p>
<p>If you make both, add the powder together rather than the weeks: the weekly total is {combined_weekly_powder}g, so a pouch covers {combined_full_weeks} full weeks with {combined_powder_left}g left. Write that total beside the prep list and you can see when to order the next pouch.</p>
<p>These are planning figures, not a shelf life. The best-before date on the pouch still applies.</p>`,
      },
      {
        id: 'when', title: 'When the {medium_pouch_g}g pouch makes sense',
        html: `<p>The {medium_pouch_g}g pouch is the format to compare once aquafaba is already appearing regularly, but your use still changes from one production day to the next: more for pastry one day, less for another preparation later. The check is how quickly {powder_200g_whites} egg whites move through your normal work.</p>
<p>If one pouch lasts comfortably across your usual production, the format matches that rhythm. If you are still testing, <a href="{small_pouch_href}">the {small_pouch_g}g pouch</a> covers {powder_30g_whites} whites for a few trial batches. If you open pouches one after another, <a href="{large_pouch_href}">the {large_pouch_kg}kg pouch</a>, {powder_3kg_whites} whites, is the one to compare.</p>`,
      },
      {
        id: 'daily', title: 'Make up only what each batch needs',
        html: `<p>Count {white_powder}g of powder and {white_water} ml of water for each egg white in the recipe. A meringue batch counted as {meringue_eggs} whites needs {meringue_powder}g and {meringue_water} ml, and the made-up aquafaba weighs {meringue_prepared}g. That is not the {meringue_dose}g of the liquid recipe: the liquid dose and the made-up mass are two different numbers.</p>
<p>Weigh the powder before adding the water, close the pouch and keep the rest dry. For whipped preparations, chill the made-up aquafaba to the whipping temperature the recipe asks for before it goes in the bowl. <a href="{reconstitution_href}">The reconstitution table</a> gives the quantities for any other egg-white count without making up the whole pouch.</p>
<p>Once the water is in, handle the made-up aquafaba as you would the liquid.</p>`,
      },
      {
        id: 'open-pouch', title: 'How to store the pouch between production days',
        html: `<p>Before opening, the pouch keeps at least {unopened_months} months at room temperature. After opening, keep it dry and closed and use it by the best-before date printed on the pouch. A quiet week does not force you to make up the rest of the powder.</p>
<p>The liquid works on a different clock: {opened_days} days at {opened_temp} °C once the pack is open. Set that against your oven days if you are deciding between the formats, and <a href="{powder_href}">compare the three pouch sizes</a> if the middle one is too much or too little for your recipes.</p>`,
      },
      {
        id: 'buy', title: 'Where can you buy the {medium_pouch_g}g pouch?',
        html: `<p>Online, the {medium_pouch_g}g pouch is sold on Amazon in Germany, which also serves Austria, on InstantChef in France and through Siradis in Switzerland; <a href="{where_to_buy_href}">check the route for your country</a>. Elsewhere, send an enquiry with your country and what you are making, using the business option in the purchase window below.</p>
<p>Watch how quickly one pouch moves through your normal production. If you open pouches one after another, compare your use with the {large_pouch_kg}kg pouch before the next order.</p>`,
      },
    ],
    faq: [
      { q: 'How many egg whites does a {medium_pouch_g}g pouch replace?', a: '{powder_200g_whites} egg whites, at {white_powder}g of powder with {white_water} ml of water for each one. The pouch holds dry powder, so the water goes in when you make up a batch.' },
      { q: 'How many meringue batches can I make from a {medium_pouch_g}g pouch?', a: 'At {meringue_powder}g of powder for a batch of {meringue_eggs} egg whites, the pouch covers {meringue_batches_200g} batches. The made-up aquafaba weighs {meringue_prepared}g a batch; the liquid version of the recipe uses {meringue_dose}g.' },
      { q: 'Can I make all the batches in the table from one pouch?', a: 'Each row assumes the whole pouch goes to that recipe. If you split it between meringues, mousse and mayonnaise, add up the powder each batch uses to track what is left.' },
      { q: 'How long will the pouch last if I bake twice a week?', a: 'If each oven day uses one meringue batch, that is {weekly_meringue_powder}g of powder a week, so the pouch covers {meringue_weeks} weeks. Keep it dry and closed between batches and use it by its best-before date.' },
      { q: 'How should I store an opened {medium_pouch_g}g pouch?', a: 'Keep the powder dry and closed and use it by the best-before date printed on the pouch. Unopened, it keeps at least {unopened_months} months at room temperature.' },
      { q: 'Where can I buy the {medium_pouch_g}g pouch?', a: 'Online on Amazon in Germany and Austria, on InstantChef in France and through Siradis in Switzerland. For other countries, send an enquiry with your country and what you are making.' },
    ],
    links: ['small_pouch', 'large_pouch', 'powder'],
  },

  vegan: {
    title: 'Is Aquafaba Vegan? Ingredients and Kitchen Uses',
    h1: 'Is aquafaba vegan?',
    crumb: 'Is aquafaba vegan?',
    eyebrow: 'Ingredients and use',
    description: 'Yes, aquafaba is plant-based. Check what VERY AQUAFABA contains, how it replaces egg white and what to check before calling a finished dish vegan.',
    lead: 'Yes. Aquafaba is plant-based, and VERY AQUAFABA is made from chickpeas and water, with no additives or preservatives. It can replace egg white in a recipe, but whether the finished dish is vegan depends on every other ingredient you put into it.',
    sections: [
      {
        id: 'ingredients', title: 'What is in VERY AQUAFABA?',
        html: `<p>Aquafaba is the cooking water from chickpeas. Its role in a recipe comes from what it can do: whip into foam, help bind ingredients or form an emulsion. It is not an egg product, even when you use it in a preparation usually made with egg white.</p>
<p>VERY AQUAFABA contains chickpeas and water. Both the liquid and powder formats are vegan. The powder is made up with water before use in a whipped preparation; choosing it does not add an animal ingredient.</p>
<p>Start with the ingredient list when checking whether a product fits your recipe. For the practical difference between formats, <a href="{powder_href}">see how the powder is prepared and portioned</a>. That choice is about how you work and store it, rather than whether the aquafaba itself is plant-based.</p>`,
      },
      {
        id: 'dish', title: 'Check the whole recipe, including the filling',
        html: `<p>Replacing egg white is one part of making a dish vegan. A mousse still contains its chocolate; a filled macaron includes its filling; a pastry may be finished with a cream or glaze. Check those ingredients as well as the component made with aquafaba.</p>
<p>A meringue made with aquafaba and suitable sugar can be vegan. For a chocolate mousse, choose chocolate that fits the same requirement. The aquafaba does not change the ingredients of the chocolate, and it does not make a dairy filling plant-based.</p>
<p>The same distinction matters when you describe a finished dessert. Name what you have changed, such as replacing egg white with aquafaba, and check the complete recipe before calling the whole dish vegan. The ingredient label and the finished recipe answer different questions.</p>`,
      },
      {
        id: 'allergens', title: 'Vegan and allergen information answer different questions',
        html: `<p>A plant-based recipe can still contain ingredients someone needs to avoid. The almonds in a dacquoise remain almonds after the egg white is replaced. Flour, chocolate and fillings also have their own ingredient and allergen information.</p>
<p>Read each label when choosing ingredients for a particular person. Do not use the word vegan as a substitute for checking those labels. The fact that VERY AQUAFABA contains chickpeas is relevant information in its own right.</p>
<p>For a concrete example, <a href="{dacquoise_href}">make the almond dacquoise with aquafaba</a>: the recipe uses aquafaba for its meringue and ground almonds for the pastry. Removing egg white does not remove the almonds.</p>`,
      },
      {
        id: 'dose', title: 'How much do you use instead of an egg?',
        html: `<p>The conversion is {white_liquid}g of liquid aquafaba per egg white, or {white_powder}g of powder made up with {white_water} ml of water. A whole egg uses {egg_liquid}g of liquid aquafaba. Whole-egg substitution needs its own recipe checks because egg yolk and egg white do different jobs.</p>
<p>Begin with a preparation that already gives an aquafaba method. You can <a href="{meringue_href}">whip meringues</a> with {meringue_dose}g of liquid aquafaba and {meringue_sugar}g of sugar, or <a href="{chocolate_mousse_href}">fold a chocolate mousse</a> using {chocolate_mousse_dose}g of liquid aquafaba. Follow the method as well as the quantity.</p>
<p>For your own formula, <a href="{ratio_href}">check the egg substitution quantities</a> before scaling. Decide whether you are replacing whites or whole eggs first; a vegan ingredient does not make those two conversions interchangeable.</p>`,
      },
      {
        id: 'keep', title: 'Choose a format you will use in time',
        html: `<p>Unopened liquid and powder keep for at least {unopened_months} months at room temperature. After opening, liquid keeps {opened_days} days at {opened_temp} °C. Keep opened powder dry and closed until the pouch's best-before date.</p>
<p>If you only make the recipe occasionally, prepare the powder you need for that batch. If it is on the prep list regularly, compare your use with an opened liquid pack. Both choices keep the same plant-based ingredient at the centre of the recipe.</p>`,
      },
    ],
    faq: [
      { q: 'Is aquafaba vegan?', a: 'Yes. Aquafaba comes from cooking chickpeas, and VERY AQUAFABA contains chickpeas and water. Whether a finished dish is vegan depends on its other ingredients too.' },
      { q: 'Is aquafaba powder vegan as well?', a: 'Yes. VERY AQUAFABA powder is a vegan format of the product. Make it up with water before using it in whipped recipes.' },
      { q: 'Does using aquafaba make a chocolate mousse vegan?', a: 'Replacing egg white removes that egg ingredient. You still need to check the chocolate and any other additions or toppings before describing the whole mousse as vegan.' },
      { q: 'Can I use vegan to mean that a dish has no allergens?', a: 'No. For example, the almond dacquoise contains almonds even when its meringue is made with aquafaba. Check the ingredient and allergen information for the complete recipe.' },
      { q: 'How much liquid aquafaba replaces a whole egg?', a: 'The conversion is {egg_liquid}g per whole egg. Use the guidance for the particular recipe and check its other liquids; this is a different substitution from replacing only egg white.' },
    ],
    links: ['dacquoise', 'powder', 'supply'],
  },

  supply: {
    title: 'Aquafaba: A Reliable Egg White Replacement for Bakeries',
    h1: 'A reliable egg white replacement for kitchens and bakeries',
    crumb: 'Egg white supply',
    eyebrow: 'For kitchens and bakeries',
    description: 'Plan aquafaba stock from the recipes on your prep list: the dose per batch, what you use inside the opened-pack window, which pack covers it and how to order.',
    lead: 'You have meringues, macarons and mousse on the prep list, but the quantities change from one production day to the next. Plan the aquafaba from those recipes rather than from a theoretical weekly total. Use {white_liquid}g of liquid VERY AQUAFABA per egg white, then check how much you will actually use within the {opened_days} days after opening a liquid pack.',
    sections: [
      {
        id: 'count', title: 'How many egg whites are on your prep list?',
        html: `<p>Start with the recipes you already make. A batch of <a href="{meringue_href}">the meringue</a> uses {meringue_dose}g of aquafaba for {meringue_eggs} egg whites. <a href="{macarons_href}">The macaron</a> and <a href="{chocolate_mousse_href}">mousse</a> recipes each use {macarons_dose}g for {macarons_eggs} egg whites. Record the number of batches first, then convert those recipes into the aquafaba quantity you need.</p>
<p>Whole eggs use a different rule: {egg_liquid}g of aquafaba per whole egg.</p>`,
      },
      {
        id: 'window', title: 'Will you use the liquid within {opened_days} days?',
        html: `<p>A {liquid_1l_label} replaces {liquid_1l_whites} egg whites. Once opened, keep it at {opened_temp} °C and use it within {opened_days} days. That means a weekly total alone is not enough. Put the recipes on the days when you make them and see how much aquafaba you use inside one opened-pack window.</p>
<p>If the production is more spread out, powder lets you prepare each batch separately. Use {white_powder}g with {white_water} ml of water per egg white and keep the remaining powder dry and closed. <a href="{storage_href}">Check how to store opened aquafaba</a> when the two formats share a week.</p>`,
      },
      {
        id: 'packs', title: 'Which pack covers the volume you already use?',
        html: `${grid(['Format', 'Pack', 'Egg-white equivalents'], [
  ['Liquid', '{liquid_1l_label}', '{liquid_1l_whites}'],
  ['Liquid', '{liquid_10l_label}', '{liquid_10l_whites}'],
  ['Liquid', '{liquid_1t_label}', '{liquid_1t_whites}'],
  ['Powder', '{small_pouch_g}g pouch', '{powder_30g_whites}'],
  ['Powder', '{medium_pouch_g}g pouch', '{powder_200g_whites}'],
  ['Powder', '{large_pouch_kg}kg pouch', '{powder_3kg_whites}'],
])}
<p>Do not choose from the biggest number you can use eventually. Choose from the quantity you can rotate in the way that format needs to be stored.</p>`,
      },
      {
        id: 'sheet', title: 'Put the quantity beside the recipe',
        html: `<p>A useful production sheet has four pieces of information:</p>
${grid(['Day', 'Preparation', 'Batches', 'Aquafaba needed'], [
  ['Monday', 'Meringue', 'Your count', 'Recipe dose × batches'],
  ['Tuesday', 'Mousse', 'Your count', 'Recipe dose × batches'],
  ['Wednesday', 'Macarons', 'Your count', 'Recipe dose × batches'],
])}
<p>That shows whether several preparations can use the same open liquid pack or whether powder makes more sense for separated oven days. <a href="{pack_finder_href}">Use the pack finder</a> once those numbers are on the sheet.</p>`,
      },
      {
        id: 'order', title: 'How do you order the quantity you need?',
        html: `<p>The {liquid_1l_label} and the {medium_pouch_g}g pouch are sold online on Amazon in the United States, Germany and Austria, InstantChef in France, Siradis in Switzerland and Qualifirst in Canada; <a href="{where_to_buy_href}">check the route for your country</a>. The {liquid_10l_label}, the {liquid_1t_label} and the {large_pouch_kg}kg pouch are quoted for your project.</p>
<p>For a professional enquiry, send your country, the applications you make and your expected volume through the business option in the purchase window below. We reply with the quote, the technical sheet, the minimum order and the lead time for your market.</p>`,
      },
    ],
    faq: [
      { q: 'How many egg whites does a 1L Tetrapak replace?', a: '{liquid_1l_whites}, using {white_liquid}g of liquid VERY AQUAFABA per egg white.' },
      { q: 'Can I keep unopened aquafaba outside the fridge?', a: 'Yes. Both formats keep for at least {unopened_months} months at room temperature before opening.' },
      { q: 'Which format suits production on occasional oven days?', a: 'Powder lets you make up the amount for each batch while the rest stays dry and closed.' },
      { q: 'Do I use the same quantity for a whole egg?', a: 'No. Use {egg_liquid}g for a whole egg where the recipe uses aquafaba for binding and moisture.' },
      { q: 'How do I order larger formats?', a: 'Send an enquiry with your country, application and expected volume.' },
    ],
    links: ['pack_finder', 'wholesale', 'liquid', 'powder'],
  },

  dacquoise: {
    title: 'Almond Dacquoise With Aquafaba',
    h1: 'Almond dacquoise with aquafaba',
    crumb: 'Almond dacquoise',
    eyebrow: 'Pastry recipe',
    description: 'Make an almond dacquoise with {dacquoise_aquafaba}g of aquafaba: the ingredients, the order that protects the meringue, the powder dose, the double batch and what goes wrong.',
    lead: 'A dacquoise starts with a meringue, but the difficult moment comes afterwards: that foam has to take the ground almonds, icing sugar and cornflour without becoming a dense batter. This recipe uses {dacquoise_aquafaba}g of VERY AQUAFABA, {dacquoise_sugar}g of sugar and {dacquoise_ground_almonds}g of ground almonds. The reference bake is {dacquoise_minutes} minutes at {dacquoise_oven} °C in a frame or ring. The recipe contains almonds, so replacing the egg white does not make the finished dacquoise allergen-free.',
    sections: [
      {
        id: 'ingredients', title: 'What goes into one batch?',
        html: `${grid(['Ingredient', 'Quantity'], [
  ['VERY AQUAFABA', '{dacquoise_aquafaba}g'],
  ['Sugar', '{dacquoise_sugar}g'],
  ['Icing sugar', '{dacquoise_icing_sugar}g'],
  ['Ground almonds', '{dacquoise_ground_almonds}g'],
  ['Baking powder', '{dacquoise_baking_powder}g'],
  ['Cornflour', '{dacquoise_cornflour}g'],
])}
<p>Keep the sugar for the meringue separate from the icing sugar that goes in with the dry ingredients.</p>`,
      },
      {
        id: 'method', title: 'How do you build the dacquoise?',
        html: `<p>Have the dry ingredients weighed before you start whipping. Chill the aquafaba and use a clean, grease-free mixer bowl.</p>
<ol>
<li>Whip the aquafaba until the foam stiffens.</li>
<li>Add the {dacquoise_sugar}g of sugar and continue until the meringue holds.</li>
<li>Only then add the ground almonds, icing sugar, baking powder and cornflour, progressively.</li>
<li>Mix only until combined.</li>
<li>Transfer the batter to the frame or ring and bake for {dacquoise_minutes} minutes at {dacquoise_oven} °C.</li>
</ol>
<p><a href="{dacquoise_process_href}">The process sheet</a> puts each step beside its reference value for the station.</p>`,
      },
      {
        id: 'order', title: 'Why does the order matter?',
        html: `<p>The meringue needs enough structure before you add the heavy dry ingredients. If the almonds and icing sugar go in before the foam holds, the finished batter starts with less air. If you continue mixing after the dry ingredients have disappeared into the batter, you knock out more of that air. Prepare the frame, the ingredients and the oven before you start whipping so there is no pause between stages; <a href="{whip_href}">how to whip aquafaba</a> gives the peak to look for.</p>`,
      },
      {
        id: 'powder', title: 'How do you use powder for the {dacquoise_aquafaba}g dose?',
        html: `<p>The powder rule is {white_powder}g with {white_water} ml of water for one egg-white equivalent. For this recipe, make up {dacquoise_powder}g of powder with {dacquoise_water} ml of water. That gives {dacquoise_prepared}g of prepared aquafaba. Chill it, then weigh the {dacquoise_aquafaba}g recipe dose into the mixer bowl. Do not use the entire {dacquoise_prepared}g simply because that is what the reconstitution produced. <a href="{reconstitution_href}">Check the powder and water proportions</a> for a different amount.</p>`,
      },
      {
        id: 'scale', title: 'How do you scale the recipe?',
        html: `<p>Scale every ingredient by the same factor. For two frames:</p>
${grid(['Ingredient', 'Two batches'], [
  ['VERY AQUAFABA', '{dacquoise_double_aquafaba}g'],
  ['Sugar', '{dacquoise_double_sugar}g'],
  ['Icing sugar', '{dacquoise_double_icing_sugar}g'],
  ['Ground almonds', '{dacquoise_double_ground_almonds}g'],
  ['Baking powder', '{dacquoise_double_baking_powder}g'],
  ['Cornflour', '{dacquoise_double_cornflour}g'],
])}
<p>Keep the reference bake at {dacquoise_oven} °C for {dacquoise_minutes} minutes and check the result in the frame or ring you actually use. <a href="{dacquoise_calc_href}">The calculator</a> scales any number of frames.</p>`,
      },
      {
        id: 'wrong', title: 'What should you check when the dacquoise goes wrong?',
        html: `${grid(['What you see', 'What to check', 'Fix'], [
  ['Meringue does not stiffen', 'Temperature or grease', 'Chill the aquafaba and use clean equipment'],
  ['Batter is loose', 'Dry ingredients went in too early', 'Build the meringue first'],
  ['Dacquoise is dense', 'Batter was mixed too long', 'Stop once the dry ingredients are incorporated'],
  ['Centre is under-baked', 'Bake or mould setup', 'Check the full reference bake in your frame'],
  ['Edges dry too far', 'Oven or bake time', 'Check the bake at the reference time'],
])}`,
      },
    ],
    faq: [
      { q: 'Can I make dacquoise without egg white?', a: 'Yes. This recipe uses {dacquoise_aquafaba}g of VERY AQUAFABA.' },
      { q: 'How long does it bake?', a: '{dacquoise_minutes} minutes at {dacquoise_oven} °C in the reference method.' },
      { q: 'How much powder do I prepare?', a: 'Make up {dacquoise_powder}g with {dacquoise_water} ml of water, chill it and weigh {dacquoise_aquafaba}g for the recipe.' },
      { q: 'Does it still contain nuts?', a: 'Yes. The recipe contains {dacquoise_ground_almonds}g of ground almonds.' },
      { q: 'Do I double the baking time for two batches?', a: 'No. Scale the ingredients, not the reference oven setting or time.' },
    ],
    links: ['dacquoise_calc', 'dacquoise_process', 'pavlova', 'powder'],
  },
  marshmallows: {
    title: 'Coconut Marshmallows With Aquafaba: Pastry Recipe',
    h1: 'Coconut marshmallows with aquafaba',
    crumb: 'Coconut marshmallows',
    eyebrow: 'Pastry recipe',
    description: 'Make coconut marshmallows with {mm_aquafaba}g of aquafaba: the {mm_syrup_c} °C syrup, the carrageenan set, the toasted coconut, the double batch and what goes wrong.',
    lead: 'A marshmallow is a foam that a hot syrup sets, and in the classic recipe that foam comes from egg white and gelatine. Here it comes from {mm_aquafaba}g of VERY AQUAFABA whipped in the mixer, with a sugar syrup cooked to {mm_syrup_c} °C and {mm_carrageenan}g of iota carrageenan to hold the set. One batch fills a frame, cools without an oven and is cut into cubes rolled in toasted coconut. The recipe contains coconut, which the recipe lists as a nut, so the finished marshmallow is not allergen-free.',
    sections: [
      { id: 'ingredients', title: 'What goes into one batch?', html: `<p>The recipe has two preparations: the toasted coconut, made first, and the marshmallow itself. Weigh the two waters and the two sugars separately, because they go into two different pans.</p>
<p><b>Toasted coconut</b></p>
${grid(['Ingredient', 'Quantity'], [['Dried grated coconut', '{mm_coconut_total}g']])}
<p><b>Coconut marshmallow</b></p>
${grid(['Ingredient', 'Quantity'], [['Water for the syrup', '{mm_syrup_water}g'], ['Sugar for the syrup', '{mm_syrup_sugar}g'], ['Invert sugar (trimoline)', '{mm_invert}g'], ['VERY AQUAFABA', '{mm_aquafaba}g'], ['Water for the carrageenan', '{mm_gel_water}g'], ['Sugar for the carrageenan', '{mm_gel_sugar}g'], ['Iota carrageenan', '{mm_carrageenan}g'], ['Toasted coconut', '{mm_coconut_mix}g']])}
<p>The {mm_coconut_total}g of coconut covers the {mm_coconut_mix}g that goes into the mix, the sprinkle on top of the slab and the coating of the cubes.</p>` },
      { id: 'method', title: 'How do you make the marshmallow?', html: `<p>Toast the coconut first: spread it on a lined tray and give it {mm_toast_min} minutes at {mm_toast_c} °C with the fan on. Then have the frame ready on a silicone mat or a guitar sheet, because the mix is poured the moment it is finished.</p>
<ol>
<li>Heat the syrup water, the {mm_syrup_sugar}g of sugar and the invert sugar to {mm_syrup_c} °C, then let the syrup cool to {mm_syrup_cool_c} °C.</li>
<li>Whip the {mm_aquafaba}g of VERY AQUAFABA in the mixer with the whisk.</li>
<li>In a second pan, whisk the iota carrageenan and the {mm_gel_sugar}g of sugar into the {mm_gel_water}g of water and bring it to {mm_gel_c} °C.</li>
<li>Mix the carrageenan into the {mm_syrup_cool_c} °C syrup and drizzle it gradually over the whipped aquafaba.</li>
<li>Add the {mm_coconut_mix}g of toasted coconut and pour at once into the frame.</li>
<li>Sprinkle with toasted coconut and leave to cool.</li>
<li>Cut the slab into cubes with a guitar cutter and dip each side in toasted coconut.</li>
</ol>
<p>Keep the marshmallows in a dry place in an airtight tin. <a href="{marshmallows_process_href}">The process sheet</a> puts each temperature beside its step for the station.</p>` },
      { id: 'syrup', title: 'Why two temperatures for the syrup?', html: `<p>The syrup is cooked to {mm_syrup_c} °C to lose water and reach the sugar concentration that gives a marshmallow its chew. It is then left to fall to {mm_syrup_cool_c} °C before it meets the foam, because a syrup straight off the heat would collapse the whipped aquafaba and cook it against the bowl. The carrageenan, dissolved at {mm_gel_c} °C, is mixed into that cooled syrup so that both set together in the frame. The drizzle has to be gradual: pour the syrup in one go and the foam loses the air it needs to carry the coconut. <a href="{whip_href}">How to whip aquafaba</a> gives the peak to look for before the syrup goes in.</p>` },
      { id: 'powder', title: 'Can you make the {mm_aquafaba}g dose from powder?', html: `<p>Yes. The rule is {white_powder}g of powder with {white_water} ml of water for one egg white, so make up {mm_powder}g of powder with {mm_water} ml of water, which gives {mm_prepared}g of aquafaba. Chill it, then weigh the {mm_aquafaba}g the recipe needs into the mixer bowl. The small surplus stays in the fridge for {opened_days} days like any opened liquid. <a href="{reconstitution_href}">Check the powder and water proportions</a> for a different quantity.</p>` },
      { id: 'scale', title: 'How do you scale the slab?', html: `<p>Scale every ingredient by the same factor and keep the temperatures. For two frames:</p>
${grid(['Ingredient', 'Two batches'], [['VERY AQUAFABA', '{mm_double_aquafaba}g'], ['Sugar for the syrup', '{mm_double_syrup_sugar}g'], ['Invert sugar', '{mm_double_invert}g'], ['Iota carrageenan', '{mm_double_carrageenan}g'], ['Dried grated coconut', '{mm_double_coconut_total}g']])}
<p>A larger syrup takes longer to reach {mm_syrup_c} °C and longer to cool to {mm_syrup_cool_c} °C, so start it earlier rather than hotter. In powder, two batches are {mm_double_powder}g with {mm_double_water} ml of water. <a href="{marshmallows_calc_href}">The calculator</a> scales any number of frames.</p>` },
      { id: 'wrong', title: 'What should you check when the marshmallow goes wrong?', html: grid(['What you see', 'What to check', 'Fix'], [
        ['The foam falls as the syrup goes in', 'Syrup still above {mm_syrup_cool_c} °C, or poured too fast', 'Let it cool to {mm_syrup_cool_c} °C and drizzle it in a thin stream'],
        ['The slab stays soft and sticky', 'Syrup pulled before {mm_syrup_c} °C', 'Cook the syrup to {mm_syrup_c} °C on a checked thermometer'],
        ['Lumps in the mix', 'Carrageenan added to the water without the sugar, or not brought to {mm_gel_c} °C', 'Whisk it in with the sugar and heat to {mm_gel_c} °C'],
        ['The cubes sweat in the tin', 'Stored while warm, or in a damp place', 'Cool the slab fully, keep the tin airtight and dry'],
        ['Pale, soft coconut', 'Under-toasted', 'The full {mm_toast_min} minutes at {mm_toast_c} °C, fan on'],
      ]) },
    ],
    faq: [
      { q: 'Can I make marshmallows without egg white or gelatine?', a: 'Yes. This recipe whips {mm_aquafaba}g of VERY AQUAFABA and sets it with {mm_carrageenan}g of iota carrageenan and a syrup cooked to {mm_syrup_c} °C.' },
      { q: 'What temperature does the syrup need?', a: '{mm_syrup_c} °C in the pan, then cooled to {mm_syrup_cool_c} °C before it is drizzled over the foam.' },
      { q: 'How much powder do I make up for one batch?', a: '{mm_powder}g with {mm_water} ml of water, chilled, then weigh {mm_aquafaba}g for the recipe.' },
      { q: 'Are the marshmallows allergen-free?', a: 'No. The recipe contains coconut, listed as a nut, and the invert sugar and carrageenan carry their own labels.' },
      { q: 'How do I store them?', a: 'In a dry place in an airtight tin, once the slab has cooled completely.' },
    ],
    links: ['marshmallows_calc', 'marshmallows_process', 'dacquoise', 'pavlova', 'powder'],
  },
  marshmallows_calc: {
    title: 'How Much Aquafaba for Marshmallows? Quantity Calculator',
    h1: 'How much aquafaba do you need for marshmallows?',
    crumb: 'Quantity calculator',
    eyebrow: 'Quantity calculator',
    description: 'Scale the coconut marshmallow to the frames you pour: aquafaba in liquid or powder with its water, the two syrups, the carrageenan and the coconut.',
    lead: 'A marshmallow batch is counted by the frame. One reference frame whips {mm_aquafaba}g of VERY AQUAFABA, about {mm_whites} egg whites, under a syrup cooked to {mm_syrup_c} °C. Type the frames you want and the calculator gives the aquafaba in liquid or in powder with its water, plus the sugars, the invert sugar, the carrageenan and the coconut to go with it.',
    sections: [
      { id: 'scales', title: 'What scales?', html: `<p>Every weight scales with the frames: the two waters, the two sugars, the invert sugar, the carrageenan, the coconut and the aquafaba. The temperatures do not. The syrup goes to {mm_syrup_c} °C and cools to {mm_syrup_cool_c} °C whatever the batch, the carrageenan is dissolved at {mm_gel_c} °C, and the coconut toasts for {mm_toast_min} minutes at {mm_toast_c} °C. A bigger syrup simply takes longer to get there, so start it earlier.</p>
<p>In powder, the frame is {mm_powder}g made up with {mm_water} ml of water, which gives {mm_prepared}g of aquafaba: weigh the {mm_aquafaba}g dose from it.</p>` },
      { id: 'packs', title: 'How many frames can you pour from each pack?', html: `${grid(['Pack', 'Marshmallow frames'], [['{liquid_1l_label}', '{mm_batches_1l}'], ['{small_pouch_g}g pouch', '{mm_batches_30g}'], ['{medium_pouch_g}g pouch', '{mm_batches_200g}'], ['{large_pouch_kg}kg pouch', '{mm_batches_3kg}']])}
<p>At {mm_aquafaba}g a frame, an opened litre covers {mm_batches_1l} frames inside its {opened_days} days. If marshmallows are an occasional line, the pouch keeps dry and closed between batches. <a href="{marshmallows_href}">Follow the marshmallow method</a> before you fix a yield per frame.</p>` },
      { id: 'example', title: 'A worked example: two frames', html: `<p>Two frames take {mm_double_aquafaba}g of liquid aquafaba, or {mm_double_powder}g of powder with {mm_double_water} ml of water, under a syrup of {mm_double_syrup_sugar}g of sugar and {mm_double_invert}g of invert sugar, set with {mm_double_carrageenan}g of carrageenan and rolled in {mm_double_coconut_total}g of toasted coconut. The syrup still goes to {mm_syrup_c} °C and cools to {mm_syrup_cool_c} °C. <a href="{marshmallows_process_href}">The process sheet</a> puts each temperature beside its step.</p>` },
    ],
    faq: [
      { q: 'How much aquafaba do I need for one frame of marshmallows?', a: '{mm_aquafaba}g of liquid VERY AQUAFABA, or {mm_powder}g of powder with {mm_water} ml of water, from which you weigh {mm_aquafaba}g.' },
      { q: 'Does the syrup temperature change with the batch?', a: 'No. {mm_syrup_c} °C, cooled to {mm_syrup_cool_c} °C, whatever the number of frames.' },
      { q: 'How many frames does a 1L Tetrapak make?', a: '{mm_batches_1l}, at {mm_aquafaba}g per frame.' },
      { q: 'Does the coconut scale too?', a: 'Yes. Every weight scales with the frames; only the temperatures and times stay fixed.' },
    ],
    links: ['marshmallows', 'marshmallows_process', 'powder'],
  },
  marshmallows_process: {
    title: 'How to Make Aquafaba Marshmallows: Process Sheet',
    h1: 'How to make aquafaba marshmallows: process sheet',
    crumb: 'Process sheet',
    eyebrow: 'Process sheet',
    description: 'Every step of the coconut marshmallow with its temperature and a column for your own batch, then the checks: what you see, why, the fix. Ready to print.',
    lead: 'Marshmallow is a recipe of thermometers: {mm_syrup_c} °C for the syrup, {mm_syrup_cool_c} °C before it meets the foam, {mm_gel_c} °C for the carrageenan. This sheet lists the steps with those values and the weights of the reference frame, {mm_aquafaba}g of aquafaba and {mm_syrup_sugar}g of sugar in the syrup, with a column for your own batch. Print it for the station.',
    powderNote: 'Powder: make up {mm_powder}g with {mm_water} ml of water, chill it and weigh {mm_aquafaba}g before step 2.',
    steps: [
      { step: 'Toast the grated coconut on a lined tray, fan on', reference: '{mm_coconut_total}g, {mm_toast_min} minutes at {mm_toast_c} °C' },
      { step: 'Cook the syrup: water, sugar and invert sugar', reference: '{mm_syrup_water}g water, {mm_syrup_sugar}g sugar, {mm_invert}g invert sugar, to {mm_syrup_c} °C' },
      { step: 'Let the syrup cool', reference: 'To {mm_syrup_cool_c} °C' },
      { step: 'Whip the aquafaba in the mixer', reference: '{mm_aquafaba}g, whisk attachment' },
      { step: 'Dissolve the carrageenan with the sugar in the second water', reference: '{mm_carrageenan}g carrageenan, {mm_gel_sugar}g sugar, {mm_gel_water}g water, to {mm_gel_c} °C' },
      { step: 'Mix the carrageenan into the syrup and drizzle over the foam', reference: 'Gradually, mixer running' },
      { step: 'Add the toasted coconut and pour into the frame', reference: '{mm_coconut_mix}g; frame on a silicone mat or guitar sheet' },
      { step: 'Sprinkle with coconut and cool', reference: 'At room temperature, until fully set' },
      { step: 'Cut and coat', reference: 'Guitar cutter; each side dipped in toasted coconut' },
      { step: 'Store', reference: 'Airtight tin, dry place' },
    ],
    checks: [
      { see: 'The foam collapses under the syrup', check: 'Syrup above {mm_syrup_cool_c} °C, or poured in one go', fix: 'Cool to {mm_syrup_cool_c} °C; thin stream' },
      { see: 'Soft, sticky slab', check: 'Syrup pulled early', fix: 'Cook to {mm_syrup_c} °C' },
      { see: 'Lumps', check: 'Carrageenan not whisked in with the sugar, or under {mm_gel_c} °C', fix: 'Whisk with the sugar; heat to {mm_gel_c} °C' },
      { see: 'Mix sets in the bowl', check: 'Pause between the drizzle and the frame', fix: 'Frame ready before the syrup; pour at once' },
      { see: 'Cubes sweat in the tin', check: 'Warm when stored, or damp room', fix: 'Cool fully; airtight and dry' },
    ],
    sections: [
      { id: 'ready', title: 'What should be on the bench before the syrup goes on?', html: `<p>Two pans and a thermometer for each. The coconut already toasted and split into three: the {mm_coconut_mix}g for the mix, a bowl for the sprinkle and a bowl for the coating. The frame on its mat, the mixer with the whisk fitted and the aquafaba weighed. Nothing is weighed once the syrup is on the heat, because the window between {mm_syrup_c} °C and {mm_syrup_cool_c} °C is when the foam has to be ready.</p>
<p><a href="{marshmallows_calc_href}">Scale the frame with the calculator</a> before a larger run; <a href="{marshmallows_href}">the marshmallow recipe</a> has the method and the double batch.</p>` },
      { id: 'good', title: 'What a good marshmallow looks like at each step', html: `<p>Coconut that is golden and dry after toasting. A syrup that reads {mm_syrup_c} °C and then falls, clear, to {mm_syrup_cool_c} °C. A foam that holds on the whisk before the drizzle, and a mix that stays light and glossy as the syrup goes in. A slab that is poured level and sets matt at room temperature. Cubes that cut clean on the guitar and take the coconut on every side without sticking to each other in the tin.</p>
<p>Tick each step as its temperature or state is reached, not as it is done. The reading that matters most is the syrup at {mm_syrup_cool_c} °C: hotter, and the foam goes.</p>` },
    ],
    faq: [
      { q: 'At what temperature does the syrup go over the aquafaba?', a: '{mm_syrup_cool_c} °C, after it has been cooked to {mm_syrup_c} °C.' },
      { q: 'When does the carrageenan go in?', a: 'Dissolved with the sugar in the second water at {mm_gel_c} °C, then mixed into the cooled syrup before the drizzle.' },
      { q: 'Can I use this sheet with powder?', a: 'Yes. Make up {mm_powder}g with {mm_water} ml of water, chill it, weigh {mm_aquafaba}g and start at step 2.' },
      { q: 'Why did my marshmallow stay sticky?', a: 'Usually the syrup was pulled before {mm_syrup_c} °C, or the slab was stored before it had cooled.' },
    ],
    links: ['marshmallows', 'marshmallows_calc', 'powder'],
  },
  raspberry: {
    title: 'Raspberry Macarons With Reduced Aquafaba: Recipe',
    h1: 'Raspberry macarons with reduced aquafaba',
    crumb: 'Raspberry macarons',
    eyebrow: 'Pastry recipe',
    description: 'Pink macaron shells on a French meringue of aquafaba reduced by half, {rb_bake} minutes at {rb_oven} °C, filled with a raspberry ganache: ingredients, method and checks.',
    lead: 'This macaron starts in a saucepan, not in the mixer. {rb_aquafaba}g of VERY AQUAFABA is reduced by half before it is whipped, and that thicker reduction, {rb_reduction}g of it, carries a French meringue firm enough to take the icing sugar and white chocolate powder in three additions. The shells rest for {rb_rest} minutes, bake for {rb_bake} minutes at {rb_oven} °C and are filled with a raspberry ganache. The recipe is marked nuts, so check the labels of the white chocolate powder and the raspberry chocolate you use.',
    sections: [
      { id: 'ingredients', title: 'What goes into the shells and the ganache?', html: `<p>Three preparations: the reduction, the shells and the ganache. The reduction is made first and the ganache can be made while the shells rest.</p>
<p><b>Aquafaba reduction</b></p>
${grid(['Ingredient', 'Quantity'], [['VERY AQUAFABA', '{rb_aquafaba}g']])}
<p><b>Pink macaron shells</b></p>
${grid(['Ingredient', 'Quantity'], [['Aquafaba reduction', '{rb_reduction}g'], ['Granulated sugar', '{rb_sugar}g'], ['Xanthan gum', '{rb_xanthan}g'], ['Icing sugar', '{rb_icing}g'], ['White chocolate powder', '{rb_white_choc}g'], ['Cornstarch', '{rb_cornstarch}g'], ['Orange fibre', '{rb_fibre}g'], ['Natural red colouring', '{rb_colour}g']])}
<p><b>Raspberry ganache</b></p>
${grid(['Ingredient', 'Quantity'], [['Plant-based cream, 35% fat', '{rb_cream}g'], ['Raspberry vegan chocolate', '{rb_choc}g'], ['Margarine, 80% fat', '{rb_margarine}g']])}
<p>The {rb_aquafaba}g of aquafaba, about {rb_whites} egg whites, reduces to roughly half its weight, and the shells use {rb_reduction}g of that. Mix the xanthan gum into the granulated sugar before you start, so it goes into the foam with the sugar and not on its own.</p>` },
      { id: 'method', title: 'How do you make the shells?', html: `<ol>
<li>Pour the {rb_aquafaba}g of aquafaba into a saucepan and reduce it by half.</li>
<li>Whip the {rb_reduction}g of reduction in the stand mixer with the whisk, adding the sugar and xanthan mix gradually.</li>
<li>Sift the icing sugar, white chocolate powder, cornstarch, orange fibre and colouring together, and fold the meringue in, in three parts.</li>
<li>Pipe with a number {rb_nozzle} nozzle onto a tray lined with a silicone paper mat, to the size you want.</li>
<li>Rest the shells at room temperature for {rb_rest} minutes.</li>
<li>Bake in a fan oven at {rb_oven} °C for {rb_bake} minutes.</li>
<li>Out of the oven, lift the mat off the tray and let the shells cool.</li>
</ol>
<p>For the ganache, melt the raspberry chocolate, boil the cream and pour it over in three parts, mixing between each. Add the margarine, mix until smooth, strain into a bowl lined with parchment and cool in the fridge. Fill the shells generously with a number {rb_fill_nozzle} nozzle, pair them by size and keep the macarons in the fridge.</p>` },
      { id: 'reduction', title: 'Why reduce the aquafaba first?', html: `<p>A macaron shell asks more of the meringue than a meringue does: it has to stay firm while the sifted sugars and powders are folded in, then hold its shape on the tray for {rb_rest} minutes. Reducing the aquafaba by half halves the water it brings to the bowl, so the foam whips denser and the batter spreads less. The xanthan gum, mixed into the sugar, backs that up. This is the one aquafaba recipe on the site where the dose is not poured straight from the pack, so write the reduction into the prep list the day before if the tin is small. <a href="{macarons_href}">The macarons guide</a> covers the standard shell with unreduced aquafaba, the macaronage and the drying.</p>` },
      { id: 'wrong', title: 'What should you check when the shells go wrong?', html: grid(['What you see', 'What to check', 'Fix'], [
        ['The meringue stays loose', 'Reduction not taken to half, or sugar added in one go', 'Reduce {rb_aquafaba}g to about half; add the sugar gradually'],
        ['Shells spread flat on the mat', 'Meringue over-folded in the third addition', 'Fold only until the dry mix has disappeared'],
        ['Cracked tops', 'Rested less than {rb_rest} minutes', 'The full {rb_rest} minutes at room temperature before the oven'],
        ['Pale, soft shells', 'Under-baked', 'The full {rb_bake} minutes at {rb_oven} °C with the fan on'],
        ['Ganache splits', 'Cream poured in one go, or margarine added hot', 'Three additions, then the margarine, mixed smooth'],
      ]) },
      { id: 'packs', title: 'How many batches does a pack make?', html: `<p>A batch takes {rb_aquafaba}g from the pack before reduction, so a {liquid_1l_label} makes {rb_batches_1l} batches, used within the {opened_days} days an opened pack keeps at {opened_temp} °C. The recipe is written for the liquid and the reduction is part of it, so there is no powder dose for these shells; <a href="{p_macarons_href}">macarons from aquafaba powder</a> follow the standard recipe instead.</p>` },
    ],
    faq: [
      { q: 'Why is the aquafaba reduced for these macarons?', a: 'To take out half the water before whipping, so the French meringue is dense enough to hold the sifted sugars and keep its shape on the tray.' },
      { q: 'How much aquafaba do I reduce?', a: '{rb_aquafaba}g, reduced by half in a saucepan. The shells use {rb_reduction}g of the reduction.' },
      { q: 'How long do the shells bake?', a: '{rb_bake} minutes at {rb_oven} °C in a fan oven, after {rb_rest} minutes of rest at room temperature.' },
      { q: 'Can I make these shells with aquafaba powder?', a: 'The recipe is written for the liquid, reduced by half, and gives no powder dose. For the standard shell with powder, follow the macarons guide.' },
      { q: 'Are the macarons allergen-free?', a: 'No. The recipe is marked nuts, and the white chocolate powder and raspberry chocolate carry their own labels.' },
    ],
    links: ['p_macarons', 'dacquoise', 'powder'],
  },
};
