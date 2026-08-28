import ActionButton from '../shared/ActionButton';

const strongPhrases = [
  ['chickpeas', 'replacement for egg whites', 'whole-egg substitute'],
  ['VERY AQUAFABA', 'professional kitchens', 'industrial production'],
  ['liquid', 'powder', 'meringues, desserts, and cocktails', 'baked goods', 'sauces', 'mayonnaise'],
  ['Whip, bind, emulsify: VERY AQUAFABA', 'clean-label egg replacement'],
];

function RichParagraph({ text, index }) {
  const phrases = strongPhrases[index] || [];
  if (!phrases.length) return text;

  const pattern = new RegExp(`(${phrases.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
  return text.split(pattern).map((part, partIndex) =>
    phrases.includes(part) ? <strong key={`${part}-${partIndex}`}>{part}</strong> : part
  );
}

export default function WhatIsAquafaba({ content }) {
  return (
    <section className="elementor-element elementor-element-345d89b e-flex e-con-boxed e-con e-parent" data-id="345d89b" data-element_type="container" data-settings='{"background_background":"classic"}'>
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-f646fcd e-con-full e-flex e-con e-child" data-id="f646fcd" data-element_type="container">
          <div className="elementor-element elementor-element-531ab97 elementor-widget elementor-widget-image" data-id="531ab97" data-element_type="widget" data-widget_type="image.default">
            <img decoding="async" width="800" height="800" src={content.leftImage} className="attachment-large size-large wp-image-3330" alt="" />
          </div>
        </div>

        <div className="elementor-element elementor-element-5203d29 e-flex e-con-boxed e-con e-child" data-id="5203d29" data-element_type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-518744c elementor-widget elementor-widget-heading" data-id="518744c" data-element_type="widget" data-widget_type="heading.default">
              <h2 className="elementor-heading-title elementor-size-default">{content.title}</h2>
            </div>
            <div className="elementor-element elementor-element-73b1195 elementor-widget elementor-widget-text-editor" data-id="73b1195" data-element_type="widget" data-widget_type="text-editor.default">
              {content.paragraphs.map((paragraph, index) => (
                <p className="p1" key={paragraph}><RichParagraph text={paragraph} index={index} /></p>
              ))}
            </div>
            <ActionButton href={content.action.href} elementId="201cf93">{content.action.label}</ActionButton>
          </div>
        </div>

        <div className="elementor-element elementor-element-a890f41 e-con-full e-flex e-con e-child" data-id="a890f41" data-element_type="container">
          <div className="elementor-element elementor-element-550891d elementor-widget elementor-widget-image" data-id="550891d" data-element_type="widget" data-widget_type="image.default">
            <img loading="lazy" decoding="async" width="800" height="800" src={content.rightImage} className="attachment-large size-large wp-image-3327" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
