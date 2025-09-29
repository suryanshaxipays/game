import React, { useState, useMemo, useRef } from "react";

// Helper component for a custom dropdown menu
const CustomDropdown = ({ label, options, selectedOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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

// Helper component for a custom dual-thumb range slider
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
                        input[type="range"]::-moz-range-thumb {
                            width: 20px;
                            height: 20px;
                            background-image: linear-gradient(to right, #FF01D9, #760181, #5A30D7);
                            border-radius: 50%;
                            cursor: pointer;
                            pointer-events: auto;
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

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([
    "Action",
    "RPG",
    "Sports",
  ]);
  const [onlineEnabled, setOnlineEnabled] = useState(false);
  const [freeEnabled, setFreeEnabled] = useState(true);
  const [releaseYear, setReleaseYear] = useState([2000, 2024]);
  const [rating, setRating] = useState([0, 100]);
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const [selectedPublisher, setSelectedPublisher] = useState("All");
  const [selectedPlayers, setSelectedPlayers] = useState("All");
  const [visibleCount, setVisibleCount] = useState(5);

  const genres = [
    "Action",
    "RPG",
    "Samurai",
    "Sports",
    "Shooting",
    "Racing",
    "Battle",
    "Survival",
    "Strategy",
    "Open World",
    "Horror",
  ];
  const platforms = [
    "All",
    "PC",
    "PlayStation 5",
    "Xbox Series X",
    "Nintendo Switch",
  ];
  const publishers = [
    "All",
    "CD Projekt Red",
    "FromSoftware",
    "Ubisoft",
    "Capcom",
    "EA",
    "Konami",
    "Remedy Entertainment",
  ];
  const players = ["All", "Single Player", "Multiplayer", "Co-op"];

  const genreContainerRef = useRef(null);

  const games = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      year: "2020",
      rating: "86",
      price: "30",
      originalPrice: null,
      discount: null,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/4e45b847ec2e381ab33106c85971f82ba90e86b1?width=442",
      isFree: false,
      genres: ["RPG", "Action", "Open World"],
      platform: "PC",
      publisher: "CD Projekt Red",
      players: "Single Player",
      isOnline: false,
    },
    {
      id: 2,
      title: "Black Myth Wukong",
      year: "2024",
      rating: "93",
      price: "51",
      originalPrice: "60",
      discount: "15",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/61d643629f4743993565e147ca8c49dd2ce33b1f?width=442",
      isFree: false,
      genres: ["Action", "RPG", "Samurai"],
      platform: "PlayStation 5",
      publisher: "FromSoftware",
      players: "Single Player",
      isOnline: false,
    },
    {
      id: 3,
      title: "Elden Ring",
      year: "2022",
      rating: "95",
      price: "30",
      originalPrice: "60",
      discount: "50",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e06f544e133b0a63c96467cac01f3b0af5b7fffd?width=442",
      isFree: false,
      genres: ["Action", "RPG", "Open World"],
      platform: "PC",
      publisher: "FromSoftware",
      players: "Multiplayer",
      isOnline: true,
    },
    {
      id: 4,
      title: "Assassins Creed Mirage",
      year: "2023",
      rating: "84",
      price: "50",
      originalPrice: null,
      discount: null,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/5bc93e9fdf0178d876931a6e114d44df4403f043?width=442",
      isFree: false,
      genres: ["Action", "Strategy"],
      platform: "Xbox Series X",
      publisher: "Ubisoft",
      players: "Single Player",
      isOnline: false,
    },
    {
      id: 5,
      title: "Resident Evil 4: Remake",
      year: "2023",
      rating: "93",
      price: "42",
      originalPrice: "60",
      discount: "30",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/8eeec7b6facdc7912f54048a0046eacee61cc5be?width=442",
      isFree: false,
      genres: ["Horror", "Survival", "Shooting"],
      platform: "PlayStation 5",
      publisher: "Capcom",
      players: "Single Player",
      isOnline: false,
    },
    {
      id: 6,
      title: "Apex Legends",
      year: "2019",
      rating: "88",
      price: null,
      originalPrice: null,
      discount: null,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/4dacc538fd7213b7246c66388921cf211ecd281c?width=442",
      isFree: true,
      genres: ["Battle", "Shooting"],
      platform: "PC",
      publisher: "EA",
      players: "Multiplayer",
      isOnline: true,
    },
    {
      id: 7,
      title: "Far cry 5",
      year: "2018",
      rating: "78",
      price: "60",
      originalPrice: null,
      discount: null,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/38f4b02fce3ecf22e464c9b756b3f089efc399db?width=442",
      isFree: false,
      genres: ["Shooting", "Open World"],
      platform: "PC",
      publisher: "Ubisoft",
      players: "Co-op",
      isOnline: true,
    },
    {
      id: 8,
      title: "Pes 2021",
      year: "2021",
      rating: "73",
      price: "45",
      originalPrice: null,
      discount: null,
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/e2e41d8bcd1b655b20fccc30713cc887aa4408ca?width=442",
      isFree: false,
      genres: ["Sports", "Racing"],
      platform: "PlayStation 5",
      publisher: "Konami",
      players: "Multiplayer",
      isOnline: true,
    },
    {
      id: 9,
      title: "Alan Wake 2",
      year: "2023",
      rating: "93",
      price: "32",
      originalPrice: "40",
      discount: "20",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/9d4e731eaa351419ed3a2f801b4b437e6de7ee72?width=442",
      isFree: false,
      genres: ["Horror", "Survival"],
      platform: "Xbox Series X",
      publisher: "Remedy Entertainment",
      players: "Single Player",
      isOnline: false,
    },
    {
      id: 10,
      title: "The Witcher 3",
      year: "2015",
      rating: "93",
      price: "32",
      originalPrice: "40",
      discount: "20",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/6b886de11ebfe166dc0d2654b7ad6b46945ecbc1?width=442",
      isFree: false,
      genres: ["Action", "RPG", "Open World"],
      platform: "Nintendo Switch",
      publisher: "CD Projekt Red",
      players: "Single Player",
      isOnline: false,
    },
  ];

  const toggleGenre = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const searchTermMatch = game.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const genreMatch =
        selectedGenres.length === 0 ||
        game.genres.some((g) => selectedGenres.includes(g));
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

  const scrollGenres = (direction) => {
    if (genreContainerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      genreContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen text-white font-sans">
      <style>{`
        .gradient-primary { background-image: linear-gradient(to right, #FF01D9, #760181, #5A30D7); }
        .gradient-text { -webkit-background-clip: text; background-clip: text; }
        .text-gaming-yellow { color: #FFCC00; }
        .text-grey-200 { color: #BEBEBE; }
      `}</style>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[120px] py-8 lg:py-16">
        <div className="text-center mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-white mb-1">
            Games By Filter
          </h1>
          <p className="text-grey-200 text-sm lg:text-base">
            At This Section You Can Search For Games by multiple filters
          </p>
        </div>

        <div className="max-w-[1268px] mx-auto space-y-8">
          <div className="flex items-center gap-4 bg-[#181724] rounded-lg px-3 py-2">
            <svg
              className="w-8 h-8 text-white flex-shrink-0"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M22.6667 22.6667L28 28M4 14.6667C4 17.4956 5.12381 20.2088 7.12419 22.2091C9.12458 24.2095 11.8377 25.3333 14.6667 25.3333C17.4956 25.3333 20.2088 24.2095 22.2091 22.2091C24.2095 20.2088 25.3333 17.4956 25.3333 14.6667C25.3333 11.8377 24.2095 9.12458 22.2091 7.12419C20.2088 5.12381 17.4956 4 14.6667 4C11.8377 4 9.12458 5.12381 7.12419 7.12419C5.12381 9.12458 4 11.8377 4 14.6667Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Game Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 bg-transparent text-[#BEBEBE] placeholder-[#BEBEBE] border-none outline-none text-base"
            />
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
            <button
              onClick={() => scrollGenres("left")}
              className="w-11 h-11 border border-white rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-white/10 transition-colors"
            >
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M16 9.9H4M4 9.9L9.4 4.5M4 9.9L9.4 15.3"
                  stroke="currentColor"
                />
              </svg>
            </button>
            <div
              ref={genreContainerRef}
              className="flex-1 flex items-center gap-2 lg:gap-4 flex-nowrap overflow-x-hidden"
            >
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => toggleGenre(genre)}
                  className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm lg:text-base font-normal transition-all ${
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
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.00024 9.9H16.0002M16.0002 9.9L10.6002 4.5M16.0002 9.9L10.6002 15.3"
                  stroke="currentColor"
                />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-9">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-9">
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

          <div className="flex flex-col sm:flex-row gap-6 lg:gap-16 justify-center">
            <div className="flex items-center gap-8">
              <span className="text-white text-xl">Online</span>
              <button
                onClick={() => setOnlineEnabled(!onlineEnabled)}
                className={`relative w-[50px] h-6 rounded-full border-2 transition-all ${
                  onlineEnabled
                    ? "gradient-primary border-transparent"
                    : "border-pink-500"
                }`}
              >
                <div
                  className={`absolute w-4 h-4 bg-white rounded-full top-0.5 transition-all transform ${
                    onlineEnabled ? "translate-x-[26px]" : "translate-x-0.5"
                  }`}
                ></div>
              </button>
            </div>
            <div className="flex items-center gap-8">
              <span className="text-white text-xl">Free</span>
              <button
                onClick={() => setFreeEnabled(!freeEnabled)}
                className={`relative w-[50px] h-6 rounded-full border-2 transition-all ${
                  freeEnabled
                    ? "gradient-primary border-transparent"
                    : "border-pink-500"
                }`}
              >
                <div
                  className={`absolute w-4 h-4 bg-white rounded-full top-0.5 transition-all transform ${
                    freeEnabled ? "translate-x-[26px]" : "translate-x-0.5"
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-[1268px] mx-auto mt-16 space-y-5">
          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredGames.slice(0, visibleCount).map((game) => (
                <div
                  key={game.id}
                  className=" hover:border-orange-500 hover:shadow-lg bg-transparent border border-violet-500 rounded-xl p-2.5 space-y-3 flex flex-col"
                >
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full aspect-[3/4] object-cover rounded-xl"
                  />
                  <div className="space-y-3 flex-grow flex flex-col justify-between pt-3">
                    <h3 className="text-white text-base font-medium">
                      {game.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-grey-200">
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M5.673 0.5C5.85865 0.5 6.0367 0.57375 6.16797 0.705025C6.29925 0.836301 6.373 1.01435 6.373 1.2V2.509H13.89V1.209C13.89 1.02335 13.9637 0.845301 14.095 0.714025C14.2263 0.58275 14.4043 0.509 14.59 0.509C14.7757 0.509 14.9537 0.58275 15.085 0.714025C15.2162 0.845301 15.29 1.02335 15.29 1.209V2.509H18C18.5303 2.509 19.0388 2.71958 19.4139 3.09443C19.7889 3.46929 19.9997 3.97774 20 4.508V18.501C19.9997 19.0313 19.7889 19.5397 19.4139 19.9146C19.0388 20.2894 18.5303 20.5 18 20.5H2C1.46974 20.5 0.961184 20.2894 0.58614 19.9146C0.211096 19.5397 0.00026513 19.0313 0 18.501L0 4.508C0.00026513 3.97774 0.211096 3.46929 0.58614 3.09443C0.961184 2.71958 1.46974 2.509 2 2.509H4.973V1.199C4.97327 1.01352 5.04713 0.835731 5.17838 0.704672C5.30963 0.573612 5.48752 0.5 5.673 0.5ZM1.4 8.242V18.501C1.4 18.5798 1.41552 18.6578 1.44567 18.7306C1.47583 18.8034 1.52002 18.8695 1.57574 18.9253C1.63145 18.981 1.69759 19.0252 1.77039 19.0553C1.84319 19.0855 1.92121 19.101 2 19.101H18C18.0788 19.101 18.1568 19.0855 18.2296 19.0553C18.3024 19.0252 18.3685 18.981 18.4243 18.9253C18.48 18.8695 18.5242 18.8034 18.5543 18.7306C18.5845 18.6578 18.6 18.5798 18.6 18.501V8.256L1.4 8.242ZM6.667 15.119V16.785H5V15.119H6.667ZM10.833 15.119V16.785H9.167V15.119H10.833ZM15 15.119V16.785H13.333V15.119H15ZM6.667 11.142V12.808H5V11.142H6.667ZM10.833 11.142V12.808H9.167V11.142H10.833ZM15 11.142V12.808H13.333V11.142H15ZM4.973 3.908H2C1.92121 3.908 1.84319 3.92352 1.77039 3.95367C1.69759 3.98382 1.63145 4.02802 1.57574 4.08374C1.52002 4.13945 1.47583 4.20559 1.44567 4.27839C1.41552 4.35119 1.4 4.42921 1.4 4.508V6.843L18.6 6.857V4.508C18.6 4.42921 18.5845 4.35119 18.5543 4.27839C18.5242 4.20559 18.48 4.13945 18.4243 4.08374C18.3685 4.02802 18.3024 3.98382 18.2296 3.95367C18.1568 3.92352 18.0788 3.908 18 3.908H15.29V4.837C15.29 5.02265 15.2162 5.2007 15.085 5.33197C14.9537 5.46325 14.7757 5.537 14.59 5.537C14.4043 5.537 14.2263 5.46325 14.095 5.33197C13.9637 5.2007 13.89 5.02265 13.89 4.837V3.908H6.373V4.828C6.373 5.01365 6.29925 5.1917 6.16797 5.32297C6.0367 5.45425 5.85865 5.528 5.673 5.528C5.48735 5.528 5.3093 5.45425 5.17803 5.32297C5.04675 5.1917 4.973 5.01365 4.973 4.828V3.908Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span>{game.year}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-5 h-5 bg-[#001A36] border-2 border-[#FFCC00] rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3"
                            viewBox="0 0 20 21"
                            fill="none"
                          >
                            <path
                              d="M9.99167 0.500003C8.01421 0.501651 6.08164 1.08954 4.43824 2.18936C2.79485 3.28917 1.51442 4.85153 0.75882 6.67894C0.00322089 8.50635 -0.193624 10.5167 0.193169 12.456C0.579962 14.3953 1.53303 16.1763 2.93188 17.574C4.33074 18.9717 6.11258 19.9233 8.05216 20.3085C9.99175 20.6936 12.002 20.4951 13.8288 19.738C15.6555 18.9809 17.2168 17.6991 18.3153 16.0548C19.4137 14.4105 20 12.4775 20 10.5V10.4883C19.9969 7.83675 18.9408 5.29494 17.064 3.42186C15.1872 1.54878 12.6433 0.497792 9.99167 0.500003ZM9.94584 2.63667C12.0228 2.63512 14.0153 3.45848 15.4854 4.9257C16.9554 6.39292 17.7826 8.38388 17.785 10.4608V10.4692C17.785 12.018 17.3258 13.532 16.4655 14.8199C15.6052 16.1078 14.3824 17.1117 12.9516 17.7047C11.5208 18.2978 9.94637 18.4533 8.42722 18.1517C6.90806 17.8501 5.51243 17.1049 4.41674 16.0102C3.32105 14.9156 2.57448 13.5207 2.27142 12.0018C1.96835 10.4829 2.12239 8.90833 2.71407 7.47699C3.30574 6.04566 4.30848 4.82188 5.59555 3.96033C6.88261 3.09878 8.3962 2.63815 9.945 2.63667H9.94584ZM8.60417 16.9683L10.3092 15.2633L7.02584 11.98C6.88834 11.8417 6.73834 11.6692 6.6575 11.4733C6.47334 11.0817 6.3925 10.4708 6.84167 10.0217C7.395 9.46834 8.13167 9.69917 8.84667 10.4133L12.0033 13.57L13.7083 11.865L10.4133 8.57C10.2606 8.41792 10.1324 8.24306 10.0333 8.05167C9.81417 7.6025 9.825 7.03834 10.2292 6.635C10.7933 6.07 11.5308 6.2775 12.3492 7.09584L15.4133 10.16L17.1183 8.455L13.8 5.13667C12.1183 3.455 10.54 3.5125 9.45667 4.595C9.04167 5.01084 8.78834 5.44834 8.66167 5.94334C8.54669 6.40309 8.53106 6.88207 8.61584 7.34834L8.59334 7.37167C7.76334 7.02667 6.81834 7.23334 6.09334 7.95917C5.125 8.92667 5.16 9.9525 5.275 10.5508L5.24 10.5867L4.39917 9.90667L2.92417 11.3817C3.55271 11.9503 4.16761 12.5338 4.76834 13.1317L8.60417 16.9683Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <span className="text-gaming-yellow text-base font-medium">
                          {game.rating}
                        </span>
                        <span>/100</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2">
                        {game.isFree ? (
                          <span className="text-white text-base font-normal">
                            Free
                          </span>
                        ) : (
                          <>
                            {game.originalPrice && (
                              <div className="flex flex-col items-start">
                                <div className="text-grey-200 text-xs line-through relative">
                                  {game.originalPrice}$
                                </div>
                              </div>
                            )}
                            <span className="text-white text-base font-medium">
                              {game.price}$
                            </span>
                            {game.discount && (
                              <div className="gradient-primary text-white text-xs px-1 py-0.5 rounded">
                                {game.discount}%
                              </div>
                            )}
                          </>
                        )}
                      </div>
                      <button className="flex items-center gap-1 text-white text-xs hover:opacity-80 transition-opacity">
                        <span>Buy Now</span>
                        <svg className="w-4 h-2" viewBox="0 0 17 9" fill="none">
                          <path
                            d="M16.1535 4.85355C16.3488 4.65829 16.3488 4.34171 16.1535 4.14645L12.9716 0.964466C12.7763 0.769204 12.4597 0.769204 12.2645 0.964466C12.0692 1.15973 12.0692 1.47631 12.2645 1.67157L15.0929 4.5L12.2645 7.32843C12.0692 7.52369 12.0692 7.84027 12.2645 8.03553C12.4597 8.2308 12.7763 8.2308 12.9716 8.03553L16.1535 4.85355ZM0.799988 4.5V5H15.8V4.5V4H0.799988V4.5Z"
                            fill="url(#paint0_linear_arrow)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_arrow"
                              x1="8.3"
                              y1="4.5"
                              x2="8.3"
                              y2="5.5"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#FF01D9" />
                              <stop offset="0.5" stopColor="#760181" />
                              <stop offset="1" stopColor="#5A30D7" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 text-grey-200">
              <h3 className="text-xl font-bold mb-2">No Games Found</h3>
              <p>Try adjusting your filters to find what you're looking for.</p>
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
