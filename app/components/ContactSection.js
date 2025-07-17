"use client";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaUserGraduate,
} from "react-icons/fa";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useTranslation } from "../hooks/useTranslation";

export default function ContactSection() {
  const [titleRef, isTitleVisible] = useIntersectionObserver();
  const [cardsRef, isCardsVisible] = useIntersectionObserver();
  const { t } = useTranslation();

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto py-16 px-4">
      <h2 
        ref={titleRef}
        className={`text-2xl font-bold text-blue-700 mb-8 text-center transition-all duration-600 ${
          isTitleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
        }`}
      >
        {t('contact.title')}
      </h2>
      <div 
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Info Kontak */}
        <div className={`bg-white rounded-xl border border-blue-100 shadow p-8 flex flex-col gap-6 justify-center transition-all duration-600 ${
          isCardsVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
        }`}>
          <div className="flex items-center gap-3 text-blue-700 text-lg">
            <FaEnvelope />
            <a href="mailto:dekhsafnan@gmail.com" className="hover:underline">
              dekhsafnan@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-blue-700 text-lg">
            <FaLinkedin />
            <a
              href="https://www.linkedin.com/in/dekhsaafnan/"
              className="hover:underline"
            >
              linkedin.com/in/dekhsaafnan/
            </a>
          </div>
          <div className="flex items-center gap-3 text-blue-700 text-lg">
            <FaGithub />
            <a href="https://github.com/Dekhsa" className="hover:underline">
              github.com/Dekhsa
            </a>
          </div>
          <div className="flex items-center gap-3 text-blue-700 text-lg">
            <FaUserGraduate />
            <span>{t('contact.education')}</span>
          </div>
        </div>
        {/* Form Kontak */}
        <form className={`bg-white rounded-xl border border-blue-100 shadow p-8 flex flex-col gap-4 transition-all duration-600 ${
          isCardsVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
        }`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder={t('contact.form.name')}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <input
              type="email"
              placeholder={t('contact.form.email')}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <input
            type="text"
            placeholder={t('contact.form.subject')}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <textarea
            placeholder={t('contact.form.message')}
            rows={4}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <button
            type="submit"
            className="bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-blue-800 transition-colors mt-2"
          >
            {t('contact.form.submit')}
          </button>
        </form>
      </div>
    </section>
  );
}
