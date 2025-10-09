
// --- SVG Icon Components ---

const ViewsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-[6px] text-[#a9a9d3]"
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const CommentsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-[6px] text-[#a9a9d3]"
  >
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
  </svg>
);

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="#FFD700"
    stroke="#FFD700"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-[6px]"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-2 text-[#a9a9d3]"
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
    <line x1="16" x2="16" y1="2" y2="6"></line>
    <line x1="8" x2="8" y1="2" y2="6"></line>
    <line x1="3" x2="21" y1="10" y2="10"></line>
  </svg>
);

const ArrowLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M15 18L9 12L15 6"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M9 18L15 12L9 6"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- Game Data ---

const gamesData = [
  {
    title: 'Ghost Of Tsushima',
    year: 2020,
    description:
      'Step Into The War-Torn World Of Feudal Japan, Where Honor And Sacrifice Are Tested In The Fires Of Conflict. "Ghost Of Tsushima" Follows Jin Sakai. One Of The Last Remaining Samurai, As He Defends His Homeland From The Mongol Invasion. The Game Offers An Immersive Open-World Filled With Stunning Landscapes And ...',
    poster:         "https://api.builder.io/api/v1/image/assets/TEMP/61d643629f4743993565e147ca8c49dd2ce33b1f?width=442",

    tags: ['Action', 'RPG', 'Samurai', 'Adventure'],
    metacriticScore: 81,
    releaseDate: 'September 8, 2024',
    views: '1200+',
    comments: 112,
    userRating: 8.7,
  },
  {
    title: 'Cyberpunk',
    year: 2020,
    description:
      'Step Into A Dark, Gritty, And Dystopian World Where High-Tech Meets Low-Life. In Cyberpunk 2077, You Play As V, A Mercenary Navigating The Vibrant And Dangerous Night City, Where Choices Shape Your Destiny. The Game Blends First-Person Shooter Mechanics With RPG Elements, Offering Deep Customization, Immersive ...',
    poster: 'https://api.builder.io/api/v1/image/assets/TEMP/4e45b847ec2e381ab33106c85971f82ba90e86b1?width=442',
    tags: ['Action', 'RPG', 'Shooting'],
    metacriticScore: 86,
    releaseDate: 'September 7, 2024',
    views: '1000+',
    comments: 86,
    userRating: 8.2,
  },
  {
    title: 'Forza Horizon 5',
    year: 2021,
    description:
      "Forza Horizon 5 Takes Players To The Stunning Landscapes Of Mexico, Delivering The Ultimate Open-World Racing Experience. With A Vast Map, Full Of Diverse Environments, The Game Excels In Both Visual Splendor And Gameplay Depth. Whether You're Speeding Through Deserts, Rainforests, Or Vibrant City Streets, ...",
    poster:         "https://api.builder.io/api/v1/image/assets/TEMP/e06f544e133b0a63c96467cac01f3b0af5b7fffd?width=442",

    tags: ['Sports', 'Racing', 'Cars', 'Drifting'],
    metacriticScore: 92,
    releaseDate: 'September 4, 2024',
    views: '2100+',
    comments: 96,
    userRating: 8.3,
  },
  {
    title: 'COD: Modern Warfare II',
    year: 2022,
    description:
      'Call Of Duty: Black Ops 6 Returns With An Intense, Fast-Paced Storyline, Diving Deeper Into The Shadowy World Of Covert Operations. Boasting A Gripping Narrative, This Installment Introduces "Omnimovement," Allowing Unprecedented Flexibility In How Players Navigate The Battlefield. From Sliding And Sprinting In Any Direction ...',
    poster:         "https://api.builder.io/api/v1/image/assets/TEMP/5bc93e9fdf0178d876931a6e114d44df4403f043?width=442",

    tags: ['Action', 'RPG', 'History', 'Battle', 'Shooting'],
    metacriticScore: 75,
    releaseDate: 'September 1, 2024',
    views: '2600+',
    comments: 235,
    userRating: 7.6,
  },
];

// --- Main Component ---

const GameReviewsPage = () => {
  const getScoreColor = (score) => {
    if (score >= 90) return '#6c3'; // Green
    if (score >= 75) return '#00a340'; // Green
    if (score >= 50) return '#fd3'; // Yellow
    return '#f00'; // Red
  };

  return (
      <div className="text-white font-sans p-4 sm:p-6 md:p-10 min-h-screen w-full max-w-[1400px] mx-auto mt-20">
    {/* Header */}
    <header className="flex flex-col lg:flex-row justify-between items-start sm:items-center mb-8 gap-4 sm:gap-0">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl sm:text-4xl">Game Reviews</h1>
      </div>
    </header>

    {/* Game Cards */}
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-2">
      {gamesData.map((game, index) => (
        <div
          key={index}
          className="border border-transparent hover:border-orange-500 hover:shadow-lg bg-[#161629] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:gap-5"
        >
          <img
            src={game.poster}
            alt={`${game.title} Poster`}
            className="w-full sm:w-[180px] h-[250px] object-cover rounded-lg flex-shrink-0"
          />
          <div className="flex flex-col justify-between w-full">
            <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-5">
              {/* Game Info */}
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl mb-2">
                  {game.title}{' '}
                  <span className="text-[#a9a9d3] ml-1 sm:ml-2">({game.year})</span>
                </h2>
                <p className="text-sm text-[#a9a9d3] leading-relaxed mb-4">
                  {game.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {game.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-white/10 text-[#a9a9d3] px-3 py-1 rounded-2xl text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-row sm:flex-col items-start sm:items-start gap-3 text-[#a9a9d3] text-sm flex-shrink-0">
                <div className="flex items-center gap-1">
                  <ViewsIcon /> {game.views} Views
                </div>
                <div className="flex items-center gap-1">
                  <CommentsIcon /> {game.comments} Comments
                </div>
                <div className="flex items-center gap-1">
                  <StarIcon />
                  <div className="flex items-center gap-1">
                    <span className="text-white font-bold text-base">
                      {game.userRating.toFixed(1)}
                    </span>
                    <span className="text-[#a9a9d3] text-xs">/10</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-5 gap-2 sm:gap-0">
              <div className="flex items-center gap-2 sm:gap-4">
                <div
                  className="px-2 py-1 rounded text-sm font-bold text-white"
                  style={{ backgroundColor: getScoreColor(game.metacriticScore) }}
                >
                  {game.metacriticScore} / 100
                </div>
                <div className="flex items-center text-[#a9a9d3] text-sm gap-1">
                  <CalendarIcon />
                  {game.releaseDate}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  </div>
  );
};

export default GameReviewsPage;
