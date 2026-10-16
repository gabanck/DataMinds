import './CommunitySection.css';

function CommunitySection({ items = [] }) {
  return (
    <section className="section" id="community" aria-labelledby="community-title">
      <div className="container">
        <div className="community-grid">
          <div className="section-header">
            <span className="section-header__eyebrow">Comunidade</span>
            <h2 id="community-title">Uma jornada feita para aprender junto.</h2>
            <p>
              Mais do que cursos, a DataMinds oferece um ambiente de prática contínua para desenvolver
              raciocínio analítico e entender a aplicação real dos dados no mundo corporativo.
            </p>
          </div>

          <div className="community-block">
            <h3>Aprenda com feedback e propósito.</h3>
            <p>Você desenvolve projetos de valor, entende métricas e se prepara para desafios reais.</p>
            <ul className="community-list" aria-label="Benefícios da comunidade">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommunitySection;
