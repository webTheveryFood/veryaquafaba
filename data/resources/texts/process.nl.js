// Procesblad, Nederlands. Zelfde structuur, zelfde {tokens} en zelfde HTML-tags als
// process.en.js (gecontroleerd door scripts/applications/check-guides.mjs). Geen gedachtestreepje.
// Stappen, oorzaken en oplossingen zijn die van de gidsen op de site.
export default {
  meringue: {
    title: 'Aquafaba-meringue stap voor stap - VERY AQUAFABA',
    h1: 'Zo maakt u aquafaba-meringue: het stappenblad',
    description: 'Een afdrukbaar procesblad voor het VERY AQUAFABA meringuerecept: elke stap met de waarde die u moet halen, een kolom voor uw batch en de controles.',
    lead: 'Meringue is een recept waarbij het verschil tussen een goede plaat en een plakkerige in een paar graden en een paar minuten zit. Met dit blad vangt u die op: het VERY AQUAFABA meringuerecept als checklist die u afdrukt, gaandeweg invult en bewaart.',
    powderNote: 'Poeder: maak {powder_dose} g VERY AQUAFABA poeder aan met {water_dose} ml water vóór stap 1 en koel het tot {chill} °C.',
    steps: [
      { step: 'De aquafaba koelen', reference: '{chill} °C' },
      { step: 'Kom en garde ontvetten', reference: 'Geen vet, geen resten' },
      { step: 'Op hoge snelheid tot zachte pieken kloppen', reference: '{dose} g, {whip} min' },
      { step: 'De optionele stabilisator tijdens het kloppen toevoegen', reference: '2 g cream of tartar of 1 g citroenzuur' },
      { step: 'De suiker op middelhoge snelheid toevoegen, eetlepel per eetlepel', reference: '{sugar} g fijne suiker' },
      { step: 'Terug naar hoge snelheid tot glanzend en stevig', reference: 'Stevige pieken' },
      { step: 'Meteen opspuiten', reference: '3 tot 4 cm' },
      { step: 'Drogen zonder ventilator', reference: '{bake} °C, {bake_time} u' },
      { step: 'Op de plaat laten afkoelen, dan luchtdicht bewaren', reference: 'Kamertemperatuur, zakje droogmiddel' },
    ],
    checks: [
      { see: 'Het schuim bereikt nooit het volle volume', check: 'Vet op de kom of de garde', fix: 'Alles ontvetten voordat u begint' },
      { see: 'Het schuim bouwt traag op en blijft slap', check: 'Aquafaba te warm', fix: 'Eerst koelen tot {chill} °C' },
      { see: 'Siroopdruppels op de meringues tijdens het bewaren', check: 'De suiker ging er sneller in dan hij kon oplossen', fix: 'Eetlepel per eetlepel, op middelhoge snelheid' },
      { see: 'Volume verloren vóór het opspuiten', check: 'De kom stond te wachten', fix: 'Meteen na de stevige pieken opspuiten en drogen' },
      { see: 'De meringues worden zacht en plakkerig', check: 'Meringue trekt vocht uit de lucht', fix: 'Luchtdicht en droog bewaren, met een zakje droogmiddel' },
    ],
    sections: [
      {
        id: 'use',
        title: 'Zo gebruikt u dit blad',
        html: `<p>Druk er één per batch af en leg het naast de mixer, met het <a href="{recipe_href}">volledige meringuerecept</a> bij de hand als u de werkwijze in detail nodig hebt. Schrijf gaandeweg in de laatste kolom wat u werkelijk deed: de temperatuur waarop de aquafaba erin ging, hoe lang het duurde tot zachte pieken, hoe lang de plaat in de oven stond. Meestal komt het overeen met de referentie. Als dat niet zo is, hebt u de reden op papier voordat iemand een meringue proeft.</p>
<p>Bewaar de ingevulde bladen. Een mislukte batch is evenveel waard als een geslaagde, want de volgende bakker vertrekt van wat u hebt geleerd in plaats van het opnieuw uit te zoeken. En gaat een batch fout zonder dat u ziet waarom, stuur ons dan het blad: het is voor ons de snelste manier om te helpen.</p>`,
      },
      {
        id: 'before',
        title: 'Voordat u aquafaba voor meringue opklopt',
        html: `<p>Drie dingen beslissen de meeste meringuebatches voordat de mixer aangaat:</p>
<ul>
<li>De aquafaba is koud, rechtstreeks uit de koelkast op {chill} °C. Aangemaakt poeder wordt tot hetzelfde punt gekoeld.</li>
<li>De kom en de garde zijn schoongeveegd. Aquafabaschuim heeft zelf geen vet, en een vetfilm houdt het volume klein.</li>
<li>De {sugar} g fijne suiker is afgewogen en binnen handbereik, want hij gaat er lepel voor lepel in en u wilt niet stoppen om te wegen.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'Zo ziet u dat elke stap goed gaat',
        html: `<p>Het blad geeft u de waarde die u moet halen. Zo weet u, stap voor stap, dat u die gehaald hebt:</p>
<ul>
<li><strong>Stap 3, zachte pieken.</strong> Til de garde op: het schuim houdt een vorm, maar de punt valt om. Bij de referentiebatch is dat na ongeveer {whip} minuten op hoge snelheid. Een vollere kom heeft meer tijd nodig, dus vertrouw op de piek, niet op de klok.</li>
<li><strong>Stap 5, de suiker.</strong> Elke lepel verdwijnt in het schuim voordat de volgende erin gaat. Voelt u korrels tegen de wand van de kom, wacht dan. Suiker die niet is opgelost, is wat uit de afgewerkte meringue lekt tijdens het bewaren.</li>
<li><strong>Stap 6, stevige pieken.</strong> De piek blijft recht staan als u de garde optilt en het schuim glanst. Dat komt met de laatste suiker. Dat is uw signaal om op te spuiten, niet om de kom even te laten staan.</li>
<li><strong>Stap 7, opspuiten.</strong> Rondjes van 3 tot 4 cm op bakpapier, gelijkmatig verdeeld. Aquafabaschuim houdt minder goed dan eiwitschuim, dus de kom die wacht terwijl een andere klopt, verliest volume.</li>
<li><strong>Stap 8, drogen.</strong> Op {bake} °C zonder ventilator bakken de meringues niet, ze drogen. Ze zijn klaar als ze door en door droog zijn, na ongeveer {bake_time} uur voor deze maat; grotere vormen hebben langer nodig. Een plakkerige kern betekent dat ze te vroeg uit de oven kwamen.</li>
<li><strong>Stap 9, afkoelen.</strong> Volledig koud op de plaat voordat ze worden verplaatst, dan in een luchtdichte doos met een zakje droogmiddel als u dat hebt. Meringue trekt vocht uit de lucht, dus de doos telt evenveel als de oven.</li>
</ul>
<p>Bij industriële batches houdt u de aquafabaconcentratie op {concentration} g/ml, zodat het schuim zich bij elke run hetzelfde gedraagt.</p>`,
      },
    ],
    faq: [
      { q: 'Hoe weet ik dat het schuim stevige pieken heeft?', a: 'Til de garde op: de piek blijft recht staan zonder om te vallen en het schuim glanst. De referentiebatch bereikt zachte pieken in {whip} minuten; de suiker gaat er daarna in, en de stevige piek komt met de laatste suiker.' },
      { q: 'Kan ik het opgeklopte schuim laten wachten terwijl de oven bezet is?', a: 'Nee. Spuit op en droog meteen na de stevige pieken. Is de oven vol, klop de volgende kom dan later in plaats van een klaar schuim te laten staan.' },
      { q: 'De meringues zijn vanbinnen plakkerig. Wat controleer ik?', a: 'De droogstap: {bake} °C zonder ventilator gedurende de volle {bake_time} uur, tot door en door droog, daarna volledig afkoelen op de plaat. Vormen groter dan 3 tot 4 cm hebben meer tijd nodig dan de referentietijd.' },
      { q: 'Geldt het blad ook voor het poeder?', a: 'Ja. Maak {powder_dose} g poeder aan met {water_dose} ml water, koel het tot {chill} °C en begin bij stap 1. De regel per eiwit: {white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba.' },
      { q: 'Kan ik dit blad meesturen met een technische vraag?', a: 'Ja. Vul de kolom van uw batch in, noteer wat u zag en beschrijf het via ons [contactformulier]({contact_href}) of het aanvraagformulier voor professionals op deze pagina. Het ingevulde blad is voor ons de snelste manier om te helpen.' },
    ],
  },

  'chocolate-mousse': {
    title: 'Aquafaba-chocolademousse stap voor stap - VERY AQUAFABA',
    h1: 'Zo maakt u aquafaba-chocolademousse: het stappenblad',
    description: 'Een afdrukbaar procesblad voor de VERY AQUAFABA chocolademousse: chocoladetemperaturen, kloppen, spatelen en opstijven, een kolom voor uw batch en de controles.',
    lead: 'Chocolademousse is een recept van twee temperaturen, en de mousse houdt alleen als de chocolade het schuim op de juiste temperatuur ontmoet. Met dit blad zorgt u daarvoor: het VERY AQUAFABA mousserecept als checklist die u afdrukt, gaandeweg invult en bewaart.',
    powderNote: 'Poeder: maak {powder_dose} g VERY AQUAFABA poeder vooraf aan met {water_dose} ml water en koel het vóór stap 3.',
    steps: [
      { step: 'De pure couverture smelten', reference: '{chocolate} g, 45 tot 50 °C' },
      { step: 'De chocolade laten afkoelen', reference: '{fold_temp} °C' },
      { step: 'Kom en garde ontvetten, de gekoelde aquafaba afwegen', reference: '{dose} g' },
      { step: 'Op hoge snelheid tot zachte pieken kloppen', reference: '{whip} min' },
      { step: 'De optionele stabilisator toevoegen', reference: '2 g cream of tartar of 1 g citroenzuur' },
      { step: 'De suiker geleidelijk toevoegen tijdens het kloppen, tot glanzende stevige pieken', reference: '{sugar} g fijne suiker' },
      { step: 'De afgekoelde chocolade met de hand snel en licht erdoor spatelen', reference: 'Stoppen zodra gemengd' },
      { step: 'Meteen in bekers spuiten of scheppen', reference: '{yield}' },
      { step: 'Koelen om op te stijven', reference: 'Minstens {set_time} u; blijft {keep} dagen goed' },
    ],
    checks: [
      { see: 'De mousse zakt in zodra de chocolade erin gaat', check: 'Chocolade boven {fold_temp} °C heeft het schuim gesmolten', fix: 'Vóór het spatelen afkoelen tot {fold_temp} °C of lager' },
      { see: 'Dichte, zware mousse', check: 'Te lang spatelen heeft de lucht eruit geslagen', fix: 'Spatelen tot net gemengd' },
      { see: 'Het schuim bouwt niet op', check: 'Vet in de kom, of suiker toegevoegd vóór de zachte pieken', fix: 'Schone kom, en suiker pas zodra er zachte pieken zijn' },
      { see: 'Volume verloren vóór het spatelen', check: 'Het schuim stond op de chocolade te wachten', fix: 'Heb de chocolade afgekoeld en klaar voordat u klopt' },
      { see: 'Slap, traag schuim', check: 'Aquafaba te warm', fix: 'Gekoeld opkloppen' },
      { see: 'Ongelijk schuim uit ingevroren voorraad', check: 'Niet volledig ontdooid of niet geroerd', fix: 'Volledig ontdooien en roeren tot glad. Nooit opnieuw invriezen' },
    ],
    sections: [
      {
        id: 'use',
        title: 'Zo gebruikt u dit blad',
        html: `<p>Druk er één per batch af en leg het bij de mixer, met het <a href="{recipe_href}">volledige recept voor chocolademousse</a> bij de hand als u de werkwijze in detail nodig hebt. Schrijf gaandeweg in de laatste kolom wat u werkelijk deed: de temperatuur van de chocolade toen u ze erdoor spatelde, hoe lang het schuim nodig had tot stevige pieken, hoe lang de bekers opstijfden. Komt een mousse zwaar uit of zakt ze in, dan staat de reden meestal op dat blad.</p>
<p>Bewaar de ingevulde bladen. Wie de mousse daarna maakt, vertrekt van wat werkte, en gaat een batch fout zonder dat u ziet waarom, stuur ons dan het blad: het is voor ons de snelste manier om te helpen.</p>`,
      },
      {
        id: 'before',
        title: 'Voordat u aquafaba voor mousse opklopt',
        html: `<p>Drie dingen beslissen de meeste batches voordat de garde draait:</p>
<ul>
<li>De chocolade is gesmolten en koelt al af. Ze moet {fold_temp} °C bereiken voordat ze het schuim ontmoet, en het schuim mag er niet op wachten.</li>
<li>De aquafaba is koud, rechtstreeks uit de koelkast. Aangemaakt poeder wordt tot hetzelfde punt gekoeld.</li>
<li>De kom en de garde zijn schoongeveegd, en de {sugar} g suiker is afgewogen en binnen handbereik.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'Zo ziet u dat elke stap goed gaat',
        html: `<p>Het blad geeft u de waarde die u moet halen. Zo weet u dat u die gehaald hebt:</p>
<ul>
<li><strong>Stap 1, smelten.</strong> Glad en vloeibaar op 45 tot 50 °C, au bain-marie of in een tempereermachine. Geen korrels, geen aangebrande randen.</li>
<li><strong>Stap 2, afkoelen.</strong> Een thermometer geeft {fold_temp} °C aan. Warmer, en de chocolade smelt het schuim zodra ze erin gaat; dat is het inzakken dat u bij de eerste slag van de spatel ziet.</li>
<li><strong>Stap 4, zachte pieken.</strong> Til de garde op: het schuim houdt een vorm en de punt valt om, na ongeveer {whip} minuten bij de referentiebatch. Een vollere kom heeft meer tijd nodig.</li>
<li><strong>Stap 6, stevige pieken.</strong> Glanzend, dicht, en de piek blijft recht staan. De meringue moet stevig aanvoelen op de spatel voordat er chocolade bij komt.</li>
<li><strong>Stap 7, spatelen.</strong> Met de hand, snel en licht, en u stopt zodra de kleur egaal is. Elke extra slag van de spatel kost lucht, en een dichte mousse is het teken van te veel slagen.</li>
<li><strong>Stap 9, opstijven.</strong> Meteen gespoten of geschept, dan minstens {set_time} uur in de koelkast. Ze houdt haar vorm als u de beker schuin houdt. In gesloten verpakking blijft ze {keep} dagen goed.</li>
</ul>
<p>Bij grote batches emulgeert u eerst een deel van de chocolade met een beetje aquafaba en spatelt u dan de rest van het schuim erdoor. Zo blijven grote runs homogeen.</p>`,
      },
    ],
    faq: [
      { q: 'Wanneer gaat de suiker erin?', a: 'Pas als het schuim zachte pieken houdt, na ongeveer {whip} minuten, en dan geleidelijk tijdens het kloppen tot de pieken glanzend en stevig zijn. Suiker vóór de zachte pieken verhindert dat het schuim opbouwt.' },
      { q: 'Hoe lang stijft de mousse op en hoe lang blijft ze goed?', a: 'Minstens {set_time} uur in de koelkast om op te stijven, en hygiënisch gemaakt blijft ze {keep} dagen goed. Koel de bekers meteen na het spuiten.' },
      { q: 'Geldt het blad ook voor het poeder?', a: 'Ja. Maak {powder_dose} g poeder vooraf aan met {water_dose} ml water en koel het, en begin dan bij stap 3. De regel per eiwit: {white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba.' },
      { q: 'Kan ik dit blad meesturen met een technische vraag?', a: 'Ja. Vul de kolom van uw batch in, noteer wat u zag en beschrijf het via ons [contactformulier]({contact_href}) of het aanvraagformulier voor professionals op deze pagina.' },
    ],
  },

  mayonnaise: {
    title: 'Vegan mayonaise met aquafaba stap voor stap - VERY AQUAFABA',
    h1: 'Zo maakt u vegan mayonaise met aquafaba: het stappenblad',
    description: 'Een afdrukbaar procesblad voor het VERY AQUAFABA mayonaiserecept: de koude emulsie stap voor stap, een kolom voor uw eigen batch en de controles als ze mislukt.',
    lead: 'Een mayonaise pakt of pakt niet, en tegen de tijd dat u het ziet, zit de olie er al in. Met dit blad laat u haar elke keer pakken: het VERY AQUAFABA recept voor vegan mayonaise als checklist die u afdrukt, gaandeweg invult en bewaart.',
    powderNote: 'Poeder: maak {powder_dose} g VERY AQUAFABA poeder vóór stap 1 aan met {water_dose} ml koud water op een fijne weegschaal, of koel het tot {chill} °C.',
    steps: [
      { step: 'De aquafaba koelen', reference: '{chill} °C' },
      { step: 'Aquafaba, mosterd, zout en citroensap of azijn in een hoge, smalle beker samenbrengen', reference: '{dose} g, {mustard} g, {salt} g, {lemon} g' },
      { step: 'De staafmixer op volle snelheid starten', reference: 'Hoge afschuifkracht' },
      { step: 'De olie in een dun, gelijkmatig straaltje toevoegen', reference: '{oil} g, {oil_ratio} ten opzichte van de aquafaba' },
      { step: 'Zodra hij dikker wordt, proeven en op smaak brengen', reference: 'Ingedikt' },
      { step: 'Te stijf? Een paar gram koud water erdoor mixen', reference: 'Water, geen extra olie' },
      { step: 'Overdoen in een schone bak, meteen koelen', reference: 'Blijft tot {keep} dagen goed' },
    ],
    checks: [
      { see: 'De emulsie komt nooit op gang', check: 'Olie te snel toegevoegd, of te weinig afschuifkracht', fix: 'Dun, gelijkmatig straaltje met de mixer op volle snelheid' },
      { see: 'Trage, onstabiele emulsie', check: 'Aquafaba te warm', fix: 'Gebruiken op {chill} °C' },
      { see: 'Te dik om mee te werken', check: 'De emulsie is aangetrokken', fix: 'Een paar gram koud water erdoor mixen, geen extra olie' },
      { see: 'Onstabiel bij grote batches', check: 'Druppelgrootte niet beheerst', fix: 'Overstappen op een mixer met hoge afschuifkracht' },
      { see: 'Dun resultaat uit ingevroren voorraad', check: 'Ontdooide aquafaba kwam dunner terug', fix: 'Roeren tot glad. Nog steeds dun? Kort inkoken op laag vuur' },
      { see: 'Houdbaarheid korter dan {keep} dagen', check: 'Hygiëne of te lang onderweg naar de koelkast', fix: 'Schone bak, meteen koelen' },
    ],
    sections: [
      {
        id: 'use',
        title: 'Zo gebruikt u dit blad',
        html: `<p>Druk er één per batch af en leg het op het sauzenstation, met het <a href="{recipe_href}">volledige mayonaiserecept</a> bij de hand als u de werkwijze in detail nodig hebt. Schrijf gaandeweg in de laatste kolom wat u werkelijk deed: de temperatuur van de aquafaba, hoe snel de olie erin ging, wanneer ze indikte, wanneer ze de koelkast in ging. Schift een emulsie, dan is de reden bijna altijd een van die vier.</p>
<p>Bewaar de ingevulde bladen. Ze vertellen de volgende kok wat werkte op uw mixer met uw olie, en gaat een batch fout zonder dat u ziet waarom, stuur ons dan het blad: het is voor ons de snelste manier om te helpen.</p>`,
      },
      {
        id: 'before',
        title: 'Voordat u aquafaba tot mayonaise mixt',
        html: `<p>Drie dingen beslissen de meeste batches voordat de mixer start:</p>
<ul>
<li>De aquafaba is op {chill} °C. Warme aquafaba geeft een trage, onstabiele emulsie, en aangemaakt poeder wordt tot hetzelfde punt gekoeld.</li>
<li>De beker is hoog en smal, zodat de kop van de staafmixer onder het oppervlak blijft en de afschuifkracht hoog blijft.</li>
<li>De {oil} g olie is afgemeten en klaar om in een dun, gelijkmatig straaltje toe te voegen. Halverwege stoppen om te meten is hoe een emulsie schift.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'Zo ziet u dat elke stap goed gaat',
        html: `<p>Het blad geeft u de waarde die u moet halen. Zo weet u dat u die gehaald hebt:</p>
<ul>
<li><strong>Stap 2, de basis.</strong> Aquafaba, mosterd, zout en zuur vormen één gladde vloeistof onderin de beker voordat er olie bij komt.</li>
<li><strong>Stap 4, de olie.</strong> Een dun, gelijkmatig straaltje met de mixer op volle snelheid. Binnen de eerste lepels wordt de basis bleek en begint ze in te dikken; dat is de emulsie die pakt. Blijft ze dun en drijft de olie erop, stop dan met gieten en mix tot ze pakt voordat u meer toevoegt.</li>
<li><strong>Stap 5, ingedikt.</strong> Ze houdt een zachte piek op de spatel en het oppervlak blijft liggen waar u het laat. Proeven, dan op smaak brengen.</li>
<li><strong>Stap 6, te stijf.</strong> Wordt ze zo stijf als een pasta, dan brengen een paar gram koud water haar terug. Meer olie maakt het erger.</li>
<li><strong>Stap 7, de koelkast in.</strong> Een schone bak, deksel erop, meteen gekoeld. Daar beginnen de {keep} dagen, en alleen onder hygiënische omstandigheden.</li>
</ul>
<p>Bij grote batches stapt u over op een mixer met hoge afschuifkracht. De druppelgrootte is wat een grote emulsie stabiel houdt.</p>`,
      },
    ],
    faq: [
      { q: 'Moet de aquafaba koud zijn?', a: 'Ja, op {chill} °C. Warme aquafaba geeft een trage, onstabiele emulsie. De geopende verpakking staat in de koelkast, dus hij schenkt op de juiste temperatuur.' },
      { q: 'Hoe lang blijft de mayonaise goed?', a: 'Tot {keep} dagen in de koelkast als ze hygiënisch is gemaakt en meteen gekoeld in een schone bak.' },
      { q: 'Geldt het blad ook voor het poeder?', a: 'Ja. Maak {powder_dose} g poeder aan met {water_dose} ml koud water op een fijne weegschaal en begin bij stap 1. De regel per eiwit: {white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba.' },
      { q: 'Kan ik dit blad meesturen met een technische vraag?', a: 'Ja. Vul de kolom van uw batch in, noteer wat u zag en beschrijf het via ons [contactformulier]({contact_href}) of het aanvraagformulier voor professionals op deze pagina.' },
    ],
  },

  baking: {
    title: 'Eieren vervangen door aquafaba: bakken - VERY AQUAFABA',
    h1: 'Zo vervangt u eieren door aquafaba bij het bakken: het proefblad',
    description: 'Een afdrukbaar blad voor een eivervangingsproef met VERY AQUAFABA in uw eigen recept: de equivalenties, de aanpassingen en de controles als een baksel mislukt.',
    lead: 'De eieren in een baksel vervangen is een kleine ingreep die alles eromheen raakt: het water, de baktijd, de kruim. Met dit blad houdt u bij wat u veranderde en wat het deed: één proef per blad, gaandeweg ingevuld en bewaard voor de volgende.',
    powderNote: 'Poeder: {white_powder} g + {white_water} ml water per eiwit, {egg_powder} g + {egg_water} ml per heel ei. Voor opgeklopte baksels eerst koelen tot {chill} °C; in degen en beslagen gaat het er zo in.',
    steps: [
      { step: 'De eieren van uw recept noteren', reference: 'Hele eieren, eiwitten, dooiers' },
      { step: 'De aquafaba berekenen', reference: '{egg_liquid} g per heel ei, {white_liquid} g per eiwit, {yolk_liquid} g + {yolk_oil} g olie per dooier' },
      { step: 'Opgeklopt of ongeklopt beslissen', reference: 'Eiwitten: opgeklopt. Hele eieren: zo als het is' },
      { step: 'De aquafaba koelen als hij wordt opgeklopt', reference: '{chill} °C' },
      { step: 'Opgeklopt: voorzichtig en meteen erdoor spatelen', reference: 'Biscuit en génoise' },
      { step: 'Cakes, koekjes en muffins: mengen met de suiker vóór het vet', reference: 'Een stabielere emulsie' },
      { step: 'Hele eieren vervangen: de melk of het water iets verminderen, of de droge ingrediënten verhogen', reference: 'Aquafaba brengt meer water mee dan ei' },
      { step: 'Volledig gaar bakken', reference: 'Het extra water verlengt het bakken' },
      { step: 'Volume, kruim en vocht noteren; houdbaarheid opnieuw controleren als u herformuleerde', reference: 'De wateractiviteit verandert' },
    ],
    checks: [
      { see: 'Platte biscuit', check: 'Het schuim stond te wachten, of werd te hard erdoor gespateld', fix: 'Meteen en voorzichtig erdoor spatelen' },
      { see: 'Los, nat beslag', check: 'Hele eieren één op één vervangen, water niet verminderd', fix: 'De melk of het water iets verminderen, of droge ingrediënten toevoegen' },
      { see: 'Natte kern', check: 'Het extra water verlengt het bakken', fix: 'Volledig gaar bakken voordat u het eruit haalt' },
      { see: 'Slap schuim', check: 'Aquafaba te warm', fix: 'Opkloppen op {chill} °C' },
      { see: 'Slap schuim of slappe binding uit ingevroren voorraad', check: 'Ontdooide aquafaba kwam dunner terug', fix: 'Kort inkoken op laag vuur. Nooit opnieuw invriezen' },
      { see: 'De houdbaarheid van het product is verschoven', check: 'Ander vocht verandert de wateractiviteit', fix: 'Houdbaarheid en microbiële stabiliteit opnieuw controleren na herformulering' },
    ],
    sections: [
      {
        id: 'use',
        title: 'Zo gebruikt u dit blad',
        html: `<p>Druk er één per proef af, één recept per keer, met de <a href="{recipe_href}">bakgids</a> bij de hand voor de werkwijze achter elke stap. Schrijf de eieren van uw recept bovenaan en vul gaandeweg de laatste kolom in: hoeveel aquafaba erin ging en of hij was opgeklopt, wat u uit de vloeistoffen haalde, hoe lang het baksel in de oven stond, en hoe de kruim eruitzag toen het koud was. Die kolom is het verschil tussen een proef die u kunt herhalen en een die u opnieuw moet doen.</p>
<p>Bewaar de ingevulde bladen, vooral de mislukte. En komt een baksel verkeerd uit zonder dat u ziet waarom, stuur ons dan het blad: het is voor ons de snelste manier om te helpen.</p>`,
      },
      {
        id: 'before',
        title: 'Voordat u de eieren vervangt',
        html: `<p>Drie dingen beslissen de proef voordat de oven aangaat:</p>
<ul>
<li>Welke eieren u vervangt. Alleen eiwitten is een rechtstreekse vervanging. Hele eieren brengen extra water mee. Dooiers hebben de {yolk_oil} g olie nodig.</li>
<li>Opgeklopt of gegoten. Aquafaba wordt opgeklopt, op {chill} °C, als hij eiwitten vervangt in een biscuit of een suikerrijk beslag. Hij gaat er zo in als hij de binding en het vocht van hele eieren vervangt.</li>
<li>Alleen het ei verandert. Zelfde bloem, zelfde mengwijze, zelfde oven, anders weet u niet wat de aquafaba deed.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'Zo ziet u dat elke stap goed gaat',
        html: `<p>Het blad geeft u de waarde die u moet halen. Zo weet u dat u die gehaald hebt:</p>
<ul>
<li><strong>Stap 2, de aquafaba.</strong> {egg_liquid} g per heel ei, {white_liquid} g per eiwit, gewogen. In poeder {white_powder} g en {white_water} ml water per eiwit.</li>
<li><strong>Stap 5, opgeklopt en gespateld.</strong> Het schuim gaat erin zodra het klaar is, voorzichtig gespateld tot de strepen weg zijn en niet langer. Een biscuit die plat uit de oven komt, stond te lang of werd te hard gespateld.</li>
<li><strong>Stap 7, het water.</strong> Hele eieren vervangen, dus de melk of het water gaat iets omlaag, of de droge ingrediënten gaan omhoog. Het beslag moet eruitzien zoals met eieren, niet losser.</li>
<li><strong>Stap 8, het bakken.</strong> Het extra water betekent langer bakken. Een satéprikker komt er schoon uit; een natte kern betekent dat het te vroeg uit de oven kwam.</li>
<li><strong>Stap 9, de notities.</strong> Volume, kruim en vocht, opgeschreven terwijl het baksel voor u staat. Hebt u het vocht veranderd, dan kan de houdbaarheid van het product mee verschoven zijn, dus controleer die opnieuw.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'De kern is nat. Wat controleer ik?', a: 'De baktijd: het extra water dat aquafaba meebrengt verlengt het bakken. Bak volledig gaar voordat u het eruit haalt.' },
      { q: 'Moet ik het opkloppen?', a: 'Alleen als het eiwitten vervangt. Als het de binding en het vocht van hele eieren vervangt, in koekjes, brownies en degen, gaat het er ongeklopt in.' },
      { q: 'Geldt het blad ook voor het poeder?', a: 'Ja. {white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba. Voor opgeklopte baksels eerst koelen tot {chill} °C; in degen en beslagen gaat het er zo in.' },
      { q: 'Kan ik dit blad meesturen met een technische vraag?', a: 'Ja. Vul de kolom van uw batch in, noteer wat u zag en beschrijf het via ons [contactformulier]({contact_href}) of het aanvraagformulier voor professionals op deze pagina.' },
    ],
  },

  cocktails: {
    title: 'Een aquafaba-sour shaken stap voor stap - VERY AQUAFABA',
    h1: 'Zo shaket u een aquafaba-sour: het stappenblad',
    description: 'Een afdrukbaar serviceblad voor de VERY AQUAFABA whiskey sour: de opbouw, de dry shake en de shake met ijs, plus de controles voor als het schuim inzakt.',
    lead: 'Een sour is een drankje van dertig seconden, en het schuim wordt in de eerste vijftien beslist. Met dit blad shaket het hele team hem op dezelfde manier: de VERY AQUAFABA whiskey sour als checklist voor het station, ingevuld op de avonden dat de kraag niet is wat hij moet zijn.',
    powderNote: 'Poeder: voor één drankje {powder_dose} g VERY AQUAFABA poeder + {water_dose} ml water. Maak het vóór de service aan en koel het; koude aquafaba schuimt sneller en houdt langer.',
    steps: [
      { step: 'Opbouwen zonder ijs', reference: '{whiskey} ml whisky, {lemon_juice} ml citroensap, {syrup} ml suikersiroop, {dose} g gekoelde aquafaba' },
      { step: 'Krachtige dry shake', reference: '{dry_shake} s' },
      { step: 'IJs toevoegen en opnieuw schudden', reference: '{wet_shake} s' },
      { step: 'Fijn zeven in een gekoelde coupe', reference: 'Meteen serveren' },
      { step: 'Garneren', reference: 'Een paar druppels bitters op het schuim' },
    ],
    checks: [
      { see: 'Dunne kraag', check: 'Het ijs zat er van het begin af in', fix: 'Eerst dry shake, dan ijs' },
      { see: 'Traag, slap schuim', check: 'Aquafaba op kamertemperatuur', fix: 'Gekoeld houden tot het schudden' },
      { see: 'Geen hoogte meer halverwege de service', check: 'Aquafaba zat in de pre-batch', fix: 'Alleen de basis batchen, aquafaba per drankje toevoegen' },
      { see: 'Het schuim zakt in voordat het bij de gast is', check: 'Het drankje stond te wachten op de pass', fix: 'Op bestelling schudden en meteen serveren' },
      { see: 'Ongelijk van drankje tot drankje', check: 'Vrij schenken', fix: 'Elke keer {dose} g wegen of jiggeren' },
    ],
    sections: [
      {
        id: 'use',
        title: 'Zo gebruikt u dit blad',
        html: `<p>Druk het af en stop het in het barboek, met het <a href="{recipe_href}">volledige whiskey-sourrecept</a> bij de hand voor de opbouw. De meeste avonden blijft de kolom leeg. Op de avond dat de kraag dun is of vroeg inzakt, vult u hem in: was de aquafaba koud, kwam de dry shake eerst, was hij gewogen, stond het drankje te wachten op de pass. Eén ingevuld blad wijst meestal de oorzaak aan.</p>
<p>Bewaar de bladen bij het barboek, zodat een nieuwe bartender de sour shaket zoals de bar hem shaket. En is het schuim nog steeds niet wat het moet zijn zonder dat u ziet waarom, stuur ons dan het blad: het is voor ons de snelste manier om te helpen.</p>`,
      },
      {
        id: 'before',
        title: 'Vóór de service',
        html: `<p>Drie dingen beslissen de sour vóór de eerste bestelling:</p>
<ul>
<li>De aquafaba staat in de koelkast, en gaat daar tussen de services weer in. Aangemaakt poeder wordt op dezelfde manier gekoeld; koude aquafaba schuimt sneller en houdt langer.</li>
<li>De basis is gepre-batcht als het een drukke avond wordt: whisky, citroen en siroop. De aquafaba zit er nooit in.</li>
<li>Er staat een jigger of een weegschaal op het station. {dose} g per drankje, elk drankje.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'Zo ziet u dat elke stap goed gaat',
        html: `<p>Het blad geeft u de waarde die u moet halen. Zo weet u dat u die gehaald hebt:</p>
<ul>
<li><strong>Stap 1, de opbouw.</strong> Geen ijs in de shaker. {whiskey} ml whisky, {lemon_juice} ml citroensap, {syrup} ml suikersiroop en {dose} g aquafaba, koud.</li>
<li><strong>Stap 2, de dry shake.</strong> {dry_shake} seconden, krachtig. Als u de shaker opent, is de vloeistof bleek en dik geworden; dat is het schuim, en het ontstaat hier of helemaal niet.</li>
<li><strong>Stap 3, met ijs.</strong> Nog {wet_shake} seconden. De shaker beslaat aan de buitenkant. Deze shake koelt en verdunt; hij maakt geen schuim.</li>
<li><strong>Stap 4, het zeven.</strong> Fijn gezeefd in een gekoelde coupe komt de kraag vanzelf omhoog en blijft hij stevig liggen. Hij gaat meteen de deur uit; een drankje dat op de pass wacht, verliest onderweg zijn kraag.</li>
<li><strong>Stap 5, de garnering.</strong> Een paar druppels bitters blijven op het schuim liggen zonder te zinken. Zinken ze, dan is de kraag niet stevig genoeg, en het antwoord zit in stap 1 en 2.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Moet het drankje meteen geserveerd worden?', a: 'Ja. Schud op bestelling en serveer meteen: een drankje dat op de pass staat te wachten verliest zijn schuim voordat het bij de gast is.' },
      { q: 'Hoe lang gaat een geopend pak mee achter de bar?', a: 'Geopend vloeibaar product wordt bewaard op maximaal 4 °C en binnen {opened_days} dagen gebruikt. Schrijf de openingsdatum op het pak en schenk eruit voor de service, niet uit de speedrail.' },
      { q: 'Geldt het blad ook voor het poeder?', a: 'Ja. Maak vóór de service {powder_dose} g poeder aan met {water_dose} ml water per drankje en koel het. De regel per eiwit: {white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba.' },
      { q: 'Kan ik dit blad meesturen met een technische vraag?', a: 'Ja. Vul uw kolom in, noteer wat u zag en beschrijf het via ons [contactformulier]({contact_href}) of het aanvraagformulier voor professionals op deze pagina.' },
    ],
  },

  macarons: {
    title: 'Aquafaba-macarons stap voor stap - VERY AQUAFABA',
    h1: 'Zo maakt u aquafaba-macarons: het stappenblad',
    description: 'Een afdrukbaar procesblad voor het VERY AQUAFABA macaronrecept: kloppen, spatelen, rusten, bakken en rijpen, een kolom voor uw batch en de controles.',
    lead: 'Macaronschelpen worden beslist in de minuten tussen het stilvallen van de garde en het inschuiven van de plaat. Met dit blad houdt u die minuten onder controle: het VERY AQUAFABA macaronrecept als checklist die u afdrukt, gaandeweg invult en bewaart.',
    powderNote: 'Poeder: maak {powder_dose} g VERY AQUAFABA poeder aan met {water_dose} ml water en koel het vóór stap 2. Koude aquafaba klopt sneller op tot een stabieler schuim.',
    steps: [
      { step: 'Het amandelmeel en de poedersuiker samen zeven; de platen bekleden', reference: '{almond} g, {icing_sugar} g' },
      { step: 'De gekoelde aquafaba op hoge snelheid tot zachte pieken kloppen', reference: '{dose} g' },
      { step: 'De cream of tartar toevoegen, dan de fijne suiker geleidelijk, tot glanzende stevige pieken', reference: '{sugar} g' },
      { step: 'Het droge mengsel in drie keer erdoor spatelen', reference: 'Stoppen bij dikke, trage linten' },
      { step: 'Rondjes op bakpapier spuiten, gelijkmatig verdeeld', reference: '3 tot 4 cm' },
      { step: 'Op kamertemperatuur laten rusten tot er een droog vel ontstaat', reference: '{rest} min, afhankelijk van de luchtvochtigheid' },
      { step: 'Bakken zonder ventilator', reference: '{bake} °C, {bake_time} min' },
      { step: 'Volledig laten afkoelen op de plaat voordat u ze aanraakt', reference: 'Volledig afgekoeld' },
      { step: 'Samenstellen, vullen en koelen voor het serveren', reference: '{mature} u' },
    ],
    checks: [
      { see: 'Het schuim bereikt geen volume', check: 'Vet op de kom of de garde', fix: 'Alles ontvetten voordat u begint' },
      { see: 'De meringue zakt in vóór het spuiten', check: 'Ze stond terwijl het droge mengsel of de platen werden klaargemaakt', fix: 'Eerst zeven en de platen bekleden, als laatste kloppen' },
      { see: 'De schelpen verliezen hun lift', check: 'Voorbij het lintstadium gespateld, of te ruw gespateld', fix: 'Stoppen bij dikke, trage linten' },
      { see: 'Geen vel na het rusten', check: 'Vochtige ruimte', fix: 'Langer laten rusten en op gevoel beoordelen, niet op de klok' },
      { see: 'De schelpen zweten tijdens het bewaren', check: 'Suiker niet volledig opgelost', fix: 'De fijne suiker geleidelijk toevoegen' },
      { see: 'De schelpen worden zacht tijdens het bewaren', check: 'De schelpen trekken vocht uit de lucht', fix: 'Bewaren op een plek met lage luchtvochtigheid' },
      { see: 'De schelpen verschillen van batch tot batch', check: 'De aquafabaconcentratie is verschoven', fix: 'Bij industriële batches {concentration} g/ml aanhouden' },
    ],
    sections: [
      {
        id: 'use',
        title: 'Zo gebruikt u dit blad',
        html: `<p>Druk er één per batch af en leg het bij de mixer, met het <a href="{recipe_href}">volledige macaronrecept</a> bij de hand als u de werkwijze in detail nodig hebt. Schrijf gaandeweg in de laatste kolom wat u werkelijk deed: hoe lang de meringue nodig had, hoeveel slagen met de spatel, hoe lang de schelpen rustten en hoe de ruimte was, hoe lang de plaat bakte. Macarons mislukken om kleine redenen, en hier vindt u ze.</p>
<p>Bewaar de ingevulde bladen. De luchtvochtigheid verandert van dag tot dag, en de bladen van een vochtige week zijn meer waard dan welke regel ook. Gaat een batch fout zonder dat u ziet waarom, stuur ons dan het blad: het is voor ons de snelste manier om te helpen.</p>`,
      },
      {
        id: 'before',
        title: 'Voordat u aquafaba voor macarons opklopt',
        html: `<p>Drie dingen beslissen de meeste batches voordat de garde draait:</p>
<ul>
<li>Het amandelmeel en de poedersuiker zijn samen gezeefd en de platen zijn bekleed. Het schuim mag daar niet op wachten.</li>
<li>De aquafaba is koud, rechtstreeks uit de koelkast. Aangemaakt poeder wordt tot hetzelfde punt gekoeld.</li>
<li>De kom en de garde zijn schoongeveegd, en de {sugar} g fijne suiker is afgewogen en binnen handbereik.</li>
</ul>`,
      },
      {
        id: 'look',
        title: 'Zo ziet u dat elke stap goed gaat',
        html: `<p>Het blad geeft u de waarde die u moet halen. Zo weet u dat u die gehaald hebt:</p>
<ul>
<li><strong>Stap 3, stevige pieken.</strong> Glanzend, en de piek blijft recht staan als u de garde optilt. De suiker ging er geleidelijk in, na de zachte pieken; suiker die niet is opgelost, is wat later uit de schelpen zweet.</li>
<li><strong>Stap 4, het spatelen.</strong> In drie keer, en u stopt als het beslag in een dik, traag lint van de spatel loopt. Voorbij dat punt verliezen de schelpen hun lift.</li>
<li><strong>Stap 5, het spuiten.</strong> Rondjes van 3 tot 4 cm, gelijkmatig verdeeld, en het beslag vloeit glad uit zonder uit te lopen.</li>
<li><strong>Stap 6, het rusten.</strong> Een droog vel dat niet aan een lichte vingertop blijft plakken. Dat duurt {rest} minuten in een droge ruimte en langer in een vochtige; beoordeel op gevoel, niet op de klok.</li>
<li><strong>Stap 7, het bakken.</strong> {bake} °C zonder ventilator, {bake_time} minuten per plaat. De schelpen laten netjes los van het bakpapier zodra ze volledig zijn afgekoeld.</li>
<li><strong>Stap 9, het rijpen.</strong> Samengesteld, gevuld en {mature} uur gekoeld voor het serveren, zodat schelp en vulling één worden.</li>
</ul>
<p>Bij industriële batches houdt u de aquafabaconcentratie op {concentration} g/ml voor schelpen die van run tot run gelijk zijn.</p>`,
      },
    ],
    faq: [
      { q: 'Er is geen vel ontstaan na het rusten. Wat doe ik?', a: 'De ruimte is vochtig. Laat langer rusten dan de {rest} minuten van de referentie en beoordeel op gevoel, niet op de klok.' },
      { q: 'Waarom verschillen de schelpen van batch tot batch?', a: 'De aquafabaconcentratie is verschoven. Houd hem bij industriële batches op {concentration} g/ml.' },
      { q: 'Geldt het blad ook voor het poeder?', a: 'Ja. Maak {powder_dose} g poeder aan met {water_dose} ml water, koel het en begin bij stap 2. De regel per eiwit: {white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba.' },
      { q: 'Kan ik dit blad meesturen met een technische vraag?', a: 'Ja. Vul de kolom van uw batch in, noteer wat u zag en beschrijf het via ons [contactformulier]({contact_href}) of het aanvraagformulier voor professionals op deze pagina.' },
    ],
  },
};
