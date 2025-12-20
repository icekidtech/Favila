import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 z-50 w-[92%] -translate-x-1/2 rounded-full bg-gradient-to-r from-black/60 via-black/40 to-black/60 backdrop-blur-lg">
      <nav className="flex items-center justify-between px-6 md:px-8 py-4 md:py-5">
        
        {/* Logo */}
        <div className="flex items-center gap-3 text-white font-medium">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
            ✦
          </span>
          <span className="text-sm">Favila cleaning</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10 text-sm text-white/80">
          <li className="cursor-pointer text-orange-400">Home</li>
          <li className="cursor-pointer hover:text-white">Services</li>
          <li className="cursor-pointer hover:text-white">About Us</li>
          <li className="cursor-pointer hover:text-white">Testimonials</li>
        </ul>

        {/* Desktop CTA */}
        <button className="hidden md:block rounded-full bg-white/90 px-6 py-2 text-sm font-medium text-black hover:bg-white">
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
            <li className="text-orange-400">Home</li>
            <li className="hover:text-white">Services</li>
            <li className="hover:text-white">About Us</li>
            <li className="hover:text-white">Testimonials</li>
            <button className="mt-4 rounded-full bg-white px-6 py-2 text-sm font-medium text-black">
              Contact Us
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
