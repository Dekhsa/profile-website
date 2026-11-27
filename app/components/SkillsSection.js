"use client";
import { useState } from "react";
import {
  FaBrain,
  FaDatabase,
  FaGlobeAmericas,
  FaServer,
  FaTasks,
} from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";
import { ScrollPopIcon } from "./ScrollPopups";
import {
  CardArrowDividerSVG,
  CurlyDoodleArrowSVG,
  DieCutSticker,
  HandDrawnUnderlineSVG,
  OrganicBlobSVG,
  SparkleIcon,
} from "./TruusGraphics";

const DISCIPLINE_ICONS = {
  pm: FaTasks,
  fullstack: FaServer,
  ml: FaBrain,
  dataeng: FaDatabase,
  lang: FaGlobeAmericas,
};

const STACK_ROW_1 = [
  { name: "PRD / BRD", group: "pm", bg: "#F5693C", text: "#000000" },
  { name: "RTM", group: "pm", bg: "#000000", text: "#E6FAB9" },
  { name: "SLA", group: "pm", bg: "#F0BEFA", text: "#000000" },
  { name: "Next.js", group: "fullstack", bg: "#000000", text: "#F0EBE6" },
  { name: "FastAPI", group: "fullstack", bg: "#2D7864", text: "#FFFFFF" },
  { name: "Node.js", group: "fullstack", bg: "#E6FAB9", text: "#000000" },
  { name: "Express", group: "fullstack", bg: "#82A0FF", text: "#000000" },
  { name: "PostgreSQL", group: "fullstack", bg: "#4B69F0", text: "#F0EBE6" },
  { name: "Redis", group: "fullstack", bg: "#A0325A", text: "#F0EBE6" },
  { name: "Docker", group: "fullstack", bg: "#FFE1F0", text: "#000000" },
];

const STACK_ROW_2 = [
  { name: "Scikit-learn", group: "ml", bg: "#82A0FF", text: "#000000" },
  { name: "TensorFlow", group: "ml", bg: "#F5693C", text: "#000000" },
  { name: "PyTorch", group: "ml", bg: "#000000", text: "#F0EBE6" },
  { name: "XGBoost", group: "ml", bg: "#E6FAB9", text: "#000000" },
  { name: "SARIMAX", group: "ml", bg: "#4B69F0", text: "#F0EBE6" },
  { name: "BS4", group: "dataeng", bg: "#A0325A", text: "#F0EBE6" },
  { name: "Selenium", group: "dataeng", bg: "#2D7864", text: "#FFFFFF" },
  { name: "Pandas", group: "dataeng", bg: "#F0BEFA", text: "#000000" },
  { name: "NumPy", group: "dataeng", bg: "#FFE1F0", text: "#000000" },
  { name: "SHAP & MAPE", group: "dataeng", bg: "#E6FAB9", text: "#000000" },
  { name: "English (C1)", group: "lang", bg: "#F0BEFA", text: "#000000" },
];

export default function SkillsSection() {
  const { t } = useTranslation();
  const [selectedGroup, setSelectedGroup] = useState(null);

  const cards = t("skills.items");
  const list = Array.isArray(cards) ? cards : [];

  const toggleGroup = (id) => {
    setSelectedGroup((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="skills"
      data-theme-section="light"
      className="bg-[#F0EBE6] text-black py-24 sm:py-32 overflow-hidden"
    >
      {/* 1. Interactive Discipline Cards (click to filter marquee) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl lowercase leading-[0.95]">
            {t("skills.titleBefore")}{" "}
            <span className="relative inline-block font-editorial font-normal text-5xl sm:text-7xl">
              {t("skills.titleItalic")}
              <HandDrawnUnderlineSVG
                color="#4B69F0"
                className="w-full h-3.5 mt-0.5"
              />
            </span>
            {t("skills.titleAfter")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 items-stretch">
          {list.map((item, idx) => {
            const IconComp = DISCIPLINE_ICONS[item.id] || FaTasks;
            const isSelected = selectedGroup === item.id;
            const tilts = [
              "-rotate-2",
              "rotate-2 md:translate-y-5",
              "-rotate-1",
              "rotate-2",
              "-rotate-2 md:translate-y-3",
            ];
            const tilt = isSelected ? "rotate-0 -translate-y-2" : tilts[idx % tilts.length];

            return (
              <button
                key={item.id}
                onClick={() => toggleGroup(item.id)}
                data-cursor="filter!"
                className={`text-left relative rounded-[32px] border-[3px] border-black p-7 sm:p-8 flex flex-col justify-between min-h-[340px] transition-all duration-300 ${tilt} ${
                  isSelected
                    ? "shadow-[10px_10px_0_#4B69F0] ring-4 ring-[#4B69F0]"
                    : "shadow-[7px_7px_0_#000] hover:rotate-0 hover:-translate-y-1.5"
                }`}
                style={{ backgroundColor: item.bg, color: item.text }}
              >
                {/* Pop-up FontAwesome sticker on top edge */}
                <ScrollPopIcon
                  rotate={idx % 2 === 0 ? "-10deg" : "10deg"}
                  delay={`${idx * 70}ms`}
                  className="absolute -top-6 right-7"
                >
                  <DieCutSticker
                    bg={item.stickerBg}
                    text="#000000"
                    border="#000000"
                    rotate={idx % 2 === 0 ? "-10deg" : "10deg"}
                    className="text-lg px-4 py-2"
                  >
                    <IconComp />
                  </DieCutSticker>
                </ScrollPopIcon>

                <div className="w-full">
                  <h3 className="font-display font-extrabold text-3xl sm:text-4xl lowercase tracking-tight mb-4 pt-2">
                    {item.title}
                  </h3>

                  <CardArrowDividerSVG
                    color={item.text}
                    className="w-full h-5 mb-6 opacity-90"
                  />

                  <ul className="space-y-3">
                    {Array.isArray(item.points) &&
                      item.points.map((pt, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-center gap-2.5 font-display font-bold text-sm sm:text-base"
                        >
                          <SparkleIcon
                            color={item.text}
                            className="w-3.5 h-3.5 shrink-0"
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="mt-6 flex items-center justify-between w-full text-xs font-display font-bold uppercase tracking-widest opacity-75">
                  <span>0{idx + 1} / core</span>
                  <span>{isSelected ? "active filter" : "click to filter"}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Filter-Linked Dual Opposing Tech Stack Marquee */}
      <div className="mt-28 sm:mt-32 relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative mb-12">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <OrganicBlobSVG
              color="#82A0FF"
              className="w-[300px] sm:w-[390px] h-auto opacity-85"
            />
          </div>

          <div className="relative z-10 py-6">
            <h3 className="font-display font-extrabold text-3xl sm:text-5xl lowercase leading-[0.98] mb-3">
              {t("skills.marqueeTitle")}
            </h3>
            <div className="flex justify-center mt-2">
              <CurlyDoodleArrowSVG color="#000000" className="w-16 h-20" />
            </div>
          </div>
        </div>

        <div className="marquee-wrapper marquee-mask space-y-5 py-2">
          {/* Row 1 -> Left */}
          <div className="animate-marquee-left gap-5 items-center">
            {[...STACK_ROW_1, ...STACK_ROW_1, ...STACK_ROW_1].map((tech, i) => {
              const dimmed = selectedGroup && tech.group !== selectedGroup;
              const matched = selectedGroup && tech.group === selectedGroup;
              return (
                <div
                  key={i}
                  className={`shrink-0 px-7 py-5 rounded-[24px] border-4 border-white shadow-[0_6px_0_rgba(0,0,0,0.12)] font-display font-extrabold text-xl sm:text-2xl tracking-tight transition-all duration-300 ${
                    dimmed
                      ? "opacity-25 scale-95"
                      : matched
                      ? "scale-110 ring-4 ring-black"
                      : "hover:scale-105"
                  }`}
                  style={{ backgroundColor: tech.bg, color: tech.text }}
                >
                  {tech.name}
                </div>
              );
            })}
          </div>

          {/* Row 2 -> Right */}
          <div className="animate-marquee-right gap-5 items-center">
            {[...STACK_ROW_2, ...STACK_ROW_2, ...STACK_ROW_2].map((tech, i) => {
              const dimmed = selectedGroup && tech.group !== selectedGroup;
              const matched = selectedGroup && tech.group === selectedGroup;
              return (
                <div
                  key={i}
                  className={`shrink-0 px-7 py-5 rounded-[24px] border-4 border-white shadow-[0_6px_0_rgba(0,0,0,0.12)] font-display font-extrabold text-xl sm:text-2xl tracking-tight transition-all duration-300 ${
                    dimmed
                      ? "opacity-25 scale-95"
                      : matched
                      ? "scale-110 ring-4 ring-black"
                      : "hover:scale-105"
                  }`}
                  style={{ backgroundColor: tech.bg, color: tech.text }}
                >
                  {tech.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
