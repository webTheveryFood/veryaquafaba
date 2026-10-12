// Cocktail expansion, German (October 2026): the guides, quantity calculators and process
// sheets of the six cocktails of the VERY AQUAFABA mixology material, and the four question
// pages. Written natively from the approved English (cocktails.en.js + cocktails-2.en.js),
// same structure, same {tokens}. Formal address (Sie), das Aquafaba, no dashes, only the
// brand VERY AQUAFABA. German keeps a space before units ("200 g Beutel", "1 L Tetrapak").
import { fixTable, table } from './cocktail-tables.js';
const FIX = ['Was Sie sehen', 'Ursache', 'Lösung'];

export default {
  labels: {
    dropsUnit: "Tropfen",
    calcTitle: "Aquafaba-Rechner für {name}",
    cocktailsGuide: 'Aquafaba für Cocktails: flüssig oder Pulver?',
    barsPage: 'Aquafaba für Bars und Cocktails',
    calculatorLink: 'Mengenrechner für diesen Cocktail',
    processLink: 'Arbeitsblatt für diesen Cocktail',
    perDrink: 'Pro Drink',
    equivNote: 'Bei {dose} ml pro Drink brauchen Sie zwei Drittel eines Eiweißes, deshalb reicht 1 L für {drinks} Drinks statt {whites}.',
    drinks: '= {n} Drinks',
    drinksUnit: 'Drinks',
    ingredients: {
      pisco: 'Pisco', lime_juice: 'Limettensaft', cane_syrup: 'Rohrzuckersirup',
      amaretto: 'Amaretto', lemon_juice: 'Zitronensaft', vanilla_syrup: 'Vanillesirup', gin: 'Gin',
      triple_sec: 'Triple Sec', vodka: 'Wodka', bergamot_liqueur: 'Bergamottelikör', raspberry_syrup: 'Himbeersirup',
      orange_blossom: 'Orangenblütenwasser', rum: 'Rum', vanilla_tonka_syrup: 'Vanille-Tonka-Sirup',
    },
    responsible: 'Bitte verantwortungsvoll genießen',
    moreCocktails: 'Weitere Cocktails mit Aquafaba',
    cardAlt: '{name} mit einer Schaumkrone aus Aquafaba',
  },

  guides: {
    'pisco-sour': {
      title: 'Pisco Sour mit Aquafaba: Rezept ohne Ei | VERY AQUAFABA',
      h1: 'Pisco Sour mit Aquafaba: so gelingt er',
      crumb: 'Pisco Sour',
      card: 'Pisco, Limette und eine getrocknete Zitronenscheibe',
      eyebrow: 'Cocktail-Leitfaden',
      description: 'Pisco Sour mit {dose} ml VERY AQUAFABA statt Eiweiß: Rezept, Reihenfolge der Shakes, Tipps für den Service und Gebindegrößen für Ihre Bar.',
      lead: `Manche Drinks bleiben wegen ihres Geschmacks in Erinnerung. Ein Pisco Sour bleibt wegen des Moments, in dem er auf dem Tisch steht: die helle, lockere Schaumkrone über dem Glas, noch vor dem ersten Schluck. Ersetzen Sie das Eiweiß durch {dose} ml VERY AQUAFABA, und der Drink behält genau diesen Auftritt, dazu die frische Limette und den weichen, seidigen Körper darunter. Am Rezept ändert sich nichts. Es kommt auf den Shake an, deshalb geht es hier um den Aufbau, die Reihenfolge der beiden Shakes und die Kontrollen, die den Schaum in Form halten.`,
      sections: [
        { id: 'tin', title: 'Was in den Shaker kommt', html: `<ul>
<li>{pisco} ml Pisco</li>
<li>{lime_juice} ml frischer Limettensaft</li>
<li>{cane_syrup} ml Rohrzuckersirup</li>
<li>{dose} ml VERY AQUAFABA, gekühlt</li>
<li>Ein Tumbler (Old Fashioned) und eine getrocknete Zitronenscheibe als Garnitur</li>
</ul>
<p>Sie müssen keinen neuen Cocktail lernen. Nur die schäumende Zutat ändert sich: Nehmen Sie {dose} ml VERY AQUAFABA und lassen Sie den Rest des Rezepts, wie er ist.</p>` },
        { id: 'shake', title: 'So shaken Sie ihn', html: `<p>Wenn Sie einen Sour kennen, kommt Ihnen das bekannt vor. Wichtig ist nur, die beiden Shakes in der richtigen Reihenfolge zu machen.</p>
<ol>
<li>Alles in den Shaker geben: Pisco, Limette, Sirup und das Aquafaba direkt aus dem Kühlschrank.</li>
<li>Kräftig ohne Eis shaken. Beim Dry Shake entsteht der Schaum. Wenn Sie den Shaker öffnen, sollte die Flüssigkeit hell und dick aussehen, fast wie ein Milchshake.</li>
<li>{ice} Eiswürfel zugeben und noch einmal shaken, bis der Shaker außen beschlägt. Dieser Shake kühlt und verdünnt den Drink.</li>
<li>In den Tumbler abseihen. Die Krone steigt beim Setzen nach oben, warten Sie also ein paar Sekunden mit der Garnitur.</li>
<li>Die getrocknete Zitronenscheibe auf den Schaum legen.</li>
</ol>` },
        { id: 'tips', title: "Tipps für einen Pisco Sour mit Aquafaba", html: `<p>Der Dry Shake hat nur eine Aufgabe: den Schaum aufbauen, bevor der Drink gekühlt und verdünnt wird. Steht die Krone, bringt der zweite Shake mit Eis den Drink auf Trinktemperatur. Drehen Sie die Reihenfolge um, wird die Krone dünner.</p>
<p>Das meiste Abmessen nehmen Sie aus dem Service, wenn Sie Pisco, Limette und Sirup vor der Öffnung batchen. Das Aquafaba bleibt getrennt im Kühlschrank, und pro Bestellung kommen {dose} ml in den Shaker. Der Schaum entsteht weiter Drink für Drink, aber der Aufbau geht viel schneller, und das <a href="{process_href}">Arbeitsblatt für den Pisco Sour</a> hält jeden Schritt für die Station auf einem Blatt fest.</p>` },
        { id: 'fix', title: "Dünne Krone beim Pisco Sour beheben", html: fixTable([
          ['Dünne Krone oder gar keine', 'Das Eis kam vor dem Dry Shake in den Shaker', 'Erst Dry Shake, dann Eis'],
          ['Träger, schlaffer Schaum', 'Das Aquafaba hatte Raumtemperatur', 'Die Packung bis zum Shaken im Kühlschrank lassen'],
          ['Der Schaum fällt, bevor der Drink beim Gast ist', 'Der Drink stand zu lange am Pass', 'Auf Bestellung shaken und sofort servieren'],
          ['Keine Höhe mehr ab Mitte des Service', 'Das Aquafaba war im Pre-Batch', 'Nur Pisco, Limette und Sirup batchen, das Aquafaba pro Drink zugeben'],
        ], FIX) },
        { id: 'format', title: 'Wie viele Pisco Sours verkaufen Sie?', html: `<p>Ein 1 L Tetrapak ergibt {drinks_1l} Pisco Sours. Geöffnet bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen. Passen {drinks_1l} Drinks gut in diesen Rhythmus, ist flüssig die einfache Wahl: Kühlschrank, abmessen, Shaker.</p>
<p>Wird Pisco Sour nur ab und zu bestellt, sind Sie mit Pulver flexibler. Nehmen Sie {powder} g mit {water} ml Wasser pro Drink und halten Sie den geöffneten Beutel zwischen den Services trocken und verschlossen. Der <a href="{calculator_href}">Mengenrechner für den Pisco Sour</a> rechnet das ganze Rezept hoch, sobald Sie wissen, wie viele Drinks Sie planen.</p>` },
      ],
      faq: [
        { q: 'Verändert Aquafaba den Geschmack eines Pisco Sour?', a: 'Nein. In der Packung hat VERY AQUAFABA eine leichte Röstnote vom Kochen der Kichererbsen. Im geshakten Drink verschwindet sie: Der Schaum bringt keinen eigenen Geschmack mit, und das Aroma bleibt bei Pisco und Limette.' },
        { q: 'Kann ich einen Pisco Sour vegan machen?', a: 'Den Schaum ja: VERY AQUAFABA ist pflanzlich und eifrei, die Krone bringt also kein Ei in den Drink. Pisco, Limette und Sirup haben ihre eigene Kennzeichnung.' },
        { q: 'Wie viel Aquafaba brauche ich pro Pisco Sour?', a: '{dose} ml flüssig oder {powder} g Pulver, angerührt mit {water} ml Wasser.' },
        { q: 'Ist Aquafaba im Cocktail sicherer als rohes Eiweiß?', a: "Ein Sour wird nie erhitzt, das Eiweiß kommt also roh ins Glas. VERY AQUAFABA ist pflanzlich und birgt geringere gesundheitliche Risiken als rohes Eiweiß, etwa durch Listerien oder Salmonellen." },
        { q: 'Muss ich mein Pisco-Sour-Rezept ändern?', a: 'Nein. Pisco, Limette und Rohrzuckersirup bleiben, wie sie sind, und {dose} ml Aquafaba ersetzen das Eiweiß.' },
        { q: 'Kann ich Pisco Sours mit Aquafaba vorbatchen?', a: 'Ja, die Basis. Pisco, Limette und Sirup kommen vor dem Service in eine Flasche, das Aquafaba erst beim Shaken in jeden Shaker.' },
        { q: 'Wie lange hält eine geöffnete Packung Aquafaba hinter der Bar?', a: 'Geöffnetes flüssiges Aquafaba bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen. Ein geöffneter Beutel Pulver hält trocken und verschlossen bis zum Mindesthaltbarkeitsdatum auf dem Beutel, und ungeöffnet halten beide mindestens {unopened_months} Monate bei Raumtemperatur.' },
        { q: 'Wo kann ich Aquafaba für Pisco Sours kaufen?', a: 'Das hängt vom Standort Ihrer Bar ab: Sie können [Aquafaba für Cocktails kaufen]({where_to_buy_page_href}), auf Amazon in den USA und in Deutschland, bei InstantChef in Frankreich und überall sonst über das Anfrageformular.' },
      ],
    },

    'amaretto-sour': {
      title: 'Amaretto Sour mit Aquafaba: Rezept ohne Ei | VERY AQUAFABA',
      h1: 'Amaretto Sour mit Aquafaba: so gelingt er',
      crumb: 'Amaretto Sour',
      card: 'Amaretto, Zitrone und Vanillesirup',
      eyebrow: 'Cocktail-Leitfaden',
      description: 'Amaretto Sour mit VERY AQUAFABA statt Eiweiß: {amaretto} ml Amaretto, {dose} ml Aquafaba, zwei Shakes und eine weiße Schaumkrone ganz ohne Ei.',
      lead: `Der Amaretto Sour kommt immer etwas großzügiger daher als die anderen: mehr Likör im Shaker, mehr Rundung im Glas und eine weiße Schaumkrone, die den Drink davor bewahrt, zu süß zu wirken. Mit {dose} ml VERY AQUAFABA anstelle des Eiweißes bleibt diese Balance erhalten. Sie haben weiter die Basis mit Mandelnote, die Zitrone, die dagegenhält, und die weiche Krone, die den Drink fertig aussehen lässt. Unten finden Sie das ganze Rezept, die Methode mit zwei Shakes und worauf Sie achten, wenn der Schaum schwächer ausfällt, als der Drink es verdient.`,
      sections: [
        { id: 'tin', title: 'Was in den Shaker kommt', html: `<ul>
<li>{amaretto} ml Amaretto</li>
<li>{lemon_juice} ml Zitronensaft</li>
<li>{vanilla_syrup} ml Vanillesirup</li>
<li>{dose} ml VERY AQUAFABA, gekühlt</li>
<li>Ein Tumbler (Old Fashioned) und eine getrocknete Zitronenscheibe als Garnitur</li>
</ul>
<p>Die {amaretto} ml Amaretto unterscheiden dieses Rezept von den anderen Sours hier.</p>` },
        { id: 'shake', title: 'So shaken Sie ihn', html: `<ol>
<li>Amaretto, Zitrone, Vanillesirup und das gekühlte Aquafaba in den Shaker geben.</li>
<li>Kräftig ohne Eis shaken: Hier entsteht die Krone.</li>
<li>{ice} Eiswürfel zugeben und noch einmal shaken, um den Drink zu kühlen und zu verdünnen.</li>
<li>In den Tumbler abseihen.</li>
<li>Die getrocknete Zitronenscheibe auf den Schaum legen und den Drink sofort servieren.</li>
</ol>
<p>Nur zwei Punkte müssen immer gleich bleiben: das Aquafaba gekühlt verwenden und das Eis erst beim zweiten Shake zugeben.</p>` },
        { id: 'tips', title: "Tipps für einen ausgewogenen Amaretto Sour mit Aquafaba", html: `<p>Der Amaretto ist die Zahl, die das Tempo dieses Drinks bestimmt. Bei {amaretto} ml pro Bestellung geht in einem vollen Service der Likör viel schneller zur Neige als das Aquafaba. Der Vanillesirup bleibt bei {vanilla_syrup} ml, und VERY AQUAFABA bleibt bei denselben {dose} ml wie in den anderen Sour-Rezepten.</p>
<p>Batchen Sie Amaretto, Zitrone und Vanillesirup vor der Öffnung. Jede Bestellung braucht dann die Basis aus der Flasche plus {dose} ml gekühltes Aquafaba vor dem Dry Shake. Lassen Sie das Aquafaba aus der Flasche heraus, damit der Schaum in jedem Shaker frisch entsteht, und legen Sie das <a href="{process_href}">Arbeitsblatt für den Amaretto Sour</a> für die Kontrollen ins Barbuch.</p>` },
        { id: 'flat', title: "Flache Krone beim Amaretto Sour beheben", html: fixTable([
          ['Dünne Krone schon beim ersten Drink', 'Das Eis kam vor dem Dry Shake in den Shaker', 'Erst Dry Shake, dann Eis'],
          ['Der Schaum steigt langsam und bleibt schlaff', 'Das Aquafaba stand bei Raumtemperatur', 'Die Packung bis zum Shaken im Kühlschrank lassen'],
          ['An der Bar schön, am Tisch flach', 'Der Drink stand zu lange am Pass', 'Auf Bestellung shaken und sofort servieren'],
        ], FIX) },
        { id: 'format', title: 'Wie oft servieren Sie Amaretto Sours?', html: `<p>Stellen Sie sich eine Frage: Verkaufen Sie {drinks_1l} Amaretto Sours innerhalb von {opened_days} Tagen? So viele ergibt ein 1 L Tetrapak bei {dose} ml pro Drink, und die geöffnete Packung lagern Sie in dieser Zeit bei {opened_temp} °C.</p>
<p>Läuft der Drink langsamer, lässt sich Pulver zwischen den Services leichter lagern. Ein 200 g Beutel ergibt {drinks_200g} Drinks bei {powder} g pro Drink, angerührt mit {water} ml Wasser. Mit dem <a href="{calculator_href}">Mengenrechner für den Amaretto Sour</a> wird aus der erwarteten Zahl der Drinks die komplette Einkaufsliste für den Abend.</p>` },
      ],
      faq: [
        { q: 'Was nehme ich im Amaretto Sour statt Eiweiß?', a: '{dose} ml VERY AQUAFABA flüssig oder {powder} g Pulver, angerührt mit {water} ml Wasser.' },
        { q: 'Schmeckt Aquafaba im Amaretto Sour nach Kichererbsen?', a: 'In der Packung hat VERY AQUAFABA eine leichte Röstnote vom Kochen der Kichererbsen. Im geshakten Drink verschwindet sie: Der Schaum bringt keinen eigenen Geschmack mit, und der Drink schmeckt nach Amaretto, Zitrone und Vanille.' },
        { q: 'In welchem Glas serviere ich einen Amaretto Sour?', a: 'In einem Tumbler (Old Fashioned), mit einer getrockneten Zitronenscheibe als Garnitur auf dem Schaum.' },
        { q: 'Kann ich Amaretto Sours vor dem Service batchen?', a: 'Ja, Amaretto, Zitrone und Vanillesirup. Das Aquafaba kommt beim Shaken in jeden Shaker, nie in den Batch.' },
        { q: 'Wie viele Amaretto Sours ergibt eine 1 L Packung?', a: '{drinks_1l} Drinks zu je {dose} ml. Geöffnet bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen.' },
        { q: 'Ist ein Amaretto Sour mit Aquafaba vegan?', a: 'Der Schaum schon: VERY AQUAFABA ist pflanzlich und eifrei, die Krone bringt also kein Ei in den Drink.' },
      ],
    },

    'gin-fizz': {
      title: 'Gin Fizz mit Aquafaba: Rezept ohne Ei | VERY AQUAFABA',
      h1: 'Gin Fizz mit Aquafaba: so gelingt er',
      crumb: 'Gin Fizz',
      card: 'Gin und Zitrone, mit Tonic aufgefüllt',
      eyebrow: 'Cocktail-Leitfaden',
      description: 'Gin Fizz mit VERY AQUAFABA statt Eiweiß: mit {dose} ml Aquafaba geshakt, in ein Highball abgeseiht und mit Tonic Water aufgefüllt.',
      lead: `Ein Gin Fizz hat etwas von einem kleinen Auftritt. Er beginnt im Shaker wie ein Sour und wächst dann im Glas in die Höhe, mit Tonic aufgefüllt und einer weißen Schaumkrone obenauf. Das klappt nur, wenn die Reihenfolge stimmt. Nehmen Sie {dose} ml VERY AQUAFABA anstelle des Eiweißes, bauen Sie zuerst den Schaum auf und machen Sie den Drink erst nach dem Abseihen zum Highball. Hier finden Sie das ganze Rezept, den Shake, das Auffüllen und die kleinen Details, die den Drink lebendig halten statt flach.`,
      sections: [
        { id: 'tin', title: 'Was in den Shaker kommt, und was ins Glas', html: `<ul>
<li>{gin} ml Gin</li>
<li>{lemon_juice} ml Zitronensaft</li>
<li>{cane_syrup} ml Rohrzuckersirup</li>
<li>{dose} ml VERY AQUAFABA, gekühlt</li>
<li>Tonic Water zum Auffüllen, in einem Highball</li>
<li>Eine getrocknete Zitronenscheibe als Garnitur</li>
</ul>
<p>Stellen Sie das Tonic neben das Glas, nicht neben den Shaker. Alles andere wird zuerst geshakt.</p>` },
        { id: 'build', title: 'So wird er gebaut', html: `<ol>
<li>Gin, Zitrone, Rohrzuckersirup und das Aquafaba in den Shaker geben.</li>
<li>Kräftig ohne Eis shaken, um den Schaum aufzubauen.</li>
<li>{ice} Eiswürfel zugeben und noch einmal shaken, um den Drink zu kühlen.</li>
<li>Ins Highball abseihen.</li>
<li>Mit Tonic Water auffüllen.</li>
<li>Die getrocknete Zitronenscheibe auf die Krone legen.</li>
</ol>` },
        { id: 'tips', title: "Tipps für einen Gin Fizz mit Aquafaba", html: `<p>Die Krone entsteht, bevor das Tonic in den Drink kommt. Gin, Zitrone, Sirup und Aquafaba erst ohne Eis shaken, dann mit Eis, dann abseihen. Das Tonic kommt danach ins Highball, der lange Teil des Drinks entsteht also im Glas und nicht im Shaker.</p>
<p>Batchen Sie Gin, Zitrone und Sirup, dann ist jede Bestellung nur noch eine Handvoll klarer Handgriffe. Basis eingießen, {dose} ml gekühltes Aquafaba dazu, zweimal shaken, abseihen, mit Tonic auffüllen. Bleiben Aquafaba und Tonic aus dem Batch, schützen Sie die zwei Dinge, die dieser Drink am Ende braucht: seine Krone und seine Kohlensäure. Das <a href="{process_href}">Arbeitsblatt für den Gin Fizz</a> hält diese Reihenfolge auf einem Blatt fest.</p>` },
        { id: 'thin', title: "Dünne Krone beim Gin Fizz beheben", html: fixTable([
          ['Dünne Krone, schon bevor das Tonic kommt', 'Das Eis kam vor dem Dry Shake in den Shaker', 'Erst Dry Shake, dann Eis'],
          ['Schlaffer Schaum, der langsam steigt', 'Das Aquafaba hatte Raumtemperatur', 'Bis zum Shaken im Kühlschrank lassen'],
          ['Die Krone ist weg, wenn der Drink am Tisch ankommt', 'Der Drink stand zu lange am Pass', 'Shaken, auffüllen und sofort servieren'],
        ], FIX) },
        { id: 'format', title: 'Wie oft geht ein Gin Fizz bei Ihnen über den Tresen?', html: `<p>Ein 1 L Tetrapak ergibt {drinks_1l} Gin Fizz, eine 10 L Bag-in-Box {drinks_10l}. Flüssiges Aquafaba geöffnet bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen. Das richtige Gebinde ist also das, das Ihr Service in dieser Zeit wirklich leert.</p>
<p>Kommen die Bestellungen weniger regelmäßig, nehmen Sie {powder} g Pulver mit {water} ml Wasser pro Drink. Rühren Sie vor dem Service an, was Sie brauchen, stellen Sie es kalt und halten Sie den Rest des Beutels trocken und verschlossen. Der <a href="{calculator_href}">Mengenrechner für den Gin Fizz</a> rechnet den Abend für Sie aus.</p>` },
      ],
      faq: [
        { q: 'Kann ich einen Gin Fizz ohne Eiweiß machen?', a: 'Ja. Shaken Sie {dose} ml VERY AQUAFABA anstelle des Eiweißes mit Gin, Zitrone und Sirup und füllen Sie dann mit Tonic Water auf.' },
        { q: 'Wann kommt das Tonic Water in den Gin Fizz?', a: 'Nachdem der Drink ins Highball abgeseiht ist. Das Tonic wird obendrauf gegossen, nie mitgeshakt.' },
        { q: 'Wie viel Aquafaba kommt in einen Gin Fizz?', a: '{dose} ml flüssig oder {powder} g Pulver, angerührt mit {water} ml Wasser.' },
        { q: 'Verändert Aquafaba den Geschmack des Gins?', a: 'Nein. In der Packung hat VERY AQUAFABA eine leichte Röstnote vom Kochen der Kichererbsen, im geshakten Drink verschwindet sie. Der Schaum bringt keinen eigenen Geschmack mit, das Aroma tragen Gin, Zitrone und Tonic.' },
        { q: 'Kann ich das Pulver vor dem Service anrühren?', a: 'Ja. Rühren Sie vor dem Service {powder} g Pulver mit {water} ml Wasser pro Drink an und stellen Sie es bis zum Shaken kalt.' },
        { q: 'Wie viele Gin Fizz ergibt eine 10 L Bag-in-Box?', a: '{drinks_10l} Drinks zu je {dose} ml. Geöffnet bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen.' },
      ],
    },

    'white-lady': {
      title: 'White Lady mit Aquafaba: Rezept ohne Ei | VERY AQUAFABA',
      h1: 'White Lady mit Aquafaba: so gelingt sie',
      crumb: 'White Lady',
      card: 'Gin, Triple Sec und Zitrone, im Stielglas',
      eyebrow: 'Cocktail-Leitfaden',
      description: 'White Lady mit VERY AQUAFABA statt Eiweiß: Gin, Triple Sec, Zitrone und {dose} ml Aquafaba, zweimal geshakt und im Stielglas serviert.',
      lead: `Die White Lady ist ganz Haltung, bis der Schaum nachgibt. Im Stielglas serviert, mit getrockneten Blüten auf der Schaumkrone, verzeiht sie keinen schwachen Shake und keine schlaffe Krone. Ersetzen Sie das Eiweiß durch {dose} ml VERY AQUAFABA, und der Drink behält seine saubere weiße Krone, während Gin, Triple Sec und Zitrone darunter genau ihre Arbeit machen. Hier lesen Sie, wie Sie sie aufbauen, wie Sie sie shaken und wie das helle, glatte Finish von der Bar bis zum Tisch hält.`,
      sections: [
        { id: 'tin', title: 'Was in den Shaker kommt', html: `<ul>
<li>{gin} ml Gin</li>
<li>{triple_sec} ml Triple Sec</li>
<li>{lemon_juice} ml Zitronensaft</li>
<li>{cane_syrup} ml Rohrzuckersirup</li>
<li>{dose} ml VERY AQUAFABA, gekühlt</li>
<li>Ein Cocktail- oder Margaritaglas und ein paar getrocknete Blüten als Garnitur</li>
</ul>
<p>In diesem Rezept stecken zwei alkoholische Zutaten: {gin} ml Gin und {triple_sec} ml Triple Sec. Mit Zitrone und Sirup ergibt das eine Basis von {batch_pour} ml, bevor die {dose} ml Aquafaba dazukommen.</p>` },
        { id: 'shake', title: 'So shaken Sie sie', html: `<ol>
<li>Gin, Triple Sec, Zitrone, Sirup und das Aquafaba direkt aus dem Kühlschrank in den Shaker geben.</li>
<li>Kräftig ohne Eis shaken. Dieser erste Shake baut den Schaum auf, die Flüssigkeit kommt hell und dick heraus.</li>
<li>{ice} Eiswürfel zugeben und noch einmal shaken, bis der Shaker außen beschlägt.</li>
<li>Ins Cocktail- oder Margaritaglas abseihen. Im Glas ist kein Eis, der Drink geht also so kalt hinaus, wie der zweite Shake ihn gemacht hat.</li>
<li>Ein paar getrocknete Blüten auf die Krone streuen.</li>
</ol>` },
        { id: 'tips', title: "Tipps für eine White Lady mit Aquafaba", html: `<p>Im Glas ist kein Eis, das die Präsentation stützt. Der Schaum liegt direkt auf dem Drink, die getrockneten Blüten obendrauf, Sie sehen das Ergebnis also sofort. Sinkt die Garnitur ein, prüfen Sie zuerst den Dry Shake und die Temperatur des Aquafaba, bevor Sie etwas anderes ändern.</p>
<p>Gin, Triple Sec, Zitrone und Sirup können vor dem Service in eine Flasche, und jeder Sour auf der Karte lässt sich <a href="{pre_batching_page_href}">auf dieselbe Weise vorbatchen</a>. Jede Bestellung braucht dann {batch_pour} ml Basis aus der Flasche plus {dose} ml gekühltes Aquafaba. Geben Sie das Aquafaba erst dazu, wenn Sie shaken, damit die Krone für genau diesen Drink entsteht und nicht im Batch wartet. Das <a href="{process_href}">Arbeitsblatt für die White Lady</a> hält die fünf Schritte auf einem Blatt fest.</p>` },
        { id: 'fix', title: 'Wenn die Krone die Garnitur nicht trägt', html: fixTable([
          ['Die Blüten sinken in den Drink', 'Die Krone ist dünn: Das Eis kam vor dem Dry Shake in den Shaker', 'Erst Dry Shake, dann Eis'],
          ['Ein träger Schaum, der nie fest wird', 'Das Aquafaba hatte Raumtemperatur', 'Die Packung bis zum Shaken im Kühlschrank lassen'],
          ['Die Krone ist gefallen, wenn das Glas beim Gast ankommt', 'Der Drink stand zu lange am Pass', 'Auf Bestellung shaken und sofort garnieren'],
          ['Keine Höhe mehr ab Mitte des Service', 'Das Aquafaba war im Pre-Batch', 'Nur Gin, Triple Sec, Zitrone und Sirup batchen'],
        ], FIX) },
        { id: 'format', title: 'White Lady jeden Abend, oder nur am Wochenende?', html: `<p>Ein 1 L Tetrapak reicht für {drinks_1l} White Lady. Geöffnet bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen. Schafft Ihre Karte diese {drinks_1l} Drinks in der Zeit, hält flüssiges Aquafaba die Station einfach.</p>
<p>Verkauft sich die White Lady langsamer oder nur zu Events, wartet Pulver entspannter zwischen den Services. Nehmen Sie {powder} g mit {water} ml Wasser pro Drink; ein 200 g Beutel ergibt {drinks_200g}. Der <a href="{calculator_href}">Mengenrechner für die White Lady</a> rechnet das ganze Rezept hoch, sobald Sie die Zahl der Drinks kennen.</p>` },
      ],
      faq: [
        { q: 'Was nehme ich in der White Lady statt Eiweiß?', a: '{dose} ml VERY AQUAFABA flüssig oder {powder} g Pulver, angerührt mit {water} ml Wasser.' },
        { q: 'In welches Glas kommt eine White Lady?', a: 'In ein Cocktail- oder Margaritaglas, mit ein paar getrockneten Blüten auf dem Schaum.' },
        { q: 'Wie viel Triple Sec kommt in eine White Lady?', a: '{triple_sec} ml, mit {gin} ml Gin, {lemon_juice} ml Zitronensaft, {cane_syrup} ml Rohrzuckersirup und {dose} ml Aquafaba.' },
        { q: 'Verändert Aquafaba den Geschmack einer White Lady?', a: 'Nein. In der Packung hat VERY AQUAFABA eine leichte Röstnote vom Kochen der Kichererbsen. Im geshakten Drink verschwindet sie: Der Schaum bringt keinen eigenen Geschmack mit, den Drink tragen Gin, Triple Sec und Zitrone.' },
        { q: 'Kann ich White Lady vor dem Service batchen?', a: 'Ja, Gin, Triple Sec, Zitrone und Sirup. Das Aquafaba kommt beim Shaken in jeden Shaker, nie in den Batch.' },
        { q: 'Wie viele White Lady ergibt eine 1 L Packung?', a: '{drinks_1l} Drinks zu je {dose} ml. Geöffnet bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen.' },
      ],
    },

    'la-rosee': {
      title: 'La Rosée Cocktail mit Aquafaba | VERY AQUAFABA',
      h1: 'La Rosée: ein rosa Sour mit Aquafaba',
      crumb: 'La Rosée',
      card: 'Wodka, Bergamotte und Himbeere, in der Coupe',
      eyebrow: 'Cocktail-Leitfaden',
      description: 'La Rosée mit VERY AQUAFABA: Wodka, Bergamottelikör, Himbeere und {dose} ml Aquafaba, zweimal geshakt und in der Coupe serviert.',
      lead: `La Rosée fällt auf, bevor jemand fragt, was drin ist. Rosa im Glas, hell obenauf, ein Minzzweig leicht auf dem Schaum: Dieser Drink wird erst angeschaut und dann getrunken. Das heißt aber auch, dass man jeden Fehler sieht. Mit {dose} ml VERY AQUAFABA anstelle des Eiweißes behält der Drink seine saubere weiße Schaumkrone über der Himbeerfarbe, und Wodka, Bergamottelikör und {orange_blossom} Tropfen Orangenblütenwasser bleiben im Gleichgewicht. Hier finden Sie den Aufbau, den Shake und die Details, mit denen der Drink präzise wirkt und nicht nur hübsch.`,
      sections: [
        { id: 'tin', title: 'Was in den Shaker kommt', html: `<ul>
<li>{vodka} ml Wodka</li>
<li>{bergamot_liqueur} ml Bergamottelikör</li>
<li>{lemon_juice} ml Zitronensaft</li>
<li>{raspberry_syrup} ml Himbeersirup</li>
<li>{orange_blossom} Tropfen Orangenblütenwasser</li>
<li>{dose} ml VERY AQUAFABA, gekühlt</li>
<li>Eine Coupe und ein Minzzweig als Garnitur</li>
</ul>
<p>Die meisten Mengen sind vertraute Barmaße. Die Ausnahme ist das Orangenblütenwasser: {orange_blossom} Tropfen pro Drink, gezählt statt gegossen.</p>` },
        { id: 'shake', title: 'So shaken Sie sie', html: `<ol>
<li>Wodka, Bergamottelikör, Zitrone, Himbeersirup, Orangenblütenwasser und das gekühlte Aquafaba in den Shaker geben.</li>
<li>Kräftig ohne Eis shaken, um den Schaum aufzubauen.</li>
<li>{ice} Eiswürfel zugeben und noch einmal shaken, um zu kühlen und zu verdünnen.</li>
<li>In die Coupe abseihen.</li>
<li>Einen Minzzweig auf die Krone setzen.</li>
</ol>` },
        { id: 'tips', title: "Tipps für La Rosée mit Aquafaba", html: `<p>Bei La Rosée kommt es auf zwei Dinge an. Das erste ist das Orangenblütenwasser: {orange_blossom} Tropfen pro Drink, mit der Pipettenflasche gezählt statt geschüttet. Bei {ex_batches} Drinks sind das {ex_orange_blossom} Tropfen, und der <a href="{calculator_href}">Mengenrechner für La Rosée</a> zählt sie zusammen mit den größeren Mengen.</p>
<p>Das zweite ist der Schaum. Der Himbeersirup färbt den ganzen Drink, deshalb zeigt eine dünne Krone sofort Rosa. Machen Sie den Dry Shake, bevor das Eis dazukommt, und die Minze obendrauf ist Ihre letzte Kontrolle, sobald der Drink in der Coupe steht.</p>
<p>Für einen vollen Service batchen Sie Wodka, Bergamottelikör, Zitrone, Himbeersirup und Orangenblütenwasser zusammen. Jede Bestellung beginnt dann mit {batch_pour} ml Basis aus der Flasche, und die Tropfen sind im Batch schon abgemessen. Halten Sie das Aquafaba bis zum Shaken gekühlt und getrennt, und legen Sie das <a href="{process_href}">Arbeitsblatt für La Rosée</a> für die Kontrollen neben die Coupes.</p>` },
        { id: 'fix', title: "Dünne Krone bei La Rosée beheben", html: fixTable([
          ['Rosa scheint durch eine dünne Krone', 'Das Eis kam vor dem Dry Shake in den Shaker', 'Erst Dry Shake, dann Eis'],
          ['Schlaffer Schaum, der langsam steigt', 'Das Aquafaba hatte Raumtemperatur', 'Bis zum Shaken im Kühlschrank lassen'],
          ['Die Minze sinkt ein, bevor der Drink am Tisch ist', 'Der Drink stand zu lange am Pass', 'Auf Bestellung shaken und sofort servieren'],
          ['Das Orangenblütenwasser übertönt den Drink', 'Es kamen mehr als {orange_blossom} Tropfen hinein', 'Mit einer Pipettenflasche abmessen'],
        ], FIX) },
        { id: 'format', title: 'Steht La Rosée fest auf der Karte, oder nur als Special?', html: `<p>Ein 1 L Tetrapak ergibt {drinks_1l} La Rosée; geöffnet bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen. Das passt, wenn der Drink einen festen Platz auf der Karte hat. Gibt es ihn als Special oder verkauft er sich seltener, nehmen Sie {powder} g Pulver mit {water} ml Wasser pro Drink und halten den restlichen Beutel trocken und verschlossen.</p>` },
      ],
      faq: [
        { q: 'Was ist La Rosée?', a: 'Ein rosa Sour aus Wodka, Bergamottelikör, Zitrone, Himbeersirup und Orangenblütenwasser, mit {dose} ml Aquafaba geshakt und in der Coupe mit einem Minzzweig serviert.' },
        { q: 'Wie viel Orangenblütenwasser kommt in La Rosée?', a: '{orange_blossom} Tropfen pro Drink, mit {vodka} ml Wodka, {bergamot_liqueur} ml Bergamottelikör, {lemon_juice} ml Zitronensaft und {raspberry_syrup} ml Himbeersirup.' },
        { q: 'Kann ich La Rosée ohne Eiweiß machen?', a: 'Ja. Im Rezept von VERY AQUAFABA kommt der Schaum von {dose} ml Aquafaba, im Drink ist also kein Ei.' },
        { q: 'In welches Glas kommt La Rosée?', a: 'In eine Coupe, mit einem Minzzweig auf dem Schaum.' },
        { q: 'Wie viel Aquafaba-Pulver pro La Rosée?', a: '{powder} g Pulver, angerührt mit {water} ml Wasser, für einen Drink.' },
        { q: 'Wie viele La Rosée ergibt eine 1 L Packung?', a: '{drinks_1l} Drinks zu je {dose} ml. Geöffnet bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen.' },
      ],
    },

    'the-sunset': {
      title: 'The Sunset Cocktail mit Aquafaba | VERY AQUAFABA',
      h1: 'The Sunset: ein langer Sour mit Aquafaba',
      crumb: 'The Sunset',
      card: 'Rum und Amaretto, mit Ginger Beer aufgefüllt',
      eyebrow: 'Cocktail-Leitfaden',
      description: 'The Sunset mit VERY AQUAFABA: Rum, Amaretto, Zitrone und Vanille-Tonka-Sirup, mit {dose} ml Aquafaba geshakt und mit Ginger Beer aufgefüllt.',
      lead: `The Sunset wirkt schon beim ersten Blick aufs Rezept wie ein Drink für die Terrasse. Rum, ein wenig Amaretto, Zitrone und Sirup werden kurz geshakt, dann öffnet sich der Drink im Glas mit Ginger Beer und einer weißen Schaumkrone, die obenauf schwimmt. Mit {dose} ml VERY AQUAFABA anstelle des Eiweißes behalten Sie diese weiche Krone, ohne den Drink zu verändern. Entscheidend ist die Reihenfolge: zuerst der Schaum, dann das Auffüllen. Unten finden Sie die ganze Methode, warum das Ginger Beer aufs Glas wartet und was Sie prüfen, wenn die Krone im Drink versinkt.`,
      sections: [
        { id: 'tin', title: 'Was in den Shaker kommt, und was ins Glas', html: `<ul>
<li>{rum} ml Rum</li>
<li>{amaretto} ml Amaretto</li>
<li>{lemon_juice} ml Zitronensaft</li>
<li>{vanilla_tonka_syrup} ml Vanille-Tonka-Sirup</li>
<li>{dose} ml VERY AQUAFABA, gekühlt</li>
<li>Ginger Beer zum Auffüllen, in einem Highball</li>
<li>Ein paar getrocknete Blüten als Garnitur</li>
</ul>
<p>Das Ginger Beer gehört zum Servieren, nicht zum Shake. Es kommt erst hinein, wenn der Drink im Highball ist.</p>` },
        { id: 'build', title: 'So wird er gebaut', html: `<ol>
<li>Rum, Amaretto, Zitrone, Vanille-Tonka-Sirup und das Aquafaba in den Shaker geben.</li>
<li>Kräftig ohne Eis shaken: Hier entsteht der Schaum.</li>
<li>{ice} Eiswürfel zugeben und noch einmal shaken, um zu kühlen.</li>
<li>Ins Highball abseihen.</li>
<li>Mit Ginger Beer auffüllen.</li>
<li>Ein paar getrocknete Blüten auf die Krone streuen.</li>
</ol>` },
        { id: 'tips', title: "Tipps für The Sunset mit Aquafaba", html: `<p>Bauen Sie die Krone auf, bevor der lange Teil des Drinks dazukommt. Erst Dry Shake, dann Shake mit Eis, dann abseihen; das Ginger Beer kommt danach ins Glas. Die Reihenfolge ist dieselbe wie beim <a href="{gin_fizz_href}">Gin Fizz</a>, nur wird hier mit Ginger Beer statt Tonic aufgefüllt.</p>
<p>Der Amaretto liegt bei {amaretto} ml pro Drink, der Vanille-Tonka-Sirup bei {vanilla_tonka_syrup} ml. Das sind kleine Mengen in einem Highball, über einen Service summieren sie sich aber schnell. Messen Sie beide mit dem Jigger ab und rechnen Sie sie in den Batch ein, statt nach Augenmaß zu gießen.</p>
<p>Batchen Sie Rum, Amaretto, Zitrone und Sirup vor dem Service. Das Aquafaba bleibt gekühlt für den Shaker, das Ginger Beer für das Glas. So hat jede Bestellung denselben Ablauf: Basis, Aquafaba, zwei Shakes, abseihen, auffüllen. Das <a href="{process_href}">Arbeitsblatt für The Sunset</a> hält diese Reihenfolge auf einem Blatt fest.</p>` },
        { id: 'fix', title: 'Wenn die Krone im Ginger Beer versinkt', html: fixTable([
          ['Dünne Krone, schon bevor aufgefüllt wird', 'Das Eis kam vor dem Dry Shake in den Shaker', 'Erst Dry Shake, dann Eis'],
          ['Die Krone fällt zusammen, wenn das Ginger Beer kommt', 'Das Ginger Beer war im Shaker', 'Erst abseihen, dann im Glas auffüllen'],
          ['Schlaffer Schaum, der langsam steigt', 'Das Aquafaba hatte Raumtemperatur', 'Bis zum Shaken im Kühlschrank lassen'],
          ['Die Krone ist weg, wenn der Drink am Tisch ankommt', 'Der Drink stand zu lange am Pass', 'Shaken, auffüllen und sofort servieren'],
        ], FIX) },
        { id: 'format', title: 'Sunsets die ganze Saison, oder nur ab und zu?', html: `<p>Ein 1 L Tetrapak ergibt {drinks_1l} Sunsets, eine 10 L Bag-in-Box {drinks_10l}. Flüssiges Aquafaba geöffnet bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen. Wählen Sie die Größe also nach der Zahl, die Sie in dieser Zeit realistisch servieren.</p>
<p>Für gelegentliche Bestellungen nehmen Sie {powder} g Pulver mit {water} ml Wasser pro Drink. Trocken und verschlossen hält der geöffnete Beutel bis zum Mindesthaltbarkeitsdatum, und der <a href="{calculator_href}">Mengenrechner für The Sunset</a> rechnet den ganzen Service aus der Zahl der erwarteten Drinks aus.</p>` },
      ],
      faq: [
        { q: 'Wann kommt das Ginger Beer in The Sunset?', a: 'Nachdem der Drink ins Highball abgeseiht ist. Das Ginger Beer wird obendrauf gegossen, nie mitgeshakt.' },
        { q: 'Kann ich The Sunset ohne Eiweiß machen?', a: 'Ja. Der Schaum kommt von {dose} ml VERY AQUAFABA, geshakt mit Rum, Amaretto, Zitrone und Sirup.' },
        { q: 'Wie viel Amaretto kommt in The Sunset?', a: '{amaretto} ml, mit {rum} ml Rum, {lemon_juice} ml Zitronensaft, {vanilla_tonka_syrup} ml Vanille-Tonka-Sirup und {dose} ml Aquafaba.' },
        { q: 'Wie viel Aquafaba-Pulver pro Sunset?', a: '{powder} g Pulver, angerührt mit {water} ml Wasser, für einen Drink.' },
        { q: 'Kann ich The Sunset vor dem Service batchen?', a: 'Batchen Sie Rum, Amaretto, Zitrone und Sirup. Das Aquafaba kommt beim Shaken dazu, das Ginger Beer im Glas.' },
        { q: 'Wie viele Sunsets ergibt eine 10 L Bag-in-Box?', a: '{drinks_10l} Drinks zu je {dose} ml. Geöffnet bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen.' },
      ],
    },
  },

  topics: {
    'where-to-buy': {
      title: 'Aquafaba für Cocktails kaufen | VERY AQUAFABA',
      h1: 'Wo kaufe ich Aquafaba für Cocktails?',
      crumb: 'Wo kaufen',
      eyebrow: 'Cocktails',
      description: 'Wo Sie VERY AQUAFABA für Ihre Bar kaufen: Amazon in den USA und in Deutschland, InstantChef in Frankreich und überall sonst über das Anfrageformular.',
      lead: `Sobald Aquafaba seinen Platz hinter der Bar hat, kommen die praktischen Fragen. Bekommen Sie es bei Ihnen vor Ort? Wollen Sie flüssiges Aquafaba, das direkt in den Shaker geht, oder Pulver, das in ruhigeren Wochen im Regal warten kann? VERY AQUAFABA wird je nach Land über verschiedene Wege verkauft, und das richtige Format hängt vor allem davon ab, wie schnell Sie eine geöffnete Packung verbrauchen.`,
      sections: [
        { id: 'countries', title: 'Wo Sie Aquafaba in Ihrem Land kaufen', html: `${table(['Ihr Standort', 'Wo Sie kaufen'], [
          ['<a href="{united_states_de_href}">USA</a>', 'Amazon, auch mit einem eigenen Produkt für Cocktails'],
          ['<a href="{germany_de_href}">Deutschland</a>', 'Amazon'],
          ['<a href="{france_de_href}">Frankreich</a>', 'InstantChef'],
          ['<a href="{united_kingdom_de_href}">Vereinigtes Königreich</a>, <a href="{belgium_de_href}">Belgien</a>, <a href="{netherlands_de_href}">Niederlande</a> und alle anderen Länder', 'Das Anfrageformular auf dieser Seite'],
        ])}
<p>Der Weg ist je nach Markt ein anderer, fangen Sie also bei Ihrem Land an und nicht bei der Packungsgröße.</p>` },
        { id: 'choose', title: 'Wie schnell brauchen Sie eine geöffnete Packung auf?', html: `<p>Die Kaufentscheidung wird einfacher, sobald Sie wissen, <a href="{cocktails_href}">wie schnell Sie eine geöffnete Packung verbrauchen</a>. Flüssiges Aquafaba kommt direkt aus dem Kühlschrank; geöffnet bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen. Pulver wartet trocken und verschlossen zwischen den Services, das hilft, wenn Sours seltener bestellt werden.</p>` },
        { id: 'packs', title: 'Von der Zahl Ihrer Sours zur Packungsgröße', html: `${table(['Gebinde', 'Drinks zu je {dose} ml'], [
          ['1 L Tetrapak', '{drinks_1l}'],
          ['10 L Bag-in-Box', '{drinks_10l}'],
          ['30 g Beutel', '{drinks_30g}'],
          ['200 g Beutel', '{drinks_200g}'],
          ['3 kg Beutel', '{drinks_3kg}'],
        ])}
<p>Diese Zahlen gehen von der Dosis von {dose} ml aus, die der <a href="{pisco_sour_href}">Pisco Sour</a>, der <a href="{amaretto_sour_href}">Amaretto Sour</a>, der <a href="{gin_fizz_href}">Gin Fizz</a> und die anderen Cocktailrezepte verwenden. Arbeiten Sie mit Pulver, braucht jeder Drink {powder} g Pulver, angerührt mit {water} ml Wasser.</p>` },
        { id: 'groups', title: 'Bestellen für mehrere Standorte', html: `<p>Bestellen Sie für mehrere Standorte oder eine Menge über eine einzelne Packung hinaus, nutzen Sie das Anfrageformular für Profis und geben Sie die Zahl der Standorte und die Formate an, die Sie im Blick haben. Damit können wir Ihre Anfrage beantworten und das technische Datenblatt gleich mitschicken. Vor der Bestellung können Sie <a href="{bars_href}">die Aquafaba-Station für Ihre Bar einrichten</a>.</p>` },
      ],
      faq: [
        { q: 'Wo kaufe ich Aquafaba für Cocktails in den USA?', a: 'Auf Amazon, auch mit einem eigenen Produkt für Cocktails: [VERY AQUAFABA in den USA kaufen]({united_states_de_href}).' },
        { q: 'Kann ich VERY AQUAFABA im Vereinigten Königreich kaufen?', a: 'Über das Anfrageformular auf dieser Seite: Hinterlassen Sie Ihre Daten und die Formate, die Sie brauchen, und wir melden uns zur Bestellung bei Ihnen.' },
        { q: 'Wo kaufe ich es in Frankreich?', a: 'Bei InstantChef, flüssig und als Pulver: [VERY AQUAFABA in Frankreich kaufen]({france_de_href}).' },
        { q: 'Welches Gebinde sollte eine Bar kaufen?', a: 'Zählen Sie Ihre Sours. Ist eine geöffnete Packung innerhalb von {opened_days} Tagen leer, ist flüssig die einfache Wahl; wenn nicht, nehmen Sie das Pulver: Trocken und verschlossen hält ein geöffneter Beutel bis zum Mindesthaltbarkeitsdatum.' },
        { q: 'Wie viele Cocktails ergibt eine 1 L Packung?', a: '{drinks_1l} Drinks zu je {dose} ml, die Dosis, die jeder Cocktail von VERY AQUAFABA verwendet.' },
        { q: 'Bekomme ich das technische Datenblatt vor der Bestellung?', a: 'Ja. Fragen Sie es über das Anfrageformular für Profis auf dieser Seite oder über das [Kontaktformular]({contact_href}) an.' },
      ],
    },

    powder: {
      title: 'Aquafaba-Pulver für Cocktails? | VERY AQUAFABA',
      h1: 'Kann ich Aquafaba-Pulver für Cocktails verwenden?',
      crumb: 'Aquafaba-Pulver für Cocktails',
      eyebrow: 'Cocktails',
      description: 'Ja: {powder} g VERY AQUAFABA Pulver mit {water} ml Wasser pro Drink anrühren, kühlen und wie flüssiges shaken. Wann Bars zum Pulver greifen.',
      lead: `Pulver lohnt sich vor allem, wenn Ihre Sours in Wellen bestellt werden und nicht jeden Abend. Sie rühren an, was der Service braucht, stellen es kalt, und der Rest des Beutels bleibt trocken und verschlossen bis zum nächsten Mal. Für einen Drink nehmen Sie {powder} g VERY AQUAFABA Pulver mit {water} ml Wasser. Angerührt kommt es in denselben Shaker und folgt derselben Methode mit zwei Shakes wie die flüssige Variante.`,
      sections: [
        { id: 'why', title: 'Pulver passt, wenn Sours nur ab und zu laufen', html: `<p>Trocken und verschlossen gelagert, hält ein geöffneter Beutel bis zum Mindesthaltbarkeitsdatum auf dem Beutel. So rühren Sie nur an, was der aktuelle Service braucht, und der Rest bleibt unberührt für den nächsten.</p>
${table(['Drinks heute Abend', 'Pulver', 'Wasser'], [
  ['10', '{p10} g', '{w10} ml'],
  ['{ex_batches}', '{ex_powder} g', '{ex_water} ml'],
])}
<p>Für einen Drink sind das {powder} g Pulver in {water} ml Wasser, gekühlt, bevor es in den Shaker kommt. Diese Mengen folgen der Pulverregel: {white_powder} g Pulver und {white_water} ml Wasser ergeben {white_total} g Aquafaba, so viel wie dieselbe Menge flüssiges Aquafaba.</p>` },
        { id: 'make', title: 'Nur anrühren, was der Abend braucht', html: `<p>Wiegen Sie das Pulver für die Zahl der erwarteten Drinks ab, geben Sie die passende Menge Wasser dazu und stellen Sie das angerührte Aquafaba vor dem Service kalt. Es bleibt im Kühlschrank, bis es in den Shaker kommt. Dieselbe <a href="{reconstitution_href}">Regel für Pulver und Wasser</a> gilt vom einzelnen Drink bis zum ganzen Service.</p>` },
        { id: 'pouch', title: 'Welcher Beutel ins Regal hinter der Bar gehört', html: `<p>Bei {dose} ml pro Drink ergibt ein 30 g Beutel {drinks_30g} Cocktails, ein 200 g Beutel {drinks_200g} und ein 3 kg Beutel {drinks_3kg}. Verschlossene Beutel halten mindestens {unopened_months} Monate bei Raumtemperatur, Sie können die Bestellung also nach Ihrem tatsächlichen Cocktailvolumen planen und nicht nach den nächsten paar Servicetagen.</p>
<p>Wenn Sie die Methode an einem vertrauten Rezept testen wollen, beginnen Sie mit dem <a href="{pisco_sour_href}">Pisco Sour</a>, dem <a href="{amaretto_sour_href}">Amaretto Sour</a> oder dem <a href="{gin_fizz_href}">Gin Fizz</a> und <a href="{where_to_buy_page_href}">wählen Sie dann das Pulverformat, das es in Ihrem Land gibt</a>.</p>` },
        { id: 'mistakes', title: 'Drei Fehler, die die Schaumkrone flach machen', html: `<ul>
<li><strong>Eis von Anfang an im Shaker.</strong> Die Krone wird dünn. Erst ohne Eis shaken, dann mit Eis.</li>
<li><strong>Angerührtes Aquafaba steht auf der Bar.</strong> Warmes Aquafaba gibt einen trägen, schlaffen Schaum. Bis zum Shaken kalt halten.</li>
<li><strong>Aquafaba im Pre-Batch.</strong> Ab Mitte des Service ist die Höhe weg. Spirituose, Zitrus und Sirup batchen, das Aquafaba pro Drink zugeben.</li>
</ul>` },
      ],
      faq: [
        { q: 'Wie viel Aquafaba-Pulver nehme ich pro Cocktail?', a: '{powder} g VERY AQUAFABA Pulver, angerührt mit {water} ml Wasser, für einen Drink, der {dose} ml flüssiges Aquafaba braucht.' },
        { q: 'Schäumt Aquafaba-Pulver wie das flüssige?', a: 'Ja. Angerührt und gekühlt kommt es in den Shaker und durch die beiden Shakes, genau wie das flüssige.' },
        { q: 'Wie lange hält ein geöffneter Beutel?', a: 'Trocken und verschlossen gelagert, hält er bis zum Mindesthaltbarkeitsdatum auf dem Beutel. Verschlossen hält er mindestens {unopened_months} Monate bei Raumtemperatur.' },
        { q: 'Kann ich das Pulver vor dem Service anrühren?', a: 'Ja. Rühren Sie vor dem Service an, was der Abend braucht, und lassen Sie es bis zum Shaken im Kühlschrank.' },
        { q: 'Welchen Beutel sollte eine Bar kaufen?', a: 'Ein 30 g Beutel ergibt {drinks_30g} Drinks, ein 200 g Beutel {drinks_200g} und ein 3 kg Beutel {drinks_3kg}, bei {dose} ml pro Drink.' },
        { q: 'Wo kaufe ich Aquafaba-Pulver für Cocktails?', a: 'Das hängt von Ihrem Land ab: [Aquafaba-Pulver für Ihre Bar bestellen]({where_to_buy_page_href}), über Amazon, InstantChef oder unser Anfrageformular.' },
      ],
    },

    'how-to-make': {
      title: 'Cocktails mit Aquafaba mixen | VERY AQUAFABA',
      h1: 'Wie mixe ich Cocktails mit Aquafaba?',
      crumb: 'Cocktails mit Aquafaba mixen',
      eyebrow: 'Cocktails',
      description: 'Ersetzen Sie das Eiweiß durch {dose} ml VERY AQUAFABA und behalten Sie Ihr Rezept: eine Methode für jeden Sour, und sieben Sours zum Ausprobieren.',
      lead: `Aquafaba ändert eine Zutat, nicht die Art, wie Sie über einen Sour denken. Wenn Sie einen Drink mit Eiweiß bauen, trocken shaken und fertig machen können, kennen Sie die Technik ab der ersten Bestellung. Nehmen Sie {dose} ml VERY AQUAFABA pro Drink, heben Sie das Eis für den zweiten Shake auf, und dieselbe Methode trägt Sie vom Pisco Sour bis zur White Lady, zu La Rosée oder zum langen Gin Fizz.`,
      sections: [
        { id: 'method', title: 'Eine Methode, das Finish bestimmt der Drink', html: `<ol>
<li>Spirituose, Zitrus, Sirup und Aquafaba in den Shaker geben.</li>
<li>Kräftig ohne Eis shaken. Hier entsteht der Schaum.</li>
<li>{ice} Eiswürfel zugeben und noch einmal shaken, um zu kühlen.</li>
<li>Ins Glas abseihen und garnieren.</li>
</ol>
<p>Zwei der sieben Drinks unten sind Long Drinks: Der Gin Fizz bekommt Tonic Water, The Sunset Ginger Beer, beides nach dem Abseihen ins Glas gegossen und nie in den Shaker.</p>` },
        { id: 'recipes', title: 'Sieben Sours zum Ausprobieren', html: `${table(['Cocktail', 'Basis', 'Glas'], [
          ['<a href="{whiskey_recipe_href}">Whiskey Sour</a>', 'Bourbon oder Irish Whiskey', 'Tumbler'],
          ['<a href="{pisco_sour_href}">Pisco Sour</a>', 'Pisco', 'Tumbler'],
          ['<a href="{amaretto_sour_href}">Amaretto Sour</a>', 'Amaretto, mit Vanillesirup', 'Tumbler'],
          ['<a href="{gin_fizz_href}">Gin Fizz</a>', 'Gin, mit Tonic Water aufgefüllt', 'Highball'],
          ['<a href="{white_lady_href}">White Lady</a>', 'Gin und Triple Sec', 'Cocktail- oder Margaritaglas'],
          ['<a href="{la_rosee_href}">La Rosée</a>', 'Wodka und Bergamottelikör, mit Himbeere', 'Coupe'],
          ['<a href="{the_sunset_href}">The Sunset</a>', 'Rum und Amaretto, mit Ginger Beer aufgefüllt', 'Highball'],
        ])}
<p>Alle sieben verwenden {dose} ml VERY AQUAFABA pro Drink, und die sechs nach dem Whiskey Sour haben jeweils einen eigenen Mengenrechner und ein eigenes Arbeitsblatt. So muss sich die Station nur ein Maß für Aquafaba merken, auch wenn Spirituosen, Gläser, Garnitur und Auffüllen von Drink zu Drink wechseln.</p>` },
        { id: 'order', title: 'Was die beiden Shakes bewirken', html: `<p>Der erste Shake ist für die Schaumkrone. Der zweite kühlt und verdünnt. Weil diese Aufgaben getrennt bleiben, steht der Dry Shake in jedem dieser Rezepte an erster Stelle.</p>` },
        { id: 'fix', title: 'Wenn die Krone dünn ausfällt', html: fixTable([
          ['Dünne Krone oder gar keine', 'Das Eis war von Anfang an im Shaker', 'Erst Dry Shake, dann Eis'],
          ['Träger, schlaffer Schaum', 'Das Aquafaba hatte Raumtemperatur', 'Bis zum Shaken im Kühlschrank lassen'],
          ['Keine Höhe mehr ab Mitte des Service', 'Das Aquafaba war im Pre-Batch', 'Den Rest batchen, das Aquafaba pro Drink zugeben'],
          ['Ein Long Drink ohne Krone', 'Tonic oder Ginger Beer war im Shaker', 'Erst abseihen, dann im Glas auffüllen'],
          ['Der Schaum fällt, bevor der Drink beim Gast ist', 'Der Drink stand zu lange am Pass', 'Auf Bestellung shaken und sofort servieren'],
        ], FIX) },
        { id: 'next', title: 'Fangen Sie mit einem Sour an, den Sie kennen', html: `<p>Beginnen Sie mit einem Sour, den Sie schon machen. Ersetzen Sie das Eiweiß durch {dose} ml Aquafaba, lassen Sie den Rest des Rezepts, wie er ist, und üben Sie den Rhythmus der zwei Shakes, bis er sitzt, bevor Sie zu den anderen Drinks übergehen. Für einen vollen Service können Sie <a href="{pre_batching_page_href}">Spirituose, Zitrus und Sirup batchen</a>, das Aquafaba aber bleibt für jeden einzelnen Shake.</p>
<p>Wenn Sie ungefähr wissen, wie viele Sours Sie verkaufen, sagt Ihnen dieselbe Zahl, ob Sie <a href="{powder_page_href}">mit dem Pulverbeutel arbeiten</a> und welches <a href="{where_to_buy_page_href}">Gebinde Sie für Ihre Bar bestellen</a>.</p>` },
      ],
      faq: [
        { q: 'Kann ich in jedem Sour Aquafaba statt Eiweiß nehmen?', a: 'In den sieben Sours, die wir veröffentlichen, ja: {dose} ml Aquafaba ersetzen das Eiweiß, und der Rest des Rezepts bleibt, wie er ist.' },
        { q: 'Muss ich anders shaken?', a: 'Nein. Einmal ohne Eis shaken, um den Schaum aufzubauen, dann noch einmal mit {ice} Eiswürfeln zum Kühlen, wie mit Eiweiß.' },
        { q: 'Schmeckt Aquafaba im Cocktail nach Kichererbsen?', a: 'In der Packung hat VERY AQUAFABA eine leichte Röstnote vom Kochen der Kichererbsen. Im geshakten Drink verschwindet sie: Der Schaum bringt keinen eigenen Geschmack mit, und der Drink schmeckt nach Spirituose, Zitrus und Sirup.' },
        { q: 'Wie viel Aquafaba-Pulver ersetzt das flüssige in einem Sour?', a: '{powder} g Pulver, angerührt mit {water} ml Wasser, für einen Drink, der {dose} ml flüssiges Aquafaba braucht.' },
        { q: 'Kann ich Long Drinks mit Schaumkrone machen?', a: 'Ja. Gin Fizz und The Sunset werden mit Aquafaba geshakt, ins Highball abgeseiht und im Glas mit Tonic Water oder Ginger Beer aufgefüllt.' },
        { q: 'Wo kaufe ich Aquafaba für Cocktails?', a: 'Sie können [Aquafaba für Ihre Bar bestellen]({where_to_buy_page_href}), auf Amazon in den USA und in Deutschland, bei InstantChef in Frankreich oder überall sonst über das Anfrageformular.' },
      ],
    },

    'pre-batching': {
      title: 'Sours mit Aquafaba vorbatchen? | VERY AQUAFABA',
      h1: 'Kann ich Sours mit Aquafaba vorbatchen?',
      crumb: 'Sours vorbatchen',
      eyebrow: 'Cocktails',
      description: 'Ja, alles außer dem Aquafaba: Spirituose, Zitrus und Sirup vor dem Service batchen und {dose} ml VERY AQUAFABA beim Shaken in jeden Shaker geben.',
      lead: `Mit einem Pre-Batch wird aus mehreren Flaschen pro Sour eine einzige Portion Basis. Spirituose, Zitrus und Sirup können vor dem Service bereitstehen. Nur das Aquafaba halten Sie zurück: Geben Sie {dose} ml VERY AQUAFABA dazu, wenn die Bestellung kommt, und shaken Sie den Schaum frisch im Shaker. So haben Sie das Tempo eines Batches, ohne dass die Schaumkrone stundenlang warten muss.`,
      sections: [
        { id: 'batch', title: 'Ein Batch für {ex_batches} Pisco Sours', html: `${table(['Im Batch', 'Getrennt, im Kühlschrank'], [
          ['Pisco: {ex_pisco} ml', 'VERY AQUAFABA flüssig: {ex_dose} ml'],
          ['Limettensaft: {ex_lime_juice} ml', 'oder Pulver angerührt: {ex_powder} g + {ex_water} ml Wasser'],
          ['Rohrzuckersirup: {ex_cane_syrup} ml', ''],
        ])}
<p>Beim Shaken nimmt jeder Drink {batch_pour} ml Basis aus der Flasche und {dose} ml Aquafaba aus dem Kühlschrank. Der Rest der Methode bleibt: Dry Shake, {ice} Eiswürfel, noch einmal shaken, abseihen. Die Zahlen sind die des <a href="{pisco_sour_href}">Pisco Sour mit Aquafaba</a>.</p>` },
        { id: 'out', title: 'Zwei Dinge warten, bis die Bestellung kommt', html: `<p>Halten Sie das Aquafaba getrennt, damit jeder Drink seine Krone im Shaker aufbaut. Bei Long Drinks bleibt auch das Auffüllen getrennt: Tonic für den <a href="{gin_fizz_href}">Gin Fizz</a> und Ginger Beer für <a href="{the_sunset_href}">The Sunset</a> kommen beide nach dem Abseihen ins Glas.</p>
<p>Der Rest der Basis lässt sich vorab batchen, auch die beiden Spirituosen der <a href="{white_lady_href}">White Lady</a>, der Vanillesirup im <a href="{amaretto_sour_href}">Amaretto Sour</a> und der Himbeersirup in <a href="{la_rosee_href}">La Rosée</a>.</p>` },
        { id: 'station', title: 'So sieht die Station im Service aus', html: `<p>Stellen Sie die Batchflasche neben die Shaker und das Aquafaba gekühlt unter die Station. Jede Bestellung ist dann eine Portion Basis, {dose} ml Aquafaba, ein Dry Shake und ein zweiter Shake mit Eis. Bauen Sie den Drink, wenn der Bon kommt, statt Shaker im Voraus zu füllen.</p>` },
        { id: 'events', title: 'Batchen für ein Event', html: `<p>Für ein Event legen Sie zuerst die Zahl der Drinks fest und lassen den Rechner für den <a href="{pisco_sour_calc_href}">Pisco Sour</a>, den <a href="{gin_fizz_calc_href}">Gin Fizz</a> oder die <a href="{white_lady_calc_href}">White Lady</a> den Batch berechnen. Ein 1 L Tetrapak reicht für {drinks_1l} Cocktails zu je {dose} ml; geöffnet bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen. Arbeiten Sie mit Pulver, rühren Sie die Menge für das Event vor der Öffnung an und halten Sie sie für den Service kalt.</p>` },
      ],
      faq: [
        { q: 'Kann ich Aquafaba in den Pre-Batch für meine Sours geben?', a: 'Nein. Geben Sie {dose} ml beim Shaken in jeden Shaker; der Schaum entsteht Drink für Drink.' },
        { q: 'Was kommt in die Batchflasche?', a: 'Spirituose, Zitrus und Sirup. Für {ex_batches} Pisco Sours: {ex_pisco} ml Pisco, {ex_lime_juice} ml Limettensaft und {ex_cane_syrup} ml Rohrzuckersirup.' },
        { q: 'Kann ich Long Drinks wie den Gin Fizz batchen?', a: 'Ja, den geshakten Teil. Tonic Water oder Ginger Beer kommen nach dem Abseihen in jedes Glas.' },
        { q: 'Kann ich das Pulver für einen gebatchten Service vorab anrühren?', a: 'Ja. Rühren Sie für {ex_batches} Drinks vor dem Service {ex_powder} g Pulver mit {ex_water} ml Wasser an und halten Sie es bis zum Shaken kalt.' },
        { q: 'Wie lange hält eine geöffnete Packung Aquafaba während eines Events?', a: 'Geöffnetes flüssiges Aquafaba bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen. Schreiben Sie das Öffnungsdatum auf den Karton.' },
      ],
    },
  },

  calculator: {
    'pisco-sour': {
      title: 'Pisco Sour: Aquafaba Mengenrechner | VERY AQUAFABA',
      h1: 'Wie viel Aquafaba pro Pisco Sour? Mengenrechner',
      description: 'Berechnen Sie VERY AQUAFABA, Pisco, Limette und Sirup für jede Zahl an Pisco Sours, flüssig oder als Pulver mit dem passenden Wasser.',
      lead: `Geben Sie ein, wie viele Pisco Sours Sie planen, und der Rechner ermittelt Pisco, Limettensaft, Sirup und VERY AQUAFABA, flüssig oder als Pulver. Für {ex_batches} Pisco Sours sind das {ex_pisco} ml Pisco, {ex_lime_juice} ml frischer Limettensaft und {ex_dose} ml Aquafaba.`,
      sections: [
        { id: 'scaling', title: 'Was mitwächst, und was Drink für Drink bleibt', html: `<p>Doppelt so viele Drinks heißt doppelt so viel Pisco, Limette, Sirup und Aquafaba. Was sich nicht wegbatchen lässt, ist der Schaum: Jeder Drink braucht weiter seinen eigenen Dry Shake und danach {ice} Eiswürfel für den zweiten Shake. Planen Sie die Zutaten in großen Mengen, aber bauen Sie jeden Drink einzeln fertig.</p>` },
        { id: 'packs', title: 'Wie viele Pisco Sours aus einem Gebinde', html: `<ul>
<li><strong>1 L Tetrapak:</strong> {drinks_1l} Pisco Sours.</li>
<li><strong>10 L Bag-in-Box:</strong> {drinks_10l} Pisco Sours.</li>
<li><strong>200 g Beutel:</strong> {drinks_200g} Pisco Sours.</li>
<li><strong>3 kg Beutel:</strong> {drinks_3kg} Pisco Sours.</li>
</ul>
<p>Geöffnete flüssige Packungen bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen. Wählen Sie das Gebinde also nach dem, was Sie in dieser Zeit verkaufen. Ein geöffneter Beutel hält trocken und verschlossen bis zum Mindesthaltbarkeitsdatum.</p>` },
        { id: 'example', title: '{ex_batches} Pisco Sours: was bereitstehen muss', html: `<p>Für {ex_batches} Pisco Sours bereiten Sie {ex_pisco} ml Pisco, {ex_lime_juice} ml Limettensaft, {ex_cane_syrup} ml Rohrzuckersirup und {ex_dose} ml VERY AQUAFABA vor. Dazu brauchen Sie {ex_ice} Eiswürfel für die zweiten Shakes. Ein 1 L Tetrapak deckt das Aquafaba ab und lässt {ex_left_1l} ml übrig, die Sie in den verbleibenden {opened_days} Tagen der geöffneten Packung verbrauchen.</p>
<p>Lieber mit Pulver? Rühren Sie vor dem Service {ex_powder} g mit {ex_water} ml Wasser an und halten Sie es kalt. Die Mengen lassen sich vorbereiten, aber jeder Drink bekommt denselben <a href="{guide_href}">Service mit zwei Shakes</a>, und das <a href="{process_href}">Arbeitsblatt für den Pisco Sour</a> gibt der Station die Kontrollen.</p>` },
      ],
      faq: [
        { q: 'Wie viel Aquafaba brauche ich für einen Pisco Sour?', a: '{dose} ml VERY AQUAFABA flüssig oder {powder} g Pulver mit {water} ml Wasser.' },
        { q: 'Wie viel Pisco und Limette für {ex_batches} Drinks?', a: '{ex_pisco} ml Pisco und {ex_lime_juice} ml Limettensaft, dazu {ex_cane_syrup} ml Rohrzuckersirup und {ex_dose} ml Aquafaba.' },
        { q: 'Rechnet der Rechner das Eis mit?', a: 'Nein, nur die Flüssigkeiten. Planen Sie {ice} Eiswürfel pro Drink für den zweiten Shake ein.' },
        { q: 'Soll ich das ganze Pulver auf einmal anrühren?', a: 'Rühren Sie vor der Öffnung an, was der Service braucht, und halten Sie es kalt. Ein geöffneter Beutel hält trocken und verschlossen bis zum nächsten Service.' },
      ],
    },
    'amaretto-sour': {
      title: 'Amaretto Sour: Aquafaba Mengenrechner | VERY AQUAFABA',
      h1: 'Wie viel Aquafaba pro Amaretto Sour? Mengenrechner',
      description: 'Amaretto Sour mit VERY AQUAFABA hochrechnen: Aquafaba, Amaretto, Zitrone und Vanillesirup für jede Zahl an Drinks, flüssig oder als Pulver.',
      lead: `Geben Sie die Zahl der Amaretto Sours ein, und der Rechner ermittelt Amaretto, Zitronensaft, Vanillesirup und VERY AQUAFABA, flüssig oder als Pulver. Prüfen Sie zuerst den Amaretto: Bei {amaretto} ml pro Drink brauchen {ex_batches} Amaretto Sours {ex_amaretto} ml.`,
      sections: [
        { id: 'scaling', title: 'Zuerst die Amarettoflasche prüfen', html: `<p>Bei {amaretto} ml pro Drink ist der Amaretto die Zahl, die am schnellsten wächst. Zitrone, Vanillesirup und Aquafaba wachsen mit, aber der Service bleibt Drink für Drink: Jeden Drink erst ohne Eis shaken, dann {ice} Eiswürfel zugeben und noch einmal shaken.</p>` },
        { id: 'packs', title: 'Wie viele Amaretto Sours aus einem Gebinde', html: `<ul>
<li><strong>1 L Tetrapak:</strong> {drinks_1l} Drinks, geöffnet innerhalb von {opened_days} Tagen verbraucht.</li>
<li><strong>10 L Bag-in-Box:</strong> {drinks_10l} Drinks, für Betriebe mit hohem Volumen oder mehrere Bars, die sich ein Gebinde teilen.</li>
<li><strong>200 g Beutel:</strong> {drinks_200g} Drinks, geöffnet trocken und verschlossen haltbar bis zum Mindesthaltbarkeitsdatum.</li>
<li><strong>3 kg Beutel:</strong> {drinks_3kg} Drinks.</li>
</ul>
<p>In einer ruhigen Woche rühren Sie nur an, was der Abend braucht: {p10} g Pulver in {w10} ml Wasser reichen für zehn Amaretto Sours, und der Rest des Beutels bleibt trocken und verschlossen für den nächsten Service.</p>` },
        { id: 'example', title: '{ex_batches} Amaretto Sours: die Liste für den Service', html: `<p>Für {ex_batches} Drinks stellen Sie {ex_amaretto} ml Amaretto, {ex_lemon_juice} ml Zitronensaft, {ex_vanilla_syrup} ml Vanillesirup und {ex_dose} ml VERY AQUAFABA bereit. Mit Pulver sind das {ex_powder} g, angerührt mit {ex_water} ml Wasser.</p>
<p>Batchen Sie Amaretto, Zitrone und Sirup vor dem Event. Halten Sie das Aquafaba gekühlt und getrennt, damit jede Bestellung <a href="{guide_href}">ihren Schaum im Shaker aufbaut</a>, und das <a href="{process_href}">Arbeitsblatt für den Amaretto Sour</a> zeigt, wie jeder Schritt aussehen sollte.</p>` },
      ],
      faq: [
        { q: 'Wie viel Amaretto für {ex_batches} Amaretto Sours?', a: '{ex_amaretto} ml Amaretto, dazu {ex_lemon_juice} ml Zitronensaft, {ex_vanilla_syrup} ml Vanillesirup und {ex_dose} ml Aquafaba.' },
        { q: 'Wie viel Aquafaba-Pulver pro Amaretto Sour?', a: '{powder} g Pulver, angerührt mit {water} ml Wasser, für einen Drink.' },
        { q: 'Wächst der Vanillesirup mit der Zahl der Drinks?', a: 'Ja, {vanilla_syrup} ml pro Drink, linear wie die anderen Zutaten.' },
        { q: 'Welches Gebinde passt zu einem Amaretto Sour, der ein paar Mal pro Woche läuft?', a: 'Das Pulver: Ein 200 g Beutel ergibt {drinks_200g} Drinks und hält nach dem Öffnen trocken und verschlossen bis zum Mindesthaltbarkeitsdatum auf dem Beutel.' },
      ],
    },
    'gin-fizz': {
      title: 'Gin Fizz: Aquafaba Mengenrechner | VERY AQUAFABA',
      h1: 'Wie viel Aquafaba pro Gin Fizz? Mengenrechner',
      description: 'Berechnen Sie VERY AQUAFABA, Gin, Zitrone und Rohrzuckersirup für jede Zahl an Gin Fizz, flüssig oder als Pulver mit dem passenden Wasser.',
      lead: `Geben Sie die Zahl der Gin Fizz ein, und der Rechner ermittelt alles, was in den Shaker kommt: Gin, Zitronensaft, Rohrzuckersirup und VERY AQUAFABA, flüssig oder als Pulver. Das Tonic Water ist nicht dabei, denn die Menge hängt von Ihrem Glas ab.`,
      sections: [
        { id: 'tonic', title: 'Was der Rechner weglässt', html: `<p>Die Tabelle endet vor dem Auffüllen. Das Tonic kommt nach dem Abseihen ins Highball, die Menge richtet sich also nach Ihrem Glas und nicht nach einem festen Maß im Rezept. Auch das Eis steht nicht im Rechner: Planen Sie {ice} Eiswürfel pro Drink für den zweiten Shake ein.</p>` },
        { id: 'packs', title: 'Wie viele Gin Fizz aus einem Gebinde', html: `<ul>
<li><strong>1 L Tetrapak:</strong> {drinks_1l} Gin Fizz.</li>
<li><strong>10 L Bag-in-Box:</strong> {drinks_10l} Gin Fizz, für Betriebe mit hohem Volumen oder mehrere Bars, die sich ein Gebinde teilen.</li>
<li><strong>200 g Beutel:</strong> {drinks_200g} Gin Fizz.</li>
<li><strong>3 kg Beutel:</strong> {drinks_3kg} Gin Fizz.</li>
</ul>
<p>Geöffnete flüssige Packungen bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen. Ein geöffneter Beutel hält trocken und verschlossen bis zum Mindesthaltbarkeitsdatum.</p>` },
        { id: 'example', title: '{ex_batches} Gin Fizz: was hinter die Bar gehört', html: `<p>Für {ex_batches} Gin Fizz bereiten Sie {ex_gin} ml Gin, {ex_lemon_juice} ml Zitronensaft, {ex_cane_syrup} ml Rohrzuckersirup und {ex_dose} ml VERY AQUAFABA vor. Mit Pulver rühren Sie vor dem Service {ex_powder} g mit {ex_water} ml Wasser an.</p>
<p>Das Tonic bleibt aus dem Batch und aus dem Rechner, denn der <a href="{guide_href}">Gin Fizz wird im Glas aufgefüllt</a>. Shaken Sie jeden Drink, seihen Sie ihn ins Highball ab und füllen Sie ihn wie im Haus üblich auf, in der Reihenfolge, die das <a href="{process_href}">Arbeitsblatt für den Gin Fizz</a> vorgibt.</p>` },
      ],
      faq: [
        { q: 'Wie viel Aquafaba brauche ich für einen Gin Fizz?', a: '{dose} ml VERY AQUAFABA flüssig oder {powder} g Pulver mit {water} ml Wasser.' },
        { q: 'Warum ist das Tonic Water nicht im Rechner?', a: 'Es kommt nach dem Abseihen auf jeden Drink, die Menge hängt also vom Glas ab. Alles, was in den Shaker kommt, steht in der Tabelle.' },
        { q: 'Wie viel Gin für {ex_batches} Gin Fizz?', a: '{ex_gin} ml Gin, dazu {ex_lemon_juice} ml Zitronensaft, {ex_cane_syrup} ml Rohrzuckersirup und {ex_dose} ml Aquafaba.' },
        { q: 'Welches Gebinde passt zu einer Bar, die jeden Abend Gin Fizz verkauft?', a: "Ein 1 L Tetrapak: Er ergibt {drinks_1l} Drinks und wird geöffnet innerhalb von {opened_days} Tagen verbraucht. Die 10 L Bag-in-Box ({drinks_10l} Drinks) passt zu Betrieben mit hohem Volumen oder mehreren Bars, die sich ein Gebinde teilen." },
      ],
    },
    'white-lady': {
      title: 'White Lady: Aquafaba Mengenrechner | VERY AQUAFABA',
      h1: 'Wie viel Aquafaba pro White Lady? Mengenrechner',
      description: 'Berechnen Sie VERY AQUAFABA, Gin, Triple Sec, Zitrone und Rohrzuckersirup für jede Zahl an White Lady, aus dem Tetrapak oder dem Beutel.',
      lead: `Geben Sie ein, wie viele White Lady Sie servieren möchten, und der Rechner ermittelt Gin, Triple Sec, Zitronensaft, Rohrzuckersirup und VERY AQUAFABA, flüssig oder als Pulver. Bei zwei Spirituosen im Shaker lohnt sich ein Blick auf beide Flaschen: {ex_batches} White Lady brauchen {ex_gin} ml Gin und {ex_triple_sec} ml Triple Sec.`,
      sections: [
        { id: 'spirits', title: 'Der Gin geht doppelt so schnell wie der Triple Sec', html: `<p>Jede White Lady braucht {gin} ml Gin und {triple_sec} ml Triple Sec, der Gin ist also doppelt so schnell leer. Zitrone, Sirup und Aquafaba wachsen linear mit. Geshaked wird trotzdem Drink für Drink, mit {ice} Eiswürfeln für den zweiten Shake.</p>` },
        { id: 'packs', title: 'Das Gebinde nach der Zahl der Drinks wählen', html: `<ul>
<li><strong>1 L Tetrapak:</strong> {drinks_1l} White Lady.</li>
<li><strong>10 L Bag-in-Box:</strong> {drinks_10l} White Lady.</li>
<li><strong>200 g Beutel:</strong> {drinks_200g} White Lady.</li>
<li><strong>3 kg Beutel:</strong> {drinks_3kg} White Lady.</li>
</ul>
<p>Geöffnete flüssige Packungen bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen. Ein geöffneter Beutel hält trocken und verschlossen bis zum Mindesthaltbarkeitsdatum.</p>` },
        { id: 'example', title: '{ex_batches} White Lady: die Zahlen für die Hochzeit', html: `<p>Für {ex_batches} White Lady bereiten Sie {ex_gin} ml Gin, {ex_triple_sec} ml Triple Sec, {ex_lemon_juice} ml Zitronensaft, {ex_cane_syrup} ml Rohrzuckersirup und {ex_dose} ml VERY AQUAFABA vor. Ein 1 L Tetrapak deckt das Aquafaba ab, und {ex_left_1l} ml bleiben übrig. Mit Pulver rühren Sie vor dem Service {ex_powder} g mit {ex_water} ml Wasser an.</p>
<p>Der Batch spart Zeit beim Abmessen, aber nicht die Technik am Schluss. Jeder Drink braucht weiter <a href="{guide_href}">den Dry Shake vor dem Eis</a>, wenn die Blüten auf der Schaumkrone liegen sollen, und das <a href="{process_href}">Arbeitsblatt für die White Lady</a> hat die Kontrollen für jeden Schritt.</p>` },
      ],
      faq: [
        { q: 'Wie viel Aquafaba brauche ich für eine White Lady?', a: '{dose} ml VERY AQUAFABA flüssig oder {powder} g Pulver mit {water} ml Wasser.' },
        { q: 'Wie viel Gin und Triple Sec für {ex_batches} White Lady?', a: '{ex_gin} ml Gin und {ex_triple_sec} ml Triple Sec, dazu {ex_lemon_juice} ml Zitronensaft, {ex_cane_syrup} ml Rohrzuckersirup und {ex_dose} ml Aquafaba.' },
        { q: 'Rechnet der Rechner das Eis mit?', a: 'Nein, nur was in den Shaker kommt. Planen Sie {ice} Eiswürfel pro Drink für den zweiten Shake ein.' },
        { q: 'Welches Gebinde passt zu einer White Lady, die nur am Wochenende auf der Karte steht?', a: 'Das Pulver: Ein 200 g Beutel ergibt {drinks_200g} Drinks und hält nach dem Öffnen trocken und verschlossen bis zum Mindesthaltbarkeitsdatum auf dem Beutel.' },
      ],
    },
    'la-rosee': {
      title: 'La Rosée: Aquafaba Mengenrechner | VERY AQUAFABA',
      h1: 'Wie viel Aquafaba pro La Rosée? Mengenrechner',
      description: 'La Rosée mit VERY AQUAFABA hochrechnen: Aquafaba, Wodka, Bergamottelikör, Zitrone, Himbeersirup und Orangenblütenwasser für jede Zahl an Drinks.',
      lead: `Geben Sie ein, wie viele Coupes La Rosée Sie planen, und der Rechner ermittelt Wodka, Bergamottelikör, Zitronensaft, Himbeersirup, Orangenblütenwasser und VERY AQUAFABA, flüssig oder als Pulver. Auch die Tropfen werden hochgerechnet: {ex_batches} Drinks brauchen {ex_orange_blossom} Tropfen Orangenblütenwasser.`,
      sections: [
        { id: 'drops', title: 'Auch die Tropfen wachsen mit', html: `<p>Tropfen wirken unwichtig, bis sich die Bestellungen vervielfachen. {ex_batches} La Rosée brauchen {ex_orange_blossom} Tropfen, und der Rechner führt diese Zahl neben den größeren Maßen. Planen Sie für die Station {ice} Eiswürfel pro Drink für den zweiten Shake ein.</p>` },
        { id: 'packs', title: 'Das Gebinde richtet sich nach der Zahl der Coupes', html: `<ul>
<li><strong>1 L Tetrapak:</strong> {drinks_1l} Drinks, geöffnet innerhalb von {opened_days} Tagen verbraucht.</li>
<li><strong>10 L Bag-in-Box:</strong> {drinks_10l} Drinks, für Betriebe mit hohem Volumen oder mehrere Bars, die sich ein Gebinde teilen.</li>
<li><strong>200 g Beutel:</strong> {drinks_200g} Drinks, geöffnet trocken und verschlossen haltbar bis zum Mindesthaltbarkeitsdatum.</li>
<li><strong>3 kg Beutel:</strong> {drinks_3kg} Drinks.</li>
</ul>` },
        { id: 'example', title: '{ex_batches} La Rosée: alle Mengen auf einen Blick', html: `<p>Für {ex_batches} Coupes bereiten Sie {ex_vodka} ml Wodka, {ex_bergamot_liqueur} ml Bergamottelikör, {ex_lemon_juice} ml Zitronensaft, {ex_raspberry_syrup} ml Himbeersirup, {ex_orange_blossom} Tropfen Orangenblütenwasser und {ex_dose} ml VERY AQUAFABA vor. Mit Pulver rühren Sie {ex_powder} g mit {ex_water} ml Wasser an.</p>
<p>Batchen Sie Wodka, Likör, Zitrone, Himbeere und Orangenblütenwasser vor dem Service. Halten Sie das Aquafaba getrennt, damit jede Coupe <a href="{guide_href}">ihren eigenen Dry Shake</a> bekommt, und das <a href="{process_href}">Arbeitsblatt für La Rosée</a> zeigt, wie der Drink bei jedem Schritt aussehen sollte.</p>` },
      ],
      faq: [
        { q: 'Wie viel Orangenblütenwasser für {ex_batches} La Rosée?', a: '{ex_orange_blossom} Tropfen, bei {orange_blossom} Tropfen pro Drink.' },
        { q: 'Wie viel Aquafaba brauche ich für eine La Rosée?', a: '{dose} ml VERY AQUAFABA flüssig oder {powder} g Pulver mit {water} ml Wasser.' },
        { q: 'Wie viel Wodka und Himbeersirup für {ex_batches} Drinks?', a: '{ex_vodka} ml Wodka und {ex_raspberry_syrup} ml Himbeersirup, dazu {ex_bergamot_liqueur} ml Bergamottelikör, {ex_lemon_juice} ml Zitronensaft und {ex_dose} ml Aquafaba.' },
        { q: 'Welches Gebinde passt zu La Rosée als gelegentliches Special?', a: 'Das Pulver: Ein 200 g Beutel ergibt {drinks_200g} Drinks und hält nach dem Öffnen trocken und verschlossen bis zum Mindesthaltbarkeitsdatum auf dem Beutel.' },
      ],
    },
    'the-sunset': {
      title: 'The Sunset: Aquafaba Mengenrechner | VERY AQUAFABA',
      h1: 'Wie viel Aquafaba pro Sunset? Mengenrechner',
      description: 'Berechnen Sie VERY AQUAFABA, Rum, Amaretto, Zitrone und Vanille-Tonka-Sirup für jede Zahl an Sunsets, aus dem Tetrapak oder dem Beutel.',
      lead: `Geben Sie die Zahl der Sunsets ein, und der Rechner ermittelt Rum, Amaretto, Zitronensaft, Vanille-Tonka-Sirup und VERY AQUAFABA, flüssig oder als Pulver. Auch die kleinen Mengen zählen: {ex_batches} Sunsets brauchen {ex_amaretto} ml Amaretto und {ex_vanilla_tonka_syrup} ml Sirup.`,
      sections: [
        { id: 'small', title: 'Die kleinen Mengen summieren sich zuerst', html: `<p>Wenn Sie {ex_batches} Sunsets serviert haben, liegt der Amaretto bei {ex_amaretto} ml und der Vanille-Tonka-Sirup bei {ex_vanilla_tonka_syrup} ml. Das Ginger Beer steht nicht in der Tabelle, weil es nach dem Abseihen jedes Highball auffüllt und sich nach Ihrem Glas richtet. Planen Sie {ice} Eiswürfel pro Drink für den zweiten Shake ein.</p>` },
        { id: 'packs', title: 'Das Gebinde nach dem Tempo der Terrasse wählen', html: `<p>Ein 1 L Tetrapak ergibt {drinks_1l} Sunsets und eine 10 L Bag-in-Box {drinks_10l}, die Größe für Betriebe mit hohem Volumen oder mehrere Bars, die sich ein Gebinde teilen. Beide geöffnet bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen. Beim Pulver ergeben 200 g {drinks_200g} Sunsets und 3 kg {drinks_3kg}, und ein geöffneter Beutel hält trocken und verschlossen bis zum Mindesthaltbarkeitsdatum.</p>` },
        { id: 'example', title: '{ex_batches} Sunsets: die Basis, bevor der erste Gast kommt', html: `<p>Für {ex_batches} Sunsets batchen Sie {ex_rum} ml Rum, {ex_amaretto} ml Amaretto, {ex_lemon_juice} ml Zitronensaft und {ex_vanilla_tonka_syrup} ml Vanille-Tonka-Sirup. Daneben halten Sie {ex_dose} ml VERY AQUAFABA kalt, oder Sie rühren {ex_powder} g Pulver mit {ex_water} ml Wasser an.</p>
<p>Im Service ist es dann eine Portion Basis, das Aquafaba, zwei Shakes und das Ginger Beer im Glas. Dieser letzte Schritt bleibt jedes Mal aus dem Shaker: <a href="{guide_href}">Bauen Sie The Sunset</a> in dieser Reihenfolge, mit dem <a href="{process_href}">Arbeitsblatt für The Sunset</a> auf der Station für die Kontrollen.</p>` },
      ],
      faq: [
        { q: 'Wie viel Aquafaba brauche ich für einen Sunset?', a: '{dose} ml VERY AQUAFABA flüssig oder {powder} g Pulver mit {water} ml Wasser.' },
        { q: 'Wie viel Ginger Beer brauche ich?', a: 'Das Ginger Beer füllt jedes Highball nach dem Abseihen auf, ohne festes Maß, die Menge hängt also von Ihrem Glas ab. Der Rechner deckt alles ab, was in den Shaker kommt.' },
        { q: 'Wie viel Rum und Amaretto für {ex_batches} Sunsets?', a: '{ex_rum} ml Rum und {ex_amaretto} ml Amaretto, dazu {ex_lemon_juice} ml Zitronensaft, {ex_vanilla_tonka_syrup} ml Vanille-Tonka-Sirup und {ex_dose} ml Aquafaba.' },
        { q: 'Welches Gebinde passt zu einer Bar, die jeden Tag Sunsets verkauft?', a: "Ein 1 L Tetrapak ({drinks_1l} Drinks), wenn Sie so viele innerhalb von {opened_days} Tagen nach dem Öffnen verkaufen; geöffnet bei {opened_temp} °C lagern. Die 10 L Bag-in-Box ({drinks_10l} Drinks) passt zu Betrieben mit hohem Volumen oder mehreren Bars, die sich ein Gebinde teilen." },
      ],
    },
  },

  process: {
    'pisco-sour': {
      title: 'Pisco Sour mit Aquafaba: Arbeitsblatt | VERY AQUAFABA',
      h1: 'Pisco Sour mit Aquafaba Schritt für Schritt: das Arbeitsblatt',
      description: 'Der Pisco Sour mit Aquafaba auf einem Blatt: aufbauen, Dry Shake, Shake mit Eis, abseihen, garnieren, mit den Kontrollen und Lösungen pro Schritt.',
      lead: `Ein guter Pisco Sour hat einen ganz eigenen Rhythmus: aufbauen, Dry Shake, Eis, noch einmal shaken, abseihen. Gerät dieser Rhythmus durcheinander, sehen Sie es sofort an der Schaumkrone. Dieses Blatt legt die fünf Schritte fest, nach denen Sie arbeiten, und die Zeichen, auf die Sie achten, wenn der Schaum dünner ausfällt, als er sollte.`,
      powderNote: 'Pulver: für einen Drink {powder} g VERY AQUAFABA Pulver + {water} ml Wasser, vor dem Service angerührt und gekühlt.',
      steps: [
        { step: 'Aufbauen', reference: '{pisco} ml Pisco, {lime_juice} ml Limette, {cane_syrup} ml Sirup, {dose} ml VERY AQUAFABA, gekühlt' },
        { step: 'Dry Shake', reference: 'Kräftig, ohne Eis: Die Flüssigkeit wird hell und dick' },
        { step: 'Mit Eis', reference: '{ice} Eiswürfel, noch einmal shaken: Der Shaker beschlägt außen' },
        { step: 'Abseihen', reference: 'In einen Tumbler: Die Krone steigt und steht fest' },
        { step: 'Garnieren', reference: 'Eine getrocknete Zitronenscheibe auf den Schaum' },
      ],
      checks: [
        { see: 'Dünne Krone', check: 'Das Eis war von Anfang an im Shaker', fix: 'Erst Dry Shake, dann Eis' },
        { see: 'Träger, schlaffer Schaum', check: 'Aquafaba bei Raumtemperatur', fix: 'Bis zum Shaken kalt halten' },
        { see: 'Keine Höhe ab Mitte des Service', check: 'Das Aquafaba war im Pre-Batch', fix: 'Nur die Basis batchen, Aquafaba pro Drink' },
        { see: 'Der Schaum fällt, bevor der Drink beim Gast ist', check: 'Der Drink stand zu lange am Pass', fix: 'Auf Bestellung shaken und sofort servieren' },
      ],
      sections: [
        { id: 'use', title: 'Wenn ein Pisco Sour flach rauskommt', html: `<p>Legen Sie das Blatt zu den Barrezepten, neben die <a href="{guide_href}">Methode für den Pisco Sour</a>. Fällt eine Krone dünn aus oder früh zusammen, gleichen Sie den Drink der Reihe nach mit den fünf Schritten ab. Beginnen Sie mit zwei einfachen Fragen: War das Aquafaba gekühlt, und kam das Eis erst nach dem Dry Shake?</p>` },
        { id: 'before', title: 'Die Station vor der ersten Bestellung einrichten', html: `<ul>
<li><strong>Aquafaba kalt.</strong> Die Packung steht im Kühlschrank. Geöffnet bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen.</li>
<li><strong>Pulver angerührt.</strong> Wenn Sie mit Pulver arbeiten, rühren Sie an, was der Abend braucht, und stellen es kalt.</li>
<li><strong>Das Öffnungsdatum auf der Packung.</strong> Schreiben Sie es auf den Karton, sobald er geöffnet ist.</li>
<li><strong>Die Basis gebatcht.</strong> Pisco, Limette und Sirup in einer Flasche; das Aquafaba bleibt getrennt.</li>
</ul>` },
        { id: 'signs', title: 'Woran Sie jeden Schritt erkennen', html: `<p>Nach dem Dry Shake sieht die Flüssigkeit hell und dick aus, fast wie ein Milchshake. Nach dem Shake mit Eis ist der Shaker außen beschlagen. Im Glas steigt die Krone beim Setzen und steht fest genug, um die getrocknete Zitronenscheibe zu tragen. Fehlt eines dieser Zeichen, zeigt die Kontrolltabelle oben, welchen Schritt Sie korrigieren. Für einen ganzen Abend liefert der <a href="{calculator_href}">Mengenrechner für den Pisco Sour</a> alle Mengen für die erwartete Zahl an Drinks.</p>` },
      ],
      faq: [
        { q: 'Warum shake ich zuerst ohne Eis?', a: 'Der Dry Shake baut den Schaum auf. Ist das Eis von Anfang an im Shaker, wird der Drink gekühlt und verdünnt, bevor sich der Schaum bildet, und die Krone wird dünn.' },
        { q: 'Wie lange hält eine geöffnete Packung hinter der Bar?', a: 'Geöffnetes flüssiges Aquafaba bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen. Schreiben Sie das Öffnungsdatum auf den Karton.' },
        { q: 'Gilt dasselbe Blatt für das Pulver?', a: 'Ja. Rühren Sie vor dem Service {powder} g Pulver mit {water} ml Wasser pro Drink an, stellen Sie es kalt und folgen Sie denselben fünf Schritten.' },
        { q: 'Kann ich das Aquafaba in meinen Pre-Batch geben?', a: 'Nein. Batchen Sie Pisco, Limette und Sirup, und geben Sie das Aquafaba beim Shaken in jeden Shaker, Drink für Drink.' },
      ],
    },
    'amaretto-sour': {
      title: 'Amaretto Sour mit Aquafaba: Arbeitsblatt | VERY AQUAFABA',
      h1: 'Amaretto Sour mit Aquafaba Schritt für Schritt: das Arbeitsblatt',
      description: 'Der Amaretto Sour mit Aquafaba auf einem Blatt: aufbauen, Dry Shake, Shake mit Eis, abseihen, garnieren, und was Sie prüfen, wenn die Krone flach ausfällt.',
      lead: `Ein Amaretto Sour versteckt eine schwache Schaumkrone schlecht. Auf dem satten, bernsteinfarbenen Drink fällt ein weicher oder dünner werdender Schaum auf, sobald er abgeseiht ist. Dieses Blatt hält den Aufbau von einem Drink zum nächsten gleich und hilft Ihnen, das Problem schnell zu finden, wenn der Drink die Station nicht so verlässt, wie er sollte.`,
      powderNote: 'Pulver: für einen Drink {powder} g VERY AQUAFABA Pulver + {water} ml Wasser, vor dem Service angerührt und gekühlt.',
      steps: [
        { step: 'Aufbauen', reference: '{amaretto} ml Amaretto, {lemon_juice} ml Zitrone, {vanilla_syrup} ml Vanillesirup, {dose} ml VERY AQUAFABA, gekühlt' },
        { step: 'Dry Shake', reference: 'Kräftig, ohne Eis: Die Flüssigkeit wird hell und dick' },
        { step: 'Mit Eis', reference: '{ice} Eiswürfel, noch einmal shaken, bis der Shaker beschlägt' },
        { step: 'Abseihen', reference: 'In einen Tumbler (Old Fashioned): Die Krone steht fest auf dem Amaretto' },
        { step: 'Garnieren', reference: 'Eine getrocknete Zitronenscheibe auf den Schaum, dann sofort servieren' },
      ],
      checks: [
        { see: 'Dünne Krone schon beim ersten Drink', check: 'Das Eis kam vor dem Dry Shake in den Shaker', fix: 'Erst Dry Shake, dann Eis' },
        { see: 'Der Schaum steigt langsam und bleibt schlaff', check: 'Aquafaba stand bei Raumtemperatur', fix: 'Die Packung bis zum Shaken im Kühlschrank lassen' },
        { see: 'Keine Höhe mehr später am Abend', check: 'Das Aquafaba war im Batch aus Amaretto und Zitrone', fix: 'Nur Amaretto, Zitrone und Sirup batchen' },
        { see: 'Flach, wenn er am Tisch ankommt', check: 'Der Drink stand zu lange am Pass', fix: 'Auf Bestellung shaken und sofort servieren' },
      ],
      sections: [
        { id: 'use', title: 'Wenn die Krone beim Amaretto Sour schwächelt', html: `<p>Legen Sie das Blatt zu Ihren Barrezepten, neben die <a href="{guide_href}">Methode für den Amaretto Sour</a>. Es führt vom Aufbau bis zur getrockneten Zitronenscheibe im Tumbler. Fällt eine Krone schwach aus, gehen Sie die fünf Schritte rückwärts durch und finden den, der nicht gesessen hat.</p>` },
        { id: 'before', title: 'Die Station vor der ersten Bestellung einrichten', html: `<ul>
<li><strong>Der Batch.</strong> Amaretto, Zitrone und Vanillesirup in einer Flasche, das Aquafaba getrennt.</li>
<li><strong>Das Aquafaba.</strong> Gekühlt. Geöffnet bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen.</li>
<li><strong>Das Pulver, falls Sie es nutzen.</strong> Für den Abend angerührt und im Kühlschrank.</li>
</ul>` },
        { id: 'signs', title: 'Was Sie sehen sollten, bevor der Drink rausgeht', html: `<p>Nach dem Dry Shake ist die Flüssigkeit hell und dick. Nach dem Shake mit Eis beschlägt der Shaker. Im Tumbler steht die Krone fest auf dem Amaretto und trägt die getrocknete Zitronenscheibe. Ist die Krone dünn oder schlaff, zeigt die Kontrolltabelle oben, welchen Schritt Sie korrigieren. Für einen ganzen Abend nutzen Sie den <a href="{calculator_href}">Mengenrechner für den Amaretto Sour</a>.</p>` },
      ],
      faq: [
        { q: 'In welches Glas seihe ich einen Amaretto Sour ab?', a: 'In einen Tumbler (Old Fashioned). Nach dem Abseihen kommt eine getrocknete Zitronenscheibe als Garnitur auf den Schaum.' },
        { q: 'Warum verliert mein Amaretto Sour seine Krone?', a: 'Meist kam das Eis vor dem Dry Shake, das Aquafaba war warm, oder der Drink stand zu lange am Pass. Die Kontrollen auf diesem Blatt decken alle drei Fälle ab.' },
        { q: 'Kann ich Pulver für Amaretto Sours nehmen?', a: 'Ja. Rühren Sie vor dem Service {powder} g Pulver mit {water} ml Wasser pro Drink an und halten Sie es kalt.' },
        { q: 'Darf das Aquafaba in den Batch aus Amaretto und Zitrone?', a: 'Nein. Geben Sie es beim Shaken in jeden Shaker, Drink für Drink.' },
      ],
    },
    'gin-fizz': {
      title: 'Gin Fizz mit Aquafaba: Arbeitsblatt | VERY AQUAFABA',
      h1: 'Gin Fizz mit Aquafaba Schritt für Schritt: das Arbeitsblatt',
      description: 'Der Gin Fizz mit Aquafaba auf einem Blatt: aufbauen, Dry Shake, Shake mit Eis, abseihen, mit Tonic auffüllen und garnieren, mit den Kontrollen.',
      lead: `Der Gin Fizz ist einfach, bis auf die letzten Sekunden. Sie können im Shaker eine gute Schaumkrone aufbauen und sie trotzdem verlieren, wenn das Tonic im falschen Moment kommt. Dieses Blatt hält die sechs Schritte in der richtigen Reihenfolge, vom Dry Shake bis zum Auffüllen, mit den Kontrollen für den Fall, dass der Drink ohne die erwartete Höhe im Highball ankommt.`,
      powderNote: 'Pulver: für einen Drink {powder} g VERY AQUAFABA Pulver + {water} ml Wasser, vor dem Service angerührt und gekühlt.',
      steps: [
        { step: 'Aufbauen', reference: '{gin} ml Gin, {lemon_juice} ml Zitrone, {cane_syrup} ml Rohrzuckersirup, {dose} ml VERY AQUAFABA, gekühlt' },
        { step: 'Dry Shake', reference: 'Kräftig, ohne Eis: Hier entsteht der Schaum' },
        { step: 'Mit Eis', reference: '{ice} Eiswürfel, noch einmal shaken, um zu kühlen' },
        { step: 'Abseihen', reference: 'In ein Highball' },
        { step: 'Auffüllen', reference: 'Tonic Water obendrauf gießen, nie mitshaken' },
        { step: 'Garnieren', reference: 'Eine getrocknete Zitronenscheibe auf die Krone' },
      ],
      checks: [
        { see: 'Dünne Krone vor dem Auffüllen', check: 'Das Eis kam vor dem Dry Shake in den Shaker', fix: 'Erst Dry Shake, dann Eis' },
        { see: 'Schlaffer Schaum', check: 'Aquafaba bei Raumtemperatur', fix: 'Bis zum Shaken kalt halten' },
        { see: 'Keine Krone auf dem Long Drink', check: 'Das Tonic war im Shaker', fix: 'Erst abseihen, dann im Glas mit Tonic auffüllen' },
        { see: 'Krone weg, wenn er am Tisch ankommt', check: 'Der Drink stand zu lange am Pass', fix: 'Shaken, auffüllen und sofort servieren' },
      ],
      sections: [
        { id: 'use', title: 'Wenn der Gin Fizz seine Krone verliert', html: `<p>Legen Sie das Blatt dorthin, wo die Highballs gebaut werden, mit der <a href="{guide_href}">Methode für den Gin Fizz</a> im Barbuch. Kommt der Drink ohne richtige Krone ins Glas, prüfen Sie zuerst die Reihenfolge der Shakes. Verschwindet die Krone danach, prüfen Sie, ob das Tonic ins Glas kam und nicht in den Shaker.</p>` },
        { id: 'before', title: 'Die Station vor der ersten Bestellung einrichten', html: `<ul>
<li><strong>Basis gebatcht.</strong> Gin, Zitrone und Rohrzuckersirup in einer Flasche; Aquafaba und Tonic bleiben getrennt.</li>
<li><strong>Aquafaba kalt.</strong> Geöffnet bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen.</li>
<li><strong>Highballs bereit.</strong> Der Drink geht direkt vom Abseihen zum Auffüllen.</li>
</ul>` },
        { id: 'signs', title: 'Was das Glas Ihnen zeigen sollte', html: `<p>Nach dem Dry Shake ist die Flüssigkeit hell und dick. Nach dem Shake mit Eis beschlägt der Shaker. Ins Highball abgeseiht trägt der Drink seine Krone; das Tonic verlängert ihn dann von unten, und die getrocknete Zitrone liegt obenauf. Der <a href="{calculator_href}">Mengenrechner für den Gin Fizz</a> berechnet Gin, Zitrone, Sirup und Aquafaba für den Abend.</p>` },
      ],
      faq: [
        { q: 'Wann kommt das Tonic in den Gin Fizz?', a: 'Nach dem Abseihen, im Highball obendrauf gegossen. Es kommt nie in den Shaker.' },
        { q: 'Warum ist mein Gin Fizz flach?', a: 'Prüfen Sie die Reihenfolge: erst Dry Shake, dann Eis, dann abseihen, dann das Tonic. Auch warmes Aquafaba oder ein Drink, der zu lange am Pass steht, verliert die Krone.' },
        { q: 'Funktioniert das Pulver für Gin Fizz?', a: 'Ja. Rühren Sie vor dem Service {powder} g Pulver mit {water} ml Wasser pro Drink an und halten Sie es kalt.' },
        { q: 'Kann ich Gin Fizz batchen?', a: 'Batchen Sie Gin, Zitrone und Sirup. Das Aquafaba kommt beim Shaken dazu, das Tonic im Glas.' },
      ],
    },
    'white-lady': {
      title: 'White Lady mit Aquafaba: Arbeitsblatt | VERY AQUAFABA',
      h1: 'White Lady mit Aquafaba Schritt für Schritt: das Arbeitsblatt',
      description: 'Die White Lady mit Aquafaba auf einem Blatt: aufbauen, Dry Shake, Shake mit Eis, ins Stielglas abseihen, garnieren, mit Kontrollen für die Krone.',
      lead: `Die Garnitur verrät alles. Liegen die getrockneten Blüten sauber auf der Schaumkrone, hat der Drink seine Arbeit getan. Sinken sie ein, ist vorher beim Aufbau etwas schiefgegangen. Dieses Blatt gibt Ihnen eine Methode in fünf Schritten und die Kontrollen für den Fall, dass die White Lady das feste Finish verliert, das sie braucht.`,
      powderNote: 'Pulver: für einen Drink {powder} g VERY AQUAFABA Pulver + {water} ml Wasser, vor dem Service angerührt und gekühlt.',
      steps: [
        { step: 'Aufbauen', reference: '{gin} ml Gin, {triple_sec} ml Triple Sec, {lemon_juice} ml Zitrone, {cane_syrup} ml Rohrzuckersirup, {dose} ml VERY AQUAFABA, gekühlt' },
        { step: 'Dry Shake', reference: 'Kräftig, ohne Eis: Die Flüssigkeit wird hell und dick' },
        { step: 'Mit Eis', reference: '{ice} Eiswürfel, noch einmal shaken, bis der Shaker beschlägt' },
        { step: 'Abseihen', reference: 'In ein Cocktail- oder Margaritaglas, ohne Eis im Glas' },
        { step: 'Garnieren', reference: 'Ein paar getrocknete Blüten auf den Schaum' },
      ],
      checks: [
        { see: 'Die Blüten sinken in den Drink', check: 'Das Eis kam vor dem Dry Shake in den Shaker', fix: 'Erst Dry Shake, dann Eis' },
        { see: 'Träger, schlaffer Schaum', check: 'Aquafaba bei Raumtemperatur', fix: 'Bis zum Shaken kalt halten' },
        { see: 'Keine Höhe ab Mitte des Service', check: 'Das Aquafaba war im Batch', fix: 'Nur Gin, Triple Sec, Zitrone und Sirup batchen' },
        { see: 'Die Krone fällt, bevor der Drink beim Gast ist', check: 'Der Drink stand zu lange am Pass', fix: 'Auf Bestellung shaken und sofort garnieren' },
      ],
      sections: [
        { id: 'use', title: 'Wenn die Krone die Blüten nicht trägt', html: `<p>Legen Sie das Blatt zu den Stielgläsern oder ins Barbuch, neben die <a href="{guide_href}">Methode für die White Lady</a>. Sinken die Blüten ein, arbeiten Sie sich vom Glas aus rückwärts: erst die Krone prüfen, dann den zweiten Shake, dann ob der Dry Shake vor dem Eis kam.</p>` },
        { id: 'before', title: 'Die Station vor der ersten Bestellung einrichten', html: `<ul>
<li><strong>Der Batch.</strong> Gin, Triple Sec, Zitrone und Sirup in einer Flasche; das Aquafaba getrennt.</li>
<li><strong>Das Aquafaba.</strong> Im Kühlschrank. Geöffnet bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen.</li>
<li><strong>Die Gläser.</strong> Cocktail- oder Margaritagläser bereit, die getrockneten Blüten in Reichweite.</li>
<li><strong>Das Pulver, falls Sie es nutzen.</strong> Für den Abend angerührt und gekühlt.</li>
</ul>` },
        { id: 'signs', title: 'Was das Glas Ihnen zeigen sollte', html: `<p>Nach dem Dry Shake ist die Flüssigkeit hell und dick, fast wie ein Milchshake. Nach dem Shake mit Eis ist der Shaker außen beschlagen. Im Glas steht die Krone eben und fest genug, um die Blüten zu tragen. Fehlt eines dieser Zeichen, zeigt die Kontrolltabelle oben, welchen Schritt Sie korrigieren. Der <a href="{calculator_href}">Mengenrechner für die White Lady</a> berechnet die Mengen für einen ganzen Abend.</p>` },
      ],
      faq: [
        { q: 'Warum sinken die getrockneten Blüten ein?', a: 'Die Krone ist zu dünn, um sie zu tragen, meist weil das Eis vor dem Dry Shake in den Shaker kam. Erst ohne Eis shaken, dann mit Eis.' },
        { q: 'Kommt eine White Lady auf Eis?', a: 'Nein. Sie kommt in ein Cocktail- oder Margaritaglas, abgeseiht und ohne Eis im Glas.' },
        { q: 'Gilt dasselbe Blatt für das Pulver?', a: 'Ja. Rühren Sie vor dem Service {powder} g Pulver mit {water} ml Wasser pro Drink an, stellen Sie es kalt und folgen Sie denselben fünf Schritten.' },
        { q: 'Kann ich das Aquafaba in den Batch aus Gin und Triple Sec geben?', a: 'Nein. Geben Sie es beim Shaken in jeden Shaker, Drink für Drink.' },
      ],
    },
    'la-rosee': {
      title: 'La Rosée mit Aquafaba: Arbeitsblatt | VERY AQUAFABA',
      h1: 'La Rosée mit Aquafaba Schritt für Schritt: das Arbeitsblatt',
      description: 'La Rosée auf einem Blatt: mit {orange_blossom} Tropfen Orangenblütenwasser aufbauen, Dry Shake, Shake mit Eis, in die Coupe abseihen, mit Minze garnieren.',
      lead: `La Rosée zeigt deutlich, wenn etwas nicht stimmt. Das Rosa scheint durch eine dünne Schaumkrone, die Minze beginnt zu sinken, oder das Orangenblütenwasser drängt sich zu sehr nach vorn. Dieses Blatt hält die fünf Schritte des Drinks an einem Ort fest und hilft Ihnen, schnell zu erkennen, was schiefging, bevor die nächste Coupe die Bar verlässt.`,
      powderNote: 'Pulver: für einen Drink {powder} g VERY AQUAFABA Pulver + {water} ml Wasser, vor dem Service angerührt und gekühlt.',
      steps: [
        { step: 'Aufbauen', reference: '{vodka} ml Wodka, {bergamot_liqueur} ml Bergamottelikör, {lemon_juice} ml Zitrone, {raspberry_syrup} ml Himbeersirup, {orange_blossom} Tropfen Orangenblütenwasser, {dose} ml VERY AQUAFABA, gekühlt' },
        { step: 'Dry Shake', reference: 'Kräftig, ohne Eis: Hier entsteht der Schaum' },
        { step: 'Mit Eis', reference: '{ice} Eiswürfel, noch einmal shaken, um zu kühlen' },
        { step: 'Abseihen', reference: 'In eine Coupe: eine helle Krone auf einem rosa Drink' },
        { step: 'Garnieren', reference: 'Ein Minzzweig auf die Krone' },
      ],
      checks: [
        { see: 'Rosa scheint durch die Krone', check: 'Das Eis kam vor dem Dry Shake in den Shaker', fix: 'Erst Dry Shake, dann Eis' },
        { see: 'Schlaffer Schaum', check: 'Aquafaba bei Raumtemperatur', fix: 'Bis zum Shaken kalt halten' },
        { see: 'Das Orangenblütenwasser übertönt alles', check: 'Es kamen mehr als {orange_blossom} Tropfen hinein', fix: 'Mit einer Pipettenflasche abmessen' },
        { see: 'Die Minze sinkt vor dem Tisch ein', check: 'Der Drink stand zu lange am Pass', fix: 'Auf Bestellung shaken und sofort servieren' },
      ],
      sections: [
        { id: 'use', title: 'Wenn das Rosa durchscheint', html: `<p>Legen Sie das Blatt neben die Coupes, mit der <a href="{guide_href}">Methode für La Rosée</a>. Scheint das Rosa durch die Krone, verfolgen Sie das Problem mit dem Blatt rückwärts über das Abseihen, den zweiten Shake und den Dry Shake, bevor Sie das Rezept ändern.</p>` },
        { id: 'before', title: 'Die Station vor der ersten Bestellung einrichten', html: `<ul>
<li><strong>Basis gebatcht.</strong> Wodka, Bergamottelikör, Zitrone, Himbeersirup und Orangenblütenwasser in einer Flasche; das Aquafaba bleibt getrennt.</li>
<li><strong>Pipettenflasche.</strong> Kommt das Orangenblütenwasser pro Drink hinein, steht es in einer Pipettenflasche auf der Station.</li>
<li><strong>Aquafaba kalt.</strong> Geöffnet bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen.</li>
<li><strong>Coupes und Minze bereit.</strong> Der Drink geht direkt vom Abseihen zur Garnitur.</li>
</ul>` },
        { id: 'signs', title: 'Was Sie in der Coupe sehen sollten', html: `<p>Nach dem Dry Shake ist die Flüssigkeit hellrosa und dick. Nach dem Shake mit Eis beschlägt der Shaker. In der Coupe setzt sich eine helle Krone auf den rosa Drink, mit einer klaren Linie dazwischen, und die Minze liegt obenauf, ohne zu sinken. Der <a href="{calculator_href}">Mengenrechner für La Rosée</a> berechnet den Batch, Tropfen inklusive.</p>` },
      ],
      faq: [
        { q: 'Warum scheint das Rosa durch den Schaum?', a: 'Die Krone ist dünn. Meist war das Eis vor dem Dry Shake im Shaker; warmes Aquafaba gibt ebenfalls einen schlaffen Schaum.' },
        { q: 'Darf das Orangenblütenwasser in den Batch?', a: 'Ja, mit {orange_blossom} Tropfen pro Drink, zusammen mit Wodka, Bergamottelikör, Zitrone und Himbeersirup. Das Aquafaba bleibt aus dem Batch.' },
        { q: 'Funktioniert das Pulver für La Rosée?', a: 'Ja. Rühren Sie vor dem Service {powder} g Pulver mit {water} ml Wasser pro Drink an und halten Sie es kalt.' },
        { q: 'Welches Glas und welche Garnitur gehören zu La Rosée?', a: 'Eine Coupe und ein Minzzweig auf der Krone.' },
      ],
    },
    'the-sunset': {
      title: 'The Sunset mit Aquafaba: Arbeitsblatt | VERY AQUAFABA',
      h1: 'The Sunset mit Aquafaba Schritt für Schritt: das Arbeitsblatt',
      description: 'The Sunset auf einem Blatt: aufbauen, Dry Shake, Shake mit Eis, ins Highball abseihen, mit Ginger Beer auffüllen, garnieren, mit Kontrollen für die Krone.',
      lead: `The Sunset hat eine entscheidende Übergabe: Der Drink verlässt den Shaker, dann übernimmt das Ginger Beer im Glas. Gerät diese Reihenfolge durcheinander, leidet meist zuerst die Schaumkrone. Dieses Blatt hält alle sechs Schritte in der richtigen Reihenfolge und gibt Ihnen die Kontrollen für den Fall, dass der Drink flach, weich oder mit einer im Ginger Beer versinkenden Krone herauskommt.`,
      powderNote: 'Pulver: für einen Drink {powder} g VERY AQUAFABA Pulver + {water} ml Wasser, vor dem Service angerührt und gekühlt.',
      steps: [
        { step: 'Aufbauen', reference: '{rum} ml Rum, {amaretto} ml Amaretto, {lemon_juice} ml Zitrone, {vanilla_tonka_syrup} ml Vanille-Tonka-Sirup, {dose} ml VERY AQUAFABA, gekühlt' },
        { step: 'Dry Shake', reference: 'Kräftig, ohne Eis, bis die Flüssigkeit hell und dick ist' },
        { step: 'Mit Eis', reference: '{ice} Eiswürfel, ein zweiter Shake, bis der Shaker beschlägt' },
        { step: 'Abseihen', reference: 'In ein Highball, die Krone schon obenauf' },
        { step: 'Auffüllen', reference: 'Ginger Beer ins Glas, nie in den Shaker' },
        { step: 'Garnieren', reference: 'Ein paar getrocknete Blüten auf die Krone streuen' },
      ],
      checks: [
        { see: 'Schaum schon im Highball dünn', check: 'Das Eis kam zuerst', fix: 'Erst ohne Eis shaken, dann mit Eis' },
        { see: 'Die Krone sinkt, wenn das Ginger Beer kommt', check: 'Ginger Beer wurde mitgeshakt', fix: 'Fürs Glas aufheben, nach dem Abseihen' },
        { see: 'Der Schaum steigt langsam und bleibt weich', check: 'Aquafaba stand außerhalb des Kühlschranks', fix: 'Bis zum Shaken kalt halten' },
        { see: 'Die Blüten sinken, bis der Drink beim Gast ist', check: 'Stand zu lange am Pass', fix: 'Auffüllen und sofort rausschicken' },
      ],
      sections: [
        { id: 'use', title: 'Wenn der Sunset seine Krone verliert', html: `<p>Legen Sie das Blatt an die Highball-Station, mit der <a href="{guide_href}">Methode für The Sunset</a> im Barbuch. Kommt ein Sunset ohne Krone beim Gast an, prüfen Sie drei Dinge der Reihe nach: ob der Dry Shake vor dem Eis kam, ob das Aquafaba gekühlt war und ob das Ginger Beer aus dem Shaker blieb.</p>` },
        { id: 'before', title: 'Die Station vor der Öffnung', html: `<ul>
<li><strong>Eine Flasche Basis.</strong> Rum, Amaretto, Zitrone und Vanille-Tonka-Sirup, zusammen gebatcht.</li>
<li><strong>Zwei Dinge getrennt.</strong> Das Aquafaba im Kühlschrank und das Ginger Beer gekühlt. Geöffnetes Aquafaba bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen.</li>
<li><strong>Gläser und Garnitur.</strong> Highballs und die getrockneten Blüten in Reichweite des Abseihens.</li>
</ul>` },
        { id: 'signs', title: 'Was Sie sehen sollten, bevor das Ginger Beer kommt', html: `<p>Hell und dick nach dem Dry Shake, ein beschlagener Shaker nach dem zweiten, und eine weiße Krone auf dem Drink, sobald er abgeseiht ist. Dann kommt das Ginger Beer von unten, die Krone hebt sich mit, und die Blüten kommen obendrauf. Für einen ganzen Abend berechnet der <a href="{calculator_href}">Mengenrechner für The Sunset</a> die Basis für jede Zahl an Drinks.</p>` },
      ],
      faq: [
        { q: 'Darf das Ginger Beer in den Shaker?', a: 'Nein. Es kommt nach dem Abseihen ins Highball, wenn die Krone steht.' },
        { q: 'Wie sollte The Sunset vor dem Ginger Beer aussehen?', a: 'Ins Highball abgeseiht, mit einer weißen Krone obenauf. Das Ginger Beer verlängert den Drink dann von unten.' },
        { q: 'Funktioniert das Pulver für The Sunset?', a: 'Ja: {powder} g Pulver in {water} ml Wasser pro Drink, vor dem Service angerührt und gekühlt, dann dieselben sechs Schritte.' },
        { q: 'Welche Teile von The Sunset kann ich batchen?', a: 'Rum, Amaretto, Zitrone und Vanille-Tonka-Sirup. Das Aquafaba kommt beim Shaken dazu, das Ginger Beer im Glas.' },
      ],
    },
  },
};
