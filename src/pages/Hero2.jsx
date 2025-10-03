import React from "react";
import second from "../assets/bg2.png"; 
import mobileIcon from "../assets/mobile.png";
import pcIcon from "../assets/pc.png";
import psIcon from "../assets/ps.png";
import arvrIcon from "../assets/arvr.png";
import designIcon from "../assets/design.png";
import modelIcon from "../assets/model.png";

const Hero2 = () => {
  const services = [
    { icon: mobileIcon, title: "One Hub, Every Genre" },
    { icon: pcIcon, title: "Non-Stop Action" },
    { icon: psIcon, title: "Be the Champion" },
    { icon: arvrIcon, title: "Play Together" },
    { icon: designIcon, title: "Exclusive Perks" },
    { icon: modelIcon, title: "No Limits, Just Play" },
  ];

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-screen">
      {/* Background image - responsive height */}
      <img 
        src={second} 
        alt="background" 
        className="w-full h-full object-cover object-center" 
      />

      {/* Overlay content - improved spacing for mobile/tablet */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-16 text-white bg-black/50">
        {/* Heading - adjusted font sizes */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 lg:mb-8 max-w-[90%] sm:max-w-2xl lg:max-w-3xl">
          Level Up Your Game. Level Up Your World.
        </h1>

        {/* Description - responsive text and width */}
        <p className="text-sm sm:text-base lg:text-lg max-w-[90%] sm:max-w-xl lg:max-w-2xl mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          You're not just playing. You're stepping into a universe built for thrill, challenge, and endless fun. Here's why this is where gamers belong:
        </p>

        {/* Services - responsive grid and spacing */}
        <div className="flex flex-col items-center w-full max-w-[90%] sm:max-w-2xl lg:max-w-4xl space-y-6 sm:space-y-8 lg:space-y-12">
          {/* Top row - 2 cols mobile, 4 cols tablet+ */}
          <div className="grid grid-cols-4 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 w-full">
            {services.slice(0, 4).map((service, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 sm:space-y-3 lg:space-y-4">
                {/* Icon container - responsive sizes */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white shadow-md">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain"
                  />
                </div>
                {/* Title - responsive text */}
                <p className="text-xs sm:text-sm md:text-base text-center px-1">
                  {service.title}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom row - 2 items centered */}
          <div className="hidden  lg:grid grid-cols-2 gap-6 sm:gap-6 lg:gap-10 w-full max-w-xs sm:max-w-sm md:max-w-md">
            {services.slice(4, 6).map((service, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 sm:space-y-3 lg:space-y-4">
                {/* Icon container - responsive sizes */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white shadow-md">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain"
                  />
                </div>
                {/* Title - responsive text */}
                <p className="text-xs sm:text-sm md:text-base text-center px-1">
                  {service.title}
                </p>
                {/* Arrow - responsive size */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
