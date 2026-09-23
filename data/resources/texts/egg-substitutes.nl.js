// Plantaardige eivervangers, Nederlands (set-2 A1 tot A4). Zelfde structuur, tokens en tags
// als egg-substitutes.en.js (gecontroleerd door scripts/applications/check-guides.mjs). Geen gedachtestreepje.
const grid = (heads, rows) => `<table class="va-guide-grid">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;

export default {
  index: {
    title: 'Plantaardige eivervangers: een vegan ei vervanger per functie - VERY AQUAFABA',
    h1: 'Plantaardige eivervangers: begin bij de functie die u vervangt',
    crumb: 'Eivervangers',
    enquiryLabel: 'Eivervangers',
    description: 'Een vegan ei vervanger kiest u per functie: opkloppen, emulgeren of binden. VERY AQUAFABA dekt alle drie vanuit kikkererwten, met {egg_liquid} g per heel ei en {white_liquid} g per eiwit, plus de toepassingen waarin elke functie is vastgelegd.',
    lead: 'Een plantaardige eivervanger kiest u op het werk dat hij moet doen: een schuim dragen, een emulsie bijeenhouden of een beslag binden. VERY AQUAFABA is aquafaba van kikkererwten, gefilterd en gestandaardiseerd, en dekt alle drie: {egg_liquid} g vervangt een heel ei, {white_liquid} g een eiwit, en {yolk_liquid} g plus {yolk_oil} g olie nemen de plaats van een dooier in. Deze pagina ordent de keuze per functie, geeft de omrekening op gewicht en stuurt u naar de toepassing waarin die functie al is vastgelegd.',
    figures: true,
    sections: [
      {
        id: 'function',
        title: 'Per functie: opkloppen, emulgeren, binden',
        html: `<p>Het ei doet in een recept drie verschillende dingen, en een vervanger wordt beoordeeld op datgene wat u echt nodig hebt. Elke regel hieronder leidt naar de gids waarin die functie volledig is uitgewerkt, met methode en controles.</p>
${grid(['Functie', 'Wat het ei deed', 'Met VERY AQUAFABA', 'Vastgelegd in'], [
  ['Opkloppen', 'Eiwit, opgeklopt tot een schuim dat suiker en lucht draagt', '{white_liquid} g per eiwit, apart opgeklopt, koud', '<a href="{meringue_href}">Meringue</a>, <a href="{macarons_href}">macarons</a>, <a href="{chocolate_mousse_href}">chocolademousse</a>, <a href="{cocktails_href}">cocktails</a>'],
  ['Emulgeren', 'Ei dat olie en water in een saus bijeenhoudt', '{mayonnaise_dose} g emulgeert {mayonnaise_oil} g olie', '<a href="{mayonnaise_href}">Mayonaise</a>'],
  ['Binden en vocht', 'Heel ei dat een beslag bindt en water meebrengt', '{egg_liquid} g per heel ei, gewogen', '<a href="{baking_href}">Bakken</a>'],
  ['Rijkdom van een dooier', 'Dooier die vet en kleur brengt', '{yolk_liquid} g plus {yolk_oil} g olie', '<a href="{ratio_href}">Pagina over de ei-verhouding</a>'],
])}
<p>Eén ingrediënt dekt alle vier de regels, en dat onderscheidt aquafaba van een vervanger die u per functie koopt. Wat verandert, is de dosis en de omgang, niet het product.</p>`,
      },
      {
        id: 'convert',
        title: 'Een recept omrekenen, op gewicht',
        html: `<p>Aquafaba wordt gewogen, nooit in lepels afgemeten: zo blijft een professioneel recept van batch tot batch hetzelfde. De regel is kort.</p>
<ul>
<li>{egg_liquid} g aquafaba vervangt één heel ei.</li>
<li>{white_liquid} g vervangt één eiwit, net als {white_powder} g poeder aangemaakt met {white_water} ml water.</li>
<li>{yolk_liquid} g plus {yolk_oil} g olie nemen de plaats in van één dooier, want aquafaba brengt geen vet mee.</li>
</ul>
<p>Een ei bestaat voor ongeveer {water_egg_pct} procent uit water en aquafaba voor {water_aquafaba_pct} procent, dus als hele eieren wegvallen, gaan de andere vloeistoffen {reduce_liquids} procent omlaag en worden dichte baksels gaar gebakken. De <a href="{ratio_href}">pagina over de ei-verhouding</a> draagt de rekenvoorbeelden, en de <a href="{baking_calc_href}">vervangingsrekenhulp</a> rekent de eieren, eiwitten en dooiers van uw eigen recept om naar vloeibaar of poeder.</p>`,
      },
      {
        id: 'formats',
        title: 'Twee formaten van hetzelfde ingrediënt',
        html: `<p>Dezelfde aquafaba bestaat schenkklaar of gedroogd. Welke bij u past, wordt bepaald door hoe snel een geopende verpakking op is en waar ze staat, niet door het recept: de omrekening hierboven is bij beide gelijk.</p>
${grid(['Formaat', 'Per eiwit', 'Eenmaal geopend', 'Verder lezen'], [
  ['Vloeibaar, 1 L Tetrapak tot 1 T IBC', '{white_liquid} g, klaar om te wegen', '{opened_days} dagen op maximaal {opened_temp} °C', '<a href="{liquid_egg_white_href}">Plantaardig alternatief voor vloeibaar eiwit</a>'],
  ['Poeder, zakjes van 30 g tot 3 kg', '{white_powder} g plus {white_water} ml water', 'Bederft niet, droog en gesloten bewaard', '<a href="{egg_white_powder_href}">Plantaardig alternatief voor eiwitpoeder</a>'],
])}
<p>Vervangt u specifiek eiwit, dan geeft de <a href="{egg_white_href}">eiwitpagina</a> de equivalentie verpakking voor verpakking. Koopt u voor een keuken, een bar of een lijn, dan ordent de <a href="{professional_href}">professionalssectie</a> de formaten per activiteit.</p>`,
      },
      {
        id: 'labels',
        title: 'Wat het product is, en wat het etiket zegt',
        html: `<p>VERY AQUAFABA is het kookvocht van kikkererwten, gefilterd, verfijnd en gestandaardiseerd voor professioneel gebruik, neutraal van smaak en clean label, zoals de <a href="{products_href}">productpagina</a> het beschrijft. Diezelfde pagina noemt wat op de verpakking staat: plantaardig, glutenvrij, en een Nutri-Score A op het vloeibare product.</p>
<p>De verpakking vermeldt dat het de functionaliteit van eiwit vervangt, en daar gaan deze pagina's van uit: het schuim, de emulsie en de binding hierboven, elk aangetoond in een recept van de site. Alles wat aan het vet van een dooier hangt, krijgt de oliecorrectie. Voor het technische blad van een formaat gebruikt u het aanvraagformulier op deze pagina.</p>`,
      },
    ],
    faq: [
      { q: 'Waarvan is deze vegan eivervanger gemaakt?', a: 'Van kikkererwten en water. VERY AQUAFABA is het kookvocht van kikkererwten, gefilterd, verfijnd en gestandaardiseerd zodat elke batch zich hetzelfde gedraagt, zoals de [productpagina]({products_href}) beschrijft.' },
      { q: 'Hoeveel aquafaba staat gelijk aan een ei?', a: '{egg_liquid} g aquafaba per heel ei, {white_liquid} g per eiwit, en {yolk_liquid} g plus {yolk_oil} g olie per dooier. Weeg het af in plaats van het in lepels te meten.' },
      { q: 'Welke functie vervangt het het best?', a: 'Alle drie uit de tabel hierboven, elk in een vastgelegd recept: opkloppen in meringue, macarons, mousse en cocktails, emulgeren in mayonaise, binden en vocht bij het bakken.' },
      { q: 'Moet ik nog iets anders in het recept veranderen?', a: 'Alleen de vloeistoffen, en alleen als hele eieren wegvallen: breng de andere vloeistoffen {reduce_liquids} procent omlaag, want aquafaba bestaat voor ongeveer {water_aquafaba_pct} procent uit water tegen ongeveer {water_egg_pct} procent voor een ei.' },
      { q: 'Is het poeder hetzelfde als het vloeibare product?', a: 'Ja, gedroogd. {white_powder} g poeder plus {white_water} ml water geeft {white_total} g aquafaba, dezelfde massa als het vloeibare product, en vervangt één eiwit.' },
    ],
    links: [
      { href: '{egg_white_href}', label: 'Plantaardig alternatief voor eiwit' },
      { href: '{liquid_egg_white_href}', label: 'Plantaardig alternatief voor vloeibaar eiwit' },
      { href: '{egg_white_powder_href}', label: 'Plantaardig alternatief voor eiwitpoeder' },
      { href: '{ratio_href}', label: 'Hoeveel aquafaba staat gelijk aan een ei' },
      { href: '{professional_href}', label: 'Aquafaba voor professionals' },
    ],
  },

  'egg-white': {
    title: 'Plantaardig alternatief voor eiwit: {white_liquid} g per eiwit - VERY AQUAFABA',
    h1: 'Een plantaardig alternatief voor eiwit: {white_liquid} g aquafaba per eiwit',
    crumb: 'Eiwit',
    enquiryLabel: 'Eiwitalternatief',
    description: 'Vegan eiwitvervanger, geteld per eiwit: {white_liquid} g VERY AQUAFABA vloeibaar of {white_powder} g poeder vervangt één eiwit, met de batches per verpakking en de recepten waarin het is vastgelegd.',
    lead: 'Eén eiwit wordt vervangen door {white_liquid} g VERY AQUAFABA vloeibaar, of door {white_powder} g poeder aangemaakt met {white_water} ml water. Die ene equivalentie maakt een recept dat in eiwitten telt makkelijk om te rekenen: een 1 L Tetrapak neemt de plaats in van {liquid_1l_whites} eiwitten en een zakje van 200 g die van {powder_200g_whites}. Deze pagina geeft de equivalentie verpakking voor verpakking, wat het schuim doet in de recepten van de site, en wat de garde van u vraagt.',
    figures: true,
    sections: [
      {
        id: 'equivalence',
        title: 'De equivalentie, verpakking voor verpakking',
        html: `<p>Elke verpakking wordt beschreven met het aantal eiwitten waarvoor ze in de plaats komt, want zo telt een recept ze.</p>
${grid(['Verpakking', 'Eiwitten', 'Wat dat in de praktijk is'], [
  ['1 L Tetrapak, vloeibaar', '{liquid_1l_whites}', '{meringue_batches_1l} batches meringue of {macarons_batches_1l} batches macarons'],
  ['10 L bag-in-box, vloeibaar', '{bib_10l_whites}', 'Een productiekeuken die per dienst per kilo aftapt'],
  ['1 T IBC, vloeibaar', '{ibc_1t_whites}', 'Een lijn die continu doseert'],
  ['Zakje van 30 g, poeder', '{powder_30g_whites}', 'Een eerste proefbatch'],
  ['Zakje van 200 g, poeder', '{powder_200g_whites}', '{meringue_batches_200g} batches meringue'],
  ['Zak van 3 kg, poeder', '{powder_3kg_whites}', 'Een professionele keuken of een droge premix'],
])}
<p>De <a href="{ratio_href}">pagina over de ei-verhouding</a> draagt de hele omrekening, hele eieren en dooiers inbegrepen; deze pagina blijft bij het eiwit.</p>`,
      },
      {
        id: 'does',
        title: 'Wat het doet waar eiwit werd gebruikt',
        html: `<p>Eiwit wordt vooral voor één ding gebruikt: een schuim dat lucht vasthoudt en suiker draagt. Aquafaba maakt dat schuim zonder ei in de keuken, en de recepten van de site laten het bij vier verschillende belastingen zien.</p>
<ul>
<li><a href="{meringue_href}">Meringue</a>: {meringue_dose} g, oftewel {meringue_eggs} eiwitten, opgeklopt met {meringue_sugar} g suiker en gedroogd op {meringue_bake} °C, voor ongeveer {meringue_yield} meringues.</li>
<li><a href="{macarons_href}">Macarons</a>: {macarons_dose} g, {macarons_eggs} eiwitten, voor ongeveer {macarons_yield} schelpen.</li>
<li><a href="{chocolate_mousse_href}">Chocolademousse</a>: {chocolate_mousse_dose} g, {chocolate_mousse_eggs} eiwitten, door chocolade gespateld op {chocolate_mousse_fold_temp} °C.</li>
<li><a href="{cocktails_href}">Sours achter de bar</a>: {cocktails_dose} g per glas, {cocktails_dry_shake} seconden dry geshaket.</li>
</ul>
<p>Elke gids draagt zijn eigen <a href="{meringue_calc_href}">rekenhulp</a> en procesblad, zodat een batch zonder rekenwerk omgezet wordt.</p>`,
      },
      {
        id: 'handling',
        title: 'Wat de garde vraagt',
        html: `<p>Het schuim is een zuiver eiwitschuim, zonder vet in het recept, en het gedraagt zich daarnaar. Drie punten dekken bijna elke fout af, en het zijn dezelfde die de gidsen afdrukken.</p>
<ul>
<li>Koud. Aquafaba gaat op {meringue_chill} °C in de kom; aangemaakt poeder wordt tot dezelfde temperatuur gekoeld. Warme aquafaba klimt traag en geeft een zwakker schuim.</li>
<li>Schoon. Een vetfilm op de kom of de garde houdt het volume klein, dus beide worden schoongeveegd voordat de aquafaba erin gaat.</li>
<li>Suiker als laatste. Die gaat erin zodra het schuim zachte pieken houdt, een lepel per keer, anders gaat hij zweten tijdens de bewaring.</li>
</ul>
<p>De kloptijd telt in minuten, niet in seconden: {meringue_whip} minuten op hoge snelheid voor een batch meringue. Waar het recept een stabilisator vraagt, gaat wijnsteenzuur of citroenzuur erin bij zachte pieken, niet aan het begin.</p>`,
      },
      {
        id: 'choose',
        title: 'Vloeibaar of poeder voor hetzelfde eiwit',
        html: `<p>De equivalentie verandert niet met het formaat, dus de keuze gaat over de verpakking, niet over het recept. Geopend vloeibaar product wordt bewaard op maximaal {opened_temp} °C en binnen {opened_days} dagen gebruikt; geopend poeder bederft niet zolang het droog en gesloten blijft. Gesloten zijn beide minimaal {unopened_months} maanden houdbaar op kamertemperatuur.</p>
<p>Een keuken die de meeste dagen opklopt, krijgt een geopende liter op tijd leeg en neemt het <a href="{liquid_egg_white_href}">vloeibare product</a>. Wie af en toe opklopt, of geen koelruimte vrij heeft, neemt het <a href="{egg_white_powder_href}">poeder</a> en maakt aan wat de batch nodig heeft. De <a href="{professional_href}">professionalssectie</a> werkt dezelfde vraag per activiteit uit.</p>`,
      },
    ],
    faq: [
      { q: 'Hoeveel gram aquafaba vervangt één eiwit?', a: '{white_liquid} g vloeibaar, of {white_powder} g poeder aangemaakt met {white_water} ml water, wat {white_total} g aquafaba geeft.' },
      { q: 'Hoeveel eiwitten zitten er in een verpakking van 1 L?', a: '{liquid_1l_whites}. Een 10 L bag-in-box vervangt er {bib_10l_whites} en een 1 T IBC {ibc_1t_whites}; in poeder vervangt een zakje van 200 g er {powder_200g_whites}.' },
      { q: 'Klopt het op zoals eiwit?', a: 'Het klopt op tot een schuim dat suiker en lucht draagt, en daarop zijn de recepten voor meringue, macarons, mousse en sour van deze site gebouwd. Het vraagt dezelfde koude kom en dezelfde vetvrije garde.' },
      { q: 'Kan ik het gebruiken in een recept met hele eieren?', a: 'Ja, met het cijfer voor hele eieren: {egg_liquid} g per ei, plus de vloeistofcorrectie van {reduce_liquids} procent. De [bakgids]({baking_href}) legt het uit.' },
      { q: 'Is er een stabilisator nodig?', a: 'Die is optioneel. Waar een recept er een vraagt, gaat wijnsteenzuur of citroenzuur erin terwijl de mixer draait, zodra het schuim zachte pieken houdt.' },
    ],
    links: [
      { href: '{meringue_href}', label: 'Meringue: vloeibaar of poeder?' },
      { href: '{macarons_href}', label: 'Macarons: vloeibaar of poeder?' },
      { href: '{ratio_href}', label: 'Hoeveel aquafaba staat gelijk aan een ei' },
      { href: '{liquid_egg_white_href}', label: 'Plantaardig alternatief voor vloeibaar eiwit' },
      { href: '{egg_white_powder_href}', label: 'Plantaardig alternatief voor eiwitpoeder' },
    ],
  },

  'liquid-egg-white': {
    title: 'Plantaardig alternatief voor vloeibaar eiwit: formaten en houdbaarheid - VERY AQUAFABA',
    h1: 'Een plantaardig alternatief voor vloeibaar eiwit, klaar om te wegen',
    crumb: 'Vloeibaar eiwit',
    enquiryLabel: 'Alternatief voor vloeibaar eiwit',
    description: 'VERY AQUAFABA vloeibaar vervangt vloeibaar eiwit: {white_liquid} g per eiwit, verpakkingen van 1 L, 10 L en 1 T, minimaal {unopened_months} maanden gesloten op kamertemperatuur en {opened_days} dagen eenmaal geopend.',
    lead: 'Vloeibaar eiwit koopt u om het breken over te slaan en om op gewicht te doseren. VERY AQUAFABA vloeibaar doet hetzelfde werk vanuit kikkererwten: {white_liquid} g vervangt één eiwit, het komt aan op een vaste concentratie van {viscosity} g/ml en wordt rechtstreeks op de weegschaal gegoten. Het bestaat in 1 L, 10 L en 1 T, is gesloten minimaal {unopened_months} maanden houdbaar op kamertemperatuur, en {opened_days} dagen op maximaal {opened_temp} °C zodra het geopend is.',
    figures: true,
    sections: [
      {
        id: 'formats',
        title: 'De vloeibare formaten',
        html: `<p>Drie vloeibare verpakkingen, beschreven met de eiwitten die ze vervangen en met de keuken die ze leeg krijgt.</p>
${grid(['Verpakking', 'Eiwitten', 'Wie ze leeg krijgt'], [
  ['1 L Tetrapak', '{liquid_1l_whites}', 'Een banketafdeling, een bar met sours op de kaart, één vestiging'],
  ['10 L bag-in-box', '{bib_10l_whites}', 'Een centrale keuken die per dienst per kilo aftapt'],
  ['1 T IBC', '{ibc_1t_whites}', 'Een lijn die continu doseert'],
])}
<p>Anders dan een pak vloeibaar eiwit staat de verpakking tot het openen in de droge opslag: gesloten is ze minimaal {unopened_months} maanden houdbaar op kamertemperatuur, dus de koudeketen begint op de dag dat u haar opent.</p>`,
      },
      {
        id: 'storage',
        title: 'Voor opening, na opening, ingevroren',
        html: `<p>De houdbaarheid beslist in de meeste keukens, hier staat ze volledig.</p>
<ul>
<li>Voor opening: minimaal {unopened_months} maanden op kamertemperatuur, voor beide formaten van het assortiment.</li>
<li>Na opening: gekoeld op maximaal {opened_temp} °C, binnen {opened_days} dagen gebruikt.</li>
<li>Ingevroren: porties van {portion} g op {freeze_temp} °C tot {freeze_months} maanden, een nacht in de koelkast ontdooid en glad geroerd. Nooit opnieuw ingevroren.</li>
</ul>
<p>De <a href="{storage_href}">gids over bewaren en invriezen</a> beschrijft de omgang in detail. Zou een geopende verpakking in uw keuken haar {opened_days} dagen overleven, dan beantwoordt het <a href="{egg_white_powder_href}">poeder</a> hetzelfde recept zonder datum.</p>`,
      },
      {
        id: 'use',
        title: 'Gebruiken waar vloeibaar eiwit werd gebruikt',
        html: `<p>Het wordt gegoten en gewogen, zonder iets aan te maken. Uit de koelkast heeft het al de temperatuur die het schuim vraagt, {meringue_chill} °C, en daarom houdt een keuken die de meeste dagen opklopt het vloeibare product: het gaat van de koeling in de kom.</p>
<ul>
<li>Schuimen: {meringue_dose} g voor een batch meringue van ongeveer {meringue_yield}, {macarons_dose} g voor ongeveer {macarons_yield} macaronschelpen.</li>
<li>Emulsies: {mayonnaise_dose} g neemt {mayonnaise_oil} g olie op, gemixt op {mayonnaise_chill} °C.</li>
<li>Achter de bar: {cocktails_dose} g per sour, gewogen of gejiggerd in plaats van vrij ingeschonken.</li>
<li>Op een lijn: gehouden op {viscosity} g/ml zodat het schuim zich bij elke run hetzelfde gedraagt.</li>
</ul>
<p>De <a href="{index_href}">toepassingsgidsen</a> dragen de methode voor elk geval, met een rekenhulp die de batch schaalt.</p>`,
      },
      {
        id: 'who',
        title: 'Welk formaat voor welke keuken',
        html: `<p>De 1 L Tetrapak past bij één vestiging die een verpakking opent en ze binnen de week leeg krijgt: een banketafdeling, een bar, een traiteurtoonbank. De 10 L bag-in-box past bij een centrale keuken met een continue afname, en de 1 T IBC bij een productielijn, waar de klok van de geopende verpakking nooit telt omdat ze blijft rouleren.</p>
<p>Elk daarvan heeft zijn eigen pagina: <a href="{pastry_href}">banketbakkerij en bakkerij</a>, <a href="{bars_href}">bars en cocktails</a>, <a href="{foodservice_href}">foodservice en centrale keukens</a> en <a href="{industry_href}">voedingsindustrie</a>. Voor volumes en het technische blad gebruikt u het aanvraagformulier op deze pagina.</p>`,
      },
    ],
    faq: [
      { q: 'Hoeveel vloeibaar product vervangt één eiwit?', a: '{white_liquid} g, gewogen. Een 1 L Tetrapak neemt daarmee de plaats in van {liquid_1l_whites} eiwitten, een 10 L bag-in-box van {bib_10l_whites} en een 1 T IBC van {ibc_1t_whites}.' },
      { q: 'Moet het voor opening gekoeld worden?', a: 'Nee. Gesloten is het minimaal {unopened_months} maanden houdbaar op kamertemperatuur. Eenmaal geopend gaat het naar maximaal {opened_temp} °C en wordt het binnen {opened_days} dagen gebruikt.' },
      { q: 'Kan het ingevroren worden?', a: 'Ja, in porties van {portion} g op {freeze_temp} °C tot {freeze_months} maanden. Ontdooi een nacht in de koelkast en roer glad voor het opkloppen; opnieuw invriezen gebeurt nooit.' },
      { q: 'Waar kan ik vloeibare aquafaba kopen?', a: 'De formaten en de huidige kanalen staan op de [productpagina]({products_href}). Beschrijf professionele volumes via het aanvraagformulier, dan komt het technische blad met het antwoord mee.' },
      { q: 'Ligt de concentratie vast?', a: 'Ja, {viscosity} g/ml. Het is gefilterd, verfijnd en gestandaardiseerd, en dat houdt een schuim of een emulsie van run tot run gelijk.' },
    ],
    links: [
      { href: '{egg_white_href}', label: 'Plantaardig alternatief voor eiwit' },
      { href: '{egg_white_powder_href}', label: 'Plantaardig alternatief voor eiwitpoeder' },
      { href: '{storage_href}', label: 'Aquafaba bewaren en invriezen' },
      { href: '{pastry_href}', label: 'Banketbakkerij en bakkerij' },
      { href: '{bars_href}', label: 'Bars en cocktails' },
    ],
  },

  'egg-white-powder': {
    title: 'Plantaardig alternatief voor eiwitpoeder, voor de keuken - VERY AQUAFABA',
    h1: 'Een plantaardig alternatief voor eiwitpoeder, aangemaakt met water',
    crumb: 'Eiwitpoeder',
    enquiryLabel: 'Alternatief voor eiwitpoeder',
    description: 'VERY AQUAFABA poeder vervangt eiwitpoeder in de keuken: {white_powder} g plus {white_water} ml water per eiwit, zakjes van 30 g, 200 g en 3 kg, en geen datum zodra het zakje open is.',
    lead: 'Eiwitpoeder houdt u om wat het met een voorraadkast doet: het wacht. VERY AQUAFABA poeder doet hetzelfde vanuit kikkererwten, voor koken en bakken in plaats van als eiwitsupplement: {white_powder} g aangemaakt met {white_water} ml water vervangt één eiwit, een zakje van 200 g neemt de plaats in van {powder_200g_whites}, en een geopend zakje bederft niet zolang het droog en gesloten blijft.',
    figures: true,
    sections: [
      {
        id: 'packs',
        title: 'De zakjes en wat ze vervangen',
        html: `<p>Drie zakjes, beschreven met de eiwitten waarvoor ze in de plaats komen.</p>
${grid(['Zakje', 'Eiwitten', 'Aangemaakt is dat'], [
  ['30 g', '{powder_30g_whites}', 'Een proefbatch, of een bar die een sour uitprobeert'],
  ['200 g', '{powder_200g_whites}', '{meringue_batches_200g} batches meringue of {cocktails_batches_200g} sours'],
  ['3 kg', '{powder_3kg_whites}', 'Een professionele keuken, of een droge premix op een lijn'],
])}
<p>Gesloten is een zakje minimaal {unopened_months} maanden houdbaar op kamertemperatuur. Geopend bederft het niet: het blijft droog en gesloten op een plank en wacht op de volgende batch, en daarom houden keukens en bars met een ongelijke rotatie het liever dan een vloeibare verpakking met {opened_days} dagen.</p>`,
      },
      {
        id: 'makeup',
        title: 'Aanmaken: de regel per eiwit',
        html: `<p>De verhouding telt per eiwit, niet per zakje: {white_powder} g poeder en {white_water} ml water geven {white_total} g aquafaba, die precies zo worden gebruikt als dezelfde massa vloeibaar product.</p>
<ul>
<li>Een batch meringue, {meringue_eggs} eiwitten: {meringue_powder} g poeder en {meringue_water} ml water.</li>
<li>Een batch mayonaise: {mayonnaise_powder} g en {mayonnaise_water} ml.</li>
<li>Eén sour: {cocktails_powder} g en {cocktails_water} ml.</li>
</ul>
<p>De <a href="{reconstitution_href}">aanmaakpagina</a> draagt de tabel van 1 tot 20 eiwitten. Aangemaakt wordt het gekoeld tot de temperatuur die het recept vraagt, {meringue_chill} °C voor een meringue, want warme aquafaba klimt trager en geeft een zwakker schuim.</p>`,
      },
      {
        id: 'when',
        title: 'Wanneer het poeder de juiste keuze is',
        html: `<p>Het is hetzelfde ingrediënt als het vloeibare product, dus de redenen om het te verkiezen gaan over de verpakking en de ruimte, niet over het recept.</p>
<ul>
<li>Ongelijke rotatie: het geopende zakje wacht zonder datum, terwijl een geopende vloeibare verpakking {opened_days} dagen heeft.</li>
<li>Geen koelruimte: het zakje staat in de droge opslag, en de koelschappen blijven vrij voor wat u net gemaakt hebt.</li>
<li>Onderweg: evenementen en catering op locatie nemen het droog mee, zonder koudeketen.</li>
<li>Droge premixen: een producent die een droge saus- of bakbasis mengt, doet het poeder erin zoals het is.</li>
</ul>
<p>Voor opgeklopte recepten is het geen sluiproute voor droge mengsels: de aquafaba wordt eerst apart opgeklopt, dus ze wordt aangemaakt met water voordat ze het amandelmeel of de suiker ontmoet.</p>`,
      },
      {
        id: 'kitchen',
        title: 'Een culinair ingrediënt, geen eiwitsupplement',
        html: `<p>Dit poeder is gemaakt voor schuimen, emulsies en gebak: de meringue die haar suiker houdt, de mayonaise die haar olie opneemt, het biscuit dat bindt. Het is gedroogde aquafaba van kikkererwten en wordt gedoseerd op het eiwit dat het recept vervangt, niet met een maatschep.</p>
<p>De <a href="{products_href}">productpagina</a> somt de zakjes op en wat de verpakking vermeldt; de <a href="{index_href}">toepassingsgidsen</a> geven de dosis per recept in beide formaten, en de <a href="{professional_href}">professionalssectie</a> ordent de formaten per activiteit voor een keuken, een bar of een lijn.</p>`,
      },
    ],
    faq: [
      { q: 'Wat is aquafabapoeder?', a: 'VERY AQUAFABA in gedroogde vorm. {white_powder} g poeder plus {white_water} ml water geeft {white_total} g aquafaba, gelijk aan dezelfde massa van het vloeibare product, en vervangt één eiwit.' },
      { q: 'Hoeveel eiwitten zitten er in een zakje van 200 g?', a: '{powder_200g_whites}. Het zakje van 30 g vervangt er {powder_30g_whites} en de zak van 3 kg {powder_3kg_whites}.' },
      { q: 'Hoe lang gaat een geopend zakje mee?', a: 'Het bederft niet zolang het droog en gesloten blijft, en past daarom bij een keuken of bar met een ongelijke rotatie. Gesloten is het minimaal {unopened_months} maanden houdbaar op kamertemperatuur.' },
      { q: 'Kan het poeder rechtstreeks in een droog mengsel?', a: 'In een droge premix wel. In een opgeklopt recept niet: de aquafaba wordt eerst apart opgeklopt, maak het dus aan met water en koel het voordat het de andere droge ingrediënten ontmoet.' },
      { q: 'Is het een eiwitsupplement?', a: 'Nee. Het is een culinair ingrediënt voor schuimen, emulsies en gebak, gedoseerd op het eiwit dat het recept vervangt, zoals de [toepassingsgidsen]({index_href}) laten zien.' },
    ],
    links: [
      { href: '{reconstitution_href}', label: 'Poeder aanmaken: de regel per eiwit' },
      { href: '{egg_white_href}', label: 'Plantaardig alternatief voor eiwit' },
      { href: '{liquid_egg_white_href}', label: 'Plantaardig alternatief voor vloeibaar eiwit' },
      { href: '{meringue_href}', label: 'Meringue: vloeibaar of poeder?' },
      { href: '{bars_href}', label: 'Bars en cocktails' },
    ],
  },
};
