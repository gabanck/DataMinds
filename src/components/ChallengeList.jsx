import './ChallengeList.css';

function ChallengeList({ items = [] }) {
  return (
    <section className="section" id="projects" aria-labelledby="challenge-title">
      <div className="container">
        <div className="section-header">
          <span className="section-header__eyebrow">Projetos</span>
          <h2 id="challenge-title">Desafios que conectam dados ao cotidiano.</h2>
        </div>

        <div className="challenge-grid">
          {items.map((item) => (
            <article key={item.title} className="challenge-card">
              <span className="challenge-card__badge">{item.badge}</span>
              <h3 className="challenge-card__title">{item.title}</h3>
              <p>{item.description}</p>
              <span className="challenge-card__meta">{item.meta}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChallengeList;
