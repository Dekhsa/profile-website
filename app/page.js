

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <section id="about"><AboutSection /></section>
        <section id="experience"><ExperienceSection /></section>
        <section id="skills"><SkillsSection /></section>
        <section id="portfolio"><PortfolioSection /></section>
        <section id="contact"><ContactSection /></section>
      </main>
    </div>
  );
}
