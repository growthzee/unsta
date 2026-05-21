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
              {/* Window Controls chrome */}
              <div className="h-12 border-b border-outline-variant/20 flex items-center justify-between px-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-error-container"></div>
                  <div className="w-3 h-3 rounded-full bg-secondary-container"></div>
                  <div className="w-3 h-3 rounded-full bg-tertiary-container"></div>
                </div>
                <div className="font-sans text-[11px] font-medium tracking-wider text-on-surface-variant bg-white border border-outline-variant/30 px-3 py-0.5 rounded-full">
                  app.unsta.com/dashboard
                </div>
                <div className="w-12"></div>
              </div>

              <div className="p-6 flex-1 bg-surface-container-low overflow-hidden relative flex flex-col gap-4">
                {/* Clean Dynamic Search Module */}
                <div className="w-full h-12 bg-white rounded-lg shadow-xs flex items-center justify-between px-4 text-on-surface-variant [transform:translateZ(20px)] border border-outline-variant/10">
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="material-symbols-outlined text-secondary text-lg">
                      search
                    </span>
                    <span className="font-medium text-primary">
                      Dubai Marina, AE
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-lg opacity-60">
                    tune
                  </span>
                </div>

                {/* Main Content Layout Grid */}
                <div className="grid grid-cols-12 gap-4 flex-1 items-stretch">
                  {/* Left Data Column (Spans 5 blocks) */}
                  <div className="col-span-5 flex flex-col gap-4 [transform:translateZ(40px)]">
                    {/* Module A: Interactive Map Preview block */}
                    <div className="bg-white rounded-xl shadow-xs flex-1 flex flex-col overflow-hidden border border-outline-variant/20 relative group">
                      <div className="absolute inset-0 bg-sky-100 opacity-40 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                      {/* Pulse beacon indicators representing live properties */}
                      <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-secondary rounded-full ring-4 ring-secondary/30 animate-pulse"></div>
                      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-secondary rounded-full ring-4 ring-secondary/30"></div>

                      <div className="p-3 relative z-10 mt-auto bg-white/90 backdrop-blur-md border-t border-outline-variant/10 flex justify-between items-center">
                        <span className="font-display text-[11px] font-bold text-primary">
                          Map View Matrix
                        </span>
                        <span className="material-symbols-outlined text-sm text-secondary">
                          explore
                        </span>
                      </div>
                    </div>

                    {/* Module B: Exclusive Market Index */}
                    <div className="bg-[#0F172A] text-white p-4 rounded-xl shadow-xs h-32 flex flex-col justify-between border border-white/5">
                      <div className="flex justify-between items-start">
                        <span className="font-sans text-[10px] uppercase tracking-widest text-white/60">
                          Market Volume
                        </span>
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-bold px-1.5 py-0.5 rounded">
                          +12.4%
                        </span>
                      </div>
                      <div>
                        <p className="font-display text-2xl font-bold tracking-tight">
                          $42.8B
                        </p>
                        <p className="font-sans text-[10px] text-white/40">
                          Aggregated Premium Cap
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Showcase Column (Spans 7 blocks) */}
                  <div className="col-span-7 relative overflow-hidden rounded-xl shadow-md border border-outline-variant/30 group [transform:translateZ(30px)] h-full">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI7QLZjIOyropfLE4iCZ_81cD-8IQv7xr17KWCbh-xFaQryqjq10zUUEv-Ob6mr4PpWy3ngo0NmObkXlJtXSWLpmWngIEvoCcfwhIM6I_LaGp7LE1aIDSFSzJDnP_sQcpTgG4YZLscUQmC7IfspuqbYTMZpamSBtfJ12g4y0S19p_5LyhlzJkGJR-giTjlHT_-OPTM0m7xpnJDnNl5uXXxIpBrNCvSvqcYoadNRIPLYl1TWxysSq8D0CUEp81_WIFlvgBTSN38rJ8"
                      alt="Luxury penthouse interior showcase"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>

                    {/* Premium Detail Card Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white space-y-2">
                      <div className="flex justify-between items-end">
                        <div>
                          <span className="bg-secondary text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full">
                            Featured Listing
                          </span>
                          <p className="font-display text-base font-semibold tracking-tight mt-1">
                            The Marina Pinnacle
                          </p>
                        </div>
                        <p className="font-display text-sm font-bold text-secondary-container">
                          $2.5M+
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-white/70 pt-2 border-t border-white/10">
                        <div className="flex space-x-3">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[12px] text-secondary-container">
                              bed
                            </span>{" "}
                            3 Beds
                          </span>
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[12px] text-secondary-container">
                              bathtub
                            </span>{" "}
                            4 Baths
                          </span>
                        </div>
                        <span className="opacity-90 font-medium">
                          Dubai Marina, AE
                        </span>
                      </div>
                    </div>
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
