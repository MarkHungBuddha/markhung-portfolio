import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            你好，我是 <span className="highlight">洪偉森</span>
          </h1>
          <p className="hero-subtitle">
            Java 後端工程師 | 全端開發者 | 系統架構優化專家
          </p>
          <p className="hero-description">
            專注於高併發系統優化與微服務架構，致力於打造高效能、高可用性的企業級應用
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
              查看作品
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              聯絡我
            </a>
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
