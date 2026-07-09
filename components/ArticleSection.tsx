import Link from "next/link";
import { getNews } from "@/lib/sheets";

const sections = [
  {
    title: "Lifestyle",
    title_ml: "ജീവിതശൈലി",
    tag: "Lifestyle",
    fallback: [
      { title: "Top 10 Resorts in Wayanad for 2026", title_ml: "2026 ലെ മികച്ച 10 റിസോർട്ടുകൾ", tag: "Lifestyle", date: "June 20, 2026", image: "", slug: "top-resorts-2026" },
      { title: "Best Local Foods You Must Try in Wayanad", title_ml: "വയനാട്ടിൽ കഴിക്കേണ്ട ഭക്ഷണങ്ങൾ", tag: "Lifestyle", date: "June 18, 2026", image: "", slug: "local-foods-wayanad" },
      { title: "Monsoon Trekking Guide - Wayanad 2026", title_ml: "മൺസൂൺ ട്രെക്കിംഗ് ഗൈഡ്", tag: "Adventure", date: "June 16, 2026", image: "", slug: "monsoon-trekking-guide" },
    ],
  },
  {
    title: "Everything Wayanad",
    title_ml: "വയനാടിനെ കുറിച്ച് എല്ലാം",
    tag: "Local",
    fallback: [
      { title: "5 Must-Visit Waterfalls in Wayanad", title_ml: "വയനാടിലെ 5 വെള്ളച്ചാട്ടങ്ങൾ", tag: "Tourism", date: "June 19, 2026", image: "", slug: "waterfalls-wayanad" },
      { title: "How to Get to Wayanad from Calicut", title_ml: "കോഴിക്കോട്ടു നിന്ന് വയനാട്ടിലേക്ക്", tag: "Travel", date: "June 17, 2026", image: "", slug: "how-to-reach-wayanad" },
      { title: "Jobs in Wayanad 2026 - Latest Openings", title_ml: "വയനാട്ടിൽ ജോലി 2026", tag: "Jobs", date: "June 15, 2026", image: "", slug: "jobs-wayanad-2026" },
    ],
  },
  {
    title: "Advice & Help",
    title_ml: "ഉപദേശവും സഹായവും",
    tag: "Help",
    fallback: [
      { title: "Buying Land in Wayanad - Complete Guide", title_ml: "വയനാട്ടിൽ ഭൂമി വാങ്ങൽ ഗൈഡ്", tag: "Real Estate", date: "June 21, 2026", image: "", slug: "buying-land-wayanad" },
      { title: "Best Schools in Wayanad for 2026", title_ml: "വയനാട്ടിലെ മികച്ച സ്കൂളുകൾ", tag: "Education", date: "June 20, 2026", image: "", slug: "best-schools-wayanad" },
      { title: "Healthcare Facilities in Wayanad District", title_ml: "വയനാട്ടിലെ ആരോഗ്യ സൗകര്യങ്ങൾ", tag: "Health", date: "June 19, 2026", image: "", slug: "healthcare-wayanad" },
    ],
  },
];

export default async function ArticleSection({ lang = "en" }: { lang: string }) {
  const isML = lang === "ml";
  const allNews = await getNews();

  return (
    <div className="max-w-7xl mx-auto px-4 pb-6 space-y-8">
      {sections.map((section) => {
        const filtered = allNews.filter((n) => n.tag === section.tag).slice(0, 3);
        const articles = filtered.length > 0
          ? filtered.map((n) => ({
              title: n.title || "",
              title_ml: n.title_ml || "",
              tag: n.tag || "",
              date: n.date || "",
              image: n.image || "",
              slug: n.slug || n.title?.toLowerCase().replace(/\s+/g, "-") || "news",
            }))
          : section.fallback;

        return (
          <div key={section.title}>
            {/* Section header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800 border-l-4 border-orange-500 pl-3">
                {isML ? section.title_ml : section.title}
              </h2>
              <Link
                href={"/" + lang + "/news"}
                style={{ color: "#f97316" }}
                className="text-sm font-medium hover:underline"
              >
                {isML ? "എല്ലാം കാണൂ" : "View All"} &gt;
              </Link>
            </div>

            {/* 3 article cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {articles.map((article, i) => (
                <Link
                  key={i}
                  href={"/" + lang + "/news/" + article.slug}
                  className="flex gap-3 bg-white rounded-xl border border-gray-200 p-3 hover:shadow-md transition group"
                >
                  {/* Thumbnail */}
                  <div className="shrink-0">
                    {article.image ? (
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-20 h-16 object-cover rounded-lg"
                      />
                    ) : (
                      <div
                        style={{ background: "#1a3a5c", width: "80px", height: "64px" }}
                        className="rounded-lg flex items-center justify-center text-2xl"
                      >
                        🌿
                      </div>
                    )}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p style={{ color: "#f97316" }} className="text-xs font-semibold uppercase mb-1">
                      {article.tag}
                    </p>
                    <h3 className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2 group-hover:text-orange-600 transition">
                      {isML && article.title_ml ? article.title_ml : article.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">{article.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
