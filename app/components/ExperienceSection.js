"use client";
import { FaUsersCog, FaChalkboardTeacher } from "react-icons/fa";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useTranslation } from "../hooks/useTranslation";

export default function ExperienceSection() {
  const [titleRef, isTitleVisible] = useIntersectionObserver();
  const [card1Ref, isCard1Visible] = useIntersectionObserver();
  const [card2Ref, isCard2Visible] = useIntersectionObserver();
  const { t } = useTranslation();

  return (
    <section id="experience" className="w-full max-w-6xl mx-auto py-16 px-4">
      <h2 
        ref={titleRef}
        className={`text-2xl font-bold text-blue-700 mb-8 text-center transition-all duration-600 ${
          isTitleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
        }`}
      >
        {t('experience.title')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* HRD */}
        <div 
          ref={card1Ref}
          className={`bg-white rounded-xl border border-blue-100 shadow p-8 flex flex-col gap-3 transition-all duration-600 ${
            isCard1Visible ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`}
        >
          <div className="flex items-center gap-3 mb-2">
            <FaUsersCog className="text-2xl text-blue-700" />
            <h3 className="font-semibold text-lg">
              {t('experience.hrd.title')}
            </h3>
          </div>
          <ul className="list-disc ml-6 text-gray-700 text-sm">
            {t('experience.hrd.points').map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        {/* Instruktur Data Science */}
        <div 
          ref={card2Ref}
          className={`bg-white rounded-xl border border-blue-100 shadow p-8 flex flex-col gap-3 transition-all duration-600 ${
            isCard2Visible ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`}
        >
          <div className="flex items-center gap-3 mb-2">
            <FaChalkboardTeacher className="text-2xl text-blue-700" />
            <h3 className="font-semibold text-lg">
              {t('experience.instructor.title')}
            </h3>
          </div>
          <ul className="list-disc ml-6 text-gray-700 text-sm">
            {t('experience.instructor.points').map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
