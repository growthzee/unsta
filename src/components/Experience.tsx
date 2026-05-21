export default function Experience() {
  const steps = [
    {
      icon: "tune",
      label: "1. Discover",
      desc: "Utilize our smart filters to find properties that perfectly match your lifestyle and aesthetic preferences.",
    },
    {
      icon: "handshake",
      label: "2. Connect",
      desc: "Gain direct access to builders and developers for seamless communication and exclusive insights.",
    },
    {
      icon: "verified_user",
      label: "3. Secure",
      desc: "Finalize your investment with confidence through our verified documentation process.",
    },
  ];

  return (
    <section
      className="py-24 px-4 sm:px-8 bg-surface-container-low"
      id="features"
    >
      <div className="max-w-container-max mx-auto w-full space-y-16">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="font-display text-4xl font-bold text-[#0F172A]">
            The LUXE Experience
          </h2>
          <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl">
            A refined journey from discovery to acquisition.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-xs hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-[#0F172A] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-white">
                  {step.icon}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#0F172A] mb-2">
                {step.label}
              </h3>
              <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
