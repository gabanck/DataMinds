import './Stats.css';

function Stats({ items = [] }) {
  return (
    <section className="metrics section" aria-label="Números da plataforma">
      <div className="container metrics__grid">
        {items.map((item) => (
          <article key={item.label} className="metric-card">
            <strong className="metric-card__value">{item.value}</strong>
            <span className="metric-card__label">{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Stats;
