// Schuimpagina's, Nederlands (oktober 2026): de hub over cocktailfoamers en de drie reeksen
// eronder, onder de cocktailgids. Zelfde sleutels, zelfde sectie-id's, zelfde {tokens} en zelfde
// links als foam.en.js. Elk cijfer komt als {token} uit facts.json; de concurrenten staan er
// alleen met hun gepubliceerde etiket, nooit gelinkt. Geen gedachtestreepje, aanspreekvorm u,
// aquafaba is een de-woord. Woordenschat van cocktails.nl.js (shaker, dry shake, kraag, afzeven).

export default {
  labels: {
    eyebrow: 'Cocktailfoamer',
    checked: 'oktober 2026',
    imbibeDate: 'april 2025',
    doses: {
      fee: '4 tot 6 dashes per drankje',
      msb: '6 tot 8 druppels per drankje',
      wonderfoam: '3 tot 6 druppels per drankje',
      vegg: '1:1 in plaats van eiwit',
    },
    table: {
      heads: ['Foamer', 'Wat het etiket vermeldt', 'Alcohol', 'Vermelde allergenen', 'Bron'],
      values: {
        'Not stated': 'Niet vermeld',
        'None listed': 'Geen vermeld',
        'None of the 14 EU allergens': 'Geen van de 14 EU-allergenen',
        'Soy': 'Soja',
        'Product label': 'Productetiket',
        'Imbibe, April 2025': 'Imbibe, april 2025',
      },
      ingredients: {
        very: 'Water, kikkererwten. Geen additieven, geen conserveermiddelen.',
        vegg: 'Water, emulgatoren, methylcellulose, esters van vetzuren, sojalecithine, verdikkingsmiddelen, maltodextrine, xanthaangom, acaciagom, conserveermiddel E211, antioxidant ascorbinezuur',
        fee: 'Water, propyleenglycol (E1520), polysorbaat 80 (E433), kaliumsorbaat (E202), natriumbenzoaat (E211), citroenzuur, citroenextract',
        foamee: 'Plantaardig saponine-extract, water, citroenzuur',
        wonderfoam: 'Quillaja-extract, water, Arabische gom, gemodificeerd zetmeel (E1450), natriumbenzoaat, kaliumsorbaat',
        msb: 'Alcohol (40%), biologische rietsuiker, natuurlijk aroma-extract, botanische extracten, kruiden',
        yanni: 'Een plantaardige alcoholische emulsie',
        fancy: 'Gemodificeerd maïszetmeel',
        pfaff: 'Tapiocastroop, Arabische gom, polysorbaat 80',
        foammagic: 'Maltodextrine, methylcellulose, xanthaangom',
      },
    },
  },

  pages: {
    'cocktail-foamer': {
      title: 'Aquafaba als cocktailfoamer voor sours | VERY AQUAFABA',
      h1: 'Aquafaba als cocktailfoamer voor sours',
      crumb: 'Cocktailfoamer',
      description: 'VERY AQUAFABA is een cocktailfoamer van water en kikkererwten: {dose} ml per drankje, eerst een dry shake, dan opnieuw shaken met ijs.',
      lead: `Vraag een bartender waarom eiwit nog altijd een plek heeft in een sour, en het antwoord staat meestal bovenop het glas: een dikke witte kraag, stevig genoeg om de garnering te dragen. VERY AQUAFABA geeft u een alternatief op basis van aquafaba, met {dose} ml per drankje en dezelfde dry shake, gevolgd door een shake met ijs. Maakt u al sours, dan kent u de techniek. De echte vragen zijn wat er in de foamer zit, hoe hij in uw recept past en welk formaat klopt bij het aantal cocktails dat u schenkt.`,
      sections: [
        { id: 'swap', title: 'Vervang het eiwit, houd de methode', html: `<p>Verder hoeft er niets te verschuiven in de opbouw. De sterkedrank, het citrussap, de siroop, het glas en de garnering blijven waar ze zijn. Gebruik <b>{dose} ml VERY AQUAFABA</b> in plaats van het eiwit, geef eerst een dry shake, voeg dan het ijs toe en shake opnieuw.</p>
<p>Maakt u nu sours met eiwit, dan voelt de <a href="{how_to_make_page_href}">methode voor elke sour</a> vanaf de eerste bestelling vertrouwd.</p>` },
        { id: 'sour', title: 'Wat aquafaba in een sour kan', html: `<p>Aquafaba wordt al gebruikt als alternatief voor eiwit, om het schuim dat hij aan een geshakete cocktail geeft.</p>
<p>In {imbibe_date} <a href="{imbibe_url}">testte Imbibe zes vegan cocktailfoamers</a>. Het product op basis van aquafaba kreeg in die test de omschrijving “{imbibe_quote}”, met een dicht, romig schuim en extra body. Die test ging over een ander product, niet over VERY AQUAFABA, maar hij laat zien waarom aquafaba zelf achter de bar bruikbaar is geworden.</p>
<p>VERY AQUAFABA wordt gemaakt van aquafaba, met water en kikkererwten op het etiket. De licht geroosterde toets die het in de verpakking heeft, van het koken van de kikkererwten, verdwijnt zodra het in een drankje geshaket is.</p>` },
        { id: 'label', title: 'Een foamer zonder additieven', html: `<p>Draai de verpakking om en de ingrediëntenlijst is kort: <b>water en kikkererwten</b>, zonder additieven en zonder conserveermiddelen.</p>
<p>Andere cocktailfoamers pakken het anders aan, met onder meer emulgatoren, gommen, cellulose, conserveermiddelen of plantenextracten. Tellen de ingrediënten voor uw bar, dan kunt u <a href="{foamer_ingredients_href}">de etiketten van cocktailfoamers naast elkaar vergelijken</a> en elk product toetsen aan zijn eigen gepubliceerde etiket.</p>` },
        { id: 'can', title: 'Waarom niet gewoon een blik openen?', html: `<p>Het vocht in een blik kikkererwten is ook aquafaba, maar het is niet voor de bar verpakt.</p>
<p>Het ene blik is het andere niet: verschillende producten geven u een ander vocht om mee te werken, en u moet nog altijd openen, afgieten en een bestemming vinden voor de kikkererwten. VERY AQUAFABA geeft u een duidelijk omschreven product en een vaste dosis van <b>{dose} ml per drankje</b>, klaar om uit de koelkast te schenken.</p>
<p>Voor de service betekent dat één recept dat iedereen achter de bar kan volgen, in plaats van bij te sturen naar het blik dat toevallig open staat.</p>` },
        { id: 'packs', title: 'Elke avond sours, of een paar per week?', html: `<p>Een <b>1 L Tetrapak is goed voor {drinks_1l} drankjes</b> van {dose} ml. Eenmaal geopend bewaart u het pak bij <b>{opened_temp} °C</b> en gebruikt u het binnen <b>{opened_days} dagen</b>.</p>
<p>Gaan sours maar af en toe over de bar, dan geeft poeder u meer speelruimte. Een <b>zakje van 200 g is goed voor {drinks_200g} drankjes</b>, met <b>{powder} g poeder en {water} ml water per drankje</b>, en een geopend zakje blijft droog en gesloten goed tot de houdbaarheidsdatum.</p>
<p>Voor bars die veel grotere volumes schenken, is VERY AQUAFABA ook verkrijgbaar als <a href="{bulk_foamer_href}">bag-in-box van 10 L en als zak poeder van 3 kg</a>.</p>` },
      ],
      faq: [
        { q: 'Wat is een cocktailfoamer?', a: 'Het ingrediënt dat de witte schuimkraag op een geshakete sour maakt. Eiwit is de traditionele keuze. VERY AQUAFABA gebruikt in plaats daarvan aquafaba, {dose} ml per drankje.' },
        { q: 'Schuimt aquafaba zoals eiwit?', a: 'Aquafaba wordt gebruikt als alternatief voor eiwit in cocktails met schuim. In een test van zes vegan foamers door Imbibe, in {imbibe_date}, kreeg een product op basis van aquafaba de omschrijving “{imbibe_quote}”. Die test is niet met VERY AQUAFABA uitgevoerd.' },
        { q: 'Hoeveel foamer gebruik ik per cocktail?', a: 'Gebruik {dose} ml VERY AQUAFABA vloeibaar per drankje, of {powder} g poeder aangemaakt met {water} ml water.' },
        { q: 'Zit er alcohol in VERY AQUAFABA?', a: 'Nee. VERY AQUAFABA bevat water en kikkererwten, dus het product zelf voegt geen alcohol toe aan het drankje.' },
        { q: 'Smaakt het naar kikkererwten?', a: 'In de verpakking heeft VERY AQUAFABA een licht geroosterde toets van het koken van de kikkererwten. Eenmaal geshaket in een drankje verdwijnt die: het schuim heeft geen eigen smaak, en de smaak blijft bij de sterkedrank, het citrussap, de siroop en de andere ingrediënten van uw cocktail.' },
        { q: 'Waar koop ik VERY AQUAFABA voor mijn bar?', a: 'U kunt [aquafaba voor cocktails kopen]({where_to_buy_page_href}) via Amazon in de Verenigde Staten en Duitsland, via InstantChef in Frankrijk, en overal elders via het aanvraagformulier.' },
      ],
    },

    'foamer-ingredients': {
      title: 'Wat zit er in uw cocktailfoamer? | VERY AQUAFABA',
      h1: 'Wat zit er in uw cocktailfoamer?',
      crumb: 'Ingrediënten van foamers',
      description: 'Vergelijk de ingrediënten van cocktailfoamers naast elkaar. VERY AQUAFABA vermeldt water en kikkererwten, zonder additieven of conserveermiddelen.',
      lead: `Draai de fles om. VERY AQUAFABA vermeldt alleen water en kikkererwten, zonder additieven en zonder conserveermiddelen. Andere cocktailfoamers kiezen een andere weg naar hetzelfde resultaat. Sommige gebruiken gommen, emulgatoren, zetmeel of plantenextracten, en sommige bevatten alcohol. De tabel hieronder zet de etiketten naast elkaar, zodat u ziet wat elk product werkelijk vermeldt.`,
      sections: [
        { id: 'labels', title: 'De etiketten naast elkaar', html: `{labels_all}
<p><b>Etiketten gecontroleerd: {labels_checked}.</b></p>
<p>De receptuur van een product kan veranderen, dus elke bron wordt opnieuw gecontroleerd voordat deze vergelijking wordt bijgewerkt.</p>` },
        { id: 'look', title: 'Waar let u op bij het etiket van een foamer?', html: `<p><b>Wat het schuim maakt.</b> Bij VERY AQUAFABA komt het schuimende ingrediënt uit de kikkererwt zelf. Bij verschillende foamers hierboven vermeldt het etiket in plaats daarvan ingrediënten zoals methylcellulose, polysorbaat 80, saponine-extract of gemodificeerd zetmeel.</p>
<p><b>Of het product alcohol bevat.</b> Ms. Better's vermeldt {msb_abv}% alcohol en Dr Yanni's {yanni_abv}%. VERY AQUAFABA bevat geen alcohol, dus het product zelf voegt geen alcohol toe aan het drankje.</p>
<p><b>Welke allergenen vermeld worden.</b> VEGG White vermeldt soja. Kikkererwt hoort niet bij de {eu_allergens} allergenen die volgens de <a href="{eu_rules_href}">EU-regels voor voedselinformatie</a> vermeld moeten worden, maar wie een bekende allergie voor kikkererwten of peulvruchten heeft, moet het product toch vermijden.</p>` },
        { id: 'try', title: 'Probeer het in een sour die u al maakt', html: `<p>U hebt geen nieuw cocktailrecept nodig om VERY AQUAFABA te proberen.</p>
<p>Gebruik <b>{dose} ml per drankje</b>, geef een dry shake en shake daarna met ijs. Een <b>1 L Tetrapak is goed voor {drinks_1l} drankjes</b> en wordt eenmaal geopend binnen <b>{opened_days} dagen bij {opened_temp} °C</b> gebruikt. Schenkt u maar af en toe een sour, dan is een <b>zakje van 200 g goed voor {drinks_200g} drankjes</b>, en eenmaal geopend blijft het droog en gesloten goed tot de houdbaarheidsdatum op het zakje.</p>
<p>Begin met iets dat al op uw kaart staat, zoals een <a href="{pisco_sour_href}">pisco sour</a>, en vergelijk het resultaat in een cocktail die u door en door kent.</p>` },
      ],
      faq: [
        { q: 'Welke cocktailfoamer heeft geen additieven?', a: 'VERY AQUAFABA vermeldt alleen water en kikkererwten, zonder additieven en zonder conserveermiddelen.' },
        { q: 'Bevat VERY AQUAFABA conserveermiddelen?', a: 'Nee. Het etiket vermeldt water en kikkererwten. Ongeopende verpakkingen blijven minstens {unopened_months} maanden goed op kamertemperatuur. Eenmaal geopend bewaart u vloeibaar product bij {opened_temp} °C en gebruikt u het binnen {opened_days} dagen.' },
        { q: 'Is VERY AQUAFABA veganistisch?', a: 'VERY AQUAFABA zelf is plantaardig. De andere ingrediënten van een afgewerkte cocktail hebben hun eigen etiket, en die controleert u apart.' },
        { q: 'Welke foamers bevatten alcohol?', a: "In de vergelijking hierboven vermeldt Ms. Better's {msb_abv}% alcohol en Dr Yanni's {yanni_abv}%. VERY AQUAFABA bevat geen alcohol." },
      ],
    },

    'aquafaba-vs-chickpea-water': {
      title: 'Is aquafaba gewoon kikkererwtenvocht? | VERY AQUAFABA',
      h1: 'Is aquafaba gewoon kikkererwtenvocht?',
      crumb: 'Aquafaba of kikkererwtenvocht?',
      description: 'Aquafaba begint als kookvocht van kikkererwten. Vergelijk het vocht uit een blik met VERY AQUAFABA: dosering, voorbereiding en service achter de bar.',
      lead: `Ja. Aquafaba is het kookvocht van kikkererwten, dus het vocht in een blik en VERY AQUAFABA hebben dezelfde basis. Het verschil achter de bar zit in hoe u ermee werkt. Een blik moet open en uitgelekt worden, en het vocht kan verschillen per product dat u koopt. VERY AQUAFABA komt als een duidelijk omschreven product met een vaste dosis van {dose} ml per drankje, klaar om uit de koelkast te schenken.`,
      sections: [
        { id: 'compare', title: 'Een blik of een pak', html: `<table class="va-guide-grid va-guide-grid--compare">
<thead><tr><th scope="col"></th><th scope="col">Een blik kikkererwten</th><th scope="col">VERY AQUAFABA</th></tr></thead>
<tbody>
<tr><td data-label="">Van het ene product tot het andere</td><td data-label="Een blik kikkererwten">Kan verschillen per merk en per partij</td><td data-label="VERY AQUAFABA">Een duidelijk omschreven product en een vaste dosis</td></tr>
<tr><td data-label="">Voor het in de shaker gaat</td><td data-label="Een blik kikkererwten">Openen, afgieten en soms verder voorbereiden</td><td data-label="VERY AQUAFABA">{dose} ml uit de koelkast schenken</td></tr>
<tr><td data-label="">Wat er overblijft</td><td data-label="Een blik kikkererwten">De kikkererwten</td><td data-label="VERY AQUAFABA">Niets</td></tr>
<tr><td data-label="">Op het etiket</td><td data-label="Een blik kikkererwten">Hangt af van het blik</td><td data-label="VERY AQUAFABA">Water en kikkererwten</td></tr>
<tr><td data-label="">Eenmaal geopend</td><td data-label="Een blik kikkererwten">Hangt af van het product</td><td data-label="VERY AQUAFABA">Vloeibaar: {opened_days} dagen bij {opened_temp} °C. Poeder: blijft droog en gesloten goed tot de houdbaarheidsdatum</td></tr>
</tbody>
</table>` },
        { id: 'service', title: 'Waarom dat tijdens de service telt', html: `<p>Eén sour bijsturen is makkelijk. Veertig midden in een drukke service vergeven veel minder.</p>
<p>Met het vocht uit een blik moet u zich soms aanpassen aan wat u net hebt geopend. Met VERY AQUAFABA werkt iedereen met dezelfde <b>dosis van {dose} ml per drankje</b>. Zo schrijft u makkelijker één recept, richt u het station daarop in en kunt u <a href="{pre_batching_page_href}">de rest van de sour pre-batchen</a>, terwijl de aquafaba apart blijft voor de shake.</p>
<p>Het schuim maakt u nog steeds cocktail per cocktail. Het voordeel is dat u de dosis niet bij elk nieuw blik opnieuw hoeft uit te vinden.</p>` },
      ],
      faq: [
        { q: 'Kan ik het vocht uit een blik kikkererwten in cocktails gebruiken?', a: 'Ja. Het kookvocht van kikkererwten is aquafaba. Hoe het zich gedraagt, kan per product verschillen, en sommige bartenders bereiden of reduceren het voor gebruik. VERY AQUAFABA wordt geleverd met een vaste dosis van {dose} ml per drankje.' },
        { q: 'Is kikkererwtenvocht hetzelfde als aquafaba?', a: 'Aquafaba is het kookvocht van kikkererwten. VERY AQUAFABA is een aquafabaproduct van water en kikkererwten, geleverd om direct te gebruiken of als poeder.' },
        { q: 'Smaakt aquafaba naar kikkererwten?', a: 'In de verpakking heeft VERY AQUAFABA een licht geroosterde toets van het koken van de kikkererwten. Eenmaal geshaket in een drankje verdwijnt die: het schuim heeft geen eigen smaak, en de smaak van de cocktail blijft bij de andere ingrediënten.' },
        { q: 'Waar koop ik aquafaba voor cocktails?', a: 'U kunt [aquafaba voor cocktails kopen]({where_to_buy_page_href}) via Amazon in de Verenigde Staten en Duitsland, via InstantChef in Frankrijk, en overal elders via het aanvraagformulier.' },
      ],
    },

    'is-aquafaba-an-allergen': {
      title: 'Is aquafaba een allergeen? | VERY AQUAFABA',
      h1: 'Is aquafaba een allergeen?',
      crumb: 'Is aquafaba een allergeen?',
      description: 'Kikkererwt hoort niet bij de {eu_allergens} allergenen die in de EU verplicht op het etiket staan. VERY AQUAFABA bevat geen eieren, zuivel, gluten of soja.',
      lead: `Volgens de EU-regels voor voedselinformatie hoort kikkererwt niet bij de {eu_allergens} allergenen die vermeld moeten worden. VERY AQUAFABA bevat geen eieren, zuivel, gluten of soja. Dat betekent niet dat kikkererwten geen allergische reactie kunnen veroorzaken. Wie een bekende allergie voor kikkererwten of peulvruchten heeft, moet het product vermijden. Voor een bar is het onderscheid eenvoudig: VERY AQUAFABA zelf bevat geen ei, maar elke afgewerkte cocktail moet nog altijd ingrediënt per ingrediënt bekeken worden.`,
      sections: [
        { id: 'eu', title: 'Hoort kikkererwt bij de {eu_allergens} EU-allergenen?', html: `<p>De <a href="{eu_rules_href}">EU-regels voor voedselinformatie</a> noemen {eu_allergens} allergenen die vermeld moeten worden, waaronder eieren, soja, pinda's en lupine. <b>Kikkererwt staat niet op die lijst.</b></p>
<p>Dat zegt iets over de plaats van kikkererwt binnen de verplichte allergenenetikettering in de EU. Het betekent niet dat een allergie voor kikkererwten onmogelijk is.</p>
<p>Vertelt een gast u dat hij allergisch is voor kikkererwten of peulvruchten, neem dat dan serieus en volg uw gewone allergenenprocedure.</p>` },
        { id: 'egg', title: 'En gasten die geen ei mogen?', html: `<p>VERY AQUAFABA zelf bevat <b>geen ei</b>.</p>
<p>Is het eiwit het ingrediënt waardoor iemand een bepaalde sour niet kan bestellen, dan haalt u met VERY AQUAFABA in plaats van het eiwit het ei uit het schuimende ingrediënt. De rest van de cocktail moet nog apart gecontroleerd worden, ook de sterkedrank, de siropen en de garnering.</p>
<p>Kruiscontact en werkwijze hangen ook af van hoe uw eigen bar werkt, dus volg de allergenenprocedure die in uw zaak al geldt.</p>` },
        { id: 'taste', title: 'Smaakt het naar kikkererwten?', html: `<p>Puur uit het pak heeft VERY AQUAFABA een licht geroosterde toets van het koken van de kikkererwten. Geshaket in een drankje verdwijnt die: het schuim heeft geen eigen smaak.</p>
<p>Met <b>{dose} ml per drankje</b> bouwt het het schuim op, terwijl de smaak uit de sterkedrank, het citrussap, de siroop en de rest van de cocktail komt.</p>` },
      ],
      faq: [
        { q: 'Hoort kikkererwt bij de {eu_allergens} EU-allergenen?', a: 'Nee. Kikkererwt hoort niet bij de {eu_allergens} allergenen van de verplichte allergenenetikettering in de EU. Het kan wel allergische reacties veroorzaken, vooral bij iemand met een bekende allergie voor kikkererwten of peulvruchten.' },
        { q: 'Bevat VERY AQUAFABA ei?', a: 'Nee. VERY AQUAFABA bevat water en kikkererwten, en geen ei.' },
        { q: 'Kan iemand met een eiallergie een cocktail met aquafaba drinken?', a: 'VERY AQUAFABA zelf bevat geen ei. Of een afgewerkte cocktail geschikt is, hangt af van de andere ingrediënten en van de bereiding, dus controleer de hele cocktail en volg de allergenenprocedure van uw zaak.' },
        { q: 'Ruikt aquafaba?', a: 'In de verpakking heeft VERY AQUAFABA een licht geroosterde toets van het koken van de kikkererwten. Zodra het in een drankje geshaket is, verdwijnt die toets.' },
        { q: 'Welke cocktailfoamers vermelden soja?', a: 'In onze vergelijking vermeldt VEGG White soja. U kunt [de ingrediënten van cocktailfoamers vergelijken]({foamer_ingredients_href}), naast elkaar.' },
      ],
    },

    'bulk-foamer': {
      title: 'Cocktailfoamer in bulk: 10 L of 3 kg | VERY AQUAFABA',
      h1: 'Cocktailfoamer in bulk: 10 L vloeibaar of 3 kg poeder?',
      crumb: 'Cocktailfoamer in bulk',
      description: 'VERY AQUAFABA in bulk: 10 L vloeibaar is goed voor {drinks_10l} drankjes en een zak poeder van 3 kg voor {drinks_3kg}. Kies naar het aantal sours dat u schenkt.',
      lead: `Wie de hele avond sours schenkt uit pakken van 1 L, opent heel wat pakken. Voor grotere volumes bestaat VERY AQUAFABA in twee grotere formaten: de bag-in-box van 10 L is goed voor {drinks_10l} drankjes van {dose} ml, de zak poeder van 3 kg voor {drinks_3kg}. De juiste keuze hangt minder af van de totale grootte van de verpakking dan van hoe snel uw bar ze opmaakt.`,
      sections: [
        { id: 'finish', title: 'Krijgt u 10 L op tijd op?', html: `<p>Eenmaal geopend bewaart u een <b>bag-in-box van 10 L bij {opened_temp} °C en gebruikt u hem binnen {opened_days} dagen</b>.</p>
<p>Over die periode komen {drinks_10l} drankjes ongeveer neer op:</p>
<ul>
<li><b>{bib_day3} sours per dag</b> over {open_min} dagen</li>
<li><b>{bib_day4} sours per dag</b> over {open_max} dagen</li>
</ul>
<p>Zit uw service regelmatig rond dat niveau, dan geeft het formaat van 10 L u vloeibare aquafaba klaar om te schenken, zonder dat u steeds een nieuw pak van 1 L moet openen.</p>
<p>Ligt uw dagvolume daar ruim onder, dan gaat de klok van de geopende verpakking zwaarder wegen dan de grootte ervan.</p>` },
        { id: 'between', title: 'En als u tussen 1 L en 10 L in zit?', html: `<p>Niet elke bar past netjes binnen de grenzen van een verpakking.</p>
<p>Een <b>1 L Tetrapak is goed voor {drinks_1l} drankjes</b>, dus ongeveer <b>{l1_day_range} drankjes per dag</b> als u het pak binnen {opened_days} dagen wilt opmaken.</p>
<p>Een bag-in-box van 10 L legt die grens hoger, rond <b>{bib_day_range} drankjes per dag</b>.</p>
<p>Zit u ergens tussen de twee, dan hangt de keuze af van hoe constant uw service is. Meerdere pakken van 1 L kunnen zinvol zijn als de volumes voorspelbaar zijn. Poeder is logischer als het aantal sours sterk wisselt van dag tot dag.</p>` },
        { id: 'powder', title: 'Wanneer poeder logischer is', html: `<p>De <b>zak van 3 kg is goed voor {drinks_3kg} drankjes</b>, met <b>{powder} g poeder en {water} ml water per drankje</b>.</p>
<p>Anders dan bij geopend vloeibaar product hoeft u een geopende zak niet binnen {opened_days} dagen op te maken. Houd hem droog en gesloten, dan blijft hij goed tot de houdbaarheidsdatum op de zak. Zo maakt u aan wat een service nodig heeft, in plaats van u vast te leggen op een geopende bag-in-box van 10 L.</p>
<p>Maak vóór de service de hoeveelheid aan die u nodig hebt en houd de aangemaakte aquafaba gekoeld.</p>` },
        { id: 'pattern', title: 'De verpakking volgens uw service', html: `<table class="va-guide-grid">
<thead><tr><th scope="col">Uw service</th><th scope="col">Te overwegen verpakking</th><th scope="col">Waarom</th></tr></thead>
<tbody>
<tr><td data-label="Uw service">Rond {l1_day_range} sours per dag</td><td data-label="Te overwegen verpakking">1 L Tetrapak</td><td data-label="Waarom">{drinks_1l} drankjes, genoeg om het pak binnen {opened_days} dagen op te maken</td></tr>
<tr><td data-label="Uw service">Tussen de grenzen van de vloeibare verpakkingen</td><td data-label="Te overwegen verpakking">Meerdere pakken van 1 L of poeder</td><td data-label="Waarom">Hangt af van hoe constant uw volume is</td></tr>
<tr><td data-label="Uw service">Rond {bib_day_range} sours per dag</td><td data-label="Te overwegen verpakking">Bag-in-box van 10 L</td><td data-label="Waarom">{drinks_10l} drankjes, genoeg om de verpakking binnen {opened_days} dagen op te maken</td></tr>
<tr><td data-label="Uw service">Volume wisselt sterk van dag tot dag</td><td data-label="Te overwegen verpakking">Poeder</td><td data-label="Waarom">Maak aan wat u nodig hebt; een geopende zak blijft droog en gesloten goed tot de houdbaarheidsdatum</td></tr>
</tbody>
</table>
<p>De tabel is een vertrekpunt, geen regel. Een zaak met erg wisselende volumes kiest misschien ook bij een hoger gemiddelde voor poeder, terwijl een bar met een heel voorspelbare service vloeibaar makkelijker kan vinden.</p>` },
      ],
      faq: [
        { q: 'Hoeveel drankjes haal ik uit een bag-in-box van 10 L?', a: '{drinks_10l} drankjes van {dose} ml. Eenmaal geopend bewaart u de bag-in-box bij {opened_temp} °C en gebruikt u hem binnen {opened_days} dagen.' },
        { q: 'Hoeveel drankjes haal ik uit een zak van 3 kg?', a: 'Een zak van 3 kg is goed voor {drinks_3kg} drankjes, met {powder} g poeder aangemaakt met {water} ml water per drankje. Droog en gesloten blijft een geopende zak goed tot de houdbaarheidsdatum.' },
        { q: 'Wanneer is 10 L zinvol voor een bar?', a: 'Om {drinks_10l} drankjes binnen {opened_days} dagen te schenken, zit u op ongeveer {bib_day_range} sours per dag. Daaronder vergelijkt u de vloeibare formaten met poeder, op basis van hoe voorspelbaar uw service is.' },
        { q: 'Neem ik beter meerdere pakken van 1 L of één bag-in-box van 10 L?', a: 'Kijk hoeveel sours u werkelijk schenkt binnen {opened_days} dagen. Een pak van 1 L dekt {drinks_1l} drankjes, een bag-in-box van 10 L {drinks_10l}. Valt uw volume tussen die grenzen, dan passen meerdere pakken van 1 L of poeder misschien beter.' },
        { q: 'Hoe bestel ik grote volumes?', a: 'Gebruik het professionele aanvraagformulier en vermeld hoeveel vestigingen u hebt, ongeveer hoeveel drankjes u schenkt en welke formaten u overweegt. Dan kunnen wij de relevante technische informatie met ons antwoord meesturen.' },
      ],
    },

    'egg-white-alternative': {
      title: 'Alternatief voor eiwit in cocktails | VERY AQUAFABA',
      h1: 'Wat kan ik gebruiken in plaats van eiwit in cocktails?',
      crumb: 'Alternatief voor eiwit',
      description: 'Gebruik {dose} ml VERY AQUAFABA in plaats van het eiwit in een sour: dezelfde opbouw, dezelfde dry shake, hetzelfde glas, en geen ei om te breken.',
      lead: `In de meeste sourrecepten achter de bar staat nog altijd "één eiwit", en dat is de enige regel die u hoeft te veranderen. Haal het eiwit eruit en zet er {dose} ml VERY AQUAFABA voor in de plaats. De sterkedrank, het citrussap, de siroop, de dry shake, de shake met ijs en het glas blijven zoals ze zijn, dus de cocktail die u vanavond serveert, is de cocktail van vorige week, zonder het ei.`,
      sections: [
        { id: 'swap', title: 'Eén regel van het recept verandert', html: `<ol>
<li>Bouw de cocktail op zoals altijd: sterkedrank, citrussap en siroop in de shaker.</li>
<li>Waar het recept één eiwit vraagt, schenkt u <b>{dose} ml VERY AQUAFABA</b>, rechtstreeks uit de koelkast.</li>
<li>Shake stevig zonder ijs om het schuim op te bouwen.</li>
<li>Voeg het ijs toe en shake opnieuw om de cocktail te koelen.</li>
<li>Zeef af in het glas en garneer zoals gewoonlijk.</li>
</ol>
<p>In een sour doseert u VERY AQUAFABA per drankje en niet per ei, dus dezelfde {dose} ml gaat erin, welk recept het ook is. De <a href="{how_to_make_page_href}">methode voor elke sour</a> loopt de twee shakes cocktail per cocktail door.</p>` },
        { id: 'station', title: 'Wat er aan het station verandert', html: `<p>De cocktail blijft dezelfde; het werk eromheen wordt korter. Er valt niets te breken of te scheiden, en er liggen geen dooiers te wachten tot ze opgebruikt worden. U schenkt de aquafaba of meet hem af met de jigger, zoals elke andere vloeistof, en hij gaat koud de shaker in.</p>
<p>Ongeopende verpakkingen blijven minstens <b>{unopened_months} maanden</b> goed op kamertemperatuur. Een geopend pak van 1 L staat in de koelkast bij <b>{opened_temp} °C</b>, wordt binnen <b>{opened_days} dagen</b> gebruikt en is goed voor {drinks_1l} drankjes. Shaket u maar een paar sours per week, dan maakt het zakje van 200 g er {drinks_200g}, met {powder} g poeder in {water} ml water per drankje, en eenmaal geopend blijft het droog en gesloten goed tot de houdbaarheidsdatum op het zakje.</p>` },
        { id: 'menu', title: 'De hele sourkaart omzetten', html: `<p>Houd uw pre-batch zoals hij is: sterkedrank, citrussap en siroop vóór de service in één fles. De aquafaba blijft uit de fles en gaat bij de shake in elke shaker, cocktail per cocktail, zodat u <a href="{pre_batching_page_href}">uw sours kunt pre-batchen</a> precies zoals u nu doet.</p>
<p>Begin met één sour die u al verkoopt, vervang het eiwit en proef hem naast het oude recept. De <a href="{pisco_sour_href}">pisco sour</a> is een goede eerste test: dezelfde opbouw, hetzelfde glas, en de kraag moet een garnering dragen.</p>` },
        { id: 'egg', title: 'Gasten die naar ei vragen', html: `<p>VERY AQUAFABA bevat geen ei, dus het schuim zelf brengt geen ei meer in de cocktail. De rest van de cocktail moet nog ingrediënt per ingrediënt gecontroleerd worden, en wie een bekende allergie voor kikkererwten of peulvruchten heeft, moet het vermijden. <a href="{is_aquafaba_an_allergen_href}">Beantwoord de vraag over allergenen</a> met de EU-regels bij de hand, voordat de gast het twee keer moet vragen.</p>` },
      ],
      faq: [
        { q: 'Hoeveel aquafaba vervangt één eiwit in een cocktail?', a: 'Gebruik in een sour {dose} ml VERY AQUAFABA per drankje in plaats van het eiwit, of {powder} g poeder aangemaakt met {water} ml water.' },
        { q: 'Moet ik de rest van mijn recept aanpassen?', a: 'Nee. De sterkedrank, het citrussap, de siroop, de twee shakes en het glas blijven zoals ze zijn. Alleen het eiwit verandert.' },
        { q: 'Schuimt aquafaba zoals eiwit?', a: 'Aquafaba neemt de plaats van het eiwit in een geshakete sour in: dezelfde dry shake, dezelfde shake met ijs, en een witte kraag op de cocktail. Begin met {dose} ml VERY AQUAFABA in een van uw eigen sours en beoordeel het schuim naast de versie met eiwit.' },
        { q: 'Kan ik aquafaba achter de bar bewaren zoals eiwit?', a: 'Bewaar het geopende vloeibare product in de koelkast bij {opened_temp} °C en gebruik het binnen {opened_days} dagen. Ongeopende verpakkingen blijven minstens {unopened_months} maanden goed op kamertemperatuur.' },
        { q: 'Verandert aquafaba de smaak van een sour?', a: 'Nee. In de verpakking heeft VERY AQUAFABA een licht geroosterde toets van het koken van de kikkererwten. Eenmaal geshaket in een drankje verdwijnt die: het schuim heeft geen eigen smaak, en de cocktail houdt de smaak van zijn sterkedrank, citrussap en siroop.' },
      ],
    },

    'alcohol-free-foamer': {
      title: 'Alcoholvrije foamer voor sours en mocktails | VERY AQUAFABA',
      h1: 'Een foamer voor alcoholvrije sours',
      crumb: 'Alcoholvrije foamer',
      description: 'Geen alcohol in VERY AQUAFABA: water en kikkererwten, {dose} ml per sour. Andere foamers vermelden {msb_abv}% of {yanni_abv}%. Wat dat betekent voor uw kaart.',
      lead: `Een alcoholvrije sour wordt net zo goed op zijn kraag beoordeeld als elke andere sour: hetzelfde witte schuim, dezelfde body, en niets in het glas waar een gast die niet drinkt naar hoeft te vragen. VERY AQUAFABA is water en kikkererwten, dus het voegt geen alcohol toe aan het drankje, en het gaat met {dose} ml in de shaker, precies zoals in een klassieke sour.`,
      sections: [
        { id: 'label', title: 'Kijk waar de foamer van gemaakt is', html: `<p>Niet elke foamer is alcoholvrij. Ms. Better's Miraculous Foamer vermeldt <b>{msb_abv}% alcohol</b> en Dr Yanni's Magic Foamer <b>{yanni_abv}%</b>, dus zelfs een paar druppels van een van beide brengen alcohol in een drankje dat er geen hoort te bevatten.</p>
<p>VERY AQUAFABA vermeldt water en kikkererwten, zonder alcohol. U kunt <a href="{foamer_ingredients_href}">de etiketten van cocktailfoamers naast elkaar vergelijken</a>, elke regel overgenomen van het gepubliceerde etiket van het product.</p>` },
        { id: 'build', title: 'Een alcoholvrije sour opbouwen', html: `<p>De methode verandert niet omdat de sterkedrank weg is. Doe uw alcoholvrije basis, het citrussap en de siroop in de shaker, voeg <b>{dose} ml VERY AQUAFABA</b> toe, rechtstreeks uit de koelkast, shake stevig zonder ijs, voeg dan het ijs toe en shake opnieuw. Zeef af en garneer zoals bij elke sour.</p>
<p>Kent u de <a href="{how_to_make_page_href}">twee shakes voor elke sour</a> al, dan is een alcoholvrije versie precies hetzelfde werk.</p>` },
        { id: 'one', title: 'Eén foamer voor beide kanten van de kaart', html: `<p>Omdat dezelfde verpakking werkt in een klassieke sour en in de alcoholvrije versie ervan, houdt de bar één recept en één product. Een 1 L Tetrapak is goed voor {drinks_1l} drankjes; eenmaal geopend bewaart u het pak bij {opened_temp} °C en gebruikt u het binnen {opened_days} dagen. Worden alcoholvrije sours maar af en toe besteld, dan maakt het zakje van 200 g er {drinks_200g}, en eenmaal geopend blijft het droog en gesloten goed tot de houdbaarheidsdatum op het zakje.</p>` },
        { id: 'rest', title: 'Wat u verder in het glas controleert', html: `<p>Het schuim is maar één ingrediënt. Bitters, siropen, cordials en garnering hebben hun eigen etiket, dus lees ze allemaal na wanneer een drankje als alcoholvrij wordt verkocht. Met VERY AQUAFABA kunt u de foamer van dat lijstje schrappen.</p>` },
      ],
      faq: [
        { q: 'Zit er alcohol in VERY AQUAFABA?', a: 'Nee. VERY AQUAFABA bevat water en kikkererwten, dus het voegt geen alcohol toe aan het drankje.' },
        { q: 'Welke cocktailfoamers bevatten alcohol?', a: "Ms. Better's Miraculous Foamer vermeldt {msb_abv}% alcohol en Dr Yanni's Magic Foamer {yanni_abv}%, volgens de productinformatie van hun verkopers." },
        { q: 'Kan ik aquafaba gebruiken in mocktails?', a: 'Ja. Gebruik {dose} ml VERY AQUAFABA per drankje, geef een dry shake en shake daarna met ijs, zoals bij elke sour.' },
        { q: 'Verandert aquafaba de smaak van een alcoholvrij drankje?', a: 'Nee. In de verpakking heeft VERY AQUAFABA een licht geroosterde toets van het koken van de kikkererwten. Eenmaal geshaket in een drankje verdwijnt die: het schuim heeft geen eigen smaak, en de smaak blijft bij de basis, het citrussap en de siroop.' },
        { q: 'Waar koop ik VERY AQUAFABA?', a: 'U kunt [aquafaba voor cocktails kopen]({where_to_buy_page_href}) via Amazon in de Verenigde Staten en Duitsland, via InstantChef in Frankrijk, en overal elders via het aanvraagformulier.' },
      ],
    },

    'drinks-producers': {
      title: 'Aquafaba voor drankenproducenten | VERY AQUAFABA',
      h1: 'Aquafaba voor producenten van cocktailmixen en dranken',
      crumb: 'Drankenproducenten',
      description: 'VERY AQUAFABA voor producenten van sourmix en dranken: bag-in-box van 10 L, 1 T IBC en zak van 3 kg, wat het etiket vermeldt en de methode voor de bar.',
      lead: `Verkoopt u sourmix aan bars, dan maken uw klanten het schuim nog altijd zelf, drankje per drankje. VERY AQUAFABA levert voor de productie de bag-in-box van 10 L en de 1 T IBC voor het vloeibare product, en de zak van 3 kg voor het poeder. De methode achter de bar blijft eenvoudig: uw mix gaat in de fles, en de aquafaba gaat erbij bij de shake.`,
      sections: [
        { id: 'formats', title: 'Formaten voor de productie', html: `<p>Bij {dose} ml per drankje dekt een <b>bag-in-box van 10 L {drinks_10l} drankjes</b>, een <b>1 T IBC {drinks_1t}</b> en een <b>zak van 3 kg {drinks_3kg}</b>. Ongeopend blijft elk formaat minstens {unopened_months} maanden goed op kamertemperatuur; geopend vloeibaar product bewaart u bij {opened_temp} °C en gebruikt u binnen {opened_days} dagen.</p>
<p>De minimale bestelling en de levertijd krijgt u met ons antwoord, zodra u uw volumes beschrijft in het professionele aanvraagformulier.</p>` },
        { id: 'label', title: 'Wat u voor de bartender afdrukt', html: `<p>Uw mix brengt de sterkedrank, het citrussap en de siroop. De bartender doet <b>{dose} ml VERY AQUAFABA</b> met één portie mix in de shaker, shaket stevig zonder ijs, voegt dan het ijs toe en shaket opnieuw. Die regels, gedrukt op uw etiket of uw receptkaart, maken van de mix een sour met een kraag.</p>
<p>Bartenders die het in detail willen zien, volgen de <a href="{how_to_make_page_href}">twee shakes voor elke sour</a>.</p>` },
        { id: 'specs', title: 'Gegevens voor uw kwaliteitsafdeling', html: `<p>VERY AQUAFABA vermeldt water en kikkererwten, zonder additieven en zonder conserveermiddelen. Volgens de beschrijving van <a href="{products_href}">onze producten en formaten</a> is het vegan, clean label, halal en koosjer, met een Nutri-Score A. De technische fiche komt mee met het antwoord op uw aanvraag.</p>` },
        { id: 'bottled', title: 'Voorgemixte en gebottelde dranken', html: `<p>De methode op deze site voegt de aquafaba toe bij de shake, nooit in de batch. Ontwikkelt u een gebottelde of voorgemixte cocktail waar het schuim al in zit, beschrijf het product dan in het aanvraagformulier, en wij laten u weten hoe VERY AQUAFABA erin past.</p>` },
      ],
      faq: [
        { q: 'Welke formaten van VERY AQUAFABA bestaan er voor de productie?', a: 'De bag-in-box van 10 L en de 1 T IBC voor het vloeibare product, en de zak van 3 kg voor het poeder.' },
        { q: 'Hoeveel drankjes haal ik uit een 1 T IBC?', a: '{drinks_1t} drankjes van {dose} ml.' },
        { q: 'Waar vind ik de minimale bestelling en de levertijd?', a: 'U krijgt ze met ons antwoord, zodra u uw volumes beschrijft in het professionele aanvraagformulier.' },
        { q: 'Kan VERY AQUAFABA in een gebottelde cocktail?', a: 'De methode op deze site voegt het toe bij de shake. Beschrijf een gebottelde of voorgemixte cocktail in het aanvraagformulier, dan nemen wij contact met u op.' },
      ],
    },

    'vegg-white-alternative': {
      title: 'Alternatief voor VEGG White in cocktails | VERY AQUAFABA',
      h1: 'Op zoek naar een alternatief voor VEGG White?',
      crumb: 'Alternatief voor VEGG White',
      description: 'VEGG White en VERY AQUAFABA naast elkaar: wat elk etiket vermeldt, de vermelde allergenen en de dosis per drankje, met de bron van elke regel.',
      lead: `VEGG White is een vloeibare cocktailfoamer die één op één in plaats van eiwit wordt gebruikt. VERY AQUAFABA doet hetzelfde werk met {dose} ml per drankje, met een veel korter etiket: water en kikkererwten, zonder additieven en zonder conserveermiddelen. Hieronder staan de twee naast elkaar, elke regel overgenomen uit een gepubliceerde bron.`,
      sections: [
        { id: 'labels', title: 'De twee etiketten', html: `{labels_vegg}
<p>Etiketten gecontroleerd: {labels_checked}. Recepturen veranderen, dus elke regel wordt opnieuw nagelezen voordat deze vergelijking wordt bijgewerkt.</p>` },
        { id: 'soy', title: 'Soja op het etiket', html: `<p>VEGG White vermeldt soja, afkomstig van de sojalecithine. VERY AQUAFABA bevat geen soja, geen eieren, geen zuivel en geen gluten. Kikkererwt hoort niet bij de {eu_allergens} allergenen die de EU-wetgeving op een etiket verplicht stelt, maar wie een bekende allergie voor kikkererwten of peulvruchten heeft, moet het product toch vermijden. <a href="{is_aquafaba_an_allergen_href}">Beantwoord de vraag over allergenen</a> voordat een gast ernaar vraagt.</p>` },
        { id: 'dose', title: 'Dosis en formaat', html: `<p>VEGG White wordt één op één in plaats van eiwit gebruikt. VERY AQUAFABA meet u af op <b>{dose} ml per drankje</b>, geschonken uit een pak van 1 L dat goed is voor {drinks_1l} drankjes, of aangemaakt uit poeder met {powder} g in {water} ml water. Voor een drukke bar zorgen de <a href="{bulk_foamer_href}">bag-in-box van 10 L of de zak van 3 kg</a> voor één product aan elk station.</p>` },
        { id: 'try', title: 'Probeer het in een sour die u al maakt', html: `<p>Vervang de foamer in één cocktail die u al verkoopt en proef de twee naast elkaar. Bouw op zoals gewoonlijk, voeg {dose} ml VERY AQUAFABA toe, shake eerst zonder ijs en dan met ijs. Een <a href="{pisco_sour_href}">pisco sour</a> of een <a href="{gin_fizz_href}">gin fizz</a> laat de kraag duidelijk zien.</p>` },
      ],
      faq: [
        { q: 'Waar is VEGG White van gemaakt?', a: "Volgens Difford's Guide luidt de gepubliceerde lijst: water, emulgatoren, methylcellulose, esters van vetzuren, sojalecithine, verdikkingsmiddelen, maltodextrine, xanthaangom, acaciagom, conserveermiddel E211 en antioxidant ascorbinezuur." },
        { q: 'Bevat VEGG White soja?', a: 'Ja. Het vermeldt soja, afkomstig van de sojalecithine.' },
        { q: 'Is VERY AQUAFABA sojavrij?', a: 'Ja. VERY AQUAFABA bevat water en kikkererwten, zonder soja, eieren, zuivel of gluten.' },
        { q: 'Hoeveel VERY AQUAFABA gebruik ik per drankje?', a: '{dose} ml vloeibaar, of {powder} g poeder aangemaakt met {water} ml water.' },
        { q: 'Waar koop ik VERY AQUAFABA?', a: 'U kunt [aquafaba voor cocktails kopen]({where_to_buy_page_href}) via Amazon in de Verenigde Staten en Duitsland, via InstantChef in Frankrijk, en overal elders via het aanvraagformulier.' },
      ],
    },

    'fee-foam-alternative': {
      title: 'Alternatief voor Fee Foam zonder additieven | VERY AQUAFABA',
      h1: 'Op zoek naar een alternatief voor Fee Foam?',
      crumb: 'Alternatief voor Fee Foam',
      description: 'Fee Foam vermeldt propyleenglycol en polysorbaat 80, VERY AQUAFABA water en kikkererwten. Beide etiketten naast elkaar, met de dosis en de bronnen.',
      lead: `Fee Foam komt in een dasherfles, een paar dashes per drankje. Draai de fles om en het etiket vermeldt water, propyleenglycol, polysorbaat 80, twee conserveermiddelen, citroenzuur en citroenextract. VERY AQUAFABA vermeldt water en kikkererwten, zonder additieven en zonder conserveermiddelen, en gaat met {dose} ml per drankje in de shaker.`,
      sections: [
        { id: 'labels', title: 'De twee etiketten', html: `{labels_fee}
<p>Etiketten gecontroleerd: {labels_checked}. Recepturen veranderen, dus elke regel wordt opnieuw nagelezen voordat deze vergelijking wordt bijgewerkt.</p>` },
        { id: 'foam', title: 'Wat het schuim maakt', html: `<p>Bij Fee Foam vermeldt het etiket polysorbaat 80 (E433), een emulgator, naast propyleenglycol (E1520), met kaliumsorbaat (E202) en natriumbenzoaat (E211) als conserveermiddelen. Bij VERY AQUAFABA komt het schuim uit de kikkererwt zelf, en het etiket houdt op bij water en kikkererwten.</p>
<p>Tellen de ingrediënten voor uw kaart, <a href="{foamer_ingredients_href}">vergelijk dan alle etiketten van foamers</a> in één tabel.</p>` },
        { id: 'dose', title: 'Dashes of een afgemeten schenking', html: `<p>Voor Fee Foam adviseert de maker {fee_dose}. VERY AQUAFABA meet u af met een jigger, op <b>{dose} ml</b>, elke keer dezelfde hoeveelheid, en eenmaal geopend bewaart u het pak van 1 L bij {opened_temp} °C en gebruikt u het binnen {opened_days} dagen. Het is goed voor {drinks_1l} drankjes.</p>` },
        { id: 'try', title: 'Probeer het in een sour die u al maakt', html: `<p>Neem één sour van uw kaart, vervang de dashes door {dose} ml VERY AQUAFABA, shake eerst zonder ijs en dan met ijs, en vergelijk de kraag. Een <a href="{pisco_sour_href}">pisco sour</a> is een makkelijke eerste test.</p>` },
      ],
      faq: [
        { q: 'Wat zit er in Fee Foam?', a: "Water, propyleenglycol, polysorbaat 80, kaliumsorbaat, minder dan 1/10 van 1% natriumbenzoaat als conserveermiddel, citroenzuur en puur citroenextract, volgens Difford's Guide." },
        { q: 'Bevat Fee Foam conserveermiddelen?', a: 'Het etiket vermeldt kaliumsorbaat en natriumbenzoaat.' },
        { q: 'Bevat VERY AQUAFABA conserveermiddelen?', a: 'Nee. Het etiket vermeldt water en kikkererwten. Ongeopende verpakkingen blijven minstens {unopened_months} maanden goed op kamertemperatuur.' },
        { q: 'Hoeveel VERY AQUAFABA vervangt Fee Foam in een drankje?', a: 'Gebruik {dose} ml VERY AQUAFABA per drankje, of {powder} g poeder aangemaakt met {water} ml water.' },
        { q: 'Waar koop ik VERY AQUAFABA?', a: 'U kunt [aquafaba voor cocktails kopen]({where_to_buy_page_href}) via Amazon in de Verenigde Staten en Duitsland, via InstantChef in Frankrijk, en overal elders via het aanvraagformulier.' },
      ],
    },

    'ms-betters-alternative': {
      title: "Alternatief voor Ms. Better's foamer | VERY AQUAFABA",
      h1: "Op zoek naar een alternatief voor Ms. Better's of Dr Yanni's?",
      crumb: "Alternatief voor Ms. Better's",
      description: "Ms. Better's Miraculous Foamer vermeldt {msb_abv}% alcohol, Dr Yanni's {yanni_abv}%. VERY AQUAFABA: water en kikkererwten, geen alcohol, {dose} ml per drankje.",
      lead: `Foamers uit een druppelfles gaan er een paar druppels tegelijk in. Waar het wringt, ziet u op een alcoholvrije kaart. Ms. Better's Miraculous Foamer vermeldt {msb_abv}% alcohol en Dr Yanni's Magic Foamer {yanni_abv}%, dus elk van beide voegt alcohol toe aan het drankje. VERY AQUAFABA is water en kikkererwten, zonder alcohol.`,
      sections: [
        { id: 'labels', title: 'De etiketten', html: `{labels_alcohol}
<p>Etiketten gecontroleerd: {labels_checked}. Recepturen veranderen, dus elke regel wordt opnieuw nagelezen voordat deze vergelijking wordt bijgewerkt.</p>` },
        { id: 'alcohol', title: 'Waar de alcohol telt', html: `<p>In een klassieke sour vallen een paar druppels van een foamer met {msb_abv}% nauwelijks op naast de sterkedrank. In een drankje dat als alcoholvrij wordt verkocht, zijn ze het ene ingrediënt dat die belofte breekt. VERY AQUAFABA voegt geen alcohol toe, dus dezelfde foamer werkt in een whiskey sour en in de <a href="{alcohol_free_foamer_href}">alcoholvrije versie</a> ervan.</p>` },
        { id: 'dose', title: 'Druppels of milliliters', html: `<p>Ms. Better's doseert u op {msb_dose}. VERY AQUAFABA gaat erin met <b>{dose} ml</b>, afgemeten met een jigger, net als het eiwit dat het vervangt. Een 1 L Tetrapak is goed voor {drinks_1l} drankjes; het zakje van 200 g maakt er {drinks_200g}, en eenmaal geopend blijft het droog en gesloten goed tot de houdbaarheidsdatum op het zakje.</p>` },
        { id: 'try', title: 'Probeer het in een sour die u al maakt', html: `<p>Vervang de druppels in één drankje door {dose} ml VERY AQUAFABA, shake eerst zonder ijs en dan met ijs, en vergelijk. De <a href="{how_to_make_page_href}">twee shakes voor elke sour</a> zijn de hele methode.</p>` },
      ],
      faq: [
        { q: "Hoeveel alcohol zit er in de foamer van Ms. Better's?", a: "Ms. Better's Miraculous Foamer vermeldt {msb_abv}% alcohol in de productinformatie van de verkoper." },
        { q: "Bevat de foamer van Dr Yanni's alcohol?", a: "Ja. Dr Yanni's Magic Foamer wordt omschreven als een plantaardige alcoholische emulsie van {yanni_abv}%." },
        { q: 'Zit er alcohol in VERY AQUAFABA?', a: 'Nee. VERY AQUAFABA bevat water en kikkererwten.' },
        { q: 'Kan ik VERY AQUAFABA in mocktails gebruiken?', a: 'Ja. Gebruik {dose} ml per drankje, geef een dry shake en shake daarna met ijs.' },
        { q: 'Waar koop ik VERY AQUAFABA?', a: 'U kunt [aquafaba voor cocktails kopen]({where_to_buy_page_href}) via Amazon in de Verenigde Staten en Duitsland, via InstantChef in Frankrijk, en overal elders via het aanvraagformulier.' },
      ],
    },

    'quillaia-foamers': {
      title: 'Alternatief voor Foamee en Wonderfoam | VERY AQUAFABA',
      h1: 'Foamee, Wonderfoam en de foamers met quillaja',
      crumb: 'Foamers met quillaja',
      description: 'Foamee vermeldt een plantaardig saponine-extract, Wonderfoam quillaja-extract met gom, zetmeel en conserveermiddelen. VERY AQUAFABA: water en kikkererwten.',
      lead: `Een paar druppels van een saponinefoamer zetten een kraag op een sour. Saponinen zijn schuimvormende stoffen die in planten voorkomen: Wonderfoam vermeldt quillaja-extract, uit de bast van de quillajaboom, en Foamee een plantaardig saponine-extract. VERY AQUAFABA haalt zijn schuim uit de kikkererwt zelf, met {dose} ml per drankje en water en kikkererwten op het etiket.`,
      sections: [
        { id: 'labels', title: 'De etiketten', html: `{labels_saponin}
<p>Etiketten gecontroleerd: {labels_checked}. Recepturen veranderen, dus elke regel wordt opnieuw nagelezen voordat deze vergelijking wordt bijgewerkt.</p>` },
        { id: 'saponin', title: 'Wat een saponinefoamer aan het drankje toevoegt', html: `<p>Quillaja-extract staat op etiketten als E999. In Wonderfoam staat het naast Arabische gom, gemodificeerd zetmeel (E1450) en twee conserveermiddelen, natriumbenzoaat en kaliumsorbaat. Foamee vermeldt zijn saponine-extract met water en citroenzuur. VERY AQUAFABA vermeldt water en kikkererwten, zonder additieven en zonder conserveermiddelen.</p>
<p>Om alle foamers op één plek te zien, kunt u <a href="{foamer_ingredients_href}">de etiketten naast elkaar vergelijken</a>.</p>` },
        { id: 'tin', title: 'Geen blik kikkererwten', html: `<p>Sommige saponinefoamers vergelijken zichzelf met een blik kikkererwten, en op dat punt hebben ze gelijk: een blik geeft u een paar drankjes en laat u achter met de kikkererwten. VERY AQUAFABA is geen blik. Een 1 L Tetrapak is goed voor {drinks_1l} drankjes van {dose} ml, het zakje van 200 g voor {drinks_200g}, en het vloeibare product is hetzelfde van verpakking tot verpakking, terwijl het vocht uit een blik <a href="{aquafaba_vs_chickpea_water_href}">per merk en per partij kan verschillen</a>.</p>` },
        { id: 'dose', title: 'Druppels of een afgemeten schenking', html: `<p>Van Wonderfoam gaan er {wonderfoam_dose} in. VERY AQUAFABA gaat erin met <b>{dose} ml</b>, afgemeten met een jigger, en de methode is die u al kent: dry shake, dan shaken met ijs. Probeer het in een <a href="{pisco_sour_href}">pisco sour</a> naast uw gebruikelijke foamer.</p>` },
      ],
      faq: [
        { q: 'Wat zit er in Foamee?', a: 'De eigen webwinkel van het merk vermeldt een plantaardig saponine-extract, water en citroenzuur.' },
        { q: 'Wat zit er in Wonderfoam?', a: 'De productinformatie van de verkoper vermeldt quillaja-extract als schuimvormer, water, Arabische gom, gemodificeerd zetmeel (E1450), natriumbenzoaat en kaliumsorbaat.' },
        { q: 'Wat is quillaja-extract?', a: 'Een extract van de bast van de quillajaboom, rijk aan saponinen, gebruikt als schuimvormer en vermeld als E999.' },
        { q: 'Bevat VERY AQUAFABA conserveermiddelen?', a: 'Nee. Het etiket vermeldt water en kikkererwten. Ongeopende verpakkingen blijven minstens {unopened_months} maanden goed op kamertemperatuur.' },
        { q: 'Waar koop ik VERY AQUAFABA?', a: 'U kunt [aquafaba voor cocktails kopen]({where_to_buy_page_href}) via Amazon in de Verenigde Staten en Duitsland, via InstantChef in Frankrijk, en overal elders via het aanvraagformulier.' },
      ],
    },
  },
};
