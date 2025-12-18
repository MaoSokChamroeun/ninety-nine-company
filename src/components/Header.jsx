import React, { useState, useContext } from "react";
import "../index.css";
import logo from "../assets/logo.jpg";
import { LanguageContext } from "../context/LanguageContext";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import '../App.css'
import { MAIN_NAV , SERVICE_NAV } from "../data/navigations";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu
  const [serviceOpen, setServiceOpen] = useState(false); // Service dropdown
  const { text, changeLang, lang } = useContext(LanguageContext);

  return (
    <div className="fixed-top">
      <nav
          className={`shadow-md p-2 tracking-wide ${
            lang === "kh" ? "font-khmer" : "font-josefin"
          }`}
          style={{ backgroundColor: "var(--nav-bg)" , fontSize  : "13.5px" , fontWeight : "600"}}
        >
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-2 sm:px-10 lg:px-10">
            <div className="grid grid-cols-[120px_1fr_120px] items-center justify-between h-16">
              <div className="flex items-center">
                <NavLink to="/">
              <img
                src={logo}
                alt="Logo"
                className="w-14 h-14 rounded-full"
              />
            </NavLink>
          </div>
          <div className="hidden md:flex justify-center items-center space-x-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link px-3 py-2 uppercase ${
                  isActive ? "active-link" : ""
                }`
              }
            >
              {text.home}
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link px-3 py-2 uppercase ${
                  isActive ? "active-link" : ""
                }`
              }
            >
              {text.about}
            </NavLink>
            <div className="relative">
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="nav-link px-3 py-2 flex items-center uppercase"
              >
               <span className="uppercase">{text.service}</span>
                <span className="ml-1 text-xs">
                  {serviceOpen ? "▲" : "▼"}
                </span>
              </button>

              {serviceOpen && (
                <div className="absolute left-0 mt-2 w-60 bg-white dark:bg-slate-900 rounded-xl shadow-lg z-50">
                  {SERVICE_NAV.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className="text-black text-decoration-none block px-4 py-2 uppercase hover:bg-gray-100 dark:hover:bg-slate-800"
                      onClick={() => setServiceOpen(false)}
                    >
                      {text[item.label]}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/our-client"
              className={({ isActive }) =>
                `nav-link px-3 py-2 uppercase ${
                  isActive ? "active-link" : ""
                }`
              }
            >
              {text.ourclient}
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link px-3 py-2 uppercase ${
                  isActive ? "active-link" : ""
                }`
              }
            >
              {text.contact}
            </NavLink>

          </div>

         {/* RIGHT: Dark Mode + Language (Desktop) */}
          <div className="hidden md:flex justify-end items-center gap-3">
            <DarkModeToggle />

            {lang !== "en" && (
              <button onClick={() => changeLang("en")}>
                <img
                  src="https://img.freepik.com/free-vector/illustration-uk-flag_53876-18166.jpg"
                  className="w-9 h-9 rounded-full shadow"
                  alt="EN"
                />
              </button>
            )}

            {lang !== "kh" && (
              <button onClick={() => changeLang("kh")}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg"
                  className="w-9 h-9 rounded-full shadow"
                  alt="KH"
                />
              </button>
            )}
          </div>

          {/* MOBILE BURGER (SAME COLUMN) */}
          <div className="md:hidden flex justify-end w-full col-start-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
            >
             <RxHamburgerMenu size={20} />
            </button>
          </div>


          </div>
        </div>
      </div>
        {isOpen && (
          <div className="md:hidden px-3 pt-2 pb-4 space-y-1">
            <NavLink to="/" className={({ isActive }) =>
                `nav-link px-3 uppercase py-2 ${isActive ? "active-link" : ""}`
              }>
                {text.home}
              </NavLink>

              {/* About */}
              <NavLink to="/about" className={({ isActive }) =>
                `nav-link px-3 uppercase py-2 ${isActive ? "active-link" : ""}`
              }>
                {text.about}
              </NavLink>

              {/* Service Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setServiceOpen(!serviceOpen)}
                  className="nav-link px-3 py-2 flex items-center"
                >
                  <span className="uppercase"></span>
                  <span className="ml-1 text-xs">{serviceOpen ? "▲" : "▼"}</span>
                </button>

                {serviceOpen && (
                  <div className="absolute left-0 mt-2 w-60 bg-white dark:bg-slate-900 rounded-xl shadow-lg z-50">
                    {SERVICE_NAV.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className="text-black block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 text-decoration-none"
                        onClick={() => setServiceOpen(false)}
                      >
                        {text[item.label]}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Our Client */}
              <NavLink to="/our-client" className={({ isActive }) =>
                `nav-link px-3 uppercase py-2 ${isActive ? "active-link" : ""}`
              }>
                {text.ourclient}
              </NavLink>

              {/* Contact */}
              <NavLink to="/contact" className={({ isActive }) =>
                `nav-link px-3 uppercase py-2 ${isActive ? "active-link" : ""}`
              }>
                {text.contact}
              </NavLink>

            {/* Mobile Service Dropdown */}
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
