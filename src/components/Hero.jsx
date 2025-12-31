import photo2 from "/photo2.jpg"; 

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+351932369205";
    const message = "Hi, I'd like to book a cleaning service!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center pt-44"
      style={{
        backgroundImage: `url(${photo2})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-5xl text-4xl font-semibold leading-tight text-white md:text-6xl">
          Dazzling, Healthy &{" "}
          <span className="text-orange-300">Well-Organised</span>
          <br />
          Spaces Every Single Time
        </h1>

        <p className="mt-6 max-w-2xl text-sm text-gray-200 md:text-base">
          Professional home and office cleaning services designed to give you
          peace of mind, delivered with empathy, care, and exceptional quality.
        </p>

        {/* CTA */}
        <button 
          onClick={handleWhatsAppClick}
          className="mt-10 rounded-full bg-[#c79a7b] px-10 py-3 text-sm font-medium text-white hover:bg-[#b9896a] transition-all"
        >
          Book a Cleaning
        </button>

        {/* Stats */}
        <div 
          className="mt-16 rounded-[31px] bg-white/10 backdrop-transparent-md border border-white/20 flex items-center justify-center opacity-1"
          style={{
            width: "500px",
            height: "100px",
            gap: "70px",
          }}
        >
          <div className="grid grid-cols-3 gap-[70px] text-center text-white">
            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-sm text-gray-300 mt-2">Trusted</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-sm text-gray-300 mt-2">Client Satisfaction</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-sm text-gray-300 mt-2">Reliable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
