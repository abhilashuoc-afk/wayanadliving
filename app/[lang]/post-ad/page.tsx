export default async function PostAdPage({ params }: { params: Promise<{ lang: string }> }) {
  await params;
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold text-gray-800 border-l-4 border-orange-500 pl-3 mb-8">
        Post a Free Ad
      </h1>
      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-5">
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Category</label>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm">
            <option>Hotels and Resorts</option>
            <option>Real Estate</option>
            <option>Vehicles</option>
            <option>Services</option>
            <option>Jobs</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Ad Title</label>
          <input type="text" placeholder="e.g. 2BHK Flat for Rent in Kalpetta" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Description</label>
          <textarea rows={4} placeholder="Describe your ad..." className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1">Contact Phone</label>
          <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm" />
        </div>
        <button style={{ background: "#f97316" }} className="w-full text-white font-semibold py-3 rounded-lg text-sm">
          Post Ad for Free
        </button>
      </div>
    </div>
  );
}
