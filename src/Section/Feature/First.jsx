
const First = () => {
  const heroImage =
    "https://placehold.co/800x600/0f172a/93c5fd?text=Hero+Character+Action";

  const topImages = [
    "https://placehold.co/400x550/0f172a/93c5fd?text=GEARS+OF+WAR+4",
    "https://placehold.co/400x550/0f172a/93c5fd?text=FAR+CRY+PRIMAL",
    "https://placehold.co/400x550/0f172a/93c5fd?text=RAINBOW+SIX+SIEGE",
  ];

  const libraryImages = [
    "https://placehold.co/400x400/0f172a/93c5fd?text=Game+1",
    "https://placehold.co/400x400/0f172a/93c5fd?text=Game+2",
    "https://placehold.co/400x400/0f172a/93c5fd?text=Game+3",
    "https://placehold.co/400x400/0f172a/93c5fd?text=Game+4",
  ];

  const bottomImage =
    "https://placehold.co/1200x400/0f172a/93c5fd?text=Bottom+Rectangular+Image";

  return (
    <div className="bg-slate-950 text-gray-100 font-inter px-4 sm:px-8 lg:px-16 py-16 space-y-24">
      {/* --- Section 1: Instant Play --- */}
      <section className="max-w-7xl mx-auto space-y-12">
        {/* Top row: text + parallelogram hero */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Text content */}
          <div>
            <h2 className="text-5xl font-extrabold text-white mb-6">
              Instant <span className="text-indigo-400">Play</span>
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li>🎮 No installs, no wait</li>
              <li>🌐 Play anywhere, anytime</li>
              <li>⚡ Fast, seamless gaming</li>
            </ul>
          </div>

          {/* Parallelogram Hero Image (using clip-path) */}
          <div className="relative w-full max-w-lg mx-auto group">
            <div
              className="overflow-hidden rounded-xl shadow-2xl"
              style={{
                clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
              }}
            >
              <img
                src={heroImage}
                alt="Hero Character"
                className="object-cover w-full h-full scale-110 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Below: 3 parallelogram images */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {topImages.map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl shadow-xl w-60 sm:w-64 transition-transform duration-300 hover:scale-105"
              style={{
                clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
              }}
            >
              <img
                src={src}
                alt={`Game ${i + 1}`}
                className="object-cover w-full h-full scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 2: Massive Library --- */}
      <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-5xl font-extrabold text-white mb-6">
            Massive <span className="text-indigo-400">Library</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg">
            Discover hundreds of games from every genre — action, puzzle,
            strategy, and more. New titles are added regularly to keep your
            library fresh.
          </p>
          <button className="px-8 py-3 bg-white text-slate-950 font-bold rounded-xl hover:bg-gray-200 transition">
            Explore
          </button>
        </div>

        {/* Right: 2x2 image grid */}
        <div className="grid grid-cols-2 gap-4">
          {libraryImages.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow-lg hover:scale-[1.03] transition-transform"
            >
              <img
                src={src}
                alt={`Library ${i + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* --- Bottom Rectangular Image --- */}
      <section className="max-w-7xl mx-auto">
        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={bottomImage}
            alt="Bottom Section"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default First;
