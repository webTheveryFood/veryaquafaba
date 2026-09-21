// DE application guides
export default {
  "cocktails": {
    "lead": "Aquafaba gibt Ihren Sours eine stabile, seidige Schaumkrone, ganz ohne rohes Eiweiß hinter der Bar. Dafür genügen {dose} g pro Drink und zweimal Shaken. Hier finden Sie die Methode, Hilfe für den Fall, dass der Schaum zusammenfällt, und eine Entscheidungshilfe zwischen flüssig und Pulver, passend zu Ihrem Barbetrieb.",
    "glance": {
      "note": null,
      "groups": [
        {
          "title": "Flüssig",
          "items": [
            {
              "value": "{dose} g",
              "label": "pro Cocktail"
            },
            {
              "value": "{batches_1l} Cocktails",
              "label": "aus einem 1 L Tetrapak"
            }
          ]
        },
        {
          "title": "Pulver",
          "items": [
            {
              "value": "{powder_dose} g",
              "label": "pro Cocktail, mit Wasser angerührt"
            },
            {
              "value": "{batches_200g} Cocktails",
              "label": "aus einem 200 g Beutel"
            }
          ]
        }
      ]
    },
    "sections": [
      {
        "id": "how",
        "title": "So shaken Sie einen Sour mit Aquafaba",
        "html": "<p>An Ihrem Rezept ändert sich nur eine Zutat: Aquafaba ersetzt das Eiweiß.</p>\n<ol>\n<li>Ohne Eis in den Shaker geben: 50 ml Whiskey, 25 ml frischen Zitronensaft, 20 ml Zuckersirup und {dose} g gekühltes Aquafaba.</li>\n<li>Dry Shake: {dry_shake} Sekunden kräftig schütteln. Hier entsteht der Schaum.</li>\n<li>Eis zugeben und weitere {wet_shake} Sekunden shaken, um den Drink zu kühlen und zu verdünnen.</li>\n<li>Fein in eine vorgekühlte Coupette abseihen. Die Schaumkrone ist fest genug, um ein paar Tropfen Bitters zu tragen.</li>\n</ol>\n<p>Viel los im Service? Bereiten Sie Whiskey, Zitrone und Sirup als Batch vor. Das Aquafaba kommt erst beim Shaken dazu, nie in den Batch.</p>\n<p><a href=\"{recipe_href}\">Zum vollständigen Whiskey-Sour-Rezept</a></p>"
      },
      {
        "id": "decide",
        "title": "Flüssig oder Pulver? Entscheidend ist, wie viele Sours Sie servieren",
        "html": "<p>Ungeöffnet stehen beide Formate mindestens {unopened_months} Monate bei Raumtemperatur im Regal. Die Wahl beginnt an dem Tag, an dem Sie die Packung öffnen. Geöffnetes flüssiges Aquafaba gehört in den Kühlschrank und wird innerhalb von {opened_days} Tagen verbraucht. Geöffnetes Pulver verdirbt nicht, es muss nur trocken und verschlossen bleiben.</p>\n<table class=\"va-guide-grid\">\n<thead><tr><th scope=\"col\">Ihr Betrieb</th><th scope=\"col\">Empfehlung</th><th scope=\"col\">Warum</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Ihr Betrieb\">Sours stehen auf der Karte und werden in jedem Service bestellt</td><td data-label=\"Empfehlung\">Flüssig, 1 L Tetrapak</td><td data-label=\"Warum\">{batches_1l} Drinks pro Packung, innerhalb von {opened_days} Tagen problemlos verbraucht</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Ein paar Sours pro Woche</td><td data-label=\"Empfehlung\">Pulver, 200 g Beutel</td><td data-label=\"Warum\">Kein Zeitdruck nach dem Öffnen, Sie rühren nur an, was der Abend braucht</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Kein Platz im Kühlschrank</td><td data-label=\"Empfehlung\">Pulver</td><td data-label=\"Warum\">Lagert trocken im Regal</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Events und Catering außer Haus</td><td data-label=\"Empfehlung\">Pulver</td><td data-label=\"Warum\">Reist trocken, ohne Kühlkette</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Volle Wochenenden, ruhige Wochentage</td><td data-label=\"Empfehlung\">Beides</td><td data-label=\"Warum\">Flüssig für die Stoßzeiten, Pulver für den Rest</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Hotelgruppe, abgefüllte Sour-Basen, Getränkelinie</td><td data-label=\"Empfehlung\">Flüssig, 10 L Bag-in-Box oder 1 T IBC</td><td data-label=\"Warum\">Durchgehender Verbrauch, die Frist nach dem Öffnen spielt keine Rolle</td></tr>\n</tbody>\n</table>\n<p>Sie bevorzugen flüssig, schaffen eine Packung aber nicht rechtzeitig? Frieren Sie es in kleinen Portionen ein, tauen Sie es im Kühlschrank auf und rühren Sie es vor Gebrauch um.</p>"
      },
      {
        "id": "formats",
        "title": "So arbeiten Sie mit beiden Formaten",
        "html": "<div class=\"va-guide-cols\">\n<div>\n<h3>Flüssig</h3>\n<ul>\n<li>Gebrauchsfertig, direkt aus dem Kühlschrank in den Shaker.</li>\n<li>Zwischen den Services verschließen und zurück in den Kühlschrank stellen.</li>\n<li>Entsorgen Sie es, wenn es unangenehm riecht, Bläschen bildet oder sich abgesetzt hat.</li>\n</ul>\n</div>\n<div>\n<h3>Pulver</h3>\n<ul>\n<li>{white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba. {white_powder} g Pulver ersetzen 1 Eiweiß.</li>\n<li>Für einen Drink: {powder_dose} g Pulver + {water_dose} ml Wasser.</li>\n<li>Vor dem Service anrühren und kalt stellen. Kaltes Aquafaba schäumt schneller und hält länger.</li>\n</ul>\n</div>\n</div>"
      },
      {
        "id": "fix",
        "title": "Wenn der Schaum zusammenfällt",
        "html": "<table class=\"va-guide-grid va-guide-grid--fix\">\n<thead><tr><th scope=\"col\">Was Sie sehen</th><th scope=\"col\">Ursache</th><th scope=\"col\">Lösung</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Was Sie sehen\">Dünne Schaumkrone</td><td data-label=\"Ursache\">Das Eis war von Anfang an im Shaker</td><td data-label=\"Lösung\">Erst Dry Shake, dann Eis</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Träger, schlaffer Schaum</td><td data-label=\"Ursache\">Aquafaba hat Raumtemperatur</td><td data-label=\"Lösung\">Bis zum Shaken kalt stellen</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Mitten im Service kein Volumen mehr</td><td data-label=\"Ursache\">Das Aquafaba kam in den vorbereiteten Batch</td><td data-label=\"Lösung\">Nur die Basis vorbereiten, Aquafaba pro Drink zugeben</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Der Schaum fällt zusammen, bevor der Drink beim Gast ist</td><td data-label=\"Ursache\">Der fertige Drink musste warten</td><td data-label=\"Lösung\">Auf Bestellung shaken und sofort servieren</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Schwankt von Drink zu Drink</td><td data-label=\"Ursache\">Nach Augenmaß eingegossen</td><td data-label=\"Lösung\">Jedes Mal {dose} g abwiegen oder mit dem Jigger abmessen</td></tr>\n</tbody>\n</table>"
      }
    ],
    "faq": [
      {
        "q": "Wie viel Aquafaba brauche ich pro Cocktail?",
        "a": "{dose} g gekühltes Aquafaba pro Drink, anstelle des Eiweißes. Ein 1 L Tetrapak reicht für {batches_1l} Cocktails, ein 200 g Beutel Pulver für {batches_200g}."
      },
      {
        "q": "Flüssig oder Pulver: Was passt zu meiner Bar?",
        "a": "Zählen Sie Ihre Sours. Ist ein geöffnetes 1 L Tetrapak innerhalb von {opened_days} Tagen leer, ist flüssig die unkomplizierte Wahl, denn es kommt direkt in den Shaker. Wenn nicht, sind Sie mit Pulver auf der sicheren Seite: Es verdirbt nicht, wenn der Beutel einmal geöffnet ist."
      },
      {
        "q": "Wie lange hält eine geöffnete Packung hinter der Bar?",
        "a": "Geöffnetes flüssiges Aquafaba steht verschlossen im Kühlschrank bei höchstens {opened_temp} °C und wird innerhalb von {opened_days} Tagen verbraucht. Geöffnetes Pulver hält sich, solange der Beutel trocken und verschlossen bleibt. Ungeöffnet sind beide Formate mindestens {unopened_months} Monate bei Raumtemperatur haltbar."
      },
      {
        "q": "Kann eine Bar beide Formate führen?",
        "a": "Ja, manche tun das. Flüssig deckt die Stoßzeiten am Wochenende ab, Pulver die ruhigen Wochentage und Events außer Haus, denn es reist trocken und braucht keinen Kühlschrank."
      },
      {
        "q": "Wie rühre ich das Pulver für den Service an?",
        "a": "Dosieren Sie nach Anzahl der Eiweiße. Für einen Drink sind das {powder_dose} g Pulver und {water_dose} ml Wasser. Rühren Sie es vorab an und stellen Sie es bis zum Service kalt. Die Faustregel pro Eiweiß: {white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba. {white_powder} g Pulver ersetzen 1 Eiweiß."
      },
      {
        "q": "Verändert Aquafaba den Geschmack des Drinks?",
        "a": "Nein. Es trägt den Schaum und sorgt für das weiche Mundgefühl. Den Geschmack bestimmen weiterhin Ihr Whiskey, die Zitrone und der Sirup."
      },
      {
        "q": "Ist es sicherer als Eiweiß?",
        "a": "Ein Sour wird nie erhitzt, deshalb ist rohes Eiweiß hinter der Bar ein bekanntes Thema. Aquafaba ist pflanzlich und eifrei, damit eignet sich der Drink auch für vegane Gäste."
      },
      {
        "q": "Schäumt das Pulver genauso gut wie das flüssige Aquafaba?",
        "a": "Ja. Mit Wasser angerührt und gekühlt, baut es im Dry Shake die gleiche Schaumkrone auf. Die Reihenfolge beim Shaken und die Temperatur zählen mehr als die Packung, aus der es kommt."
      },
      {
        "q": "Wo bekomme ich Spezifikationen für ein Getränkekonzept?",
        "a": "Fordern Sie das technische Datenblatt über unser [Kontaktformular]({contact_href}) an. Für Mengen in Bag-in-Box oder IBC nennen Sie uns Ihre Ausschankmenge und Ihr monatliches Volumen, wir melden uns bei Ihnen."
      }
    ]
  },
  "meringue": {
    "lead": "Aus Aquafaba lassen sich knusprige, glänzende Baisers schlagen, ganz ohne Eiweiß. Sie brauchen nur zwei Zutaten zu gleichen Teilen: {dose} g Aquafaba und {sugar} g Zucker. Dieser Leitfaden führt Sie Schritt für Schritt durch die Zubereitung, zeigt, was zu tun ist, wenn ein Ansatz misslingt, und hilft Ihnen bei der Wahl zwischen flüssig und Pulver.",
    "glance": {
      "note": "Ein Ansatz ergibt {yield}.",
      "groups": [
        {
          "title": "Flüssig",
          "items": [
            {
              "value": "{dose} g",
              "label": "pro Ansatz, ersetzt {eggs} Eiweiße"
            },
            {
              "value": "{batches_1l} Ansätze",
              "label": "aus einem 1 L Tetrapak"
            }
          ]
        },
        {
          "title": "Pulver",
          "items": [
            {
              "value": "{powder_dose} g",
              "label": "pro Ansatz, mit Wasser angerührt"
            },
            {
              "value": "{batches_200g} Ansätze",
              "label": "aus einem 200 g Beutel"
            }
          ]
        }
      ]
    },
    "sections": [
      {
        "id": "how",
        "title": "So gelingt Baiser mit Aquafaba",
        "html": "<p>Das Rezept ist einfach, aber auf die Reihenfolge kommt es an. Gehen Sie Schritt für Schritt vor und lassen Sie sich beim Zucker Zeit.</p>\n<ol>\n<li>Aquafaba auf {chill} °C kühlen. Kalt lässt es sich schneller aufschlagen und bindet mehr Luft.</li>\n<li>{dose} g in einer sauberen, fettfreien Schüssel auf hoher Stufe aufschlagen, bis weiche Spitzen entstehen, etwa {whip} Minuten.</li>\n<li>Optional zur Stabilisierung, während des Aufschlagens: 2 g Weinstein oder 1 g Zitronensäure.</li>\n<li>Auf mittlere Stufe zurückschalten und {sugar} g feinen Zucker löffelweise zugeben. Jeder Löffel soll sich auflösen, bevor der nächste folgt. Dann wieder auf hoher Stufe schlagen, bis die Masse glänzt und feste Spitzen bildet.</li>\n<li>Sofort 3 bis 4 cm große Formen aufspritzen und bei {bake} °C ohne Umluft {bake_time} Stunden trocknen, bis sie ganz durchgetrocknet sind.</li>\n<li>Auf dem Blech vollständig auskühlen lassen. Luftdicht bei Raumtemperatur lagern, am besten mit einem Trockenmittel.</li>\n</ol>\n<p>Sie produzieren im industriellen Maßstab? Halten Sie die Aquafaba-Konzentration konstant bei {concentration} g/ml, damit sich der Schaum bei jedem Ansatz gleich verhält.</p>\n<p><a href=\"{recipe_href}\">Zum vollständigen Baiser-Rezept</a></p>"
      },
      {
        "id": "decide",
        "title": "Flüssig oder Pulver? Entscheidend ist, wie oft Sie Baiser backen",
        "html": "<p>Welches Format passt, hängt davon ab, wie oft Sie Baiser backen. Ungeöffnet halten sich beide Formate mindestens {unopened_months} Monate bei Raumtemperatur. Nach dem Öffnen gehört das flüssige Aquafaba in den Kühlschrank, das Pulver muss nur trocken und verschlossen bleiben. Ein 1 L Tetrapak reicht für {batches_1l} Ansätze Baiser. Wenn Sie so viele in den {opened_days} Tagen nach dem Öffnen nicht backen, ist Pulver die bessere Wahl.</p>\n<table class=\"va-guide-grid\">\n<thead><tr><th scope=\"col\">Ihr Betrieb</th><th scope=\"col\">Empfehlung</th><th scope=\"col\">Warum</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Ihr Betrieb\">Patisserie, die fast täglich Baiser aufspritzt</td><td data-label=\"Empfehlung\">Flüssig, 1 L Tetrapak</td><td data-label=\"Warum\">{batches_1l} Ansätze pro Packung, innerhalb von {opened_days} Tagen problemlos verbraucht</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Restaurant mit Baiser als saisonalem Dessert</td><td data-label=\"Empfehlung\">Pulver, 200 g Beutel</td><td data-label=\"Warum\">{batches_200g} Ansätze pro Beutel und kein Zeitdruck nach dem Öffnen</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Kein Platz mehr in der Kühlung</td><td data-label=\"Empfehlung\">Pulver</td><td data-label=\"Warum\">Ihre Baisers lagern ohnehin trocken, der Beutel steht gleich daneben</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Sie möchten eine fest eingestellte Konzentration</td><td data-label=\"Empfehlung\">Flüssig</td><td data-label=\"Warum\">Es kommt mit konstanter Dichte, nichts muss angerührt werden</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Linie, die jeden Arbeitstag Baiser trocknet</td><td data-label=\"Empfehlung\">Flüssig, 10 L Bag-in-Box oder 1 T IBC</td><td data-label=\"Warum\">Durchgehender Verbrauch, kein Anrühren nötig</td></tr>\n</tbody>\n</table>\n<p>Sie bevorzugen flüssig, backen aber unregelmäßig? Frieren Sie es portionsweise ein, tauen Sie es über Nacht im Kühlschrank auf und rühren Sie es vor dem Aufschlagen glatt.</p>"
      },
      {
        "id": "formats",
        "title": "So arbeiten Sie mit beiden Formaten",
        "html": "<div class=\"va-guide-cols\">\n<div>\n<h3>Flüssig</h3>\n<ul>\n<li>Kommt direkt aus dem Kühlschrank in die Schüssel und hat schon die richtige Temperatur zum Aufschlagen.</li>\n<li>Eine Packung ergibt {batches_1l} Ansätze. Öffnen Sie sie am besten zu Beginn mehrerer Backtage in Folge.</li>\n<li>Entsorgen Sie es, wenn es unangenehm riecht, Bläschen bildet oder sich abgesetzt hat.</li>\n</ul>\n</div>\n<div>\n<h3>Pulver</h3>\n<ul>\n<li>{white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba. {white_powder} g Pulver ersetzen 1 Eiweiß.</li>\n<li>Für einen Ansatz Baiser: {powder_dose} g Pulver + {water_dose} ml Wasser.</li>\n<li>Vor dem Aufschlagen auf {chill} °C kühlen. Warmes Aquafaba schäumt langsamer und schwächer.</li>\n</ul>\n</div>\n</div>"
      },
      {
        "id": "fix",
        "title": "Wenn das Baiser nicht gelingt",
        "html": "<table class=\"va-guide-grid va-guide-grid--fix\">\n<thead><tr><th scope=\"col\">Was Sie sehen</th><th scope=\"col\">Ursache</th><th scope=\"col\">Lösung</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Was Sie sehen\">Der Schaum erreicht nie sein volles Volumen</td><td data-label=\"Ursache\">Fett an Schüssel oder Schneebesen</td><td data-label=\"Lösung\">Alles gründlich entfetten, bevor Sie beginnen</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Der Schaum baut sich langsam auf und bleibt schwach</td><td data-label=\"Ursache\">Aquafaba zu warm</td><td data-label=\"Lösung\">Vorher auf {chill} °C kühlen</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Sirupperlen auf den gelagerten Baisers</td><td data-label=\"Ursache\">Der Zucker kam schneller dazu, als er sich lösen konnte</td><td data-label=\"Lösung\">Löffelweise zugeben, auf mittlerer Stufe</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Volumen geht vor dem Aufspritzen verloren</td><td data-label=\"Ursache\">Die Masse stand zu lange</td><td data-label=\"Lösung\">Direkt nach den festen Spitzen aufspritzen und trocknen</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Die Baisers werden weich und klebrig</td><td data-label=\"Ursache\">Baiser zieht Feuchtigkeit aus der Luft</td><td data-label=\"Lösung\">Luftdicht und trocken lagern, mit Trockenmittel</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Ergebnisse schwanken von Ansatz zu Ansatz</td><td data-label=\"Ursache\">Die Aquafaba-Konzentration schwankt</td><td data-label=\"Lösung\">Bei industriellen Ansätzen {concentration} g/ml einhalten</td></tr>\n</tbody>\n</table>"
      }
    ],
    "faq": [
      {
        "q": "Wie viel Aquafaba brauche ich für Baiser?",
        "a": "{dose} g gekühltes Aquafaba und {sugar} g Zucker ergeben {yield}. Das ersetzt {eggs} Eiweiße. Ein 1 L Tetrapak reicht für {batches_1l} Ansätze, ein 200 g Beutel Pulver für {batches_200g}."
      },
      {
        "q": "Flüssig oder Pulver: Was passt zu meiner Patisserie?",
        "a": "Schauen Sie auf Ihre Ofenplanung. Wenn Sie genug Baiser backen, um ein geöffnetes 1 L Tetrapak innerhalb von {opened_days} Tagen aufzubrauchen, ist flüssig die unkomplizierte Wahl. Steht Baiser nur gelegentlich auf dem Plan, sind Sie mit Pulver auf der sicheren Seite, denn der geöffnete Beutel verdirbt nicht."
      },
      {
        "q": "Wie lange hält eine geöffnete Packung?",
        "a": "Geöffnetes flüssiges Aquafaba wird verschlossen bei höchstens {opened_temp} °C gelagert und innerhalb von {opened_days} Tagen verbraucht. Geöffnetes Pulver hält sich, solange der Beutel trocken und verschlossen bleibt. Ungeöffnet sind beide Formate mindestens {unopened_months} Monate bei Raumtemperatur haltbar."
      },
      {
        "q": "Kann ich flüssiges Aquafaba einfrieren, wenn ich nur unregelmäßig Baiser backe?",
        "a": "Ja. Portionieren Sie es, frieren Sie es bis zu {freeze_months} Monate ein, tauen Sie es über Nacht im Kühlschrank auf und rühren Sie es vor dem Aufschlagen glatt. Aufgetautes Aquafaba lässt sich für Baiser wie frisches aufschlagen, darf aber nicht erneut eingefroren werden."
      },
      {
        "q": "Warum tritt bei meinen Baisers in der Dose Sirup aus?",
        "a": "Der Zucker hat sich nicht vollständig gelöst. Schalten Sie auf mittlere Stufe zurück, geben Sie den Zucker löffelweise zu und warten Sie, bis jeder Löffel verschwunden ist. Danach wieder auf hoher Stufe schlagen, bis die Masse glänzt und fest ist."
      },
      {
        "q": "Brauche ich mit Aquafaba noch Weinstein oder Zitronensäure?",
        "a": "Das ist optional, festigt den Schaum aber, bevor der Zucker dazukommt. Geben Sie es bei laufender Maschine zu, sobald weiche Spitzen entstanden sind, nicht gleich am Anfang."
      },
      {
        "q": "Wie rühre ich das Pulver für einen Ansatz an?",
        "a": "Dosieren Sie nach Anzahl der Eiweiße. Für einen Ansatz sind das {powder_dose} g Pulver und {water_dose} ml Wasser. Kühlen Sie die Mischung auf {chill} °C, bevor sie in die Maschine kommt. Die Faustregel pro Eiweiß: {white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba. {white_powder} g Pulver ersetzen 1 Eiweiß."
      },
      {
        "q": "Wo bekomme ich Spezifikationen für die Produktion?",
        "a": "Fordern Sie das technische Datenblatt über unser [Kontaktformular]({contact_href}) an. Für Mengen in Bag-in-Box oder IBC nennen Sie uns Ihre Baiser-Mengen und Ihren Produktionsrhythmus, wir melden uns bei Ihnen."
      }
    ]
  },
  "chocolate-mousse": {
    "lead": "In dieser Mousse ersetzt aufgeschlagenes Aquafaba sowohl das Eiweiß als auch die Sahne. Das Ergebnis: eine leichtere Textur und ein reiner Schokoladengeschmack. Ein Ansatz braucht {dose} g Aquafaba, und ein Schritt entscheidet über alles: die Schokolade auf {fold_temp} °C abkühlen lassen, bevor Sie sie unterheben. Hier finden Sie die Methode, Hilfe für den Fall, dass die Mousse zusammenfällt, und die Antwort auf die Frage, ob flüssig oder Pulver zu Ihrer Dessertkarte passt.",
    "glance": {
      "note": "Ein Ansatz ergibt {yield}.",
      "groups": [
        {
          "title": "Flüssig",
          "items": [
            {
              "value": "{dose} g",
              "label": "pro Ansatz, ersetzt {eggs} Eiweiße"
            },
            {
              "value": "{batches_1l} Ansätze",
              "label": "aus einem 1 L Tetrapak"
            }
          ]
        },
        {
          "title": "Pulver",
          "items": [
            {
              "value": "{powder_dose} g",
              "label": "pro Ansatz, mit Wasser angerührt"
            },
            {
              "value": "{batches_200g} Ansätze",
              "label": "aus einem 200 g Beutel"
            }
          ]
        }
      ]
    },
    "sections": [
      {
        "id": "how",
        "title": "So gelingt Schokoladenmousse mit Aquafaba",
        "html": "<p>Das aufgeschlagene Aquafaba ersetzt Eiweiß und Sahne zugleich. Die gesamte Struktur kommt aus dem Schaum, deshalb entscheiden Temperatur und Unterheben über das Ergebnis.</p>\n<ol>\n<li>{chocolate} g dunkle Kuvertüre auf 45 bis 50 °C schmelzen, dann auf {fold_temp} °C abkühlen lassen.</li>\n<li>{dose} g gekühltes Aquafaba in einer sauberen, fettfreien Schüssel auf hoher Stufe aufschlagen, bis weiche Spitzen entstehen, etwa {whip} Minuten. Optional jetzt zur Stabilisierung: 2 g Weinstein oder 1 g Zitronensäure.</li>\n<li>{sugar} g feinen Zucker nach und nach zugeben und weiterschlagen, bis glänzende, feste Spitzen entstehen. Die Baisermasse soll dicht und stabil sein.</li>\n<li>Die abgekühlte Schokolade von Hand mit einem Spatel unterheben, zügig und behutsam. Aufhören, sobald die Masse homogen ist.</li>\n<li>Sofort in Gläser oder Schälchen spritzen oder löffeln und mindestens {set_time} Stunden kühlen.</li>\n</ol>\n<p>Große Ansätze? Emulgieren Sie zuerst einen Teil der Schokolade mit etwas Aquafaba und heben Sie dann den restlichen Schaum unter. So bleiben auch große Mengen homogen.</p>\n<p><a href=\"{recipe_href}\">Zum vollständigen Schokoladenmousse-Rezept</a></p>"
      },
      {
        "id": "decide",
        "title": "Flüssig oder Pulver? Entscheidend ist, wie oft Mousse auf der Karte steht",
        "html": "<p>Mousse steht ohnehin in der Kühlung, eine geöffnete Packung flüssiges Aquafaba dort zu lagern, ist also kein Problem. Entscheidend ist, wie schnell Sie sie verbrauchen. Ungeöffnet halten sich beide Formate mindestens {unopened_months} Monate, und geöffnetes Pulver verdirbt nicht. Ein 1 L Tetrapak reicht für {batches_1l} Ansätze Mousse. Wenn Sie so viele in den {opened_days} Tagen nach dem Öffnen nicht herstellen, ist Pulver die bessere Wahl.</p>\n<table class=\"va-guide-grid\">\n<thead><tr><th scope=\"col\">Ihr Betrieb</th><th scope=\"col\">Empfehlung</th><th scope=\"col\">Warum</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Ihr Betrieb\">Patisserie, die jeden Morgen Mousse-Becher für die Theke aufspritzt</td><td data-label=\"Empfehlung\">Flüssig, 1 L Tetrapak</td><td data-label=\"Warum\">{batches_1l} Ansätze pro Packung, innerhalb von {opened_days} Tagen problemlos geleert</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Restaurant mit Mousse als wechselndem Dessert, jeweils nur ein paar Gläser</td><td data-label=\"Empfehlung\">Pulver, 200 g Beutel</td><td data-label=\"Warum\">{batches_200g} Ansätze pro Beutel, und er wartet von einer Karte zur nächsten</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Knappe Kühlung, viel Platz im Trockenlager</td><td data-label=\"Empfehlung\">Pulver</td><td data-label=\"Warum\">Die Kühlregale bleiben frei für die frisch abgefüllten Portionen</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Sie möchten Aquafaba, das sofort aufschlagbereit ist</td><td data-label=\"Empfehlung\">Flüssig</td><td data-label=\"Warum\">Schon kalt, direkt in die Maschine, ohne Anrühren</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Zentralküche, in der jede Filiale selbst aufschlägt</td><td data-label=\"Empfehlung\">Pulver</td><td data-label=\"Warum\">Der Beutel übersteht vor Ort auch eine ruhige Woche</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Linie, die vorportionierte Becher für den Handel abfüllt</td><td data-label=\"Empfehlung\">Flüssig, 10 L Bag-in-Box oder 1 T IBC</td><td data-label=\"Warum\">Durchgehende Entnahme, und die Schokoladen-Voremulsion nutzt dasselbe flüssige Aquafaba</td></tr>\n</tbody>\n</table>\n<p>Sie bevorzugen flüssig, aber Ihre Desserts wechseln unregelmäßig? Frieren Sie es portionsweise ein, tauen Sie es über Nacht im Kühlschrank auf und rühren Sie es vor dem Aufschlagen glatt.</p>"
      },
      {
        "id": "formats",
        "title": "So arbeiten Sie mit beiden Formaten",
        "html": "<div class=\"va-guide-cols\">\n<div>\n<h3>Flüssig</h3>\n<ul>\n<li>Kalt abwiegen, direkt aus dem Kühlschrank in die Maschine.</li>\n<li>Steht im selben Kühlregal wie die Becher, die gerade fest werden. Notieren Sie das Öffnungsdatum auf der Packung.</li>\n<li>Entsorgen Sie es, wenn es unangenehm riecht, Bläschen bildet oder sich abgesetzt hat.</li>\n</ul>\n</div>\n<div>\n<h3>Pulver</h3>\n<ul>\n<li>{white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba. {white_powder} g Pulver ersetzen 1 Eiweiß.</li>\n<li>Für einen Ansatz Mousse: {powder_dose} g Pulver + {water_dose} ml Wasser.</li>\n<li>Vorab anrühren und kalt stellen. Warmes Aquafaba bringt weniger Volumen.</li>\n</ul>\n</div>\n</div>"
      },
      {
        "id": "fix",
        "title": "Wenn die Mousse nicht gelingt",
        "html": "<table class=\"va-guide-grid va-guide-grid--fix\">\n<thead><tr><th scope=\"col\">Was Sie sehen</th><th scope=\"col\">Ursache</th><th scope=\"col\">Lösung</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Was Sie sehen\">Die Mousse fällt zusammen, sobald die Schokolade dazukommt</td><td data-label=\"Ursache\">Schokolade über {fold_temp} °C hat den Schaum aufgelöst</td><td data-label=\"Lösung\">Vor dem Unterheben auf {fold_temp} °C oder darunter abkühlen</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Dichte, schwere Mousse</td><td data-label=\"Ursache\">Zu langes Unterheben hat die Luft herausgedrückt</td><td data-label=\"Lösung\">Nur so lange unterheben, bis die Masse homogen ist</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Der Schaum baut sich nicht auf</td><td data-label=\"Ursache\">Fett in der Schüssel, oder der Zucker kam vor den weichen Spitzen dazu</td><td data-label=\"Lösung\">Saubere Schüssel, Zucker erst zugeben, wenn weiche Spitzen entstanden sind</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Volumen geht vor dem Unterheben verloren</td><td data-label=\"Ursache\">Der Schaum stand und wartete auf die Schokolade</td><td data-label=\"Lösung\">Die Schokolade abgekühlt bereitstellen, bevor Sie aufschlagen</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Schwacher Schaum, der sich langsam aufbaut</td><td data-label=\"Ursache\">Aquafaba zu warm</td><td data-label=\"Lösung\">Gekühlt aufschlagen</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Ungleichmäßiger Schaum bei eingefrorener Ware</td><td data-label=\"Ursache\">Nicht vollständig aufgetaut oder nicht umgerührt</td><td data-label=\"Lösung\">Vollständig auftauen und glatt rühren. Nie erneut einfrieren</td></tr>\n</tbody>\n</table>"
      }
    ],
    "faq": [
      {
        "q": "Wie viel Aquafaba brauche ich für Schokoladenmousse?",
        "a": "{dose} g gekühltes Aquafaba, {sugar} g Zucker und {chocolate} g dunkle Schokolade ergeben {yield}. Das ersetzt {eggs} Eiweiße. Ein 1 L Tetrapak reicht für {batches_1l} Ansätze, ein 200 g Beutel Pulver für {batches_200g}."
      },
      {
        "q": "Flüssig oder Pulver: Was passt zu meiner Küche, wenn ich Mousse herstelle?",
        "a": "Das hängt davon ab, wie oft Sie einen Ansatz herstellen. Steht Mousse fast täglich auf dem Plan, ist ein geöffnetes 1 L Tetrapak innerhalb von {opened_days} Tagen leer, flüssig passt also. Ist Mousse ein gelegentliches Dessert, spricht das für Pulver, denn der geöffnete Beutel verdirbt zwischen zwei Karten nicht."
      },
      {
        "q": "Verändert das Format die fertige Mousse?",
        "a": "Nein. Ist das Aquafaba kalt und genau abgewogen, verhält sich der Schaum in der Schüssel gleich. Der Unterschied liegt im Umgang mit der Ware vor dem Ansatz, nicht im Dessert auf dem Teller."
      },
      {
        "q": "Kann Aquafaba neben dem Eiweiß auch die Sahne ersetzen?",
        "a": "Ja. Im Rezept entsteht die gesamte Struktur aus dem aufgeschlagenen Schaum und der Kuvertüre, Sahne wird nicht untergehoben. Die Mousse wird leichter, und die Schokolade kommt klar zur Geltung."
      },
      {
        "q": "Wie lange hält die fertige Mousse?",
        "a": "Sie wird mindestens {set_time} Stunden im Kühlschrank fest und hält sich dann gekühlt {keep} Tage in verschlossener Verpackung. Sie ist ein Produkt zum Vorproduzieren, kein Dessert à la minute."
      },
      {
        "q": "Kann ich flüssiges Aquafaba aufschlagen, das eingefroren und wieder aufgetaut wurde?",
        "a": "Ja. Für Mousse verhält es sich wie frisches, vorausgesetzt, es wurde langsam im Kühlschrank aufgetaut und wieder glatt gerührt. Noch teilweise gefrorene Ware lässt sich nur ungleichmäßig aufschlagen, und aufgetautes Aquafaba wird nie erneut eingefroren."
      },
      {
        "q": "Wie rühre ich das Pulver für einen Ansatz an?",
        "a": "Dosieren Sie nach Anzahl der Eiweiße. Für einen Ansatz sind das {powder_dose} g Pulver und {water_dose} ml Wasser. Kühlen Sie die Mischung, bevor sie in die Maschine kommt. Die Faustregel pro Eiweiß: {white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba. {white_powder} g Pulver ersetzen 1 Eiweiß."
      },
      {
        "q": "Wo bekomme ich Zahlen für meine eigene Rezeptur?",
        "a": "Nennen Sie uns über unser [Kontaktformular]({contact_href}) Ihre Mousse-Mengen, das Format, das Sie in Betracht ziehen, und Ihren Produktionsrhythmus. Das technische Datenblatt senden wir Ihnen auf Anfrage zu."
      }
    ]
  },
  "mayonnaise": {
    "lead": "Mit Aquafaba gelingt eine dicke, stabile vegane Mayo, ganz ohne Eigelb. Das ganze Rezept beruht auf einem Verhältnis: {oil_ratio} Öl zu Aquafaba, nach Gewicht. Dieser Leitfaden führt Sie durch die Zubereitung und die typischen Fehlerquellen und hilft Ihnen dann bei der Entscheidung, ob flüssig oder Pulver in Ihrer Küche sinnvoller ist.",
    "glance": {
      "note": "Ein Ansatz ergibt {yield} Mayonnaise.",
      "groups": [
        {
          "title": "Flüssig",
          "items": [
            {
              "value": "{dose} g",
              "label": "pro Ansatz, mit {oil} g Öl"
            },
            {
              "value": "{batches_1l} Ansätze",
              "label": "aus einem 1 L Tetrapak"
            }
          ]
        },
        {
          "title": "Pulver",
          "items": [
            {
              "value": "{powder_dose} g",
              "label": "pro Ansatz, mit Wasser angerührt"
            },
            {
              "value": "{batches_200g} Ansätze",
              "label": "aus einem 200 g Beutel"
            }
          ]
        }
      ]
    },
    "sections": [
      {
        "id": "how",
        "title": "So gelingt vegane Mayo mit Aquafaba",
        "html": "<p>Hier ersetzt Aquafaba das Eigelb, nicht das Eiweiß. Aufgeschlagen wird nichts: Es ist eine kalte Emulsion, die durch Scherkraft entsteht.</p>\n<ol>\n<li>In einem hohen, schmalen Gefäß {dose} g gekühltes Aquafaba mit Senf, Salz und Zitronensaft oder Essig mischen.</li>\n<li>Den Stabmixer starten und {oil} g Öl in einem dünnen, gleichmäßigen Strahl einlaufen lassen. Die Scherkraft hoch halten, damit die Emulsion bindet.</li>\n<li>Sobald die Masse eindickt, abschmecken und nachwürzen. Zu fest? Einige Gramm kaltes Wasser einmixen.</li>\n<li>In einen sauberen Behälter umfüllen und sofort kühlen. Hygienisch hergestellt, hält sie sich bis zu {keep} Tage im Kühlschrank.</li>\n</ol>\n<p>Große Ansätze? Arbeiten Sie mit einem Hochschermischer, um die Tröpfchengröße zu kontrollieren und die Emulsion stabil zu halten.</p>\n<p><a href=\"{recipe_href}\">Zum vollständigen Mayonnaise-Rezept</a></p>"
      },
      {
        "id": "decide",
        "title": "Flüssig oder Pulver? Entscheidend ist, wie oft Sie Mayo herstellen",
        "html": "<p>Ein Ansatz Mayo braucht sehr wenig Aquafaba: {dose} g. Ein 1 L Tetrapak reicht also für {batches_1l} Ansätze, und nach dem Öffnen haben Sie {opened_days} Tage Zeit, es zu verbrauchen. Wenn Sie so viele in dieser Zeit nicht herstellen, ist Pulver die bessere Wahl: Ein 200 g Beutel reicht für {batches_200g} Ansätze, und nach dem Öffnen müssen Sie kein Datum im Blick behalten. Die fertige Mayo muss so oder so in den Kühlschrank. Bei der Wahl geht es also um die geöffnete Packung, nicht um die Sauce.</p>\n<table class=\"va-guide-grid\">\n<thead><tr><th scope=\"col\">Ihr Betrieb</th><th scope=\"col\">Empfehlung</th><th scope=\"col\">Warum</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Ihr Betrieb\">Feinkost- oder Sandwichtheke, die in jedem Service frische Mayo herstellt</td><td data-label=\"Empfehlung\">Flüssig, 1 L Tetrapak</td><td data-label=\"Warum\">Kommt schon mit der richtigen Temperatur zum Mixen aus der Packung, und die Packung wird rechtzeitig leer</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Restaurant mit Mayo in einem Gericht auf der Karte</td><td data-label=\"Empfehlung\">Pulver, 200 g Beutel</td><td data-label=\"Warum\">Ein geöffneter Liter wäre nach {opened_days} Tagen noch nicht aufgebraucht</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Kühlraum schon voll mit fertiger Sauce</td><td data-label=\"Empfehlung\">Pulver</td><td data-label=\"Warum\">Der Beutel belegt nie einen Kühlplatz</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Sie möchten weniger datierte Produkte am Saucenposten</td><td data-label=\"Empfehlung\">Pulver</td><td data-label=\"Warum\">Keine geöffnete, verderbliche Packung, die etikettiert, dokumentiert und kontrolliert werden muss</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Hersteller, der trockene Saucenbasen mischt</td><td data-label=\"Empfehlung\">Pulver</td><td data-label=\"Warum\">Es kommt trocken in den Premix</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Zentralküche oder industrielle Linie</td><td data-label=\"Empfehlung\">Flüssig, 10 L Bag-in-Box oder 1 T IBC</td><td data-label=\"Warum\">In jeder Schicht kiloweise entnommen, direkt in den Hochschermischer</td></tr>\n</tbody>\n</table>\n<p>Sie bevorzugen flüssig, stellen aber selten Mayo her? Frieren Sie es portionsweise ein: Zwei Portionen zu {white_liquid} g ergeben einen Ansatz. Im Kühlschrank vollständig auftauen und vor dem Mixen glatt rühren.</p>"
      },
      {
        "id": "formats",
        "title": "So arbeiten Sie mit beiden Formaten",
        "html": "<div class=\"va-guide-cols\">\n<div>\n<h3>Flüssig</h3>\n<ul>\n<li>Steht nach dem Öffnen im Kühlschrank und hat deshalb beim Eingießen schon die richtige Temperatur zum Mixen.</li>\n<li>Lässt sich auf jeder Küchenwaage abwiegen.</li>\n<li>Entsorgen Sie es, wenn es unangenehm riecht, Bläschen bildet oder sich abgesetzt hat.</li>\n</ul>\n</div>\n<div>\n<h3>Pulver</h3>\n<ul>\n<li>{white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba. {white_powder} g Pulver ersetzen 1 Eiweiß.</li>\n<li>Für einen Ansatz Mayo: {powder_dose} g Pulver + {water_dose} ml Wasser. Verwenden Sie eine Feinwaage.</li>\n<li>Mit kaltem Wasser anrühren oder vor dem Mixen auf {chill} °C kühlen.</li>\n</ul>\n</div>\n</div>"
      },
      {
        "id": "fix",
        "title": "Wenn die Emulsion nicht gelingt",
        "html": "<table class=\"va-guide-grid va-guide-grid--fix\">\n<thead><tr><th scope=\"col\">Was Sie sehen</th><th scope=\"col\">Ursache</th><th scope=\"col\">Lösung</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Was Sie sehen\">Die Emulsion kommt nicht zustande</td><td data-label=\"Ursache\">Öl zu schnell zugegeben oder zu wenig Scherkraft</td><td data-label=\"Lösung\">Dünner, gleichmäßiger Strahl, Mixer auf höchster Stufe</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Die Emulsion bildet sich langsam und bleibt instabil</td><td data-label=\"Ursache\">Aquafaba zu warm</td><td data-label=\"Lösung\">Bei {chill} °C verwenden</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Zu fest zum Verarbeiten</td><td data-label=\"Ursache\">Die Emulsion ist zu fest geworden</td><td data-label=\"Lösung\">Einige Gramm kaltes Wasser einmixen, nicht noch mehr Öl</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Instabil bei großen Ansätzen</td><td data-label=\"Ursache\">Tröpfchengröße nicht kontrolliert</td><td data-label=\"Lösung\">Auf einen Hochschermischer umsteigen</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Dünnes Ergebnis mit eingefrorener Ware</td><td data-label=\"Ursache\">Das Aquafaba ist nach dem Auftauen dünner</td><td data-label=\"Lösung\">Glatt rühren. Bleibt es dünn, kurz bei niedriger Hitze einkochen</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Haltbarkeit kürzer als {keep} Tage</td><td data-label=\"Ursache\">Mangelnde Hygiene oder zu spät gekühlt</td><td data-label=\"Lösung\">Sauberer Behälter, sofort kühlen</td></tr>\n</tbody>\n</table>"
      }
    ],
    "faq": [
      {
        "q": "Wie viel Aquafaba brauche ich für vegane Mayo?",
        "a": "{dose} g gekühltes Aquafaba und {oil} g Öl ergeben {yield} Mayonnaise. Das entspricht einem Verhältnis von Öl zu Aquafaba von {oil_ratio} nach Gewicht. Ein 1 L Tetrapak reicht für {batches_1l} Ansätze, ein 200 g Beutel Pulver für {batches_200g}."
      },
      {
        "q": "Flüssig oder Pulver: Was passt zu meiner Küche, wenn ich Mayonnaise herstelle?",
        "a": "Zählen Sie Ihre Ansätze. Nur eine Küche, die täglich emulgiert, verbraucht ein geöffnetes 1 L Tetrapak innerhalb von {opened_days} Tagen. Steht Mayo nur ab und zu auf dem Plan, nehmen Sie das Pulver: Der geöffnete Beutel verdirbt nicht."
      },
      {
        "q": "Verändert das Format den Geschmack der Sauce?",
        "a": "Nein. In einer Basis aus Senf, Salz und Säure hinterlässt keines der beiden Formate eine wahrnehmbare Hülsenfruchtnote, sobald die Emulsion steht. Varianten mit Kräutern, Knoblauch oder Gewürzen bauen auf derselben Basis mit derselben Aquafaba-Menge auf."
      },
      {
        "q": "Wie rühre ich das Pulver für einen Ansatz an?",
        "a": "Dosieren Sie nach Anzahl der Eiweiße. Für einen Ansatz sind das {powder_dose} g Pulver und {water_dose} ml Wasser. Die Faustregel pro Eiweiß: {white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba. {white_powder} g Pulver ersetzen 1 Eiweiß. Nehmen Sie kaltes Wasser oder kühlen Sie die Mischung vor dem Mixen auf {chill} °C."
      },
      {
        "q": "Kann ich eine laufende Rezeptur von einem Format auf das andere umstellen?",
        "a": "Ja. {white_liquid} g flüssiges Aquafaba entsprechen {white_powder} g Pulver, mit Wasser angerührt. Das Aquafaba-Gewicht lässt sich also direkt umrechnen. Ölverhältnis, Senf und Säure bleiben unverändert."
      },
      {
        "q": "Wie lange hält Mayonnaise mit Aquafaba?",
        "a": "Gekühlt bis zu {keep} Tage, vorausgesetzt, sie wurde hygienisch hergestellt, in einem sauberen Behälter gelagert und direkt nach dem Mixen gekühlt."
      },
      {
        "q": "Kann ich das flüssige Aquafaba einfrieren, wenn ich es nur langsam verbrauche?",
        "a": "Ja. Mayonnaise gehört zu den Zubereitungen, bei denen sich aufgetautes Aquafaba wie frisches verhält. Frieren Sie Portionen bis zu {freeze_months} Monate ein, tauen Sie sie vollständig auf und rühren Sie sie vor dem Emulgieren glatt. Eine aufgetaute Portion wird nie erneut eingefroren."
      },
      {
        "q": "Was bedeutet eine geöffnete Packung für meine HACCP-Dokumentation?",
        "a": "Eine geöffnete Packung flüssiges Aquafaba ist ein datiertes, verderbliches Produkt am Saucenposten: Sie wird dokumentiert, gekühlt gelagert und vor Gebrauch kontrolliert. Mayonnaise ist roh und wird kalt serviert, deshalb ist diese Kontrolle wichtig. Ein verschlossener, trockener Beutel schafft diesen Kontrollpunkt nicht."
      },
      {
        "q": "Welche Packung passt zu einer kontinuierlichen Produktionslinie?",
        "a": "Kontinuierliche Linien arbeiten mit flüssigem Aquafaba: Bag-in-Box für Zentralküchen und der 1 T IBC dort, wo Aquafaba in jeder Schicht kiloweise entnommen wird. Fordern Sie das technische Datenblatt an und schildern Sie uns Ihre Mengen über unser [Kontaktformular]({contact_href})."
      }
    ]
  },
  "baking": {
    "lead": "Beim Backen kann Aquafaba ganze Eier ersetzen oder nur das Eiweiß, von der Génoise bis zur Brioche. Rechnen Sie mit {egg_liquid} g für jedes Ei, das Sie ersetzen. Sie erfahren, wie es in die verschiedenen Teige und Massen kommt, was Sie an Ihrem Rezept anpassen und wie Sie das Format wählen, das zu Ihrer Produktion passt.",
    "glance": {
      "note": "Ein ganzes Ei = {egg_liquid} g flüssiges Aquafaba.",
      "groups": [
        {
          "title": "Flüssig",
          "items": [
            {
              "value": "{white_liquid} g",
              "label": "pro Eiweiß"
            },
            {
              "value": "{whites_1l} Eiweiße",
              "label": "aus einem 1 L Tetrapak"
            }
          ]
        },
        {
          "title": "Pulver",
          "items": [
            {
              "value": "{white_powder} g",
              "label": "pro Eiweiß, mit Wasser angerührt"
            },
            {
              "value": "{whites_200g} Eiweiße",
              "label": "aus einem 200 g Beutel"
            }
          ]
        }
      ]
    },
    "sections": [
      {
        "id": "how",
        "title": "So setzen Sie Aquafaba beim Backen ein",
        "html": "<p>Aquafaba erfüllt beim Backen drei Aufgaben: Es bindet Luft, es sorgt für Bindung, und es hält Feuchtigkeit. Deshalb lässt es sich auf zwei Arten einsetzen. Schlagen Sie es auf, wenn es Eiweiß ersetzt. Geben Sie es unaufgeschlagen zu, wenn es die Bindung und Feuchtigkeit ganzer Eier ersetzt.</p>\n<table class=\"va-guide-grid va-guide-grid--wrap\">\n<thead><tr><th scope=\"col\">Was Sie backen</th><th scope=\"col\">So kommt das Aquafaba hinein</th><th scope=\"col\">Was es bringt</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Was Sie backen\">Biskuit und Génoise</td><td data-label=\"So kommt das Aquafaba hinein\">Bei {chill} °C aufgeschlagen, dann behutsam und zügig untergehoben</td><td data-label=\"Was es bringt\">Die Luft</td></tr>\n<tr><td data-label=\"Was Sie backen\">Kuchen, Kekse und Muffins</td><td data-label=\"So kommt das Aquafaba hinein\">Mit dem Zucker vermischt, bevor es mit dem Fett zusammenkommt</td><td data-label=\"Was es bringt\">Eine stabilere Emulsion</td></tr>\n<tr><td data-label=\"Was Sie backen\">Zuckerreiche Massen</td><td data-label=\"So kommt das Aquafaba hinein\">Zuerst mit einem Teil des Zuckers aufgeschlagen, dann mit den Fetten vermengt</td><td data-label=\"Was es bringt\">Volumen, das den Backvorgang übersteht</td></tr>\n<tr><td data-label=\"Was Sie backen\">Kekse und Brownies</td><td data-label=\"So kommt das Aquafaba hinein\">Direkt zugegeben, unaufgeschlagen</td><td data-label=\"Was es bringt\">Bindung und Feuchtigkeit</td></tr>\n<tr><td data-label=\"Was Sie backen\">Brioche und süßes Hefegebäck</td><td data-label=\"So kommt das Aquafaba hinein\">Unaufgeschlagen, zusammen mit den Flüssigkeiten des Teigs</td><td data-label=\"Was es bringt\">Weichheit und Frischhaltung</td></tr>\n</tbody>\n</table>\n<p>Sie ersetzen ganze Eier? Aquafaba bringt mehr Wasser mit als Ei. Reduzieren Sie Milch oder Wasser leicht oder erhöhen Sie die trockenen Zutaten, und backen Sie vollständig durch. Wenn Sie nur das Eiweiß ersetzen, wie bei Baiser oder Macarons, ist in der Regel keine Anpassung nötig.</p>\n<p><a href=\"{recipe_href}\">Zum vollständigen Leitfaden: Backen mit Aquafaba</a></p>"
      },
      {
        "id": "decide",
        "title": "Flüssig oder Pulver? Entscheidend ist, wie oft Sie ohne Ei backen",
        "html": "<p>Mit Wasser angerührt, bringt das Pulver genauso viel Wasser in die Masse wie das flüssige Aquafaba. Die Arbeit an der Rezeptur ist also dieselbe. Bei der Wahl geht es um Takt und Lagerung. Ein 1 L Tetrapak ersetzt {eggs_1l} ganze Eier oder {whites_1l} Eiweiße und wird nach dem Öffnen innerhalb von {opened_days} Tagen im Kühlschrank verbraucht. Ein 200 g Beutel ersetzt {whites_200g} Eiweiße und verdirbt nach dem Öffnen nicht.</p>\n<table class=\"va-guide-grid\">\n<thead><tr><th scope=\"col\">Ihr Betrieb</th><th scope=\"col\">Empfehlung</th><th scope=\"col\">Warum</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Ihr Betrieb\">Bäckerei mit täglichem eifreiem Sortiment</td><td data-label=\"Empfehlung\">Flüssig, 1 L Tetrapak</td><td data-label=\"Warum\">Eine geöffnete Packung ist innerhalb von {opened_days} Tagen problemlos leer</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Küche mit gelegentlichen veganen Bestellungen</td><td data-label=\"Empfehlung\">Pulver, 200 g Beutel</td><td data-label=\"Warum\">Sie rühren an, was die Bestellung braucht, der Rest wartet</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Biskuit und Génoise, für Volumen aufgeschlagen</td><td data-label=\"Empfehlung\">Flüssig</td><td data-label=\"Warum\">Die geöffnete Packung hat schon die richtige Temperatur zum Aufschlagen</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Kühlregale für Cremes und Füllungen verplant</td><td data-label=\"Empfehlung\">Pulver</td><td data-label=\"Warum\">Es lagert im Trockenregal</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Tägliches Sortiment plus unregelmäßige Bestellungen</td><td data-label=\"Empfehlung\">Beides</td><td data-label=\"Warum\">Die Umrechnung ist fest, ein Rezept funktioniert also mit beiden Formaten</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Industrielle Backlinie oder Gastronomie mit mehreren Standorten</td><td data-label=\"Empfehlung\">Flüssig, 10 L Bag-in-Box oder 1 T IBC</td><td data-label=\"Warum\">Durchgehende Dosierung, kein Anrühren nötig</td></tr>\n</tbody>\n</table>\n<p>Unregelmäßiger Verbrauch, aber Sie bevorzugen flüssig? Portionsweise einfrieren funktioniert, kostet aber Platz im Tiefkühler, das Auftauen über Nacht und eine Viskositätsprüfung. Genau diesen Aufwand erspart Ihnen das Pulver.</p>"
      },
      {
        "id": "formats",
        "title": "So arbeiten Sie mit beiden Formaten",
        "html": "<div class=\"va-guide-cols\">\n<div>\n<h3>Flüssig</h3>\n<ul>\n<li>{egg_liquid} g pro ganzes Ei oder {white_liquid} g pro Eiweiß abwiegen, direkt aus der Packung.</li>\n<li>Entsorgen Sie es, wenn es unangenehm riecht, Bläschen bildet oder sich abgesetzt hat.</li>\n</ul>\n</div>\n<div>\n<h3>Pulver</h3>\n<ul>\n<li>{white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba. {white_powder} g Pulver ersetzen 1 Eiweiß.</li>\n<li>Für aufgeschlagene Massen zuerst auf {chill} °C kühlen. In Teige und Rührmassen kommt es so, wie es ist.</li>\n</ul>\n</div>\n</div>"
      },
      {
        "id": "fix",
        "title": "Wenn das Gebäck nicht gelingt",
        "html": "<table class=\"va-guide-grid va-guide-grid--fix\">\n<thead><tr><th scope=\"col\">Was Sie sehen</th><th scope=\"col\">Ursache</th><th scope=\"col\">Lösung</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Was Sie sehen\">Flacher Biskuit</td><td data-label=\"Ursache\">Der Schaum musste warten oder wurde zu kräftig untergehoben</td><td data-label=\"Lösung\">Zügig und behutsam unterheben</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Weiche, nasse Masse</td><td data-label=\"Ursache\">Ganze Eier eins zu eins ersetzt, Wasser nicht reduziert</td><td data-label=\"Lösung\">Milch oder Wasser leicht reduzieren oder trockene Zutaten zugeben</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Feuchter Kern</td><td data-label=\"Ursache\">Das zusätzliche Wasser verlängert die Backzeit</td><td data-label=\"Lösung\">Vollständig durchbacken, bevor Sie das Gebäck aus dem Ofen nehmen</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Schwacher Schaum</td><td data-label=\"Ursache\">Aquafaba zu warm</td><td data-label=\"Lösung\">Bei {chill} °C aufschlagen</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Schwacher Schaum oder schwache Bindung bei eingefrorener Ware</td><td data-label=\"Ursache\">Das Aquafaba ist nach dem Auftauen dünner</td><td data-label=\"Lösung\">Kurz bei niedriger Hitze einkochen. Nie erneut einfrieren</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Die Haltbarkeit des Produkts hat sich verändert</td><td data-label=\"Ursache\">Eine andere Feuchtigkeit verändert die Wasseraktivität</td><td data-label=\"Lösung\">Haltbarkeit und mikrobiologische Stabilität nach der Rezepturänderung neu prüfen</td></tr>\n</tbody>\n</table>"
      }
    ],
    "faq": [
      {
        "q": "Wie viel Aquafaba ersetzt ein Ei beim Backen?",
        "a": "{egg_liquid} g flüssiges Aquafaba ersetzen ein ganzes Ei, {white_liquid} g ein Eiweiß. Als Pulver sind das {white_powder} g pro Eiweiß, mit Wasser angerührt. Das sind Ausgangswerte: Passen Sie die übrigen Flüssigkeiten an, damit die Konsistenz Ihrer Masse gleich bleibt."
      },
      {
        "q": "Kann Aquafaba ganze Eier ersetzen oder nur das Eiweiß?",
        "a": "Beides. Aufgeschlagen ersetzt es das Eiweiß und bringt die Luft in Biskuit und Génoise. Unaufgeschlagen zugegeben, ersetzt es die Bindung und Feuchtigkeit eines ganzen Eis, etwa in Keksen, Brownies und schweren Hefeteigen."
      },
      {
        "q": "Flüssig oder Pulver: Was passt zu meiner Bäckerei?",
        "a": "Das richtet sich danach, wie oft Sie ohne Ei backen. Ein tägliches Sortiment leert ein geöffnetes 1 L Tetrapak innerhalb von {opened_days} Tagen, flüssig passt also. Gelegentliche vegane Bestellungen sprechen für Pulver, denn der geöffnete Beutel verdirbt nicht."
      },
      {
        "q": "Wie rühre ich das Pulver an?",
        "a": "Dosieren Sie nach Anzahl der Eiweiße. Die Faustregel pro Eiweiß: {white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba. {white_powder} g Pulver ersetzen 1 Eiweiß. Für aufgeschlagene Massen kühlen Sie die Mischung auf {chill} °C, bevor sie in die Maschine kommt."
      },
      {
        "q": "Erspart mir das Pulver die Rezeptanpassung, die das flüssige Aquafaba verlangt?",
        "a": "Nein. Mit Wasser angerührt, bringt es genauso viel Wasser in die Masse. Die übrigen Flüssigkeiten werden also weiterhin leicht reduziert oder die trockenen Zutaten erhöht. Der Beutel verändert Verbrauchstakt und Lagerung, nicht die Rezeptur."
      },
      {
        "q": "Welches Format eignet sich für Brioche und andere schwere Hefeteige?",
        "a": "Beide. Das Aquafaba kommt unaufgeschlagen mit den Flüssigkeiten in den Teig, für Weichheit und Frischhaltung. Die Temperatur zum Aufschlagen spielt also keine Rolle. Entscheiden Sie danach, wie oft Sie diesen Teig herstellen und wo Sie Platz für die Packung haben."
      },
      {
        "q": "Woran erkenne ich, dass eine geöffnete Packung flüssiges Aquafaba nicht mehr verwendbar ist?",
        "a": "Bei säuerlichem Geruch, Bläschen in der Packung oder sichtbarer Trennung wird es entsorgt und nicht mehr verbacken. Dasselbe gilt für eine Packung, die über {opened_temp} °C gelagert wurde oder länger als {opened_days} Tage geöffnet ist."
      },
      {
        "q": "Kann eine Bäckerei beide Formate führen?",
        "a": "Ja, mehrere tun das: flüssig für das tägliche eifreie Sortiment, den Beutel für unregelmäßige Bestellungen. Die Umrechnung ist fest. Ein Rezept, das mit einem Format entwickelt wurde, funktioniert also auch mit dem anderen."
      },
      {
        "q": "Wo bekomme ich Spezifikationen für die industrielle Produktion?",
        "a": "Fordern Sie das technische Datenblatt über unser [Kontaktformular]({contact_href}) an. Für Mengen in Bag-in-Box oder IBC beschreiben Sie uns Ihre Linie und Ihr monatliches Volumen, wir melden uns bei Ihnen."
      }
    ]
  },
  "macarons": {
    "lead": "Ja, Macarons gelingen auch ohne Eiweiß. Verwenden Sie einfach {dose} g Aquafaba anstelle des Eiweißes und lassen Sie Ihr Rezept ansonsten, wie es ist. Dieser Leitfaden führt Sie durch jeden Schritt, zeigt, worauf Sie dabei achten sollten, und hilft Ihnen bei der Wahl zwischen flüssig und Pulver.",
    "glance": {
      "note": "Ein Ansatz ergibt {yield}.",
      "groups": [
        {
          "title": "Flüssig",
          "items": [
            {
              "value": "{dose} g",
              "label": "pro Ansatz, ersetzt {eggs} Eiweiße"
            },
            {
              "value": "{batches_1l} Ansätze",
              "label": "aus einem 1 L Tetrapak"
            }
          ]
        },
        {
          "title": "Pulver",
          "items": [
            {
              "value": "{powder_dose} g",
              "label": "pro Ansatz, mit Wasser angerührt"
            },
            {
              "value": "{batches_200g} Ansätze",
              "label": "aus einem 200 g Beutel"
            }
          ]
        }
      ]
    },
    "sections": [
      {
        "id": "how",
        "title": "So gelingen Macarons mit Aquafaba",
        "html": "<p>Aquafaba ersetzt nur das Eiweiß. Mandelmehl, Puderzucker und feiner Zucker Ihrer Rezeptur bleiben also unverändert. Der Schaum muss zwei Schritte überstehen, das Unterheben und die Ruhezeit. Deshalb kommt es mehr auf das Timing an als auf das Aufschlagen selbst.</p>\n<ol>\n<li>Mandelmehl und Puderzucker zusammen sieben und beiseitestellen. Die Bleche jetzt schon auslegen.</li>\n<li>{dose} g gekühltes Aquafaba in einer sauberen, fettfreien Schüssel auf hoher Stufe aufschlagen, bis weiche Spitzen entstehen. Weinstein zugeben, dann {sugar} g feinen Zucker nach und nach einrieseln lassen, bis glänzende, feste Spitzen entstehen.</li>\n<li>Die trockene Mischung in drei Portionen unterheben. Aufhören, sobald die Masse in dicken, langsamen Bändern vom Spatel läuft.</li>\n<li>3 bis 4 cm große Kreise auf Backpapier aufspritzen, mit gleichmäßigem Abstand.</li>\n<li>Bei Raumtemperatur ruhen lassen, bis sich eine trockene Haut bildet: {rest} Minuten, je nach Luftfeuchtigkeit.</li>\n<li>Bei {bake} °C ohne Umluft {bake_time} Minuten backen. Auf dem Blech vollständig auskühlen lassen, bevor Sie die Schalen anfassen.</li>\n<li>Schalen paaren, füllen und vor dem Servieren {mature} Stunden im Kühlschrank reifen lassen, damit sich die Textur entwickelt.</li>\n</ol>\n<p>Sie produzieren im industriellen Maßstab? Halten Sie die Aquafaba-Konzentration bei {concentration} g/ml, damit die Schalen von Ansatz zu Ansatz gleich ausfallen.</p>\n<p><a href=\"{recipe_href}\">Zum vollständigen Macaron-Rezept</a></p>"
      },
      {
        "id": "decide",
        "title": "Flüssig oder Pulver? Entscheidend ist, wie oft Sie Macarons aufspritzen",
        "html": "<p>Ihre Macarons reifen ohnehin im Kühlschrank, eine geöffnete Packung flüssiges Aquafaba kalt zu lagern, ist also einfach. Entscheidend ist, wie schnell Sie sie verbrauchen. Ein 1 L Tetrapak reicht für {batches_1l} Ansätze Macarons. Wenn Sie so viele in den {opened_days} Tagen nach dem Öffnen nicht backen, ist Pulver die bessere Wahl: Ein 200 g Beutel reicht für {batches_200g} Ansätze und verdirbt nach dem Öffnen nicht. Ungeöffnet halten sich beide mindestens {unopened_months} Monate bei Raumtemperatur.</p>\n<table class=\"va-guide-grid\">\n<thead><tr><th scope=\"col\">Ihr Betrieb</th><th scope=\"col\">Empfehlung</th><th scope=\"col\">Warum</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Ihr Betrieb\">Patisserie, die an den meisten Tagen Schalen aufspritzt</td><td data-label=\"Empfehlung\">Flüssig, 1 L Tetrapak</td><td data-label=\"Warum\">{batches_1l} Ansätze pro Packung, innerhalb von {opened_days} Tagen verbraucht</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Geschäft, das Macarons auf Bestellung backt</td><td data-label=\"Empfehlung\">Pulver, 200 g Beutel</td><td data-label=\"Warum\">Es überbrückt die langen Pausen zwischen den Produktionen</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Kühlschrank schon voll mit reifenden Macarons und Ganache</td><td data-label=\"Empfehlung\">Pulver</td><td data-label=\"Warum\">Es lagert trocken und verschlossen, außerhalb der Kühlung</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Sie schlagen auf, sobald die Bleche ausgelegt sind</td><td data-label=\"Empfehlung\">Flüssig</td><td data-label=\"Warum\">Kalt und bereit für den Schneebesen, nichts muss angerührt werden</td></tr>\n<tr><td data-label=\"Ihr Betrieb\">Pflanzliche Patisserie-Linie, die durchgehend aufspritzt</td><td data-label=\"Empfehlung\">Flüssig, 10 L Bag-in-Box oder 1 T IBC</td><td data-label=\"Warum\">Die Zufuhr reißt nie ab, und die Kühlkette ist Sache des Werks</td></tr>\n</tbody>\n</table>\n<p>Das Pulver lässt sich nicht einfach trocken untermischen. Das Aquafaba wird zuerst für sich aufgeschlagen. Rühren Sie das Pulver also mit Wasser an, bevor es auch nur in die Nähe des Mandelmehls kommt.</p>"
      },
      {
        "id": "formats",
        "title": "So arbeiten Sie mit beiden Formaten",
        "html": "<div class=\"va-guide-cols\">\n<div>\n<h3>Flüssig</h3>\n<ul>\n<li>Kommt kalt aus der geöffneten Packung, genau so, wie es das Rezept zum Aufschlagen verlangt.</li>\n<li>Es teilt sich den Kühlschrank mit Ihren reifenden Macarons. Notieren Sie deshalb das Öffnungsdatum auf der Packung.</li>\n<li>Entsorgen Sie es, wenn es unangenehm riecht, Bläschen bildet oder sich abgesetzt hat.</li>\n</ul>\n</div>\n<div>\n<h3>Pulver</h3>\n<ul>\n<li>{white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba. {white_powder} g Pulver ersetzen 1 Eiweiß.</li>\n<li>Für einen Ansatz Macarons: {powder_dose} g Pulver + {water_dose} ml Wasser.</li>\n<li>Vor dem Aufschlagen anrühren und kalt stellen. Kaltes Aquafaba lässt sich schneller aufschlagen und ergibt einen stabileren Schaum.</li>\n</ul>\n</div>\n</div>"
      },
      {
        "id": "fix",
        "title": "Wenn die Schalen nicht gelingen",
        "html": "<table class=\"va-guide-grid va-guide-grid--fix\">\n<thead><tr><th scope=\"col\">Was Sie sehen</th><th scope=\"col\">Ursache</th><th scope=\"col\">Lösung</th></tr></thead>\n<tbody>\n<tr><td data-label=\"Was Sie sehen\">Der Schaum erreicht kein Volumen</td><td data-label=\"Ursache\">Fett an Schüssel oder Schneebesen</td><td data-label=\"Lösung\">Alles entfetten, bevor Sie beginnen</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Die Baisermasse fällt vor dem Aufspritzen zusammen</td><td data-label=\"Ursache\">Sie stand, während die trockene Mischung oder die Bleche vorbereitet wurden</td><td data-label=\"Lösung\">Erst sieben und Bleche auslegen, zuletzt aufschlagen</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Die Schalen gehen nicht mehr auf</td><td data-label=\"Ursache\">Über das Bänder-Stadium hinaus oder zu grob untergehoben</td><td data-label=\"Lösung\">Bei dicken, langsamen Bändern aufhören</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Keine Haut nach der Ruhezeit</td><td data-label=\"Ursache\">Hohe Luftfeuchtigkeit im Raum</td><td data-label=\"Lösung\">Länger ruhen lassen und mit dem Finger prüfen, nicht nach der Uhr</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Aus den Schalen tritt bei der Lagerung Flüssigkeit aus</td><td data-label=\"Ursache\">Zucker nicht vollständig gelöst</td><td data-label=\"Lösung\">Den feinen Zucker nach und nach zugeben</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Die Schalen werden bei der Lagerung weich</td><td data-label=\"Ursache\">Die Schalen ziehen Feuchtigkeit aus der Luft</td><td data-label=\"Lösung\">Bei niedriger Luftfeuchtigkeit lagern</td></tr>\n<tr><td data-label=\"Was Sie sehen\">Die Schalen fallen von Ansatz zu Ansatz unterschiedlich aus</td><td data-label=\"Ursache\">Die Aquafaba-Konzentration schwankt</td><td data-label=\"Lösung\">Bei industriellen Ansätzen {concentration} g/ml einhalten</td></tr>\n</tbody>\n</table>"
      }
    ],
    "faq": [
      {
        "q": "Wie viel Aquafaba brauche ich für Macarons?",
        "a": "{dose} g gekühltes Aquafaba und {sugar} g feiner Zucker ergeben {yield}. Das ersetzt {eggs} Eiweiße. Ein 1 L Tetrapak reicht für {batches_1l} Ansätze, ein 200 g Beutel Pulver für {batches_200g}."
      },
      {
        "q": "Flüssig oder Pulver: Was passt zu meiner Backstube?",
        "a": "Zählen Sie Ihre Produktionen. Wenn Sie oft genug aufspritzen, um ein geöffnetes 1 L Tetrapak innerhalb von {opened_days} Tagen aufzubrauchen, passt flüssig zu Ihrem Rhythmus. Backen Sie Macarons auf Bestellung, nehmen Sie das Pulver: Der geöffnete Beutel wartet, ohne zu verderben."
      },
      {
        "q": "Muss ich den Rest meiner Rezeptur anpassen?",
        "a": "Nein. Bei Macarons wird nur Eiweiß ersetzt, keine ganzen Eier, der Austausch ist also direkt möglich. Mandelmehl, Puderzucker und feiner Zucker bleiben genau so, wie sie in Ihrer Rezeptur stehen."
      },
      {
        "q": "Soll ich der Baisermasse trotzdem eine Säure zur Stabilisierung zugeben?",
        "a": "Im Rezept ist das optional. Weinstein oder Zitronensäure kommt dazu, sobald weiche Spitzen entstanden sind und bevor der feine Zucker folgt. Das stützt den Schaum beim Unterheben und während der Ruhezeit. Geben Sie die Säure in den Schaum, nie in die trockene Mischung."
      },
      {
        "q": "Ändert sich die Ruhezeit bei hoher Luftfeuchtigkeit?",
        "a": "Ja, und geprüft wird sie mit dem Finger. Die Schalen sind so weit, wenn sich die Oberfläche bei leichter Berührung trocken anfühlt. In einem feuchten Raum bildet sich diese Haut langsam, {rest} Minuten sind deshalb ein Richtwert, keine feste Regel."
      },
      {
        "q": "Wie lange hält eine geöffnete Packung?",
        "a": "Geöffnetes flüssiges Aquafaba wird verschlossen bei höchstens {opened_temp} °C gelagert und innerhalb von {opened_days} Tagen verbraucht. Verlassen Sie sich auch auf Ihre Sinne: Bei säuerlichem Geruch, Bläschen oder sichtbarer Trennung gehört es nicht in die Baisermasse. Geöffnetes Pulver hält sich, solange der Beutel trocken und verschlossen bleibt."
      },
      {
        "q": "Wie rühre ich das Pulver für einen Ansatz an?",
        "a": "Dosieren Sie nach Anzahl der Eiweiße. Für einen Ansatz sind das {powder_dose} g Pulver und {water_dose} ml Wasser. Kühlen Sie die Mischung vor dem Aufschlagen. Die Faustregel pro Eiweiß: {white_powder} g Pulver + {white_water} ml Wasser = {white_total} g Aquafaba, entspricht derselben Masse an flüssigem Aquafaba. {white_powder} g Pulver ersetzen 1 Eiweiß."
      },
      {
        "q": "Können Sie mir die Spezifikation zur Konzentration für meine Produktionsunterlagen schicken?",
        "a": "Ja, das technische Datenblatt senden wir Ihnen auf Anfrage zu. Beschreiben Sie uns über unser [Kontaktformular]({contact_href}) Ihre Produktion, Ihre Standorte und das Format, das Sie in Betracht ziehen."
      }
    ]
  }
};
