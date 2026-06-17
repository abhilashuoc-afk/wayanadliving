"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    bg: "#0f2a45",
    accent: "#f97316",
    tag: "WAYANAD TOURISM 2026",
    title: "Explore the Green Paradise",
    sub: "Resorts · Treks · Wildlife · Waterfalls",
    cta: "Explore Stays",
    ctaPath: "/hotels",
  },
  {
    bg: "#1a3a2a",
    accent: "#22c55e",
    tag: "MONSOON SPECIAL DEALS",
    title: "Best Resorts at Best Prices",
    sub: "Book your monsoon getaway in Wayanad",
    cta: "View Deals",
    ctaPath: "/deals",
  },
  {
    bg: "#2d1a45",
    accent: "#a855f7",
    tag: "REAL ESTATE IN WAYANAD",
    title: "Find Your Dream Home",
    sub: "Plots · Villas · Farm Land · Commercial",
    cta: "Browse Properties",
    ctaPath: "/real-estate",
  },
];

export default function BannerSlider({ lang = "en" }: { lang: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <div
      style={{ background: slide.bg, transition: "background 0.6s ease" }}
      className="relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6 min-h-40">
        {/* Text */}
        <div className="text-center md:text-left">
          <p
            style={{ color: slide.accent }}
            className="text-xs font-bold tracking-widest uppercase mb-2"
          >
            🌿 {slide.tag}
          </p>
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-2 leading-tight">
            {slide.title}
          </h2>
          <p className="text-blue-200 text-sm mb-5">{slide.sub}</p>
          <div className="flex gap-3 justify-center md:justify-start">
            <a
              href={`/${lang}${slide.ctaPath}`}
              style={{ background: slide.accent }}
              className="text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition"
            >
              {slide.cta}
            </a>
            <a
              href={`/${lang}/post-ad`}
              className="border border-blue-400 text-blue-200 text-sm px-6 py-2.5 rounded-full hover:bg-white/10 transition"
            >
              Post Free Ad
            </a>
          </div>
        </div>

        {/* Decorative */}
        <div className="hidden md:flex items-center justify-center w-48 h-32 rounded-2xl bg-white/5 border border-white/10 text-6xl">
          {["🌿", "🏡", "🏘️"][current]}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{ background: i === current ? slide.accent : "rgba(255,255,255,0.3)" }}
            className="w-2 h-2 rounded-full transition-all"
          />
        ))}
      </div>
    </div>
  );
}
