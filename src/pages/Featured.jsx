import React, { useEffect, useState } from "react";
import { games } from "../data/games";

const ChevronLeftIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" {...props}>
    <path
      d="M15 18L9 12l6-6"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const ChevronRightIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" {...props}>
    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const Featured = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? games.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === games.length - 1 ? 0 : prev + 1));
  };

  const getLoopedIndex = (index) => (index + games.length) % games.length;

  // 5 items for smooth side animation
  const prevPrev = getLoopedIndex(currentIndex - 2);
  const prev = getLoopedIndex(currentIndex - 1);
  const next = getLoopedIndex(currentIndex + 1);
  const nextNext = getLoopedIndex(currentIndex + 2);

  const displayedGames = [
    games[prevPrev],
    games[prev],
    games[currentIndex],
    games[next],
    games[nextNext],
  ];

  return (
    <div className="mt-10 w-full flex flex-col items-center justify-center p-4 sm:p-8 md:px-16 bg-[#0A0F21] overflow-hidden font-sans">
      {/* Content */}
      <div className="text-center mt-7 mb-16 max-w-2xl">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold"
          style={{
            background:
              "linear-gradient(98deg, #FFF 0.2%, #6375F1 50.7%, #FFF 93.98%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Featured Game
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-400">
          Dive into our featured game of the week, packed with challenges,
          rewards, and exclusive events you won’t find anywhere else.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-7xl h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
        {displayedGames.map((game, i) => {
          const base = "absolute transition-all duration-700 ease-in-out";
          let styles = "";

          if (i === 2) {
            // Center
            styles =
              "left-1/2 -translate-x-1/2 z-20 w-[55%] h-full scale-90 opacity-100";
          } else if (i === 1) {
            // Left visible
            styles =
              "left-0 translate-x-[-50%] z-10 w-[45%] h-full scale-70 opacity-70";
          } else if (i === 3) {
            // Right visible
            styles =
              "right-0 translate-x-[50%] z-10 w-[45%] h-full scale-70 opacity-70";
          } else {
            // Far sides
            styles =
              "left-1/2 -translate-x-1/2 opacity-0 scale-75 pointer-events-none";
          }

          return (
            <div key={game.id} className={`${base} ${styles}`}>
              <img
                src={game.thumbnail}
                alt={game.title}
                className={`w-full h-full object-cover rounded-xl ${
                  i === 2
                    ? "border-4 border-pink-500/20 shadow-[0_0_40px_15px_rgba(255,0,168,0.6)]"
                    : "shadow-lg"
                } transition-all duration-700`}
                style={{
                  filter:
                    i === 2
                      ? "drop-shadow(0 0 5px rgba(255,0,168,0.8))"
                      : "none",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-305 z-50 -translate-y-1/2 w-full max-w-7xl px-6 flex justify-between items-center">
        <button
          onClick={prevSlide}
          className="group w-12 h-12 rounded-full bg-black/40 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all"
        >
          <ChevronLeftIcon className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="group w-12 h-12 rounded-full bg-black/40 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all"
        >
          <ChevronRightIcon className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default Featured;
