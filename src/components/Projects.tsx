import './Projects.css';
import { useLanguage } from '../i18n/language';

const Projects = () => {
    const { language } = useLanguage();
    const isEnglish = language === 'en';
    const projects = [
        {
            title: 'TravelCal',
            description: isEnglish
                ? 'A production sports and travel schedule platform with geospatial search, multilingual data, and more than 2,900 events across Asian sports leagues.'
                : '正式上線的運動旅遊賽程平台，提供地理空間搜尋、多語資料，整合亞洲各大職業聯盟超過 2,900 場賽事。',
            tech: ['Go', 'PostgreSQL/PostGIS', 'React', 'Docker'],
            image: '🗓️',
            links: [
                { label: isEnglish ? 'Live Product' : '線上產品', url: 'https://travel-schedule-helper.com', primary: true },
            ],
        },
        {
            title: 'Monte Carlo Life Simulator',
            description: isEnglish
                ? 'An interactive retirement and life simulator running 10,000 deterministic simulation paths in a Web Worker, including careers, housing, immigration, and sequence risk.'
                : '互動式退休與人生模擬器，透過 Web Worker 執行 10,000 條可重現的模擬路徑，涵蓋職涯、住房、移民與報酬順序風險。',
            tech: ['TypeScript', 'React', 'Zustand', 'Web Workers', 'Vitest'],
            image: '📈',
            links: [
                { label: isEnglish ? 'Live Product' : '線上產品', url: 'https://montecarlosimulation.games', primary: true },
            ],
        },
    ];

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <h2 className="section-title">{isEnglish ? 'Selected Projects' : '精選專案'}</h2>
                <p className="section-subtitle">{isEnglish ? 'Live products built and operated end to end' : '從零打造、部署並持續維運的線上產品'}</p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <span className="project-emoji">{project.image}</span>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    {project.links.map((link) => (
                                        <a key={link.url} href={link.url} className={`project-link ${link.primary ? 'demo-link' : ''}`} target="_blank" rel="noopener noreferrer">
                                            <span>↗ {link.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
