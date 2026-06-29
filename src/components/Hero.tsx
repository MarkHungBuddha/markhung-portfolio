import './Hero.css';
import resumeUrl from '../../doc/cv_en.pdf?url';
import { useLanguage } from '../i18n/language';

const Hero = () => {
  const { language } = useLanguage();
  const copy = language === 'en'
    ? {
        title: <>Backend engineer building <span className="highlight">systems that scale.</span></>,
        subtitle: 'Mark Hung · Backend Software Engineer · Taipei, Taiwan',
        description: 'I design and operate distributed backends that stay fast and reliable under load—Java, Spring Boot, Kafka, Redis, Kubernetes, and AWS. Currently expanding into Go and SRE.',
        projects: 'View Projects',
        contact: 'Contact Me',
        resume: 'Résumé PDF',
      }
    : {
        title: <>打造可擴展系統的<span className="highlight">後端工程師。</span></>,
        subtitle: '洪偉森 Mark Hung · 後端軟體工程師 · 台北',
        description: '我設計並維運在高負載下仍快速、可靠的分散式後端系統，技術涵蓋 Java、Spring Boot、Kafka、Redis、Kubernetes 與 AWS，目前持續拓展 Go 與 SRE 能力。',
        projects: '查看專案',
        contact: '聯絡我',
        resume: '英文履歷 PDF',
      };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            {copy.title}
          </h1>
          <p className="hero-subtitle">
            {copy.subtitle}
          </p>
          <p className="hero-description">
            {copy.description}
          </p>
          <div className="hero-buttons">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {copy.projects}
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {copy.contact}
            </a>
            <a href="https://github.com/MarkHungBuddha" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={resumeUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">{copy.resume}</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <div className="floating-element"></div>
            <div className="floating-element"></div>
            <div className="floating-element"></div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  );
};

export default Hero;
