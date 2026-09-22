// Technische kennis, Nederlands (set-2 F1). Zelfde structuur en tokens als reference.en.js.
export default {
  reconstitution: {
    title: 'Aquafabapoeder aanmaken: 2 g + 30 ml per eiwit - VERY AQUAFABA',
    h1: 'VERY AQUAFABA poeder aanmaken: {white_powder} g poeder en {white_water} ml water per eiwit',
    crumb: 'Poeder aanmaken',
    eyebrow: 'Technische kennis',
    enquiryLabel: 'Poeder aanmaken',
    description: 'De regel voor VERY AQUAFABA poeder: {white_powder} g poeder plus {white_water} ml water geeft {white_total} g aquafaba en vervangt één eiwit. Een tabel van 1 tot 20 eiwitten, de doses per recept en wat er verandert tussen droog poeder, water en aangemaakte aquafaba.',
    lead: 'VERY AQUAFABA poeder wordt voor gebruik aangemaakt met water, en de regel wordt per eiwit geteld: {white_powder} g poeder plus {white_water} ml water geeft {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba, en {white_powder} g poeder vervangt één eiwit. Een batch wordt gedoseerd op het aantal eiwitten dat haar recept vervangt. Deze pagina draagt de regel, een tabel van 1 tot 20 eiwitten en de doses van de siterecepten.',
    figures: true,
    sections: [
      {
        id: 'rule',
        title: 'De regel per eiwit',
        html: `<p>Het vloeibare product vervangt één eiwit met {white_liquid} g. Het poeder vervangt hetzelfde eiwit met {white_powder} g, aangemaakt met {white_water} ml water: de verkregen {white_total} g worden precies zo gebruikt als {white_total} g vloeibare aquafaba. Een recept dat in eiwitten is geteld, rekent dus om naar beide formaten zonder iets anders te veranderen.</p>
<ul>
<li>Meringue, {meringue_eggs} eiwitten: {meringue_powder} g poeder + {meringue_water} ml water, voor {meringue_dose} g aquafaba.</li>
<li>Macarons, {macarons_eggs} eiwitten: {macarons_powder} g + {macarons_water} ml, voor {macarons_dose} g.</li>
<li>Chocolademousse, {chocolate_mousse_eggs} eiwitten: {chocolate_mousse_powder} g + {chocolate_mousse_water} ml, voor {chocolate_mousse_dose} g.</li>
<li>Mayonaise: {mayonnaise_powder} g + {mayonnaise_water} ml, voor de {mayonnaise_dose} g van een batch.</li>
<li>Eén sour: {cocktails_powder} g + {cocktails_water} ml, voor de {cocktails_dose} g van een glas.</li>
</ul>
<p>Elke <a href="{index_href}">toepassingsgids</a> herhaalt zijn eigen dosis in beide formaten, en elke rekenhulp schaalt ze naar elk aantal batches.</p>`,
      },
      {
        id: 'table',
        title: 'Tabel: van 1 tot 20 eiwitten',
        html: `<p>Poeder en water per aantal eiwitten, en de verkregen aquafaba. Weeg het poeder op een fijne weegschaal; het water wordt in milliliters afgemeten.</p>
{reconstitution_table}
<p>Voor een recept dat in hele eieren is geteld, rekent de <a href="{baking_calc_href}">bakrekenhulp</a> eieren, eiwitten en dooiers om naar poeder met zijn water.</p>`,
      },
      {
        id: 'states',
        title: 'Droog poeder, water en aangemaakte aquafaba',
        html: `<p>Drie toestanden, drie manieren van bewaren. Het gesloten zakje is minimaal {unopened_months} maanden houdbaar op kamertemperatuur, net als het vloeibare product. Het geopende zakje bederft niet: het blijft droog en gesloten op een droge plank en wacht zonder datum op de volgende batch, en daarom kiezen keukens en bars met een lage rotatie ervoor. De aangemaakte aquafaba wordt behandeld als het vloeibare product: gekoeld tot de opkloptemperatuur van het recept, {meringue_chill} °C voor meringue, voordat ze in de kom gaat, want warme aquafaba klimt trager en geeft een zwakker schuim.</p>
<p>Maak aan wat de batch nodig heeft. Het poeder is bij opgeklopte recepten geen sluiproute voor droge mengsels: de aquafaba wordt eerst apart opgeklopt, dus ze wordt aangemaakt met water voordat ze in de buurt van het amandelmeel of de suiker komt. De uitzondering is een droge premix, een saus- of bakbasis die een producent droog mengt, waar het poeder erin gaat zoals het is.</p>`,
      },
      {
        id: 'method',
        title: 'Mengmethode en rusttijd',
        html: `<p>Deze pagina publiceert geen mengmethode en geen rusttijd voor het poeder: alleen de verhouding per eiwit en de doses per recept, dat zijn de cijfers die voor het product zijn bevestigd. De procedure maakt deel uit van het technische blad, aan te vragen via het formulier onderaan deze pagina.</p>
<p>Wat de gidsen wel vastleggen, is de toestand van de aangemaakte aquafaba wanneer ze in de mixer gaat: op de opkloptemperatuur van het recept, gewogen in plaats van afgemeten op volume, en aangemaakt voor de batch van dat moment.</p>`,
      },
    ],
    faq: [
      { q: 'Wat is aquafabapoeder?', a: 'De gedroogde vorm van VERY AQUAFABA, voor gebruik aangemaakt met water. {white_powder} g poeder plus {white_water} ml water geeft {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba, en vervangt één eiwit.' },
      { q: 'Hoeveel water voor {meringue_powder} g poeder?', a: '{meringue_water} ml, volgens de verhouding van {white_water} ml per {white_powder} g. Dat is de dosis van een batch meringue, {meringue_eggs} eiwitten, voor {meringue_dose} g aquafaba.' },
      { q: 'Kunnen we een heel zakje in één keer aanmaken?', a: 'Maak aan wat de batch nodig heeft. Het geopende zakje bederft niet zolang het droog en gesloten blijft, dus de rest wacht op de volgende batch; de aangemaakte aquafaba wordt behandeld als het vloeibare product.' },
      { q: 'Klopt aangemaakt poeder op zoals het vloeibare product?', a: 'De gidsen werken op allebei hetzelfde. Koel het eerst tot de opkloptemperatuur, {meringue_chill} °C voor meringue: warme aquafaba klimt trager en geeft een zwakker schuim dat de suiker niet draagt.' },
      { q: 'Waar wordt het poeder verkocht?', a: 'De zakjes van 30 g en 200 g, en de zak van 3 kg voor professionals, staan op de [productpagina]({products_href}). Een zakje van 200 g vervangt {powder_200g_whites} eiwitten.' },
    ],
    links: [
      { href: '{professional_href}', label: 'Aquafaba voor professionals' },
      { href: '{pastry_href}', label: 'Banketbakkerij en bakkerij' },
      { href: '{bars_href}', label: 'Bars en cocktails' },
      { href: '{meringue_calc_href}', label: 'Rekenhulp voor meringue' },
    ],
  },
};
