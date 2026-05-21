export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant py-16 flex flex-col items-center justify-center gap-6 w-full px-8">
      {/* UNA ESTATE GROUP - Footer Vector Brand Element */}
      <div className="flex flex-col items-center group cursor-pointer mb-2">
        <svg
          viewBox="0 0 450 140"
          className="h-8 w-auto fill-[#0F172A] transition-colors duration-300 group-hover:fill-secondary"
        >
          {/* Letter U */}
          <path d="M11.6 20h23.3v58.2c0 14.4 10.9 23.3 25.1 23.3s25.1-8.9 25.1-23.3V20H108.4v59.6c0 28.3-20.7 45.4-48.4 45.4S11.6 107.9 11.6 79.6V20z" />
          {/* Letter N */}
          <path d="M130.4 20h24.8l50.8 68.3V20h23.3v102.5h-23.3L153.7 51.5v71H130.4V20z" />
          {/* Letter A & Skylines Structure mapping */}
          <path d="M298 20L245 122.5h20.5l14-31.5h11.5V72h5v-18h14v19h5V91H328l13.5 31.5H362L309.5 20H298z" />
        </svg>
        <span className="font-display text-[9px] tracking-[0.42em] uppercase font-bold text-[#0F172A] mt-1 transition-colors duration-300 group-hover:text-secondary">
          ESTATE GROUP
        </span>
      </div>

      <div className="flex space-x-8">
        {["Product", "Company", "Privacy", "Terms"].map((link, idx) => (
          <a
            key={idx}
            className="font-sans text-xs font-medium text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="font-sans text-xs text-on-surface-variant mt-2">
        © 2026 UNA ESTATE GROUP. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
