import React from "react";
import GirlImage from "../assets/VRGirl.png";

const Girl_page = () => {
  return (
    <div className="-mt-15 -mb-25  w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0F21]">
      <div className="scale-100 lg:scale-[1.17] origin-top w-full">
        <div className="relative w-full flex items-center justify-center px-6 sm:px-10 lg:px-12 py-10 lg:py-16">
          <div className="relative flex flex-col md:flex-row items-center md:items-start bg-gradient-to-br from-[#0D0F2A]/80 to-[#1B0F30]/80 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 w-full max-w-6xl border border-white/10 backdrop-blur-lg">
            {/* Left Image */}
            <div className="flex-1 relative flex justify-center md:justify-start mb-6 md:mb-0">
              <img
                src={GirlImage}
                alt="VR Girl"
                className="relative md:absolute bottom-0 
                w-[220px] sm:w-[300px] md:w-[440px] lg:w-[700px] 
                h-auto  lg:-bottom-104 md:-bottom-104
                drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]"
              />
            </div>

            {/* Right Content */}
            <div className="flex-1 text-center md:text-left z-10">
              <h2
                className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight"
                style={{
                  background:
                    "linear-gradient(98deg, #FFF 0.2%, #6375F1 50.7%, #FFF 93.98%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Step Into a{" "}
                <span
                  className=" bg-clip-text text-transparent"
                  style={{
                    background:
                      "linear-gradient(98deg, #FFF 0.2%, #6375F1 50.7%, #FFF 93.98%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  New World of
                </span>{" "}
                Play
              </h2>

              <p className="mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
                Gaming isn’t just on a screen anymore — it’s an experience you
                can feel, live, and explore. Lose yourself in adventures that
                blur the line between reality and imagination, where every move
                takes you deeper into the game.
              </p>

              {/* Button */}
              <div className="mt-6 sm:mt-8 inline-block relative group">
                <svg
                  width="200"
                  height="55"
                  viewBox="0 0 220 60"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer transition-all duration-300"
                >
                  {/* Border polygon */}
                  <polygon
                    points="30,0 220,0 190,60 0,60"
                    fill="transparent"
                    stroke="url(#borderGradient)"
                    strokeWidth="2"
                    className="transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,0,168,0.8)]"
                  />

                  {/* Button text */}
                  <text
                    x="110"
                    y="35"
                    fontSize="16"
                    fontWeight="bold"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,0,168,0.8)]"
                    style={{
                      fill: "url(#textGradient)",
                      letterSpacing: "2px",
                    }}
                  >
                    PLAY NOW
                  </text>

                  {/* Gradient defs */}
                  <defs>
                    <linearGradient
                      id="borderGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#6375F1" />
                      <stop offset="100%" stopColor="#FF00A8" />
                    </linearGradient>

                    <linearGradient
                      id="textGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#6375F1" />
                      <stop offset="100%" stopColor="#FF00A8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Girl_page;
