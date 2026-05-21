export default function Stats() {
  const metrics = [
    { value: "5000+", label: "Listings" },
    { value: "100+", label: "Builders" },
    { value: "25+", label: "Cities" },
    { value: "50K+", label: "Visitors" },
  ];

  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop bg-primary text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="max-w-container-max mx-auto relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center reveal-init opacity-0 translate-y-8 transition-all duration-800">
        {metrics.map((stat, idx) => (
          <div key={idx}>
            <h4 className="font-display text-4xl md:text-5xl font-bold mb-2">
              {stat.value}
            </h4>
            <p className="font-display text-xs md:text-sm uppercase tracking-widest text-white/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
