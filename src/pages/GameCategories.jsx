import React from "react";
import { games } from "../data/games";

const GameCategories = () => {
  // Pick first 6 games from your data (you can shuffle or slice differently if needed)
  const selectedGames = games.slice(0, 6);

  return (
    <div className="relative h-full w-full bg-[#0A0F21] text-white px-20 py-16">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-12 pl-2">Game Categories</h2>

      {/* Main layout: 2 columns next to each other */}
      <div className="flex gap-6 w-[100%] mx-auto">
        {/* Left Column */}
        <div className="flex flex-col gap-4 flex-1">
          {/* Big Card */}
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={selectedGames[0].thumbnail}
              alt={selectedGames[0].genre}
              className="w-full h-[350px] object-cover"
            />
            <div className="absolute bottom-3 left-3 font-semibold">
              {selectedGames[0].genre}
            </div>
          </div>

          {/* Small cards row */}
          <div className="flex gap-4">
            <div className="relative flex-1 rounded-xl overflow-hidden">
              <img
                src={selectedGames[1].thumbnail}
                alt={selectedGames[1].genre}
                className="w-full h-[225px] object-cover"
              />
              <div className="absolute bottom-3 left-3 font-semibold">
                {selectedGames[1].genre}
              </div>
            </div>
            <div className="relative flex-1 rounded-xl overflow-hidden">
              <img
                src={selectedGames[2].thumbnail}
                alt={selectedGames[2].genre}
                className="w-full h-[225px] object-cover"
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
          <div className="flex gap-4">
            <div className="relative flex-1 rounded-xl overflow-hidden">
              <img
                src={selectedGames[3].thumbnail}
                alt={selectedGames[3].genre}
                className="w-full h-[225px] object-cover"
              />
              <div className="absolute bottom-3 left-3 font-semibold">
                {selectedGames[3].genre}
              </div>
            </div>
            <div className="relative flex-1 rounded-xl overflow-hidden">
              <img
                src={selectedGames[4].thumbnail}
                alt={selectedGames[4].genre}
                className="w-full h-[225px] object-cover"
              />
              <div className="absolute bottom-3 left-3 font-semibold">
                {selectedGames[4].genre}
              </div>
            </div>
          </div>

          {/* Big Card */}
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={selectedGames[5].thumbnail}
              alt={selectedGames[5].genre}
              className="w-full h-[350px] object-cover"
            />
            <div className="absolute bottom-3 left-3 font-semibold">
              {selectedGames[5].genre}
            </div>
          </div>
        </div>
      </div>

      {/* Arrows & Progress */}
      <div className="absolute top-20 -right-15 flex flex-col items-center space-y-3 pr-42">
        {/* Arrows */}
        <div className="flex space-x-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-md bg-[#1E2235] hover:bg-[#2A2F4C]">
            ←
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-md bg-[#1E2235] hover:bg-[#2A2F4C]">
            →
          </button>
        </div>

        {/* Progress Bars */}
        <div className="flex space-x-2">
          <span className="w-6 h-1 rounded bg-orange-500"></span>
          <span className="w-6 h-1 rounded bg-purple-600"></span>
        </div>
      </div>
    </div>
  );
};

export default GameCategories;
