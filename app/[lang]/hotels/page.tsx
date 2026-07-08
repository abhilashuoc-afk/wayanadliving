import { getHotels } from "@/lib/sheets";

const fallback = [
  { name: "Vythiri Resort", location: "Vythiri", price: "6500/night", rating: "4.8", image: "", tag: "Luxury", description: "Beautiful forest resort" },
  { name: "Wayanad Wild by CGH", location: "Meppadi", price: "12000/night", rating: "4.9", image: "", tag: "Premium", description: "Premium wildlife resort" },
  { name: "Green Gates Hotel", location: "Kalpetta", price: "2800/night", rating: "4.2", image: "", tag: "Budget", description: "Affordable stay" },
  { name: "Pepper Trail", location: "Ambalavayal", price: "4500/night", rating: "4.5", image: "", tag: "Heritage", description: "Heritage plantation stay" },
  { name: "Tranquil Resort", location: "Kolagappara", price: "8000/night", rating: "4.7", image: "", tag: "Luxury", description: "Peaceful luxury resort" },
  { name: "Bamboo Grove Resort", location: "Sulthan Bathery", price: "3200/night", rating: "4.3", image: "", tag: "Eco", description: "Eco friendly resort" },
];

const emojis: Record<string, string> = {
  Luxury: "🌿", Premium: "🦋", Budget: "🏡", Heritage: "☕", Eco: "🎋", Default: "🏨",
};

const tagColors: Record<string, { background: string; color: string }> = {
  Luxury: { background: "#fff3e8", color: "#f97316" },
  Premium: { background: "#f0f4ff", color: "#4f46e5" },
  Budget: { background: "#f0fdf4", color: "#16a34a" },
  Heritage: { background: "#fefce8", color: "#ca8a04" },
  Eco: { background: "#f0fdf4", color: "#16a34a" },
  Default: { background: "#f5f5f5", color: "#666" },
};

export default async function HotelsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isML = lang === "ml";
  const raw = await getHotels();

  const hotels =
    raw.length > 0
      ? raw.map((h) => ({
          name: h.name || "",
          location: h.location || "Wayanad",
          price: h.price || "",
          rating: h.rating || "4.5",
          image: h.image || "",
          tag: h.tag || "Hotel",
          description: h.description || "",
        }))
      : fallback;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-gray-800 border-l-4 border-orange-500 pl-3 mb-6">
        {isML ? "വയനാട്ടിലെ ഹോട്ടലുകളും റിസോർട്ടുകളും" : "Hotels and Resorts in Wayanad"}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {hotels.map((h, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition cursor-pointer group"
          >
            {/* Image */}
            {h.image ? (
              <img
                src={h.image}
                alt={h.name}
                className="w-full object-cover"
                style={{ height: "180px" }}
              />
            ) : (
              <div
                style={{ background: "#1a3a5c", height: "180px" }}
                className="flex items-center justify-center text-6xl"
              >
                {emojis[h.tag] || emojis.Default}
              </div>
            )}

            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  {/* Tag */}
                  <span
                    style={tagColors[h.tag] || tagColors.Default}
                    className="text-xs font-semibold px-2 py-0.5 rounded"
                  >
                    {h.tag}
                  </span>

                  {/* Hotel name */}
                  <h3 className="text-base font-semibold text-gray-800 mt-2 group-hover:text-orange-600 transition">
                    {h.name}
                  </h3>

                  {/* Location */}
                  <p className="text-xs text-gray-500 mt-0.5">📍 {h.location}</p>

                  {/* Description */}
                  {h.description && (
                    <p className="text-xs text-gray-400 mt-1 line-clamp-2">{h.description}</p>
                  )}
                </div>

                {/* Price */}
                <div className="text-right shrink-0">
                  <p className="text-xs text-gray-400">
                    {isML ? "ആരംഭം" : "From"}
                  </p>
                  <p style={{ color: "#f97316" }} className="font-bold text-sm">
                    Rs.{h.price}
                  </p>
                </div>
              </div>

              {/* Rating + Book */}
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-yellow-500 font-medium">
                  ★ {h.rating}
                </span>
                <button
                  style={{ background: "#0f2a45" }}
                  className="text-white text-xs px-4 py-1.5 rounded-lg hover:opacity-90 transition font-medium"
                >
                  {isML ? "ഇപ്പോൾ ബുക്ക് ചെയ്യൂ" : "Book Now"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {hotels.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <div className="text-5xl mb-4">🏨</div>
          <p>{isML ? "ഹോട്ടലുകൾ ലഭ്യമല്ല" : "No hotels available yet"}</p>
        </div>
      )}
    </div>
  );
}