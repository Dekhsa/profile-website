"use client";
import { FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all duration-200 text-blue-700 hover:bg-blue-50"
      title={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
    >
      <FaGlobe className="text-sm" />
      <span className="text-sm font-medium">
        {language === 'id' ? 'EN' : 'ID'}
      </span>
    </button>
  );
}
