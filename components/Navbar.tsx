"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ lang = "en" }: { lang: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const topLinks = [
    { name: "Hotels", path: "hotels" },
    { name: "Real Estate", path: "real-estate" },
    { name: "Vehicles", path: "vehicles" },
    { name: "Services", path: "services" },
    { name: "Jobs", path: "jobs" },
    { name: "Deals", path: "deals" },
  ];

  return (
    <>
      {/* TOP BAR */}
      <header style={{ background: "#0f2a45" }} className="sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center gap-2 shrink-0">
            <div style={{ background: "#f97316" }} className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              W
            </div>
            <span className="text-white font-medium text-lg leading-none">
              Wayanad{" "}
              <span style={{ color: "#f97316" }} className="font-bold">
                LIV<em className="not-italic">IN</em>G
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5">
            {topLinks.map((item) => (
              <Link
                key={item.path}
                href={`/${lang}/${item.path}`}
                className="text-blue-200 hover:text-white text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={`/${lang}/post-ad`}
              style={{ background: "#f97316" }}
              className="flex items-center gap-1 text-white text-sm font-semibold px-4 py-1.5 rounded-md hover:opacity-90 transition"
            >
              + Post Ad
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="flex rounded-md overflow-hidden border border-blue-700 text-xs">
              <Link
                href="/en"
                className={`px-2.5 py-1 font-medium transition ${
                  lang === "en"
                    ? "bg-orange-500 text-white"
                    : "text-blue-300 hover:text-white"
                }`}
              >
                EN
              </Link>
              <Link
                href="/ml"
                className={`px-2.5 py-1 font-medium transition ${
                  lang === "ml"
                    ? "bg-orange-500 text-white"
                    : "text-blue-300 hover:text-white"
                }`}
              >
                ML
              </Link>
            </div>
            {/* Profile icon */}
            <button className="w-8 h-8 rounded-full border border-blue-600 flex items-center justify-center text-blue-300 hover:text-white hover:border-blue-400 transition">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </button>
            {/* Mobile menu button */}
            <button
              className="md:hidden text-blue-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: "#0f2a45" }} className="md:hidden border-t border-blue-800 px-4 py-3 flex flex-col gap-3">
            {topLinks.map((item) => (
              <Link
                key={item.path}
                href={`/${lang}/${item.path}`}
                className="text-blue-200 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* SECOND BAR - Home / News / Events */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="flex justify-center">
          {[
            { name: lang === "ml" ? "ഹോം" : "Home", path: "", icon: "🏠" },
            { name: lang === "ml" ? "വാർത്ത" : "News", path: "/news", icon: "📰" },
            { name: lang === "ml" ? "ഇവന്റ്" : "Events", path: "/events", icon: "📅" },
          ].map((item) => (
            <Link
              key={item.name}
              href={`/${lang}${item.path}`}
              className="flex flex-col items-center gap-0.5 px-8 py-2.5 text-xs font-medium text-gray-500 hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 transition-all"
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
