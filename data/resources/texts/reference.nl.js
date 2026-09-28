// Technische kennis, Nederlands (set-2 F1). Zelfde structuur en tokens als reference.en.js.
// Mengmethode en rusttijd zijn niet gepubliceerd: er wordt geen procedure verzonnen, er wordt
// naar de technische fiche verwezen. Geen gedachtestreepje.
const grid = (heads, rows, cls = '') => `<table class="va-guide-grid${cls ? ` ${cls}` : ''}">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;

export default {
  reconstitution: {
    title: 'Hoe gebruikt u aquafabapoeder? - VERY AQUAFABA',
    h1: 'Hoe gebruikt u aquafabapoeder?',
    crumb: 'Poeder aanmaken',
    eyebrow: 'Technische kennis',
    enquiryLabel: 'Poeder aanmaken',
    description: 'De regel voor VERY AQUAFABA poeder: {white_powder} g poeder plus {white_water} ml water per eiwit. De dosis per recept, een tabel van 1 tot 20 eiwitten en wat een zakje oplevert.',
    lead: 'Aquafabapoeder is een plantaardige eiwitvervanger die u vóór gebruik aanmaakt met water. Twee gram in {white_water} ml water staat voor één eiwit, en eenmaal gekoeld klopt het op tot meringue, gaat het in een mousse of emulgeert het een mayonaise. Hieronder de dosis voor elk recept op de site, de omrekening voor elk recept dat in eiwitten telt, en hoeveel een zakje oplevert.',
    figures: true,
    sections: [
      {
        id: 'rule',
        title: 'Hoeveel aquafabapoeder vervangt één eiwit?',
        html: `<p>Recepten tellen in eiwitten, dus het poeder ook. Waar het vloeibare product één eiwit vervangt met {white_liquid} g, vervangt het poeder het met {white_powder} g aangemaakt in {white_water} ml water, wat {white_total} g aquafaba geeft, gelijk aan dezelfde massa vloeibaar. Tel de eiwitten in uw recept, en de omrekening hieronder is dezelfde, welk formaat u ook in handen hebt.</p>`,
      },
      {
        id: 'batch',
        title: 'Zo gebruikt u aquafabapoeder in uw recepten',
        html: `<p>Voor de recepten op deze site staat hier wat er op de weegschaal gaat. Weeg het poeder op een fijne weegschaal; het water wordt in milliliters afgemeten.</p>
${grid(['Recept', 'Poeder', 'Water', 'Verkregen aquafaba'], [
  ['<a href="{meringue_href}">Meringue</a>, één batch ({meringue_eggs} eiwitten)', '{meringue_powder} g', '{meringue_water} ml', '{meringue_dose} g'],
  ['<a href="{macarons_href}">Macarons</a>, één batch ({macarons_eggs} eiwitten)', '{macarons_powder} g', '{macarons_water} ml', '{macarons_dose} g'],
  ['<a href="{chocolate_mousse_href}">Chocolademousse</a>, één batch ({chocolate_mousse_eggs} eiwitten)', '{chocolate_mousse_powder} g', '{chocolate_mousse_water} ml', '{chocolate_mousse_dose} g'],
  ['<a href="{mayonnaise_href}">Mayonaise</a>, één batch', '{mayonnaise_powder} g', '{mayonnaise_water} ml', '{mayonnaise_dose} g'],
  ['<a href="{cocktails_href}">Whiskey sour</a>, één drankje', '{cocktails_powder} g', '{cocktails_water} ml', '{cocktails_dose} g'],
], 'va-guide-grid--wrap')}
<p>Elke gids heeft een rekenhulp die zijn recept schaalt naar elk aantal batches, vloeibaar en als poeder met zijn water.</p>`,
      },
      {
        id: 'table',
        title: 'Hoe rekent u eiwitten om naar aquafabapoeder?',
        html: `<p>Tel de eiwitten in uw recept en zoek de rij op. De laatste kolom is de aquafaba die u in de kom zult hebben.</p>
{reconstitution_table}
<p>Voor een recept dat in hele eieren telt, rekent de <a href="{baking_calc_href}">vervangingsrekenhulp</a> eieren, eiwitten en dooiers om naar poeder met zijn water.</p>`,
      },
      {
        id: 'pouch',
        title: 'Hoeveel aquafaba levert een zakje op?',
        html: `<p>Een zakje oogt klein naast een liter vloeibaar, tot u het water erbij telt. Dit zit er in elk zakje:</p>
${grid(['Zakje', 'Eiwitten', 'Toe te voegen water', 'Verkregen aquafaba'], [
  ['30 g', '{powder_30g_whites}', '{powder_30g_water}', '{powder_30g_total}'],
  ['200 g', '{powder_200g_whites}', '{powder_200g_water}', '{powder_200g_total}'],
  ['3 kg', '{powder_3kg_whites}', '{powder_3kg_water}', '{powder_3kg_total}'],
])}
<p>Het zakje van 30 g is een proef: een service sours of een paar batches meringue. Het zakje van 200 g is het werkformaat voor een keuken of een bar. De zak van 3 kg is voor een professionele keuken of een droge premix op een lijn. De <a href="{products_href}">productpagina</a> somt ze allemaal op.</p>`,
      },
      {
        id: 'states',
        title: 'Hoe bewaart u het poeder, en de aangemaakte aquafaba',
        html: `<p>Het poeder doorloopt drie toestanden, en elke toestand vraagt iets anders:</p>
<ul>
<li><strong>In het zakje.</strong> Gesloten is het minimaal {unopened_months} maanden houdbaar op kamertemperatuur. Geopend bederft het niet: bewaar het droog en gesloten op een plank en het wacht zonder datum op de volgende batch. Dat is precies waarom keukens en bars met een lage rotatie ervoor kiezen.</li>
<li><strong>Aangemaakt.</strong> Vanaf hier behandelt u het als het vloeibare product. Maak aan wat de batch nodig heeft en koel het tot de opkloptemperatuur van het recept, {meringue_chill} °C voor een meringue, voordat het de kom in gaat. Warme aquafaba klimt trager en geeft een zwakker schuim.</li>
<li><strong>In de kom.</strong> Bij opgeklopte recepten wordt de aquafaba eerst apart opgeklopt, dus maak het aan voordat het in de buurt van het amandelmeel of de suiker komt. Het poeder is geen sluiproute voor droge mengsels. De enige uitzondering is een droge premix, een saus- of bakbasis die een producent droog mengt, waar het poeder erin gaat zoals het is.</li>
</ul>
<p>Voor de mengmethode en de rusttijd van uw formaat vraagt u de technische fiche aan via ons <a href="{contact_href}">contactformulier</a>.</p>`,
      },
    ],
    faq: [
      { q: 'Wat is aquafabapoeder?', a: 'De gedroogde vorm van VERY AQUAFABA, vóór gebruik aangemaakt met water. {white_powder} g poeder plus {white_water} ml water geeft {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba, en {white_powder} g poeder vervangt één eiwit.' },
      { q: 'Hoeveel water voor {meringue_powder} g poeder?', a: '{meringue_water} ml, volgens de verhouding van {white_water} ml per {white_powder} g. Dat is de dosis van een batch meringue, {meringue_eggs} eiwitten.' },
      { q: 'De tabel zegt {white_total} g per eiwit. Mijn recept zegt {white_liquid} g. Welke gebruik ik?', a: 'Tel in eiwitten, niet in grammen. Maak {white_powder} g poeder aan met {white_water} ml water voor elk eiwit dat het recept vervangt, en gebruik alles. De verkregen {white_total} g staan voor de {white_liquid} g vloeibaar die het recept anders zou gebruiken.' },
      { q: 'Kan ik een heel zakje in één keer aanmaken?', a: 'Maak aan wat de batch nodig heeft. Het geopende zakje bederft niet zolang het droog en gesloten blijft, dus de rest wacht op de volgende batch. Eenmaal aangemaakt wordt de aquafaba behandeld als het vloeibare product.' },
      { q: 'Klopt aangemaakt poeder op zoals het vloeibare product?', a: 'Ja. De gidsen werken op allebei hetzelfde. Koel het eerst tot de opkloptemperatuur, {meringue_chill} °C voor meringue: warme aquafaba klimt trager en geeft een zwakker schuim dat de suiker niet draagt.' },
      { q: 'Waar wordt het poeder verkocht?', a: 'De zakjes van 30 g en 200 g, en de zak van 3 kg voor professionals, staan op de [productpagina]({products_href}). Een zakje van 200 g vervangt {powder_200g_whites} eiwitten.' },
    ],
    links: [
      { href: '{meringue_href}', label: 'Meringue: vloeibaar of poeder?' },
      { href: '{meringue_calc_href}', label: 'Rekenhulp voor meringue' },
      { href: '{baking_calc_href}', label: 'Vervangingsrekenhulp' },
      { href: '{professional_href}', label: 'Aquafaba voor professionals' },
      { href: '{products_href}', label: 'Producten en formaten' },
    ],
  },
};
