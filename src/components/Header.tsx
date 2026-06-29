import { useState } from 'react';
import { useLanguage } from '../i18n/language';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const isEnglish = language === 'en';

  const labels = isEnglish
    ? { home: 'Home', projects: 'Projects', experience: 'Experience', writing: 'Writing', contact: 'Contact' }
    : { home: '首頁', projects: '專案', experience: '經歷', writing: '文章', contact: '聯絡我' };

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
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav id="primary-navigation" className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#hero" onClick={() => scrollToSection('hero')}>{labels.home}</a>
          <a href="#projects" onClick={() => scrollToSection('projects')}>{labels.projects}</a>
          <a href="#about" onClick={() => scrollToSection('about')}>{labels.experience}</a>
          <a href="#blog" onClick={() => scrollToSection('blog')}>{labels.writing}</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>{labels.contact}</a>
          <button
            type="button"
            className="language-toggle"
            onClick={() => setLanguage(isEnglish ? 'zh-TW' : 'en')}
            aria-label={isEnglish ? '切換至繁體中文' : 'Switch to English'}
          >
            {isEnglish ? '中文' : 'EN'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
