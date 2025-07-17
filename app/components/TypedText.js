"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedText({ strings, className }) {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1200,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
    return () => {
      typed.current.destroy();
    };
  }, [strings]);

  return <span ref={el} className={className} />;
}
