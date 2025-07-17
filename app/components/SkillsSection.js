"use client";
import { FaCode, FaDatabase, FaMicrochip, FaUsers, FaChalkboardTeacher } from "react-icons/fa";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useTranslation } from "../hooks/useTranslation";

export default function SkillsSection() {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  const [titleRef, isTitleVisible] = useIntersectionObserver();
  const [skillsRef, isSkillsVisible] = useIntersectionObserver();
  const { t } = useTranslation();

  const skills = [
    { icon: FaCode, title: t('skills.items.0.title'), desc: t('skills.items.0.desc') },
    { icon: FaDatabase, title: t('skills.items.1.title'), desc: t('skills.items.1.desc') },
    { icon: FaMicrochip, title: t('skills.items.2.title'), desc: t('skills.items.2.desc') },
    { icon: FaUsers, title: t('skills.items.3.title'), desc: t('skills.items.3.desc') },
    { icon: FaChalkboardTeacher, title: t('skills.items.4.title'), desc: t('skills.items.4.desc') }
  ];

  return (
    <section id="skills" className="w-full max-w-6xl mx-auto py-16 px-4">
      {/* Statistik */}
      <div 
        ref={statsRef}
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16"
      >
        {t('skills.stats').map((stat, index) => (
          <div 
            key={index}
            className={`bg-white rounded-xl border border-blue-100 shadow p-8 flex flex-col items-center transition-all duration-600 ${
              isStatsVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
            }`}
          >
            <span className="text-4xl font-bold text-blue-700 mb-2">{stat.number}</span>
            <span className="text-gray-700 text-base font-medium">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Skills */}
      <h2 
        ref={titleRef}
        className={`text-2xl font-bold text-blue-700 mb-8 text-center transition-all duration-600 ${
          isTitleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
        }`}
      >
        {t('skills.title')}
      </h2>
      <div 
        ref={skillsRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div 
              key={index}
              className={`bg-white rounded-xl border border-blue-100 shadow p-8 flex flex-col items-center text-center transition-all duration-600 ${
                isSkillsVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
              }`}
            >
              <IconComponent className="text-3xl text-blue-700 mb-3" />
              <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
              <p className="text-gray-600 text-sm">{skill.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
