import { useState, useEffect } from "react";

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Game data matching the Figma design
  const games = [
    {
      id: 1,
      title: "FC25",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/563eed2b8c91f52d9a7f13456aa6e84f7adb3816?width=429",
      date: "27/10/2024",
      preOrder: true,
    },
    {
      id: 2,
      title: "Marvel: Wolverine",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/31cba8b9b049c73fa99fa18924481cb2118f2d19?width=429",
      date: "Early 2025",
      preOrder: true,
    },
    {
      id: 3,
      title: "Star Wars Outlaws",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/988c0c77a033bcf75b49f10127d4dc27ed8fda19?width=429",
      date: "Mid 2025",
      preOrder: true,
    },
    {
      id: 4,
      title: "GTA VI",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/4072ec87ba8827b2f998525e5e5280c5c04bb8c2?width=429",
      date: "Late 2025",
      preOrder: true,
    },
    {
      id: 5,
      title: "The Witcher 4",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/450d4f19b111a1707a9b7a2a8fadc4ad451c2b90?width=429",
      date: "Mid 2026",
      preOrder: true,
    },
    
  ];


  // Navigation functions
  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : games.length - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev < games.length - 1 ? prev + 1 : 0));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="h-full w-full text-white font-vazirmatn mt-10">
      {/* Upcoming Games Section */}
      <div className="w-full max-w-[1540px] mx-auto px-[120px] py-16">
        <div className="flex flex-col items-center gap-8">
          {/* Header Section */}
          <div className="flex justify-between items-center w-full">
            {/* Heading and View All */}
            <div className="flex items-center gap-12">
              <h1 className="text-2xl font-bold text-white capitalize">
                Next Big Hits
              </h1>
              <button className="flex items-center gap-1 px-9 py-2 rounded-[20px] hover:bg-orange-500/10 transition-colors">
                <span className="text-orange-500 text-lg font-medium">
                  View All
                </span>        
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.39997 23.3L6.71997 21.5L15.6 12.5L6.71997 3.50005L8.39997 1.70005L19.2 12.5L8.39997 23.3Z"
                    fill="#FF5733"
                  />
                </svg>
              </button>
            </div>
            {/* Navigation Controls - right aligned */}
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={goToPrevious}
                  className="w-11 h-8 border border-white rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Previous games"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 10.4H4M4 10.4L9.4 5M4 10.4L9.4 15.8"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className="w-11 h-8 border border-white rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Next games"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 10.4H16M16 10.4L10.6 5M16 10.4L10.6 15.8"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-3">
                {games.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`rounded-lg transition-all duration-300 ${
                      index === currentSlide
                        ? "w-7 h-3 bg-orange-500 shadow-[0_8px_16px_0_rgba(255,87,51,0.16)]"
                        : "w-2 h-2 bg-violet-800 hover:bg-violet-500"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>


          {/* Games Grid */}
          <div className="w-full max-w-[1236px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {games.map((game, index) => (
                <div
                  key={game.id}
                  className={`flex flex-col gap-3 p-2.5 border border-violet-500 rounded-xl transition-all duration-500 hover:border-orange-500 hover:shadow-lg ${
                    index === currentSlide ? "ring-2 ring-orange-500" : ""
                  }`}
                >
                  {/* Game Image */}
                  <div className="flex-1">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-64 object-cover rounded-xl"
                      loading="lazy"
                    />
                  </div>

                  {/* Game Info */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-white text-base font-medium">
                      {game.title}
                    </h3>

                    <div className="flex justify-between items-center flex-wrap gap-2">
                      {/* Date */}
                      <div className="flex items-center gap-1">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_148_531)">
                            <path
                              d="M4.5384 0.5C4.68692 0.5 4.82936 0.559 4.93438 0.66402C5.0394 0.769041 5.0984 0.911479 5.0984 1.06V2.1072H11.112V1.0672C11.112 0.918679 11.171 0.776241 11.276 0.67122C11.381 0.5662 11.5235 0.5072 11.672 0.5072C11.8205 0.5072 11.963 0.5662 12.068 0.67122C12.173 0.776241 12.232 0.918679 12.232 1.0672V2.1072H14.4C14.8242 2.1072 15.2311 2.27566 15.5311 2.57555C15.8311 2.87543 15.9998 3.28219 16 3.7064V14.9008C15.9998 15.325 15.8311 15.7318 15.5311 16.0317C15.2311 16.3315 14.8242 16.5 14.4 16.5H1.6C1.17579 16.5 0.768947 16.3315 0.468912 16.0317C0.168877 15.7318 0.000212104 15.325 0 14.9008L0 3.7064C0.000212104 3.28219 0.168877 2.87543 0.468912 2.57555C0.768947 2.27566 1.17579 2.1072 1.6 2.1072H3.9784V1.0592C3.97861 0.910817 4.03771 0.768585 4.1427 0.663737C4.2477 0.55889 4.39002 0.5 4.5384 0.5ZM1.12 6.6936V14.9008C1.12 14.9638 1.13242 15.0263 1.15654 15.0845C1.18066 15.1427 1.21602 15.1956 1.26059 15.2402C1.30516 15.2848 1.35808 15.3201 1.41631 15.3443C1.47455 15.3684 1.53697 15.3808 1.6 15.3808H14.4C14.463 15.3808 14.5255 15.3684 14.5837 15.3443C14.6419 15.3201 14.6948 15.2848 14.7394 15.2402C14.784 15.1956 14.8193 15.1427 14.8435 15.0845C14.8676 15.0263 14.88 14.9638 14.88 14.9008V6.7048L1.12 6.6936ZM5.3336 12.1952V13.528H4V12.1952H5.3336ZM8.6664 12.1952V13.528H7.3336V12.1952H8.6664ZM12 12.1952V13.528H10.6664V12.1952H12ZM5.3336 9.0136V10.3464H4V9.0136H5.3336ZM8.6664 9.0136V10.3464H7.3336V9.0136H8.6664ZM12 9.0136V10.3464H10.6664V9.0136H12ZM3.9784 3.2264H1.6C1.53697 3.2264 1.47455 3.23882 1.41631 3.26294C1.35808 3.28706 1.30516 3.32242 1.26059 3.36699C1.21602 3.41156 1.18066 3.46448 1.15654 3.52271C1.13242 3.58095 1.12 3.64337 1.12 3.7064V5.5744L14.88 5.5856V3.7064C14.88 3.64337 14.8676 3.58095 14.8435 3.52271C14.8193 3.46448 14.784 3.41156 14.7394 3.36699C14.6948 3.32242 14.6419 3.28706 14.5837 3.26294C14.5255 3.23882 14.463 3.2264 14.4 3.2264H12.232V3.9696C12.232 4.11812 12.173 4.26056 12.068 4.36558C11.963 4.4706 11.8205 4.5296 11.672 4.5296C11.5235 4.5296 11.381 4.4706 11.276 4.36558C11.171 4.26056 11.112 4.11812 11.112 3.9696V3.2264H5.0984V3.9624C5.0984 4.11092 5.0394 4.25336 4.93438 4.35838C4.82936 4.4634 4.68692 4.5224 4.5384 4.5224C4.38988 4.5224 4.24744 4.4634 4.14242 4.35838C4.0374 4.25336 3.9784 4.11092 3.9784 3.9624V3.2264Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_148_531">
                              <rect
                                width="16"
                                height="16"
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className="text-grey-200 text-xs font-light text-justify capitalize">
                          {game.date}
                        </span>
                      </div>

                      {/* Pre-Order Link */}
                      {game.preOrder && (
                        <div className="flex items-center gap-1 cursor-pointer hover:gap-2 transition-all">
                          <span className="text-white text-xs capitalize">
                            Pre-Order
                          </span>
                          <svg
                            width="15"
                            height="9"
                            viewBox="0 0 16 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.7535 4.85355C15.9487 4.65829 15.9487 4.34171 15.7535 4.14645L12.5715 0.964466C12.3762 0.769204 12.0596 0.769204 11.8644 0.964466C11.6691 1.15973 11.6691 1.47631 11.8644 1.67157L14.6928 4.5L11.8644 7.32843C11.6691 7.52369 11.6691 7.84027 11.8644 8.03553C12.0596 8.2308 12.3762 8.2308 12.5715 8.03553L15.7535 4.85355ZM0.399902 4.5V5H15.3999V4.5V4H0.399902V4.5Z"
                              fill="#FF5733"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Adjustments */}
      <style >{`
        @media (max-width: 1200px) {
          .px-\\[120px\\] {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }

        @media (max-width: 768px) {
          .gap-12 {
            gap: 1.5rem;
          }

          .text-2xl {
            font-size: 1.5rem;
          }

          .grid-cols-5 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .flex-row {
            flex-direction: column;
          }

          .justify-between {
            justify-content: center;
          }

          .grid-cols-2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
