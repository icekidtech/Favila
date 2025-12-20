import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhoAreWe from "../components/WhoAreWe";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import VisionMission from "../components/VisionMission";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoAreWe/>
      <Services/>
      <WhyChooseUs/>
     <VisionMission/>
     <Footer/>
      
    </>
  );
};

export default LandingPage;
