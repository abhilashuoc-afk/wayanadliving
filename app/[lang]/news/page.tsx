import Link from "next/link";

const allNews = [
  { tag: "Top Story", title: "Wayanad landslide rehabilitation: 500 families get new homes", date: "June 10, 2026", emoji: "🏘️", slug: "wayanad-rehab" },
  { tag: "Tourism", title: "New eco-resort near Chembra Peak opens with forest-view rooms", date: "June 9, 2026", emoji: "🌿", slug: "eco-resort-chembra" },
  { tag: "Local", title: "Kalpetta bypass road construction to begin this monsoon", date: "June 8, 2026", emoji: "🛣️", slug: "kalpetta-bypass" },
  { tag: "Agriculture", title: "Wayanad coffee growers get record prices this harvest", date: "June 7, 2026", emoji: "☕", slug: "coffee-prices" },
  { tag: "Wildlife", title: "Tiger sighted near Muthanga wildlife sanctuary border", date: "June 6, 2026", emoji: "🐯", slug: "tiger-muthanga" },
  { tag: "Weather", title: "IMD issues red alert for Wayanad - heavy rain expected", date: "June 5, 2026", emoji: "🌧️", slug: "red-alert-rain" },
];

export default async function NewsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-gray-800 border-l-4 border-orange-500 pl-3 mb-6">
        Latest News from Wayanad
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allNews.map((item) => (
          <Link key={item.slug} href={`/${lang}/news/${item.slug}`}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition group">
            <div style={{ background: "#1a3a5c" }} className="h-36 flex items-center justify-center text-6xl">
              {item.emoji}
            </div>
            <div className="p-4">
              <span style={{ color: "#f97316" }} className="text-xs font-semibold uppercase">{item.tag}</span>
              <h3 className="text-sm font-semibold text-gray-800 mt-2 mb-1 leading-snug group-hover:text-orange-600 transition">
                {item.title}
              </h3>
              <p className="text-xs text-gray-400">{item.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
