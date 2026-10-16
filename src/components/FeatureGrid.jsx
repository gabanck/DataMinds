import './FeatureGrid.css';

function FeatureGrid({ items = [] }) {
  return (
    <section className="section" id="method" aria-labelledby="feature-title">
      <div className="container">
        <div className="section-header">
          <span className="section-header__eyebrow">Metodologia</span>
          <h2 id="feature-title">A experiência que transforma teoria em prática.</h2>
        </div>

        <div className="feature-grid">
          {items.map((item, index) => (
            <article key={item.title} className="feature-card">
              <span className="feature-card__icon" aria-hidden="true">{index + 1}</span>
              <span className="feature-card__badge">{item.accent}</span>
              <h3 className="feature-card__title">{item.title}</h3>
              <p className="feature-card__text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureGrid;
