"use client";

import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMagnetic = (e: React.MouseEvent<HTMLDivElement>) => {
    const wrap = e.currentTarget;
    const btn = wrap.querySelector(".magnetic-btn") as HTMLElement;
    if (!btn) return;

    const rect = wrap.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.02)`;
  };

  const resetMagnetic = (e: React.MouseEvent<HTMLDivElement>) => {
    const btn = e.currentTarget.querySelector(".magnetic-btn") as HTMLElement;
    if (btn) btn.style.transform = "translate(0px, 0px) scale(1)";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 pointer-events-none">
      <div
        id="main-nav"
        className={`rounded-full mx-auto max-w-fit px-2 py-2 flex items-center justify-between transition-all duration-500 ease-out pointer-events-auto ${
          isScrolled
            ? "bg-white/60 backdrop-blur-3xl border border-white/40 shadow-xl"
            : "bg-transparent border border-transparent"
        }`}
      >
        <div className="px-4 font-display text-2xl tracking-tighter text-primary font-medium">
          UNSTA
        </div>
        <div className="hidden md:flex items-center space-x-6 px-4">
          <a
            className="font-sans text-sm font-semibold text-primary border-b-2 border-primary pb-1"
            href="#features"
          >
            Features
          </a>
          <a
            className="font-sans text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
            href="#preview"
          >
            Preview
          </a>
          <a
            className="font-sans text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
            href="#launch"
          >
            Launch
          </a>
          <a
            className="font-sans text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <div
          className="pl-4 pr-2 inline-block relative cursor-pointer"
          onMouseMove={handleMagnetic}
          onMouseLeave={resetMagnetic}
        >
          <button
            ref={navRef}
            className="magnetic-btn bg-primary text-white font-sans text-sm px-6 py-2 rounded-full hover:shadow-xl transition-all duration-300 will-change-transform"
          >
            Get Early Access
          </button>
        </div>
      </div>
    </nav>
  );
}
