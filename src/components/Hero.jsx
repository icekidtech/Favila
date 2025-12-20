import photo2 from "/photo2.jpg"; 

const Hero = () => {
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
        <button className="mt-10 rounded-full bg-[#c79a7b] px-10 py-3 text-sm font-medium text-white hover:bg-[#b9896a]">
          Book a Cleaning
        </button>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-10 text-center text-white">
          <div>
            <h3 className="text-xl font-semibold">100%</h3>
            <p className="text-xs text-gray-300">Trusted</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">100%</h3>
            <p className="text-xs text-gray-300">Client Satisfaction</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">100%</h3>
            <p className="text-xs text-gray-300">Reliable</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
