import './Hero.css';

function Hero() {
  return (
    <main>
      <section className="hero section" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="eyebrow">Aprendizado prático em ciência de dados</span>
            <h1 id="hero-title">Transforme problemas cotidianos em soluções reais.</h1>
            <p className="hero__lead">
              A DataMinds conecta teoria e prática por meio de projetos de dados inspirados no dia a dia,
              ajudando estudantes e profissionais a pensar com análise, clareza e impacto.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#projects">Começar agora</a>
              <a className="button button--secondary" href="#method">Ver desafios</a>
            </div>
            <ul className="hero__meta" aria-label="Estatísticas da plataforma">
              <li><strong>12k+</strong><span>alunos</span></li>
              <li><strong>80%</strong><span>aprendem com projetos</span></li>
              <li><strong>24/7</strong><span>acesso ao conteúdo</span></li>
            </ul>
          </div>

          <div className="hero__visual" aria-label="Painel ilustrativo da plataforma">
            <div className="dashboard-card dashboard-card--main">
              <div className="dashboard-card__header">
                <span className="dot dot--blue"></span>
                <span className="dot dot--gray"></span>
                <span className="dot dot--gray"></span>
              </div>
              <div className="dashboard-card__body">
                <div className="chart" aria-hidden="true">
                  <span style={{ height: '42%' }}></span>
                  <span style={{ height: '56%' }}></span>
                  <span style={{ height: '72%' }}></span>
                  <span style={{ height: '48%' }}></span>
                  <span style={{ height: '86%' }}></span>
                  <span style={{ height: '100%' }}></span>
                </div>

                <div className="summary-panel">
                  <p>Taxa de conclusão</p>
                  <strong>92%</strong>
                  <small>+18% no último ciclo</small>
                </div>
              </div>
            </div>

            <div className="floating-card floating-card--left">
              <span className="floating-card__label">Insights</span>
              <strong>+24%</strong>
              <small>em previsões de demanda</small>
            </div>

            <div className="floating-card floating-card--right">
              <span className="floating-card__label">Sprint atual</span>
              <strong>Desafio de mobilidade</strong>
              <small>2 dias restantes</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
