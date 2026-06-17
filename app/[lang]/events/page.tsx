const events = [
  { title: "Onam Grand Celebration", location: "Mananthavady", date: "Sep 5, 2026", emoji: "🎉", category: "Festival" },
  { title: "Weekend Trek - Chembra Peak", location: "Meppadi", date: "Jun 22, 2026", emoji: "🏔️", category: "Adventure" },
  { title: "Wayanad Food Festival", location: "Kalpetta", date: "Jul 4, 2026", emoji: "🍛", category: "Food" },
  { title: "Tribal Art Exhibition", location: "Sulthan Bathery", date: "Jul 15, 2026", emoji: "🎨", category: "Culture" },
  { title: "Monsoon Photography Walk", location: "Vythiri", date: "Jul 20, 2026", emoji: "📸", category: "Photography" },
  { title: "Bamboo Music Festival", location: "Ambalavayal", date: "Aug 1, 2026", emoji: "🎵", category: "Music" },
];

export default async function EventsPage({ params }: { params: Promise<{ lang: string }> }) {
  await params;
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-gray-800 border-l-4 border-orange-500 pl-3 mb-6">
        Upcoming Events in Wayanad
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map((ev, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition cursor-pointer">
            <div className="flex items-start gap-4">
              <div style={{ background: "#f0f7ff" }} className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl shrink-0">
                {ev.emoji}
              </div>
              <div>
                <span style={{ background: "#fff3e8", color: "#f97316" }} className="text-xs font-semibold px-2 py-0.5 rounded">
                  {ev.category}
                </span>
                <h3 className="text-sm font-semibold text-gray-800 mt-1.5 leading-snug">{ev.title}</h3>
                <p className="text-xs text-gray-500 mt-1">📍 {ev.location}</p>
                <p className="text-xs text-gray-400 mt-0.5">📅 {ev.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
