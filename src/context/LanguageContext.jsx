// // LanguageContext.js
// import React, { createContext, useState, useEffect } from "react";

// import en from "../languages/en.json";
// import kh from "../languages/kh.json";

// // eslint-disable-next-line react-refresh/only-export-components
// export const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   // Default language is now KH
//   const [lang, setLang] = useState(() => localStorage.getItem("lang") || "kh");

//   const changeLang = (newLang) => {
//     setLang(newLang);
//     localStorage.setItem("lang", newLang);
//   };

//   useEffect(() => {
//     document.body.className = lang === "kh" ? "font-khmer" : "font-outfit";
//   }, [lang]);




//   const translations = { en, kh };

//   return (
//     <LanguageContext.Provider
//       value={{ lang, changeLang, text: translations[lang] }}
//     >
//       {children}
//     </LanguageContext.Provider>
//   );
// };
// LanguageContext.js
import React, { createContext, useState, useEffect } from "react";

import en from "../languages/en.json";
import kh from "../languages/kh.json";

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const isLocalhost = window.location.hostname === "localhost";

  // Always start with KH on localhost
  const [lang, setLang] = useState(() => {
    if (isLocalhost) return "kh";
    return localStorage.getItem("lang") || "kh";
  });

  // Force KH on localhost startup
  useEffect(() => {
    if (isLocalhost) {
      localStorage.setItem("lang", "kh");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLang("kh");
    }
  }, [isLocalhost]);

  const changeLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  // Change font based on language
  useEffect(() => {
    document.body.className =
      lang === "kh" ? "font-khmer" : "font-outfit";
  }, [lang]);

  const translations = { en, kh };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        changeLang,
        text: translations[lang],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
