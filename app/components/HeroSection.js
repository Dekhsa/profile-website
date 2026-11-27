"use client";
import Image from "next/image";
import {
  FaArrowRight,
  FaCode,
  FaGraduationCap,
  FaHandSpock,
  FaProjectDiagram,
} from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";
import { ScrollPopIcon } from "./ScrollPopups";
import {
  DieCutSticker,
  HandDrawnOvalSVG,
  HandDrawnUnderlineSVG,
  OrganicBlobSVG,
  SpeechTag,
  StarburstSVG,
} from "./TruusGraphics";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      data-theme-section="dark"
      className="relative min-h-[90vh] bg-black text-[#F0EBE6] pt-28 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-8 overflow-hidden flex items-center"
    >
      {/* Subtle atmospheric dark-canvas radial glows */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-[460px] h-[460px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #4B69F0 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 right-0 w-[440px] h-[440px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #F5693C 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left: Clean punchy headline without extra subheaders/paragraphs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <div className="mb-6">
            <SpeechTag bg="#E6FAB9" text="#000000">
              <FaHandSpock className="text-xs" />
              <span>{t("hero.eyebrow")}</span>
            </SpeechTag>
          </div>

          <p className="font-display font-bold text-xl sm:text-2xl text-[#82A0FF] lowercase mb-3">
            {t("hero.greeting")}
          </p>

          <h1 className="font-display font-extrabold text-5xl sm:text-6xl xl:text-[4.8rem] text-[#F0EBE6] lowercase tracking-tight leading-[0.95]">
            {t("hero.headlineStart")}{" "}
            <span className="relative inline-block px-2 py-0.5 mx-0.5">
              <span className="relative z-10 font-editorial font-normal text-[#E6FAB9]">
                {t("hero.headlineCircled")}
              </span>
              <HandDrawnOvalSVG
                color="#F0EBE6"
                className="absolute -inset-x-3 -inset-y-1.5 w-[calc(100%+24px)] h-[calc(100%+12px)] pointer-events-none"
              />
            </span>{" "}
            <br className="hidden sm:block" />
            <span className="text-[#F5693C]">{t("hero.headlineEnd")}</span>
          </h1>

          {/* Action Row */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              data-cursor="let's go!"
              className="inline-flex items-center gap-2.5 bg-[#F5693C] text-black font-display font-extrabold text-base lowercase px-7 py-3.5 rounded-full border-2 border-[#F0EBE6] shadow-[4px_4px_0_#F0EBE6] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#F0EBE6] transition-all"
            >
              <span>{t("hero.contactBtn")}</span>
              <FaArrowRight className="text-sm" />
            </a>

            <a
              href="#experience"
              data-cursor="explore!"
              className="draw-btn text-[#F0EBE6] font-display font-bold text-lg lowercase hover:text-[#E6FAB9] transition-colors"
            >
              <span className="inline-flex items-center gap-2">
                <FaProjectDiagram className="text-sm text-[#82A0FF]" />
                {t("hero.portfolioBtn")}
              </span>
              <HandDrawnUnderlineSVG color="#E6FAB9" className="w-full h-3" />
            </a>
          </div>
        </div>

        {/* Right: Cutout Portrait + Illustrated Logo Badge + Pop-Up Stickers */}
        <div className="lg:col-span-5 relative flex items-center justify-center py-8">
          <StarburstSVG
            color="#E6FAB9"
            className="absolute -top-4 -left-2 sm:left-4 w-24 h-24 animate-slow-spin opacity-90"
          />

          <OrganicBlobSVG
            color="#82A0FF"
            className="w-[320px] sm:w-[390px] h-auto drop-shadow-2xl"
          />

          <div
            data-cursor="dekhsa"
            className="absolute w-[240px] sm:w-[290px] aspect-[4/5] rounded-[32px] bg-[#4B69F0] border-4 border-[#F0EBE6] overflow-hidden shadow-[10px_10px_0_#F5693C] rotate-2 hover:rotate-0 transition-transform duration-300"
          >
            <Image
              src="/profile2.png"
              alt="Muhamad Dekhsa Afnan"
              fill
              sizes="(max-width: 640px) 240px, 290px"
              className="object-cover object-top scale-105"
              priority
            />
          </div>

          {/* Illustrated Logo Sticker overlapping portrait */}
          <ScrollPopIcon
            rotate="-10deg"
            className="absolute -bottom-2 right-4 sm:right-6 z-20"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FFE1F0] border-4 border-white shadow-[0_6px_0_rgba(0,0,0,0.3)] flex items-center justify-center overflow-hidden hover:scale-110 transition-transform">
              <Image
                src="/logo-dekhsa.png"
                alt="Dekhsa Illustrated Logo"
                width={76}
                height={76}
                className="object-contain"
              />
            </div>
          </ScrollPopIcon>

          {/* Pop-up FontAwesome Badges */}
          <ScrollPopIcon
            rotate="-8deg"
            className="absolute top-6 right-1 sm:right-4 z-20"
          >
            <DieCutSticker
              bg="#FFE1F0"
              text="#000000"
              border="#FFFFFF"
              rotate="-8deg"
              className="text-sm sm:text-base px-4 py-2"
            >
              <FaCode />
              <span>{t("hero.stickerTop")}</span>
            </DieCutSticker>
          </ScrollPopIcon>

          <ScrollPopIcon
            rotate="7deg"
            delay="150ms"
            className="absolute bottom-3 left-2 sm:left-6 z-20"
          >
            <DieCutSticker
              bg="#E6FAB9"
              text="#000000"
              border="#000000"
              rotate="7deg"
              className="text-sm sm:text-base px-4 py-2"
            >
              <FaGraduationCap />
              <span>{t("hero.stickerSide")}</span>
            </DieCutSticker>
          </ScrollPopIcon>
        </div>
      </div>
    </section>
  );
}
