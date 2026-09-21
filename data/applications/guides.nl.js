// NL application guides
export default {
  "cocktails": {
    "lead": "Met aquafaba krijgen uw sours een stabiele, zijdezachte schuimkraag, zonder rauw eiwit achter de bar. U hebt maar {dose} g per cocktail nodig en u schudt twee keer. Hieronder leest u hoe u te werk gaat, wat u doet als het schuim inzakt, en hoe u kiest tussen vloeibaar en poeder, afhankelijk van hoe uw bar werkt.",
    "glance": {
      "note": null,
      "groups": [
        {
          "title": "Vloeibaar",
          "items": [
            {
              "value": "{dose} g",
              "label": "per cocktail"
            },
            {
              "value": "{batches_1l} cocktails",
              "label": "uit een 1 L Tetrapak"
            }
          ]
        },
        {
          "title": "Poeder",
          "items": [
            {
              "value": "{powder_dose} g",
              "label": "per cocktail, aangemaakt met water"
            },
            {
              "value": "{batches_200g} cocktails",
              "label": "uit een zakje van 200 g"
            }
          ]
        }
      ]
    },
    "sections": [
      {
        "id": "how",
        "title": "Zo shaket u een sour met aquafaba",
        "html": "<p>Aan uw recept verandert maar één ingrediënt: aquafaba vervangt het eiwit.</p>\n<ol>\n<li>Doe alles zonder ijs in de shaker: 50 ml whiskey, 25 ml vers citroensap, 20 ml suikersiroop en {dose} g gekoelde aquafaba.</li>\n<li>Geef een krachtige dry shake van {dry_shake} seconden. Hier ontstaat het schuim.</li>\n<li>Voeg ijs toe en schud nog eens {wet_shake} seconden om te koelen en te verdunnen.</li>\n<li>Schenk door een fijne zeef uit in een gekoelde coupe. De schuimkraag is stevig genoeg om een paar druppels bitters te dragen.</li>\n</ol>\n<p>Drukke service? Maak de basis van whiskey, citroen en siroop vooraf. De aquafaba gaat er pas bij het shaken bij, nooit in de voorbereide basis.</p>\n<p><a href=\"{recipe_href}\">Bekijk het volledige recept voor Whiskey Sour</a></p>"
      },
      {
        "id": "decide",
        "title": "Vloeibaar of poeder? Kijk hoeveel sours u schenkt",
        "html": "<p>Ongeopend blijven beide formaten minimaal {unopened_months} maanden goed op kamertemperatuur, gewoon op het schap. De keuze begint op de dag dat u de verpakking opent. Geopende vloeibare aquafaba hoort in de koelkast en gebruikt u binnen {opened_days} dagen. Geopend poeder bederft niet, het moet alleen droog en gesloten blijven.</p>\n<table class=\"va-guide-grid\">\n<thead><tr><th scope=\"col\">Uw bar</th><th scope=\"col\">Onze keuze</th><th scope=\"col\">Waarom</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Uw bar\">Sours op de kaart, elke service besteld</td><td data-label=\"Onze keuze\">Vloeibaar, 1 L Tetrapak</td><td data-label=\"Waarom\">{batches_1l} cocktails per pak, ruim binnen {opened_days} dagen op</td></tr>\n<tr><td data-label=\"Uw bar\">Een paar sours per week</td><td data-label=\"Onze keuze\">Poeder, zakje van 200 g</td><td data-label=\"Waarom\">Geen termijn na opening, u maakt aan wat u vanavond nodig hebt</td></tr>\n<tr><td data-label=\"Uw bar\">Geen plaats over in de koelkast</td><td data-label=\"Onze keuze\">Poeder</td><td data-label=\"Waarom\">Het staat gewoon droog op het schap</td></tr>\n<tr><td data-label=\"Uw bar\">Evenementen en catering op locatie</td><td data-label=\"Onze keuze\">Poeder</td><td data-label=\"Waarom\">Gaat droog mee, zonder koelketen</td></tr>\n<tr><td data-label=\"Uw bar\">Drukke weekends, rustige weekdagen</td><td data-label=\"Onze keuze\">Beide</td><td data-label=\"Waarom\">Vloeibaar voor de drukte, poeder voor de rest</td></tr>\n<tr><td data-label=\"Uw bar\">Hotelgroep, gebottelde sourbasissen, drankenlijn</td><td data-label=\"Onze keuze\">Vloeibaar, 10 L bag-in-box of 1 T IBC</td><td data-label=\"Waarom\">Continu verbruik, dus de termijn na opening speelt geen rol</td></tr>\n</tbody>\n</table>\n<p>Liever vloeibaar, maar krijgt u een pak niet op tijd op? Vries het in kleine porties in, laat het ontdooien in de koelkast en roer het door voor gebruik.</p>"
      },
      {
        "id": "formats",
        "title": "Werken met elk formaat",
        "html": "<div class=\"va-guide-cols\">\n<div>\n<h3>Vloeibaar</h3>\n<ul>\n<li>Klaar voor gebruik, rechtstreeks van de koelkast in de shaker.</li>\n<li>Sluit het pak en zet het tussen twee services terug in de koelkast.</li>\n<li>Gooi het weg als het vreemd ruikt, belletjes vertoont of gescheiden is.</li>\n</ul>\n</div>\n<div>\n<h3>Poeder</h3>\n<ul>\n<li>{white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba. {white_powder} g poeder vervangt 1 eiwit.</li>\n<li>Voor één cocktail: {powder_dose} g poeder + {water_dose} ml water.</li>\n<li>Maak het voor de service aan en zet het koud. Koude aquafaba schuimt sneller en het schuim blijft langer staan.</li>\n</ul>\n</div>\n</div>"
      },
      {
        "id": "fix",
        "title": "Als het schuim inzakt",
        "html": "<table class=\"va-guide-grid va-guide-grid--fix\">\n<thead><tr><th scope=\"col\">Wat u ziet</th><th scope=\"col\">Oorzaak</th><th scope=\"col\">Oplossing</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Wat u ziet\">Dunne schuimkraag</td><td data-label=\"Oorzaak\">Het ijs zat er vanaf het begin bij</td><td data-label=\"Oplossing\">Eerst de dry shake, dan pas ijs</td></tr>\n<tr><td data-label=\"Wat u ziet\">Traag, slap schuim</td><td data-label=\"Oorzaak\">Aquafaba op kamertemperatuur</td><td data-label=\"Oplossing\">Houd de aquafaba koud tot het shaken</td></tr>\n<tr><td data-label=\"Wat u ziet\">Halverwege de service geen volume meer</td><td data-label=\"Oorzaak\">De aquafaba zat in de voorbereide basis</td><td data-label=\"Oplossing\">Bereid alleen de basis voor en voeg de aquafaba per cocktail toe</td></tr>\n<tr><td data-label=\"Wat u ziet\">Het schuim zakt in voor het glas bij de gast staat</td><td data-label=\"Oorzaak\">De cocktail heeft op de bar staan wachten</td><td data-label=\"Oplossing\">Shake op bestelling en serveer meteen</td></tr>\n<tr><td data-label=\"Wat u ziet\">Wisselend resultaat van cocktail tot cocktail</td><td data-label=\"Oorzaak\">Op het oog geschonken</td><td data-label=\"Oplossing\">Weeg af of gebruik een barmaatje, elke keer {dose} g</td></tr>\n</tbody>\n</table>"
      }
    ],
    "faq": [
      {
        "q": "Hoeveel aquafaba gebruik ik per cocktail?",
        "a": "{dose} g gekoelde aquafaba per cocktail, in plaats van het eiwit. Een 1 L Tetrapak is goed voor {batches_1l} cocktails, een zakje poeder van 200 g voor {batches_200g}."
      },
      {
        "q": "Vloeibaar of poeder: wat kiest een bar?",
        "a": "Tel uw sours. Is een geopend 1 L pak binnen {opened_days} dagen leeg, dan is vloeibaar de eenvoudigste keuze, want het gaat rechtstreeks in de shaker. Zo niet, dan is poeder veiliger: het bederft niet nadat het zakje geopend is."
      },
      {
        "q": "Hoe lang blijft een geopende verpakking goed achter de bar?",
        "a": "Geopende vloeibare aquafaba bewaart u gesloten in de koelkast op maximaal {opened_temp} °C en gebruikt u binnen {opened_days} dagen. Geopend poeder blijft goed zolang het zakje droog en gesloten blijft. Ongeopend zijn beide formaten minimaal {unopened_months} maanden houdbaar op kamertemperatuur."
      },
      {
        "q": "Kan een bar beide formaten in huis hebben?",
        "a": "Ja, en sommige bars doen dat ook. Vloeibaar is er voor de drukte in het weekend, poeder voor rustige weekdagen en evenementen op locatie, waar het droog meegaat en geen koelkast nodig heeft."
      },
      {
        "q": "Hoe maak ik het poeder aan voor de service?",
        "a": "Doseer op het aantal eiwitten: {powder_dose} g poeder en {water_dose} ml water voor één cocktail. Maak het vooraf aan en zet het koud voor de service. De regel per eiwit: {white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba. {white_powder} g poeder vervangt 1 eiwit."
      },
      {
        "q": "Verandert aquafaba de smaak van de cocktail?",
        "a": "Nee. Aquafaba zorgt voor het schuim en het zachte mondgevoel. De smaak komt van uw whiskey, citroen en siroop."
      },
      {
        "q": "Is het veiliger dan eiwit?",
        "a": "Een sour wordt nooit verhit, dus rauw eiwit is achter de bar een bekend aandachtspunt. Aquafaba is plantaardig en bevat geen ei, waardoor de cocktail ook geschikt is voor veganistische gasten."
      },
      {
        "q": "Schuimt het poeder even goed als de vloeibare aquafaba?",
        "a": "Ja. Aangemaakt met water en gekoeld geeft het in de dry shake dezelfde schuimkraag. De volgorde van het shaken en de temperatuur tellen zwaarder dan de verpakking waar het uit komt."
      },
      {
        "q": "Waar vind ik specificaties voor een drankenprogramma?",
        "a": "Vraag de technische fiche aan via ons [contactformulier]({contact_href}). Voor volumes in bag-in-box of IBC laat u ons weten hoeveel u schenkt en wat uw maandvolume is, dan nemen wij contact met u op."
      }
    ]
  },
  "meringue": {
    "lead": "Met aquafaba klopt u knapperige, glanzende meringues op, helemaal zonder eiwit. U hebt maar twee ingrediënten nodig, in gelijke hoeveelheden: {dose} g aquafaba en {sugar} g suiker. Deze gids neemt u stap voor stap mee door de bereiding, legt uit wat u kunt doen als het misgaat, en helpt u kiezen tussen vloeibaar en poeder.",
    "glance": {
      "note": "Eén bereiding geeft {yield}.",
      "groups": [
        {
          "title": "Vloeibaar",
          "items": [
            {
              "value": "{dose} g",
              "label": "per bereiding, in plaats van {eggs} eiwitten"
            },
            {
              "value": "{batches_1l} bereidingen",
              "label": "uit een 1 L Tetrapak"
            }
          ]
        },
        {
          "title": "Poeder",
          "items": [
            {
              "value": "{powder_dose} g",
              "label": "per bereiding, aangemaakt met water"
            },
            {
              "value": "{batches_200g} bereidingen",
              "label": "uit een zakje van 200 g"
            }
          ]
        }
      ]
    },
    "sections": [
      {
        "id": "how",
        "title": "Zo maakt u meringue met aquafaba",
        "html": "<p>Het recept is eenvoudig, maar de volgorde is belangrijk. Volg de stappen een voor een en neem de tijd voor de suiker.</p>\n<ol>\n<li>Koel de aquafaba tot {chill} °C. Koude aquafaba klopt sneller op en houdt meer lucht vast.</li>\n<li>Klop {dose} g op hoge snelheid in een schone, vetvrije kom tot zachte pieken, ongeveer {whip} minuten.</li>\n<li>Optionele stabilisator, toe te voegen tijdens het kloppen: 2 g wijnsteen of 1 g citroenzuur.</li>\n<li>Zet de mixer op middelhoge snelheid en voeg {sugar} g fijne kristalsuiker toe, een eetlepel per keer. Laat elke lepel oplossen voor de volgende erbij gaat. Klop daarna weer op hoge snelheid tot het schuim glanst en stevige pieken vormt.</li>\n<li>Spuit meteen vormpjes van 3 tot 4 cm en droog ze op {bake} °C, zonder ventilator, gedurende {bake_time} uur, tot ze helemaal droog zijn.</li>\n<li>Laat volledig afkoelen op de bakplaat. Bewaar luchtdicht op kamertemperatuur, bij voorkeur met een droogmiddel.</li>\n</ol>\n<p>Werkt u met industriële batches? Houd de aquafaba-concentratie constant op {concentration} g/ml, zodat het schuim zich bij elke batch hetzelfde gedraagt.</p>\n<p><a href=\"{recipe_href}\">Bekijk het volledige meringuerecept</a></p>"
      },
      {
        "id": "decide",
        "title": "Vloeibaar of poeder? Kijk hoe vaak u meringues bakt",
        "html": "<p>Welk formaat bij u past, hangt af van hoe vaak u meringues bakt. Ongeopend blijven beide formaten minimaal {unopened_months} maanden goed op kamertemperatuur. Na opening hoort vloeibaar in de koelkast, terwijl poeder alleen droog en gesloten moet blijven. Met een 1 L Tetrapak maakt u {batches_1l} bereidingen meringues. Bakt u er niet zoveel in de {opened_days} dagen na opening, dan is poeder de betere keuze.</p>\n<table class=\"va-guide-grid\">\n<thead><tr><th scope=\"col\">Uw keuken</th><th scope=\"col\">Onze keuze</th><th scope=\"col\">Waarom</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Uw keuken\">Patisserie die bijna elke dag meringues spuit</td><td data-label=\"Onze keuze\">Vloeibaar, 1 L Tetrapak</td><td data-label=\"Waarom\">{batches_1l} bereidingen per pak, ruim binnen {opened_days} dagen opgebruikt</td></tr>\n<tr><td data-label=\"Uw keuken\">Restaurant met een seizoensdessert met meringue</td><td data-label=\"Onze keuze\">Poeder, zakje van 200 g</td><td data-label=\"Waarom\">{batches_200g} bereidingen per zakje en geen datum om op te letten na opening</td></tr>\n<tr><td data-label=\"Uw keuken\">Geen koelruimte over</td><td data-label=\"Onze keuze\">Poeder</td><td data-label=\"Waarom\">Uw meringues liggen al in de droge opslag, het zakje kan ernaast</td></tr>\n<tr><td data-label=\"Uw keuken\">U wilt een concentratie die al vastligt</td><td data-label=\"Onze keuze\">Vloeibaar</td><td data-label=\"Waarom\">Het komt met een constante dichtheid, u hoeft niets aan te maken</td></tr>\n<tr><td data-label=\"Uw keuken\">Lijn die elke werkdag meringues droogt</td><td data-label=\"Onze keuze\">Vloeibaar, 10 L bag-in-box of 1 T IBC</td><td data-label=\"Waarom\">Continu verbruik, zonder aanmaakstap</td></tr>\n</tbody>\n</table>\n<p>Liever vloeibaar, maar bakt u onregelmatig? Vries het in porties in, laat het een nacht ontdooien in de koelkast en roer het glad voor u gaat kloppen.</p>"
      },
      {
        "id": "formats",
        "title": "Werken met elk formaat",
        "html": "<div class=\"va-guide-cols\">\n<div>\n<h3>Vloeibaar</h3>\n<ul>\n<li>Gaat rechtstreeks van de koelkast in de kom en is dan al op kloptemperatuur.</li>\n<li>Eén pak is goed voor {batches_1l} bereidingen. Open het dus aan het begin van een reeks bakdagen.</li>\n<li>Gooi het weg als het vreemd ruikt, belletjes vertoont of gescheiden is.</li>\n</ul>\n</div>\n<div>\n<h3>Poeder</h3>\n<ul>\n<li>{white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba. {white_powder} g poeder vervangt 1 eiwit.</li>\n<li>Voor één bereiding meringues: {powder_dose} g poeder + {water_dose} ml water.</li>\n<li>Koel het tot {chill} °C voor u gaat kloppen. Warme aquafaba geeft een trager en slapper schuim.</li>\n</ul>\n</div>\n</div>"
      },
      {
        "id": "fix",
        "title": "Als de meringue mislukt",
        "html": "<table class=\"va-guide-grid va-guide-grid--fix\">\n<thead><tr><th scope=\"col\">Wat u ziet</th><th scope=\"col\">Oorzaak</th><th scope=\"col\">Oplossing</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Wat u ziet\">Het schuim bereikt nooit zijn volle volume</td><td data-label=\"Oorzaak\">Vet op de kom of de garde</td><td data-label=\"Oplossing\">Ontvet alles voor u begint</td></tr>\n<tr><td data-label=\"Wat u ziet\">Het schuim komt traag op en blijft slap</td><td data-label=\"Oorzaak\">Aquafaba te warm</td><td data-label=\"Oplossing\">Koel eerst tot {chill} °C</td></tr>\n<tr><td data-label=\"Wat u ziet\">Siroopdruppeltjes op de bewaarde meringues</td><td data-label=\"Oorzaak\">De suiker ging er sneller bij dan hij kon oplossen</td><td data-label=\"Oplossing\">Een eetlepel per keer, op middelhoge snelheid</td></tr>\n<tr><td data-label=\"Wat u ziet\">Volume verloren voor het spuiten</td><td data-label=\"Oorzaak\">Het schuim heeft staan wachten</td><td data-label=\"Oplossing\">Spuit en droog meteen na de stevige pieken</td></tr>\n<tr><td data-label=\"Wat u ziet\">De meringues worden zacht en plakkerig</td><td data-label=\"Oorzaak\">Meringue trekt vocht uit de lucht</td><td data-label=\"Oplossing\">Bewaar luchtdicht en droog, met een droogmiddel</td></tr>\n<tr><td data-label=\"Wat u ziet\">Het resultaat verschilt van batch tot batch</td><td data-label=\"Oorzaak\">De aquafaba-concentratie schommelde</td><td data-label=\"Oplossing\">Houd bij industriële batches {concentration} g/ml aan</td></tr>\n</tbody>\n</table>"
      }
    ],
    "faq": [
      {
        "q": "Hoeveel aquafaba heb ik nodig voor meringues?",
        "a": "{dose} g gekoelde aquafaba en {sugar} g suiker geven {yield}. Dat vervangt {eggs} eiwitten. Een 1 L Tetrapak is goed voor {batches_1l} bereidingen, een zakje poeder van 200 g voor {batches_200g}."
      },
      {
        "q": "Vloeibaar of poeder: wat kiest een patisserie?",
        "a": "Kijk naar uw ovenplanning. Bakt u genoeg meringues om een geopend 1 L pak binnen {opened_days} dagen op te maken, dan is vloeibaar de eenvoudigste keuze. Staat meringue maar af en toe op het programma, dan is poeder veiliger, want het geopende zakje bederft niet."
      },
      {
        "q": "Hoe lang blijft een geopende verpakking goed?",
        "a": "Geopende vloeibare aquafaba bewaart u gesloten op maximaal {opened_temp} °C en gebruikt u binnen {opened_days} dagen. Geopend poeder blijft goed zolang het zakje droog en gesloten blijft. Ongeopend zijn beide formaten minimaal {unopened_months} maanden houdbaar op kamertemperatuur."
      },
      {
        "q": "Kan ik vloeibare aquafaba invriezen als ik onregelmatig meringues bak?",
        "a": "Ja. Verdeel het in porties, vries het tot {freeze_months} maanden in, laat het een nacht ontdooien in de koelkast en roer het glad voor u gaat kloppen. Ontdooide aquafaba klopt voor meringues net zo goed op als verse, maar vries het nooit opnieuw in."
      },
      {
        "q": "Waarom gaan mijn meringues tranen in de doos?",
        "a": "De suiker was niet helemaal opgelost. Zet de mixer op middelhoge snelheid, voeg de suiker lepel voor lepel toe en wacht tot elke lepel verdwenen is. Klop daarna weer op hoge snelheid tot het schuim glanst en stevig is."
      },
      {
        "q": "Heb ik met aquafaba nog wijnsteen of citroenzuur nodig?",
        "a": "Dat is optioneel, maar het versterkt het schuim voor de suiker erbij gaat. Voeg het toe terwijl de mixer draait, zodra er zachte pieken zijn, en niet meteen bij het begin."
      },
      {
        "q": "Hoe maak ik het poeder aan voor één bereiding?",
        "a": "Doseer op het aantal eiwitten: {powder_dose} g poeder en {water_dose} ml water voor één bereiding. Koel het mengsel tot {chill} °C voor het de mixer in gaat. De regel per eiwit: {white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba. {white_powder} g poeder vervangt 1 eiwit."
      },
      {
        "q": "Waar vind ik specificaties voor productie?",
        "a": "Vraag de technische fiche aan via ons [contactformulier]({contact_href}). Voor volumes in bag-in-box of IBC laat u ons uw meringuevolumes en productieritme weten, dan nemen wij contact met u op."
      }
    ]
  },
  "chocolate-mousse": {
    "lead": "In deze mousse vervangt opgeklopte aquafaba zowel de eiwitten als de room. Dat geeft een lichtere structuur en een zuivere chocoladesmaak. Eén bereiding vraagt {dose} g aquafaba, en de stap die alles bepaalt, is de chocolade laten afkoelen tot {fold_temp} °C voor u hem erdoor spatelt. U leest hier de werkwijze, hoe u een mousse redt die inzakt, en of vloeibaar of poeder bij uw dessertkaart past.",
    "glance": {
      "note": "Eén bereiding geeft {yield}.",
      "groups": [
        {
          "title": "Vloeibaar",
          "items": [
            {
              "value": "{dose} g",
              "label": "per bereiding, in plaats van {eggs} eiwitten"
            },
            {
              "value": "{batches_1l} bereidingen",
              "label": "uit een 1 L Tetrapak"
            }
          ]
        },
        {
          "title": "Poeder",
          "items": [
            {
              "value": "{powder_dose} g",
              "label": "per bereiding, aangemaakt met water"
            },
            {
              "value": "{batches_200g} bereidingen",
              "label": "uit een zakje van 200 g"
            }
          ]
        }
      ]
    },
    "sections": [
      {
        "id": "how",
        "title": "Zo maakt u chocolademousse met aquafaba",
        "html": "<p>De opgeklopte aquafaba vervangt zowel de eiwitten als de room. Alle structuur komt van het schuim, dus de temperatuur en het spatelen bepalen het resultaat.</p>\n<ol>\n<li>Smelt {chocolate} g pure couverture tot 45 tot 50 °C en laat daarna afkoelen tot {fold_temp} °C.</li>\n<li>Klop {dose} g gekoelde aquafaba op hoge snelheid in een schone, vetvrije kom tot zachte pieken, ongeveer {whip} minuten. Optionele stabilisator op dit moment: 2 g wijnsteen of 1 g citroenzuur.</li>\n<li>Voeg al kloppend geleidelijk {sugar} g fijne kristalsuiker toe, tot het schuim glanst en stevige pieken vormt. Het schuim moet dicht en stabiel zijn.</li>\n<li>Spatel de afgekoelde chocolade er met de hand door, snel en luchtig. Stop zodra alles gemengd is.</li>\n<li>Spuit of schep de mousse meteen in glaasjes en laat minstens {set_time} uur opstijven in de koelkast.</li>\n</ol>\n<p>Grote bereidingen? Emulgeer eerst een deel van de chocolade met wat aquafaba en spatel daarna de rest van het schuim erdoor. Zo blijven grote hoeveelheden homogeen.</p>\n<p><a href=\"{recipe_href}\">Bekijk het volledige recept voor chocolademousse</a></p>"
      },
      {
        "id": "decide",
        "title": "Vloeibaar of poeder? Kijk hoe vaak mousse op de kaart staat",
        "html": "<p>Mousse staat sowieso in de koelkast, dus een geopend pak vloeibare aquafaba bewaren is geen probleem. Het gaat erom hoe snel u het opmaakt. Ongeopend blijven beide formaten minimaal {unopened_months} maanden goed, en geopend poeder bederft niet. Met een 1 L pak maakt u {batches_1l} bereidingen mousse. Maakt u er niet zoveel in de {opened_days} dagen na opening, dan is poeder de betere keuze.</p>\n<table class=\"va-guide-grid\">\n<thead><tr><th scope=\"col\">Uw keuken</th><th scope=\"col\">Onze keuze</th><th scope=\"col\">Waarom</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Uw keuken\">Patisserie die elke ochtend mousseglaasjes spuit voor de toonbank</td><td data-label=\"Onze keuze\">Vloeibaar, 1 L Tetrapak</td><td data-label=\"Waarom\">{batches_1l} bereidingen per pak, ruim binnen {opened_days} dagen leeg</td></tr>\n<tr><td data-label=\"Uw keuken\">Restaurant met mousse als wisselend dessert, een paar glaasjes per keer</td><td data-label=\"Onze keuze\">Poeder, zakje van 200 g</td><td data-label=\"Waarom\">{batches_200g} bereidingen per zakje, en het wacht rustig tot de volgende kaart</td></tr>\n<tr><td data-label=\"Uw keuken\">Krappe koeling, ruime droge opslag</td><td data-label=\"Onze keuze\">Poeder</td><td data-label=\"Waarom\">De koeling blijft vrij voor de porties die u net hebt afgevuld</td></tr>\n<tr><td data-label=\"Uw keuken\">U wilt aquafaba die klaar is om op te kloppen</td><td data-label=\"Onze keuze\">Vloeibaar</td><td data-label=\"Waarom\">Al koud, rechtstreeks in de mixer, zonder aanmaken</td></tr>\n<tr><td data-label=\"Uw keuken\">Centrale keuken waarbij elke vestiging zelf opklopt</td><td data-label=\"Onze keuze\">Poeder</td><td data-label=\"Waarom\">Het zakje komt op locatie een rustige week zonder problemen door</td></tr>\n<tr><td data-label=\"Uw keuken\">Lijn die voorgeportioneerde bekertjes voor de retail afvult</td><td data-label=\"Onze keuze\">Vloeibaar, 10 L bag-in-box of 1 T IBC</td><td data-label=\"Waarom\">Continue afname, en de voor-emulsie met chocolade gebruikt dezelfde vloeibare aquafaba</td></tr>\n</tbody>\n</table>\n<p>Liever vloeibaar, maar wisselt uw dessertkaart onregelmatig? Vries het in porties in, laat het een nacht ontdooien in de koelkast en roer het glad voor u gaat kloppen.</p>"
      },
      {
        "id": "formats",
        "title": "Werken met elk formaat",
        "html": "<div class=\"va-guide-cols\">\n<div>\n<h3>Vloeibaar</h3>\n<ul>\n<li>Koud afgewogen, rechtstreeks van de koelkast in de mixer.</li>\n<li>Staat in dezelfde koeling als de glaasjes die opstijven. Noteer de openingsdatum op het pak.</li>\n<li>Gooi het weg als het vreemd ruikt, belletjes vertoont of gescheiden is.</li>\n</ul>\n</div>\n<div>\n<h3>Poeder</h3>\n<ul>\n<li>{white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba. {white_powder} g poeder vervangt 1 eiwit.</li>\n<li>Voor één bereiding mousse: {powder_dose} g poeder + {water_dose} ml water.</li>\n<li>Maak het vooraf aan en zet het koud. Warme aquafaba geeft minder volume.</li>\n</ul>\n</div>\n</div>"
      },
      {
        "id": "fix",
        "title": "Als de mousse mislukt",
        "html": "<table class=\"va-guide-grid va-guide-grid--fix\">\n<thead><tr><th scope=\"col\">Wat u ziet</th><th scope=\"col\">Oorzaak</th><th scope=\"col\">Oplossing</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Wat u ziet\">De mousse zakt in zodra de chocolade erbij gaat</td><td data-label=\"Oorzaak\">Chocolade warmer dan {fold_temp} °C heeft het schuim doen smelten</td><td data-label=\"Oplossing\">Laat afkoelen tot {fold_temp} °C of lager voor u gaat spatelen</td></tr>\n<tr><td data-label=\"Wat u ziet\">Compacte, zware mousse</td><td data-label=\"Oorzaak\">Te lang gespateld, de lucht is eruit</td><td data-label=\"Oplossing\">Spatel tot alles net gemengd is</td></tr>\n<tr><td data-label=\"Wat u ziet\">Het schuim komt niet op</td><td data-label=\"Oorzaak\">Vet in de kom, of suiker toegevoegd voor er zachte pieken waren</td><td data-label=\"Oplossing\">Schone kom, en de suiker pas als er zachte pieken zijn</td></tr>\n<tr><td data-label=\"Wat u ziet\">Volume verloren voor het spatelen</td><td data-label=\"Oorzaak\">Het schuim heeft staan wachten op de chocolade</td><td data-label=\"Oplossing\">Zorg dat de chocolade afgekoeld klaarstaat voor u gaat kloppen</td></tr>\n<tr><td data-label=\"Wat u ziet\">Slap schuim dat traag opkomt</td><td data-label=\"Oorzaak\">Aquafaba te warm</td><td data-label=\"Oplossing\">Klop de aquafaba gekoeld op</td></tr>\n<tr><td data-label=\"Wat u ziet\">Ongelijkmatig schuim met ontdooide aquafaba</td><td data-label=\"Oorzaak\">Niet volledig ontdooid of niet doorgeroerd</td><td data-label=\"Oplossing\">Laat volledig ontdooien en roer glad. Vries nooit opnieuw in</td></tr>\n</tbody>\n</table>"
      }
    ],
    "faq": [
      {
        "q": "Hoeveel aquafaba heb ik nodig voor chocolademousse?",
        "a": "{dose} g gekoelde aquafaba voor {yield}, met {sugar} g suiker en {chocolate} g pure chocolade. Dat vervangt {eggs} eiwitten. Een 1 L Tetrapak is goed voor {batches_1l} bereidingen, een zakje poeder van 200 g voor {batches_200g}."
      },
      {
        "q": "Vloeibaar of poeder: wat kiest een keuken voor mousse?",
        "a": "Dat hangt af van hoe vaak u een bereiding maakt. Maakt u bijna elke dag mousse, dan is een geopend 1 L pak binnen {opened_days} dagen leeg en werkt vloeibaar prima. Staat mousse maar af en toe op de kaart, dan kiest u poeder, want het geopende zakje bederft niet tussen twee kaarten in."
      },
      {
        "q": "Maakt het formaat een verschil voor de afgewerkte mousse?",
        "a": "Nee. Is de aquafaba koud en juist afgewogen, dan gedraagt het schuim zich in de kom hetzelfde. Het verschil zit in hoe u met uw voorraad omgaat voor de bereiding, niet in het dessert op het bord."
      },
      {
        "q": "Kan aquafaba naast het eiwit ook de room vervangen?",
        "a": "Ja. In dit recept komt de hele structuur van het opgeklopte schuim en de couverture, er gaat geen room door. De structuur is lichter en de chocolade komt duidelijk naar voren."
      },
      {
        "q": "Hoe lang blijft de afgewerkte mousse goed?",
        "a": "De mousse stijft minstens {set_time} uur op in de koelkast en blijft daarna {keep} dagen goed, gekoeld en in een afgesloten verpakking. Het is een product dat u vooraf maakt, geen dessert à la minute."
      },
      {
        "q": "Kan ik vloeibare aquafaba opkloppen die ingevroren en ontdooid is?",
        "a": "Ja. Voor mousse gedraagt ze zich zoals verse, op voorwaarde dat ze langzaam in de koelkast ontdooid is en weer glad geroerd. Aquafaba die nog half bevroren is, klopt ongelijkmatig op, en ontdooide aquafaba vriest u nooit opnieuw in."
      },
      {
        "q": "Hoe maak ik het poeder aan voor één bereiding?",
        "a": "Doseer op het aantal eiwitten: {powder_dose} g poeder en {water_dose} ml water voor één bereiding. Zet het koud voor het de mixer in gaat. De regel per eiwit: {white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba. {white_powder} g poeder vervangt 1 eiwit."
      },
      {
        "q": "Waar vind ik cijfers voor mijn eigen receptuur?",
        "a": "Laat ons via ons [contactformulier]({contact_href}) uw moussevolumes, het formaat dat u overweegt en uw productieritme weten. De technische fiche sturen wij op aanvraag."
      }
    ]
  },
  "mayonnaise": {
    "lead": "Met aquafaba maakt u een dikke, stabiele vegan mayonaise, helemaal zonder eidooier. Het hele recept draait om één verhouding: {oil_ratio} olie op aquafaba, op gewicht. Deze gids neemt u mee door de bereiding en de bekende valkuilen, en helpt u daarna beslissen of vloeibaar of poeder in uw keuken het handigst is.",
    "glance": {
      "note": "Eén bereiding geeft {yield} mayonaise.",
      "groups": [
        {
          "title": "Vloeibaar",
          "items": [
            {
              "value": "{dose} g",
              "label": "per bereiding, met {oil} g olie"
            },
            {
              "value": "{batches_1l} bereidingen",
              "label": "uit een 1 L Tetrapak"
            }
          ]
        },
        {
          "title": "Poeder",
          "items": [
            {
              "value": "{powder_dose} g",
              "label": "per bereiding, aangemaakt met water"
            },
            {
              "value": "{batches_200g} bereidingen",
              "label": "uit een zakje van 200 g"
            }
          ]
        }
      ]
    },
    "sections": [
      {
        "id": "how",
        "title": "Zo maakt u vegan mayonaise met aquafaba",
        "html": "<p>Hier vervangt aquafaba de eidooier, niet het eiwit. Er wordt niets opgeklopt: het is een koude emulsie, die u opbouwt door krachtig te mixen.</p>\n<ol>\n<li>Doe {dose} g gekoelde aquafaba met de mosterd, het zout en het citroensap of de azijn in een hoge, smalle mengbeker.</li>\n<li>Start de staafmixer en giet er {oil} g olie bij in een dunne, gelijkmatige straal. Blijf krachtig mixen, zodat de emulsie pakt.</li>\n<li>Wordt de massa dikker, proef dan en breng op smaak. Te stevig? Mix er enkele grammen koud water door.</li>\n<li>Doe over in een schone bak en zet meteen in de koelkast. Hygiënisch bereid blijft de mayonaise tot {keep} dagen goed in de koelkast.</li>\n</ol>\n<p>Grote bereidingen? Gebruik een high-shear mixer om de druppelgrootte te beheersen en de emulsie stabiel te houden.</p>\n<p><a href=\"{recipe_href}\">Bekijk het volledige recept voor mayonaise</a></p>"
      },
      {
        "id": "decide",
        "title": "Vloeibaar of poeder? Kijk hoe vaak u mayonaise maakt",
        "html": "<p>Voor een bereiding mayonaise hebt u heel weinig aquafaba nodig: {dose} g. Met een 1 L pak maakt u dus {batches_1l} bereidingen, en na opening hebt u {opened_days} dagen om het op te maken. Maakt u er in die tijd niet zoveel, dan is poeder de betere keuze: met een zakje van 200 g maakt u {batches_200g} bereidingen en na opening is er geen datum om op te letten. De afgewerkte mayonaise moet hoe dan ook in de koelkast, dus de keuze gaat over de geopende verpakking, niet over de saus.</p>\n<table class=\"va-guide-grid\">\n<thead><tr><th scope=\"col\">Uw keuken</th><th scope=\"col\">Onze keuze</th><th scope=\"col\">Waarom</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Uw keuken\">Traiteur of broodjeszaak die elke service verse mayonaise maakt</td><td data-label=\"Onze keuze\">Vloeibaar, 1 L Tetrapak</td><td data-label=\"Waarom\">Komt op mixtemperatuur uit de koelkast, en het pak is op tijd op</td></tr>\n<tr><td data-label=\"Uw keuken\">Restaurant met mayonaise bij één gerecht op de kaart</td><td data-label=\"Onze keuze\">Poeder, zakje van 200 g</td><td data-label=\"Waarom\">Een geopende liter krijgt u niet op binnen {opened_days} dagen</td></tr>\n<tr><td data-label=\"Uw keuken\">Koeling al vol met afgewerkte saus</td><td data-label=\"Onze keuze\">Poeder</td><td data-label=\"Waarom\">Het zakje neemt nooit plaats in de koeling in</td></tr>\n<tr><td data-label=\"Uw keuken\">U wilt minder producten met een datum op de sauspost</td><td data-label=\"Onze keuze\">Poeder</td><td data-label=\"Waarom\">Geen geopende, bederfelijke verpakking om te labelen, te registreren en te controleren</td></tr>\n<tr><td data-label=\"Uw keuken\">Producent die droge sausbasissen mengt</td><td data-label=\"Onze keuze\">Poeder</td><td data-label=\"Waarom\">Het gaat droog in de premix</td></tr>\n<tr><td data-label=\"Uw keuken\">Centrale keuken of industriële lijn</td><td data-label=\"Onze keuze\">Vloeibaar, 10 L bag-in-box of 1 T IBC</td><td data-label=\"Waarom\">Elke shift per kilo afgenomen, rechtstreeks in de high-shear mixer</td></tr>\n</tbody>\n</table>\n<p>Liever vloeibaar, maar maakt u zelden mayonaise? Vries het in porties in: twee porties van {white_liquid} g zijn samen één bereiding. Laat volledig ontdooien in de koelkast en roer het glad voor u gaat mixen.</p>"
      },
      {
        "id": "formats",
        "title": "Werken met elk formaat",
        "html": "<div class=\"va-guide-cols\">\n<div>\n<h3>Vloeibaar</h3>\n<ul>\n<li>Staat na opening in de koelkast en is dus al op mixtemperatuur als u het uitschenkt.</li>\n<li>Af te wegen op elke keukenweegschaal.</li>\n<li>Gooi het weg als het vreemd ruikt, belletjes vertoont of gescheiden is.</li>\n</ul>\n</div>\n<div>\n<h3>Poeder</h3>\n<ul>\n<li>{white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba. {white_powder} g poeder vervangt 1 eiwit.</li>\n<li>Voor één bereiding mayonaise: {powder_dose} g poeder + {water_dose} ml water. Gebruik een precisieweegschaal.</li>\n<li>Maak het aan met koud water, of koel het tot {chill} °C voor u gaat mixen.</li>\n</ul>\n</div>\n</div>"
      },
      {
        "id": "fix",
        "title": "Als de emulsie mislukt",
        "html": "<table class=\"va-guide-grid va-guide-grid--fix\">\n<thead><tr><th scope=\"col\">Wat u ziet</th><th scope=\"col\">Oorzaak</th><th scope=\"col\">Oplossing</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Wat u ziet\">De emulsie komt niet op gang</td><td data-label=\"Oorzaak\">Olie te snel toegevoegd, of niet krachtig genoeg gemixt</td><td data-label=\"Oplossing\">Dunne, gelijkmatige straal, met de mixer op volle snelheid</td></tr>\n<tr><td data-label=\"Wat u ziet\">Trage, onstabiele emulsie</td><td data-label=\"Oorzaak\">Aquafaba te warm</td><td data-label=\"Oplossing\">Gebruik de aquafaba op {chill} °C</td></tr>\n<tr><td data-label=\"Wat u ziet\">Te dik om mee te werken</td><td data-label=\"Oorzaak\">De emulsie is te stevig geworden</td><td data-label=\"Oplossing\">Mix er enkele grammen koud water door, geen extra olie</td></tr>\n<tr><td data-label=\"Wat u ziet\">Onstabiel bij grote bereidingen</td><td data-label=\"Oorzaak\">Druppelgrootte niet onder controle</td><td data-label=\"Oplossing\">Stap over op een high-shear mixer</td></tr>\n<tr><td data-label=\"Wat u ziet\">Dun resultaat met ontdooide aquafaba</td><td data-label=\"Oorzaak\">De aquafaba is na het ontdooien dunner</td><td data-label=\"Oplossing\">Roer glad. Nog te dun? Damp kort in op laag vuur</td></tr>\n<tr><td data-label=\"Wat u ziet\">Minder lang houdbaar dan {keep} dagen</td><td data-label=\"Oorzaak\">Hygiëne, of te laat in de koelkast gezet</td><td data-label=\"Oplossing\">Schone bak, meteen koelen</td></tr>\n</tbody>\n</table>"
      }
    ],
    "faq": [
      {
        "q": "Hoeveel aquafaba heb ik nodig voor vegan mayonaise?",
        "a": "{dose} g gekoelde aquafaba en {oil} g olie geven {yield} mayonaise, een verhouding olie op aquafaba van {oil_ratio} op gewicht. Een 1 L Tetrapak is goed voor {batches_1l} bereidingen, een zakje poeder van 200 g voor {batches_200g}."
      },
      {
        "q": "Vloeibaar of poeder: wat kiest een keuken voor mayonaise?",
        "a": "Tel uw bereidingen. Alleen een keuken die elke dag emulgeert, krijgt een geopend 1 L pak binnen {opened_days} dagen op. Maakt u maar af en toe mayonaise, neem dan het poeder: het geopende zakje bederft niet."
      },
      {
        "q": "Verandert het formaat de smaak van de saus?",
        "a": "Nee. In een basis van mosterd, zout en een zuur laat geen van beide formaten een merkbare peulvruchtensmaak na zodra de emulsie gepakt heeft. Varianten met kruiden, knoflook of specerijen maakt u op dezelfde basis, met dezelfde hoeveelheid aquafaba."
      },
      {
        "q": "Hoe maak ik het poeder aan voor één bereiding?",
        "a": "Doseer op het aantal eiwitten: {powder_dose} g poeder en {water_dose} ml water voor één bereiding. De regel per eiwit: {white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba. {white_powder} g poeder vervangt 1 eiwit. Gebruik koud water, of koel het tot {chill} °C voor u gaat mixen."
      },
      {
        "q": "Kan ik een bestaande receptuur van het ene formaat naar het andere omzetten?",
        "a": "Ja. {white_liquid} g vloeibaar komt overeen met {white_powder} g poeder aangemaakt met water, dus het gewicht aan aquafaba rekent u rechtstreeks om. De olieverhouding, de mosterd en het zuur blijven ongewijzigd."
      },
      {
        "q": "Hoe lang blijft mayonaise met aquafaba goed?",
        "a": "Tot {keep} dagen in de koelkast, op voorwaarde dat ze hygiënisch bereid is, in een schone bak bewaard wordt en meteen na het mixen gekoeld is."
      },
      {
        "q": "Kan ik vloeibare aquafaba invriezen als ik er weinig van verbruik?",
        "a": "Ja. Mayonaise is een van de bereidingen waarin ontdooide aquafaba even goed werkt als verse. Vries porties tot {freeze_months} maanden in, laat ze volledig ontdooien en roer ze weer glad voor u gaat emulgeren. Vries een ontdooide portie nooit opnieuw in."
      },
      {
        "q": "Wat betekent een geopende verpakking voor mijn HACCP-registratie?",
        "a": "Een geopend pak vloeibare aquafaba is op de sauspost een bederfelijk product met een datum: geregistreerd, koud bewaard en gecontroleerd voor gebruik. Mayonaise is rauw en wordt koud geserveerd, dus die controle is belangrijk. Een gesloten, droog zakje levert dat controlepunt niet op."
      },
      {
        "q": "Welke verpakking past bij een continue productielijn?",
        "a": "Continue lijnen werken met vloeibaar: bag-in-box voor centrale keukens en de 1 T IBC waar elke shift per kilo aquafaba wordt afgenomen. Vraag de technische fiche aan en geef uw volumes door via ons [contactformulier]({contact_href})."
      }
    ]
  },
  "baking": {
    "lead": "Bij het bakken kan aquafaba hele eieren vervangen of alleen de eiwitten, van génoise tot brioche. Reken {egg_liquid} g per ei dat u vervangt. U leest hier hoe de aquafaba in elk type gebak gaat, wat u in uw recept aanpast, en welk formaat bij uw productie past.",
    "glance": {
      "note": "Eén heel ei = {egg_liquid} g vloeibare aquafaba.",
      "groups": [
        {
          "title": "Vloeibaar",
          "items": [
            {
              "value": "{white_liquid} g",
              "label": "per eiwit"
            },
            {
              "value": "{whites_1l} eiwitten",
              "label": "uit een 1 L Tetrapak"
            }
          ]
        },
        {
          "title": "Poeder",
          "items": [
            {
              "value": "{white_powder} g",
              "label": "per eiwit, aangemaakt met water"
            },
            {
              "value": "{whites_200g} eiwitten",
              "label": "uit een zakje van 200 g"
            }
          ]
        }
      ]
    },
    "sections": [
      {
        "id": "how",
        "title": "Zo gebruikt u aquafaba in uw gebak",
        "html": "<p>Aquafaba doet bij het bakken drie dingen: lucht vasthouden, binden en vocht vasthouden. U kunt er dus op twee manieren mee werken. Klop de aquafaba op als die eiwitten vervangt. Voeg de aquafaba onopgeklopt toe als die de binding en het vocht van hele eieren vervangt.</p>\n<table class=\"va-guide-grid va-guide-grid--wrap\">\n<thead><tr><th scope=\"col\">Wat u bakt</th><th scope=\"col\">Hoe de aquafaba erin gaat</th><th scope=\"col\">Wat het oplevert</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Wat u bakt\">Biscuit en génoise</td><td data-label=\"Hoe de aquafaba erin gaat\">Opgeklopt op {chill} °C, daarna voorzichtig en zonder wachten erdoor gespateld</td><td data-label=\"Wat het oplevert\">De lucht</td></tr>\n<tr><td data-label=\"Wat u bakt\">Cakes, koekjes en muffins</td><td data-label=\"Hoe de aquafaba erin gaat\">Gemengd met de suiker voor het bij het vet komt</td><td data-label=\"Wat het oplevert\">Een stabielere emulsie</td></tr>\n<tr><td data-label=\"Wat u bakt\">Suikerrijke beslagen</td><td data-label=\"Hoe de aquafaba erin gaat\">Eerst opgeklopt met een deel van de suiker, daarna gemengd met de vetten</td><td data-label=\"Wat het oplevert\">Volume dat tijdens het bakken behouden blijft</td></tr>\n<tr><td data-label=\"Wat u bakt\">Koekjes en brownies</td><td data-label=\"Hoe de aquafaba erin gaat\">Rechtstreeks toegevoegd, onopgeklopt</td><td data-label=\"Wat het oplevert\">Binding en vocht</td></tr>\n<tr><td data-label=\"Wat u bakt\">Brioche en zoete broodjes</td><td data-label=\"Hoe de aquafaba erin gaat\">Onopgeklopt, bij de vloeistoffen van het deeg</td><td data-label=\"Wat het oplevert\">Zachtheid en houdbaarheid</td></tr>\n</tbody>\n</table>\n<p>Vervangt u hele eieren? Aquafaba bevat meer water dan ei. Verminder de melk of het water een beetje, of verhoog de droge ingrediënten, en bak volledig gaar. Vervangt u alleen de eiwitten, zoals bij meringues of macarons, dan is er normaal geen aanpassing nodig.</p>\n<p><a href=\"{recipe_href}\">Lees de volledige gids over bakken met aquafaba</a></p>"
      },
      {
        "id": "decide",
        "title": "Vloeibaar of poeder? Kijk hoe vaak u zonder ei bakt",
        "html": "<p>Aangemaakt met water brengt het poeder evenveel water in het beslag als de vloeibare aquafaba, dus het receptwerk is identiek. De keuze hangt af van uw tempo en uw opslag. Een 1 L Tetrapak vervangt {eggs_1l} hele eieren of {whites_1l} eiwitten en gebruikt u na opening binnen {opened_days} dagen, bewaard in de koelkast. Een zakje van 200 g vervangt {whites_200g} eiwitten en bederft niet na opening.</p>\n<table class=\"va-guide-grid\">\n<thead><tr><th scope=\"col\">Uw keuken</th><th scope=\"col\">Onze keuze</th><th scope=\"col\">Waarom</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Uw keuken\">Bakkerij met elke dag een eivrije lijn</td><td data-label=\"Onze keuze\">Vloeibaar, 1 L Tetrapak</td><td data-label=\"Waarom\">Een geopend pak is ruim binnen {opened_days} dagen leeg</td></tr>\n<tr><td data-label=\"Uw keuken\">Keuken met af en toe een vegan bestelling</td><td data-label=\"Onze keuze\">Poeder, zakje van 200 g</td><td data-label=\"Waarom\">U maakt aan wat de bestelling vraagt, de rest wacht</td></tr>\n<tr><td data-label=\"Uw keuken\">Biscuit en génoise, opgeklopt voor volume</td><td data-label=\"Onze keuze\">Vloeibaar</td><td data-label=\"Waarom\">Het geopende pak is al op kloptemperatuur</td></tr>\n<tr><td data-label=\"Uw keuken\">Koeling volledig ingenomen door crèmes en vullingen</td><td data-label=\"Onze keuze\">Poeder</td><td data-label=\"Waarom\">Het staat op een droog rek</td></tr>\n<tr><td data-label=\"Uw keuken\">Dagelijkse lijn plus onregelmatige bestellingen</td><td data-label=\"Onze keuze\">Beide</td><td data-label=\"Waarom\">De omrekening ligt vast, dus een recept werkt met beide</td></tr>\n<tr><td data-label=\"Uw keuken\">Industriële bakkerijlijn of foodservice met meerdere vestigingen</td><td data-label=\"Onze keuze\">Vloeibaar, 10 L bag-in-box of 1 T IBC</td><td data-label=\"Waarom\">Continu doseren, zonder aanmaakstap</td></tr>\n</tbody>\n</table>\n<p>Onregelmatig verbruik, maar toch liever vloeibaar? Invriezen in porties kan, maar het kost vriesruimte, een nacht ontdooien en een controle van de viscositeit. Dat werk valt weg met poeder.</p>"
      },
      {
        "id": "formats",
        "title": "Werken met elk formaat",
        "html": "<div class=\"va-guide-cols\">\n<div>\n<h3>Vloeibaar</h3>\n<ul>\n<li>Weeg {egg_liquid} g af per heel ei of {white_liquid} g per eiwit, rechtstreeks uit het pak.</li>\n<li>Gooi het weg als het vreemd ruikt, belletjes vertoont of gescheiden is.</li>\n</ul>\n</div>\n<div>\n<h3>Poeder</h3>\n<ul>\n<li>{white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba. {white_powder} g poeder vervangt 1 eiwit.</li>\n<li>Voor opgeklopt gebak koelt u het eerst tot {chill} °C. In deeg en beslag gaat het zoals het is.</li>\n</ul>\n</div>\n</div>"
      },
      {
        "id": "fix",
        "title": "Als het gebak mislukt",
        "html": "<table class=\"va-guide-grid va-guide-grid--fix\">\n<thead><tr><th scope=\"col\">Wat u ziet</th><th scope=\"col\">Oorzaak</th><th scope=\"col\">Oplossing</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Wat u ziet\">Platte biscuit</td><td data-label=\"Oorzaak\">Het schuim heeft staan wachten, of is te hard gespateld</td><td data-label=\"Oplossing\">Spatel het er meteen en voorzichtig door</td></tr>\n<tr><td data-label=\"Wat u ziet\">Slap, nat beslag</td><td data-label=\"Oorzaak\">Hele eieren één op één vervangen, zonder het water te verminderen</td><td data-label=\"Oplossing\">Verminder de melk of het water een beetje, of voeg droge ingrediënten toe</td></tr>\n<tr><td data-label=\"Wat u ziet\">Nat midden</td><td data-label=\"Oorzaak\">Het extra water verlengt de baktijd</td><td data-label=\"Oplossing\">Bak volledig gaar voor u het uit de oven haalt</td></tr>\n<tr><td data-label=\"Wat u ziet\">Slap schuim</td><td data-label=\"Oorzaak\">Aquafaba te warm</td><td data-label=\"Oplossing\">Klop de aquafaba op bij {chill} °C</td></tr>\n<tr><td data-label=\"Wat u ziet\">Slap schuim of zwakke binding met ontdooide aquafaba</td><td data-label=\"Oorzaak\">De aquafaba is na het ontdooien dunner</td><td data-label=\"Oplossing\">Damp kort in op laag vuur. Vries nooit opnieuw in</td></tr>\n<tr><td data-label=\"Wat u ziet\">De houdbaarheid van het product is veranderd</td><td data-label=\"Oorzaak\">Een ander vochtgehalte verandert de wateractiviteit</td><td data-label=\"Oplossing\">Controleer houdbaarheid en microbiologische stabiliteit opnieuw na het herformuleren</td></tr>\n</tbody>\n</table>"
      }
    ],
    "faq": [
      {
        "q": "Hoeveel aquafaba vervangt één ei bij het bakken?",
        "a": "{egg_liquid} g vloeibare aquafaba vervangt één heel ei en {white_liquid} g vervangt één eiwit. In poeder is dat {white_powder} g per eiwit, aangemaakt met water. Dit zijn startwaarden: pas de andere vloeistoffen aan om de consistentie van uw beslag te behouden."
      },
      {
        "q": "Kan aquafaba hele eieren vervangen, of alleen eiwitten?",
        "a": "Allebei. Opgeklopt vervangt aquafaba de eiwitten en brengt ze de lucht in biscuit en génoise. Onopgeklopt toegevoegd vervangt ze de binding en het vocht van een heel ei, zoals in koekjes, brownies en verrijkte degen."
      },
      {
        "q": "Vloeibaar of poeder: wat kiest een bakkerij?",
        "a": "Dat hangt af van hoe vaak u zonder ei bakt. Een dagelijkse lijn maakt een geopend 1 L pak binnen {opened_days} dagen leeg, dus vloeibaar werkt prima. Krijgt u maar af en toe een vegan bestelling, dan kiest u poeder, want het geopende zakje bederft niet."
      },
      {
        "q": "Hoe maak ik het poeder aan?",
        "a": "Doseer op het aantal eiwitten. De regel per eiwit: {white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba. {white_powder} g poeder vervangt 1 eiwit. Voor opgeklopt gebak koelt u het tot {chill} °C voor het de mixer in gaat."
      },
      {
        "q": "Moet ik met poeder mijn recept niet aanpassen, zoals met vloeibaar?",
        "a": "Toch wel. Aangemaakt met water brengt het evenveel water in het beslag, dus de andere vloeistoffen gaan nog altijd een beetje omlaag of de droge ingrediënten omhoog. Het zakje verandert uw verbruik en uw opslag, niet uw receptuur."
      },
      {
        "q": "Welk formaat past bij brioche en andere verrijkte degen?",
        "a": "Allebei. De aquafaba gaat onopgeklopt bij de vloeistoffen van het deeg, voor zachtheid en houdbaarheid, dus de kloptemperatuur speelt geen rol. Kies op basis van hoe vaak u dat deeg maakt en waar u plaats hebt om de verpakking te bewaren."
      },
      {
        "q": "Hoe weet ik dat een geopend pak vloeibare aquafaba niet meer bruikbaar is?",
        "a": "Een zure geur, belletjes in het pak of een gescheiden uitzicht betekenen dat u het weggooit en er niet mee bakt. Hetzelfde geldt voor een pak dat boven {opened_temp} °C bewaard is of langer dan {opened_days} dagen open is."
      },
      {
        "q": "Kan een bakkerij beide formaten in huis hebben?",
        "a": "Ja, en meerdere bakkerijen doen dat: vloeibaar voor de dagelijkse eivrije lijn, het zakje voor onregelmatige bestellingen. De omrekening ligt vast, dus een recept dat op het ene formaat ontwikkeld is, werkt ook met het andere."
      },
      {
        "q": "Waar vind ik specificaties voor industriële productie?",
        "a": "Vraag de technische fiche aan via ons [contactformulier]({contact_href}). Voor volumes in bag-in-box of IBC beschrijft u uw lijn en uw maandvolume, dan nemen wij contact met u op."
      }
    ]
  },
  "macarons": {
    "lead": "Ja, u kunt macarons maken zonder eiwit. Gebruik gewoon {dose} g aquafaba in plaats van de eiwitten en laat de rest van uw recept zoals het is. Deze gids neemt u stap voor stap mee, toont waar u onderweg op moet letten, en helpt u kiezen tussen vloeibaar en poeder.",
    "glance": {
      "note": "Eén bereiding geeft {yield}.",
      "groups": [
        {
          "title": "Vloeibaar",
          "items": [
            {
              "value": "{dose} g",
              "label": "per bereiding, in plaats van {eggs} eiwitten"
            },
            {
              "value": "{batches_1l} bereidingen",
              "label": "uit een 1 L Tetrapak"
            }
          ]
        },
        {
          "title": "Poeder",
          "items": [
            {
              "value": "{powder_dose} g",
              "label": "per bereiding, aangemaakt met water"
            },
            {
              "value": "{batches_200g} bereidingen",
              "label": "uit een zakje van 200 g"
            }
          ]
        }
      ]
    },
    "sections": [
      {
        "id": "how",
        "title": "Zo maakt u macarons met aquafaba",
        "html": "<p>Aquafaba vervangt alleen de eiwitten, dus het amandelmeel, de poedersuiker en de fijne kristalsuiker van uw recept blijven zoals ze zijn. Het schuim moet twee stappen doorstaan, het spatelen en het rusten, dus de timing is belangrijker dan het kloppen zelf.</p>\n<ol>\n<li>Zeef het amandelmeel en de poedersuiker samen en zet apart. Bekleed nu al de bakplaten.</li>\n<li>Klop {dose} g gekoelde aquafaba op hoge snelheid in een schone, vetvrije kom tot zachte pieken. Voeg de wijnsteen toe en daarna geleidelijk {sugar} g fijne kristalsuiker, tot het schuim glanst en stevige pieken vormt.</li>\n<li>Spatel het droge mengsel er in drie keer door. Stop wanneer het beslag in dikke, trage linten van de spatel loopt.</li>\n<li>Spuit rondjes van 3 tot 4 cm op bakpapier, met gelijke tussenruimte.</li>\n<li>Laat rusten op kamertemperatuur tot er een droog velletje ontstaat: {rest} minuten, afhankelijk van de luchtvochtigheid.</li>\n<li>Bak op {bake} °C, zonder ventilator, gedurende {bake_time} minuten. Laat volledig afkoelen op de bakplaat voor u de schelpen aanraakt.</li>\n<li>Zoek de schelpen per paar uit, vul ze en zet ze {mature} uur in de koelkast voor het serveren, zodat de textuur zich ontwikkelt.</li>\n</ol>\n<p>Werkt u met industriële batches? Houd de aquafaba-concentratie op {concentration} g/ml, zodat de schelpen van batch tot batch gelijk zijn.</p>\n<p><a href=\"{recipe_href}\">Bekijk het volledige recept voor macarons</a></p>"
      },
      {
        "id": "decide",
        "title": "Vloeibaar of poeder? Kijk hoe vaak u macarons spuit",
        "html": "<p>Uw macarons rijpen al in de koelkast, dus een geopend pak vloeibare aquafaba koud bewaren is eenvoudig. Het gaat erom hoe snel u het opmaakt. Met een 1 L pak maakt u {batches_1l} bereidingen macarons. Bakt u er niet zoveel in de {opened_days} dagen na opening, dan is poeder de betere keuze: met een zakje van 200 g maakt u {batches_200g} bereidingen en het bederft niet na opening. Ongeopend blijven beide formaten minimaal {unopened_months} maanden goed op kamertemperatuur.</p>\n<table class=\"va-guide-grid\">\n<thead><tr><th scope=\"col\">Uw keuken</th><th scope=\"col\">Onze keuze</th><th scope=\"col\">Waarom</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Uw keuken\">Patisserie die op de meeste werkdagen schelpen spuit</td><td data-label=\"Onze keuze\">Vloeibaar, 1 L Tetrapak</td><td data-label=\"Waarom\">{batches_1l} bereidingen per pak, binnen {opened_days} dagen opgebruikt</td></tr>\n<tr><td data-label=\"Uw keuken\">Zaak die macarons op bestelling bakt</td><td data-label=\"Onze keuze\">Poeder, zakje van 200 g</td><td data-label=\"Waarom\">Het overbrugt de lange pauzes tussen twee producties</td></tr>\n<tr><td data-label=\"Uw keuken\">Koelkast al vol met rijpende macarons en ganache</td><td data-label=\"Onze keuze\">Poeder</td><td data-label=\"Waarom\">Het blijft droog en gesloten, buiten de koeling</td></tr>\n<tr><td data-label=\"Uw keuken\">U klopt op zodra de bakplaten bekleed zijn</td><td data-label=\"Onze keuze\">Vloeibaar</td><td data-label=\"Waarom\">Koud en klaar voor de garde, zonder iets aan te maken</td></tr>\n<tr><td data-label=\"Uw keuken\">Plantaardige patisserielijn die continu spuit</td><td data-label=\"Onze keuze\">Vloeibaar, 10 L bag-in-box of 1 T IBC</td><td data-label=\"Waarom\">De aanvoer stopt nooit, en de koelketen heeft het bedrijf zelf in handen</td></tr>\n</tbody>\n</table>\n<p>Poeder is geen droge mix die u zomaar bij de rest voegt. De aquafaba wordt eerst apart opgeklopt, dus maak het poeder aan met water voor het ook maar in de buurt van het amandelmeel komt.</p>"
      },
      {
        "id": "formats",
        "title": "Werken met elk formaat",
        "html": "<div class=\"va-guide-cols\">\n<div>\n<h3>Vloeibaar</h3>\n<ul>\n<li>Komt koud uit het geopende pak, precies zoals het recept het vraagt om op te kloppen.</li>\n<li>Het deelt de koelkast met uw rijpende macarons, dus noteer de openingsdatum op het pak.</li>\n<li>Gooi het weg als het vreemd ruikt, belletjes vertoont of gescheiden is.</li>\n</ul>\n</div>\n<div>\n<h3>Poeder</h3>\n<ul>\n<li>{white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba. {white_powder} g poeder vervangt 1 eiwit.</li>\n<li>Voor één bereiding macarons: {powder_dose} g poeder + {water_dose} ml water.</li>\n<li>Maak het aan en koel het voor u gaat kloppen. Koude aquafaba klopt sneller op tot een stabieler schuim.</li>\n</ul>\n</div>\n</div>"
      },
      {
        "id": "fix",
        "title": "Als de schelpen mislukken",
        "html": "<table class=\"va-guide-grid va-guide-grid--fix\">\n<thead><tr><th scope=\"col\">Wat u ziet</th><th scope=\"col\">Oorzaak</th><th scope=\"col\">Oplossing</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Wat u ziet\">Het schuim bereikt zijn volume niet</td><td data-label=\"Oorzaak\">Vet op de kom of de garde</td><td data-label=\"Oplossing\">Ontvet alles voor u begint</td></tr>\n<tr><td data-label=\"Wat u ziet\">De meringue zakt in voor het spuiten</td><td data-label=\"Oorzaak\">Ze heeft staan wachten terwijl het droge mengsel of de bakplaten werden klaargemaakt</td><td data-label=\"Oplossing\">Eerst zeven en de bakplaten bekleden, als laatste kloppen</td></tr>\n<tr><td data-label=\"Wat u ziet\">De schelpen rijzen niet goed</td><td data-label=\"Oorzaak\">Te ver doorgespateld, voorbij het lintstadium, of te ruw gespateld</td><td data-label=\"Oplossing\">Stop bij dikke, trage linten</td></tr>\n<tr><td data-label=\"Wat u ziet\">Geen velletje na het rusten</td><td data-label=\"Oorzaak\">Vochtige ruimte</td><td data-label=\"Oplossing\">Laat langer rusten en oordeel op het gevoel, niet op de klok</td></tr>\n<tr><td data-label=\"Wat u ziet\">De schelpen gaan tranen tijdens het bewaren</td><td data-label=\"Oorzaak\">Suiker niet volledig opgelost</td><td data-label=\"Oplossing\">Voeg de fijne kristalsuiker geleidelijk toe</td></tr>\n<tr><td data-label=\"Wat u ziet\">De schelpen worden zacht tijdens het bewaren</td><td data-label=\"Oorzaak\">Schelpen trekken vocht uit de lucht</td><td data-label=\"Oplossing\">Bewaar op een plaats met lage luchtvochtigheid</td></tr>\n<tr><td data-label=\"Wat u ziet\">De schelpen verschillen van batch tot batch</td><td data-label=\"Oorzaak\">De aquafaba-concentratie schommelde</td><td data-label=\"Oplossing\">Houd bij industriële batches {concentration} g/ml aan</td></tr>\n</tbody>\n</table>"
      }
    ],
    "faq": [
      {
        "q": "Hoeveel aquafaba heb ik nodig voor macarons?",
        "a": "{dose} g gekoelde aquafaba voor {yield}, met {sugar} g fijne kristalsuiker. Dat vervangt {eggs} eiwitten. Een 1 L Tetrapak is goed voor {batches_1l} bereidingen, een zakje poeder van 200 g voor {batches_200g}."
      },
      {
        "q": "Vloeibaar of poeder: wat kiest een macaronatelier?",
        "a": "Tel uw producties. Spuit u vaak genoeg om een geopend 1 L pak binnen {opened_days} dagen op te maken, dan kan vloeibaar uw tempo volgen. Bakt u macarons op bestelling, neem dan het poeder: het geopende zakje wacht zonder te bederven."
      },
      {
        "q": "Moet ik de rest van mijn recept aanpassen?",
        "a": "Nee. Bij macarons vervangt u alleen eiwitten, geen hele eieren, dus u vervangt één op één. Het amandelmeel, de poedersuiker en de fijne kristalsuiker blijven precies zoals ze in uw recept staan."
      },
      {
        "q": "Voeg ik nog een zure stabilisator toe aan de meringue?",
        "a": "In het recept is dat optioneel. Wijnsteen of citroenzuur gaat erbij zodra er zachte pieken zijn en voor de fijne kristalsuiker, en ondersteunt het schuim tijdens het spatelen en het rusten. Voeg het toe aan het schuim, nooit aan het droge mengsel."
      },
      {
        "q": "Verandert de rusttijd in een vochtige ruimte?",
        "a": "Ja, en u beoordeelt het op het gevoel. De schelpen zijn klaar wanneer het oppervlak droog aanvoelt als u het licht met een vinger aanraakt. In een vochtige ruimte vormt dat velletje zich traag, dus {rest} minuten is een richtlijn, geen regel."
      },
      {
        "q": "Hoe lang blijft een geopende verpakking goed?",
        "a": "Geopende vloeibare aquafaba bewaart u gesloten op maximaal {opened_temp} °C en gebruikt u binnen {opened_days} dagen. Vertrouw ook op uw zintuigen: bij een zure geur, belletjes of scheiding gaat ze niet in de meringue. Geopend poeder blijft goed zolang het zakje droog en gesloten blijft."
      },
      {
        "q": "Hoe maak ik het poeder aan voor één bereiding?",
        "a": "Doseer op het aantal eiwitten: {powder_dose} g poeder en {water_dose} ml water voor één bereiding. Koel het voor u gaat kloppen. De regel per eiwit: {white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba. {white_powder} g poeder vervangt 1 eiwit."
      },
      {
        "q": "Kunt u de concentratiespecificatie bezorgen voor mijn productiedossier?",
        "a": "Ja, de technische fiche sturen wij op aanvraag. Beschrijf via ons [contactformulier]({contact_href}) uw productie, uw vestigingen en het formaat dat u overweegt."
      }
    ]
  }
};
