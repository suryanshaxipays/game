import React from "react";

// --- Images ---
import bgFooter from "../assets/fbg.png"; // background
import twitchLogo from "../assets/twitch.png";
import robloxLogo from "../assets/roblox.png";
import asusLogo from "../assets/asus.png";
import twitterIcon from "../assets/twitter.png";
import instagramIcon from "../assets/instagram.png";
import githubIcon from "../assets/github.png";

const Footer = () => {
  const logos = [
    { src: twitchLogo, alt: "Twitch" },
    { src: robloxLogo, alt: "Roblox" },
    { src: asusLogo, alt: "Asus" },
  ];

  const socialLinks = [
    { src: twitterIcon, alt: "Twitter", href: "#" },
    { src: instagramIcon, alt: "Instagram", href: "#" },
    { src: githubIcon, alt: "Github", href: "#" },
  ];

  const footerLinks = {
    Company: ["Products", "Apps & Games", "Features"],
    Help: ["Support", "About", "Contact Us"],
    Resources: ["Youtube Playlist", "How To - Blog", "Terms & Conditions"],
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgFooter})` }}
    >
      {/* Dark overlay */}
      <div className="absolute bg-#2716FF/100"></div>

      {/* Pink glow overlay */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#2716FF]/30 to-[#2716FF]/100"></div>

      <footer className="relative z-10 text-white">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Section */}
            <div className="lg:col-span-5">
              <p className="max-w-md mb-8 leading-relaxed text-gray-300">
                A well-designed gaming header often incorporates elements such
                as game characters, iconic symbols, vibrant colors, and dynamic
                visuals.
              </p>

              {/* Logos */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mb-8">
                {logos.map((logo) => (
                  <img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-3 object-contain brightness-0 invert"
                  />
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                  >
                    <img
                      src={social.src}
                      alt={social.alt}
                      className="w-10 h-10"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Spacer */}
            <div className="hidden lg:block lg:col-span-2"></div>

            {/* Right Section - Links */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <h3 className="font-bold uppercase tracking-wider mb-4">
                    {title}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-300 hover:text-white transition"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-6 text-sm text-gray-400">
          <p>&copy; Copyright 2023. All Rights Reserved by board</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
