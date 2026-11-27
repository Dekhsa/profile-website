import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import PortfolioSection from "./components/PortfolioSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import ScrollPopups from "./components/ScrollPopups";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F0EBE6] text-black">
      <CustomCursor />
      <ScrollPopups />
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <PortfolioSection />
        <AboutSection />
        <SkillsSection />
      </main>
      <ContactSection />
    </div>
  );
}
