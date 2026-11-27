"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaProjectDiagram,
  FaTimes,
  FaTrophy,
} from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";
import LanguageSwitcher from "./LanguageSwitcher";
import { DekhsaWordmark, SpeechTag, StarburstSVG } from "./TruusGraphics";

export default function Navbar() {
  const [workOpen, setWorkOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isOverDark, setIsOverDark] = useState(true);
  const { t } = useTranslation();
  const popoverRef = useRef(null);

  const roles = t("experience.roles");
  const awards = t("portfolio.awards");

  useEffect(() => {
    const checkTheme = () => {
      const sections = document.querySelectorAll("[data-theme-section]");
      const probeY = window.innerWidth >= 640 ? 100 : 84;
      let current = "dark";
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom >= probeY) {
          current = sec.getAttribute("data-theme-section") || "dark";
        }
      });
      setIsOverDark(current === "dark");
    };

    checkTheme();
    window.addEventListener("scroll", checkTheme, { passive: true });
    window.addEventListener("resize", checkTheme, { passive: true });
    window.addEventListener("hashchange", checkTheme);
    return () => {
      window.removeEventListener("scroll", checkTheme);
      window.removeEventListener("resize", checkTheme);
      window.removeEventListener("hashchange", checkTheme);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setWorkOpen(false);
      }
    };
    if (workOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [workOpen]);

  const navItems = [
    { label: t("nav.experience"), href: "#experience" },
    { label: t("nav.portfolio"), href: "#portfolio" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const featuredHighlights = [
    {
      title: Array.isArray(roles) && roles[0] ? `${roles[0].role} — ${roles[0].company}` : "IndonesiaIT",
      tag: Array.isArray(roles) && roles[0] ? roles[0].badge : "Current",
      bg: "#E6FAB9",
      icon: FaCode,
      href: "#experience",
    },
    {
      title: Array.isArray(roles) && roles[1] ? `${roles[1].role} — ${roles[1].company}` : "Zhou Consultant",
      tag: Array.isArray(roles) && roles[1] ? roles[1].badge : "PM",
      bg: "#F5693C",
      icon: FaProjectDiagram,
      href: "#experience",
    },
    {
      title: Array.isArray(awards) && awards[0] ? awards[0].title : "KitaJaga PWA",
      tag: Array.isArray(awards) && awards[0] ? awards[0].award : "Award",
      bg: "#82A0FF",
      icon: FaTrophy,
      href: "#portfolio",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        isOverDark
          ? "bg-black text-[#F0EBE6] border-b border-white/10"
          : "bg-[#F0EBE6] text-black border-b border-black/10"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 h-20 sm:h-24 relative">
        {/* Left: Truus-style starburst "karya" popover trigger */}
        <div className="relative" ref={popoverRef}>
          <button
            onClick={() => setWorkOpen((prev) => !prev)}
            data-cursor="click!"
            className="relative inline-flex items-center justify-center w-20 h-14 group focus:outline-none"
            aria-expanded={workOpen}
            aria-label="Toggle featured works"
          >
            <StarburstSVG
              color="#F5693C"
              className={`w-16 h-16 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 ${
                workOpen ? "rotate-45 scale-110" : ""
              }`}
            />
            <span className="absolute font-display font-extrabold text-sm lowercase text-black tracking-tight">
              {t("nav.work")}
            </span>
          </button>

          {/* Solid Cream Popover */}
          {workOpen && (
            <div className="absolute left-0 top-16 w-[320px] sm:w-[400px] bg-[#F0EBE6] text-black rounded-[28px] border-2 border-black shadow-[8px_8px_0_#000] p-4 z-50">
              <div className="flex items-center justify-between px-1 pb-3">
                <span className="inline-flex items-center gap-2 font-display font-extrabold text-sm lowercase tracking-tight text-black/70">
                  <FaBriefcase className="text-xs text-[#4B69F0]" />
                  {t("nav.work")} — dekhsa
                </span>
                <button
                  onClick={() => setWorkOpen(false)}
                  className="w-7 h-7 rounded-full bg-black text-[#F0EBE6] flex items-center justify-center hover:bg-[#F5693C] hover:text-black transition-colors"
                  aria-label="Close"
                >
                  <FaTimes className="text-xs" />
                </button>
              </div>
              <div className="space-y-2.5">
                {featuredHighlights.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={() => setWorkOpen(false)}
                      className="flex items-center gap-3 p-2.5 rounded-2xl bg-white border-2 border-black/10 hover:border-black hover:-translate-y-0.5 transition-all group"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 border-2 border-black text-black"
                        style={{ backgroundColor: item.bg }}
                      >
                        <IconComp />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1">
                          <span
                            className="inline-block px-2 py-0.5 rounded-full text-[10px] font-display font-bold lowercase text-black"
                            style={{ backgroundColor: item.bg }}
                          >
                            {item.tag}
                          </span>
                        </div>
                        <p className="font-display font-bold text-sm lowercase leading-snug group-hover:text-[#4B69F0]">
                          {item.title}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
              <a
                href="#experience"
                onClick={() => setWorkOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 w-full bg-black text-[#F0EBE6] font-display font-bold text-sm lowercase py-3 rounded-2xl hover:bg-[#4B69F0] transition-colors"
              >
                <span>{t("nav.allWork")}</span>
                <FaArrowRight className="text-xs" />
              </a>
            </div>
          )}
        </div>

        {/* Center: Uploaded Avatar Logo + Bold Wordmark */}
        <a
          href="#hero"
          data-cursor="home"
          className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 group"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#E6FAB9] border-2 border-black overflow-hidden shrink-0 shadow-[2px_2px_0_#F5693C] transition-transform duration-200 group-hover:-rotate-6 group-hover:scale-110 flex items-center justify-center">
            <Image
              src="/logo-dekhsa.png"
              alt="Dekhsa Logo"
              width={44}
              height={44}
              className="object-contain"
              priority
            />
          </div>
          <DekhsaWordmark
            className="w-24 sm:w-32 h-auto transition-transform duration-200 group-hover:scale-105"
            color="currentColor"
          />
        </a>

        {/* Right: Desktop quick nav + Language switcher + Contact icon */}
        <div className="hidden lg:flex items-center gap-4">
          <nav className="flex items-center gap-3 font-display font-bold text-sm lowercase">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-2 py-1 rounded-full transition-colors ${
                  isOverDark ? "hover:text-[#E6FAB9]" : "hover:text-[#4B69F0]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <LanguageSwitcher dark={isOverDark} />
          <a
            href="#contact"
            data-cursor="say hi!"
            aria-label={t("nav.contact")}
            className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-transform hover:scale-110 ${
              isOverDark
                ? "bg-[#E6FAB9] text-black border-[#E6FAB9]"
                : "bg-[#4B69F0] text-[#F0EBE6] border-black"
            }`}
          >
            <FaEnvelope className="text-sm" />
          </a>
        </div>

        {/* Mobile Right Controls */}
        <div className="flex lg:hidden items-center gap-2.5">
          <LanguageSwitcher dark={isOverDark} />
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className={`w-10 h-10 rounded-full border-2 flex flex-col items-center justify-center gap-1 ${
              isOverDark
                ? "border-[#F0EBE6] text-[#F0EBE6]"
                : "border-black text-black"
            }`}
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-4 h-0.5 bg-current transition-transform ${
                mobileOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-4 h-0.5 bg-current transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-4 h-0.5 bg-current transition-transform ${
                mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#F0EBE6] text-black border-t-2 border-black px-6 py-5 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block font-display font-extrabold text-xl lowercase py-1.5 hover:text-[#4B69F0]"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#experience"
              onClick={() => setMobileOpen(false)}
              className="inline-block"
            >
              <SpeechTag bg="#F5693C" text="#000000">
                {t("nav.allWork")} <FaArrowRight className="text-xs" />
              </SpeechTag>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
