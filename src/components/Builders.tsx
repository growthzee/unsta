"use client";

export default function Builders() {
  const brands = [
    {
      name: "MK CONST.",
      // Rendered from Reference 1: Monogram combination of initials with crane and skyscraper blocks
      logo: (
        <svg viewBox="0 0 200 80" className="w-auto h-12" fill="currentColor">
          <path d="M20 20h10v25l18-25h12L42 42l20 28H50L35 49v21H20V20z" />
          <path d="M90 20L55 65h5l30-38.5V45h5V20h-5z" />
          <circle cx="92.5" cy="20" r="2.5" />
          <path
            d="M92.5 22.5v15M90.5 37.5a2 2 0 004 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect x="70" y="48" width="6" height="22" />
          <rect x="78" y="55" width="4" height="15" />
          <rect x="100" y="45" width="12" height="25" />
          <path d="M115 20h10v20l15-20h12L134 40l20 30h-12l-16-22v22h-11V20z" />
        </svg>
      ),
    },
    {
      name: "ELEVATE DEV",
      // Rendered from Reference 3: Tower cranes scaling minimal bar charts
      logo: (
        <svg viewBox="0 0 160 80" className="w-auto h-12" fill="currentColor">
          <path d="M30 45l45-25v5l-45 25z" />
          <path d="M55 28v42h6V28z" />
          <circle cx="75" cy="20" r="2" />
          <path
            d="M75 22v10M73 32a2 2 0 004 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="40"
            y="55"
            width="8"
            height="15"
            className="text-secondary"
          />
          <rect x="65" y="38" width="10" height="32" />
          <rect
            x="80"
            y="48"
            width="8"
            height="22"
            className="text-secondary"
          />
        </svg>
      ),
    },
    {
      name: "AURA SPACES",
      // Rendered from the geometric structures pattern
      logo: (
        <svg
          viewBox="0 0 100 80"
          className="w-auto h-12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <circle
            cx="50"
            cy="45"
            r="30"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          <path
            d="M35 65V45h12v20M53 65V35h15v30"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <path d="M50 20v45" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: "LUMINA HOMES",
      // Rendered from Reference 2: Linear geometric wireframe continuous structure
      logo: (
        <svg
          viewBox="0 0 100 80"
          className="w-auto h-12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M25 45v15h25V30L25 45z" />
          <path d="M50 30l25 15v15H57" />
          <path d="M50 15v50M20 50h10M70 50h10" />
        </svg>
      ),
    },
    {
      name: "ZENITH BLDGS",
      // Compasses intersection layout frame
      logo: (
        <svg
          viewBox="0 0 100 80"
          className="w-auto h-12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M50 15L30 65h40L50 15z"
            fill="currentColor"
            fillOpacity="0.05"
          />
          <path d="M50 10v60M25 40h50" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M42 45h16v20H42z" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-8 border-y border-outline-variant/30 bg-surface overflow-hidden">
      <div className="max-w-container-max mx-auto w-full space-y-10">
        <p className="text-center font-sans text-xs font-bold text-on-surface-variant uppercase tracking-widest">
          Trusted by Visionary Builders
        </p>

        <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-x-8 gap-y-12 md:gap-x-20 transition-all duration-500 text-[#0F172A] opacity-65 md:grayscale hover:grayscale-0 hover:opacity-100">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center space-y-3 group cursor-pointer p-2 rounded-xl transition-transform duration-300 hover:scale-105 col-span-1"
            >
              {/* SVG Vector wrapper */}
              <div className="text-[#0F172A] group-hover:text-secondary transition-colors duration-300">
                {brand.logo}
              </div>

              {/* Brand Label Typography Component */}
              <span className="font-display text-xs md:text-sm font-bold tracking-wider uppercase">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
