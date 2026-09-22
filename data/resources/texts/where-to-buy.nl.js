// Waar kopen, Nederlands (set-2 E0 en België). 'index' is de wegwijzer; elke andere sleutel
// is een land waarvan de kanalen in data/resources/stockists.js staan. Geen prijzen, geen
// voorraad: dat is van de distributeur. Geen gedachtestreepje.
const grid = (heads, rows) => `<table class="va-guide-grid">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;

const range = `<p>Het assortiment is in elk land hetzelfde. Elke verpakking wordt beschreven met de eiwitten die ze vervangt, bij {white_liquid} g vloeibaar of {white_powder} g poeder per eiwit.</p>
<ul>
<li>Vloeibaar: 1 L Tetrapak = {liquid_1l_whites} eiwitten, 10 L bag-in-box = {bib_10l_whites}, 1 T IBC = {ibc_1t_whites}.</li>
<li>Poeder: 30 g = {powder_30g_whites} eiwitten, 200 g = {powder_200g_whites}, 3 kg = {powder_3kg_whites}.</li>
</ul>
<p>Gesloten zijn beide minimaal {unopened_months} maanden houdbaar op kamertemperatuur. Geopend vloeibaar product wordt gekoeld op maximaal {opened_temp} °C en binnen {opened_days} dagen gebruikt; geopend poeder bederft niet zolang het droog en gesloten blijft. De <a href="{products_href}">productpagina</a> toont het hele assortiment.</p>`;

export default {
  index: {
    title: 'Waar u VERY AQUAFABA koopt: de kanalen per land - VERY AQUAFABA',
    h1: 'Waar u VERY AQUAFABA koopt, land voor land',
    crumb: 'Waar kopen',
    enquiryLabel: 'Waar kopen',
    description: 'De landen met een VERY AQUAFABA kanaal en hoe u er koopt: webshops, groothandels en horecadistributeurs, plus het aanvraagformulier voor een land dat er nog niet bij staat.',
    lead: 'VERY AQUAFABA wordt via eigen distributeurs verkocht, en het kanaal hangt van het land af: hier een webshop, daar een horecagroothandel, elders een marktplaats voor de handel. Deze pagina somt de landen op waarvoor een kanaal is vastgelegd, in de taal van dat land, en zegt wat u doet als het uwe er niet bij staat.',
    figures: true,
    sections: [
      {
        id: 'countries',
        title: 'Landen met een kanaal',
        html: `<p>Elke pagina draagt de kanalen van dat land met hun links, wat elk kanaal vermeldt, en het aanvraagformulier voor professionele volumes.</p>
${grid(['Land', 'Taal van de pagina', 'Kanalen'], [
  ['<a href="{belgium_href}">België</a>', 'Nederlands en Frans', 'Botanica, Horeca Totaal'],
  ['Frankrijk, Luxemburg, Zwitserland', 'Frans', 'Instantchef, Maison Medelys, Ankorstore, The Cocktailist, JMillet, Vitodistribution, Provencale, Siradis'],
  ['Duitsland, Zwitserland', 'Duits', 'Amazon, Baba Gourmet, Siradis'],
  ['Verenigde Staten, Canada, Australië, Zweden', 'Engels', 'Amazon, Qualifirst, Apromo Trading, Chokladhuset'],
])}
<p>Een land verschijnt hier zodra er een kanaal voor is vastgelegd. Waar er geen is, is het aanvraagformulier onderaan deze pagina de ingang: het vraagt om land, toepassing en geschat maandvolume.</p>`,
      },
      { id: 'range', title: 'Wat u bestelt', html: range },
      {
        id: 'professional',
        title: 'Professionele volumes en het technische blad',
        html: `<p>De 10 L bag-in-box en de 1 T IBC worden niet via een winkel verkocht: ze worden per project geprijsd, met het technische blad, zodra de toepassing en het maandvolume bekend zijn. Daarvoor is het aanvraagformulier onderaan deze pagina, en het antwoord draagt de specificaties van uw formaat.</p>
<p>Twijfelt u nog tussen vloeibaar en poeder, dan ordent de <a href="{professional_href}">professionalssectie</a> de vraag per activiteit: <a href="{pastry_href}">banketbakkerij en bakkerij</a>, <a href="{bars_href}">bars en cocktails</a>, <a href="{foodservice_href}">foodservice en centrale keukens</a> en <a href="{industry_href}">voedingsindustrie</a>.</p>`,
      },
    ],
    faq: [
      { q: 'Welke landen hebben vandaag een kanaal?', a: 'België, Frankrijk, Luxemburg, Zwitserland, Duitsland, de Verenigde Staten, Canada, Australië en Zweden, elk op een eigen pagina in de taal van dat land.' },
      { q: 'Mijn land staat er niet bij, wat nu?', a: 'Gebruik het aanvraagformulier onderaan deze pagina: land, toepassing en geschat maandvolume. Nieuwe markten komen uit die aanvragen.' },
      { q: 'Staan er prijzen op deze pagina\'s?', a: 'Nee. Prijzen en voorraad zijn van de distributeur, dus elke pagina linkt naar het kanaal en laat dat aan hen.' },
      { q: 'Kan ik de bag-in-box of de IBC online bestellen?', a: 'Nee. De 10 L bag-in-box en de 1 T IBC worden per project geprijsd met het technische blad, via het aanvraagformulier.' },
    ],
    links: [
      { href: '{belgium_href}', label: 'Waar u koopt in België' },
      { href: '{professional_href}', label: 'Aquafaba voor professionals' },
      { href: '{egg_substitutes_href}', label: 'Plantaardige eivervangers' },
      { href: '{index_href}', label: 'Alle toepassingsgidsen' },
    ],
  },

  belgium: {
    country: 'België',
    title: 'Waar u aquafaba koopt in België - VERY AQUAFABA',
    h1: 'Waar u VERY AQUAFABA koopt in België',
    crumb: 'België',
    description: 'VERY AQUAFABA in België: Botanica voor het vloeibare product in 1 L en Horeca Totaal voor horecabestellingen, met de equivalenties per verpakking en het formulier voor volumes.',
    lead: 'In België zijn twee kanalen vastgelegd: Botanica, dat het vloeibare product in 1 L vermeldt, en Horeca Totaal, het bestelportaal voor de horeca. Eén 1 L Tetrapak vervangt {liquid_1l_whites} eiwitten, oftewel {chocolate_mousse_batches_1l} batches mousse of {mayonnaise_batches_1l} batches mayonaise. Deze pagina bestaat ook in het Frans.',
    sections: [
      {
        id: 'order',
        title: 'Twee kanalen, twee manieren van bestellen',
        html: `<p>Botanica richt zich op de winkel en op de professional die per fles bestelt: daar staat het vloeibare product in 1 L. Horeca Totaal is een bestelportaal voor de horeca, waar u het assortiment rechtstreeks opvraagt.</p>
<p>Wat één Tetrapak dekt: {meringue_batches_1l} batches meringue van {meringue_dose} g, {chocolate_mousse_batches_1l} batches chocolademousse, {mayonnaise_batches_1l} batches mayonaise of {cocktails_batches_1l} sours. Gesloten wacht hij minimaal {unopened_months} maanden in de droge opslag; geopend {opened_days} dagen op maximaal {opened_temp} °C.</p>`,
      },
      { id: 'range', title: 'Het assortiment achter de vermelding', html: range },
      {
        id: 'professional',
        title: 'Horeca, centrale keukens en volumes',
        html: `<p>Voor een groep of een centrale keuken staat de 10 L bag-in-box voor {bib_10l_whites} eiwitten en wordt hij per dienst per kilo afgetapt; de 1 T IBC, {ibc_1t_whites}, is voor een lijn. Beide worden per project geprijsd met het technische blad, via het formulier hieronder.</p>
<p>Voor een zaak met een ongelijke rotatie beantwoordt het poeder dezelfde vraag: {powder_200g_whites} eiwitten per zakje van 200 g, zonder datum zodra het open is. De <a href="{foodservice_href}">foodservicepagina</a> en de <a href="{bars_href}">pagina bars en cocktails</a> werken beide gevallen uit.</p>`,
      },
    ],
    faq: [
      { q: 'Waar kan ik aquafaba kopen in België?', a: 'Bij Botanica voor het vloeibare product in 1 L, of via het bestelportaal Horeca Totaal voor een horecazaak. De links staan in de tabel hieronder.' },
      { q: 'Bestaat deze pagina in het Frans?', a: 'Ja, dezelfde pagina bestaat in het Frans voor België: de kanalen zijn er identiek.' },
      { q: 'Welke formaten voor een centrale keuken?', a: 'De 10 L bag-in-box, oftewel {bib_10l_whites} eiwitten, per project geprijsd met het technische blad via het formulier onderaan deze pagina.' },
      { q: 'Hoe lang gaat een geopende verpakking mee?', a: '{opened_days} dagen op maximaal {opened_temp} °C voor het vloeibare product. Geopend poeder bederft niet zolang het droog en gesloten blijft.' },
    ],
    links: [
      { href: '{foodservice_href}', label: 'Foodservice en centrale keukens' },
      { href: '{bars_href}', label: 'Bars en cocktails' },
      { href: '{index_href}', label: 'Alle toepassingsgidsen' },
      { href: '{products_href}', label: 'Producten en formaten' },
    ],
  },
};
