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
      { q: 'How many chocolate mousse batches can I make from 1L?', a: 'At the published batch of {chocolate_mousse_eggs} egg whites, one {liquid_1l_label} covers {chocolate_mousse_batches_1l} full chocolate mousse batches.' },
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
    title: 'Aquafaba Pavlova: Liquid or Powder?',
    h1: 'Aquafaba pavlova: liquid or powder?',
    crumb: 'Pavlova',
    eyebrow: 'Application guide',
    description: 'A pavlova base with {pavlova_aquafaba}g of aquafaba and {pavlova_sugar}g of sugar, dried at {pavlova_oven} °C: the method, what goes wrong, and whether liquid or powder fits your counter.',
    lead: 'A pavlova is a meringue that has to be two things at once, crisp outside and soft inside, and it has always been judged on its egg whites. Swap them for {pavlova_aquafaba}g of VERY AQUAFABA, the equivalent of {pavlova_whites} egg whites, with {pavlova_sugar}g of caster sugar, a little corn starch and a splash of vinegar, and you keep the crisp shell and the soft centre, with no egg in the kitchen. This guide takes you through the base step by step, says what to check when a shell cracks or softens, and helps you choose between liquid and powder for the way you bake.',
    sections: [
      {
        id: 'figures', title: 'The numbers for one base',
        html: `${grid(['One {pavlova_diameter} cm base', 'Liquid', 'Powder'], [
  ['Aquafaba', '{pavlova_aquafaba}g, chilled to {pavlova_chill} °C', '{pavlova_powder}g of powder with {pavlova_water} ml of water'],
  ['Egg whites replaced', '{pavlova_whites}', '{pavlova_whites}'],
  ['Bases per pack', '{pavlova_batches_1l} from a {liquid_1l_label}', '{pavlova_batches_200g} from a {medium_pouch_g}g pouch'],
  ['Once opened', '{opened_days} days at {opened_temp} °C', 'Dry and closed until the best-before date'],
])}`,
      },
      {
        id: 'method', title: 'How to make the base',
        html: `<p>The recipe is a meringue with two additions, starch and acid, and they are what give the soft centre. Follow the order as it comes.</p>
<ol>
<li>Whip {pavlova_aquafaba}g of chilled aquafaba in a clean, grease-free bowl at high speed to soft peaks. Add {pavlova_tartar}g of cream of tartar or {pavlova_citric}g of citric acid and keep going to firm peaks.</li>
<li>Add {pavlova_sugar}g of caster sugar gradually while whipping, until the meringue is glossy, stiff and dense.</li>
<li>Fold in {pavlova_cornstarch}g of corn starch and {pavlova_vinegar}g of white wine vinegar or lemon juice, gently: they set the structure and keep the centre soft.</li>
<li>Spoon onto a lined tray and shape a {pavlova_diameter} cm disc with slightly raised edges, to hold the toppings.</li>
<li>Bake at {pavlova_oven} °C, fan off, for {pavlova_hours} hours, until crisp outside with the centre still slightly soft.</li>
<li>Turn the oven off and let the base cool inside with the door ajar, so it does not crack.</li>
<li>Just before service, top with {pavlova_cream} ml of whipped plant-based cream and {pavlova_fruit}g of fresh fruit, and serve at once.</li>
</ol>
<p>Banquet or display counter? Bake the bases {pavlova_ahead} day ahead and store them airtight with a desiccant pouch; only the assembly happens at service. <a href="{pavlova_process_href}">The process sheet</a> puts each step beside its reference value, and <a href="{pavlova_calc_href}">the quantity calculator</a> scales the base to the number you need.</p>`,
      },
      {
        id: 'format', title: 'How often does a pavlova leave your kitchen?',
        html: `<p>The base is planned oven time, and the pack choice follows the oven days, not the recipe.</p>
${grid(['Your kitchen', 'Pick', 'Why'], [
  ['Pavlova on the counter or the menu most days', 'Liquid, {liquid_1l_label}', '{pavlova_batches_1l} bases per pack, used well inside {opened_days} days'],
  ['A seasonal dessert, a few bases at a time', 'Powder, {medium_pouch_g}g pouch', '{pavlova_batches_200g} bases per pouch, kept dry and closed between runs'],
  ['Banquets and events, bases baked a day ahead', 'Powder', 'It travels dry and the bases keep airtight; nothing opened waits in a fridge'],
  ['Chilled space committed to the creams and fruit', 'Powder', 'The pouch lives on the dry shelf with the finished bases'],
  ['Hotel pastry section or a line baking bases daily', 'Liquid, {liquid_10l_label}', '{pavlova_batches_10l} bases per pack, continuous use'],
])}`,
      },
      {
        id: 'formats', title: 'Working with each format',
        html: `<p><strong>Liquid.</strong> Weigh {pavlova_aquafaba}g straight from the pack, already at {pavlova_chill} °C if the pack lives in the fridge. Once open, use it within {opened_days} days at {opened_temp} °C, or freeze the rest in portions.</p>
<p><strong>Powder.</strong> Make up {pavlova_powder}g with {pavlova_water} ml of water, which gives {pavlova_prepared}g of aquafaba, and chill it before whipping: the foam is built cold. The starch and the acid go in exactly as with the liquid. Keep the rest of the pouch dry and closed. <a href="{p_pavlova_href}">Pavlova with the powder</a> goes into the detail.</p>
<p>In both cases the aquafaba carries a light roasted note in the pack; the sugar, the cream and the fruit are what the pavlova tastes of, and the first batch is the test.</p>`,
      },
      {
        id: 'wrong', title: 'When the pavlova goes wrong',
        html: `${grid(['What you see', 'Why', 'Fix'], [
  ['Foam will not reach volume', 'Grease on the bowl or whisk, or warm aquafaba', 'Degrease everything and chill the aquafaba to {pavlova_chill} °C'],
  ['Shell cracks as it cools', 'Cooled too fast', 'Oven off, door ajar, cool inside'],
  ['Soft all the way through', 'Under-dried', 'The full {pavlova_hours} hours at {pavlova_oven} °C, fan off'],
  ['No soft centre, dry right through', 'Starch and acid left out, or over-dried', 'Fold in the {pavlova_cornstarch}g of starch and {pavlova_vinegar}g of acid; pull it while the centre still gives'],
  ['Base softens after assembly', 'Topped too early', 'Cream and fruit just before service'],
  ['Base softens in storage', 'It pulls moisture from the air', 'Airtight with a desiccant pouch, in a dry place'],
])}`,
      },
    ],
    faq: [
      { q: 'How much aquafaba do I need for a pavlova?', a: '{pavlova_aquafaba}g of liquid VERY AQUAFABA for one {pavlova_diameter} cm base, the equivalent of {pavlova_whites} egg whites, with {pavlova_sugar}g of caster sugar. In powder, {pavlova_powder}g with {pavlova_water} ml of water.' },
      { q: 'Why does the recipe add corn starch and vinegar?', a: 'They stabilise the structure and give the pavlova its soft centre under a crisp shell. Fold in {pavlova_cornstarch}g of starch and {pavlova_vinegar}g of vinegar or lemon juice after the sugar.' },
      { q: 'What temperature do I bake a pavlova at?', a: '{pavlova_oven} °C, fan off, for {pavlova_hours} hours, then cool it in the oven with the door ajar.' },
      { q: 'Can I bake the base in advance?', a: 'Yes, {pavlova_ahead} day ahead. Store it airtight with a desiccant pouch and add the cream and fruit just before service.' },
      { q: 'Why did my pavlova crack?', a: 'Usually because it cooled too fast. Turn the oven off and let the base cool inside with the door ajar.' },
      { q: 'Should I use liquid or powder for pavlova?', a: 'Count your bases. If an opened {liquid_1l_label}, {pavlova_batches_1l} bases, is empty within {opened_days} days, liquid pours straight into the bowl. If pavlova is seasonal or baked ahead for events, the powder keeps dry and closed between runs.' },
      { q: 'How many pavlova bases does a 1L pack make?', a: '{pavlova_batches_1l} bases of {pavlova_diameter} cm, at {pavlova_aquafaba}g each.' },
      { q: 'Does aquafaba change the taste of a pavlova?', a: 'In the pack it has a light roasted note from the cooking of the chickpeas. Taste your first base; the sugar, the cream and the fruit carry the dessert.' },
    ],
    links: ['pavlova_calc', 'pavlova_process', 'p_pavlova', 'dacquoise'],
  },
  pavlova_calc: {
    title: 'How Much Aquafaba for a Pavlova? Quantity Calculator',
    h1: 'How much aquafaba for a pavlova? Quantity calculator',
    crumb: 'Quantity calculator',
    eyebrow: 'Quantity calculator',
    description: 'Scale the pavlova base to the number you bake: aquafaba in liquid or powder with its water, sugar, starch, acid and toppings per base, and bases per pack.',
    lead: 'What runs short on a pavlova day is rarely the sugar. It is the aquafaba, because {pavlova_aquafaba}g per base adds up fast, and a {liquid_1l_label} stops at {pavlova_batches_1l} bases. Type the number of bases you need and the calculator gives the aquafaba in liquid or in powder with its water, the sugar, starch and acid, and the cream and fruit for the toppings.',
    sections: [
      {
        id: 'scales', title: 'What scales and what does not',
        html: `<p>Everything in the bowl scales with the number of bases: aquafaba, sugar, starch, acid, and the cream and fruit on top. The oven does not. Every base dries at {pavlova_oven} °C, fan off, for {pavlova_hours} hours, and the aquafaba is whipped at {pavlova_chill} °C whatever the batch. Ten bases need ten trays, not a hotter oven.</p>
<p>The powder is counted per egg white: {white_powder}g with {white_water} ml of water for each of the {pavlova_whites} whites in a base, so {pavlova_powder}g and {pavlova_water} ml per base, made up and chilled before whipping.</p>`,
      },
      {
        id: 'packs', title: 'Bases per pack',
        html: `${grid(['Pack', 'Pavlova bases'], [
  ['{liquid_1l_label}', '{pavlova_batches_1l}'],
  ['{liquid_10l_label}', '{pavlova_batches_10l}'],
  ['{small_pouch_g}g powder pouch', '{pavlova_batches_30g}'],
  ['{medium_pouch_g}g powder pouch', '{pavlova_batches_200g}'],
  ['{large_pouch_kg}kg powder pouch', '{pavlova_batches_3kg}'],
])}
<p>An opened litre has {opened_days} days; the pouch has none. <a href="{pavlova_href}">The pavlova guide</a> turns that into a pick per kitchen.</p>`,
      },
      {
        id: 'example', title: 'A worked example: ten bases for a banquet',
        html: `<p>Ten {pavlova_diameter} cm bases take {ten_bases_aquafaba}g of liquid aquafaba, which is {ten_bases_packs} Tetrapaks opened, or {ten_bases_powder}g of powder made up with {ten_bases_water_l}L of water from a {medium_pouch_g}g pouch. They need {ten_bases_sugar}g of caster sugar, and for the toppings {ten_bases_cream_l}L of whipped plant-based cream and {ten_bases_fruit_kg}kg of fruit, added at service.</p>
<p>Baked {pavlova_ahead} day ahead and stored airtight with a desiccant pouch, the bases wait; only the assembly happens on the day. <a href="{pavlova_process_href}">The process sheet</a> lists each step with its reference value for the oven team.</p>`,
      },
    ],
    faq: [
      { q: 'How much aquafaba for two pavlovas?', a: 'Twice the base: {two_bases_aquafaba}g of liquid, or {two_bases_powder}g of powder with {two_bases_water} ml of water, with {two_bases_sugar}g of sugar.' },
      { q: 'Does the oven time change with more bases?', a: 'No. Each base dries at {pavlova_oven} °C, fan off, for {pavlova_hours} hours. More bases means more trays, not a different setting.' },
      { q: 'How many bases from a 200g pouch of powder?', a: '{pavlova_batches_200g}, at {pavlova_powder}g of powder per base.' },
      { q: 'Can I scale the toppings the same way?', a: 'Yes: {pavlova_cream} ml of whipped cream and {pavlova_fruit}g of fruit per base, added just before service.' },
    ],
    links: ['pavlova', 'pavlova_process', 'p_pavlova'],
  },
  pavlova_process: {
    title: 'How to Make an Aquafaba Pavlova: the Step by Step Sheet',
    h1: 'How to make an aquafaba pavlova: the step by step sheet',
    crumb: 'Process sheet',
    eyebrow: 'Process sheet',
    description: 'Every step of the aquafaba pavlova base with its reference value and a column for your own batch, then the checks: what you see, why, the fix. Ready to print.',
    lead: 'A pavlova base is a sequence of states, and each one can be checked before the next: soft peaks, firm peaks, glossy and dense, folded, shaped, dried, cooled. This sheet lists the steps with the reference values of the recipe, {pavlova_aquafaba}g of aquafaba at {pavlova_chill} °C, {pavlova_sugar}g of sugar, {pavlova_oven} °C for {pavlova_hours} hours, and leaves a column for your own batch. Print it for the station.',
    powderNote: 'Powder: make up {pavlova_powder}g with {pavlova_water} ml of water per base and chill it before step 1. From there the sheet is the same.',
    steps: [
      { step: 'Chill the aquafaba', reference: '{pavlova_aquafaba}g at {pavlova_chill} °C' },
      { step: 'Whip to soft peaks in a clean, grease-free bowl, high speed', reference: 'Peak folds over on itself' },
      { step: 'Add the stabiliser and whip to firm peaks', reference: '{pavlova_tartar}g cream of tartar or {pavlova_citric}g citric acid' },
      { step: 'Add the caster sugar gradually, to glossy, stiff, dense meringue', reference: '{pavlova_sugar}g' },
      { step: 'Fold in the corn starch and the acid, gently', reference: '{pavlova_cornstarch}g starch, {pavlova_vinegar}g vinegar or lemon juice' },
      { step: 'Shape on a lined tray, raised edges', reference: '{pavlova_diameter} cm disc' },
      { step: 'Dry in the oven, fan off', reference: '{pavlova_oven} °C, {pavlova_hours} hours' },
      { step: 'Cool in the oven, door ajar', reference: 'Oven off; crisp shell, centre still soft' },
      { step: 'Store or assemble', reference: 'Airtight with desiccant up to {pavlova_ahead} day; top at service with {pavlova_cream} ml cream and {pavlova_fruit}g fruit' },
    ],
    checks: [
      { see: 'Foam will not reach volume', check: 'Grease on the bowl or whisk, or warm aquafaba', fix: 'Degrease everything; chill to {pavlova_chill} °C' },
      { see: 'Meringue not glossy, grains between the fingers', check: 'Sugar added too fast', fix: 'Gradually, while whipping' },
      { see: 'Shell cracks as it cools', check: 'Cooled too fast', fix: 'Oven off, door ajar, cool inside' },
      { see: 'Soft all the way through', check: 'Under-dried', fix: 'The full {pavlova_hours} hours at {pavlova_oven} °C' },
      { see: 'Dry right through, no soft centre', check: 'Starch and acid left out, or over-dried', fix: 'Fold them in; pull while the centre still gives' },
      { see: 'Base softens after assembly', check: 'Topped too early', fix: 'Cream and fruit just before service' },
    ],
    sections: [
      {
        id: 'use', title: 'How to use the sheet',
        html: `<p>Fill the last column with your own batch before you start: the number of bases, the aquafaba weighed, the sugar, the oven you use. Then tick each step as its state is reached, not as it is done. A step whose state is not there (peaks that fold, a meringue that is glossy) is the moment to stop and check, before the next one hides it.</p>`,
      },
      {
        id: 'station', title: 'The station before the oven',
        html: `<p>On the bench: the aquafaba in the fridge at {pavlova_chill} °C, the sugar weighed, the starch and the acid measured in a small bowl, the trays lined and a {pavlova_diameter} cm circle drawn on the parchment. The whipped meringue does not wait, so nothing is prepared after the whisk starts. The oven is at {pavlova_oven} °C with the fan off before the shaping.</p>
<p>For the quantities of a larger run, <a href="{pavlova_calc_href}">scale the base with the calculator</a>; <a href="{pavlova_href}">the pavlova guide</a> has the format choice for the kitchen.</p>`,
      },
      {
        id: 'good', title: 'What a good base looks like at each step',
        html: `<p>Soft peaks that lean, then firm peaks that stand. After the sugar, a meringue that is glossy and dense, with no grains when rubbed between two fingers. After the fold, the same meringue, barely moved. Out of the oven, a shell that is dry and pale and sounds hollow when tapped, over a centre that gives slightly under the finger. Cooled, a base with no crack across the top. Assembled, a crisp edge under the cream right up to service.</p>`,
      },
    ],
    faq: [
      { q: 'When do I add the sugar to the pavlova meringue?', a: 'After the firm peaks, gradually while whipping, until the meringue is glossy, stiff and dense.' },
      { q: 'How do I know the base is dried enough?', a: 'The shell is dry and crisp outside after {pavlova_hours} hours at {pavlova_oven} °C, and the centre still gives slightly. Cool it in the oven with the door ajar.' },
      { q: 'Can I use the sheet with powder?', a: 'Yes. Make up {pavlova_powder}g of powder with {pavlova_water} ml of water per base, chill it, and start at step 1.' },
      { q: 'How far ahead can I bake the bases?', a: '{pavlova_ahead} day, stored airtight with a desiccant pouch. Assemble at service.' },
    ],
    links: ['pavlova', 'pavlova_calc', 'p_pavlova'],
  },
  p_pavlova: {
    title: 'Can You Make a Pavlova With Aquafaba Powder?',
    h1: 'Can you make a pavlova with aquafaba powder?',
    crumb: 'Powder for pavlova',
    eyebrow: 'Powder by application',
    description: 'Yes. {pavlova_powder}g of aquafaba powder with {pavlova_water} ml of water replaces the {pavlova_whites} egg whites of a pavlova base. The make-up, the soft centre, and the bases a pouch gives.',
    lead: 'Yes, and the pavlova is where the powder and the dry store belong together. {pavlova_powder}g of VERY AQUAFABA powder with {pavlova_water} ml of water stands in for the {pavlova_whites} egg whites of one {pavlova_diameter} cm base, and once the base is dried it keeps airtight for {pavlova_ahead} day beside the pouch it came from. For a kitchen that bakes pavlova for a season, a banquet or a weekend, that is the whole argument.',
    sections: [
      {
        id: 'make-up', title: 'From the pouch to the bowl',
        html: `<p>Make up {pavlova_powder}g of powder with {pavlova_water} ml of water, which gives {pavlova_prepared}g of aquafaba, and chill it to {pavlova_chill} °C: the foam is built cold, and the water you made it up with was not. Then the recipe is the liquid one: soft peaks, {pavlova_tartar}g of cream of tartar to firm peaks, {pavlova_sugar}g of caster sugar to a glossy, dense meringue, and the fold of {pavlova_cornstarch}g of corn starch and {pavlova_vinegar}g of vinegar that gives the soft centre.</p>
<p>Shape a {pavlova_diameter} cm disc, dry at {pavlova_oven} °C, fan off, for {pavlova_hours} hours, and cool it in the oven with the door ajar. <a href="{pavlova_href}">The pavlova guide</a> has the full method and the fixes.</p>`,
      },
      {
        id: 'centre', title: 'The soft centre does not come from the format',
        html: `<p>Liquid or powder, the crisp shell over a soft centre comes from the starch and the acid folded in after the sugar, and from pulling the base while the centre still gives. Leave them out and the base dries right through. The powder changes none of that; it only changes what sits on the shelf between oven days.</p>`,
      },
      {
        id: 'pouch', title: 'How many bases does a pouch give?',
        html: `${grid(['Pouch', 'Pavlova bases'], [
  ['{small_pouch_g}g', '{pavlova_batches_30g}'],
  ['{medium_pouch_g}g', '{pavlova_batches_200g}'],
  ['{large_pouch_kg}kg', '{pavlova_batches_3kg}'],
])}
<p>A banquet of ten bases is {ten_bases_powder}g of powder from the {medium_pouch_g}g pouch, baked {pavlova_ahead} day ahead and assembled at service, with no opened litre waiting in a fridge. A counter that sells pavlova most days uses <a href="{tetrapak_href}">the liquid</a> instead: {pavlova_batches_1l} bases per Tetrapak, inside {opened_days} days.</p>`,
      },
      {
        id: 'wrong', title: 'When the base goes wrong with powder',
        html: `${grid(['What you see', 'Why', 'Fix'], [
  ['Foam will not reach volume', 'Made-up aquafaba still warm, or grease in the bowl', 'Chill it to {pavlova_chill} °C; degrease everything'],
  ['Nothing happens in the bowl', 'Powder added dry to the sugar', 'Make it up with {pavlova_water} ml of water first'],
  ['Shell cracks as it cools', 'Cooled too fast', 'Oven off, door ajar, cool inside'],
  ['Dry right through', 'Starch and acid left out, or over-dried', 'Fold them in; pull while the centre still gives'],
  ['Base softens in storage', 'It pulls moisture from the air', 'Airtight with a desiccant pouch, next to the powder'],
])}`,
      },
    ],
    faq: [
      { q: 'How much aquafaba powder for a pavlova?', a: '{pavlova_powder}g of powder with {pavlova_water} ml of water for one {pavlova_diameter} cm base, which replaces {pavlova_whites} egg whites.' },
      { q: 'Do I chill the made-up aquafaba before whipping?', a: 'Yes, to {pavlova_chill} °C. The foam is built cold, and the water you made it up with was at room temperature.' },
      { q: 'Does the powder give the same soft centre?', a: 'Yes. The soft centre comes from the starch and the acid folded in after the sugar, and from the drying time, not from the format.' },
      { q: 'How many bases from a 200g pouch?', a: '{pavlova_batches_200g}, at {pavlova_powder}g of powder per base.' },
      { q: 'Can I bake the bases ahead and keep the pouch for the next time?', a: 'Yes. Dried bases keep airtight with a desiccant pouch for {pavlova_ahead} day; the pouch keeps dry and closed until its best-before date.' },
    ],
    links: ['pavlova', 'pavlova_calc', 'powder'],
  },
  dacquoise_calc: {
    title: 'How Much Aquafaba for a Dacquoise? Quantity Calculator',
    h1: 'How much aquafaba for a dacquoise? Quantity calculator',
    crumb: 'Quantity calculator',
    eyebrow: 'Quantity calculator',
    description: 'Scale the almond dacquoise to the frames you bake: aquafaba in liquid or powder with its water, plus the sugars, ground almonds, baking powder and cornflour.',
    lead: 'A dacquoise is a frame recipe, and the frame is what you count: {dacquoise_aquafaba}g of aquafaba, {dacquoise_whites} egg whites, for one, baked for {dacquoise_minutes} minutes at {dacquoise_oven} °C. Type the number of frames and the calculator gives the aquafaba in liquid or in powder with its water, and the sugar, icing sugar, ground almonds, baking powder and cornflour to go with it.',
    sections: [
      {
        id: 'scales', title: 'What scales and what does not',
        html: `<p>The six ingredients scale with the frames. The oven does not: every frame bakes for {dacquoise_minutes} minutes at {dacquoise_oven} °C, and doubling the ingredients never doubles the time. The aquafaba is whipped cold whatever the batch, and the dry ingredients go in only once the meringue holds.</p>
<p>In powder the frame is {dacquoise_powder}g made up with {dacquoise_water} ml of water, which gives {dacquoise_prepared}g of aquafaba, a little more than the {dacquoise_aquafaba}g the recipe weighs: make up the batch, then weigh the dose from it.</p>`,
      },
      {
        id: 'packs', title: 'Frames per pack',
        html: `${grid(['Pack', 'Dacquoise frames'], [
  ['{liquid_1l_label}', '{dacquoise_batches_1l}'],
  ['{small_pouch_g}g powder pouch', '{dacquoise_batches_30g}'],
  ['{medium_pouch_g}g powder pouch', '{dacquoise_batches_200g}'],
  ['{large_pouch_kg}kg powder pouch', '{dacquoise_batches_3kg}'],
])}
<p>At {dacquoise_aquafaba}g a frame the litre goes quickly, {dacquoise_batches_1l} frames inside its {opened_days} days, which suits a section that bakes dacquoise through the week. For an occasional entremets, the pouch keeps dry and closed between frames.</p>`,
      },
      {
        id: 'example', title: 'A worked example: the double batch',
        html: `<p>Two frames take {dacquoise_double_aquafaba}g of liquid aquafaba, or {dacquoise_double_powder}g of powder with {dacquoise_double_water} ml of water, with the almonds, sugars, baking powder and cornflour doubled alongside. The oven stays at {dacquoise_oven} °C for {dacquoise_minutes} minutes per frame. <a href="{dacquoise_href}">The dacquoise recipe</a> has the double-batch table and the method; <a href="{dacquoise_process_href}">the process sheet</a> puts each step beside its reference.</p>`,
      },
    ],
    faq: [
      { q: 'How much aquafaba for one dacquoise frame?', a: '{dacquoise_aquafaba}g of liquid VERY AQUAFABA, about {dacquoise_whites} egg whites, or {dacquoise_powder}g of powder with {dacquoise_water} ml of water.' },
      { q: 'Does the baking time change with two frames?', a: 'No. Each frame bakes for {dacquoise_minutes} minutes at {dacquoise_oven} °C; two frames are two trays at the same setting.' },
      { q: 'How many frames does a 1L Tetrapak make?', a: '{dacquoise_batches_1l}, at {dacquoise_aquafaba}g per frame.' },
      { q: 'Can I scale the almonds and sugars the same way?', a: 'Yes. All six ingredients scale with the frames; only the oven and the time stay fixed.' },
    ],
    links: ['dacquoise', 'dacquoise_process', 'powder'],
  },
  dacquoise_process: {
    title: 'How to Make an Aquafaba Dacquoise: the Step by Step Sheet',
    h1: 'How to make an aquafaba dacquoise: the step by step sheet',
    crumb: 'Process sheet',
    eyebrow: 'Process sheet',
    description: 'Every step of the aquafaba dacquoise with its reference value and a column for your own batch, then the checks: what you see, why, the fix. Ready to print.',
    lead: 'The dacquoise is a meringue that has to carry {dacquoise_ground_almonds}g of ground almonds, {dacquoise_icing_sugar}g of icing sugar and the cornflour without losing its air, and the order of the steps is what protects it. This sheet lists them with the reference values, {dacquoise_aquafaba}g of aquafaba, {dacquoise_sugar}g of sugar, {dacquoise_minutes} minutes at {dacquoise_oven} °C, with a column for your own batch. Print it for the station.',
    powderNote: 'Powder: make up {dacquoise_powder}g with {dacquoise_water} ml of water, chill it and weigh {dacquoise_aquafaba}g from it before step 1. From there the sheet is the same.',
    steps: [
      { step: 'Pour the chilled aquafaba into the mixer bowl and whip until it stiffens', reference: '{dacquoise_aquafaba}g, clean grease-free bowl' },
      { step: 'Add the sugar to make a meringue', reference: '{dacquoise_sugar}g' },
      { step: 'Once the meringue holds, add the dry ingredients little by little', reference: '{dacquoise_ground_almonds}g ground almonds, {dacquoise_icing_sugar}g icing sugar, {dacquoise_baking_powder}g baking powder, {dacquoise_cornflour}g cornflour' },
      { step: 'Mix to combine', reference: 'Just combined, the air kept' },
      { step: 'Pour into the frame or ring', reference: 'Frame or ring' },
      { step: 'Bake', reference: '{dacquoise_minutes} minutes at {dacquoise_oven} °C' },
    ],
    checks: [
      { see: 'Meringue will not stiffen', check: 'Grease in the bowl, or aquafaba too warm', fix: 'Degrease everything; whip it chilled' },
      { see: 'Batter loose after the dry ingredients', check: 'Added before the meringue held, or all at once', fix: 'Stiff meringue first, then little by little' },
      { see: 'Dense, flat dacquoise', check: 'Mixed too long after the almonds went in', fix: 'Mix just to combine' },
      { see: 'Soft centre, pale top', check: 'Under-baked, or two frames given one frame\'s time', fix: 'The full {dacquoise_minutes} minutes at {dacquoise_oven} °C per frame' },
      { see: 'Dry, hard edges', check: 'Over-baked', fix: 'Pull at {dacquoise_minutes} minutes; check the oven' },
    ],
    sections: [
      {
        id: 'use', title: 'How to use the sheet',
        html: `<p>Fill the last column with your own batch before you start: the number of frames, the aquafaba weighed, the oven you use. Tick each step as its state is reached. The one state that matters most is the meringue holding before the dry ingredients go in; if it is not there, stop and check the bowl and the temperature.</p>`,
      },
      {
        id: 'station', title: 'The station before the oven',
        html: `<p>On the bench: the aquafaba chilled, the sugar weighed, the ground almonds, icing sugar, baking powder and cornflour weighed together and ready to add little by little, the frame or ring on a lined tray, the oven at {dacquoise_oven} °C. The meringue does not wait for the almonds to be weighed.</p>
<p>For a larger run, <a href="{dacquoise_calc_href}">scale the frame with the calculator</a>; <a href="{dacquoise_href}">the dacquoise recipe</a> has the method and the double-batch table.</p>`,
      },
      {
        id: 'good', title: 'What a good dacquoise looks like at each step',
        html: `<p>A meringue that stiffens and holds on the whisk before the sugar, glossy after it. A batter that stays airy as the almonds go in, mixed just until no dry patch remains. A frame filled level. Out of the oven after {dacquoise_minutes} minutes, a top that is set and lightly coloured over a centre that is baked through but still tender, the almond flavour clean.</p>`,
      },
    ],
    faq: [
      { q: 'When do the almonds go into the dacquoise?', a: 'Only once the meringue holds, and little by little, mixed just to combine.' },
      { q: 'How long does a dacquoise bake?', a: '{dacquoise_minutes} minutes at {dacquoise_oven} °C, in a frame or ring. Two frames bake for the same time on two trays.' },
      { q: 'Can I use the sheet with powder?', a: 'Yes. Make up {dacquoise_powder}g with {dacquoise_water} ml of water, chill it, weigh {dacquoise_aquafaba}g from it and start at step 1.' },
      { q: 'Why did my dacquoise come out dense?', a: 'Usually the dry ingredients went in before the meringue held, or the batter was mixed too long after they went in.' },
    ],
    links: ['dacquoise', 'dacquoise_calc', 'powder'],
  },
  pack_finder: {
    title: 'Which VERY AQUAFABA Pack for Your Week? Pack Finder',
    h1: 'Which VERY AQUAFABA pack for your week? Pack finder',
    crumb: 'Pack finder',
    eyebrow: 'Tool',
    description: "Type the egg whites you replace in 3 to 4 days and in a week, and the pack finder names the VERY AQUAFABA pack that fits, with the reason and the dose.",
    lead: 'The pack is not chosen by the size of your batches but by how fast you use it once it is open. An opened litre of liquid keeps {opened_days} days at {opened_temp} °C, and a {liquid_1l_label} is {liquid_1l_whites} egg whites; a powder pouch keeps dry and closed until its best-before date. So the finder asks two numbers, the egg whites you replace in {opened_days} days and in a week, and names the pack.',
    sections: [
      { type: 'pack-finder', id: 'finder', title: 'Find your pack' },
      {
        id: 'rule', title: 'How the finder decides',
        html: `${grid(['Egg whites in 3 to 4 days', 'Egg whites in a week', 'Pack'], [
  ['{liquid_1l_whites} or more', 'any', '{liquid_1l_label}: the opened pack is used in time'],
  ['{liquid_10l_whites} or more', 'any', '{liquid_10l_label}: continuous use, quoted for your project'],
  ['Fewer than {liquid_1l_whites}', 'up to {powder_30g_whites}', '{small_pouch_g}g powder pouch: the trial size'],
  ['Fewer than {liquid_1l_whites}', '{powder_30g_whites} to {powder_200g_whites}', '{medium_pouch_g}g powder pouch: dry and closed between batches'],
  ['Fewer than {liquid_1l_whites}', 'more than {powder_200g_whites}', '{large_pouch_kg}kg powder pouch: repeated runs, quoted for your project'],
])}
<p>The dose does not change with the pack: {white_liquid}g of liquid or {white_powder}g of powder with {white_water} ml of water per egg white, {egg_liquid}g of liquid per whole egg. The finder prints the week's dose in both formats so you can check it against your recipes.</p>`,
      },
      {
        id: 'count', title: 'How to count your egg whites',
        html: `<p>Take a normal week and add up the egg whites across the preparations you would move to aquafaba: {meringue_eggs} for a batch of meringue, {chocolate_mousse_eggs} for a mousse, {macarons_eggs} for a batch of macaron shells, one per sour at {cocktails_dose} ml. Then look at the busiest {opened_days} days of that week: that is the first number. <a href="{supply_href}">Planning the stock from the egg-white count</a> turns the week into an order.</p>
<p>If the answer sits on a line, start with the smaller pack. A pouch that waits is no loss; an opened litre that waits is.</p>`,
      },
    ],
    faq: [
      { q: 'How do I know which aquafaba pack to buy?', a: 'Count the egg whites you replace in {opened_days} days. {liquid_1l_whites} or more, the liquid is used in time; fewer, the powder keeps dry and closed between batches.' },
      { q: 'Why does the finder ask about 3 to 4 days?', a: 'Because that is how long an opened pack of liquid keeps, at {opened_temp} °C. The pack is chosen by how fast it is used once open.' },
      { q: 'What if I replace very few egg whites?', a: 'The {small_pouch_g}g pouch, {powder_30g_whites} egg whites made up by the batch. The rest stays dry until the next time.' },
      { q: 'Which packs are quoted rather than sold online?', a: 'The {liquid_10l_label}, the {liquid_1t_label} and the {large_pouch_kg}kg pouch. Send your country, application and volume and we reply with the quote.' },
    ],
    links: ['supply', 'liquid', 'powder'],
  },
  p_meringue: {
    title: 'Can You Make Meringue With Aquafaba Powder?',
    h1: 'Can you make meringue with aquafaba powder?',
    crumb: 'Powder for meringue',
    eyebrow: 'Powder by application',
    description: 'Yes. {meringue_powder}g of aquafaba powder with {meringue_water} ml of water replaces the {meringue_eggs} egg whites of a meringue batch. The make-up, the whip, and how many batches a pouch gives.',
    lead: 'Yes. Meringue is the purest test of a foam, and the powder passes it once it is made up: {meringue_powder}g of VERY AQUAFABA powder with {meringue_water} ml of water stands in for the {meringue_eggs} egg whites of one batch, whipped with {meringue_sugar}g of sugar into about {meringue_yield} small meringues. The pouch lives in the dry store next to the finished meringues, which is the point of the powder for a kitchen that bakes them in runs rather than every day.',
    sections: [
      {
        id: 'make-up', title: 'From the pouch to the bowl',
        html: `<p>The powder is not a dry ingredient for the meringue. Make it up first: {meringue_powder}g of powder, {meringue_water} ml of water, which gives {meringue_prepared}g of aquafaba for the batch. Then chill it to {meringue_chill} °C, because the foam is built cold, and whip it in a clean, grease-free bowl to soft peaks, about {meringue_whip} minutes on high speed.</p>
<p>From there the recipe is the liquid one: {meringue_sugar}g of caster sugar one tablespoon at a time at medium speed, back to high speed until glossy and stiff, pipe straight away and dry at {meringue_bake} °C, fan off, for {meringue_bake_time} hours. <a href="{meringue_href}">The meringue guide</a> has the full method and the fixes.</p>`,
      },
      {
        id: 'pouch', title: 'How many batches does a pouch give?',
        html: `${grid(['Pouch', 'Meringue batches', 'About'], [
  ['{small_pouch_g}g', '{small_meringue_batches}', '{three_batches_meringues} meringues'],
  ['{medium_pouch_g}g', '{meringue_batches_200g}', '{medium_pouch_meringues} meringues'],
  ['{large_pouch_kg}kg', '{meringue_batches_3kg}', 'a production run'],
])}
<p>Each row assumes the whole pouch goes to meringue. The {small_pouch_g}g pouch is <a href="{small_pouch_href}">the trial size</a>; the {medium_pouch_g}g pouch covers <a href="{pouch_href}">a season of oven days</a>.</p>`,
      },
      {
        id: 'why', title: 'Why the powder suits meringue',
        html: `<p>Meringue is planned oven time, never à la minute, and the finished product lives in dry storage. A restaurant with a seasonal meringue dessert, or a kitchen with no chilled space to spare, keeps the pouch on the same dry shelf as the meringues and makes up a batch when the oven day comes. An opened litre of liquid would have to be used in {opened_days} days; the opened pouch keeps dry and closed until the best-before date.</p>
<p>A pastry section piping meringue most days is the other case: there the liquid pours cold from the pack, and <a href="{tetrapak_href}">a {liquid_1l_label} makes {meringue_batches_1l} batches</a> inside the window.</p>`,
      },
      {
        id: 'wrong', title: 'When the foam goes wrong with powder',
        html: `${grid(['What you see', 'Why', 'Fix'], [
  ['Foam never reaches full volume', 'Grease on the bowl or whisk', 'Degrease everything before you start'],
  ['Foam builds slowly and stays weak', 'Made-up aquafaba still warm', 'Chill it to {meringue_chill} °C before whipping'],
  ['Nothing happens in the bowl', 'Powder added dry to the sugar', 'Make it up with {meringue_water} ml of water first'],
  ['Syrup beads on the meringues in storage', 'Sugar went in faster than it could dissolve', 'One tablespoon at a time, at medium speed'],
  ['Meringues turn soft and sticky', 'Meringue pulls moisture from the air', 'Store airtight in a dry place, with a desiccant pouch'],
])}`,
      },
    ],
    faq: [
      { q: 'How much aquafaba powder do I need for meringue?', a: '{meringue_powder}g of powder with {meringue_water} ml of water for one batch, which replaces {meringue_eggs} egg whites and makes about {meringue_yield} small meringues with {meringue_sugar}g of sugar.' },
      { q: 'Can I add the powder straight to the sugar?', a: 'No. Make it up with water first, chill it to {meringue_chill} °C, then whip it. Dry powder in the bowl does not foam.' },
      { q: 'How many meringue batches are in a {medium_pouch_g}g pouch?', a: '{meringue_batches_200g} batches, about {medium_pouch_meringues} meringues, if the whole pouch goes to meringue.' },
      { q: 'Does powder meringue dry the same way?', a: 'Yes. Once made up and whipped, the recipe is the liquid one: {meringue_bake} °C, fan off, for {meringue_bake_time} hours, then airtight storage with a desiccant pouch.' },
      { q: 'Liquid or powder for a pastry section?', a: 'Liquid if you pipe meringue most days: a {liquid_1l_label} is {meringue_batches_1l} batches, used inside {opened_days} days. Powder if meringue comes in runs, because the pouch keeps dry and closed between them.' },
    ],
    links: ['p_macarons', 'p_mousse', 'powder'],
  },
  p_mousse: {
    title: 'Can You Make Chocolate Mousse With Aquafaba Powder?',
    h1: 'Can you make chocolate mousse with aquafaba powder?',
    crumb: 'Powder for mousse',
    eyebrow: 'Powder by application',
    description: 'Yes. {chocolate_mousse_powder}g of aquafaba powder with {chocolate_mousse_water} ml of water replaces the {chocolate_mousse_eggs} egg whites of a mousse batch. The temperatures that decide it.',
    lead: 'Yes, and the powder changes nothing about what decides a chocolate mousse, which is temperature. {chocolate_mousse_powder}g of VERY AQUAFABA powder with {chocolate_mousse_water} ml of water replaces the {chocolate_mousse_eggs} egg whites of a batch of about {chocolate_mousse_yield} portions; the couverture is melted to 45 to 50 °C and folded in at {chocolate_mousse_fold_temp} °C. The mousse itself is a cold-chain product, and that is where the pouch earns its place: it keeps on a dry shelf, so the chilled shelves stay free for the portions you just moulded.',
    sections: [
      {
        id: 'make-up', title: 'From the pouch to the bowl',
        html: `<p>Make up {chocolate_mousse_powder}g of powder with {chocolate_mousse_water} ml of water, which gives {chocolate_mousse_prepared}g of aquafaba, and chill it. Melt {chocolate_mousse_chocolate}g of dark couverture to 45 to 50 °C and let it cool to {chocolate_mousse_fold_temp} °C while the aquafaba whips: high speed, clean grease-free bowl, soft peaks in about {chocolate_mousse_whip} minutes, then {chocolate_mousse_sugar}g of sugar to glossy stiff peaks.</p>
<p>Fold the cooled chocolate in by hand, quickly and lightly, and pipe into cups at once. Chill for at least {chocolate_mousse_set_time} hours. <a href="{chocolate_mousse_href}">The mousse guide</a> carries the method and the pre-emulsion for large batches.</p>`,
      },
      {
        id: 'temperature', title: 'The two temperatures that decide it',
        html: `<p>The foam is built cold and the chocolate goes in warm, and the gap between them is the whole technique. Chocolate above {chocolate_mousse_fold_temp} °C melts the foam as it goes in and the mousse collapses; cold aquafaba whips faster and holds more air. With powder there is one more point to hold: the made-up aquafaba has to be chilled before it is whipped, because it was made up with water at room temperature.</p>
<p>Have the chocolate cooled and ready before you whip. A foam that stands waiting for the chocolate loses volume, whichever format it came from.</p>`,
      },
      {
        id: 'pouch', title: 'How many batches does a pouch give?',
        html: `${grid(['Pouch', 'Mousse batches', 'Portions'], [
  ['{small_pouch_g}g', '{small_mousse_batches}', 'about {small_mousse_portions}'],
  ['{medium_pouch_g}g', '{chocolate_mousse_batches_200g}', 'about {medium_mousse_portions}'],
  ['{large_pouch_kg}kg', '{chocolate_mousse_batches_3kg}', 'pre-portioned retail cups'],
])}
<p>Mousse keeps {chocolate_mousse_keep} days in the fridge, so pace decides the format. A patisserie piping cups for the counter every morning empties <a href="{tetrapak_href}">a {liquid_1l_label}</a> inside its {opened_days} days. A restaurant with mousse as a rotating dessert, a few verrines at a time, makes up what the menu needs from <a href="{pouch_href}">the {medium_pouch_g}g pouch</a> and keeps the rest dry between menus. A central kitchen where each outlet whips its own sends a pouch to each site; it survives a quiet week.</p>`,
      },
      {
        id: 'wrong', title: 'When the mousse goes wrong with powder',
        html: `${grid(['What you see', 'Why', 'Fix'], [
  ['Mousse collapses as the chocolate goes in', 'Chocolate above {chocolate_mousse_fold_temp} °C melted the foam', 'Cool it to {chocolate_mousse_fold_temp} °C or lower before folding'],
  ['Weak, slow foam', 'Made-up aquafaba still at room temperature', 'Chill it after making up, before whipping'],
  ['Dense, heavy mousse', 'Over-folding knocked the air out', 'Fold just until combined'],
  ['Foam will not build', 'Grease in the bowl, or sugar added before soft peaks', 'Clean bowl, and sugar only once soft peaks have formed'],
  ['Volume lost before folding', 'The foam stood waiting for the chocolate', 'Have the chocolate cooled and ready before you whip'],
])}`,
      },
    ],
    faq: [
      { q: 'How much aquafaba powder do I need for chocolate mousse?', a: '{chocolate_mousse_powder}g of powder with {chocolate_mousse_water} ml of water for one batch of about {chocolate_mousse_yield} portions, which replaces {chocolate_mousse_eggs} egg whites.' },
      { q: 'At what temperature do I fold in the chocolate?', a: '{chocolate_mousse_fold_temp} °C. Melt it to 45 to 50 °C first, then let it cool. Warmer than that, it melts the foam.' },
      { q: 'Do I chill the made-up powder before whipping?', a: 'Yes. It was made up with water at room temperature, and the foam is built cold. Chill it, then whip.' },
      { q: 'How many mousse batches are in a {medium_pouch_g}g pouch?', a: '{chocolate_mousse_batches_200g} batches, about {medium_mousse_portions} portions, if the whole pouch goes to mousse.' },
      { q: 'How long does the mousse keep?', a: '{chocolate_mousse_keep} days in the fridge, after at least {chocolate_mousse_set_time} hours to set.' },
    ],
    links: ['p_meringue', 'p_macarons', 'powder'],
  },
  p_mayonnaise: {
    title: 'Can You Make Mayonnaise With Aquafaba Powder?',
    h1: 'Can you make mayonnaise with aquafaba powder?',
    crumb: 'Powder for mayonnaise',
    eyebrow: 'Powder by application',
    description: 'Yes. {mayonnaise_powder}g of aquafaba powder with {mayonnaise_water} ml of water holds {mayonnaise_oil}g of oil in a batch of mayonnaise. Why the small dose suits the powder.',
    lead: 'Yes, and mayonnaise is the clearest case for the powder of any recipe on the site. A batch uses very little aquafaba, {mayonnaise_dose}g for {mayonnaise_oil}g of oil, so an opened litre of liquid rarely turns over in its {opened_days} days. In powder that batch is {mayonnaise_powder}g with {mayonnaise_water} ml of water, made up in the vessel you blend in, and a {medium_pouch_g}g pouch holds {mayonnaise_batches_200g} of them on a dry shelf, with no chilled slot and no dated pack on the sauce station.',
    sections: [
      {
        id: 'make-up', title: 'From the pouch to the blender',
        html: `<p>Nothing is whipped. Make up {mayonnaise_powder}g of powder with {mayonnaise_water} ml of water, chill it to {mayonnaise_chill} °C, and put it in a tall, narrow vessel with {mayonnaise_mustard}g of mustard, {mayonnaise_salt}g of salt and {mayonnaise_lemon}g of lemon juice. Start the stick blender and drizzle in {mayonnaise_oil}g of oil in a thin, steady stream, keeping the shear high until the emulsion takes.</p>
<p>Once it thickens, taste and season; too tight, blend in a few grams of cold water. Transfer to a clean container and refrigerate at once. Made hygienically, it keeps up to {mayonnaise_keep} days. <a href="{mayonnaise_href}">The mayonnaise guide</a> has the method and the format table for a kitchen.</p>`,
      },
      {
        id: 'why', title: 'Why the dose makes powder the obvious format',
        html: `<p>At {mayonnaise_dose}g a batch, <a href="{tetrapak_href}">a {liquid_1l_label}</a> makes {mayonnaise_batches_1l} batches, and it has to make them within {opened_days} days of opening. A deli making fresh mayo every service gets there. A restaurant with mayo on one menu dish does not, and the opened litre outlasts its window.</p>
<p>The pouch has no window. Make up a batch, close the pouch, and it keeps dry until the best-before date. It never takes a chilled slot in a cold store already full of finished sauce, and it is one fewer opened, perishable pack to label, log and inspect on the station.</p>`,
      },
      {
        id: 'pouch', title: 'How many batches does a pouch give?',
        html: `${grid(['Pouch', 'Mayonnaise batches', 'About'], [
  ['{small_pouch_g}g', '{small_mayonnaise_batches}', '{small_mayonnaise_kg}kg of mayonnaise'],
  ['{medium_pouch_g}g', '{mayonnaise_batches_200g}', '{medium_mayonnaise_kg}kg of mayonnaise'],
  ['{large_pouch_kg}kg', '{mayonnaise_batches_3kg}', 'a dry sauce base, by the premix'],
])}
<p>A producer blending dry sauce bases is the other end of the same logic: the powder goes into the premix dry, and the {large_pouch_kg}kg pouch is <a href="{large_pouch_href}">the format for repeated runs</a>. A central kitchen making fresh sauce each shift draws liquid by the kilo instead; <a href="{sauces_href}">sauce and dressing production</a> sets the two side by side.</p>`,
      },
      {
        id: 'wrong', title: 'When the emulsion goes wrong with powder',
        html: `${grid(['What you see', 'Why', 'Fix'], [
  ['The emulsion never starts', 'Oil added too fast, or too little shear', 'Thin, steady stream with the blender at full speed'],
  ['Slow, unstable emulsion', 'Made-up aquafaba too warm', 'Chill it to {mayonnaise_chill} °C after making up'],
  ['Too thick to work', 'The emulsion tightened', 'Blend in a few grams of cold water, not more oil'],
  ['Thin result', 'Powder under-dosed, or water over-measured', '{mayonnaise_powder}g with {mayonnaise_water} ml, weighed'],
  ['Unstable on large batches', 'Droplet size not controlled', 'Move to a high-shear blender'],
])}`,
      },
    ],
    faq: [
      { q: 'How much aquafaba powder do I need for mayonnaise?', a: '{mayonnaise_powder}g of powder with {mayonnaise_water} ml of water for one batch, which holds {mayonnaise_oil}g of oil and makes about {mayonnaise_yield}g.' },
      { q: 'Do I whip the aquafaba for mayonnaise?', a: 'No. It is emulsified, not whipped: the made-up aquafaba goes in a tall vessel with the seasonings and the oil is blended in as a thin stream.' },
      { q: 'How many batches of mayonnaise from a {medium_pouch_g}g pouch?', a: '{mayonnaise_batches_200g} batches, about {medium_mayonnaise_kg}kg of mayonnaise, if the whole pouch goes to mayonnaise.' },
      { q: 'Why is powder better than liquid for mayonnaise?', a: 'Because the dose is so small. A litre of liquid makes {mayonnaise_batches_1l} batches and has to make them in {opened_days} days; the pouch keeps dry and closed until its best-before date, with nothing to date on the station.' },
      { q: 'How long does aquafaba mayonnaise keep?', a: 'Up to {mayonnaise_keep} days in the fridge, made hygienically and refrigerated at once.' },
    ],
    links: ['p_baking', 'sauces', 'powder'],
  },
  p_macarons: {
    title: 'Can Aquafaba Powder Replace Egg Whites in Macarons?',
    h1: 'Can aquafaba powder replace egg whites in macarons?',
    crumb: 'Powder for macarons',
    eyebrow: 'Powder by application',
    description: 'Yes. {macarons_powder}g of aquafaba powder with {macarons_water} ml of water replaces the {macarons_eggs} egg whites of a macaron batch. Why it is not a dry mix, and the humidity rule.',
    lead: 'Yes, once the powder is made up, and that is the one thing it must never skip. Macaron shells ask more of a foam than meringue does: it has to survive the macaronage, folded with almond and icing sugar to a thick, slow ribbon, and then the rest before the oven. {macarons_powder}g of VERY AQUAFABA powder with {macarons_water} ml of water replaces the {macarons_eggs} egg whites of a batch of about {macarons_yield} shells, and from that point the recipe is the one the liquid follows.',
    sections: [
      {
        id: 'not-dry', title: 'The powder is not a dry-mix shortcut',
        html: `<p>The temptation is obvious: the recipe already sifts almond flour and icing sugar, so why not sift the aquafaba powder in with them? Because then there is no foam. The powder has to become aquafaba first, {macarons_powder}g in {macarons_water} ml of water, chilled, and whipped in a clean, grease-free bowl to soft peaks before the cream of tartar and the {macarons_sugar}g of caster sugar go in.</p>
<p>Sift the almond flour and icing sugar and line the trays before you whip, not after. A meringue that stands while the dry mix is prepared deflates before it is piped.</p>`,
      },
      {
        id: 'method', title: 'From the bowl to the tray',
        html: `<p>Fold the dry mix in three additions and stop when the batter runs off the spatula in thick, slow ribbons. Pipe 3 to 4 cm rounds, then rest at room temperature until a dry skin forms, {macarons_rest} minutes depending on humidity. Bake at {macarons_bake} °C, fan off, for {macarons_bake_time} minutes, cool fully on the tray, then pair, fill and refrigerate for {macarons_mature} hours.</p>
<p>Humidity rules the whole thing. In a damp room the skin forms slowly and the shells pull moisture from the air in storage, so the rest is judged by touch, not by the clock. <a href="{macarons_href}">The macaron guide</a> has the full method and the format question for an atelier.</p>`,
      },
      {
        id: 'pouch', title: 'How many batches does a pouch give?',
        html: `${grid(['Pouch', 'Macaron batches', 'Shells'], [
  ['{small_pouch_g}g', '{small_macarons_batches}', 'about {small_macarons_shells}'],
  ['{medium_pouch_g}g', '{macarons_batches_200g}', 'about {medium_macarons_shells}'],
  ['{large_pouch_kg}kg', '{macarons_batches_3kg}', 'a plant-based patisserie line'],
])}
<p>A shop baking macarons to order has long gaps between runs, and the pouch covers them: it keeps dry and closed, outside a cold store already full of maturing macarons and ganache. A patisserie piping shells most service days uses <a href="{tetrapak_href}">the liquid</a> instead, cold and ready for the whisk the moment the trays are lined.</p>`,
      },
      {
        id: 'wrong', title: 'When the shells go wrong with powder',
        html: `${grid(['What you see', 'Why', 'Fix'], [
  ['Foam will not reach volume', 'Grease on the bowl or whisk, or powder not made up', 'Degrease everything; make up {macarons_powder}g in {macarons_water} ml first'],
  ['Meringue deflates before piping', 'It stood while the dry mix or trays were prepared', 'Sift and line the trays first, whip last'],
  ['Shells lose their lift', 'Folded past the ribbon stage, or folded roughly', 'Stop at thick, slow ribbons'],
  ['No skin after resting', 'Humid room', 'Rest longer and judge by touch, not the clock'],
  ['Shells weep in storage', 'Sugar not fully dissolved', 'Add the caster sugar gradually'],
])}`,
      },
    ],
    faq: [
      { q: 'How much aquafaba powder replaces the egg whites in macarons?', a: '{macarons_powder}g of powder with {macarons_water} ml of water for one batch of about {macarons_yield} shells, which replaces {macarons_eggs} egg whites.' },
      { q: 'Can I sift the aquafaba powder in with the almond flour?', a: 'No. There would be no foam. Make the powder up with water, chill it and whip it to soft peaks before anything else goes in.' },
      { q: 'How long do the shells rest?', a: '{macarons_rest} minutes at room temperature, until a dry skin forms. In a damp room it takes longer; judge by touch.' },
      { q: 'How many macaron batches are in a {medium_pouch_g}g pouch?', a: '{macarons_batches_200g} batches, about {medium_macarons_shells} shells, if the whole pouch goes to macarons.' },
      { q: 'Liquid or powder for a macaron atelier?', a: 'Liquid if you pipe shells most service days: a {liquid_1l_label} is {macarons_batches_1l} batches inside {opened_days} days. Powder if you bake to order, because the pouch keeps dry and closed between runs.' },
    ],
    links: ['p_meringue', 'p_mousse', 'powder'],
  },
  p_baking: {
    title: 'Can You Bake With Aquafaba Powder?',
    h1: 'Can you bake with aquafaba powder?',
    crumb: 'Powder for baking',
    eyebrow: 'Powder by application',
    description: 'Yes. Make the aquafaba powder up, then weigh {white_liquid}g per egg white or {egg_liquid}g per whole egg from it. How it goes into cakes, cookies and brioche.',
    lead: 'Yes, and baking is where the powder and the liquid are hardest to tell apart. Once made up, {white_powder}g of powder in {white_water} ml of water is {white_total}g of aquafaba with the same water as the liquid, so the hydration of the batter does not change with the format. What changes is the counting: baking has no fixed batch, so you make up a jug and weigh from it, {white_liquid}g per egg white or {egg_liquid}g per whole egg, whipped or unwhipped depending on what the egg was doing.',
    sections: [
      {
        id: 'make-up', title: 'Make up a jug, then weigh the recipe',
        html: `<p>Because a cake is counted in eggs rather than in batches, the practical move is a jug. Ten egg whites of powder, {ten_whites_powder}g in {ten_whites_water} ml of water, gives {ten_whites_total}g of aquafaba: enough for ten egg whites at {white_liquid}g each, or {ten_whites_eggs} whole eggs at {egg_liquid}g each. Weigh what the recipe needs from the jug, chill what will be whipped, and handle the rest as you would the liquid, at {opened_temp} °C for {opened_days} days.</p>
<p><a href="{reconstitution_href}">The reconstitution table</a> gives the powder and water for any other count.</p>`,
      },
      {
        id: 'how', title: 'How the made-up aquafaba goes into each bake',
        html: `${grid(['What you bake', 'How it goes in', 'What it brings'], [
  ['Sponges and génoise', 'Whipped at {baking_chill} °C, then folded in gently and promptly', 'The air'],
  ['Cakes, cookies and muffins', 'Mixed with the sugar before it meets the fat', 'A more stable emulsion'],
  ['Cookies and brownies', 'Added directly, unwhipped', 'Binding and moisture'],
  ['Brioche and sweet rolls', 'Unwhipped, with the liquids of the dough', 'Softness and keeping quality'],
])}
<p>Replacing whole eggs brings more water than the egg did, about {water_aquafaba_pct} percent against {water_egg_pct} percent, whichever format the aquafaba came from. Reduce the other liquids by {reduce_liquids} percent and bake dense cakes through. <a href="{whole_egg_href}">Replacing whole eggs</a> goes through the adjustment per bake; <a href="{baking_href}">the baking guide</a> carries the whole method.</p>`,
      },
      {
        id: 'why', title: 'Why a bakery keeps the pouch',
        html: `<p>A bakery with an egg-free line every day runs on <a href="{tetrapak_href}">the liquid</a>: an opened {liquid_1l_label} is empty well inside its {opened_days} days and already sits at whipping temperature. The pouch is for the kitchen with occasional vegan orders, which makes up what the order needs and keeps the rest dry and closed, and for the chilled shelves committed to creams and fillings, because the pouch lives on a dry rack.</p>
<p>Many bakeries keep both. The conversion is fixed, so one recipe runs on either format, and <a href="{pouch_href}">the {medium_pouch_g}g pouch</a> waits behind the daily line for the irregular orders.</p>`,
      },
      {
        id: 'wrong', title: 'When the bake goes wrong with powder',
        html: `${grid(['What you see', 'Why', 'Fix'], [
  ['Loose, wet batter', 'Whole eggs swapped one for one, water not reduced', 'Reduce the milk or water slightly, or add dry ingredients'],
  ['Wet centre', 'The extra water lengthens the bake', 'Bake fully before you pull it'],
  ['Flat sponge', 'The foam stood waiting, or was folded too hard', 'Fold in promptly and gently'],
  ['Weak foam', 'Made-up aquafaba too warm', 'Chill it to {baking_chill} °C before whipping'],
  ['Gritty crumb', 'Powder added dry to the flour', 'Make it up with water first, then weigh the dose'],
])}`,
      },
    ],
    faq: [
      { q: 'How much aquafaba powder replaces one egg in baking?', a: 'Make the powder up first, {white_powder}g per {white_water} ml of water, then weigh {egg_liquid}g of made-up aquafaba per whole egg or {white_liquid}g per egg white.' },
      { q: 'Can I add the powder dry to the flour?', a: 'No. Dry powder in a batter is not aquafaba. Make it up with water, then weigh the dose from the jug.' },
      { q: 'Does powder change the hydration of my cake?', a: 'No. Made up at {white_powder}g in {white_water} ml, it carries the same water as the liquid. The adjustment is the same for both: reduce the other liquids by {reduce_liquids} percent when replacing whole eggs.' },
      { q: 'Do I whip the aquafaba for a cake?', a: 'Only where the recipe whipped the eggs for air, as in a sponge. For cookies, muffins and brioche it goes in unwhipped.' },
      { q: 'How long does made-up aquafaba keep?', a: 'Treat it as the liquid: {opened_days} days at {opened_temp} °C. Make up what the day needs and keep the rest of the pouch dry.' },
    ],
    links: ['p_mayonnaise', 'whole_egg', 'powder'],
  },
  wholesale: {
    title: 'Aquafaba Wholesale: Bulk Formats for Professional Buyers',
    h1: 'Aquafaba wholesale: bulk formats for professional buyers',
    crumb: 'Wholesale',
    eyebrow: 'For professionals',
    description: 'Buy aquafaba in bulk: the 10L bag-in-box, the 1T IBC and the 3kg powder pouch, what each replaces, how it keeps and what an enquiry returns.',
    lead: 'Once aquafaba is on the order sheet rather than in the trial drawer, the retail packs stop making sense and the question becomes which bulk format fits the line. VERY AQUAFABA has three: the {liquid_10l_label} at {liquid_10l_whites} egg whites, the {liquid_1t_label} at {liquid_1t_whites}, and the {large_pouch_kg}kg powder pouch at {powder_3kg_whites}. All three are quoted for your project rather than sold online. Here is what each one is, how it keeps and what to put in the enquiry.',
    sections: [
      {
        id: 'formats', title: 'The three bulk formats',
        html: `${grid(['Format', 'Egg whites', 'Built for', 'Keeps'], [
  ['<a href="{bib_href}">{liquid_10l_label}</a>', '{liquid_10l_whites}', 'Continuous use: hotel groups, sour bases, beverage lines, foodservice', 'Open: {opened_days} days at {opened_temp} °C'],
  ['<a href="{ibc_href}">{liquid_1t_label}</a>', '{liquid_1t_whites}', 'Established production, dosed by the kilo on a line', 'Open: {opened_days} days at {opened_temp} °C'],
  ['<a href="{large_pouch_href}">{large_pouch_kg}kg powder pouch</a>', '{powder_3kg_whites}', 'Dry premixes, repeated runs, sites without chilled space', 'Dry and closed until the best-before date'],
])}
<p>Unopened, every format keeps at least {unopened_months} months at room temperature. The ratio does not change with the pack: {white_liquid}g of liquid or {white_powder}g of powder with {white_water} ml of water per egg white, {egg_liquid}g of liquid per whole egg.</p>`,
      },
      {
        id: 'which', title: 'Which bulk format for your production?',
        html: `<p>Start from the egg whites you replace in {opened_days} days, because that is the clock an opened liquid pack runs on. If the answer is in the hundreds and the liquid is drawn every shift, the {liquid_10l_label} fits. If it is in the thousands, with aquafaba dosed by the kilo into a continuous process, the {liquid_1t_label} is the format to discuss.</p>
<p>If the use is repeated but not continuous, or the ingredient goes into a dry premix, the {large_pouch_kg}kg pouch avoids the opened-pack clock altogether: you make up what each run needs and the rest stays dry. <a href="{supply_href}">Planning the stock from your egg-white count</a> turns a normal week into that number.</p>`,
      },
      {
        id: 'enquiry', title: 'What the enquiry returns',
        html: `<p>Bulk formats are quoted for your project, in every country. Send your country, what you make and the volume you expect per month, and we reply with the quote, the technical sheet, the minimum order and the lead time for your market. If your line raises handling questions about a format, a connection or a dosing step, name them in the enquiry.</p>
<p>The retail packs stay available alongside: <a href="{where_to_buy_href}">the 1L Tetrapak and the 200g pouch are sold online</a> in the United States, Germany, Austria, France, Switzerland and Canada, which is where a first trial usually starts.</p>`,
      },
      {
        id: 'who', title: 'Who buys in bulk',
        html: `${grid(['Operation', 'Format', 'Why'], [
  ['<a href="{bars_href}">Bar group pouring sours every night</a>', '{liquid_10l_label}', '{cocktails_batches_10l} drinks per pack, in continuous draw'],
  ['<a href="{foodservice_href}">Central kitchen making mayonnaise and sauces</a>', '{liquid_10l_label} or {liquid_1t_label}', 'Drawn by the kilo each shift into the high-shear mixer'],
  ['<a href="{pastry_href}">Plant-based patisserie line</a>', '{liquid_10l_label} or {liquid_1t_label}', 'The feed never stops, and the cold chain belongs to the plant'],
  ['<a href="{industry_href}">Food manufacturer blending dry bases</a>', '{large_pouch_kg}kg pouch', 'It goes into the premix dry'],
])}`,
      },
    ],
    faq: [
      { q: 'Can I buy aquafaba in bulk?', a: 'Yes. VERY AQUAFABA comes in a {liquid_10l_label}, a {liquid_1t_label} and a {large_pouch_kg}kg powder pouch, quoted for your project in every country.' },
      { q: 'How many egg whites does a bulk pack replace?', a: '{liquid_10l_whites} for the {liquid_10l_label}, {liquid_1t_whites} for the {liquid_1t_label} and {powder_3kg_whites} for the {large_pouch_kg}kg pouch, at {white_liquid}g of liquid or {white_powder}g of powder per egg white.' },
      { q: 'How is bulk aquafaba stored?', a: 'Unopened, at least {unopened_months} months at room temperature. Opened liquid keeps {opened_days} days at {opened_temp} °C; opened powder keeps dry and closed until the best-before date.' },
      { q: 'What do I send to get a wholesale quote?', a: 'Your country, what you make and the monthly volume you expect. We reply with the quote, the technical sheet, the minimum order and the lead time.' },
      { q: 'Is there a minimum order for bulk formats?', a: 'It depends on the format and the market, and it comes back with the quote. Send the enquiry with your expected volume and we confirm it.' },
    ],
    links: ['bib', 'ibc', 'large_pouch', 'supply'],
  },
  sauces: {
    title: 'Aquafaba for Sauce and Dressing Production',
    h1: 'Aquafaba for sauce and dressing production',
    crumb: 'Sauces and dressings',
    eyebrow: 'For professionals',
    description: 'Egg-free mayonnaise at production scale: {mayonnaise_dose}g of aquafaba holds {mayonnaise_oil}g of oil, the high-shear method, what a 10L pack makes, and the raw egg it removes.',
    lead: 'An egg-free mayonnaise is the one sauce where aquafaba does the yolk\'s job outright: {mayonnaise_dose}g of chilled VERY AQUAFABA holds {mayonnaise_oil}g of oil under a high-shear blender and makes about {mayonnaise_yield}g, with no egg in the kitchen. That recipe is the base. Aioli, dressings and sauces built on the same emulsion start from it; a sauce thickened by cooking is a different job, so run a test before changing the formula.',
    sections: [
      {
        id: 'base', title: 'The base recipe, scaled to production',
        html: `<p>The published batch is {mayonnaise_dose}g of aquafaba, {mayonnaise_mustard}g of mustard, {mayonnaise_salt}g of salt and {mayonnaise_lemon}g of lemon juice in a tall, narrow vessel, then {mayonnaise_oil}g of oil in a thin, steady stream with the blender at full speed. The oil ratio is {mayonnaise_oil_ratio}, and the aquafaba is used at {mayonnaise_chill} °C: warm aquafaba gives a slow, unstable emulsion.</p>
${grid(['Pack', 'Batches of {mayonnaise_yield}g', 'Mayonnaise'], [
  ['{liquid_1l_label}', '{mayonnaise_batches_1l}', 'about {mayonnaise_kg_1l}kg'],
  ['{liquid_10l_label}', '{mayonnaise_batches_10l}', 'about {mayonnaise_kg_10l}kg'],
  ['{liquid_1t_label}', '{mayonnaise_batches_1t}', 'by the tonne, dosed on the line'],
])}
<p>On large batches the droplet size decides the stability, so the stick blender gives way to a high-shear mixer. <a href="{mayonnaise_href}">The mayonnaise guide</a> carries the method, the fixes and the format table for a kitchen.</p>`,
      },
      {
        id: 'hygiene', title: 'What leaves the sauce station',
        html: `<p>Raw egg leaves it. The emulsion is made cold and never cooked, which with egg yolk means a raw-egg product on the pass and an inspection point in the hygiene records. With aquafaba the sauce carries no egg, the allergen declaration loses one of the major allergens, and the opened pack of liquid is the one dated item to log: {opened_days} days at {opened_temp} °C.</p>
<p>Made hygienically and refrigerated at once, the mayonnaise keeps up to {mayonnaise_keep} days. That figure is the recipe's, not a promise about your process; re-check shelf life after any reformulation.</p>`,
      },
      {
        id: 'format', title: 'Liquid by the kilo, or powder in the premix?',
        html: `${grid(['Your production', 'Format', 'Why'], [
  ['Central kitchen or industrial line making fresh sauce each shift', '{liquid_10l_label} or {liquid_1t_label}', 'Drawn by the kilo straight into the high-shear mixer'],
  ['Deli or sandwich counter making mayo every service', '{liquid_1l_label}', '{mayonnaise_batches_1l} batches per pack, poured at blending temperature'],
  ['Restaurant with mayo on one menu dish', '{medium_pouch_g}g powder pouch', 'An opened litre would outlast its {opened_days} days'],
  ['Producer blending dry sauce bases', '{large_pouch_kg}kg powder pouch', 'It goes into the premix dry'],
])}
<p>Both formats run the same recipe at the same egg-white count. <a href="{foodservice_href}">Aquafaba in foodservice</a> covers the rest of the kitchen; for the bulk packs, <a href="{wholesale_href}">buy aquafaba wholesale</a> and send the volume with the enquiry.</p>`,
      },
      {
        id: 'wrong', title: 'When the emulsion goes wrong',
        html: `${grid(['What you see', 'Why', 'Fix'], [
  ['The emulsion never starts', 'Oil added too fast, or too little shear', 'Thin, steady stream with the blender at full speed'],
  ['Slow, unstable emulsion', 'Aquafaba too warm', 'Use it at {mayonnaise_chill} °C'],
  ['Too thick to work', 'The emulsion tightened', 'Blend in a few grams of cold water, not more oil'],
  ['Unstable on large batches', 'Droplet size not controlled', 'Move to a high-shear blender'],
  ['Shelf life shorter than {mayonnaise_keep} days', 'Hygiene or a slow trip to the fridge', 'Clean container, refrigerate immediately'],
])}`,
      },
    ],
    faq: [
      { q: 'How much aquafaba do I need for mayonnaise at production scale?', a: '{mayonnaise_dose}g per {mayonnaise_oil}g of oil, a ratio of {mayonnaise_oil_ratio}. A {liquid_10l_label} covers {mayonnaise_batches_10l} batches, about {mayonnaise_kg_10l}kg of mayonnaise.' },
      { q: 'Can I make dressings and aioli with aquafaba?', a: 'Any sauce built on the mayonnaise emulsion starts from the published recipe: {mayonnaise_dose}g of aquafaba holds {mayonnaise_oil}g of oil. A sauce thickened by cooking is a different job from an emulsion: test first.' },
      { q: 'How long does aquafaba mayonnaise keep?', a: 'Made hygienically and refrigerated at once, up to {mayonnaise_keep} days. Re-check shelf life for your own process and recipe.' },
      { q: 'Does an egg-free mayonnaise change the hygiene records?', a: 'It removes the raw egg from a cold, uncooked sauce. The opened pack of aquafaba is the item to date: {opened_days} days at {opened_temp} °C for the liquid.' },
      { q: 'Which format suits a sauce line?', a: 'Liquid by the kilo for a line making fresh sauce each shift, the {liquid_10l_label} or {liquid_1t_label}. Powder for a dry sauce base or a kitchen that makes mayonnaise now and then.' },
    ],
    links: ['wholesale', 'catering', 'yolk'],
  },
  catering: {
    title: 'Aquafaba for Catering and Events',
    h1: 'Aquafaba for catering and events',
    crumb: 'Catering and events',
    eyebrow: 'For professionals',
    description: 'Which aquafaba format travels to an event without a cold chain, what to make ahead, and how to size the pack for a pop-up bar or an outside catering job.',
    lead: 'An event kitchen has no walk-in and a pop-up bar has a cool box, so the first question about aquafaba is not the recipe but the cold chain. The answer is the format. Powder travels dry: the {medium_pouch_g}g pouch is {powder_200g_whites} egg whites that keep dry and closed until the best-before date, with no fridge until you make it up on site. Liquid comes along only with a cold chain, because once open it keeps {opened_days} days at {opened_temp} °C.',
    sections: [
      {
        id: 'travel', title: 'What travels without a cold chain',
        html: `${grid(['Format', 'On the road', 'On site'], [
  ['Powder, {small_pouch_g}g, {medium_pouch_g}g or {large_pouch_kg}kg pouch', 'Travels dry, no cold chain', 'Make up what the service needs, chill it, keep the rest dry'],
  ['Liquid, unopened', 'At least {unopened_months} months at room temperature', 'Open it on site, then {opened_days} days at {opened_temp} °C'],
  ['Liquid, opened', 'Only with a cold chain', 'Use within {opened_days} days of opening, at {opened_temp} °C'],
])}
<p>Made-up powder behaves like the liquid from that moment, so the cool box takes over once the water is in. Make up by the service rather than by the day: {white_powder}g of powder with {white_water} ml of water per egg white, and <a href="{reconstitution_href}">the reconstitution table</a> for any count.</p>`,
      },
      {
        id: 'ahead', title: 'What to make ahead, and what to make on site',
        html: `<p>The foam itself does not wait, so whip on site. What can be done ahead is everything around it. For a bar, pre-batch the spirit, the citrus and the syrup in one bottle and add the aquafaba at the shake, never in the batch: {cocktails_dose} ml per drink, {cocktails_batches_1l} drinks per litre. <a href="{cocktails_href}">Shaking cocktails with aquafaba</a> has the method and the pre-batch.</p>
<p>For a dessert table, the meringue is the make-ahead item: baked and dried, it stores airtight at room temperature with a desiccant pouch, so the shells travel and only the assembly happens on site. <a href="{meringue_href}">The meringue method</a> gives the drying time at {meringue_bake} °C.</p>`,
      },
      {
        id: 'size', title: 'Sizing the pouch for one event',
        html: `<p>Count the drinks or the portions, then convert. A pop-up bar expecting 100 sours needs 100 egg whites, which is {hundred_whites_powder}g of powder with {hundred_whites_water_l}L of water, or exactly one {medium_pouch_g}g pouch. A dessert table of {meringue_yield} meringues per batch at {meringue_eggs} egg whites a batch takes {meringue_powder}g of powder per batch.</p>
${grid(['The event', 'Count', 'Powder to pack'], [
  ['100 sours', '100 egg whites', 'one {medium_pouch_g}g pouch'],
  ['3 batches of meringue, about {three_batches_meringues} pieces', '{three_batches_whites} egg whites', '{three_batches_powder}g, from a {small_pouch_g}g pouch'],
  ['A season of events', 'add up the events', 'the {large_pouch_kg}kg pouch, {powder_3kg_whites} egg whites'],
])}
<p>If the event runs from a kitchen with a fridge and the volume is high, the liquid is the easier pour: <a href="{tetrapak_href}">a {liquid_1l_label} makes {cocktails_batches_1l} drinks</a> and goes straight into the tin.</p>`,
      },
      {
        id: 'allergen', title: 'The allergen question at the event',
        html: `<p>A guest who asks about raw egg in the sour or the mousse gets a plain answer: there is none. VERY AQUAFABA contains no eggs, dairy, gluten or soy. Chickpea is not one of the {eu_allergens} allergens EU food information rules require on a label, but anyone with a known chickpea or legume allergy should still avoid it, and the rest of the drink or dish is checked ingredient by ingredient. <a href="{allergen_href}">Answer the allergen question before a guest asks</a>.</p>`,
      },
    ],
    faq: [
      { q: 'Which aquafaba format can I take to an event without a fridge?', a: 'Powder. It travels dry and keeps dry and closed until the best-before date on the pouch. Make it up on site with {white_water} ml of water per {white_powder}g, then chill it.' },
      { q: 'Can I take an opened pack of liquid aquafaba to an event?', a: 'Only with a cold chain. Opened liquid keeps {opened_days} days at {opened_temp} °C. Unopened, it travels at room temperature.' },
      { q: 'How much aquafaba powder do I need for 100 cocktails?', a: 'At {cocktails_dose} ml per drink, 100 drinks use 100 egg whites: {hundred_whites_powder}g of powder with {hundred_whites_water_l}L of water, which is one {medium_pouch_g}g pouch.' },
      { q: 'Can I pre-batch cocktails with aquafaba for an event?', a: 'Pre-batch the spirit, citrus and syrup. Add the aquafaba at the shake, never in the batch, so the foam is made to order.' },
      { q: 'What can I make the day before?', a: 'Meringues: baked and dried, they keep airtight at room temperature with a desiccant pouch. Whip mousse and sours on site.' },
    ],
    links: ['sauces', 'wholesale', 'powder'],
  },
  versus: {
    title: 'Aquafaba or Egg White: Which One for Your Kitchen?',
    h1: 'Aquafaba or egg white: which one for your kitchen?',
    crumb: 'Aquafaba or egg white',
    eyebrow: 'Egg substitutes',
    description: 'Aquafaba against egg white, decided per situation: the dose that matches, where each one wins, and what changes in storage, allergens and raw service.',
    lead: 'If you can whip an egg white, you can whip aquafaba, and {white_liquid}g of it stands in for one white in a meringue, a mousse, a macaron shell or a sour. The two are not the same ingredient, though, and the choice is rarely about the foam. It is about what sits around it: a raw serve, an allergen list, a vegan menu, a fridge full of opened cartons, or a price that moves with the season. Here is the decision per situation, with the figures the site publishes for aquafaba.',
    sections: [
      {
        id: 'decide', title: 'Which one, by situation',
        html: `${grid(['Your situation', 'Pick', 'Why'], [
  ['A vegan or plant-based menu', 'Aquafaba', 'The dish has to be egg-free by definition'],
  ['Foams served raw: sours, mousse, mayonnaise', 'Aquafaba', 'No raw egg white in an uncooked serve'],
  ['Allergen management', 'Aquafaba', 'No eggs, dairy, gluten or soy; the recipe drops one of the major allergens'],
  ['Stock that waits', 'Aquafaba', 'Sealed packs keep at least {unopened_months} months at room temperature; powder keeps dry and closed'],
  ['Egg white is already on the station and the dish is cooked', 'Either', 'The foam does the same job; swap when the reasons above apply'],
  ['A recipe built on yolk richness', 'Test first', 'Aquafaba brings no fat: {yolk_liquid}g plus {yolk_oil}g of oil per yolk, and a cooked custard is a test, not a swap'],
])}`,
      },
      {
        id: 'dose', title: 'The dose that matches',
        html: `<p>Aquafaba is weighed, and three numbers cover every swap: {white_liquid}g for an egg white, {egg_liquid}g for a whole egg, {yolk_liquid}g plus {yolk_oil}g of oil for a yolk. In powder, {white_powder}g with {white_water} ml of water is one egg white. The recipes are written for aquafaba, and the swap from egg white is one to one at these weights.</p>
<p>Replacing whites needs no other change. Replacing whole eggs in a cake does: aquafaba is about {water_aquafaba_pct} percent water against {water_egg_pct} percent for an egg, so <a href="{whole_egg_href}">reduce the other liquids by {reduce_liquids} percent</a>.</p>`,
      },
      {
        id: 'technique', title: 'What changes at the whisk',
        html: `<p>Less than you would think. Both whip cold, in a clean, grease-free bowl, to soft peaks before the sugar and to stiff peaks after it. Aquafaba is chilled to {meringue_chill} °C and takes about {meringue_whip} minutes on high speed to soft peaks; the failure points are the same as with egg: grease, warmth, sugar too early or too fast, a foam left waiting. <a href="{whip_href}">How to whip aquafaba</a> gives the check at each step.</p>
<p>In a cocktail the dry shake does the whipping: {cocktails_dose} ml per drink, measured with a jigger, and the head is firm enough to carry bitters. The flavour stays with the spirit, the citrus and the syrup.</p>`,
      },
      {
        id: 'around', title: 'What changes around the recipe',
        html: `${grid(['', 'Aquafaba', 'What it means for you'], [
  ['Unopened', 'At least {unopened_months} months at room temperature', 'Stock waits in the dry store'],
  ['Opened liquid', '{opened_days} days at {opened_temp} °C, or frozen in portions for {freeze_months} months', 'Count what you use in {opened_days} days; powder for the rest'],
  ['Allergens', 'No eggs, dairy, gluten or soy', 'One major allergen leaves the formula; the rest of the dish is still checked'],
  ['Raw service', 'No raw egg', 'Sours, mousse and mayonnaise served without the raw-egg point in the records'],
  ['Price', 'Stable', 'Egg prices move with the season and the market'],
])}
<p>Where that leaves the choice: <a href="{liquid_href}">the liquid</a> for kitchens that whip every day, <a href="{powder_href}">the powder</a> for the ones that whip now and then, and egg white where neither reason above applies.</p>`,
      },
    ],
    faq: [
      { q: 'Is aquafaba as good as egg white for meringue?', a: 'It does the same job in the recipes on this site: {meringue_dose}g of aquafaba with {meringue_sugar}g of sugar makes about {meringue_yield} meringues. The test is your own batch.' },
      { q: 'How much aquafaba replaces one egg white?', a: '{white_liquid}g of liquid, or {white_powder}g of powder made up with {white_water} ml of water.' },
      { q: 'Does aquafaba taste different from egg white?', a: 'In the pack it has a light roasted note from the cooking of the chickpeas. Shaken into a drink it disappears; in a dessert, taste the first batch.' },
      { q: 'Why switch from egg white to aquafaba?', a: 'For a vegan menu, for foams served raw without raw egg, to drop an allergen, for stock that keeps {unopened_months} months unopened, and for a price that does not move with the egg market.' },
      { q: 'When should I keep using egg white?', a: 'When the dish is cooked, egg is already on the station and none of the reasons above applies. The two foams do the same job; the choice is about what sits around the recipe.' },
    ],
    links: ['whole_egg', 'yolk', 'before'],
  },
  composition: {
    title: "What's in VERY AQUAFABA? Ingredients, Labels and Dates",
    h1: "What's in VERY AQUAFABA? Ingredients, labels and dates",
    crumb: 'Composition',
    eyebrow: 'Facts and figures',
    description: 'What VERY AQUAFABA is made of, what the label declares, how long a pack keeps before and after opening, and what one pack replaces, in one place.',
    lead: 'Turn the pack around and the ingredient list is two words long: water and chickpeas. That is the whole of VERY AQUAFABA, liquid or powder, with no additives and no preservatives. What the label says, what it does not, how long a pack keeps and what each pack replaces, so you can answer before a guest, a buyer or an auditor asks.',
    sections: [
      {
        id: 'ingredients', title: 'What is it made of?',
        html: `<p>VERY AQUAFABA is chickpea aquafaba: the water in which chickpeas have been cooked, concentrated so that it foams, binds and emulsifies the way an egg white does. The liquid lists water and chickpeas. The powder is the same aquafaba dried, so the list does not change, and you make it up with water before use.</p>
<p>It contains no eggs, dairy, gluten or soy, and nothing is added to make it foam. In the pack it has a light roasted note from the cooking of the chickpeas; once shaken into a drink it disappears, and the flavour stays with the spirit, the citrus and the syrup.</p>`,
      },
      {
        id: 'label', title: 'What does the label declare?',
        html: `<p>The label declares the two ingredients and no allergen from the list EU food information rules require. Chickpea is not one of the {eu_allergens} allergens covered by EU mandatory allergen labelling, but chickpea or legume allergy can still exist, and anyone with a known chickpea or legume allergy should avoid the product. <a href="{allergen_href}">How the allergen question is answered behind a bar</a> applies to a kitchen too.</p>
<p>"Vegan" and "allergen-free" describe the aquafaba itself. A finished dish or drink still has to be checked ingredient by ingredient, so <a href="{vegan_href}">vegan and allergen information answer different questions</a>.</p>`,
      },
      {
        id: 'dates', title: 'How long does a pack keep?',
        html: `<p>Unopened, both formats keep at least {unopened_months} months at room temperature. Each pack prints its own best-before date, and that date is the one to work from; we do not publish the dates of current lots, because they change with every production run.</p>
<p>Once opened, the two formats part ways. Liquid is kept at {opened_temp} °C and used within {opened_days} days. Powder is kept dry and closed and used by the best-before date on the pouch. Opened liquid can also be frozen at {freeze_temp} °C for up to {freeze_months} months, in portions of {freeze_portion_min} to {freeze_portion_max}g, and never refrozen; <a href="{storage_href}">how to store and freeze aquafaba</a> has the detail.</p>`,
      },
      {
        id: 'equivalence', title: 'What does one pack replace?',
        html: `<p>Every pack is counted in egg whites, at {white_liquid}g of liquid or {white_powder}g of powder with {white_water} ml of water per egg white. A whole egg counts as {egg_liquid}g of liquid.</p>
${grid(['Pack', 'Egg whites'], [
  ['{liquid_1l_label}', '{liquid_1l_whites}'],
  ['{liquid_10l_label}', '{liquid_10l_whites}'],
  ['{liquid_1t_label}', '{liquid_1t_whites}'],
  ['{small_pouch_g}g pouch', '{powder_30g_whites}'],
  ['{medium_pouch_g}g pouch', '{powder_200g_whites}'],
  ['{large_pouch_kg}kg pouch', '{powder_3kg_whites}'],
])}
<p>The same ratio runs through every recipe on the site, so <a href="{liquid_href}">the liquid</a> and <a href="{powder_href}">the powder</a> are interchangeable at the same egg-white count. <a href="{products_href}">Compare the packs</a> when you know how many egg whites a week you replace.</p>`,
      },
    ],
    faq: [
      { q: 'What is VERY AQUAFABA made of?', a: 'Water and chickpeas, with no additives and no preservatives. The powder is the same aquafaba dried. It contains no eggs, dairy, gluten or soy.' },
      { q: 'Does VERY AQUAFABA contain any of the EU allergens?', a: 'No. Chickpea is not one of the {eu_allergens} allergens EU food information rules require on a label. Anyone with a known chickpea or legume allergy should still avoid it.' },
      { q: 'Is there a best-before date on the pack?', a: 'Yes, each pack prints its own. Unopened, both formats keep at least {unopened_months} months at room temperature; the printed date is the one to work from.' },
      { q: 'How long does it keep once opened?', a: 'Liquid keeps {opened_days} days at {opened_temp} °C, or {freeze_months} months frozen at {freeze_temp} °C in portions. Powder keeps dry and closed until the best-before date on the pouch.' },
      { q: 'Does aquafaba taste of chickpeas?', a: 'In the pack it has a light roasted note from the cooking of the chickpeas. Shaken into a drink it disappears; the foam carries no taste of its own.' },
    ],
    links: ['before', 'choose', 'vegan'],
  },
  before: {
    title: 'What to Know Before You Use Aquafaba',
    h1: 'What to know before you use aquafaba',
    crumb: 'Before you use it',
    eyebrow: 'Facts and figures',
    description: 'Five things to know before a first batch with aquafaba: the opened-pack clock, the water it brings, the roasted note, the whipping temperature and the powder.',
    lead: 'Aquafaba replaces an egg white in a meringue, a sour or a mousse without changing the recipe around it, and {white_liquid}g does the job of one white. It is still a different ingredient from an egg, and five things decide whether the first batch comes out as planned: how long an opened pack keeps, the water it brings to a cake, the note it has in the pack, the temperature it whips at and what the powder needs before it goes in the bowl.',
    sections: [
      {
        id: 'clock', title: 'An opened pack is on the clock',
        html: `<p>Unopened, a pack keeps at least {unopened_months} months at room temperature. Once open, liquid is kept at {opened_temp} °C and used within {opened_days} days. That is the first thing to put next to your plan: a {liquid_1l_label} is {liquid_1l_whites} egg whites, so the question is whether you will use that many in {opened_days} days.</p>
<p>If not, two ways out. Freeze the rest at {freeze_temp} °C in portions of {freeze_portion_min} to {freeze_portion_max}g for up to {freeze_months} months, thaw it in the fridge, stir it until even and never refreeze it. Or work from <a href="{powder_href}">the powder</a>, which keeps dry and closed until the best-before date and is made up by the batch.</p>`,
      },
      {
        id: 'water', title: 'It brings more water than an egg',
        html: `<p>Replacing egg whites in a meringue or macaron shell needs no adjustment. Replacing whole eggs in a cake does: aquafaba is about {water_aquafaba_pct} percent water against {water_egg_pct} percent for an egg, so at {egg_liquid}g per egg the batter gets wetter.</p>
<p>Reduce the other liquids by {reduce_liquids} percent and bake dense cakes through. <a href="{whole_egg_href}">Replacing whole eggs</a> walks through the adjustment per type of bake.</p>`,
      },
      {
        id: 'note', title: 'It has a note in the pack',
        html: `<p>Straight from the pack, VERY AQUAFABA carries a light roasted note from the cooking of the chickpeas. Shaken into a drink it disappears: the foam carries no taste of its own, and the flavour stays with the spirit, the citrus and the syrup.</p>
<p>In a dessert, taste your first batch before you scale it. The site's recipes are built to carry it, and the meringue, the mousse and the macaron shell all pair it with sugar and either chocolate or almond.</p>`,
      },
      {
        id: 'temperature', title: 'It whips cold',
        html: `<p>Cold aquafaba whips faster and holds more air. Chill it to {meringue_chill} °C before whipping, and use a clean, grease-free bowl: grease on the bowl or the whisk is the usual reason a foam never reaches full volume. Soft peaks take about {meringue_whip} minutes on high speed.</p>
<p>Whipped foam does not wait. Have the sugar, the chocolate or the trays ready before you start, and pipe or fold straight after stiff peaks. <a href="{whip_href}">How to whip aquafaba</a> gives the check at each stage.</p>`,
      },
      {
        id: 'powder', title: 'The powder is made up first',
        html: `<p>The powder is not a dry-mix shortcut. Make it up before use: {white_powder}g of powder with {white_water} ml of water for each egg white gives {white_total}g of aquafaba, which then behaves like the liquid, including the chill before whipping. <a href="{reconstitution_href}">The reconstitution table</a> gives the quantities from one egg white upward.</p>
${grid(['What to know', 'Why it matters', 'What to do'], [
  ['Opened liquid keeps {opened_days} days', 'A pack is {liquid_1l_whites} egg whites', 'Count your egg whites, freeze the rest, or use powder'],
  ['More water than an egg', 'Whole-egg bakes get wetter', 'Reduce other liquids by {reduce_liquids} percent'],
  ['A roasted note in the pack', 'Gone in a drink; taste a dessert first', 'Test one batch before scaling'],
  ['Whips cold, in a clean bowl', 'Warm or greasy means a weak foam', 'Chill to {meringue_chill} °C, degrease everything'],
  ['Powder goes in made up', 'Dry powder in a batter is not aquafaba', '{white_powder}g plus {white_water} ml per egg white'],
])}`,
      },
    ],
    faq: [
      { q: 'What are the downsides of using aquafaba?', a: 'Three things to plan for: an opened pack of liquid keeps {opened_days} days at {opened_temp} °C, it brings more water than an egg when it replaces whole eggs, and it has a light roasted note in the pack that disappears in a drink. None changes the recipe; each changes how you handle it.' },
      { q: 'Do I have to chill aquafaba before whipping?', a: 'Yes. Chill it to {meringue_chill} °C. Warm aquafaba builds a slow, weak foam.' },
      { q: 'Can I add aquafaba powder straight into the mix?', a: 'No. Make it up first with {white_water} ml of water per {white_powder}g of powder, then use it as you would the liquid.' },
      { q: 'Can I freeze aquafaba?', a: 'Yes, opened liquid, at {freeze_temp} °C for up to {freeze_months} months in portions of {freeze_portion_min} to {freeze_portion_max}g. Thaw in the fridge, stir until even, never refreeze.' },
      { q: 'Does aquafaba change the taste of a cocktail?', a: 'No. The roasted note it has in the pack disappears once shaken; the foam carries no taste of its own.' },
    ],
    links: ['whip', 'composition', 'reference'],
  },
  whip: {
    title: 'How Do You Whip Aquafaba? Stiff Peaks Step by Step',
    h1: 'How do you whip aquafaba? Stiff peaks step by step',
    crumb: 'How to whip it',
    eyebrow: 'Facts and figures',
    description: 'Whip aquafaba to stiff peaks in five steps, with what to check at each one and the fix when the foam stays flat, weeps or falls before it is used.',
    lead: 'Aquafaba whips like an egg white: cold, in a clean bowl, soft peaks first and the sugar after. Chilled to {meringue_chill} °C, {meringue_dose}g reaches soft peaks in about {meringue_whip} minutes on high speed, and with {meringue_sugar}g of sugar added slowly it goes on to glossy, stiff peaks that hold on the whisk. Here is each step with the check that tells you it worked, and the fix when it did not.',
    sections: [
      {
        id: 'steps', title: 'The five steps, and what to check at each one',
        html: `<ol>
<li><strong>Chill it.</strong> Aquafaba at {meringue_chill} °C, straight from the fridge. Powder is made up first, {white_powder}g with {white_water} ml of water per egg white, then chilled. Check: the pack or the jug feels cold in the hand.</li>
<li><strong>Clean the bowl.</strong> A clean, grease-free bowl and whisk. Check: wipe the bowl with a little lemon juice or vinegar on paper, then dry it.</li>
<li><strong>Whip to soft peaks.</strong> High speed, about {meringue_whip} minutes for {meringue_dose}g. An optional stabiliser goes in now: 2g of cream of tartar or 1g of citric acid. Check: lift the whisk and the peak folds over on itself.</li>
<li><strong>Add the sugar slowly.</strong> Drop to medium speed and add {meringue_sugar}g of caster sugar one tablespoon at a time, letting each dissolve. Check: rub a little foam between two fingers and feel no grains.</li>
<li><strong>Whip to stiff peaks.</strong> Back to high speed until the foam is glossy and dense. Check: the peak stands straight on the whisk, and the foam does not move when the bowl is tipped.</li>
</ol>
<p>Then use it straight away: pipe the meringues, fold in the chocolate, line the macaron trays before you whip. A foam that stands waiting loses volume.</p>`,
      },
      {
        id: 'recipes', title: 'Which recipe does this feed?',
        html: `<p>The same foam goes three ways. For <a href="{meringue_href}">meringues</a>, pipe and dry at {meringue_bake} °C, fan off, for {meringue_bake_time} hours. For <a href="{chocolate_mousse_href}">chocolate mousse</a>, fold in couverture cooled to {chocolate_mousse_fold_temp} °C and chill. For <a href="{macarons_href}">macaron shells</a>, fold in the almond and icing sugar to a thick, slow ribbon.</p>
<p>Mayonnaise is the one recipe that is not whipped: the aquafaba is emulsified with oil under a stick blender instead.</p>`,
      },
      {
        id: 'wrong', title: 'When the foam goes wrong',
        html: `${grid(['What you see', 'Why', 'Fix'], [
  ['Foam never reaches full volume', 'Grease on the bowl or whisk', 'Degrease everything before you start'],
  ['Foam builds slowly and stays weak', 'Aquafaba too warm', 'Chill to {meringue_chill} °C first'],
  ['Foam will not build at all', 'Sugar added before soft peaks', 'Sugar only once soft peaks have formed'],
  ['Syrup beads on the meringues later', 'Sugar went in faster than it could dissolve', 'One tablespoon at a time, at medium speed'],
  ['Volume lost before piping or folding', 'The bowl stood waiting', 'Have everything ready, then whip last'],
  ['Uneven foam from frozen stock', 'Not fully thawed or not stirred', 'Thaw completely and stir until even. Never refreeze'],
])}`,
      },
      {
        id: 'format', title: 'Liquid or powder in the bowl?',
        html: `<p>Both whip the same way at the same egg-white count. <a href="{liquid_href}">The liquid</a> pours cold from the pack; <a href="{powder_href}">the powder</a> is made up with water first and then chilled. If you only whip now and then, the powder keeps dry and closed between batches, while an opened litre of liquid keeps {opened_days} days at {opened_temp} °C.</p>`,
      },
    ],
    faq: [
      { q: 'How long does it take to whip aquafaba?', a: 'About {meringue_whip} minutes on high speed to soft peaks for {meringue_dose}g chilled to {meringue_chill} °C, then a few more minutes after the sugar to reach stiff peaks.' },
      { q: 'Why will my aquafaba not whip?', a: 'Usually grease in the bowl or on the whisk, warm aquafaba, or sugar added before soft peaks. Degrease, chill to {meringue_chill} °C and add the sugar only once soft peaks have formed.' },
      { q: 'Do I need cream of tartar to whip aquafaba?', a: 'No. It is optional: 2g of cream of tartar or 1g of citric acid, added while whipping, supports the foam.' },
      { q: 'Can I whip aquafaba powder?', a: 'Yes, once it is made up: {white_powder}g of powder with {white_water} ml of water per egg white, chilled, whips like the liquid.' },
      { q: 'How do I know the peaks are stiff?', a: 'The peak stands straight on the whisk without folding, the foam is glossy, and it does not move when the bowl is tipped.' },
    ],
    links: ['before', 'composition', 'reference'],
  },
  whole_egg: {
    title: 'How to Replace Whole Eggs With Aquafaba',
    h1: 'How to replace whole eggs with aquafaba',
    crumb: 'Replacing whole eggs',
    eyebrow: 'Egg substitutes',
    description: 'Replace a whole egg with {egg_liquid}g of aquafaba in cakes, cookies, muffins and brioche: how it goes in, the liquid adjustment, and what to watch in the bake.',
    lead: 'A whole egg in a cake is there to bind the batter and carry moisture, and {egg_liquid}g of VERY AQUAFABA does that job in its place. No whipping is needed for that: the aquafaba goes in with the wet ingredients. The one adjustment is the water. Aquafaba is about {water_aquafaba_pct} percent water against {water_egg_pct} percent for an egg, so the other liquids come down by {reduce_liquids} percent and the bake runs until the centre is set.',
    sections: [
      {
        id: 'dose', title: 'How much aquafaba replaces one whole egg?',
        html: `<p>{egg_liquid}g of liquid aquafaba per whole egg, weighed. With powder, count the same {egg_liquid}g of made-up aquafaba. A recipe with three eggs takes {eggs_3_liquid}g. The egg-white rule is different: {white_liquid}g per white, whipped when the white was whipped.</p>
<p>Which job was the egg doing? If the recipe separated the eggs and whipped the whites, treat the whites as whites. If the eggs went in whole, as in most cakes, cookies and muffins, use the whole-egg rule below.</p>`,
      },
      {
        id: 'how', title: 'How the aquafaba goes into each bake',
        html: `${grid(['What you bake', 'How the aquafaba goes in', 'What it brings'], [
  ['Cakes, cookies and muffins', 'Mixed with the sugar before it meets the fat', 'A more stable emulsion'],
  ['Cookies and brownies', 'Added directly, unwhipped', 'Binding and moisture'],
  ['Brioche and sweet rolls', 'Unwhipped, with the liquids of the dough', 'Softness and keeping quality'],
  ['Sponges and génoise', 'Whipped at {baking_chill} °C, then folded in gently and promptly', 'The air'],
])}
<p>For fat-rich batters, combine the aquafaba with the sugar before the fat goes in; that order builds a steadier emulsion. <a href="{baking_href}">The baking guide</a> has the method per type of bake and the format question for a bakery.</p>`,
      },
      {
        id: 'water', title: 'The water adjustment',
        html: `<p>This is the step that decides the crumb. Swap whole eggs one for one without touching the liquids and the batter comes out loose and wet, and the centre stays soft after the usual bake time. Reduce the milk or water by {reduce_liquids} percent, or add a little dry ingredient, and bake dense cakes through before you pull them.</p>
<p>Replacing only the whites, as in a meringue or a macaron shell, needs no adjustment at all. <a href="{ratio_href}">The egg ratio page</a> has the three numbers side by side: whole egg, white and yolk.</p>`,
      },
      {
        id: 'wrong', title: 'When the bake goes wrong',
        html: `${grid(['What you see', 'Why', 'Fix'], [
  ['Loose, wet batter', 'Whole eggs swapped one for one, water not reduced', 'Reduce the milk or water slightly, or add dry ingredients'],
  ['Wet centre', 'The extra water lengthens the bake', 'Bake fully before you pull it'],
  ['Flat sponge', 'The foam stood waiting, or was folded too hard', 'Fold in promptly and gently'],
  ['Weak binding from frozen stock', 'Thawed aquafaba came back thinner', 'Reduce briefly over low heat. Never refreeze'],
])}
<p>Changing the moisture of a product changes its water activity, so a bakery that reformulates a line re-checks shelf life after the change. For a first try at home, <a href="{baking_recipe_href}">the baking recipe page</a> is the place to start.</p>`,
      },
    ],
    faq: [
      { q: 'How much aquafaba equals one egg?', a: '{egg_liquid}g of liquid aquafaba for a whole egg, {white_liquid}g for an egg white. Two whole eggs are {eggs_2_liquid}g.' },
      { q: 'Do I need to whip aquafaba when it replaces whole eggs?', a: 'No. Where the egg binds and brings moisture, as in cookies, muffins and brioche, the aquafaba goes in unwhipped. Whip it only where the recipe whipped the eggs for air.' },
      { q: 'Why is my batter wetter with aquafaba?', a: 'Aquafaba is about {water_aquafaba_pct} percent water against {water_egg_pct} percent for an egg. Reduce the other liquids by {reduce_liquids} percent.' },
      { q: 'Can I use aquafaba powder to replace whole eggs?', a: 'Yes. Make it up with water at {white_powder}g per {white_water} ml, then count {egg_liquid}g of made-up aquafaba per whole egg.' },
      { q: 'Does aquafaba replace the yolk as well?', a: 'In a whole-egg bake, the {egg_liquid}g covers the whole egg. Where a recipe uses yolks alone for richness, count {yolk_liquid}g of aquafaba plus {yolk_oil}g of oil per yolk.' },
    ],
    links: ['yolk', 'liquid', 'powder'],
  },
  yolk: {
    title: 'Can Aquafaba Replace Egg Yolk?',
    h1: 'Can aquafaba replace egg yolk?',
    crumb: 'Replacing egg yolk',
    eyebrow: 'Egg substitutes',
    description: "Yes, for the yolk's emulsifying job: {yolk_liquid}g of aquafaba plus {yolk_oil}g of oil per yolk. What it brings, what it does not, and the mayonnaise that proves it.",
    lead: 'Yes, where the yolk was holding an emulsion together. A yolk brings fat, colour and the power to hold oil and water in one sauce; aquafaba brings the last of those and none of the fat, which is why the rule is {yolk_liquid}g of aquafaba plus {yolk_oil}g of oil per yolk. The clearest case is mayonnaise: {mayonnaise_dose}g of aquafaba takes {mayonnaise_oil}g of oil under a stick blender and holds it, with no egg in the jar.',
    sections: [
      {
        id: 'job', title: 'What the yolk was doing',
        html: `<p>In most recipes the yolk does one of two things. It emulsifies, holding oil and water together in a mayonnaise, a dressing or a sauce. Or it enriches, bringing fat and colour to a custard, a brioche or a pasta dough.</p>
<p>Aquafaba covers the first job. For the second, it brings no fat, so the oil in the rule is not optional, and it brings no colour, so the result is paler than the egg version. The recipes here cover the emulsion. Where a yolk is cooked to thicken, run a test before changing a formula.</p>`,
      },
      {
        id: 'rule', title: 'How much aquafaba replaces one yolk?',
        html: `<p>{yolk_liquid}g of aquafaba plus {yolk_oil}g of oil for each yolk. The egg rules sit side by side on <a href="{ratio_href}">the egg ratio page</a>: {egg_liquid}g for a whole egg, {white_liquid}g for a white, {yolk_liquid}g and {yolk_oil}g of oil for a yolk.</p>
${grid(['You replace', 'Aquafaba', 'Plus'], [
  ['One egg yolk', '{yolk_liquid}g', '{yolk_oil}g of oil'],
  ['One egg white', '{white_liquid}g', 'nothing'],
  ['One whole egg', '{egg_liquid}g', 'nothing'],
])}`,
      },
      {
        id: 'mayonnaise', title: 'The case that proves it: mayonnaise',
        html: `<p>A batch of mayonnaise uses {mayonnaise_dose}g of chilled aquafaba for {mayonnaise_oil}g of oil, a ratio of {mayonnaise_oil_ratio}, and makes about {mayonnaise_yield}g. Nothing is whipped: the aquafaba, mustard, salt and lemon go into a tall, narrow vessel, and the oil goes in as a thin, steady stream with the stick blender at full speed until the emulsion takes.</p>
<p>Keep the aquafaba at {mayonnaise_chill} °C: warm aquafaba gives a slow, unstable emulsion. Made hygienically and refrigerated at once, the mayonnaise keeps up to {mayonnaise_keep} days. <a href="{mayonnaise_href}">The mayonnaise guide</a> has the method, the fixes and the format question for a kitchen; the method stays there.</p>`,
      },
      {
        id: 'when', title: 'When to use it, and when not to',
        html: `${grid(['What you make', 'Aquafaba for the yolk?', 'Why'], [
  ['Mayonnaise, aioli, dressings', 'Yes', 'The yolk was emulsifying; {mayonnaise_dose}g holds {mayonnaise_oil}g of oil'],
  ['Cakes where the eggs went in whole', 'Use the whole-egg rule', '{egg_liquid}g covers the whole egg; no separate yolk count'],
  ['Custards, curds, crème anglaise', 'Test first', 'The yolk thickens by cooking, a different job from emulsifying'],
  ['Brioche enriched with yolks', 'Test first', 'Aquafaba brings no fat or colour; add the oil of the rule and judge the crumb'],
])}
<p>If the recipe is a sauce, start with the mayonnaise and adapt from there. If it is a bake, <a href="{whole_egg_href}">replacing whole eggs</a> is usually the rule you need.</p>`,
      },
    ],
    faq: [
      { q: 'How much aquafaba replaces one egg yolk?', a: '{yolk_liquid}g of aquafaba plus {yolk_oil}g of oil. The oil stands in for the fat the yolk brought.' },
      { q: 'Can I make mayonnaise with aquafaba instead of egg yolk?', a: 'Yes. {mayonnaise_dose}g of chilled aquafaba takes {mayonnaise_oil}g of oil under a stick blender and makes about {mayonnaise_yield}g of mayonnaise, with no egg.' },
      { q: 'Does aquafaba replace yolks in custard?', a: 'Not as a straight swap. A yolk thickens a custard by cooking, which is a different job from emulsifying, so test before changing a formula.' },
      { q: 'Will the mayonnaise look the same?', a: 'It will be paler, because aquafaba brings no colour. The texture comes from the emulsion, which aquafaba holds.' },
      { q: 'Does the yolk rule apply to powder?', a: 'Yes. Make the powder up with water first, then count {yolk_liquid}g of made-up aquafaba plus {yolk_oil}g of oil per yolk.' },
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
    title: 'Aquafaba Reference: Facts and Answers for Professionals',
    h1: 'Aquafaba reference: facts, figures and answers for professionals',
    crumb: 'Reference',
    eyebrow: 'Facts and figures',
    description: 'Aquafaba ratios, storage, format choice, pack sizes and troubleshooting, with the figures professional kitchens, bakeries, bars and production lines ask for.',
    lead: 'Once aquafaba is part of your work, the questions get practical. How much replaces one egg white? Which format fits the way the kitchen runs? How long does an opened pack keep? What do you check when a meringue, a mousse or a macaron batch is not behaving? Most answers come back to three things: the ratio, the storage and the job aquafaba does in the recipe. Here are those figures in one place, each with the page that goes deeper.',
    sections: [
      {
        id: 'job', title: 'Aquafaba does a different job in each recipe',
        html: `<p>Replacing egg white in a meringue is not the same job as replacing it in a cake. In a meringue or a mousse, aquafaba has to hold air and build structure. In a cake it is there for binding and moisture. The method follows the role, so the first question is not how much aquafaba to use but what the egg white was doing in the preparation.</p>
<p>Once that is clear, the ratio and the method are easy to pick. If you work across several preparations in a pastry section, <a href="{pastry_href}">the pastry and bakery guide</a> shows how those choices fit into a day of production.</p>`,
      },
      {
        id: 'ratio', title: 'How much aquafaba replaces one egg white?',
        html: `<p>The working reference for VERY AQUAFABA is {white_liquid}g of liquid for one egg white. With powder, use {white_powder}g of powder with {white_water} ml of water for the same egg white, which gives {white_total}g of aquafaba.</p>
<p>From there the scaling is linear. A recipe with four egg whites needs {whites_4_liquid}g of liquid, or {whites_4_powder}g of powder made up with {whites_4_water} ml of water. The ratio is the same for a test batch and for a production recipe. For powder, <a href="{reconstitution_href}">the reconstitution table</a> gives the quantities from one egg white upward, so the sum does not need to be rebuilt every time.</p>
${grid(['What you replace', 'Liquid', 'Powder'], [
  ['One egg white', '{white_liquid}g', '{white_powder}g + {white_water} ml water'],
  ['Four egg whites', '{whites_4_liquid}g', '{whites_4_powder}g + {whites_4_water} ml water'],
  ['One whole egg', '{egg_liquid}g', 'Count {egg_liquid}g of made-up aquafaba'],
])}`,
      },
      {
        id: 'format', title: 'Does liquid or powder fit your production better?',
        html: `<p>The recipe works with either format. The difference is how the kitchen uses it. Liquid is weighed straight from the pack, so it suits production where aquafaba is used often enough to move through an opened pack within a few days. Powder gives more room when production is less predictable, because you make up only what the day needs and keep the rest dry and closed.</p>
<p>So the choice usually comes down to frequency: regular production tends to favour <a href="{liquid_href}">the liquid</a>, occasional or changing production is easier to manage with <a href="{powder_href}">the powder</a>. The formats available to a professional kitchen, and what an enquiry needs, are on <a href="{professional_href}">the professional pages</a>.</p>`,
      },
      {
        id: 'storage', title: 'How long does aquafaba keep once it is open?',
        html: `<p>Before opening, both formats keep at least {unopened_months} months at room temperature. Once opened, the two are handled differently: liquid is kept at {opened_temp} °C and used within {opened_days} days, and powder is kept dry and closed and used until the best-before date on the pouch.</p>
<p>That window is worth checking before choosing a format. A pack only makes sense if it matches the pace at which you use it. If a {liquid_1l_label} regularly sits open longer than {opened_days} days, powder fits the rhythm better. <a href="{storage_href}">How to store and freeze aquafaba</a> covers the opened pack in detail.</p>`,
      },
      {
        id: 'troubleshoot', title: 'What do you check when a batch is not behaving?',
        html: `<p>When a preparation is not working, changing the ratio is rarely the first move. A weak meringue, a mousse that loses its air or a macaron shell that spreads usually comes down to the method, the temperature, the mixing or the way the foam was built.</p>
<p>Troubleshooting works when it is specific to the preparation. Each of <a href="{index_href}">the application guides</a> carries the dose, the method and a table of what you see, why, and the fix for meringue, chocolate mousse, mayonnaise, baking, cocktails and macarons. Start with what you can see in the bowl, then work back through the process before touching the amount of aquafaba.</p>`,
      },
      {
        id: 'packs', title: 'Which pack size matches a normal production week?',
        html: `<p>A pack size is only useful next to your own numbers. Count how many egg whites you replace in a normal week, then pick the format and the pack you can rotate in time.</p>
${grid(['Pack', 'Egg whites replaced'], [
  ['{liquid_1l_label}', '{liquid_1l_whites}'],
  ['{liquid_10l_label}', '{liquid_10l_whites}'],
  ['{liquid_1t_label}', '{liquid_1t_whites}'],
  ['{small_pouch_g}g pouch', '{powder_30g_whites}'],
  ['{medium_pouch_g}g pouch', '{powder_200g_whites}'],
  ['{large_pouch_kg}kg pouch', '{powder_3kg_whites}'],
])}
<p>If you are moving into larger or more regular volumes, <a href="{supply_href}">plan the stock from your egg-white count</a>, then <a href="{products_href}">compare the packs</a> and send an enquiry with your country, application and monthly volume.</p>`,
      },
    ],
    faq: [
      { q: 'How much VERY AQUAFABA replaces one egg white?', a: 'Use {white_liquid}g of liquid VERY AQUAFABA, or {white_powder}g of powder made up with {white_water} ml of water.' },
      { q: 'Should I use liquid or powder aquafaba in professional production?', a: 'Choose by rotation. Liquid is ready to weigh and suits a kitchen that finishes an opened pack within {opened_days} days. Powder is easier to hold when production is less regular, because you make up only what you need.' },
      { q: 'How long does opened liquid aquafaba keep?', a: 'Keep opened liquid VERY AQUAFABA at {opened_temp} °C and use it within {opened_days} days. Unopened, both formats keep at least {unopened_months} months at room temperature.' },
      { q: 'What should I check if aquafaba is not behaving as expected?', a: 'Look at the method for that preparation before changing the ratio. Temperature, mixing, the state of the bowl and how the foam was built all change the result, and each application guide lists the checks for its recipe.' },
      { q: 'How do I choose the right pack size?', a: 'Compare the pack with the egg whites you replace in a working week and how fast you can rotate an opened pack. A {liquid_1l_label} replaces {liquid_1l_whites} egg whites, a {medium_pouch_g}g pouch {powder_200g_whites}.' },
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
    title: 'Aquafaba Powder: What It Is and Which Pouch to Buy',
    h1: 'Aquafaba powder: what it is and which pouch to buy',
    crumb: 'Aquafaba powder',
    eyebrow: 'Powder and formats',
    description: 'Make up aquafaba powder, compare pouch sizes and choose a format for your kitchen. Includes egg white equivalents, recipe doses and storage advice.',
    lead: 'A meringue, a mousse or a mayonnaise can start with a pouch from the dry store. Aquafaba powder is a plant-based egg white replacement: {white_powder}g mixed with {white_water} ml of water replaces one egg white. VERY AQUAFABA comes in {small_pouch_g}g, {medium_pouch_g}g and {large_pouch_kg}kg pouches, so the choice starts with how much you will use after opening.',
    sections: [
      {
        id: 'make-up', title: 'What you put in the bowl',
        html: `<p>The powder is the dried format of VERY AQUAFABA. Add water before using it in a whipped recipe; it does not go straight into the almond flour or sugar. Once prepared, aquafaba can provide the foam in a meringue, the aeration in a mousse or the emulsion in mayonnaise.</p>
<p>For each egg white, measure {white_powder}g of powder and {white_water} ml of water. Together they make {white_total}g of prepared aquafaba. For a recipe counted in egg whites, <a href="{reconstitution_href}">scale the powder and water together</a>, then follow the handling instructions for that preparation.</p>
<p>Keep the dry pouch separate from the aquafaba you have made up. The storage rule for dry powder no longer applies once water has been added. Preparing just the amount you need leaves the rest of the pouch available for another oven day.</p>`,
      },
      {
        id: 'batches', title: 'How much powder goes into a recipe?',
        html: `<p>These quantities follow the published egg-white conversion used in our application guides. The liquid recipe dose and the mass obtained after mixing powder are different columns, so you can see what each figure means.</p>
${grid(['Preparation', 'Liquid recipe dose', 'Powder + water', 'Prepared mass'], [
  ['<a href="{meringue_href}">Meringue</a>', '{meringue_dose}g', '{meringue_powder}g + {meringue_water} ml', '{meringue_prepared}g'],
  ['<a href="{chocolate_mousse_href}">Chocolate mousse</a>', '{chocolate_mousse_dose}g', '{chocolate_mousse_powder}g + {chocolate_mousse_water} ml', '{chocolate_mousse_prepared}g'],
  ['<a href="{macarons_href}">Macarons</a>', '{macarons_dose}g', '{macarons_powder}g + {macarons_water} ml', '{macarons_prepared}g'],
  ['<a href="{mayonnaise_href}">Mayonnaise</a>', '{mayonnaise_dose}g', '{mayonnaise_powder}g + {mayonnaise_water} ml', '{mayonnaise_prepared}g'],
])}
<p>For example, the meringue preparation replaces {meringue_eggs} egg whites: {meringue_powder}g of powder plus {meringue_water} ml of water makes {meringue_prepared}g. The liquid version uses {meringue_dose}g. Follow the powder method in the matching guide rather than treating the liquid dose as the weight of water to add to any recipe.</p>`,
      },
      {
        id: 'choose', title: 'Which pouch fits your next oven days?',
        html: `<p>Start with the recipes you actually plan to make, then compare their powder doses with the amount in the pouch. You do not have to prepare the entire pack on opening.</p>
${grid(['Pouch', 'Egg whites replaced', 'Example using the meringue conversion'], [
  ['{small_pouch_g}g', '{powder_30g_whites}', '{small_meringue_batches} batches'],
  ['{medium_pouch_g}g', '{powder_200g_whites}', '{meringue_batches_200g} batches'],
  ['{large_pouch_kg}kg', '{powder_3kg_whites}', '{meringue_batches_3kg} batches'],
])}
<p>The small pouch gives you a measured amount for trying a preparation. The middle size covers several oven days without opening a production pack. For regular larger runs, compare your weekly use with the larger pouch before ordering. <a href="{pouch_href}">Work out how far the {medium_pouch_g}g pouch goes</a> if that is the size you are considering.</p>`,
      },
      {
        id: 'storage', title: 'How often will you use the opened pack?',
        html: `<p>Both formats keep for at least {unopened_months} months at room temperature before opening. Once opened, keep powder dry and closed until the best-before date on its pouch. The liquid keeps {opened_days} days at {opened_temp} °C.</p>
<p>If your kitchen will finish an opened liquid pack within that time, pouring straight into the bowl may suit the way you work. If the next meringue or macaron batch is further away, powder lets you measure each preparation separately. <a href="{storage_href}">Check how to store opened aquafaba</a> when planning the recipes that share a pack.</p>
<p>Compare the full range of <a href="{products_href}">liquid packs and powder pouches</a>, then use the purchase button below to find the buying route for your country or send a professional enquiry.</p>`,
      },
    ],
    faq: [
      { q: 'How much aquafaba powder replaces one egg white?', a: 'Use {white_powder}g of VERY AQUAFABA powder with {white_water} ml of water. This makes {white_total}g of prepared aquafaba and follows the published conversion for one egg white.' },
      { q: 'Can I add the powder straight to a meringue mixture?', a: 'Make it up with water before whipping. In a meringue, the aquafaba needs to form the foam before the sugar is incorporated; adding dry powder to the other ingredients does not follow that method.' },
      { q: 'Which pouch should I choose for a first recipe?', a: 'The {small_pouch_g}g pouch replaces {powder_30g_whites} egg whites. At {meringue_powder}g of powder per meringue preparation, it covers {small_meringue_batches} batches. Check the powder dose of the recipe you want to try.' },
      { q: 'How do I keep the pouch after opening?', a: 'Keep it dry and closed, and use it by the best-before date printed on the pouch. Only make up what you need; prepared aquafaba is no longer stored as dry powder.' },
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
        html: `<p>Using the published VERY AQUAFABA recipes, the {small_pouch_g}g pouch gives you enough powder for several full test batches.</p>
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
      { q: 'Can I test aquafaba with the {small_pouch_g}g pouch?', a: 'Yes. It gives you enough powder for {small_meringue_batches} published meringue batches, {small_macarons_batches} macaron batches or {small_mousse_batches} chocolate mousse batches.' },
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
    lead: 'A {medium_pouch_g}g pouch of VERY AQUAFABA powder replaces {powder_200g_whites} egg whites. What that looks like across the recipes you already make is the number to work from. A pastry section might use some for meringue, some for macarons and leave the rest for another production day; a bar draws from the same pouch more slowly. Because the powder is dosed per egg white, you make up only what each batch needs. At the published doses, the pouch is {meringue_batches_200g} meringue batches, {chocolate_mousse_batches_200g} chocolate mousse batches or {mayonnaise_batches_200g} mayonnaise batches.',
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
        html: `<p>The published conversion is {white_liquid}g of liquid aquafaba per egg white, or {white_powder}g of powder made up with {white_water} ml of water. A whole egg uses {egg_liquid}g of liquid aquafaba. Whole-egg substitution needs its own recipe checks because egg yolk and egg white do different jobs.</p>
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
      { q: 'How much liquid aquafaba replaces a whole egg?', a: 'The published conversion is {egg_liquid}g per whole egg. Use the guidance for the particular recipe and check its other liquids; this is a different substitution from replacing only egg white.' },
    ],
    links: ['dacquoise', 'powder', 'supply'],
  },

  supply: {
    title: 'Aquafaba: A Reliable Egg White Replacement for Bakeries',
    h1: 'A reliable egg white replacement for kitchens and bakeries',
    crumb: 'Egg white supply',
    eyebrow: 'For kitchens and bakeries',
    description: 'Plan aquafaba stock from the egg whites your kitchen uses. Compare liquid packs and powder pouches, opened-pack storage and a weekly worked example.',
    lead: 'Meringues, macarons and mousses start with the egg whites available for the day. VERY AQUAFABA gives you a plant-based replacement that keeps at least {unopened_months} months at room temperature before opening. Count {white_liquid}g of liquid per egg white, then choose the pack around how quickly your kitchen will use it.',
    sections: [
      {
        id: 'recipes', title: 'Start with the work the egg white is doing',
        html: `<p>Choose a recipe where you can check the aquafaba quantity and method together. In a meringue, the white supplies the foam; in a mousse, that foam is folded into the mixture. The preparation determines what you need to watch in the bowl.</p>
<p>For a starting point, <a href="{meringue_href}">make a batch of meringues</a> using {meringue_dose}g of liquid aquafaba, or <a href="{macarons_href}">follow the macaron method</a> using {macarons_dose}g. These are specific recipes, not a promise that every formula will work unchanged.</p>
<p>A whole-egg substitution is a separate calculation. The published liquid conversion is {egg_liquid}g per whole egg, compared with {white_liquid}g per white. Check which ingredient your recipe calls for before converting the order sheet.</p>`,
      },
      {
        id: 'rotation', title: 'Will the opened liquid pack be used in time?',
        html: `<p>Liquid aquafaba pours straight into the bowl. Once the pack is open, it keeps {opened_days} days at {opened_temp} °C. Look at the recipes scheduled inside that window, rather than choosing a pack just because it covers a whole week's total.</p>
<p>Powder lets you prepare individual batches. Use {white_powder}g with {white_water} ml of water per egg white, and keep the remaining powder dry and closed until its best-before date. That can suit oven days separated by gaps.</p>
<p>The unopened shelf life and the opened-pack window are different measures. An unopened pack can wait at room temperature for at least {unopened_months} months, but that does not extend the time available after opening liquid. <a href="{storage_href}">Plan the storage of opened packs</a> alongside the prep list.</p>`,
      },
      {
        id: 'packs', title: 'Match the packs to your egg-white count',
        html: `<p>These are the published pack equivalences. Use them to compare the order with your regular recipes, then check that the opened pack will turn over within its storage window.</p>
${grid(['Format', 'Pack', 'Egg whites replaced'], [
  ['Liquid', '{liquid_1l_label}', '{liquid_1l_whites}'],
  ['Liquid', '{liquid_10l_label}', '{liquid_10l_whites}'],
  ['Liquid', '{liquid_1t_label}', '{liquid_1t_whites}'],
  ['Powder', '{small_pouch_g}g pouch', '{powder_30g_whites}'],
  ['Powder', '{medium_pouch_g}g pouch', '{powder_200g_whites}'],
  ['Powder', '{large_pouch_kg}kg pouch', '{powder_3kg_whites}'],
])}
<p>For example, a week of {stock_whites} egg whites corresponds to {stock_liquid}g of liquid aquafaba. Using the powder conversion, it needs {stock_powder}g with {stock_water} ml of water, prepared as the recipes are made. That uses half a {medium_pouch_g}g pouch. The liquid and powder figures describe their respective conversions, not identical prepared weights.</p>`,
      },
      {
        id: 'schedule', title: 'Put the quantities on the prep list',
        html: `<p>Record the application, the number of batches and the aquafaba dose for each day. Add the recipes that can share an opened pack within its storage window. That gives you a useful basis for choosing between separate liquid packs and powder weighed by the batch.</p>
<p>For a recipe with an established powder dose, <a href="{pouch_href}">calculate the number of batches in a {medium_pouch_g}g pouch</a>. Keep the water alongside the powder quantity on the sheet, so it is not mistaken for a dry ingredient added directly to a whipped preparation.</p>
<p>When ordering, tell us the format, application and volume you need. You can <a href="{products_href}">compare the available packs</a> first, then use the business option below to send an enquiry. The purchase window also shows the buying route for your country.</p>`,
      },
    ],
    faq: [
      { q: 'How many egg whites does a {liquid_1l_label} replace?', a: 'The published pack equivalence is {liquid_1l_whites} egg whites. For recipe conversion, use {white_liquid}g of liquid aquafaba per egg white.' },
      { q: 'Can I keep unopened aquafaba outside the fridge?', a: 'Yes. Both formats keep at least {unopened_months} months at room temperature before opening. Once opened, liquid keeps {opened_days} days at {opened_temp} °C.' },
      { q: 'Which format suits occasional oven days?', a: 'Powder lets you weigh the amount for each batch while keeping the remaining pouch dry and closed. Compare that with how much liquid you would use within {opened_days} days of opening a pack.' },
      { q: 'Does every recipe stay the same when I replace egg white?', a: 'Use an aquafaba method for the preparation you are making and check its quantities and handling steps. The examples here support specific recipes; they do not establish that every existing formula can be changed without a trial.' },
      { q: 'How do I enquire about larger packs?', a: 'Choose the business option in the purchase window and give the application, format and quantities you need. Liquid is available in a {liquid_10l_label} and a {liquid_1t_label}; the larger powder pouch is {large_pouch_kg}kg.' },
    ],
    links: ['powder', 'pouch', 'dacquoise'],
  },

  dacquoise: {
    title: 'Almond Dacquoise with Aquafaba: The Pastry Recipe',
    h1: 'Almond dacquoise with aquafaba: the pastry recipe',
    crumb: 'Almond dacquoise',
    eyebrow: 'Pastry recipe',
    description: 'Make an almond dacquoise with {dacquoise_aquafaba}g of aquafaba. Follow the ingredient quantities and baking method, with a powder conversion and double-batch table.',
    lead: 'An almond dacquoise starts with a meringue, then takes ground almonds and icing sugar before it goes into a frame or ring. This recipe uses {dacquoise_aquafaba}g of VERY AQUAFABA in place of the egg white and bakes for {dacquoise_minutes} minutes at {dacquoise_oven} °C. The almonds stay in the recipe, so the finished pastry contains nuts.',
    sections: [
      {
        id: 'ingredients', title: 'What goes into the dacquoise',
        html: `<p>Keep the sugar for the meringue separate from the icing sugar. They enter at different points: the first goes into the whipped aquafaba, while the icing sugar is added with the ground almonds and the other dry ingredients.</p>
{dacquoise_ingredients}
<p>The aquafaba quantity is a measured recipe dose. It is equivalent to a little over {dacquoise_whites_floor} egg whites using the published {white_liquid}g conversion, so use the stated {dacquoise_aquafaba}g rather than rounding down to a whole number of whites. The weight in the ingredient list is the reference for this batch.</p>`,
      },
      {
        id: 'method', title: 'Make the meringue before adding the almonds',
        html: `<p>The meringue is built first. Only then do the ground almonds, icing sugar, baking powder and cornflour go in. Have those ingredients weighed before you start, so you can follow the order without stopping to measure them.</p>
{dacquoise_method}
<p>Use a frame or ring for the bake. Record its dimensions and the depth of the mixture when you try the recipe, so you can repeat the same preparation. Check the bake in the mould you use before setting a production yield.</p>`,
      },
      {
        id: 'foam', title: 'Check the foam before it carries the dry ingredients',
        html: `<p>Start with a clean bowl and whisk. Chill the aquafaba before whipping; the meringue guidance uses {meringue_chill} °C. A weak foam at this stage will still be weak when the dry ingredients are added.</p>
<p>Add the sugar gradually to the whipped aquafaba, then check that the meringue holds before continuing. If it is not developing as expected, <a href="{meringue_href}">check the meringue method and troubleshooting</a> while the mixture is still at that stage.</p>
<p>The almonds belong after the meringue has formed. Keeping that sequence clear matters more than converting the recipe to an approximate egg count: you need both the measured quantity and the foam it produces.</p>`,
      },
      {
        id: 'powder', title: 'Using powder for the measured aquafaba dose',
        html: `<p>The reconstitution rule is {white_powder}g of powder with {white_water} ml of water, giving {white_total}g of aquafaba. For this batch, {dacquoise_powder}g with {dacquoise_water} ml gives {dacquoise_prepared}g. Weigh out {dacquoise_aquafaba}g of that prepared mixture for the recipe rather than treating the entire mixture as if it weighed {dacquoise_aquafaba}g.</p>
<p>This is a calculation from the preparation rule. Follow the powder's preparation instructions and chill the measured aquafaba before whipping. <a href="{reconstitution_href}">Check the powder and water proportions</a> if you are making a different amount.</p>
<p>Keep the unused dry powder separate and close its pouch. The batch you have made up now needs the handling of liquid aquafaba, not the storage of dry powder.</p>`,
      },
      {
        id: 'double', title: 'Scale every ingredient from the same batch',
        html: `<p>For a double batch, multiply each ingredient by the same factor. Keep the individual quantities on the prep sheet so that the sugars remain separate and the small amounts of baking powder and cornflour are included.</p>
{dacquoise_double_table}
<p>If preparing that aquafaba from powder, {dacquoise_double_powder}g with {dacquoise_double_water} ml makes {dacquoise_double_prepared}g. Weigh the {dacquoise_double_aquafaba}g needed for the double recipe. Doubling the ingredients does not mean doubling the baking time; the reference bake remains {dacquoise_minutes} minutes at {dacquoise_oven} °C.</p>
<p>For regular production, <a href="{supply_href}">plan the aquafaba stock around your oven days</a>. Keep the recipe dose separate from pack equivalences, which are useful for ordering but do not replace the quantities on the scale.</p>`,
      },
    ],
    faq: [
      { q: 'Can I make almond dacquoise without egg white?', a: 'Yes. This recipe uses {dacquoise_aquafaba}g of VERY AQUAFABA for the meringue, followed by sugar, icing sugar, ground almonds, baking powder and cornflour. Follow the ingredient quantities and the order of the method.' },
      { q: 'What temperature and time does this recipe use?', a: 'The reference bake is {dacquoise_minutes} minutes at {dacquoise_oven} °C in a frame or ring. Check the bake in the mould you use before fixing a production yield.' },
      { q: 'How much powder should I prepare for the recipe?', a: 'Make up {dacquoise_powder}g of powder with {dacquoise_water} ml of water. This produces {dacquoise_prepared}g of aquafaba; weigh out the {dacquoise_aquafaba}g required by the recipe. The prepared mass and the recipe dose are not the same number.' },
      { q: 'Does the dacquoise contain nuts?', a: 'Yes. It contains ground almonds. Replacing egg white with aquafaba does not remove those almonds or change the ingredient information of the other components.' },
      { q: 'Do I double the bake when I double the ingredients?', a: 'No. The reference method is {dacquoise_minutes} minutes at {dacquoise_oven} °C. Scale the ingredients together, keep the method in the same order and check the bake for the frames or rings you use.' },
    ],
    links: ['dacquoise_calc', 'dacquoise_process', 'pavlova', 'powder'],
  },
};
