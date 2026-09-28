// Plantaardige eivervangers, Nederlands (set-2 A1 tot A4). Zelfde structuur, tokens en tags
// als egg-substitutes.en.js (gecontroleerd door scripts/applications/check-guides.mjs). Geen gedachtestreepje.
const grid = (heads, rows, cls = '') => `<table class="va-guide-grid${cls ? ` ${cls}` : ''}">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;

export default {
  index: {
    title: 'Aquafaba, de plantaardige eivervanger - VERY AQUAFABA',
    h1: 'Plantaardige eivervanger: zo vervangt u eieren door aquafaba in uw recepten',
    crumb: 'Eivervangers',
    enquiryLabel: 'Eivervangers',
    description: 'Eén plantaardige eivervanger die schuimt, emulgeert en bindt: {egg_liquid} g VERY AQUAFABA vervangt een heel ei, {white_liquid} g een eiwit. Wanneer u eivrij gaat.',
    lead: 'Eén plantaardig ingrediënt kan hele eieren, eiwitten en zelfs dooiers vervangen. VERY AQUAFABA is aquafaba van kikkererwten: {egg_liquid} g vervangt een heel ei en {white_liquid} g een eiwit. Hieronder leest u wanneer een eivrij recept zinvol is, wat het ei in uw recept doet, hoeveel aquafaba u in de plaats gebruikt, en de ene aanpassing die u doet.',
    figures: false,
    sections: [
      {
        id: 'when',
        title: 'Wanneer is een eivrij recept zinvol?',
        html: `<p>Een vegan kaart is de voor de hand liggende reden, maar lang niet de enige. Keukens gaan eivrij om vijf redenen:</p>
<ul>
<li><strong>Vegan en plantaardige kaarten.</strong> Het gerecht moet per definitie eivrij zijn.</li>
<li><strong>Allergenenbeheer.</strong> VERY AQUAFABA bevat geen eieren, zuivel, gluten of soja, dus het recept laat een van de belangrijkste allergenen vallen.</li>
<li><strong>Bereidingen die nooit worden verhit.</strong> Cocktailschuimen, mousse en mayonaise worden rauw geserveerd. Aquafaba vervangt rauw eiwit zonder het voedselveiligheidsrisico dat erbij hoort.</li>
<li><strong>Voorraad en houdbaarheid.</strong> Eieren hebben de koelkast en een korte datum nodig. Gesloten aquafaba is minimaal {unopened_months} maanden houdbaar op kamertemperatuur, en het poeder bederft niet na het openen.</li>
<li><strong>Prijsstabiliteit.</strong> Eierprijzen bewegen met het seizoen en de markt. Aquafaba niet.</li>
</ul>`,
      },
      {
        id: 'function',
        title: 'Wat doet het ei in uw recept?',
        html: `<p>Voordat u iets vervangt, helpt het om te weten wat het ei deed. In de meeste recepten doet het een van drie dingen: het draagt een schuim, het houdt een emulsie bijeen, of het bindt een beslag en brengt vocht. Zoek uw recept in de tabel hieronder en u hebt uw dosis.</p>
${grid(['Wat u maakt', 'Wat het ei doet', 'Gebruik in de plaats', 'Let op', 'Volledige gids'], [
  ['Meringues, macarons, mousse, cocktailschuimen', 'Schuimen: opgeklopt eiwit dat lucht en suiker vasthoudt', '{white_liquid} g per eiwit, koud en apart opgeklopt', 'Vet in de kom en warme aquafaba houden allebei het schuim klein', '<a href="{meringue_href}">Meringue</a>, <a href="{macarons_href}">macarons</a>, <a href="{chocolate_mousse_href}">chocolademousse</a>, <a href="{cocktails_href}">cocktails</a>'],
  ['Mayonaise, sauzen, dressings', 'Emulgeren: olie en water bijeenhouden', '{mayonnaise_dose} g op {mayonnaise_oil} g olie', 'Olie te snel toegevoegd, of te weinig afschuifkracht, en de emulsie komt nooit op gang', '<a href="{mayonnaise_href}">Mayonaise</a>'],
  ['Cakes, koekjes, muffins, brioche', 'Binden en vocht: het beslag bijeenhouden', '{egg_liquid} g per heel ei', 'Aquafaba brengt meer water mee dan ei: verminder de andere vloeistoffen en bak gaar', '<a href="{baking_href}">Bakken</a>'],
  ['Alles wat de rijkdom van een dooier nodig heeft', 'Vet en kleur', '{yolk_liquid} g plus {yolk_oil} g olie', 'Aquafaba brengt geen vet mee, dus de olie is niet optioneel', '<a href="{ratio_href}">Ei-verhouding</a>'],
], 'va-guide-grid--wrap')}
<p>Eén ingrediënt dekt alle vier de taken. Wat van recept tot recept verandert, is de dosis en de manier waarop u ermee omgaat.</p>`,
      },
      {
        id: 'convert',
        title: 'Hoeveel aquafaba vervangt een ei',
        html: `<p>Aquafaba wordt altijd gewogen, en drie cijfers dekken elk recept:</p>
<ul>
<li>{egg_liquid} g aquafaba vervangt één heel ei.</li>
<li>{white_liquid} g vervangt één eiwit. In poeder is dat {white_powder} g aangemaakt met {white_water} ml water.</li>
<li>{yolk_liquid} g plus {yolk_oil} g olie staan voor één dooier, want aquafaba brengt geen vet mee.</li>
</ul>
<p>Vervangt u hele eieren? Aquafaba brengt meer water mee dan een ei, ongeveer {water_aquafaba_pct} procent tegen {water_egg_pct} procent. Verminder de andere vloeistoffen met {reduce_liquids} procent en bak dichte cakes gaar. Alleen de eiwitten vervangen, zoals in meringues of macarons, vraagt geen aanpassing.</p>
<p>De <a href="{baking_calc_href}">vervangingsrekenhulp</a> rekent de eieren, eiwitten en dooiers van uw eigen recept in één keer om.</p>`,
      },
      {
        id: 'formats',
        title: 'Vloeibaar of poeder?',
        html: `<p>Vloeibaar en poeder zijn dezelfde aquafaba, dus de doses hierboven gelden voor beide. De keuze komt neer op hoe snel u een geopende verpakking gebruikt en waar u ze kunt bewaren.</p>
${grid(['Formaat', 'Per eiwit', 'Eenmaal geopend', 'Verder lezen'], [
  ['Vloeibaar, klaar om te schenken', '{white_liquid} g, rechtstreeks uit de verpakking gewogen', 'In de koelkast op maximaal {opened_temp} °C, binnen {opened_days} dagen gebruikt', '<a href="{liquid_egg_white_href}">Alternatief voor vloeibaar eiwit</a>'],
  ['Poeder, aangemaakt met water', '{white_powder} g plus {white_water} ml water', 'Bederft niet. Droog en gesloten bewaren', '<a href="{egg_white_powder_href}">Alternatief voor eiwitpoeder</a>'],
])}
<p>Kookt u elke dag eivrij, dan is vloeibaar de eenvoudige keuze. Doet u het af en toe, of hebt u weinig koelruimte, dan wacht het poeder zo lang als u wilt. En koopt u voor een bakkerij, een bar of een productielijn, dan bekijkt de <a href="{professional_href}">professionalssectie</a> de formaten per activiteit.</p>`,
      },
      {
        id: 'vary',
        title: 'Waarom verschillen de resultaten van recept tot recept?',
        html: `<p>Meestal omdat het ei in elk recept ander werk deed. Vijf dingen verklaren de meeste verrassingen:</p>
<ul>
<li><strong>De taak.</strong> Een schuim, een bindmiddel en een emulsie zijn drie verschillende resultaten. De dosis die een meringue opklopt, is niet de dosis die een cake bindt.</li>
<li><strong>Welk deel van het ei.</strong> Een eiwit vervangen is een rechtstreekse vervanging. Een heel ei vervangen brengt extra water mee. Een dooier vervangen vraagt de olie.</li>
<li><strong>De techniek.</strong> Opkloppen brengt de lucht erin, spatelen houdt ze vast, een dun straaltje olie bouwt de emulsie op. De probleemtabel van elke gids behandelt de fouten van zijn eigen recept.</li>
<li><strong>De rest van het recept.</strong> Het moment van de suiker, de chocoladetemperatuur, de luchtvochtigheid in de ruimte en de ovenwarmte veranderen allemaal het resultaat, net als met eieren.</li>
<li><strong>Het formaat, alleen bij de bereiding.</strong> Vloeibaar wordt gewogen zoals het komt. Poeder wordt eerst aangemaakt met water. Aangemaakt is het dezelfde aquafaba, in dezelfde dosis.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Is aquafaba vegan?', a: 'Ja. VERY AQUAFABA wordt gemaakt van kikkererwten en water, zonder eieren, zuivel, gluten of soja, en past dus in vegan en allergeenvrije recepten.' },
      { q: 'Kan ik één eiwit vervangen door aquafaba?', a: 'Ja. {white_liquid} g vloeibare aquafaba vervangt één eiwit, of {white_powder} g poeder aangemaakt met {white_water} ml water. Weeg het af in plaats van het in lepels te meten.' },
      { q: 'Kan ik aquafaba gebruiken in plaats van een heel ei?', a: 'Ja. {egg_liquid} g vervangt één heel ei. Zo toegevoegd brengt het de binding en het vocht van het ei in cakes, koekjes en degen. Voor de rijkdom van een dooier voegt u {yolk_liquid} g aquafaba plus {yolk_oil} g olie toe.' },
      { q: 'Moet ik nog iets anders in het recept veranderen?', a: 'Alleen als u hele eieren vervangt: verminder de andere vloeistoffen met {reduce_liquids} procent, want aquafaba bestaat voor ongeveer {water_aquafaba_pct} procent uit water tegen {water_egg_pct} procent voor een ei. Alleen eiwitten vervangen vraagt geen verandering.' },
      { q: 'Is het poeder hetzelfde als het vloeibare product?', a: 'Ja, gedroogd. {white_powder} g poeder plus {white_water} ml water geeft {white_total} g aquafaba, hetzelfde als het vloeibare product, en vervangt één eiwit.' },
      { q: 'Waarvan is VERY AQUAFABA gemaakt?', a: 'Van het kookvocht van kikkererwten, gefilterd, verfijnd en gestandaardiseerd zodat elke batch zich hetzelfde gedraagt. Het is neutraal van smaak en clean label, zoals de [productpagina]({products_href}) beschrijft.' },
    ],
    links: [
      { href: '{egg_white_href}', label: 'Zo vervangt u eiwitten door aquafaba' },
      { href: '{liquid_egg_white_href}', label: 'Overstappen van vloeibaar eiwit naar aquafaba' },
      { href: '{egg_white_powder_href}', label: 'Aquafabapoeder: het alternatief voor eiwitpoeder' },
      { href: '{ratio_href}', label: 'Hoeveel aquafaba staat gelijk aan een ei' },
      { href: '{professional_href}', label: 'Aquafaba voor professionals' },
    ],
  },

  'egg-white': {
    title: 'Zo vervangt u eiwitten door aquafaba - VERY AQUAFABA',
    h1: 'Zo vervangt u eiwitten door aquafaba',
    crumb: 'Eiwit',
    enquiryLabel: 'Eiwitalternatief',
    description: 'Vervang eiwitten door aquafaba: {white_liquid} g vloeibaar of {white_powder} g poeder per eiwit. De omrekening van één eiwit tot een heel recept, en wat de garde nodig heeft.',
    lead: 'Eén eiwit is {white_liquid} g VERY AQUAFABA vloeibaar, of {white_powder} g poeder aangemaakt met {white_water} ml water. Dat is de hele omrekening, en ze geldt van één eiwit tot een volledig recept: een 1 L Tetrapak staat voor {liquid_1l_whites} eiwitten, een zakje van 200 g voor {powder_200g_whites}. Hieronder vindt u de omrekening voor de hoeveelheden die recepten echt gebruiken, wat de garde van u vraagt, en de recepten op deze site die erop draaien.',
    figures: true,
    sections: [
      {
        id: 'convert',
        title: 'Van één eiwit tot een heel recept',
        html: `<p>Recepten tellen in eiwitten, dus hier staat de omrekening voor de aantallen die u het vaakst tegenkomt. Vloeibaar wordt gewogen zoals het komt; poeder wordt gewogen en dan aangemaakt met water.</p>
${grid(['Eiwitten', 'Vloeibaar', 'Poeder', 'Water voor het poeder'], [
  ['1', '{white_liquid} g', '{white_powder} g', '{white_water} ml'],
  ['2', '{whites_2_liquid} g', '{whites_2_powder} g', '{whites_2_water} ml'],
  ['4', '{whites_4_liquid} g', '{whites_4_powder} g', '{whites_4_water} ml'],
  ['5', '{whites_5_liquid} g', '{whites_5_powder} g', '{whites_5_water} ml'],
  ['10', '{whites_10_liquid} g', '{whites_10_powder} g', '{whites_10_water} ml'],
])}
<p>Twee eiwitten is een kleine batch mousse voor twee; vier is de macaron- en moussebatch op deze site; vijf is de meringuebatch. De <a href="{reconstitution_href}">aanmaakpagina</a> zet de tabel door tot 20 eiwitten, en elke toepassingsgids heeft een rekenhulp die het hele recept schaalt.</p>`,
      },
      {
        id: 'whisk',
        title: 'Wat de garde van u vraagt',
        html: `<p>Aquafabaschuim is een zuiver eiwitschuim zonder vet in het recept, en het vraagt dezelfde zorg als eiwit, plus wat meer geduld met de kou. Drie dingen dekken bijna elke fout:</p>
<ul>
<li><strong>Koud.</strong> De aquafaba gaat op {meringue_chill} °C de kom in, en aangemaakt poeder wordt tot dezelfde temperatuur gekoeld. Warme aquafaba klimt traag en geeft een zwakker schuim.</li>
<li><strong>Schoon.</strong> Een vetfilm op de kom of de garde houdt het volume klein. Veeg beide schoon voordat de aquafaba erin gaat.</li>
<li><strong>Suiker als laatste.</strong> Die gaat erin zodra het schuim zachte pieken houdt, een lepel per keer. Sneller toegevoegd dan hij kan oplossen, gaat hij zweten tijdens het bewaren.</li>
</ul>
<p>Tel het kloppen in minuten, niet in seconden: ongeveer {meringue_whip} minuten op hoge snelheid voor een batch meringue. Een stabilisator is optioneel. Waar een recept er een gebruikt, gaat wijnsteen of citroenzuur erin bij zachte pieken, niet aan het begin.</p>`,
      },
      {
        id: 'where',
        title: 'Waar het op deze site wordt opgeklopt',
        html: `<p>Vier recepten op deze site zijn gebouwd op het aquafabaschuim, bij vier verschillende belastingen:</p>
<ul>
<li><a href="{meringue_href}">Meringue</a>: {meringue_dose} g, of {meringue_eggs} eiwitten, opgeklopt met {meringue_sugar} g suiker en gedroogd op {meringue_bake} °C, voor ongeveer {meringue_yield} meringues.</li>
<li><a href="{macarons_href}">Macarons</a>: {macarons_dose} g, of {macarons_eggs} eiwitten, voor ongeveer {macarons_yield} schelpen.</li>
<li><a href="{chocolate_mousse_href}">Chocolademousse</a>: {chocolate_mousse_dose} g, of {chocolate_mousse_eggs} eiwitten, door chocolade gespateld op {chocolate_mousse_fold_temp} °C.</li>
<li><a href="{cocktails_href}">Sours achter de bar</a>: {cocktails_dose} g per drankje, {cocktails_dry_shake} seconden dry geshaket.</li>
</ul>
<p>Vervangt uw recept hele eieren in plaats van eiwitten, dan is het cijfer {egg_liquid} g per ei en neemt de <a href="{ratio_href}">pagina over de ei-verhouding</a> het van hier over.</p>`,
      },
      {
        id: 'choose',
        title: 'Vloeibaar of poeder voor hetzelfde eiwit?',
        html: `<p>De omrekening is in beide identiek, dus de keuze gaat over de verpakking, niet over het recept. Een keuken die de meeste dagen opklopt, neemt het <a href="{liquid_egg_white_href}">vloeibare product</a>: het komt al koud uit de koelkast, en een geopende verpakking wordt binnen {opened_days} dagen gebruikt. Een keuken die af en toe opklopt, of geen koelruimte over heeft, neemt het <a href="{egg_white_powder_href}">poeder</a>: een geopend zakje bederft niet, en u maakt aan wat de batch nodig heeft.</p>`,
      },
    ],
    faq: [
      { q: 'Hoeveel gram aquafaba vervangt één eiwit?', a: '{white_liquid} g vloeibaar, of {white_powder} g poeder aangemaakt met {white_water} ml water, wat {white_total} g aquafaba geeft.' },
      { q: 'Klopt het op zoals eiwit?', a: 'Het klopt op tot een schuim dat suiker en lucht draagt, en daarop zijn de recepten voor meringue, macarons, mousse en sours van deze site gebouwd. Het vraagt dezelfde koude kom en dezelfde vetvrije garde.' },
      { q: 'Hoeveel eiwitten zitten er in een verpakking van 1 L?', a: '{liquid_1l_whites}. Een 10 L bag-in-box staat voor {bib_10l_whites} en een 1 T IBC voor {ibc_1t_whites}. In poeder staat een zakje van 200 g voor {powder_200g_whites}.' },
      { q: 'Heb ik wijnsteen of citroenzuur nodig?', a: 'Het is optioneel. Waar een recept er een gebruikt, gaat het erin terwijl de mixer draait, zodra het schuim zachte pieken houdt, en het ondersteunt het schuim door de suiker en het spatelen heen.' },
      { q: 'Kan ik het gebruiken in een recept met hele eieren?', a: 'Ja, met het cijfer voor hele eieren: {egg_liquid} g per ei, plus een vloeistofvermindering van {reduce_liquids} procent, want aquafaba brengt meer water mee. De [bakgids]({baking_href}) legt het uit.' },
    ],
    links: [
      { href: '{meringue_href}', label: 'Meringue: vloeibaar of poeder?' },
      { href: '{macarons_href}', label: 'Macarons: vloeibaar of poeder?' },
      { href: '{reconstitution_href}', label: 'Poeder aanmaken: de regel per eiwit' },
      { href: '{liquid_egg_white_href}', label: 'Overstappen van vloeibaar eiwit naar aquafaba' },
      { href: '{egg_white_powder_href}', label: 'Aquafabapoeder: het alternatief voor eiwitpoeder' },
    ],
  },

  'liquid-egg-white': {
    title: 'Van vloeibaar eiwit naar aquafaba - VERY AQUAFABA',
    h1: 'Overstappen van vloeibaar eiwit naar aquafaba',
    crumb: 'Vloeibaar eiwit',
    enquiryLabel: 'Alternatief voor vloeibaar eiwit',
    description: 'Van vloeibaar eiwit naar VERY AQUAFABA: dezelfde dosis op gewicht, {white_liquid} g per eiwit. Wat verandert, welke verpakking uw pak vervangt en wat u na het openen doet.',
    lead: 'Koopt u vloeibaar eiwit per pak, dan koopt u het om het breken over te slaan en op gewicht te doseren. VERY AQUAFABA vloeibaar doet hetzelfde werk vanuit kikkererwten: {white_liquid} g vervangt één eiwit, het komt aan op een vaste concentratie van {viscosity} g/ml, en het wordt rechtstreeks op de weegschaal gegoten. Hier leest u wat verandert als u overstapt, wat niet, welke verpakking uw pak vervangt, en wat u doet met wat er overblijft in een geopende.',
    figures: true,
    sections: [
      {
        id: 'changes',
        title: 'Wat verandert, en wat niet',
        html: `<p>Het goede nieuws eerst: de manier waarop u werkt blijft dezelfde.</p>
<ul>
<li>U doseert nog steeds op gewicht, {white_liquid} g per eiwit, rechtstreeks uit de verpakking op de weegschaal.</li>
<li>U giet nog steeds, zonder iets aan te maken.</li>
<li>U klopt het nog steeds koud op, uit een schone kom, op {meringue_chill} °C voor een meringue.</li>
</ul>
<p>Wat verandert, is alles rond de verpakking:</p>
<ul>
<li><strong>Geen koudeketen tot u ze opent.</strong> Gesloten is de verpakking minimaal {unopened_months} maanden houdbaar op kamertemperatuur, in de droge opslag. Een pak vloeibaar eiwit staat in de koelkast vanaf de dag dat het aankomt.</li>
<li><strong>{opened_days} dagen na het openen,</strong> op maximaal {opened_temp} °C, gesloten tussen twee gebruiksmomenten.</li>
<li><strong>Geen rauw ei in de keuken.</strong> Het schuim en de emulsie zijn dezelfde; de voedselveiligheidszorg van rauw eiwit is weg, en het gerecht is eivrij voor de gast.</li>
<li><strong>Eén concentratie, elke keer.</strong> Het vloeibare product is gefilterd, verfijnd en gestandaardiseerd op {viscosity} g/ml, dus een schuim gedraagt zich van de ene verpakking tot de volgende hetzelfde.</li>
</ul>`,
      },
      {
        id: 'packs',
        title: 'Welke verpakking uw pak vervangt',
        html: `<p>Drie vloeibare verpakkingen, beschreven met de eiwitten die ze vervangen en met de keuken die ze leeg krijgt.</p>
${grid(['Verpakking', 'Eiwitten', 'Wie ze leeg krijgt'], [
  ['1 L Tetrapak', '{liquid_1l_whites}', 'Een banketafdeling, een bar met sours op de kaart, één vestiging'],
  ['10 L bag-in-box', '{bib_10l_whites}', 'Een centrale keuken die per dienst per kilo aftapt'],
  ['1 T IBC', '{ibc_1t_whites}', 'Een lijn die continu doseert'],
], 'va-guide-grid--wrap')}
<p>In de praktijk: {meringue_dose} g voor een batch meringue van ongeveer {meringue_yield}, {macarons_dose} g voor ongeveer {macarons_yield} macaronschelpen, {mayonnaise_dose} g op {mayonnaise_oil} g olie in een mayonaise, {cocktails_dose} g per sour. De <a href="{index_href}">toepassingsgidsen</a> dragen de werkwijze voor elk geval. Elke activiteit wordt op haar eigen pagina uitgewerkt: <a href="{pastry_href}">banketbakkerij en bakkerij</a>, <a href="{bars_href}">bars en cocktails</a>, <a href="{foodservice_href}">foodservice</a> en <a href="{industry_href}">voedingsindustrie</a>.</p>`,
      },
      {
        id: 'opened',
        title: 'Wat u doet met wat er overblijft in een geopende verpakking',
        html: `<p>Een geopende verpakking heeft {opened_days} dagen in de koelkast. Krijgt uw ritme ze op tijd leeg, sluit ze dan tussen twee gebruiksmomenten en dat is alles. Zo niet, dan hebt u twee opties:</p>
<ul>
<li><strong>Vries het in.</strong> Portioneer op {portion} g, vries in op {freeze_temp} °C tot {freeze_months} maanden, ontdooi een nacht in de koelkast en roer glad voor het opkloppen. Het wordt nooit opnieuw ingevroren. De <a href="{storage_href}">gids over bewaren en invriezen</a> beschrijft de omgang in detail.</li>
<li><strong>Of zet dat recept over op poeder.</strong> Een geopend zakje bederft niet, en het beantwoordt hetzelfde recept in dezelfde dosis. De <a href="{egg_white_powder_href}">poederpagina</a> legt uit wanneer het zakje de betere koop is.</li>
</ul>
<p>Wat de datum ook zegt, een geopend vloeibaar product dat vreemd ruikt, belletjes vertoont of gescheiden is, wordt weggegooid.</p>`,
      },
    ],
    faq: [
      { q: 'Wordt aquafaba bewaard zoals vloeibaar eiwit?', a: 'Niet vóór het openen. Gesloten is het minimaal {unopened_months} maanden houdbaar op kamertemperatuur, dus het wacht in de droge opslag. Eenmaal geopend wordt het bewaard zoals uw pak: op maximaal {opened_temp} °C, binnen {opened_days} dagen gebruikt.' },
      { q: 'Hoeveel vloeibaar product vervangt één eiwit?', a: '{white_liquid} g, gewogen. Een 1 L Tetrapak staat daarmee voor {liquid_1l_whites} eiwitten, een 10 L bag-in-box voor {bib_10l_whites} en een 1 T IBC voor {ibc_1t_whites}.' },
      { q: 'Kan het ingevroren worden?', a: 'Ja, in porties van {portion} g op {freeze_temp} °C tot {freeze_months} maanden. Ontdooi een nacht in de koelkast en roer glad voor het opkloppen; het wordt nooit opnieuw ingevroren.' },
      { q: 'Ligt de concentratie vast?', a: 'Ja, {viscosity} g/ml. Het is gefilterd, verfijnd en gestandaardiseerd, en dat houdt een schuim of een emulsie van run tot run gelijk.' },
      { q: 'Waar kan ik vloeibare aquafaba kopen?', a: 'De formaten en de huidige kanalen staan op de [productpagina]({products_href}). Beschrijf professionele volumes via het aanvraagformulier, dan komt de technische fiche met het antwoord mee.' },
    ],
    links: [
      { href: '{egg_white_href}', label: 'Zo vervangt u eiwitten door aquafaba' },
      { href: '{egg_white_powder_href}', label: 'Aquafabapoeder: het alternatief voor eiwitpoeder' },
      { href: '{storage_href}', label: 'Aquafaba bewaren en invriezen' },
      { href: '{pastry_href}', label: 'Banketbakkerij en bakkerij' },
      { href: '{bars_href}', label: 'Bars en cocktails' },
    ],
  },

  'egg-white-powder': {
    title: 'Aquafabapoeder of eiwitpoeder? - VERY AQUAFABA',
    h1: 'Aquafabapoeder: het alternatief voor eiwitpoeder dat blijft wachten',
    crumb: 'Eiwitpoeder',
    enquiryLabel: 'Alternatief voor eiwitpoeder',
    description: 'VERY AQUAFABA poeder vervangt eiwitpoeder: {white_powder} g plus {white_water} ml water per eiwit, een zakje van 200 g voor {powder_200g_whites} eiwitten, en geen datum na het openen.',
    lead: 'Eiwitpoeder verdient zijn plek in de voorraadkast door te wachten. VERY AQUAFABA poeder doet hetzelfde vanuit kikkererwten, voor koken en bakken: {white_powder} g aangemaakt met {white_water} ml water vervangt één eiwit, een zakje van 200 g staat voor {powder_200g_whites}, en een geopend zakje bederft niet zolang het droog en gesloten blijft. Hier leest u hoe u het aanmaakt, wanneer het zakje het pak verslaat, en het ene wat het niet doet.',
    figures: true,
    sections: [
      {
        id: 'makeup',
        title: 'Aanmaken',
        html: `<p>De regel telt per eiwit, niet per zakje: {white_powder} g poeder en {white_water} ml water geven {white_total} g aquafaba, die precies zo worden gebruikt als hetzelfde gewicht vloeibaar. Voor de batches op deze site:</p>
${grid(['Batch', 'Poeder', 'Water'], [
  ['Meringue, {meringue_eggs} eiwitten', '{meringue_powder} g', '{meringue_water} ml'],
  ['Mayonaise, één batch', '{mayonnaise_powder} g', '{mayonnaise_water} ml'],
  ['Eén sour', '{cocktails_powder} g', '{cocktails_water} ml'],
])}
<p>Maak het aan voordat u het nodig hebt en koel het, tot {meringue_chill} °C voor een meringue, want warme aquafaba klimt trager en geeft een zwakker schuim. De <a href="{reconstitution_href}">aanmaakpagina</a> draagt de tabel van 1 tot 20 eiwitten.</p>`,
      },
      {
        id: 'when',
        title: 'Wanneer het zakje het pak verslaat',
        html: `<p>Het is hetzelfde ingrediënt als het vloeibare product, dus de redenen om het te verkiezen gaan over de verpakking en de ruimte, niet over het recept:</p>
<ul>
<li><strong>Ongelijke rotatie.</strong> Het geopende zakje wacht zonder datum, terwijl een geopende vloeibare verpakking {opened_days} dagen in de koelkast heeft.</li>
<li><strong>Geen koelruimte.</strong> Het zakje staat in de droge opslag, en de koelschappen blijven vrij voor wat u net gemaakt hebt.</li>
<li><strong>Onderweg.</strong> Evenementen en catering op locatie nemen het droog mee, zonder koudeketen.</li>
<li><strong>Droge premixen.</strong> Een producent die een droge saus- of bakbasis mengt, doet het poeder in de premix zoals het is.</li>
</ul>
<p>Gesloten is een zakje minimaal {unopened_months} maanden houdbaar op kamertemperatuur, net als het vloeibare product. Het verschil begint op de dag dat u het opent.</p>`,
      },
      {
        id: 'not',
        title: 'Het ene wat het poeder niet doet',
        html: `<p>Het is geen sluiproute voor droge mengsels in opgeklopte recepten. De aquafaba wordt eerst apart opgeklopt, dus het poeder wordt aangemaakt met water en gekoeld voordat het in de buurt van het amandelmeel, de poedersuiker of de fijne suiker komt. Alleen in een droge premix gaat het erin zoals het is.</p>
<p>En het is een culinair ingrediënt, geen eiwitsupplement: gemaakt voor de meringue die haar suiker houdt, de mayonaise die haar olie opneemt en het biscuit dat bindt, en gedoseerd op het eiwit dat het recept vervangt, niet met een maatschep.</p>`,
      },
      {
        id: 'packs',
        title: 'Welk zakje',
        html: `${grid(['Zakje', 'Eiwitten', 'Aangemaakt is dat'], [
  ['30 g', '{powder_30g_whites}', 'Een proefbatch, of een bar die een sour test'],
  ['200 g', '{powder_200g_whites}', '{meringue_batches_200g} batches meringue of {cocktails_batches_200g} sours'],
  ['3 kg', '{powder_3kg_whites}', 'Een professionele keuken, of een droge premix op een lijn'],
])}
<p>De <a href="{products_href}">productpagina</a> somt de zakjes op en wat de verpakking vermeldt. De <a href="{index_href}">toepassingsgidsen</a> geven de dosis per recept in beide formaten, en de <a href="{professional_href}">professionalssectie</a> ordent de formaten per activiteit.</p>`,
      },
    ],
    faq: [
      { q: 'Wat is aquafabapoeder?', a: 'VERY AQUAFABA in gedroogde vorm. {white_powder} g poeder plus {white_water} ml water geeft {white_total} g aquafaba, gelijk aan hetzelfde gewicht van het vloeibare product, en vervangt één eiwit.' },
      { q: 'Hoe lang gaat een geopend zakje mee?', a: 'Het bederft niet zolang het droog en gesloten blijft, en past daarom bij een keuken of bar met een ongelijke rotatie. Gesloten is het minimaal {unopened_months} maanden houdbaar op kamertemperatuur.' },
      { q: 'Kan het poeder rechtstreeks in een droog mengsel?', a: 'In een droge premix wel. In een opgeklopt recept niet: de aquafaba wordt eerst apart opgeklopt, maak het dus aan met water en koel het voordat het de andere droge ingrediënten ontmoet.' },
      { q: 'Hoeveel eiwitten zitten er in een zakje van 200 g?', a: '{powder_200g_whites}. Het zakje van 30 g staat voor {powder_30g_whites} en de zak van 3 kg voor {powder_3kg_whites}.' },
      { q: 'Is het een eiwitsupplement?', a: 'Nee. Het is een culinair ingrediënt voor schuimen, emulsies en gebak, gedoseerd op het eiwit dat het recept vervangt, zoals de [toepassingsgidsen]({index_href}) uiteenzetten.' },
    ],
    links: [
      { href: '{reconstitution_href}', label: 'Poeder aanmaken: de regel per eiwit' },
      { href: '{egg_white_href}', label: 'Zo vervangt u eiwitten door aquafaba' },
      { href: '{liquid_egg_white_href}', label: 'Overstappen van vloeibaar eiwit naar aquafaba' },
      { href: '{meringue_href}', label: 'Meringue: vloeibaar of poeder?' },
      { href: '{bars_href}', label: 'Bars en cocktails' },
    ],
  },
};
