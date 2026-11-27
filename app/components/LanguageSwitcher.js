"use client";
import { FaGlobe } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageSwitcher({ dark = false }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      data-cursor={language === "id" ? "english" : "indo"}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-display font-bold text-xs uppercase tracking-wide border-2 transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
        dark
          ? "bg-[#F0EBE6] text-black border-[#F0EBE6] hover:bg-[#E6FAB9] hover:border-[#E6FAB9]"
          : "bg-black text-[#F0EBE6] border-black hover:bg-[#4B69F0] hover:border-[#4B69F0]"
      }`}
      title={language === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
    >
      <FaGlobe className="text-xs" />
      <span>{language === "id" ? "EN" : "ID"}</span>
    </button>
  );
}
