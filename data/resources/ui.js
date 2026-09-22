// Interface strings of the set-2 resources pages (applications index, guide children).
// Hand-written per language, no em/en dash. Product figures never live here: they come
// from facts.json through tokens. Page copy lives in data/resources/texts/.
export const RES_UI = {
  en: {
    applicationsName: 'Applications', applicationsLink: 'All application guides',
    calculatorLink: 'Quantity calculator for this application', processLink: 'Process sheet and checks',
    guideLink: 'Back to the guide: liquid or powder?',
    toolsTitle: 'Tools per application',
    eyebrow: { calculator: 'Quantity calculator', process: 'Process sheet' },
    calc: {
      title: 'Work out your batch', mode: 'Calculate by', batches: 'batches', pieces: 'pieces', quantity: 'How many',
      result: 'Your quantities', liquid: 'VERY AQUAFABA liquid', powder: 'VERY AQUAFABA powder', water: 'Water for the powder',
      eggWhites: 'Egg whites replaced', makes: 'Makes about', batchesOut: 'Batches of the recipe',
      fixed: 'Unchanged whatever the batch size', note: 'Times, temperatures and equipment do not scale with the ingredients.',
    },
    calcExtra: {
      grams: 'grams', eggs: 'Whole eggs in your recipe', whites: 'Egg whites in your recipe', yolks: 'Egg yolks in your recipe',
      liquidTotal: 'VERY AQUAFABA liquid, total', oilYolks: 'Oil to add for the yolks', subTitle: 'Replace the eggs of your recipe',
      mustard: 'Mustard per batch', salt: 'Salt per batch', lemon: 'Lemon juice or vinegar per batch', almond: 'Almond flour per batch', icing_sugar: 'Icing sugar per batch',
      whiskey: 'Whiskey per cocktail', lemon_juice: 'Lemon juice per cocktail', syrup: 'Simple syrup per cocktail',
    },
    sheet: {
      title: 'Process sheet', step: 'Step', reference: 'Reference', yours: 'Your batch', print: 'Print this sheet',
      checks: 'Checks', see: 'What you see', check: 'Check', fix: 'Fix', powder: 'Powder',
    },
  },
  de: {
    applicationsName: 'Anwendungen', applicationsLink: 'Alle Anwendungsleitfäden',
    calculatorLink: 'Mengenrechner für diese Anwendung', processLink: 'Prozessblatt und Kontrollen',
    guideLink: 'Zurück zum Leitfaden: flüssig oder Pulver?',
    toolsTitle: 'Werkzeuge je Anwendung',
    eyebrow: { calculator: 'Mengenrechner', process: 'Prozessblatt' },
    calc: {
      title: 'Ihre Charge berechnen', mode: 'Berechnen nach', batches: 'Chargen', pieces: 'Stück', quantity: 'Wie viele',
      result: 'Ihre Mengen', liquid: 'VERY AQUAFABA flüssig', powder: 'VERY AQUAFABA Pulver', water: 'Wasser für das Pulver',
      eggWhites: 'Ersetzte Eiweiße', makes: 'Ergibt ca.', batchesOut: 'Chargen des Rezepts',
      fixed: 'Unverändert, egal wie groß die Charge', note: 'Zeiten, Temperaturen und Geräte skalieren nicht mit den Zutaten.',
    },
    calcExtra: {
      grams: 'Gramm', eggs: 'Ganze Eier in Ihrem Rezept', whites: 'Eiweiße in Ihrem Rezept', yolks: 'Eigelbe in Ihrem Rezept',
      liquidTotal: 'VERY AQUAFABA flüssig, gesamt', oilYolks: 'Öl, das für die Eigelbe dazukommt', subTitle: 'Die Eier Ihres Rezepts ersetzen',
      mustard: 'Senf pro Charge', salt: 'Salz pro Charge', lemon: 'Zitronensaft oder Essig pro Charge', almond: 'Mandelmehl pro Charge', icing_sugar: 'Puderzucker pro Charge',
      whiskey: 'Whiskey pro Cocktail', lemon_juice: 'Zitronensaft pro Cocktail', syrup: 'Zuckersirup pro Cocktail',
    },
    sheet: {
      title: 'Prozessblatt', step: 'Schritt', reference: 'Referenz', yours: 'Ihre Charge', print: 'Blatt drucken',
      checks: 'Kontrollen', see: 'Was Sie sehen', check: 'Prüfen', fix: 'Lösung', powder: 'Pulver',
    },
  },
  fr: {
    applicationsName: 'Applications', applicationsLink: "Tous les guides d'application",
    calculatorLink: 'Calculateur de quantités pour cette application', processLink: 'Fiche de procédé et contrôles',
    guideLink: 'Retour au guide : liquide ou poudre ?',
    toolsTitle: 'Outils par application',
    eyebrow: { calculator: 'Calculateur de quantités', process: 'Fiche de procédé' },
    calc: {
      title: 'Calculez votre lot', mode: 'Calculer par', batches: 'lots', pieces: 'pièces', quantity: 'Combien',
      result: 'Vos quantités', liquid: 'VERY AQUAFABA liquide', powder: 'VERY AQUAFABA en poudre', water: "Eau pour la poudre",
      eggWhites: "Blancs d'œufs remplacés", makes: 'Donne environ', batchesOut: 'Lots de la recette',
      fixed: 'Inchangé quelle que soit la taille du lot', note: 'Les temps, les températures et le matériel ne suivent pas les quantités.',
    },
    calcExtra: {
      grams: 'grammes', eggs: 'Œufs entiers dans votre recette', whites: "Blancs d'œufs dans votre recette", yolks: "Jaunes d'œufs dans votre recette",
      liquidTotal: 'VERY AQUAFABA liquide, total', oilYolks: "Huile à ajouter pour les jaunes", subTitle: 'Remplacez les œufs de votre recette',
      mustard: 'Moutarde par lot', salt: 'Sel par lot', lemon: 'Jus de citron ou vinaigre par lot', almond: "Poudre d'amande par lot", icing_sugar: 'Sucre glace par lot',
      whiskey: 'Whisky par cocktail', lemon_juice: 'Jus de citron par cocktail', syrup: 'Sirop de sucre par cocktail',
    },
    sheet: {
      title: 'Fiche de procédé', step: 'Étape', reference: 'Référence', yours: 'Votre lot', print: 'Imprimer la fiche',
      checks: 'Contrôles', see: 'Ce que vous constatez', check: 'À vérifier', fix: 'La solution', powder: 'Poudre',
    },
  },
  nl: {
    applicationsName: 'Toepassingen', applicationsLink: 'Alle toepassingsgidsen',
    calculatorLink: 'Rekenhulp voor deze toepassing', processLink: 'Procesblad en controles',
    guideLink: 'Terug naar de gids: vloeibaar of poeder?',
    toolsTitle: 'Hulpmiddelen per toepassing',
    eyebrow: { calculator: 'Rekenhulp', process: 'Procesblad' },
    calc: {
      title: 'Bereken uw batch', mode: 'Berekenen per', batches: 'batches', pieces: 'stuks', quantity: 'Hoeveel',
      result: 'Uw hoeveelheden', liquid: 'VERY AQUAFABA vloeibaar', powder: 'VERY AQUAFABA poeder', water: 'Water voor het poeder',
      eggWhites: 'Vervangen eiwitten', makes: 'Goed voor ongeveer', batchesOut: 'Batches van het recept',
      fixed: 'Onveranderd, hoe groot de batch ook is', note: 'Tijden, temperaturen en apparatuur schalen niet mee met de ingrediënten.',
    },
    calcExtra: {
      grams: 'gram', eggs: 'Hele eieren in uw recept', whites: 'Eiwitten in uw recept', yolks: 'Eidooiers in uw recept',
      liquidTotal: 'VERY AQUAFABA vloeibaar, totaal', oilYolks: 'Olie die u voor de dooiers toevoegt', subTitle: 'Vervang de eieren van uw recept',
      mustard: 'Mosterd per batch', salt: 'Zout per batch', lemon: 'Citroensap of azijn per batch', almond: 'Amandelmeel per batch', icing_sugar: 'Poedersuiker per batch',
      whiskey: 'Whisky per cocktail', lemon_juice: 'Citroensap per cocktail', syrup: 'Suikersiroop per cocktail',
    },
    sheet: {
      title: 'Procesblad', step: 'Stap', reference: 'Referentie', yours: 'Uw batch', print: 'Dit blad afdrukken',
      checks: 'Controles', see: 'Wat u ziet', check: 'Controleer', fix: 'Oplossing', powder: 'Poeder',
    },
  },
};
