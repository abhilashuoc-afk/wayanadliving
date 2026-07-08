"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1400&q=80",
    accent: "#f97316",
    tag: "WAYANAD TOURISM 2026",
    title: "Explore the Green Paradise",
    sub: "Resorts - Treks - Wildlife - Waterfalls",
    cta: "Explore Now",
    ctaPath: "/hotels",
  },
  {
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1400&q=80",
    accent: "#22c55e",
    tag: "MONSOON SPECIAL DEALS",
    title: "Best Resorts at Best Prices",
    sub: "Book your monsoon getaway in Wayanad",
    cta: "View Deals",
    ctaPath: "/deals",
  },
  {
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1400&q=80",
    accent: "#a855f7",
    tag: "REAL ESTATE IN WAYANAD",
    title: "Find Your Dream Home",
    sub: "Plots - Villas - Farm Land - Commercial",
    cta: "Browse Now",
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
    <div className="bg-white py-3 px-4">
      <div className="max-w-7xl mx-auto relative">
        <div className="relative overflow-hidden rounded-lg" style={{ height: "160px" }}>
          <div style={{
            backgroundImage: "url(" + slide.img + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            inset: 0,
          }} />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(15,42,69,0.92) 0%, rgba(15,42,69,0.7) 60%, rgba(15,42,69,0.2) 100%)",
          }} />
          <div className="relative h-full flex items-center px-8">
            <div>
              <p style={{ color: slide.accent }} className="text-xs font-bold tracking-widest uppercase mb-1">
                {slide.tag}
              </p>
              <h2 className="text-white text-xl md:text-2xl font-bold mb-1 leading-tight">
                {slide.title}
              </h2>
              <p className="text-blue-200 text-xs mb-3">{slide.sub}</p>
              <a href={"/" + lang + slide.ctaPath} style={{ background: slide.accent }}
                className="inline-block text-white text-xs font-bold px-5 py-2 rounded-full">
                {slide.cta}
              </a>
            </div>
          </div>
          <button onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-white"
            style={{ background: "rgba(0,0,0,0.3)" }}>
            {"<"}
          </button>
          <button onClick={() => setCurrent((c) => (c + 1) % slides.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-white"
            style={{ background: "rgba(0,0,0,0.3)" }}>
            {">"}
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {slides.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                style={{ background: i === current ? slide.accent : "rgba(255,255,255,0.5)", width: i === current ? "16px" : "6px", height: "6px" }}
                className="rounded-full transition-all duration-300" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

