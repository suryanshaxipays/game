import React from "react";
import GirlImage from "../assets/VRGirl.png";

const Girl_page = () => {
  return (
    <div className="w-full h-200 flex items-center justify-center overflow-hidden">
      <div className="scale-[1.17] origin-top ">
        <div className="relative  h-full w-full bg-[#0A0F21] flex items-center justify-center px-12 py-16">
          <div className="relative flex flex-col md:flex-row items-center md:items-start bg-gradient-to-br from-[#0D0F2A]/80 to-[#1B0F30]/80 rounded-2xl shadow-lg p-10 w-6xl border border-white/10 backdrop-blur-lg overflow-visible">
            {/* Left Image (outside top & bottom) */}
            <div className="flex-1 relative flex justify-center -mb-10 md:justify-start">
              <img
                src={GirlImage}
                alt="VR Girl"
                className="absolute bottom-0 w-[380px] md:w-[440px] lg:w-[1100px] h-[570px]  drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] 
                -top-22"
              />
            </div>

            {/* Right Content */}
            <div className="flex-1 text-center md:text-left z-10">
              <h2
                className="text-4xl md:text-5xl font-extrabold leading-tight"
                style={{
                  background:
                    "linear-gradient(98deg, #FFF 0.2%, #6375F1 50.7%, #FFF 93.98%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                DISCOVER THE{" "}
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
                  VIRTUAL REALITY
                </span>{" "}
                GAMING
              </h2>
              <p className="mt-6 text-gray-300 text-base md:text-lg max-w-md">
                A well-designed gaming header often incorporates elements such
                as game characters, iconic symbols, vibrant colors, and dynamic
                visuals to convey excitement, adventure, and the immersive
                nature of gaming.
              </p>

{/* Button */}
<div className="mt-8 inline-block relative group">
  <svg
    width="220"
    height="60"
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
      fontSize="18"
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

    {/* Gradient definitions */}
    <defs>
      {/* Border gradient */}
      <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6375F1" />
        <stop offset="100%" stopColor="#FF00A8" />
      </linearGradient>

      {/* Text gradient */}
      <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
