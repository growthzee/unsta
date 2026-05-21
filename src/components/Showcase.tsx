"use client";

export default function Showcase() {
  const cards = [
    {
      title: "Skyline Heights",
      location: "Downtown Metropolis",
      price: "$4.2M",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0Ctt9qITRWP98OnKhaqrhP8geerMYslXnYTn5kTympqyNCPCCDtWjVu31j42-scw-2MiymQnJlH9ldbnXcBA9aSpPsy6OValaWIGcpDXBW8FTgfC_4DZ43FUYnpnfRBURORgiNOTEzpmvhvTaF0fehePgn7hS49UduVZwyGoTo0oUKYtd5U9qG4davCmhwmA6KMYjf5ZgwBo-8w83JkkD085sdq-CY0zK7Zc5U2r624lIZHu9ijcV3rERvb7JNNZrfvq0-LaZN6gn",
    },
    {
      title: "Green Valley",
      location: "Serene Estates",
      price: "$2.8M",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDC0Uhhum1ZQv90finhaeV9qTAipZb8F98eXaECnEGcSHJMi5O6TTirm21RCWvdFG7fe-EKJO575liz5ejWm3wOEh0UKgDkST8lKrM5s3s5soYAuR1bzD-Ykth6t12cpew8p8XInLvV0rwcF9nWbunjqrJTSoOQWMzhAQt_ZAiT-fYbCiYlW4sTdlShF_lpBwAZECRjYv_lE-pwtCRt281N8XOD3H3dZSUStO7HH9Phpf6izPXnZVDZwIsHJOBluj6dOYnIS1heGoLG",
    },
    {
      title: "Urban Crown",
      location: "City Center",
      price: "$5.5M",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0_z0RcL-0yNiIkxXWtqTlSkqaGzx7g_TXFodvgDcgh9f4IM0-tHN5zrV_NGirC2e6te0mqpyKRry6PO_VdKE1Bv9EZZUtpOtfkKuyQf9rDUEN_4PgA9DxPovRsdTqzFHlh9qIBR3T41woOc89zDTp8xRV9EA5G9j_veJXCTgtyy2hpYpJYQlUj6p7Tlk6E3qtpV8pLmV7Huo1vUleAFeTCM8EXJiH6FkrthnI8kur9iWexOSdeb5rkr1w_ndzi7UV-DNceIZXaYG-",
    },
  ];

  const handleCardTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const resetCardTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <section className="py-24 px-4 sm:px-8 bg-surface" id="preview">
      <div className="max-w-container-max mx-auto w-full space-y-12">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="font-display text-4xl font-bold text-[#0F172A]">
            Exclusive Residences
          </h2>
          <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl">
            Curated properties representing the pinnacle of architectural
            excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              onMouseMove={handleCardTilt}
              onMouseLeave={resetCardTilt}
              className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 border border-outline-variant/30 will-change-transform [transform-style:preserve-3d]"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={card.img}
                />
              </div>
              <div className="p-6 space-y-4 relative bg-surface-container-lowest z-10">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#0F172A]">
                      {card.title}
                    </h3>
                    <p className="font-sans text-sm text-on-surface-variant">
                      {card.location}
                    </p>
                  </div>
                  <span className="font-display text-xl font-bold text-[#0F172A]">
                    {card.price}
                  </span>
                </div>
                <button className="w-full py-3 px-4 border border-outline rounded-full font-sans text-sm font-semibold text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-colors flex items-center justify-center space-x-2 cursor-pointer">
                  <span>View Details</span>
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
