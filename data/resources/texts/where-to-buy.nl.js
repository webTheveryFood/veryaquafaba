// Waar kopen, Nederlands (set-2 E0 en België). De aankooproute per land is die van de klant
// (Arnaud, mail van 28 augustus 2026, "Purchase URL for every country"): de Verenigde Staten
// en Duitsland via Amazon, Frankrijk via InstantChef, ALLE ANDERE LANDEN via het
// contactformulier en het B2B-formulier. Geen pagina claimt een kanaal dat we niet kunnen
// staven, en geen enkele noemt prijzen of voorraad. Geen gedachtestreepje.
const grid = (heads, rows) => `<table class="va-guide-grid">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;

const range = `<p>Elke verpakking wordt beschreven met de eiwitten die ze vervangt, bij {white_liquid} g vloeibaar of {white_powder} g poeder per eiwit.</p>
<ul>
<li>Vloeibaar: 1 L Tetrapak = {liquid_1l_whites} eiwitten, 10 L bag-in-box = {bib_10l_whites}, 1 T IBC = {ibc_1t_whites}.</li>
<li>Poeder: 30 g = {powder_30g_whites} eiwitten, 200 g = {powder_200g_whites}, 3 kg = {powder_3kg_whites}.</li>
</ul>
<p>Gesloten zijn beide minimaal {unopened_months} maanden houdbaar op kamertemperatuur. Geopend vloeibaar product wordt gekoeld op maximaal {opened_temp} °C en binnen {opened_days} dagen gebruikt; geopend poeder bederft niet zolang het droog en gesloten blijft. De <a href="{products_href}">productpagina</a> toont het hele assortiment.</p>`;

const ask = `<p>Het professionele formulier vraagt om het bedrijf, het land, de toepassing en het geschatte maandvolume, plus een regel over het project. Die velden maken het antwoord bruikbaar: de toepassing bepaalt het formaat, het volume bepaalt de verpakking.</p>
<ul>
<li>Toepassing: meringue, macarons, mousse, mayonaise, bakken, cocktails, of het product dat u ontwikkelt.</li>
<li>Volume: per maand, in liters of in vervangen eiwitten, wat u ook weet.</li>
<li>Formaat: vloeibaar als een geopende verpakking binnen {opened_days} dagen rouleert, anders poeder.</li>
</ul>
<p>Het antwoord draagt het technische blad en wat mogelijk is voor uw land. Voor een algemene vraag volstaat het <a href="{contact_href}">contactformulier</a>.</p>`;

export default {
  index: {
    title: 'Waar u VERY AQUAFABA koopt: de route per land - VERY AQUAFABA',
    h1: 'Waar u VERY AQUAFABA koopt, land voor land',
    crumb: 'Waar kopen',
    enquiryLabel: 'Waar kopen',
    description: 'Hoe u VERY AQUAFABA in elk land koopt: de Amazon-vermeldingen in de Verenigde Staten en Duitsland, InstantChef in Frankrijk, en de formulieren overal elders.',
    lead: 'Drie landen hebben vandaag een vermelding waar u kunt bestellen: de Verenigde Staten en Duitsland op Amazon, en Frankrijk op InstantChef. Overal elders loopt de route via de formulieren, het contactformulier voor een vraag en het professionele formulier voor een volume, en het antwoord komt terug met de formaten en het technische blad.',
    figures: true,
    sections: [
      {
        id: 'countries',
        title: 'De route, land voor land',
        html: `${grid(['Land', 'Hoe u koopt'], [
  ['<a href="{united_states_href}">Verenigde Staten</a>', 'Amazon'],
  ['<a href="{germany_href}">Duitsland</a>', 'Amazon'],
  ['<a href="{france_href}">Frankrijk</a>', 'InstantChef'],
  ['<a href="{united_kingdom_href}">Verenigd Koninkrijk</a>', 'Aanvraagformulier'],
  ['<a href="{netherlands_href}">Nederland</a>', 'Aanvraagformulier'],
  ['<a href="{belgium_href}">België</a>', 'Aanvraagformulier'],
  ['Andere landen', 'Aanvraagformulier'],
])}`,
      },
      { id: 'range', title: 'Wat u bestelt', html: range },
      {
        id: 'professional',
        title: 'Professionele volumes en het technische blad',
        html: `<p>De 10 L bag-in-box en de 1 T IBC worden in geen enkel land via een winkel verkocht: ze worden per project geprijsd, met het technische blad, zodra de toepassing en het maandvolume bekend zijn. Daarvoor is het professionele formulier op deze pagina; voor een eenvoudige vraag volstaat het <a href="{contact_href}">contactformulier</a>.</p>
<p>Twijfelt u nog tussen vloeibaar en poeder, dan ordent de <a href="{professional_href}">professionalssectie</a> de vraag per activiteit: <a href="{pastry_href}">banketbakkerij en bakkerij</a>, <a href="{bars_href}">bars en cocktails</a>, <a href="{foodservice_href}">foodservice en centrale keukens</a> en <a href="{industry_href}">voedingsindustrie</a>.</p>`,
      },
    ],
    faq: [
      { q: 'In welke landen kan ik vandaag rechtstreeks bestellen?', a: 'In de Verenigde Staten en Duitsland via Amazon, en in Frankrijk via InstantChef. Dat zijn de door VERY AQUAFABA bevestigde vermeldingen.' },
      { q: 'Mijn land is geen van die drie, wat nu?', a: 'Gebruik het professionele formulier: land, toepassing en geschat maandvolume. Het antwoord draagt het technische blad en wat mogelijk is voor uw land.' },
      { q: 'Staan er prijzen op deze pagina?', a: 'Nee. Prijzen en voorraad zijn van de winkel, dus elke pagina linkt de vermelding en laat dat aan hen.' },
      { q: 'Kan ik de bag-in-box of de IBC online bestellen?', a: 'Nee, in geen enkel land. De 10 L bag-in-box en de 1 T IBC worden per project geprijsd met het technische blad, via het professionele formulier.' },
    ],
    links: [
      { href: '{professional_href}', label: 'Aquafaba voor professionals' },
      { href: '{egg_substitutes_href}', label: 'Plantaardige eivervangers' },
      { href: '{index_href}', label: 'Alle toepassingsgidsen' },
    ],
  },


  netherlands: {
    inCountry: 'in Nederland',
    title: 'Hoe u aquafaba bestelt in Nederland - VERY AQUAFABA',
    h1: 'Hoe u VERY AQUAFABA bestelt in Nederland',
    crumb: 'Nederland',
    description: 'Er is nog geen Nederlandse vermelding: bestellingen lopen via de formulieren, met de toepassing en het maandvolume. Wat een verpakking vervangt in een bakkerij of keuken en wat u voorbereidt.',
    lead: 'Er is nog geen Nederlandse vermelding, dus de route is het formulier op deze pagina, professioneel voor een volume en contact voor een vraag. Geef de toepassing en het geschatte maandvolume, dan komt het antwoord terug met de formaten en het technische blad. Om te rekenen: {white_liquid} g vloeibaar vervangt één eiwit, een 1 L Tetrapak {liquid_1l_whites} en een zakje poeder van 200 g {powder_200g_whites}.',
    sections: [
      { id: 'order', title: 'Wat er in de aanvraag hoort', html: ask },
      { id: 'range', title: 'De formaten waarover het gaat', html: range },
      {
        id: 'start',
        title: 'Bakkerij, keuken of bar',
        html: `<p>Drie routes dekken de meeste Nederlandse aanvragen, elk met een eigen pagina: een bakkerij of banketafdeling leest <a href="{pastry_href}">banketbakkerij en bakkerij</a>, waar het formaat het ovenritme volgt; een centrale keuken leest <a href="{foodservice_href}">foodservice en centrale keukens</a>, opgebouwd rond de 10 L bag-in-box; een bar leest <a href="{bars_href}">bars en cocktails</a>, waar een sour {cocktails_dose} g vraagt.</p>
<p>Het rekenwerk voor het formulier is kort: {meringue_dose} g per batch meringue, {mayonnaise_dose} g per batch mayonaise, {chocolate_mousse_dose} g per batch mousse, {cocktails_dose} g per sour. Tel de batches van de maand, vermenigvuldig, en schrijf dat volume erin. Elke <a href="{index_href}">toepassingsgids</a> heeft een rekenhulp die het voor u doet.</p>`,
      },
    ],
    faq: [
      { q: 'Kan ik vandaag aquafaba kopen in Nederland?', a: 'Er is nog geen Nederlandse vermelding. Bestellingen lopen via het professionele formulier op deze pagina, met de toepassing en het geschatte maandvolume.' },
      { q: 'Wat moet de aanvraag bevatten?', a: 'Bedrijf, land, toepassing en geschat maandvolume, plus een regel over het project. Het antwoord draagt het technische blad.' },
      { q: 'Hoeveel gebruikt een bakkerij?', a: 'Tel de batches: {meringue_batches_1l} batches meringue of {macarons_batches_1l} batches macaronschelpen komen uit één 1 L Tetrapak, die {liquid_1l_whites} eiwitten vervangt.' },
      { q: 'Welk formaat vraag ik aan?', a: 'Vloeibaar als een geopende verpakking binnen {opened_days} dagen op maximaal {opened_temp} °C rouleert; anders poeder, want een geopend zakje bederft niet zolang het droog en gesloten blijft.' },
    ],
    links: [
      { href: '{pastry_href}', label: 'Banketbakkerij en bakkerij' },
      { href: '{foodservice_href}', label: 'Foodservice en centrale keukens' },
      { href: '{bars_href}', label: 'Bars en cocktails' },
      { href: '{products_href}', label: 'Producten en formaten' },
    ],
  },

  'united-states': {
    inCountry: 'in de Verenigde Staten',
    title: 'Waar u aquafaba koopt in de Verenigde Staten - VERY AQUAFABA',
    h1: 'Waar u VERY AQUAFABA koopt in de Verenigde Staten',
    crumb: 'Verenigde Staten',
    description: 'VERY AQUAFABA in de Verenigde Staten: de Amazon-vermeldingen, de 1 L, de cocktailvermelding en het pak van vier, wat een Tetrapak vervangt, en het formulier voor professionele volumes.',
    lead: 'In de Verenigde Staten loopt de route via Amazon, met drie vermeldingen: de 1 L Tetrapak, de vermelding die voor cocktailbars is opgezet en het pak van vier. Eén Tetrapak vervangt {liquid_1l_whites} eiwitten, dat zijn {cocktails_batches_1l} sours of {meringue_batches_1l} batches meringue. Grotere formaten en het poeder lopen via het formulier op deze pagina.',
    sections: [
      {
        id: 'order',
        title: 'De drie vermeldingen',
        html: `<p>Ze bevatten dezelfde aquafaba. De cocktailvermelding bestaat zodat een bar het product vindt onder wat hij zoekt, en het pak van vier is voor een zaak die meer dan één Tetrapak tegelijk verbruikt.</p>
<p>Een Tetrapak is {liquid_1l_whites} eiwitten: {cocktails_batches_1l} sours van elk {cocktails_dose} g, {meringue_batches_1l} batches meringue, {mayonnaise_batches_1l} batches mayonaise, of {eggs_1l} hele eieren vervangen bij het bakken. Eenmaal geopend wordt hij gekoeld op maximaal {opened_temp} °C en binnen {opened_days} dagen gebruikt, dus een bar die elke service sours schenkt, krijgt hem ruim op tijd leeg.</p>`,
      },
      { id: 'range', title: 'Het assortiment achter de vermeldingen', html: range },
      {
        id: 'professional',
        title: 'Restaurants, bars en productie',
        html: `<p>Voor een zaak die meer dan één Tetrapak per week verbruikt, of voor een lijn, worden de formaten per project geprijsd: de 10 L bag-in-box is {bib_10l_whites} eiwitten en de 1 T IBC {ibc_1t_whites}. Het poeder staat nog niet op de vermeldingen in de Verenigde Staten, dus dat gaat dezelfde weg. Beschrijf de toepassing en het geschatte maandvolume via het formulier hieronder, dan komt het technische blad met het antwoord mee.</p>
<p>Welk formaat past, wordt per activiteit uitgewerkt in de <a href="{professional_href}">professionalssectie</a> en per recept in de <a href="{index_href}">toepassingsgidsen</a>: een bar begint bij <a href="{bars_href}">bars en cocktails</a>, een keuken bij <a href="{foodservice_href}">foodservice</a>.</p>`,
      },
    ],
    faq: [
      { q: 'Waar kan ik aquafaba kopen in de Verenigde Staten?', a: 'Op Amazon, via de vermeldingen hieronder: de 1 L Tetrapak, de cocktailvermelding en het pak van vier. Alle drie zijn vloeibare VERY AQUAFABA.' },
      { q: 'Wat vervangt een 1 L Tetrapak?', a: '{liquid_1l_whites} eiwitten, dat zijn {cocktails_batches_1l} sours, {meringue_batches_1l} batches meringue of {eggs_1l} hele eieren bij het bakken.' },
      { q: 'Wordt het poeder daar verkocht?', a: 'Nog niet op de vermeldingen in de Verenigde Staten. Vraag het aan via het formulier op deze pagina, met uw toepassing en volume.' },
      { q: 'Hoe lang is een geopende Tetrapak houdbaar?', a: '{opened_days} dagen op maximaal {opened_temp} °C. Gesloten is hij minimaal {unopened_months} maanden houdbaar op kamertemperatuur.' },
    ],
    links: [
      { href: '{bars_href}', label: 'Bars en cocktails' },
      { href: '{cocktails_href}', label: 'Cocktails: vloeibaar of poeder?' },
      { href: '{index_href}', label: 'Alle toepassingsgidsen' },
      { href: '{products_href}', label: 'Producten en formaten' },
    ],
  },

  'united-kingdom': {
    inCountry: 'in het Verenigd Koninkrijk',
    title: 'Hoe u aquafaba bestelt in het Verenigd Koninkrijk - VERY AQUAFABA',
    h1: 'Hoe u VERY AQUAFABA bestelt in het Verenigd Koninkrijk',
    crumb: 'Verenigd Koninkrijk',
    description: 'Er is nog geen Britse vermelding: bestellingen lopen via het aanvraagformulier, met de toepassing en het maandvolume. Wat een verpakking vervangt in een bakkerij, een keuken of een bar, en wat u voorbereidt voor uw aanvraag.',
    lead: 'Er is nog geen vermelding in het Verenigd Koninkrijk, dus de route is het aanvraagformulier op deze pagina: de toepassing en het geschatte maandvolume, en het antwoord komt terug met de formaten en het technische blad. Om te rekenen: {white_liquid} g vloeibaar vervangt één eiwit, een 1 L Tetrapak {liquid_1l_whites} en een zakje poeder van 200 g {powder_200g_whites}.',
    sections: [
      { id: 'order', title: 'Wat er in de aanvraag hoort', html: ask },
      { id: 'range', title: 'De formaten waarnaar u vraagt', html: range },
      {
        id: 'start',
        title: 'Bakkerij, keuken of bar',
        html: `<p>Drie routes dekken de meeste Britse aanvragen, elk met een eigen pagina: een bakkerij of banketafdeling leest <a href="{pastry_href}">banketbakkerij en bakkerij</a>, waar het formaat het ovenritme volgt; een centrale keuken of een groep leest <a href="{foodservice_href}">foodservice en centrale keukens</a>, opgebouwd rond de 10 L bag-in-box; een bar leest <a href="{bars_href}">bars en cocktails</a>, waar een sour {cocktails_dose} g vraagt.</p>
<p>Het rekenwerk voor het formulier is kort: {meringue_dose} g per batch meringue, {mayonnaise_dose} g per batch mayonaise, {chocolate_mousse_dose} g per batch mousse, {cocktails_dose} g per sour. Tel de batches die u in een maand draait, vermenigvuldig, en schrijf dat volume erin. Elke <a href="{index_href}">toepassingsgids</a> heeft een rekenhulp die het voor u doet.</p>`,
      },
    ],
    faq: [
      { q: 'Kan ik vandaag aquafaba kopen in het Verenigd Koninkrijk?', a: 'Er is nog geen Britse vermelding. Bestellingen lopen via het aanvraagformulier op deze pagina, met de toepassing en het geschatte maandvolume.' },
      { q: 'Wat moet de aanvraag bevatten?', a: 'Bedrijf, land, toepassing en geschat maandvolume, plus een regel over het project. Dat maakt het antwoord bruikbaar.' },
      { q: 'Hoeveel verbruikt een bakkerij?', a: 'Tel de batches: {meringue_batches_1l} batches meringue of {macarons_batches_1l} batches macaronschelpen komen uit een 1 L Tetrapak, die {liquid_1l_whites} eiwitten vervangt.' },
      { q: 'Welk formaat vraag ik aan?', a: 'Vloeibaar als een geopende verpakking binnen {opened_days} dagen op maximaal {opened_temp} °C rouleert; anders poeder, want een geopend zakje bederft niet zolang het droog en gesloten blijft.' },
    ],
    links: [
      { href: '{pastry_href}', label: 'Banketbakkerij en bakkerij' },
      { href: '{foodservice_href}', label: 'Foodservice en centrale keukens' },
      { href: '{bars_href}', label: 'Bars en cocktails' },
      { href: '{products_href}', label: 'Producten en formaten' },
    ],
  },

  france: {
    inCountry: 'in Frankrijk',
    title: 'Waar u aquafaba koopt in Frankrijk - VERY AQUAFABA',
    h1: 'Waar u VERY AQUAFABA koopt in Frankrijk',
    crumb: 'Frankrijk',
    description: 'VERY AQUAFABA in Frankrijk op InstantChef: het vloeibare product van 1 L en het poeder van 200 g, wat elke verpakking vervangt, en het formulier voor professionele volumes.',
    lead: 'In Frankrijk loopt de route via InstantChef, met twee vermeldingen: het vloeibare product in 1 L en het poeder in 200 g. Een 1 L Tetrapak vervangt {liquid_1l_whites} eiwitten, dat zijn {meringue_batches_1l} batches meringue of {cocktails_batches_1l} sours; een zakje poeder van 200 g vervangt er {powder_200g_whites}. De grote formaten worden per project geprijsd via het formulier op deze pagina.',
    sections: [
      {
        id: 'order',
        title: 'De twee vermeldingen',
        html: `<p>InstantChef voert het vloeibare product in 1 L en het poeder in 200 g: het is dezelfde aquafaba, in twee vormen. Het vloeibare product wordt gegoten en gewogen, al op opkloptemperatuur; het poeder wordt aangemaakt met {white_powder} g poeder en {white_water} ml water per eiwit.</p>
<p>Een 1 L Tetrapak is {meringue_batches_1l} batches meringue van {meringue_dose} g, {macarons_batches_1l} batches macaronschelpen, {mayonnaise_batches_1l} batches mayonaise of {cocktails_batches_1l} sours. Geopend is hij {opened_days} dagen houdbaar op maximaal {opened_temp} °C; het geopende zakje poeder bederft niet zolang het droog en gesloten blijft.</p>`,
      },
      { id: 'range', title: 'Het assortiment achter de vermeldingen', html: range },
      {
        id: 'professional',
        title: 'Horeca, productie en volumes',
        html: `<p>Buiten deze twee vermeldingen worden de formaten per project geprijsd: de 10 L bag-in-box, {bib_10l_whites} eiwitten, voor een centrale keuken die per dienst per kilo aftapt, en de 1 T IBC, {ibc_1t_whites}, voor een lijn. Het professionele formulier hieronder vraagt om het bedrijf, het land, de toepassing en het geschatte maandvolume; het technische blad komt met het antwoord mee.</p>
<p>De <a href="{professional_href}">professionalssectie</a> ordent de keuze per activiteit, en de <a href="{index_href}">toepassingsgidsen</a> geven de dosis per recept: <a href="{meringue_href}">meringue</a>, <a href="{macarons_href}">macarons</a>, <a href="{mayonnaise_href}">mayonaise</a>, <a href="{cocktails_href}">cocktails</a>.</p>`,
      },
    ],
    faq: [
      { q: 'Waar koop ik aquafaba in Frankrijk?', a: 'Op InstantChef, dat het vloeibare product in 1 L en het poeder in 200 g voert. De links staan in de tabel hieronder.' },
      { q: 'Hoeveel eiwitten vervangt een 1 L Tetrapak?', a: '{liquid_1l_whites}, bij {white_liquid} g per eiwit. In de keuken zijn dat {meringue_batches_1l} batches meringue of {mayonnaise_batches_1l} batches mayonaise.' },
      { q: 'Is het poeder verkrijgbaar?', a: 'Ja, in een zakje van 200 g, dat zijn {powder_200g_whites} eiwitten, aan te maken met {white_powder} g poeder en {white_water} ml water per eiwit.' },
      { q: 'Hoe krijg ik de grote formaten?', a: 'Via het professionele formulier op deze pagina: de 10 L bag-in-box en de 1 T IBC worden per project geprijsd met het technische blad.' },
    ],
    links: [
      { href: '{bars_href}', label: 'Bars en cocktails' },
      { href: '{pastry_href}', label: 'Banketbakkerij en bakkerij' },
      { href: '{index_href}', label: 'Alle toepassingsgidsen' },
      { href: '{products_href}', label: 'Producten en formaten' },
    ],
  },

  belgium: {
    inCountry: 'in België',
    title: 'Hoe u aquafaba bestelt in België - VERY AQUAFABA',
    h1: 'Hoe u VERY AQUAFABA bestelt in België',
    crumb: 'België',
    description: 'Er is nog geen lokale vermelding in België: bestellingen lopen via de formulieren, met de toepassing en het maandvolume. De equivalenten per verpakking en wat u voorbereidt.',
    lead: 'Er is nog geen Belgische vermelding: de route is het formulier op deze pagina, professioneel voor een volume en contact voor een vraag. Geef de toepassing en het geschatte maandvolume, dan komt het antwoord terug met de formaten, het technische blad en wat mogelijk is. Om te rekenen: een 1 L Tetrapak vervangt {liquid_1l_whites} eiwitten, dat zijn {chocolate_mousse_batches_1l} batches mousse of {mayonnaise_batches_1l} batches mayonaise.',
    sections: [
      { id: 'order', title: 'Wat er in de aanvraag hoort', html: ask },
      { id: 'range', title: 'De formaten waarnaar u ons vraagt', html: range },
      {
        id: 'start',
        title: 'Horeca, centrale keuken, banketatelier',
        html: `<p>De meeste Belgische aanvragen komen uit de horeca: een centrale keuken die per dienst per kilo aftapt, leest eerst de pagina <a href="{foodservice_href}">foodservice en centrale keukens</a>, een banketatelier de pagina <a href="{pastry_href}">banketbakkerij en bakkerij</a>, een bar de pagina <a href="{bars_href}">bars en cocktails</a>.</p>
<p>Het rekenwerk is kort: {mayonnaise_dose} g per batch mayonaise, {chocolate_mousse_dose} g per batch mousse, {cocktails_dose} g per sour. Tel de batches van de maand, vermenigvuldig, en dat is het volume voor het formulier; de rekenhulpen van de <a href="{index_href}">gidsen</a> doen het voor u.</p>`,
      },
    ],
    faq: [
      { q: 'Kan ik vandaag aquafaba kopen in België?', a: 'Er is nog geen Belgische vermelding. Bestellingen lopen via het professionele formulier op deze pagina, met de toepassing en het geschatte maandvolume.' },
      { q: 'Bestaat er een Franse versie van deze pagina?', a: 'Ja, in het Frans, het Engels en het Duits: de taalkeuze bovenaan de pagina leidt naar elke versie.' },
      { q: 'Wat moet de aanvraag bevatten?', a: 'Bedrijf, land, toepassing en geschat maandvolume, plus een regel over het project. Het antwoord draagt het technische blad.' },
      { q: 'Welk formaat vraag ik aan?', a: 'Vloeibaar als een geopende verpakking binnen {opened_days} dagen op maximaal {opened_temp} °C rouleert; anders poeder, want een geopend zakje bederft niet zolang het droog en gesloten blijft.' },
    ],
    links: [
      { href: '{foodservice_href}', label: 'Foodservice en centrale keukens' },
      { href: '{bars_href}', label: 'Bars en cocktails' },
      { href: '{index_href}', label: 'Alle toepassingsgidsen' },
      { href: '{products_href}', label: 'Producten en formaten' },
    ],
  },

  germany: {
    inCountry: 'in Duitsland',
    title: 'Waar u aquafaba koopt in Duitsland - VERY AQUAFABA',
    h1: 'Waar u VERY AQUAFABA koopt in Duitsland',
    crumb: 'Duitsland',
    description: 'VERY AQUAFABA in Duitsland op Amazon: de 1 L Tetrapak en het poeder van 200 g, wat een verpakking vervangt, en het formulier voor professionele volumes.',
    lead: 'In Duitsland loopt de route via Amazon, met twee vermeldingen: de 1 L Tetrapak en het poeder van 200 g. Een Tetrapak vervangt {liquid_1l_whites} eiwitten, dat zijn {meringue_batches_1l} batches meringue of {cocktails_batches_1l} sours; een zakje van 200 g vervangt {powder_200g_whites} eiwitten. De grote formaten worden per project geprijsd via het formulier op deze pagina.',
    sections: [
      {
        id: 'order',
        title: 'De twee vermeldingen',
        html: `<p>Het is dezelfde aquafaba in twee vormen. Het vloeibare product wordt gegoten en gewogen, uit de koelkast al op opkloptemperatuur; het poeder wordt aangemaakt met {white_powder} g poeder en {white_water} ml water per eiwit.</p>
<p>Een 1 L Tetrapak is {meringue_batches_1l} batches meringue van {meringue_dose} g, {macarons_batches_1l} batches macaronschelpen, {mayonnaise_batches_1l} batches mayonaise of {eggs_1l} hele eieren bij het bakken. Geopend is hij {opened_days} dagen houdbaar op maximaal {opened_temp} °C; het geopende zakje poeder bederft niet zolang het droog en gesloten blijft.</p>`,
      },
      { id: 'range', title: 'Het assortiment achter de vermeldingen', html: range },
      {
        id: 'professional',
        title: 'Horeca, bakkerij en volumes',
        html: `<p>Voor een zaak die meer dan één verpakking per week verbruikt, of voor een lijn, worden de formaten per project geprijsd: de 10 L bag-in-box met {bib_10l_whites} eiwitten en de 1 T IBC met {ibc_1t_whites}. Het professionele formulier hieronder vraagt om bedrijf, land, toepassing en geschat maandvolume; het technische blad komt met het antwoord mee.</p>
<p>De <a href="{pastry_href}">pagina banketbakkerij en bakkerij</a> en de <a href="{bars_href}">pagina bars en cocktails</a> laten zien welk formaat welke zaak uiteindelijk neemt, en de <a href="{index_href}">toepassingsgidsen</a> geven de dosis per recept.</p>`,
      },
    ],
    faq: [
      { q: 'Waar kan ik aquafaba kopen in Duitsland?', a: 'Op Amazon, via de vermeldingen hieronder: de 1 L Tetrapak en het poeder van 200 g.' },
      { q: 'Hoeveel eiwitten vervangt een 1 L Tetrapak?', a: '{liquid_1l_whites}, bij {white_liquid} g per eiwit. In de keuken zijn dat {meringue_batches_1l} batches meringue of {mayonnaise_batches_1l} batches mayonaise.' },
      { q: 'Is het poeder daar verkrijgbaar?', a: 'Ja, in het zakje van 200 g, dat zijn {powder_200g_whites} eiwitten, aangemaakt met {white_powder} g poeder en {white_water} ml water per eiwit.' },
      { q: 'Hoe krijg ik de grote formaten?', a: 'Via het professionele formulier op deze pagina: bag-in-box en IBC worden per project geprijsd met het technische blad.' },
    ],
    links: [
      { href: '{pastry_href}', label: 'Banketbakkerij en bakkerij' },
      { href: '{bars_href}', label: 'Bars en cocktails' },
      { href: '{index_href}', label: 'Alle toepassingsgidsen' },
      { href: '{products_href}', label: 'Producten en formaten' },
    ],
  },
};
