export default function Builders() {
  const brands = [
    "NOVA ARCHITECTS",
    "ELEVATE DEV",
    "AURA SPACES",
    "LUMINA HOMES",
    "ZENITH BLDGS",
  ];

  return (
    <section className="py-16 px-4 sm:px-8 border-y border-outline-variant/20 bg-surface overflow-hidden">
      <div className="max-w-container-max mx-auto w-full space-y-8">
        <p className="text-center font-sans text-xs font-bold text-on-surface-variant uppercase tracking-widest">
          Trusted by Visionary Builders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 md:opacity-60 md:grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {brands.map((brand, idx) => (
            <span
              key={idx}
              className="font-display text-xl md:text-2xl font-bold text-[#0F172A]"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
