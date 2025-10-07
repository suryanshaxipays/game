import React, { useState } from "react";
import main1 from "../../assets/Feature/art1.jpg"; // Whispers of the Blockchain
import main2 from "../../assets/Feature/art2.jpg"; // Fragments of Infinity
import main3 from "../../assets/Feature/art3.jpg"; // Prismatic Dreams

const SmartRecommendation = () => {
  const images = [
    {
      id: 1,
      title: "Whispers of the Blockchain",
      tags: ["Digital Art", "2024 Trend"],
      img: main1,
    },
    {
      id: 2,
      title: "Fragments of Infinity",
      tags: ["Digital Art", "2024 Trend"],
      img: main2,
    },
    {
      id: 3,
      title: "Prismatic Dreams",
      tags: ["Digital Art", "2024 Trend"],
      img: main3,
    },
  ];

  const [mainIndex, setMainIndex] = useState(0);

  const handleCardClick = (index) => {
    setMainIndex(index);
  };

  const nextImage = () => {
    setMainIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setMainIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="w-full min-h-screen bg-[#070B16] text-white flex flex-col items-center px-5 md:px-16 py-16">
      {/* Header */}
      <div className="w-full max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <button className="border border-gray-600 rounded-full px-4 py-1 text-sm text-gray-300 mb-3 md:mb-0 hover:border-pink-500 transition">
              + Top Categories
            </button>
            <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">
              Smart <br /> Recommendation
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mt-6 md:mt-0">
            {[
              "Digital Art",
              "Collectibles",
              "Music",
              "Gaming",
              "Virtual Worlds",
            ].map((cat, i) => (
              <button
                key={i}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition ${
                  cat === "Digital Art"
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 border-none"
                    : "border border-gray-600 hover:border-pink-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Main Image */}
          <div className="relative col-span-1 md:col-span-1 rounded-3xl overflow-hidden group">
            <img
              src={images[mainIndex].img}
              alt={images[mainIndex].title}
              className="w-full h-[380px] md:h-[420px] lg:h-[480px] object-cover"
            />

            {/* Tags */}
            <div className="absolute top-4 left-4 flex gap-2">
              {images[mainIndex].tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#ffffff22] backdrop-blur-md px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="absolute bottom-6 left-6 text-xl md:text-2xl font-semibold">
              {images[mainIndex].title}
            </h3>

            {/* Action Button */}
            <button className="absolute bottom-6 right-6 bg-gradient-to-r from-pink-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center hover:opacity-90 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          {/* Side Images */}
          <div className="flex flex-row gap-6">
            {images.map((img, index) => {
              if (index === mainIndex) return null;
              return (
                <div
                  key={img.id}
                  className="relative rounded-3xl overflow-hidden cursor-pointer group"
                  onClick={() => handleCardClick(index)}
                >
                  <img
                    src={img.img}
                    alt={img.title}
                    className="w-full h-full md:h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute bottom-4 left-4 text-lg font-semibold">
                    {img.title}
                  </div>
                  <button className="absolute top-3 right-3 bg-[#ffffff22] backdrop-blur-md w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#ffffff33] transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={prevImage}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-600 hover:border-pink-500 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextImage}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SmartRecommendation;
