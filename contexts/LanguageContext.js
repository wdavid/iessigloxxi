// contexts/LanguageContext.js
"use client";
import { createContext, useContext, useState } from "react";
import en from "../locales/en";
import es from "../locales/es";
import fr from "../locales/fr";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es"); // Idioma predeterminado
  const translations = { en, es, fr };
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
