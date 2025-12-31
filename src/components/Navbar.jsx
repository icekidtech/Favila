import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ activeSection, onHomeClick, onAboutClick, onServicesClick, onTestimonialsClick }) => {
  const [open, setOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+351932369205";
    const message = "Hi, I'd like to book a cleaning service!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleNavClick = (callback, section) => {
    callback();
    setOpen(false);
  };

  return (
    <header className="fixed top-6 left-1/2 z-50 w-[92%] -translate-x-1/2 rounded-full bg-gradient-to-r from-black/60 via-black/40 to-black/60 backdrop-blur-lg">
      <nav className="flex items-center justify-between px-6 md:px-8 py-4 md:py-5">
        
        {/* Logo */}
        <div className="flex items-center gap-3 text-white font-medium cursor-pointer" onClick={() => handleNavClick(onHomeClick, "home")}>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
            ✦
          </span>
          <span className="text-sm">Favila cleaning</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10 text-sm text-white/80">
          <li 
            className={`cursor-pointer transition ${activeSection === "home" ? "text-orange-400" : "hover:text-white"}`}
            onClick={() => handleNavClick(onHomeClick, "home")}
          >
            Home
          </li>
          <li 
            className={`cursor-pointer transition ${activeSection === "about" ? "text-orange-400" : "hover:text-white"}`}
            onClick={() => handleNavClick(onAboutClick, "about")}
          >
            About Us
          </li>
          <li 
            className={`cursor-pointer transition ${activeSection === "services" ? "text-orange-400" : "hover:text-white"}`}
            onClick={() => handleNavClick(onServicesClick, "services")}
          >
            Services
          </li>
          <li 
            className={`cursor-pointer transition ${activeSection === "testimonials" ? "text-orange-400" : "hover:text-white"}`}
            onClick={() => handleNavClick(onTestimonialsClick, "testimonials")}
          >
            Testimonials
          </li>
        </ul>

        {/* Desktop CTA */}
        <button 
          onClick={handleWhatsAppClick}
          className="hidden md:block rounded-full bg-white/90 px-6 py-2 text-sm font-medium text-black hover:bg-white transition"
        >
          Contact Us
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-3 rounded-3xl bg-black/90 px-6 py-6 text-white/80 backdrop-blur-lg">
          <ul className="flex flex-col gap-5 text-sm">
            <li 
              className={`cursor-pointer transition ${activeSection === "home" ? "text-orange-400" : "hover:text-white"}`}
              onClick={() => handleNavClick(onHomeClick, "home")}
            >
              Home
            </li>
            <li 
              className={`cursor-pointer transition ${activeSection === "about" ? "text-orange-400" : "hover:text-white"}`}
              onClick={() => handleNavClick(onAboutClick, "about")}
            >
              About Us
            </li>
            <li 
              className={`cursor-pointer transition ${activeSection === "services" ? "text-orange-400" : "hover:text-white"}`}
              onClick={() => handleNavClick(onServicesClick, "services")}
            >
              Services
            </li>
            <li 
              className={`cursor-pointer transition ${activeSection === "testimonials" ? "text-orange-400" : "hover:text-white"}`}
              onClick={() => handleNavClick(onTestimonialsClick, "testimonials")}
            >
              Testimonials
            </li>
            <button 
              onClick={handleWhatsAppClick}
              className="mt-4 w-full rounded-full bg-white px-6 py-2 text-sm font-medium text-black hover:bg-white/90 transition"
            >
              Contact Us
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
