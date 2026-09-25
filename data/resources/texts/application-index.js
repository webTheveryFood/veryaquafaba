// Copy of the applications index (/resources/applications/ and its three translations):
// the pillar of the application cluster. Cards, links and figures are composed in
// data/resources/application-index.js; {tokens} are filled from facts.json. No em/en dash.
export default {
  en: {
    title: 'Aquafaba Guides: Liquid or Powder per Recipe - VERY AQUAFABA',
    h1: 'Application guides: liquid or powder for each preparation',
    description: 'Six professional guides: meringue, mousse, mayonnaise, baking, cocktails and macarons. Each gives the dose, the format that fits, a calculator and a sheet.',
    lead: 'Each guide answers one question for one preparation: liquid or powder, and how much. The dose comes from the recipe on this site, the equivalence is the same everywhere ({white_liquid} g of liquid or {white_powder} g of powder for one egg white), and every guide ends with where to buy and how to ask for the technical sheet.',
    sections: [
      {
        id: 'how',
        title: 'How the guides are built',
        html: `<p>The six guides share one structure so that a pastry chef, a bartender or a buyer finds the same things in the same place. The first sentence gives the dose per batch and its egg white equivalent. A short table shows what a 1 L Tetrapak and a 200 g pouch yield for that preparation. Then the guide walks through the method, decides between liquid and powder from how the kitchen actually works, and closes with what to check when a batch goes wrong.</p>
<p>Under each guide sit two tools. The quantity calculator scales the recipe to your number of batches or pieces, in liquid and in powder with its water. The process sheet lists every step with its reference value and a blank column for your own batch, ready to print or to send with a technical question.</p>`,
      },
      {
        id: 'rule',
        title: 'The rule behind every figure',
        html: `<p>{white_liquid} g of VERY AQUAFABA liquid replaces one egg white. In powder, {white_powder} g + {white_water} ml of water = {white_total} g of aquafaba, the same mass as the liquid, so {white_powder} g of powder replaces one egg white. Every dose, every pack yield and every calculator result on these pages is derived from that rule and from the recipe it applies to.</p>
<p>Unopened, both formats keep at least {unopened_months} months at room temperature. Once opened, the liquid stays refrigerated and is used within {opened_days} days; the powder only needs to stay dry and closed. That difference is what decides liquid or powder in each guide.</p>`,
      },
    ],
    faq: [
      { q: 'Which guide should I start with?', a: 'The one for the preparation you make most. If your work spans several, the meringue guide is the plainest foam test and the cocktail guide the plainest bar case; the baking guide covers substitution in cakes and batters.' },
      { q: 'Are the doses the same in every language?', a: 'Yes. The four versions of a guide share the same figures from the same recipe. Only the wording and the purchase destination change with the country.' },
      { q: 'Where do the figures come from?', a: 'From the recipe linked in each guide and from the Products page: {white_liquid} g of liquid or {white_powder} g of powder per egg white, and the pack sizes. Each figures table carries its source and date.' },
      { q: 'What if my preparation is not in the list?', a: 'Use the baking guide for the general substitution rules, then describe your preparation through the professional enquiry form at the end of any guide. New guides are added as their data is documented.' },
    ],
  },
  de: {
    title: 'Aquafaba-Anwendungsleitfäden: flüssig oder Pulver je Zubereitung - VERY AQUAFABA',
    h1: 'Anwendungsleitfäden: flüssig oder Pulver für jede Zubereitung',
    description: 'Sechs Leitfäden für Profis, einer je Zubereitung: Baiser, Schokoladenmousse, Mayonnaise, Backen, Cocktails und Macarons. Jeder nennt die Dosierung, das passende Format für Ihre Küche, einen Mengenrechner und ein Prozessblatt.',
    lead: 'Jeder Leitfaden beantwortet eine Frage für eine Zubereitung: flüssig oder Pulver, und wie viel. Die Dosierung stammt aus dem Rezept auf dieser Website, die Entsprechung ist überall dieselbe ({white_liquid} g flüssig oder {white_powder} g Pulver für ein Eiweiß), und jeder Leitfaden endet damit, wo Sie kaufen und wie Sie das technische Datenblatt anfordern.',
    sections: [
      {
        id: 'how',
        title: 'Wie die Leitfäden aufgebaut sind',
        html: `<p>Die sechs Leitfäden teilen eine Struktur, damit ein Konditor, ein Barkeeper oder ein Einkäufer dieselben Dinge an derselben Stelle findet. Der erste Satz nennt die Dosierung pro Charge und ihre Entsprechung in Eiweißen. Eine kurze Tabelle zeigt, was ein 1 L Tetrapak und ein 200 g Beutel für diese Zubereitung ergeben. Dann führt der Leitfaden durch die Methode, entscheidet zwischen flüssig und Pulver danach, wie die Küche tatsächlich arbeitet, und schließt mit dem, was zu prüfen ist, wenn eine Charge misslingt.</p>
<p>Unter jedem Leitfaden liegen zwei Werkzeuge. Der Mengenrechner skaliert das Rezept auf Ihre Zahl an Chargen oder Stück, in flüssig und in Pulver mit seinem Wasser. Das Prozessblatt listet jeden Schritt mit seinem Referenzwert und einer leeren Spalte für Ihre eigene Charge, bereit zum Drucken oder zum Mitschicken mit einer technischen Frage.</p>`,
      },
      {
        id: 'rule',
        title: 'Die Regel hinter jeder Zahl',
        html: `<p>{white_liquid} g VERY AQUAFABA flüssig ersetzen ein Eiweiß. In Pulver gilt: {white_powder} g + {white_water} ml Wasser = {white_total} g Aquafaba, dieselbe Masse wie flüssig, also ersetzen {white_powder} g Pulver ein Eiweiß. Jede Dosierung, jede Gebindeausbeute und jedes Ergebnis des Rechners auf diesen Seiten leitet sich aus dieser Regel und aus dem jeweiligen Rezept ab.</p>
<p>Ungeöffnet halten beide Formate mindestens {unopened_months} Monate bei Raumtemperatur. Nach dem Öffnen bleibt das Flüssige gekühlt und wird innerhalb von {opened_days} Tagen verbraucht; das Pulver muss nur trocken und verschlossen bleiben. Dieser Unterschied entscheidet in jedem Leitfaden zwischen flüssig und Pulver.</p>`,
      },
    ],
    faq: [
      { q: 'Mit welchem Leitfaden fange ich an?', a: 'Mit dem für die Zubereitung, die Sie am häufigsten machen. Wenn Ihre Arbeit mehrere umfasst, ist der Baiser-Leitfaden der einfachste Schaumtest und der Cocktail-Leitfaden der einfachste Barfall; der Back-Leitfaden deckt den Ersatz in Kuchen und Teigen ab.' },
      { q: 'Sind die Dosierungen in jeder Sprache gleich?', a: 'Ja. Die vier Fassungen eines Leitfadens teilen dieselben Zahlen aus demselben Rezept. Nur die Formulierung und das Kaufziel ändern sich mit dem Land.' },
      { q: 'Woher stammen die Zahlen?', a: 'Aus dem in jedem Leitfaden verlinkten Rezept und von der Produktseite: {white_liquid} g flüssig oder {white_powder} g Pulver pro Eiweiß, und die Gebindegrößen. Jede Kennzahlentabelle trägt Quelle und Datum.' },
      { q: 'Was, wenn meine Zubereitung nicht in der Liste steht?', a: 'Nutzen Sie den Back-Leitfaden für die allgemeinen Ersatzregeln und beschreiben Sie Ihre Zubereitung dann über das Anfrageformular für Profis am Ende jedes Leitfadens. Neue Leitfäden kommen hinzu, sobald ihre Daten dokumentiert sind.' },
    ],
  },
  fr: {
    title: "Guides d'application aquafaba : liquide ou poudre par préparation - VERY AQUAFABA",
    h1: "Guides d'application : liquide ou poudre pour chaque préparation",
    description: 'Six guides professionnels, un par préparation : meringue, mousse au chocolat, mayonnaise, pâtisserie, cocktails et macarons. Chacun donne la dose, le format adapté à votre cuisine, un calculateur de quantités et une fiche de procédé.',
    lead: "Chaque guide répond à une question pour une préparation : liquide ou poudre, et quelle quantité. La dose vient de la recette de ce site, l'équivalence est la même partout ({white_liquid} g de liquide ou {white_powder} g de poudre pour un blanc d'œuf), et chaque guide se termine par où acheter et comment demander la fiche technique.",
    sections: [
      {
        id: 'how',
        title: 'Comment les guides sont construits',
        html: `<p>Les six guides partagent une même structure, pour qu'un pâtissier, un barman ou un acheteur trouve les mêmes choses au même endroit. La première phrase donne la dose par lot et son équivalent en blancs d'œufs. Un court tableau montre ce qu'un Tetrapak de 1 L et un sachet de 200 g donnent pour cette préparation. Le guide déroule ensuite la méthode, tranche entre liquide et poudre selon la façon dont la cuisine travaille réellement, et se termine par ce qu'il faut contrôler quand un lot ne réussit pas.</p>
<p>Sous chaque guide se trouvent deux outils. Le calculateur de quantités adapte la recette à votre nombre de lots ou de pièces, en liquide et en poudre avec son eau. La fiche de procédé liste chaque étape avec sa valeur de référence et une colonne vide pour votre propre lot, prête à imprimer ou à joindre à une question technique.</p>`,
      },
      {
        id: 'rule',
        title: 'La règle derrière chaque chiffre',
        html: `<p>{white_liquid} g de VERY AQUAFABA liquide remplacent un blanc d'œuf. En poudre, {white_powder} g + {white_water} ml d'eau = {white_total} g d'aquafaba, la même masse que le liquide, donc {white_powder} g de poudre remplacent un blanc d'œuf. Chaque dose, chaque rendement par conditionnement et chaque résultat du calculateur sur ces pages découle de cette règle et de la recette à laquelle elle s'applique.</p>
<p>Non ouverts, les deux formats se conservent au moins {unopened_months} mois à température ambiante. Une fois ouvert, le liquide reste au réfrigérateur et s'utilise sous {opened_days} jours ; la poudre doit seulement rester sèche et fermée. C'est cette différence qui tranche entre liquide et poudre dans chaque guide.</p>`,
      },
    ],
    faq: [
      { q: 'Par quel guide commencer ?', a: "Par celui de la préparation que vous faites le plus. Si votre travail en couvre plusieurs, le guide de la meringue est le test de mousse le plus simple et celui des cocktails le cas de bar le plus simple ; le guide de pâtisserie couvre la substitution dans les gâteaux et les pâtes." },
      { q: 'Les doses sont-elles les mêmes dans chaque langue ?', a: "Oui. Les quatre versions d'un guide partagent les mêmes chiffres, tirés de la même recette. Seuls la formulation et le point de vente changent avec le pays." },
      { q: "D'où viennent les chiffres ?", a: "De la recette liée dans chaque guide et de la page Produits : {white_liquid} g de liquide ou {white_powder} g de poudre par blanc d'œuf, et les tailles de conditionnement. Chaque tableau de chiffres porte sa source et sa date." },
      { q: "Et si ma préparation n'est pas dans la liste ?", a: "Utilisez le guide de pâtisserie pour les règles générales de substitution, puis décrivez votre préparation via le formulaire de demande professionnelle à la fin de chaque guide. De nouveaux guides s'ajoutent à mesure que leurs données sont documentées." },
    ],
  },
  nl: {
    title: 'Aquafaba-toepassingsgidsen: vloeibaar of poeder per bereiding - VERY AQUAFABA',
    h1: 'Toepassingsgidsen: vloeibaar of poeder voor elke bereiding',
    description: 'Zes professionele gidsen, één per bereiding: meringue, chocolademousse, mayonaise, bakken, cocktails en macarons. Elke gids geeft de dosering, het formaat dat bij uw keuken past, een rekenhulp en een procesblad.',
    lead: 'Elke gids beantwoordt één vraag voor één bereiding: vloeibaar of poeder, en hoeveel. De dosering komt uit het recept op deze site, de equivalentie is overal dezelfde ({white_liquid} g vloeibaar of {white_powder} g poeder voor één eiwit), en elke gids eindigt met waar u koopt en hoe u het technische fiche aanvraagt.',
    sections: [
      {
        id: 'how',
        title: 'Hoe de gidsen zijn opgebouwd',
        html: `<p>De zes gidsen delen één structuur, zodat een patissier, een bartender of een inkoper dezelfde dingen op dezelfde plaats vindt. De eerste zin geeft de dosering per batch en het equivalent in eiwitten. Een korte tabel toont wat een 1 L Tetrapak en een zakje van 200 g opleveren voor die bereiding. Daarna loopt de gids door de werkwijze, kiest tussen vloeibaar en poeder op basis van hoe de keuken werkelijk werkt, en sluit af met wat u controleert als een batch mislukt.</p>
<p>Onder elke gids staan twee hulpmiddelen. De rekenhulp schaalt het recept naar uw aantal batches of stuks, in vloeibaar en in poeder met zijn water. Het procesblad zet elke stap op een rij met zijn referentiewaarde en een lege kolom voor uw eigen batch, klaar om af te drukken of mee te sturen met een technische vraag.</p>`,
      },
      {
        id: 'rule',
        title: 'De regel achter elk cijfer',
        html: `<p>{white_liquid} g VERY AQUAFABA vloeibaar vervangt één eiwit. In poeder geldt: {white_powder} g + {white_water} ml water = {white_total} g aquafaba, dezelfde massa als vloeibaar, dus {white_powder} g poeder vervangt één eiwit. Elke dosering, elke opbrengst per verpakking en elk resultaat van de rekenhulp op deze pagina's volgt uit die regel en uit het recept waarop ze van toepassing is.</p>
<p>Ongeopend blijven beide formaten minimaal {unopened_months} maanden goed op kamertemperatuur. Eenmaal geopend blijft de vloeibare gekoeld en wordt hij binnen {opened_days} dagen gebruikt; het poeder hoeft alleen droog en gesloten te blijven. Dat verschil beslist in elke gids tussen vloeibaar en poeder.</p>`,
      },
    ],
    faq: [
      { q: 'Met welke gids begin ik?', a: 'Met die van de bereiding die u het vaakst maakt. Omvat uw werk er meerdere, dan is de meringuegids de eenvoudigste schuimtest en de cocktailgids het eenvoudigste bargeval; de bakgids dekt de vervanging in cakes en beslagen.' },
      { q: 'Zijn de doseringen in elke taal dezelfde?', a: 'Ja. De vier versies van een gids delen dezelfde cijfers uit hetzelfde recept. Alleen de formulering en het verkooppunt veranderen met het land.' },
      { q: 'Waar komen de cijfers vandaan?', a: 'Uit het recept dat in elke gids is gelinkt en van de productpagina: {white_liquid} g vloeibaar of {white_powder} g poeder per eiwit, en de verpakkingsgroottes. Elke cijfertabel draagt zijn bron en datum.' },
      { q: 'Wat als mijn bereiding niet in de lijst staat?', a: 'Gebruik de bakgids voor de algemene vervangingsregels en beschrijf uw bereiding daarna via het aanvraagformulier voor professionals onderaan elke gids. Nieuwe gidsen komen erbij zodra hun gegevens gedocumenteerd zijn.' },
    ],
  },
};
