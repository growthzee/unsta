export default function Features() {
  const items = [
    {
      icon: "verified",
      title: "Verified Listings",
      desc: "Every property is rigorously checked for authenticity and quality assurance.",
    },
    {
      icon: "search",
      title: "Smart Search",
      desc: "Intelligent filters to match you with exactly what you are looking for.",
    },
    {
      icon: "domain",
      title: "Building Details",
      desc: "Comprehensive insights into amenities, history, and architectural significance.",
    },
    {
      icon: "forum",
      title: "Builder Enquiry",
      desc: "Direct communication channels with premier real estate developers.",
    },
    {
      icon: "compare_arrows",
      title: "Comparison",
      desc: "Side-by-side analysis of properties to make informed investment decisions.",
    },
    {
      icon: "bookmark",
      title: "Saved Properties",
      desc: "Curate your personal collection of favored luxury estates.",
    },
  ];

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-[#fcf8fa]">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16 reveal-init opacity-0 translate-y-8 transition-all duration-800">
          <h2 className="font-display text-4xl font-bold text-primary mb-4">
            Curated Excellence
          </h2>
          <p className="font-sans text-lg text-on-surface-variant max-w-2xl mx-auto">
            Discover the features designed to elevate your property search
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {items.map((feat, i) => (
            <div
              key={i}
              className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-8 shadow-xs hover:-translate-y-2 transition-all duration-300 reveal-init opacity-0 translate-y-8"
            >
              <div className="w-12 h-12 bg-[#2563EB]/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary">
                  {feat.icon}
                </span>
              </div>
              <h3 className="font-display text-xl text-primary font-bold mb-3">
                {feat.title}
              </h3>
              <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
