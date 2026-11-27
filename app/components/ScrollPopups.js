"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  FaArrowUp,
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaHandSpock,
  FaPaperPlane,
  FaTrophy,
} from "react-icons/fa";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const SECTION_META = [
  { id: "hero", label: "hey!", icon: FaHandSpock, bg: "#E6FAB9", text: "#000000" },
  { id: "experience", label: "career", icon: FaBriefcase, bg: "#F5693C", text: "#000000" },
  { id: "portfolio", label: "awards", icon: FaTrophy, bg: "#E6FAB9", text: "#000000" },
  { id: "about", label: "story", icon: FaGraduationCap, bg: "#F0BEFA", text: "#000000" },
  { id: "skills", label: "stack", icon: FaCode, bg: "#82A0FF", text: "#000000" },
  { id: "contact", label: "talk!", icon: FaPaperPlane, bg: "#F0EBE6", text: "#000000" },
];

/**
 * Scroll-reactive icon wrapper: pops up with overshoot & wiggles when scrolled into view,
 * and jiggles playfully while actively scrolling.
 */
export function ScrollPopIcon({
  children,
  className = "",
  rotate = "-6deg",
  delay = "0ms",
}) {
  const [ref, isVisible] = useIntersectionObserver();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    let timer;
    const onScroll = () => {
      setScrolling(true);
      clearTimeout(timer);
      timer = setTimeout(() => setScrolling(false), 320);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${isVisible ? "animate-pop-wiggle" : "opacity-0 scale-50"} ${className}`}
      style={{ "--r": rotate, animationDelay: delay }}
    >
      <div className={scrolling ? "animate-scroll-jiggle" : ""}>{children}</div>
    </div>
  );
}

/**
 * Floating scroll companion badge that pops & wiggles per section as you scroll.
 */
export default function ScrollPopups() {
  const [active, setActive] = useState(SECTION_META[0]);
  const [progress, setProgress] = useState(0);
  const [jiggleKey, setJiggleKey] = useState(0);
  const [showFloating, setShowFloating] = useState(false);
  const lastSectionRef = useRef("hero");
  const scrollTimerRef = useRef(null);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.round((scrollTop / docHeight) * 100)) : 0;
      setProgress(pct);
      setShowFloating(scrollTop > 140);
      setIsMoving(true);
      clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = setTimeout(() => setIsMoving(false), 260);

      const probe = window.innerHeight * 0.42;
      for (const meta of SECTION_META) {
        const el = document.getElementById(meta.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= probe && rect.bottom >= probe) {
          if (lastSectionRef.current !== meta.id) {
            lastSectionRef.current = meta.id;
            setActive(meta);
            setJiggleKey((k) => k + 1);
          }
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimerRef.current);
    };
  }, []);

  if (!showFloating) return null;

  const ActiveIcon = active.icon;

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-7 sm:right-7 z-40 flex items-center gap-2.5">
      {/* Pop-up section buddy */}
      <div
        key={jiggleKey}
        className={`animate-pop-wiggle flex items-center gap-2.5 rounded-full border-[3px] border-black px-3.5 py-2 shadow-[5px_5px_0_#000] transition-transform ${
          isMoving ? "animate-scroll-jiggle" : ""
        }`}
        style={{ backgroundColor: active.bg, color: active.text, "--r": "-2deg" }}
      >
        <div className="w-7 h-7 rounded-full bg-white border-2 border-black overflow-hidden shrink-0 flex items-center justify-center">
          <Image
            src="/logo-dekhsa.png"
            alt="dekhsa"
            width={28}
            height={28}
            className="object-contain"
          />
        </div>
        <ActiveIcon className="text-sm shrink-0" />
        <span className="font-display font-extrabold text-xs uppercase tracking-wide">
          {active.label} · {progress}%
        </span>
      </div>

      {/* Back to top spring button */}
      <a
        href="#hero"
        aria-label="Back to top"
        data-cursor="top!"
        className="w-11 h-11 rounded-full bg-black text-[#F0EBE6] border-[3px] border-[#F0EBE6] shadow-[4px_4px_0_#F5693C] flex items-center justify-center hover:bg-[#E6FAB9] hover:text-black hover:border-black hover:-translate-y-1 transition-all"
      >
        <FaArrowUp className="text-sm" />
      </a>
    </div>
  );
}
