import Hero from "./Hero";
import Featured from "./Featured";
import GameCategories from "./GameCategories";
import Girl_page from './Girl_page'
import Upcomming from './Upcomming'
import Hero2 from './Hero2'
import GameReviewsPage from './GameReviewsPage'
import ServicesPage from './ServicesPage.jsx'
import Filter from './Filter.jsx'



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
