"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState("");
  const [variant, setVariant] = useState("default");

  useEffect(() => {
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) return;

    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);

      const target = e.target?.closest?.("[data-cursor], a, button");
      if (target) {
        const customLabel = target.getAttribute("data-cursor");
        if (customLabel) {
          setLabel(customLabel);
          setVariant("pill");
        } else {
          setLabel("");
          setVariant("pointer");
        }
      } else {
        setLabel("");
        setVariant("default");
      }
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
      aria-hidden="true"
    >
      {variant === "pill" && label ? (
        <div className="relative">
          <div className="-translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-black border-2 border-[#E6FAB9]" />
          <div className="translate-x-3 translate-y-2 bg-[#E6FAB9] text-black border-2 border-black font-display font-extrabold text-[11px] uppercase tracking-wide px-3 py-1 rounded-full shadow-[3px_3px_0_#000] whitespace-nowrap">
            {label}
          </div>
        </div>
      ) : variant === "pointer" ? (
        <div className="-translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#F5693C]/90 border-2 border-white shadow-md scale-110 transition-all duration-150" />
      ) : (
        <div className="-translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#4B69F0] border-2 border-[#F0EBE6] shadow-sm transition-all duration-150" />
      )}
    </div>
  );
}
