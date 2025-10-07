import heroImg from "../../assets/Feature/heroImage.png";
import gears from "../../assets/Feature/gears.png";
import farcry from "../../assets/Feature/farcry.png";
import rainbow from "../../assets/Feature/rainbow.png";
import jewel from "../../assets/Feature/game1.png";
import dream from "../../assets/Feature/game2.png";
import lost from "../../assets/Feature/game3.png";
import blue from "../../assets/Feature/game4.png";
import bottomImage from "../../assets/Feature/bottomImage.png";

const FeatureSection = () => {
  return (
    <div className="bg-[#0A0F21] text-white font-inter px-6 md:px-12 lg:px-20 py-20 space-y-32">
      {/* ------------------- Instant Play Section ------------------- */}
      <section className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <div className="flex flex-col space-y-6 md:w-[40%]">
            <div className="w-20 h-[4px] bg-white mb-6"></div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-10">
                Instant <span className="text-indigo-400">Play</span>
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-1">01</h3>
                  <p className="text-sm text-gray-300">
                    <span className="font-semibold text-white">
                      No installs, no wait
                    </span>{" "}
                    — jump straight into the action.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-1">02</h3>
                  <p className="text-sm text-gray-300">
                    <span className="font-semibold text-white">
                      Play anywhere, anytime
                    </span>{" "}
                    with just one click.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-1">03</h3>
                  <p className="text-sm text-gray-300">
                    <span className="font-semibold text-white">
                      Fast, seamless gaming
                    </span>{" "}
                    without downloads or updates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full lg:w-[45%] flex justify-center">
            <div
              className="w-[80%] md:w-[70%] lg:w-[85%] overflow-hidden"
              style={{
                clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
              }}
            >
              <img
                src={heroImg}
                alt="Hero"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>

        {/* 3 Skewed Game Cards */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-16">
          {[gears, farcry, rainbow].map((img, i) => (
            <div
              key={i}
              className="overflow-hidden transition-transform duration-300 hover:scale-105"
              style={{
                clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
              }}
            >
              <img
                src={img}
                alt={`Game ${i + 1}`}
                className="object-cover w-60 h-36 sm:w-72 sm:h-44 lg:w-80 lg:h-52"
              />
            </div>
          ))}
        </div>
      </section>
      {/* ------------------- Massive Library Section ------------------- */}
      <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Text */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Massive <span className="text-indigo-400">Library</span>
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-md">
            Our platform brings you a massive library of games across every
            genre you love. From action-packed adventures to casual puzzles,
            there’s always something new to explore. With fresh titles added
            regularly, the fun never runs out.
          </p>
          <button className="bg-white text-[#0A0F21] px-6 py-2.5 font-semibold rounded-md w-fit hover:bg-gray-200 transition">
            Explore
          </button>
        </div>

        {/* Right Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[blue, lost, jewel, dream].map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg shadow-lg hover:scale-[1.03] transition-transform duration-300"
            >
              <img
                src={img}
                alt={`Library ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
      {/* --- Bottom Rectangular Image --- */}{" "}
      <section className="max-w-7xl mx-auto">
        {" "}
        <div className="overflow-hidden rounded-3xl shadow-2xl">
          {" "}
          <img
            src={bottomImage}
            alt="Bottom Section"
            className="w-full h-full object-cover"
          />{" "}
        </div>{" "}
      </section>
    </div>
  );
};

export default FeatureSection;
