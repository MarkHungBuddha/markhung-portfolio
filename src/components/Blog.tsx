import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      title: '如何使用 AWS S3 + CloudFront 部署靜態網站',
      excerpt: '詳細介紹如何將 React 應用程式部署到 AWS S3，並搭配 CloudFront CDN 加速全球訪問速度...',
      date: '2025-10-15',
      readTime: '8 分鐘',
      tags: ['AWS', 'DevOps', 'React'],
      image: '☁️',
    },
    {
      title: 'React + TypeScript 最佳實踐',
      excerpt: '分享在大型專案中使用 TypeScript 的經驗，包含型別定義、泛型應用和常見陷阱...',
      date: '2025-10-10',
      readTime: '12 分鐘',
      tags: ['React', 'TypeScript', 'Best Practices'],
      image: '⚛️',
    },
    {
      title: '深入理解 JavaScript 閉包',
      excerpt: '透過實際範例解釋閉包的概念，以及如何在實務中善用閉包來解決問題...',
      date: '2025-10-05',
      readTime: '10 分鐘',
      tags: ['JavaScript', 'Programming'],
      image: '📚',
    },
    {
      title: 'CSS Grid vs Flexbox：何時該用哪個？',
      excerpt: '比較 Grid 和 Flexbox 的特性和使用場景，幫助你選擇最適合的佈局方式...',
      date: '2025-09-28',
      readTime: '6 分鐘',
      tags: ['CSS', 'Web Design'],
      image: '🎨',
    },
    {
      title: '使用 Vite 打造極速開發環境',
      excerpt: 'Vite 為何這麼快？深入了解其原理以及如何配置最佳化的開發環境...',
      date: '2025-09-20',
      readTime: '7 分鐘',
      tags: ['Vite', 'Tools', 'Performance'],
      image: '⚡',
    },
    {
      title: 'Git 工作流程與分支策略',
      excerpt: '介紹常見的 Git 分支策略，包含 Git Flow、GitHub Flow 等，幫助團隊協作更順暢...',
      date: '2025-09-15',
      readTime: '9 分鐘',
      tags: ['Git', 'DevOps', 'Collaboration'],
      image: '🌿',
    },
  ];

  return (
    <section id="blog" className="blog">
      <div className="blog-container">
        <h2 className="section-title">技術部落格</h2>
        <p className="section-subtitle">分享我的學習筆記與開發心得</p>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog-card">
              <div className="blog-image">
                <span className="blog-emoji">{post.image}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-divider">•</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-tags">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="blog-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className="read-more">
                  閱讀更多 →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <a href="#" className="btn btn-primary">查看所有文章</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
