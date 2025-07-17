"use client";
import { FaUserGraduate } from "react-icons/fa";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useTranslation } from "../hooks/useTranslation";

export default function AboutSection() {
  const [cardRef, isCardVisible] = useIntersectionObserver();
  const { t } = useTranslation();

  return (
    <section id="about" className="w-full max-w-6xl mx-auto py-16 px-4">
      <div 
        ref={cardRef}
        className={`bg-white rounded-xl border border-blue-100 shadow p-8 flex flex-col md:flex-row items-center gap-8 transition-all duration-600 ${
          isCardVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
        }`}
      >
        <div className="flex-shrink-0 flex flex-col items-center">
          <FaUserGraduate className="text-5xl text-blue-700 mb-4" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-4">{t('about.title')}</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {t('about.description')}
          </p>
        </div>
      </div>
    </section>
  );
}
