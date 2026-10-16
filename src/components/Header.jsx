import { useState } from 'react';
import './Header.css';

function Header({ brand = 'DataMinds', navItems = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header" id="top">
      <div className="container header__inner">
        <a className="brand" href="#top" aria-label="Página inicial da DataMinds">
          <span className="brand__mark">D</span>
          <span className="brand__text">{brand}</span>
        </a>

        <nav className={`main-nav ${isMenuOpen ? 'main-nav--open' : ''}`} id="main-navigation" aria-label="Navegação principal">
          <ul className="main-nav__list">
            {navItems.map((item) => (
              <li key={item.label} className="main-nav__item">
                <a href={item.href} onClick={() => setIsMenuOpen(false)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions" aria-label="Ações de usuário">
          <a className="button button--ghost" href="#login">Entrar</a>
          <a className="button button--primary" href="#contact">Inscreva-se</a>
        </div>

        <button
          type="button"
          className="header__menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header;
