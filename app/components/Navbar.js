"use client";
import { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const NAV_ITEMS = [
    { label: t('nav.about'), href: "#about" },
    { label: t('nav.experience'), href: "#experience" },
    { label: t('nav.skills'), href: "#skills" },
    { label: t('nav.portfolio'), href: "#portfolio" },
    { label: t('nav.contact'), href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white border-b border-gray-200 shadow-md">
      <div className="w-full mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo & Name - Always on left */}
        <a href="#hero" className="flex items-center gap-2 flex-shrink-0">
          <span className="bg-blue-700 text-white font-bold text-lg rounded-lg px-3 py-1">
            D
          </span>
          <span className="font-bold text-base sm:text-xl text-blue-700 tracking-tight">
            Muhamad Dekhsa Afnan
          </span>
        </a>

        {/* Desktop Menu - Hidden on mobile/tablet */}
        <div className="hidden xl:flex items-center gap-6">
          <ul className="flex gap-6 text-base font-medium">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-blue-700 transition-colors duration-200 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="#"
              className="bg-white border border-blue-700 text-blue-700 font-semibold px-4 py-1.5 rounded-lg shadow hover:bg-blue-50 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Mobile/Tablet Menu Button */}
        <button
          onClick={toggleMenu}
          className="xl:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-blue-700 transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-blue-700 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-blue-700 transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile/Tablet Dropdown Menu */}
      <div
        className={`xl:hidden bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-200 px-3 py-2 rounded text-base font-medium"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <LanguageSwitcher />
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="flex-1 bg-blue-700 text-white text-center font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-800 transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
