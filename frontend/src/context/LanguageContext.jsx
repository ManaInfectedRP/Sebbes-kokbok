import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext({ lang: 'en', setLang: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

/** Resolve a bilingual field: { en, sv } or plain string */
export const loc = (field, lang) => {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[lang] ?? field.en ?? '';
};
