// Rekenhulp, Nederlands. Zelfde structuur, zelfde {tokens} en zelfde HTML-tags als
// calculator.en.js (gecontroleerd door scripts/applications/check-guides.mjs). Geen gedachtestreepje.
// Formuleringen en cijfers volgen de gidsen en recepten van de site.
export default {
  meringue: {
    title: 'Rekenhulp aquafaba voor meringue - VERY AQUAFABA',
    h1: 'Hoeveel aquafaba voor meringue? De rekenhulp',
    description: 'Schaal het VERY AQUAFABA meringuerecept naar elk aantal batches of meringues: vloeibare aquafaba, suiker en het equivalent in poeder en water.',
    lead: 'Elke batch meringue begint met dezelfde vraag: hoeveel aquafaba, en hoeveel suiker? Vul in hoeveel meringues u nodig hebt en de rekenhulp beantwoordt allebei, vloeibaar of als poeder met zijn water, geschaald vanuit het VERY AQUAFABA recept.',
    example: { batches: 5 },
    sections: [
      {
        id: 'scaling',
        title: 'Wat meeschaalt met een grotere batch, en wat niet',
        html: `<p>Aquafaba, suiker, poeder en water schalen recht evenredig: twee keer zoveel meringues, twee keer zoveel van elk. Dat geldt ook voor de optionele stabilisator, 2 g cream of tartar of 1 g citroenzuur per batch, die de rekenhulp weglaat omdat veel keukens dat ook doen. Drie dingen schalen niet mee.</p>
<ul>
<li>De kloptijd. De referentiebatch bereikt zachte pieken in {whip} minuten op hoge snelheid. Een vollere kom heeft meer tijd nodig, dus beoordeel het schuim op de pieken, niet op de klok.</li>
<li>Het drogen. De platen drogen op {bake} °C zonder ventilator gedurende {bake_time} uur, hoe groot de batch ook is. Meer meringues betekent meer platen, geen hetere oven.</li>
<li>De temperatuur. De aquafaba gaat op {chill} °C de kom in, en aangemaakt poeder wordt tot hetzelfde punt gekoeld, voor één batch of voor tien.</li>
</ul>
<p>Klop wat uw mengkom gemakkelijk aankan en spuit elke kom meteen op: aquafabaschuim verliest volume als het staat te wachten terwijl de volgende kom klopt.</p>`,
      },
      {
        id: 'packs',
        title: 'Hoeveel batches meringue haalt u uit een verpakking?',
        html: `<p>Kent u uw aantal batches per week, dan ziet u hier wat elke verpakking waard is.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Verpakking</th><th scope="col">Batches</th><th scope="col">Meringues, ongeveer</th></tr></thead>
<tbody>
<tr><td data-label="Verpakking">1 L Tetrapak vloeibaar</td><td data-label="Batches">{batches_1l}</td><td data-label="Meringues, ongeveer">{pieces_1l}</td></tr>
<tr><td data-label="Verpakking">10 L bag-in-box vloeibaar</td><td data-label="Batches">{batches_10l}</td><td data-label="Meringues, ongeveer">{pieces_10l}</td></tr>
<tr><td data-label="Verpakking">Zakje van 200 g poeder</td><td data-label="Batches">{batches_200g}</td><td data-label="Meringues, ongeveer">{pieces_200g}</td></tr>
<tr><td data-label="Verpakking">Zak van 3 kg poeder</td><td data-label="Batches">{batches_3kg}</td><td data-label="Meringues, ongeveer">{pieces_3kg}</td></tr>
</tbody>
</table>
<p>Of u vloeibaar of poeder koopt, is een andere vraag, en die hangt af van hoe vaak u de oven vult: een geopende verpakking vloeibaar gaat {opened_days} dagen mee in de koelkast, een geopend zakje wacht. De <a href="{guide_href}">meringuegids</a> geeft het antwoord.</p>`,
      },
      {
        id: 'example',
        title: 'Voorbeeld: {ex_pieces} meringues met aquafaba bereiden',
        html: `<p>Stel dat u een buffet hebt en {ex_pieces} kleine meringues nodig hebt. Dat zijn {ex_batches} batches van het recept, en dit komt erbij kijken:</p>
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

  'chocolate-mousse': {
    title: 'Rekenhulp aquafaba-chocolademousse - VERY AQUAFABA',
    h1: 'Hoeveel aquafaba voor chocolademousse? De rekenhulp',
    description: 'Schaal het VERY AQUAFABA recept voor chocolademousse naar elk aantal porties: vloeibare aquafaba, suiker, pure chocolade en het equivalent in poeder en water.',
    lead: 'In deze mousse doet de opgeklopte aquafaba het werk van de eiwitten en de room, dus de juiste hoeveelheid is het grootste deel van het werk. Vul in hoeveel porties u nodig hebt en de rekenhulp geeft u de bijbehorende aquafaba, chocolade en suiker, vloeibaar of als poeder met zijn water, uit het VERY AQUAFABA recept.',
    example: { batches: 5 },
    sections: [
      {
        id: 'scaling',
        title: 'Wat meeschaalt als u de mousse opschaalt, en wat niet',
        html: `<p>Aquafaba, suiker, chocolade, poeder en water schalen recht evenredig, net als de optionele stabilisator, 2 g cream of tartar of 1 g citroenzuur per batch, die de rekenhulp weglaat. De twee temperaturen en de opstijftijd schalen niet mee.</p>
<ul>
<li>De chocolade wordt gesmolten tot 45 tot 50 °C en vóór het spatelen afgekoeld tot {fold_temp} °C, voor één batch of voor tien. Chocolade boven {fold_temp} °C smelt het schuim.</li>
<li>Kloppen tot zachte pieken duurt bij de referentiebatch ongeveer {whip} minuten; een vollere kom heeft meer tijd nodig, dus beoordeel op de pieken.</li>
<li>De mousse stijft minstens {set_time} uur op in de koelkast, hoe groot de batch ook is, en blijft {keep} dagen goed.</li>
</ul>
<p>Grote batches? Emulgeer eerst een deel van de chocolade met een beetje aquafaba en spatel dan de rest van het schuim erdoor. Zo blijven grote runs homogeen.</p>`,
      },
      {
        id: 'packs',
        title: 'Hoeveel porties mousse haalt u uit een verpakking?',
        html: `<p>Kent u uw aantal porties per week, dan ziet u hier wat elke verpakking waard is.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Verpakking</th><th scope="col">Batches</th><th scope="col">Porties, ongeveer</th></tr></thead>
<tbody>
<tr><td data-label="Verpakking">1 L Tetrapak vloeibaar</td><td data-label="Batches">{batches_1l}</td><td data-label="Porties, ongeveer">{pieces_1l}</td></tr>
<tr><td data-label="Verpakking">10 L bag-in-box vloeibaar</td><td data-label="Batches">{batches_10l}</td><td data-label="Porties, ongeveer">{pieces_10l}</td></tr>
<tr><td data-label="Verpakking">Zakje van 200 g poeder</td><td data-label="Batches">{batches_200g}</td><td data-label="Porties, ongeveer">{pieces_200g}</td></tr>
<tr><td data-label="Verpakking">Zak van 3 kg poeder</td><td data-label="Batches">{batches_3kg}</td><td data-label="Porties, ongeveer">{pieces_3kg}</td></tr>
</tbody>
</table>
<p>Of u vloeibaar of poeder koopt, hangt af van hoe vaak mousse op de kaart staat: een geopende verpakking vloeibaar gaat {opened_days} dagen mee in de koelkast, een geopend zakje wacht tussen twee kaarten. De <a href="{guide_href}">gids voor chocolademousse</a> geeft het antwoord.</p>`,
      },
      {
        id: 'example',
        title: 'Voorbeeld: {ex_pieces} porties mousse voor een banket bereiden',
        html: `<p>Stel dat een banket {ex_pieces} porties mousse vraagt. Dat zijn {ex_batches} batches van het recept, en dit komt erbij kijken:</p>
<ul>
<li>Vloeibaar: {ex_dose} g VERY AQUAFABA, {ex_sugar} g fijne suiker en {ex_chocolate} g pure chocolade, ter vervanging van {ex_eggs} eiwitten.</li>
<li>Poeder: {ex_powder} g poeder, aangemaakt met {ex_water} ml water, daarna dezelfde suiker en chocolade.</li>
<li>Koelkast: {ex_pieces} bekers hebben vóór de service minstens {set_time} uur koelruimte nodig.</li>
</ul>
<p>Laat alle chocolade afkoelen tot {fold_temp} °C voordat de eerste kom wordt opgeklopt: het schuim mag er niet op wachten.</p>`,
      },
    ],
    faq: [
      { q: 'Hoeveel porties levert één batch op?', a: '{yield}, uit {dose} g aquafaba, {sugar} g suiker en {chocolate} g pure chocolade. Kleinere bekers geven meer porties; de hoeveelheden veranderen niet.' },
      { q: 'Hoeveel aquafaba vervangt één eiwit?', a: '{white_liquid} g vloeibaar, of {white_powder} g poeder aangemaakt met {white_water} ml water. Eén batch mousse vervangt {eggs} eiwitten en de room.' },
      { q: 'Kan ik de batch halveren?', a: 'Ja. {half_dose} g aquafaba, {half_sugar} g suiker en {half_chocolate} g chocolade zijn goed voor ongeveer {half_yield} porties. Neem de kleinste kom van uw mixer voor een klein volume.' },
      { q: 'Verandert de chocoladetemperatuur met de batchgrootte?', a: 'Nee. Koel hem vóór het spatelen af tot {fold_temp} °C, hoe groot de hoeveelheid ook is. Chocolade boven {fold_temp} °C smelt het schuim en de mousse zakt in zodra hij erin gaat.' },
      { q: 'Hoeveel water voeg ik aan het poeder toe?', a: '{white_water} ml per {white_powder} g poeder. Voor één batch mousse is dat {powder_dose} g poeder en {water_dose} ml water; de rekenhulp schaalt beide.' },
      { q: 'Waar komen de hoeveelheden chocolade en suiker vandaan?', a: 'Uit het recept voor chocolademousse op deze site: {chocolate} g pure couverture en {sugar} g fijne suiker op {dose} g aquafaba. De volledige werkwijze staat in het [recept voor chocolademousse]({recipe_href}).' },
    ],
  },

  mayonnaise: {
    title: 'Vegan mayonaise met aquafaba: rekenhulp - VERY AQUAFABA',
    h1: 'Hoeveel aquafaba voor vegan mayonaise? De rekenhulp',
    description: 'Schaal het VERY AQUAFABA mayonaiserecept naar de mayonaise die u nodig hebt: aquafaba, olie, mosterd, zout, citroensap en het equivalent in poeder en water.',
    lead: 'Mayonaise is eerst een verhouding en dan pas een recept: zoveel olie op zoveel aquafaba. Vul in hoeveel mayonaise u nodig hebt en de rekenhulp berekent de aquafaba en de olie, plus de mosterd, het zout en het citroensap, vloeibaar of als poeder met zijn water, uit het VERY AQUAFABA recept.',
    example: { batches: 4 },
    sections: [
      {
        id: 'scaling',
        title: 'Wat meeschaalt met een grotere batch mayonaise, en wat niet',
        html: `<p>Aquafaba, olie, mosterd, zout, citroensap, poeder en water schalen recht evenredig. Twee dingen doen dat niet.</p>
<ul>
<li>De temperatuur. De aquafaba gaat er gekoeld in, op {chill} °C, voor één batch of voor tien. Warme aquafaba geeft een trage, onstabiele emulsie.</li>
<li>De afschuifkracht. De olie gaat er als een dun, gelijkmatig straaltje in met de mixer op volle snelheid. Grote batches vragen een mixer met hoge afschuifkracht om de druppelgrootte te beheersen en de emulsie stabiel te houden.</li>
</ul>
<p>Hygiënisch gemaakt en meteen gekoeld blijft de mayonaise tot {keep} dagen goed in de koelkast, hoe groot de batch ook is.</p>`,
      },
      {
        id: 'packs',
        title: 'Hoeveel mayonaise haalt u uit een verpakking?',
        html: `<p>Kent u de hoeveelheid mayonaise die u per week maakt, dan ziet u hier wat elke verpakking waard is.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Verpakking</th><th scope="col">Batches</th><th scope="col">Mayonaise, ongeveer</th></tr></thead>
<tbody>
<tr><td data-label="Verpakking">1 L Tetrapak vloeibaar</td><td data-label="Batches">{batches_1l}</td><td data-label="Mayonaise, ongeveer">{pieces_1l} g</td></tr>
<tr><td data-label="Verpakking">10 L bag-in-box vloeibaar</td><td data-label="Batches">{batches_10l}</td><td data-label="Mayonaise, ongeveer">{pieces_10l} g</td></tr>
<tr><td data-label="Verpakking">Zakje van 200 g poeder</td><td data-label="Batches">{batches_200g}</td><td data-label="Mayonaise, ongeveer">{pieces_200g} g</td></tr>
<tr><td data-label="Verpakking">Zak van 3 kg poeder</td><td data-label="Batches">{batches_3kg}</td><td data-label="Mayonaise, ongeveer">{pieces_3kg} g</td></tr>
</tbody>
</table>
<p>Een batch gebruikt zo weinig aquafaba dat zelfs een verpakking van 1 L lang meegaat, dus de vraag is of u een geopende verpakking binnen {opened_days} dagen opgebruikt. Zo niet, dan wacht het poeder. De <a href="{guide_href}">gids voor vegan mayonaise</a> geeft het antwoord.</p>`,
      },
      {
        id: 'example',
        title: 'Voorbeeld: {ex_pieces_kg} mayonaise voor de week bereiden',
        html: `<p>Stel dat uw keuken ongeveer {ex_pieces_kg} mayonaise per week verbruikt. Dat zijn {ex_batches} batches van het recept, en dit komt erbij kijken:</p>
<ul>
<li>Vloeibaar: {ex_dose} g VERY AQUAFABA, {ex_oil} g olie, {ex_mustard} g mosterd, {ex_salt} g zout en {ex_lemon} g citroensap of azijn, evenveel aquafaba als voor {ex_eggs} eiwitten.</li>
<li>Poeder: {ex_powder} g poeder, aangemaakt met {ex_water} ml water, daarna dezelfde olie, mosterd, zout en citroen.</li>
<li>Apparatuur: bij dit volume gaat u over op een mixer met hoge afschuifkracht en laat u de olie er als een dun, gelijkmatig straaltje in lopen.</li>
</ul>
<p>Doe over in schone bakken en koel meteen: daar beginnen de {keep} dagen houdbaarheid.</p>`,
      },
    ],
    faq: [
      { q: 'Hoeveel mayonaise levert één batch op?', a: '{yield}, uit {dose} g aquafaba en {oil} g olie. Vul de grammen in die u nodig hebt en de rekenhulp geeft de batches en elk ingrediënt.' },
      { q: 'Hoeveel aquafaba vervangt het ei in mayonaise?', a: 'In dit recept staat aquafaba voor de dooier: {dose} g vloeibaar op {oil} g olie, een verhouding van {oil_ratio} in gewicht. In poeder {powder_dose} g, aangemaakt met {water_dose} ml water.' },
      { q: 'Kan ik de batch halveren?', a: 'Ja. {half_dose} g aquafaba en {half_oil} g olie zijn goed voor ongeveer {half_yield} g mayonaise. Neem een hoge, smalle beker zodat de staafmixer bij een klein volume de afschuifkracht hoog houdt.' },
      { q: 'Mag de olie er bij een grote batch sneller in?', a: 'Nee. De olie gaat er altijd als een dun, gelijkmatig straaltje in met de mixer op volle snelheid. Komt de emulsie nooit op gang, dan ging de olie er te snel in of was de afschuifkracht te laag.' },
      { q: 'Hoeveel water voeg ik aan het poeder toe?', a: '{white_water} ml per {white_powder} g poeder. Voor één batch mayonaise is dat {powder_dose} g poeder en {water_dose} ml water, gewogen op een fijne weegschaal; de rekenhulp schaalt beide.' },
      { q: 'Waar komen de hoeveelheden olie en mosterd vandaan?', a: 'Uit het mayonaiserecept op deze site: {oil} g neutrale olie, {mustard} g dijonmosterd, {salt} g zout en {lemon} g citroensap of azijn op {dose} g aquafaba. De volledige werkwijze staat in het [mayonaiserecept]({recipe_href}).' },
    ],
  },

  baking: {
    title: 'Rekenhulp eivervanging met aquafaba - VERY AQUAFABA',
    h1: 'Hoeveel aquafaba vervangt de eieren in uw recept? De vervangingsrekenhulp',
    description: 'Vul de hele eieren, eiwitten en dooiers van uw recept in en krijg de VERY AQUAFABA vloeibaar of poeder die ze vervangt, met het water voor het poeder.',
    lead: 'Eieren vervangen in een recept komt neer op één optelsom. Vul de hele eieren, de eiwitten en de dooiers van uw recept in en de rekenhulp geeft u de aquafaba die ervoor in de plaats komt, vloeibaar of als poeder met zijn water, met de olie die de dooier vervangt.',
    example: { eggs: 3, whites: 2 },
    sections: [
      {
        id: 'rule',
        title: 'De vier equivalenties die hij gebruikt',
        html: `<ul>
<li>Eén heel ei: {egg_liquid} g vloeibare aquafaba, of {egg_powder} g poeder aangemaakt met {egg_water} ml water.</li>
<li>Eén eiwit: {white_liquid} g vloeibaar, of {white_powder} g poeder aangemaakt met {white_water} ml water.</li>
<li>Eén eidooier: {yolk_liquid} g aquafaba plus {yolk_oil} g olie, want aquafaba brengt geen vet mee.</li>
</ul>
<p>Ze komen van de productpagina en uit de bakgids van deze site, en de rekenhulp telt ze gewoon op voor de eieren die u invult.</p>`,
      },
      {
        id: 'how',
        title: 'Hoe de aquafaba in het baksel gaat',
        html: `<p>Aquafaba doet drie dingen bij het bakken: het houdt lucht vast, het bindt en het houdt vocht vast. Het werkt dus op twee manieren. Klop het op als het eiwitten vervangt. Giet het er zo in als het de binding en het vocht van hele eieren vervangt.</p>
<ul>
<li>Biscuit en génoise: opgeklopt op {chill} °C, daarna voorzichtig en meteen erdoor gespateld.</li>
<li>Cakes, koekjes en muffins: gemengd met de suiker voordat het bij het vet komt.</li>
<li>Koekjes en brownies: rechtstreeks toegevoegd, niet opgeklopt, voor binding en vocht.</li>
<li>Brioche en zoete broodjes: niet opgeklopt, met de vloeistoffen van het deeg.</li>
</ul>
<p>Vervangt u hele eieren? Aquafaba brengt meer water mee dan ei. Verminder de melk of het water een beetje, of verhoog de droge ingrediënten, en bak volledig gaar. Alleen de eiwitten vervangen vraagt normaal geen aanpassing. De <a href="{guide_href}">bakgids</a> loopt elk geval na.</p>`,
      },
      {
        id: 'packs',
        title: 'Hoeveel eieren vervangt een verpakking?',
        html: `<p>Weet u hoeveel eieren u per week vervangt, dan ziet u hier wat elke verpakking waard is.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Verpakking</th><th scope="col">Hele eieren</th><th scope="col">Eiwitten</th></tr></thead>
<tbody>
<tr><td data-label="Verpakking">1 L Tetrapak vloeibaar</td><td data-label="Hele eieren">{eggs_1l}</td><td data-label="Eiwitten">{whites_1l}</td></tr>
<tr><td data-label="Verpakking">10 L bag-in-box vloeibaar</td><td data-label="Hele eieren">{eggs_10l}</td><td data-label="Eiwitten">{whites_10l}</td></tr>
<tr><td data-label="Verpakking">Zakje van 200 g poeder</td><td data-label="Hele eieren">{eggs_200g}</td><td data-label="Eiwitten">{whites_200g}</td></tr>
<tr><td data-label="Verpakking">Zak van 3 kg poeder</td><td data-label="Hele eieren">{eggs_3kg}</td><td data-label="Eiwitten">{whites_3kg}</td></tr>
</tbody>
</table>
<p>Ongeopend blijven beide formaten minimaal {unopened_months} maanden goed op kamertemperatuur. Een geopende verpakking vloeibaar gaat {opened_days} dagen mee in de koelkast; een geopend zakje poeder hoeft alleen droog en gesloten te blijven.</p>`,
      },
      {
        id: 'example',
        title: 'Voorbeeld: een cakerecept met {ex_eggs} eieren en {ex_whites} eiwitten',
        html: `<p>Stel dat uw cakerecept {ex_eggs} hele eieren en {ex_whites} eiwitten vraagt. Dit komt ervoor in de plaats:</p>
<ul>
<li>Vloeibaar: in totaal {ex_liquid} g VERY AQUAFABA. Het deel van de eiwitten wordt opgeklopt op {chill} °C; het deel van de hele eieren gaat er zo in, met de suiker vóór het vet.</li>
<li>Poeder: {ex_powder} g poeder, aangemaakt met {ex_water} ml water, daarna op dezelfde manier gebruikt.</li>
<li>Aanpassing: de hele eieren worden vervangen, dus verminder de melk of het water een beetje, of voeg droge ingrediënten toe, en bak volledig gaar.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Hoeveel aquafaba vervangt één heel ei?', a: '{egg_liquid} g VERY AQUAFABA vloeibaar, of {egg_powder} g poeder aangemaakt met {egg_water} ml water. Hele eieren brengen water mee, dus verminder de andere vloeistoffen een beetje.' },
      { q: 'Hoeveel aquafaba vervangt één eiwit?', a: '{white_liquid} g vloeibaar, of {white_powder} g poeder aangemaakt met {white_water} ml water. Alleen de eiwitten vervangen vraagt normaal geen andere aanpassing.' },
      { q: 'Kan aquafaba de dooier vervangen?', a: 'Voor binding en volheid staan {yolk_liquid} g aquafaba plus {yolk_oil} g olie voor één dooier. De rekenhulp telt de olie erbij als u dooiers invult.' },
      { q: 'Klop ik het op of giet ik het erin?', a: 'Opkloppen, gekoeld tot {chill} °C, als het eiwitten vervangt in een biscuit of een suikerrijk beslag. Ongeklopt erin gieten als het de binding en het vocht van hele eieren vervangt in koekjes, brownies en degen.' },
      { q: 'Waarom is mijn beslag te dun na het vervangen van de eieren?', a: 'Hele eieren zijn één op één vervangen en het water is niet verminderd. Verminder de melk of het water een beetje, of voeg droge ingrediënten toe, en bak volledig gaar.' },
      { q: 'Waar komen deze equivalenties vandaan?', a: 'Van de productpagina en uit de [gids voor bakken met aquafaba]({recipe_href}) op deze site: {egg_liquid} g per heel ei, {white_liquid} g per eiwit en {white_powder} g poeder per eiwit.' },
    ],
  },

  cocktails: {
    title: 'Rekenhulp aquafaba-cocktails: sours per pak - VERY AQUAFABA',
    h1: 'Hoeveel aquafaba per cocktail? De rekenhulp',
    description: 'Schaal de VERY AQUAFABA whiskey sour naar de sours van uw service: aquafaba per drankje, whisky, citroen en siroop, en het equivalent in poeder en water.',
    lead: 'Een zaterdagavond is makkelijker als de aquafaba al is aangemaakt. Vul in hoeveel sours u verwacht en de rekenhulp geeft u de aquafaba voor de service, met de whisky, de citroen en de siroop om ernaast te pre-batchen, vloeibaar of als poeder met zijn water, uit de VERY AQUAFABA whiskey sour.',
    example: { batches: 40 },
    sections: [
      {
        id: 'scaling',
        title: 'Wat meeschaalt met een drukkere service, en wat niet',
        html: `<p>Aquafaba, whisky, citroen, siroop, poeder en water schalen recht evenredig met het aantal drankjes. Aangemaakt poeder wordt vóór de service gekoeld, hoeveel drankjes het ook dekt. Het schudden schaalt niet mee.</p>
<ul>
<li>Elk drankje wordt op bestelling geschud: een dry shake van {dry_shake} seconden zonder ijs, waar het schuim ontstaat, en dan {wet_shake} seconden met ijs om te koelen en te verdunnen.</li>
<li>Drukke service? Pre-batch de whisky, de citroen en de siroop. Voeg de aquafaba toe bij het schudden, nooit in de batch: aquafaba in de pre-batch geeft halverwege de service geen hoogte meer.</li>
<li>Weeg of jigger elke keer {dose} g. Vrij schenken maakt de drankjes ongelijk.</li>
</ul>`,
      },
      {
        id: 'packs',
        title: 'Hoeveel sours haalt u uit een verpakking?',
        html: `<p>Kent u uw aantal sours per week, dan ziet u hier wat elke verpakking waard is.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Verpakking</th><th scope="col">Cocktails</th></tr></thead>
<tbody>
<tr><td data-label="Verpakking">1 L Tetrapak vloeibaar</td><td data-label="Cocktails">{batches_1l}</td></tr>
<tr><td data-label="Verpakking">10 L bag-in-box vloeibaar</td><td data-label="Cocktails">{batches_10l}</td></tr>
<tr><td data-label="Verpakking">Zakje van 200 g poeder</td><td data-label="Cocktails">{batches_200g}</td></tr>
<tr><td data-label="Verpakking">Zak van 3 kg poeder</td><td data-label="Cocktails">{batches_3kg}</td></tr>
</tbody>
</table>
<p>Of u vloeibaar of poeder koopt, hangt af van hoe snel een verpakking op is: een geopende verpakking van 1 L wordt binnen {opened_days} dagen gebruikt, een geopend zakje wacht op de volgende bestelling. De <a href="{guide_href}">cocktailgids</a> geeft het antwoord.</p>`,
      },
      {
        id: 'example',
        title: 'Voorbeeld: {ex_batches} sours voor een zaterdagavond voorbereiden',
        html: `<p>Stel dat u op een zaterdagavond {ex_batches} sours verwacht. Dit zet u klaar:</p>
<ul>
<li>Vloeibaar: {ex_dose} g VERY AQUAFABA, {ex_whiskey} ml whisky, {ex_lemon_juice} ml citroensap en {ex_syrup} ml suikersiroop.</li>
<li>Poeder: {ex_powder} g poeder, vóór de service aangemaakt met {ex_water} ml water en gekoeld.</li>
<li>Pre-batch: de whisky, de citroen en de siroop kunnen vooraf als batch; de aquafaba gaat per drankje de shaker in, bij het schudden.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Hoeveel aquafaba gebruik ik per cocktail?', a: '{dose} g gekoelde aquafaba per drankje, in plaats van het eiwit. Een 1 L Tetrapak is goed voor {batches_1l} cocktails en een zakje van 200 g poeder voor {batches_200g}.' },
      { q: 'Kan ik de aquafaba mee in de pre-batch doen?', a: 'Nee. Batch alleen de whisky, de citroen en de siroop, en voeg de aquafaba per drankje toe bij het schudden. Aquafaba in de pre-batch verliest halverwege de service zijn hoogte.' },
      { q: 'Hoeveel water voeg ik aan het poeder toe?', a: '{white_water} ml per {white_powder} g poeder. Voor één drankje is dat {powder_dose} g poeder en {water_dose} ml water; voor een service schaalt de rekenhulp beide.' },
      { q: 'Verandert een grotere service het schudden?', a: 'Nee. Elk drankje krijgt zijn dry shake van {dry_shake} seconden en zijn shake met ijs van {wet_shake} seconden. Het aantal drankjes verandert de voorraad, niet de werkwijze.' },
      { q: 'Verandert aquafaba de smaak van het drankje?', a: 'Nee. Het draagt het schuim en het zachte mondgevoel. De smaak blijft die van uw whisky, citroen en siroop.' },
      { q: 'Waar komen de hoeveelheden van het drankje vandaan?', a: 'Uit het whiskey-sourrecept op deze site: {whiskey} ml whisky, {lemon_juice} ml citroensap, {syrup} ml suikersiroop en {dose} g aquafaba per drankje. De volledige werkwijze staat in het [whiskey-sourrecept]({recipe_href}).' },
    ],
  },

  macarons: {
    title: 'Rekenhulp aquafaba voor macarons - VERY AQUAFABA',
    h1: 'Hoeveel aquafaba voor macarons? De rekenhulp',
    description: 'Schaal het VERY AQUAFABA macaronrecept naar elk aantal macarons: vloeibare aquafaba, fijne suiker, amandelmeel, poedersuiker en het equivalent in poeder.',
    lead: 'Een macaronschelp vergeeft heel weinig, dus de batch moet kloppen voordat de garde begint. Vul in hoeveel macarons u nodig hebt en de rekenhulp geeft u de aquafaba, de fijne suiker, het amandelmeel en de poedersuiker voor de run, vloeibaar of als poeder met zijn water, uit het VERY AQUAFABA recept.',
    example: { batches: 5 },
    sections: [
      {
        id: 'scaling',
        title: 'Wat meeschaalt met een grotere batch, en wat niet',
        html: `<p>Aquafaba, de fijne suiker, het amandelmeel, de poedersuiker, poeder en water schalen recht evenredig. Aangemaakt poeder wordt gekoeld voordat u klopt, hoe groot de batch ook is. De tijden en de temperatuur schalen niet mee.</p>
<ul>
<li>Het rusten: de opgespoten rondjes rusten op kamertemperatuur tot er een droog vel ontstaat, {rest} minuten afhankelijk van de luchtvochtigheid, hoe groot de batch ook is.</li>
<li>Het bakken: {bake} °C, zonder ventilator, {bake_time} minuten per plaat. Meer macarons betekent meer platen.</li>
<li>Het rijpen: samengestelde en gevulde schelpen rusten {mature} uur in de koelkast voor het serveren.</li>
</ul>
<p>Industriële batches? Houd de aquafabaconcentratie op {concentration} g/ml voor schelpen die van run tot run gelijk zijn.</p>`,
      },
      {
        id: 'packs',
        title: 'Hoeveel macarons haalt u uit een verpakking?',
        html: `<p>Kent u uw aantal batches per week, dan ziet u hier wat elke verpakking waard is.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Verpakking</th><th scope="col">Batches</th><th scope="col">Macarons, ongeveer</th></tr></thead>
<tbody>
<tr><td data-label="Verpakking">1 L Tetrapak vloeibaar</td><td data-label="Batches">{batches_1l}</td><td data-label="Macarons, ongeveer">{pieces_1l}</td></tr>
<tr><td data-label="Verpakking">10 L bag-in-box vloeibaar</td><td data-label="Batches">{batches_10l}</td><td data-label="Macarons, ongeveer">{pieces_10l}</td></tr>
<tr><td data-label="Verpakking">Zakje van 200 g poeder</td><td data-label="Batches">{batches_200g}</td><td data-label="Macarons, ongeveer">{pieces_200g}</td></tr>
<tr><td data-label="Verpakking">Zak van 3 kg poeder</td><td data-label="Batches">{batches_3kg}</td><td data-label="Macarons, ongeveer">{pieces_3kg}</td></tr>
</tbody>
</table>
<p>Of u vloeibaar of poeder koopt, hangt af van hoe vaak u spuit: een geopende verpakking vloeibaar gaat {opened_days} dagen mee in de koelkast, een geopend zakje wacht op de volgende bestelling. De <a href="{guide_href}">macarongids</a> geeft het antwoord.</p>`,
      },
      {
        id: 'example',
        title: 'Voorbeeld: {ex_pieces} macarons voor een bruiloft bereiden',
        html: `<p>Stel dat er een bruiloftsbestelling binnenkomt van {ex_pieces} gevulde macarons. Dat zijn {ex_batches} batches van het recept, en dit komt erbij kijken:</p>
<ul>
<li>Vloeibaar: {ex_dose} g VERY AQUAFABA, {ex_sugar} g fijne suiker, {ex_almond} g amandelmeel en {ex_icing_sugar} g poedersuiker, ter vervanging van {ex_eggs} eiwitten.</li>
<li>Poeder: {ex_powder} g poeder, aangemaakt met {ex_water} ml water, daarna dezelfde suikers en hetzelfde meel.</li>
<li>Planning: de schelpen bakken {bake_time} minuten per plaat op {bake} °C, worden dan samengesteld, gevuld en rijpen {mature} uur vóór de dag zelf.</li>
</ul>
<p>Eerst zeven en de platen bekleden, als laatste kloppen: het schuim moet het spatelen en het rusten overleven, dus het mag niet blijven staan terwijl het droge mengsel wordt klaargemaakt.</p>`,
      },
    ],
    faq: [
      { q: 'Hoeveel macarons levert één batch op?', a: '{yield}, uit {dose} g aquafaba, {sugar} g fijne suiker, {almond} g amandelmeel en {icing_sugar} g poedersuiker. Spuit de rondjes op 3 tot 4 cm.' },
      { q: 'Hoeveel aquafaba vervangt één eiwit?', a: '{white_liquid} g vloeibaar, of {white_powder} g poeder aangemaakt met {white_water} ml water. Eén batch macarons vervangt {eggs} eiwitten.' },
      { q: 'Kan ik de batch halveren?', a: 'Ja. {half_dose} g aquafaba, {half_sugar} g fijne suiker, {half_almond} g amandelmeel en {half_icing_sugar} g poedersuiker zijn goed voor ongeveer {half_yield} macarons. Neem de kleinste kom van uw mixer.' },
      { q: 'Rust of bakt een grotere batch langer?', a: 'Nee. Elke plaat rust tot er een droog vel ontstaat, {rest} minuten afhankelijk van de luchtvochtigheid, en bakt {bake_time} minuten op {bake} °C. Een grotere batch betekent meer platen, geen langere tijden.' },
      { q: 'Hoeveel water voeg ik aan het poeder toe?', a: '{white_water} ml per {white_powder} g poeder. Voor één batch macarons is dat {powder_dose} g poeder en {water_dose} ml water; de rekenhulp schaalt beide.' },
      { q: 'Waar komen de hoeveelheden amandel en suiker vandaan?', a: 'Uit het macaronrecept op deze site: {almond} g amandelmeel, {icing_sugar} g poedersuiker en {sugar} g fijne suiker op {dose} g aquafaba. De volledige werkwijze staat in het [macaronrecept]({recipe_href}).' },
    ],
  },
};
