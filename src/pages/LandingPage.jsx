import { useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhoAreWe from "../components/WhoAreWe";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import VisionMission from "../components/VisionMission";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const LandingPage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar 
        onHomeClick={() => scrollToSection(homeRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onServicesClick={() => scrollToSection(servicesRef)}
        onTestimonialsClick={() => scrollToSection(testimonialsRef)}
      />
      <div ref={homeRef}>
        <Hero />
      </div>
      <div ref={aboutRef}>
        <WhoAreWe/>
      </div>
      <div ref={servicesRef}>
        <Services/>
      </div>
      <WhyChooseUs/>
      <VisionMission/>
      <div ref={testimonialsRef}>
        <Testimonials/>
      </div>
      <Footer
        onHomeClick={() => scrollToSection(homeRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onServicesClick={() => scrollToSection(servicesRef)}
        onTestimonialsClick={() => scrollToSection(testimonialsRef)}
      />
    </>
  );
};

export default LandingPage;
