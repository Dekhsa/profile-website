"use client";
import { useRef, useState } from "react";
import {
  FaArrowsAltH,
  FaAward,
  FaChartLine,
  FaGithub,
  FaMedal,
  FaPaperPlane,
  FaTrophy,
} from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";
import { ScrollPopIcon } from "./ScrollPopups";
import {
  DieCutSticker,
  HandDrawnUnderlineSVG,
  SpeechTag,
  StarburstSVG,
} from "./TruusGraphics";

const ICON_MAP = {
  trophy: FaTrophy,
  medal: FaMedal,
  award: FaAward,
  chart: FaChartLine,
};

export default function PortfolioSection() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartX = useRef(0);
  const pointerActive = useRef(false);

  const awards = t("portfolio.awards");
  const list = Array.isArray(awards) ? awards : [];
  const total = list.length;

  const goNext = () => setActiveIndex((i) => (i + 1) % total);
  const goPrev = () => setActiveIndex((i) => (i - 1 + total) % total);

  const handlePointerDown = (e) => {
    // Allow normal link clicks inside the card without hijacking
    if (e.target.closest("a")) return;
    pointerActive.current = true;
    dragStartX.current = e.clientX;
    setIsDragging(true);
    setDragOffset(0);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!pointerActive.current) return;
    const dx = e.clientX - dragStartX.current;
    setDragOffset(dx);
  };

  const finishDrag = () => {
    if (!pointerActive.current) return;
    pointerActive.current = false;
    setIsDragging(false);

    if (dragOffset < -55) {
      goNext();
    } else if (dragOffset > 55) {
      goPrev();
    }
    setDragOffset(0);
  };

  return (
    <section
      id="portfolio"
      data-theme-section="dark"
      className="relative bg-black text-[#F0EBE6] py-24 sm:py-32 px-4 sm:px-8 overflow-hidden"
    >
      {/* Giant Pastel Lime Starburst Backdrop */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20">
        <StarburstSVG
          color="#E6FAB9"
          className="w-[560px] sm:w-[760px] h-auto animate-slow-spin"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading only — subheader removed per request */}
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl lowercase leading-[0.95]">
            {t("portfolio.titleBefore")}{" "}
            <span className="relative inline-block font-editorial font-normal text-5xl sm:text-7xl text-[#E6FAB9]">
              {t("portfolio.titleItalic")}
              <HandDrawnUnderlineSVG
                color="#F5693C"
                className="w-full h-3 mt-0.5"
              />
            </span>{" "}
            {t("portfolio.titleAfter")}
          </h2>
        </div>

        {/* Swipeable Stacked Award Deck */}
        <div className="relative select-none touch-pan-y">
          {/* Swipe hint pill */}
          <div className="flex items-center justify-center gap-2 mb-6 text-xs font-display font-bold uppercase tracking-widest text-[#E6FAB9]">
            <FaArrowsAltH className="text-sm animate-pulse" />
            <span>swipe card left / right ({activeIndex + 1} / {total})</span>
          </div>

          <div
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={finishDrag}
            onPointerCancel={finishDrag}
            data-cursor="swipe!"
            className="relative min-h-[520px] sm:min-h-[400px] flex items-center justify-center cursor-grab active:cursor-grabbing"
          >
            {list.map((item, idx) => {
              const offsetPos = (idx - activeIndex + total) % total;
              const CardIcon = ICON_MAP[item.iconName] || FaTrophy;

              // Only render front card + up to 2 stacked background cards cleanly
              const isFront = offsetPos === 0;
              const isNext1 = offsetPos === 1;
              const isNext2 = offsetPos === 2;
              const isPrev = offsetPos === total - 1;

              let transform = "translate3d(0, 32px, 0) scale(0.88)";
              let opacity = 0;
              let zIndex = 0;
              let pointerEvents = "none";

              if (isFront) {
                const rot = dragOffset * 0.045;
                transform = `translate3d(${dragOffset}px, 0px, 0) rotate(${rot}deg) scale(1)`;
                opacity = 1;
                zIndex = 30;
                pointerEvents = "auto";
              } else if (isNext1) {
                transform = "translate3d(18px, 14px, 0) rotate(3deg) scale(0.96)";
                opacity = 0.85;
                zIndex = 20;
              } else if (isNext2) {
                transform = "translate3d(-16px, 26px, 0) rotate(-3deg) scale(0.92)";
                opacity = 0.6;
                zIndex = 10;
              } else if (isPrev && dragOffset > 15) {
                transform = `translate3d(${dragOffset - 30}px, 8px, 0) rotate(-4deg) scale(0.95)`;
                opacity = 0.7;
                zIndex = 25;
              }

              return (
                <article
                  key={idx}
                  style={{
                    transform,
                    opacity,
                    zIndex,
                    pointerEvents,
                    transition: isDragging && isFront
                      ? "none"
                      : "transform 0.38s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease",
                  }}
                  className={`absolute inset-x-0 mx-auto max-w-4xl rounded-[34px] border-2 p-6 sm:p-10 ${
                    isFront
                      ? "bg-[#141414] border-[#E6FAB9] shadow-[10px_10px_0_#E6FAB9]"
                      : "bg-[#1a1a1a] border-white/30 shadow-none"
                  }`}
                >
                  {isFront && (
                    <ScrollPopIcon
                      key={activeIndex}
                      rotate="-6deg"
                      className="absolute -top-6 right-6"
                    >
                      <DieCutSticker
                        bg={item.tagBg}
                        text="#000000"
                        border="#FFFFFF"
                        rotate="-6deg"
                        className="text-xs sm:text-sm px-4 py-1.5"
                      >
                        <CardIcon />
                        <span>{item.award}</span>
                      </DieCutSticker>
                    </ScrollPopIcon>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-3 flex items-center justify-center">
                      <div
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-[26px] border-4 border-black flex items-center justify-center text-4xl sm:text-5xl text-black shadow-[6px_6px_0_#FFFFFF]"
                        style={{ backgroundColor: item.tagBg }}
                      >
                        <CardIcon />
                      </div>
                    </div>

                    <div className="lg:col-span-9 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <SpeechTag bg={item.tagBg} text={item.tagText}>
                          {item.tag}
                        </SpeechTag>
                        <span className="text-xs font-display font-bold uppercase tracking-wider text-[#82A0FF]">
                          {t("portfolio.roleLabel")}: {item.role}
                        </span>
                      </div>

                      <h3 className="font-display font-extrabold text-2xl sm:text-4xl lowercase text-[#F0EBE6]">
                        {item.title}
                      </h3>

                      <p className="text-sm sm:text-base text-[#F0EBE6]/80 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="text-xs sm:text-sm text-[#F0BEFA] font-medium">
                        <span className="font-display font-bold uppercase tracking-wider mr-2">
                          {t("portfolio.techLabel")}:
                        </span>
                        {item.tech}
                      </div>

                      <div className="flex flex-wrap items-center gap-6 pt-2">
                        <a
                          href="https://github.com/Dekhsa"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="draw-btn font-display font-bold text-sm lowercase text-[#E6FAB9]"
                        >
                          <span className="inline-flex items-center gap-2">
                            <FaGithub />
                            {t("portfolio.githubBtn")}
                          </span>
                          <HandDrawnUnderlineSVG color="#E6FAB9" className="w-full h-2.5" />
                        </a>
                        <a
                          href="#contact"
                          className="draw-btn font-display font-bold text-sm lowercase text-[#F0EBE6] hover:text-[#82A0FF]"
                        >
                          <span className="inline-flex items-center gap-2">
                            <FaPaperPlane className="text-xs" />
                            {t("portfolio.contactBtn")}
                          </span>
                          <HandDrawnUnderlineSVG color="#82A0FF" className="w-full h-2.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Minimal swipe progress dots (visual indicator only, no buttons) */}
          <div className="flex items-center justify-center gap-2.5 mt-8" aria-hidden="true">
            {list.map((_, idx) => (
              <span
                key={idx}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "w-8 bg-[#E6FAB9]"
                    : "w-2.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
