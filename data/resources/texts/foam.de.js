// Foam pages, German (October 2026): the cocktail foamer hub and its three sets, under the
// cocktails guide. Written natively from the approved English (foam.en.js), same page keys,
// same section ids, same {tokens}; vocabulary from cocktails.de.js (Shaker, Dry Shake,
// Schaumkrone, Gebinde, Jigger, Röstnote). Formal address (Sie), das Aquafaba, no dashes.
// German keeps a space before units and percent ("20 ml", "200 g", "10 L", "40 %").
// labels: the German strings for the label tables built from facts.foamers (heads, cell values,
// ingredient lists translated faithfully from the published labels, E numbers kept, order kept),
// the month the labels were checked, the Imbibe date and the competitor doses.

export default {
  labels: {
    eyebrow: 'Cocktail-Foamer',
    checked: 'Oktober 2026',
    imbibeDate: 'April 2025',
    doses: {
      fee: '4 bis 6 Dashes pro Drink',
      msb: '6 bis 8 Tropfen pro Drink',
      wonderfoam: '3 bis 6 Tropfen pro Drink',
      vegg: '1:1 anstelle von Eiweiß',
    },
    table: {
      heads: ['Foamer', 'Was das Etikett nennt', 'Alkohol', 'Deklarierte Allergene', 'Quelle'],
      values: {
        'Not stated': 'Keine Angabe',
        'None listed': 'Keine angegeben',
        'None of the 14 EU allergens': 'Keines der 14 EU-Allergene',
        'Soy': 'Soja',
        'Product label': 'Produktetikett',
      },
      ingredients: {
        very: 'Wasser, Kichererbsen. Ohne Zusatzstoffe, ohne Konservierungsstoffe.',
        vegg: 'Wasser, Emulgatoren, Methylcellulose, Fettsäureester, Sojalecithin, Verdickungsmittel, Maltodextrin, Xanthan, Akaziengummi, Konservierungsstoff E211, Antioxidationsmittel Ascorbinsäure',
        fee: 'Wasser, Propylenglykol (E1520), Polysorbat 80 (E433), Kaliumsorbat (E202), Natriumbenzoat (E211), Citronensäure, Zitronenextrakt',
        foamee: 'Pflanzlicher Saponinextrakt, Wasser, Citronensäure',
        wonderfoam: 'Quillajaextrakt, Wasser, Gummi arabicum, modifizierte Stärke (E1450), Natriumbenzoat, Kaliumsorbat',
        msb: 'Alkohol (40 %), Bio-Rohrzucker, natürlicher Aromaextrakt, Pflanzenextrakte, Kräuter',
        yanni: 'Eine pflanzliche alkoholische Emulsion',
        fancy: 'Modifizierte Maisstärke',
        pfaff: 'Tapiokasirup, Gummi arabicum, Polysorbat 80',
        foammagic: 'Maltodextrin, Methylcellulose, Xanthan',
      },
    },
  },

  pages: {
    'cocktail-foamer': {
      title: 'Aquafaba als Cocktail-Foamer für Sours | VERY AQUAFABA',
      h1: 'Aquafaba als Cocktail-Foamer für Sours',
      crumb: 'Cocktail-Foamer',
      description: 'VERY AQUAFABA ist ein Cocktail-Foamer aus Aquafaba, nur Wasser und Kichererbsen: {dose} ml pro Drink, erst Dry Shake, dann mit Eis shaken.',
      lead: `Fragen Sie einen Bartender, warum Eiweiß im Sour immer noch seinen Platz hat, und die Antwort liegt meist oben auf dem Drink: eine dichte weiße Schaumkrone, fest genug, um die Garnitur zu tragen. VERY AQUAFABA gibt Ihnen dafür eine Alternative aus Aquafaba, mit {dose} ml pro Drink und demselben Ablauf: erst der Dry Shake, dann der Shake mit Eis. Wenn Sie einen Sour mixen können, kennen Sie die Technik schon. Offen sind eigentlich nur drei Fragen: was im Foamer steckt, wie er in Ihr bestehendes Rezept passt und welches Format sich für die Zahl Ihrer Drinks lohnt.`,
      sections: [
        { id: 'swap', title: 'Das Eiweiß tauschen, die Methode behalten', html: `<p>Sonst muss sich am Aufbau nichts ändern. Spirituose, Zitrus, Sirup, Glas und Garnitur bleiben, wo sie sind. Geben Sie <b>{dose} ml VERY AQUAFABA</b> anstelle des Eiweißes in den Shaker, shaken Sie zuerst ohne Eis, dann mit Eis noch einmal.</p>
<p>Wenn Sie Sours bisher mit Eiweiß machen, kommt Ihnen die <a href="{how_to_make_page_href}">Methode für jeden Sour</a> ab der ersten Bestellung vertraut vor.</p>` },
        { id: 'sour', title: 'Was Aquafaba im Sour kann', html: `<p>Aquafaba wird schon heute als Alternative zu Eiweiß verwendet, wegen des Schaums, den es einem geshakten Drink gibt.</p>
<p>Im {imbibe_date} hat <a href="{imbibe_url}">Imbibe sechs vegane Cocktail-Foamer getestet</a>. Das Produkt auf Aquafaba-Basis lieferte dort laut Test „{imbibe_quote}“, also die eiähnlichsten Ergebnisse, mit dichtem, cremigem Schaum und mehr Körper. Getestet wurde ein anderes Produkt, nicht VERY AQUAFABA, aber der Test zeigt, warum Aquafaba selbst hinter der Bar nützlich geworden ist.</p>
<p>VERY AQUAFABA wird aus Aquafaba hergestellt, auf dem Etikett stehen Wasser und Kichererbsen. Die leichte Röstnote, die es in der Packung vom Kochen der Kichererbsen hat, verschwindet, sobald es in einem Drink geshakt wird.</p>` },
        { id: 'label', title: 'Ein Foamer ohne Zusatzstoffe', html: `<p>Drehen Sie die Packung um, und die Zutatenliste ist kurz: <b>Wasser und Kichererbsen</b>, ohne Zusatzstoffe und ohne Konservierungsstoffe.</p>
<p>Andere Cocktail-Foamer gehen andere Wege, mit Emulgatoren, Verdickungsmitteln, Cellulose, Konservierungsstoffen oder Pflanzenextrakten. Wenn Ihrer Bar die Zutaten wichtig sind, können Sie <a href="{foamer_ingredients_href}">die Etiketten der Cocktail-Foamer nebeneinander vergleichen</a> und jedes Produkt an seinem eigenen veröffentlichten Etikett prüfen.</p>` },
        { id: 'can', title: 'Warum nicht einfach eine Dose öffnen?', html: `<p>Die Flüssigkeit in einer Dose Kichererbsen ist auch Aquafaba, aber sie wurde nicht für die Bar abgefüllt.</p>
<p>Verschiedene Dosen können Ihnen verschiedene Flüssigkeiten liefern, und Sie müssen trotzdem öffnen, abgießen und sich um die Kichererbsen kümmern. VERY AQUAFABA ist ein definiertes Produkt mit einer festen Arbeitsdosis von <b>{dose} ml pro Drink</b>, das direkt aus dem Kühlschrank in den Shaker geht.</p>
<p>Für den Service heißt das: ein Rezept, nach dem jeder hinter der Bar arbeiten kann, statt sich nach der Dose zu richten, die gerade offen ist.</p>` },
        { id: 'packs', title: 'Sours jeden Abend, oder nur ein paar pro Woche?', html: `<p>Ein <b>1 L Tetrapak ergibt {drinks_1l} Drinks</b> zu je {dose} ml. Geöffnet wird er bei <b>{opened_temp} °C</b> gelagert und innerhalb von <b>{opened_days} Tagen</b> verbraucht.</p>
<p>Wenn Sours nur ab und zu über den Tresen gehen, sind Sie mit Pulver flexibler. Ein <b>200 g Beutel ergibt {drinks_200g} Drinks</b>, mit <b>{powder} g Pulver und {water} ml Wasser pro Drink</b>, und der geöffnete Beutel hält trocken und verschlossen bis zu seinem Mindesthaltbarkeitsdatum.</p>
<p>Für Bars mit deutlich höheren Mengen gibt es VERY AQUAFABA auch als <a href="{bulk_foamer_href}">10 L Bag-in-Box und als 3 kg Beutel Pulver</a>.</p>` },
      ],
      faq: [
        { q: 'Was ist ein Cocktail-Foamer?', a: 'Die Zutat, die auf einem geshakten Sour die weiße Schaumkrone bildet. Klassisch ist das Eiweiß. VERY AQUAFABA nimmt stattdessen Aquafaba, mit {dose} ml pro Drink.' },
        { q: 'Schäumt Aquafaba wie Eiweiß?', a: 'Aquafaba wird in geschäumten Drinks als Alternative zu Eiweiß verwendet. In einem Test von Imbibe mit sechs veganen Foamern im {imbibe_date} lieferte ein Produkt auf Aquafaba-Basis „{imbibe_quote}“, also die eiähnlichsten Ergebnisse. VERY AQUAFABA war nicht Teil dieses Tests.' },
        { q: 'Wie viel Foamer nehme ich pro Cocktail?', a: '{dose} ml VERY AQUAFABA flüssig pro Drink oder {powder} g Pulver, angerührt mit {water} ml Wasser.' },
        { q: 'Ist in VERY AQUAFABA Alkohol?', a: 'Nein. VERY AQUAFABA besteht aus Wasser und Kichererbsen, das Produkt selbst bringt also keinen Alkohol in den Drink.' },
        { q: 'Schmeckt es nach Kichererbsen?', a: 'In der Packung hat VERY AQUAFABA eine leichte Röstnote vom Kochen der Kichererbsen. Im geshakten Drink verschwindet sie: Der Schaum bringt keinen eigenen Geschmack mit, und das Aroma bleibt bei Spirituose, Zitrus, Sirup und den anderen Zutaten Ihres Drinks.' },
        { q: 'Wo kaufe ich VERY AQUAFABA für meine Bar?', a: 'Sie können [Aquafaba für Cocktails kaufen]({where_to_buy_page_href}), auf Amazon in den USA und in Deutschland, bei InstantChef in Frankreich und überall sonst über das Anfrageformular.' },
      ],
    },

    'foamer-ingredients': {
      title: 'Was steckt in Ihrem Cocktail-Foamer? | VERY AQUAFABA',
      h1: 'Was steckt in Ihrem Cocktail-Foamer?',
      crumb: 'Zutaten der Foamer',
      description: 'Die Zutaten der Cocktail-Foamer im direkten Vergleich. VERY AQUAFABA nennt Wasser und Kichererbsen, ohne Zusatzstoffe und ohne Konservierungsstoffe.',
      lead: `Drehen Sie die Flasche um. VERY AQUAFABA nennt nur Wasser und Kichererbsen, ohne Zusatzstoffe und ohne Konservierungsstoffe. Andere Cocktail-Foamer erledigen dieselbe Aufgabe auf anderen Wegen. Manche arbeiten mit Verdickungsmitteln, Emulgatoren, Stärke oder Pflanzenextrakten, und manche enthalten Alkohol. Die Tabelle unten stellt die Etiketten nebeneinander, damit Sie sehen, was jedes Produkt tatsächlich angibt.`,
      sections: [
        { id: 'labels', title: 'Die Etiketten im direkten Vergleich', html: `{labels_all}
<p><b>Etiketten geprüft: {labels_checked}.</b></p>
<p>Rezepturen können sich ändern, deshalb wird jede Quelle neu geprüft, bevor dieser Vergleich aktualisiert wird.</p>` },
        { id: 'look', title: 'Worauf sollten Sie auf dem Etikett eines Foamers achten?', html: `<p><b>Was den Schaum bildet.</b> Bei VERY AQUAFABA kommt die schäumende Zutat aus der Kichererbse selbst. Bei mehreren der Foamer oben nennt das Etikett stattdessen Zutaten wie Methylcellulose, Polysorbat 80, Saponinextrakt oder modifizierte Stärke.</p>
<p><b>Ob das Produkt Alkohol enthält.</b> Ms. Better's gibt {msb_abv} % Alkohol an, Dr Yanni's {yanni_abv} %. VERY AQUAFABA enthält keinen Alkohol, das Produkt selbst bringt also keinen Alkohol in den Drink.</p>
<p><b>Welche Allergene deklariert sind.</b> VEGG White deklariert Soja. Kichererbsen gehören nicht zu den {eu_allergens} Allergenen, die nach der <a href="{eu_rules_href}">Lebensmittelinformationsverordnung der EU</a> gekennzeichnet werden müssen, aber wer eine bekannte Allergie gegen Kichererbsen oder Hülsenfrüchte hat, sollte das Produkt trotzdem meiden.</p>` },
        { id: 'try', title: 'Probieren Sie es in einem Sour, den Sie schon machen', html: `<p>Für einen Test von VERY AQUAFABA brauchen Sie kein neues Cocktailrezept.</p>
<p>Nehmen Sie <b>{dose} ml pro Drink</b>, shaken Sie erst ohne Eis, dann mit Eis. Ein <b>1 L Tetrapak ergibt {drinks_1l} Drinks</b> und wird nach dem Öffnen <b>innerhalb von {opened_days} Tagen bei {opened_temp} °C</b> verbraucht. Wenn Sie Sours nur gelegentlich mixen, ergibt ein <b>200 g Beutel {drinks_200g} Drinks</b> und hält geöffnet, trocken und verschlossen, bis zum Mindesthaltbarkeitsdatum auf dem Beutel.</p>
<p>Beginnen Sie mit etwas, das schon auf Ihrer Karte steht, zum Beispiel einem <a href="{pisco_sour_href}">Pisco Sour</a>, und vergleichen Sie das Ergebnis in einem Drink, den Sie gut kennen.</p>` },
      ],
      faq: [
        { q: 'Welcher Cocktail-Foamer kommt ohne Zusatzstoffe aus?', a: 'VERY AQUAFABA nennt nur Wasser und Kichererbsen, ohne Zusatzstoffe und ohne Konservierungsstoffe.' },
        { q: 'Enthält VERY AQUAFABA Konservierungsstoffe?', a: 'Nein. Auf dem Etikett stehen Wasser und Kichererbsen. Verschlossene Packungen halten mindestens {unopened_months} Monate bei Raumtemperatur. Geöffnetes flüssiges Aquafaba bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen.' },
        { q: 'Ist VERY AQUAFABA vegan?', a: 'VERY AQUAFABA selbst ist pflanzlich. Die anderen Zutaten eines fertigen Cocktails haben ihre eigene Kennzeichnung und sollten einzeln geprüft werden.' },
        { q: 'Welche Foamer enthalten Alkohol?', a: "Im Vergleich oben gibt Ms. Better's {msb_abv} % Alkohol an, Dr Yanni's {yanni_abv} %. VERY AQUAFABA enthält keinen Alkohol." },
      ],
    },

    'aquafaba-vs-chickpea-water': {
      title: 'Ist Aquafaba nur Kichererbsenwasser? | VERY AQUAFABA',
      h1: 'Ist Aquafaba nur Kichererbsenwasser?',
      crumb: 'Aquafaba oder Kichererbsenwasser?',
      description: 'Aquafaba beginnt als Kochwasser von Kichererbsen. Flüssigkeit aus der Dose und VERY AQUAFABA im Vergleich: Dosierung, Vorbereitung und Service an der Bar.',
      lead: `Ja. Aquafaba ist das Kochwasser von Kichererbsen, die Flüssigkeit aus der Dose und VERY AQUAFABA gehen also auf dieselbe Idee zurück. Der Unterschied hinter der Bar liegt darin, wie Sie damit arbeiten. Eine Dose muss geöffnet und abgegossen werden, und die Flüssigkeit kann je nach gekauftem Produkt schwanken. VERY AQUAFABA kommt als definiertes Produkt mit einer festen Arbeitsdosis von {dose} ml pro Drink, bereit zum Abmessen direkt aus dem Kühlschrank.`,
      sections: [
        { id: 'compare', title: 'Dose oder Packung', html: `<table class="va-guide-grid va-guide-grid--compare">
<thead><tr><th scope="col"></th><th scope="col">Eine Dose Kichererbsen</th><th scope="col">VERY AQUAFABA</th></tr></thead>
<tbody>
<tr><td data-label="">Von einem Produkt zum nächsten</td><td data-label="Eine Dose Kichererbsen">Kann je nach Marke und Charge schwanken</td><td data-label="VERY AQUAFABA">Ein definiertes Produkt mit fester Arbeitsdosis</td></tr>
<tr><td data-label="">Bevor es in den Shaker kommt</td><td data-label="Eine Dose Kichererbsen">Öffnen, abgießen und manchmal weiter aufbereiten</td><td data-label="VERY AQUAFABA">{dose} ml aus dem Kühlschrank abmessen</td></tr>
<tr><td data-label="">Was übrig bleibt</td><td data-label="Eine Dose Kichererbsen">Die Kichererbsen</td><td data-label="VERY AQUAFABA">Nichts</td></tr>
<tr><td data-label="">Auf dem Etikett</td><td data-label="Eine Dose Kichererbsen">Hängt von der Dose ab</td><td data-label="VERY AQUAFABA">Wasser und Kichererbsen</td></tr>
<tr><td data-label="">Nach dem Öffnen</td><td data-label="Eine Dose Kichererbsen">Hängt vom Produkt ab</td><td data-label="VERY AQUAFABA">Flüssig: {opened_days} Tage bei {opened_temp} °C. Pulver: hält trocken und verschlossen bis zum Mindesthaltbarkeitsdatum</td></tr>
</tbody>
</table>` },
        { id: 'service', title: 'Warum das im Service zählt', html: `<p>Einen Sour kann man leicht nachjustieren. Vierzig mitten in einem vollen Service verzeihen weniger.</p>
<p>Mit Flüssigkeit aus der Dose müssen Sie sich unter Umständen nach der gerade geöffneten Dose richten. Mit VERY AQUAFABA arbeiten alle mit derselben <b>Dosis von {dose} ml pro Drink</b>. So können Sie leichter ein einziges Rezept schreiben, die Abläufe an der Station darauf abstimmen und <a href="{pre_batching_page_href}">den Rest des Sours vorbatchen</a>, während das Aquafaba für den Shake getrennt bleibt.</p>
<p>Der Schaum entsteht weiterhin Drink für Drink. Der Vorteil ist, dass Sie die Dosis nicht mit jeder neuen Dose neu erfinden müssen.</p>` },
      ],
      faq: [
        { q: 'Kann ich die Flüssigkeit aus der Kichererbsendose für Cocktails verwenden?', a: 'Ja. Das Kochwasser von Kichererbsen ist Aquafaba. Wie es sich verhält, kann von Produkt zu Produkt schwanken, und manche Bartender bereiten es vor dem Gebrauch auf oder kochen es ein. VERY AQUAFABA kommt mit einer festen Arbeitsdosis von {dose} ml pro Drink.' },
        { q: 'Ist Kichererbsenwasser dasselbe wie Aquafaba?', a: 'Aquafaba ist das Kochwasser von Kichererbsen. VERY AQUAFABA ist ein Aquafaba-Produkt aus Wasser und Kichererbsen, geliefert zur direkten Verwendung oder als Pulver.' },
        { q: 'Schmeckt Aquafaba nach Kichererbsen?', a: 'In der Packung hat VERY AQUAFABA eine leichte Röstnote vom Kochen der Kichererbsen. Im geshakten Drink verschwindet sie: Der Schaum bringt keinen eigenen Geschmack mit, und das Aroma des Drinks bleibt bei seinen anderen Zutaten.' },
        { q: 'Wo kaufe ich Aquafaba für Cocktails?', a: 'Sie können [Aquafaba für Cocktails kaufen]({where_to_buy_page_href}), auf Amazon in den USA und in Deutschland, bei InstantChef in Frankreich und überall sonst über das Anfrageformular.' },
      ],
    },

    'is-aquafaba-an-allergen': {
      title: 'Ist Aquafaba ein Allergen? | VERY AQUAFABA',
      h1: 'Ist Aquafaba ein Allergen?',
      crumb: 'Ist Aquafaba ein Allergen?',
      description: 'Kichererbsen gehören nicht zu den {eu_allergens} Allergenen der EU-Kennzeichnungspflicht. VERY AQUAFABA enthält keine Eier, Milch, Gluten oder Soja.',
      lead: `Nach der Lebensmittelinformationsverordnung der EU gehören Kichererbsen nicht zu den {eu_allergens} Allergenen, die gekennzeichnet werden müssen. VERY AQUAFABA enthält keine Eier, Milch, Gluten oder Soja. Das heißt nicht, dass Kichererbsen keine allergische Reaktion auslösen können. Wer eine bekannte Allergie gegen Kichererbsen oder Hülsenfrüchte hat, sollte das Produkt meiden. Für eine Bar ist die Unterscheidung einfach: VERY AQUAFABA selbst enthält kein Ei, aber jeder fertige Cocktail muss trotzdem Zutat für Zutat betrachtet werden.`,
      sections: [
        { id: 'eu', title: 'Gehören Kichererbsen zu den {eu_allergens} EU-Allergenen?', html: `<p>Die <a href="{eu_rules_href}">Lebensmittelinformationsverordnung der EU</a> nennt {eu_allergens} Allergene, die gekennzeichnet werden müssen, darunter Eier, Soja, Erdnüsse und Lupinen. <b>Kichererbsen stehen nicht auf dieser Liste.</b></p>
<p>Das beschreibt ihren Status bei der verpflichtenden Allergenkennzeichnung in der EU. Es heißt nicht, dass eine Allergie gegen Kichererbsen unmöglich ist.</p>
<p>Wenn ein Gast Ihnen sagt, dass er eine Allergie gegen Kichererbsen oder Hülsenfrüchte hat, nehmen Sie das ernst und folgen Sie Ihrem üblichen Ablauf für Allergene.</p>` },
        { id: 'egg', title: 'Was ist mit Gästen, die auf Ei verzichten müssen?', html: `<p>VERY AQUAFABA selbst enthält <b>kein Ei</b>.</p>
<p>Wenn also das Eiweiß die Zutat ist, wegen der jemand einen bestimmten Sour nicht trinken kann, nimmt der Tausch gegen VERY AQUAFABA das Ei aus der schäumenden Zutat. Der Rest des Cocktails muss trotzdem einzeln geprüft werden, auch Spirituosen, Sirupe und Garnituren.</p>
<p>Wie Sie Kreuzkontakt vermeiden und wie vorbereitet wird, hängt außerdem davon ab, wie Ihre Bar arbeitet. Folgen Sie also dem Allergenmanagement, das in Ihrem Betrieb schon gilt.</p>` },
        { id: 'taste', title: 'Schmeckt es nach Kichererbsen?', html: `<p>Direkt aus der Packung hat VERY AQUAFABA eine leichte Röstnote vom Kochen der Kichererbsen. Im geshakten Drink verschwindet sie: Der Schaum bringt keinen eigenen Geschmack mit.</p>
<p>Mit <b>{dose} ml pro Drink</b> baut es den Schaum auf, während der Geschmack von Spirituose, Zitrus, Sirup und dem Rest des Cocktails kommt.</p>` },
      ],
      faq: [
        { q: 'Gehören Kichererbsen zu den {eu_allergens} EU-Allergenen?', a: 'Nein. Kichererbsen gehören nicht zu den {eu_allergens} Allergenen der verpflichtenden Allergenkennzeichnung in der EU. Sie können trotzdem allergische Reaktionen auslösen, vor allem bei einer bekannten Allergie gegen Kichererbsen oder Hülsenfrüchte.' },
        { q: 'Enthält VERY AQUAFABA Ei?', a: 'Nein. VERY AQUAFABA besteht aus Wasser und Kichererbsen und enthält kein Ei.' },
        { q: 'Kann jemand mit Eiallergie einen Cocktail mit Aquafaba trinken?', a: 'VERY AQUAFABA selbst enthält kein Ei. Ob ein fertiger Cocktail geeignet ist, hängt von seinen anderen Zutaten und von der Zubereitung ab. Prüfen Sie also den ganzen Drink und folgen Sie dem Allergenmanagement Ihres Betriebs.' },
        { q: 'Riecht Aquafaba?', a: 'In der Packung hat VERY AQUAFABA eine leichte Röstnote vom Kochen der Kichererbsen. Sobald es in einem Drink geshakt ist, verschwindet diese Note.' },
        { q: 'Welche Cocktail-Foamer deklarieren Soja?', a: 'In unserem Vergleich deklariert VEGG White Soja. Sie können [die Zutaten der Cocktail-Foamer nebeneinander vergleichen]({foamer_ingredients_href}).' },
      ],
    },

    'bulk-foamer': {
      title: 'Cocktail-Foamer im Großgebinde | VERY AQUAFABA',
      h1: 'Cocktail-Foamer im Großgebinde: 10 L flüssig oder 3 kg Pulver?',
      crumb: 'Foamer im Großgebinde',
      description: 'VERY AQUAFABA im Großgebinde: 10 L flüssig ergeben {drinks_10l} Drinks, ein 3 kg Beutel Pulver {drinks_3kg}. Wählen Sie nach der Zahl Ihrer Sours.',
      lead: `Wer den ganzen Abend Sours aus 1 L Kartons shakt, öffnet viele Kartons. Für größere Mengen gibt es VERY AQUAFABA in zwei großen Formaten: Die 10 L Bag-in-Box ergibt {drinks_10l} Drinks zu je {dose} ml, der 3 kg Beutel Pulver {drinks_3kg}. Welches passt, hängt weniger von der Größe des Gebindes ab als davon, wie schnell Ihre Bar es verbraucht.`,
      sections: [
        { id: 'finish', title: 'Schaffen Sie 10 L rechtzeitig?', html: `<p>Geöffnet wird eine <b>10 L Bag-in-Box bei {opened_temp} °C gelagert und innerhalb von {opened_days} Tagen verbraucht</b>.</p>
<p>{drinks_10l} Drinks in dieser Zeit bedeuten ungefähr:</p>
<ul>
<li><b>{bib_day3} Sours pro Tag</b> über {open_min} Tage</li>
<li><b>{bib_day4} Sours pro Tag</b> über {open_max} Tage</li>
</ul>
<p>Liegt Ihr Service regelmäßig in dieser Größenordnung, haben Sie mit der 10 L Bag-in-Box flüssiges Aquafaba direkt zur Hand, ohne sich durch mehrere 1 L Kartons zu arbeiten.</p>
<p>Liegt Ihre Tagesmenge deutlich darunter, zählt die Frist der geöffneten Packung mehr als die Größe des Gebindes.</p>` },
        { id: 'between', title: 'Und wenn Sie zwischen 1 L und 10 L liegen?', html: `<p>Nicht jede Bar passt genau in eine Gebindestufe.</p>
<p>Ein <b>1 L Tetrapak ergibt {drinks_1l} Drinks</b>, das sind etwa <b>{l1_day_range} Drinks pro Tag</b>, wenn Sie ihn innerhalb von {opened_days} Tagen leeren wollen.</p>
<p>Eine 10 L Bag-in-Box hebt diese Schwelle auf etwa <b>{bib_day_range} Drinks pro Tag</b>.</p>
<p>Liegen Sie irgendwo dazwischen, kommt es darauf an, wie gleichmäßig Ihr Service läuft. Mehrere 1 L Packungen sind sinnvoll, wenn die Mengen planbar sind. Pulver passt besser, wenn die Zahl der Sours von einem Tag zum nächsten stark schwankt.</p>` },
        { id: 'powder', title: 'Wann Pulver sinnvoller ist', html: `<p>Der <b>3 kg Beutel ergibt {drinks_3kg} Drinks</b> mit <b>{powder} g Pulver und {water} ml Wasser pro Drink</b>.</p>
<p>Anders als geöffnetes flüssiges Aquafaba muss der geöffnete Beutel nicht innerhalb von {opened_days} Tagen verbraucht werden. Trocken und verschlossen hält er bis zum Mindesthaltbarkeitsdatum auf dem Beutel. So nehmen Sie nur, was ein Service braucht, statt sich auf eine geöffnete 10 L Packung festzulegen.</p>
<p>Rühren Sie die benötigte Menge vor dem Service an und stellen Sie das angerührte Aquafaba kalt.</p>` },
        { id: 'pattern', title: 'Das Gebinde nach Ihrem Service wählen', html: `<table class="va-guide-grid">
<thead><tr><th scope="col">Ihr Service</th><th scope="col">Passendes Gebinde</th><th scope="col">Warum</th></tr></thead>
<tbody>
<tr><td data-label="Ihr Service">Etwa {l1_day_range} Sours pro Tag</td><td data-label="Passendes Gebinde">1 L Tetrapak</td><td data-label="Warum">{drinks_1l} Drinks, innerhalb von {opened_days} Tagen aufgebraucht</td></tr>
<tr><td data-label="Ihr Service">Zwischen den Stufen der flüssigen Gebinde</td><td data-label="Passendes Gebinde">Mehrere 1 L Packungen oder Pulver</td><td data-label="Warum">Hängt davon ab, wie gleichmäßig Ihre Mengen sind</td></tr>
<tr><td data-label="Ihr Service">Etwa {bib_day_range} Sours pro Tag</td><td data-label="Passendes Gebinde">10 L Bag-in-Box</td><td data-label="Warum">{drinks_10l} Drinks, innerhalb von {opened_days} Tagen aufgebraucht</td></tr>
<tr><td data-label="Ihr Service">Die Menge schwankt stark von Tag zu Tag</td><td data-label="Passendes Gebinde">Pulver</td><td data-label="Warum">Sie rühren an, was Sie brauchen; der geöffnete Beutel hält trocken und verschlossen bis zum Mindesthaltbarkeitsdatum</td></tr>
</tbody>
</table>
<p>Die Tabelle ist ein Ausgangspunkt, keine Regel. Ein Betrieb mit sehr ungleichen Mengen greift vielleicht auch bei einem höheren Durchschnitt zum Pulver, während eine Bar mit sehr planbarem Service mit flüssigem Aquafaba einfacher arbeitet.</p>` },
      ],
      faq: [
        { q: 'Wie viele Drinks ergibt eine 10 L Bag-in-Box?', a: '{drinks_10l} Drinks zu je {dose} ml. Geöffnet bei {opened_temp} °C lagern und innerhalb von {opened_days} Tagen verbrauchen.' },
        { q: 'Wie viele Drinks ergibt ein 3 kg Beutel?', a: 'Ein 3 kg Beutel ergibt {drinks_3kg} Drinks, mit {powder} g Pulver, angerührt mit {water} ml Wasser pro Drink. Trocken und verschlossen hält der geöffnete Beutel bis zu seinem Mindesthaltbarkeitsdatum.' },
        { q: 'Wann lohnt sich 10 L für eine Bar?', a: 'Um {drinks_10l} Drinks innerhalb von {opened_days} Tagen zu verbrauchen, brauchen Sie ungefähr {bib_day_range} Sours pro Tag. Darunter vergleichen Sie die flüssigen Formate mit dem Pulver, je nachdem, wie planbar Ihr Service ist.' },
        { q: 'Soll ich mehrere 1 L Packungen oder eine 10 L Packung nehmen?', a: 'Schauen Sie, wie viele Sours Sie innerhalb von {opened_days} Tagen tatsächlich ausschenken. Eine 1 L Packung reicht für {drinks_1l} Drinks, eine 10 L Packung für {drinks_10l}. Liegt Ihre Menge zwischen diesen Schwellen, passen mehrere 1 L Packungen oder Pulver vielleicht besser.' },
        { q: 'Wie bestelle ich größere Mengen?', a: 'Nutzen Sie das Anfrageformular für Profis und sagen Sie uns, wie viele Standorte Sie betreiben, wie viele Drinks Sie ungefähr ausschenken und welche Formate Sie im Blick haben. Mit der Antwort schicken wir Ihnen dann die passenden technischen Informationen.' },
      ],
    },

    'egg-white-alternative': {
      title: 'Eiweißersatz für Cocktails | VERY AQUAFABA',
      h1: 'Was nehme ich in Cocktails statt Eiweiß?',
      crumb: 'Eiweißersatz',
      description: 'Nehmen Sie {dose} ml VERY AQUAFABA statt Eiweiß im Sour: gleicher Aufbau, gleicher Dry Shake, gleiches Glas, und kein Ei mehr zum Aufschlagen und Trennen.',
      lead: `Auf den meisten Sour-Rezepten hinter der Bar steht noch „ein Eiweiß“, und genau diese Zeile ist alles, was Sie ändern müssen. Nehmen Sie das Eiweiß heraus und geben Sie {dose} ml VERY AQUAFABA an seine Stelle. Spirituose, Zitrus, Sirup, Dry Shake, Shake mit Eis und Glas bleiben, wie sie sind. Der Drink, den Sie heute Abend servieren, ist also der Drink der letzten Woche, nur ohne Ei.`,
      sections: [
        { id: 'swap', title: 'Eine Zeile im Rezept ändert sich', html: `<ol>
<li>Den Drink wie immer bauen: Spirituose, Zitrus und Sirup in den Shaker.</li>
<li>Wo das Rezept ein Eiweiß nennt, <b>{dose} ml VERY AQUAFABA</b> direkt aus dem Kühlschrank zugeben.</li>
<li>Kräftig ohne Eis shaken, um den Schaum aufzubauen.</li>
<li>Eis zugeben und noch einmal shaken, um den Drink zu kühlen.</li>
<li>Ins Glas abseihen und wie gewohnt garnieren.</li>
</ol>
<p>Im Sour wird VERY AQUAFABA pro Drink dosiert und nicht pro Ei, dieselben {dose} ml kommen also in jedes Rezept. Die <a href="{how_to_make_page_href}">Methode für jeden Sour</a> geht die beiden Shakes Drink für Drink durch.</p>` },
        { id: 'station', title: 'Was sich an der Station ändert', html: `<p>Der Drink bleibt derselbe, die Vorbereitung drumherum wird kürzer. Nichts aufschlagen, nichts trennen, keine Eigelbe, die noch verbraucht werden wollen. Sie messen das Aquafaba mit dem Jigger ab wie jede andere Flüssigkeit, und es kommt kalt in den Shaker.</p>
<p>Verschlossene Packungen halten mindestens <b>{unopened_months} Monate</b> bei Raumtemperatur. Ein geöffneter 1 L Tetrapak steht bei <b>{opened_temp} °C</b> im Kühlschrank und wird innerhalb von <b>{opened_days} Tagen</b> verbraucht; er ergibt {drinks_1l} Drinks. Wenn Sie nur ein paar Sours pro Woche shaken, ergibt der 200 g Beutel {drinks_200g}, mit {powder} g Pulver in {water} ml Wasser pro Drink, und hält geöffnet, trocken und verschlossen, bis zum Mindesthaltbarkeitsdatum auf dem Beutel.</p>` },
        { id: 'menu', title: 'Die ganze Sour-Karte umstellen', html: `<p>Lassen Sie Ihren Pre-Batch, wie er ist: Spirituose, Zitrus und Sirup vor dem Service in einer Flasche. Das Aquafaba bleibt aus der Flasche und kommt erst beim Shaken in jeden Shaker, Drink für Drink. So können Sie <a href="{pre_batching_page_href}">Ihre Sours vorbatchen</a>, genau wie bisher.</p>
<p>Fangen Sie mit einem Sour an, den Sie schon verkaufen, tauschen Sie das Eiweiß und probieren Sie ihn neben dem alten Rezept. Der <a href="{pisco_sour_href}">Pisco Sour</a> ist ein guter erster Test: gleicher Aufbau, gleiches Glas, und die Krone muss eine Garnitur tragen.</p>` },
        { id: 'egg', title: 'Wenn Gäste nach Ei fragen', html: `<p>VERY AQUAFABA enthält kein Ei, der Schaum selbst bringt also kein Ei mehr in den Drink. Der Rest des Cocktails muss trotzdem Zutat für Zutat geprüft werden, und wer eine bekannte Allergie gegen Kichererbsen oder Hülsenfrüchte hat, sollte das Produkt meiden. <a href="{is_aquafaba_an_allergen_href}">Beantworten Sie die Allergenfrage</a> mit den EU-Regeln zur Hand, bevor der Gast zweimal fragen muss.</p>` },
      ],
      faq: [
        { q: 'Wie viel Aquafaba ersetzt ein Eiweiß im Cocktail?', a: 'Im Sour nehmen Sie {dose} ml VERY AQUAFABA pro Drink anstelle des Eiweißes, oder {powder} g Pulver, angerührt mit {water} ml Wasser.' },
        { q: 'Muss ich den Rest meines Rezepts ändern?', a: 'Nein. Spirituose, Zitrus, Sirup, die beiden Shakes und das Glas bleiben, wie sie sind. Nur das Eiweiß wird ersetzt.' },
        { q: 'Schäumt Aquafaba wie Eiweiß?', a: 'Aquafaba nimmt im geshakten Sour den Platz des Eiweißes ein: derselbe Dry Shake, derselbe Shake mit Eis und eine weiße Krone auf dem Drink. Beginnen Sie mit {dose} ml VERY AQUAFABA in einem Ihrer eigenen Sours und beurteilen Sie den Schaum im Vergleich zur Version mit Eiweiß.' },
        { q: 'Kann ich Aquafaba hinter der Bar aufbewahren wie Eiweiß?', a: 'Geöffnetes flüssiges Aquafaba bei {opened_temp} °C im Kühlschrank lagern und innerhalb von {opened_days} Tagen verbrauchen. Verschlossene Packungen halten mindestens {unopened_months} Monate bei Raumtemperatur.' },
        { q: 'Verändert Aquafaba den Geschmack eines Sours?', a: 'Nein. In der Packung hat VERY AQUAFABA eine leichte Röstnote vom Kochen der Kichererbsen. Im geshakten Drink verschwindet sie: Der Schaum bringt keinen eigenen Geschmack mit, und der Drink behält das Aroma von Spirituose, Zitrus und Sirup.' },
      ],
    },

    'alcohol-free-foamer': {
      title: 'Foamer ohne Alkohol für alkoholfreie Sours | VERY AQUAFABA',
      h1: 'Ein Foamer für alkoholfreie Sours',
      crumb: 'Foamer ohne Alkohol',
      description: 'VERY AQUAFABA ist Wasser und Kichererbsen, ohne Alkohol, {dose} ml pro Drink. Manche Foamer nennen {msb_abv} % oder {yanni_abv} % Alkohol auf dem Etikett.',
      lead: `Ein alkoholfreier Sour wird genauso nach seiner Krone beurteilt wie jeder andere Sour: derselbe weiße Schaum, derselbe Körper, und nichts im Glas, wonach ein Gast, der keinen Alkohol trinkt, fragen muss. VERY AQUAFABA besteht aus Wasser und Kichererbsen, bringt also keinen Alkohol in den Drink, und kommt mit {dose} ml in den Shaker, genau wie in einem klassischen Sour.`,
      sections: [
        { id: 'label', title: 'Prüfen Sie, woraus der Foamer besteht', html: `<p>Nicht jeder Foamer ist alkoholfrei. Ms. Better's Miraculous Foamer nennt <b>{msb_abv} % Alkohol</b>, Dr Yanni's Magic Foamer <b>{yanni_abv} %</b>. Schon ein paar Tropfen davon bringen also Alkohol in einen Drink, der ohne Alkohol gebaut ist.</p>
<p>VERY AQUAFABA nennt Wasser und Kichererbsen, ohne Alkohol. Sie können <a href="{foamer_ingredients_href}">die Etiketten der Cocktail-Foamer nebeneinander vergleichen</a>, jede Zeile vom veröffentlichten Etikett des Produkts übernommen.</p>` },
        { id: 'build', title: 'So bauen Sie einen alkoholfreien Sour', html: `<p>Die Methode ändert sich nicht, nur weil die Spirituose fehlt. Alkoholfreie Basis, Zitrus und Sirup in den Shaker, <b>{dose} ml VERY AQUAFABA</b> direkt aus dem Kühlschrank dazu, kräftig ohne Eis shaken, dann Eis zugeben und noch einmal shaken. Abseihen und garnieren wie bei jedem Sour.</p>
<p>Wenn Sie die <a href="{how_to_make_page_href}">zwei Shakes für jeden Sour</a> schon kennen, ist die alkoholfreie Version derselbe Ablauf.</p>` },
        { id: 'one', title: 'Ein Foamer für beide Seiten der Karte', html: `<p>Weil dieselbe Packung im klassischen Sour und in seiner alkoholfreien Version funktioniert, arbeitet die Bar mit einem Rezept und einem Produkt. Ein 1 L Tetrapak ergibt {drinks_1l} Drinks und wird geöffnet bei {opened_temp} °C gelagert und innerhalb von {opened_days} Tagen verbraucht. Sind alkoholfreie Sours eher eine gelegentliche Bestellung, ergibt der 200 g Beutel {drinks_200g} Drinks und hält geöffnet, trocken und verschlossen, bis zum Mindesthaltbarkeitsdatum auf dem Beutel.</p>` },
        { id: 'rest', title: 'Was Sie im Glas sonst noch prüfen sollten', html: `<p>Der Schaum ist nur eine Zutat. Bitters, Sirupe, Cordials und Garnituren haben ihre eigenen Etiketten, lesen Sie also jedes, wenn ein Drink als alkoholfrei verkauft wird. Mit VERY AQUAFABA fällt der Foamer von dieser Liste.</p>` },
      ],
      faq: [
        { q: 'Ist in VERY AQUAFABA Alkohol?', a: 'Nein. VERY AQUAFABA besteht aus Wasser und Kichererbsen und bringt keinen Alkohol in den Drink.' },
        { q: 'Welche Cocktail-Foamer enthalten Alkohol?', a: "Ms. Better's Miraculous Foamer nennt {msb_abv} % Alkohol, Dr Yanni's Magic Foamer {yanni_abv} %, laut ihren Angeboten im Handel." },
        { q: 'Kann ich Aquafaba in Mocktails verwenden?', a: 'Ja. Nehmen Sie {dose} ml VERY AQUAFABA pro Drink, shaken Sie erst ohne Eis, dann mit Eis, wie bei jedem Sour.' },
        { q: 'Verändert Aquafaba den Geschmack eines alkoholfreien Drinks?', a: 'Nein. In der Packung hat VERY AQUAFABA eine leichte Röstnote vom Kochen der Kichererbsen. Im geshakten Drink verschwindet sie: Der Schaum bringt keinen eigenen Geschmack mit, und das Aroma bleibt bei Basis, Zitrus und Sirup.' },
        { q: 'Wo kaufe ich VERY AQUAFABA?', a: 'Sie können [Aquafaba für Cocktails kaufen]({where_to_buy_page_href}), auf Amazon in den USA und in Deutschland, bei InstantChef in Frankreich und überall sonst über das Anfrageformular.' },
      ],
    },

    'drinks-producers': {
      title: 'Aquafaba für Getränkehersteller | VERY AQUAFABA',
      h1: 'Aquafaba für Hersteller von Cocktail-Mixen und Getränken',
      crumb: 'Getränkehersteller',
      description: 'VERY AQUAFABA für Hersteller von Sour-Mix und Getränken: 10 L Bag-in-Box, 1 T IBC und 3 kg Beutel, was das Etikett nennt und die Methode für Bartender.',
      lead: `Wenn Sie Sour-Mix an Bars verkaufen, geben Ihre Kunden den Schaum weiterhin selbst dazu, Drink für Drink. VERY AQUAFABA beliefert die Produktion flüssig in der 10 L Bag-in-Box und im 1 T IBC und als Pulver im 3 kg Beutel. Die Methode hinter der Bar bleibt einfach: Ihr Mix kommt in die Flasche, das Aquafaba erst beim Shaken dazu.`,
      sections: [
        { id: 'formats', title: 'Formate für die Produktion', html: `<p>Bei {dose} ml pro Drink reicht eine <b>10 L Bag-in-Box für {drinks_10l} Drinks</b>, ein <b>1 T IBC für {drinks_1t}</b> und ein <b>3 kg Beutel für {drinks_3kg}</b>. Verschlossen hält jedes Format mindestens {unopened_months} Monate bei Raumtemperatur; geöffnete flüssige Ware wird bei {opened_temp} °C gelagert und innerhalb von {opened_days} Tagen verbraucht.</p>
<p>Mindestbestellmenge und Lieferzeit erhalten Sie mit unserer Antwort, wenn Sie Ihre Mengen im Anfrageformular für Profis beschreiben.</p>` },
        { id: 'label', title: 'Was Sie für den Bartender drucken', html: `<p>Ihr Mix enthält Spirituose, Zitrus und Sirup. Der Bartender gibt <b>{dose} ml VERY AQUAFABA</b> mit einer Portion Mix in den Shaker, dann folgen ein kräftiger Shake ohne Eis und ein zweiter mit Eis. Diese Zeilen, gedruckt auf Ihr Etikett oder Ihre Rezeptkarte, machen aus dem Mix einen Sour mit Krone.</p>
<p>Bartender, die es genauer wissen wollen, finden die <a href="{how_to_make_page_href}">zwei Shakes für jeden Sour</a> Schritt für Schritt.</p>` },
        { id: 'specs', title: 'Spezifikationen für Ihre Qualitätssicherung', html: `<p>VERY AQUAFABA nennt Wasser und Kichererbsen, ohne Zusatzstoffe und ohne Konservierungsstoffe. Bei <a href="{products_href}">unseren Produkten und Formaten</a> ist es als vegan, Clean-Label, Halal und Koscher ausgewiesen, mit Nutri-Score A. Das technische Datenblatt kommt mit der Antwort auf Ihre Anfrage.</p>` },
        { id: 'bottled', title: 'Fertig gemischte und abgefüllte Drinks', html: `<p>Die Methode auf dieser Website gibt das Aquafaba beim Shaken dazu, nie in den Batch. Wenn Sie einen abgefüllten oder fertig gemischten Cocktail entwickeln, in dem der Schaum schon enthalten ist, beschreiben Sie das Produkt im Anfrageformular, und wir melden uns, wie VERY AQUAFABA dazu passt.</p>` },
      ],
      faq: [
        { q: 'Welche Formate von VERY AQUAFABA gibt es für die Produktion?', a: 'Flüssig die 10 L Bag-in-Box und den 1 T IBC, als Pulver den 3 kg Beutel.' },
        { q: 'Wie viele Drinks ergibt ein 1 T IBC?', a: '{drinks_1t} Drinks zu je {dose} ml.' },
        { q: 'Wo erfahre ich Mindestbestellmenge und Lieferzeit?', a: 'Sie kommen mit unserer Antwort, wenn Sie Ihre Mengen im Anfrageformular für Profis beschreiben.' },
        { q: 'Kann VERY AQUAFABA in einen abgefüllten Cocktail?', a: 'Die Methode auf dieser Website gibt es beim Shaken dazu. Für ein abgefülltes oder fertig gemischtes Produkt beschreiben Sie es im Anfrageformular, und wir melden uns bei Ihnen.' },
      ],
    },

    'vegg-white-alternative': {
      title: 'Alternative zu VEGG White für Cocktails | VERY AQUAFABA',
      h1: 'Sie suchen eine Alternative zu VEGG White?',
      crumb: 'Alternative zu VEGG White',
      description: 'VEGG White und VERY AQUAFABA nebeneinander: was jedes Etikett nennt, die deklarierten Allergene und die Dosis pro Drink, mit der Quelle jeder Zeile.',
      lead: `VEGG White ist ein flüssiger Cocktail-Foamer, der eins zu eins anstelle von Eiweiß verwendet wird. VERY AQUAFABA erledigt dieselbe Aufgabe mit {dose} ml pro Drink und einem deutlich kürzeren Etikett: Wasser und Kichererbsen, ohne Zusatzstoffe und ohne Konservierungsstoffe. Hier stehen beide nebeneinander, jede Zeile aus einer veröffentlichten Quelle.`,
      sections: [
        { id: 'labels', title: 'Die beiden Etiketten', html: `{labels_vegg}
<p>Etiketten geprüft: {labels_checked}. Rezepturen ändern sich, deshalb wird jede Zeile neu gelesen, bevor dieser Vergleich aktualisiert wird.</p>` },
        { id: 'soy', title: 'Soja auf dem Etikett', html: `<p>VEGG White deklariert Soja, aus dem Sojalecithin. VERY AQUAFABA enthält kein Soja, keine Eier, keine Milch und kein Gluten. Kichererbsen gehören nicht zu den {eu_allergens} Allergenen, die nach EU-Recht auf dem Etikett stehen müssen, aber wer eine bekannte Allergie gegen Kichererbsen oder Hülsenfrüchte hat, sollte das Produkt trotzdem meiden. <a href="{is_aquafaba_an_allergen_href}">Beantworten Sie die Allergenfrage</a>, bevor ein Gast danach fragt.</p>` },
        { id: 'dose', title: 'Dosis und Format', html: `<p>VEGG White wird eins zu eins anstelle von Eiweiß verwendet. VERY AQUAFABA wird mit <b>{dose} ml pro Drink</b> abgemessen, aus einem 1 L Tetrapak, der {drinks_1l} Drinks ergibt, oder aus Pulver angerührt, {powder} g in {water} ml Wasser. Für eine volle Bar halten <a href="{bulk_foamer_href}">die 10 L Bag-in-Box oder der 3 kg Beutel</a> ein einziges Produkt an jeder Station.</p>` },
        { id: 'try', title: 'Probieren Sie es in einem Sour, den Sie schon machen', html: `<p>Tauschen Sie den Foamer in einem Drink, den Sie schon verkaufen, und probieren Sie beide nebeneinander. Bauen Sie wie gewohnt, geben Sie {dose} ml VERY AQUAFABA dazu, shaken Sie erst ohne Eis, dann mit Eis. Ein <a href="{pisco_sour_href}">Pisco Sour</a> oder ein <a href="{gin_fizz_href}">Gin Fizz</a> zeigt die Krone deutlich.</p>` },
      ],
      faq: [
        { q: 'Woraus besteht VEGG White?', a: "Laut Difford's Guide lautet die veröffentlichte Liste: Wasser, Emulgatoren, Methylcellulose, Fettsäureester, Sojalecithin, Verdickungsmittel, Maltodextrin, Xanthan, Akaziengummi, Konservierungsstoff E211 und Antioxidationsmittel Ascorbinsäure." },
        { q: 'Enthält VEGG White Soja?', a: 'Ja. Es deklariert Soja, aus dem Sojalecithin.' },
        { q: 'Ist VERY AQUAFABA sojafrei?', a: 'Ja. VERY AQUAFABA besteht aus Wasser und Kichererbsen, ohne Soja, Eier, Milch oder Gluten.' },
        { q: 'Wie viel VERY AQUAFABA nehme ich pro Drink?', a: '{dose} ml flüssig oder {powder} g Pulver, angerührt mit {water} ml Wasser.' },
        { q: 'Wo kaufe ich VERY AQUAFABA?', a: 'Sie können [Aquafaba für Cocktails kaufen]({where_to_buy_page_href}), auf Amazon in den USA und in Deutschland, bei InstantChef in Frankreich und überall sonst über das Anfrageformular.' },
      ],
    },

    'fee-foam-alternative': {
      title: 'Alternative zu Fee Foam ohne Zusatzstoffe | VERY AQUAFABA',
      h1: 'Sie suchen eine Alternative zu Fee Foam?',
      crumb: 'Alternative zu Fee Foam',
      description: 'Fee Foam nennt Propylenglykol und Polysorbat 80, VERY AQUAFABA Wasser und Kichererbsen. Beide Etiketten nebeneinander, mit Dosis und Quellen.',
      lead: `Fee Foam kommt in einer Dash-Flasche, ein paar Dashes pro Drink. Dreht man die Flasche um, nennt das Etikett Wasser, Propylenglykol, Polysorbat 80, zwei Konservierungsstoffe, Citronensäure und Zitronenextrakt. VERY AQUAFABA nennt Wasser und Kichererbsen, ohne Zusatzstoffe und ohne Konservierungsstoffe, und kommt mit {dose} ml pro Drink in den Shaker.`,
      sections: [
        { id: 'labels', title: 'Die beiden Etiketten', html: `{labels_fee}
<p>Etiketten geprüft: {labels_checked}. Rezepturen ändern sich, deshalb wird jede Zeile neu gelesen, bevor dieser Vergleich aktualisiert wird.</p>` },
        { id: 'foam', title: 'Was den Schaum macht', html: `<p>Bei Fee Foam nennt das Etikett Polysorbat 80 (E433), einen Emulgator, neben Propylenglykol (E1520), dazu Kaliumsorbat (E202) und Natriumbenzoat (E211) als Konservierungsstoffe. Bei VERY AQUAFABA kommt der Schaum aus der Kichererbse selbst, und das Etikett endet bei Wasser und Kichererbsen.</p>
<p>Wenn die Zutaten für Ihre Karte zählen, <a href="{foamer_ingredients_href}">vergleichen Sie alle Foamer-Etiketten</a> in einer Tabelle.</p>` },
        { id: 'dose', title: 'Dashes oder ein abgemessenes Maß', html: `<p>Für Fee Foam empfiehlt der Hersteller {fee_dose}. VERY AQUAFABA wird mit dem Jigger abgemessen, <b>{dose} ml</b>, jedes Mal dasselbe Maß, und geöffnet wird der 1 L Tetrapak bei {opened_temp} °C gelagert und innerhalb von {opened_days} Tagen verbraucht. Er ergibt {drinks_1l} Drinks.</p>` },
        { id: 'try', title: 'Probieren Sie es in einem Sour, den Sie schon machen', html: `<p>Nehmen Sie einen Sour von Ihrer Karte, ersetzen Sie die Dashes durch {dose} ml VERY AQUAFABA, shaken Sie erst ohne Eis, dann mit Eis, und vergleichen Sie die Krone. Ein <a href="{pisco_sour_href}">Pisco Sour</a> ist ein einfacher erster Test.</p>` },
      ],
      faq: [
        { q: 'Was ist in Fee Foam?', a: "Laut Difford's Guide: Wasser, Propylenglykol, Polysorbat 80, Kaliumsorbat, weniger als 1/10 von 1 % Natriumbenzoat als Konservierungsstoff, Citronensäure und reiner Zitronenextrakt." },
        { q: 'Enthält Fee Foam Konservierungsstoffe?', a: 'Das Etikett von Fee Foam nennt Kaliumsorbat und Natriumbenzoat.' },
        { q: 'Enthält VERY AQUAFABA Konservierungsstoffe?', a: 'Nein. Auf dem Etikett stehen Wasser und Kichererbsen. Verschlossene Packungen halten mindestens {unopened_months} Monate bei Raumtemperatur.' },
        { q: 'Wie viel VERY AQUAFABA ersetzt Fee Foam im Drink?', a: 'Nehmen Sie {dose} ml VERY AQUAFABA pro Drink oder {powder} g Pulver, angerührt mit {water} ml Wasser.' },
        { q: 'Wo kaufe ich VERY AQUAFABA?', a: 'Sie können [Aquafaba für Cocktails kaufen]({where_to_buy_page_href}), auf Amazon in den USA und in Deutschland, bei InstantChef in Frankreich und überall sonst über das Anfrageformular.' },
      ],
    },

    'ms-betters-alternative': {
      title: "Alternative zu Ms. Better's Foamer | VERY AQUAFABA",
      h1: "Sie suchen eine Alternative zu Ms. Better's oder Dr Yanni's?",
      crumb: "Alternative zu Ms. Better's",
      description: "Ms. Better's Miraculous Foamer nennt {msb_abv} % Alkohol, Dr Yanni's {yanni_abv} %. VERY AQUAFABA: Wasser und Kichererbsen, ohne Alkohol, {dose} ml pro Drink.",
      lead: `Pipetten-Foamer kommen tropfenweise in den Drink. Der Haken zeigt sich auf einer alkoholfreien Karte. Ms. Better's Miraculous Foamer nennt {msb_abv} % Alkohol und Dr Yanni's Magic Foamer {yanni_abv} %, jeder von beiden bringt also Alkohol in den Drink. VERY AQUAFABA besteht aus Wasser und Kichererbsen und enthält keinen.`,
      sections: [
        { id: 'labels', title: 'Die Etiketten', html: `{labels_alcohol}
<p>Etiketten geprüft: {labels_checked}. Rezepturen ändern sich, deshalb wird jede Zeile neu gelesen, bevor dieser Vergleich aktualisiert wird.</p>` },
        { id: 'alcohol', title: 'Wo der Alkohol zählt', html: `<p>Im klassischen Sour fallen ein paar Tropfen eines Foamers mit {msb_abv} % neben der Spirituose kaum ins Gewicht. In einem Drink, der als alkoholfrei verkauft wird, sind sie die eine Zutat, die das Versprechen bricht. VERY AQUAFABA bringt keinen Alkohol mit, derselbe Foamer funktioniert also im Whiskey Sour und in seiner <a href="{alcohol_free_foamer_href}">alkoholfreien Version</a>.</p>` },
        { id: 'dose', title: 'Tropfen oder Milliliter', html: `<p>Ms. Better's wird mit {msb_dose} dosiert. VERY AQUAFABA kommt mit <b>{dose} ml</b> in den Drink, mit dem Jigger abgemessen, auf dieselbe Weise wie das Eiweiß, das es ersetzt. Ein 1 L Tetrapak ergibt {drinks_1l} Drinks; der 200 g Beutel ergibt {drinks_200g} und hält geöffnet, trocken und verschlossen, bis zum Mindesthaltbarkeitsdatum auf dem Beutel.</p>` },
        { id: 'try', title: 'Probieren Sie es in einem Sour, den Sie schon machen', html: `<p>Ersetzen Sie die Tropfen in einem Drink durch {dose} ml VERY AQUAFABA, shaken Sie erst ohne Eis, dann mit Eis, und vergleichen Sie. Die <a href="{how_to_make_page_href}">zwei Shakes für jeden Sour</a> sind schon die ganze Methode.</p>` },
      ],
      faq: [
        { q: "Wie viel Alkohol ist in Ms. Better's Foamer?", a: "Ms. Better's Miraculous Foamer nennt in seinem Angebot im Handel {msb_abv} % Alkohol." },
        { q: "Enthält Dr Yanni's Foamer Alkohol?", a: "Ja. Dr Yanni's Magic Foamer wird als pflanzliche alkoholische Emulsion mit {yanni_abv} % geführt." },
        { q: 'Ist in VERY AQUAFABA Alkohol?', a: 'Nein. VERY AQUAFABA enthält Wasser und Kichererbsen.' },
        { q: 'Kann ich VERY AQUAFABA in Mocktails verwenden?', a: 'Ja. Nehmen Sie {dose} ml pro Drink, shaken Sie erst ohne Eis, dann mit Eis.' },
        { q: 'Wo kaufe ich VERY AQUAFABA?', a: 'Sie können [Aquafaba für Cocktails kaufen]({where_to_buy_page_href}), auf Amazon in den USA und in Deutschland, bei InstantChef in Frankreich und überall sonst über das Anfrageformular.' },
      ],
    },

    'quillaia-foamers': {
      title: 'Alternative zu Foamee und Wonderfoam | VERY AQUAFABA',
      h1: 'Foamee, Wonderfoam und die Quillaja-Foamer',
      crumb: 'Quillaja-Foamer',
      description: 'Foamee nennt pflanzlichen Saponinextrakt, Wonderfoam Quillajaextrakt mit Gummi, Stärke und Konservierungsstoffen. VERY AQUAFABA nennt Wasser und Kichererbsen.',
      lead: `Ein paar Tropfen eines Saponin-Foamers heben eine Krone auf den Sour. Saponine sind schäumende Stoffe aus Pflanzen: Wonderfoam nennt Quillajaextrakt, aus der Rinde des Quillajabaums, Foamee einen pflanzlichen Saponinextrakt. VERY AQUAFABA bekommt seinen Schaum aus der Kichererbse selbst, mit {dose} ml pro Drink und Wasser und Kichererbsen auf dem Etikett.`,
      sections: [
        { id: 'labels', title: 'Die Etiketten', html: `{labels_saponin}
<p>Etiketten geprüft: {labels_checked}. Rezepturen ändern sich, deshalb wird jede Zeile neu gelesen, bevor dieser Vergleich aktualisiert wird.</p>` },
        { id: 'saponin', title: 'Was ein Saponin-Foamer in den Drink bringt', html: `<p>Quillajaextrakt steht auf Etiketten als E999. Bei Wonderfoam steht er neben Gummi arabicum, modifizierter Stärke (E1450) und zwei Konservierungsstoffen, Natriumbenzoat und Kaliumsorbat. Foamee nennt seinen Saponinextrakt mit Wasser und Citronensäure. VERY AQUAFABA nennt Wasser und Kichererbsen, ohne Zusatzstoffe und ohne Konservierungsstoffe.</p>
<p>Um alle Foamer an einem Ort zu sehen, <a href="{foamer_ingredients_href}">vergleichen Sie die Etiketten nebeneinander</a>.</p>` },
        { id: 'tin', title: 'Keine Dose Kichererbsen', html: `<p>Manche Saponin-Foamer vergleichen sich mit einer Dose Kichererbsen, und in diesem Punkt haben sie recht: Eine Dose reicht für ein paar Drinks und lässt Sie mit den Kichererbsen zurück. VERY AQUAFABA ist keine Dose. Ein 1 L Tetrapak ergibt {drinks_1l} Drinks zu je {dose} ml, der 200 g Beutel {drinks_200g}, und die Flüssigkeit ist von einer Packung zur nächsten dieselbe, während die aus der Dose <a href="{aquafaba_vs_chickpea_water_href}">je nach Marke und Charge schwanken kann</a>.</p>` },
        { id: 'dose', title: 'Tropfen oder ein abgemessenes Maß', html: `<p>Wonderfoam wird mit {wonderfoam_dose} dosiert. VERY AQUAFABA kommt mit <b>{dose} ml</b> hinein, mit dem Jigger abgemessen, und die Methode kennen Sie schon: erst Dry Shake, dann Shake mit Eis. Probieren Sie es in einem <a href="{pisco_sour_href}">Pisco Sour</a> neben Ihrem gewohnten Foamer.</p>` },
      ],
      faq: [
        { q: 'Was ist in Foamee?', a: 'Der eigene Shop nennt einen pflanzlichen Saponinextrakt, Wasser und Citronensäure.' },
        { q: 'Was ist in Wonderfoam?', a: 'Laut Angebot im Handel: Quillajaextrakt als Schaummittel, Wasser, Gummi arabicum, modifizierte Stärke (E1450), Natriumbenzoat und Kaliumsorbat.' },
        { q: 'Was ist Quillajaextrakt?', a: 'Ein Extrakt aus der Rinde des Quillajabaums, reich an Saponinen, der als Schaummittel verwendet und als E999 gekennzeichnet wird.' },
        { q: 'Enthält VERY AQUAFABA Konservierungsstoffe?', a: 'Nein. Auf dem Etikett stehen Wasser und Kichererbsen. Verschlossene Packungen halten mindestens {unopened_months} Monate bei Raumtemperatur.' },
        { q: 'Wo kaufe ich VERY AQUAFABA?', a: 'Sie können [Aquafaba für Cocktails kaufen]({where_to_buy_page_href}), auf Amazon in den USA und in Deutschland, bei InstantChef in Frankreich und überall sonst über das Anfrageformular.' },
      ],
    },
  },
};
