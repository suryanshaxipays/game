import { games } from "../../data/games";

const GameCategories = () => {
  // Pick first 6 games from your data
  const selectedGames = [
    // --- Mahjong Games ---
    {
      id: 1,
      title: "Free Aliens",
      genre: "Mahjong",
      thumbnail:
        "https://www.htmlgames.com/uploaded/game/thumb/freealiens300200.webp",
      youtubePreview:
        "https://www.youtube.com/embed/3AVsNPnOim4?controls=0&showinfo=0&autoplay=1&mute=1&loop=1&playlist=3AVsNPnOim4",
      embedLink: "https://cdn.htmlgames.com/FreeAliens/",
    },
    {
      id: 11,
      title: "Red and Green 2",
      genre: "Action",
      thumbnail:
        "https://www.htmlgames.com/uploaded/game/thumb/redandgreen2300200.webp",
      youtubePreview:
        "https://www.youtube.com/embed/WAiml6iAPw8?controls=0&showinfo=0&autoplay=1&mute=1&loop=1&playlist=WAiml6iAPw8",
      embedLink: "https://cdn.htmlgames.com/RedAndGreen2/",
    },
    {
      id: 16,
      title: "Bubble Shooter",
      genre: "Match 3",
      thumbnail:
        "https://www.htmlgames.com/uploaded/game/thumb/bubble_shooter300200.webp",
      youtubePreview:
        "https://www.youtube.com/embed/dTJ5IBX-BkM?controls=0&showinfo=0&autoplay=1&mute=1&loop=1&playlist=dTJ5IBX-BkM",
      embedLink: "https://cdn.htmlgames.com/BubbleShooter/",
    },
    {
      id: 21,
      title: "Find the Odd One Out",
      genre: "Mind / Puzzle",
      thumbnail:
        "https://www.htmlgames.com/uploaded/game/thumb/findtheoddout300200.webp",
      youtubePreview:
        "https://www.youtube.com/embed/uBeuPlyZ0As?controls=0&showinfo=0&autoplay=1&mute=1&loop=1&playlist=uBeuPlyZ0As",
      embedLink: "https://cdn.htmlgames.com/FindTheOddOneOut/",
    },
    {
      id: 26,
      title: "One Line",
      genre: "Classic Games",
      thumbnail:
        "https://www.htmlgames.com/uploaded/game/thumb/oneline300200.webp",
      youtubePreview:
        "https://www.youtube.com/embed/G_wPpS6S16w?controls=0&showinfo=0&autoplay=1&mute=1&loop=1&playlist=G_wPpS6S16w",
      embedLink: "https://cdn.htmlgames.com/OneLine/",
    },

    // --- Solitaire Games ---
    {
      id: 6,
      title: "Yukon Freecell",
      genre: "Solitaire",
      thumbnail:
        "https://www.htmlgames.com/uploaded/game/thumb/yukonfreecell300200.webp",
      youtubePreview:
        "https://www.youtube.com/embed/9xfIN9FSfe0?controls=0&showinfo=0&autoplay=1&mute=1&loop=1&playlist=9xfIN9FSfe0",
      embedLink: "https://cdn.htmlgames.com/YukonFreecell/",
    },
  ];

  return (
    <div className="mt-8 relative h-full w-full bg-[#0A0F21] text-white px-6 sm:px-10 lg:px-20 py-10 lg:py-16">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-10 lg:mb-12 pl-2">
        Choose Your Arena
      </h2>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row gap-6 w-full mx-auto">
        {/* Left Column */}
        <div className="flex flex-col gap-4 flex-1">
          {/* Big Card */}
          <div className="h-[150px] sm:h-[250px] lg:h-[310px] relative rounded-xl overflow-hidden">
            <img
              src={selectedGames[0].thumbnail}
              alt={selectedGames[0].genre}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 font-semibold">
              {selectedGames[0].genre}
            </div>
          </div>

          {/* Small cards row */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 rounded-xl overflow-hidden">
              <img
                src={selectedGames[1].thumbnail}
                alt={selectedGames[1].genre}
                className="w-full h-[150px] sm:h-[225px] object-cover"
              />
              <div className="absolute bottom-3 left-3 font-semibold">
                {selectedGames[1].genre}
              </div>
            </div>
            <div className="relative flex-1 rounded-xl overflow-hidden">
              <img
                src={selectedGames[2].thumbnail}
                alt={selectedGames[2].genre}
                className="w-full h-[150px] sm:h-[225px] object-cover"
              />
              <div className="absolute bottom-3 left-3 font-semibold">
                {selectedGames[2].genre}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 flex-1">
          {/* Small cards row */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 rounded-xl overflow-hidden">
              <img
                src={selectedGames[3].thumbnail}
                alt={selectedGames[3].genre}
                className="w-full h-[150px] sm:h-[225px] object-cover"
              />
              <div className="absolute bottom-3 left-3 font-semibold">
                {selectedGames[3].genre}
              </div>
            </div>
            <div className="relative flex-1 rounded-xl overflow-hidden">
              <img
                src={selectedGames[4].thumbnail}
                alt={selectedGames[4].genre}
                className="w-full h-[150px] sm:h-[225px] object-cover"
              />
              <div className="absolute bottom-3 left-3 font-semibold">
                {selectedGames[4].genre}
              </div>
            </div>
          </div>

          {/* Big Card */}
          <div className="h-[150px] sm:h-[250px] lg:h-[300px] relative rounded-xl overflow-hidden">
            <img
              src={selectedGames[5].thumbnail}
              alt={selectedGames[5].genre}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 font-semibold">
              {selectedGames[5].genre}
            </div>
          </div>
        </div>
      </div>

      {/* Arrows & Progress */}
      <div className="hidden  absolute top-6 right-6 lg:top-20 lg:-right-15 lg:flex flex-col items-center space-y-3">
        {/* Arrows */}
        <div className="flex space-x-2">
          <button className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-md bg-[#1E2235] hover:bg-[#2A2F4C]">
            ←
          </button>
          <button className="w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-md bg-[#1E2235] hover:bg-[#2A2F4C]">
            →
          </button>
        </div>

        {/* Progress Bars */}
        <div className="flex space-x-2">
          <span className="w-4 h-1 lg:w-6 rounded bg-orange-500"></span>
          <span className="w-4 h-1 lg:w-6 rounded bg-purple-600"></span>
        </div>
      </div>
    </div>
  );
};

export default GameCategories;
