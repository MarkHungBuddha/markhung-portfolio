import './Contact.css';
import { useLanguage } from '../i18n/language';

const Contact = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: '1909kram@gmail.com',
      link: 'mailto:1909kram@gmail.com',
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/markhung384',
      link: 'https://linkedin.com/in/markhung384',
    },
    {
      icon: '🐱',
      title: 'GitHub',
      value: 'github.com/MarkHungBuddha',
      link: 'https://github.com/MarkHungBuddha',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">{isEnglish ? "Let's Build Reliable Systems" : '一起打造可靠的系統'}</h2>
        <p className="section-subtitle">{isEnglish ? 'Based in Taipei · Open to backend and SRE roles' : '現居台北 · 尋找後端與 SRE 職涯機會'}</p>

        <div className="contact-content contact-content-single">
          <div className="contact-info">
            <h3>{isEnglish ? 'Get in touch' : '與我聯絡'}</h3>
            <p>
              {isEnglish
                ? 'I am interested in backend and SRE opportunities where distributed systems, production reliability, and end-to-end ownership matter.'
                : '我正在尋找重視分散式系統、正式環境可靠性與端到端責任的後端或 SRE 機會。'}
            </p>
            <div className="contact-methods">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.link}
                  className="contact-method"
                  target={method.title === 'Email' ? undefined : '_blank'}
                  rel={method.title === 'Email' ? undefined : 'noopener noreferrer'}
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
