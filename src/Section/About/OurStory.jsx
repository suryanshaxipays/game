import React from "react";
import vrPlayer from "../../assets/About/vrPlayer.png";
import vrScene from "../../assets/About/vrScene.png";
import tech1 from "../../assets/About/tech1.png";
import tech2 from "../../assets/About/tech2.png";

const OurStory = () => {
  return (
    <section className="bg-[#0A0F21] text-white w-full flex flex-col items-center justify-center py-20 px-6 lg:px-20">
      {/* Header Section */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Left Text */}
        <div className="w-full lg:w-[60%] text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Story
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-2xl mb-6">
            To create a world where gaming is more than entertainment — it’s a
            space for growth, friendship, and challenge. We’re here to make
            every gamer feel included, inspired, and driven to achieve more.
            With innovation at our core, we strive to build experiences that
            unite communities and push the boundaries of fun.
          </p>
          <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition">
            Explore
          </button>
        </div>

        {/* Tech Images Row */}
        <div className="hidden lg:flex flex-row justify-end gap-6 mt-4">
          <img
            src={tech1}
            alt="Tech 1"
            className="w-44 h-56 object-cover  shadow-lg"
          />
          <img
            src={tech2}
            alt="Tech 2"
            className="w-44 h-56 object-cover  shadow-lg"
          />
        </div>
      </div>

      {/* Image and Text Row */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10 mt-16">
        {/* Left Image */}
        <div className="w-full md:w-[60%]">
          <img
            src={vrScene}
            alt="VR Scene"
            className="rounded-xl object-cover w-full h-64 md:h-80 shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col space-y-6 md:w-[40%]">
          <div className="w-20 h-[4px] bg-white mb-6"></div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">01</h3>
            <p className="text-gray-300 text-lg">
              To be the most trusted platform for global gamers.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">02</h3>
            <p className="text-gray-300 text-lg">
              To inspire creativity, competition, and collaboration.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">03</h3>
            <p className="text-gray-300 text-lg">
              To shape the future of play through technology and community.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Box */}
      <div className="z-10 bg-white text-black rounded-2xl shadow-lg mt-16 p-6 md:p-8 w-full max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
          <div>
            <h4 className="font-bold text-lg mb-2">Players</h4>
            <p className="text-sm text-gray-700">
              Over{" "}
              <span className="font-semibold">1.2M gamers online daily</span> —
              join the action and never play alone.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Games</h4>
            <p className="text-sm text-gray-700">
              Discover <span className="font-semibold">500+ titles</span> across
              every genre, from casual fun to hardcore battles.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Matches</h4>
            <p className="text-sm text-gray-700">
              More than <span className="font-semibold">100K matches</span>{" "}
              played monthly — nonstop excitement awaits.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Events</h4>
            <p className="text-sm text-gray-700">
              Exclusive{" "}
              <span className="font-semibold">weekly tournaments</span> and
              rewards keep the thrill alive.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Image */}
      <img
        src={vrPlayer}
        alt="VR Player"
        className="-mt-20 z-0 rounded-xl w-full max-w-6xl h-64 md:h-96 object-cover shadow-lg"
      />
    </section>
  );
};

export default OurStory;
