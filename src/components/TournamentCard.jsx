import React from 'react';
import second from "../assets/vi.png";


const TournamentCard = () => {
  return (
    <div className="relative w-fit">
      {/* Decorative Diamond with Glow */}
<div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-24 h-24 z-0">
  <svg 
    width="96" 
    height="96" 
    viewBox="0 -27 96 96"
  >
    <path 
      d="M48 12L84 48L48 84L12 48L48 12Z" 
      fill="white"
    />
  </svg>
</div>


      {/* Main Card Container */}
      <div className="relative  w-[480px] h-[200px]">
        {/* Glassmorphism Background with Complex Shape */}
        <div className="absolute inset-0">
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 520 260" 
            className="absolute inset-0 w-full h-full"
          >
            <defs>
              <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="17.5"/>
              </filter>
            </defs>
            <path 
              d="M0 18 L400 18 L400 160 L180 160 L180 242 L0 242 Z" 
              fill="rgba(255,255,255,0.05)" 
              stroke="rgba(255,255,255,0.1)" 
              strokeWidth="2"
              filter="url(#blur)"
              className="backdrop-blur-[17.5px] shadow-[-16px_16px_34px_rgba(0,0,0,0.25)]"
            />
          </svg>
          <div className="absolute inset-0 backdrop-blur-[17.5px] bg-white/5 border border-white/10 shadow-[-16px_16px_34px_rgba(0,0,0,0.25)]"
               style={{ clipPath: 'polygon(0 7%,66% 7%, 66% 62%, 27% 62%, 27% 93%, 0 93%)' }}>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative flex h-full">
          {/* Left Section - Date & Time */}
          <div className="flex flex-col justify-center items-center pr-4 w-36">
            <div className="text-center space-y-1">
              <div className="text-white font-gaming-bold  text-[15px] tracking-widest">
                MARCH
              </div>
              <div className="text-white  text-[55px] font-black leading-none tracking-tight font-gaming"
                   style={{ fontWeight: '900' }}>
                02
              </div>
              <div className="text-white/50 font-gaming-bold text-lg lg:text-xl tracking-wide">
                14:32:38
              </div>
            </div>
          </div>

          {/* Center Section - Video Thumbnail */}
          <div className="flex-1 flex items-center justify-center absolute pt-7 pl-33">
            <div className="relative w-42 h-21  border border-white/20 overflow-hidden bg-slate-800">
              <img 
                src={second}
                alt="Tournament Preview"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback image if the original fails to load
                  e.currentTarget.src = "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=274&h=160&fit=crop&crop=center";
                }}
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-black/75 rounded-sm flex items-center justify-center hover:bg-black/60 transition-colors cursor-pointer">
                  <svg width="10" height="11" viewBox="0 0 10 11" fill="none">
                    <path d="M9.02985 5.46067L0 0V10.9213L9.02985 5.46067Z" fill="#D2E041"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Join Button */}
<div className="absolute pt-34 pl-35 flex items-center pr-2">
  <button 
    className="relative group overflow-hidden gaming-glow gaming-glow-hover transition-all duration-300 hover:scale-[1.02]"
    style={{ clipPath: "polygon(0 0, 88% 0, 100% 50%, 100% 100%, 0 100%)" }}
  >
    {/* Button Container */}
    <div className="flex w-54 h-10 bg-white items-center justify-between px-5">
      {/* Text */}
      <span className="text-black font-bold text-[14px] uppercase tracking-wide">
        JOIN TOURNAMENT
      </span>

      {/* Arrow */}
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        className="relative z-10"
      >
        <path 
          d="M14.43 5.93L20.5 12L14.43 18.07" 
          stroke="black" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M3.5 12H20.33" 
          stroke="black" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default TournamentCard;
