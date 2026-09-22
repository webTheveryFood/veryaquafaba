// Professionals per doelgroep, Nederlands (set-2 B0 tot B4). Zelfde structuur, tokens en
// tags als professional.en.js (gecontroleerd door scripts/applications/check-guides.mjs). Geen gedachtestreepje.
const grid = (heads, rows) => `<table class="va-guide-grid">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;
const PICK = ['Uw keuken', 'Onze keuze', 'Waarom'];

export default {
  index: {
    title: 'Aquafaba voor professionals: banketbakkerij, bars, foodservice en industrie - VERY AQUAFABA',
    h1: 'Aquafaba voor professionals: welk formaat voor welke keuken',
    crumb: 'Professionals',
    enquiryLabel: 'Professionals',
    description: 'VERY AQUAFABA in de professionele keuken, achter de bar, in de centrale keuken en op industriële lijnen: waar elke activiteit begint, het volledige assortiment met eiwit-equivalenten en het aanvraagformulier voor volumes.',
    lead: 'VERY AQUAFABA vervangt eiwit in de banketbakkerij, achter de bar, in de centrale keuken en op industriële lijnen. Eén regel geldt overal: {white_liquid} g vloeibaar of {white_powder} g poeder vervangt één eiwit. Wat van activiteit tot activiteit verandert, zijn het formaat, de verpakking en het ritme van gebruik. Deze pagina stuurt elke activiteit naar haar eigen pagina, toont het volledige assortiment en opent het aanvraagformulier voor professionele volumes.',
    figures: true,
    sections: [
      {
        id: 'start',
        title: 'Waar elke activiteit begint',
        html: `<p>Vier activiteiten, vier manieren van werken, één product. Elke pagina hieronder is geschreven voor de manier waarop die keuken draait: wat ze met aquafaba maakt, hoe snel een geopende verpakking op is en welke verpakking past.</p>
${grid(['Activiteit', 'Begin hier', 'Wat de pagina behandelt'], [
  ['Banketbakkerij, bakkerij, patisserie', '<a href="{pastry_href}">Banketbakkerij en bakkerij</a>', 'Meringue, macarons, mousse en eivrij bakken; het formaat naar ovenritme; batches geteld in eiwitten'],
  ['Cocktailbar, hotelbar, evenementen', '<a href="{bars_href}">Bars en cocktails</a>', 'De sour, de dosis per glas, poeder voor een paar sours per week en vloeibaar voor elke service'],
  ['Centrale keuken, kantine, restaurantketen', '<a href="{foodservice_href}">Foodservice en centrale keukens</a>', 'Mayonaise, sauzen en desserts op grote schaal; koudeketen en ruimte; de 10 L bag-in-box'],
  ['Voedingsproducent, industriële lijn', '<a href="{industry_href}">Voedingsindustrie</a>', 'De 1 T IBC en de bag-in-box voor continue lijnen; herformuleren op gewicht; hoe u specificaties aanvraagt'],
])}
<p>Zit uw activiteit tussen twee ervan in, lees dan beide: een hotel draait een banketafdeling en een bar op hetzelfde product, en een centrale keuken met een patisserielijn leest als een bakkerij op de dagen dat ze meringue spuit.</p>`,
      },
      {
        id: 'range',
        title: 'Het assortiment, met eiwit-equivalenten',
        html: `<p>Elke verpakking wordt beschreven met het aantal eiwitten dat ze vervangt, want zo wordt een recept geteld. Het vloeibare product is klaar voor gebruik; het poeder wordt aangemaakt met water, {white_powder} g + {white_water} ml per eiwit, wat {white_total} g aquafaba geeft.</p>
<ul>
<li>Vloeibaar: 1 L Tetrapak = {liquid_1l_whites} eiwitten. 10 L bag-in-box = {bib_10l_whites}. 1 T IBC = {ibc_1t_whites}.</li>
<li>Poeder: zakje van 30 g = {powder_30g_whites} eiwitten. Zakje van 200 g = {powder_200g_whites}. Zak van 3 kg = {powder_3kg_whites}.</li>
</ul>
<p>Gesloten zijn beide formaten minimaal {unopened_months} maanden houdbaar op kamertemperatuur. Geopend vloeibaar product staat in de koelkast op maximaal {opened_temp} °C en wordt binnen {opened_days} dagen gebruikt. Geopend poeder bederft niet, het moet alleen droog en gesloten blijven. De verpakkingen en de bewaring staan in de kerncijfers hieronder; het technische blad vraagt u aan via het formulier onderaan deze pagina.</p>`,
      },
      {
        id: 'decide',
        title: 'Vloeibaar of poeder? De vragen die beslissen',
        html: `<p>De keuze gaat niet over de grootte van de batch. Ze gaat over hoe snel een geopende verpakking op is, of er een koelplek vrij is, hoeveel droge opslag er is en hoe de keuken het liefst doseert. Dezelfde vragen komen op elke doelgroeppagina terug, beantwoord voor die keuken.</p>
${grid(['Vraag', 'Wijst naar vloeibaar', 'Wijst naar poeder'], [
  ['Is een geopende verpakking binnen {opened_days} dagen op?', 'Ja: de verpakking is op tijd leeg', 'Nee: het zakje wacht zonder datum op de volgende batch'],
  ['Is er koelruimte voor een geopende verpakking?', 'Ja: ze staat in de koelkast, al op werktemperatuur', 'Nee: het zakje staat op een droge plank'],
  ['Is het werk continu?', 'Ja: 10 L bag-in-box of 1 T IBC, continu gebruik en geen aanmaakstap', 'Nee: maak aan wat de batch nodig heeft'],
  ['Reist het product of gaat het naar evenementen?', 'Alleen met een koudeketen', 'Ja: het reist droog'],
  ['Gaat het recept in een droge premix?', 'Nee', 'Ja: het gaat droog in de premix'],
])}
<p>Drukke weekends, rustige weekdagen? Beide: vloeibaar voor de piek, poeder voor de rest. De omrekening ligt vast, een recept draait op allebei.</p>`,
      },
      {
        id: 'tools',
        title: 'De gidsen en de hulpmiddelen erachter',
        html: `<p>Zes toepassingsgidsen beantwoorden vloeibaar of poeder voor meringue, chocolademousse, mayonaise, bakken, cocktails en macarons, elk met zijn methode, zijn probleemtabel en zijn kerncijfers. Onder elke gids staan twee hulpmiddelen: een rekenhulp die het recept schaalt per batch of per stuk, vloeibaar en als poeder met zijn water, en een afdrukbaar procesblad met de referentiewaarde van elke stap en de controles als een batch mislukt.</p>
<p>De <a href="{reconstitution_href}">pagina over het aanmaken van het poeder</a> draagt de regel per eiwit en een tabel van 1 tot 20 eiwitten, voor elk recept dat in eiwitten wordt geteld. De <a href="{index_href}">toepassingsindex</a> somt elke gids en elk hulpmiddel op.</p>`,
      },
    ],
    faq: [
      { q: 'Is de dosis hetzelfde voor vloeibaar en poeder?', a: 'Ja, geteld in eiwitten. {white_liquid} g vloeibaar vervangt één eiwit, net als {white_powder} g poeder aangemaakt met {white_water} ml water, wat {white_total} g aquafaba geeft. Een batch wordt in beide formaten gedoseerd op zijn aantal eiwitten.' },
      { q: 'Welke formaten bestaan er voor grote volumes?', a: 'De 10 L bag-in-box vervangt {bib_10l_whites} eiwitten en de 1 T IBC {ibc_1t_whites}; beide vloeibaar, voor continu gebruik zonder aanmaakstap. In poeder vervangt de zak van 3 kg {powder_3kg_whites} eiwitten. Beschrijf uw volumes via het [aanvraagformulier]({contact_href}) om het technische blad te ontvangen.' },
      { q: 'Hoe lang is een geopende verpakking houdbaar?', a: 'Geopend vloeibaar product wordt bewaard op maximaal {opened_temp} °C en binnen {opened_days} dagen gebruikt. Geopend poeder bederft niet zolang het droog en gesloten blijft. Gesloten zijn beide minimaal {unopened_months} maanden houdbaar op kamertemperatuur.' },
      { q: 'Kan een keuken vloeibaar en poeder naast elkaar gebruiken?', a: 'Ja. Vloeibaar voor de dagen dat de verpakking rouleert, poeder voor de onregelmatige bestellingen. De omrekening ligt vast, het recept verandert niet van het ene formaat naar het andere.' },
      { q: 'Hoe krijgen we het technische blad?', a: 'Via het formulier onderaan deze pagina: het vraagt om bedrijf, land, toepassing en geschat maandvolume, en het technische blad komt met het antwoord mee.' },
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
    title: 'Aquafaba voor banketbakkerij en bakkerij: vloeibaar of poeder naar rotatie - VERY AQUAFABA',
    h1: 'Aquafaba voor banketbakkerij en bakkerij: vloeibaar of poeder naar ovenritme',
    crumb: 'Banketbakkerij en bakkerij',
    enquiryLabel: 'Banketbakkerij en bakkerij',
    description: 'VERY AQUAFABA in de banketbakkerij en de bakkerij: meringue, macarons, chocolademousse en eivrij bakken, het formaat naar ovenritme, batches geteld in eiwitten en de controles voordat de mixer aangaat.',
    lead: 'In de banketbakkerij gaat de aquafaba in meringue, macaronschelpen, chocolademousse en eivrije biscuits. Welk formaat bij u past, wordt bepaald door hoe vaak u de oven vult en hoe snel een geopende verpakking op is: geopend vloeibaar product is {opened_days} dagen houdbaar op maximaal {opened_temp} °C, geopend poeder bederft niet. Deze pagina telt elke batch in eiwitten, zet het formaat tegenover uw ritme en noemt de drie controles die de meeste fouten beslissen voordat de mixer aangaat.',
    sections: [
      {
        id: 'makes',
        title: 'Wat een banketbakkerij ermee maakt',
        html: `<p>Elke toepassing heeft haar eigen gids, rekenhulp en procesblad. De batchcijfers hieronder komen uit de VERY AQUAFABA recepten; de verpakkingskolommen zeggen hoeveel batches één verpakking oplevert.</p>
${grid(['Toepassing', 'Per batch', 'Uit een 1 L Tetrapak', 'Uit een zakje van 200 g'], [
  ['<a href="{meringue_href}">Meringue</a>', '{meringue_dose} g, {meringue_eggs} eiwitten, ongeveer {meringue_yield} meringues', '{meringue_batches_1l} batches', '{meringue_batches_200g} batches'],
  ['<a href="{macarons_href}">Macarons</a>', '{macarons_dose} g, {macarons_eggs} eiwitten, ongeveer {macarons_yield} macarons', '{macarons_batches_1l} batches', '{macarons_batches_200g} batches'],
  ['<a href="{chocolate_mousse_href}">Chocolademousse</a>', '{chocolate_mousse_dose} g, {chocolate_mousse_eggs} eiwitten, ongeveer {chocolate_mousse_yield} porties', '{chocolate_mousse_batches_1l} batches', '{chocolate_mousse_batches_200g} batches'],
  ['<a href="{baking_href}">Bakken</a>', '{egg_liquid} g per heel ei, {white_liquid} g per eiwit', '{eggs_1l} hele eieren of {whites_1l} eiwitten', '{whites_200g} eiwitten'],
])}
<p>Voor een dooier is de regel van de site {yolk_liquid} g aquafaba plus {yolk_oil} g olie. De <a href="{baking_calc_href}">bakrekenhulp</a> rekent de eieren, eiwitten en dooiers van elk recept om naar vloeibaar, of naar poeder met zijn water.</p>`,
      },
      {
        id: 'decide',
        title: 'Vloeibaar of poeder? Begin bij het ovenritme',
        html: `<p>Gesloten zijn beide formaten minimaal {unopened_months} maanden houdbaar op kamertemperatuur. De keuze begint op de dag dat u de verpakking opent. Een 1 L Tetrapak geeft {meringue_batches_1l} batches meringue of {macarons_batches_1l} batches macarons; bakt u er niet zoveel in de {opened_days} dagen na het openen, dan is het poeder de betere keuze, want een geopend zakje wacht zonder datum op de volgende plaat.</p>
${grid(PICK, [
  ['Banketafdeling die de meeste dagen meringue of macarons spuit', 'Vloeibaar, 1 L Tetrapak', 'De verpakking is ruim binnen {opened_days} dagen leeg'],
  ['Bakkerij met elke dag een eivrije lijn', 'Vloeibaar, 1 L Tetrapak', 'Uit de koelkast gegoten, al op opkloptemperatuur'],
  ['Winkel die op bestelling bakt, of een seizoensdessert met meringue', 'Poeder, zakje van 200 g', 'Het overbrugt de lange pauzes tussen twee runs'],
  ['Koeling vol met crèmes, ganache en rijpende macarons', 'Poeder', 'Het zakje staat op een droog rek, buiten de koelcel'],
  ['Dagelijkse lijn plus onregelmatige bestellingen', 'Beide', 'Vloeibaar voor de lijn, poeder voor de bestellingen; de omrekening ligt vast'],
  ['Plantaardige patisserielijn die continu spuit', 'Vloeibaar, 10 L bag-in-box of 1 T IBC', 'Continu gebruik en geen aanmaakstap'],
])}
<p>Liever vloeibaar, maar u bakt onregelmatig? Vries het in in porties van {portion} g op {freeze_temp} °C tot {freeze_months} maanden, ontdooi een nacht in de koelkast en roer glad voor het opkloppen. Het wordt nooit opnieuw ingevroren.</p>`,
      },
      {
        id: 'whites',
        title: 'Batches geteld in eiwitten',
        html: `<p>Het poeder wordt per batch gedoseerd op het aantal eiwitten dat het recept vervangt: {white_powder} g poeder en {white_water} ml water per eiwit. De aangemaakte aquafaba wordt daarna, net als het vloeibare product, gekoeld tot {meringue_chill} °C voor het opkloppen, want warme aquafaba klimt traag en geeft een zwakker schuim.</p>
<ul>
<li>Meringue, {meringue_eggs} eiwitten: {meringue_powder} g poeder + {meringue_water} ml water.</li>
<li>Macarons, {macarons_eggs} eiwitten: {macarons_powder} g poeder + {macarons_water} ml water.</li>
<li>Chocolademousse, {chocolate_mousse_eggs} eiwitten: {chocolate_mousse_powder} g poeder + {chocolate_mousse_water} ml water.</li>
</ul>
<p>Het poeder is geen sluiproute voor droge mengsels: de aquafaba wordt eerst apart opgeklopt, maak het dus aan met water voordat het in de buurt van het amandelmeel of de suiker komt. De <a href="{reconstitution_href}">aanmaakpagina</a> draagt de tabel van 1 tot 20 eiwitten; elke <a href="{meringue_calc_href}">rekenhulp</a> schaalt het hele recept per batch of per stuk.</p>`,
      },
      {
        id: 'checks',
        title: 'Voordat de mixer aangaat: drie controles',
        html: `<p>De meeste fouten bij meringue en macarons worden beslist voor het opkloppen. Drie controles dekken ze af, en het zijn de eerste regels van elk procesblad.</p>
<ul>
<li>Temperatuur. Het vloeibare product komt op {meringue_chill} °C uit de koelkast en gaat meteen in de kom; aangemaakt poeder wordt tot dezelfde temperatuur gekoeld.</li>
<li>Vet. Aquafabaschuim is een zuiver eiwitschuim zonder vet in het recept, dus een vetfilm op de kom of de garde houdt het volume klein. Veeg beide schoon voordat de aquafaba erin gaat.</li>
<li>Suiker. Die gaat er pas in als het schuim zachte pieken houdt, een eetlepel per keer op middelhoge snelheid; sneller toegevoegd dan hij kan oplossen, gaat hij zweten tijdens de bewaring.</li>
</ul>
<p>Voor biscuits en cakes voegt de <a href="{ratio_href}">pagina over de ei-verhouding</a> de waterregel toe: een ei bestaat voor ongeveer {water_egg_pct} procent uit water en aquafaba voor {water_aquafaba_pct} procent, dus andere vloeistoffen gaan {reduce_liquids} procent omlaag als hele eieren worden vervangen. De <a href="{meringue_process_href}">procesbladen</a> drukken de referentiewaarde van elke stap af met een lege kolom voor uw eigen batch.</p>`,
      },
    ],
    faq: [
      { q: 'Kan één verpakking op dezelfde dag meringue en macarons bedienen?', a: 'Ja. Beide recepten tellen hun batch in eiwitten en gebruiken dezelfde aquafaba, gekoeld tot {meringue_chill} °C. Een 1 L Tetrapak geeft {meringue_batches_1l} batches meringue of {macarons_batches_1l} batches macarons, of elke combinatie van beide.' },
      { q: 'Hoeveel batches meringue geeft een 10 L bag-in-box?', a: '{meringue_batches_10l} batches van {meringue_dose} g, of {macarons_batches_10l} batches macarons. De bag-in-box vervangt {bib_10l_whites} eiwitten en past bij een lijn die elke werkdag spuit.' },
      { q: 'Gaat het poeder rechtstreeks in het amandelmeel?', a: 'Nee. De aquafaba wordt eerst apart opgeklopt, dus het poeder wordt aangemaakt met water, gekoeld en opgeklopt voordat het amandelmeel en de poedersuiker worden doorgespateld.' },
      { q: 'Hoe vervangen we hele eieren in een biscuit?', a: '{egg_liquid} g aquafaba per heel ei en {white_liquid} g per eiwit, gewogen, nooit afgemeten op volume. Andere vloeistoffen gaan {reduce_liquids} procent omlaag om het water in balans te brengen, en de [bakgids]({baking_href}) legt de rest uit.' },
      { q: 'Kunnen we het vloeibare product invriezen als het meringuewerk onregelmatig is?', a: 'Ja. Portioneer op {portion} g, vries in op {freeze_temp} °C tot {freeze_months} maanden, ontdooi een nacht in de koelkast en roer glad voor het opkloppen. Ontdooide aquafaba wordt nooit opnieuw ingevroren. Het poeder neemt die hele werkstroom weg.' },
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
    title: 'Aquafaba voor bars en cocktails: poeder of vloeibaar naar rotatie - VERY AQUAFABA',
    h1: 'Aquafaba voor bars en cocktails: poeder voor een paar sours per week, vloeibaar voor elke service',
    crumb: 'Bars en cocktails',
    enquiryLabel: 'Bars en cocktails',
    description: 'VERY AQUAFABA achter de bar: {cocktails_dose} g per sour en twee shakes, het formaat naar hoeveel sours u schenkt, het poeder per glas aangemaakt, en wat u controleert als het schuim inzakt.',
    lead: 'Aquafaba geeft een sour een stabiele, zijdezachte schuimkraag zonder rauw eiwit achter de bar: {cocktails_dose} g per glas en twee shakes. Een 1 L Tetrapak schenkt {cocktails_batches_1l} sours en een zakje van 200 g poeder {cocktails_batches_200g}. Welke bij uw bar past, wordt bepaald door hoeveel sours u schenkt tussen het ene openen en het volgende, want geopend vloeibaar product is {opened_days} dagen houdbaar in de koelkast en geopend poeder bederft niet.',
    sections: [
      {
        id: 'sour',
        title: 'De sour, de dosis en de shake',
        html: `<p>Er verandert niets aan het recept behalve één ingrediënt: aquafaba vervangt het eiwit. De VERY AQUAFABA whiskey sour wordt zonder ijs gebouwd met {cocktails_whiskey} ml whisky, {cocktails_lemon_juice} ml vers citroensap, {cocktails_syrup} ml suikersiroop en {cocktails_dose} g gekoelde aquafaba.</p>
<ol>
<li>Stevig dry shaken gedurende {cocktails_dry_shake} seconden. Hier ontstaat het schuim.</li>
<li>IJs erbij en nog {cocktails_wet_shake} seconden shaken om te koelen en te verdunnen.</li>
<li>Fijn zeven in een gekoelde coupe. De kraag is stevig genoeg om een paar druppels bitters te dragen.</li>
</ol>
<p>Drukke service? Batch de whisky, citroen en siroop vooraf. De aquafaba gaat erbij bij de shake, nooit in de batch, en wordt elke keer gewogen of gejiggerd op {cocktails_dose} g: vrij inschenken maakt de kraag ongelijk van glas tot glas. De <a href="{cocktails_href}">cocktailgids</a> draagt de volledige methode en haar probleemtabel.</p>`,
      },
      {
        id: 'decide',
        title: 'Vloeibaar of poeder? Begin bij hoeveel sours u schenkt',
        html: `<p>Gesloten staan beide formaten minimaal {unopened_months} maanden op een plank op kamertemperatuur. De keuze begint op de dag dat u de verpakking opent: geopend vloeibaar product staat in de koelkast op maximaal {opened_temp} °C en wordt binnen {opened_days} dagen gebruikt, geopend poeder hoeft alleen droog en gesloten te blijven. Bartenders zonder vaste sour-rotatie kiezen precies daarom het poeder.</p>
${grid(['Uw bar', 'Onze keuze', 'Waarom'], [
  ['Cocktailbar met sours op de kaart, elke service besteld', 'Vloeibaar, 1 L Tetrapak', '{cocktails_batches_1l} glazen per verpakking, ruim binnen {opened_days} dagen op'],
  ['Buurtbar die een paar sours per week schenkt', 'Poeder, zakje van 200 g', 'Geen klok na het openen; maak aan wat de avond nodig heeft'],
  ['Bar zonder vrije koelkastruimte', 'Poeder', 'Het zakje staat op een droge plank achter de bar'],
  ['Evenementen, catering op locatie, pop-upbars', 'Poeder', 'Het reist droog, zonder koudeketen'],
  ['Drukke weekends, rustige weekdagen', 'Beide', 'Vloeibaar voor de piek, poeder voor de rest'],
  ['Hotelgroep, gebottelde sourbases, drankenlijn', 'Vloeibaar, 10 L bag-in-box of 1 T IBC', 'Continu gebruik en geen aanmaakstap'],
])}
<p>Liever vloeibaar, maar krijgt u een verpakking niet op tijd leeg? Vries het in in porties van {portion} g, ontdooi in de koelkast en roer voor gebruik.</p>`,
      },
      {
        id: 'powder',
        title: 'Poeder achter de bar: maak aan wat de avond nodig heeft',
        html: `<p>Voor één glas {cocktails_powder} g poeder en {cocktails_water} ml water. Geteld per eiwit geven {white_powder} g poeder en {white_water} ml water {white_total} g aquafaba, iets meer dan één sour. Maak het aan voor de service en koel het: koude aquafaba schuimt sneller en houdt langer, aquafaba op kamertemperatuur geeft een traag, slap schuim.</p>
<p>De <a href="{reconstitution_href}">aanmaakpagina</a> draagt de tabel van 1 tot 20 eiwitten voor een hele service; de <a href="{cocktails_calc_href}">cocktailrekenhulp</a> geeft het vloeibare product, het poeder en zijn water voor elk aantal glazen.</p>`,
      },
      {
        id: 'service',
        title: 'Tijdens de service: wat u controleert als het schuim inzakt',
        html: `<p>Vijf fouten dekken de meeste platte sours af, en elk heeft zijn oorzaak bij de shake, niet in het product.</p>
${grid(['Wat u ziet', 'Oorzaak', 'Oplossing'], [
  ['Dunne kraag', 'Het ijs zat er vanaf het begin in', 'Eerst dry shaken, dan ijs'],
  ['Traag, slap schuim', 'Aquafaba op kamertemperatuur', 'Gekoeld houden tot de shake'],
  ['Geen hoogte meer halverwege de service', 'De aquafaba zat in de batch', 'Alleen de basis batchen, aquafaba per glas toevoegen'],
  ['Het schuim zakt voordat het bij de gast is', 'Het glas wachtte op de pas', 'Op bestelling shaken en meteen serveren'],
  ['Ongelijk van glas tot glas', 'Vrij inschenken', 'Elke keer {cocktails_dose} g wegen of jiggeren'],
])}
<p>Het <a href="{cocktails_process_href}">procesblad</a> drukt deze controles af met de referentiewaarde van elke stap, voor het barboek.</p>`,
      },
    ],
    faq: [
      { q: 'Hoeveel sours schenkt een verpakking van 1 L?', a: '{cocktails_batches_1l} sours van elk {cocktails_dose} g. Een zakje van 200 g poeder geeft er {cocktails_batches_200g}, glas voor glas of voor de service aangemaakt.' },
      { q: 'Moeten we het sourrecept aanpassen?', a: 'Nee. Eén ingrediënt verandert: {cocktails_dose} g aquafaba vervangt het eiwit. De whisky, de citroen, de siroop, de dry shake en de shake op ijs blijven zoals ze zijn.' },
      { q: 'Kan de aquafaba in de batch?', a: 'Nee. Batch de whisky, citroen en siroop en voeg de aquafaba toe bij de shake, per glas. Aquafaba in de batch geeft halverwege de service geen hoogte meer.' },
      { q: 'En als we maar een paar sours per week schenken?', a: 'Neem het poeder. Een geopend zakje bederft niet zolang het droog en gesloten blijft, dus u maakt aan wat de avond nodig heeft en de rest wacht. Geopend vloeibaar product heeft {opened_days} dagen in de koelkast.' },
      { q: 'Draagt het schuim bitters?', a: 'Ja. Na de dry shake en de shake op ijs, fijn gezeefd in een gekoelde coupe, is de kraag stevig genoeg om een paar druppels bitters te dragen.' },
    ],
    links: [
      { href: '{cocktails_href}', label: 'Cocktails: vloeibaar of poeder?' },
      { href: '{cocktails_calc_href}', label: 'Rekenhulp voor cocktails' },
      { href: '{cocktails_process_href}', label: 'Procesblad en controles voor de sour' },
      { href: '{reconstitution_href}', label: 'Poeder aanmaken: de regel per eiwit' },
    ],
  },

  foodservice: {
    title: 'Aquafaba voor foodservice en centrale keukens: koudeketen, ruimte, bag-in-box - VERY AQUAFABA',
    h1: 'Aquafaba voor foodservice en centrale keukens: koudeketen, ruimte en de 10 L bag-in-box',
    crumb: 'Foodservice en centrale keukens',
    enquiryLabel: 'Foodservice en centrale keukens',
    description: 'VERY AQUAFABA in centrale keukens, kantines en restaurantketens: mayonaise, sauzen en desserts op grote schaal, het formaat naar koudeketen en ruimte, en de 10 L bag-in-box die {bib_10l_whites} eiwitten vervangt.',
    lead: 'Een centrale keuken gebruikt aquafaba in mayonaise en koude sauzen, in chocolademousse en meringue voor de dessertlijn, en in eivrij bakken voor de vestigingen. De 10 L bag-in-box vervangt {bib_10l_whites} eiwitten en wordt per dienst per kilo afgetapt; de 1 L Tetrapak bedient één vestiging; het zakje van 200 g poeder de vestiging waarvan de rotatie te laag is voor een geopende vloeibare verpakking. Deze pagina zet het formaat tegenover koudeketen en ruimte, en telt de batches per verpakking.',
    sections: [
      {
        id: 'uses',
        title: 'Waar aquafaba naartoe gaat in een centrale keuken',
        html: `<p>De batchcijfers zijn die van de VERY AQUAFABA recepten; de laatste kolom telt de batches die één 10 L bag-in-box oplevert.</p>
${grid(['Toepassing', 'Per batch', 'Batches per 10 L bag-in-box'], [
  ['<a href="{mayonnaise_href}">Mayonaise</a>', '{mayonnaise_dose} g aquafaba voor ongeveer {mayonnaise_yield} g mayonaise', '{mayonnaise_batches_10l}'],
  ['<a href="{chocolate_mousse_href}">Chocolademousse</a>', '{chocolate_mousse_dose} g voor ongeveer {chocolate_mousse_yield} porties', '{chocolate_mousse_batches_10l}'],
  ['<a href="{meringue_href}">Meringue</a>', '{meringue_dose} g voor ongeveer {meringue_yield} meringues', '{meringue_batches_10l}'],
  ['<a href="{baking_href}">Bakken</a>', '{egg_liquid} g per heel ei, {white_liquid} g per eiwit', '{eggs_10l} hele eieren'],
])}
<p>Een batch mayonaise gebruikt heel weinig aquafaba, {mayonnaise_dose} g, dus zelfs een 1 L Tetrapak geeft {mayonnaise_batches_1l} batches; de vraag voor het sauzenstation is of die verpakking binnen {opened_days} dagen na het openen op is, niet of ze groot genoeg is.</p>`,
      },
      {
        id: 'decide',
        title: 'Koudeketen en ruimte: de vragen die beslissen',
        html: `<p>De afgewerkte mayonaise en de mousse hebben de koelkast hoe dan ook nodig, dus de keuze gaat over de geopende verpakking, niet over de saus. Geopend vloeibaar product wordt bewaard op maximaal {opened_temp} °C en binnen {opened_days} dagen gebruikt; geopend poeder bederft niet en neemt nooit een koelplek in.</p>
${grid(['Uw bedrijf', 'Onze keuze', 'Waarom'], [
  ['Centrale keuken die aquafaba per dienst per kilo aftapt', 'Vloeibaar, 10 L bag-in-box of 1 T IBC', 'Continu gebruik, rechtstreeks in de hogesnelheidsmixer, geen aanmaakstap'],
  ['Traiteur of broodjeszaak die elke service verse mayonaise maakt', 'Vloeibaar, 1 L Tetrapak', 'Gegoten op mengtemperatuur, en de verpakking rouleert op tijd'],
  ['Restaurant met mayonaise of mousse op één gerecht van de kaart', 'Poeder, zakje van 200 g', 'Een geopende liter zou zijn {opened_days} dagen overleven'],
  ['Koelcel al vol met afgewerkte saus en porties', 'Poeder', 'Het zakje neemt nooit een koelplek in'],
  ['U wilt minder gedateerde artikelen op het sauzenstation', 'Poeder', 'Geen geopende, bederfelijke verpakking om te etiketteren, te registreren en te controleren'],
  ['Centrale keuken waar elke vestiging zelf opklopt', 'Poeder ter plaatse', 'Het zakje overleeft een rustige week op de vestiging'],
])}
<p>Centrale productie plus vestigingen met ongelijke rotatie? Vloeibaar in de centrale keuken, poeder op de vestigingen: de omrekening ligt vast, dus hetzelfde recept draait op allebei.</p>`,
      },
      {
        id: 'bib',
        title: 'De 10 L bag-in-box in dagelijks gebruik',
        html: `<p>De bag-in-box is het vloeibare formaat tussen de 1 L Tetrapak en de 1 T IBC: {bib_10l_whites} eiwitten, afgetapt zoals de dienst ze nodig heeft, zonder iets aan te maken. Ze past bij de keuken waarvan het aquafabagebruik continu is, omdat de geopende verpakking blijft rouleren. Geopend wordt ze bewaard zoals elke vloeibare verpakking, op maximaal {opened_temp} °C.</p>
<p>Gesloten is ze minimaal {unopened_months} maanden houdbaar op kamertemperatuur, dus de voorraad kan in de droge opslag wachten tot ze wordt geopend. Beschrijf de vestigingen, de toepassingen en het geschatte maandvolume via het aanvraagformulier om het technische blad te ontvangen; de grootste keukens staan op de <a href="{industry_href}">pagina voedingsindustrie</a>, waar de 1 T IBC wordt beschreven.</p>`,
      },
      {
        id: 'mayo',
        title: 'Mayonaise en koude sauzen op grote schaal',
        html: `<p>De VERY AQUAFABA mayonaise emulgeert {mayonnaise_oil} g olie op {mayonnaise_dose} g aquafaba, een olieverhouding van {mayonnaise_oil_ratio}, met {mayonnaise_mustard} g mosterd, {mayonnaise_salt} g zout en {mayonnaise_lemon} g citroensap of azijn. De aquafaba wordt gebruikt op {mayonnaise_chill} °C: te warm, en de emulsie is traag en onstabiel. Bij grote batches is het de druppelgrootte die haar stabiel houdt, en daarom stapt een centrale keuken over op een hogesnelheidsmixer.</p>
<p>Olie te snel toegevoegd, of met te weinig afschuiving, en de emulsie komt nooit op gang: een dun, gelijkmatig straaltje met de mixer op volle snelheid. Te dik om te verwerken, meng er een paar gram koud water door, geen extra olie. De afgewerkte saus is {mayonnaise_keep} dagen houdbaar in de koelkast, in een schone bak en meteen gekoeld. De <a href="{mayonnaise_calc_href}">mayonaiserekenhulp</a> schaalt de batch en het <a href="{mayonnaise_process_href}">procesblad</a> drukt de stappen en controles af.</p>`,
      },
    ],
    faq: [
      { q: 'Hoeveel eiwitten vervangt een 10 L bag-in-box?', a: '{bib_10l_whites} eiwitten, bij {white_liquid} g vloeibaar per eiwit. In mayonaise is dat {mayonnaise_batches_10l} batches, in chocolademousse {chocolate_mousse_batches_10l}, in meringue {meringue_batches_10l}.' },
      { q: 'Kunnen vestigingen met lage rotatie hetzelfde product gebruiken?', a: 'Ja, in poeder. Een zakje van 200 g vervangt {powder_200g_whites} eiwitten, bederft na het openen niet zolang het droog en gesloten blijft, en wordt aangemaakt met {white_powder} g plus {white_water} ml water per eiwit wanneer de vestiging het nodig heeft.' },
      { q: 'Hoe lang is een geopende bag-in-box houdbaar?', a: 'Zoals elke geopende vloeibare verpakking: op maximaal {opened_temp} °C, binnen {opened_days} dagen gebruikt. Ze past bij keukens met een continue afname, zodat de verpakking blijft rouleren.' },
      { q: 'Is er een stap om het vloeibare product aan te maken?', a: 'Nee. Het vloeibare product komt aan op een vaste concentratie, klaar om in de mixer te wegen. Alleen het poeder wordt met water aangemaakt.' },
      { q: 'Waar sturen we onze volumes naartoe?', a: 'Via het [aanvraagformulier]({contact_href}) onderaan deze pagina: bedrijf, land, toepassing en geschat maandvolume. Het technische blad komt met het antwoord mee.' },
    ],
    links: [
      { href: '{mayonnaise_href}', label: 'Mayonaise: vloeibaar of poeder?' },
      { href: '{chocolate_mousse_href}', label: 'Chocolademousse: vloeibaar of poeder?' },
      { href: '{meringue_href}', label: 'Meringue: vloeibaar of poeder?' },
      { href: '{mayonnaise_calc_href}', label: 'Rekenhulp voor mayonaise' },
      { href: '{industry_href}', label: 'Voedingsindustrie: de 1 T IBC' },
    ],
  },

  industry: {
    title: 'Aquafaba voor de voedingsindustrie: 1 T IBC en bag-in-box voor continue lijnen - VERY AQUAFABA',
    h1: 'Aquafaba voor de voedingsindustrie: de 1 T IBC en de bag-in-box voor continue lijnen',
    crumb: 'Voedingsindustrie',
    enquiryLabel: 'Voedingsindustrie',
    description: 'VERY AQUAFABA op industriële lijnen: de 1 T IBC die {ibc_1t_whites} eiwitten vervangt, de 10 L bag-in-box, de zak van 3 kg poeder voor droge premixen, herformuleren op gewicht en hoe u specificaties aanvraagt.',
    lead: 'Industriële lijnen draaien op vloeibaar product: de 1 T IBC vervangt {ibc_1t_whites} eiwitten en de 10 L bag-in-box {bib_10l_whites}, beide continu afgetapt zonder aanmaakstap. VERY AQUAFABA is gefilterd, verfijnd en gestandaardiseerd zodat elke batch zich hetzelfde gedraagt, op een concentratie van {viscosity} g/ml. Deze pagina toont de formaten voor continue lijnen, de herformuleringsregel op gewicht en hoe specificaties, minimale bestelling en levertijd worden aangevraagd.',
    sections: [
      {
        id: 'formats',
        title: 'Formaten voor continue lijnen',
        html: `<p>De lijn wordt op gewicht gedoseerd, dus elk formaat wordt beschreven met de eiwitten die het vervangt bij {white_liquid} g per eiwit.</p>
${grid(['Formaat', 'Eiwitten', 'Waar het draait'], [
  ['1 T IBC, vloeibaar', '{ibc_1t_whites}', 'Continue dosering op een lijn: meringueschelpen die elke werkdag worden gedroogd, moussebekers voor de retail, sauslijnen, gebottelde sourbases'],
  ['10 L bag-in-box, vloeibaar', '{bib_10l_whites}', 'Proefruns, kleinere lijnen en de centrale keukens van een groep'],
  ['Zak van 3 kg, poeder', '{powder_3kg_whites}', 'Droge premixen: een producent die droge saus- of bakbases mengt, doet het droog in de premix'],
])}
<p>Gesloten zijn beide formaten minimaal {unopened_months} maanden houdbaar op kamertemperatuur. Eenmaal geopend wordt het vloeibare product bewaard op maximaal {opened_temp} °C en binnen {opened_days} dagen gebruikt, wat op een continue lijn het normale ritme van een geopende verpakking is; het poeder bederft niet zolang het droog en gesloten blijft.</p>`,
      },
      {
        id: 'reformulate',
        title: 'Herformuleren op lijnschaal, op gewicht',
        html: `<p>De ei-verhoudingsregel van de site is het vertrekpunt van elke herformulering: {egg_liquid} g aquafaba per heel ei, {white_liquid} g per eiwit, en {yolk_liquid} g aquafaba plus {yolk_oil} g olie per dooier. Tel de eieren of eiwitten van de formule, vermenigvuldig met het equivalente gewicht en houd de aquafaba op {viscosity} g/ml zodat het schuim of de emulsie zich bij elke run hetzelfde gedraagt.</p>
<p>Een ei bestaat voor ongeveer {water_egg_pct} procent uit water en aquafaba voor {water_aquafaba_pct} procent, dus andere vloeistoffen gaan {reduce_liquids} procent omlaag als hele eieren worden vervangen, en dichte baksels worden gaar gebakken. Testbatches bevestigen tijd, kleur en textuur; de aanpassingen worden vastgelegd als standaardprocedure van de lijn. De <a href="{ratio_href}">pagina over de ei-verhouding</a> legt de regel uit met rekenvoorbeelden en de <a href="{baking_calc_href}">bakrekenhulp</a> rekent een hele formule om.</p>`,
      },
      {
        id: 'lines',
        title: 'Lijnen per toepassing',
        html: `<ul>
<li>Meringueschelpen die elke werkdag worden gedroogd: {meringue_dose} g per batch van ongeveer {meringue_yield}, {meringue_batches_10l} batches per bag-in-box, suiker in gelijk gewicht, gedroogd op {meringue_bake} °C. Het schuim is de eenvoudigste test van het assortiment, dus elke fout komt erin terecht: vet en te snel toegevoegde suiker. Zie de <a href="{meringue_href}">meringuegids</a>.</li>
<li>Sauslijnen: {mayonnaise_dose} g aquafaba emulgeert {mayonnaise_oil} g olie, per kilo rechtstreeks in de hogesnelheidsmixer afgetapt, waar de druppelgrootte grote batches stabiel houdt. Zie de <a href="{mayonnaise_href}">mayonaisegids</a>.</li>
<li>Voorgeportioneerde moussebekers voor de retail: {chocolate_mousse_dose} g per batch van ongeveer {chocolate_mousse_yield} porties, door chocolade gespateld op {chocolate_mousse_fold_temp} °C. Zie de <a href="{chocolate_mousse_href}">chocolademoussegids</a>.</li>
<li>Gebottelde sourbases en drankenlijnen: de basis wordt gebatcht zonder de aquafaba, die bij de shake wordt toegevoegd op {cocktails_dose} g per glas. Zie de <a href="{cocktails_href}">cocktailgids</a>.</li>
</ul>`,
      },
      {
        id: 'specs',
        title: 'Specificaties, minimale bestelling en levertijd',
        html: `<p>De specificaties, de minimale bestelling en de levertijd voor een industriële lijn worden op deze pagina niet gepubliceerd: ze hangen af van land, formaat en volume, en worden per project gegeven met het technische blad. Het aanvraagformulier onderaan deze pagina vraagt om bedrijf, land, toepassing en geschat maandvolume; beschrijf de lijn en de formaten die u overweegt, en het technische blad komt met het antwoord mee.</p>
<p>De <a href="{foodservice_href}">foodservicepagina</a> behandelt de centrale keukens van een groep, waar de 10 L bag-in-box dagelijks draait, en de <a href="{professional_href}">professionalsindex</a> toont het volledige assortiment.</p>`,
      },
    ],
    faq: [
      { q: 'Hoeveel eiwitten vervangt een 1 T IBC?', a: '{ibc_1t_whites} eiwitten, bij {white_liquid} g vloeibaar per eiwit. De 10 L bag-in-box vervangt er {bib_10l_whites}. Beide zijn vloeibaar, continu afgetapt zonder aanmaakstap.' },
      { q: 'Is het poeder een optie voor een industriële lijn?', a: 'Voor droge premixen wel: de zak van 3 kg vervangt {powder_3kg_whites} eiwitten en gaat zoals hij is in een droge saus- of bakbasis. Voor opgeklopte en geëmulgeerde lijnen is het vloeibare product het formaat, omdat het aankomt op een vaste concentratie zonder iets aan te maken.' },
      { q: 'Welke concentratie moet de lijn aanhouden?', a: '{viscosity} g/ml. VERY AQUAFABA is op die concentratie gefilterd, verfijnd en gestandaardiseerd, zodat het schuim of de emulsie zich bij elke run hetzelfde gedraagt.' },
      { q: 'Hoe rekenen we een formule om die in eieren is geteld?', a: '{egg_liquid} g aquafaba per heel ei, {white_liquid} g per eiwit, {yolk_liquid} g plus {yolk_oil} g olie per dooier, alles op gewicht. Andere vloeistoffen gaan {reduce_liquids} procent omlaag, en testbatches bevestigen tijd, kleur en textuur.' },
      { q: 'Waar staan de minimale bestelling en de levertijd?', a: 'Die worden per project gegeven met het technische blad, niet op deze pagina. Beschrijf de lijn, de formaten en het geschatte maandvolume via het [aanvraagformulier]({contact_href}) en het antwoord bevat ze.' },
    ],
    links: [
      { href: '{foodservice_href}', label: 'Foodservice en centrale keukens' },
      { href: '{meringue_href}', label: 'Meringue: vloeibaar of poeder?' },
      { href: '{mayonnaise_href}', label: 'Mayonaise: vloeibaar of poeder?' },
      { href: '{ratio_href}', label: 'Hoeveel aquafaba staat gelijk aan een ei' },
      { href: '{baking_calc_href}', label: 'Rekenhulp voor eivervanging' },
    ],
  },
};
