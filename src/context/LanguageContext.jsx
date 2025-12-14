// LanguageContext.js
import React, { createContext, useState, useEffect } from "react";

import en from '../languages/en.json'
import kh from '../languages/kh.json'
// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Load initial language from localStorage or default to 'en'
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang); // persist choice
  };

  // Optional: update body class for font
  useEffect(() => {
    document.body.className = lang === "kh" ? "font-khmer" : "font-outfit";

  }, [lang]);

  // Provide translations
  const translations = { en , kh};

  return (
    <LanguageContext.Provider value={{ lang, changeLang, text: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};
