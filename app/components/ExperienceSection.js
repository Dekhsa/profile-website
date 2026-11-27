"use client";
import { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPause,
  FaPlay,
  FaProjectDiagram,
} from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";
import { ScrollPopIcon } from "./ScrollPopups";
import {
  DieCutSticker,
  HandDrawnUnderlineSVG,
  SpeechTag,
} from "./TruusGraphics";

export default function ExperienceSection() {
  const { t } = useTranslation();
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isHoveringDetail, setIsHoveringDetail] = useState(false);

  const roles = t("experience.roles");
  const roleList = Array.isArray(roles) ? roles : [];
  const activeRole = roleList[selectedIdx] || roleList[0];

  // Auto-cycle roles every 5 seconds unless cursor is hovering on the role detail card
  useEffect(() => {
    if (isHoveringDetail || roleList.length <= 1) return;

    const timer = setInterval(() => {
      setSelectedIdx((prev) => (prev + 1) % roleList.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHoveringDetail, roleList.length, selectedIdx]);

  return (
    <section
      id="experience"
      data-theme-section="light"
      className="bg-[#F0EBE6] text-black pt-10 pb-24 overflow-hidden"
    >
      {/* Kinetic Company Ticker */}
      <div className="marquee-wrapper border-y-2 border-black/15 py-4 mb-16 bg-[#E6FAB9]">
        <div className="animate-marquee-left items-center gap-6">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 font-display font-extrabold text-2xl sm:text-4xl lowercase tracking-tight whitespace-nowrap text-black"
            >
              <FaBriefcase className="text-xl sm:text-2xl text-[#4B69F0]" />
              <span>{t("experience.ticker")}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Heading only — subheader & pipeline removed per request */}
        <div className="relative text-center max-w-4xl mx-auto mb-14">
          <ScrollPopIcon
            rotate="-8deg"
            className="hidden md:block absolute -left-8 -top-6"
          >
            <DieCutSticker
              bg="#F5693C"
              text="#000000"
              border="#000000"
              rotate="-8deg"
              className="text-xs px-4 py-1.5"
            >
              <FaProjectDiagram />
              <span>PM + Fullstack</span>
            </DieCutSticker>
          </ScrollPopIcon>

          <h2 className="font-display font-extrabold text-4xl sm:text-6xl lowercase leading-[0.95]">
            {t("experience.titleBefore")}{" "}
            <span className="relative inline-block font-editorial font-normal text-5xl sm:text-7xl text-[#4B69F0]">
              {t("experience.titleItalic")}
              <HandDrawnUnderlineSVG
                color="#000000"
                className="w-full h-3 mt-0.5"
              />
            </span>{" "}
            <br className="hidden sm:block" />
            {t("experience.titleAfter")}
          </h2>
        </div>

        {/* Interactive Role Workbench: Auto-rotates every 5s unless detail panel is hovered */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Role Selector Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            {roleList.map((item, idx) => {
              const active = idx === selectedIdx;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedIdx(idx)}
                  data-cursor="inspect!"
                  className={`w-full text-left rounded-[24px] border-[3px] border-black p-5 transition-all duration-200 ${
                    active
                      ? "bg-black text-[#F0EBE6] shadow-[6px_6px_0_#F5693C] -translate-y-0.5"
                      : "bg-white text-black hover:bg-[#E6FAB9]/50 shadow-[4px_4px_0_#000]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className="inline-block px-3 py-1 rounded-full font-display font-bold text-[11px] lowercase text-black"
                      style={{ backgroundColor: item.tagBg }}
                    >
                      {item.badge}
                    </span>
                    <span
                      className={`text-xs font-display font-bold ${
                        active ? "text-[#E6FAB9]" : "text-black/60"
                      }`}
                    >
                      {item.period}
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl lowercase leading-snug">
                    {item.role}
                  </h3>
                  <p
                    className={`text-sm font-medium mt-0.5 ${
                      active ? "text-[#82A0FF]" : "text-black/70"
                    }`}
                  >
                    {item.company}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Role Detail Panel (Fixed height via CSS grid stacking; hover pauses 5s auto-rotation) */}
          {activeRole && (
            <div
              onMouseEnter={() => setIsHoveringDetail(true)}
              onMouseLeave={() => setIsHoveringDetail(false)}
              className="lg:col-span-7 relative bg-white rounded-[32px] border-[3px] border-black p-7 sm:p-10 shadow-[10px_10px_0_#000]"
            >
              <ScrollPopIcon
                key={activeRole.id}
                rotate="6deg"
                className="absolute -top-5 right-6 z-20"
              >
                <DieCutSticker
                  bg={activeRole.tagBg}
                  text="#000000"
                  border="#000000"
                  rotate="6deg"
                  className="text-xs sm:text-sm px-4 py-1.5"
                >
                  <FaBriefcase />
                  <span>{activeRole.sticker}</span>
                </DieCutSticker>
              </ScrollPopIcon>

              <div className="grid grid-cols-1 grid-rows-1">
                {roleList.map((roleItem, idx) => {
                  const isCurrent = idx === selectedIdx;
                  return (
                    <div
                      key={roleItem.id}
                      aria-hidden={!isCurrent}
                      className={`col-start-1 row-start-1 transition-opacity duration-300 ${
                        isCurrent
                          ? "opacity-100 visible pointer-events-auto"
                          : "opacity-0 invisible pointer-events-none"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div className="flex flex-wrap items-center gap-3">
                          <SpeechTag bg="#4B69F0" text="#F0EBE6">
                            {roleItem.company}
                          </SpeechTag>
                          <span className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-black/65">
                            <FaCalendarAlt />
                            {roleItem.period}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-black/65">
                            <FaMapMarkerAlt />
                            {roleItem.location}
                          </span>
                        </div>

                        {/* Auto-cycle status pill */}
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-display font-bold border border-black/20 ${
                            isHoveringDetail
                              ? "bg-[#FFE1F0] text-black"
                              : "bg-[#E6FAB9] text-black"
                          }`}
                        >
                          {isHoveringDetail ? (
                            <>
                              <FaPause className="text-[9px]" />
                              <span>paused</span>
                            </>
                          ) : (
                            <>
                              <FaPlay className="text-[9px]" />
                              <span>5s auto</span>
                            </>
                          )}
                        </span>
                      </div>

                      <h3 className="font-display font-extrabold text-2xl sm:text-4xl lowercase mb-3">
                        {roleItem.role}
                      </h3>

                      <p className="text-black/80 text-base leading-relaxed mb-6">
                        {roleItem.summary}
                      </p>

                      {/* Deliverable pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {Array.isArray(roleItem.deliverables) &&
                          roleItem.deliverables.map((del, dIdx) => (
                            <span
                              key={dIdx}
                              className="px-3.5 py-1.5 rounded-full bg-[#F0EBE6] border-2 border-black font-display font-bold text-xs lowercase"
                            >
                              {del}
                            </span>
                          ))}
                      </div>

                      {/* Bullet Achievements */}
                      <ul className="space-y-3.5 pt-4 border-t-2 border-black/10">
                        {Array.isArray(roleItem.points) &&
                          roleItem.points.map((pt, pIdx) => (
                            <li
                              key={pIdx}
                              className="flex items-start gap-3 text-sm sm:text-base text-black/85 leading-relaxed"
                            >
                              <FaCheckCircle className="text-[#2D7864] shrink-0 mt-1 text-base" />
                              <span>{pt}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
