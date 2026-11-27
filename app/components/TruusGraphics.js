"use client";
import { FaStar } from "react-icons/fa";

/**
 * 12-point organic starburst SVG (like Truus's nav "work" button & dark section backdrop).
 */
export function StarburstSVG({ className = "", color = "#F5693C" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M100 4L118 42L154 18L147 58L190 54L163 87L197 108L160 123L182 160L141 154L143 195L110 168L92 197L76 161L39 183L46 142L5 144L33 111L4 89L42 74L20 37L61 44L59 5L91 33L100 4Z"
        fill={color}
      />
    </svg>
  );
}

/**
 * Giant cornflower-blue organic blob backdrop.
 */
export function OrganicBlobSVG({ className = "", color = "#82A0FF" }) {
  return (
    <svg
      viewBox="0 0 600 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M446.5 64.5C517.8 97.6 575.4 167.2 582.1 244.3C588.8 321.4 544.5 406 474.3 446.7C404.1 487.4 307.9 484.2 223.8 463.4C139.7 442.6 67.6 404.2 35.1 340.5C2.6 276.8 9.7 187.8 55.4 119.5C101.1 51.2 185.4 3.6 264.6 5.9C343.8 8.2 375.2 31.4 446.5 64.5Z"
        fill={color}
      />
    </svg>
  );
}

/**
 * Hand-drawn oval loop SVG circling a key display word.
 */
export function HandDrawnOvalSVG({ className = "", color = "#F0EBE6" }) {
  return (
    <svg
      viewBox="0 0 420 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M28 74C16 40 94 12 215 11C336 10 407 37 404 71C401 105 316 121 198 119C80 117 12 96 16 61C19 32 95 16 196 15"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Hand-drawn double underline SVG (used on .draw-btn links & italic headings).
 */
export function HandDrawnUnderlineSVG({
  className = "w-full h-3",
  color = "currentColor",
  double = true,
}) {
  return (
    <svg
      viewBox="0 0 220 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M3 8.5C58 4.2 142 3.8 217 7.8"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {double && (
        <path
          d="M11 14.5C74 11.2 152 10.5 212 13.5"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

/**
 * Hand-drawn horizontal divider arrow inside service/skill cards.
 */
export function CardArrowDividerSVG({ className = "", color = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 240 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 13C66 10 154 11 232 12.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M219 5.5C225 9 230 11.5 234 12.5C229 14.5 224 17 219 20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Curved hand-drawn doodle arrow pointing down/across sections.
 */
export function CurlyDoodleArrowSVG({ className = "", color = "#000000" }) {
  return (
    <svg
      viewBox="0 0 110 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 10C48 16 74 36 56 62C42 82 14 70 24 52C34 34 72 44 76 80C79 102 68 115 62 122"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M52 110L61 124L76 114"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Bold playful display wordmark "dekhsa" for footer & header lockup.
 */
export function DekhsaWordmark({ className = "", color = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 460 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="dekhsa"
    >
      <text
        x="230"
        y="94"
        textAnchor="middle"
        fill={color}
        style={{
          fontFamily: "var(--font-display), system-ui, sans-serif",
          fontWeight: 800,
          fontSize: "106px",
          letterSpacing: "-0.065em",
        }}
      >
        dekhsa
      </text>
    </svg>
  );
}

/**
 * Die-cut sticker badge with thick crisp border & slight tilt.
 */
export function DieCutSticker({
  children,
  bg = "#F5693C",
  text = "#000000",
  border = "#FFFFFF",
  rotate = "-6deg",
  className = "",
}) {
  return (
    <div
      className={`sticker-bob inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 font-display font-extrabold uppercase tracking-tight shadow-[0_6px_0_rgba(0,0,0,0.18)] select-none ${className}`}
      style={{
        backgroundColor: bg,
        color: text,
        border: `4px solid ${border}`,
        "--r": rotate,
        transform: `rotate(${rotate})`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Speech bubble pill tag (Truus .tag style).
 */
export function SpeechTag({
  children,
  bg = "#F0BEFA",
  text = "#000000",
  className = "",
}) {
  return (
    <span
      className={`speech-tag px-3.5 py-1.5 text-xs sm:text-sm tracking-tight z-10 ${className}`}
      style={{ backgroundColor: bg, color: text }}
    >
      {children}
    </span>
  );
}

/**
 * FontAwesome star bullet icon used in discipline cards.
 */
export function SparkleIcon({ className = "w-3.5 h-3.5", color = "currentColor" }) {
  return <FaStar className={className} style={{ color }} aria-hidden="true" />;
}
