"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Particles, initParticlesEngine } from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";
import { useEffect, useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useTranslation } from "../hooks/useTranslation";
const TypedText = dynamic(() => import("./TypedText"), { ssr: false });

export default function HeroSection() {
  const [init, setInit] = useState(false);
  const [cardRef, isCardVisible] = useIntersectionObserver();
  const { t } = useTranslation();

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Config untuk @tsparticles/react v3 - Interaktif dan memenuhi layar
  const particlesConfig = {
    background: { color: { value: "#ffffff" } },
    fullScreen: { enable: false },
    particles: {
      number: { value: 80, density: { enable: true, area: 600 } },
      color: { value: ["#3b82f6", "#1e40af", "#2563eb"] },
      shape: { type: "circle" },
      opacity: {
        value: 0.7,
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.3,
          sync: false,
        },
      },
      size: {
        value: { min: 2, max: 6 },
        random: true,
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 1,
          sync: false,
        },
      },
      links: {
        enable: true,
        color: "#3b82f6",
        distance: 120,
        opacity: 0.6,
        width: 1.5,
        triangles: {
          enable: true,
          color: "#3b82f6",
          opacity: 0.1,
        },
      },
      move: {
        enable: true,
        speed: { min: 0.5, max: 2 },
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "bounce",
          top: "bounce",
          bottom: "bounce",
          left: "bounce",
          right: "bounce",
        },
        attract: {
          enable: true,
          distance: 100,
          rotate: {
            x: 600,
            y: 600,
          },
        },
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: ["grab", "bubble"],
          parallax: { enable: true, force: 60, smooth: 10 },
        },
        onClick: {
          enable: true,
          mode: ["push", "repulse"],
        },
        resize: { enable: true },
      },
      modes: {
        grab: {
          distance: 250,
          links: {
            opacity: 1,
            color: "#1e40af",
          },
        },
        bubble: {
          distance: 200,
          size: 10,
          duration: 2,
          opacity: 1,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
          speed: 1,
        },
        push: {
          quantity: 3,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <section
      id="hero"
      className="w-full mx-auto flex justify-center items-center min-h-[80vh] bg-white py-12 px-4 sm:py-20 relative overflow-hidden"
    >
      {/* Particles background */}
      {init && (
        <div className="absolute inset-0 z-0 w-full xl:max-h-">
          <Particles
            id="tsparticles"
            options={particlesConfig}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
              pointerEvents: "auto",
            }}
          />
        </div>
      )}
      <div 
        ref={cardRef}
        className={`relative z-10 bg-white rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 max-w-6xl w-full transition-all duration-600 ${
          isCardVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
        }`}
      >
        <div className="relative flex-shrink-0 flex flex-col items-center">
          <Image
            src="/profile.png"
            alt="Foto Profil"
            width={200}
            height={200}
            className="rounded-xl shadow-lg object-cover transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            priority
          />
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <div className="h-max">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
              {t('hero.greeting')}
            </h2>
            <h1 className="text-3xl sm:text-5xl font-bold text-blue-700 leading-tight mb-2">
              {t('hero.title')}{" "}
              <span className="text-blue-500">
                <TypedText
                  strings={t('hero.experiences')}
                  className="text-blue-500"
                />
              </span>
            </h1>
          </div>
          <p className="text-gray-700 text-base sm:text-lg mb-4">
            {t('hero.description')}
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="#contact"
              className="bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-blue-800 transition-colors"
            >
              {t('hero.contactBtn')}
            </a>
            <a
              href="#portfolio"
              className="bg-white border border-blue-700 text-blue-700 font-semibold px-5 py-2 rounded-lg shadow hover:bg-blue-50 transition-colors"
            >
              {t('hero.portfolioBtn')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
