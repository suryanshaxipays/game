import { useState } from "react";
import { games } from "../data/games";

// --- Import all icons as image files ---
import HomeIcon from "../assets/Home2/home.png";
import AboutIcon from "../assets/Home2/home.png";
import CategoryIcon from "../assets/Home2/category.png";
import FeaturesIcon from "../assets/Home2/home.png";
import SupportIcon from "../assets/Home2/home.png";
import ChevronDownIcon from "../assets/Home2/chevron-down.png";
import SearchIcon from "../assets/Home2/search.png";
import FilterIcon from "../assets/Home2/filter.png";

// --- Sidebar Item ---
const SidebarItem = ({ icon, text, active = false }) => {
  const baseClasses =
    "flex items-center p-3 rounded-lg transition-colors duration-200";
  const activeClasses =
    "text-white bg-gradient-to-r from-[#6919C8] to-[#A319D8]";
  const inactiveClasses = "hover:bg-gray-700";

  return (
    <li className="mb-2">
      <a
        href="#"
        className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}
      >
        <img src={icon} alt={text} className="h-5 w-5" />
        <span className="ml-3">{text}</span>
      </a>
    </li>
  );
};

// --- Sidebar ---
const Sidebar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);

  return (
    <aside className="bg-[#1F2437] text-gray-300 w-64 min-h-screen p-4 fixed lg:relative -translate-x-full lg:translate-x-0 transition-transform duration-300 z-20">
      <div className="flex flex-col h-full">
        <div className="text-white text-2xl font-bold mb-8 flex items-center">
          The Warlock
        </div>

        <nav className="flex-grow">
          <ul>
            <SidebarItem icon={HomeIcon} text="Home Page" active />
            <SidebarItem icon={AboutIcon} text="About" />

            {/* Dropdown Category */}
            <li className="mb-2">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="w-full flex items-center justify-between p-3 rounded-lg text-white bg-gradient-to-r from-[#6919C8] to-[#A319D8]"
              >
                <div className="flex items-center">
                  <img src={CategoryIcon} alt="Category" className="h-5 w-5" />
                  <span className="ml-3">Game Category</span>
                </div>
                <img
                  src={ChevronDownIcon}
                  alt="Chevron Down"
                  className={`h-5 w-5 transition-transform ${
                    isCategoryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isCategoryOpen && (
                <ul className="mt-2 ml-4 space-y-1">
                  <li>
                    <a
                      href="#"
                      className="block p-2 rounded-md hover:bg-gray-700 text-sm"
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 rounded-md hover:bg-gray-700 text-sm"
                    >
                      Adventure
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block p-2 rounded-md hover:bg-gray-700 text-sm"
                    >
                      Strategy
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <SidebarItem icon={FeaturesIcon} text="Features" />
            <SidebarItem icon={SupportIcon} text="Support" />
          </ul>
        </nav>
      </div>
    </aside>
  );
};

// --- Header ---
const Header = () => (
  <header className="flex items-center justify-between p-4 bg-[#181C2C] sticky top-0 z-10">
    <div className="relative w-full max-w-md">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <img src={SearchIcon} alt="Search" className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-[#1F2437] text-white placeholder-gray-400 border border-transparent rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
    <button className="ml-4 text-gray-300 hover:text-white">
      <img src={FilterIcon} alt="Filter" className="h-6 w-6" />
    </button>
  </header>
);

// --- Hero Banner ---
const HeroBanner = () => (
  <div className="relative rounded-xl overflow-hidden m-4 md:m-6">
    <img
      src="https://placehold.co/1200x400/0B101B/FFF?text=Wolf+Hunting"
      alt="Wolf Hunting Game Banner"
      className="w-full h-auto object-cover min-h-[200px] md:min-h-[300px]"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent p-6 md:p-12 flex flex-col justify-center">
      <h1 className="text-white text-3xl md:text-5xl font-bold">
        Wolf Hunting!
      </h1>
      <p className="text-yellow-400 mt-2 text-lg">
        Play game and earn <span className="font-bold">1500</span> points✨
      </p>
      <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-lg w-fit transition-colors">
        Play Now
      </button>
    </div>
  </div>
);

// --- Game Card ---
const GameCard = ({ title, thumbnail }) => (
  <div className="group rounded-lg overflow-hidden cursor-pointer">
    <img
      src={thumbnail}
      alt={title}
      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
    />
    <div className="mt-2">
      <h3 className="text-white font-semibold truncate">{title}</h3>
    </div>
  </div>
);

// --- Game Section ---
const GameSection = ({ title, games, linkText }) => (
  <section className="px-4 md:px-6 py-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-white text-xl md:text-2xl font-bold">{title}</h2>
      {linkText && (
        <a href="#" className="text-gray-400 hover:text-white text-sm">
          {linkText}
        </a>
      )}
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
      {games.map((game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </div>
  </section>
);

// --- Main Content ---
const MainContent = () => (
  <main className="flex-1 bg-[#181C2C] min-h-screen overflow-y-auto">
    <Header />
    <HeroBanner />
    <GameSection
      title="Top 10 Trending Games"
      games={games}
      linkText="View all"
    />
    <div className="px-4 md:px-6">
      <h2 className="text-white text-xl md:text-2xl font-bold mb-4 border-b-2 border-purple-500 pb-2 inline-block">
        Recently Played Games
      </h2>
    </div>
    <GameSection games={games.slice(0, 3)} />
  </main>
);

// --- Main Page ---
export default function Home2Page() {
  return (
    <div className="bg-[#181C2C] font-sans flex min-h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
}
