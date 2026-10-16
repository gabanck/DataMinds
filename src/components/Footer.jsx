import './Footer.css';

function Footer({ items = [] }) {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__inner">
        <div>
          <a className="brand" href="#top" aria-label="Ir para o topo da página">
            <span className="brand__mark">D</span>
            <span className="brand__text">DataMinds</span>
          </a>
        </div>

        <nav className="footer__nav" aria-label="Navegação de rodapé">
          {items.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <p>© 2026 DataMinds. Transformando aulas em experiências reais.</p>
      </div>
    </footer>
  );
}

export default Footer;
