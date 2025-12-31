import React from "react";
import cleaningImg from "/photo1.jpg"; // replace with your image path

const WhoAreWe = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+351932369205";
    const message = "Hi, I'd like to book a cleaning service!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleReadMoreClick = () => {
    const phoneNumber = "+351932369205";
    const message = "Hi! I'd like to know more about your cleaning services. I'm [Your Name].";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="w-full bg-[#FDE3D3] py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-[#F25C2A] mb-6">
            Who Are We?
          </h2>

          <p className="text-[#333] leading-relaxed mb-4">
            Favilla Cleaning Services is a professional cleaning company
            dedicated to transforming homes, offices, and commercial
            environments into spotless, refreshing, and well-maintained spaces.
          </p>

          <p className="text-[#333] leading-relaxed mb-6">
            With a trained, trustworthy team and the option of eco-friendly
            cleaning products, we make cleanliness stress-free so you can focus
            on what matters most.
          </p>

          <button 
            onClick={handleWhatsAppClick}
            className="mt-6 bg-gradient-to-r from-[#F25C2A] to-[#F7A17A] text-[#5A1E0C] font-semibold px-8 py-3 rounded-xl shadow-md hover:opacity-90 transition"
          >
            Book a Cleaning
          </button>

          <div className="mt-6">
            <button
              onClick={handleReadMoreClick}
              className="text-[#F25C2A] font-semibold flex items-center gap-2 hover:gap-3 transition-all bg-none border-none cursor-pointer"
            >
              Read More
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          {/* Background shape */}
          <div className="absolute -top-6 -right-6 w-full h-full bg-[#F7A17A] rounded-3xl"></div>

          {/* Image card */}
          <div className="relative bg-[#E9ECEC] rounded-3xl overflow-hidden shadow-lg">
            <img
              src={cleaningImg}
              alt="Cleaning Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoAreWe;
