import Link from "next/link";

export default function Footer({ lang = "en" }: { lang: string }) {
  return (
    <footer style={{ background: "#0f2a45" }} className="text-blue-200 mt-8">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div style={{ background: "#f97316" }} className="w-7 h-7 rounded-md flex items-center justify-center text-white font-bold text-xs">W</div>
            <span className="text-white font-semibold">Wayanad Living</span>
          </div>
          <p className="text-sm text-blue-300 leading-relaxed">Your complete guide to life in Wayanad — Kerala's green paradise.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">Explore</h4>
          <ul className="space-y-2 text-sm">
            {["Hotels", "Real Estate", "Vehicles", "Jobs", "Deals"].map((item) => (
              <li key={item}>
                <Link href={`/${lang}/${item.toLowerCase().replace(" ", "-")}`} className="hover:text-white transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">Company</h4>
          <ul className="space-y-2 text-sm">
            {["About Us", "Contact", "Advertise", "Privacy Policy"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-white transition">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>📧 hello@wayanadliving.in</li>
            <li>📞 +91 94470 XXXXX</li>
            <li>📍 Kalpetta, Wayanad, Kerala</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-blue-800 py-4 text-center text-xs text-blue-400">
        © 2026 Wayanad Living. All rights reserved.
      </div>
    </footer>
  );
}
