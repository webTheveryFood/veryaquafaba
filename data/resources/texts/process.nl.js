// Procesblad, Nederlands. Zelfde structuur, zelfde {tokens} en zelfde HTML-tags als
// process.en.js (gecontroleerd door scripts/applications/check-guides.mjs). Geen gedachtestreepje.
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
};
