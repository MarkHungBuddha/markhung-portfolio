import { useEffect, useState, type ReactNode } from 'react';
import { LanguageContext, type Language } from './language';

const getInitialLanguage = (): Language => {
  const savedLanguage = localStorage.getItem('portfolio-language');

  if (savedLanguage === 'en' || savedLanguage === 'zh-TW') {
    return savedLanguage;
  }

  return navigator.language.toLowerCase().startsWith('zh') ? 'zh-TW' : 'en';
};

const metadata = {
  en: {
    title: 'Mark Hung — Backend Engineer | Distributed Systems',
    description: 'Backend engineer in Taipei building high-throughput, event-driven distributed systems with Java, Spring Boot, Kafka, and AWS.',
  },
  'zh-TW': {
    title: '洪偉森 Mark Hung — 後端工程師 | 分散式系統',
    description: '台北後端工程師，專注以 Java、Spring Boot、Kafka 與 AWS 打造高吞吐、事件驅動的分散式系統。',
  },
} as const;

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    const currentMetadata = metadata[language];
    document.documentElement.lang = language;
    document.title = currentMetadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', currentMetadata.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', currentMetadata.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', currentMetadata.description);
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
