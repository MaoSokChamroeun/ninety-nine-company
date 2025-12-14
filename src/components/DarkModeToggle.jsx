import React, { useContext } from 'react'
import { ThemeContext, ThemeProvider } from '../context/ThemeContext'
import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';
import '../index.css'
const DarkModeToggle = () => {
    const {theme , toggleTheme} = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        fontSize: "20px",
      }}
      aria-label="Toggle Dark Mode"
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  )
}

export default DarkModeToggle