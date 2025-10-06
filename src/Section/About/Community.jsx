import React from "react";
import avatar1 from "../../assets/About/avatar1.png";
import avatar2 from "../../assets/About/avatar2.png";
import avatar3 from "../../assets/About/avatar3.png";
import avatar4 from "../../assets/About/avatar4.png";
import avatar5 from "../../assets/About/avatar5.png";
import avatar6 from "../../assets/About/avatar6.png";
import Lock from "../../assets/About/Lock.png";
import Arrow from "../../assets/About/Arrow.png";
import Like from "../../assets/About/Like.png";

const Community = () => {
  return (
    <section className="bg-[#0A0F21] text-white w-full flex flex-col items-center justify-center py-20 px-6 md:px-16 overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#8AB4FF] to-[#B19CFF] text-transparent bg-clip-text">
          Our Community
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Our community is the heartbeat of everything we do. From casual gamers
          to pro competitors, millions come together here to share experiences,
          build friendships, and push the limits of play. This is where passion
          meets connection and where every gamer belongs.
        </p>
      </div>

      {/* Concentric Shape Section */}
      <div className="relative w-full max-w-2xl h-[420px] flex items-center justify-center">
        {/* Outer Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-[90%] h-[90%] border border-gray-700 rounded-full"></div>
          <div className="absolute w-[70%] h-[70%] border border-gray-700 rounded-full"></div>
          <div className="absolute w-[50%] h-[50%] border border-gray-700 rounded-full"></div>
        </div>

        {/* Center Button */}
        <button className="relative z-10 bg-black text-white px-8 py-3 rounded-full border border-gray-600 hover:bg-gray-900 transition">
          Get started for free
        </button>

        {/* Avatars positioned around rings */}
        <img
          src={avatar1}
          alt="Avatar 1"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-xl object-cover border-4 border-white shadow-lg"
        />
        <img
          src={avatar2}
          alt="Avatar 2"
          className="absolute top-1/3 left-0 -translate-y-1/2 w-20 h-20 rounded-xl object-cover border-4 border-[#5A1CFF] shadow-lg"
        />
        <img
          src={avatar3}
          alt="Avatar 3"
          className="absolute top-1/3 right-0 -translate-y-1/2 w-20 h-20 rounded-xl object-cover border-4 border-[#FF1C1C] shadow-lg"
        />
        <img
          src={avatar4}
          alt="Avatar 4"
          className="absolute bottom-0 left-1/3 w-20 h-20 rounded-xl object-cover border-4 border-[#9C1CFF] shadow-lg"
        />
        <img
          src={avatar5}
          alt="Avatar 5"
          className="absolute bottom-0 right-1/5 w-20 h-20 rounded-xl object-cover border-4 border-[#00AEEF] shadow-lg"
        />
        <img
          src={avatar6}
          alt="Avatar 6"
          className="absolute top-[60%] left-[10%] w-20 h-20 rounded-xl object-cover border-4 border-[#FF0000] shadow-lg"
        />

        {/* Floating Icons */}
        <img
          src={Lock}
          alt="Lock "
          className="absolute top-[15%] left-[25%] text-white bg-black  rounded-full w-14 h-14 border border-gray-700"
        />
        <img
          src={Arrow}
          alt="Arrow "
          className="absolute bottom-[25%] right-[28%] text-white bg-black  rounded-full w-14 h-14 border border-gray-700"
        />
        <img
          src={Like}
          alt="Like "
          className="absolute bottom-[25%] left-[28%] text-white bg-black  rounded-full w-14 h-14 border border-gray-700"
        />
      </div>

      {/* Bottom Gradient CTA */}
      <div className="mt-20 w-full max-w-5xl rounded-3xl bg-gradient-to-r from-[#3C00FF] to-[#00C2FF] p-[2px]">
        <div className="bg-[#0A0F21] rounded-3xl text-center py-14 px-8 md:px-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-[#8AB4FF] to-[#B19CFF] text-transparent bg-clip-text">
            Play. Connect. Conquer. Together.
          </h3>
          <p className="text-gray-300 mb-6">Your next adventure starts here.</p>
          <button className="bg-gradient-to-r from-[#5A1CFF] to-[#00C2FF] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
            Start Playing Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Community;
