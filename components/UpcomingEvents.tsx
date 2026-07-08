import Link from "next/link";
import { getEvents } from "@/lib/sheets";

const fallback = [
  { title: "Wayanad Monsoon Marathon", title_ml: "വയനാട് മണ്‍സൂണ്‍ മാരത്തോണ്‍", category: "Sports", location: "Kalpetta", date: "2026-06-21", emoji: "🏃", image: "" },
  { title: "Onam Grand Celebration", title_ml: "ഓണം ആഘോഷം", category: "Festival", location: "Mananthavady", date: "2026-09-05", emoji: "🎉", image: "" },
  { title: "Chembra Peak Trek", title_ml: "ചെമ്പ്ര ട്രെക്ക്", category: "Adventure", location: "Meppadi", date: "2026-06-22", emoji: "🏔️", image: "" },
  { title: "Wayanad Food Festival", title_ml: "ഫുഡ് ഫെസ്റ്റിവൽ", category: "Food", location: "Kalpetta", date: "2026-07-04", emoji: "🍛", image: "" },
  { title: "Tribal Art Exhibition", title_ml: "ആദിവാസി കലാ പ്രദർശനം", category: "Culture", location: "Sulthan Bathery", date: "2026-07-15", emoji: "🎨", image: "" },
];

function getDay(dateStr: string) {
  try {
    const d = new Date(dateStr);
    return {
      day: d.getDate().toString().padStart(2, "0"),
      month: d.toLocaleString("en", { month: "short" }).toUpperCase(),
    };
  } catch {
    return { day: "01", month: "JAN" };
  }
}

export default async function UpcomingEvents({ lang = "en" }: { lang: string }) {
  const raw = await getEvents();
  const isML = lang === "ml";

  const events =
    raw.length > 0
      ? raw.slice(0, 6).map((e) => ({
          title: e.title || "",
          title_ml: e.title_ml || "",
          category: e.category || "Event",
          location: e.location || "Wayanad",
          date: e.date || "",
          emoji: e.emoji || "📅",
          image: e.image || "",
        }))
      : fallback;

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800 border-l-4 border-orange-500 pl-3">
          {isML ? "വരാനിരിക്കുന്ന ഇവന്റുകൾ" : "Upcoming Events"}
        </h2>
        <Link
          href={"/" + lang + "/events"}
          style={{ color: "#f97316" }}
          className="text-sm font-medium hover:underline"
        >
          {isML ? "കൂടുതൽ കാണൂ" : "Explore More"} &gt;
        </Link>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-3">
        {events.map((ev, i) => {
          const { day, month } = getDay(ev.date);
          return (
            <Link
              key={i}
              href={"/" + lang + "/events"}
              className="shrink-0 w-52 bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition group"
            >
              <div className="relative">
                {ev.image ? (
                  <img src={ev.image} alt={ev.title} className="w-full h-36 object-cover" />
                ) : (
                  <div
                    style={{ background: "#1a3a5c", height: "144px" }}
                    className="flex items-center justify-center text-5xl"
                  >
                    {ev.emoji}
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-white rounded-lg text-center px-2 py-1 shadow-md">
                  <p className="text-base font-bold text-gray-800 leading-none">{day}</p>
                  <p style={{ color: "#f97316" }} className="text-xs font-bold">{month}</p>
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-400 mb-1">{ev.category}</p>
                <h3 className="text-sm font-semibold text-gray-800 leading-snug group-hover:text-orange-600 transition line-clamp-2">
                  {isML && ev.title_ml ? ev.title_ml : ev.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1.5">📍 {ev.location}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
