// Where to buy, English (set-2 E0 and the English speaking countries). 'index' is the
// directory; every other key is a country whose channels are listed in
// data/resources/stockists.js. The pages never carry a price or a stock level: those belong
// to the distributor. Figures are {tokens} filled from facts.json. No em/en dash.
const grid = (heads, rows) => `<table class="va-guide-grid">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;

// The range block repeats on every country page: it is the same product everywhere, and
// what changes is the channel; each country page adds its own copy around it.
const range = `<p>The range is the same in every country. Each pack is described by the egg whites it replaces, at {white_liquid} g of liquid or {white_powder} g of powder per egg white.</p>
<ul>
<li>Liquid: 1 L Tetrapak = {liquid_1l_whites} egg whites, 10 L bag-in-box = {bib_10l_whites}, 1 T IBC = {ibc_1t_whites}.</li>
<li>Powder: 30 g = {powder_30g_whites} egg whites, 200 g = {powder_200g_whites}, 3 kg = {powder_3kg_whites}.</li>
</ul>
<p>Sealed, both keep at least {unopened_months} months at room temperature. Opened liquid is refrigerated at {opened_temp} °C or below and used within {opened_days} days; opened powder does not spoil while it stays dry and closed. The <a href="{products_href}">Products page</a> carries the full range.</p>`;

export default {
  index: {
    title: 'Where to Buy VERY AQUAFABA: the Channels by Country - VERY AQUAFABA',
    h1: 'Where to buy VERY AQUAFABA, country by country',
    crumb: 'Where to buy',
    enquiryLabel: 'Where to buy',
    description: 'The countries with a VERY AQUAFABA channel and how to buy in each: online shops, wholesalers and foodservice distributors, plus the enquiry form for a country that is not listed yet.',
    lead: 'VERY AQUAFABA is sold through its own distributors, and the channel depends on the country: an online shop in one, a foodservice wholesaler in another, a marketplace for retailers in a third. This page lists the countries where a channel is recorded, in the language of that country, and what to do when yours is not on the list.',
    figures: true,
    sections: [
      {
        id: 'countries',
        title: 'Countries with a channel',
        html: `<p>Each page carries the channels of that country with their links, the formats each one lists, and the enquiry form for professional volumes.</p>
${grid(['Country', 'Language of the page', 'Channels'], [
  ['<a href="{united_states_href}">United States</a>', 'English', 'Amazon, including the cocktail listing'],
  ['<a href="{canada_href}">Canada</a>', 'English', 'Qualifirst'],
  ['<a href="{australia_href}">Australia</a>', 'English', 'Apromo Trading'],
  ['<a href="{sweden_href}">Sweden</a>', 'English', 'Chokladhuset'],
  ['France, Belgium, Luxembourg, Switzerland', 'French', 'Instantchef, Maison Medelys, Ankorstore, The Cocktailist, JMillet, Vitodistribution, Botanica, Horeca Totaal, Provencale, Siradis'],
  ['Germany, Switzerland', 'German', 'Amazon, Baba Gourmet, Siradis'],
  ['Belgium', 'Dutch', 'Botanica, Horeca Totaal'],
])}
<p>A country appears here once a channel is recorded for it. Where none is, the enquiry form at the foot of this page is the way in: it asks for the country, the application and the estimated monthly volume.</p>`,
      },
      { id: 'range', title: 'What you are ordering', html: range },
      {
        id: 'professional',
        title: 'Professional volumes and the technical sheet',
        html: `<p>The 10 L bag-in-box and the 1 T IBC are not sold through a shop: they are quoted per project, with the technical sheet, once the application and the monthly volume are known. That is what the enquiry form at the foot of this page is for, and the answer carries the specifications for your format.</p>
<p>If you are still choosing between liquid and powder, the <a href="{professional_href}">professionals section</a> sorts the question by activity: <a href="{pastry_href}">pastry and bakery</a>, <a href="{bars_href}">bars and cocktails</a>, <a href="{foodservice_href}">foodservice and central kitchens</a> and <a href="{industry_href}">food manufacturing</a>.</p>`,
      },
    ],
    faq: [
      { q: 'Which countries have a channel today?', a: 'The United States, Canada, Australia, Sweden, France, Belgium, Luxembourg, Switzerland and Germany, each on its own page in the language of that country.' },
      { q: 'My country is not listed, what now?', a: 'Use the enquiry form at the foot of this page: country, application and estimated monthly volume. New markets are opened from those enquiries.' },
      { q: 'Are prices shown on these pages?', a: 'No. Prices and stock belong to the distributor, so each page links to the channel and leaves that to them.' },
      { q: 'Can I order the bag-in-box or the IBC online?', a: 'No. The 10 L bag-in-box and the 1 T IBC are quoted per project with the technical sheet, through the enquiry form.' },
    ],
    links: [
      { href: '{united_states_href}', label: 'Where to buy in the United States' },
      { href: '{canada_href}', label: 'Where to buy in Canada' },
      { href: '{australia_href}', label: 'Where to buy in Australia' },
      { href: '{sweden_href}', label: 'Where to buy in Sweden' },
      { href: '{professional_href}', label: 'Aquafaba for professionals' },
    ],
  },

  'united-states': {
    country: 'the United States',
    title: 'Where to Buy Aquafaba in the United States - VERY AQUAFABA',
    h1: 'Where to buy VERY AQUAFABA in the United States',
    crumb: 'United States',
    description: 'VERY AQUAFABA in the United States: the Amazon listings, including the one for cocktail bars, what a 1 L carton replaces, and the enquiry form for professional volumes.',
    lead: 'In the United States, VERY AQUAFABA is sold on Amazon, with a separate listing for cocktail bars. One 1 L carton replaces {liquid_1l_whites} egg whites, which is {cocktails_batches_1l} sours or {meringue_batches_1l} batches of meringue. Larger formats and the powder go through the enquiry form at the foot of this page.',
    sections: [
      {
        id: 'order',
        title: 'What the listing covers',
        html: `<p>The channels below are the ones recorded for the United States. The first is the standard 1 L carton; the second is the listing set up for cocktail bars, the same aquafaba with a listing of its own.</p>
<p>A carton is {liquid_1l_whites} egg whites: {cocktails_batches_1l} sours at {cocktails_dose} g each, {meringue_batches_1l} batches of meringue, {mayonnaise_batches_1l} batches of mayonnaise, or {eggs_1l} whole eggs replaced in baking. Once it is open it is refrigerated at {opened_temp} °C or below and used within {opened_days} days, so a bar pouring sours every service empties it comfortably.</p>`,
      },
      { id: 'range', title: 'The range behind the listing', html: range },
      {
        id: 'professional',
        title: 'Restaurants, bars and production',
        html: `<p>For a venue that goes past a carton a week, or for a line, the formats are quoted per project: the 10 L bag-in-box is {bib_10l_whites} egg whites and the 1 T IBC {ibc_1t_whites}. Describe the application and the estimated monthly volume through the form below and the technical sheet comes back with the answer.</p>
<p>Which format fits is worked out by activity in the <a href="{professional_href}">professionals section</a>, and by recipe in the <a href="{index_href}">application guides</a>: a bar starts at <a href="{bars_href}">bars and cocktails</a>, a kitchen at <a href="{foodservice_href}">foodservice</a>.</p>`,
      },
    ],
    faq: [
      { q: 'Where can I buy aquafaba in the United States?', a: 'On Amazon, through the listings below: the 1 L carton and the listing for cocktail bars. Both are VERY AQUAFABA liquid.' },
      { q: 'What does a 1 L carton replace?', a: '{liquid_1l_whites} egg whites, which is {cocktails_batches_1l} sours, {meringue_batches_1l} batches of meringue or {eggs_1l} whole eggs in baking.' },
      { q: 'Is the powder sold there?', a: 'The listings below carry the liquid. For the powder and the professional formats, ask through the enquiry form at the foot of this page.' },
      { q: 'How long does an opened carton keep?', a: '{opened_days} days at {opened_temp} °C or below. Sealed, it keeps at least {unopened_months} months at room temperature.' },
    ],
    links: [
      { href: '{bars_href}', label: 'Bars and cocktails' },
      { href: '{cocktails_href}', label: 'Cocktails: liquid or powder?' },
      { href: '{index_href}', label: 'All application guides' },
      { href: '{products_href}', label: 'Products and formats' },
    ],
  },

  canada: {
    country: 'Canada',
    title: 'Where to Buy Aquafaba in Canada - VERY AQUAFABA',
    h1: 'Where to buy VERY AQUAFABA in Canada',
    crumb: 'Canada',
    description: 'VERY AQUAFABA in Canada through Qualifirst: what the 1 L carton replaces, how it is stored once opened, and the enquiry form for restaurant and production volumes.',
    lead: 'In Canada, VERY AQUAFABA is listed by Qualifirst, the specialty food distributor, as a vegan egg white substitute in 1 L. One carton replaces {liquid_1l_whites} egg whites, which is {meringue_batches_1l} batches of meringue or {mayonnaise_batches_1l} batches of mayonnaise. For larger formats, the enquiry form at the foot of this page is the way in.',
    sections: [
      {
        id: 'order',
        title: 'Ordering through a specialty distributor',
        html: `<p>Qualifirst lists the liquid in 1 L, the format that suits a single kitchen: a pastry section, a restaurant, a bar. The carton arrives shelf stable and goes into the dry store until it is opened, which is the part that separates it from liquid egg white.</p>
<p>What one carton covers: {meringue_batches_1l} batches of meringue at {meringue_dose} g, {macarons_batches_1l} batches of macaron shells, {chocolate_mousse_batches_1l} batches of mousse, {cocktails_batches_1l} sours or {eggs_1l} whole eggs in baking. Opened, it is refrigerated at {opened_temp} °C or below and used within {opened_days} days.</p>`,
      },
      { id: 'range', title: 'The range behind the listing', html: range },
      {
        id: 'professional',
        title: 'Volumes for a group or a line',
        html: `<p>Past the carton, the formats are quoted per project: the 10 L bag-in-box, {bib_10l_whites} egg whites, for a central kitchen drawing by the kilo each shift, and the 1 T IBC, {ibc_1t_whites}, for a line. The form below asks for the company, the country, the application and the estimated monthly volume, and the technical sheet comes with the answer.</p>
<p>The <a href="{foodservice_href}">foodservice page</a> works through cold chain and storage for a central kitchen, and the <a href="{pastry_href}">pastry and bakery page</a> does the same for a bakery.</p>`,
      },
    ],
    faq: [
      { q: 'Where can I buy aquafaba in Canada?', a: 'Through Qualifirst, which lists VERY AQUAFABA liquid in 1 L. The link is in the table below.' },
      { q: 'How many egg whites does a carton replace?', a: '{liquid_1l_whites}, at {white_liquid} g per egg white. In the kitchen that is {meringue_batches_1l} batches of meringue or {mayonnaise_batches_1l} of mayonnaise.' },
      { q: 'Does it need refrigerating before opening?', a: 'No. Sealed, it keeps at least {unopened_months} months at room temperature. Once opened, {opened_temp} °C or below and used within {opened_days} days.' },
      { q: 'How do we order for several sites?', a: 'Through the enquiry form at the foot of this page: the bag-in-box and the IBC are quoted per project with the technical sheet.' },
    ],
    links: [
      { href: '{foodservice_href}', label: 'Foodservice and central kitchens' },
      { href: '{pastry_href}', label: 'Pastry and bakery' },
      { href: '{index_href}', label: 'All application guides' },
      { href: '{products_href}', label: 'Products and formats' },
    ],
  },

  australia: {
    country: 'Australia',
    title: 'Where to Buy Aquafaba in Australia - VERY AQUAFABA',
    h1: 'Where to buy VERY AQUAFABA in Australia',
    crumb: 'Australia',
    description: 'VERY AQUAFABA in Australia through Apromo Trading: the 1 L liquid, what it replaces in the kitchen and behind the bar, and the enquiry form for wholesale volumes.',
    lead: 'In Australia, VERY AQUAFABA is carried by Apromo Trading, which lists the 1 L liquid. One carton replaces {liquid_1l_whites} egg whites: {cocktails_batches_1l} sours, {meringue_batches_1l} batches of meringue or {macarons_batches_1l} batches of macaron shells. Wholesale volumes and the other formats go through the enquiry form at the foot of this page.',
    sections: [
      {
        id: 'order',
        title: 'Ordering through the wholesaler',
        html: `<p>Apromo Trading lists the product by its item code for the 1 L carton. That is the format for a single venue, and it travels and stores like a dry good until it is opened: at least {unopened_months} months at room temperature, then {opened_days} days refrigerated at {opened_temp} °C or below.</p>
<p>For a kitchen, one carton is {meringue_batches_1l} batches of meringue at {meringue_dose} g, {chocolate_mousse_batches_1l} batches of mousse or {mayonnaise_batches_1l} batches of mayonnaise. For a bar, {cocktails_batches_1l} sours at {cocktails_dose} g.</p>`,
      },
      { id: 'range', title: 'The range behind the listing', html: range },
      {
        id: 'professional',
        title: 'Groups, distributors and production',
        html: `<p>The larger liquid formats, {bib_10l_whites} egg whites in the 10 L bag-in-box and {ibc_1t_whites} in the 1 T IBC, are quoted per project with the technical sheet. So is the 3 kg powder pouch, {powder_3kg_whites} egg whites, which suits a venue whose rotation is uneven or a dry premix.</p>
<p>Use the form below with the application and the estimated monthly volume. The <a href="{bars_href}">bars and cocktails page</a> and the <a href="{pastry_href}">pastry and bakery page</a> set out which format each of those venues ends up with.</p>`,
      },
    ],
    faq: [
      { q: 'Where can I buy aquafaba in Australia?', a: 'Through Apromo Trading, which lists the VERY AQUAFABA 1 L liquid. The link is in the table below.' },
      { q: 'What does one carton cover behind the bar?', a: '{cocktails_batches_1l} sours at {cocktails_dose} g each, weighed or jiggered rather than free poured.' },
      { q: 'Is there a format for a venue that uses it rarely?', a: 'The powder: a 200 g pouch replaces {powder_200g_whites} egg whites and does not spoil once opened while it stays dry and closed. Ask for it through the enquiry form.' },
      { q: 'Can we order wholesale volumes?', a: 'Yes, through the form at the foot of this page: company, country, application and estimated monthly volume, and the technical sheet comes back with the answer.' },
    ],
    links: [
      { href: '{bars_href}', label: 'Bars and cocktails' },
      { href: '{pastry_href}', label: 'Pastry and bakery' },
      { href: '{egg_white_powder_href}', label: 'Plant-based alternative to egg white powder' },
      { href: '{products_href}', label: 'Products and formats' },
    ],
  },

  sweden: {
    country: 'Sweden',
    title: 'Where to Buy Aquafaba in Sweden - VERY AQUAFABA',
    h1: 'Where to buy VERY AQUAFABA in Sweden',
    crumb: 'Sweden',
    description: 'VERY AQUAFABA in Sweden through Chokladhuset: the 1 L liquid, what it replaces in a pastry kitchen, and the enquiry form for professional volumes.',
    lead: 'In Sweden, VERY AQUAFABA is sold by Chokladhuset, which lists the 1 L liquid. One carton replaces {liquid_1l_whites} egg whites: {meringue_batches_1l} batches of meringue, {macarons_batches_1l} batches of macaron shells or {chocolate_mousse_batches_1l} batches of mousse. Professional formats go through the enquiry form at the foot of this page.',
    sections: [
      {
        id: 'order',
        title: 'Ordering the carton',
        html: `<p>Chokladhuset lists the 1 L liquid, the format that fits a pastry kitchen or a small production. It is stored in the dry store until it is opened, at least {unopened_months} months at room temperature, and then refrigerated at {opened_temp} °C or below for {opened_days} days.</p>
<p>In a pastry section, that carton is {meringue_batches_1l} batches of meringue at {meringue_dose} g, which is about {meringue_yield} meringues each, or {macarons_batches_1l} batches of about {macarons_yield} shells. Cold and clean are what the foam asks for: {meringue_chill} °C in the bowl and no grease on the whisk.</p>`,
      },
      { id: 'range', title: 'The range behind the listing', html: range },
      {
        id: 'professional',
        title: 'Bakeries, restaurants and volumes',
        html: `<p>For a bakery running an egg-free line every day, or a group of sites, the 10 L bag-in-box is {bib_10l_whites} egg whites and the 1 T IBC {ibc_1t_whites}; both are quoted per project with the technical sheet. A kitchen whose rotation is uneven takes the powder instead: a 200 g pouch replaces {powder_200g_whites} egg whites and waits, opened, with no date attached.</p>
<p>The <a href="{pastry_href}">pastry and bakery page</a> sets the format against the oven schedule, and the <a href="{meringue_href}">meringue guide</a> carries the method, the calculator and the process sheet.</p>`,
      },
    ],
    faq: [
      { q: 'Where can I buy aquafaba in Sweden?', a: 'Through Chokladhuset, which lists the VERY AQUAFABA 1 L liquid. The link is in the table below.' },
      { q: 'How many batches of meringue does a carton give?', a: '{meringue_batches_1l} batches at {meringue_dose} g, which is about {meringue_yield} meringues each.' },
      { q: 'What if we only bake meringue now and then?', a: 'Take the powder: {white_powder} g plus {white_water} ml of water per egg white, and an opened pouch does not spoil while it stays dry and closed. Ask for it through the enquiry form.' },
      { q: 'Do you supply bakeries directly?', a: 'Professional volumes are quoted per project. Describe the application and the estimated monthly volume through the form at the foot of this page.' },
    ],
    links: [
      { href: '{pastry_href}', label: 'Pastry and bakery' },
      { href: '{meringue_href}', label: 'Meringue: liquid or powder?' },
      { href: '{macarons_href}', label: 'Macarons: liquid or powder?' },
      { href: '{products_href}', label: 'Products and formats' },
    ],
  },
};
