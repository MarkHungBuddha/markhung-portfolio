import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: '個人作品集網站',
            description: '使用 React + TypeScript 打造的個人作品集網站，部署於 AWS S3 + CloudFront',
            tech: ['React', 'TypeScript', 'AWS S3', 'CloudFront'],
            image: '🌐',
            frontend: 'https://github.com/MarkHungBuddha/markhung-portfolio',
            demo: 'https://markhung384.me/',
        },
        {
            title: 'E-commerce 購物網站',
            description: '完整的電商平台，包含商品展示、購物車、結帳和訂單管理',
            tech: ['Vue', 'JavaScript', 'SpringBoot', 'MS SQL'],
            image: '🛒',
            frontend: 'https://github.com/MarkHungBuddha/ispanfinalprojectfrontend',
            backend: 'https://github.com/MarkHungBuddha/iSpanFinalProject',
        },
    ];

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <h2 className="section-title">專案作品</h2>
                <p className="section-subtitle">以下是我最近完成的一些專案</p>

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
                                    {project.frontend && (
                                        <a href={project.frontend} className="project-link" target="_blank" rel="noopener noreferrer">
                                            <span>💻 前端</span>
                                        </a>
                                    )}
                                    {project.backend && (
                                        <a href={project.backend} className="project-link" target="_blank" rel="noopener noreferrer">
                                            <span>⚙️ 後端</span>
                                        </a>
                                    )}
                                    {project.demo && project.demo !== '#' && (
                                        <a href={project.demo} className="project-link demo-link" target="_blank" rel="noopener noreferrer">
                                            <span>🚀 Demo</span>
                                        </a>
                                    )}
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