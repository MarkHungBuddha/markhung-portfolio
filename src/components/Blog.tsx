import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import { getAllPosts, formatDate, type BlogPost } from '../utils/blogLoader';
import './Blog.css';
import 'highlight.js/styles/github-dark.css';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      console.log('開始載入部落格文章...');
      const posts = await getAllPosts();
      console.log('成功載入文章:', posts);
      setBlogPosts(posts);
    } catch (error) {
      console.error('載入部落格文章時發生錯誤:', error);
    } finally {
      setLoading(false);
    }
  };

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closePost = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
  };

  // 計算閱讀時間（約每分鐘 200 字）
  const calculateReadTime = (content: string): string => {
    const wordsPerMinute = 200;
    const wordCount = content.length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} 分鐘`;
  };

  if (loading) {
    return (
      <section id="blog" className="blog">
        <div className="blog-container">
          <h2 className="section-title">技術部落格</h2>
          <p className="section-subtitle">載入中...</p>
        </div>
      </section>
    );
  }

  console.log('渲染部落格，文章數量:', blogPosts.length);

  return (
    <section id="blog" className="blog">
      <div className="blog-container">
        <h2 className="section-title">技術部落格</h2>
        <p className="section-subtitle">分享我的學習筆記與開發心得</p>

        {blogPosts.length === 0 ? (
          <p className="section-subtitle">沒有找到文章</p>
        ) : (
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
            <article key={index} className="blog-card">
              <div className="blog-image">
                <span className="blog-emoji">{post.image}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{formatDate(post.date)}</span>
                  <span className="blog-divider">•</span>
                  <span className="blog-read-time">
                    {calculateReadTime(post.content)}
                  </span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="blog-tags">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="blog-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => openPost(post)}
                  className="read-more"
                >
                  閱讀更多 →
                </button>
              </div>
            </article>
            ))}
          </div>
        )}
      </div>

      {/* 文章閱讀 Modal */}
      {selectedPost && (
        <div className="blog-modal" onClick={closePost}>
          <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="blog-modal-close" onClick={closePost}>
              ✕
            </button>

            <div className="blog-modal-header">
              <div className="blog-modal-emoji">{selectedPost.image}</div>
              <h1>{selectedPost.title}</h1>
              <div className="blog-modal-meta">
                <span>{formatDate(selectedPost.date)}</span>
                <span className="blog-divider">•</span>
                <span>{selectedPost.author}</span>
                <span className="blog-divider">•</span>
                <span>{calculateReadTime(selectedPost.content)}</span>
              </div>
              <div className="blog-modal-tags">
                {selectedPost.tags.map((tag, idx) => (
                  <span key={idx} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="blog-modal-body markdown-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeHighlight]}
              >
                {selectedPost.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;