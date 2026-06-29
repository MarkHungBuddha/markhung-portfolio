import './About.css';
import { useLanguage } from '../i18n/language';

const About = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  const skills = isEnglish ? [
    { category: 'Languages', items: ['Java', 'Go (learning)', 'TypeScript', 'JavaScript', 'SQL', 'Python'] },
    { category: 'Backend & Data', items: ['Spring Boot', 'Kafka', 'MongoDB', 'Redis', 'PostgreSQL', 'PostGIS'] },
    { category: 'Infrastructure & Ops', items: ['Docker', 'Kubernetes', 'AWS', 'Prometheus', 'Grafana', 'K6'] },
    { category: 'Engineering Focus', items: ['Distributed Systems', 'Event-Driven Design', 'Observability', 'Performance Optimization', 'RBAC', 'Root Cause Analysis'] },
  ] : [
    { category: '程式語言', items: ['Java', 'Go（學習中）', 'TypeScript', 'JavaScript', 'SQL', 'Python'] },
    { category: '後端與資料', items: ['Spring Boot', 'Kafka', 'MongoDB', 'Redis', 'PostgreSQL', 'PostGIS'] },
    { category: '基礎設施與維運', items: ['Docker', 'Kubernetes', 'AWS', 'Prometheus', 'Grafana', 'K6'] },
    { category: '工程專長', items: ['分散式系統', '事件驅動設計', '可觀測性', '效能優化', 'RBAC', '根因分析'] },
  ];

  const experiences = isEnglish ? [
    {
      company: 'Fubon Media Technology (momo)',
      position: 'Software Engineer',
      period: 'Feb 2025 – Apr 2026 · Taipei',
      description: "Built and operated core systems for one of Taiwan's largest e-commerce platforms.",
      achievements: [
        'Led a ground-up event-driven rebuild using Kafka and MongoDB, cutting calculation latency from 3–5 minutes to an average of 4 seconds.',
        'Diagnosed a critical API bottleneck and introduced Redis caching and critical-path tuning, reducing response time from 1000ms+ to under 100ms.',
        'Shipped Prometheus and Grafana observability for latency and error-rate regressions, and validated changes with K6 load testing.',
        'Coordinated requirements and acceptance checkpoints across business and engineering teams for Double 11 and daily campaigns serving 100,000+ daily active users.',
        'Introduced Scrum, workload metrics, and progress visibility to improve delivery predictability and reduce ad-hoc coordination.',
      ],
    },
    {
      company: 'Business Intelligence Info. Corp',
      position: 'Java Software Engineer',
      period: 'Dec 2023 – Nov 2024 · Taipei',
      description: 'Built banking CRM systems in a regulated financial environment.',
      achievements: [
        'Moved PII masking from the frontend to backend Interceptors and Spring Cache, lowering API latency from 1000ms to 60ms and improving load-test throughput by 30%.',
        'Refactored the RBAC model from User/Role to Organization/User/Role for more granular scope control.',
        'Implemented AOP-based SQL and API audit logging to support regulatory compliance and access traceability.',
      ],
    },
  ] : [
    {
      company: '富邦媒體科技（momo 購物）',
      position: '軟體工程師',
      period: '2025 年 2 月 – 2026 年 4 月 · 台北',
      description: '為台灣大型電商平台打造並維運核心系統。',
      achievements: [
        '主導以 Kafka 與 MongoDB 從零重建事件驅動系統，將計算延遲從 3–5 分鐘縮短至平均 4 秒。',
        '找出關鍵 API 效能瓶頸，導入 Redis 快取並優化關鍵路徑，將回應時間從 1000ms 以上降至 100ms 以下。',
        '導入 Prometheus 與 Grafana 監控延遲及錯誤率，並使用 K6 進行負載測試驗證。',
        '負責雙 11 與日常活動的跨部門需求及驗收協調，支援超過 10 萬名每日活躍使用者。',
        '在團隊導入 Scrum、工作量指標與進度透明化，提升交付可預測性並減少臨時溝通成本。',
      ],
    },
    {
      company: '商智資訊股份有限公司',
      position: 'Java 軟體工程師',
      period: '2023 年 12 月 – 2024 年 11 月 · 台北',
      description: '在高度監管的金融環境中開發銀行 CRM 系統。',
      achievements: [
        '將個資遮蔽從前端移至後端 Interceptor 與 Spring Cache，使 API 延遲從 1000ms 降至 60ms，負載測試吞吐量提升 30%。',
        '將 RBAC 權限模型從使用者／角色重構為組織／使用者／角色，提供更細緻的範圍控管。',
        '實作基於 AOP 的 SQL 與 API 稽核日誌，支援法規遵循與存取追蹤。',
      ],
    },
  ];

  const introduction = isEnglish
    ? {
        title: 'Distributed systems that handle real traffic',
        paragraphs: [
          'I am a backend engineer based in Taipei, focused on high-throughput services, asynchronous event pipelines, and the observability required to keep them healthy.',
          'I care about the engineering beyond the demo: behavior under load, graceful degradation, and finding regressions before users do. My recent work spans e-commerce systems and regulated banking platforms.',
          'I am now expanding deliberately into Go and SRE—building infrastructure, observability, and operational ownership alongside application development.',
        ],
      }
    : {
        title: '處理真實流量的分散式系統',
        paragraphs: [
          '我是現居台北的後端工程師，專注於高吞吐服務、非同步事件管線，以及維持系統健康所需的可觀測性。',
          '我重視展示畫面之外的工程問題：系統在負載下的行為、如何優雅降級，以及如何在使用者發現前找出效能退化。近期經驗涵蓋電商核心系統與受監管的銀行平台。',
          '目前我正有計畫地拓展 Go 與 SRE 能力，將基礎設施、可觀測性與營運責任納入應用開發的完整生命週期。',
        ],
      };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">{isEnglish ? 'Experience' : '工作經歷'}</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>{introduction.title}</h3>
            {introduction.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">4 sec</div>
              <div className="stat-label">{isEnglish ? 'From 3–5 minutes' : '原需 3–5 分鐘'}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">&lt;100ms</div>
              <div className="stat-label">{isEnglish ? 'Optimized hot path' : '關鍵路徑優化'}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100K+</div>
              <div className="stat-label">{isEnglish ? 'Daily active users' : '每日活躍使用者'}</div>
            </div>
          </div>
        </div>

        <div className="experience-section">
          <div className="timeline">
            {experiences.map((experience) => (
              <div key={`${experience.company}-${experience.period}`} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="experience-header">
                    <div>
                      <h4>{experience.position}</h4>
                      <p className="company-name">{experience.company}</p>
                    </div>
                    <span className="period">{experience.period}</span>
                  </div>
                  <p className="experience-description">{experience.description}</p>
                  <div className="achievements">
                    <strong>{isEnglish ? 'Selected impact' : '代表成果'}</strong>
                    <ul>
                      {experience.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h3 className="skills-title">{isEnglish ? 'Technical Skills' : '技術能力'}</h3>
          <div className="skills-grid">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="skill-group">
                <h4>{skillGroup.category}</h4>
                <div className="skill-tags">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bio-section">
          <h3 className="section-subtitle">{isEnglish ? 'Education' : '學歷'}</h3>
          <div className="bio-content">
            <div className="bio-paragraph">
              <h4>{isEnglish ? 'Tamkang University' : '淡江大學'}</h4>
              <p>{isEnglish ? 'B.S. in Computer Science & Information Engineering · Sep 2018 – Jun 2022' : '資訊工程學系學士 · 2018 年 9 月 – 2022 年 6 月'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
