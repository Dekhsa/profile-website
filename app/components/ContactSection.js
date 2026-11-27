"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FaArrowRight,
  FaBriefcase,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRocket,
  FaStar,
} from "react-icons/fa";
import { useTranslation } from "../hooks/useTranslation";
import { ScrollPopIcon } from "./ScrollPopups";
import {
  DekhsaWordmark,
  DieCutSticker,
  HandDrawnUnderlineSVG,
  SpeechTag,
} from "./TruusGraphics";

export default function ContactSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sentNotice, setSentNotice] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name || "Visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    setSentNotice(true);
    window.location.href = `mailto:dekhsafnan@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => setSentNotice(false), 5000);
  };

  return (
    <footer
      id="contact"
      data-theme-section="light"
      className="bg-[#F0EBE6] pt-8 px-2 sm:px-4"
    >
      {/* Inset Vibrant Royal Blue (#4B69F0) Footer Container */}
      <div className="bg-[#4B69F0] text-[#F0EBE6] rounded-t-[36px] sm:rounded-t-[52px] pt-16 sm:pt-20 pb-8 px-6 sm:px-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          {/* 3-Column Truus Footer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
            {/* Column 1: Current Role */}
            <div className="lg:col-span-3 space-y-5">
              <SpeechTag bg="#F0EBE6" text="#000000">
                {t("contact.col1Tag")}
              </SpeechTag>

              <div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-3xl p-6 text-sm sm:text-base font-medium leading-relaxed text-[#F0EBE6] space-y-2">
                <div className="inline-flex items-center gap-2 text-[#E6FAB9] font-display font-bold lowercase">
                  <FaBriefcase />
                  <span>{t("contact.statusRole")}</span>
                </div>
                <p className="font-display font-extrabold text-white text-base">
                  {t("contact.statusCompany")}
                </p>
                <p className="text-xs sm:text-sm text-[#F0EBE6]/85">
                  {t("contact.statusNote")}
                </p>
              </div>
            </div>

            {/* Column 2: Direct Contact Links */}
            <div className="lg:col-span-4 space-y-5">
              <SpeechTag bg="#F0EBE6" text="#000000">
                {t("contact.col2Tag")}
              </SpeechTag>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-base font-display font-bold lowercase">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-[#E6FAB9]" />
                  <span>{t("contact.education")}</span>
                </div>

                <div>
                  <a
                    href="mailto:dekhsafnan@gmail.com"
                    className="draw-btn font-display font-extrabold text-xl sm:text-2xl lowercase text-white hover:text-[#E6FAB9] transition-colors"
                  >
                    <span>dekhsafnan@gmail.com</span>
                    <HandDrawnUnderlineSVG
                      color="#E6FAB9"
                      className="w-full h-3"
                    />
                  </a>
                </div>

                <div>
                  <a
                    href="tel:+6281210619043"
                    className="inline-flex items-center gap-2 font-display font-bold text-base text-[#E6FAB9] hover:underline"
                  >
                    <FaPhoneAlt className="text-xs" />
                    <span>081210619043</span>
                  </a>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <a
                    href="mailto:dekhsafnan@gmail.com"
                    aria-label="Email"
                    className="w-11 h-11 rounded-full bg-[#F0EBE6] text-black flex items-center justify-center hover:bg-[#E6FAB9] hover:scale-110 transition-all"
                  >
                    <FaEnvelope />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dekhsaafnan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-11 h-11 rounded-full bg-[#F0EBE6] text-black flex items-center justify-center hover:bg-[#E6FAB9] hover:scale-110 transition-all"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/Dekhsa"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-11 h-11 rounded-full bg-[#F0EBE6] text-black flex items-center justify-center hover:bg-[#E6FAB9] hover:scale-110 transition-all"
                  >
                    <FaGithub />
                  </a>
                </div>

                <p className="text-xs text-[#F0EBE6]/80 pt-1">
                  {t("contact.footnote")}
                </p>
              </div>
            </div>

            {/* Column 3: Contact Form */}
            <div className="lg:col-span-5 space-y-5">
              <SpeechTag bg="#F0EBE6" text="#000000">
                {t("contact.col3Tag")}
              </SpeechTag>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl lowercase">
                {t("contact.title")}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder={t("contact.form.name")}
                    className="w-full rounded-2xl bg-[#F0EBE6] text-black placeholder:text-black/50 px-4 py-3 text-sm font-medium border-2 border-black focus:outline-none focus:ring-2 focus:ring-[#E6FAB9]"
                  />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder={t("contact.form.email")}
                    className="w-full rounded-2xl bg-[#F0EBE6] text-black placeholder:text-black/50 px-4 py-3 text-sm font-medium border-2 border-black focus:outline-none focus:ring-2 focus:ring-[#E6FAB9]"
                  />
                </div>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder={t("contact.form.subject")}
                  className="w-full rounded-2xl bg-[#F0EBE6] text-black placeholder:text-black/50 px-4 py-3 text-sm font-medium border-2 border-black focus:outline-none focus:ring-2 focus:ring-[#E6FAB9]"
                />
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder={t("contact.form.message")}
                  className="w-full rounded-2xl bg-[#F0EBE6] text-black placeholder:text-black/50 px-4 py-3 text-sm font-medium border-2 border-black focus:outline-none focus:ring-2 focus:ring-[#E6FAB9]"
                />

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <button
                    type="submit"
                    data-cursor="send!"
                    className="inline-flex items-center gap-2 bg-black text-[#F0EBE6] font-display font-extrabold text-sm lowercase px-7 py-3 rounded-full border-2 border-[#F0EBE6] shadow-[4px_4px_0_#E6FAB9] hover:bg-[#E6FAB9] hover:text-black hover:border-black transition-all"
                  >
                    <span>{t("contact.form.submit")}</span>
                    <FaArrowRight className="text-xs" />
                  </button>
                  {sentNotice && (
                    <span className="text-xs font-display font-bold text-[#E6FAB9]">
                      {t("contact.form.sentSuccess")}
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Edge-to-Edge Giant Wordmark + Illustrated Logo & Scroll Pop-up Stickers */}
          <div className="relative pt-10 pb-2 select-none">
            <ScrollPopIcon
              rotate="-12deg"
              className="absolute top-2 left-4 sm:left-14 z-10"
            >
              <DieCutSticker
                bg="#F5693C"
                text="#000000"
                border="#FFFFFF"
                rotate="-12deg"
                className="text-sm sm:text-lg px-4 py-1.5"
              >
                <FaRocket />
                <span>ship it</span>
              </DieCutSticker>
            </ScrollPopIcon>

            <ScrollPopIcon
              rotate="8deg"
              delay="120ms"
              className="hidden sm:block absolute top-0 left-1/3 z-10"
            >
              <div className="w-16 h-16 rounded-full bg-[#E6FAB9] border-4 border-white shadow-[0_6px_0_rgba(0,0,0,0.2)] flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo-dekhsa.png"
                  alt="Dekhsa Logo"
                  width={58}
                  height={58}
                  className="object-contain"
                />
              </div>
            </ScrollPopIcon>

            <ScrollPopIcon
              rotate="10deg"
              delay="200ms"
              className="absolute top-3 right-6 sm:right-20 z-10"
            >
              <DieCutSticker
                bg="#F0BEFA"
                text="#000000"
                border="#FFFFFF"
                rotate="10deg"
                className="text-sm sm:text-lg px-4 py-1.5"
              >
                <FaStar />
                <span>100%</span>
              </DieCutSticker>
            </ScrollPopIcon>

            <DekhsaWordmark
              color="#F0EBE6"
              className="w-full h-auto max-h-[210px]"
            />

            <div className="flex flex-wrap items-center justify-start gap-4 text-xs text-[#F0EBE6]/85 pt-2 pb-10 sm:pb-4">
              <span className="font-display font-bold lowercase">
                muhamad dekhsa afnan — indonesiait / yogyakarta
              </span>
              <span className="bg-black text-[#F0EBE6] font-display font-bold lowercase px-3 py-1 rounded-full">
                © {new Date().getFullYear()} dekhsa
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
