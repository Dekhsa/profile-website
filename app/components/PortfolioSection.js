"use client";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useTranslation } from "../hooks/useTranslation";

export default function PortfolioSection() {
  const [titleRef, isTitleVisible] = useIntersectionObserver();
  const [projectsRef, isProjectsVisible] = useIntersectionObserver();
  const { t } = useTranslation();

  const projects = [
    {
      emoji: "🌐",
      title: t('portfolio.projects.0.title'),
      description: t('portfolio.projects.0.description'),
      tech: t('portfolio.projects.0.tech'),
      role: t('portfolio.projects.0.role')
    },
    {
      emoji: "📊",
      title: t('portfolio.projects.1.title'),
      description: t('portfolio.projects.1.description'),
      tech: t('portfolio.projects.1.tech'),
      role: t('portfolio.projects.1.role')
    },
    {
      emoji: "🔌",
      title: t('portfolio.projects.2.title'),
      description: t('portfolio.projects.2.description'),
      tech: t('portfolio.projects.2.tech'),
      role: t('portfolio.projects.2.role')
    }
  ];

  return (
    <section id="portfolio" className="w-full max-w-6xl mx-auto py-16 px-4">
      <h2 
        ref={titleRef}
        className={`text-2xl font-bold text-blue-700 mb-8 text-center transition-all duration-600 ${
          isTitleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
        }`}
      >
        {t('portfolio.title')}
      </h2>
      <div 
        ref={projectsRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`bg-white rounded-xl border border-blue-100 shadow group flex flex-col overflow-hidden hover:shadow-xl transition-all duration-600 ${
              isProjectsVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
            }`}
          >
            <div className="h-40 bg-blue-50 flex items-center justify-center">
              <span className="text-5xl text-blue-700">{project.emoji}</span>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-bold text-lg mb-1 group-hover:text-blue-700 transition-colors">{project.title}</h3>
              <p className="text-gray-700 mb-2 text-sm">{project.description}</p>
              <div className="text-xs mb-1"><span className="font-semibold">{t('portfolio.techLabel')}</span> {project.tech}</div>
              <div className="text-xs mb-3"><span className="font-semibold">{t('portfolio.roleLabel')}</span> {project.role}</div>
              <div className="flex gap-3 mt-auto">
                <a href="#" className="text-blue-700 font-semibold hover:underline hover:text-blue-800 transition-colors">{t('portfolio.demoBtn')}</a>
                <a href="#" className="text-blue-700 font-semibold hover:underline hover:text-blue-800 transition-colors">{t('portfolio.codeBtn')}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
