import React, { useState, useContext } from "react";
import "../index.css";
import logo from "../assets/logo.jpg";
import { LanguageContext } from "../context/LanguageContext";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import '../App.css'
import { MAIN_NAV , SERVICE_NAV } from "../data/navigations";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu
  const [serviceOpen, setServiceOpen] = useState(false); // Service dropdown
  const { text, changeLang, lang } = useContext(LanguageContext);

  return (
    <div className="fixed-top">
      <nav
          className={`shadow-md p-2 ${
            lang === "kh" ? "font-khmer" : "font-outfit"
          }`}
          style={{ backgroundColor: "var(--nav-bg)" }}
        >

        <div className="max-w-7xl mx-auto px-2 sm:px-10 lg:px-10">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="shrink-0 flex items-center">
              <NavLink to="/">
                <img 
                  src={logo}
                  alt="Logo"
                  className="w-14 h-14 rounded-full"
                />
              </NavLink>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center ">
              {MAIN_NAV.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link block px-3 py-2 ${isActive ? "active-link" : ""}`
                    }
                  >
                    {text[item.label]}
                  </NavLink>
                ))}

              {/* Service dropdown */}
              <div className="relative">
                  <button
                    onClick={() => setServiceOpen(!serviceOpen)}
                    className="hover:text-gray-800 flex items-center fw-medium"
                  >
                    {text.service}
                    <span className="ml-1">{serviceOpen ? "▲" : "▼"}</span>
                  </button>

                  {serviceOpen && (
                    <div className="absolute mt-2 w-60 dark:bg-slate-900 p-2 rounded shadow-lg z-50">
                      {SERVICE_NAV.map((item) => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          className={({ isActive }) =>
                            `text-white block px-4 py-2 rounded text-decoration-none ${
                              isActive ? "active-link" : ""
                            }`
                          }
                        >
                          {text[item.label]}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-center ms-3">
                  <DarkModeToggle />
                </div>
              {/* Language Switch */}
              <div className="flex space-x-2 ml-4">
                {lang !== "en" && (
                  <button onClick={() => changeLang("en")}>
                    <img
                      src="https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg?semt=ais_hybrid&w=740&q=80"
                      alt="English"
                      className="w-12 h-12 cursor-pointer rounded-full"
                    />
                  </button>
                )}
                {lang !== "kh" && (
                  <button onClick={() => changeLang("kh")}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/2560px-Flag_of_Cambodia.svg.png"
                      alt="Khmer"
                      className="w-12 h-12 cursor-pointer rounded-full"
                    />
                  </button>
                )}
              </div>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none"
              >
                {isOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-3 pt-2 pb-4 space-y-1">
            {MAIN_NAV.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link block px-4 py-2 ${isActive ? "active-link" : ""}`
                    }
                  >
                    {text[item.label]}
                  </NavLink>
                ))}

            {/* Mobile Service Dropdown */}
            <div>
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="w-full text-left px-3 py-2 rounded flex justify-between items-center"
              >
                {text.service}
                <span>{serviceOpen ? "▲" : "▼"}</span>
              </button>
              {serviceOpen && (
                <div className="pl-4">
                  {SERVICE_NAV.map((item) => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          className={({ isActive }) =>
                            `nav-link block px-4 py-2 rounded text-decoration-none ${
                              isActive ? "active-link" : ""
                            }`
                          }
                        >
                          {text[item.label]}
                        </NavLink>
                      ))}
              
                </div>
              )}
            </div>
            <div className="px-4 py-6">
                <DarkModeToggle />
              </div>

            {/* Mobile Language Switch */}
            <div className="flex space-x-2 mt-2 mx-3">
              {lang !== "en" && (
                <button onClick={() => changeLang("en")}>
                  <img
                    src="https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="English"
                    className="w-10 h-8 cursor-pointer"
                  />
                </button>
              )}
              {lang !== "kh" && (
                <button onClick={() => changeLang("kh")}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/2560px-Flag_of_Cambodia.svg.png"
                    alt="Khmer"
                    className="w-10 h-8 cursor-pointer"
                  />
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
