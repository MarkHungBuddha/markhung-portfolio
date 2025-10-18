import './Contact.css';

const Contact = () => {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'p1i979thv@mozmail.com',
      link: 'mailto:p1i979thv@mozmail.com',
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/wei-sen-hung-29a280205',
      link: 'https://www.linkedin.com/in/wei-sen-hung-29a280205',
    },
    {
      icon: '🐱',
      title: 'GitHub',
      value: 'github.com/MarkHungBuddha',
      link: 'https://github.com/MarkHungBuddha',
    },
    {
      icon: '🐦',
      title: 'Twitter',
      value: '@markhung',
      link: 'https://twitter.com',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">聯絡我</h2>
        <p className="section-subtitle">
          有任何問題或合作機會？歡迎隨時與我聯繫！
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>讓我們一起合作</h3>
            <p>
              我目前正在尋找新的機會，無論是全職工作、自由接案或是開源專案合作，
              都歡迎與我聯繫。我會盡快回覆您的訊息。
            </p>
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="contact-method"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-icon">{method.icon}</span>
                  <div className="contact-details">
                    <div className="contact-method-title">{method.title}</div>
                    <div className="contact-method-value">{method.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">姓名</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="您的姓名"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">主旨</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="您想討論的主題"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">訊息</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="寫下您的訊息..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                發送訊息
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
