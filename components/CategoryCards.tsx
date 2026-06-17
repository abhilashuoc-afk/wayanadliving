import Link from "next/link";

const categories = [
  { name: "Hotels", desc: "Resorts & stays", icon: "🏨", path: "hotels" },
  { name: "Real Estate", desc: "Buy & rent", icon: "🏡", path: "real-estate" },
  { name: "Vehicles", desc: "Cars & bikes", icon: "🚗", path: "vehicles" },
  { name: "Classifieds", desc: "Buy & sell anything", icon: "🛍️", path: "classifieds" },
  { name: "Jobs", desc: "Explore open roles", icon: "💼", path: "jobs" },
  { name: "Deals", desc: "Save on lifestyle", icon: "🏷️", path: "deals", isNew: true },
];

export default function CategoryCards({ lang = "en" }: { lang: string }) {
  return (
    <section className="py-6 px-4 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex items-center gap-2 mb-1">
        <span style={{ color: "#f97316" }} className="text-sm">⚙️</span>
        <span style={{ color: "#f97316" }} className="text-xs font-semibold uppercase tracking-wider">Explore</span>
      </div>
      <h2 className="text-xl font-semibold text-gray-800 border-l-4 border-orange-500 pl-3 mb-5">
        Find What You Need
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {categories.map((cat) => (
          <Link
            key={cat.path}
            href={`/${lang}/${cat.path}`}
            style={{ background: "#1a3a5c" }}
            className="relative rounded-xl p-4 flex flex-col gap-3 hover:brightness-110 transition-all group"
          >
            {cat.isNew && (
              <span
                style={{ background: "#f97316" }}
                className="absolute top-2 right-2 text-white text-xs font-bold px-1.5 py-0.5 rounded"
              >
                New
              </span>
            )}
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xl">
              {cat.icon}
            </div>
            <div>
              <p className="text-white text-sm font-semibold">{cat.name}</p>
              <p className="text-blue-300 text-xs mt-0.5">{cat.desc}</p>
            </div>
            <span className="text-blue-400 text-sm group-hover:translate-x-1 transition-transform">›</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
