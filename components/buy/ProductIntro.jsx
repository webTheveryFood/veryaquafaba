// Second intro paragraph, per locale, keyed by the section title (same mechanism
// the German branch already used). Bold spans mirror the original WordPress page.
// Falls back to English if the title doesn't match a known locale.
const SECOND_PARAGRAPH_HTML = {
  'more than chickpea water':
    '<b>VERY AQUAFABA</b> takes this natural base and transforms it into a <b>professional ingredient</b>: filtered, refined, and standardized for reliable performance in every batch. <b>Neutral in taste, clean-label, and easy to handle</b>, it’s designed to bring stable whipping, binding, and emulsifying power to chefs, bakers, and manufacturers at scale.',
  'Mehr als Kichererbsenwasser':
    '<b>VERY AQUAFABA</b> nimmt diese natürliche Basis und verwandelt sie in eine <b>professionelle Zutat</b>: gefiltert, verfeinert und standardisiert für zuverlässige Leistung in jeder Charge. <b>Neutral im Geschmack, clean-label und einfach zu verwenden</b>, bringt es Köchen, Bäckern und Herstellern stabile Schlag-, Bind- und Emulgierkraft – perfekt geeignet für den Einsatz im großen Maßstab.',
  'Plus qu’une eau de pois chiche':
    '<b>VERY AQUAFABA</b> prend cette base naturelle et la transforme en <b>ingrédient professionnel</b> : filtré, affiné et standardisé pour une performance fiable à chaque lot. <b>Neutre en goût, clean label et facile à utiliser</b>, il apporte aux chefs, pâtissiers et industriels une puissance de foisonnement, de liaison et d’émulsion stable, adaptée aux besoins à grande échelle.',
  'Meer dan kikkererwtenwater':
    '<b>VERY AQUAFABA</b> neemt deze natuurlijke basis en transformeert het tot een <b>professioneel ingrediënt</b>: gefilterd, verfijnd en gestandaardiseerd voor betrouwbare prestaties in elke batch. <b>Neutraal van smaak, clean- label en eenvoudig in gebruik</b>, biedt het chefs, bakkers en producenten een stabiele klop-, bind- en emulgeerkracht, perfect geschikt voor grootschalige toepassingen.',
  'Más que agua de garbanzos':
    '<b>VERY AQUAFABA</b> transforma esta base natural en un <b>ingrediente profesional</b>: filtrado, refinado y estandarizado para ofrecer un rendimiento fiable en cada lote. <b>De sabor neutro, clean label y fácil de usar</b>, aporta una capacidad estable para montar, ligar y emulsionar en cocinas, pastelerías y procesos industriales a gran escala.',
};

function IntroSecondParagraph({ content }) {
  const html = SECOND_PARAGRAPH_HTML[content.title] || SECOND_PARAGRAPH_HTML['more than chickpea water'];
  return <p className="p1" dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function ProductIntro({ content }) {
  const isGerman = content.title === 'Mehr als Kichererbsenwasser';
  const image = isGerman ? '/wp-content/uploads/2025/09/PHOTO_CHICKPEAS-818x1024.png' : content.image;
  const width = isGerman ? '800' : '768';
  const height = isGerman ? '1001' : '961';
  const sizes = isGerman ? '(max-width: 800px) 100vw, 800px' : '(max-width: 768px) 100vw, 768px';

  return (
    <section className="elementor-element elementor-element-19214e9 e-flex e-con-boxed e-con e-parent" data-id="19214e9" data-element_type="container">
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-41aa853 e-con-full e-flex e-con e-child" data-id="41aa853" data-element_type="container" data-settings='{"background_background":"classic"}'>
          <div className="elementor-element elementor-element-b380c52 elementor-widget__width-inherit elementor-widget elementor-widget-image" data-id="b380c52" data-element_type="widget" data-widget_type="image.default">
            <img loading="lazy" decoding="async" width={width} height={height} src={image} srcSet={content.imageSrcSet} sizes={sizes} className="attachment-medium_large size-medium_large wp-image-56" alt="Chikpeas floating in hot water to produce Aquafaba" />
          </div>
        </div>
        <div className="elementor-element elementor-element-6c77626 e-flex e-con-boxed e-con e-child" data-id="6c77626" data-element_type="container" data-settings='{"background_background":"classic"}'>
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-5fdbbd4 e-flex e-con-boxed e-con e-child" data-id="5fdbbd4" data-element_type="container">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-a6cdca1 elementor-widget elementor-widget-heading" data-id="a6cdca1" data-element_type="widget" data-widget_type="heading.default">
                  <h2 className="elementor-heading-title elementor-size-default">{content.title}</h2>
                </div>
                <div className="elementor-element elementor-element-5c13c7d elementor-widget elementor-widget-text-editor" data-id="5c13c7d" data-element_type="widget" data-widget_type="text-editor.default">
                  <p className="p1">{content.paragraphs[0]}</p>
                  <IntroSecondParagraph content={content} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
