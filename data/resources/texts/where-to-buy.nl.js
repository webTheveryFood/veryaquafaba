// Waar kopen, Nederlands (set-2 E0 en de landenpagina's). De aankooproute per land is die van de
// klant (Arnaud, mail van 28 augustus 2026, "Purchase URL for every country"): de Verenigde
// Staten en Duitsland via Amazon, Frankrijk via InstantChef, ALLE ANDERE LANDEN via het
// contactformulier en het B2B-formulier. Geen pagina claimt een kanaal dat we niet kunnen
// staven, en geen enkele noemt prijzen of voorraad. Geen gedachtestreepje.
// De `index` houdt zijn eigen Nederlandse tabel; de landenpagina's volgen where-to-buy.en.js.
const grid = (heads, rows, cls = '') => `<table class="va-guide-grid${cls ? ` ${cls}` : ''}">
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

export default {
  index: {
    title: 'Waar u VERY AQUAFABA koopt - VERY AQUAFABA',
    h1: 'Waar u VERY AQUAFABA koopt, land voor land',
    crumb: 'Waar kopen',
    enquiryLabel: 'Waar kopen',
    description: 'Hoe u VERY AQUAFABA in elk land koopt: de Amazon-vermeldingen in de Verenigde Staten en Duitsland, InstantChef in Frankrijk, en de formulieren overal elders.',
    lead: 'Drie landen hebben vandaag een vermelding waar u kunt bestellen: de Verenigde Staten en Duitsland op Amazon, en Frankrijk op InstantChef. Overal elders loopt de route via de formulieren, het contactformulier voor een vraag en het professionele formulier voor een volume, en het antwoord komt terug met de formaten en het technische blad.',
    figures: true,
    sections: [
      {
        id: 'countries',
        title: 'De route, land voor land',
        html: `${grid(['Land', 'Hoe u koopt'], [
  ['<a href="{united_states_href}">Verenigde Staten</a>', 'Amazon'],
  ['<a href="{germany_href}">Duitsland</a>', 'Amazon'],
  ['<a href="{france_href}">Frankrijk</a>', 'InstantChef'],
  ['<a href="{united_kingdom_href}">Verenigd Koninkrijk</a>', 'Aanvraagformulier'],
  ['<a href="{netherlands_href}">Nederland</a>', 'Aanvraagformulier'],
  ['<a href="{belgium_href}">België</a>', 'Aanvraagformulier'],
  ['Andere landen', 'Aanvraagformulier'],
], 'va-guide-grid--pairs')}`,
      },
      { id: 'range', title: 'Wat u bestelt', html: range },
      {
        id: 'professional',
        title: 'Professionele volumes en het technische blad',
        html: `<p>De 10 L bag-in-box en de 1 T IBC worden in geen enkel land via een winkel verkocht: ze worden per project geprijsd, met het technische blad, zodra de toepassing en het maandvolume bekend zijn. Daarvoor is het professionele formulier op deze pagina; voor een eenvoudige vraag volstaat het <a href="{contact_href}">contactformulier</a>.</p>
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
      { href: '{professional_href}', label: 'Aquafaba voor professionals' },
      { href: '{egg_substitutes_href}', label: 'Plantaardige eivervangers' },
      { href: '{index_href}', label: 'Alle toepassingsgidsen' },
    ],
  },

  'united-states': {
    inCountry: 'in de Verenigde Staten',
    title: 'Aquafaba kopen in de Verenigde Staten - VERY AQUAFABA',
    h1: 'Waar u VERY AQUAFABA koopt in de Verenigde Staten',
    crumb: 'Verenigde Staten',
    description: 'Koop VERY AQUAFABA in de Verenigde Staten op Amazon: het pak van 1 L, het pak voor cocktailbars en de set van vier. Welk product bij u past en hoe u meer koopt.',
    lead: 'Elke professionele keuken heeft een recept dat eiwit nodig heeft en een reden om het niet te gebruiken: een vegan gast, een rauw ei in een sour, een allergeen op het etiket. VERY AQUAFABA is aquafaba van kikkererwten, een plantaardig eiwit dat opklopt, bindt en emulgeert zoals het echte. Bent u in de Verenigde Staten, dan koopt u het rechtstreeks op Amazon. Hieronder welk product u kiest en hoe u in volume bestelt.',
    sections: [
      {
        id: 'which',
        title: 'Welk product bij u past',
        html: `<p>Begin bij hoe snel u het opgebruikt. Een geopend pak staat in de koelkast en wordt binnen {opened_days} dagen gebruikt, dus koop voor de week die u werkelijk hebt.</p>
<ul>
<li><strong>Klopt u een paar keer per week meringue op of spatelt u mousse?</strong> Eén pak van 1 L is alles wat u nodig hebt. Het staat gelijk aan {liquid_1l_whites} eiwitten, goed voor {meringue_batches_1l} batches meringue of {macarons_batches_1l} batches macarons, en het volgende wacht gesloten in de droge opslag, minimaal {unopened_months} maanden.</li>
<li><strong>Shaket u elke avond sours?</strong> Bestel het pak dat voor cocktailbars is vermeld. Dezelfde aquafaba, te vinden waar bartenders ze zoeken, en één pak schenkt {cocktails_batches_1l} sours voordat het leeg is, ruim binnen zijn {opened_days} dagen.</li>
<li><strong>Is een pak op voordat de week om is?</strong> Neem de set van vier. Open er één, houd er drie gesloten op de plank, en bestel opnieuw als het laatste de koelkast in gaat.</li>
</ul>
<p>Klopt u maar af en toe op, dan past het poeder misschien beter, want een geopend zakje bederft niet. Het staat nog niet op Amazon in de Verenigde Staten, maar u kunt het hieronder aanvragen.</p>`,
      },
      {
        id: 'more',
        title: 'Meer dan een pak per week nodig?',
        html: `<p>Voorbij het pak prijzen wij per project: de 10 L bag-in-box is {bib_10l_whites} eiwitten, de 1 T IBC {ibc_1t_whites}, en het poeder, dat nog niet op Amazon in de Verenigde Staten staat, gaat dezelfde weg. Vertel ons wat u maakt en ongeveer hoeveel per maand via het formulier op deze pagina, en de technische fiche komt met de offerte mee.</p>
<p>Weet u nog niet welk formaat of hoeveel? De <a href="{professional_href}">professionalssectie</a> werkt het per activiteit uit, en elke <a href="{index_href}">toepassingsgids</a> heeft een rekenhulp die het recept naar uw batches schaalt.</p>`,
      },
    ],
    faq: [
      { q: 'Waar kan ik aquafaba kopen in de Verenigde Staten?', a: 'Op Amazon, via de drie producten op deze pagina: het pak van 1 L, hetzelfde pak vermeld voor cocktailbars, en de set van vier. Alle drie zijn VERY AQUAFABA vloeibaar.' },
      { q: 'Wat vervangt een pak van 1 L?', a: '{liquid_1l_whites} eiwitten, dat zijn {cocktails_batches_1l} sours, {meringue_batches_1l} batches meringue of {eggs_1l} hele eieren bij het bakken.' },
      { q: 'Is het verschil tussen de drie producten alleen de hoeveelheid?', a: 'Ja. Ze bevatten dezelfde aquafaba. Het product voor cocktailbars is het pak van 1 L onder de naam waarop een bar zoekt, en de set van vier is vier pakken voor een zaak die er meer dan één tegelijk gebruikt.' },
      { q: 'Kan ik het poeder kopen in de Verenigde Staten?', a: 'Nog niet op Amazon. Vraag het aan via het formulier op deze pagina, met uw toepassing en uw maandvolume, en wij laten weten wat we kunnen doen.' },
      { q: 'Hoe lang is een geopend pak houdbaar?', a: '{opened_days} dagen op maximaal {opened_temp} °C. Gesloten is het minimaal {unopened_months} maanden houdbaar op kamertemperatuur.' },
    ],
    links: [
      { href: '{bars_href}', label: 'Bars en cocktails' },
      { href: '{cocktails_href}', label: 'Cocktails: vloeibaar of poeder?' },
      { href: '{index_href}', label: 'Alle toepassingsgidsen' },
      { href: '{products_href}', label: 'Producten en formaten' },
    ],
  },

  'united-kingdom': {
    inCountry: 'in het Verenigd Koninkrijk',
    title: 'Aquafaba in het Verenigd Koninkrijk - VERY AQUAFABA',
    h1: 'Hoe u VERY AQUAFABA krijgt in het Verenigd Koninkrijk',
    crumb: 'Verenigd Koninkrijk',
    description: 'VERY AQUAFABA in het Verenigd Koninkrijk: nog geen webshop, maar één bericht en wij regelen het. Hoe u bestelt, hoeveel u aanvraagt en welk formaat bij u past.',
    lead: 'Klop het op tot meringue, spatel het door een mousse, shake het in een sour: VERY AQUAFABA is aquafaba van kikkererwten, een plantaardig eiwit dat alles doet wat het echte doet, zonder het ei. Vertel ons wat u maakt en ongeveer hoeveel, en wij komen terug met de formaten, de technische fiche en een offerte. We hebben in het Verenigd Koninkrijk nog geen webshop geopend, maar dat hoeft u niet tegen te houden om het te proberen. Stuur ons een bericht.',
    sections: [
      {
        id: 'order',
        title: 'Zo bestelt u in het Verenigd Koninkrijk',
        html: `<p>Vertel ons over uw keuken, en wij nemen het van daar over. Zo bestelt u aquafaba bij ons:</p>
<ol>
<li><strong>Vertel ons wat u maakt en ongeveer hoeveel per maand.</strong> Het formulier onderaan deze pagina vraagt om uw bedrijf, de toepassing en een geschat maandvolume. Een regel over het project helpt.</li>
<li><strong>Wij komen terug met de formaten die we u kunnen sturen, de technische fiche en een offerte,</strong> inclusief de minimale bestelling en de levertijd voor uw volume.</li>
<li><strong>U bestelt.</strong> Gesloten zijn de verpakkingen minimaal {unopened_months} maanden houdbaar op kamertemperatuur, dus een eerste bestelling kan in de droge opslag wachten tot u ze nodig hebt.</li>
</ol>
<p>Een vermelding op Amazon UK is gepland. Zodra die live is, linkt deze pagina ernaar, en is het pak van 1 L één klik verwijderd.</p>`,
      },
      {
        id: 'howmuch',
        title: 'Hoeveel moet u aanvragen?',
        html: `<p>U hebt geen exact cijfer nodig, een ruwe maandschatting volstaat om te prijzen. De makkelijkste weg ernaartoe is denken in de recepten die u maakt. Een sour vraagt {cocktails_dose} g aquafaba, dus een bar die er tien per avond schenkt, zit rond {sours_10_night_l} liter per maand. Een batch meringue vraagt {meringue_dose} g, een batch mayonaise {mayonnaise_dose} g. Tel uw batches, en is de som moeilijk voor te stellen, dan heeft elke <a href="{index_href}">toepassingsgids</a> een rekenhulp die het voor u doet.</p>
<p>Om een idee van de schaal te geven: een 1 L Tetrapak is {liquid_1l_whites} eiwitten, genoeg voor {cocktails_batches_1l} sours of {meringue_batches_1l} batches meringue. Een drukke cocktailbar gebruikt er één per week. Een hotelgroep of een centrale keuken zit dichter bij de 10 L bag-in-box.</p>`,
      },
      {
        id: 'format',
        title: 'Vloeibaar of poeder: wat vraagt u aan?',
        html: `<p>Beide zijn dezelfde aquafaba. Vloeibaar is klaar om te schenken en staat na het openen {opened_days} dagen in de koelkast. Poeder wordt met water gemengd wanneer u het nodig hebt, en een geopend zakje blijft goed tot u het nodig hebt, droog en gesloten.</p>
<p>Gebruikt u het dus de meeste dagen, vraag dan vloeibaar aan. Gebruikt u het af en toe, of is uw koelkast al vol, vraag dan poeder aan. En zijn uw weekends druk en uw weekdagen rustig, dan houden veel bars beide. De <a href="{bars_href}">pagina bars en cocktails</a> en de <a href="{pastry_href}">pagina banketbakkerij en bakkerij</a> gaan er dieper op in.</p>`,
      },
    ],
    faq: [
      { q: 'Kan ik vandaag aquafaba kopen in het Verenigd Koninkrijk?', a: 'Nog niet in een winkel. U kunt VERY AQUAFABA rechtstreeks bij ons bestellen: stuur uw toepassing en uw geschatte maandvolume via het formulier op deze pagina, en wij antwoorden met de formaten, de technische fiche en een offerte.' },
      { q: 'Komt VERY AQUAFABA op Amazon UK?', a: 'Ja, dat is gepland. Deze pagina linkt naar de vermelding zodra die live is.' },
      { q: 'Is er een minimale bestelling?', a: 'Dat hangt af van het formaat en het volume, dus het komt met de offerte. Vertel ons wat u maakt en hoeveel per maand, en u krijgt de minimale bestelling en de levertijd samen met de technische fiche.' },
      { q: 'Welk formaat vraag ik aan?', a: 'Vloeibaar als een geopende verpakking binnen {opened_days} dagen in de koelkast wordt gebruikt; poeder als dat niet zo is, want een geopend zakje bederft niet zolang het droog en gesloten blijft. Veel bars houden beide.' },
      { q: 'Hoeveel sours schenkt een liter?', a: '{cocktails_batches_1l}, van elk {cocktails_dose} g, eerst dry geshaket. Een zakje van 200 g poeder schenkt er {cocktails_batches_200g}.' },
    ],
    links: [
      { href: '{bars_href}', label: 'Bars en cocktails' },
      { href: '{pastry_href}', label: 'Banketbakkerij en bakkerij' },
      { href: '{cocktails_href}', label: 'Cocktails: vloeibaar of poeder?' },
      { href: '{products_href}', label: 'Producten en formaten' },
    ],
  },

  france: {
    inCountry: 'in Frankrijk',
    title: 'Aquafaba kopen in Frankrijk - VERY AQUAFABA',
    h1: 'Waar u VERY AQUAFABA koopt in Frankrijk',
    crumb: 'Frankrijk',
    description: 'Koop VERY AQUAFABA in Frankrijk op InstantChef: vloeibaar in 1 L en poeder in 200 g. Welk formaat bij uw banketkeuken of bar past en hoe u meer bestelt.',
    lead: 'U hoeft de meringue niet op te geven om eivrij te gaan. VERY AQUAFABA is aquafaba van kikkererwten, een plantaardig eiwit dat opklopt, bindt en emulgeert zoals het echte. Bent u in Frankrijk, dan koopt u het rechtstreeks bij InstantChef, vloeibaar en als poeder. Hieronder welk formaat bij u past en hoe u in volume bestelt.',
    sections: [
      {
        id: 'which',
        title: 'Koopt u vloeibare aquafaba of poeder?',
        html: `<p>Begin bij uw ritme: hoe vaak u spuit, opklopt of shaket, en of een geopende verpakking op tijd op is.</p>
<ul>
<li><strong>Spuit u de meeste dagen macarons of meringue?</strong> De 1 L Tetrapak. Hij komt op opkloptemperatuur rechtstreeks uit de koelkast en is goed voor {macarons_batches_1l} batches macaronschelpen of {meringue_batches_1l} batches meringue. Eenmaal geopend wordt hij binnen {opened_days} dagen gebruikt op maximaal {opened_temp} °C.</li>
<li><strong>Shaket u elke service sours?</strong> Opnieuw de Tetrapak: {cocktails_dose} g per drankje, eerst dry geshaket, {cocktails_batches_1l} sours per pak. Schenkt u maar een paar sours per week, neem dan het zakje en maak aan wat de avond nodig heeft.</li>
<li><strong>Bakt u op bestelling, of hebt u weinig koelruimte?</strong> Het zakje van 200 g poeder: {white_powder} g en {white_water} ml water per eiwit, {powder_200g_whites} eiwitten per zakje, en geen datum na het openen.</li>
</ul>
<p>De <a href="{pastry_href}">pagina banketbakkerij en bakkerij</a> en de <a href="{bars_href}">pagina bars en cocktails</a> gaan op elk daarvan dieper in, en de <a href="{macarons_href}">macarongids</a> heeft de volledige werkwijze.</p>`,
      },
      {
        id: 'more',
        title: 'Kopen voor een atelier of een groep',
        html: `<p>InstantChef voert de twee formaten waarmee de meeste keukens beginnen. Hebt u meer nodig, dan prijzen wij het per project: de 10 L bag-in-box is {bib_10l_whites} eiwitten, voor een centrale keuken die per kilo aftapt, en de 1 T IBC {ibc_1t_whites}, voor een lijn. Vertel ons wat u maakt en ongeveer hoeveel per maand via het formulier op deze pagina, en de technische fiche komt met de offerte mee.</p>`,
      },
    ],
    faq: [
      { q: 'Waar kan ik aquafaba kopen in Frankrijk?', a: 'Op InstantChef, via de twee producten op deze pagina: het vloeibare product in 1 L en het poeder in 200 g.' },
      { q: 'Hoeveel batches macarons haal ik uit een 1 L Tetrapak?', a: '{macarons_batches_1l} batches van ongeveer {macarons_yield} schelpen, van elk {macarons_dose} g. Hetzelfde pak is goed voor {meringue_batches_1l} batches meringue of {cocktails_batches_1l} sours.' },
      { q: 'Staat het poeder ook op InstantChef?', a: 'Ja, het zakje van 200 g, dat is {powder_200g_whites} eiwitten, aangemaakt met {white_powder} g poeder en {white_water} ml water per eiwit. Een geopend zakje blijft goed zolang het droog en gesloten blijft.' },
      { q: 'Komt VERY AQUAFABA op Amazon in Frankrijk?', a: 'Dat is het plan. Tot dan voert InstantChef beide formaten, en deze pagina linkt naar Amazon zodra de vermelding live is.' },
      { q: 'Hoe krijg ik de grote formaten?', a: 'Via het formulier op deze pagina: de bag-in-box en de IBC worden per project geprijsd, met de technische fiche.' },
    ],
    links: [
      { href: '{bars_href}', label: 'Bars en cocktails' },
      { href: '{pastry_href}', label: 'Banketbakkerij en bakkerij' },
      { href: '{macarons_href}', label: 'Macarons: vloeibaar of poeder?' },
      { href: '{index_href}', label: 'Alle toepassingsgidsen' },
      { href: '{products_href}', label: 'Producten en formaten' },
    ],
  },

  belgium: {
    inCountry: 'in België',
    title: 'Aquafaba in België - VERY AQUAFABA',
    h1: 'Hoe u VERY AQUAFABA krijgt in België',
    crumb: 'België',
    description: 'VERY AQUAFABA in België: nog geen webshop, maar een bericht aan ons volstaat. Hoe u bestelt, hoeveel u aanvraagt, en of u vloeibaar of poeder aanvraagt.',
    lead: 'Chocolademousse zonder ei, macarons zonder eiwit: VERY AQUAFABA is aquafaba van kikkererwten, een plantaardig eiwit dat opklopt, bindt en emulgeert zoals het echte. Het ligt nog niet in een Belgische webshop, maar een bericht aan ons volstaat. Vertel ons wat u maakt en ongeveer hoeveel, en wij komen terug met de formaten, de technische fiche en een offerte.',
    sections: [
      {
        id: 'order',
        title: 'Zo bestelt u in België',
        html: `<p>Vertel ons over uw keuken, en wij nemen het van daar over. Zo bestelt u aquafaba bij ons:</p>
<ol>
<li><strong>Stuur ons een paar regels over wat u maakt en ongeveer hoeveel per maand.</strong> Het formulier onderaan deze pagina vraagt om uw bedrijf, de toepassing en een geschat maandvolume.</li>
<li><strong>Wij antwoorden met de formaten die we u kunnen sturen, de technische fiche en een offerte,</strong> inclusief de minimale bestelling en de levertijd voor uw volume.</li>
<li><strong>U bestelt.</strong> Gesloten zijn de verpakkingen minimaal {unopened_months} maanden houdbaar op kamertemperatuur, dus niets hoeft te worden gebruikt in de week dat het aankomt.</li>
</ol>
<p>Een Amazon-vermelding voor België en Nederland is gepland. Zodra die live is, linkt deze pagina ernaar.</p>`,
      },
      {
        id: 'howmuch',
        title: 'Hoeveel moet u aanvragen?',
        html: `<p>Een ruwe maandschatting volstaat. Denk in de desserts die u opmaakt: een batch chocolademousse vraagt {chocolate_mousse_dose} g aquafaba voor ongeveer {chocolate_mousse_yield} porties, dus een restaurant dat zestig porties per week serveert, zit rond {mousse_60_week_l} liter per maand. Een batch macarons vraagt {macarons_dose} g, een batch meringue {meringue_dose} g. Elke <a href="{index_href}">toepassingsgids</a> heeft een rekenhulp die de som voor uw recept maakt.</p>
<p>Om een idee van de schaal te geven: een 1 L Tetrapak is {liquid_1l_whites} eiwitten, dat zijn {chocolate_mousse_batches_1l} batches mousse of {macarons_batches_1l} batches macarons. Een zakje van 200 g poeder is {powder_200g_whites} eiwitten. Een banketkeuken die de meeste dagen spuit, gebruikt een Tetrapak in een paar dagen op; een restaurant met mousse als een van meerdere desserts is beter af met een zakje.</p>`,
      },
      {
        id: 'format',
        title: 'Vloeibaar of poeder: wat vraagt u aan?',
        html: `<p>Dezelfde aquafaba, twee toestanden. Het vloeibare product komt al op opkloptemperatuur uit de koelkast en wordt na het openen binnen {opened_days} dagen gebruikt. Het poeder wordt aangemaakt met water wanneer u het nodig hebt, {white_powder} g en {white_water} ml per eiwit, en een geopend zakje blijft goed tot u het nodig hebt, droog en gesloten.</p>
<p>Een banketkeuken die de meeste dagen opklopt, vraagt vloeibaar aan. Een restaurant dat af en toe een mousse laat opstijven, vraagt poeder aan, zodat er niets bederft tussen twee kaarten. Een chocoladelijn die elke dag aquafaba doorspatelt, zit dichter bij de 10 L bag-in-box. De <a href="{chocolate_mousse_href}">gids voor chocolademousse</a> en de <a href="{pastry_href}">pagina banketbakkerij en bakkerij</a> gaan er dieper op in.</p>`,
      },
    ],
    faq: [
      { q: 'Kan ik vandaag aquafaba kopen in België?', a: 'Nog niet in een winkel. Stuur ons een paar regels via het formulier op deze pagina, wat u maakt en uw geschatte maandvolume, en wij antwoorden met de formaten, de technische fiche en een offerte.' },
      { q: 'Komt VERY AQUAFABA op Amazon in België?', a: 'Ja, een Amazon-vermelding voor België en Nederland is gepland. Deze pagina linkt ernaar zodra ze live is.' },
      { q: 'Is er een minimale bestelling?', a: 'Dat hangt af van het formaat en het volume, dus het komt met de offerte. Vertel ons wat u maakt en hoeveel per maand, en u krijgt de minimale bestelling en de levertijd samen met de technische fiche.' },
      { q: 'Hoeveel porties mousse haal ik uit een liter?', a: 'Een 1 L Tetrapak is {chocolate_mousse_batches_1l} batches van ongeveer {chocolate_mousse_yield} porties, van elk {chocolate_mousse_dose} g aquafaba. De mousse stijft op in {chocolate_mousse_set_time} uur en blijft {chocolate_mousse_keep} dagen goed in de koelkast.' },
      { q: 'Vraagt een banketkeuken vloeibaar of poeder aan?', a: 'Vloeibaar als u de meeste dagen opklopt, want een geopende Tetrapak wordt binnen {opened_days} dagen gebruikt. Poeder als u af en toe een mousse laat opstijven of macarons spuit, want een geopend zakje bederft niet.' },
    ],
    links: [
      { href: '{chocolate_mousse_href}', label: 'Chocolademousse: vloeibaar of poeder?' },
      { href: '{macarons_href}', label: 'Macarons: vloeibaar of poeder?' },
      { href: '{pastry_href}', label: 'Banketbakkerij en bakkerij' },
      { href: '{products_href}', label: 'Producten en formaten' },
    ],
  },

  germany: {
    inCountry: 'in Duitsland',
    title: 'Aquafaba kopen in Duitsland - VERY AQUAFABA',
    h1: 'Waar u VERY AQUAFABA koopt in Duitsland',
    crumb: 'Duitsland',
    description: 'VERY AQUAFABA in Duitsland op Amazon: de 1 L Tetrapak vloeibaar en het zakje van 200 g poeder. Welk formaat uw bakkerij in voorraad houdt en hoe u meer bestelt.',
    lead: 'Elke bakkerij krijgt vroeg of laat de vraag: een taart zonder ei, een vegan bestelling voor een verjaardag, een klant met een allergie. VERY AQUAFABA is aquafaba van kikkererwten, een plantaardig eiwit dat opklopt, bindt en emulgeert zoals het echte. Bent u in Duitsland, dan koopt u het rechtstreeks op Amazon, vloeibaar en als poeder. Hieronder welk formaat u in voorraad houdt en hoe u in volume bestelt.',
    sections: [
      {
        id: 'which',
        title: 'Welk aquafabaformaat koopt u?',
        html: `<p>Begin bij hoeveel ervan in het dagelijkse bakwerk gaat, want dat bepaalt of een geopende verpakking op tijd rouleert.</p>
<ul>
<li><strong>Bakt u elke dag eivrij?</strong> Houd de 1 L Tetrapak in de koelkast. Hij vervangt {eggs_1l} hele eieren, of {liquid_1l_whites} eiwitten, en gaat op opkloptemperatuur rechtstreeks de mixer in. Eenmaal geopend wordt hij binnen {opened_days} dagen gebruikt, wat een dagelijkse lijn makkelijk haalt.</li>
<li><strong>Krijgt u af en toe een vegan bestelling?</strong> Dan is het zakje van 200 g poeder de keuze. Aangemaakt met {white_powder} g poeder en {white_water} ml water per eiwit dekt het {powder_200g_whites} eiwitten, en een geopend zakje blijft goed zolang het droog en gesloten blijft. Er bederft niets tussen twee bestellingen.</li>
<li><strong>Beide, op verschillende dagen van de week?</strong> Veel bakkerijen houden de Tetrapak voor de lijn en het zakje voor de bestellingen. Het recept is op allebei hetzelfde.</li>
</ul>
<p>Eén ding om te weten als u hele eieren vervangt in een biscuit of een brioche: aquafaba brengt meer water mee dan een ei, dus breng de andere vloeistoffen {reduce_liquids} procent omlaag en bak gaar. De <a href="{baking_href}">bakgids</a> behandelt het baksel voor baksel.</p>`,
      },
      {
        id: 'more',
        title: 'Meer dan een Tetrapak per week nodig?',
        html: `<p>Amazon voert de twee formaten waarmee de meeste keukens beginnen. Hebt u meer nodig, dan prijzen wij het per project: de 10 L bag-in-box is {bib_10l_whites} eiwitten, de 1 T IBC {ibc_1t_whites}, en de zak van 3 kg poeder {powder_3kg_whites}, die voor een droge premix. Vertel ons wat u bakt en ongeveer hoeveel per maand via het formulier op deze pagina, en de technische fiche komt met de offerte mee.</p>`,
      },
    ],
    faq: [
      { q: 'Waar kan ik aquafaba kopen in Duitsland?', a: 'Op Amazon, via de twee producten op deze pagina: de 1 L Tetrapak vloeibaar en het zakje van 200 g poeder.' },
      { q: 'Hoeveel eieren vervangt een 1 L Tetrapak bij het bakken?', a: '{eggs_1l} hele eieren van elk {egg_liquid} g, of {liquid_1l_whites} eiwitten van {white_liquid} g. Verminder de andere vloeistoffen met {reduce_liquids} procent als u hele eieren vervangt.' },
      { q: 'Koopt een bakkerij het vloeibare product of het poeder?', a: 'Het vloeibare product als eivrij bakken elke dag voorkomt, want een geopende Tetrapak wordt binnen {opened_days} dagen gebruikt. Het poeder voor af en toe een vegan bestelling, want een geopend zakje bederft niet. Veel bakkerijen houden beide.' },
      { q: 'Hoe krijg ik de grote formaten?', a: 'Via het formulier op deze pagina: de bag-in-box, de IBC en de zak van 3 kg worden per project geprijsd, met de technische fiche.' },
    ],
    links: [
      { href: '{pastry_href}', label: 'Banketbakkerij en bakkerij' },
      { href: '{baking_href}', label: 'Bakken: vloeibaar of poeder?' },
      { href: '{reconstitution_href}', label: 'Poeder aanmaken: de regel per eiwit' },
      { href: '{index_href}', label: 'Alle toepassingsgidsen' },
      { href: '{products_href}', label: 'Producten en formaten' },
    ],
  },

  netherlands: {
    inCountry: 'in Nederland',
    title: 'Aquafaba in Nederland - VERY AQUAFABA',
    h1: 'Hoe u VERY AQUAFABA krijgt in Nederland',
    crumb: 'Nederland',
    description: 'VERY AQUAFABA in Nederland: nog geen webshop, maar schrijf ons en wij regelen het. Hoe u bestelt, hoeveel u aanvraagt, en vloeibaar of poeder.',
    lead: 'Een vegan cake die rijst, een meringue die houdt, een mousse die opstijft: VERY AQUAFABA is aquafaba van kikkererwten, een plantaardig eiwit dat opklopt, bindt en emulgeert zoals het echte. We liggen nog niet in een Nederlandse webshop, dus voorlopig krijgt u het door ons te schrijven. Vertel ons wat u bakt en ongeveer hoeveel, en wij komen terug met de formaten, de technische fiche en een offerte.',
    sections: [
      {
        id: 'order',
        title: 'Zo bestelt u in Nederland',
        html: `<p>Vertel ons over uw bakkerij of keuken, en wij nemen het van daar over. Zo bestelt u aquafaba bij ons:</p>
<ol>
<li><strong>Schrijf ons wat u bakt en ongeveer hoeveel per maand.</strong> Het formulier onderaan deze pagina vraagt om uw bedrijf, de toepassing en een geschat maandvolume. Een regel over het project helpt.</li>
<li><strong>Wij antwoorden met de formaten die we u kunnen sturen, de technische fiche en een offerte,</strong> inclusief de minimale bestelling en de levertijd voor uw volume.</li>
<li><strong>U bestelt.</strong> Gesloten zijn de verpakkingen minimaal {unopened_months} maanden houdbaar op kamertemperatuur, dus een eerste bestelling kan in de droge opslag wachten tot de volgende vegan vraag binnenkomt.</li>
</ol>
<p>Een Amazon-vermelding voor Nederland en België is gepland. Zodra die live is, linkt deze pagina ernaar.</p>`,
      },
      {
        id: 'howmuch',
        title: 'Hoeveel moet u aanvragen?',
        html: `<p>Een ruwe maandschatting is alles wat we nodig hebben. Voor een bakkerij is de eenvoudigste weg de eieren tellen die u zou vervangen: één heel ei is {egg_liquid} g aquafaba, één eiwit {white_liquid} g. Een bakkerij die dertig eieren per dag vervangt, zit rond {eggs_30_day_l} liter per maand; een batch meringue is {meringue_dose} g. Rekent u liever niet zelf, dan rekent de <a href="{baking_calc_href}">vervangingsrekenhulp</a> een heel recept om.</p>
<p>Om een idee van de schaal te geven: een 1 L Tetrapak vervangt {eggs_1l} hele eieren of {liquid_1l_whites} eiwitten, dat zijn {meringue_batches_1l} batches meringue. Een zakje van 200 g poeder vervangt {powder_200g_whites} eiwitten. Een bakkerij met elke dag een eivrije lijn gebruikt een Tetrapak in een paar dagen op; een bakkerij met af en toe een vegan bestelling is beter af met een zakje.</p>`,
      },
      {
        id: 'format',
        title: 'Vloeibaar of poeder: wat vraagt u aan?',
        html: `<p>Het is dezelfde aquafaba in twee toestanden. Het vloeibare product gaat rechtstreeks de mixer in en staat na het openen {opened_days} dagen in de koelkast. Het poeder wordt met water gemengd wanneer u het nodig hebt, {white_powder} g en {white_water} ml per eiwit, en een geopend zakje blijft goed tot u het nodig hebt, droog en gesloten.</p>
<p>Voor een dagelijkse eivrije lijn vraagt u vloeibaar aan: de verpakking rouleert ruim binnen haar {opened_days} dagen. Voor af en toe een vegan bestelling vraagt u poeder aan: er bederft niets tussen twee bestellingen. Veel bakkerijen houden beide. Eén ding om te weten als u hele eieren vervangt: aquafaba brengt meer water mee dan een ei, dus breng de andere vloeistoffen {reduce_liquids} procent omlaag. De <a href="{baking_href}">bakgids</a> behandelt het baksel voor baksel, en de <a href="{pastry_href}">pagina banketbakkerij en bakkerij</a> plant de week rond wat houdbaar blijft.</p>`,
      },
    ],
    faq: [
      { q: 'Kan ik vandaag aquafaba kopen in Nederland?', a: 'Nog niet in een winkel. Schrijf ons via het formulier op deze pagina wat u bakt en uw geschatte maandvolume, en wij antwoorden met de formaten, de technische fiche en een offerte.' },
      { q: 'Komt VERY AQUAFABA op Amazon in Nederland?', a: 'Ja, een Amazon-vermelding voor Nederland en België is gepland. Deze pagina linkt ernaar zodra ze live is.' },
      { q: 'Is er een minimale bestelling?', a: 'Dat hangt af van het formaat en het volume, dus het komt met de offerte. Vertel ons wat u bakt en hoeveel per maand, en u krijgt de minimale bestelling en de levertijd samen met de technische fiche.' },
      { q: 'Hoeveel eieren vervangt een 1 L Tetrapak?', a: '{eggs_1l} hele eieren van elk {egg_liquid} g, of {liquid_1l_whites} eiwitten van {white_liquid} g. Verminder de andere vloeistoffen met {reduce_liquids} procent als u hele eieren vervangt.' },
      { q: 'Vraagt een bakkerij vloeibaar of poeder aan?', a: 'Vloeibaar voor een dagelijkse eivrije lijn, want een geopende Tetrapak wordt binnen {opened_days} dagen gebruikt. Poeder voor af en toe een vegan bestelling, want een geopend zakje bederft niet. Veel bakkerijen houden beide.' },
    ],
    links: [
      { href: '{pastry_href}', label: 'Banketbakkerij en bakkerij' },
      { href: '{baking_href}', label: 'Bakken: vloeibaar of poeder?' },
      { href: '{baking_calc_href}', label: 'Vervangingsrekenhulp' },
      { href: '{products_href}', label: 'Producten en formaten' },
    ],
  },
};
