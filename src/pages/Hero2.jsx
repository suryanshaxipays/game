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
    { icon: mobileIcon, title: "Mobile Game Development" },
    { icon: pcIcon, title: "PC Game Development" },
    { icon: psIcon, title: "PS4 Game Development" },
    { icon: arvrIcon, title: "AR/VR Solutions" },
    { icon: designIcon, title: "AR/VR design" },
    { icon: modelIcon, title: "3D Modelings" },
  ];

  return (
    <div className="relative h-full w-full">
      {/* Background image */}
      <img src={second} alt="background" className="w-full h-full object-cover" />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white bg-black/40">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-19">
          Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry.
        </h1>
        <p className="max-w-3xl text-sm md:text-base mb-19">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </p>

       {/* Services */}
<div className="flex flex-col items-center space-y-12">
  {/* Top row - 4 items */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
    {services.slice(0, 4).map((service, index) => (
      <div key={index} className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md">
          <img
            src={service.icon}
            alt={service.title}
            className="w-8 h-8 object-contain"
          />
        </div>
        <p className="text-sm md:text-base">{service.title}</p>
        <span className="text-red-500 text-lg">→</span>
      </div>
    ))}
  </div>

  {/* Bottom row - 2 items centered */}
  <div className="grid grid-cols-2 gap-33 justify-center">
    {services.slice(4, 6).map((service, index) => (
      <div key={index} className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md">
          <img
            src={service.icon}
            alt={service.title}
            className="w-8 h-8 object-contain"
          />
        </div>
        <p className="text-sm md:text-base">{service.title}</p>
        <span className="text-red-500 text-lg">→</span>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
};

export default Hero2;
