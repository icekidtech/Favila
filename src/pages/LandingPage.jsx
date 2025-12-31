import { useRef, useState } from "react";
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
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (ref, section) => {
    setActiveSection(section);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar 
        activeSection={activeSection}
        onHomeClick={() => scrollToSection(homeRef, "home")}
        onAboutClick={() => scrollToSection(aboutRef, "about")}
        onServicesClick={() => scrollToSection(servicesRef, "services")}
        onTestimonialsClick={() => scrollToSection(testimonialsRef, "testimonials")}
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
        onHomeClick={() => scrollToSection(homeRef, "home")}
        onAboutClick={() => scrollToSection(aboutRef, "about")}
        onServicesClick={() => scrollToSection(servicesRef, "services")}
        onTestimonialsClick={() => scrollToSection(testimonialsRef, "testimonials")}
      />
    </>
  );
};

export default LandingPage;
