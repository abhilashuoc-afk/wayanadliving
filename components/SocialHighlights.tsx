const posts = [
  { id: 1, emoji: "🌿", caption: "Good morning from the green hills of Wayanad!", likes: "1.2K" },
  { id: 2, emoji: "🌧️", caption: "Monsoon magic in Wayanad — rain, mist and mountains!", likes: "2.4K" },
  { id: 3, emoji: "🏃", caption: "Get ready for Wayanad Monsoon Marathon 2026!", likes: "3.1K" },
  { id: 4, emoji: "☕", caption: "Fresh coffee from Wayanad plantations — taste the difference!", likes: "987" },
  { id: 5, emoji: "🦋", caption: "Wildlife spotting at Muthanga — nature at its finest!", likes: "1.8K" },
];

export default function SocialHighlights({ lang = "en" }: { lang: string }) {
  const isML = lang === "ml";

  return (
    <section className="max-w-7xl mx-auto px-4 py-6 pb-10">
      <h2 className="text-xl font-semibold text-gray-800 border-l-4 border-orange-500 pl-3 mb-5">
        {isML ? "സോഷ്യൽ മീഡിയ ഹൈലൈറ്റ്സ്" : "Highlights from Social Media"}
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="shrink-0 w-44 rounded-xl overflow-hidden relative cursor-pointer group"
            style={{ height: "220px" }}
          >
            {/* Post background */}
            <div
              style={{ background: "#1a3a5c" }}
              className="absolute inset-0 flex items-center justify-center text-6xl"
            >
              {post.emoji}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="text-white text-xs leading-snug line-clamp-2 mb-2">
                {post.caption}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-300">❤️ {post.likes}</span>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: "#e1306c" }}
                  className="text-white text-xs px-2 py-0.5 rounded-full font-medium"
                >
                  Follow
                </a>
              </div>
            </div>

            {/* Instagram logo */}
            <div className="absolute top-2 left-2 flex items-center gap-1">
              <div
                style={{ background: "#e1306c", width: "20px", height: "20px", borderRadius: "5px" }}
                className="flex items-center justify-center"
              >
                <span className="text-white text-xs font-bold">ig</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
