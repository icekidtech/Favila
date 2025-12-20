import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#111] to-[#000] text-white px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Ready for a cleaner,<br />healthier space?
          </h2>
          <p className="text-white/60 mb-6">
            Message us today to book your first cleaning or request a free quote.
          </p>

          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-center gap-3">
              <Phone size={16} /> [+23408064567890]
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} /> favillagroupco@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} /> Cascais, Lisbon, Portugal
            </li>
            <li className="flex items-center gap-3">
              <Clock size={16} />
              Opening Hours: Monday – Saturday | 8:00 AM – 6:00 PM
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li>House Cleaning</li>
            <li>Spring & Summer Cleaning</li>
            <li>Hotel Cleaning</li>
            <li>Deep Cleaning</li>
            <li>Post-Construction Cleaning</li>
            <li>Airbnb / Short-Let Cleaning</li>
            <li>Factory Cleaning</li>
            <li>Event Cleaning (Before & After)</li>
            <li>Office & Corporate Cleaning</li>
          </ul>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-10">
              ✣ Favilla<br />cleaning ✣
            </h3>

            <h4 className="text-xl font-semibold mb-2">
              Want a Cleaner Home Without Stress?
            </h4>
            <p className="text-white/60 text-sm mb-6">
              Sign up for monthly tips, expert recommendations, and exclusive
              offers only for subscribers.
            </p>

            <div className="flex bg-[#2A2A2A] rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent px-5 py-3 w-full outline-none text-sm"
              />
              <button className="bg-[#444] px-6 py-3 text-sm font-semibold">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-8 text-white/60 text-sm">
            <span>f</span>
            <span>◎</span>
            <span>@favillacleaningservices</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
