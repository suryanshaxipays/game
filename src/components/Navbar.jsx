import { useState } from "react";
import Logo from "../assets/logo.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar (unchanged) */}
      <nav className="lg:fixed hidden lg:block w-full h-[60px] border-b border-white/30 absolute top-0 left-0 z-50 bg-black/10 backdrop-blur-md">
        <div className="flex items-center justify-between h-full px-10">
          {/* Left Logo */}
          <div className="flex items-center">
            <div className="w-[66px] h-[80px] flex items-center justify-center">
              <img
                src={Logo}
                alt="Logo"
                className="h-[40px] w-[40px] object-contain"
              />
            </div>
          </div>

          {/* Center Menu */}
          <ul className="flex items-center space-x-10">
            {["Products", "Apps & Games", "Features", "Support", "About"].map(
              (item, idx) => (
                <li
                  key={idx}
                  className="text-white text-[13px] font-medium uppercase tracking-wider hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>

          {/* Right Button */}
          <h1 className="text-white text-[13px] font-medium uppercase tracking-wider hover:text-yellow-400 transition-colors cursor-pointer">
            CONNECT WALLET
          </h1>
        </div>

        {/* Vertical Separators */}
        <div className="absolute top-0 left-[280px] w-px h-full bg-white/40"></div>
        <div className="absolute top-0 right-[280px] w-px h-full bg-white/40"></div>
      </nav>

      {/* Mobile Navbar */}
      <nav className=" lg:hidden w-full h-[60px] border-b border-white/30 fixed top-0 left-0 z-50 bg-black/10 backdrop-blur-md px-4 flex items-center justify-between">
        {/* Left Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-[35px] w-[35px] object-contain"
          />
        </div>

        {/* Right Section with gap */}
        <div className="flex items-center gap-5">
          {/* Connect Button */}
          <button className="text-white text-[12px] font-medium uppercase tracking-wider hover:text-yellow-400 transition-colors">
            Connect
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1 focus:outline-none"
          >
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col absolute top-[60px] right-0 bg-black/90 backdrop-blur-md rounded-md shadow-lg p-4 space-y-3 w-44 z-50">
          {["Products", "Apps & Games", "Features", "Support", "About"].map(
            (item, idx) => (
              <li
                key={idx}
                className="text-white text-sm font-medium hover:text-yellow-400 cursor-pointer"
              >
                {item}
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
};

export default Navbar;
