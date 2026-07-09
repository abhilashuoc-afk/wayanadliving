export default function AdBanner({ lang = "en" }: { lang: string }) {
  const isML = lang === "ml";

  return (
    <section className="max-w-7xl mx-auto px-4 py-4">
      <a href={"/" + lang + "/real-estate"}>
        <div
          className="rounded-xl overflow-hidden flex items-stretch cursor-pointer hover:opacity-95 transition"
          style={{ minHeight: "100px" }}
        >
          {/* Left - image side */}
          <div
            style={{ background: "#e8f4e8", width: "280px", minHeight: "100px" }}
            className="hidden md:flex items-center justify-center shrink-0 relative overflow-hidden"
          >
            <div className="text-6xl">🏡</div>
            <div
              className="absolute inset-0 opacity-20"
              style={{ background: "linear-gradient(135deg, #2d6a4f, #40916c)" }}
            />
          </div>

          {/* Center - price */}
          <div
            style={{ background: "#ffffff", borderTop: "3px solid #f97316", borderBottom: "3px solid #f97316" }}
            className="flex flex-col items-center justify-center px-8 shrink-0"
          >
            <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
              {isML ? "മുതൽ" : "FROM"}
            </p>
            <p style={{ color: "#f97316" }} className="text-3xl font-black leading-none">
              Rs. 15L
            </p>
            <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
              {isML ? "ഓൺവേഡ്സ്" : "ONWARDS"}
            </p>
          </div>

          {/* Right - text */}
          <div
            style={{ background: "#0f2a45" }}
            className="flex-1 flex flex-col justify-center px-8 py-6"
          >
            <h3 className="text-white text-xl md:text-2xl font-black uppercase leading-tight mb-1">
              {isML ? "വയനാട്ടിൽ നിങ്ങളുടെ സ്വപ്ന ഭവനം" : "FIND YOUR DREAM HOME IN WAYANAD"}
            </h3>
            <p className="text-blue-300 text-sm mb-4">
              {isML ? "ലക്ഷ്വറി ലിവിംഗ് ഗ്രീൻ പറുദീസയിൽ" : "WHERE LUXURY LIVING MEETS GREEN PARADISE"}
            </p>
            <div className="inline-flex">
              <span
                style={{ background: "#f97316" }}
                className="text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-wide"
              >
                {isML ? "പ്രോപ്പർട്ടി ലിസ്റ്റിംഗ് കാണൂ" : "BROWSE WAYANAD PROPERTIES"}
              </span>
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}
