import './About.css';

const About = () => {
  const skills = [
    { category: '後端開發', items: ['Java', 'Spring Boot', 'JPA', 'Spring Cache', 'AOP', 'Jasper Reports'] },
    { category: '前端開發', items: ['Vue3', 'JavaScript', 'HTML/CSS', 'React', 'TypeScript'] },
    { category: '資料庫與快取', items: ['MS SQL', 'MySQL', 'Redis', 'SQL 優化'] },
    { category: '開發工具與 DevOps', items: ['Git', 'Maven', 'GitLab CI/CD', 'Shell Script', 'Docker', 'K8s'] },
  ];

  const experiences = [
    {
      company: '富邦媒體科技股份有限公司 (Momo購物)',
      position: '軟體工程師',
      period: '2025/02 - 現在',
      description: '負責電商平台核心系統開發與維護，專注於高流量場景下的系統效能優化與架構改造。',
      achievements: [
        '主導重構「客戶活動資格計算模組」，導入 JPA 與 Redis，將 API 回應時間從 5 秒優化至 200ms (提升 90%)',
        '擔任 on-call 輪值，確保核心系統 24/7 高可用性，具備緊急故障排除實戰經驗',
        '引入 Maven 與 GitLab CI/CD，建立自動化部署流水線，為 K8s 容器化管理鋪路',
        '撰寫 Shell Script 自動化部署流程，將部署時間從 30 分鐘縮短至 3 分鐘 (效率提升 90%)',
        '開發後台自動化工具，取代耗時半天的人工 HTML 調整作業',
      ],
    },
    {
      company: '商智資訊股份有限公司',
      position: 'Java 軟體工程師',
      period: '2023/12 - 2024/11',
      description: '負責銀行 CRM 系統開發與維護，專注於系統安全性、效能優化與合規性需求實作。',
      achievements: [
        '重構權限模型為「組織/用戶/角色」模式，滿足客戶彈性管理需求',
        '重新設計個資保護機制，透過 Interceptor 與 Spring Cache 實現動態遮蔽，API 響應時間從 1000ms 降至 60ms (效能提升 94%)',
        '運用 AOP 技術實作全站 SQL 查詢日誌系統，確保所有操作可追蹤與合規',
        '參與高資產客戶系統開發 (Vue3 + Spring Boot)，負責 Jasper Reports 報表功能',
        '全程參與新系統 SDLC，包含需求分析、功能實作、單元測試與 QA 協作',
      ],
    },
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">關於我</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>哈囉！很高興認識你</h3>
            <p>
              我是洪偉森，畢業於淡江大學資訊工程學系，目前在富邦媒體科技擔任軟體工程師。
              我專注於 Java 後端開發與系統架構優化，對於如何透過程式碼建構高效、穩定的系統抱有濃厚的興趣。
            </p>
            <p>
              我的職涯始於商智資訊，在嚴謹的金融系統開發環境中，累積了扎實的全端開發與系統設計經驗。
              目前在 Momo 購物面對電商平台的高流量與高併發挑戰，我主動發掘並解決系統瓶頸，
              成功將關鍵 API 效能提升 90%，同時推動團隊開發流程現代化。
            </p>
            <p>
              除了程式開發，我更關注團隊整體的開發效率與系統的長期維護性。
              我相信，優化開發流程與提升架構的擴展性，是創造長期價值的關鍵。
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">2+</div>
              <div className="stat-label">年經驗</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">90%+</div>
              <div className="stat-label">效能提升</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">系統維護</div>
            </div>
          </div>
        </div>

        <div className="bio-section">
          <h3 className="section-subtitle">自傳</h3>
          <div className="bio-content">
            <div className="bio-paragraph">
              <h4>🎯 職涯起點</h4>
              <p>
                畢業於淡江大學資訊工程學系，在校期間除了核心的計算機科學知識外，
                我對如何透過程式碼建構高效、穩定的系統抱有濃厚的興趣，這也成為我職涯發展的核心動力。
                從學生時期開始，我就對系統架構與效能優化特別感興趣，並持續在實務工作中深化這方面的能力。
              </p>
            </div>
            <div className="bio-paragraph">
              <h4>💡 商智資訊經歷</h4>
              <p>
                我的職涯始於商智資訊，擔任 Java 軟體工程師，主要負責銀行 CRM 系統開發。
                這份工作讓我深刻體會到，在金融領域，軟體的穩定性、安全性與合規性至關重要。
                我曾負責重構權限模組與個資動態遮蔽機制，在嚴謹的 SDLC 流程下，不僅滿足客戶複雜的管理需求，
                更透過後端快取將 API 效能提升了 94%。同時運用 AOP 技術實作全站 SQL 日誌，確保所有資料庫操作皆有跡可循。
                這段經歷為我打下了扎實的全端開發與系統設計基礎。
              </p>
            </div>
            <div className="bio-paragraph">
              <h4>🚀 Momo 購物挑戰</h4>
              <p>
                為了追求更深度的技術挑戰與更大的影響力，我轉職至富邦媒體科技 (Momo 購物)。
                面對電商平台的高流量與高併發特性，我主動發掘並解決了潛在的系統瓶頸。
                最具代表性的專案是重構運行十年的「客戶活動資格計算模組」，透過導入 JPA 與 Redis，
                成功將關鍵 API 的回應時間由 5 秒以上縮短至 200 毫秒，顯著提升了使用者體驗與系統穩定性。
                同時擔任 on-call 輪值，確保核心系統 24/7 高可用性。
              </p>
            </div>
            <div className="bio-paragraph">
              <h4>🤝 開發效率提升</h4>
              <p>
                除了程式開發，我更關注團隊整體的開發效率。我主動引入 Maven 與 GitLab CI/CD，
                建立了自動化的部署流水線，為後續導入 K8s 容器化管理鋪路；
                並撰寫 Shell Script 將部署時間從 30 分鐘大幅縮短至 3 分鐘。
                我相信，優化開發流程與提升架構的擴展性，是創造長期價值的關鍵。
                好的工程師不只是寫好程式碼，更要能夠理解業務需求，提升團隊效率，創造真正的價值。
              </p>
            </div>
          </div>
        </div>

        <div className="experience-section">
          <h3 className="section-subtitle">工作經歷</h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="experience-header">
                    <div>
                      <h4>{exp.position}</h4>
                      <p className="company-name">{exp.company}</p>
                    </div>
                    <span className="period">{exp.period}</span>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                  <div className="achievements">
                    <strong>主要成就：</strong>
                    <ul>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h3 className="skills-title">技能專長</h3>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-group">
                <h4>{skillGroup.category}</h4>
                <div className="skill-tags">
                  {skillGroup.items.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
