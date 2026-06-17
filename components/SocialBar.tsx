export default function SocialBar() {
  const socials = [
    { name: "Facebook", icon: "f", color: "#1877f2", href: "#" },
    { name: "Instagram", icon: "ig", color: "#e1306c", href: "#" },
    { name: "YouTube", icon: "yt", color: "#ff0000", href: "#" },
    { name: "WhatsApp", icon: "wa", color: "#25d366", href: "#" },
    { name: "X", icon: "x", color: "#000", href: "#" },
  ];

  return (
    <div className="bg-white border-y border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-4">
        <span className="text-sm text-gray-500 font-medium">Follow us on</span>
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              title={s.name}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold hover:scale-110 transition-transform"
              style={{ background: s.color }}
            >
              {s.icon}
            </a>
          ))}
        </div>
        {/* Weather widget */}
        <div className="ml-auto flex items-center gap-2 text-sm text-gray-500">
          <span className="text-lg">🌤️</span>
          <div>
            <p className="font-medium text-gray-700 text-xs">Kalpetta, Wayanad</p>
            <p className="text-xs">24°C · Partly Cloudy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
