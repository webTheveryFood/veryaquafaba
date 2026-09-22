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
    lead: 'Drie landen hebben vandaag een vermelding waar u kunt bestellen: de Verenigde Staten en Duitsland op Amazon, en Frankrijk op InstantChef. Overal elders loopt de route via de formulieren, het contactformulier voor een vraag en het professionele formulier voor een volume, en het antwoord komt terug met de formaten en het technische blad. Deze pagina zegt wat waar geldt, zodat niemand naar een winkel wordt gestuurd die hem niet bedient.',
    figures: true,
    sections: [
      {
        id: 'countries',
        title: 'De route, land voor land',
        html: `<p>Elke landpagina draagt haar eigen route, in de taal van dat land.</p>
${grid(['Land', 'Route', 'Pagina'], [
  ['België', 'Contact- en professioneel formulier', '<a href="{belgium_href}">Hoe u bestelt in België</a>'],
  ['Verenigde Staten', 'Amazon: 1 L, cocktailvermelding en pak van vier', 'In het Engels'],
  ['Duitsland', 'Amazon: 1 L en 200 g poeder', 'In het Duits'],
  ['Frankrijk', 'InstantChef: 1 L en 200 g poeder', 'In het Frans'],
  ['Luxemburg, Zwitserland', 'Contact- en professioneel formulier', 'In het Frans en Duits'],
  ['Canada, Australië, Zweden', 'Contact- en professioneel formulier', 'In het Engels'],
  ['Elk ander land', 'Contact- en professioneel formulier', 'De formulieren onderaan deze pagina'],
])}
<p>Een land schuift naar de eerste groep zodra er een vermelding voor is bevestigd. Tot dan is de aanvraag de eerlijke route: ze laat ons zien waar de vraag zit, en ze levert u een antwoord met de formaten en het technische blad.</p>`,
      },
      { id: 'range', title: 'Wat u bestelt', html: range },
      {
        id: 'professional',
        title: 'Professionele volumes en het technische blad',
        html: `<p>De 10 L bag-in-box en de 1 T IBC worden in geen enkel land via een winkel verkocht: ze worden per project geprijsd, met het technische blad, zodra de toepassing en het maandvolume bekend zijn. Daarvoor is het professionele formulier onderaan deze pagina; voor een eenvoudige vraag volstaat het <a href="{contact_href}">contactformulier</a>.</p>
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
      { href: '{belgium_href}', label: 'Hoe u bestelt in België' },
      { href: '{professional_href}', label: 'Aquafaba voor professionals' },
      { href: '{egg_substitutes_href}', label: 'Plantaardige eivervangers' },
      { href: '{index_href}', label: 'Alle toepassingsgidsen' },
    ],
  },

  belgium: {
    country: 'België',
    title: 'Hoe u aquafaba bestelt in België - VERY AQUAFABA',
    h1: 'Hoe u VERY AQUAFABA bestelt in België',
    crumb: 'België',
    description: 'Er is nog geen Belgische vermelding: bestellingen lopen via de formulieren, met de toepassing en het maandvolume. De equivalenties per verpakking en wat u voorbereidt.',
    lead: 'Er is nog geen Belgische vermelding, dus de route is het formulier onderaan deze pagina, professioneel voor een volume en contact voor een vraag. Geef de toepassing en het geschatte maandvolume, dan komt het antwoord terug met de formaten, het technische blad en wat mogelijk is. Om te rekenen: één 1 L Tetrapak vervangt {liquid_1l_whites} eiwitten, oftewel {chocolate_mousse_batches_1l} batches mousse of {mayonnaise_batches_1l} batches mayonaise. Deze pagina bestaat ook in het Frans.',
    sections: [
      { id: 'order', title: 'Wat er in de aanvraag hoort', html: ask },
      { id: 'range', title: 'De formaten waarover het gaat', html: range },
      {
        id: 'start',
        title: 'Horeca, centrale keuken, banketafdeling',
        html: `<p>De meeste Belgische aanvragen komen uit de horeca: een centrale keuken die per dienst per kilo aftapt leest eerst de pagina <a href="{foodservice_href}">foodservice en centrale keukens</a>, een banketafdeling de pagina <a href="{pastry_href}">banketbakkerij en bakkerij</a>, een bar de pagina <a href="{bars_href}">bars en cocktails</a>.</p>
<p>Het rekenwerk is kort: {mayonnaise_dose} g per batch mayonaise, {chocolate_mousse_dose} g per batch mousse, {cocktails_dose} g per sour. Tel de batches van de maand, vermenigvuldig, en dat is het volume voor het formulier; de rekenhulpen in de <a href="{index_href}">gidsen</a> doen het voor u.</p>`,
      },
    ],
    faq: [
      { q: 'Kan ik vandaag aquafaba kopen in België?', a: 'Er is nog geen Belgische vermelding. Bestellingen lopen via het professionele formulier onderaan deze pagina, met de toepassing en het geschatte maandvolume.' },
      { q: 'Bestaat deze pagina in het Frans?', a: 'Ja, dezelfde pagina bestaat in het Frans voor België.' },
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
};
