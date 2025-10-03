import HeroImage from "../assets/bboy.png";
import gbg from "../assets/gbg.png";
import Sboy from "../assets/sboy.png";
import Girl from "../assets/girl.png";
import TournamentCard from "../components/TournamentCard";
import star from "../assets/star.png"; // local star image
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="relative w-full h-150 lg:h-full bg-[#0A0F21] overflow-hidden">
      {/* Background image */}

      <div className="hidden lg:block">
        {/* HeroImage */}
        <div
          className="
    absolute top-65 left-1/2 -translate-x-1/2 w-[60%] h-30% 
    lg:top-22 lg:-right-4 lg:left-auto lg:translate-x-0 lg:w-300 lg:h-159 lg:overflow-hidden
  "
        >
          <img
            src={HeroImage}
            alt="Background"
            className="mx-auto sm:mt-10 lg:absolute lg:right-0"
          />
        </div>

        {/* Sboy */}
        <div
          className="
    absolute top-82 left-1/4 -translate-x-1/2 w-[60%] h-auto
    lg:top-100 lg:right-9 lg:left-auto lg:translate-x-0 lg:w-300 lg:h-220
  "
        >
          <img
            src={Sboy}
            alt="Background"
            className="mx-auto scale-60 lg:scale-100 lg:absolute lg:right-0"
          />
        </div>

        {/* Girl */}
        <div
          className="
    absolute top-[20rem] -right-1/3 -translate-x-1/2 w-[65%] h-auto  
    lg:top-122 lg:right-130 lg:left-auto lg:translate-x-0 lg:w-300 lg:h-220 lg:z-50
  "
        >
          <img
            src={Girl}
            alt="Background"
            className="scale-60 lg:scale-100 lg:100 mx-auto lg:absolute lg:right-0"
          />
        </div>
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className=" relative w-full flex flex-col lg:flex-row text-center lg:text-left items-center justify-between px-3 lg:px-16 pt-[120px] pb-32">
        {/* Left Content */}
        <div className="flex  flex-col space-y-6 max-w-[600px] z-10 ">
          <h1
            className="font-extrabold   text-[25px]   lg:w-140 lg:text-[55px] leading-tight tracking-tight"
            style={{
              background:
                "linear-gradient(98deg, #FFF 0.2%, #6375F1 50.7%, #FFF 93.98%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Play. Compete. Conquer. Anytime, Anywhere.
          </h1>

          <p className="text-gray-200 text-[15px] leading-relaxed">
            From casual fun to competitive battles, discover games for every
            age, every mood, and every level.
          </p>

          <div className="relative top-0 hidden lg:block">
            <TournamentCard />
          </div>
        </div>
        {/* Stats Card (z-20) */}{" "}
        <div className=" hidden  bg-white rounded-xl shadow-lg px-6 py-4 lg:flex justify-between items-center gap-4 w-[80%] h-17 max-w-[600px] mx-auto mt-44 z-20 lg:absolute lg:h-24 lg:mt-152 lg:right-20 lg:w-120 lg:max-w-none ">
          {" "}
          {/* Unique Style */}{" "}
          <div className="text-center flex-1">
            {" "}
            <h2 className="text-[5vw] sm:text-[4vw] lg:text-3xl font-extrabold text-black">
              {" "}
              300+{" "}
            </h2>{" "}
            <p className="text-[2.5vw] sm:text-[2vw] lg:text-sm font-semibold text-black">
              {" "}
              Unique Style{" "}
            </p>{" "}
          </div>{" "}
          {/* Project Finished */}{" "}
          <div className="text-center flex-1">
            {" "}
            <h2
              className="text-[5vw] sm:text-[4vw] lg:text-3xl font-extrabold"
              style={{
                background:
                  "linear-gradient(98deg, #6D28D9 0.2%, #EC4899 93.98%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {" "}
              200+{" "}
            </h2>{" "}
            <p className="text-[2.5vw] sm:text-[2vw] lg:text-sm font-semibold text-black">
              {" "}
              Project Finished{" "}
            </p>{" "}
          </div>{" "}
          {/* Happy Customer */}{" "}
          <div className="text-center flex-1">
            {" "}
            <h2 className="text-[5vw] sm:text-[4vw] lg:text-3xl font-extrabold text-black">
              {" "}
              500+{" "}
            </h2>{" "}
            <p className="text-[2.5vw] sm:text-[2vw] lg:text-sm font-semibold text-black">
              {" "}
              Happy Customer{" "}
            </p>{" "}
          </div>{" "}
        </div>
        <div className="lg:hidden">
          <img src={gbg} alt="" className="scale-110" />
        </div>
        {/*dimension text*/}
        <div className="absolute z-40 top-141">
          <h1
            className="absolute text-[150px] font-extrabold font-[Syne] text-transparent opacity-15 "
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "white",
            }}
          >
            Dimension
          </h1>
        </div>
      </section>

      {/* Animated Marquee Section */}
      <div className="relative w-full overflow-hidden lg-mt-5">
        <div
          style={{
            display: "flex",
            gap: "8rem",
            whiteSpace: "nowrap",
            animation: "marquee 11s linear infinite",
          }}
        >
          {[...Array(2)].map((_, duplicate) =>
            // Duplicate for seamless loop
            [
              "Gaming Spanning",
              "Action-Packed",
              "Mind-Bending",
              "Collection of Games",
            ].map((text, idx) => (
              <div
                key={`${text}-${idx}-${duplicate}`}
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <img
                  src={star} // your imported star.png
                  alt="star"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    objectFit: "contain",
                  }}
                />
                <span
                  style={{
                    color: "white",
                    fontWeight: 900,
                    fontSize: "2rem",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    fontFamily: "Orbitron, sans-serif",
                  }}
                >
                  {text}
                </span>
              </div>
            ))
          )}
        </div>

        <style>
          {`
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
    `}
        </style>
      </div>
    </div>
  );
};

export default Home;
