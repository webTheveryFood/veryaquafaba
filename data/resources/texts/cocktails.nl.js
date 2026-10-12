// Cocktailuitbreiding, Nederlands (oktober 2026): gidsen, rekenhulpen en stappenbladen van de
// zes cocktails, en de vraagpagina's. Zelfde structuur, zelfde {tokens} en zelfde links als
// cocktails.en.js + cocktails-2.en.js (gecontroleerd door
// scripts/applications/check-cocktail-locale.mjs nl). Geen gedachtestreepje, alleen het merk
// VERY AQUAFABA, de bergamotlikeur zonder merknaam. Aanspreekvorm u.
import { fixTable, table } from './cocktail-tables.js';
const FIX = ['Wat u ziet', 'Oorzaak', 'Oplossing'];

export default {
  labels: {
    dropsUnit: "druppels",
    calcTitle: "Aquafaba berekenen voor {name}",
    cocktailsGuide: 'Aquafaba voor cocktails: vloeibaar of poeder?',
    barsPage: 'Aquafaba voor bars en cocktails',
    calculatorLink: 'Rekenhulp voor deze cocktail',
    processLink: 'Stappenblad voor deze cocktail',
    perDrink: 'Per drankje',
    equivNote: 'Met {dose} ml per drankje gebruikt u twee derde van een eiwit, dus 1 L is goed voor {drinks} drankjes in plaats van {whites}.',
    drinks: '= {n} cocktails',
    drinksUnit: 'cocktails',
    ingredients: {
      pisco: 'Pisco', lime_juice: 'Limoensap', cane_syrup: 'Rietsuikersiroop',
      amaretto: 'Amaretto', lemon_juice: 'Citroensap', vanilla_syrup: 'Vanillesiroop', gin: 'Gin',
      triple_sec: 'Triple sec', vodka: 'Wodka', bergamot_liqueur: 'Bergamotlikeur', raspberry_syrup: 'Frambozensiroop',
      orange_blossom: 'Oranjebloesemwater', rum: 'Rum', vanilla_tonka_syrup: 'Vanille-tonkasiroop',
    },
    responsible: 'Geniet, maar drink met mate',
    moreCocktails: 'Meer cocktails met aquafaba',
    cardAlt: '{name} met een schuimkraag van aquafaba',
  },

  guides: {
    'pisco-sour': {
      title: 'Pisco sour met aquafaba: eivrij recept | VERY AQUAFABA',
      h1: 'Pisco sour met aquafaba maken',
      crumb: 'Pisco sour',
      card: 'Pisco, limoen en een gedroogd schijfje citroen',
      eyebrow: 'Cocktailgids',
      description: 'Maak een pisco sour met {dose} ml VERY AQUAFABA in plaats van eiwit. Recept, volgorde van de shakes, tips voor de service en verpakkingen voor bars.',
      lead: `Sommige cocktails onthouden gasten om hun smaak. Een pisco sour onthouden ze om het moment dat hij op tafel komt: die bleke, hoge kraag boven het glas, nog voor de eerste slok. Vervang het eiwit door {dose} ml VERY AQUAFABA en u houdt het beeld waaraan iedereen de cocktail herkent, met de frisse limoen en de zijdezachte body eronder. Het recept hoeft dus niet te veranderen; het komt aan op de shake. Deze gids loopt de opbouw door, de volgorde van de twee shakes en de controles die het schuim mooi houden.`,
      sections: [
        { id: 'tin', title: 'Wat er in de shaker gaat', html: `<ul>
<li>{pisco} ml pisco</li>
<li>{lime_juice} ml vers limoensap</li>
<li>{cane_syrup} ml rietsuikersiroop</li>
<li>{dose} ml VERY AQUAFABA, gekoeld</li>
<li>Een old fashioned glas, en een gedroogd schijfje citroen als garnering</li>
</ul>
<p>U hoeft geen nieuwe cocktail te leren. Alleen het schuimende ingrediënt verandert: gebruik {dose} ml VERY AQUAFABA en houd de rest van het recept zoals het is.</p>` },
        { id: 'shake', title: 'Zo shaket u de pisco sour', html: `<p>Kent u de sour al, dan voelt dit vertrouwd. Het enige wat telt, zijn de twee shakes in de juiste volgorde.</p>
<ol>
<li>Doe alles in de shaker: pisco, limoen, siroop en de aquafaba rechtstreeks uit de koelkast.</li>
<li>Shake stevig zonder ijs. In deze dry shake ontstaat het schuim. Als u de shaker opent, ziet de vloeistof er bleek en dik uit, bijna als een milkshake.</li>
<li>Voeg {ice} ijsblokjes toe en shake opnieuw tot de shaker aan de buitenkant beslaat. Deze shake koelt en verdunt de cocktail.</li>
<li>Zeef af in het old fashioned glas. De kraag komt omhoog terwijl de cocktail tot rust komt, dus wacht een paar seconden voor u garneert.</li>
<li>Leg het gedroogde schijfje citroen op het schuim.</li>
</ol>` },
        { id: 'tips', title: "Tips voor een pisco sour met aquafaba", html: `<p>De dry shake heeft één taak: het schuim opbouwen voordat de cocktail gekoeld en verdund wordt. Staat die kraag eenmaal, dan brengt de tweede shake met ijs de cocktail op serveertemperatuur. Draai de volgorde om en de kraag wordt dunner.</p>
<p>Het meeste afmeten haalt u uit de service door de pisco, limoen en siroop te batchen voordat de deuren opengaan. Houd de aquafaba apart in de koelkast en doe {dose} ml in elke shaker zodra de bestelling binnenkomt. Het schuim maakt u nog steeds per cocktail, maar de opbouw gaat veel sneller, en het <a href="{process_href}">stappenblad voor de pisco sour</a> zet elke stap op één pagina voor het station.</p>` },
        { id: 'fix', title: "Een dunne kraag bij een pisco sour oplossen", html: fixTable([
          ['Een dunne kraag, of helemaal geen', 'Het ijs ging erin voor de dry shake', 'Eerst de dry shake, dan pas ijs'],
          ['Traag, slap schuim', 'De aquafaba was op kamertemperatuur', 'Houd het pak in de koelkast tot de shake'],
          ['Het schuim zakt in voordat de cocktail bij de gast is', 'De cocktail bleef op de bar staan', 'Shake op bestelling en serveer meteen'],
          ['Halverwege de service geen hoogte meer', 'De aquafaba zat in de pre-batch', 'Batch alleen de pisco, limoen en siroop, en voeg de aquafaba per drankje toe'],
        ], FIX) },
        { id: 'format', title: 'Hoeveel pisco sours gaan er bij u over de bar?', html: `<p>Een 1 L Tetrapak geeft u {drinks_1l} pisco sours. Eenmaal geopend bewaart u het pak bij {opened_temp} °C en gebruikt u het binnen {opened_days} dagen. Passen {drinks_1l} cocktails makkelijk in dat ritme, dan is vloeibaar de eenvoudige keuze: koelkast, afmeten, shaker.</p>
<p>Wordt de pisco sour eerder af en toe besteld, dan geeft poeder u meer ruimte. Gebruik {powder} g met {water} ml water per drankje en houd het geopende zakje tussen twee services droog en gesloten. Met de <a href="{calculator_href}">rekenhulp voor de pisco sour</a> rekent u het volledige recept om zodra u weet hoeveel cocktails u plant.</p>` },
      ],
      faq: [
        { q: 'Verandert aquafaba de smaak van een pisco sour?', a: 'Nee. In de verpakking heeft VERY AQUAFABA een licht geroosterde toets van het koken van de kikkererwten. Eenmaal geshaket in een drankje verdwijnt die: het schuim heeft geen eigen smaak, en de smaak blijft bij de pisco en de limoen.' },
        { q: 'Kan ik een pisco sour veganistisch maken?', a: 'Het schuim wel: VERY AQUAFABA is plantaardig en eivrij, dus de kraag brengt geen ei in de cocktail. De pisco, de limoen en de siroop hebben hun eigen etiket.' },
        { q: 'Hoeveel aquafaba gebruik ik per pisco sour?', a: '{dose} ml vloeibaar, of {powder} g poeder aangemaakt met {water} ml water.' },
        { q: 'Is aquafaba veiliger dan rauw eiwit in cocktails?', a: "Een sour wordt nooit verhit, dus het eiwit gaat rauw in het glas. VERY AQUAFABA is plantaardig en brengt minder gezondheidsrisico's mee dan rauw eiwit, zoals listeria of salmonella." },
        { q: 'Moet ik mijn recept voor pisco sour aanpassen?', a: 'Nee. De pisco, de limoen en de rietsuikersiroop blijven zoals ze zijn, en {dose} ml aquafaba neemt de plaats van het eiwit in.' },
        { q: 'Kan ik pisco sours met aquafaba pre-batchen?', a: 'Ja, de basis. Pisco, limoen en siroop gaan vóór de service samen in één fles, en de aquafaba gaat er per drankje bij, bij de shake.' },
        { q: 'Hoe lang blijft een geopend pak aquafaba goed achter de bar?', a: 'Geopend vloeibaar product bewaart u bij {opened_temp} °C en gebruikt u binnen {opened_days} dagen. Een geopend zakje poeder blijft droog en gesloten goed tot de houdbaarheidsdatum, en ongeopende verpakkingen blijven minstens {unopened_months} maanden goed op kamertemperatuur.' },
        { q: 'Waar koop ik aquafaba voor pisco sours?', a: 'Dat hangt af van waar uw bar staat: u kunt [aquafaba voor cocktails kopen]({where_to_buy_page_href}) via Amazon in de Verenigde Staten en Duitsland, via InstantChef in Frankrijk, en overal elders via het aanvraagformulier.' },
      ],
    },

    'amaretto-sour': {
      title: 'Amaretto sour met aquafaba: eivrij recept | VERY AQUAFABA',
      h1: 'Amaretto sour met aquafaba maken',
      crumb: 'Amaretto sour',
      card: 'Amaretto, citroen en vanillesiroop',
      eyebrow: 'Cocktailgids',
      description: 'Een amaretto sour met VERY AQUAFABA in plaats van eiwit: {amaretto} ml amaretto, {dose} ml aquafaba, twee shakes en een witte kraag zonder ei.',
      lead: `De amaretto sour komt altijd iets royaler op tafel dan de rest: meer likeur in de shaker, meer rondheid in het glas, en een witte kraag die voorkomt dat de cocktail te zoet wordt. Met {dose} ml VERY AQUAFABA in plaats van het eiwit blijft dat evenwicht overeind. U houdt de volle amandelbasis, de citroen die erdoorheen snijdt en de zachte kraag die de cocktail afmaakt. Hieronder vindt u de volledige opbouw, de methode met twee shakes en waar u op let als het schuim zwakker uitvalt dan de cocktail verdient.`,
      sections: [
        { id: 'tin', title: 'Wat er in de shaker gaat', html: `<ul>
<li>{amaretto} ml amaretto</li>
<li>{lemon_juice} ml citroensap</li>
<li>{vanilla_syrup} ml vanillesiroop</li>
<li>{dose} ml VERY AQUAFABA, gekoeld</li>
<li>Een old fashioned glas, en een gedroogd schijfje citroen als garnering</li>
</ul>
<p>De {amaretto} ml amaretto onderscheidt dit recept van de andere sours hier.</p>` },
        { id: 'shake', title: 'Zo shaket u de amaretto sour', html: `<ol>
<li>Giet de amaretto, de citroen, de vanillesiroop en de gekoelde aquafaba in de shaker.</li>
<li>Shake stevig zonder ijs: hier ontstaat de kraag.</li>
<li>Voeg {ice} ijsblokjes toe en shake opnieuw om de cocktail te koelen en te verdunnen.</li>
<li>Zeef af in het old fashioned glas.</li>
<li>Leg het gedroogde schijfje citroen op het schuim en serveer de cocktail meteen.</li>
</ol>
<p>Er zijn maar twee punten om constant te houden: gebruik de aquafaba gekoeld, en bewaar het ijs voor de tweede shake.</p>` },
        { id: 'tips', title: "Tips voor een amaretto sour in balans met aquafaba", html: `<p>De amaretto bepaalt het tempo van deze cocktail. Met {amaretto} ml per bestelling gaat een drukke service veel sneller door de likeur dan door de aquafaba. De vanillesiroop blijft op {vanilla_syrup} ml, en VERY AQUAFABA blijft op dezelfde {dose} ml als in de andere sours.</p>
<p>Batch de amaretto, citroen en vanillesiroop voordat de deuren opengaan. Elke bestelling krijgt dan de gebatchte basis plus {dose} ml gekoelde aquafaba voor de dry shake. Houd de aquafaba uit de fles, zodat het schuim in elke shaker vers ontstaat, en leg het <a href="{process_href}">stappenblad voor de amaretto sour</a> in het barboek voor de controles.</p>` },
        { id: 'flat', title: "Een platte amaretto sour oplossen", html: fixTable([
          ['Een dunne kraag vanaf de eerste cocktail', 'Het ijs ging erin voor de dry shake', 'Eerst de dry shake, dan pas ijs'],
          ['Schuim dat traag opkomt en slap blijft', 'De aquafaba stond op kamertemperatuur', 'Houd het pak in de koelkast tot de shake'],
          ['Mooi aan de bar, plat aan tafel', 'De cocktail bleef op de bar staan', 'Shake op bestelling en serveer meteen'],
        ], FIX) },
        { id: 'format', title: 'Hoe vaak schenkt u amaretto sours?', html: `<p>Begin met één vraag: schenkt u {drinks_1l} amaretto sours binnen {opened_days} dagen? Zoveel geeft een 1 L Tetrapak bij {dose} ml per drankje, en het geopende pak staat in die tijd bij {opened_temp} °C.</p>
<p>Gaat de cocktail minder snel, dan is poeder makkelijker te bewaren tussen twee services. Een zakje van 200 g geeft {drinks_200g} cocktails bij {powder} g per drankje, aangemaakt met {water} ml water. Met de <a href="{calculator_href}">rekenhulp voor de amaretto sour</a> zet u het verwachte aantal gasten om in de volledige boodschappenlijst voor de avond.</p>` },
      ],
      faq: [
        { q: 'Wat gebruik ik in plaats van eiwit in een amaretto sour?', a: '{dose} ml VERY AQUAFABA vloeibaar, of {powder} g poeder aangemaakt met {water} ml water.' },
        { q: 'Smaakt een amaretto sour met aquafaba naar kikkererwten?', a: 'Nee. Uit het pak heeft VERY AQUAFABA een licht geroosterde toets, die van het koken van de kikkererwten komt. In de shaker verdwijnt die toets: het schuim heeft geen eigen smaak, dus de cocktail smaakt naar de amaretto, de citroen en de vanille.' },
        { q: 'In welk glas serveer ik een amaretto sour?', a: 'In een old fashioned glas, met een gedroogd schijfje citroen als garnering op het schuim.' },
        { q: 'Kan ik amaretto sours batchen vóór de service?', a: 'Ja, de amaretto, citroen en vanillesiroop. De aquafaba gaat er per drankje bij, bij de shake, nooit in de batch.' },
        { q: 'Hoeveel amaretto sours haal ik uit een pak van 1 L?', a: '{drinks_1l} cocktails, met {dose} ml aquafaba per drankje. Eenmaal geopend bewaart u het pak bij {opened_temp} °C en gebruikt u het binnen {opened_days} dagen.' },
        { q: 'Is een amaretto sour met aquafaba veganistisch?', a: 'Het schuim wel: VERY AQUAFABA is plantaardig en eivrij, dus de kraag brengt geen ei in de cocktail.' },
      ],
    },

    'gin-fizz': {
      title: 'Gin fizz met aquafaba: eivrij recept | VERY AQUAFABA',
      h1: 'Gin fizz met aquafaba maken',
      crumb: 'Gin fizz',
      card: 'Gin en citroen, aangevuld met tonic',
      eyebrow: 'Cocktailgids',
      description: 'Een gin fizz met VERY AQUAFABA in plaats van eiwit: geshaket met {dose} ml aquafaba, afgezeefd in een highball en aangevuld met tonic.',
      lead: `Een gin fizz heeft iets theatraals. Hij begint als een sour in de shaker en groeit daarna in het glas, afgewerkt met tonic en een witte kraag die bovenop drijft. Dat lukt alleen als de volgorde klopt. Gebruik {dose} ml VERY AQUAFABA in plaats van het eiwit, maak eerst het schuim, en laat de highball pas na het afzeven een highball worden. Deze gids toont het volledige recept, de shake, het aanvullen en de kleine details die de cocktail levendig houden in plaats van plat.`,
      sections: [
        { id: 'tin', title: 'Wat in de shaker gaat, en wat in het glas gaat', html: `<ul>
<li>{gin} ml gin</li>
<li>{lemon_juice} ml citroensap</li>
<li>{cane_syrup} ml rietsuikersiroop</li>
<li>{dose} ml VERY AQUAFABA, gekoeld</li>
<li>Tonic om aan te vullen, in een highballglas</li>
<li>Een gedroogd schijfje citroen als garnering</li>
</ul>
<p>Zet de tonic naast het glas, niet naast de shaker. De rest wordt eerst geshaket.</p>` },
        { id: 'build', title: 'Zo maakt u de gin fizz', html: `<ol>
<li>Giet de gin, de citroen, de rietsuikersiroop en de aquafaba in de shaker.</li>
<li>Shake stevig zonder ijs om het schuim op te bouwen.</li>
<li>Voeg {ice} ijsblokjes toe en shake opnieuw om de cocktail te koelen.</li>
<li>Zeef af in het highballglas.</li>
<li>Vul aan met tonic.</li>
<li>Leg het gedroogde schijfje citroen op de kraag.</li>
</ol>` },
        { id: 'tips', title: "Tips voor een gin fizz met aquafaba", html: `<p>De kraag staat al voordat de tonic erbij komt. Geef de gin, citroen, siroop en aquafaba een dry shake, shake opnieuw met ijs en zeef dan af. De tonic gaat daarna in de highball, zodat het lange deel van de cocktail in het glas ontstaat en niet in de shaker.</p>
<p>Batch de gin, citroen en siroop, en elke bestelling wordt een paar duidelijke handelingen. Schenk de basis, voeg {dose} ml gekoelde aquafaba toe, shake twee keer, zeef af en vul aan met tonic. Door zowel de aquafaba als de tonic uit de batch te houden, beschermt u de twee dingen die deze cocktail aan het eind nodig heeft: zijn kraag en zijn prik. Het <a href="{process_href}">stappenblad voor de gin fizz</a> zet die volgorde op één pagina.</p>` },
        { id: 'thin', title: "Een dunne kraag bij een gin fizz oplossen", html: fixTable([
          ['Dunne kraag nog voor de tonic erin gaat', 'Het ijs ging erin voor de dry shake', 'Eerst de dry shake, dan pas ijs'],
          ['Slap schuim dat traag opkomt', 'De aquafaba was op kamertemperatuur', 'Houd hem in de koelkast tot de shake'],
          ['De kraag is weg tegen de tijd dat de cocktail op tafel staat', 'De cocktail bleef op de bar staan', 'Shake, vul aan en serveer meteen'],
        ], FIX) },
        { id: 'format', title: 'Hoe snel verkoopt u gin fizzes?', html: `<p>Een 1 L Tetrapak maakt {drinks_1l} gin fizzes en een bag-in-box van 10 L maakt er {drinks_10l}. Eenmaal geopend bewaart u vloeibare aquafaba bij {opened_temp} °C en gebruikt u hem binnen {opened_days} dagen, dus de juiste verpakking is die waar uw service echt doorheen komt.</p>
<p>Zijn de bestellingen voor gin fizz minder voorspelbaar, gebruik dan {powder} g poeder met {water} ml water per drankje. Maak vóór de service aan wat u nodig hebt, koel het, en houd de rest van het zakje droog en gesloten. De <a href="{calculator_href}">rekenhulp voor de gin fizz</a> rekent de avond voor u uit.</p>` },
      ],
      faq: [
        { q: 'Kan ik een gin fizz maken zonder eiwit?', a: 'Ja. Shake {dose} ml VERY AQUAFABA met de gin, citroen en siroop in plaats van het eiwit, en vul daarna aan met tonic.' },
        { q: 'Wanneer voeg ik de tonic toe aan een gin fizz?', a: 'Nadat de cocktail in het highballglas is afgezeefd. De tonic gaat er bovenop en wordt nooit geshaket.' },
        { q: 'Hoeveel aquafaba gaat er in een gin fizz?', a: '{dose} ml vloeibaar, of {powder} g poeder aangemaakt met {water} ml water.' },
        { q: 'Verandert aquafaba de smaak van de gin?', a: 'Nee. VERY AQUAFABA heeft in de verpakking een licht geroosterde toets van de gekookte kikkererwten, en zodra het geshaket is, is die weg. Het schuim heeft geen eigen smaak, dus de gin, de citroen en de tonic bepalen de smaak.' },
        { q: 'Kan ik het poeder vóór de service aanmaken?', a: 'Ja. Maak per drankje {powder} g poeder aan met {water} ml water vóór de service, en houd het koud tot de shake.' },
        { q: 'Hoeveel gin fizzes haal ik uit een bag-in-box van 10 L?', a: '{drinks_10l} cocktails, met {dose} ml aquafaba per drankje. Eenmaal geopend bewaart u de bag-in-box bij {opened_temp} °C en gebruikt u hem binnen {opened_days} dagen.' },
      ],
    },

    'white-lady': {
      title: 'White lady met aquafaba: eivrij recept | VERY AQUAFABA',
      h1: 'White lady met aquafaba maken',
      crumb: 'White lady',
      card: 'Gin, triple sec en citroen, in een glas op voet',
      eyebrow: 'Cocktailgids',
      description: 'Een white lady met VERY AQUAFABA in plaats van eiwit: gin, triple sec, citroen en {dose} ml aquafaba, twee keer geshaket, in een glas op voet.',
      lead: `De white lady is één en al elegantie, tot het schuim tekortschiet. In een glas op voet, met gedroogde bloemetjes op de kraag, kan een zwakke shake of een slappe kraag zich nergens verstoppen. Vervang het eiwit door {dose} ml VERY AQUAFABA en de cocktail houdt zijn strakke witte kraag, terwijl de gin, de triple sec en de citroen eronder precies doen wat ze moeten doen. Hieronder leest u hoe u haar opbouwt, hoe u haar shaket en hoe die bleke, verzorgde afwerking intact blijft van de bar tot aan tafel.`,
      sections: [
        { id: 'tin', title: 'Wat er in de shaker gaat', html: `<ul>
<li>{gin} ml gin</li>
<li>{triple_sec} ml triple sec</li>
<li>{lemon_juice} ml citroensap</li>
<li>{cane_syrup} ml rietsuikersiroop</li>
<li>{dose} ml VERY AQUAFABA, gekoeld</li>
<li>Een cocktailglas of margaritaglas, en een paar gedroogde bloemetjes als garnering</li>
</ul>
<p>Dit recept heeft twee alcoholische ingrediënten: {gin} ml gin en {triple_sec} ml triple sec. Met de citroen en de siroop geeft dat een basis van {batch_pour} ml voordat de {dose} ml aquafaba erbij komt.</p>` },
        { id: 'shake', title: 'Zo shaket u de white lady', html: `<ol>
<li>Giet de gin, de triple sec, de citroen, de siroop en de aquafaba rechtstreeks uit de koelkast in de shaker.</li>
<li>Shake stevig zonder ijs. Deze eerste shake bouwt het schuim op, en de vloeistof komt er bleek en dik uit.</li>
<li>Voeg {ice} ijsblokjes toe en shake opnieuw, tot de shaker aan de buitenkant beslaat.</li>
<li>Zeef af in het cocktailglas of margaritaglas. Er zit geen ijs in het glas, dus de cocktail gaat de zaal in zo koud als de tweede shake hem heeft gemaakt.</li>
<li>Strooi een paar gedroogde bloemetjes op de kraag.</li>
</ol>` },
        { id: 'tips', title: "Tips voor een white lady met aquafaba", html: `<p>Er zit geen ijs in het glas om de presentatie te dragen. Het schuim ligt direct op de cocktail, met de gedroogde bloemetjes erop, dus u ziet het resultaat meteen. Zakt de garnering weg, kijk dan eerst naar de dry shake en de temperatuur van de aquafaba voor u iets anders verandert.</p>
<p>Gin, triple sec, citroen en siroop kunnen vóór de service samen in één fles, en elke sour op de kaart kunt u <a href="{pre_batching_page_href}">op dezelfde manier pre-batchen</a>. Een bestelling is dan {batch_pour} ml basis uit de fles plus {dose} ml gekoelde aquafaba. Voeg de aquafaba pas toe als u klaar bent om te shaken, zodat de kraag voor die cocktail ontstaat en niet in de batch blijft wachten. Het <a href="{process_href}">stappenblad voor de white lady</a> zet de vijf stappen op één pagina.</p>` },
        { id: 'fix', title: 'Als de kraag de garnering niet draagt', html: fixTable([
          ['De bloemetjes zinken in de cocktail', 'De kraag is dun: het ijs ging erin voor de dry shake', 'Eerst de dry shake, dan pas ijs'],
          ['Traag schuim dat nooit stevig wordt', 'De aquafaba was op kamertemperatuur', 'Houd het pak in de koelkast tot de shake'],
          ['De kraag is ingezakt tegen de tijd dat het glas bij de gast is', 'De cocktail bleef op de bar staan', 'Shake op bestelling en garneer meteen'],
          ['Halverwege de service geen hoogte meer', 'De aquafaba zat in de pre-batch', 'Batch alleen de gin, triple sec, citroen en siroop'],
        ], FIX) },
        { id: 'format', title: 'Elke avond white ladies, of alleen in het weekend?', html: `<p>Een 1 L Tetrapak is goed voor {drinks_1l} white ladies. Eenmaal geopend bewaart u het pak bij {opened_temp} °C en gebruikt u het binnen {opened_days} dagen. Komt uw kaart in die tijd door die {drinks_1l} cocktails heen, dan houdt vloeibaar het station eenvoudig.</p>
<p>Verkoopt de white lady trager of staat ze alleen bij evenementen op de kaart, dan wacht poeder makkelijker tussen twee services. Gebruik {powder} g met {water} ml water per drankje; een zakje van 200 g maakt er {drinks_200g}. De <a href="{calculator_href}">rekenhulp voor de white lady</a> rekent het hele recept om zodra u het aantal cocktails kent.</p>` },
      ],
      faq: [
        { q: 'Wat gebruik ik in plaats van eiwit in een white lady?', a: '{dose} ml VERY AQUAFABA vloeibaar, of {powder} g poeder aangemaakt met {water} ml water.' },
        { q: 'In welk glas gaat een white lady?', a: 'Een cocktailglas of margaritaglas, met een paar gedroogde bloemetjes op het schuim.' },
        { q: 'Hoeveel triple sec gaat er in een white lady?', a: '{triple_sec} ml, met {gin} ml gin, {lemon_juice} ml citroensap, {cane_syrup} ml rietsuikersiroop en {dose} ml aquafaba.' },
        { q: 'Verandert aquafaba de smaak van een white lady?', a: 'Nee. De licht geroosterde toets die VERY AQUAFABA in de verpakking heeft, van het koken van de kikkererwten, verdwijnt in de shake. Het schuim heeft geen eigen smaak, dus de gin, de triple sec en de citroen dragen de cocktail.' },
        { q: 'Kan ik white ladies batchen vóór de service?', a: 'Ja, de gin, triple sec, citroen en siroop. De aquafaba gaat er per drankje bij, bij de shake, nooit in de batch.' },
        { q: 'Hoeveel white ladies haal ik uit een pak van 1 L?', a: '{drinks_1l} cocktails, met {dose} ml aquafaba per drankje. Eenmaal geopend bewaart u het pak bij {opened_temp} °C en gebruikt u het binnen {opened_days} dagen.' },
      ],
    },

    'la-rosee': {
      title: 'La Rosée met aquafaba: cocktailrecept | VERY AQUAFABA',
      h1: 'La Rosée maken: een roze sour met aquafaba',
      crumb: 'La Rosée',
      card: 'Wodka, bergamot en framboos, in een coupe',
      eyebrow: 'Cocktailgids',
      description: 'La Rosée met VERY AQUAFABA: wodka, bergamotlikeur, framboos en {dose} ml aquafaba, twee keer geshaket en geserveerd in een coupe.',
      lead: `La Rosée trekt de aandacht nog voor iemand vraagt wat erin zit. Roze in het glas, bleek erboven, een takje munt licht op het schuim: deze cocktail wil eerst bekeken worden en dan pas geproefd. Dat betekent ook dat elk foutje opvalt. Met {dose} ml VERY AQUAFABA in plaats van het eiwit houdt de cocktail zijn strakke witte kraag boven de frambozenkleur, terwijl de wodka, de bergamotlikeur en {orange_blossom} druppels oranjebloesemwater in evenwicht blijven. Deze gids neemt u mee door de opbouw, de shake en de details die de cocktail precies maken in plaats van alleen mooi.`,
      sections: [
        { id: 'tin', title: 'Wat er in de shaker gaat', html: `<ul>
<li>{vodka} ml wodka</li>
<li>{bergamot_liqueur} ml bergamotlikeur</li>
<li>{lemon_juice} ml citroensap</li>
<li>{raspberry_syrup} ml frambozensiroop</li>
<li>{orange_blossom} druppels oranjebloesemwater</li>
<li>{dose} ml VERY AQUAFABA, gekoeld</li>
<li>Een coupeglas, en een takje munt als garnering</li>
</ul>
<p>De meeste maten zijn gewone barmaten. De uitzondering is het oranjebloesemwater: {orange_blossom} druppels per drankje, geteld en niet geschonken.</p>` },
        { id: 'shake', title: 'Zo shaket u La Rosée', html: `<ol>
<li>Doe de wodka, de bergamotlikeur, de citroen, de frambozensiroop, het oranjebloesemwater en de gekoelde aquafaba in de shaker.</li>
<li>Shake stevig zonder ijs om het schuim op te bouwen.</li>
<li>Voeg {ice} ijsblokjes toe en shake opnieuw om te koelen en te verdunnen.</li>
<li>Zeef af in de coupe.</li>
<li>Leg een takje munt op de kraag.</li>
</ol>` },
        { id: 'tips', title: "Tips voor La Rosée met aquafaba", html: `<p>Bij La Rosée let u op twee dingen. Het eerste is het oranjebloesemwater: {orange_blossom} druppels per drankje, geteld met een druppelfles in plaats van geschonken. Voor {ex_batches} cocktails zijn dat {ex_orange_blossom} druppels, en de <a href="{calculator_href}">rekenhulp voor La Rosée</a> telt ze mee met de grotere hoeveelheden.</p>
<p>Het tweede is het schuim. De frambozensiroop kleurt de hele cocktail, dus een dunne kraag laat meteen roze zien. Doe de dry shake voordat het ijs erbij gaat, en de munt erbovenop is uw laatste controle zodra de cocktail in de coupe staat.</p>
<p>Voor een drukke service batcht u de wodka, bergamotlikeur, citroen, frambozensiroop en het oranjebloesemwater samen. Elke bestelling begint dan met {batch_pour} ml uit de fles, en de druppels zijn al in de batch afgemeten. Houd de aquafaba koud en apart tot de shake, en leg het <a href="{process_href}">stappenblad voor La Rosée</a> bij de coupes voor de controles.</p>` },
        { id: 'fix', title: "Een dunne kraag bij La Rosée oplossen", html: fixTable([
          ['Roze dat door een dunne kraag schijnt', 'Het ijs ging erin voor de dry shake', 'Eerst de dry shake, dan pas ijs'],
          ['Slap schuim dat traag opkomt', 'De aquafaba was op kamertemperatuur', 'Houd hem in de koelkast tot de shake'],
          ['De munt zakt weg voor de cocktail op tafel staat', 'De cocktail bleef op de bar staan', 'Shake op bestelling en serveer meteen'],
          ['Het oranjebloesemwater overheerst', 'Er gingen meer dan {orange_blossom} druppels in', 'Meet het af met een druppelfles'],
        ], FIX) },
        { id: 'format', title: 'Staat La Rosée vast op de kaart, of af en toe?', html: `<p>Een 1 L Tetrapak maakt {drinks_1l} La Rosée en blijft eenmaal geopend {opened_days} dagen goed bij {opened_temp} °C. Dat werkt als de cocktail een vaste plek op de kaart heeft. Staat hij er als special op of verkoopt hij minder vaak, gebruik dan {powder} g poeder met {water} ml water per drankje en houd de rest van het zakje droog en gesloten.</p>` },
      ],
      faq: [
        { q: 'Wat is La Rosée?', a: 'Een roze sour van wodka, bergamotlikeur, citroen, frambozensiroop en oranjebloesemwater, geshaket met {dose} ml aquafaba en geserveerd in een coupe met een takje munt.' },
        { q: 'Hoeveel oranjebloesemwater gaat er in La Rosée?', a: '{orange_blossom} druppels per drankje, met {vodka} ml wodka, {bergamot_liqueur} ml bergamotlikeur, {lemon_juice} ml citroensap en {raspberry_syrup} ml frambozensiroop.' },
        { q: 'Kan ik La Rosée maken zonder eiwit?', a: 'Ja. In het VERY AQUAFABA recept komt het schuim van {dose} ml aquafaba, dus er zit geen ei in de cocktail.' },
        { q: 'In welk glas gaat La Rosée?', a: 'Een coupeglas, met een takje munt op het schuim.' },
        { q: 'Hoeveel aquafabapoeder per La Rosée?', a: '{powder} g poeder aangemaakt met {water} ml water, voor één cocktail.' },
        { q: 'Hoeveel La Rosée haal ik uit een pak van 1 L?', a: '{drinks_1l} cocktails, met {dose} ml aquafaba per drankje. Eenmaal geopend bewaart u het pak bij {opened_temp} °C en gebruikt u het binnen {opened_days} dagen.' },
      ],
    },

    'the-sunset': {
      title: 'The Sunset met aquafaba: cocktailrecept | VERY AQUAFABA',
      h1: 'The Sunset maken: een sour als longdrink met aquafaba',
      crumb: 'The Sunset',
      card: 'Rum en amaretto, aangevuld met ginger beer',
      eyebrow: 'Cocktailgids',
      description: 'The Sunset met VERY AQUAFABA: rum, amaretto, citroen en vanille-tonkasiroop geshaket met {dose} ml aquafaba, aangevuld met ginger beer.',
      lead: `The Sunset voelt bij de eerste blik op het recept al als een terrasdrankje. Rum, een scheutje amaretto, citroen en siroop worden geshaket zoals een sour, waarna de cocktail in het glas openbloeit met ginger beer en een witte kraag die erboven drijft. Met {dose} ml VERY AQUAFABA in plaats van het eiwit houdt u die zachte kraag zonder de vorm van de cocktail te veranderen. Waar het om draait, is de volgorde: eerst het schuim, dan pas verlengen. Hieronder vindt u de volledige werkwijze, waarom de ginger beer op het glas wacht, en wat u controleert als de kraag in de cocktail begint te verdwijnen.`,
      sections: [
        { id: 'tin', title: 'Wat in de shaker gaat, en wat in het glas gaat', html: `<ul>
<li>{rum} ml rum</li>
<li>{amaretto} ml amaretto</li>
<li>{lemon_juice} ml citroensap</li>
<li>{vanilla_tonka_syrup} ml vanille-tonkasiroop</li>
<li>{dose} ml VERY AQUAFABA, gekoeld</li>
<li>Ginger beer om aan te vullen, in een highballglas</li>
<li>Een paar gedroogde bloemetjes als garnering</li>
</ul>
<p>Zie de ginger beer als deel van het serveren, niet van de shake. Hij gaat er pas in als de cocktail in de highball staat.</p>` },
        { id: 'build', title: 'Zo maakt u The Sunset', html: `<ol>
<li>Giet de rum, de amaretto, de citroen, de vanille-tonkasiroop en de aquafaba in de shaker.</li>
<li>Shake stevig zonder ijs: hier ontstaat het schuim.</li>
<li>Voeg {ice} ijsblokjes toe en shake opnieuw om te koelen.</li>
<li>Zeef af in het highballglas.</li>
<li>Vul aan met ginger beer.</li>
<li>Strooi een paar gedroogde bloemetjes op de kraag.</li>
</ol>` },
        { id: 'tips', title: "Tips voor The Sunset met aquafaba", html: `<p>Bouw de kraag op voordat het lange deel van de cocktail erbij komt. Dry shake, shake met ijs en zeef eerst af; voeg dan de ginger beer toe in het glas. De volgorde is die van de <a href="{gin_fizz_href}">gin fizz</a>, maar hier vult u aan met ginger beer in plaats van tonic.</p>
<p>De amaretto is {amaretto} ml per drankje en de vanille-tonkasiroop {vanilla_tonka_syrup} ml. Dat zijn kleine maten in één highball, maar over een hele service tellen ze snel op, dus meet ze allebei af met de jigger en neem ze mee in de batch in plaats van op het oog te schenken.</p>
<p>Batch de rum, amaretto, citroen en siroop vóór de service. Houd de aquafaba koud voor de shaker en de ginger beer voor het glas. Zo volgt elke bestelling dezelfde volgorde: basis, aquafaba, twee shakes, afzeven, aanvullen. Het <a href="{process_href}">stappenblad voor The Sunset</a> zet die volgorde op één pagina.</p>` },
        { id: 'fix', title: 'Als de kraag in de ginger beer wegzakt', html: fixTable([
          ['Dunne kraag voor het aanvullen', 'Het ijs ging erin voor de dry shake', 'Eerst de dry shake, dan pas ijs'],
          ['De kraag zakt in als de ginger beer erbij komt', 'De ginger beer ging in de shaker', 'Eerst afzeven, dan in het glas aanvullen'],
          ['Slap schuim dat traag opkomt', 'De aquafaba was op kamertemperatuur', 'Houd hem in de koelkast tot de shake'],
          ['De kraag is weg tegen de tijd dat de cocktail op tafel staat', 'De cocktail bleef op de bar staan', 'Shake, vul aan en serveer meteen'],
        ], FIX) },
        { id: 'format', title: 'Het hele seizoen Sunsets, of af en toe?', html: `<p>Een 1 L Tetrapak maakt {drinks_1l} Sunsets en een bag-in-box van 10 L maakt er {drinks_10l}. Eenmaal geopend bewaart u vloeibare aquafaba bij {opened_temp} °C en gebruikt u hem binnen {opened_days} dagen, dus kies de grootte naar het aantal dat u in die periode echt serveert.</p>
<p>Voor losse bestellingen gebruikt u {powder} g poeder met {water} ml water per drankje. Het geopende zakje blijft droog en gesloten goed tot de houdbaarheidsdatum, en de <a href="{calculator_href}">rekenhulp voor The Sunset</a> berekent de hele service op basis van het aantal cocktails dat u verwacht.</p>` },
      ],
      faq: [
        { q: 'Wanneer gaat de ginger beer in The Sunset?', a: 'Nadat de cocktail in het highballglas is afgezeefd. De ginger beer gaat er bovenop en wordt nooit geshaket.' },
        { q: 'Kan ik The Sunset maken zonder eiwit?', a: 'Ja. Het schuim komt van {dose} ml VERY AQUAFABA, geshaket met de rum, amaretto, citroen en siroop.' },
        { q: 'Hoeveel amaretto gaat er in The Sunset?', a: '{amaretto} ml, met {rum} ml rum, {lemon_juice} ml citroensap, {vanilla_tonka_syrup} ml vanille-tonkasiroop en {dose} ml aquafaba.' },
        { q: 'Hoeveel aquafabapoeder per Sunset?', a: '{powder} g poeder aangemaakt met {water} ml water, voor één cocktail.' },
        { q: 'Kan ik The Sunset batchen vóór de service?', a: 'Batch de rum, amaretto, citroen en siroop. De aquafaba gaat erbij bij de shake en de ginger beer in het glas.' },
        { q: 'Hoeveel Sunsets haal ik uit een bag-in-box van 10 L?', a: '{drinks_10l} cocktails, met {dose} ml aquafaba per drankje. Eenmaal geopend bewaart u de bag-in-box bij {opened_temp} °C en gebruikt u hem binnen {opened_days} dagen.' },
      ],
    },
  },

  topics: {
    'where-to-buy': {
      title: 'Waar koop ik aquafaba voor cocktails? | VERY AQUAFABA',
      h1: 'Waar koop ik aquafaba voor cocktails?',
      crumb: 'Waar kopen',
      eyebrow: 'Cocktails',
      description: 'Waar u VERY AQUAFABA voor uw bar koopt: Amazon in de Verenigde Staten en Duitsland, InstantChef in Frankrijk en elders het aanvraagformulier.',
      lead: `Zodra aquafaba een vaste plek achter de bar krijgt, komen de praktische vragen. Vindt u het in uw land? Wilt u vloeibaar, klaar om te schenken, of poeder dat op de plank kan wachten tijdens rustigere weken? VERY AQUAFABA wordt per land via andere kanalen verkocht, en het juiste formaat hangt vooral af van hoe snel u een geopend pak opmaakt.`,
      sections: [
        { id: 'countries', title: 'Waar koopt u aquafaba in uw land?', html: `${table(['Waar u bent', 'Waar u koopt'], [
          ['<a href="{united_states_nl_href}">Verenigde Staten</a>', 'Amazon, ook het aanbod voor cocktails'],
          ['<a href="{germany_nl_href}">Duitsland</a>', 'Amazon'],
          ['<a href="{france_nl_href}">Frankrijk</a>', 'InstantChef'],
          ['<a href="{united_kingdom_nl_href}">Verenigd Koninkrijk</a>, <a href="{belgium_nl_href}">België</a>, <a href="{netherlands_nl_href}">Nederland</a> en alle andere landen', 'Het aanvraagformulier op deze pagina'],
        ])}
<p>De weg verschilt per markt, dus begin bij uw land en niet bij een verpakkingsgrootte.</p>` },
        { id: 'choose', title: 'Hoe snel gebruikt u een geopende verpakking?', html: `<p>De aankoop wordt eenvoudiger zodra u weet <a href="{cocktails_href}">hoe snel u een geopend pak opmaakt</a>. Vloeibaar schenkt u rechtstreeks uit de koelkast, en eenmaal geopend blijft het {opened_days} dagen goed bij {opened_temp} °C. Poeder kan droog en gesloten wachten tussen twee services, wat handig is als sours minder vaak besteld worden.</p>` },
        { id: 'packs', title: 'Van het aantal sours naar de verpakking', html: `${table(['Verpakking', 'Cocktails ({dose} ml aquafaba per drankje)'], [
          ['1 L Tetrapak', '{drinks_1l}'],
          ['Bag-in-box van 10 L', '{drinks_10l}'],
          ['Zakje van 30 g', '{drinks_30g}'],
          ['Zakje van 200 g', '{drinks_200g}'],
          ['Zak van 3 kg', '{drinks_3kg}'],
        ])}
<p>Deze aantallen gaan uit van de dosis van {dose} ml in de <a href="{pisco_sour_href}">pisco sour</a>, de <a href="{amaretto_sour_href}">amaretto sour</a>, de <a href="{gin_fizz_href}">gin fizz</a> en de andere cocktailrecepten. Werkt u met poeder, dan gebruikt elke cocktail {powder} g poeder aangemaakt met {water} ml water.</p>` },
        { id: 'groups', title: 'Bestellen voor meerdere zaken', html: `<p>Bestelt u voor meerdere zaken of een volume dat verder gaat dan één verpakking, gebruik dan het professionele aanvraagformulier en vermeld het aantal vestigingen en de formaten die u overweegt. Zo hebben wij genoeg context om uw aanvraag te beantwoorden en de technische fiche mee te sturen. Voor u bestelt, kunt u <a href="{bars_href}">het aquafabastation voor uw bar inrichten</a>.</p>` },
      ],
      faq: [
        { q: 'Waar koop ik aquafaba voor cocktails in de Verenigde Staten?', a: 'Op Amazon, met ook een aanbod speciaal voor cocktails: [VERY AQUAFABA kopen in de Verenigde Staten]({united_states_nl_href}).' },
        { q: 'Kan ik VERY AQUAFABA kopen in het Verenigd Koninkrijk?', a: 'Via het aanvraagformulier op deze pagina: laat uw gegevens en de formaten die u nodig hebt achter, en wij nemen contact met u op over de bestelling.' },
        { q: 'Waar koop ik het in Frankrijk?', a: 'Op InstantChef, vloeibaar en in poedervorm: [VERY AQUAFABA kopen in Frankrijk]({france_nl_href}).' },
        { q: 'Welke verpakking moet een bar kopen?', a: 'Tel uw sours. Is een geopend pak binnen {opened_days} dagen op, dan is vloeibaar de makkelijke keuze; zo niet, dan is poeder veiliger, want een geopend zakje blijft droog en gesloten goed tot de houdbaarheidsdatum.' },
        { q: 'Hoeveel cocktails haal ik uit een pak van 1 L?', a: '{drinks_1l} cocktails, met {dose} ml aquafaba per drankje, de dosis van elke VERY AQUAFABA cocktail.' },
        { q: 'Kan ik de technische fiche krijgen voor ik bestel?', a: 'Ja. Vraag erom via het professionele aanvraagformulier op deze pagina of via het [contactformulier]({contact_href}).' },
      ],
    },

    powder: {
      title: 'Aquafabapoeder in cocktails: kan dat? | VERY AQUAFABA',
      h1: 'Kan ik aquafabapoeder in cocktails gebruiken?',
      crumb: 'Aquafabapoeder in cocktails',
      eyebrow: 'Cocktails',
      description: 'Ja: {powder} g VERY AQUAFABA poeder met {water} ml water per drankje, gekoeld en dan geshaket zoals vloeibaar. Wanneer bars voor poeder kiezen.',
      lead: `Poeder is vooral zinvol als uw sours in golven besteld worden in plaats van elke avond. U maakt aan wat de service nodig heeft, koelt het, en de rest van het zakje blijft droog en gesloten tot de volgende keer. Voor één cocktail gebruikt u {powder} g VERY AQUAFABA poeder met {water} ml water. Eenmaal aangemaakt gaat het in dezelfde shaker en volgt het dezelfde methode met twee shakes als vloeibare aquafaba.`,
      sections: [
        { id: 'why', title: 'Poeder past als sours af en toe besteld worden', html: `<p>Een geopend zakje blijft droog en gesloten goed tot de houdbaarheidsdatum. Zo maakt u alleen aan wat de service van vandaag nodig heeft en laat u de rest liggen voor de volgende.</p>
${table(['Drankjes vanavond', 'Poeder', 'Water'], [
  ['10', '{p10} g', '{w10} ml'],
  ['{ex_batches}', '{ex_powder} g', '{ex_water} ml'],
])}
<p>Voor één cocktail is dat {powder} g poeder in {water} ml water, gekoeld voor het in de shaker gaat. Deze doses volgen uit de poederregel: {white_powder} g poeder en {white_water} ml water geven {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba.</p>` },
        { id: 'make', title: 'Maak alleen aan wat u vanavond nodig hebt', html: `<p>Weeg het poeder af voor het aantal cocktails dat u verwacht, voeg het bijbehorende water toe en koel de aangemaakte aquafaba vóór de service. Houd hem in de koelkast tot hij in de shaker gaat. Dezelfde <a href="{reconstitution_href}">verhouding van poeder en water</a> geldt van één cocktail tot een volledige service.</p>` },
        { id: 'pouch', title: 'Welk zakje u op de plank achter de bar zet', html: `<p>Bij {dose} ml per drankje maakt een zakje van 30 g {drinks_30g} cocktails, een zakje van 200 g {drinks_200g} en een zak van 3 kg {drinks_3kg}. Ongeopende zakjes blijven minstens {unopened_months} maanden goed op kamertemperatuur, dus u kunt de bestelling afstemmen op uw werkelijke cocktailvolume en niet op de volgende paar services.</p>
<p>Wilt u de methode testen op een recept dat u kent, begin dan met de <a href="{pisco_sour_href}">pisco sour</a>, de <a href="{amaretto_sour_href}">amaretto sour</a> of de <a href="{gin_fizz_href}">gin fizz</a>, en <a href="{where_to_buy_page_href}">kies daarna het poederformaat dat in uw land te koop is</a>.</p>` },
        { id: 'mistakes', title: 'Drie fouten die de kraag plat maken', html: `<ul>
<li><strong>IJs in de shaker vanaf het begin.</strong> De kraag wordt dun. Shake eerst zonder ijs, dan met ijs.</li>
<li><strong>Aangemaakte aquafaba die op de bar blijft staan.</strong> Warme aquafaba geeft traag, slap schuim. Houd hem koud tot de shake.</li>
<li><strong>Aquafaba in de pre-batch.</strong> Halverwege de service is de hoogte weg. Batch de sterkedrank, het citrussap en de siroop, en voeg de aquafaba per drankje toe.</li>
</ul>` },
      ],
      faq: [
        { q: 'Hoeveel aquafabapoeder gebruik ik per cocktail?', a: '{powder} g VERY AQUAFABA poeder aangemaakt met {water} ml water, voor een cocktail die {dose} ml vloeibare aquafaba vraagt.' },
        { q: 'Schuimt aquafabapoeder net zo goed als vloeibare aquafaba?', a: 'Ja. Eenmaal aangemaakt en gekoeld gaat het in de shaker en door de twee shakes, net als vloeibare aquafaba.' },
        { q: 'Hoe lang blijft een geopend zakje goed?', a: 'Een geopend zakje poeder bewaart u droog en gesloten, en dan blijft het goed tot de houdbaarheidsdatum op het zakje. Ongeopend blijft het minstens {unopened_months} maanden goed op kamertemperatuur.' },
        { q: 'Kan ik het poeder vóór de service aanmaken?', a: 'Ja. Maak vóór de service aan wat de avond nodig heeft en bewaar het in de koelkast tot de shake.' },
        { q: 'Welk zakje moet een bar kopen?', a: 'Een zakje van 30 g maakt {drinks_30g} cocktails, een zakje van 200 g {drinks_200g} en een zak van 3 kg {drinks_3kg}, bij {dose} ml per drankje.' },
        { q: 'Waar koop ik aquafabapoeder voor cocktails?', a: 'Dat hangt af van uw land: [bestel aquafabapoeder voor uw bar]({where_to_buy_page_href}) via Amazon, InstantChef of ons aanvraagformulier.' },
      ],
    },

    'how-to-make': {
      title: 'Cocktails maken met aquafaba | VERY AQUAFABA',
      h1: 'Hoe maak ik cocktails met aquafaba?',
      crumb: 'Cocktails maken met aquafaba',
      eyebrow: 'Cocktails',
      description: 'Vervang het eiwit door {dose} ml VERY AQUAFABA en houd uw recept: één methode voor elke sour, en zeven sours om ze op uit te proberen.',
      lead: `Aquafaba verandert één ingrediënt, niet de manier waarop u over een sour denkt. Weet u al hoe u een cocktail met eiwit opbouwt, een dry shake geeft en afwerkt, dan is de techniek vanaf de eerste bestelling vertrouwd. Gebruik {dose} ml VERY AQUAFABA per drankje, bewaar het ijs voor de tweede shake, en dezelfde methode werkt van een pisco sour tot een white lady, La Rosée of een lange gin fizz.`,
      sections: [
        { id: 'method', title: 'Eén methode, de afwerking verschilt per cocktail', html: `<ol>
<li>Giet de sterkedrank, het citrussap, de siroop en de aquafaba in de shaker.</li>
<li>Shake stevig zonder ijs. Hier ontstaat het schuim.</li>
<li>Voeg {ice} ijsblokjes toe en shake opnieuw om te koelen.</li>
<li>Zeef af in het glas en garneer.</li>
</ol>
<p>Twee van de zeven cocktails hieronder zijn longdrinks: de gin fizz krijgt tonic en The Sunset ginger beer, allebei na het afzeven in het glas geschonken en nooit in de shaker.</p>` },
        { id: 'recipes', title: 'Zeven sours om mee te beginnen', html: `${table(['Cocktail', 'Basis', 'Glas'], [
          ['<a href="{whiskey_recipe_href}">Whiskey sour</a>', 'Bourbon of Ierse whiskey', 'Old fashioned'],
          ['<a href="{pisco_sour_href}">Pisco sour</a>', 'Pisco', 'Old fashioned'],
          ['<a href="{amaretto_sour_href}">Amaretto sour</a>', 'Amaretto, met vanillesiroop', 'Old fashioned'],
          ['<a href="{gin_fizz_href}">Gin fizz</a>', 'Gin, aangevuld met tonic', 'Highball'],
          ['<a href="{white_lady_href}">White lady</a>', 'Gin en triple sec', 'Cocktailglas of margaritaglas'],
          ['<a href="{la_rosee_href}">La Rosée</a>', 'Wodka en bergamotlikeur, met framboos', 'Coupe'],
          ['<a href="{the_sunset_href}">The Sunset</a>', 'Rum en amaretto, aangevuld met ginger beer', 'Highball'],
        ])}
<p>Alle zeven recepten hier gebruiken {dose} ml VERY AQUAFABA per drankje, en de zes naast de whiskey sour hebben elk een eigen rekenhulp en stappenblad. Zo onthoudt het station één aquafabamaat, ook al veranderen de sterkedrank, de glazen, de garnering en het aanvullen van cocktail tot cocktail.</p>` },
        { id: 'order', title: 'Wat de twee shakes doen', html: `<p>De eerste shake is voor de kraag. De tweede is om te koelen en te verdunnen. Omdat die taken gescheiden blijven, komt de dry shake in elk recept van deze reeks eerst.</p>` },
        { id: 'fix', title: 'Als de kraag dun uitvalt', html: fixTable([
          ['Een dunne kraag, of helemaal geen', 'Het ijs zat er vanaf het begin in', 'Eerst de dry shake, dan pas ijs'],
          ['Traag, slap schuim', 'De aquafaba was op kamertemperatuur', 'Houd hem in de koelkast tot de shake'],
          ['Halverwege de service geen hoogte meer', 'De aquafaba zat in de pre-batch', 'Batch de rest en voeg de aquafaba per drankje toe'],
          ['Een longdrink die zijn kraag verloor', 'De tonic of ginger beer ging in de shaker', 'Eerst afzeven, dan in het glas aanvullen'],
          ['Het schuim zakt in voor de cocktail bij de gast is', 'De cocktail bleef op de bar staan', 'Shake op bestelling en serveer meteen'],
        ], FIX) },
        { id: 'next', title: 'Begin met een sour die u al kent', html: `<p>Begin met een sour die u al maakt. Vervang het eiwit door {dose} ml aquafaba, houd de rest van het recept, en krijg het ritme van de twee shakes onder de knie voor u naar de andere cocktails gaat. Voor een drukke service kunt u <a href="{pre_batching_page_href}">de sterkedrank, het citrussap en de siroop batchen</a>, maar de aquafaba bewaart u voor elke shake apart.</p>
<p>Weet u ongeveer hoeveel sours u schenkt, dan vertelt datzelfde getal of u beter <a href="{powder_page_href}">met het zakje poeder werkt</a> en welke <a href="{where_to_buy_page_href}">verpakking u voor uw bar bestelt</a>.</p>` },
      ],
      faq: [
        { q: 'Kan ik aquafaba gebruiken in plaats van eiwit in elke sour?', a: 'In de zeven sours die wij publiceren, ja: {dose} ml aquafaba neemt de plaats van het eiwit in, en de rest van het recept blijft zoals het is.' },
        { q: 'Moet ik anders shaken?', a: 'Nee. Shake één keer zonder ijs om het schuim op te bouwen, dan opnieuw met {ice} ijsblokjes om te koelen, zoals u met eiwit zou doen.' },
        { q: 'Smaakt aquafaba naar kikkererwten in een cocktail?', a: 'Nee. In de verpakking heeft VERY AQUAFABA een licht geroosterde toets van het koken van de kikkererwten. Eenmaal geshaket in een drankje verdwijnt die: het schuim heeft geen eigen smaak, en de smaak blijft bij uw sterkedrank, citrus en siroop.' },
        { q: 'Hoeveel aquafabapoeder vervangt de vloeibare aquafaba in een sour?', a: '{powder} g poeder aangemaakt met {water} ml water, voor een cocktail die {dose} ml vloeibare aquafaba vraagt.' },
        { q: 'Kan ik longdrinks maken met een schuimkraag?', a: 'Ja. De gin fizz en The Sunset worden met aquafaba geshaket, afgezeefd in een highball en in het glas aangevuld met tonic of ginger beer.' },
        { q: 'Waar koop ik aquafaba voor cocktails?', a: 'U kunt [aquafaba voor uw bar bestellen]({where_to_buy_page_href}) via Amazon in de Verenigde Staten en Duitsland, via InstantChef in Frankrijk, of overal elders via het aanvraagformulier.' },
      ],
    },

    'pre-batching': {
      title: 'Kan ik sours met aquafaba pre-batchen? | VERY AQUAFABA',
      h1: 'Kan ik sours met aquafaba pre-batchen?',
      crumb: 'Sours pre-batchen',
      eyebrow: 'Cocktails',
      description: 'Ja, op de aquafaba na: batch de sterkedrank, het citrussap en de siroop vóór de service en voeg bij de shake {dose} ml VERY AQUAFABA toe per drankje.',
      lead: `Met een pre-batch schenkt u elke sour uit één fles, in plaats van uit meerdere flessen per bestelling. Sterkedrank, citrussap en siroop kunnen allemaal klaarstaan vóór de service. De aquafaba houdt u apart: voeg {dose} ml VERY AQUAFABA toe zodra de bestelling binnenkomt, en shake het schuim vers in de shaker. Zo hebt u de snelheid van een batch zonder dat de kraag uren moet wachten.`,
      sections: [
        { id: 'batch', title: 'Een batch voor {ex_batches} pisco sours', html: `${table(['In de batch', 'Apart, in de koelkast'], [
          ['Pisco: {ex_pisco} ml', 'VERY AQUAFABA vloeibaar: {ex_dose} ml'],
          ['Limoensap: {ex_lime_juice} ml', 'of aangemaakt poeder: {ex_powder} g + {ex_water} ml water'],
          ['Rietsuikersiroop: {ex_cane_syrup} ml', ''],
        ])}
<p>Bij de shake krijgt elke cocktail {batch_pour} ml uit de fles en {dose} ml aquafaba uit de koelkast. De rest van de methode blijft gelijk: dry shake, {ice} ijsblokjes, opnieuw shaken, afzeven. De cijfers zijn die van de <a href="{pisco_sour_href}">pisco sour met aquafaba</a>.</p>` },
        { id: 'out', title: 'Twee dingen wachten op de bestelling', html: `<p>Houd de aquafaba apart, zodat elke cocktail zijn kraag in de shaker opbouwt. Houd bij longdrinks ook het bruisende deel apart: de tonic voor de <a href="{gin_fizz_href}">gin fizz</a> en de ginger beer voor <a href="{the_sunset_href}">The Sunset</a> gaan allebei na het afzeven in het glas.</p>
<p>De rest van de basis kunt u vooraf batchen, ook de twee alcoholische ingrediënten van de <a href="{white_lady_href}">white lady</a>, de vanillesiroop van de <a href="{amaretto_sour_href}">amaretto sour</a> en de frambozensiroop van <a href="{la_rosee_href}">La Rosée</a>.</p>` },
        { id: 'station', title: 'Zo ziet het station eruit tijdens de service', html: `<p>Zet de batchfles naast de shakers en de aquafaba koud onder het station. Elke bestelling is dan één keer basis schenken, {dose} ml aquafaba, een dry shake en een tweede shake met ijs. Maak de cocktail als de bon binnenkomt, en vul geen shakers vooraf.</p>` },
        { id: 'events', title: 'Batchen voor een evenement', html: `<p>Voor een evenement bepaalt u eerst het aantal cocktails en laat u de rekenhulp voor de <a href="{pisco_sour_calc_href}">pisco sour</a>, de <a href="{gin_fizz_calc_href}">gin fizz</a> of de <a href="{white_lady_calc_href}">white lady</a> de batch berekenen. Een 1 L Tetrapak is goed voor {drinks_1l} cocktails, met {dose} ml aquafaba per stuk; eenmaal geopend bewaart u het pak bij {opened_temp} °C en gebruikt u het binnen {opened_days} dagen. Werkt u met poeder, maak dan aan wat het evenement nodig heeft voordat de deuren opengaan en houd het koud vóór de service.</p>` },
      ],
      faq: [
        { q: 'Mag aquafaba in mijn pre-batch voor sours?', a: 'Nee. Voeg bij de shake {dose} ml toe aan elke shaker; het schuim maakt u cocktail per cocktail.' },
        { q: 'Wat gaat er in de batchfles?', a: 'De sterkedrank, het citrussap en de siroop. Voor {ex_batches} pisco sours: {ex_pisco} ml pisco, {ex_lime_juice} ml limoensap en {ex_cane_syrup} ml rietsuikersiroop.' },
        { q: 'Kan ik longdrinks zoals de gin fizz batchen?', a: 'Ja, het deel dat geshaket wordt. De tonic of ginger beer gaat na het afzeven in elk glas.' },
        { q: 'Kan ik het poeder vooraf aanmaken voor een gebatchte service?', a: 'Ja. Maak vóór de service {ex_powder} g poeder aan met {ex_water} ml water voor {ex_batches} cocktails en houd het koud tot de shake.' },
        { q: 'Hoe lang blijft een geopend pak aquafaba goed tijdens een evenement?', a: 'Geopend vloeibaar product bewaart u bij {opened_temp} °C en gebruikt u binnen {opened_days} dagen. Schrijf de openingsdatum op het pak.' },
      ],
    },
  },

  calculator: {
    'pisco-sour': {
      title: 'Aquafaba per pisco sour berekenen | VERY AQUAFABA',
      h1: 'Hoeveel aquafaba per pisco sour? Hoeveelheden berekenen',
      description: 'Bereken de VERY AQUAFABA, pisco, limoen en siroop voor elk aantal pisco sours, vloeibaar of als poeder met het bijbehorende water.',
      lead: `Vul in hoeveel pisco sours u plant en de rekenhulp berekent de pisco, het limoensap, de siroop en de VERY AQUAFABA, vloeibaar of als poeder. Voor {ex_batches} pisco sours is dat {ex_pisco} ml pisco, {ex_lime_juice} ml vers limoensap en {ex_dose} ml aquafaba.`,
      sections: [
        { id: 'scaling', title: 'Wat meegroeit, en wat per cocktail blijft', html: `<p>Verdubbel het aantal cocktails en u verdubbelt de pisco, limoen, siroop en aquafaba. Wat u niet kunt batchen, is het schuim: elke cocktail krijgt nog zijn eigen dry shake, gevolgd door {ice} ijsblokjes voor de tweede shake. Plan de ingrediënten in bulk, maar bouw elke cocktail apart op.</p>` },
        { id: 'packs', title: 'Hoeveel pisco sours uit een verpakking', html: `<ul>
<li><strong>1 L Tetrapak:</strong> {drinks_1l} pisco sours.</li>
<li><strong>Bag-in-box van 10 L:</strong> {drinks_10l} pisco sours.</li>
<li><strong>Zakje van 200 g:</strong> {drinks_200g} pisco sours.</li>
<li><strong>Zak van 3 kg:</strong> {drinks_3kg} pisco sours.</li>
</ul>
<p>Een geopend pak vloeibare aquafaba bewaart u bij {opened_temp} °C en gebruikt u binnen {opened_days} dagen, dus kies de verpakking naar wat u in die tijd schenkt. Een geopend zakje blijft droog en gesloten goed tot de houdbaarheidsdatum.</p>` },
        { id: 'example', title: '{ex_batches} pisco sours: wat klaar moet staan', html: `<p>Voor {ex_batches} pisco sours zet u {ex_pisco} ml pisco, {ex_lime_juice} ml limoensap, {ex_cane_syrup} ml rietsuikersiroop en {ex_dose} ml VERY AQUAFABA klaar. U hebt ook {ex_ice} ijsblokjes nodig voor de tweede shakes. Een 1 L Tetrapak dekt de aquafaba en laat {ex_left_1l} ml over om binnen de resterende {opened_days} dagen van het geopende pak te gebruiken.</p>
<p>Werkt u liever met poeder? Maak {ex_powder} g aan met {ex_water} ml water vóór de service en houd het koud. De hoeveelheden kunt u vooraf klaarzetten, maar elke cocktail krijgt dezelfde <a href="{guide_href}">service met twee shakes</a>, en het <a href="{process_href}">stappenblad voor de pisco sour</a> geeft het station de controles.</p>` },
      ],
      faq: [
        { q: 'Hoeveel aquafaba heb ik nodig voor één pisco sour?', a: '{dose} ml VERY AQUAFABA vloeibaar, of {powder} g poeder met {water} ml water.' },
        { q: 'Hoeveel pisco en limoen voor {ex_batches} cocktails?', a: '{ex_pisco} ml pisco en {ex_lime_juice} ml limoensap, met {ex_cane_syrup} ml rietsuikersiroop en {ex_dose} ml aquafaba.' },
        { q: 'Rekent de rekenhulp het ijs mee?', a: 'Nee, alleen de vloeistoffen. Reken op {ice} ijsblokjes per drankje, voor de tweede shake.' },
        { q: 'Moet ik al het poeder in één keer aanmaken?', a: 'Maak voordat de deuren opengaan aan wat de service nodig heeft en houd het koud. Een geopend zakje blijft droog en gesloten goed tot de houdbaarheidsdatum, dus de rest wacht op de volgende service.' },
      ],
    },
    'amaretto-sour': {
      title: 'Aquafaba per amaretto sour berekenen | VERY AQUAFABA',
      h1: 'Hoeveel aquafaba per amaretto sour? Hoeveelheden berekenen',
      description: 'Reken een amaretto sour met VERY AQUAFABA om: de aquafaba, amaretto, citroen en vanillesiroop voor elk aantal cocktails, vloeibaar of als poeder.',
      lead: `Vul in hoeveel amaretto sours u plant en de rekenhulp berekent de amaretto, het citroensap, de vanillesiroop en de VERY AQUAFABA, vloeibaar of als poeder. Kijk eerst naar de amaretto: bij {amaretto} ml per drankje vragen {ex_batches} amaretto sours {ex_amaretto} ml.`,
      sections: [
        { id: 'scaling', title: 'Kijk eerst naar de fles amaretto', html: `<p>Bij {amaretto} ml per drankje groeit de amaretto het snelst. De citroen, de vanillesiroop en de aquafaba groeien mee, maar de service blijft per cocktail: elke cocktail een dry shake, daarna {ice} ijsblokjes erbij en opnieuw shaken.</p>` },
        { id: 'packs', title: 'Hoeveel amaretto sours uit een verpakking', html: `<ul>
<li><strong>1 L Tetrapak:</strong> {drinks_1l} cocktails, eenmaal geopend binnen {opened_days} dagen op te maken.</li>
<li><strong>Bag-in-box van 10 L:</strong> {drinks_10l} cocktails, voor zaken met een groot volume of meerdere bars die een verpakking delen.</li>
<li><strong>Zakje van 200 g:</strong> {drinks_200g} cocktails, droog en gesloten goed tot de houdbaarheidsdatum.</li>
<li><strong>Zak van 3 kg:</strong> {drinks_3kg} cocktails.</li>
</ul>
<p>In een rustige week maakt u alleen aan wat de avond nodig heeft: {p10} g poeder in {w10} ml water volstaat voor tien amaretto sours, en de rest van het zakje blijft droog en gesloten voor de volgende service.</p>` },
        { id: 'example', title: '{ex_batches} amaretto sours: de lijst voor de service', html: `<p>Voor {ex_batches} cocktails zet u {ex_amaretto} ml amaretto, {ex_lemon_juice} ml citroensap, {ex_vanilla_syrup} ml vanillesiroop en {ex_dose} ml VERY AQUAFABA apart. Met poeder wordt dat {ex_powder} g, aangemaakt met {ex_water} ml water.</p>
<p>Batch de amaretto, citroen en siroop vóór het evenement. Houd de aquafaba koud en apart, zodat elke bestelling <a href="{guide_href}">haar schuim in de shaker opbouwt</a>, en het <a href="{process_href}">stappenblad voor de amaretto sour</a> toont hoe elke stap eruit moet zien.</p>` },
      ],
      faq: [
        { q: 'Hoeveel amaretto voor {ex_batches} amaretto sours?', a: '{ex_amaretto} ml amaretto, met {ex_lemon_juice} ml citroensap, {ex_vanilla_syrup} ml vanillesiroop en {ex_dose} ml aquafaba.' },
        { q: 'Hoeveel aquafabapoeder per amaretto sour?', a: '{powder} g poeder aangemaakt met {water} ml water, voor één cocktail.' },
        { q: 'Groeit de vanillesiroop mee met het aantal cocktails?', a: 'Ja, {vanilla_syrup} ml per drankje, in rechte lijn zoals de andere ingrediënten.' },
        { q: 'Welke verpakking past bij een amaretto sour die een paar keer per week verkoopt?', a: 'Het poeder: een zakje van 200 g maakt {drinks_200g} cocktails en blijft na het openen droog en gesloten goed tot de houdbaarheidsdatum.' },
      ],
    },
    'gin-fizz': {
      title: 'Aquafaba per gin fizz berekenen | VERY AQUAFABA',
      h1: 'Hoeveel aquafaba per gin fizz? Hoeveelheden berekenen',
      description: 'Bereken de VERY AQUAFABA, gin, citroen en rietsuikersiroop voor elk aantal gin fizzes, vloeibaar of als poeder met het bijbehorende water.',
      lead: `Vul in hoeveel gin fizzes u plant en de rekenhulp berekent alles wat in de shaker gaat: gin, citroensap, rietsuikersiroop en VERY AQUAFABA, vloeibaar of als poeder. De tonic telt niet mee, want de hoeveelheid hangt af van uw glas.`,
      sections: [
        { id: 'tonic', title: 'Wat de rekenhulp weglaat', html: `<p>De tabel stopt voor het aanvullen. Tonic gaat na het afzeven in de highball, dus de hoeveelheid volgt uw glas en geen vaste maat. Ook het ijs valt buiten de rekenhulp: reken op {ice} ijsblokjes per drankje voor de tweede shake.</p>` },
        { id: 'packs', title: 'Hoeveel gin fizzes uit een verpakking', html: `<ul>
<li><strong>1 L Tetrapak:</strong> {drinks_1l} gin fizzes.</li>
<li><strong>Bag-in-box van 10 L:</strong> {drinks_10l} gin fizzes, voor zaken met een groot volume of meerdere bars die een verpakking delen.</li>
<li><strong>Zakje van 200 g:</strong> {drinks_200g} gin fizzes.</li>
<li><strong>Zak van 3 kg:</strong> {drinks_3kg} gin fizzes.</li>
</ul>
<p>Eenmaal open bewaart u een pak vloeibare aquafaba bij {opened_temp} °C en gebruikt u het binnen {opened_days} dagen; een zakje blijft droog en gesloten goed tot de houdbaarheidsdatum.</p>` },
        { id: 'example', title: '{ex_batches} gin fizzes: wat achter de bar klaarstaat', html: `<p>Voor {ex_batches} gin fizzes zet u {ex_gin} ml gin, {ex_lemon_juice} ml citroensap, {ex_cane_syrup} ml rietsuikersiroop en {ex_dose} ml VERY AQUAFABA klaar. Werkt u met poeder, maak dan vóór de service {ex_powder} g aan met {ex_water} ml water.</p>
<p>De tonic blijft buiten de batch en buiten de rekenhulp, want de <a href="{guide_href}">gin fizz wordt in het glas aangevuld</a>. Shake elke cocktail, zeef hem af in de highball en vul aan zoals u dat in uw zaak doet, in de volgorde van het <a href="{process_href}">stappenblad voor de gin fizz</a>.</p>` },
      ],
      faq: [
        { q: 'Hoeveel aquafaba heb ik nodig voor één gin fizz?', a: '{dose} ml VERY AQUAFABA vloeibaar, of {powder} g poeder met {water} ml water.' },
        { q: 'Waarom staat de tonic niet in de rekenhulp?', a: 'Hij komt na het afzeven bovenop elke cocktail, dus de hoeveelheid hangt af van het glas. Alles wat in de shaker gaat, staat in de tabel.' },
        { q: 'Hoeveel gin voor {ex_batches} gin fizzes?', a: '{ex_gin} ml gin, met {ex_lemon_juice} ml citroensap, {ex_cane_syrup} ml rietsuikersiroop en {ex_dose} ml aquafaba.' },
        { q: 'Welke verpakking past bij een bar die elke avond gin fizzes verkoopt?', a: "Een 1 L Tetrapak: goed voor {drinks_1l} cocktails, eenmaal geopend binnen {opened_days} dagen te gebruiken. De bag-in-box van 10 L ({drinks_10l} cocktails) past bij zaken met een groot volume of meerdere bars die een verpakking delen." },
      ],
    },
    'white-lady': {
      title: 'Aquafaba per white lady berekenen | VERY AQUAFABA',
      h1: 'Hoeveel aquafaba per white lady? Hoeveelheden berekenen',
      description: 'Bereken de VERY AQUAFABA, gin, triple sec, citroen en rietsuikersiroop voor elk aantal white ladies, uit de Tetrapak of het zakje.',
      lead: `Vul in hoeveel white ladies u wilt serveren en de rekenhulp berekent de gin, de triple sec, het citroensap, de rietsuikersiroop en de VERY AQUAFABA, vloeibaar of als poeder. Met twee alcoholische ingrediënten in de shaker loont het om beide flessen na te kijken: {ex_batches} white ladies vragen {ex_gin} ml gin en {ex_triple_sec} ml triple sec.`,
      sections: [
        { id: 'spirits', title: 'De gin gaat twee keer zo snel als de triple sec', html: `<p>Elke white lady gebruikt {gin} ml gin en {triple_sec} ml triple sec, dus de gin is twee keer zo snel op. Citroen, siroop en aquafaba groeien in dezelfde rechte lijn mee. De shake blijft per cocktail, met {ice} ijsblokjes voor de tweede.</p>` },
        { id: 'packs', title: 'Kies de verpakking naar het aantal gasten', html: `<ul>
<li><strong>1 L Tetrapak:</strong> {drinks_1l} white ladies.</li>
<li><strong>Bag-in-box van 10 L:</strong> {drinks_10l} white ladies.</li>
<li><strong>Zakje van 200 g:</strong> {drinks_200g} white ladies.</li>
<li><strong>Zak van 3 kg:</strong> {drinks_3kg} white ladies.</li>
</ul>
<p>Een geopend pak vloeibare aquafaba bewaart u bij {opened_temp} °C en gebruikt u binnen {opened_days} dagen; een geopend zakje blijft droog en gesloten goed tot de houdbaarheidsdatum.</p>` },
        { id: 'example', title: '{ex_batches} white ladies: de cijfers voor een bruiloft', html: `<p>Voor {ex_batches} white ladies zet u {ex_gin} ml gin, {ex_triple_sec} ml triple sec, {ex_lemon_juice} ml citroensap, {ex_cane_syrup} ml rietsuikersiroop en {ex_dose} ml VERY AQUAFABA klaar. Eén 1 L Tetrapak dekt de aquafaba en houdt {ex_left_1l} ml over. Met poeder maakt u vóór de service {ex_powder} g aan met {ex_water} ml water.</p>
<p>De batch bespaart afmeettijd, maar niet de techniek aan het eind. Elke cocktail heeft nog altijd <a href="{guide_href}">de dry shake voor het ijs</a> nodig als de bloemetjes op de kraag moeten blijven liggen, en het <a href="{process_href}">stappenblad voor de white lady</a> heeft de controles voor elke stap.</p>` },
      ],
      faq: [
        { q: 'Hoeveel aquafaba heb ik nodig voor één white lady?', a: '{dose} ml VERY AQUAFABA vloeibaar, of {powder} g poeder met {water} ml water.' },
        { q: 'Hoeveel gin en triple sec voor {ex_batches} white ladies?', a: '{ex_gin} ml gin en {ex_triple_sec} ml triple sec, met {ex_lemon_juice} ml citroensap, {ex_cane_syrup} ml rietsuikersiroop en {ex_dose} ml aquafaba.' },
        { q: 'Rekent de rekenhulp het ijs mee?', a: 'Nee, alleen wat in de shaker gaat. Reken op {ice} ijsblokjes per drankje, voor de tweede shake.' },
        { q: 'Welke verpakking past bij een white lady op de weekendkaart?', a: 'Het poeder: een zakje van 200 g maakt {drinks_200g} cocktails en blijft na het openen droog en gesloten goed tot de houdbaarheidsdatum.' },
      ],
    },
    'la-rosee': {
      title: 'Aquafaba per La Rosée berekenen | VERY AQUAFABA',
      h1: 'Hoeveel aquafaba per La Rosée? Hoeveelheden berekenen',
      description: 'Reken La Rosée met VERY AQUAFABA om: aquafaba, wodka, bergamotlikeur, citroen, frambozensiroop en oranjebloesemwater voor elk aantal cocktails.',
      lead: `Vul in hoeveel coupes La Rosée u plant en de rekenhulp berekent de wodka, de bergamotlikeur, het citroensap, de frambozensiroop, het oranjebloesemwater en de VERY AQUAFABA, vloeibaar of als poeder. Ook de druppels tellen mee: {ex_batches} cocktails vragen {ex_orange_blossom} druppels oranjebloesemwater.`,
      sections: [
        { id: 'drops', title: 'Ook de druppels groeien mee', html: `<p>Druppels lijken onbelangrijk tot de bestellingen zich opstapelen. {ex_batches} La Rosée vragen {ex_orange_blossom} druppels, en de rekenhulp houdt die telling naast de grotere maten. Reken bij het plannen van het station op {ice} ijsblokjes per drankje voor de tweede shake.</p>` },
        { id: 'packs', title: 'De verpakking volgt het aantal coupes', html: `<ul>
<li><strong>1 L Tetrapak:</strong> {drinks_1l} cocktails, eenmaal geopend binnen {opened_days} dagen op te maken.</li>
<li><strong>Bag-in-box van 10 L:</strong> {drinks_10l} cocktails, voor zaken met een groot volume of meerdere bars die een verpakking delen.</li>
<li><strong>Zakje van 200 g:</strong> {drinks_200g} cocktails, droog en gesloten goed tot de houdbaarheidsdatum.</li>
<li><strong>Zak van 3 kg:</strong> {drinks_3kg} cocktails.</li>
</ul>` },
        { id: 'example', title: '{ex_batches} La Rosée: elke maat op één plek', html: `<p>Voor {ex_batches} coupes zet u {ex_vodka} ml wodka, {ex_bergamot_liqueur} ml bergamotlikeur, {ex_lemon_juice} ml citroensap, {ex_raspberry_syrup} ml frambozensiroop, {ex_orange_blossom} druppels oranjebloesemwater en {ex_dose} ml VERY AQUAFABA klaar. Met poeder maakt u {ex_powder} g aan met {ex_water} ml water.</p>
<p>Batch de wodka, likeur, citroen, framboos en het oranjebloesemwater vóór de service. Houd de aquafaba apart, zodat elke coupe <a href="{guide_href}">haar eigen dry shake</a> krijgt, en het <a href="{process_href}">stappenblad voor La Rosée</a> toont hoe de cocktail er bij elke stap uit moet zien.</p>` },
      ],
      faq: [
        { q: 'Hoeveel oranjebloesemwater voor {ex_batches} La Rosée?', a: '{ex_orange_blossom} druppels, bij {orange_blossom} druppels per drankje.' },
        { q: 'Hoeveel aquafaba heb ik nodig voor één La Rosée?', a: '{dose} ml VERY AQUAFABA vloeibaar, of {powder} g poeder met {water} ml water.' },
        { q: 'Hoeveel wodka en frambozensiroop voor {ex_batches} cocktails?', a: '{ex_vodka} ml wodka en {ex_raspberry_syrup} ml frambozensiroop, met {ex_bergamot_liqueur} ml bergamotlikeur, {ex_lemon_juice} ml citroensap en {ex_dose} ml aquafaba.' },
        { q: 'Welke verpakking past bij La Rosée als losse special?', a: 'Het poeder: een zakje van 200 g maakt {drinks_200g} cocktails en blijft na het openen droog en gesloten goed tot de houdbaarheidsdatum.' },
      ],
    },
    'the-sunset': {
      title: 'Aquafaba per Sunset berekenen | VERY AQUAFABA',
      h1: 'Hoeveel aquafaba per Sunset? Hoeveelheden berekenen',
      description: 'Bereken de VERY AQUAFABA, rum, amaretto, citroen en vanille-tonkasiroop voor elk aantal Sunsets, uit de Tetrapak of het zakje.',
      lead: `Vul in hoeveel Sunsets u plant en de rekenhulp berekent de rum, de amaretto, het citroensap, de vanille-tonkasiroop en de VERY AQUAFABA, vloeibaar of als poeder. Ook de kleine hoeveelheden tellen: {ex_batches} Sunsets vragen {ex_amaretto} ml amaretto en {ex_vanilla_tonka_syrup} ml siroop.`,
      sections: [
        { id: 'small', title: 'Ook de kleine maten tellen op', html: `<p>Tegen de tijd dat u {ex_batches} Sunsets serveert, staat de amaretto op {ex_amaretto} ml en de vanille-tonkasiroop op {ex_vanilla_tonka_syrup} ml. De ginger beer staat niet in de tabel, omdat hij na het afzeven elke highball aanvult en uw glas volgt. Reken op {ice} ijsblokjes per drankje voor de tweede shake.</p>` },
        { id: 'packs', title: 'Stem de verpakking af op het tempo van het terras', html: `<p>Een 1 L Tetrapak is goed voor {drinks_1l} Sunsets en een bag-in-box van 10 L {drinks_10l}, het formaat voor zaken met een groot volume of meerdere bars die een verpakking delen. Eenmaal open bewaart u beide bij {opened_temp} °C en gebruikt u ze binnen {opened_days} dagen. Bij het poeder maakt een zakje van 200 g {drinks_200g} Sunsets en een zak van 3 kg {drinks_3kg}, en een geopend zakje blijft droog en gesloten goed tot de houdbaarheidsdatum.</p>` },
        { id: 'example', title: '{ex_batches} Sunsets: de basis klaar voordat de eerste gast binnenkomt', html: `<p>Voor {ex_batches} Sunsets batcht u {ex_rum} ml rum, {ex_amaretto} ml amaretto, {ex_lemon_juice} ml citroensap en {ex_vanilla_tonka_syrup} ml vanille-tonkasiroop. Zet {ex_dose} ml VERY AQUAFABA gekoeld ernaast, of maak {ex_powder} g poeder aan met {ex_water} ml water.</p>
<p>De service is dan één keer basis schenken, de aquafaba, twee shakes en de ginger beer in het glas. Houd die laatste stap elke keer uit de shaker: <a href="{guide_href}">maak The Sunset</a> in die volgorde, met het <a href="{process_href}">stappenblad voor The Sunset</a> op het station voor de controles.</p>` },
      ],
      faq: [
        { q: 'Hoeveel aquafaba heb ik nodig voor één Sunset?', a: '{dose} ml VERY AQUAFABA vloeibaar, of {powder} g poeder met {water} ml water.' },
        { q: 'Hoeveel ginger beer heb ik nodig?', a: 'De ginger beer vult elke highball aan na het afzeven, zonder vaste maat, dus het hangt af van uw glas. De rekenhulp dekt alles wat in de shaker gaat.' },
        { q: 'Hoeveel rum en amaretto voor {ex_batches} Sunsets?', a: '{ex_rum} ml rum en {ex_amaretto} ml amaretto, met {ex_lemon_juice} ml citroensap, {ex_vanilla_tonka_syrup} ml vanille-tonkasiroop en {ex_dose} ml aquafaba.' },
        { q: 'Welke verpakking past bij een bar die elke dag Sunsets serveert?', a: "Een 1 L Tetrapak ({drinks_1l} cocktails) als u er zoveel serveert binnen {opened_days} dagen na opening, bewaard bij {opened_temp} °C. De bag-in-box van 10 L ({drinks_10l} cocktails) past bij zaken met een groot volume of meerdere bars die een verpakking delen." },
      ],
    },
  },

  process: {
    'pisco-sour': {
      title: 'Pisco sour met aquafaba: stappenblad | VERY AQUAFABA',
      h1: 'Pisco sour met aquafaba shaken: het stappenblad',
      description: 'De pisco sour met aquafaba op één pagina: opbouwen, dry shake, shake met ijs, afzeven en garneren, met de controles bij elke stap en de oplossingen.',
      lead: `Een goede pisco sour heeft een vast ritme: opbouwen, dry shake, ijs, opnieuw shaken, afzeven. Raakt dat ritme uit de maat, dan ziet u het meteen aan de kraag. Dit blad zet de vijf stappen op een rij, met de signalen om op te letten als het schuim dunner uitvalt dan het hoort.`,
      powderNote: 'Poeder: voor één cocktail {powder} g VERY AQUAFABA poeder + {water} ml water, aangemaakt vóór de service en gekoeld.',
      steps: [
        { step: 'Opbouwen', reference: '{pisco} ml pisco, {lime_juice} ml limoen, {cane_syrup} ml siroop, {dose} ml VERY AQUAFABA, gekoeld' },
        { step: 'Dry shake', reference: 'Stevig, zonder ijs: de vloeistof wordt bleek en dik' },
        { step: 'Met ijs', reference: '{ice} ijsblokjes, opnieuw shaken: de shaker beslaat aan de buitenkant' },
        { step: 'Afzeven', reference: 'In een old fashioned glas: de kraag komt omhoog en staat stevig' },
        { step: 'Garneren', reference: 'Een gedroogd schijfje citroen op het schuim' },
      ],
      checks: [
        { see: 'Dunne kraag', check: 'Het ijs zat er vanaf het begin in', fix: 'Eerst de dry shake, dan pas ijs' },
        { see: 'Traag, slap schuim', check: 'Aquafaba op kamertemperatuur', fix: 'Houd hem koud tot de shake' },
        { see: 'Halverwege de service geen hoogte meer', check: 'De aquafaba zat in de pre-batch', fix: 'Batch alleen de basis, aquafaba per drankje' },
        { see: 'Het schuim zakt in voor het bij de gast is', check: 'De cocktail bleef op de bar staan', fix: 'Shake op bestelling en serveer meteen' },
      ],
      sections: [
        { id: 'use', title: 'Als een pisco sour plat uitvalt', html: `<p>Bewaar het blad bij de barrecepten, naast de <a href="{guide_href}">werkwijze voor de pisco sour</a>. Komt een kraag dun uit of zakt hij vroeg in, vergelijk de cocktail dan met de vijf stappen, in volgorde. Begin met twee eenvoudige vragen: was de aquafaba gekoeld, en ging het ijs er pas na de dry shake in?</p>` },
        { id: 'before', title: 'Richt het station in voor de eerste bestelling', html: `<ul>
<li><strong>Koude aquafaba.</strong> Het pak staat in de koelkast, en een geopend pak gebruikt u binnen {opened_days} dagen bij {opened_temp} °C.</li>
<li><strong>Poeder aangemaakt.</strong> Werkt u met poeder, maak dan aan wat de avond nodig heeft en koel het.</li>
<li><strong>De openingsdatum op het pak.</strong> Schrijf hem op het pak zodra het open is.</li>
<li><strong>De basis gebatcht.</strong> Pisco, limoen en siroop in één fles; de aquafaba blijft apart.</li>
</ul>` },
        { id: 'signs', title: 'Wat u bij elke stap ziet', html: `<p>Na de dry shake ziet de vloeistof er bleek en dik uit, bijna als een milkshake. Na de shake met ijs is de shaker aan de buitenkant beslagen. In het glas komt de kraag omhoog terwijl de cocktail tot rust komt, en staat hij stevig genoeg om het gedroogde schijfje citroen te dragen. Ontbreekt een van deze tekens, dan ziet u in de controletabel hierboven welke stap u moet bijsturen. Voor een hele avond geeft de <a href="{calculator_href}">rekenhulp voor de pisco sour</a> alle hoeveelheden voor het aantal cocktails dat u verwacht.</p>` },
      ],
      faq: [
        { q: 'Waarom shake ik eerst zonder ijs?', a: 'De dry shake bouwt het schuim op. Zit het ijs er vanaf het begin in, dan wordt de cocktail gekoeld en verdund voordat het schuim zich vormt, en wordt de kraag dun.' },
        { q: 'Hoe lang blijft een geopend pak goed achter de bar?', a: 'Geopend vloeibaar product bewaart u bij {opened_temp} °C en gebruikt u binnen {opened_days} dagen. Schrijf de openingsdatum op het pak.' },
        { q: 'Volgt het poeder hetzelfde blad?', a: 'Ja. Maak per drankje {powder} g poeder aan met {water} ml water vóór de service, koel het en volg dezelfde vijf stappen.' },
        { q: 'Mag de aquafaba in mijn pre-batch?', a: 'Nee. Batch de pisco, limoen en siroop, en voeg de aquafaba bij de shake toe, cocktail per cocktail.' },
      ],
    },
    'amaretto-sour': {
      title: 'Amaretto sour met aquafaba: stappenblad | VERY AQUAFABA',
      h1: 'Amaretto sour met aquafaba shaken: het stappenblad',
      description: 'De amaretto sour met aquafaba op één pagina: opbouwen, dry shake, shake met ijs, afzeven en garneren, met de controles als de kraag plat valt.',
      lead: `Een amaretto sour verbergt een zwakke kraag slecht. Tegen die volle, amberkleurige cocktail valt zacht of dun schuim meteen op zodra hij is afgezeefd. Dit blad houdt de opbouw gelijk van de ene cocktail tot de volgende en helpt u snel het probleem te vinden als de cocktail het station niet verlaat zoals het hoort.`,
      powderNote: 'Poeder: voor één cocktail {powder} g VERY AQUAFABA poeder + {water} ml water, aangemaakt vóór de service en gekoeld.',
      steps: [
        { step: 'Opbouwen', reference: '{amaretto} ml amaretto, {lemon_juice} ml citroen, {vanilla_syrup} ml vanillesiroop, {dose} ml VERY AQUAFABA, gekoeld' },
        { step: 'Dry shake', reference: 'Stevig, zonder ijs: de vloeistof wordt bleek en dik' },
        { step: 'Met ijs', reference: '{ice} ijsblokjes, opnieuw shaken tot de shaker beslaat' },
        { step: 'Afzeven', reference: 'In een old fashioned glas' },
        { step: 'Garneren', reference: 'Een gedroogd schijfje citroen op het schuim, en meteen serveren' },
      ],
      checks: [
        { see: 'Dunne kraag vanaf de eerste cocktail', check: 'Het ijs ging erin voor de dry shake', fix: 'Eerst de dry shake, dan pas ijs' },
        { see: 'Schuim komt traag op en blijft slap', check: 'Aquafaba op kamertemperatuur laten staan', fix: 'Houd het pak in de koelkast tot de shake' },
        { see: 'Later op de avond geen hoogte meer', check: 'De aquafaba zat in de gebatchte amaretto en citroen', fix: 'Batch alleen de amaretto, citroen en siroop' },
        { see: 'Plat tegen de tijd dat hij op tafel staat', check: 'De cocktail bleef op de bar staan', fix: 'Shake op bestelling en serveer meteen' },
      ],
      sections: [
        { id: 'use', title: 'Van de opbouw tot het schijfje citroen', html: `<p>Bewaar het bij uw barrecepten, naast de <a href="{guide_href}">werkwijze voor de amaretto sour</a>. Het blad loopt van de opbouw tot het afzeven in het old fashioned glas, met het gedroogde schijfje citroen als laatste handeling. Valt een kraag tegen, leg de cocktail dan naast de vijf stappen en zoek waar hij afweek.</p>` },
        { id: 'before', title: 'Richt het station in voor de eerste bestelling', html: `<ul>
<li><strong>De batch.</strong> Amaretto, citroen en vanillesiroop in één fles, de aquafaba apart.</li>
<li><strong>De aquafaba.</strong> Gekoeld, en een geopend pak binnen {opened_days} dagen gebruikt bij {opened_temp} °C.</li>
<li><strong>Het poeder, als u het gebruikt.</strong> Aangemaakt voor de avond en in de koelkast.</li>
</ul>` },
        { id: 'signs', title: 'Wat u ziet voordat u de cocktail uitserveert', html: `<p>Na de dry shake is de vloeistof bleek en dik. Na de shake met ijs beslaat de shaker. In het old fashioned glas staat de kraag stevig op de amaretto, en het gedroogde schijfje citroen blijft erop liggen. Is de kraag dun of slap, dan ziet u in de controletabel hierboven welke stap u moet bijsturen. Voor een hele avond gebruikt u de <a href="{calculator_href}">rekenhulp voor de amaretto sour</a>.</p>` },
      ],
      faq: [
        { q: 'In welk glas zeef ik een amaretto sour af?', a: 'In een old fashioned glas. Daarna gaat er een gedroogd schijfje citroen op het schuim.' },
        { q: 'Waarom verliest mijn amaretto sour zijn kraag?', a: 'Meestal ging het ijs erin voor de dry shake, was de aquafaba warm, of bleef de cocktail op de bar staan. De controles op dit blad dekken alle drie.' },
        { q: 'Kan ik het poeder gebruiken voor amaretto sours?', a: 'Ja. Maak per drankje {powder} g poeder aan met {water} ml water vóór de service en houd het koud.' },
        { q: 'Mag de aquafaba in de gebatchte amaretto en citroen?', a: 'Nee. Voeg hem bij de shake toe, cocktail per cocktail.' },
      ],
    },
    'gin-fizz': {
      title: 'Gin fizz met aquafaba: stappenblad | VERY AQUAFABA',
      h1: 'Gin fizz met aquafaba maken: het stappenblad',
      description: 'De gin fizz met aquafaba op één pagina: opbouwen, dry shake, shake met ijs, afzeven, aanvullen met tonic en garneren, met de controles voor een dunne kraag.',
      lead: `De gin fizz is eenvoudig tot de laatste paar seconden. U kunt een mooie kraag in de shaker opbouwen en hem toch verliezen als de tonic er op het verkeerde moment in gaat. Dit blad houdt de zes stappen in de juiste volgorde, van de dry shake tot het aanvullen, met de controles voor als de cocktail zonder de verwachte hoogte in de highball komt.`,
      powderNote: 'Poeder: voor één cocktail {powder} g VERY AQUAFABA poeder + {water} ml water, aangemaakt vóór de service en gekoeld.',
      steps: [
        { step: 'Opbouwen', reference: '{gin} ml gin, {lemon_juice} ml citroen, {cane_syrup} ml rietsuikersiroop, {dose} ml VERY AQUAFABA, gekoeld' },
        { step: 'Dry shake', reference: 'Stevig, zonder ijs: hier ontstaat het schuim' },
        { step: 'Met ijs', reference: '{ice} ijsblokjes, opnieuw shaken om te koelen' },
        { step: 'Afzeven', reference: 'In een highballglas' },
        { step: 'Aanvullen', reference: 'Tonic, bovenop geschonken, nooit geshaket' },
        { step: 'Garneren', reference: 'Een gedroogd schijfje citroen op de kraag' },
      ],
      checks: [
        { see: 'Dunne kraag voor het aanvullen', check: 'Het ijs ging erin voor de dry shake', fix: 'Eerst de dry shake, dan pas ijs' },
        { see: 'Slap schuim', check: 'Aquafaba op kamertemperatuur', fix: 'Houd hem koud tot de shake' },
        { see: 'Geen kraag op de longdrink', check: 'De tonic ging in de shaker', fix: 'Eerst afzeven, dan in het glas aanvullen met tonic' },
        { see: 'Kraag weg tegen de tijd dat hij op tafel staat', check: 'De cocktail bleef op de bar staan', fix: 'Shake, vul aan en serveer meteen' },
      ],
      sections: [
        { id: 'use', title: 'Als een gin fizz zijn kraag verliest', html: `<p>Bewaar het waar de highballs gemaakt worden, met de <a href="{guide_href}">werkwijze voor de gin fizz</a> in het barboek. Komt de cocktail zonder echte kraag in het glas, controleer dan eerst de volgorde van de shakes. Verdwijnt de kraag daarna, controleer dan of de tonic in het glas ging en niet in de shaker.</p>` },
        { id: 'before', title: 'Richt het station in voor de eerste bestelling', html: `<ul>
<li><strong>Basis gebatcht.</strong> Gin, citroen en rietsuikersiroop in één fles; de aquafaba en de tonic blijven apart.</li>
<li><strong>Koude aquafaba.</strong> Een geopend pak bewaart u bij {opened_temp} °C en gebruikt u binnen {opened_days} dagen.</li>
<li><strong>Highballs klaar.</strong> De cocktail gaat meteen van het afzeven naar het aanvullen.</li>
</ul>` },
        { id: 'signs', title: 'Wat het glas u moet tonen', html: `<p>Na de dry shake is de vloeistof bleek en dik. Na de shake met ijs beslaat de shaker. Afgezeefd in de highball draagt de cocktail zijn kraag; de tonic maakt hem daaronder langer en het gedroogde schijfje citroen ligt bovenop. De <a href="{calculator_href}">rekenhulp voor de gin fizz</a> berekent de gin, citroen, siroop en aquafaba voor de avond.</p>` },
      ],
      faq: [
        { q: 'Wanneer gaat de tonic in een gin fizz?', a: 'Na het afzeven, bovenop de cocktail in de highball geschonken. Hij gaat nooit in de shaker.' },
        { q: 'Waarom is mijn gin fizz plat?', a: 'Controleer de volgorde: eerst de dry shake, dan ijs, dan afzeven, dan de tonic. Warme aquafaba of een cocktail die op de bar blijft staan, kost ook de kraag.' },
        { q: 'Werkt het poeder voor gin fizzes?', a: 'Ja. Maak per drankje {powder} g poeder aan met {water} ml water vóór de service en houd het koud.' },
        { q: 'Kan ik gin fizzes batchen?', a: 'Batch de gin, citroen en siroop. De aquafaba gaat erbij bij de shake en de tonic in het glas.' },
      ],
    },
    'white-lady': {
      title: 'White lady met aquafaba: stappenblad | VERY AQUAFABA',
      h1: 'White lady met aquafaba shaken: het stappenblad',
      description: 'De white lady met aquafaba op één pagina: opbouwen, dry shake, shake met ijs, afzeven in een glas op voet en garneren, met de controles voor een dunne kraag.',
      lead: `De garnering vertelt u alles. Liggen de gedroogde bloemetjes netjes op de kraag, dan heeft de cocktail zijn werk gedaan. Zakken ze weg, dan ging er eerder in de opbouw iets mis. Dit blad geeft u één methode in vijf stappen en de controles voor als de white lady de stevige afwerking verliest die ze nodig heeft.`,
      powderNote: 'Poeder: voor één cocktail {powder} g VERY AQUAFABA poeder + {water} ml water, aangemaakt vóór de service en gekoeld.',
      steps: [
        { step: 'Opbouwen', reference: '{gin} ml gin, {triple_sec} ml triple sec, {lemon_juice} ml citroen, {cane_syrup} ml rietsuikersiroop, {dose} ml VERY AQUAFABA, gekoeld' },
        { step: 'Dry shake', reference: 'Stevig, zonder ijs: de vloeistof wordt bleek en dik' },
        { step: 'Met ijs', reference: '{ice} ijsblokjes, opnieuw shaken tot de shaker beslaat' },
        { step: 'Afzeven', reference: 'In een cocktailglas of margaritaglas, zonder ijs in het glas' },
        { step: 'Garneren', reference: 'Een paar gedroogde bloemetjes op het schuim' },
      ],
      checks: [
        { see: 'Bloemetjes zinken in de cocktail', check: 'Het ijs ging erin voor de dry shake', fix: 'Eerst de dry shake, dan pas ijs' },
        { see: 'Traag, slap schuim', check: 'Aquafaba op kamertemperatuur', fix: 'Houd hem koud tot de shake' },
        { see: 'Halverwege de service geen hoogte meer', check: 'De aquafaba zat in de batch', fix: 'Batch alleen de gin, triple sec, citroen en siroop' },
        { see: 'Kraag zakt in voor het glas bij de gast is', check: 'De cocktail bleef op de bar staan', fix: 'Shake op bestelling en garneer meteen' },
      ],
      sections: [
        { id: 'use', title: 'Als de kraag de bloemetjes niet draagt', html: `<p>Bewaar het bij de glazen op voet of in het barboek, naast de <a href="{guide_href}">werkwijze voor de white lady</a>. Zinken de bloemetjes, werk dan terug vanaf het glas: controleer de kraag, de tweede shake, en dan of de dry shake gebeurde voordat het ijs erin ging.</p>` },
        { id: 'before', title: 'Richt het station in voor de eerste bestelling', html: `<ul>
<li><strong>De batch.</strong> Gin, triple sec, citroen en siroop in één fles; de aquafaba apart.</li>
<li><strong>De aquafaba.</strong> In de koelkast, en een geopend pak binnen {opened_days} dagen gebruikt bij {opened_temp} °C.</li>
<li><strong>De glazen.</strong> Cocktailglazen of margaritaglazen klaar, en de gedroogde bloemetjes binnen handbereik.</li>
<li><strong>Het poeder, als u het gebruikt.</strong> Aangemaakt voor de avond en gekoeld.</li>
</ul>` },
        { id: 'signs', title: 'Wat het glas u moet tonen', html: `<p>Na de dry shake is de vloeistof bleek en dik, bijna als een milkshake. Na de shake met ijs is de shaker aan de buitenkant beslagen. In het glas ligt de kraag vlak en stevig genoeg om de bloemetjes te dragen. Ontbreekt een van deze tekens, dan ziet u in de controletabel hierboven welke stap u moet bijsturen. De <a href="{calculator_href}">rekenhulp voor de white lady</a> berekent de hoeveelheden voor een hele avond.</p>` },
      ],
      faq: [
        { q: 'Waarom zinken de gedroogde bloemetjes?', a: 'De kraag is te dun om ze te dragen, meestal omdat het ijs erin ging voor de dry shake. Shake eerst zonder ijs, dan met ijs.' },
        { q: 'Wordt een white lady op ijs geserveerd?', a: 'Nee. Ze gaat in een cocktailglas of margaritaglas, afgezeefd zonder ijs in het glas.' },
        { q: 'Volgt het poeder hetzelfde blad?', a: 'Ja. Maak per drankje {powder} g poeder aan met {water} ml water vóór de service, koel het en volg dezelfde vijf stappen.' },
        { q: 'Mag de aquafaba in de gebatchte gin en triple sec?', a: 'Nee. Voeg hem bij de shake toe, cocktail per cocktail.' },
      ],
    },
    'la-rosee': {
      title: 'La Rosée met aquafaba: stappenblad | VERY AQUAFABA',
      h1: 'La Rosée met aquafaba shaken: het stappenblad',
      description: 'La Rosée op één pagina: opbouwen met {orange_blossom} druppels oranjebloesemwater, dry shake, shake met ijs, afzeven in een coupe en garneren met munt.',
      lead: `La Rosée geeft duidelijke signalen als er iets mis is. Het roze schijnt door een dunne kraag, de munt begint te zakken, of het oranjebloesemwater komt te veel naar voren. Dit blad zet de vijf stappen van de cocktail op één plek en helpt u snel te zien wat er misging, voor de volgende coupe de bar verlaat.`,
      powderNote: 'Poeder: voor één cocktail {powder} g VERY AQUAFABA poeder + {water} ml water, aangemaakt vóór de service en gekoeld.',
      steps: [
        { step: 'Opbouwen', reference: '{vodka} ml wodka, {bergamot_liqueur} ml bergamotlikeur, {lemon_juice} ml citroen, {raspberry_syrup} ml frambozensiroop, {orange_blossom} druppels oranjebloesemwater, {dose} ml VERY AQUAFABA, gekoeld' },
        { step: 'Dry shake', reference: 'Stevig, zonder ijs: hier ontstaat het schuim' },
        { step: 'Met ijs', reference: '{ice} ijsblokjes, opnieuw shaken om te koelen' },
        { step: 'Afzeven', reference: 'In een coupeglas: een bleke kraag op een roze cocktail' },
        { step: 'Garneren', reference: 'Een takje munt op de kraag' },
      ],
      checks: [
        { see: 'Roze schijnt door de kraag', check: 'Het ijs ging erin voor de dry shake', fix: 'Eerst de dry shake, dan pas ijs' },
        { see: 'Slap schuim', check: 'Aquafaba op kamertemperatuur', fix: 'Houd hem koud tot de shake' },
        { see: 'Oranjebloesem overheerst', check: 'Er gingen meer dan {orange_blossom} druppels in', fix: 'Meet af met een druppelfles' },
        { see: 'Munt zakt weg voor de tafel', check: 'De cocktail bleef op de bar staan', fix: 'Shake op bestelling en serveer meteen' },
      ],
      sections: [
        { id: 'use', title: 'Als het roze doorschijnt', html: `<p>Bewaar het bij het coupestation, met de <a href="{guide_href}">werkwijze voor La Rosée</a>. Begint het roze door de kraag te schijnen, volg het probleem dan met het blad terug via het afzeven, de tweede shake en de dry shake voor u het recept aanpast.</p>` },
        { id: 'before', title: 'Richt het station in voor de eerste bestelling', html: `<ul>
<li><strong>Basis gebatcht.</strong> Wodka, bergamotlikeur, citroen, frambozensiroop en het oranjebloesemwater in één fles; de aquafaba blijft apart.</li>
<li><strong>Druppelfles.</strong> Gaat het oranjebloesemwater er per drankje in, houd het dan in een druppelfles op het station.</li>
<li><strong>Koude aquafaba.</strong> Een geopend pak bewaart u bij {opened_temp} °C en gebruikt u binnen {opened_days} dagen.</li>
<li><strong>Coupes en munt klaar.</strong> De cocktail gaat meteen van het afzeven naar de garnering.</li>
</ul>` },
        { id: 'signs', title: 'Wat u in de coupe moet zien', html: `<p>Na de dry shake is de vloeistof lichtroze en dik. Na de shake met ijs beslaat de shaker. In de coupe zet een bleke kraag zich op de roze cocktail, met een duidelijke lijn ertussen, en de munt blijft bovenop liggen zonder te zinken. De <a href="{calculator_href}">rekenhulp voor La Rosée</a> berekent de batch, druppels inbegrepen.</p>` },
      ],
      faq: [
        { q: 'Waarom schijnt het roze door het schuim?', a: 'De kraag is dun. Meestal zat er ijs in de shaker voor de dry shake; warme aquafaba geeft ook slap schuim.' },
        { q: 'Mag het oranjebloesemwater in de batch?', a: 'Ja, {orange_blossom} druppels per drankje, met de wodka, bergamotlikeur, citroen en frambozensiroop. De aquafaba blijft uit de batch.' },
        { q: 'Werkt het poeder voor La Rosée?', a: 'Ja. Maak per drankje {powder} g poeder aan met {water} ml water vóór de service en houd het koud.' },
        { q: 'Welk glas en welke garnering horen bij La Rosée?', a: 'Een coupeglas en een takje munt op de kraag.' },
      ],
    },
    'the-sunset': {
      title: 'The Sunset met aquafaba: stappenblad | VERY AQUAFABA',
      h1: 'The Sunset met aquafaba maken: het stappenblad',
      description: 'The Sunset op één pagina: opbouwen, dry shake, shake met ijs, afzeven in een highball, aanvullen met ginger beer en garneren, met de controles voor de kraag.',
      lead: `Bij The Sunset draait alles om één overdracht: de cocktail verlaat de shaker, en dan neemt de ginger beer het over in het glas. Raakt die volgorde door elkaar, dan lijdt meestal de kraag als eerste. Dit blad houdt de zes stappen op volgorde en geeft u de controles voor als de cocktail plat of slap in het glas komt, of de kraag in de ginger beer wegzakt.`,
      powderNote: 'Poeder: voor één cocktail {powder} g VERY AQUAFABA poeder + {water} ml water, aangemaakt vóór de service en gekoeld.',
      steps: [
        { step: 'Opbouwen', reference: '{rum} ml rum, {amaretto} ml amaretto, {lemon_juice} ml citroen, {vanilla_tonka_syrup} ml vanille-tonkasiroop, {dose} ml VERY AQUAFABA, gekoeld' },
        { step: 'Dry shake', reference: 'Stevig, zonder ijs, tot de vloeistof bleek en dik wordt' },
        { step: 'Met ijs', reference: '{ice} ijsblokjes, een tweede shake tot de shaker beslaat' },
        { step: 'Afzeven', reference: 'In een highballglas, de kraag staat er al op' },
        { step: 'Aanvullen', reference: 'Ginger beer in het glas, nooit in de shaker' },
        { step: 'Garneren', reference: 'Een paar gedroogde bloemetjes op de kraag' },
      ],
      checks: [
        { see: 'Schuim al dun in de highball', check: 'Het ijs ging er eerst in', fix: 'Shake zonder ijs, dan met ijs' },
        { see: 'Kraag zakt in als de ginger beer erbij komt', check: 'Ginger beer meegeshaket met de rest', fix: 'Bewaar hem voor het glas, na het afzeven' },
        { see: 'Schuim komt traag op en blijft slap', check: 'Aquafaba buiten de koelkast gelaten', fix: 'Koel hem tot het moment van de shake' },
        { see: 'Bloemetjes zinken voor hij bij de gast is', check: 'Bleef op de bar staan', fix: 'Vul aan en serveer meteen' },
      ],
      sections: [
        { id: 'use', title: 'Als The Sunset zijn kraag verliest', html: `<p>Bewaar het bij het highballstation, met de <a href="{guide_href}">werkwijze voor The Sunset</a> in het barboek. Komt een Sunset zonder kraag bij de gast, controleer dan drie dingen in volgorde: of de dry shake voor het ijs kwam, of de aquafaba gekoeld was, en of de ginger beer uit de shaker bleef.</p>` },
        { id: 'before', title: 'De bar klaarzetten voor de service', html: `<ul>
<li><strong>Eén fles basis.</strong> Rum, amaretto, citroen en vanille-tonkasiroop, samen gebatcht.</li>
<li><strong>Twee dingen apart.</strong> De aquafaba in de koelkast, een geopend pak binnen {opened_days} dagen gebruikt bij {opened_temp} °C, en de ginger beer, gekoeld.</li>
<li><strong>Glazen en garnering.</strong> Highballs en de gedroogde bloemetjes binnen handbereik van waar u afzeeft.</li>
</ul>` },
        { id: 'signs', title: 'Wat u ziet voor de ginger beer erin gaat', html: `<p>Bleek en dik na de dry shake, een beslagen shaker na de tweede, en een witte kraag op de cocktail zodra hij is afgezeefd. Dan gaat de ginger beer eronder, de kraag komt mee omhoog en de bloemetjes gaan erop. Voor een hele avond berekent de <a href="{calculator_href}">rekenhulp voor The Sunset</a> de basis voor elk aantal cocktails.</p>` },
      ],
      faq: [
        { q: 'Mag de ginger beer in de shaker?', a: 'Nee. Hij gaat na het afzeven in de highball, zodra de kraag staat.' },
        { q: 'Hoe ziet The Sunset eruit voor de ginger beer erbij komt?', a: 'Afgezeefd in de highball, met al een witte kraag erop. De ginger beer maakt de cocktail daarna langer, onder de kraag.' },
        { q: 'Werkt het poeder voor The Sunset?', a: 'Ja: {powder} g poeder in {water} ml water per drankje, aangemaakt vóór de service en gekoeld, en dan dezelfde zes stappen.' },
        { q: 'Welke delen van The Sunset kan ik batchen?', a: 'De rum, amaretto, citroen en vanille-tonkasiroop. De aquafaba gaat erbij bij de shake en de ginger beer in het glas.' },
      ],
    },
  },
};
