// Professionals per doelgroep, Nederlands (set-2 B0 tot B4). Zelfde structuur, tokens en
// tags als professional.en.js (gecontroleerd door scripts/applications/check-guides.mjs). Geen gedachtestreepje.
const grid = (heads, rows, cls = '') => `<table class="va-guide-grid${cls ? ` ${cls}` : ''}">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;
const PICK = ['Uw keuken', 'Onze keuze', 'Waarom'];

export default {
  index: {
    title: 'Aquafaba voor professionele keukens - VERY AQUAFABA',
    h1: 'Aquafaba voor professionals: welk formaat past bij uw keuken?',
    crumb: 'Professionals',
    enquiryLabel: 'Professionals',
    description: 'Eén eivrij ingrediënt voor banketafdelingen, bars, centrale keukens en productielijnen: {white_liquid} g per eiwit. Welk formaat en welke verpakking bij uw keuken passen.',
    lead: 'Wat u ook runt, een banketafdeling, een bar, een centrale keuken of een productielijn, één ingrediënt dekt uw schuimen, emulsies en eivrije baksels. De dosis verandert nooit: {white_liquid} g vloeibaar of {white_powder} g poeder vervangt één eiwit. Wat verandert, is de verpakking en het tempo waarin u ze gebruikt, en dat beslist u hieronder.',
    figures: false,
    sections: [
      {
        id: 'activity',
        title: 'Wat voor keuken runt u?',
        html: `<p>Aquafaba doet ander werk in een banketafdeling, achter een bar, in een centrale keuken en op een productielijn. Zoek de uwe hieronder; elke rij opent een pagina die voor die manier van werken is geschreven.</p>
${grid(['Uw activiteit', 'Wat aquafaba voor u doet', 'Hoe u het gebruikt'], [
  ['<a href="{pastry_href}">Banketbakkerij, bakkerij, patisserie</a>', 'Meringues, macarons, mousse en eivrije baksels', 'Per batch, gepland rond uw ovendagen'],
  ['<a href="{bars_href}">Bars en cocktails</a>', 'Een eivrij schuim op sours en fizzes', 'Eén dosis per drankje, op bestelling geschud'],
  ['<a href="{foodservice_href}">Foodservice en centrale keukens</a>', 'Mayonaise, sauzen en desserts in volume', 'Per kilo, uit de 10 L bag-in-box'],
  ['<a href="{industry_href}">Voedingsindustrie</a>', 'Continue lijnen en herformuleren op gewicht', 'Uit de 1 T IBC, continu gedoseerd'],
], 'va-guide-grid--wrap')}
<p>Veel bedrijven zitten tussen twee rijen in. Een hotel draait een banketafdeling en een bar op hetzelfde product, en een centrale keuken met een patisserielijn werkt als een bakkerij op de dagen dat ze meringue spuit. Is dat uw geval, lees dan beide.</p>`,
      },
      {
        id: 'decide',
        title: 'Vloeibaar of poeder?',
        html: `<p>Gesloten zijn beide formaten minimaal {unopened_months} maanden houdbaar op kamertemperatuur, dus de keuze begint pas zodra een verpakking open is. Geopend vloeibaar product gaat in de koelkast en wordt binnen {opened_days} dagen gebruikt; geopend poeder bederft niet, het moet alleen droog en gesloten blijven. Vijf vragen beslissen het voor de meeste keukens.</p>
${grid(['Vraag uzelf af', 'Vloeibaar, als', 'Poeder, als'], [
  ['Is een geopende verpakking binnen {opened_days} dagen op?', 'Ja, de verpakking rouleert op tijd', 'Nee, het zakje wacht zonder datum op de volgende batch'],
  ['Is er koelruimte voor een geopende verpakking?', 'Ja, ze staat in de koelkast, al op werktemperatuur', 'Nee, het zakje staat op een droge plank'],
  ['Is het werk continu?', 'Ja, de 10 L bag-in-box of de 1 T IBC, zonder aanmaakstap', 'Nee, u maakt aan wat elke batch nodig heeft'],
  ['Reist het product, of gaat het naar evenementen?', 'Alleen met een koudeketen', 'Ja, het reist droog'],
  ['Gaat het in een droge premix?', 'Nee', 'Ja, het gaat in de premix zoals het is'],
], 'va-guide-grid--wrap')}
<p>Drukke weekends en rustige weekdagen? Veel keukens houden beide: vloeibaar voor de drukte, poeder voor de rest. De omrekening ligt vast, dus een recept draait op elk formaat zonder te veranderen.</p>`,
      },
      {
        id: 'packs',
        title: 'Welke verpakking, voor hoeveel werk',
        html: `<p>Elke verpakking stelt u zich het makkelijkst voor via het aantal eiwitten dat ze vervangt, want zo telt een recept ze.</p>
${grid(['Verpakking', 'Eiwitten', 'Wie ze leeg krijgt'], [
  ['1 L Tetrapak, vloeibaar', '{liquid_1l_whites}', 'Een banketafdeling, een bar met sours op de kaart, één vestiging'],
  ['10 L bag-in-box, vloeibaar', '{bib_10l_whites}', 'Een centrale keuken die per dienst per kilo aftapt'],
  ['1 T IBC, vloeibaar', '{ibc_1t_whites}', 'Een productielijn die continu doseert'],
  ['Zakje van 30 g, poeder', '{powder_30g_whites}', 'Een eerste proef, of een bar die een sour test'],
  ['Zakje van 200 g, poeder', '{powder_200g_whites}', 'Een keuken of een bar met ongelijke rotatie'],
  ['Zak van 3 kg, poeder', '{powder_3kg_whites}', 'Een professionele keuken, of een droge premix op een lijn'],
], 'va-guide-grid--wrap')}
<p>Het poeder wordt aangemaakt met {white_powder} g plus {white_water} ml water per eiwit, wat {white_total} g aquafaba geeft. De <a href="{reconstitution_href}">aanmaakpagina</a> heeft de tabel van 1 tot 20 eiwitten.</p>`,
      },
      {
        id: 'order',
        title: 'Bestellen voor een professionele keuken',
        html: `<p>De 1 L Tetrapak en het zakje van 200 g worden in de meeste van onze markten online verkocht, en de knoppen hieronder brengen u erheen. De bag-in-box, de IBC en de zak van 3 kg worden per project geprijsd: vertel ons wat u maakt en ongeveer hoeveel per maand via het <a href="{contact_href}">contactformulier</a>, en de technische fiche komt met het antwoord mee.</p>
<p>De zes <a href="{index_href}">toepassingsgidsen</a> geven de werkwijze, de probleemtabel en de dosis per recept voor beide formaten, met onder elke gids een rekenhulp, zodat uw team met dezelfde cijfers kan werken voordat de eerste levering aankomt.</p>`,
      },
    ],
    faq: [
      { q: 'Is de dosis hetzelfde voor vloeibaar en poeder?', a: 'Ja, geteld in eiwitten. {white_liquid} g vloeibaar vervangt één eiwit, net als {white_powder} g poeder aangemaakt met {white_water} ml water. Een batch wordt in beide formaten gedoseerd op zijn aantal eiwitten.' },
      { q: 'Welke formaten bestaan er voor grote volumes?', a: 'De 10 L bag-in-box vervangt {bib_10l_whites} eiwitten en de 1 T IBC {ibc_1t_whites}; beide vloeibaar, voor continu gebruik zonder aanmaakstap. In poeder vervangt de zak van 3 kg {powder_3kg_whites} eiwitten.' },
      { q: 'Hoe lang is een geopende verpakking houdbaar?', a: 'Geopend vloeibaar product wordt bewaard op maximaal {opened_temp} °C en binnen {opened_days} dagen gebruikt. Geopend poeder bederft niet zolang het droog en gesloten blijft. Gesloten zijn beide minimaal {unopened_months} maanden houdbaar op kamertemperatuur.' },
      { q: 'Kan een keuken vloeibaar en poeder naast elkaar gebruiken?', a: 'Ja, en veel keukens doen dat: vloeibaar voor de dagen dat de verpakking rouleert, poeder voor de onregelmatige bestellingen. De omrekening ligt vast, dus het recept verandert niet van het ene formaat naar het andere.' },
      { q: 'Hoe bestel ik aquafaba in bulk voor een bakkerij, een bar of een productielijn?', a: 'De 1 L Tetrapak en het zakje van 200 g koopt u online. Voor de bag-in-box, de IBC of de zak van 3 kg beschrijft u uw activiteit en uw maandvolume via ons [contactformulier]({contact_href}) en prijzen wij per project.' },
      { q: 'Hoe krijg ik de technische fiche?', a: 'Vraag ze aan via ons [contactformulier]({contact_href}), met uw bedrijf, uw land, de toepassing en het geschatte maandvolume. Ze komt met het antwoord mee.' },
    ],
    links: [
      { href: '{pastry_href}', label: 'Banketbakkerij en bakkerij' },
      { href: '{bars_href}', label: 'Bars en cocktails' },
      { href: '{foodservice_href}', label: 'Foodservice en centrale keukens' },
      { href: '{industry_href}', label: 'Voedingsindustrie' },
      { href: '{reconstitution_href}', label: 'Poeder aanmaken: de regel per eiwit' },
    ],
  },

  pastry: {
    title: 'Aquafaba voor banketbakkerij en bakkerij - VERY AQUAFABA',
    h1: 'Zo gebruikt u aquafaba in uw banketbakkerij of bakkerij',
    crumb: 'Banketbakkerij en bakkerij',
    enquiryLabel: 'Banketbakkerij en bakkerij',
    description: 'Meringue, macarons, mousse en eivrije biscuits uit één ingrediënt: {white_liquid} g per eiwit, {egg_liquid} g per heel ei. Hoeveel batches een verpakking u oplevert.',
    lead: 'In een banketafdeling dekt één ingrediënt de meringue, de macaronschelpen, de chocolademousse en de eivrije biscuits: {white_liquid} g aquafaba per eiwit, {egg_liquid} g per heel ei. De gidsen geven u elk recept. Hieronder de afdeling als geheel: hoeveel batches een verpakking oplevert, welk formaat bij uw ovenritme past, hoe u de week plant, en hoe u een eigen recept overzet.',
    figures: false,
    sections: [
      {
        id: 'batches',
        title: 'Wat u ermee maakt, en hoeveel een verpakking oplevert',
        html: `<p>Elke batch wordt in eiwitten geteld, dus een verpakking stelt u zich het makkelijkst voor via de batches die ze oplevert. De cijfers komen uit de VERY AQUAFABA recepten; elke toepassing heeft haar eigen gids en rekenhulp.</p>
${grid(['Toepassing', 'Eén batch', 'Uit een 1 L Tetrapak', 'Uit een zakje van 200 g'], [
  ['<a href="{meringue_href}">Meringue</a>', '{meringue_dose} g, of {meringue_eggs} eiwitten, voor ongeveer {meringue_yield} meringues', '{meringue_batches_1l} batches', '{meringue_batches_200g} batches'],
  ['<a href="{macarons_href}">Macarons</a>', '{macarons_dose} g, of {macarons_eggs} eiwitten, voor ongeveer {macarons_yield} macarons', '{macarons_batches_1l} batches', '{macarons_batches_200g} batches'],
  ['<a href="{chocolate_mousse_href}">Chocolademousse</a>', '{chocolate_mousse_dose} g, of {chocolate_mousse_eggs} eiwitten, voor ongeveer {chocolate_mousse_yield} porties', '{chocolate_mousse_batches_1l} batches', '{chocolate_mousse_batches_200g} batches'],
  ['<a href="{baking_href}">Biscuits, cakes, degen</a>', '{egg_liquid} g per heel ei, {white_liquid} g per eiwit', '{eggs_1l} hele eieren of {whites_1l} eiwitten', '{whites_200g} eiwitten'],
], 'va-guide-grid--wrap')}
<p>In poeder wordt een batch aangemaakt met {white_powder} g plus {white_water} ml water per eiwit: {meringue_powder} g en {meringue_water} ml voor een batch meringue, {macarons_powder} g en {macarons_water} ml voor macarons of mousse. De <a href="{reconstitution_href}">aanmaakpagina</a> heeft de tabel van 1 tot 20 eiwitten.</p>`,
      },
      {
        id: 'decide',
        title: 'Krijgt u een geopende verpakking op tijd leeg?',
        html: `<p>Gesloten zijn beide formaten minimaal {unopened_months} maanden houdbaar op kamertemperatuur, dus de keuze begint pas zodra een verpakking open is. Vanaf dan staat vloeibaar in de koelkast en wordt het binnen {opened_days} dagen gebruikt, terwijl poeder gewoon wacht, droog en gesloten. Een 1 L Tetrapak is {meringue_batches_1l} batches meringue of {macarons_batches_1l} batches macarons. Haalt uw ovenritme dat in {opened_days} dagen, dan is vloeibaar de makkelijke keuze. Zo niet, dan is het poeder.</p>
${grid(PICK, [
  ['Banketafdeling die de meeste dagen meringue of macarons spuit', 'Vloeibaar, 1 L Tetrapak', 'De verpakking is ruim binnen {opened_days} dagen leeg'],
  ['Winkel die op bestelling bakt, of een seizoensdessert met meringue', 'Poeder, zakje van 200 g', 'Het overbrugt de lange pauzes tussen twee runs'],
  ['Koeling vol met crèmes, ganache en rijpende macarons', 'Poeder', 'Het zakje staat op een droog rek, buiten de koelcel'],
  ['Dagelijkse eivrije lijn plus onregelmatige bestellingen', 'Beide', 'Vloeibaar voor de lijn, poeder voor de bestellingen; het recept is op allebei hetzelfde'],
  ['Plantaardige patisserielijn die continu spuit', 'Vloeibaar, 10 L bag-in-box of 1 T IBC', 'Continu gebruik, zonder iets aan te maken'],
])}
<p>Liever vloeibaar, maar u bakt onregelmatig? Dan kunt u het invriezen in porties van {portion} g op {freeze_temp} °C tot {freeze_months} maanden. Ontdooi een nacht in de koelkast en roer glad voor het opkloppen. Het wordt nooit opnieuw ingevroren.</p>`,
      },
      {
        id: 'week',
        title: 'Welke desserts houden, en hoe lang?',
        html: `<p>Aquafaba past beter bij een afdeling die vooruit werkt dan rauw eiwit, want geen van de afgewerkte producten hangt op dezelfde manier van de koelkast af. Dit vraagt elk product zodra het gemaakt is:</p>
<ul>
<li><strong>Meringues</strong> koelen volledig af op de plaat en blijven luchtdicht goed op kamertemperatuur, op een droge plek, met een zakje droogmiddel als u dat hebt. Ze trekken vocht uit de lucht, dus de droge opslag, niet de koeling, is hun plek.</li>
<li><strong>Macarons</strong> worden gevuld en dan {macarons_mature} uur gekoeld vóór de service, zodat schelp en vulling één worden. Bak de schelpen de ene dag, vul en laat rijpen de volgende.</li>
<li><strong>Chocolademousse</strong> stijft in {chocolate_mousse_set_time} uur op in de koelkast en blijft {chocolate_mousse_keep} dagen goed in gesloten verpakking, dus het is een batchproduct dat vooraf wordt gemaakt, geen dessert op bestelling.</li>
</ul>
<p>Maar twee dingen in de afdeling hebben de koeling nodig: de mousse en de rijpende macarons, plus de geopende verpakking vloeibaar. Dat is de verpakking waar u rond plant. Open ze aan het begin van een reeks ovendagen, schrijf de openingsdatum erop, en ze is op voordat de {opened_days} dagen om zijn. Etiketteer wat u invriest met datum en gewicht, zoals de bewaargids vraagt, zodat een portie die op een drukke ochtend uit de vriezer komt de juiste is.</p>`,
      },
      {
        id: 'switch',
        title: 'Zo zet u uw eigen recepten over op aquafaba',
        html: `<p>Begin met het recept dat het meest telt in uw toonbank, niet met het recept dat het makkelijkst lijkt, en verander alleen het ei. Wat u vervangt, bepaalt wat er nog meer verschuift:</p>
<ul>
<li><strong>Alleen eiwitten</strong>, zoals in meringue, macarons en mousse: een rechtstreekse vervanging. {white_liquid} g aquafaba per eiwit, en het amandelmeel, de suiker en de chocolade blijven precies zoals ze zijn.</li>
<li><strong>Hele eieren</strong>, zoals in biscuits en cakes: {egg_liquid} g per ei. Aquafaba brengt meer water mee dan een ei, ongeveer {water_aquafaba_pct} procent tegen {water_egg_pct} procent, dus breng de andere vloeistoffen {reduce_liquids} procent omlaag en bak dichte cakes gaar.</li>
<li><strong>Dooiers</strong>: {yolk_liquid} g aquafaba plus {yolk_oil} g olie, want aquafaba brengt geen vet mee.</li>
</ul>
<p>Weeg alles, de aquafaba inbegrepen, en houd de rest van de werkwijze zoals ze was: dezelfde kom, dezelfde snelheden, dezelfde oven. Bakt de afdeling in volume, houd de aquafaba dan op {viscosity} g/ml zodat het schuim zich bij elke run hetzelfde gedraagt. De <a href="{baking_calc_href}">vervangingsrekenhulp</a> rekent de eieren, eiwitten en dooiers van uw recept in één keer om, en de <a href="{baking_href}">bakgids</a> behandelt wat u doet als een biscuit plat of nat uit de oven komt.</p>`,
      },
    ],
    faq: [
      { q: 'Kan één verpakking op dezelfde dag meringue en macarons bedienen?', a: 'Ja. Beide recepten tellen hun batch in eiwitten en gebruiken dezelfde aquafaba, gekoeld tot {meringue_chill} °C. Een 1 L Tetrapak geeft {meringue_batches_1l} batches meringue of {macarons_batches_1l} batches macarons, of elke combinatie van beide.' },
      { q: 'Kan ik mijn macaronrecept overzetten op aquafaba zonder de rest te veranderen?', a: 'Ja. Macarons vervangen alleen eiwitten, dus de vervanging is rechtstreeks: {white_liquid} g aquafaba per eiwit. Het amandelmeel, de poedersuiker en de fijne suiker blijven zoals ze zijn. Wat verandert, is de timing, en die loopt de [macarongids]({macarons_href}) met u door.' },
      { q: 'Hoe ver vooruit kan ik aquafaba-chocolademousse maken?', a: 'Ze stijft in {chocolate_mousse_set_time} uur op in de koelkast en blijft {chocolate_mousse_keep} dagen goed, gekoeld in gesloten verpakking, dus ze wordt in batches vóór de service gemaakt.' },
      { q: 'Gaat het poeder rechtstreeks in het amandelmeel?', a: 'Nee. De aquafaba wordt eerst apart opgeklopt, dus het poeder wordt aangemaakt met water, gekoeld en opgeklopt voordat het amandelmeel en de poedersuiker worden doorgespateld.' },
      { q: 'Hoe vervang ik hele eieren in een biscuit?', a: '{egg_liquid} g aquafaba per heel ei en {white_liquid} g per eiwit, gewogen. Breng de andere vloeistoffen {reduce_liquids} procent omlaag om het water in balans te brengen, en bak gaar. De [bakgids]({baking_href}) legt de rest uit.' },
      { q: 'Kan ik het vloeibare product invriezen als mijn meringuewerk onregelmatig is?', a: 'Ja. Portioneer op {portion} g, vries in op {freeze_temp} °C tot {freeze_months} maanden, ontdooi een nacht in de koelkast en roer glad voor het opkloppen. Ontdooide aquafaba wordt nooit opnieuw ingevroren. Het poeder neemt die stap helemaal weg.' },
    ],
    links: [
      { href: '{meringue_href}', label: 'Meringue: vloeibaar of poeder?' },
      { href: '{macarons_href}', label: 'Macarons: vloeibaar of poeder?' },
      { href: '{chocolate_mousse_href}', label: 'Chocolademousse: vloeibaar of poeder?' },
      { href: '{baking_href}', label: 'Bakken: vloeibaar of poeder?' },
      { href: '{reconstitution_href}', label: 'Poeder aanmaken: de regel per eiwit' },
    ],
  },

  bars: {
    title: 'Aquafaba voor bars en cocktails - VERY AQUAFABA',
    h1: 'Zo gebruikt u aquafaba voor bars en cocktails: de complete gids',
    crumb: 'Bars en cocktails',
    enquiryLabel: 'Bars en cocktails',
    description: 'Aquafaba achter de bar: {cocktails_dose} g per sour en twee shakes voor een zijdezacht eivrij schuim. Waarom bars overstappen en welke verpakking bij uw volume past.',
    lead: 'Aquafaba geeft een sour een stabiele, zijdezachte schuimkraag zonder rauw eiwit achter de bar. Het vraagt {cocktails_dose} g per drankje en twee shakes, en de cocktailgids loopt het recept met u door. Hieronder het werk eromheen: waarom bars overstappen, welke verpakking past bij hoeveel sours u schenkt, hoe u de service opzet, en wat u in het barboek schrijft.',
    figures: false,
    sections: [
      {
        id: 'why',
        title: 'Waarom bars overstappen op aquafaba',
        html: `<p>Een sour wordt nooit verhit, dus wat er in de shaker gaat, wordt geserveerd zoals het is. Dat is het hele argument voor aquafaba achter de bar:</p>
<ul>
<li><strong>Geen rauw ei in een onverhit drankje.</strong> Rauw eiwit draagt een voedselveiligheidsrisico dat aquafaba niet heeft. Het schuim is dezelfde zijdezachte kraag, zonder de zorg.</li>
<li><strong>Elke gast kan hem bestellen.</strong> Aquafaba is plantaardig en eivrij, dus de sour op de kaart is dezelfde sour voor vegan gasten.</li>
<li><strong>Een plank in plaats van een koelkastplek.</strong> Gesloten zijn beide formaten minimaal {unopened_months} maanden houdbaar op kamertemperatuur. Het poeder heeft zelfs na het openen de koelkast niet nodig.</li>
</ul>
<p>Het drankje zelf verandert niet. De whisky, de citroen, de siroop, de dry shake en de wet shake blijven precies zoals ze zijn, en de <a href="{cocktails_href}">cocktailgids</a> heeft de volledige werkwijze en haar probleemtabel.</p>`,
      },
      {
        id: 'decide',
        title: 'Hoeveel sours voordat u de volgende verpakking opent?',
        html: `<p>Een 1 L Tetrapak schenkt {cocktails_batches_1l} sours en een zakje van 200 g poeder {cocktails_batches_200g}. Welke verpakking u koopt, hangt af van hoe snel ze op is zodra ze open is: geopend vloeibaar product staat in de koelkast en wordt binnen {opened_days} dagen gebruikt, terwijl een geopend zakje poeder gewoon wacht, droog en gesloten, op de volgende bestelling. Bartenders zonder vaste sour-rotatie kiezen precies daarom het poeder.</p>
${grid(['Uw bar', 'Onze keuze', 'Waarom'], [
  ['Cocktailbar met sours op de kaart, elke service besteld', 'Vloeibaar, 1 L Tetrapak', '{cocktails_batches_1l} drankjes per verpakking, ruim binnen {opened_days} dagen op'],
  ['Buurtbar die een paar sours per week schenkt', 'Poeder, zakje van 200 g', 'Geen klok na het openen: maak aan wat vanavond nodig is'],
  ['Bar zonder vrije koelkastruimte', 'Poeder', 'Het zakje staat op een droge plank achter de bar'],
  ['Evenementen, catering op locatie, pop-upbars', 'Poeder', 'Het reist droog, zonder koudeketen'],
  ['Drukke weekends, rustige weekdagen', 'Beide', 'Vloeibaar voor de drukte, poeder voor de rest'],
  ['Hotelgroep, gebottelde sourbases, drankenlijn', 'Vloeibaar, 10 L bag-in-box of 1 T IBC', 'Continu gebruik, zonder iets aan te maken'],
])}
<p>Liever vloeibaar, maar krijgt u een verpakking niet op tijd leeg? Vries het in in porties van {portion} g, ontdooi in de koelkast en roer voor gebruik. Het wordt nooit opnieuw ingevroren.</p>`,
      },
      {
        id: 'service',
        title: 'De service opzetten',
        html: `<p>Drie gewoonten maken het verschil tussen een kraag die houdt en een die inzakt, en alle drie gebeuren vóór de eerste bestelling:</p>
<ul>
<li><strong>Pre-batch de basis, niet de aquafaba.</strong> Whisky, citroen en siroop kunnen vooraf als batch. De aquafaba gaat erbij bij de shake, per drankje, anders is de hoogte halverwege de service weg.</li>
<li><strong>Koud, en afgemeten.</strong> Aquafaba schuimt sneller en houdt langer als hij gekoeld in de shaker komt. Weeg of jigger elke keer {cocktails_dose} g: vrij schenken is wat de kraag ongelijk maakt van drankje tot drankje.</li>
<li><strong>Poeder wordt aangemaakt voordat de deuren opengaan.</strong> Eén drankje is {cocktails_powder} g poeder en {cocktails_water} ml water; per eiwit geven {white_powder} g en {white_water} ml {white_total} g aquafaba. Maak aan wat de service nodig heeft, koel het, en het schenkt als het vloeibare product. De <a href="{cocktails_calc_href}">cocktailrekenhulp</a> geeft de cijfers voor elk aantal drankjes.</li>
</ul>
<p>Drukke weekends en rustige weekdagen? Veel bars houden beide: de Tetrapak in de koelkast voor de drukte, het zakje op de plank voor de rest. De dosis is in beide dezelfde.</p>`,
      },
      {
        id: 'book',
        title: 'Wat u in het barboek schrijft',
        html: `<p>Aquafaba vraagt vier regels in het barboek, en ze redden een platte sour op een drukke avond:</p>
<ul>
<li><strong>De openingsdatum op de verpakking.</strong> Geopend vloeibaar product wordt bewaard op maximaal {opened_temp} °C en binnen {opened_days} dagen gebruikt. Schrijf de datum op het pak zodra het opengaat.</li>
<li><strong>De dosis.</strong> {cocktails_dose} g per drankje, gewogen of gejiggerd, nooit vrij geschonken.</li>
<li><strong>De volgorde van de shakes.</strong> Eerst een dry shake van {cocktails_dry_shake} seconden, dan {cocktails_wet_shake} seconden met ijs. IJs vanaf het begin geeft een dunne kraag.</li>
<li><strong>Wanneer een geopende verpakking weg moet.</strong> Ruikt het vloeibare product vreemd, vertoont het belletjes of is het gescheiden, dan gaat het weg, wat de datum ook zegt.</li>
</ul>
<p>Het <a href="{cocktails_process_href}">procesblad</a> drukt deze regels af met de referentiewaarde van elke stap, klaar voor het barboek.</p>`,
      },
    ],
    faq: [
      { q: 'Hoeveel sours schenkt een verpakking van 1 L?', a: '{cocktails_batches_1l} sours van elk {cocktails_dose} g. Een zakje van 200 g poeder geeft er {cocktails_batches_200g}, drankje voor drankje of voor de hele service aangemaakt.' },
      { q: 'Moet ik mijn sourrecept aanpassen?', a: 'Nee. Eén ingrediënt verandert: {cocktails_dose} g aquafaba vervangt het eiwit. De whisky, de citroen, de siroop, de dry shake en de wet shake blijven zoals ze zijn.' },
      { q: 'Kan de aquafaba in de pre-batch?', a: 'Nee. Batch de whisky, citroen en siroop, en voeg de aquafaba toe bij de shake, per drankje. Aquafaba in de pre-batch geeft halverwege de service geen hoogte meer.' },
      { q: 'En als ik maar een paar sours per week schenk?', a: 'Neem het poeder. Een geopend zakje bederft niet zolang het droog en gesloten blijft, dus u maakt aan wat vanavond nodig is en de rest wacht. Geopend vloeibaar product heeft {opened_days} dagen in de koelkast.' },
      { q: 'Kan ik het in één bar uitproberen voordat de hele groep overstapt?', a: 'Ja. Het zakje van 30 g poeder is gemaakt voor een eerste proef: aangemaakt met {white_powder} g plus {white_water} ml water per eiwit dekt het een service sours. Vraag het aan via ons [contactformulier]({contact_href}).' },
      { q: 'Draagt het schuim bitters?', a: 'Ja. Na de dry shake en de wet shake, fijn gezeefd in een gekoelde coupe, is de kraag stevig genoeg om een paar druppels bitters te dragen.' },
    ],
    links: [
      { href: '{cocktails_href}', label: 'Cocktails: vloeibaar of poeder?' },
      { href: '{cocktails_calc_href}', label: 'Rekenhulp voor cocktails' },
      { href: '{cocktails_process_href}', label: 'Procesblad voor cocktails' },
      { href: '{reconstitution_href}', label: 'Poeder aanmaken: de regel per eiwit' },
    ],
  },

  foodservice: {
    title: 'Aquafaba voor centrale keukens - VERY AQUAFABA',
    h1: 'Zo gebruikt u aquafaba in een centrale keuken: de complete gids',
    crumb: 'Foodservice en centrale keukens',
    enquiryLabel: 'Foodservice en centrale keukens',
    description: 'Aquafaba voor centrale keukens: mayonaise, mousse, meringue en eivrije baksels uit één ingrediënt. Wat een dienst produceert en wat naar de vestigingen reist.',
    lead: 'Een centrale keuken maakt de mayonaise, de desserts en de eivrije baksels die haar vestigingen serveren. Aquafaba dekt ze allemaal uit één ingrediënt: {white_liquid} g per eiwit, {egg_liquid} g per heel ei. Hieronder een dag in die keuken: wat een dienst kan produceren, wat goed reist en hoe lang, en hoe u de vestigingen op hetzelfde recept laat draaien.',
    figures: false,
    sections: [
      {
        id: 'why',
        title: 'Waarom centrale keukens overstappen op aquafaba',
        html: `<p>Meerdere vestigingen bevoorraden vanuit één keuken betekent dat elk ingrediënt twee keer moet standhouden: één keer in de productie en één keer onderweg. Aquafaba verdient zijn plek om drie redenen:</p>
<ul>
<li><strong>Eén ingrediënt, vier taken.</strong> Het emulgeert de mayonaise, klopt op tot de mousse en de meringue, en bindt de biscuits en degen. Eén regel op de voorraadlijst vervangt het ei in allemaal.</li>
<li><strong>Niets rauws in de koude sauzen.</strong> Mayonaise wordt onverhit geserveerd. Aquafaba vervangt het ei zonder risico van rauw ei in het gerecht dat de keuken verlaat.</li>
<li><strong>Voorraad die wacht.</strong> Gesloten zijn beide formaten minimaal {unopened_months} maanden houdbaar op kamertemperatuur, in de droge opslag, niet in de koelcel. De klok begint pas zodra een verpakking open is.</li>
</ul>`,
      },
      {
        id: 'shift',
        title: 'Wat één dienst kan produceren',
        html: `<p>De batchcijfers zijn die van de VERY AQUAFABA recepten. De 10 L bag-in-box is de verpakking waaruit de meeste centrale keukens aftappen; de 1 L Tetrapak bedient één vestiging.</p>
${grid(['Toepassing', 'Eén batch', 'Uit een 10 L bag-in-box', 'Uit een 1 L Tetrapak'], [
  ['<a href="{mayonnaise_href}">Mayonaise</a>', '{mayonnaise_dose} g aquafaba voor ongeveer {mayonnaise_yield} g mayonaise', '{mayonnaise_batches_10l} batches', '{mayonnaise_batches_1l} batches'],
  ['<a href="{chocolate_mousse_href}">Chocolademousse</a>', '{chocolate_mousse_dose} g voor ongeveer {chocolate_mousse_yield} porties', '{chocolate_mousse_batches_10l} batches', '{chocolate_mousse_batches_1l} batches'],
  ['<a href="{meringue_href}">Meringue</a>', '{meringue_dose} g voor ongeveer {meringue_yield} meringues', '{meringue_batches_10l} batches', '{meringue_batches_1l} batches'],
  ['<a href="{baking_href}">Biscuits, cakes, degen</a>', '{egg_liquid} g per heel ei', '{eggs_10l} hele eieren', '{eggs_1l} hele eieren'],
], 'va-guide-grid--wrap')}
<p>Mayonaise gebruikt heel weinig aquafaba per batch, en daarom gaat zelfs een verpakking van 1 L lang mee op een sauzenstation. De vraag is nooit of een verpakking groot genoeg is; het is of een geopende verpakking binnen {opened_days} dagen op is. Elke gids heeft een rekenhulp die de batch naar uw run schaalt.</p>`,
      },
      {
        id: 'travel',
        title: 'Wat goed reist, en hoe lang',
        html: `<p>Hier maakt aquafaba het leven makkelijker voor een keuken die uitlevert. Eenmaal gemaakt vraagt elk product iets anders:</p>
<ul>
<li><strong>Mayonaise</strong> blijft tot {mayonnaise_keep} dagen goed in de koelkast, hygiënisch gemaakt, in een schone bak en meteen na het mixen gekoeld. Ze wordt afgewerkt verzonden.</li>
<li><strong>Chocolademousse</strong> stijft op in de koelkast en blijft {chocolate_mousse_keep} dagen goed in gesloten verpakking. Portioneer ze centraal en verzend ze opgesteven.</li>
<li><strong>Meringues</strong> blijven luchtdicht goed op kamertemperatuur op een droge plek. Geen koudeketen in de bestelwagen.</li>
<li><strong>Baksels en verrijkte degen</strong> blijven langer zacht, omdat aquafaba het uitdrogen van de kruim vertraagt. Dat is een dag of twee extra houdbaarheid onderweg naar de vestiging.</li>
</ul>
<p>Etiketteer elke bak met de productiedatum en het gewicht voordat ze vertrekt, zoals de bewaargids vraagt. Het is de ene gewoonte die een levering traceerbaar houdt van de mixer tot de koelkast van de vestiging.</p>`,
      },
      {
        id: 'outlets',
        title: 'De vestigingen aan het draaien houden',
        html: `<p>De meeste groepen verdelen de twee formaten naar waar het werk gebeurt. De centrale keuken tapt vloeibaar af uit de bag-in-box, omdat haar gebruik continu is en een geopende verpakking op tijd rouleert. De vestigingen die ter plaatse opkloppen of mixen, houden een zakje van 200 g poeder op de plank, omdat een rustige week het niet bederft.</p>
${grid(['Uw bedrijf', 'Onze keuze', 'Waarom'], [
  ['Centrale keuken die per dienst per kilo aquafaba aftapt', 'Vloeibaar, 10 L bag-in-box of 1 T IBC', 'Continu gebruik, rechtstreeks de mixer in, niets aan te maken'],
  ['Traiteur of broodjeszaak die elke service verse mayonaise maakt', 'Vloeibaar, 1 L Tetrapak', 'Gegoten op mixtemperatuur, en de verpakking rouleert op tijd'],
  ['Vestiging met mayonaise of mousse op één gerecht', 'Poeder, zakje van 200 g', 'Een geopende liter zou zijn {opened_days} dagen overleven; het zakje wacht'],
  ['Koelcel al vol met afgewerkte saus en porties', 'Poeder', 'Het zakje neemt nooit een koelplek in'],
  ['Vestiging die minder gedateerde artikelen wil registreren', 'Poeder', 'Geen geopende, bederfelijke verpakking om te etiketteren en te controleren'],
])}
<p>Het recept verandert niet tussen de twee: {white_liquid} g vloeibaar is {white_powder} g poeder aangemaakt met {white_water} ml water, dus een saus die centraal is ontwikkeld, draait op de vestiging hetzelfde. Voor de grootste keukens en continue lijnen behandelt de <a href="{industry_href}">pagina voedingsindustrie</a> de 1 T IBC.</p>`,
      },
    ],
    faq: [
      { q: 'Hoeveel eiwitten vervangt een 10 L bag-in-box?', a: '{bib_10l_whites} eiwitten, bij {white_liquid} g vloeibaar per eiwit. In mayonaise is dat {mayonnaise_batches_10l} batches, in chocolademousse {chocolate_mousse_batches_10l}, in meringue {meringue_batches_10l}.' },
      { q: 'Kunnen we aquafabamousse naar onze vestigingen verzenden?', a: 'Ja. Laat ze centraal opstijven, in gesloten verpakking, en ze blijft {chocolate_mousse_keep} dagen goed in de koelkast. De mayonaise blijft onder dezelfde omstandigheden tot {mayonnaise_keep} dagen goed gekoeld.' },
      { q: 'Kunnen vestigingen met lage rotatie hetzelfde product gebruiken?', a: 'Ja, in poeder. Een zakje van 200 g vervangt {powder_200g_whites} eiwitten, bederft na het openen niet zolang het droog en gesloten blijft, en wordt aangemaakt met {white_powder} g plus {white_water} ml water per eiwit wanneer de vestiging het nodig heeft.' },
      { q: 'Hoe lang is een geopende bag-in-box houdbaar?', a: 'Zoals elke geopende vloeibare verpakking: op maximaal {opened_temp} °C, binnen {opened_days} dagen gebruikt. Ze past bij keukens met een continue afname, zodat de verpakking blijft rouleren.' },
      { q: 'Heeft de vestiging een koelkastplek nodig voor het poeder?', a: 'Nee. Het zakje staat op een droge plank, open of niet. Alleen de aangemaakte aquafaba wordt vóór gebruik gekoeld, en alleen zoveel als de batch nodig heeft.' },
      { q: 'Waar sturen we onze volumes naartoe?', a: 'Via ons [contactformulier]({contact_href}): bedrijf, land, toepassing en geschat maandvolume. De technische fiche komt met het antwoord mee.' },
    ],
    links: [
      { href: '{mayonnaise_href}', label: 'Mayonaise: vloeibaar of poeder?' },
      { href: '{chocolate_mousse_href}', label: 'Chocolademousse: vloeibaar of poeder?' },
      { href: '{mayonnaise_calc_href}', label: 'Rekenhulp voor mayonaise' },
      { href: '{industry_href}', label: 'Voedingsindustrie' },
    ],
  },

  industry: {
    title: 'Aquafaba voor de voedingsindustrie - VERY AQUAFABA',
    h1: 'Zo gebruikt u aquafaba op een productielijn: de complete gids',
    crumb: 'Voedingsindustrie',
    enquiryLabel: 'Voedingsindustrie',
    description: 'Aquafaba voor industriële lijnen: vloeibaar in de 1 T IBC en de 10 L bag-in-box, op {viscosity} g/ml. Hoe u het ei in een formule op schaal vervangt.',
    lead: 'Op een productielijn draait aquafaba als vloeistof, afgetapt uit de 1 T IBC of de 10 L bag-in-box en gedoseerd op gewicht. Het komt gefilterd, verfijnd en gestandaardiseerd aan op {viscosity} g/ml, zodat een schuim of een emulsie zich bij elke run hetzelfde gedraagt. Hieronder het werk van de eerste proef tot de goedgekeurde specificatie: het ei in uw formule vervangen, wat er op schaal verandert, welke verpakking bij de lijn past, en hoe u een offerte krijgt.',
    figures: false,
    sections: [
      {
        id: 'why',
        title: 'Waarom producenten overstappen op aquafaba',
        html: `<p>Vier dingen die een plantaardige eivervanger een lijn brengt, allemaal op de verpakking of op de prijslijst in plaats van in een claim:</p>
<ul>
<li><strong>Een plantaardig, eivrij ingrediënt.</strong> Geen eieren, zuivel, gluten of soja, wat een belangrijk allergeen uit de formule haalt en het product openstelt voor plantaardige assortimenten.</li>
<li><strong>Een prijs die de eiermarkt niet volgt.</strong> Eierprijzen bewegen met voerkosten, ziekte en aanbodschokken. Aquafaba niet.</li>
<li><strong>Een gestandaardiseerde grondstof.</strong> Elke batch komt aan op {viscosity} g/ml, en dat is wat een schuim of een emulsie reproduceerbaar houdt van de ene run naar de volgende.</li>
<li><strong>Voorraad die wacht.</strong> Gesloten zijn de verpakkingen minimaal {unopened_months} maanden houdbaar op kamertemperatuur. Op een continue lijn haalt een geopende verpakking haar {opened_days} dagen nooit.</li>
</ul>`,
      },
      {
        id: 'formula',
        title: 'Het ei in uw formule vervangen',
        html: `<p>De omrekening gaat op gewicht, en het is dezelfde regel die de hele site gebruikt. Tel de eieren, de eiwitten en de dooiers in de formule, en vervang ze één op één:</p>
<ul>
<li>{egg_liquid} g aquafaba per heel ei.</li>
<li>{white_liquid} g per eiwit.</li>
<li>{yolk_liquid} g aquafaba plus {yolk_oil} g olie per dooier, want aquafaba brengt geen vet mee.</li>
</ul>
<p>Eiwitten vervangen is een rechtstreekse vervanging. Hele eieren vervangen brengt extra water mee: aquafaba bestaat voor ongeveer {water_aquafaba_pct} procent uit water tegen {water_egg_pct} procent voor een ei, dus de andere vloeistoffen gaan {reduce_liquids} procent omlaag en dichte baksels worden gaar gebakken. Neem één product per keer, verander alleen het ei, en laat de proefbatches tijd, kleur en textuur bevestigen voordat de wijziging in de standaardprocedure gaat. De <a href="{baking_calc_href}">vervangingsrekenhulp</a> rekent een hele formule om, en de <a href="{ratio_href}">pagina over de ei-verhouding</a> draagt de regel met rekenvoorbeelden.</p>`,
      },
      {
        id: 'scale',
        title: 'Waar u op let bij het opschalen',
        html: `<p>Een formule die op de werkbank werkt, komt op de lijn vier nieuwe variabelen tegen. Elk daarvan komt uit een VERY AQUAFABA recept dat voor productie is geschreven:</p>
<ul>
<li><strong>Houd de concentratie vast.</strong> Houd de aquafaba van batch tot batch op {viscosity} g/ml. Verschuift de dichtheid, dan gedraagt het schuim zich anders, zelfs met dezelfde gewichten en tijden. Zie de <a href="{meringue_href}">meringuegids</a>.</li>
<li><strong>Pre-emulgeer op mousselijnen.</strong> Emulgeer bij grote batches eerst een deel van de chocolade met een kleine hoeveelheid aquafaba, en spatel dan de rest van het schuim erdoor. Zo blijft de batch homogeen. Zie de <a href="{chocolate_mousse_href}">gids voor chocolademousse</a>.</li>
<li><strong>Hoge afschuifkracht op sauslijnen.</strong> Bij grote mayonaisebatches is de druppelgrootte wat de emulsie stabiel houdt, dus de lijn draait op een mixer met hoge afschuifkracht met de olie in een dun, gelijkmatig straaltje. Zie de <a href="{mayonnaise_href}">mayonaisegids</a>.</li>
<li><strong>Controleer de houdbaarheid opnieuw als het vocht verandert.</strong> Elke verandering van het water in een baksel verandert zijn wateractiviteit. Volg de houdbaarheid en de microbiële stabiliteit van het eindproduct na het herformuleren, wat op industriële schaal het meest telt. Zie de <a href="{baking_href}">bakgids</a>.</li>
</ul>`,
      },
      {
        id: 'packs',
        title: 'Welke verpakking past bij uw lijn',
        html: `<p>De lijn wordt op gewicht gedoseerd, dus elke verpakking stelt u zich het makkelijkst voor via de eiwitten die ze vervangt, bij {white_liquid} g per eiwit.</p>
${grid(['Formaat', 'Eiwitten', 'Waar het draait'], [
  ['1 T IBC, vloeibaar', '{ibc_1t_whites}', 'Continue dosering: meringueschelpen die elke werkdag worden gedroogd, moussebekers voor de retail, sauslijnen, gebottelde sourbases'],
  ['10 L bag-in-box, vloeibaar', '{bib_10l_whites}', 'Proefruns, kleinere lijnen en de centrale keukens van een groep'],
  ['Zak van 3 kg, poeder', '{powder_3kg_whites}', 'Droge premixen: een producent die een droge saus- of bakbasis mengt, doet het in de premix zoals het is'],
], 'va-guide-grid--wrap')}
<p>Voor opgeklopte en geëmulgeerde lijnen is het vloeibare product het formaat, omdat het aankomt op een vaste concentratie zonder iets aan te maken. Het poeder verdient zijn plek in een droge premix. Eenmaal geopend wordt het vloeibare product bewaard op maximaal {opened_temp} °C en binnen {opened_days} dagen gebruikt, wat op een continue lijn gewoon het normale ritme van een verpakking is.</p>`,
      },
      {
        id: 'spec',
        title: 'Uw specificatie en offerte krijgen',
        html: `<p>Specificaties, minimale bestelling en levertijd hangen af van het land, het formaat en het volume, dus ze worden per project gegeven. Stuur ons de lijn, de toepassing, de formaten die u overweegt en het geschatte maandvolume via ons <a href="{contact_href}">contactformulier</a>, en de technische fiche komt met de offerte mee. Voor de centrale keukens van een groep, waar de 10 L bag-in-box dagelijks draait, zie de <a href="{foodservice_href}">foodservicepagina</a>.</p>`,
      },
    ],
    faq: [
      { q: 'Hoeveel eiwitten vervangt een 1 T IBC?', a: '{ibc_1t_whites} eiwitten, bij {white_liquid} g vloeibaar per eiwit. De 10 L bag-in-box vervangt er {bib_10l_whites}. Beide zijn vloeibaar, continu afgetapt zonder aanmaakstap.' },
      { q: 'Is het poeder een optie voor een industriële lijn?', a: 'Voor droge premixen wel: de zak van 3 kg vervangt {powder_3kg_whites} eiwitten en gaat zoals hij is in een droge saus- of bakbasis. Voor opgeklopte en geëmulgeerde lijnen is het vloeibare product het formaat, omdat het aankomt op een vaste concentratie zonder iets aan te maken.' },
      { q: 'Welke concentratie moet de lijn aanhouden?', a: '{viscosity} g/ml. VERY AQUAFABA is op die concentratie gefilterd, verfijnd en gestandaardiseerd, zodat het schuim of de emulsie zich bij elke run hetzelfde gedraagt.' },
      { q: 'Hoe rekenen we een formule om die in eieren is geteld?', a: '{egg_liquid} g aquafaba per heel ei, {white_liquid} g per eiwit, {yolk_liquid} g plus {yolk_oil} g olie per dooier, alles op gewicht. De andere vloeistoffen gaan {reduce_liquids} procent omlaag als hele eieren worden vervangen, en testbatches bevestigen tijd, kleur en textuur.' },
      { q: 'Verandert het vervangen van eieren de houdbaarheid van ons product?', a: 'Dat kan, want aquafaba verandert het water in de formule en daarmee de wateractiviteit. Volg de houdbaarheid en de microbiële stabiliteit van het eindproduct na het herformuleren, zoals de [bakgids]({baking_href}) uiteenzet.' },
      { q: 'Waar staan de minimale bestelling en de levertijd?', a: 'Die worden per project gegeven met de technische fiche. Beschrijf de lijn, de formaten en het geschatte maandvolume via ons [contactformulier]({contact_href}) en het antwoord bevat ze.' },
    ],
    links: [
      { href: '{ratio_href}', label: 'Hoeveel aquafaba staat gelijk aan een ei' },
      { href: '{baking_calc_href}', label: 'Vervangingsrekenhulp' },
      { href: '{meringue_href}', label: 'Meringue: vloeibaar of poeder?' },
      { href: '{mayonnaise_href}', label: 'Mayonaise: vloeibaar of poeder?' },
      { href: '{foodservice_href}', label: 'Foodservice en centrale keukens' },
    ],
  },
};
