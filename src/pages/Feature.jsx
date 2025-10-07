import Navbar from "../components/Navbar";
import First from "../Section/Feature/First";
import SmartRecommendation from "../Section/Feature/SmartRecommendation";
import Secure from "../Section/Feature/Secure";
import Footer from "../components/Footer";

const Feature = () => {
  return (
    <div>
      <Navbar />
      <First />
      <SmartRecommendation />
      <Secure />
      <Footer />
    </div>
  );
};

export default Feature;
