import React, { createContext, useEffect, useState } from "react";
import '../index.css'
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
  localStorage.getItem("theme") || "light"
);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
  setTheme(prev => (prev === "light" ? "dark" : "light"));
};

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
