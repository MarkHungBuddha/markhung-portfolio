
import './App.css'

function App() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>我的個人網站</h1>
      <nav>
        <a href="#about">關於我</a> | 
        <a href="#blog">部落格</a> | 
        <a href="#contact">聯絡方式</a>
      </nav>
      
      <section id="about" style={{ marginTop: '2rem' }}>
        <h2>關於我</h2>
        <p>這是我的個人形象網站與技術部落格...</p>
      </section>

      <section id="blog" style={{ marginTop: '2rem' }}>
        <h2>最新文章</h2>
        <ul>
          <li>如何使用 AWS + Cloudflare 建立網站</li>
          <li>React + TypeScript 最佳實踐</li>
        </ul>
      </section>

      <section id="contact" style={{ marginTop: '2rem' }}>
        <h2>聯絡方式</h2>
        <p>Email: your@email.com</p>
      </section>
    </div>
  )
}

export default App
