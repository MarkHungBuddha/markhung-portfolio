import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>Mark Hung</h2>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a onClick={() => scrollToSection('hero')}>首頁</a>
          <a onClick={() => scrollToSection('about')}>關於我</a>
          <a onClick={() => scrollToSection('projects')}>專案</a>
          <a onClick={() => scrollToSection('blog')}>部落格</a>
          <a onClick={() => scrollToSection('contact')}>聯絡我</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
