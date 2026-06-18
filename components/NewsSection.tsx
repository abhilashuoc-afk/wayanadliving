import Link from "next/link";
import { getNews, getEvents } from "@/lib/sheets";

const fallbackNews = [
  { tag: "Top Story", title: "Wayanad landslide rehabilitation update", date: "June 18, 2026", image: "", slug: "wayanad-rehab", tagStyle: { background: "#0f2a45", color: "white" } },
  { tag: "Tourism", title: "New eco-resort opens near Chembra Peak", date: "June 17, 2026", image: "", slug: "eco-resort", tagStyle: { color: "#f97316" } },
  { tag: "Local", title: "Kalpetta bypass road construction begins", date: "June 16, 2026", image: "", slug: "kalpetta-bypass", tagStyle: { color: "#f97316" } },
  { tag: "Agriculture", title: "Wayanad coffee growers get record prices", date: "June 15, 2026", image: "", slug: "coffee-prices", tagStyle: { color: "#22c55e" } },
];

const fallbackEvents = [
  { title: "Onam Grand Celebration", location: "Mananthavady", date: "Sep 5, 2026", emoji: "🎉" },
  { title: "Weekend Trek - Chembra Peak", location: "Meppadi", date: "Jun 22, 2026", emoji: "🏔️" },
  { title: "Wayanad Food Festival", location: "Kalpetta", date: "Jul 4, 2026", emoji: "🍛" },
  { title: "Tribal Art Exhibition", location: "Sulthan Bathery", date: "Jul 15, 2026", emoji: "🎨" },
];

export default async function NewsSection({ lang = "en" }: { lang: string }) {
  const [rawNews, rawEvents] = await Promise.all([getNews(), getEvents()]);

  const news = rawNews.length > 0
    ? rawNews.slice(0, 4).map((n) => ({
        tag: n.tag || "News",
        title: n.title || "",
        date: n.date || "",
        image: n.image || "",
        slug: n.slug || n.title?.toLowerCase().replace(/\s+/g, "-") || "news",
        tagStyle: n.tag === "Top Story"
          ? { background: "#0f2a45", color: "white" }
          : { color: "#f97316" },
      }))
    : fallbackNews;

  const events = rawEvents.length > 0
    ? rawEvents.slice(0, 4).map((e) => ({
        title: e.title || "",
        location: e.location || "Wayanad",
        date: e.date || "",
        emoji: e.emoji || "📅",
      }))
    : fallbackEvents;

  return (
    <section className="max-w-7xl mx-auto px-4 pb-10">
      <h2 className="text-xl font-semibold text-gray-800 border-l-4 border-orange-500 pl-3 mb-5">
        Latest News
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main news - 2/3 */}
        <div className="lg:col-span-2 space-y-4">
          {/* Featured big card */}
          <Link
            href={`/${lang}/news/${news[0].slug}`}
            className="block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition group"
          >
            {news[0].image ? (
              <img src={news[0].image} alt={news[0].title} className="w-full h-44 object-cover" />
            ) : (
              <div style={{ background: "#1a3a5c" }} className="h-44 flex items-center justify-center text-6xl">🌿</div>
            )}
            <div className="p-4">
              <span style={news[0].tagStyle} className="text-xs font-semibold px-2 py-0.5 rounded">
                {news[0].tag}
              </span>
              <h3 className="text-base font-semibold text-gray-800 mt-2 mb-1 leading-snug group-hover:text-orange-600 transition">
                {news[0].title}
              </h3>
              <p className="text-xs text-gray-400">{news[0].date}</p>
            </div>
          </Link>

          {/* Smaller cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {news.slice(1, 4).map((item) => (
              <Link
                key={item.slug}
                href={`/${lang}/news/${item.slug}`}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition group"
              >
                {item.image ? (
                  <img src={item.image} alt={item.title} className="w-full h-24 object-cover" />
                ) : (
                  <div className="h-24 bg-gray-100 flex items-center justify-center text-3xl">📰</div>
                )}
                <div className="p-3">
                  <span style={item.tagStyle} className="text-xs font-semibold uppercase">{item.tag}</span>
                  <h4 className="text-sm font-medium text-gray-800 mt-1 leading-snug group-hover:text-orange-600 transition line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">{item.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Sidebar - 1/3 */}
        <div className="space-y-4">
          {/* Events widget */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div style={{ background: "#0f2a45" }} className="px-4 py-3 flex items-center justify-between">
              <h3 className="text-white font-semibold text-sm">Upcoming Events</h3>
              <Link href={`/${lang}/events`} style={{ color: "#f97316" }} className="text-xs hover:underline">
                View All
              </Link>
            </div>
            <div className="divide-y divide-gray-100">
              {events.map((ev, i) => (
                <div key={i} className="px-4 py-3 flex gap-3 items-start hover:bg-gray-50 transition cursor-pointer">
                  <div className="text-2xl">{ev.emoji}</div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 leading-snug">{ev.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">📍 {ev.location}</p>
                    <p className="text-xs text-gray-400">{ev.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats widget */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div style={{ background: "#0f2a45" }} className="px-4 py-3">
              <h3 className="text-white font-semibold text-sm">Wayanad Highlights</h3>
            </div>
            <div className="p-4 space-y-2">
              {[
                { label: "Active Resorts", value: "240+" },
                { label: "Properties Listed", value: "1,200+" },
                { label: "Daily Visitors", value: "8,500+" },
                { label: "Local Businesses", value: "3,000+" },
              ].map((stat) => (
                <div key={stat.label} className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">{stat.label}</span>
                  <span style={{ color: "#f97316" }} className="font-bold">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
