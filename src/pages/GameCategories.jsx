import React from "react";
import { games } from "../data/games";

const GameCategories = () => {
  // Pick first 6 games from your data
  const selectedGames = games.slice(0, 6);

  return (
    <div className="mt-20 relative h-full w-full bg-[#0A0F21] text-white px-6 sm:px-10 lg:px-20 py-10 lg:py-16">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-10 lg:mb-12 pl-2">
        Choose Your Arena
      </h2>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row gap-6 w-full mx-auto">
        {/* Left Column */}
        <div className="flex flex-col gap-4 flex-1">
          {/* Big Card */}
          <div className="h-[200px] sm:h-[250px] lg:h-[310px] relative rounded-xl overflow-hidden">
            <img
              src={selectedGames[0].thumbnail}
              alt={selectedGames[0].genre}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 font-semibold">
              {selectedGames[0].genre}
            </div>
          </div>

          {/* Small cards row */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 rounded-xl overflow-hidden">
              <img
                src={selectedGames[1].thumbnail}
                alt={selectedGames[1].genre}
                className="w-full h-[180px] sm:h-[225px] object-cover"
              />
              <div className="absolute bottom-3 left-3 font-semibold">
                {selectedGames[1].genre}
              </div>
            </div>
            <div className="relative flex-1 rounded-xl overflow-hidden">
              <img
                src={selectedGames[2].thumbnail}
                alt={selectedGames[2].genre}
                className="w-full h-[180px] sm:h-[225px] object-cover"
              />
              <div className="absolute bottom-3 left-3 font-semibold">
                {selectedGames[2].genre}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 flex-1">
          {/* Small cards row */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 rounded-xl overflow-hidden">
              <img
                src={selectedGames[3].thumbnail}
                alt={selectedGames[3].genre}
                className="w-full h-[180px] sm:h-[225px] object-cover"
              />
              <div className="absolute bottom-3 left-3 font-semibold">
                {selectedGames[3].genre}
              </div>
            </div>
            <div className="relative flex-1 rounded-xl overflow-hidden">
              <img
                src={selectedGames[4].thumbnail}
                alt={selectedGames[4].genre}
                className="w-full h-[180px] sm:h-[225px] object-cover"
              />
              <div className="absolute bottom-3 left-3 font-semibold">
                {selectedGames[4].genre}
              </div>
            </div>
          </div>

          {/* Big Card */}
          <div className="h-[200px] sm:h-[250px] lg:h-[300px] relative rounded-xl overflow-hidden">
            <img
              src={selectedGames[5].thumbnail}
              alt={selectedGames[5].genre}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 font-semibold">
              {selectedGames[5].genre}
            </div>
          </div>
        </div>
      </div>

      {/* Arrows & Progress */}
      <div className="hidden  absolute top-6 right-6 lg:top-20 lg:-right-15 lg:flex flex-col items-center space-y-3">
        {/* Arrows */}
        <div className="flex space-x-2">
          <button className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-md bg-[#1E2235] hover:bg-[#2A2F4C]">
            ←
          </button>
          <button className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-md bg-[#1E2235] hover:bg-[#2A2F4C]">
            →
          </button>
        </div>

        {/* Progress Bars */}
        <div className="flex space-x-2">
          <span className="w-4 h-1 lg:w-6 rounded bg-orange-500"></span>
          <span className="w-4 h-1 lg:w-6 rounded bg-purple-600"></span>
        </div>
      </div>
    </div>
  );
};

export default GameCategories;
