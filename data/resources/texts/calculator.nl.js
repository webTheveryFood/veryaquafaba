// Rekenhulp, Nederlands. Zelfde structuur, zelfde {tokens} en zelfde HTML-tags als
// calculator.en.js (gecontroleerd door scripts/applications/check-guides.mjs). Geen gedachtestreepje.
export default {
  meringue: {
    title: 'Rekenhulp voor aquafaba-meringue - VERY AQUAFABA',
    h1: 'Hoeveel aquafaba voor meringue? De rekenhulp',
    description: 'Schaal het VERY AQUAFABA meringuerecept naar elk aantal batches of meringues: vloeibare aquafaba, suiker en het equivalent in poeder en water, volgens het gepubliceerde recept.',
    lead: 'Eén batch van het VERY AQUAFABA meringuerecept vraagt {dose} g vloeibare aquafaba en {sugar} g suiker en is goed voor {yield}. Vul in hoeveel batches of hoeveel meringues u nodig hebt en de rekenhulp schaalt de aquafaba, de suiker en het equivalent in poeder en water voor u.',
    example: { batches: 5 },
    sections: [
      {
        id: 'reference',
        title: 'De referentiebatch, uit het recept',
        html: `<p>Elk cijfer op deze pagina vertrekt van hetzelfde punt: het meringuerecept dat op deze site staat. Het vraagt {dose} g VERY AQUAFABA vloeibaar, opgeklopt met {sugar} g fijne suiker, en is goed voor {yield} van 3 tot 4 cm. Die ene batch vervangt {eggs} eiwitten, want {white_liquid} g vloeibare aquafaba staat voor één eiwit.</p>
<p>In poeder is dezelfde batch {powder_dose} g VERY AQUAFABA poeder, aangemaakt met {water_dose} ml water. De regel erachter staat op elke gids: {white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, dezelfde massa als vloeibaar, en {white_powder} g poeder vervangt één eiwit.</p>
<p>De optionele stabilisator, 2 g cream of tartar of 1 g citroenzuur per batch, schaalt ook mee met de batch. Hij zit niet in de rekenhulp, omdat veel keukens hem weglaten.</p>`,
      },
      {
        id: 'scaling',
        title: 'Wat meeschaalt en wat niet',
        html: `<p>Aquafaba, suiker, poeder en water schalen recht evenredig: twee keer zoveel meringues, twee keer zoveel van elk. Drie dingen doen dat niet.</p>
<ul>
<li>De kloptijd. De referentiebatch bereikt zachte pieken in {whip} minuten op hoge snelheid. Een vollere kom heeft meer tijd nodig, dus beoordeel het schuim op de pieken, niet op de klok.</li>
<li>Het drogen. De platen drogen op {bake} °C zonder hetelucht gedurende {bake_time} uur, hoe groot de batch ook is. Meer meringues betekent meer platen, geen hetere oven.</li>
<li>De temperatuur. De aquafaba gaat op {chill} °C de kom in, en aangemaakt poeder wordt tot hetzelfde punt gekoeld, voor één batch of voor tien.</li>
</ul>
<p>Klop wat uw mengkom gemakkelijk aankan en spuit elke kom meteen op: aquafabaschuim verliest volume als het staat te wachten terwijl de volgende kom klopt.</p>`,
      },
      {
        id: 'packs',
        title: 'Hoeveel batches een verpakking oplevert',
        html: `<p>Zodra u uw aantal batches kent, volgt de verpakking vanzelf.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Verpakking</th><th scope="col">Batches</th><th scope="col">Meringues, ongeveer</th></tr></thead>
<tbody>
<tr><td data-label="Verpakking">1 L Tetrapak vloeibaar</td><td data-label="Batches">{batches_1l}</td><td data-label="Meringues, ongeveer">{pieces_1l}</td></tr>
<tr><td data-label="Verpakking">10 L bag-in-box vloeibaar</td><td data-label="Batches">{batches_10l}</td><td data-label="Meringues, ongeveer">{pieces_10l}</td></tr>
<tr><td data-label="Verpakking">Zakje van 200 g poeder</td><td data-label="Batches">{batches_200g}</td><td data-label="Meringues, ongeveer">{pieces_200g}</td></tr>
<tr><td data-label="Verpakking">Zak van 3 kg poeder</td><td data-label="Batches">{batches_3kg}</td><td data-label="Meringues, ongeveer">{pieces_3kg}</td></tr>
</tbody>
</table>
<p>Vloeibaar of poeder is een aparte beslissing, die u in de <a href="{guide_href}">meringuegids</a> neemt: ze hangt af van hoe vaak u de oven vult en van de {opened_days} dagen die een geopende verpakking vloeibaar in de koelkast meegaat.</p>`,
      },
      {
        id: 'example',
        title: 'Rekenvoorbeeld: {ex_pieces} meringues voor een evenement',
        html: `<p>Een patisserie heeft {ex_pieces} kleine meringues nodig voor een buffet. Dat zijn {ex_batches} batches van het referentierecept.</p>
<ul>
<li>Vloeibaar: {ex_dose} g VERY AQUAFABA en {ex_sugar} g fijne suiker, ter vervanging van {ex_eggs} eiwitten.</li>
<li>Poeder: {ex_powder} g poeder, aangemaakt met {ex_water} ml water, daarna dezelfde {ex_sugar} g suiker.</li>
<li>Oven: {ex_batches} batches, opgespoten op 3 tot 4 cm, vullen meerdere platen, en elke plaat droogt de volle {bake_time} uur op {bake} °C.</li>
</ul>
<p>In één keer opgeklopt vraagt dat volume een grote planeetmenger. In een tafelmixer klopt u het als {ex_batches} aparte batches en spuit u elke batch op voordat de volgende begint.</p>`,
      },
    ],
    faq: [
      { q: 'Hoeveel meringues levert één batch op?', a: '{yield} van 3 tot 4 cm, uit {dose} g aquafaba en {sugar} g suiker. Spuit u kleiner, dan stijgt het aantal; de hoeveelheden veranderen niet.' },
      { q: 'Hoeveel aquafaba vervangt één eiwit?', a: '{white_liquid} g vloeibaar, of {white_powder} g poeder aangemaakt met {white_water} ml water. Eén batch meringue vervangt {eggs} eiwitten.' },
      { q: 'Kan ik de batch halveren?', a: 'Ja. {half_dose} g aquafaba en {half_sugar} g suiker zijn goed voor ongeveer {half_yield} meringues. Een klein volume in een grote kom klopt trager op, dus neem de kleinste kom van uw mixer.' },
      { q: 'Heeft een dubbele batch twee keer zoveel kloptijd nodig?', a: 'Nee. Hij heeft meer tijd nodig dan een enkele batch, maar niet het dubbele. Klop tot zachte pieken, die bij de referentiebatch {whip} minuten vragen, en voeg de suiker pas dan toe.' },
      { q: 'Hoeveel water voeg ik aan het poeder toe?', a: '{white_water} ml per {white_powder} g poeder. Voor één batch meringue is dat {powder_dose} g poeder en {water_dose} ml water; de rekenhulp schaalt beide.' },
      { q: 'Waar komt de hoeveelheid suiker vandaan?', a: 'Uit het meringuerecept op deze site: gelijke gewichten, {sugar} g suiker op {dose} g aquafaba. De volledige werkwijze staat in het [meringuerecept]({recipe_href}).' },
    ],
  },
};
