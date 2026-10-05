// Photo cards of the cocktail pages (cocktail expansion): the cocktails guide and every
// cocktail page link to the cocktails of the recipe book through their photos.
export default function CocktailCards({ content }) {
  return (
    <div className="va-recipe-body va-guide-card">
      <section className="va-recipe-section va-cocktail-cards">
        <h2>{content.title}</h2>
        <ul>
          {content.items.map((item) => (
            <li key={item.href}>
              <a href={item.href}>
                <img src={item.image} alt={item.alt} loading="lazy" width="1122" height="1374" />
                <strong>{item.title}</strong>
                {item.text ? <span>{item.text}</span> : null}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
