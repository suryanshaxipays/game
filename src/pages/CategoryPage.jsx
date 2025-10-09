import React, { useState, useMemo } from "react";
import { games } from "../data/games";
import { Search, Bell, Home, ChevronDown, Heart } from "lucide-react";

const onlineUsers = [
  {
    name: "Crimsontriger46",
    status: "Resident evil 4",
    avatar: "https://i.pravatar.cc/40?u=user1",
  },
  {
    name: "Crimsontriger46",
    status: "Resident evil 4",
    avatar: "https://i.pravatar.cc/40?u=user2",
  },
  {
    name: "Crimsontriger46",
    status: "Resident evil 4",
    avatar: "https://i.pravatar.cc/40?u=user3",
  },
  {
    name: "Crimsontriger46",
    status: "Resident evil 4",
    avatar: "https://i.pravatar.cc/40?u=user4",
  },
  {
    name: "Crimsontriger46",
    status: "Resident evil 4",
    avatar: "https://i.pravatar.cc/40?u=user5",
  },
  {
    name: "Crimsontriger46",
    status: "Resident evil 4",
    avatar: "https://i.pravatar.cc/40?u=user6",
  },
  {
    name: "Crimsontriger46",
    status: "Resident evil 4",
    avatar: "https://i.pravatar.cc/40?u=user7",
  },
  {
    name: "Crimsontriger46",
    status: "Resident evil 4",
    avatar: "https://i.pravatar.cc/40?u=user8",
  },
];

const CategoryPage = () => {
  // Get unique genres from games data
  const categories = useMemo(() => {
    const uniqueGenres = [...new Set(games.map((g) => g.genre))];
    return uniqueGenres.map((genre) => {
      // Assign icons based on genre
      const iconMap = {
        Mahjong: "🀄",
        Solitaire: "🃏",
        Action: "⚔️",
        "Match 3": "💎",
        "Mind / Puzzle": "🧩",
        "Classic Games": "🎮",
        "Hidden Objects": "🔍",
      };
      return {
        name: genre,
        icon: iconMap[genre] || "🎯",
      };
    });
  }, []);

  const [activeCategory, setActiveCategory] = useState(
    categories[0]?.name || "Mahjong"
  );
  const [featuredGame, setFeaturedGame] = useState(games[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const categoryGames = useMemo(
    () => games.filter((g) => g.genre === activeCategory),
    [activeCategory]
  );

  // Update featured game when category changes
  React.useEffect(() => {
    const firstGame = categoryGames[0];
    if (firstGame) {
      setFeaturedGame(firstGame);
    }
  }, [activeCategory, categoryGames]);

  const recommendationGames = categoryGames
    .filter((g) => g.id !== featuredGame?.id)
    .slice(0, 10);

  // Get some screenshots for the about section
  const aboutScreenshots = categoryGames.slice(0, 4);

  return (
    <div className="bg-[#0B0E1A] min-h-screen text-white font-sans">
      {/* Header */}
      <header className="bg-[#0F1320] border-b border-gray-800 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Home size={18} />
          </div>
          <div>
            <h1 className="text-xl font-bold">The Warlock</h1>
            <p className="text-xs text-gray-400">Play Games Online</p>
          </div>
        </div>

        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#1A1F2E] border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <img
              src="https://flagcdn.com/w40/us.png"
              alt="US"
              className="w-6 h-4"
            />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
          </button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-[#0F1320] border-r border-gray-800 min-h-screen p-4">
          <nav className="space-y-2">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                  cat.name === activeCategory
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
              >
                <span className="text-xl">{cat.icon}</span>
                <span className="text-sm font-medium">{cat.name}</span>
              </button>
            ))}
            {categories.length > 6 && (
              <button className="w-full text-center text-purple-400 text-sm py-2 hover:text-purple-300">
                +{categories.length - 6} more
              </button>
            )}
          </nav>

          <div className="mt-8 pt-8 border-t border-gray-800">
            <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
              <img
                src="https://flagcdn.com/w40/us.png"
                alt="English"
                className="w-5 h-3"
              />
              <span>English(US)</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {isPlaying && featuredGame && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <div className="relative w-full max-w-5xl aspect-video bg-black rounded-lg">
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl shadow-lg"
                >
                  ×
                </button>
                <iframe
                  src={featuredGame.embedLink}
                  title={featuredGame.title}
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Featured Game */}
          {featuredGame && (
            <div className="relative rounded-2xl overflow-hidden mb-8 group">
              <img
                src={featuredGame.thumbnail}
                alt={featuredGame.title}
                className="w-full h-[500px] object-cover"
              />

              {/* Tags */}
              <div className="absolute top-6 left-6 flex gap-2">
                <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs">
                  {featuredGame.genre}
                </span>
                <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs">
                  Featured
                </span>
                <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs">
                  Popular
                </span>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-300 mb-2">
                      {featuredGame.genre.toUpperCase()}
                    </p>
                    <h2 className="text-5xl font-bold mb-4">
                      {featuredGame.title}
                    </h2>
                    <p className="text-gray-300 text-sm max-w-md mb-6">
                      Experience the ultimate {featuredGame.genre.toLowerCase()}{" "}
                      game. Immerse yourself in stunning gameplay and
                      unforgettable challenges.
                    </p>
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-lg flex items-center gap-2 transition-all shadow-lg"
                    >
                      PLAY
                    </button>
                  </div>
                  <button className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all">
                    <Heart size={24} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* About Section */}
          {aboutScreenshots.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">
                About {featuredGame?.title}
              </h3>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {aboutScreenshots.map((game) => (
                  <img
                    key={game.id}
                    src={game.thumbnail}
                    alt={game.title}
                    className="w-64 h-36 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => setFeaturedGame(game)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Recommendations */}
          {recommendationGames.length > 0 && (
            <div>
              <h3 className="text-xl font-bold mb-4">Recommendation</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {recommendationGames.map((game) => (
                  <div
                    key={game.id}
                    className="group cursor-pointer"
                    onClick={() => setFeaturedGame(game)}
                  >
                    <div className="relative rounded-lg overflow-hidden mb-2">
                      <img
                        src={game.thumbnail}
                        alt={game.title}
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all"></div>
                    </div>
                    <h4 className="text-sm font-medium truncate">
                      {game.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>

        {/* Online Users Sidebar */}
        <aside className="w-80 bg-[#0F1320] border-l border-gray-800 min-h-screen p-6">
          <h3 className="text-lg font-bold mb-6">Online Users</h3>
          <div className="space-y-4">
            {onlineUsers.map((user, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-400 truncate">
                    {user.status}
                  </p>
                </div>
                <button className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white text-xs font-bold rounded-full">
                  Join
                </button>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CategoryPage;
