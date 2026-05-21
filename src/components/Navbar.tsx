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
        className={`rounded-full mx-auto max-w-fit px-4 py-2 flex items-center justify-between transition-all duration-500 ease-out pointer-events-auto ${
          isScrolled
            ? "bg-white/60 backdrop-blur-3xl border border-white/40 shadow-xl"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* UNA ESTATE GROUP - Inline SVG Vector Logo Container */}
        <a
          href="#"
          className="flex flex-col items-center pl-2 pr-6 group"
          aria-label="UNA Estate Home"
        >
          <svg
            viewBox="0 0 450 140"
            className="h-7 w-auto transition-colors duration-300 fill-[#0F172A] group-hover:fill-secondary"
          >
            {/* Letter U */}
            <path d="M11.6 20h23.3v58.2c0 14.4 10.9 23.3 25.1 23.3s25.1-8.9 25.1-23.3V20H108.4v59.6c0 28.3-20.7 45.4-48.4 45.4S11.6 107.9 11.6 79.6V20z" />
            {/* Letter N */}
            <path d="M130.4 20h24.8l50.8 68.3V20h23.3v102.5h-23.3L153.7 51.5v71H130.4V20z" />
            {/* Letter A with Silhouette Negative Space Construction Shapes */}
            <path
              d="M285.3 20h25.4l51.5 102.5h-25.9l-11.4-24.8H271l-11.2 24.8h-25.9L285.3 20zm12.3 25.6l-18.1 39.5h36.1L297.6 45.6z"
              className="hidden"
            />{" "}
            {/* Structural calculation anchor */}
            <path d="M298 20L245 122.5h20.5l14-31.5h11.5V72h5v-18h14v19h5V91H328l13.5 31.5H362L309.5 20H298z" />
          </svg>
          <span className="font-display text-[8px] tracking-[0.38em] uppercase font-bold text-[#0F172A] mt-0.5 opacity-90 transition-colors duration-300 group-hover:text-secondary">
            ESTATE GROUP
          </span>
        </a>

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
