"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FaAward,
  FaBookOpen,
  FaGraduationCap,
  FaIdBadge,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";
import { ScrollPopIcon } from "./ScrollPopups";
import {
  DieCutSticker,
  HandDrawnUnderlineSVG,
  OrganicBlobSVG,
  SpeechTag,
} from "./TruusGraphics";

export default function AboutSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("education");

  const tabs = t("about.tabs");
  const eduList = t("about.educationList");
  const leadList = t("about.leadershipList");
  const highlights = t("about.highlights");

  return (
    <section
      id="about"
      data-theme-section="light"
      className="relative bg-[#82A0FF] text-black py-24 sm:py-32 px-4 sm:px-8 overflow-hidden"
    >
      {/* Cream Organic Blob Backdrop */}
      <div className="pointer-events-none absolute -top-20 -right-24 opacity-45">
        <OrganicBlobSVG color="#F0EBE6" className="w-[460px] sm:w-[620px] h-auto" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl lowercase leading-[0.95]">
            {t("about.titleBefore")}{" "}
            <span className="relative inline-block font-editorial font-normal text-5xl sm:text-7xl text-[#F0EBE6]">
              {t("about.titleItalic")}
              <HandDrawnUnderlineSVG
                color="#000000"
                className="w-full h-3 mt-0.5"
              />
            </span>{" "}
            <br className="hidden sm:block" />
            {t("about.titleAfter")}
          </h2>
        </div>

        {/* Interactive Split Experience: Left Photo + Highlights, Right Tabbed Passport */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Portrait + Stat Chips */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative max-w-sm mx-auto">
              <ScrollPopIcon
                rotate="-8deg"
                className="absolute -top-5 -left-3 z-20"
              >
                <DieCutSticker
                  bg="#E6FAB9"
                  text="#000000"
                  border="#000000"
                  rotate="-8deg"
                  className="text-xs px-3.5 py-1.5"
                >
                  <FaAward />
                  <span>Best Delegate</span>
                </DieCutSticker>
              </ScrollPopIcon>

              <div className="relative aspect-[4/4.3] rounded-[32px] overflow-hidden border-4 border-black bg-[#F0EBE6] shadow-[10px_10px_0_#000] -rotate-2 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/profile.png"
                  alt="Muhamad Dekhsa Afnan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* 3 Highlight Stat Cards */}
            <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
              {Array.isArray(highlights) &&
                highlights.map((h, idx) => (
                  <ScrollPopIcon
                    key={idx}
                    rotate={idx === 1 ? "2deg" : "-2deg"}
                    delay={`${idx * 90}ms`}
                  >
                    <div className="bg-[#F0EBE6] border-[3px] border-black rounded-2xl p-3.5 text-center shadow-[4px_4px_0_#000]">
                      <div className="font-display font-extrabold text-2xl sm:text-3xl text-black">
                        {h.number}
                      </div>
                      <div className="font-display font-bold text-[11px] lowercase text-black/75 mt-1">
                        {h.label}
                      </div>
                    </div>
                  </ScrollPopIcon>
                ))}
            </div>
          </div>

          {/* Right Column: Interactive Tabbed Credential Book */}
          <div className="lg:col-span-7 bg-[#F0EBE6] rounded-[34px] border-4 border-black p-6 sm:p-9 shadow-[10px_10px_0_#000]">
            {/* Tab Switcher */}
            <div className="flex flex-wrap gap-2.5 mb-7 pb-5 border-b-2 border-black/15">
              {Array.isArray(tabs) &&
                tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  const TabIcon =
                    tab.id === "education"
                      ? FaGraduationCap
                      : tab.id === "leadership"
                      ? FaUsers
                      : FaIdBadge;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      data-cursor="switch!"
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-display font-extrabold text-sm lowercase border-2 border-black transition-all ${
                        isActive
                          ? "bg-black text-[#E6FAB9] shadow-[3px_3px_0_#F5693C]"
                          : "bg-white text-black hover:bg-[#E6FAB9]"
                      }`}
                    >
                      <TabIcon />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
            </div>

            {/* Tab Content */}
            {activeTab === "education" && (
              <div className="space-y-4">
                {Array.isArray(eduList) &&
                  eduList.map((edu, idx) => (
                    <div
                      key={idx}
                      className="rounded-[24px] border-[3px] border-black p-5 shadow-[5px_5px_0_#000]"
                      style={{ backgroundColor: edu.bg }}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <SpeechTag bg="#000000" text="#F0EBE6">
                          {edu.period}
                        </SpeechTag>
                        <span className="inline-flex items-center gap-1.5 font-display font-extrabold text-xs uppercase bg-white px-3 py-1 rounded-full border-2 border-black">
                          <FaStar className="text-[#F5693C]" />
                          {edu.detail}
                        </span>
                      </div>
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl lowercase mt-2">
                        {edu.school}
                      </h3>
                      <p className="text-sm sm:text-base font-medium text-black/80 mt-1">
                        {edu.program}
                      </p>
                    </div>
                  ))}
              </div>
            )}

            {activeTab === "leadership" && (
              <div className="space-y-4">
                {Array.isArray(leadList) &&
                  leadList.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-[24px] border-[3px] border-black p-5 shadow-[5px_5px_0_#000]"
                      style={{ backgroundColor: item.bg }}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <SpeechTag bg="#FFFFFF" text="#000000">
                          {item.period}
                        </SpeechTag>
                        <span className="font-display font-extrabold text-xs uppercase tracking-wider bg-black text-[#E6FAB9] px-3 py-1 rounded-full">
                          {item.role}
                        </span>
                      </div>
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl lowercase mt-2">
                        {item.org}
                      </h3>
                      <p className="text-sm sm:text-base text-black/85 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
              </div>
            )}

            {activeTab === "profile" && (
              <div className="rounded-[24px] bg-white border-[3px] border-black p-6 shadow-[5px_5px_0_#000] space-y-4">
                <div className="inline-flex items-center gap-2 font-display font-extrabold text-sm lowercase text-[#4B69F0]">
                  <FaBookOpen />
                  <span>muhamad dekhsa afnan</span>
                </div>
                <p className="text-base sm:text-lg text-black/85 leading-relaxed">
                  {t("about.profileSummary")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
