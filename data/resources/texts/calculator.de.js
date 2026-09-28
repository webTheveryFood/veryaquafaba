// Mengenrechner, Deutsch. Gleiche Struktur, gleiche {tokens} und gleiche HTML-Tags wie
// calculator.en.js (geprüft von scripts/applications/check-guides.mjs). Kein Gedankenstrich.
// Der Rechner selbst (Eingaben und Ergebnistabelle) wird vom Template gerendert; dieses
// Modul trägt den Text darum herum, in der Sprache der Leitfäden und Rezepte.
export default {
  meringue: {
    title: 'Wie viel Aquafaba für Baiser? Mengenrechner - VERY AQUAFABA',
    h1: 'Wie viel Aquafaba für Baiser? Der Mengenrechner',
    description: 'Skalieren Sie das VERY AQUAFABA Baiserrezept auf beliebig viele Ansätze oder Baisers: flüssiges Aquafaba, Zucker sowie die Entsprechung in Pulver und Wasser.',
    lead: 'Jeder Ansatz Baiser beginnt mit derselben Frage: Wie viel Aquafaba, und wie viel Zucker? Sagen Sie dem Rechner, wie viele Baisers Sie brauchen, und er beantwortet beides, flüssig oder als Pulver mit seinem Wasser, skaliert nach dem VERY AQUAFABA Rezept.',
    example: { batches: 5 },
    sections: [
      {
        id: 'scaling',
        title: 'Was bei einem größeren Ansatz mitwächst, und was nicht',
        html: `<p>Aquafaba, Zucker, Pulver und Wasser wachsen linear mit: doppelt so viele Baisers, doppelt so viel von jedem. Dasselbe gilt für den optionalen Stabilisator, 2 g Weinstein oder 1 g Zitronensäure pro Ansatz, den der Rechner weglässt, weil viele Küchen ohne ihn arbeiten. Drei Dinge wachsen nicht mit.</p>
<ul>
<li>Die Aufschlagzeit. Der Referenzansatz erreicht auf hoher Stufe in {whip} Minuten weiche Spitzen. Eine vollere Schüssel braucht länger, beurteilen Sie den Schaum also nach den Spitzen, nicht nach der Uhr.</li>
<li>Das Trocknen. Die Bleche trocknen bei {bake} °C ohne Umluft für {bake_time} Stunden, unabhängig von der Ansatzgröße. Mehr Baisers bedeuten mehr Bleche, nicht einen heißeren Ofen.</li>
<li>Die Temperatur. Das Aquafaba kommt mit {chill} °C in die Schüssel, und angerührtes Pulver wird auf denselben Punkt gekühlt, für einen Ansatz wie für zehn.</li>
</ul>
<p>Schlagen Sie auf, was Ihre Rührschüssel bequem fasst, und spritzen Sie jede Schüssel sofort aus: Aquafabaschaum verliert Volumen, wenn er steht, während die nächste Schüssel läuft.</p>`,
      },
      {
        id: 'packs',
        title: 'Wie viele Ansätze Baiser bekommen Sie aus einem Gebinde?',
        html: `<p>Wenn Sie Ihre Ansätze pro Woche kennen, sehen Sie hier, was jedes Gebinde wert ist.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Gebinde</th><th scope="col">Ansätze</th><th scope="col">Baisers, ca.</th></tr></thead>
<tbody>
<tr><td data-label="Gebinde">1 L Tetrapak flüssig</td><td data-label="Ansätze">{batches_1l}</td><td data-label="Baisers, ca.">{pieces_1l}</td></tr>
<tr><td data-label="Gebinde">10 L Bag-in-Box flüssig</td><td data-label="Ansätze">{batches_10l}</td><td data-label="Baisers, ca.">{pieces_10l}</td></tr>
<tr><td data-label="Gebinde">200 g Beutel Pulver</td><td data-label="Ansätze">{batches_200g}</td><td data-label="Baisers, ca.">{pieces_200g}</td></tr>
<tr><td data-label="Gebinde">3 kg Sack Pulver</td><td data-label="Ansätze">{batches_3kg}</td><td data-label="Baisers, ca.">{pieces_3kg}</td></tr>
</tbody>
</table>
<p>Ob Sie flüssig oder Pulver kaufen, ist eine andere Frage, und sie hängt davon ab, wie oft Sie den Ofen füllen: Ein geöffnetes Flüssiggebinde hält {opened_days} Tage im Kühlschrank, ein geöffneter Beutel wartet. Der <a href="{guide_href}">Baiser-Leitfaden</a> klärt das.</p>`,
      },
      {
        id: 'example',
        title: 'Beispiel: {ex_pieces} Baisers mit Aquafaba vorbereiten',
        html: `<p>Angenommen, ein Buffet steht an und Sie brauchen {ex_pieces} kleine Baisers. Das sind {ex_batches} Ansätze des Rezepts, und darauf läuft es hinaus:</p>
<ul>
<li>Flüssig: {ex_dose} g VERY AQUAFABA und {ex_sugar} g feiner Zucker, als Ersatz für {ex_eggs} Eiweiße.</li>
<li>Pulver: {ex_powder} g Pulver, angerührt mit {ex_water} ml Wasser, dann dieselben {ex_sugar} g Zucker.</li>
<li>Ofen: {ex_batches} Ansätze, gespritzt auf 3 bis 4 cm, füllen mehrere Bleche, und jedes Blech trocknet die vollen {bake_time} Stunden bei {bake} °C.</li>
</ul>
<p>In einem Durchgang aufgeschlagen braucht diese Menge eine große Planetenrührmaschine. In einer Tischmaschine schlagen Sie sie als {ex_batches} getrennte Ansätze auf und spritzen jeden aus, bevor der nächste beginnt.</p>`,
      },
    ],
    faq: [
      { q: 'Wie viele Baisers ergibt ein Ansatz?', a: '{yield} von 3 bis 4 cm, aus {dose} g Aquafaba und {sugar} g Zucker. Spritzen Sie kleiner, steigt die Stückzahl; die Mengen bleiben gleich.' },
      { q: 'Wie viel Aquafaba ersetzt ein Eiweiß?', a: '{white_liquid} g flüssig oder {white_powder} g Pulver, angerührt mit {white_water} ml Wasser. Ein Ansatz Baiser ersetzt {eggs} Eiweiße.' },
      { q: 'Kann ich den Ansatz halbieren?', a: 'Ja. {half_dose} g Aquafaba und {half_sugar} g Zucker ergeben etwa {half_yield} Baisers. Eine kleine Menge in einer großen Schüssel braucht länger zum Aufschlagen, nehmen Sie also die kleinste Schüssel Ihrer Maschine.' },
      { q: 'Braucht ein doppelter Ansatz die doppelte Aufschlagzeit?', a: 'Nein. Er braucht mehr Zeit als ein einfacher Ansatz, aber nicht doppelt so viel. Schlagen Sie bis zu weichen Spitzen, die beim Referenzansatz {whip} Minuten dauern, und geben Sie den Zucker erst dann dazu.' },
      { q: 'Wie viel Wasser gebe ich zum Pulver?', a: '{white_water} ml auf je {white_powder} g Pulver. Für einen Ansatz Baiser sind das {powder_dose} g Pulver und {water_dose} ml Wasser; der Rechner skaliert beides.' },
      { q: 'Woher kommt die Zuckermenge?', a: 'Aus dem Baiserrezept auf dieser Website: gleiche Gewichte, {sugar} g Zucker auf {dose} g Aquafaba. Die vollständige Methode steht im [Baiserrezept]({recipe_href}).' },
    ],
  },

  'chocolate-mousse': {
    title: 'Mengenrechner: Aquafaba-Schokoladenmousse - VERY AQUAFABA',
    h1: 'Wie viel Aquafaba für Schokoladenmousse? Der Mengenrechner',
    description: 'Skalieren Sie das VERY AQUAFABA Rezept für Schokoladenmousse auf beliebig viele Portionen: Aquafaba, Zucker, dunkle Schokolade sowie Pulver und Wasser.',
    lead: 'In dieser Mousse übernimmt das aufgeschlagene Aquafaba die Arbeit der Eiweiße und der Sahne, seine Menge richtig zu treffen ist also der größte Teil der Aufgabe. Sagen Sie dem Rechner, wie viele Portionen Sie brauchen, und er nennt Ihnen das passende Aquafaba, die Schokolade und den Zucker, flüssig oder als Pulver mit seinem Wasser, nach dem VERY AQUAFABA Rezept.',
    example: { batches: 5 },
    sections: [
      {
        id: 'scaling',
        title: 'Was beim Skalieren der Mousse mitwächst, und was nicht',
        html: `<p>Aquafaba, Zucker, Schokolade, Pulver und Wasser wachsen linear mit, ebenso der optionale Stabilisator, 2 g Weinstein oder 1 g Zitronensäure pro Ansatz, den der Rechner weglässt. Die beiden Temperaturen und die Kühlzeit wachsen nicht mit.</p>
<ul>
<li>Die Schokolade wird auf 45 bis 50 °C geschmolzen und vor dem Unterheben auf {fold_temp} °C abgekühlt, für einen Ansatz wie für zehn. Schokolade über {fold_temp} °C schmilzt den Schaum.</li>
<li>Das Aufschlagen bis zu weichen Spitzen dauert beim Referenzansatz etwa {whip} Minuten; eine vollere Schüssel braucht länger, beurteilen Sie also nach den Spitzen.</li>
<li>Die Mousse steht mindestens {set_time} Stunden im Kühlschrank, unabhängig vom Ansatz, und hält {keep} Tage.</li>
</ul>
<p>Große Ansätze? Emulgieren Sie zuerst einen Teil der Schokolade mit etwas Aquafaba und heben Sie dann den restlichen Schaum unter. So bleiben große Durchgänge homogen.</p>`,
      },
      {
        id: 'packs',
        title: 'Wie viele Portionen Mousse bekommen Sie aus einem Gebinde?',
        html: `<p>Wenn Sie wissen, wie viele Portionen Sie pro Woche anrichten, sehen Sie hier, was jedes Gebinde wert ist.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Gebinde</th><th scope="col">Ansätze</th><th scope="col">Portionen, ca.</th></tr></thead>
<tbody>
<tr><td data-label="Gebinde">1 L Tetrapak flüssig</td><td data-label="Ansätze">{batches_1l}</td><td data-label="Portionen, ca.">{pieces_1l}</td></tr>
<tr><td data-label="Gebinde">10 L Bag-in-Box flüssig</td><td data-label="Ansätze">{batches_10l}</td><td data-label="Portionen, ca.">{pieces_10l}</td></tr>
<tr><td data-label="Gebinde">200 g Beutel Pulver</td><td data-label="Ansätze">{batches_200g}</td><td data-label="Portionen, ca.">{pieces_200g}</td></tr>
<tr><td data-label="Gebinde">3 kg Sack Pulver</td><td data-label="Ansätze">{batches_3kg}</td><td data-label="Portionen, ca.">{pieces_3kg}</td></tr>
</tbody>
</table>
<p>Ob Sie flüssig oder Pulver kaufen, hängt davon ab, wie oft Mousse auf der Karte steht: Ein geöffnetes Flüssiggebinde hält {opened_days} Tage im Kühlschrank, ein geöffneter Beutel wartet zwischen zwei Karten. Der <a href="{guide_href}">Leitfaden zur Schokoladenmousse</a> klärt das.</p>`,
      },
      {
        id: 'example',
        title: 'Beispiel: {ex_pieces} Portionen Mousse für ein Bankett vorbereiten',
        html: `<p>Angenommen, ein Bankett braucht {ex_pieces} Portionen Mousse. Das sind {ex_batches} Ansätze des Rezepts, und darauf läuft es hinaus:</p>
<ul>
<li>Flüssig: {ex_dose} g VERY AQUAFABA, {ex_sugar} g feiner Zucker und {ex_chocolate} g dunkle Schokolade, als Ersatz für {ex_eggs} Eiweiße.</li>
<li>Pulver: {ex_powder} g Pulver, angerührt mit {ex_water} ml Wasser, dann derselbe Zucker und dieselbe Schokolade.</li>
<li>Kühlschrank: {ex_pieces} Becher brauchen vor dem Service mindestens {set_time} Stunden Kühlplatz.</li>
</ul>
<p>Lassen Sie die gesamte Schokolade auf {fold_temp} °C abkühlen, bevor die erste Schüssel aufgeschlagen wird: Der Schaum darf nicht auf sie warten.</p>`,
      },
    ],
    faq: [
      { q: 'Wie viele Portionen ergibt ein Ansatz?', a: '{yield}, aus {dose} g Aquafaba, {sugar} g Zucker und {chocolate} g dunkler Schokolade. Kleinere Becher ergeben mehr Portionen; die Mengen bleiben gleich.' },
      { q: 'Wie viel Aquafaba ersetzt ein Eiweiß?', a: '{white_liquid} g flüssig oder {white_powder} g Pulver, angerührt mit {white_water} ml Wasser. Ein Ansatz Mousse ersetzt {eggs} Eiweiße und die Sahne.' },
      { q: 'Kann ich den Ansatz halbieren?', a: 'Ja. {half_dose} g Aquafaba, {half_sugar} g Zucker und {half_chocolate} g Schokolade ergeben etwa {half_yield} Portionen. Nehmen Sie für eine kleine Menge die kleinste Schüssel Ihrer Maschine.' },
      { q: 'Ändert sich die Schokoladentemperatur mit der Ansatzgröße?', a: 'Nein. Kühlen Sie sie vor dem Unterheben auf {fold_temp} °C, egal bei welcher Menge. Schokolade über {fold_temp} °C schmilzt den Schaum, und die Mousse fällt beim Unterheben zusammen.' },
      { q: 'Wie viel Wasser gebe ich zum Pulver?', a: '{white_water} ml auf je {white_powder} g Pulver. Für einen Ansatz Mousse sind das {powder_dose} g Pulver und {water_dose} ml Wasser; der Rechner skaliert beides.' },
      { q: 'Woher kommen die Mengen für Schokolade und Zucker?', a: 'Aus dem Rezept für Schokoladenmousse auf dieser Website: {chocolate} g dunkle Kuvertüre und {sugar} g feiner Zucker auf {dose} g Aquafaba. Die vollständige Methode steht im [Rezept für Schokoladenmousse]({recipe_href}).' },
    ],
  },

  mayonnaise: {
    title: 'Vegane Mayonnaise mit Aquafaba: Rechner - VERY AQUAFABA',
    h1: 'Wie viel Aquafaba für vegane Mayonnaise? Der Mengenrechner',
    description: 'Skalieren Sie das VERY AQUAFABA Mayonnaiserezept auf die Menge, die Sie brauchen: Aquafaba, Öl, Senf, Salz, Zitronensaft sowie Pulver und Wasser.',
    lead: 'Mayonnaise ist zuerst ein Verhältnis und dann ein Rezept: so viel Öl auf so viel Aquafaba. Sagen Sie dem Rechner, wie viel Mayonnaise Sie brauchen, und er ermittelt das Aquafaba und das Öl, dazu Senf, Salz und Zitronensaft, flüssig oder als Pulver mit seinem Wasser, nach dem VERY AQUAFABA Rezept.',
    example: { batches: 4 },
    sections: [
      {
        id: 'scaling',
        title: 'Was bei einem größeren Ansatz Mayonnaise mitwächst, und was nicht',
        html: `<p>Aquafaba, Öl, Senf, Salz, Zitronensaft, Pulver und Wasser wachsen linear mit. Zwei Dinge tun das nicht.</p>
<ul>
<li>Die Temperatur. Das Aquafaba kommt gekühlt hinein, mit {chill} °C, für einen Ansatz wie für zehn. Warmes Aquafaba gibt eine langsame, instabile Emulsion.</li>
<li>Die Scherkraft. Das Öl läuft als dünner, gleichmäßiger Strahl bei voller Mixergeschwindigkeit ein. Große Ansätze brauchen einen Hochleistungsmixer, um die Tröpfchengröße zu steuern und die Emulsion stabil zu halten.</li>
</ul>
<p>Hygienisch hergestellt und sofort gekühlt hält die Mayonnaise bis zu {keep} Tage im Kühlschrank, unabhängig von der Ansatzgröße.</p>`,
      },
      {
        id: 'packs',
        title: 'Wie viel Mayonnaise bekommen Sie aus einem Gebinde?',
        html: `<p>Wenn Sie wissen, wie viel Mayonnaise Sie pro Woche machen, sehen Sie hier, was jedes Gebinde wert ist.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Gebinde</th><th scope="col">Ansätze</th><th scope="col">Mayonnaise, ca.</th></tr></thead>
<tbody>
<tr><td data-label="Gebinde">1 L Tetrapak flüssig</td><td data-label="Ansätze">{batches_1l}</td><td data-label="Mayonnaise, ca.">{pieces_1l} g</td></tr>
<tr><td data-label="Gebinde">10 L Bag-in-Box flüssig</td><td data-label="Ansätze">{batches_10l}</td><td data-label="Mayonnaise, ca.">{pieces_10l} g</td></tr>
<tr><td data-label="Gebinde">200 g Beutel Pulver</td><td data-label="Ansätze">{batches_200g}</td><td data-label="Mayonnaise, ca.">{pieces_200g} g</td></tr>
<tr><td data-label="Gebinde">3 kg Sack Pulver</td><td data-label="Ansätze">{batches_3kg}</td><td data-label="Mayonnaise, ca.">{pieces_3kg} g</td></tr>
</tbody>
</table>
<p>Ein Ansatz braucht so wenig Aquafaba, dass selbst ein 1 L Gebinde lange reicht. Die Frage ist also, ob Sie ein geöffnetes innerhalb von {opened_days} Tagen verbrauchen. Wenn nicht, wartet das Pulver. Der <a href="{guide_href}">Leitfaden zur veganen Mayonnaise</a> klärt das.</p>`,
      },
      {
        id: 'example',
        title: 'Beispiel: {ex_pieces_kg} Mayonnaise für die Woche vorbereiten',
        html: `<p>Angenommen, Ihre Küche verbraucht etwa {ex_pieces_kg} Mayonnaise pro Woche. Das sind {ex_batches} Ansätze des Rezepts, und darauf läuft es hinaus:</p>
<ul>
<li>Flüssig: {ex_dose} g VERY AQUAFABA, {ex_oil} g Öl, {ex_mustard} g Senf, {ex_salt} g Salz und {ex_lemon} g Zitronensaft oder Essig, so viel Aquafaba wie für {ex_eggs} Eiweiße.</li>
<li>Pulver: {ex_powder} g Pulver, angerührt mit {ex_water} ml Wasser, dann dasselbe Öl, derselbe Senf, dasselbe Salz und dieselbe Zitrone.</li>
<li>Gerät: Bei dieser Menge wechseln Sie zum Hochleistungsmixer und lassen das Öl als dünnen, gleichmäßigen Strahl einlaufen.</li>
</ul>
<p>In saubere Behälter umfüllen und sofort kühlen: Dort beginnen die {keep} Tage Haltbarkeit.</p>`,
      },
    ],
    faq: [
      { q: 'Wie viel Mayonnaise ergibt ein Ansatz?', a: '{yield}, aus {dose} g Aquafaba und {oil} g Öl. Geben Sie die Gramm ein, die Sie brauchen, und der Rechner nennt die Ansätze und jede Zutat.' },
      { q: 'Wie viel Aquafaba ersetzt das Ei in der Mayonnaise?', a: 'In diesem Rezept steht Aquafaba für das Eigelb: {dose} g flüssig auf {oil} g Öl, ein Verhältnis von {oil_ratio} nach Gewicht. In Pulver {powder_dose} g, angerührt mit {water_dose} ml Wasser.' },
      { q: 'Kann ich den Ansatz halbieren?', a: 'Ja. {half_dose} g Aquafaba und {half_oil} g Öl ergeben etwa {half_yield} g Mayonnaise. Nehmen Sie ein hohes, schmales Gefäß, damit der Stabmixer bei einer kleinen Menge die Scherkraft hoch hält.' },
      { q: 'Darf das Öl bei einem großen Ansatz schneller einlaufen?', a: 'Nein. Das Öl läuft immer als dünner, gleichmäßiger Strahl bei voller Mixergeschwindigkeit ein. Wenn die Emulsion nie beginnt, kam das Öl zu schnell oder die Scherkraft war zu gering.' },
      { q: 'Wie viel Wasser gebe ich zum Pulver?', a: '{white_water} ml auf je {white_powder} g Pulver. Für einen Ansatz Mayonnaise sind das {powder_dose} g Pulver und {water_dose} ml Wasser, auf einer Feinwaage gewogen; der Rechner skaliert beides.' },
      { q: 'Woher kommen die Mengen für Öl und Senf?', a: 'Aus dem Mayonnaiserezept auf dieser Website: {oil} g neutrales Öl, {mustard} g Dijon-Senf, {salt} g Salz und {lemon} g Zitronensaft oder Essig auf {dose} g Aquafaba. Die vollständige Methode steht im [Mayonnaiserezept]({recipe_href}).' },
    ],
  },

  baking: {
    title: 'Aquafaba-Rechner für den Ei-Ersatz - VERY AQUAFABA',
    h1: 'Wie viel Aquafaba ersetzt die Eier in Ihrem Rezept? Der Ersatzrechner',
    description: 'Geben Sie die Eier, Eiweiße und Eigelbe Ihres Rezepts ein und erhalten Sie das VERY AQUAFABA flüssig oder Pulver, das sie ersetzt, samt Wasser für das Pulver.',
    lead: 'Eier in einem Rezept zu ersetzen läuft auf eine Rechnung hinaus. Tippen Sie die ganzen Eier, die Eiweiße und die Eigelbe Ihres Rezepts ein, und der Rechner nennt das Aquafaba, das an ihre Stelle tritt, flüssig oder als Pulver mit seinem Wasser, samt dem Öl, das das Eigelb ersetzt.',
    example: { eggs: 3, whites: 2 },
    sections: [
      {
        id: 'rule',
        title: 'Die vier Entsprechungen, mit denen er rechnet',
        html: `<ul>
<li>Ein ganzes Ei: {egg_liquid} g flüssiges Aquafaba oder {egg_powder} g Pulver, angerührt mit {egg_water} ml Wasser.</li>
<li>Ein Eiweiß: {white_liquid} g flüssig oder {white_powder} g Pulver, angerührt mit {white_water} ml Wasser.</li>
<li>Ein Eigelb: {yolk_liquid} g Aquafaba plus {yolk_oil} g Öl, denn Aquafaba bringt kein Fett mit.</li>
</ul>
<p>Sie stammen von der Produktseite und aus dem Back-Leitfaden dieser Website, und der Rechner zählt sie für die eingegebenen Eier einfach zusammen.</p>`,
      },
      {
        id: 'how',
        title: 'Wie das Aquafaba ins Gebäck kommt',
        html: `<p>Aquafaba erledigt beim Backen drei Aufgaben: Es hält Luft, es bindet, und es hält Feuchtigkeit. Deshalb arbeitet es auf zwei Arten. Schlagen Sie es auf, wenn es Eiweiße ersetzt. Gießen Sie es so hinein, wie es ist, wenn es die Bindung und Feuchtigkeit ganzer Eier ersetzt.</p>
<ul>
<li>Biskuit und Genoise: bei {chill} °C aufgeschlagen, dann behutsam und zügig untergehoben.</li>
<li>Kuchen, Cookies und Muffins: mit dem Zucker gemischt, bevor es auf das Fett trifft.</li>
<li>Cookies und Brownies: direkt zugegeben, nicht aufgeschlagen, für Bindung und Feuchtigkeit.</li>
<li>Brioche und süße Brötchen: nicht aufgeschlagen, mit den Flüssigkeiten des Teigs.</li>
</ul>
<p>Ganze Eier ersetzen? Aquafaba bringt mehr Wasser mit als Ei. Reduzieren Sie Milch oder Wasser leicht oder erhöhen Sie die trockenen Zutaten, und backen Sie vollständig durch. Nur die Eiweiße zu ersetzen braucht normalerweise keine Anpassung. Der <a href="{guide_href}">Back-Leitfaden</a> geht jeden Fall einzeln durch.</p>`,
      },
      {
        id: 'packs',
        title: 'Wie viele Eier ersetzt ein Gebinde?',
        html: `<p>Wenn Sie wissen, wie viele Eier Sie pro Woche ersetzen, sehen Sie hier, was jedes Gebinde wert ist.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Gebinde</th><th scope="col">Ganze Eier</th><th scope="col">Eiweiße</th></tr></thead>
<tbody>
<tr><td data-label="Gebinde">1 L Tetrapak flüssig</td><td data-label="Ganze Eier">{eggs_1l}</td><td data-label="Eiweiße">{whites_1l}</td></tr>
<tr><td data-label="Gebinde">10 L Bag-in-Box flüssig</td><td data-label="Ganze Eier">{eggs_10l}</td><td data-label="Eiweiße">{whites_10l}</td></tr>
<tr><td data-label="Gebinde">200 g Beutel Pulver</td><td data-label="Ganze Eier">{eggs_200g}</td><td data-label="Eiweiße">{whites_200g}</td></tr>
<tr><td data-label="Gebinde">3 kg Sack Pulver</td><td data-label="Ganze Eier">{eggs_3kg}</td><td data-label="Eiweiße">{whites_3kg}</td></tr>
</tbody>
</table>
<p>Ungeöffnet halten beide Formate mindestens {unopened_months} Monate bei Raumtemperatur. Ein geöffnetes Flüssiggebinde hält {opened_days} Tage im Kühlschrank; ein geöffneter Pulverbeutel muss nur trocken und verschlossen bleiben.</p>`,
      },
      {
        id: 'example',
        title: 'Beispiel: ein Kuchenrezept mit {ex_eggs} Eiern und {ex_whites} Eiweißen',
        html: `<p>Angenommen, Ihr Kuchenrezept verlangt {ex_eggs} ganze Eier und {ex_whites} Eiweiße. Das ersetzt sie:</p>
<ul>
<li>Flüssig: insgesamt {ex_liquid} g VERY AQUAFABA. Der Anteil der Eiweiße wird bei {chill} °C aufgeschlagen; der Anteil der ganzen Eier kommt so hinein, wie er ist, mit dem Zucker vor dem Fett.</li>
<li>Pulver: {ex_powder} g Pulver, angerührt mit {ex_water} ml Wasser, dann genauso verwendet.</li>
<li>Anpassung: Die ganzen Eier werden getauscht, also Milch oder Wasser leicht reduzieren oder trockene Zutaten zugeben und vollständig durchbacken.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Wie viel Aquafaba ersetzt ein ganzes Ei?', a: '{egg_liquid} g VERY AQUAFABA flüssig oder {egg_powder} g Pulver, angerührt mit {egg_water} ml Wasser. Ganze Eier bringen Wasser mit, reduzieren Sie also die anderen Flüssigkeiten leicht.' },
      { q: 'Wie viel Aquafaba ersetzt ein Eiweiß?', a: '{white_liquid} g flüssig oder {white_powder} g Pulver, angerührt mit {white_water} ml Wasser. Nur die Eiweiße zu ersetzen braucht normalerweise keine weitere Anpassung.' },
      { q: 'Kann Aquafaba das Eigelb ersetzen?', a: 'Für Bindung und Fülle stehen {yolk_liquid} g Aquafaba plus {yolk_oil} g Öl für ein Eigelb. Der Rechner fügt das Öl hinzu, wenn Sie Eigelbe eingeben.' },
      { q: 'Aufschlagen oder einfach hineingießen?', a: 'Aufschlagen, gekühlt auf {chill} °C, wenn es Eiweiße in einem Biskuit oder einer zuckerreichen Masse ersetzt. Nicht aufgeschlagen hineingießen, wenn es die Bindung und Feuchtigkeit ganzer Eier in Cookies, Brownies und Teigen ersetzt.' },
      { q: 'Warum ist mein Teig nach dem Eiertausch zu flüssig?', a: 'Ganze Eier wurden eins zu eins getauscht und das Wasser nicht reduziert. Reduzieren Sie Milch oder Wasser leicht oder geben Sie trockene Zutaten dazu, und backen Sie vollständig durch.' },
      { q: 'Woher stammen diese Entsprechungen?', a: 'Von der Produktseite und aus dem [Leitfaden zum Backen mit Aquafaba]({recipe_href}) auf dieser Website: {egg_liquid} g pro ganzem Ei, {white_liquid} g pro Eiweiß und {white_powder} g Pulver pro Eiweiß.' },
    ],
  },

  cocktails: {
    title: 'Aquafaba-Cocktailrechner: Sours pro Gebinde - VERY AQUAFABA',
    h1: 'Wie viel Aquafaba pro Cocktail? Der Mengenrechner',
    description: 'Skalieren Sie den VERY AQUAFABA Whiskey Sour auf die Sours Ihres Service: Aquafaba pro Drink, Whiskey, Zitrone und Sirup sowie Pulver und Wasser.',
    lead: 'Ein Samstagabend ist leichter, wenn das Aquafaba schon angerührt ist. Sagen Sie dem Rechner, wie viele Sours Sie erwarten, und er nennt Ihnen das Aquafaba für den Service, mit Whiskey, Zitrone und Sirup zum Vorbatchen, flüssig oder als Pulver mit seinem Wasser, nach dem VERY AQUAFABA Whiskey Sour.',
    example: { batches: 40 },
    sections: [
      {
        id: 'scaling',
        title: 'Was bei einem volleren Service mitwächst, und was nicht',
        html: `<p>Aquafaba, Whiskey, Zitrone, Sirup, Pulver und Wasser wachsen linear mit der Zahl der Drinks. Angerührtes Pulver wird vor dem Service gekühlt, egal wie viele Drinks es abdeckt. Das Shaken wächst nicht mit.</p>
<ul>
<li>Jeder Drink wird auf Bestellung geshaked: ein Dry Shake von {dry_shake} Sekunden ohne Eis, in dem der Schaum entsteht, dann {wet_shake} Sekunden mit Eis zum Kühlen und Verdünnen.</li>
<li>Viel los im Service? Bereiten Sie Whiskey, Zitrone und Sirup als Batch vor. Das Aquafaba kommt erst beim Shaken dazu, nie in den Batch: Aquafaba im Vorbatch gibt bis zur Mitte des Service keine Höhe mehr.</li>
<li>Wiegen oder jiggern Sie jedes Mal {dose} g. Freies Eingießen macht die Drinks ungleichmäßig.</li>
</ul>`,
      },
      {
        id: 'packs',
        title: 'Wie viele Sours bekommen Sie aus einem Gebinde?',
        html: `<p>Wenn Sie Ihre Sours pro Woche kennen, sehen Sie hier, was jedes Gebinde wert ist.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Gebinde</th><th scope="col">Cocktails</th></tr></thead>
<tbody>
<tr><td data-label="Gebinde">1 L Tetrapak flüssig</td><td data-label="Cocktails">{batches_1l}</td></tr>
<tr><td data-label="Gebinde">10 L Bag-in-Box flüssig</td><td data-label="Cocktails">{batches_10l}</td></tr>
<tr><td data-label="Gebinde">200 g Beutel Pulver</td><td data-label="Cocktails">{batches_200g}</td></tr>
<tr><td data-label="Gebinde">3 kg Sack Pulver</td><td data-label="Cocktails">{batches_3kg}</td></tr>
</tbody>
</table>
<p>Ob Sie flüssig oder Pulver kaufen, hängt davon ab, wie schnell Sie ein Gebinde leeren: Ein geöffnetes 1 L Gebinde wird innerhalb von {opened_days} Tagen verbraucht, ein geöffneter Beutel wartet auf die nächste Bestellung. Der <a href="{guide_href}">Cocktail-Leitfaden</a> klärt das.</p>`,
      },
      {
        id: 'example',
        title: 'Beispiel: {ex_batches} Sours für einen Samstagabend vorbereiten',
        html: `<p>Angenommen, Sie erwarten an einem Samstagabend {ex_batches} Sours. Das sollten Sie bereithalten:</p>
<ul>
<li>Flüssig: {ex_dose} g VERY AQUAFABA, {ex_whiskey} ml Whiskey, {ex_lemon_juice} ml Zitronensaft und {ex_syrup} ml Zuckersirup.</li>
<li>Pulver: {ex_powder} g Pulver, vor dem Service mit {ex_water} ml Wasser angerührt und gekühlt.</li>
<li>Vorbatch: Whiskey, Zitrone und Sirup lassen sich vorab batchen; das Aquafaba kommt pro Drink beim Shaken in den Shaker.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Wie viel Aquafaba nehme ich pro Cocktail?', a: '{dose} g gekühltes Aquafaba pro Drink anstelle des Eiweißes. Ein 1 L Tetrapak ergibt {batches_1l} Cocktails, ein 200 g Beutel Pulver {batches_200g}.' },
      { q: 'Kann ich das Aquafaba mit der Basis batchen?', a: 'Nein. Batchen Sie nur Whiskey, Zitrone und Sirup und geben Sie das Aquafaba pro Drink beim Shaken dazu. Aquafaba im Vorbatch verliert bis zur Mitte des Service seine Höhe.' },
      { q: 'Wie viel Wasser gebe ich zum Pulver?', a: '{white_water} ml auf je {white_powder} g Pulver. Für einen Drink sind das {powder_dose} g Pulver und {water_dose} ml Wasser; für einen Service skaliert der Rechner beides.' },
      { q: 'Ändert ein größerer Service das Shaken?', a: 'Nein. Jeder Drink bekommt seinen Dry Shake von {dry_shake} Sekunden und sein Shaken mit Eis von {wet_shake} Sekunden. Die Zahl der Drinks ändert den Vorrat, nicht die Methode.' },
      { q: 'Verändert Aquafaba den Geschmack des Drinks?', a: 'Nein. Es trägt den Schaum und das weiche Mundgefühl. Der Geschmack bleibt bei Ihrem Whiskey, Ihrer Zitrone und Ihrem Sirup.' },
      { q: 'Woher kommen die Mengen des Drinks?', a: 'Aus dem Whiskey-Sour-Rezept auf dieser Website: {whiskey} ml Whiskey, {lemon_juice} ml Zitronensaft, {syrup} ml Zuckersirup und {dose} g Aquafaba pro Drink. Die vollständige Methode steht im [Whiskey-Sour-Rezept]({recipe_href}).' },
    ],
  },

  macarons: {
    title: 'Mengenrechner für Aquafaba-Macarons - VERY AQUAFABA',
    h1: 'Wie viel Aquafaba für Macarons? Der Mengenrechner',
    description: 'Skalieren Sie das VERY AQUAFABA Macaronrezept auf beliebig viele Macarons: Aquafaba, feiner Zucker, Mandelmehl, Puderzucker sowie Pulver und Wasser.',
    lead: 'Eine Macaronschale verzeiht sehr wenig, der Ansatz sollte also stimmen, bevor der Besen anläuft. Sagen Sie dem Rechner, wie viele Macarons Sie brauchen, und er nennt Ihnen das Aquafaba, den feinen Zucker, das Mandelmehl und den Puderzucker für den Durchgang, flüssig oder als Pulver mit seinem Wasser, nach dem VERY AQUAFABA Rezept.',
    example: { batches: 5 },
    sections: [
      {
        id: 'scaling',
        title: 'Was bei einem größeren Ansatz mitwächst, und was nicht',
        html: `<p>Aquafaba, feiner Zucker, Mandelmehl, Puderzucker, Pulver und Wasser wachsen linear mit. Angerührtes Pulver wird vor dem Aufschlagen gekühlt, egal bei welchem Ansatz. Die Zeiten und die Temperatur wachsen nicht mit.</p>
<ul>
<li>Das Ruhen: Die gespritzten Kreise ruhen bei Raumtemperatur, bis sich eine trockene Haut bildet, {rest} Minuten je nach Luftfeuchtigkeit, unabhängig vom Ansatz.</li>
<li>Das Backen: {bake} °C ohne Umluft, {bake_time} Minuten pro Blech. Mehr Macarons bedeuten mehr Bleche.</li>
<li>Das Reifen: Zusammengesetzte und gefüllte Schalen ruhen {mature} Stunden im Kühlschrank vor dem Servieren.</li>
</ul>
<p>Industrieansätze? Halten Sie die Aquafabakonzentration bei {concentration} g/ml, damit die Schalen von Durchgang zu Durchgang gleich ausfallen.</p>`,
      },
      {
        id: 'packs',
        title: 'Wie viele Macarons bekommen Sie aus einem Gebinde?',
        html: `<p>Wenn Sie Ihre Ansätze pro Woche kennen, sehen Sie hier, was jedes Gebinde wert ist.</p>
<table class="va-guide-grid">
<thead><tr><th scope="col">Gebinde</th><th scope="col">Ansätze</th><th scope="col">Macarons, ca.</th></tr></thead>
<tbody>
<tr><td data-label="Gebinde">1 L Tetrapak flüssig</td><td data-label="Ansätze">{batches_1l}</td><td data-label="Macarons, ca.">{pieces_1l}</td></tr>
<tr><td data-label="Gebinde">10 L Bag-in-Box flüssig</td><td data-label="Ansätze">{batches_10l}</td><td data-label="Macarons, ca.">{pieces_10l}</td></tr>
<tr><td data-label="Gebinde">200 g Beutel Pulver</td><td data-label="Ansätze">{batches_200g}</td><td data-label="Macarons, ca.">{pieces_200g}</td></tr>
<tr><td data-label="Gebinde">3 kg Sack Pulver</td><td data-label="Ansätze">{batches_3kg}</td><td data-label="Macarons, ca.">{pieces_3kg}</td></tr>
</tbody>
</table>
<p>Ob Sie flüssig oder Pulver kaufen, hängt davon ab, wie oft Sie spritzen: Ein geöffnetes Flüssiggebinde hält {opened_days} Tage im Kühlschrank, ein geöffneter Beutel wartet auf den nächsten Auftrag. Der <a href="{guide_href}">Macaron-Leitfaden</a> klärt das.</p>`,
      },
      {
        id: 'example',
        title: 'Beispiel: {ex_pieces} Macarons für eine Hochzeit vorbereiten',
        html: `<p>Angenommen, ein Hochzeitsauftrag über {ex_pieces} gefüllte Macarons kommt herein. Das sind {ex_batches} Ansätze des Rezepts, und darauf läuft es hinaus:</p>
<ul>
<li>Flüssig: {ex_dose} g VERY AQUAFABA, {ex_sugar} g feiner Zucker, {ex_almond} g Mandelmehl und {ex_icing_sugar} g Puderzucker, als Ersatz für {ex_eggs} Eiweiße.</li>
<li>Pulver: {ex_powder} g Pulver, angerührt mit {ex_water} ml Wasser, dann dieselben Zucker und dasselbe Mehl.</li>
<li>Planung: Die Schalen backen {bake_time} Minuten pro Blech bei {bake} °C, werden dann zusammengesetzt, gefüllt und reifen {mature} Stunden vor dem Tag.</li>
</ul>
<p>Erst sieben und die Bleche auslegen, zuletzt aufschlagen: Der Schaum muss das Unterheben und das Ruhen überstehen, er darf also nicht stehen, während die trockene Mischung vorbereitet wird.</p>`,
      },
    ],
    faq: [
      { q: 'Wie viele Macarons ergibt ein Ansatz?', a: '{yield}, aus {dose} g Aquafaba, {sugar} g feinem Zucker, {almond} g Mandelmehl und {icing_sugar} g Puderzucker. Spritzen Sie die Kreise auf 3 bis 4 cm.' },
      { q: 'Wie viel Aquafaba ersetzt ein Eiweiß?', a: '{white_liquid} g flüssig oder {white_powder} g Pulver, angerührt mit {white_water} ml Wasser. Ein Ansatz Macarons ersetzt {eggs} Eiweiße.' },
      { q: 'Kann ich den Ansatz halbieren?', a: 'Ja. {half_dose} g Aquafaba, {half_sugar} g feiner Zucker, {half_almond} g Mandelmehl und {half_icing_sugar} g Puderzucker ergeben etwa {half_yield} Macarons. Nehmen Sie die kleinste Schüssel Ihrer Maschine.' },
      { q: 'Ruht oder backt ein größerer Ansatz länger?', a: 'Nein. Jedes Blech ruht, bis sich eine trockene Haut bildet, {rest} Minuten je nach Luftfeuchtigkeit, und backt {bake_time} Minuten bei {bake} °C. Ein größerer Ansatz bedeutet mehr Bleche, nicht längere Zeiten.' },
      { q: 'Wie viel Wasser gebe ich zum Pulver?', a: '{white_water} ml auf je {white_powder} g Pulver. Für einen Ansatz Macarons sind das {powder_dose} g Pulver und {water_dose} ml Wasser; der Rechner skaliert beides.' },
      { q: 'Woher kommen die Mengen für Mandeln und Zucker?', a: 'Aus dem Macaronrezept auf dieser Website: {almond} g Mandelmehl, {icing_sugar} g Puderzucker und {sugar} g feiner Zucker auf {dose} g Aquafaba. Die vollständige Methode steht im [Macaronrezept]({recipe_href}).' },
    ],
  },
};
