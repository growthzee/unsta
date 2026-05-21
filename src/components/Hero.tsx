"use client";

import { useState, useRef, useEffect } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState(
    "rotateX(5deg) rotateY(-10deg) translateZ(0)",
  );
  const [isMounted, setIsMounted] = useState(true);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const rotateX = 5 - y * 20;
    const rotateY = -10 + x * 20;

    setTransformStyle(
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`,
    );
  };

  const handleMouseLeave = () => {
    setTransformStyle("rotateX(5deg) rotateY(-10deg) translateZ(0)");
  };

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
    <section className="min-h-screen relative flex items-center justify-center pt-32 pb-16 px-4 sm:px-8 mesh-bg">
      {/* Background elements */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      <div className="particles"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] z-0 opacity-50"></div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        id="hero-container"
        className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
      >
        <div className="space-y-8 flex flex-col items-start">
          {/* We replace the hard to watch fade-up class with a crisp runtime state fallback */}
          <div
            className={`inline-flex items-center space-x-2 bg-surface-container-high px-4 py-2 rounded-full border border-outline-variant/30 transform transition-all duration-1000 ease-out ${
              isMounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-secondary font-bold">✨ Launching Soon</span>
          </div>

          <h1
            className={`font-display text-5xl md:text-7xl text-primary font-bold leading-tight transform transition-all duration-1000 ease-out delay-100 ${
              isMounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Find Properties
            <br />
            That Feel Like Home
          </h1>

          <p
            className={`font-sans text-lg md:text-xl text-on-surface-variant max-w-xl transform transition-all duration-1000 ease-out delay-200 ${
              isMounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Discover premium listings, explore projects, and enquire directly
            with builders. A new standard in quiet luxury real estate.
          </p>

          <div
            className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 transform transition-all duration-1000 ease-out delay-300 ${
              isMounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div
              className="magnetic-wrap inline-block relative cursor-pointer"
              onMouseMove={handleMagnetic}
              onMouseLeave={resetMagnetic}
            >
              <button className="magnetic-btn bg-primary text-white font-sans text-base px-8 py-4 rounded-full shadow-lg flex items-center justify-center space-x-2 transition-all hover:shadow-xl will-change-transform cursor-pointer">
                <span>Join Waitlist</span>
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
            <div
              className="magnetic-wrap inline-block relative cursor-pointer"
              onMouseMove={handleMagnetic}
              onMouseLeave={resetMagnetic}
            >
              <button className="magnetic-btn bg-transparent border border-outline text-on-surface font-sans text-base px-8 py-4 rounded-full hover:bg-surface-container transition-all will-change-transform cursor-pointer">
                Explore Preview
              </button>
            </div>
          </div>
        </div>

        {/* Browser Interface Parallax Dashboard Card Container */}
        <div
          className={`relative h-[600px] hidden lg:block [perspective:1000px] transform transition-all duration-1000 ease-out delay-500 ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            style={{ transform: transformStyle }}
            className="absolute inset-0 bg-gradient-to-tr from-surface-container-highest to-surface-container-lowest rounded-3xl shadow-2xl border border-white/50 p-4 transform-gpu transition-transform duration-200 ease-out [transform-style:preserve-3d]"
          >
            <div className="w-full h-full bg-surface rounded-2xl overflow-hidden shadow-inner flex flex-col [transform-style:preserve-3d]">
              <div className="h-12 border-b border-outline-variant/20 flex items-center px-4 space-x-2">
                <div className="w-3 h-3 rounded-full bg-error-container"></div>
                <div className="w-3 h-3 rounded-full bg-secondary-container"></div>
                <div className="w-3 h-3 rounded-full bg-tertiary-container"></div>
              </div>
              <div className="p-6 flex-1 bg-surface-container-low overflow-hidden relative">
                <div className="w-full h-12 bg-white rounded-lg shadow-xs mb-6 flex items-center px-4 space-x-2 text-on-surface-variant [transform:translateZ(20px)]">
                  <span className="material-symbols-outlined">search</span>
                  <span>Search prime locations...</span>
                </div>
                <div className="grid grid-cols-2 gap-4 [transform:translateZ(40px)]">
                  <div className="bg-white p-4 rounded-xl shadow-xs h-32 flex flex-col justify-between shine-hover border border-outline-variant/20">
                    <div className="w-10 h-10 bg-surface-container rounded-lg"></div>
                    <div className="w-2/3 h-4 bg-surface-container rounded"></div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-xs h-32 flex flex-col justify-between shine-hover border border-outline-variant/20">
                    <div className="w-10 h-10 bg-surface-container rounded-lg"></div>
                    <div className="w-2/3 h-4 bg-surface-container rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
