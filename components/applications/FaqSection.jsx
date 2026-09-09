// FAQ block: the same question/answer strings feed the FAQPage JSON-LD.
export default function FaqSection({ faq }) {
  if (!faq?.items?.length) return null;
  return (
    <section className="va-section va-faq">
      <div className="va-container">
        <h2>{faq.title}</h2>
        {faq.items.map((item) => (
          <div className="va-faq-item" key={item.q}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
