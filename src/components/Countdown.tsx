"use client";

import { useState, useEffect } from "react";

export default function Countdown({ targetDays = 14 }) {
  const [timeLeft, setTimeLeft] = useState({
    days: targetDays,
    hours: 8,
    minutes: 45,
    seconds: 22,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0)
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUnit = (num: number) => String(num).padStart(2, "0");

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto text-center reveal-init opacity-0 translate-y-8 transition-all duration-800">
        <h2 className="font-display text-4xl font-bold text-primary mb-12">
          Launching Soon
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Mins", value: timeLeft.minutes },
            { label: "Secs", value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-panel border border-outline-variant shadow-xs rounded-2xl p-6 md:p-8 w-24 md:w-36 flex flex-col items-center justify-center transform hover:-translate-y-2 transition-transform duration-300"
            >
              <span className="font-display text-3xl md:text-5xl text-primary font-bold">
                {formatUnit(item.value)}
              </span>
              <span className="font-display text-xs md:text-sm text-on-surface-variant uppercase tracking-widest mt-2">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
