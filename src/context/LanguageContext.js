// LanguageContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');
  const [showLanguageButton, setShowLanguageButton] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setShowLanguageButton(location.pathname !== '/login');
  }, [location]);

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, showLanguageButton, setShowLanguageButton }}>
      {children}
    </LanguageContext.Provider>
  );
};
