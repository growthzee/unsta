export default function PropertyPreview() {
  const estates = [
    {
      title: "The Marina Pinnacle",
      price: "$2.5M+",
      loc: "Dubai Marina",
      tag: "Featured",
      beds: "3 Beds",
      baths: "4 Baths",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCI7QLZjIOyropfLE4iCZ_81cD-8IQv7xr17KWCbh-xFaQryqjq10zUUEv-Ob6mr4PpWy3ngo0NmObkXlJtXSWLpmWngIEvoCcfwhIM6I_LaGp7LE1aIDSFSzJDnP_sQcpTgG4YZLscUQmC7IfspuqbYTMZpamSBtfJ12g4y0S19p_5LyhlzJkGJR-giTjlHT_-OPTM0m7xpnJDnNl5uXXxIpBrNCvSvqcYoadNRIPLYl1TWxysSq8D0CUEp81_WIFlvgBTSN38rJ8",
    },
    {
      title: "Central Park Tower",
      price: "$8.2M+",
      loc: "Manhattan Central",
      tag: "Exclusive",
      beds: "4 Beds",
      baths: "5 Baths",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCI7QLZjIOyropfLE4iCZ_81cD-8IQv7xr17KWCbh-xFaQryqjq10zUUEv-Ob6mr4PpWy3ngo0NmObkXlJtXSWLpmWngIEvoCcfwhIM6I_LaGp7LE1aIDSFSzJDnP_sQcpTgG4YZLscUQmC7IfspuqbYTMZpamSBtfJ12g4y0S19p_5LyhlzJkGJR-giTjlHT_-OPTM0m7xpnJDnNl5uXXxIpBrNCvSvqcYoadNRIPLYl1TWxysSq8D0CUEp81_WIFlvgBTSN38rJ8",
    },
    {
      title: "The Azure Skyline",
      price: "$4.1M+",
      loc: "Miami Beach",
      tag: "New",
      beds: "2 Beds",
      baths: "2.5 Baths",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCI7QLZjIOyropfLE4iCZ_81cD-8IQv7xr17KWCbh-xFaQryqjq10zUUEv-Ob6mr4PpWy3ngo0NmObkXlJtXSWLpmWngIEvoCcfwhIM6I_LaGp7LE1aIDSFSzJDnP_sQcpTgG4YZLscUQmC7IfspuqbYTMZpamSBtfJ12g4y0S19p_5LyhlzJkGJR-giTjlHT_-OPTM0m7xpnJDnNl5uXXxIpBrNCvSvqcYoadNRIPLYl1TWxysSq8D0CUEp81_WIFlvgBTSN38rJ8",
    },
  ];

  return (
    <section
      className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest"
      id="properties"
    >
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 reveal-init opacity-0 translate-y-8 transition-all duration-800">
          <div>
            <h2 className="font-display text-4xl font-bold text-primary mb-4">
              Exclusive Previews
            </h2>
            <p className="font-sans text-lg text-on-surface-variant max-w-2xl">
              A glimpse into the exceptional properties awaiting our launch.
            </p>
          </div>
          <button className="mt-6 md:mt-0 bg-transparent border-2 border-primary text-primary px-6 py-2 rounded-xl hover:bg-primary hover:text-white transition-colors duration-300 font-display text-xs tracking-widest uppercase flex items-center gap-2 cursor-pointer">
            View All{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {estates.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-xs hover:-translate-y-2 transition-all duration-300 reveal-init opacity-0 translate-y-8"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={item.img}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full font-display text-[10px] md:text-[12px] uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>
                <button className="absolute top-4 right-4 w-10 h-10 glass-panel rounded-full flex items-center justify-center text-primary hover:text-secondary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-xl">
                    favorite
                  </span>
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl text-primary font-bold">
                    {item.title}
                  </h3>
                  <span className="font-display text-lg text-primary font-bold">
                    {item.price}
                  </span>
                </div>
                <p className="font-sans text-sm text-on-surface-variant flex items-center gap-1 mb-6">
                  <span className="material-symbols-outlined text-sm text-secondary">
                    location_on
                  </span>{" "}
                  {item.loc}
                </p>
                <div className="flex justify-between items-center border-t border-outline-variant pt-4">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1 font-sans text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary text-sm">
                        bed
                      </span>{" "}
                      {item.beds}
                    </span>
                    <span className="flex items-center gap-1 font-sans text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary text-sm">
                        bathtub
                      </span>{" "}
                      {item.baths}
                    </span>
                  </div>
                  <button className="text-secondary font-display text-sm uppercase tracking-wider hover:text-primary transition-colors cursor-pointer">
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
