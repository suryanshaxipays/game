import Navbar from '../components/Navbar'
import Image from '../Section/About/Image'
import OurStory from "../Section/About/OurStory";
import Community from "../Section/About/Community";
import Footer from "../components/Footer";


const About = () => {
  return (
    <div className=" bg-[#0A0F21] text-white" >
        <Navbar/>
        <Image/>
        <OurStory/>
        <Community/>
        <Footer/>
    </div>
  )
}

export default About