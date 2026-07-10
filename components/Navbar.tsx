"use client";
import { useState } from "react";
import Link from "next/link";

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

  const secondLinks = [
    { name: lang === "ml" ? "ഹോം" : "Home", path: "", icon: "🏠" },
    { name: lang === "ml" ? "വാർത്ത" : "News", path: "/news", icon: "📰" },
    { name: lang === "ml" ? "ഇവന്റ്" : "Events", path: "/events", icon: "📅" },
  ];

  return (
    <>
      <header style={{ background: "#0f2a45", position: "sticky", top: 0, zIndex: 50 }} className="shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14 gap-4">
          <Link href={"/" + lang} className="flex items-center gap-2 shrink-0">
            <div style={{ background: "#f97316" }} className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm">
              W
            </div>
            <div className="leading-none">
              <span className="text-white font-light text-lg">Wayanad </span>
              <span style={{ color: "#f97316" }} className="font-black text-lg">LIVING</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {topLinks.map((item) => (
              <Link key={item.path} href={"/" + lang + "/" + item.path}
                className="text-white text-sm font-medium hover:text-orange-400 transition-colors">
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <Link href={"/" + lang + "/post-ad"} style={{ background: "#f97316" }}
              className="hidden md:flex items-center gap-1 text-white text-sm font-bold px-4 py-2 rounded-md hover:opacity-90 transition">
              + Post Ad
            </Link>
            <div className="flex rounded-full overflow-hidden border text-xs" style={{ borderColor: "#2a4a6a" }}>
              <Link href="/en" className="px-2.5 py-1 font-semibold transition"
                style={lang === "en" ? { background: "#f97316", color: "white" } : { color: "#93b4cc" }}>
                EN
              </Link>
              <Link href="/ml" className="px-2.5 py-1 font-semibold transition"
                style={lang === "ml" ? { background: "#f97316", color: "white" } : { color: "#93b4cc" }}>
                ML
              </Link>
            </div>
            <button className="w-8 h-8 rounded-full flex items-center justify-center border transition"
              style={{ borderColor: "#2a4a6a", color: "#93b4cc" }}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </button>
            <button className="md:hidden" style={{ color: "#93b4cc" }} onClick={() => setMenuOpen(!menuOpen)}>
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div style={{ background: "#0a1f33", borderTop: "1px solid #1e3a55" }} className="md:hidden px-4 py-4 flex flex-col gap-3">
            {topLinks.map((item) => (
              <Link key={item.path} href={"/" + lang + "/" + item.path}
                className="text-blue-200 text-sm font-medium py-1" onClick={() => setMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
            <Link href={"/" + lang + "/post-ad"} style={{ background: "#f97316" }}
              className="text-white text-sm font-bold px-4 py-2 rounded-md text-center mt-2" onClick={() => setMenuOpen(false)}>
              + Post Ad
            </Link>
          </div>
        )}
      </header>

      <div className="bg-white shadow-sm" style={{ borderBottom: "1px solid #e5e7eb" }}>
        <div className="flex justify-center">
          {secondLinks.map((item) => (
            <Link key={item.name} href={"/" + lang + item.path}
              className="flex flex-col items-center gap-0.5 px-10 py-2 text-xs font-medium text-gray-500 hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 transition-all">
              <span className="text-xl">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
