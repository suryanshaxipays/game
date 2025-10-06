import hedgies from "../../assets/About/hedgies.png";
import porsche from "../../assets/About/porsche.png";
import mario from "../../assets/About/mario.png";
import subway from "../../assets/About/subway.png";
import pubg from "../../assets/About/pubg.png";
import shooter from "../../assets/About/shooter.png";
import war from "../../assets/About/war.png";

const Image = () => {
  return (
    <div>
      <section className="bg-[#0A0F21] text-white w-full flex flex-col items-center justify-center py-20 px-5 md:px-16 relative overflow-hidden">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Who We Are
          </h2>
          <p className="text-gray-300 leading-relaxed">
            We’re more than just a gaming platform — we’re a global hub where
            passion, competition, and fun come together. Our goal is to connect
            gamers of all ages and skill levels, offering experiences that are
            exciting, inclusive, and built for the future of play.
          </p>
          <button className="mt-6 px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition">
            Explore
          </button>
        </div>

        {/* Content Section */}
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left Text Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2 lg:w-1/5">
            <p className="italic text-lg md:text-xl">
              Exclusive gifts. <br />
              Insider access. <br />
              Special events.
            </p>
            <div className="w-12 h-[2px] bg-white mt-2"></div>
            <img
              src={shooter}
              alt="Shooter"
              className="rounded-xl object-cover w-full h-40 sm:h-48 md:h-56"
            />
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:w-3/5">
            <img
              src={hedgies}
              alt="Hedgies"
              className="rounded-xl object-cover w-full h-40 sm:h-48 md:h-56"
            />
            <img
              src={mario}
              alt="Mario"
              className="rounded-xl object-cover w-full h-56 sm:h-72 md:h-115 row-span-3 "
            />
            <img
              src={subway}
              alt="Subway"
              className="rounded-xl object-cover w-full h-40 sm:h-48 md:h-56"
            />

            <img
              src={porsche}
              alt="Porsche"
              className="rounded-xl object-cover w-full h-40 sm:h-48 md:h-56"
            />
            <img
              src={war}
              alt="War"
              className="rounded-xl object-cover w-full h-40 sm:h-48 md:h-56"
            />
          </div>

          {/* Right Text Section */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-2 lg:w-1/5">
            <img
              src={pubg}
              alt="PubG"
              className="rounded-xl object-cover w-full h-40 sm:h-48 md:h-56"
            />
            <p className="italic text-lg md:text-xl">
              Beauty <br />
              Fashion <br />
              Culture
            </p>
            <div className="w-12 h-[2px] bg-white mt-2"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Image;
