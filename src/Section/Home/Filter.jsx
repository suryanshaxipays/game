import React, { useState, useMemo, useRef } from "react";
import { games } from "../../data/games"; // ✅ Import external games data

// ------------------------- //
// Custom Dropdown Component //
// ------------------------- //
const CustomDropdown = ({ label, options, selectedOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative space-y-4" ref={dropdownRef}>
      <label className="text-white text-base font-medium">{label}</label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-[#181724] rounded-lg px-3 py-2 text-left"
      >
        <span className="text-[#BEBEBE] text-sm">{selectedOption}</span>
        <svg
          className={`w-5 h-5 text-pink-500 transition-transform duration-200 ${
            isOpen ? "-rotate-90" : "rotate-90"
          }`}
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M19.6667 7.0001L18.1667 5.6001L10.6667 13.0001L3.16666 5.6001L1.66666 7.0001L10.6667 16.0001L19.6667 7.0001Z"
            fill="url(#paint0_linear_dropdown)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_dropdown"
              x1="19.6667"
              y1="10.8001"
              x2="1.66666"
              y2="10.8001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF01D9" />
              <stop offset="0.5" stopColor="#760181" />
              <stop offset="1" stopColor="#5A30D7" />
            </linearGradient>
          </defs>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#181724] border border-gray-700 rounded-lg z-10 max-h-48 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 text-sm text-[#BEBEBE] hover:bg-[#252438] cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ---------------------------- //
// Dual-Thumb Range Slider UI //
// ---------------------------- //
const RangeSlider = ({ min, max, value, onChange, label }) => {
  const [minValue, setMinValue] = useState(value[0]);
  const [maxValue, setMaxValue] = useState(value[1]);
  const rangeRef = useRef(null);

  const handleMinChange = (e) => {
    const newMin = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(newMin);
    onChange([newMin, maxValue]);
  };

  const handleMaxChange = (e) => {
    const newMax = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(newMax);
    onChange([minValue, newMax]);
  };

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="space-y-4">
      <label className="text-white text-base font-medium">{label}</label>
      <div className="space-y-2">
        <div className="relative h-5 w-full flex items-center" ref={rangeRef}>
          <div className="absolute w-full h-1 bg-[#181724] rounded-full">
            <div
              className="absolute h-1 gradient-primary rounded-full"
              style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
            ></div>
          </div>
          <input
            type="range"
            min={min}
            max={max}
            value={minValue}
            onChange={handleMinChange}
            className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none focus:outline-none"
            style={{ zIndex: 3 }}
          />
          <input
            type="range"
            min={min}
            max={max}
            value={maxValue}
            onChange={handleMaxChange}
            className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none focus:outline-none"
            style={{ zIndex: 4 }}
          />
          <style>{`
            input[type="range"]::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 20px;
              height: 20px;
              background-image: linear-gradient(to right, #FF01D9, #760181, #5A30D7);
              border-radius: 50%;
              cursor: pointer;
              pointer-events: auto;
              margin-top: -8px;
            }
          `}</style>
        </div>
        <div className="flex justify-between text-white text-sm">
          <span>{minValue}</span>
          <span>{maxValue}</span>
        </div>
      </div>
    </div>
  );
};

// ------------------------ //
// Main Filter Component //
// ------------------------ //
export default function Filter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [onlineEnabled, setOnlineEnabled] = useState(false);
  const [freeEnabled, setFreeEnabled] = useState(false);
  const [releaseYear, setReleaseYear] = useState([2000, 2024]);
  const [rating, setRating] = useState([0, 100]);
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const [selectedPublisher, setSelectedPublisher] = useState("All");
  const [selectedPlayers, setSelectedPlayers] = useState("All");
  const [visibleCount, setVisibleCount] = useState(5);
  const genreContainerRef = useRef(null);

  // ✅ Extract unique filter options from game data
  const genres = useMemo(() => {
    const uniqueGenres = new Set(games.flatMap((game) => game.genres));
    return Array.from(uniqueGenres).sort();
  }, []);

  const platforms = useMemo(() => {
    const unique = new Set(games.map((g) => g.platform));
    return ["All", ...Array.from(unique)].sort();
  }, []);

  const publishers = useMemo(() => {
    const unique = new Set(games.map((g) => g.publisher));
    return ["All", ...Array.from(unique)].sort();
  }, []);

  const players = useMemo(() => {
    const unique = new Set(games.map((g) => g.players));
    return ["All", ...Array.from(unique)].sort();
  }, []);

  // ✅ Toggle selected genres
  const toggleGenre = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  // ✅ Filtering logic
  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const searchTermMatch = game.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const genreMatch =
        selectedGenres.length === 0 ||
        (typeof game.genres === "string"
          ? selectedGenres.includes(game.genres)
          : game.genres.some((g) => selectedGenres.includes(g)));
      const platformMatch =
        selectedPlatform === "All" || game.platform === selectedPlatform;
      const publisherMatch =
        selectedPublisher === "All" || game.publisher === selectedPublisher;
      const playersMatch =
        selectedPlayers === "All" || game.players === selectedPlayers;
      const freeMatch = !freeEnabled || game.isFree;
      const onlineMatch = !onlineEnabled || game.isOnline;
      const yearMatch =
        parseInt(game.year) >= releaseYear[0] &&
        parseInt(game.year) <= releaseYear[1];
      const ratingMatch =
        parseInt(game.rating) >= rating[0] &&
        parseInt(game.rating) <= rating[1];
      return (
        searchTermMatch &&
        genreMatch &&
        platformMatch &&
        publisherMatch &&
        playersMatch &&
        freeMatch &&
        onlineMatch &&
        yearMatch &&
        ratingMatch
      );
    });
  }, [
    searchTerm,
    selectedGenres,
    selectedPlatform,
    selectedPublisher,
    selectedPlayers,
    freeEnabled,
    onlineEnabled,
    releaseYear,
    rating,
  ]);

  // ✅ Scroll controls for genres
  const scrollGenres = (direction) => {
    if (genreContainerRef.current) {
      genreContainerRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  // ✅ UI Rendering (unchanged visually)
  return (
    <div className="min-h-screen text-white font-sans">
      {/* Styles */}
      <style>{`
        .gradient-primary { background-image: linear-gradient(to right, #FF01D9, #760181, #5A30D7); }
        .text-grey-200 { color: #BEBEBE; }
      `}</style>

      {/* Header */}
      <div className="max-w-[1540px] mx-auto px-4 sm:px-8 lg:px-[120px] py-8 lg:py-16">
        <div className="text-center mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold">Play Your Way</h1>
          <p className="text-grey-200 text-sm lg:text-base">
            Quickly discover games that match your style
          </p>
        </div>

        {/* Search Input */}
        <div className="flex items-center gap-4 bg-[#181724] rounded-lg px-3 py-2">
          <input
            type="text"
            placeholder="Game Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent text-[#BEBEBE] border-none outline-none text-base"
          />
        </div>

        {/* Genre Filter */}
        <div className="flex items-center gap-2 lg:gap-4 mt-6">
          <button
            onClick={() => scrollGenres("left")}
            className="w-11 h-11 border border-white rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-white/10 transition-colors"
          >
            <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="none">
              <path
                d="M16 9.9H4M4 9.9L9.4 4.5M4 9.9L9.4 15.3"
                stroke="currentColor"
              />
            </svg>
          </button>
          <div
            ref={genreContainerRef}
            className="flex-1 flex gap-2 overflow-x-hidden"
          >
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => toggleGenre(genre)}
                className={`px-4 py-1.5 rounded-full text-sm ${
                  selectedGenres.includes(genre)
                    ? "gradient-primary text-white"
                    : "bg-[#181724] text-white hover:bg-[#252438]"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollGenres("right")}
            className="w-11 h-11 border border-white rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-white/10 transition-colors"
          >
            <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="none">
              <path
                d="M4.00024 9.9H16.0002M16.0002 9.9L10.6002 4.5M16.0002 9.9L10.6002 15.3"
                stroke="currentColor"
              />
            </svg>
          </button>
        </div>

        {/* Dropdowns */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          <CustomDropdown
            label="Platform"
            options={platforms}
            selectedOption={selectedPlatform}
            onSelect={setSelectedPlatform}
          />
          <CustomDropdown
            label="Publisher"
            options={publishers}
            selectedOption={selectedPublisher}
            onSelect={setSelectedPublisher}
          />
          <CustomDropdown
            label="Players"
            options={players}
            selectedOption={selectedPlayers}
            onSelect={setSelectedPlayers}
          />
        </div>

        {/* Range Sliders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <RangeSlider
            label="Release Year"
            min={2000}
            max={2024}
            value={releaseYear}
            onChange={setReleaseYear}
          />
          <RangeSlider
            label="Rating"
            min={0}
            max={100}
            value={rating}
            onChange={setRating}
          />
        </div>

        {/* Game Cards */}
        <div className="mt-16 ">
          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredGames.slice(0, visibleCount).map((game) => (
                <div
                  key={game.id}
                  className=" border border-violet-500 rounded-xl p-3 space-y-3 hover:shadow-lg"
                >
                  <img
                    src={game.image || game.thumbnail}
                    alt={game.title}
                    className="w-full aspect-[3/4] object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="text-white text-base font-medium">
                      {game.title}
                    </h3>
                    <p className="text-[#BEBEBE] text-sm">{game.genre}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 text-grey-200">
              <h3 className="text-xl font-bold mb-2">No Games Found</h3>
              <p>Try adjusting your filters.</p>
            </div>
          )}
          {filteredGames.length > visibleCount && (
            <div className="flex justify-center mt-5">
              <button
                onClick={() => setVisibleCount(filteredGames.length)}
                className="relative group py-2 px-6 rounded-2xl font-bold text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-purple-700 flex items-center gap-2 transition-all duration-300"
              >
                View All
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M6.99998 19L5.59998 17.5L13 10L5.59998 2.5L6.99998 1L16 10L6.99998 19Z"
                    fill="url(#paint0_linear_viewall)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_viewall"
                      x1="10.8"
                      y1="19"
                      x2="10.8"
                      y2="1"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF01D9" />
                      <stop offset="0.5" stopColor="#760181" />
                      <stop offset="1" stopColor="#5A30D7" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Hover Glow */}
                <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_12px_rgba(255,0,168,0.8)]"></span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
