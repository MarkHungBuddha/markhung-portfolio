import './Footer.css';
import { useLanguage } from '../i18n/language';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/MarkHungBuddha', icon: '🐱' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/markhung384', icon: '💼' },
    { name: 'Email', url: 'mailto:1909kram@gmail.com', icon: '📧' },
  ];

  const quickLinks = isEnglish ? [
    { name: 'Home', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#about' },
    { name: 'Writing', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ] : [
    { name: '首頁', href: '#hero' },
    { name: '專案', href: '#projects' },
    { name: '工作經歷', href: '#about' },
    { name: '文章', href: '#blog' },
    { name: '聯絡我', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Mark Hung</h3>
            <p className="footer-description">
              {isEnglish
                ? 'Backend engineer building high-throughput, event-driven systems with production reliability and observability in mind.'
                : '專注於高吞吐事件驅動系統、正式環境可靠性與可觀測性的後端工程師。'}
            </p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  title={link.name}
                >
                  <span>{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>{isEnglish ? 'Navigate' : '快速導覽'}</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href.substring(1));
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>{isEnglish ? 'Core Stack' : '核心技術'}</h4>
            <ul className="footer-links">
              <li>Java + Spring Boot</li>
              <li>Kafka + Redis</li>
              <li>Kubernetes + AWS</li>
              <li>Go + PostgreSQL</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{isEnglish ? 'Contact' : '聯絡資訊'}</h4>
            <ul className="footer-links">
              <li>📧 1909kram@gmail.com</li>
              <li>📍 {isEnglish ? 'Taipei, Taiwan' : '台北，台灣'}</li>
              <li>💼 {isEnglish ? 'Open to backend / SRE roles' : '尋找後端／SRE 職涯機會'}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Mark Hung. {isEnglish ? 'All rights reserved.' : '版權所有。'}</p>
          <p className="footer-tech">
            {isEnglish ? 'Built with React + TypeScript · Deployed on AWS' : '使用 React + TypeScript 打造 · 部署於 AWS'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
