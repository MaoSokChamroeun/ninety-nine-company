import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MdOutlineNightlight, MdOutlineLightMode } from "react-icons/md";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      style={{
        width: "42px",
        height: "42px",
        borderRadius: "12px",
        backgroundColor: theme === "light" ? "#ffffff" : "#020617",
        boxShadow:
          theme === "light"
            ? "3px 2px 6px rgba(0,0,0,0.2), -2px -2px 6px rgba(255,255,255,0.9)"
            : "3px 2px 6px rgba(0,0,0,0.8), -2px -2px 6px rgba(255,255,255,0.1)",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
      }}
    >
      {theme === "light" ? (
        <MdOutlineNightlight size={22} />
      ) : (
        <MdOutlineLightMode size={22} />
      )}
    </button>
  );
};

export default DarkModeToggle;
