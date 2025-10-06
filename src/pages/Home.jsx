import Hero from "../Section/Home/Hero";
import Featured from "../Section/Home/Featured";
import GameCategories from "../Section/Home/GameCategories";
import Girl_page from "../Section/Home/Girl_page";
import Upcomming from "../Section/Home/Upcomming";
import Hero2 from "../Section/Home/Hero2";
import GameReviewsPage from "../Section/Home/GameReviewsPage";
import ServicesPage from "../Section/Home/ServicesPage.jsx";
import Filter from "../Section/Home/Filter.jsx";

import Ellipse from "../assets/Ellipse.png";

function App() {
  return (
    <div className=" bg-[#0A0F21] text-white">
      <div>
        <Hero />
        <Featured />
        <GameCategories />
        <Girl_page/>
        <Upcomming/>
        <Filter/>
        <Hero2/>
        <GameReviewsPage/>
        <ServicesPage/>
      </div>
      <div className="absolute opacity-100 w-full h-full bottom-0 left-0 z-0">
        <img src={Ellipse} alt="" />
      </div>
    </div>
  );
} 

export default App;
