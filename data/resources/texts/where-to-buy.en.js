// Where to buy, English (set-2 E0 and the English speaking countries). 'index' is the
// directory; every other key is a country. The purchase route per country is the client's
// (Arnaud, 28 August 2026): the United States and Germany on Amazon, France on InstantChef,
// every other country through the contact form. A page never claims a channel we cannot
// back, and never carries a price or a stock level. No em/en dash.
const grid = (heads, rows, cls = '') => `<table class="va-guide-grid${cls ? ` ${cls}` : ''}">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;

// The range is the same everywhere; what changes per country is the route to it.
const range = `<p>Each pack is described by the egg whites it replaces, at {white_liquid} g of liquid or {white_powder} g of powder per egg white.</p>
<ul>
<li>Liquid: 1 L Tetrapak = {liquid_1l_whites} egg whites, 10 L bag-in-box = {bib_10l_whites}, 1 T IBC = {ibc_1t_whites}.</li>
<li>Powder: 30 g = {powder_30g_whites} egg whites, 200 g = {powder_200g_whites}, 3 kg = {powder_3kg_whites}.</li>
</ul>
<p>Sealed, both keep at least {unopened_months} months at room temperature. Opened liquid is refrigerated at {opened_temp} °C or below and used within {opened_days} days; opened powder does not spoil while it stays dry and closed. The <a href="{products_href}">Products page</a> carries the full range.</p>`;

// What to put in the enquiry, for the countries whose route is the form.
const ask = `<p>The form asks for the company, the country, the application and the estimated monthly volume, plus a line about the project. Those fields are what makes an answer useful: the application decides the format, and the volume decides the pack.</p>
<ul>
<li>Application: meringue, macarons, mousse, mayonnaise, baking, cocktails, or the product you are formulating.</li>
<li>Volume: per month, counted in litres or in egg whites replaced, whichever you know.</li>
<li>Format: liquid if an opened pack turns over inside {opened_days} days, powder if it does not.</li>
</ul>
<p>The answer carries the technical sheet and what is possible for your country. General questions go through the <a href="{contact_href}">contact form</a>.</p>`;

export default {
  index: {
    title: 'Where to Buy VERY AQUAFABA - VERY AQUAFABA',
    h1: 'Where to buy VERY AQUAFABA',
    crumb: 'Where to buy',
    enquiryLabel: 'Where to buy',
    description: 'Where to buy VERY AQUAFABA: on Amazon in the United States and Germany, on InstantChef in France, and through a short enquiry everywhere else. Pick your country to see what you can order today.',
    lead: 'VERY AQUAFABA is on Amazon in the United States and Germany, and on InstantChef in France. Everywhere else, tell us what you make and how much of it, and we come back with the formats, the technical sheet and what we can do for your country. Pick your country below to see what you can order today.',
    // Directory: the country table is the page; no range recap and no reference tables.
    figures: false,
    sections: [
      {
        id: 'countries',
        title: 'What you can order in your country',
        html: `${grid(['Country', 'Where', 'What is listed'], [
  ['<a href="{united_states_href}">United States</a>', 'Amazon', 'Liquid 1 L, a cocktail listing, a pack of four'],
  ['<a href="{germany_href}">Germany</a>', 'Amazon', 'Liquid 1 L, powder 200 g'],
  ['<a href="{france_href}">France</a>', 'InstantChef', 'Liquid 1 L, powder 200 g'],
  ['<a href="{united_kingdom_href}">United Kingdom</a>', 'On enquiry', 'Every format, quoted for your order'],
  ['<a href="{netherlands_href}">Netherlands</a>', 'On enquiry', 'Every format, quoted for your order'],
  ['<a href="{belgium_href}">Belgium</a>', 'On enquiry', 'Every format, quoted for your order'],
  ['Any other country', 'On enquiry', 'Tell us where you are through the <a href="#enquiry-form">form below</a>'],
], 'va-guide-grid--wrap')}
<p>Listings confirmed by VERY AQUAFABA in September 2026. Prices and stock are the shop's, so each country page links the listing and leaves that to it.</p>`,
      },
      {
        id: 'professional',
        title: 'Buying for a bakery, a bar or a production line',
        html: `<p>The shops carry the two formats most kitchens start with: the 1 L Tetrapak and the 200 g pouch. If you need more than that, whether it is the 10 L bag-in-box, the 1 T IBC or the 3 kg pouch, we quote it for your project. Tell us what you make and roughly how much each month, and you will get the technical sheet along with the quote.</p>
<p>Not sure yet whether you need liquid or powder, or how much? The <a href="{professional_href}">professionals section</a> works it out by activity: <a href="{pastry_href}">pastry and bakery</a>, <a href="{bars_href}">bars and cocktails</a>, <a href="{foodservice_href}">foodservice and central kitchens</a> and <a href="{industry_href}">food manufacturing</a>.</p>`,
      },
    ],
    faq: [
      { q: 'Where can I buy VERY AQUAFABA?', a: 'On Amazon in the United States and in Germany, and on InstantChef in France. In the United States you will find the 1 L liquid, a listing made for cocktail bars and a pack of four; in Germany and France, the 1 L liquid and the 200 g powder.' },
      { q: 'Can I buy it in the United Kingdom, the Netherlands or Belgium?', a: 'Yes, on enquiry. Send us your country, what you make and roughly how much each month, and we reply with the formats we can ship to you, the technical sheet and a quote.' },
      { q: 'My country is not listed. Can I still order?', a: 'Yes. Use the enquiry form and tell us where you are. We answer every country with what we can do there.' },
      { q: 'Can I order the bag-in-box or the IBC online?', a: 'No. The 10 L bag-in-box, the 1 T IBC and the 3 kg pouch are quoted for your project, in every country. Tell us your application and your monthly volume through the enquiry form and the quote comes back with the technical sheet.' },
      { q: 'Is there a minimum order for professionals?', a: 'Minimum order and lead time depend on the country, the format and the volume, so they come with the quote. Tell us your application and your monthly volume through the enquiry form and you will have both, along with the technical sheet.' },
      { q: 'Which format should I order, liquid or powder?', a: 'It depends on how fast you use an opened pack. Opened liquid is used within {opened_days} days in the fridge; opened powder keeps as long as the pouch stays dry and closed. The [professionals section]({professional_href}) works it out by activity.' },
    ],
    links: [
      { href: '{professional_href}', label: 'Aquafaba for professionals' },
      { href: '{egg_substitutes_href}', label: 'Plant-based egg substitutes' },
      { href: '{index_href}', label: 'All application guides' },
    ],
  },

  'united-states': {
    inCountry: 'in the United States',
    title: 'Where to Buy Aquafaba in the United States - VERY AQUAFABA',
    h1: 'Where to buy VERY AQUAFABA in the United States',
    crumb: 'United States',
    description: 'Buy VERY AQUAFABA in the United States on Amazon: the 1 L carton, the same carton listed for cocktail bars, and a pack of four. Which product is for you, and how to order larger volumes.',
    lead: "Every professional kitchen has a recipe that needs egg white and a reason not to use it: a vegan guest, a raw egg in a sour, an allergen on the label. VERY AQUAFABA is chickpea aquafaba, a plant-based egg white that whips, binds and emulsifies like the real thing. If you're in the United States, you can buy it directly from Amazon. Below, which product to pick and how to order in volume.",
    sections: [
      {
        id: 'which',
        title: 'Which product is for you',
        html: `<p>Start with how fast you get through it. An opened carton lives in the fridge and is used within {opened_days} days, so buy for the week you actually have.</p>
<ul>
<li><strong>Whipping meringue or folding mousse a few times a week?</strong> One 1 L carton is all you need. It is the equivalent of {liquid_1l_whites} egg whites, which makes {meringue_batches_1l} batches of meringue or {macarons_batches_1l} of macarons, and the next one waits in the dry store, sealed, for at least {unopened_months} months.</li>
<li><strong>Shaking sours every night?</strong> Order the carton listed for cocktail bars. Same aquafaba, found where bartenders look for it, and one carton pours {cocktails_batches_1l} sours before it is empty, well inside its {opened_days} days.</li>
<li><strong>Going through a carton before the week is out?</strong> Take the pack of four. Open one, keep three sealed on the shelf, and reorder when the last one goes in the fridge.</li>
</ul>
<p>If you only whip now and then, the powder may suit you better, since an opened pouch does not spoil. It is not on Amazon in the United States yet, but you can ask for it below.</p>`,
      },
      {
        id: 'more',
        title: 'Need more than a carton a week?',
        html: `<p>Past the carton, we quote for your project: the 10 L bag-in-box is {bib_10l_whites} egg whites, the 1 T IBC {ibc_1t_whites}, and the powder, which is not on Amazon in the United States yet, comes the same way. Tell us what you make and roughly how much each month through the form on this page, and the technical sheet comes back with the quote.</p>
<p>Not sure which format or how much? The <a href="{professional_href}">professionals section</a> works it out by activity, and each <a href="{index_href}">application guide</a> has a calculator that scales the recipe to your batches.</p>`,
      },
    ],
    faq: [
      { q: 'Where can I buy aquafaba in the United States?', a: 'On Amazon, through the three products on this page: the 1 L carton, the same carton listed for cocktail bars, and the pack of four. All three are VERY AQUAFABA liquid.' },
      { q: 'What does a 1 L carton replace?', a: '{liquid_1l_whites} egg whites, which is {cocktails_batches_1l} sours, {meringue_batches_1l} batches of meringue or {eggs_1l} whole eggs in baking.' },
      { q: 'Is the difference between the three products only the quantity?', a: 'Yes. They carry the same aquafaba. The cocktail bar product is the 1 L carton under the name a bar searches for, and the pack of four is four cartons for a venue that uses more than one at a time.' },
      { q: 'Can I buy the powder in the United States?', a: 'Not on Amazon yet. Ask for it through the form on this page, with your application and your monthly volume, and we come back with what we can do.' },
      { q: 'How long does an opened carton keep?', a: '{opened_days} days at {opened_temp} °C or below. Sealed, it keeps at least {unopened_months} months at room temperature.' },
    ],
    links: [
      { href: '{bars_href}', label: 'Bars and cocktails' },
      { href: '{cocktails_href}', label: 'Cocktails: liquid or powder?' },
      { href: '{index_href}', label: 'All application guides' },
      { href: '{products_href}', label: 'Products and formats' },
    ],
  },

  'united-kingdom': {
    inCountry: 'in the United Kingdom',
    title: 'How to Get Aquafaba in the United Kingdom - VERY AQUAFABA',
    h1: 'How to get VERY AQUAFABA in the United Kingdom',
    crumb: 'United Kingdom',
    description: 'VERY AQUAFABA in the United Kingdom: no online shop yet, but drop us a line and we sort it out. How to order, how much to ask for, and which format suits your bar or kitchen.',
    lead: "Whip it into meringue, fold it into mousse, shake it into a sour: VERY AQUAFABA is chickpea aquafaba, a plant-based egg white that does everything the real thing does, without the egg. Tell us what you make and roughly how much, and we'll come back with the formats, the technical sheet and a quote. We haven't opened an online shop in the United Kingdom yet, but that shouldn't stop you from trying it. Drop us a line.",
    sections: [
      {
        id: 'order',
        title: 'How to order in the United Kingdom',
        html: `<p>Tell us about your kitchen, and we take it from there. Here's how to order aquafaba from us:</p>
<ol>
<li><strong>Tell us what you make and roughly how much each month.</strong> The form at the foot of this page asks for your company, the application and an estimated monthly volume. A line about the project helps.</li>
<li><strong>We come back with the formats we can send you, the technical sheet and a quote,</strong> including the minimum order and the lead time for your volume.</li>
<li><strong>You order.</strong> Sealed, the packs keep at least {unopened_months} months at room temperature, so a first order can sit in the dry store until you need it.</li>
</ol>
<p>An Amazon UK listing is planned. When it is live, this page will link to it, and the 1 L carton will be a click away.</p>`,
      },
      {
        id: 'howmuch',
        title: 'How much should you ask for?',
        html: `<p>You don't need an exact figure, a rough monthly one is enough for us to quote. The easiest way to get there is to think in the recipes you make. A sour takes {cocktails_dose} g of aquafaba, so a bar pouring ten a night is around {sours_10_night_l} litres a month. A batch of meringue takes {meringue_dose} g, a batch of mayonnaise {mayonnaise_dose} g. Count your batches, and if the sum is hard to picture, each <a href="{index_href}">application guide</a> has a calculator that does it for you.</p>
<p>To give you a sense of scale: a 1 L Tetrapak is {liquid_1l_whites} egg whites, enough for {cocktails_batches_1l} sours or {meringue_batches_1l} batches of meringue. A busy cocktail bar goes through one a week. A hotel group or a central kitchen is closer to the 10 L bag-in-box.</p>`,
      },
      {
        id: 'format',
        title: 'Liquid or powder: which should you ask for?',
        html: `<p>Both are the same aquafaba. Liquid is ready to pour and lives in the fridge once opened, for {opened_days} days. Powder is mixed with water when you need it, and an opened pouch keeps until you need it, dry and closed.</p>
<p>So if you use it most days, ask for liquid. If you use it now and then, or your fridge is already full, ask for powder. And if your weekends are busy and your weekdays quiet, many bars keep both. The <a href="{bars_href}">bars and cocktails page</a> and the <a href="{pastry_href}">pastry and bakery page</a> take it further.</p>`,
      },
    ],
    faq: [
      { q: 'Can I buy aquafaba in the United Kingdom today?', a: 'Not from a shop yet. You can order VERY AQUAFABA from us directly: send your application and your estimated monthly volume through the form on this page, and we reply with the formats, the technical sheet and a quote.' },
      { q: 'Will VERY AQUAFABA be on Amazon UK?', a: 'Yes, that is planned. This page will link to the listing as soon as it is live.' },
      { q: 'Is there a minimum order?', a: 'It depends on the format and the volume, so it comes with the quote. Tell us what you make and how much each month and you will have the minimum order and the lead time along with the technical sheet.' },
      { q: 'Which format should I ask for?', a: 'Liquid if an opened pack is used within {opened_days} days in the fridge; powder if it is not, since an opened pouch does not spoil while it stays dry and closed. Many bars keep both.' },
      { q: 'How many sours does a litre pour?', a: '{cocktails_batches_1l}, at {cocktails_dose} g each, dry shaken first. A 200 g pouch of powder pours {cocktails_batches_200g}.' },
    ],
    links: [
      { href: '{bars_href}', label: 'Bars and cocktails' },
      { href: '{pastry_href}', label: 'Pastry and bakery' },
      { href: '{cocktails_href}', label: 'Cocktails: liquid or powder?' },
      { href: '{products_href}', label: 'Products and formats' },
    ],
  },

  france: {
    inCountry: 'in France',
    title: 'Where to Buy Aquafaba in France - VERY AQUAFABA',
    h1: 'Where to buy VERY AQUAFABA in France',
    crumb: 'France',
    description: 'Buy VERY AQUAFABA in France on InstantChef: the 1 L liquid and the 200 g powder. Which one is for your pastry kitchen or your bar, and how to order larger volumes.',
    lead: "You don't have to give up meringue to go egg-free. VERY AQUAFABA is chickpea aquafaba, a plant-based egg white that whips, binds and emulsifies like the real thing. If you're in France, you can buy it directly from InstantChef, in liquid and in powder. Below, which one is for you and how to order in volume.",
    sections: [
      {
        id: 'which',
        title: 'Should you buy liquid or powder aquafaba?',
        html: `<p>Start with your rhythm: how often you pipe, whip or shake, and whether an opened pack is used up in time.</p>
<ul>
<li><strong>Piping macarons or meringue most days?</strong> The 1 L Tetrapak. It pours straight from the fridge at whipping temperature and makes {macarons_batches_1l} batches of macaron shells or {meringue_batches_1l} of meringue. Open it and it is used within {opened_days} days at {opened_temp} °C or below.</li>
<li><strong>Shaking sours every service?</strong> The Tetrapak again: {cocktails_dose} g per drink, dry shaken first, {cocktails_batches_1l} sours per carton. If you only pour a few sours a week, take the pouch instead and make up what the night needs.</li>
<li><strong>Baking to order, or short on fridge space?</strong> The 200 g pouch of powder: {white_powder} g and {white_water} ml of water per egg white, {powder_200g_whites} egg whites per pouch, and no date once opened.</li>
</ul>
<p>The <a href="{pastry_href}">pastry and bakery page</a> and the <a href="{bars_href}">bars and cocktails page</a> take each of those further, and the <a href="{macarons_href}">macarons guide</a> has the full method.</p>`,
      },
      {
        id: 'more',
        title: 'Buying for a laboratory or a group',
        html: `<p>InstantChef carries the two formats most kitchens start with. If you need more, we quote it for your project: the 10 L bag-in-box is {bib_10l_whites} egg whites, for a central kitchen drawing by the kilo, and the 1 T IBC {ibc_1t_whites}, for a line. Tell us what you make and roughly how much each month through the form on this page, and the technical sheet comes back with the quote.</p>`,
      },
    ],
    faq: [
      { q: 'Where can I buy aquafaba in France?', a: 'On InstantChef, through the two products on this page: the liquid in 1 L and the powder in 200 g.' },
      { q: 'How many macaron batches does a 1 L Tetrapak make?', a: '{macarons_batches_1l} batches of about {macarons_yield} shells, at {macarons_dose} g each. The same carton makes {meringue_batches_1l} batches of meringue or {cocktails_batches_1l} sours.' },
      { q: 'Is the powder on InstantChef too?', a: 'Yes, the 200 g pouch, which is {powder_200g_whites} egg whites made up at {white_powder} g of powder and {white_water} ml of water each. An opened pouch keeps as long as it stays dry and closed.' },
      { q: 'Will VERY AQUAFABA be on Amazon in France?', a: 'That is the plan. Until then, InstantChef carries both formats, and this page will link to Amazon as soon as it is live.' },
      { q: 'How do I get the large formats?', a: 'Through the form on this page: the bag-in-box and the IBC are quoted for your project, with the technical sheet.' },
    ],
    links: [
      { href: '{bars_href}', label: 'Bars and cocktails' },
      { href: '{pastry_href}', label: 'Pastry and bakery' },
      { href: '{macarons_href}', label: 'Macarons: liquid or powder?' },
      { href: '{index_href}', label: 'All application guides' },
      { href: '{products_href}', label: 'Products and formats' },
    ],
  },

  belgium: {
    inCountry: 'in Belgium',
    title: 'How to Get Aquafaba in Belgium - VERY AQUAFABA',
    h1: 'How to get VERY AQUAFABA in Belgium',
    crumb: 'Belgium',
    description: 'VERY AQUAFABA in Belgium: no online shop yet, but a message to us is all it takes. How to order, how much a pastry kitchen should ask for, and whether to ask for liquid or powder.',
    lead: "Chocolate mousse without the egg, macarons without the egg white: VERY AQUAFABA is chickpea aquafaba, a plant-based egg white that whips, binds and emulsifies like the real thing. It isn't in a Belgian online shop yet, but a message to us is all it takes. Tell us what you make and roughly how much, and we'll come back with the formats, the technical sheet and a quote.",
    sections: [
      {
        id: 'order',
        title: 'How to order in Belgium',
        html: `<p>Tell us about your kitchen, and we take it from there. Here's how to order aquafaba from us:</p>
<ol>
<li><strong>Send us a few lines about what you make and roughly how much each month.</strong> The form at the foot of this page asks for your company, the application and an estimated monthly volume.</li>
<li><strong>We reply with the formats we can send you, the technical sheet and a quote,</strong> including the minimum order and the lead time for your volume.</li>
<li><strong>You order.</strong> Sealed, the packs keep at least {unopened_months} months at room temperature, so nothing has to be used the week it arrives.</li>
</ol>
<p>An Amazon listing for Belgium and the Netherlands is planned. When it is live, this page will link to it.</p>`,
      },
      {
        id: 'howmuch',
        title: 'How much should you ask for?',
        html: `<p>A rough monthly figure is enough. Think in the desserts you plate: a batch of chocolate mousse takes {chocolate_mousse_dose} g of aquafaba for about {chocolate_mousse_yield} portions, so a restaurant serving sixty portions a week is around {mousse_60_week_l} litres a month. A batch of macarons takes {macarons_dose} g, a batch of meringue {meringue_dose} g. Each <a href="{index_href}">application guide</a> has a calculator that does the sum for your recipe.</p>
<p>To give you a sense of scale: a 1 L Tetrapak is {liquid_1l_whites} egg whites, which is {chocolate_mousse_batches_1l} batches of mousse or {macarons_batches_1l} of macarons. A 200 g pouch of powder is {powder_200g_whites} egg whites. A pastry kitchen piping most days goes through a Tetrapak in a few days; a restaurant with mousse as one dessert among several is better served by a pouch.</p>`,
      },
      {
        id: 'format',
        title: 'Liquid or powder: which should you ask for?',
        html: `<p>Same aquafaba, two states. The liquid pours from the fridge already at whipping temperature and, once opened, is used within {opened_days} days. The powder is made up with water when you need it, {white_powder} g and {white_water} ml per egg white, and an opened pouch keeps until you need it, dry and closed.</p>
<p>A pastry kitchen that whips most days asks for liquid. A restaurant that sets a mousse now and then asks for powder, so nothing goes off between menus. A chocolate line folding aquafaba in every day is closer to the 10 L bag-in-box. The <a href="{chocolate_mousse_href}">chocolate mousse guide</a> and the <a href="{pastry_href}">pastry and bakery page</a> take it further.</p>`,
      },
    ],
    faq: [
      { q: 'Can I buy aquafaba in Belgium today?', a: 'Not from a shop yet. Send us a few lines through the form on this page, what you make and your estimated monthly volume, and we reply with the formats, the technical sheet and a quote.' },
      { q: 'Will VERY AQUAFABA be on Amazon in Belgium?', a: 'Yes, an Amazon listing for Belgium and the Netherlands is planned. This page will link to it as soon as it is live.' },
      { q: 'Is there a minimum order?', a: 'It depends on the format and the volume, so it comes with the quote. Tell us what you make and how much each month and you will have the minimum order and the lead time along with the technical sheet.' },
      { q: 'How many portions of mousse does a litre make?', a: 'A 1 L Tetrapak is {chocolate_mousse_batches_1l} batches of about {chocolate_mousse_yield} portions, at {chocolate_mousse_dose} g of aquafaba each. The mousse sets in {chocolate_mousse_set_time} hours and keeps {chocolate_mousse_keep} days refrigerated.' },
      { q: 'Should a pastry kitchen ask for liquid or powder?', a: 'Liquid if you whip most days, because an opened Tetrapak is used within {opened_days} days. Powder if you set a mousse or pipe macarons now and then, because an opened pouch does not spoil.' },
    ],
    links: [
      { href: '{chocolate_mousse_href}', label: 'Chocolate mousse: liquid or powder?' },
      { href: '{macarons_href}', label: 'Macarons: liquid or powder?' },
      { href: '{pastry_href}', label: 'Pastry and bakery' },
      { href: '{products_href}', label: 'Products and formats' },
    ],
  },

  germany: {
    inCountry: 'in Germany',
    title: 'Where to Buy Aquafaba in Germany - VERY AQUAFABA',
    h1: 'Where to buy VERY AQUAFABA in Germany',
    crumb: 'Germany',
    description: 'Buy VERY AQUAFABA in Germany on Amazon: the 1 L Tetrapak of liquid and the 200 g pouch of powder. Which one to keep in stock for your bakery, and how to order larger volumes.',
    lead: "Every bakery gets the request sooner or later: a cake without egg, a vegan order for a birthday, a customer with an allergy. VERY AQUAFABA is chickpea aquafaba, a plant-based egg white that whips, binds and emulsifies like the real thing. If you're in Germany, you can buy it directly from Amazon, in liquid and in powder. Below, which one to keep in stock and how to order in volume.",
    sections: [
      {
        id: 'which',
        title: 'Which aquafaba format should you buy?',
        html: `<p>Start with how much of it goes into the daily bake, because that decides whether an opened pack turns over in time.</p>
<ul>
<li><strong>Baking egg-free every day?</strong> Keep the 1 L Tetrapak in the fridge. It replaces {eggs_1l} whole eggs, or {liquid_1l_whites} egg whites, and it pours straight into the mixer at whipping temperature. Open it and it is used within {opened_days} days, which a daily line gets through easily.</li>
<li><strong>Getting the occasional vegan order?</strong> The 200 g pouch of powder is the one. Made up at {white_powder} g of powder and {white_water} ml of water per egg white, it covers {powder_200g_whites} egg whites, and an opened pouch keeps as long as it stays dry and closed. Nothing goes off between orders.</li>
<li><strong>Both, on different days of the week?</strong> Many bakeries keep the Tetrapak for the line and the pouch for the orders. The recipe is the same on either.</li>
</ul>
<p>One thing to know when you replace whole eggs in a sponge or a brioche: aquafaba brings more water than an egg, so bring the other liquids down by {reduce_liquids} percent and bake through. The <a href="{baking_href}">baking guide</a> covers it bake by bake.</p>`,
      },
      {
        id: 'more',
        title: 'Need more than a Tetrapak a week?',
        html: `<p>Amazon carries the two formats most kitchens start with. If you need more, we quote it for your project: the 10 L bag-in-box is {bib_10l_whites} egg whites, the 1 T IBC {ibc_1t_whites}, and the 3 kg pouch of powder {powder_3kg_whites}, the one for a dry premix. Tell us what you bake and roughly how much each month through the form on this page, and the technical sheet comes back with the quote.</p>`,
      },
    ],
    faq: [
      { q: 'Where can I buy aquafaba in Germany?', a: 'On Amazon, through the two products on this page: the 1 L Tetrapak of liquid and the 200 g pouch of powder.' },
      { q: 'How many eggs does a 1 L Tetrapak replace in baking?', a: '{eggs_1l} whole eggs at {egg_liquid} g each, or {liquid_1l_whites} egg whites at {white_liquid} g. Reduce the other liquids by {reduce_liquids} percent when you replace whole eggs.' },
      { q: 'Should a bakery buy the liquid or the powder?', a: 'The liquid if egg-free baking is part of every day, because an opened Tetrapak is used within {opened_days} days. The powder for occasional vegan orders, because an opened pouch does not spoil. Many bakeries keep both.' },
      { q: 'How do I get the large formats?', a: 'Through the form on this page: the bag-in-box, the IBC and the 3 kg pouch are quoted for your project, with the technical sheet.' },
    ],
    links: [
      { href: '{pastry_href}', label: 'Pastry and bakery' },
      { href: '{baking_href}', label: 'Baking: liquid or powder?' },
      { href: '{reconstitution_href}', label: 'Powder reconstitution: the rule per egg white' },
      { href: '{index_href}', label: 'All application guides' },
      { href: '{products_href}', label: 'Products and formats' },
    ],
  },

  netherlands: {
    inCountry: 'in the Netherlands',
    title: 'How to Get Aquafaba in the Netherlands - VERY AQUAFABA',
    h1: 'How to get VERY AQUAFABA in the Netherlands',
    crumb: 'Netherlands',
    description: 'VERY AQUAFABA in the Netherlands: no online shop yet, but write to us and we sort it out. How to order, how much a bakery should ask for, and whether to ask for liquid or powder.',
    lead: "A vegan cake that rises, a meringue that holds, a mousse that sets: VERY AQUAFABA is chickpea aquafaba, a plant-based egg white that whips, binds and emulsifies like the real thing. We're not in a Dutch online shop yet, so for now the way to get it is to write to us. Tell us what you bake and roughly how much, and we'll come back with the formats, the technical sheet and a quote.",
    sections: [
      {
        id: 'order',
        title: 'How to order in the Netherlands',
        html: `<p>Tell us about your bakery or kitchen, and we take it from there. Here's how to order aquafaba from us:</p>
<ol>
<li><strong>Write to us with what you bake and roughly how much each month.</strong> The form at the foot of this page asks for your company, the application and an estimated monthly volume. A line about the project helps.</li>
<li><strong>We reply with the formats we can send you, the technical sheet and a quote,</strong> including the minimum order and the lead time for your volume.</li>
<li><strong>You order.</strong> Sealed, the packs keep at least {unopened_months} months at room temperature, so a first order can wait in the dry store until the next vegan request comes in.</li>
</ol>
<p>An Amazon listing for the Netherlands and Belgium is planned. When it is live, this page will link to it.</p>`,
      },
      {
        id: 'howmuch',
        title: 'How much should you ask for?',
        html: `<p>A rough monthly figure is all we need. For a bakery the simplest way to get there is to count the eggs you would replace: one whole egg is {egg_liquid} g of aquafaba, one egg white {white_liquid} g. A bakery that swaps thirty eggs a day is around {eggs_30_day_l} litres a month; a batch of meringue is {meringue_dose} g. If you would rather not do the sum, the <a href="{baking_calc_href}">substitution calculator</a> converts a whole recipe.</p>
<p>To give you a sense of scale: a 1 L Tetrapak replaces {eggs_1l} whole eggs or {liquid_1l_whites} egg whites, which is {meringue_batches_1l} batches of meringue. A 200 g pouch of powder replaces {powder_200g_whites} egg whites. A bakery with an egg-free line every day goes through a Tetrapak in a few days; one with the occasional vegan order is better served by a pouch.</p>`,
      },
      {
        id: 'format',
        title: 'Liquid or powder: which should you ask for?',
        html: `<p>They are the same aquafaba in two states. The liquid pours straight into the mixer and, once opened, lives in the fridge for {opened_days} days. The powder is mixed with water when you need it, {white_powder} g and {white_water} ml per egg white, and an opened pouch keeps until you need it, dry and closed.</p>
<p>For a daily egg-free line, ask for liquid: the pack turns over well inside its {opened_days} days. For the occasional vegan order, ask for powder: nothing goes off between orders. Many bakeries keep both. One thing to know when you replace whole eggs: aquafaba brings more water than an egg, so bring the other liquids down by {reduce_liquids} percent. The <a href="{baking_href}">baking guide</a> covers it bake by bake, and the <a href="{pastry_href}">pastry and bakery page</a> plans the week around what keeps.</p>`,
      },
    ],
    faq: [
      { q: 'Can I buy aquafaba in the Netherlands today?', a: 'Not from a shop yet. Write to us through the form on this page with what you bake and your estimated monthly volume, and we reply with the formats, the technical sheet and a quote.' },
      { q: 'Will VERY AQUAFABA be on Amazon in the Netherlands?', a: 'Yes, an Amazon listing for the Netherlands and Belgium is planned. This page will link to it as soon as it is live.' },
      { q: 'Is there a minimum order?', a: 'It depends on the format and the volume, so it comes with the quote. Tell us what you bake and how much each month and you will have the minimum order and the lead time along with the technical sheet.' },
      { q: 'How many eggs does a 1 L Tetrapak replace?', a: '{eggs_1l} whole eggs at {egg_liquid} g each, or {liquid_1l_whites} egg whites at {white_liquid} g. Reduce the other liquids by {reduce_liquids} percent when you replace whole eggs.' },
      { q: 'Should a bakery ask for liquid or powder?', a: 'Liquid for a daily egg-free line, because an opened Tetrapak is used within {opened_days} days. Powder for occasional vegan orders, because an opened pouch does not spoil. Many bakeries keep both.' },
    ],
    links: [
      { href: '{pastry_href}', label: 'Pastry and bakery' },
      { href: '{baking_href}', label: 'Baking: liquid or powder?' },
      { href: '{baking_calc_href}', label: 'Substitution calculator' },
      { href: '{products_href}', label: 'Products and formats' },
    ],
  },

};
