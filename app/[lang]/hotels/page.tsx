import { getHotels } from "@/lib/sheets";

const fallback = [
  { name: "Vythiri Resort", location: "Vythiri", price: "6500/night", rating: "4.8", image: "", tag: "Luxury" },
  { name: "Wayanad Wild by CGH", location: "Meppadi", price: "12000/night", rating: "4.9", image: "", tag: "Premium" },
  { name: "Green Gates Hotel", location: "Kalpetta", price: "2800/night", rating: "4.2", image: "", tag: "Budget" },
  { name: "Pepper Trail", location: "Ambalavayal", price: "4500/night", rating: "4.5", image: "", tag: "Heritage" },
  { name: "Tranquil Resort", location: "Kolagappara", price: "8000/night", rating: "4.7", image: "", tag: "Luxury" },
  { name: "Bamboo Grove Resort", location: "Sulthan Bathery", price: "3200/night", rating: "4.3", image: "", tag: "Eco" },
];

const emojis: Record<string, string> = {
  Luxury: "🌿", Premium: "🦋", Budget: "🏡", Heritage: "☕", Eco: "🎋", Default: "🏨",
};

export default async function HotelsPage({ params }: { params: Promise<{ lang: string }> }) {
  await params;
  const raw = await getHotels();

  const hotels = raw.length > 0
    ? raw.map((h) => ({
        name: h.name || "",
        location: h.location || "Wayanad",
        price: h.price || "",
        rating: h.rating || "4.5",
        image: h.image || "",
        tag: h.tag || "Hotel",
      }))
    : fallback;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-gray-800 border-l-4 border-orange-500 pl-3 mb-6">
        Hotels and Resorts in Wayanad
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {hotels.map((h, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition cursor-pointer group">
            {h.image ? (
              <img src={h.image} alt={h.name} className="w-full h-36 object-cover" />
            ) : (
              <div style={{ background: "#1a3a5c" }} className="h-36 flex items-center justify-center text-6xl">
                {emojis[h.tag] || emojis.Default}
              </div>
            )}
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <span style={{ background: "#fff3e8", color: "#f97316" }} className="text-xs font-semibold px-2 py-0.5 rounded">
                    {h.tag}
                  </span>
                  <h3 className="text-base font-semibold text-gray-800 mt-2 group-hover:text-orange-600 transition">
                    {h.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">📍 {h.location}</p>
                </div>
                <div className="text-right shrink-0 ml-2">
                  <p className="text-xs text-gray-400">From</p>
                  <p style={{ color: "#f97316" }} className="font-bold text-sm">Rs.{h.price}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-yellow-500">★ {h.rating}</span>
                <button style={{ background: "#0f2a45" }} className="text-white text-xs px-3 py-1.5 rounded-lg hover:opacity-90 transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
