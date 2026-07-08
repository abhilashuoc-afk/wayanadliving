import Link from "next/link";

const listings = [
  { name: "Hotels", name_ml: "ഹോട്ടലുകൾ", path: "/hotels", emoji: "🏨", bg: "#1a3a5c" },
  { name: "Real Estate", name_ml: "റിയൽ എസ്റ്റേറ്റ്", path: "/real-estate", emoji: "🏡", bg: "#1a4a2a" },
  { name: "Vehicles", name_ml: "വാഹനങ്ങൾ", path: "/vehicles", emoji: "🚗", bg: "#2d1a45" },
  { name: "Jobs", name_ml: "ജോലികൾ", path: "/jobs", emoji: "💼", bg: "#1a3a5c" },
  { name: "Services", name_ml: "സേവനങ്ങൾ", path: "/services", emoji: "🔧", bg: "#3a1a1a" },
  { name: "Classifieds", name_ml: "ക്ലാസിഫൈഡ്", path: "/classifieds", emoji: "📋", bg: "#1a3a4c" },
  { name: "Schools", name_ml: "സ്കൂളുകൾ", path: "/schools", emoji: "🏫", bg: "#2a3a1a" },
  { name: "Restaurants", name_ml: "റെസ്റ്റോറന്റ്", path: "/restaurants", emoji: "🍽️", bg: "#3a2a1a" },
  { name: "Healthcare", name_ml: "ആരോഗ്യം", path: "/healthcare", emoji: "🏥", bg: "#1a2a3a" },
  { name: "Tours", name_ml: "ടൂറുകൾ", path: "/tours", emoji: "🗺️", bg: "#2a1a3a" },
];

export default function ExploreListings({ lang = "en" }: { lang: string }) {
  const isML = lang === "ml";

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
        {isML ? "കൂടുതൽ ലിസ്റ്റിംഗ് പര്യവേക്ഷണം ചെയ്യൂ" : "Explore More Listings"}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {listings.map((item, i) => (
          <Link
            key={i}
            href={"/" + lang + item.path}
            className="relative rounded-xl overflow-hidden hover:shadow-lg transition group"
            style={{ height: "100px" }}
          >
            <div
              style={{ background: item.bg }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-2"
            >
              <span className="text-3xl">{item.emoji}</span>
              <span className="text-white text-sm font-semibold text-center px-2">
                {isML ? item.name_ml : item.name}
              </span>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
          </Link>
        ))}
      </div>
    </section>
  );
}
