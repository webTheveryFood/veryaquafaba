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
    title: 'Where to Buy VERY AQUAFABA: the Route by Country - VERY AQUAFABA',
    h1: 'Where to buy VERY AQUAFABA, country by country',
    crumb: 'Where to buy',
    enquiryLabel: 'Where to buy',
    description: 'How to buy VERY AQUAFABA in each country: the Amazon listings in the United States and Germany, InstantChef in France, and the enquiry form everywhere else.',
    lead: 'Three countries have a listing you can order from today: the United States and Germany on Amazon, and France on InstantChef. In the United Kingdom, the Netherlands, Belgium and everywhere else the route is the enquiry form, and the answer comes back with the formats and the technical sheet.',
    figures: true,
    sections: [
      {
        id: 'countries',
        title: 'The route, country by country',
        html: `${grid(['Country', 'How to buy'], [
  ['<a href="{united_states_href}">United States</a>', 'Amazon'],
  ['<a href="{germany_href}">Germany</a>', 'Amazon'],
  ['<a href="{france_href}">France</a>', 'InstantChef'],
  ['<a href="{united_kingdom_href}">United Kingdom</a>', 'Enquiry form'],
  ['<a href="{netherlands_href}">Netherlands</a>', 'Enquiry form'],
  ['<a href="{belgium_href}">Belgium</a>', 'Enquiry form'],
  ['Other countries', 'Enquiry form'],
], 'va-guide-grid--pairs')}`,
      },
      { id: 'range', title: 'What you are ordering', html: range },
      {
        id: 'professional',
        title: 'Professional volumes and the technical sheet',
        html: `<p>The 10 L bag-in-box and the 1 T IBC are not sold through a shop in any country: they are quoted per project, with the technical sheet, once the application and the monthly volume are known. That is what the form on this page is for.</p>
<p>If you are still choosing between liquid and powder, the <a href="{professional_href}">professionals section</a> sorts the question by activity: <a href="{pastry_href}">pastry and bakery</a>, <a href="{bars_href}">bars and cocktails</a>, <a href="{foodservice_href}">foodservice and central kitchens</a> and <a href="{industry_href}">food manufacturing</a>.</p>`,
      },
    ],
    faq: [
      { q: 'Which countries can I order from directly today?', a: 'The United States and Germany, through Amazon, and France, through InstantChef. Those are the listings confirmed by VERY AQUAFABA.' },
      { q: 'My country is not one of those three, what now?', a: 'Use the enquiry form: country, application and estimated monthly volume. The answer carries the technical sheet and what is possible for your country.' },
      { q: 'Are prices shown on these pages?', a: 'No. Prices and stock belong to the shop, so each page links the listing and leaves that to it.' },
      { q: 'Can I order the bag-in-box or the IBC online?', a: 'No, in any country. The 10 L bag-in-box and the 1 T IBC are quoted per project with the technical sheet, through the enquiry form.' },
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
    description: 'VERY AQUAFABA in the United States: the Amazon listings, the 1 L, the cocktail listing and the pack of four, what a carton replaces, and the form for professional volumes.',
    lead: 'In the United States the route is Amazon, with three listings: the 1 L carton, the listing set up for cocktail bars and the pack of four. One carton replaces {liquid_1l_whites} egg whites, which is {cocktails_batches_1l} sours or {meringue_batches_1l} batches of meringue. Larger formats and the powder go through the form on this page.',
    sections: [
      {
        id: 'order',
        title: 'The three listings',
        html: `<p>They carry the same aquafaba. The cocktail listing exists so a bar finds it under what it is looking for, and the pack of four is for a venue that goes through more than a carton at a time.</p>
<p>A carton is {liquid_1l_whites} egg whites: {cocktails_batches_1l} sours at {cocktails_dose} g each, {meringue_batches_1l} batches of meringue, {mayonnaise_batches_1l} batches of mayonnaise, or {eggs_1l} whole eggs replaced in baking. Once it is open it is refrigerated at {opened_temp} °C or below and used within {opened_days} days, so a bar pouring sours every service empties it comfortably.</p>`,
      },
      { id: 'range', title: 'The range behind the listings', html: range },
      {
        id: 'professional',
        title: 'Restaurants, bars and production',
        html: `<p>For a venue that goes past a carton a week, or for a line, the formats are quoted per project: the 10 L bag-in-box is {bib_10l_whites} egg whites and the 1 T IBC {ibc_1t_whites}. The powder is not on the United States listings yet, so it goes the same way. Describe the application and the estimated monthly volume through the form below and the technical sheet comes back with the answer.</p>
<p>Which format fits is worked out by activity in the <a href="{professional_href}">professionals section</a>, and by recipe in the <a href="{index_href}">application guides</a>: a bar starts at <a href="{bars_href}">bars and cocktails</a>, a kitchen at <a href="{foodservice_href}">foodservice</a>.</p>`,
      },
    ],
    faq: [
      { q: 'Where can I buy aquafaba in the United States?', a: 'On Amazon, through the listings below: the 1 L carton, the cocktail listing and the pack of four. All three are VERY AQUAFABA liquid.' },
      { q: 'What does a 1 L carton replace?', a: '{liquid_1l_whites} egg whites, which is {cocktails_batches_1l} sours, {meringue_batches_1l} batches of meringue or {eggs_1l} whole eggs in baking.' },
      { q: 'Is the powder sold there?', a: 'Not on the United States listings yet. Ask for it through the form on this page, with your application and volume.' },
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
    title: 'How to Order Aquafaba in the United Kingdom - VERY AQUAFABA',
    h1: 'How to order VERY AQUAFABA in the United Kingdom',
    crumb: 'United Kingdom',
    description: 'There is no British listing yet: orders go through the enquiry form, with the application and the monthly volume. What a pack replaces in a bakery, a kitchen or a bar, and what to prepare before you ask.',
    lead: 'There is no listing in the United Kingdom yet, so the route is the enquiry form on this page: the application and the estimated monthly volume, and the answer comes back with the formats and the technical sheet. To size it: {white_liquid} g of liquid replaces one egg white, a 1 L Tetrapak {liquid_1l_whites}, and a 200 g pouch of powder {powder_200g_whites}.',
    sections: [
      { id: 'order', title: 'What to put in the enquiry', html: ask },
      { id: 'range', title: 'The formats you are asking about', html: range },
      {
        id: 'start',
        title: 'Bakery, kitchen or bar',
        html: `<p>Three routes cover most British enquiries, and each has its own page: a bakery or pastry section reads <a href="{pastry_href}">pastry and bakery</a>, where the format follows the oven schedule; a central kitchen or a group reads <a href="{foodservice_href}">foodservice and central kitchens</a>, built around the 10 L bag-in-box; a bar reads <a href="{bars_href}">bars and cocktails</a>, where a sour takes {cocktails_dose} g.</p>
<p>The arithmetic for the form is short: {meringue_dose} g per batch of meringue, {mayonnaise_dose} g per batch of mayonnaise, {chocolate_mousse_dose} g per batch of mousse, {cocktails_dose} g per sour. Count the batches you run in a month, multiply, and write that volume in. Each <a href="{index_href}">application guide</a> carries a calculator that does it for you.</p>`,
      },
    ],
    faq: [
      { q: 'Can I buy aquafaba in the United Kingdom today?', a: 'There is no British listing yet. Orders go through the enquiry form on this page, with the application and the estimated monthly volume.' },
      { q: 'What should the enquiry say?', a: 'Company, country, application and estimated monthly volume, plus a line about the project. That is what makes the answer useful.' },
      { q: 'How much does a bakery go through?', a: 'Count the batches: {meringue_batches_1l} batches of meringue or {macarons_batches_1l} of macaron shells come out of a 1 L Tetrapak, which replaces {liquid_1l_whites} egg whites.' },
      { q: 'Which format should I ask for?', a: 'Liquid if an opened pack turns over within {opened_days} days at {opened_temp} °C or below; powder if it does not, since an opened pouch does not spoil while it stays dry and closed.' },
    ],
    links: [
      { href: '{pastry_href}', label: 'Pastry and bakery' },
      { href: '{foodservice_href}', label: 'Foodservice and central kitchens' },
      { href: '{bars_href}', label: 'Bars and cocktails' },
      { href: '{products_href}', label: 'Products and formats' },
    ],
  },

  france: {
    inCountry: 'in France',
    title: 'Where to Buy Aquafaba in France - VERY AQUAFABA',
    h1: 'Where to buy VERY AQUAFABA in France',
    crumb: 'France',
    description: 'VERY AQUAFABA in France on InstantChef: the 1 L liquid and the 200 g powder, what each pack replaces, and the form for professional volumes.',
    lead: 'In France the route is InstantChef, with two listings: the liquid in 1 L and the powder in 200 g. A 1 L Tetrapak replaces {liquid_1l_whites} egg whites, which is {meringue_batches_1l} batches of meringue or {cocktails_batches_1l} sours; a 200 g pouch of powder replaces {powder_200g_whites}. The large formats are quoted per project through the form on this page.',
    sections: [
      {
        id: 'order',
        title: 'The two listings',
        html: `<p>InstantChef lists the liquid in 1 L and the powder in 200 g: it is the same aquafaba, in both states. The liquid is poured and weighed, already at whipping temperature; the powder is reconstituted at {white_powder} g of powder and {white_water} ml of water per egg white.</p>
<p>A 1 L Tetrapak is {meringue_batches_1l} batches of meringue at {meringue_dose} g, {macarons_batches_1l} batches of macaron shells, {mayonnaise_batches_1l} batches of mayonnaise or {cocktails_batches_1l} sours. Once open, it keeps {opened_days} days at {opened_temp} °C or below; the opened pouch of powder, for its part, does not spoil while it stays dry and closed.</p>`,
      },
      { id: 'range', title: 'The range behind the listings', html: range },
      {
        id: 'professional',
        title: 'Restaurants, production and volumes',
        html: `<p>Beyond these two listings, the formats are quoted per project: the 10 L bag-in-box, {bib_10l_whites} egg whites, for a central kitchen drawing by the kilo each shift, and the 1 T IBC, {ibc_1t_whites}, for a line. The professional form below asks for the company, the country, the application and the estimated monthly volume; the technical sheet comes back with the answer.</p>
<p>The <a href="{professional_href}">professionals section</a> sorts the choice by activity, and the <a href="{index_href}">application guides</a> give the dose per recipe: <a href="{meringue_href}">meringue</a>, <a href="{macarons_href}">macarons</a>, <a href="{mayonnaise_href}">mayonnaise</a>, <a href="{cocktails_href}">cocktails</a>.</p>`,
      },
    ],
    faq: [
      { q: 'Where can I buy aquafaba in France?', a: 'On InstantChef, which lists the liquid in 1 L and the powder in 200 g. The links are in the table below.' },
      { q: 'How many egg whites does a 1 L Tetrapak replace?', a: '{liquid_1l_whites}, at {white_liquid} g per egg white. In the kitchen, that makes {meringue_batches_1l} batches of meringue or {mayonnaise_batches_1l} batches of mayonnaise.' },
      { q: 'Is the powder available?', a: 'Yes, in a 200 g pouch, which is {powder_200g_whites} egg whites, reconstituted at {white_powder} g of powder and {white_water} ml of water per egg white.' },
      { q: 'How do I get the large formats?', a: 'Through the professional form on this page: the 10 L bag-in-box and the 1 T IBC are quoted per project with the technical sheet.' },
    ],
    links: [
      { href: '{bars_href}', label: 'Bars and cocktails' },
      { href: '{pastry_href}', label: 'Pastry and bakery' },
      { href: '{index_href}', label: 'All application guides' },
      { href: '{products_href}', label: 'Products and formats' },
    ],
  },

  belgium: {
    inCountry: 'in Belgium',
    title: 'How to Order Aquafaba in Belgium - VERY AQUAFABA',
    h1: 'How to order VERY AQUAFABA in Belgium',
    crumb: 'Belgium',
    description: 'There is no local listing in Belgium yet: orders go through the forms, with the application and the monthly volume. The equivalences per pack and what to prepare.',
    lead: 'There is no Belgian listing yet: the route is the form on this page, the professional one for a volume and the contact one for a question. Give the application and the estimated monthly volume, and the answer comes back with the formats, the technical sheet and what is possible. To size it: a 1 L Tetrapak replaces {liquid_1l_whites} egg whites, which is {chocolate_mousse_batches_1l} batches of mousse or {mayonnaise_batches_1l} batches of mayonnaise.',
    sections: [
      { id: 'order', title: 'What to put in the enquiry', html: ask },
      { id: 'range', title: 'The formats you are asking us about', html: range },
      {
        id: 'start',
        title: 'Horeca, central kitchen, pastry section',
        html: `<p>Most Belgian enquiries come from horeca: a central kitchen drawing by the kilo each shift will first read the <a href="{foodservice_href}">foodservice and central kitchens</a> page, a pastry section the <a href="{pastry_href}">pastry and bakery</a> page, a bar the <a href="{bars_href}">bars and cocktails</a> page.</p>
<p>The arithmetic is short: {mayonnaise_dose} g per batch of mayonnaise, {chocolate_mousse_dose} g per batch of mousse, {cocktails_dose} g per sour. Count the batches in the month, multiply, and that is the volume to write in the form; the calculators in the <a href="{index_href}">guides</a> do it for you.</p>`,
      },
    ],
    faq: [
      { q: 'Can I buy aquafaba in Belgium today?', a: 'There is no Belgian listing yet. Orders go through the professional form on this page, with the application and the estimated monthly volume.' },
      { q: 'Is this page available in other languages?', a: 'Yes, in Dutch, French and German: the language selector at the top of the page leads to each version.' },
      { q: 'What should the enquiry contain?', a: 'Company, country, application and estimated monthly volume, plus a line about the project. The answer carries the technical sheet.' },
      { q: 'Which format should I ask for?', a: 'Liquid if an opened pack turns over within {opened_days} days at {opened_temp} °C or below; powder if it does not, since an opened pouch does not spoil while it stays dry and closed.' },
    ],
    links: [
      { href: '{foodservice_href}', label: 'Foodservice and central kitchens' },
      { href: '{bars_href}', label: 'Bars and cocktails' },
      { href: '{index_href}', label: 'All application guides' },
      { href: '{products_href}', label: 'Products and formats' },
    ],
  },

  germany: {
    inCountry: 'in Germany',
    title: 'Where to Buy Aquafaba in Germany - VERY AQUAFABA',
    h1: 'Where to buy VERY AQUAFABA in Germany',
    crumb: 'Germany',
    description: 'VERY AQUAFABA in Germany on Amazon: the 1 L Tetrapak and the 200 g powder, what a pack replaces, and the form for professional volumes.',
    lead: 'In Germany the route is Amazon, with two listings: the 1 L Tetrapak and the 200 g powder. A Tetrapak replaces {liquid_1l_whites} egg whites, which is {meringue_batches_1l} batches of meringue or {cocktails_batches_1l} sours; a 200 g pouch replaces {powder_200g_whites} egg whites. The large formats are quoted per project through the form on this page.',
    sections: [
      {
        id: 'order',
        title: 'The two listings',
        html: `<p>It is the same aquafaba in two states. The liquid is poured and weighed, already at whipping temperature straight from the fridge; the powder is mixed with {white_powder} g of powder and {white_water} ml of water per egg white.</p>
<p>A 1 L Tetrapak is {meringue_batches_1l} batches of meringue at {meringue_dose} g, {macarons_batches_1l} batches of macaron shells, {mayonnaise_batches_1l} batches of mayonnaise or {eggs_1l} whole eggs in baking. Once open, it keeps {opened_days} days at {opened_temp} °C or below; the opened pouch of powder does not spoil while it stays dry and closed.</p>`,
      },
      { id: 'range', title: 'The range behind the listings', html: range },
      {
        id: 'professional',
        title: 'Restaurants, bakeries and volumes',
        html: `<p>For a business that goes through more than one pack a week, or for a line, the formats are quoted per project: the 10 L bag-in-box with {bib_10l_whites} egg whites and the 1 T IBC with {ibc_1t_whites}. The professional form below asks for the company, the country, the application and the estimated monthly volume; the technical sheet comes with the answer.</p>
<p>The <a href="{pastry_href}">pastry and bakery page</a> and the <a href="{bars_href}">bars and cocktails page</a> show which format each kind of business ends up taking, and the <a href="{index_href}">application guides</a> give the dose per recipe.</p>`,
      },
    ],
    faq: [
      { q: 'Where can I buy aquafaba in Germany?', a: 'On Amazon, through the listings below: the 1 L Tetrapak and the 200 g powder.' },
      { q: 'How many egg whites does a 1 L Tetrapak replace?', a: '{liquid_1l_whites}, at {white_liquid} g per egg white. In the kitchen, that is {meringue_batches_1l} batches of meringue or {mayonnaise_batches_1l} batches of mayonnaise.' },
      { q: 'Is the powder sold there?', a: 'Yes, in the 200 g pouch, which is {powder_200g_whites} egg whites, mixed with {white_powder} g of powder and {white_water} ml of water per egg white.' },
      { q: 'How do I get the large formats?', a: 'Through the professional form on this page: the bag-in-box and the IBC are quoted per project with the technical sheet.' },
    ],
    links: [
      { href: '{pastry_href}', label: 'Pastry and bakery' },
      { href: '{bars_href}', label: 'Bars and cocktails' },
      { href: '{index_href}', label: 'All application guides' },
      { href: '{products_href}', label: 'Products and formats' },
    ],
  },

  netherlands: {
    inCountry: 'in the Netherlands',
    title: 'How to Order Aquafaba in the Netherlands - VERY AQUAFABA',
    h1: 'How to order VERY AQUAFABA in the Netherlands',
    crumb: 'Netherlands',
    description: 'There is no Dutch listing yet: orders go through the forms, with the application and the monthly volume. What a pack replaces in a bakery or a kitchen, and what to prepare.',
    lead: 'There is no Dutch listing yet, so the route is the form on this page, the professional one for a volume and the contact one for a question. Give the application and the estimated monthly volume, and the answer comes back with the formats and the technical sheet. To size it: {white_liquid} g of liquid replaces one egg white, a 1 L Tetrapak {liquid_1l_whites}, and a 200 g pouch of powder {powder_200g_whites}.',
    sections: [
      { id: 'order', title: 'What to put in the enquiry', html: ask },
      { id: 'range', title: 'The formats in question', html: range },
      {
        id: 'start',
        title: 'Bakery, kitchen or bar',
        html: `<p>Three routes cover most Dutch enquiries, each with its own page: a bakery or pastry section reads <a href="{pastry_href}">pastry and bakery</a>, where the format follows the oven schedule; a central kitchen reads <a href="{foodservice_href}">foodservice and central kitchens</a>, built around the 10 L bag-in-box; a bar reads <a href="{bars_href}">bars and cocktails</a>, where a sour takes {cocktails_dose} g.</p>
<p>The arithmetic for the form is short: {meringue_dose} g per batch of meringue, {mayonnaise_dose} g per batch of mayonnaise, {chocolate_mousse_dose} g per batch of mousse, {cocktails_dose} g per sour. Count the batches in the month, multiply, and write that volume in. Each <a href="{index_href}">application guide</a> has a calculator that does it for you.</p>`,
      },
    ],
    faq: [
      { q: 'Can I buy aquafaba in the Netherlands today?', a: 'There is no Dutch listing yet. Orders go through the professional form on this page, with the application and the estimated monthly volume.' },
      { q: 'What should the enquiry contain?', a: 'Company, country, application and estimated monthly volume, plus a line about the project. The answer carries the technical sheet.' },
      { q: 'How much does a bakery go through?', a: 'Count the batches: {meringue_batches_1l} batches of meringue or {macarons_batches_1l} batches of macaron shells come out of one 1 L Tetrapak, which replaces {liquid_1l_whites} egg whites.' },
      { q: 'Which format should I ask for?', a: 'Liquid if an opened pack turns over within {opened_days} days at {opened_temp} °C or below; powder if it does not, since an opened pouch does not spoil while it stays dry and closed.' },
    ],
    links: [
      { href: '{pastry_href}', label: 'Pastry and bakery' },
      { href: '{foodservice_href}', label: 'Foodservice and central kitchens' },
      { href: '{bars_href}', label: 'Bars and cocktails' },
      { href: '{products_href}', label: 'Products and formats' },
    ],
  },
};
