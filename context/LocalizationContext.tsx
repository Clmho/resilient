
import React, { createContext, useState, useMemo, ReactNode } from 'react';
import { Language, LocaleContent } from '../types';
import { content } from '../content';

interface LocalizationContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: LocaleContent;
}

export const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

interface LocalizationProviderProps {
  children: ReactNode;
}

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = useMemo(() => {
    return content[language];
  }, [language]);

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};
