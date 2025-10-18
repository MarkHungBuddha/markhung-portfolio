import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/MarkHungBuddha', icon: '🐱' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/wei-sen-hung-29a280205', icon: '💼' },
    { name: 'Email', url: 'mailto:p1i979thv@mozmail.com', icon: '📧' },
  ];

  const quickLinks = [
    { name: '首頁', href: '#hero' },
    { name: '關於我', href: '#about' },
    { name: '專案', href: '#projects' },
    { name: '部落格', href: '#blog' },
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
              全端工程師，專注於打造優質的網頁應用程式。
              熱愛學習新技術並分享開發經驗。
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
            <h4>快速連結</h4>
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
            <h4>技術堆疊</h4>
            <ul className="footer-links">
              <li>React 19</li>
              <li>TypeScript</li>
              <li>Vite</li>
              <li>AWS S3 + CloudFront</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>聯絡資訊</h4>
            <ul className="footer-links">
              <li>📧 p1i979thv@mozmail.com</li>
              <li>📍 台灣</li>
              <li>💼 開放合作機會</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Mark Hung. All rights reserved.</p>
          <p className="footer-tech">
            Built with React + TypeScript + Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
