export default function FollowUs({ lang = "en" }: { lang: string }) {
  const isML = lang === "ml";

  const socials = [
    { name: "Facebook", color: "#1877f2", href: "https://facebook.com", icon: "f" },
    { name: "X", color: "#000000", href: "https://x.com", icon: "x" },
    { name: "Instagram", color: "#e1306c", href: "https://instagram.com", icon: "in" },
    { name: "YouTube", color: "#ff0000", href: "https://youtube.com", icon: "yt" },
    { name: "WhatsApp", color: "#25d366", href: "https://whatsapp.com", icon: "wa" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-4">
      <div
        className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ border: "2px solid #f97316", background: "white" }}
      >
        {/* Left text */}
        <div className="flex-1">
          <h2
            style={{ color: "#0f2a45" }}
            className="text-xl md:text-2xl font-bold mb-2"
          >
            {isML ? "ഞങ്ങളെ ഫോളോ ചെയ്യുന്നുണ്ടോ?" : "Are you Following us?"}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-sm">
            {isML
              ? "ഏറ്റവും പുതിയ അപ്ഡേറ്റുകൾക്കും വയനാട് ലിവിംഗ് വാർത്തകൾക്കുമായി ഞങ്ങളുടെ സോഷ്യൽ മീഡിയ പേജുകൾ ഫോളോ ചെയ്യൂ."
              : "Stay tuned with Wayanad Living on social media for the latest updates, featured content, local events, and valuable insights about Wayanad."}
          </p>
          <div className="flex items-center gap-3 flex-wrap">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.name}
                style={{ background: s.color }}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold hover:scale-110 transition-transform"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right - phone mockup */}
        <div
          style={{ background: "#f0f7ff", borderRadius: "16px", width: "180px", height: "140px" }}
          className="hidden md:flex items-center justify-center shrink-0"
        >
          <div className="text-center">
            <div className="text-4xl mb-2">📱</div>
            <p style={{ color: "#0f2a45" }} className="text-xs font-semibold">Wayanad Living</p>
            <p className="text-xs text-gray-400">@wayanadliving</p>
          </div>
        </div>
      </div>
    </section>
  );
}
