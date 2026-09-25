// Où acheter, français (set-2 E0 et les pays). La route d'achat par pays est celle du client
// (Arnaud, courriel du 28 aout 2026, "Purchase URL for every country") : les États-Unis et
// l'Allemagne sur Amazon, la France sur InstantChef, TOUS LES AUTRES PAYS par le formulaire de
// contact et le formulaire B2B. Aucune page n'annonce un canal que nous ne pouvons pas
// garantir, ni prix ni stock. Aucun tiret long. L'entrée `index` garde son propre tableau ;
// les pages pays suivent where-to-buy.en.js (vérifié par scripts/applications/check-guides.mjs).
const grid = (heads, rows, cls = '') => `<table class="va-guide-grid${cls ? ` ${cls}` : ''}">
<thead><tr>${heads.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
<tbody>
${rows.map((r) => `<tr>${r.map((c, i) => `<td data-label="${heads[i]}">${c}</td>`).join('')}</tr>`).join('\n')}
</tbody>
</table>`;

const range = `<p>Chaque pack est décrit par les blancs d'œufs qu'il remplace, à {white_liquid} g de liquide ou {white_powder} g de poudre par blanc d'œuf.</p>
<ul>
<li>Liquide : Tetrapak de 1 L = {liquid_1l_whites} blancs d'œufs, bag-in-box de 10 L = {bib_10l_whites}, IBC de 1 T = {ibc_1t_whites}.</li>
<li>Poudre : 30 g = {powder_30g_whites} blancs d'œufs, 200 g = {powder_200g_whites}, 3 kg = {powder_3kg_whites}.</li>
</ul>
<p>Fermés, les deux se conservent au moins {unopened_months} mois à température ambiante. Le liquide ouvert se garde au réfrigérateur à {opened_temp} °C maximum et s'utilise dans les {opened_days} jours ; la poudre ouverte ne s'altère pas tant qu'elle reste au sec, fermée. La <a href="{products_href}">page Produits</a> porte toute la gamme.</p>`;

export default {
  index: {
    title: 'Où acheter VERY AQUAFABA : la route par pays - VERY AQUAFABA',
    h1: 'Où acheter VERY AQUAFABA, pays par pays',
    crumb: 'Où acheter',
    enquiryLabel: 'Où acheter',
    description: "Comment acheter VERY AQUAFABA dans chaque pays : Amazon aux États-Unis et en Allemagne, InstantChef en France, un formulaire partout ailleurs.",
    lead: "Trois pays ont aujourd'hui une référence où commander : les États-Unis et l'Allemagne sur Amazon, et la France sur InstantChef. Partout ailleurs, la route est le formulaire, de contact pour une question et professionnel pour un volume, et la réponse revient avec les formats et la fiche technique.",
    figures: true,
    sections: [
      {
        id: 'countries',
        title: 'La route, pays par pays',
        html: `${grid(['Pays', 'Comment acheter'], [
  ['<a href="{united_states_href}">États-Unis</a>', 'Amazon'],
  ['<a href="{germany_href}">Allemagne</a>', 'Amazon'],
  ['<a href="{france_href}">France</a>', 'InstantChef'],
  ['<a href="{united_kingdom_href}">Royaume-Uni</a>', 'Formulaire de demande'],
  ['<a href="{netherlands_href}">Pays-Bas</a>', 'Formulaire de demande'],
  ['<a href="{belgium_href}">Belgique</a>', 'Formulaire de demande'],
  ['Autres pays', 'Formulaire de demande'],
], 'va-guide-grid--pairs')}`,
      },
      { id: 'range', title: 'Ce que vous commandez', html: range },
      {
        id: 'professional',
        title: 'Volumes professionnels et fiche technique',
        html: `<p>Le bag-in-box de 10 L et l'IBC de 1 T ne se vendent en boutique dans aucun pays : ils sont chiffrés par projet, avec la fiche technique, une fois l'application et le volume mensuel connus. C'est à cela que sert le formulaire professionnel de cette page ; pour une question simple, le <a href="{contact_href}">formulaire de contact</a> suffit.</p>
<p>Si vous hésitez encore entre liquide et poudre, la <a href="{professional_href}">section professionnels</a> classe la question par activité : <a href="{pastry_href}">pâtisserie et boulangerie</a>, <a href="{bars_href}">bars et cocktails</a>, <a href="{foodservice_href}">restauration collective et cuisines centrales</a> et <a href="{industry_href}">industrie agroalimentaire</a>.</p>`,
      },
    ],
    faq: [
      { q: "Dans quels pays peut-on commander directement aujourd'hui ?", a: "Aux États-Unis et en Allemagne, sur Amazon, et en France, sur InstantChef. Ce sont les références confirmées par VERY AQUAFABA." },
      { q: "Mon pays n'est pas dans ces trois, que faire ?", a: "Utilisez le formulaire professionnel : pays, application et volume mensuel estimé. La réponse porte la fiche technique et ce qui est possible pour votre pays." },
      { q: 'Les prix figurent-ils sur ces pages ?', a: 'Non. Les prix et le stock appartiennent à la boutique : chaque page renvoie vers la référence et lui laisse cela.' },
      { q: "Peut-on commander le bag-in-box ou l'IBC en ligne ?", a: "Non, dans aucun pays. Le bag-in-box de 10 L et l'IBC de 1 T sont chiffrés par projet avec la fiche technique, via le formulaire professionnel." },
    ],
    links: [
      { href: '{professional_href}', label: "L'aquafaba pour les professionnels" },
      { href: '{egg_substitutes_href}', label: "Substituts végétaux à l'œuf" },
      { href: '{index_href}', label: "Tous les guides d'application" },
    ],
  },

  'united-states': {
    inCountry: 'aux États-Unis',
    title: 'Aquafaba aux États-Unis : où acheter - VERY AQUAFABA',
    h1: 'Où acheter VERY AQUAFABA aux États-Unis',
    crumb: 'États-Unis',
    description: 'Achetez VERY AQUAFABA aux États-Unis sur Amazon : Tetrapak de 1 L, Tetrapak pour bars à cocktails et lot de quatre. Lequel choisir, et commander plus.',
    lead: "Toute cuisine professionnelle a une recette qui demande du blanc d'œuf et une raison de s'en passer : un client vegan, un œuf cru dans un sour, un allergène sur l'étiquette. VERY AQUAFABA est de l'aquafaba de pois chiches, un blanc d'œuf végétal qui monte, lie et émulsionne comme le vrai. Si vous êtes aux États-Unis, vous pouvez l'acheter directement sur Amazon. Ci-dessous, quel produit choisir et comment commander en volume.",
    sections: [
      {
        id: 'which',
        title: 'Quel produit est pour vous',
        html: `<p>Partez de la vitesse à laquelle vous le consommez. Un Tetrapak ouvert vit au réfrigérateur et s'utilise dans les {opened_days} jours, achetez donc pour la semaine que vous avez réellement.</p>
<ul>
<li><strong>Vous montez de la meringue ou incorporez de la mousse quelques fois par semaine ?</strong> Un Tetrapak de 1 L suffit. C'est l'équivalent de {liquid_1l_whites} blancs d'œufs, soit {meringue_batches_1l} préparations de meringue ou {macarons_batches_1l} de macarons, et la suivante attend en réserve sèche, fermée, au moins {unopened_months} mois.</li>
<li><strong>Vous shakez des sours tous les soirs ?</strong> Commandez le Tetrapak référencé pour les bars à cocktails. Même aquafaba, là où les bartenders le cherchent, et un Tetrapak sert {cocktails_batches_1l} sours avant d'être vide, bien avant ses {opened_days} jours.</li>
<li><strong>Vous finissez un Tetrapak avant la fin de la semaine ?</strong> Prenez le lot de quatre. Ouvrez-en une, gardez-en trois fermées sur l'étagère, et recommandez quand la dernière passe au réfrigérateur.</li>
</ul>
<p>Si vous ne montez que de temps en temps, la poudre vous conviendra peut-être mieux, puisqu'un sachet ouvert ne s'altère pas. Elle n'est pas encore sur Amazon aux États-Unis, mais vous pouvez la demander ci-dessous.</p>`,
      },
      {
        id: 'more',
        title: "Il vous faut plus d'un Tetrapak par semaine ?",
        html: `<p>Au-delà du Tetrapak, nous chiffrons par projet : le bag-in-box de 10 L, c'est {bib_10l_whites} blancs d'œufs, l'IBC de 1 T {ibc_1t_whites}, et la poudre, qui n'est pas encore sur Amazon aux États-Unis, passe par le même chemin. Dites-nous ce que vous fabriquez et à peu près combien chaque mois par le formulaire de cette page, et la fiche technique revient avec le devis.</p>
<p>Vous hésitez sur le format ou la quantité ? La <a href="{professional_href}">section professionnels</a> tranche par activité, et chaque <a href="{index_href}">guide d'application</a> a un calculateur qui adapte la recette à vos préparations.</p>`,
      },
    ],
    faq: [
      { q: "Où acheter de l'aquafaba aux États-Unis ?", a: "Sur Amazon, par les trois produits de cette page : le Tetrapak de 1 L, le même Tetrapak référencé pour les bars à cocktails, et le lot de quatre. Les trois sont du VERY AQUAFABA liquide." },
      { q: 'Que remplace un Tetrapak de 1 L ?', a: "{liquid_1l_whites} blancs d'œufs, soit {cocktails_batches_1l} sours, {meringue_batches_1l} préparations de meringue ou {eggs_1l} œufs entiers en pâtisserie." },
      { q: 'La différence entre les trois produits est-elle seulement la quantité ?', a: "Oui. Ils contiennent le même aquafaba. Le produit pour bars à cocktails est le Tetrapak de 1 L sous le nom qu'un bar recherche, et le lot de quatre, ce sont quatre Tetrapak pour un établissement qui en consomme plus d'une à la fois." },
      { q: 'Puis-je acheter la poudre aux États-Unis ?', a: "Pas encore sur Amazon. Demandez-la par le formulaire de cette page, avec votre application et votre volume mensuel, et nous revenons vers vous avec ce qui est possible." },
      { q: 'Combien de temps se garde un Tetrapak ouvert ?', a: "{opened_days} jours à {opened_temp} °C maximum. Fermé, il se conserve au moins {unopened_months} mois à température ambiante." },
    ],
    links: [
      { href: '{bars_href}', label: 'Bars et cocktails' },
      { href: '{cocktails_href}', label: 'Cocktails : liquide ou poudre ?' },
      { href: '{index_href}', label: "Tous les guides d'application" },
      { href: '{products_href}', label: 'Produits et formats' },
    ],
  },

  'united-kingdom': {
    inCountry: 'au Royaume-Uni',
    title: 'Commander VERY AQUAFABA au Royaume-Uni - VERY AQUAFABA',
    h1: 'Comment obtenir VERY AQUAFABA au Royaume-Uni',
    crumb: 'Royaume-Uni',
    description: 'VERY AQUAFABA au Royaume-Uni : pas encore de boutique en ligne, mais écrivez-nous. Comment commander, quelle quantité demander et quel format choisir.',
    lead: "Le monter en meringue, l'incorporer dans une mousse, le shaker dans un sour : VERY AQUAFABA est de l'aquafaba de pois chiches, un blanc d'œuf végétal qui fait tout ce que fait le vrai, sans l'œuf. Dites-nous ce que vous fabriquez et à peu près combien, et nous revenons vers vous avec les formats, la fiche technique et un devis. Nous n'avons pas encore ouvert de boutique en ligne au Royaume-Uni, mais cela ne doit pas vous empêcher de l'essayer. Écrivez-nous.",
    sections: [
      {
        id: 'order',
        title: 'Comment commander au Royaume-Uni',
        html: `<p>Parlez-nous de votre cuisine, et nous prenons le relais. Voici comment nous commander de l'aquafaba :</p>
<ol>
<li><strong>Dites-nous ce que vous fabriquez et à peu près combien chaque mois.</strong> Le formulaire au bas de cette page demande votre entreprise, l'application et un volume mensuel estimé. Une ligne sur le projet aide.</li>
<li><strong>Nous revenons vers vous avec les formats que nous pouvons vous envoyer, la fiche technique et un devis,</strong> y compris le minimum de commande et le délai pour votre volume.</li>
<li><strong>Vous commandez.</strong> Fermés, Tetrapak et sachets se conservent au moins {unopened_months} mois à température ambiante, une première commande peut donc attendre en réserve sèche jusqu'à ce que vous en ayez besoin.</li>
</ol>
<p>Une référence Amazon UK est prévue. Quand elle sera en ligne, cette page y renverra, et le Tetrapak de 1 L sera à un clic.</p>`,
      },
      {
        id: 'howmuch',
        title: 'Quelle quantité demander ?',
        html: `<p>Vous n'avez pas besoin d'un chiffre exact, une estimation mensuelle nous suffit pour chiffrer. Le plus simple est de raisonner en recettes. Un sour demande {cocktails_dose} g d'aquafaba, un bar qui en sert dix par soir est donc autour de {sours_10_night_l} litres par mois. Une préparation de meringue demande {meringue_dose} g, une préparation de mayonnaise {mayonnaise_dose} g. Comptez vos préparations, et si la somme est difficile à se représenter, chaque <a href="{index_href}">guide d'application</a> a un calculateur qui la fait pour vous.</p>
<p>Pour vous donner un ordre de grandeur : un Tetrapak de 1 L, c'est {liquid_1l_whites} blancs d'œufs, de quoi faire {cocktails_batches_1l} sours ou {meringue_batches_1l} préparations de meringue. Un bar à cocktails animé en consomme un par semaine. Un groupe hôtelier ou une cuisine centrale est plus proche du bag-in-box de 10 L.</p>`,
      },
      {
        id: 'format',
        title: 'Liquide ou poudre : lequel demander ?',
        html: `<p>Les deux sont le même aquafaba. Le liquide est prêt à verser et vit au réfrigérateur une fois ouvert, pendant {opened_days} jours. La poudre se mélange à l'eau quand vous en avez besoin, et un sachet ouvert se garde jusqu'à ce que vous en ayez besoin, au sec et fermé.</p>
<p>Donc, si vous l'utilisez presque tous les jours, demandez du liquide. Si vous l'utilisez de temps en temps, ou si votre réfrigérateur est déjà plein, demandez de la poudre. Et si vos week-ends sont chargés et vos semaines calmes, beaucoup de bars gardent les deux. La <a href="{bars_href}">page bars et cocktails</a> et la <a href="{pastry_href}">page pâtisserie et boulangerie</a> vont plus loin.</p>`,
      },
    ],
    faq: [
      { q: "Puis-je acheter de l'aquafaba au Royaume-Uni aujourd'hui ?", a: "Pas encore en boutique. Vous pouvez commander VERY AQUAFABA directement auprès de nous : envoyez votre application et votre volume mensuel estimé par le formulaire de cette page, et nous répondons avec les formats, la fiche technique et un devis." },
      { q: 'VERY AQUAFABA sera-t-il sur Amazon UK ?', a: "Oui, c'est prévu. Cette page renverra vers la référence dès qu'elle sera en ligne." },
      { q: 'Y a-t-il un minimum de commande ?', a: "Il dépend du format et du volume, il vient donc avec le devis. Dites-nous ce que vous fabriquez et combien chaque mois, et vous aurez le minimum de commande et le délai avec la fiche technique." },
      { q: 'Quel format demander ?', a: "Le liquide si un Tetrapak ouvert s'utilise dans les {opened_days} jours au réfrigérateur ; la poudre sinon, puisqu'un sachet ouvert ne s'altère pas tant qu'il reste au sec, fermé. Beaucoup de bars gardent les deux." },
      { q: 'Combien de sours sert un litre ?', a: "{cocktails_batches_1l}, à {cocktails_dose} g chacun, dry shake d'abord. Un sachet de poudre de 200 g en sert {cocktails_batches_200g}." },
    ],
    links: [
      { href: '{bars_href}', label: 'Bars et cocktails' },
      { href: '{pastry_href}', label: 'Pâtisserie et boulangerie' },
      { href: '{cocktails_href}', label: 'Cocktails : liquide ou poudre ?' },
      { href: '{products_href}', label: 'Produits et formats' },
    ],
  },

  france: {
    inCountry: 'en France',
    title: "Où acheter de l'aquafaba en France - VERY AQUAFABA",
    h1: 'Où acheter VERY AQUAFABA en France',
    crumb: 'France',
    description: 'Achetez VERY AQUAFABA en France sur InstantChef : le liquide de 1 L et la poudre de 200 g. Lequel choisir pour votre bar ou votre laboratoire.',
    lead: "Vous n'avez pas à renoncer à la meringue pour vous passer d'œuf. VERY AQUAFABA est de l'aquafaba de pois chiches, un blanc d'œuf végétal qui monte, lie et émulsionne comme le vrai. Si vous êtes en France, vous pouvez l'acheter directement sur InstantChef, en liquide et en poudre. Ci-dessous, lequel est pour vous et comment commander en volume.",
    sections: [
      {
        id: 'which',
        title: "Faut-il acheter l'aquafaba liquide ou en poudre ?",
        html: `<p>Partez de votre rythme : à quelle fréquence vous pochez, montez ou shakez, et si un Tetrapak ouvert est fini à temps.</p>
<ul>
<li><strong>Vous pochez des macarons ou de la meringue presque tous les jours ?</strong> Le Tetrapak de 1 L. Il se verse directement du réfrigérateur à la température de foisonnement et donne {macarons_batches_1l} préparations de coques de macarons ou {meringue_batches_1l} de meringue. Ouvert, il s'utilise dans les {opened_days} jours à {opened_temp} °C maximum.</li>
<li><strong>Vous shakez des sours à chaque service ?</strong> Le Tetrapak encore : {cocktails_dose} g par cocktail, dry shake d'abord, {cocktails_batches_1l} sours par Tetrapak. Si vous ne servez que quelques sours par semaine, prenez plutôt le sachet et reconstituez ce qu'il faut pour le soir.</li>
<li><strong>Vous cuisez à la commande, ou manquez de place au réfrigérateur ?</strong> Le sachet de poudre de 200 g : {white_powder} g et {white_water} ml d'eau par blanc d'œuf, {powder_200g_whites} blancs d'œufs par sachet, et aucune date une fois ouvert.</li>
</ul>
<p>La <a href="{pastry_href}">page pâtisserie et boulangerie</a> et la <a href="{bars_href}">page bars et cocktails</a> vont plus loin sur chacun de ces cas, et le <a href="{macarons_href}">guide des macarons</a> porte la méthode complète.</p>`,
      },
      {
        id: 'more',
        title: 'Acheter pour un laboratoire ou un groupe',
        html: `<p>InstantChef référence les deux formats par lesquels la plupart des cuisines commencent. S'il vous en faut plus, nous chiffrons par projet : le bag-in-box de 10 L, c'est {bib_10l_whites} blancs d'œufs, pour une cuisine centrale qui tire au kilo, et l'IBC de 1 T {ibc_1t_whites}, pour une ligne. Dites-nous ce que vous fabriquez et à peu près combien chaque mois par le formulaire de cette page, et la fiche technique revient avec le devis.</p>`,
      },
    ],
    faq: [
      { q: "Où acheter de l'aquafaba en France ?", a: 'Sur InstantChef, par les deux produits de cette page : le liquide en 1 L et la poudre en 200 g.' },
      { q: 'Combien de préparations de macarons donne un Tetrapak de 1 L ?', a: "{macarons_batches_1l} préparations d'environ {macarons_yield} coques, à {macarons_dose} g chacune. Le même Tetrapak donne {meringue_batches_1l} préparations de meringue ou {cocktails_batches_1l} sours." },
      { q: 'La poudre est-elle aussi sur InstantChef ?', a: "Oui, le sachet de 200 g, soit {powder_200g_whites} blancs d'œufs reconstitués à {white_powder} g de poudre et {white_water} ml d'eau chacun. Un sachet ouvert se garde tant qu'il reste au sec, fermé." },
      { q: 'VERY AQUAFABA sera-t-il sur Amazon en France ?', a: "C'est le projet. En attendant, InstantChef référence les deux formats, et cette page renverra vers Amazon dès que la référence sera en ligne." },
      { q: 'Comment obtenir les grands formats ?', a: "Par le formulaire de cette page : le bag-in-box et l'IBC sont chiffrés par projet, avec la fiche technique." },
    ],
    links: [
      { href: '{bars_href}', label: 'Bars et cocktails' },
      { href: '{pastry_href}', label: 'Pâtisserie et boulangerie' },
      { href: '{macarons_href}', label: 'Macarons : liquide ou poudre ?' },
      { href: '{index_href}', label: "Tous les guides d'application" },
      { href: '{products_href}', label: 'Produits et formats' },
    ],
  },

  belgium: {
    inCountry: 'en Belgique',
    title: "Commander de l'aquafaba en Belgique - VERY AQUAFABA",
    h1: 'Comment obtenir VERY AQUAFABA en Belgique',
    crumb: 'Belgique',
    description: 'VERY AQUAFABA en Belgique : pas encore de boutique en ligne, mais un message suffit. Comment commander, quelle quantité demander, et liquide ou poudre.',
    lead: "Une mousse au chocolat sans œuf, des macarons sans blanc d'œuf : VERY AQUAFABA est de l'aquafaba de pois chiches, un blanc d'œuf végétal qui monte, lie et émulsionne comme le vrai. Il n'est pas encore dans une boutique en ligne belge, mais un message nous suffit. Dites-nous ce que vous fabriquez et à peu près combien, et nous revenons vers vous avec les formats, la fiche technique et un devis.",
    sections: [
      {
        id: 'order',
        title: 'Comment commander en Belgique',
        html: `<p>Parlez-nous de votre cuisine, et nous prenons le relais. Voici comment nous commander de l'aquafaba :</p>
<ol>
<li><strong>Envoyez-nous quelques lignes sur ce que vous fabriquez et à peu près combien chaque mois.</strong> Le formulaire au bas de cette page demande votre entreprise, l'application et un volume mensuel estimé.</li>
<li><strong>Nous répondons avec les formats que nous pouvons vous envoyer, la fiche technique et un devis,</strong> y compris le minimum de commande et le délai pour votre volume.</li>
<li><strong>Vous commandez.</strong> Fermés, Tetrapak et sachets se conservent au moins {unopened_months} mois à température ambiante, rien ne doit donc être utilisé la semaine de son arrivée.</li>
</ol>
<p>Une référence Amazon pour la Belgique et les Pays-Bas est prévue. Quand elle sera en ligne, cette page y renverra.</p>`,
      },
      {
        id: 'howmuch',
        title: 'Quelle quantité demander ?',
        html: `<p>Une estimation mensuelle suffit. Raisonnez en desserts que vous dressez : une préparation de mousse au chocolat demande {chocolate_mousse_dose} g d'aquafaba pour environ {chocolate_mousse_yield} portions, un restaurant qui sert soixante portions par semaine est donc autour de {mousse_60_week_l} litres par mois. Une préparation de macarons demande {macarons_dose} g, une préparation de meringue {meringue_dose} g. Chaque <a href="{index_href}">guide d'application</a> a un calculateur qui fait le calcul pour votre recette.</p>
<p>Pour vous donner un ordre de grandeur : un Tetrapak de 1 L, c'est {liquid_1l_whites} blancs d'œufs, soit {chocolate_mousse_batches_1l} préparations de mousse ou {macarons_batches_1l} de macarons. Un sachet de poudre de 200 g, c'est {powder_200g_whites} blancs d'œufs. Un laboratoire de pâtisserie qui poche presque tous les jours vide un Tetrapak en quelques jours ; un restaurant avec la mousse comme un dessert parmi d'autres est mieux servi par un sachet.</p>`,
      },
      {
        id: 'format',
        title: 'Liquide ou poudre : lequel demander ?',
        html: `<p>Même aquafaba, deux états. Le liquide se verse du réfrigérateur déjà à la température de foisonnement et, une fois ouvert, s'utilise dans les {opened_days} jours. La poudre se reconstitue avec de l'eau quand vous en avez besoin, {white_powder} g et {white_water} ml par blanc d'œuf, et un sachet ouvert se garde jusqu'à ce que vous en ayez besoin, au sec et fermé.</p>
<p>Un laboratoire de pâtisserie qui monte presque tous les jours demande du liquide. Un restaurant qui fait prendre une mousse de temps en temps demande de la poudre, pour que rien ne s'altère entre deux cartes. Une ligne de chocolaterie qui incorpore de l'aquafaba tous les jours est plus proche du bag-in-box de 10 L. Le <a href="{chocolate_mousse_href}">guide de la mousse au chocolat</a> et la <a href="{pastry_href}">page pâtisserie et boulangerie</a> vont plus loin.</p>`,
      },
    ],
    faq: [
      { q: "Puis-je acheter de l'aquafaba en Belgique aujourd'hui ?", a: "Pas encore en boutique. Envoyez-nous quelques lignes par le formulaire de cette page, ce que vous fabriquez et votre volume mensuel estimé, et nous répondons avec les formats, la fiche technique et un devis." },
      { q: 'VERY AQUAFABA sera-t-il sur Amazon en Belgique ?', a: "Oui, une référence Amazon pour la Belgique et les Pays-Bas est prévue. Cette page y renverra dès qu'elle sera en ligne." },
      { q: 'Y a-t-il un minimum de commande ?', a: "Il dépend du format et du volume, il vient donc avec le devis. Dites-nous ce que vous fabriquez et combien chaque mois, et vous aurez le minimum de commande et le délai avec la fiche technique." },
      { q: 'Combien de portions de mousse donne un litre ?', a: "Un Tetrapak de 1 L, c'est {chocolate_mousse_batches_1l} préparations d'environ {chocolate_mousse_yield} portions, à {chocolate_mousse_dose} g d'aquafaba chacune. La mousse prend en {chocolate_mousse_set_time} heures et se garde {chocolate_mousse_keep} jours au réfrigérateur." },
      { q: 'Un laboratoire de pâtisserie doit-il demander du liquide ou de la poudre ?', a: "Du liquide si vous montez presque tous les jours, parce qu'un Tetrapak ouvert s'utilise dans les {opened_days} jours. De la poudre si vous faites prendre une mousse ou pochez des macarons de temps en temps, parce qu'un sachet ouvert ne s'altère pas." },
    ],
    links: [
      { href: '{chocolate_mousse_href}', label: 'Mousse au chocolat : liquide ou poudre ?' },
      { href: '{macarons_href}', label: 'Macarons : liquide ou poudre ?' },
      { href: '{pastry_href}', label: 'Pâtisserie et boulangerie' },
      { href: '{products_href}', label: 'Produits et formats' },
    ],
  },

  germany: {
    inCountry: 'en Allemagne',
    title: "Où acheter de l'aquafaba en Allemagne - VERY AQUAFABA",
    h1: 'Où acheter VERY AQUAFABA en Allemagne',
    crumb: 'Allemagne',
    description: 'Achetez VERY AQUAFABA en Allemagne sur Amazon : le Tetrapak de 1 L de liquide et le sachet de poudre de 200 g. Lequel stocker pour votre boulangerie.',
    lead: "Toute boulangerie reçoit la demande tôt ou tard : un gâteau sans œuf, une commande vegan pour un anniversaire, un client allergique. VERY AQUAFABA est de l'aquafaba de pois chiches, un blanc d'œuf végétal qui monte, lie et émulsionne comme le vrai. Si vous êtes en Allemagne, vous pouvez l'acheter directement sur Amazon, en liquide et en poudre. Ci-dessous, lequel garder en stock et comment commander en volume.",
    sections: [
      {
        id: 'which',
        title: "Quel format d'aquafaba acheter ?",
        html: `<p>Partez de la quantité qui entre dans la production quotidienne, parce que c'est elle qui décide si un Tetrapak ouvert tourne à temps.</p>
<ul>
<li><strong>Vous cuisez sans œuf tous les jours ?</strong> Gardez le Tetrapak de 1 L au réfrigérateur. Il remplace {eggs_1l} œufs entiers, ou {liquid_1l_whites} blancs d'œufs, et il se verse directement dans le batteur à la température de foisonnement. Ouvert, il s'utilise dans les {opened_days} jours, ce qu'une ligne quotidienne atteint sans peine.</li>
<li><strong>Vous recevez une commande vegan de temps en temps ?</strong> Le sachet de poudre de 200 g est le bon. Reconstitué à {white_powder} g de poudre et {white_water} ml d'eau par blanc d'œuf, il couvre {powder_200g_whites} blancs d'œufs, et un sachet ouvert se garde tant qu'il reste au sec, fermé. Rien ne s'altère entre deux commandes.</li>
<li><strong>Les deux, selon les jours de la semaine ?</strong> Beaucoup de boulangeries gardent le Tetrapak pour la ligne et le sachet pour les commandes. La recette est la même sur l'un ou l'autre.</li>
</ul>
<p>Une chose à savoir quand vous remplacez des œufs entiers dans un biscuit ou une brioche : l'aquafaba apporte plus d'eau qu'un œuf, réduisez donc les autres liquides de {reduce_liquids} pour cent et cuisez à cœur. Le <a href="{baking_href}">guide pâtisserie</a> le traite pièce par pièce.</p>`,
      },
      {
        id: 'more',
        title: "Il vous faut plus d'un Tetrapak par semaine ?",
        html: `<p>Amazon référence les deux formats par lesquels la plupart des cuisines commencent. S'il vous en faut plus, nous chiffrons par projet : le bag-in-box de 10 L, c'est {bib_10l_whites} blancs d'œufs, l'IBC de 1 T {ibc_1t_whites}, et le sac de poudre de 3 kg {powder_3kg_whites}, celui d'un prémix sec. Dites-nous ce que vous cuisez et à peu près combien chaque mois par le formulaire de cette page, et la fiche technique revient avec le devis.</p>`,
      },
    ],
    faq: [
      { q: "Où acheter de l'aquafaba en Allemagne ?", a: 'Sur Amazon, par les deux produits de cette page : le Tetrapak de 1 L de liquide et le sachet de poudre de 200 g.' },
      { q: "Combien d'œufs remplace un Tetrapak de 1 L en pâtisserie ?", a: "{eggs_1l} œufs entiers à {egg_liquid} g chacun, ou {liquid_1l_whites} blancs d'œufs à {white_liquid} g. Réduisez les autres liquides de {reduce_liquids} pour cent quand vous remplacez des œufs entiers." },
      { q: 'Une boulangerie doit-elle acheter le liquide ou la poudre ?', a: "Le liquide si la pâtisserie sans œuf fait partie du quotidien, parce qu'un Tetrapak ouvert s'utilise dans les {opened_days} jours. La poudre pour les commandes vegan occasionnelles, parce qu'un sachet ouvert ne s'altère pas. Beaucoup de boulangeries gardent les deux." },
      { q: 'Comment obtenir les grands formats ?', a: "Par le formulaire de cette page : le bag-in-box, l'IBC et le sac de 3 kg sont chiffrés par projet, avec la fiche technique." },
    ],
    links: [
      { href: '{pastry_href}', label: 'Pâtisserie et boulangerie' },
      { href: '{baking_href}', label: 'Pâtisserie : liquide ou poudre ?' },
      { href: '{reconstitution_href}', label: "Reconstitution de la poudre : la règle par blanc d'œuf" },
      { href: '{index_href}', label: "Tous les guides d'application" },
      { href: '{products_href}', label: 'Produits et formats' },
    ],
  },

  netherlands: {
    inCountry: 'aux Pays-Bas',
    title: "Commander de l'aquafaba aux Pays-Bas - VERY AQUAFABA",
    h1: 'Comment obtenir VERY AQUAFABA aux Pays-Bas',
    crumb: 'Pays-Bas',
    description: 'VERY AQUAFABA aux Pays-Bas : pas encore de boutique en ligne, mais écrivez-nous. Comment commander, quelle quantité demander, et liquide ou poudre.',
    lead: "Un gâteau vegan qui lève, une meringue qui tient, une mousse qui prend : VERY AQUAFABA est de l'aquafaba de pois chiches, un blanc d'œuf végétal qui monte, lie et émulsionne comme le vrai. Nous ne sommes pas encore dans une boutique en ligne néerlandaise, pour l'instant le moyen de l'obtenir est donc de nous écrire. Dites-nous ce que vous cuisez et à peu près combien, et nous revenons vers vous avec les formats, la fiche technique et un devis.",
    sections: [
      {
        id: 'order',
        title: 'Comment commander aux Pays-Bas',
        html: `<p>Parlez-nous de votre boulangerie ou de votre cuisine, et nous prenons le relais. Voici comment nous commander de l'aquafaba :</p>
<ol>
<li><strong>Écrivez-nous ce que vous cuisez et à peu près combien chaque mois.</strong> Le formulaire au bas de cette page demande votre entreprise, l'application et un volume mensuel estimé. Une ligne sur le projet aide.</li>
<li><strong>Nous répondons avec les formats que nous pouvons vous envoyer, la fiche technique et un devis,</strong> y compris le minimum de commande et le délai pour votre volume.</li>
<li><strong>Vous commandez.</strong> Fermés, Tetrapak et sachets se conservent au moins {unopened_months} mois à température ambiante, une première commande peut donc attendre en réserve sèche jusqu'à la prochaine demande vegan.</li>
</ol>
<p>Une référence Amazon pour les Pays-Bas et la Belgique est prévue. Quand elle sera en ligne, cette page y renverra.</p>`,
      },
      {
        id: 'howmuch',
        title: 'Quelle quantité demander ?',
        html: `<p>Une estimation mensuelle est tout ce qu'il nous faut. Pour une boulangerie, le plus simple est de compter les œufs que vous remplaceriez : un œuf entier, c'est {egg_liquid} g d'aquafaba, un blanc d'œuf {white_liquid} g. Une boulangerie qui remplace trente œufs par jour est autour de {eggs_30_day_l} litres par mois ; une préparation de meringue, c'est {meringue_dose} g. Si vous préférez ne pas faire le calcul, le <a href="{baking_calc_href}">calculateur de substitution</a> convertit une recette entière.</p>
<p>Pour vous donner un ordre de grandeur : un Tetrapak de 1 L remplace {eggs_1l} œufs entiers ou {liquid_1l_whites} blancs d'œufs, soit {meringue_batches_1l} préparations de meringue. Un sachet de poudre de 200 g remplace {powder_200g_whites} blancs d'œufs. Une boulangerie avec une ligne sans œuf quotidienne vide un Tetrapak en quelques jours ; une boulangerie avec une commande vegan occasionnelle est mieux servie par un sachet.</p>`,
      },
      {
        id: 'format',
        title: 'Liquide ou poudre : lequel demander ?',
        html: `<p>C'est le même aquafaba en deux états. Le liquide se verse directement dans le batteur et, une fois ouvert, vit au réfrigérateur pendant {opened_days} jours. La poudre se mélange à l'eau quand vous en avez besoin, {white_powder} g et {white_water} ml par blanc d'œuf, et un sachet ouvert se garde jusqu'à ce que vous en ayez besoin, au sec et fermé.</p>
<p>Pour une ligne sans œuf quotidienne, demandez du liquide : le Tetrapak tourne bien avant ses {opened_days} jours. Pour la commande vegan occasionnelle, demandez de la poudre : rien ne s'altère entre deux commandes. Beaucoup de boulangeries gardent les deux. Une chose à savoir quand vous remplacez des œufs entiers : l'aquafaba apporte plus d'eau qu'un œuf, réduisez donc les autres liquides de {reduce_liquids} pour cent. Le <a href="{baking_href}">guide pâtisserie</a> le traite pièce par pièce, et la <a href="{pastry_href}">page pâtisserie et boulangerie</a> organise la semaine autour de ce qui se garde.</p>`,
      },
    ],
    faq: [
      { q: "Puis-je acheter de l'aquafaba aux Pays-Bas aujourd'hui ?", a: "Pas encore en boutique. Écrivez-nous par le formulaire de cette page avec ce que vous cuisez et votre volume mensuel estimé, et nous répondons avec les formats, la fiche technique et un devis." },
      { q: 'VERY AQUAFABA sera-t-il sur Amazon aux Pays-Bas ?', a: "Oui, une référence Amazon pour les Pays-Bas et la Belgique est prévue. Cette page y renverra dès qu'elle sera en ligne." },
      { q: 'Y a-t-il un minimum de commande ?', a: "Il dépend du format et du volume, il vient donc avec le devis. Dites-nous ce que vous cuisez et combien chaque mois, et vous aurez le minimum de commande et le délai avec la fiche technique." },
      { q: "Combien d'œufs remplace un Tetrapak de 1 L ?", a: "{eggs_1l} œufs entiers à {egg_liquid} g chacun, ou {liquid_1l_whites} blancs d'œufs à {white_liquid} g. Réduisez les autres liquides de {reduce_liquids} pour cent quand vous remplacez des œufs entiers." },
      { q: 'Une boulangerie doit-elle demander du liquide ou de la poudre ?', a: "Du liquide pour une ligne sans œuf quotidienne, parce qu'un Tetrapak ouvert s'utilise dans les {opened_days} jours. De la poudre pour les commandes vegan occasionnelles, parce qu'un sachet ouvert ne s'altère pas. Beaucoup de boulangeries gardent les deux." },
    ],
    links: [
      { href: '{pastry_href}', label: 'Pâtisserie et boulangerie' },
      { href: '{baking_href}', label: 'Pâtisserie : liquide ou poudre ?' },
      { href: '{baking_calc_href}', label: 'Calculateur de substitution' },
      { href: '{products_href}', label: 'Produits et formats' },
    ],
  },
};
