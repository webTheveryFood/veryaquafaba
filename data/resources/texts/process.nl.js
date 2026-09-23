// Procesblad, Nederlands. Zelfde structuur, zelfde {tokens} en zelfde HTML-tags als
// process.en.js (gecontroleerd door scripts/applications/check-guides.mjs). Geen gedachtestreepje.
// Stappen, oorzaken en oplossingen zijn die van de gidsen op de site.
export default {
  meringue: {
    title: 'Procesblad en controles voor aquafaba-meringue - VERY AQUAFABA',
    h1: 'Aquafaba-meringue: procesblad en controles',
    description: 'Een afdrukbaar procesblad voor het VERY AQUAFABA meringuerecept, met de referentiewaarde van elke stap, een kolom voor uw eigen batch en de controles die u doet als een batch mislukt.',
    lead: 'Een afdrukbaar blad dat het VERY AQUAFABA meringuerecept stap voor stap volgt, met de referentiewaarde van elke stap ({dose} g aquafaba op {chill} °C, {sugar} g suiker, {bake} °C gedurende {bake_time} uur) en een lege kolom voor wat u werkelijk deed. Daaronder de controles voor wanneer een batch niet goed uitkomt.',
    powderNote: 'Poeder: maak {powder_dose} g VERY AQUAFABA poeder aan met {water_dose} ml water vóór stap 1 en koel het tot {chill} °C.',
    steps: [
      { step: 'De aquafaba koelen', reference: '{chill} °C' },
      { step: 'Kom en garde ontvetten', reference: 'Geen vet, geen resten' },
      { step: 'Op hoge snelheid tot zachte pieken kloppen', reference: '{dose} g, {whip} min' },
      { step: 'De optionele stabilisator tijdens het kloppen toevoegen', reference: '2 g cream of tartar of 1 g citroenzuur' },
      { step: 'De suiker op middelhoge snelheid toevoegen, eetlepel per eetlepel', reference: '{sugar} g fijne suiker' },
      { step: 'Terug naar hoge snelheid tot glanzend en stevig', reference: 'Stevige pieken' },
      { step: 'Meteen opspuiten', reference: '3 tot 4 cm' },
      { step: 'Drogen zonder hetelucht', reference: '{bake} °C, {bake_time} u' },
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
        id: 'before',
        title: 'Voordat u begint: drie controles',
        html: `<p>De meeste meringuefouten zijn al beslist voordat de mixer aangaat. Drie controles dekken ze af.</p>
<ul>
<li>De temperatuur. De VERY AQUAFABA vloeibaar komt op {chill} °C uit de koelkast en gaat rechtstreeks de kom in. Aangemaakt poeder wordt vóór het kloppen tot dezelfde temperatuur gekoeld; warme aquafaba klopt traag op en geeft een slapper schuim.</li>
<li>Het vet. Aquafabaschuim is een zuiver eiwitschuim zonder vet in het recept, dus een vetfilm op de kom of de garde houdt het volume klein. Veeg beide schoon voordat de aquafaba erin gaat.</li>
<li>De suiker. Weeg {sugar} g fijne suiker af en houd hem bij de hand. Hij gaat er pas in als het schuim zachte pieken houdt, en eetlepel per eetlepel.</li>
</ul>`,
      },
      {
        id: 'whipping',
        title: 'Kloppen, suiker en opspuiten',
        html: `<p>Klop {dose} g op hoge snelheid. Zachte pieken komen bij de referentiebatch na ongeveer {whip} minuten: het schuim houdt een vorm waarvan de punt omvalt. Voeg nu de stabilisator toe als u die gebruikt, ga naar middelhoge snelheid en voeg de {sugar} g suiker eetlepel per eetlepel toe, waarbij elke lepel oplost voordat de volgende erin gaat. Terug naar hoge snelheid tot het schuim glanst en een stevige, rechtopstaande piek houdt.</p>
<p>Spuit vormen van 3 tot 4 cm op zodra het schuim klaar is. Aquafabaschuim houdt minder goed dan eiwitschuim, dus een kom die blijft staan verliest volume voordat hij de plaat bereikt.</p>
<p>Bij industriële batches houdt u de aquafabaconcentratie op {concentration} g/ml, zodat het schuim zich bij elke run hetzelfde gedraagt.</p>`,
      },
      {
        id: 'drying',
        title: 'Drogen en bewaren',
        html: `<p>De platen drogen op {bake} °C zonder hetelucht gedurende {bake_time} uur, tot de meringues door en door droog zijn. Laat ze volledig afkoelen op de plaat voordat u ze verplaatst.</p>
<p>Afgekoelde meringues blijven goed in een luchtdichte doos op kamertemperatuur, met een zakje droogmiddel in de doos als u dat hebt. Ze trekken vocht uit een vochtige ruimte en worden zacht, dus de doos telt evenveel als de oven.</p>
<p>Ongeopend blijven beide formaten van VERY AQUAFABA minimaal {unopened_months} maanden goed op kamertemperatuur. Eenmaal geopend blijft de vloeibare gesloten in de koelkast op maximaal {opened_temp} °C en wordt hij binnen {opened_days} dagen gebruikt; het poeder hoeft alleen droog en gesloten te blijven.</p>`,
      },
    ],
    faq: [
      { q: 'Hoe weet ik dat het schuim stevige pieken heeft?', a: 'Til de garde op: de piek blijft recht staan zonder om te vallen en het schuim glanst. De referentiebatch bereikt zachte pieken in {whip} minuten; de suiker gaat er daarna in, en de stevige piek komt met de laatste suiker.' },
      { q: 'Waarom lekken mijn meringues siroop in de doos?', a: 'De suiker ging er sneller in dan hij kon oplossen. Voeg de {sugar} g eetlepel per eetlepel toe op middelhoge snelheid en laat elke lepel verdwijnen voordat de volgende erin gaat.' },
      { q: 'Kan ik het opgeklopte schuim laten wachten terwijl de oven bezet is?', a: 'Nee. Spuit op en droog meteen na de stevige pieken. Is de oven vol, klop de volgende kom dan later in plaats van een klaar schuim te laten staan.' },
      { q: 'De meringues zijn vanbinnen plakkerig. Wat controleer ik?', a: 'De droogstap: {bake} °C zonder hetelucht gedurende de volle {bake_time} uur, tot door en door droog, daarna volledig afkoelen op de plaat. Vormen groter dan 3 tot 4 cm hebben meer tijd nodig dan de referentietijd.' },
      { q: 'Geldt het blad ook voor het poeder?', a: 'Ja. Maak {powder_dose} g poeder aan met {water_dose} ml water, koel het tot {chill} °C en begin bij stap 1. De regel per eiwit: {white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba.' },
      { q: 'Kan ik dit blad meesturen met een technische vraag?', a: 'Ja. Vul de kolom van uw batch in, noteer wat u zag en beschrijf het via ons [contactformulier]({contact_href}) of het aanvraagformulier voor professionals op deze pagina. Het ingevulde blad is voor ons de snelste manier om te helpen.' },
    ],
  },

  'chocolate-mousse': {
    title: 'Procesblad en controles voor aquafaba-chocolademousse - VERY AQUAFABA',
    h1: 'Aquafaba-chocolademousse: procesblad en controles',
    description: 'Een afdrukbaar procesblad voor het VERY AQUAFABA recept voor chocolademousse: chocoladetemperaturen, kloppen, spatelen en opstijven, met een kolom voor uw eigen batch en de controles als een mousse mislukt.',
    lead: 'Een afdrukbaar blad dat het VERY AQUAFABA recept voor chocolademousse stap voor stap volgt: de chocolade gesmolten en afgekoeld tot {fold_temp} °C, {dose} g aquafaba opgeklopt met {sugar} g suiker, het spatelen en de {set_time} uur opstijven. Een lege kolom voor wat u werkelijk deed, en daaronder de controles voor wanneer een mousse niet goed uitkomt.',
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
        id: 'before',
        title: 'Voordat u begint: eerst de chocolade',
        html: `<p>De opgeklopte aquafaba vervangt zowel de eiwitten als de room. Alle structuur komt uit het schuim, dus temperatuur en spatelen bepalen het resultaat. De chocolade wordt geregeld voordat de mixer aangaat.</p>
<ul>
<li>Smelt {chocolate} g pure couverture tot 45 tot 50 °C en laat hem afkoelen tot {fold_temp} °C. Heb hem afgekoeld en klaar voordat u klopt: het schuim mag er niet op wachten.</li>
<li>Weeg {dose} g VERY AQUAFABA vloeibaar koud af, rechtstreeks uit de koelkast in een schone, vetvrije kom. Aangemaakt poeder wordt op dezelfde manier gekoeld; warme aquafaba geeft minder volume.</li>
<li>Weeg {sugar} g fijne suiker af en houd hem bij de hand voor het kloppen.</li>
</ul>`,
      },
      {
        id: 'whipping',
        title: 'Kloppen en spatelen',
        html: `<p>Klop de aquafaba op hoge snelheid tot zachte pieken, ongeveer {whip} minuten voor de referentiebatch. Voeg nu de stabilisator toe als u die gebruikt. Voeg de {sugar} g suiker geleidelijk toe tijdens het kloppen, tot glanzende stevige pieken: de meringue moet dicht en stabiel zijn.</p>
<p>Spatel de afgekoelde chocolade met de hand erdoor, snel en licht, en stop zodra alles gemengd is. Te lang spatelen slaat de lucht eruit en geeft een dichte, zware mousse; chocolade boven {fold_temp} °C smelt het schuim en de mousse zakt in zodra hij erin gaat.</p>
<p>Grote batches? Emulgeer eerst een deel van de chocolade met een beetje aquafaba en spatel dan de rest van het schuim erdoor. Zo blijven grote runs homogeen.</p>`,
      },
      {
        id: 'setting',
        title: 'Opstijven en bewaren',
        html: `<p>Spuit of schep meteen in bekers en koel minstens {set_time} uur. Eén batch vult {yield}. Zo gemaakt blijft de mousse {keep} dagen goed in de koelkast.</p>
<p>De geopende verpakking vloeibaar staat op dezelfde koelplank als de opstijvende bekers: noteer de openingsdatum erop, want hij wordt binnen {opened_days} dagen gebruikt op maximaal {opened_temp} °C. Ongeopend blijven beide formaten minimaal {unopened_months} maanden goed op kamertemperatuur; geopend poeder hoeft alleen droog en gesloten te blijven.</p>`,
      },
    ],
    faq: [
      { q: 'Waarom zakte de mousse in toen ik de chocolade toevoegde?', a: 'De chocolade was warmer dan {fold_temp} °C en smolt het schuim. Koel hem vóór het spatelen af tot {fold_temp} °C of lager, en heb hem klaar voordat u klopt.' },
      { q: 'Waarom is mijn mousse dicht en zwaar?', a: 'Te lang spatelen heeft de lucht eruit geslagen. Spatel de chocolade met de hand erdoor, snel en licht, en stop zodra alles gemengd is.' },
      { q: 'Wanneer gaat de suiker erin?', a: 'Pas als het schuim zachte pieken houdt, na ongeveer {whip} minuten, en dan geleidelijk tijdens het kloppen tot de pieken glanzend en stevig zijn. Suiker vóór de zachte pieken verhindert dat het schuim opbouwt.' },
      { q: 'Hoe lang stijft de mousse op en hoe lang blijft ze goed?', a: 'Minstens {set_time} uur in de koelkast om op te stijven, en hygiënisch gemaakt blijft ze {keep} dagen goed. Koel de bekers meteen na het spuiten.' },
      { q: 'Geldt het blad ook voor het poeder?', a: 'Ja. Maak {powder_dose} g poeder vooraf aan met {water_dose} ml water en koel het, en begin dan bij stap 3. De regel per eiwit: {white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba.' },
      { q: 'Kan ik dit blad meesturen met een technische vraag?', a: 'Ja. Vul de kolom van uw batch in, noteer wat u zag en beschrijf het via ons [contactformulier]({contact_href}) of het aanvraagformulier voor professionals op deze pagina.' },
    ],
  },

  mayonnaise: {
    title: 'Vegan mayonaise met aquafaba: procesblad en controles - VERY AQUAFABA',
    h1: 'Vegan mayonaise met aquafaba: procesblad en controles',
    description: 'Een afdrukbaar procesblad voor het VERY AQUAFABA mayonaiserecept: de koude emulsie stap voor stap, met een kolom voor uw eigen batch en de controles die u doet als de emulsie mislukt.',
    lead: 'Een afdrukbaar blad dat het VERY AQUAFABA mayonaiserecept stap voor stap volgt: {dose} g gekoelde aquafaba, de mosterd, het zout en de citroen, daarna {oil} g olie in een dun, gelijkmatig straaltje onder hoge afschuifkracht. Een lege kolom voor wat u werkelijk deed, en daaronder de controles voor wanneer de emulsie niet pakt.',
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
        id: 'before',
        title: 'Voordat u begint: koud en schoon',
        html: `<p>Hier staat aquafaba voor de eidooier, niet voor het eiwit. Er wordt niets geklopt: het is een koude emulsie, opgebouwd met afschuifkracht. Twee dingen zijn geregeld voordat de mixer start.</p>
<ul>
<li>De temperatuur. De VERY AQUAFABA vloeibaar leeft eenmaal geopend in de koelkast, dus hij is op mixtemperatuur, {chill} °C, wanneer u hem schenkt. Aangemaakt poeder wordt met koud water gemaakt of tot hetzelfde punt gekoeld.</li>
<li>De beker. Hoog en smal, zodat de staafmixer de afschuifkracht hoog houdt. Weeg er {dose} g aquafaba, {mustard} g mosterd, {salt} g zout en {lemon} g citroensap of azijn in af.</li>
</ul>`,
      },
      {
        id: 'emulsion',
        title: 'De emulsie opbouwen',
        html: `<p>Start de staafmixer en laat {oil} g olie er in een dun, gelijkmatig straaltje in lopen. Houd de afschuifkracht hoog zodat de emulsie pakt. Komt ze nooit op gang, dan ging de olie er te snel in of was de afschuifkracht te laag. Zodra ze dikker wordt, proeven en op smaak brengen. Te stijf? Mix er een paar gram koud water door, geen extra olie.</p>
<p>Grote batches? Gebruik een mixer met hoge afschuifkracht om de druppelgrootte te beheersen en de emulsie stabiel te houden.</p>`,
      },
      {
        id: 'storage',
        title: 'Bewaren',
        html: `<p>Doe over in een schone bak en koel meteen. Hygiënisch gemaakt blijft de mayonaise tot {keep} dagen goed in de koelkast; een kortere houdbaarheid wijst op hygiëne of op te lang onderweg naar de koelkast. Eén batch is goed voor {yield}.</p>
<p>De geopende verpakking vloeibaar blijft in de koelkast op maximaal {opened_temp} °C en wordt binnen {opened_days} dagen gebruikt. Ongeopend blijven beide formaten minimaal {unopened_months} maanden goed op kamertemperatuur; geopend poeder hoeft alleen droog en gesloten te blijven.</p>`,
      },
    ],
    faq: [
      { q: 'Waarom komt de emulsie nooit op gang?', a: 'De olie ging er te snel in, of de afschuifkracht was te laag. Laat de {oil} g er in een dun, gelijkmatig straaltje in lopen met de mixer op volle snelheid, in een hoge, smalle beker.' },
      { q: 'De mayonaise is te dik om mee te werken. Wat voeg ik toe?', a: 'Een paar gram koud water, erdoor gemixt. Geen extra olie: de emulsie is aangetrokken, en olie trekt haar verder aan.' },
      { q: 'Moet de aquafaba koud zijn?', a: 'Ja, op {chill} °C. Warme aquafaba geeft een trage, onstabiele emulsie. De geopende verpakking leeft in de koelkast, dus hij schenkt op de juiste temperatuur.' },
      { q: 'Hoe lang blijft de mayonaise goed?', a: 'Tot {keep} dagen in de koelkast als ze hygiënisch is gemaakt en meteen gekoeld in een schone bak.' },
      { q: 'Geldt het blad ook voor het poeder?', a: 'Ja. Maak {powder_dose} g poeder aan met {water_dose} ml koud water op een fijne weegschaal en begin bij stap 1. De regel per eiwit: {white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba.' },
      { q: 'Kan ik dit blad meesturen met een technische vraag?', a: 'Ja. Vul de kolom van uw batch in, noteer wat u zag en beschrijf het via ons [contactformulier]({contact_href}) of het aanvraagformulier voor professionals op deze pagina.' },
    ],
  },

  baking: {
    title: 'Aquafaba bij het bakken: proefblad en controles - VERY AQUAFABA',
    h1: 'Aquafaba bij het bakken: proefblad en controles',
    description: 'Een afdrukbaar blad om een eivervangingsproef met VERY AQUAFABA in uw eigen recept uit te voeren: de equivalenties, opgeklopt of niet, de aanpassingen en de controles als een baksel mislukt.',
    lead: 'Een afdrukbaar blad om de eieren van uw eigen recept te vervangen door VERY AQUAFABA en de proef vast te leggen: {egg_liquid} g vloeibaar per heel ei, {white_liquid} g per eiwit, opgeklopt op {chill} °C als het eiwitten vervangt, zo erin gegoten als het hele eieren vervangt. Een lege kolom voor wat u werkelijk deed, en daaronder de controles voor wanneer een baksel niet goed uitkomt.',
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
        id: 'before',
        title: 'Vóór de proef: wat het ei doet in uw recept',
        html: `<p>Aquafaba doet drie dingen bij het bakken: het houdt lucht vast, het bindt en het houdt vocht vast. Het werkt dus op twee manieren. Klop het op als het eiwitten vervangt. Giet het er zo in als het de binding en het vocht van hele eieren vervangt.</p>
<ul>
<li>Biscuit en génoise: opgeklopt op {chill} °C, daarna voorzichtig en meteen erdoor gespateld. Het brengt de lucht.</li>
<li>Cakes, koekjes en muffins: gemengd met de suiker voordat het bij het vet komt, voor een stabielere emulsie.</li>
<li>Suikerrijke beslagen: eerst opgeklopt met een deel van de suiker, daarna samengevoegd met de vetten, voor volume dat het bakken doorstaat.</li>
<li>Koekjes en brownies: rechtstreeks toegevoegd, niet opgeklopt, voor binding en vocht.</li>
<li>Brioche en zoete broodjes: niet opgeklopt, met de vloeistoffen van het deeg, voor zachtheid en houdbaarheid.</li>
</ul>`,
      },
      {
        id: 'dose',
        title: 'De dosering en de aanpassing',
        html: `<p>Weeg {egg_liquid} g VERY AQUAFABA vloeibaar per heel ei of {white_liquid} g per eiwit af, rechtstreeks uit de verpakking. Voor een dooier {yolk_liquid} g aquafaba plus {yolk_oil} g olie. In poeder {white_powder} g + {white_water} ml water per eiwit en {egg_powder} g + {egg_water} ml per heel ei.</p>
<p>Vervangt u hele eieren? Aquafaba brengt meer water mee dan ei. Verminder de melk of het water een beetje, of verhoog de droge ingrediënten, en bak volledig gaar. Alleen de eiwitten vervangen, zoals bij meringues of macarons, vraagt normaal geen aanpassing.</p>`,
      },
      {
        id: 'after',
        title: 'Na het bakken: wat u vastlegt',
        html: `<p>Noteer het volume, de kruim en het vocht ten opzichte van uw gebruikelijke resultaat, en bewaar het blad bij het recept. Hebt u het vocht van het recept veranderd, controleer dan de houdbaarheid en de microbiële stabiliteit opnieuw: ander vocht verandert de wateractiviteit.</p>
<p>De geopende verpakking vloeibaar blijft in de koelkast op maximaal {opened_temp} °C en wordt binnen {opened_days} dagen gebruikt; een 1 L Tetrapak vervangt {eggs_1l} hele eieren of {whites_1l} eiwitten. Ongeopend blijven beide formaten minimaal {unopened_months} maanden goed op kamertemperatuur; geopend poeder hoeft alleen droog en gesloten te blijven.</p>`,
      },
    ],
    faq: [
      { q: 'Waarom kwam mijn biscuit plat uit de oven?', a: 'Het schuim stond te wachten, of werd te hard erdoor gespateld. Klop de aquafaba op {chill} °C en spatel hem meteen en voorzichtig erdoor.' },
      { q: 'Waarom is het beslag los en nat?', a: 'Hele eieren zijn één op één vervangen en het water is niet verminderd. Verminder de melk of het water een beetje, of voeg droge ingrediënten toe, en bak volledig gaar.' },
      { q: 'De kern is nat. Wat controleer ik?', a: 'De baktijd: het extra water dat aquafaba meebrengt verlengt het bakken. Bak volledig gaar voordat u het eruit haalt.' },
      { q: 'Moet ik het opkloppen?', a: 'Alleen als het eiwitten vervangt. Als het de binding en het vocht van hele eieren vervangt, in koekjes, brownies en degen, gaat het er ongeklopt in.' },
      { q: 'Geldt het blad ook voor het poeder?', a: 'Ja. {white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba. Voor opgeklopte baksels eerst koelen tot {chill} °C; in degen en beslagen gaat het er zo in.' },
      { q: 'Kan ik dit blad meesturen met een technische vraag?', a: 'Ja. Vul de kolom van uw batch in, noteer wat u zag en beschrijf het via ons [contactformulier]({contact_href}) of het aanvraagformulier voor professionals op deze pagina.' },
    ],
  },

  cocktails: {
    title: 'Serviceblad en schuimcontroles voor aquafaba-sours - VERY AQUAFABA',
    h1: 'Aquafaba-sours: serviceblad en schuimcontroles',
    description: 'Een afdrukbaar serviceblad voor de VERY AQUAFABA whiskey sour: de opbouw, de dry shake en de shake met ijs, met een kolom voor uw eigen drankjes en de controles die u doet als het schuim inzakt.',
    lead: 'Een afdrukbaar blad dat de VERY AQUAFABA whiskey sour stap voor stap volgt: de opbouw zonder ijs met {dose} g gekoelde aquafaba, de dry shake van {dry_shake} seconden en de shake met ijs van {wet_shake} seconden. Een lege kolom voor wat u werkelijk deed, en daaronder de controles voor wanneer het schuim inzakt.',
    powderNote: 'Poeder: voor één drankje {powder_dose} g VERY AQUAFABA poeder + {water_dose} ml water. Maak het vóór de service aan en koel het; koude aquafaba schuimt sneller en houdt langer.',
    steps: [
      { step: 'Opbouwen zonder ijs', reference: '{whiskey} ml whisky, {lemon_juice} ml citroensap, {syrup} ml suikersiroop, {dose} g gekoelde aquafaba' },
      { step: 'Krachtige dry shake', reference: '{dry_shake} s' },
      { step: 'IJs toevoegen en opnieuw schudden', reference: '{wet_shake} s' },
      { step: 'Fijn zeven in een gekoelde coupe', reference: 'Meteen serveren' },
      { step: 'Garneren', reference: 'Een paar druppels bitter op het schuim' },
    ],
    checks: [
      { see: 'Dun schuim', check: 'Het ijs zat er van het begin af in', fix: 'Eerst dry shake, dan ijs' },
      { see: 'Traag, slap schuim', check: 'Aquafaba op kamertemperatuur', fix: 'Gekoeld houden tot het schudden' },
      { see: 'Geen hoogte meer halverwege de service', check: 'Aquafaba zat in de voorbatch', fix: 'Alleen de basis batchen, aquafaba per drankje toevoegen' },
      { see: 'Het schuim zakt in voordat het bij de gast is', check: 'Het drankje stond te wachten op de pass', fix: 'Op bestelling schudden en meteen serveren' },
      { see: 'Ongelijk van drankje tot drankje', check: 'Vrij schenken', fix: 'Elke keer {dose} g wegen of jiggeren' },
    ],
    sections: [
      {
        id: 'before',
        title: 'Vóór de service: het station',
        html: `<p>Er verandert niets aan uw recept behalve één ingrediënt: aquafaba vervangt het eiwit. Twee dingen zijn geregeld vóór de eerste bestelling.</p>
<ul>
<li>Koud. De VERY AQUAFABA vloeibaar gaat van de koelkast de shaker in; tussen de services wordt hij gesloten en terug in de koelkast gezet. Aangemaakt poeder wordt op dezelfde manier gekoeld: koude aquafaba schuimt sneller en houdt langer.</li>
<li>De voorbatch. Drukke service? Maak de whisky, de citroen en de siroop vooraf als batch. Voeg de aquafaba toe bij het schudden, nooit in de batch.</li>
</ul>`,
      },
      {
        id: 'shake',
        title: 'De twee shakes',
        html: `<p>Bouw op zonder ijs: {whiskey} ml whisky, {lemon_juice} ml vers citroensap, {syrup} ml suikersiroop en {dose} g gekoelde aquafaba. Krachtige dry shake gedurende {dry_shake} seconden: hier ontstaat het schuim. Voeg ijs toe en schud nog {wet_shake} seconden om te koelen en te verdunnen. Zeef fijn in een gekoelde coupe; het schuim is stevig genoeg om een paar druppels bitter te dragen.</p>
<p>Weeg of jigger elke keer {dose} g. Vrij schenken maakt de drankjes ongelijk.</p>`,
      },
      {
        id: 'storage',
        title: 'Tussen de services',
        html: `<p>De geopende verpakking vloeibaar blijft gesloten in de koelkast op maximaal {opened_temp} °C en wordt binnen {opened_days} dagen gebruikt; een 1 L Tetrapak is goed voor {batches_1l} sours. Geopend poeder blijft goed zolang het zakje droog en gesloten blijft. Ongeopend blijven beide formaten minimaal {unopened_months} maanden goed op kamertemperatuur.</p>`,
      },
    ],
    faq: [
      { q: 'Waarom is het schuim dun?', a: 'Het ijs zat er van het begin af in. Eerst een dry shake van {dry_shake} seconden, dan ijs toevoegen en nog {wet_shake} seconden schudden.' },
      { q: 'Waarom wordt het schuim halverwege de service slap?', a: 'De aquafaba zat in de voorbatch. Batch alleen de whisky, de citroen en de siroop, en voeg {dose} g aquafaba per drankje toe bij het schudden.' },
      { q: 'Moet het drankje meteen geserveerd worden?', a: 'Ja. Schud op bestelling en serveer meteen: een drankje dat op de pass staat te wachten verliest zijn schuim voordat het bij de gast is.' },
      { q: 'Waarom zijn de drankjes ongelijk?', a: 'Vrij schenken. Weeg of jigger elke keer {dose} g aquafaba.' },
      { q: 'Geldt het blad ook voor het poeder?', a: 'Ja. Maak vóór de service {powder_dose} g poeder aan met {water_dose} ml water per drankje en koel het. De regel per eiwit: {white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba.' },
      { q: 'Kan ik dit blad meesturen met een technische vraag?', a: 'Ja. Vul uw kolom in, noteer wat u zag en beschrijf het via ons [contactformulier]({contact_href}) of het aanvraagformulier voor professionals op deze pagina.' },
    ],
  },

  macarons: {
    title: 'Procesblad en controles voor aquafaba-macarons - VERY AQUAFABA',
    h1: 'Aquafaba-macarons: procesblad en controles',
    description: 'Een afdrukbaar procesblad voor het VERY AQUAFABA macaronrecept: kloppen, spatelen tot het lint, rusten, bakken en rijpen, met een kolom voor uw eigen batch en de controles als de schelpen mislukken.',
    lead: 'Een afdrukbaar blad dat het VERY AQUAFABA macaronrecept stap voor stap volgt: {dose} g aquafaba opgeklopt met {sugar} g fijne suiker, het spatelen met {almond} g amandelmeel en {icing_sugar} g poedersuiker, het rusten, het bakken op {bake} °C gedurende {bake_time} minuten en de {mature} uur rijpen. Een lege kolom voor wat u werkelijk deed, en daaronder de controles voor wanneer de schelpen niet goed uitkomen.',
    powderNote: 'Poeder: maak {powder_dose} g VERY AQUAFABA poeder aan met {water_dose} ml water en koel het vóór stap 2. Koude aquafaba klopt sneller op tot een stabieler schuim.',
    steps: [
      { step: 'Het amandelmeel en de poedersuiker samen zeven; de platen bekleden', reference: '{almond} g, {icing_sugar} g' },
      { step: 'De gekoelde aquafaba op hoge snelheid tot zachte pieken kloppen', reference: '{dose} g' },
      { step: 'De cream of tartar toevoegen, dan de fijne suiker geleidelijk, tot glanzende stevige pieken', reference: '{sugar} g' },
      { step: 'Het droge mengsel in drie keer erdoor spatelen', reference: 'Stoppen bij dikke, trage linten' },
      { step: 'Rondjes op bakpapier spuiten, gelijkmatig verdeeld', reference: '3 tot 4 cm' },
      { step: 'Op kamertemperatuur laten rusten tot er een droog vel ontstaat', reference: '{rest} min, afhankelijk van de luchtvochtigheid' },
      { step: 'Bakken zonder hetelucht', reference: '{bake} °C, {bake_time} min' },
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
        id: 'before',
        title: 'Voordat u klopt: eerst al het andere',
        html: `<p>Aquafaba vervangt alleen de eiwitten, dus het amandelmeel, de poedersuiker en de fijne suiker van uw recept blijven zoals ze zijn. Het schuim moet twee stappen overleven, het spatelen en het rusten, dus de timing telt meer dan het kloppen zelf.</p>
<ul>
<li>Zeef {almond} g amandelmeel en {icing_sugar} g poedersuiker samen en zet apart. Bekleed nu de platen. Een meringue die staat terwijl het droge mengsel of de platen worden klaargemaakt, zakt in vóór het spuiten.</li>
<li>Weeg {dose} g VERY AQUAFABA vloeibaar koud af, uit de geopende verpakking in de koelkast, in een schone, vetvrije kom. Aangemaakt poeder wordt op dezelfde manier gekoeld.</li>
<li>Weeg {sugar} g fijne suiker en de cream of tartar af.</li>
</ul>`,
      },
      {
        id: 'whipping',
        title: 'Kloppen, spatelen, spuiten en rusten',
        html: `<p>Klop de aquafaba op hoge snelheid tot zachte pieken. Voeg de cream of tartar toe, dan de {sugar} g fijne suiker geleidelijk, tot glanzende stevige pieken. Spatel het droge mengsel er in drie keer door en stop wanneer het beslag in dikke, trage linten van de spatel loopt: verder dan dat, of te ruw gespateld, verliezen de schelpen hun lift.</p>
<p>Spuit rondjes van 3 tot 4 cm op bakpapier, gelijkmatig verdeeld. Laat op kamertemperatuur rusten tot er een droog vel ontstaat: {rest} minuten, afhankelijk van de luchtvochtigheid. In een vochtige ruimte laat u langer rusten en beoordeelt u op gevoel, niet op de klok.</p>
<p>Industriële batches? Houd de aquafabaconcentratie op {concentration} g/ml voor schelpen die van run tot run gelijk zijn.</p>`,
      },
      {
        id: 'baking',
        title: 'Bakken, rijpen en bewaren',
        html: `<p>Bak op {bake} °C, zonder hetelucht, gedurende {bake_time} minuten. Laat volledig afkoelen op de plaat voordat u ze aanraakt. Stel samen, vul en koel {mature} uur voor het serveren, zodat de textuur zich ontwikkelt. Eén batch is goed voor {yield}.</p>
<p>Schelpen trekken vocht uit de lucht en worden zacht, dus bewaar ze op een plek met lage luchtvochtigheid. De geopende verpakking vloeibaar deelt de koelkast met de rijpende macarons: noteer de openingsdatum erop, want hij wordt binnen {opened_days} dagen gebruikt op maximaal {opened_temp} °C. Ongeopend blijven beide formaten minimaal {unopened_months} maanden goed op kamertemperatuur.</p>`,
      },
    ],
    faq: [
      { q: 'Waarom zakte de meringue in vóór het spuiten?', a: 'Ze stond terwijl het droge mengsel of de platen werden klaargemaakt. Zeef het amandelmeel en de poedersuiker en bekleed eerst de platen, en klop als laatste.' },
      { q: 'Waarom verloren de schelpen hun lift?', a: 'Het beslag werd voorbij het lintstadium gespateld, of te ruw. Spatel in drie keer en stop wanneer het in dikke, trage linten van de spatel loopt.' },
      { q: 'Er is geen vel ontstaan na het rusten. Wat doe ik?', a: 'De ruimte is vochtig. Laat langer rusten dan de {rest} minuten van de referentie en beoordeel op gevoel, niet op de klok.' },
      { q: 'Waarom verschillen de schelpen van batch tot batch?', a: 'De aquafabaconcentratie is verschoven. Houd hem bij industriële batches op {concentration} g/ml.' },
      { q: 'Geldt het blad ook voor het poeder?', a: 'Ja. Maak {powder_dose} g poeder aan met {water_dose} ml water, koel het en begin bij stap 2. De regel per eiwit: {white_powder} g poeder + {white_water} ml water = {white_total} g aquafaba, gelijk aan dezelfde massa vloeibare aquafaba.' },
      { q: 'Kan ik dit blad meesturen met een technische vraag?', a: 'Ja. Vul de kolom van uw batch in, noteer wat u zag en beschrijf het via ons [contactformulier]({contact_href}) of het aanvraagformulier voor professionals op deze pagina.' },
    ],
  },
};
