import React, { useContext } from 'react'
import { ThemeContext, ThemeProvider } from '../context/ThemeContext'
import { MdOutlineNightlight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
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
      {theme === "light" ? <MdOutlineNightlight fontSize={25} /> : <MdOutlineLightMode fontSize={25} />}
    </button>
  )
}

export default DarkModeToggle