import React from "react";
import bgImage from "/photo3.jpg"; // replace with your image path

const VisionMission = () => {
  return (
    <section
      className="relative w-full min-h-[90vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative w-full px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col items-center">

          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-10 mb-24">

            {/* Our Vision */}
            <div className="w-[320px] md:w-[360px] min-h-[320px] rounded-3xl 
                            bg-white/20 backdrop-blur-md border border-white/20
                            p-8 text-center text-white">
              <h3 className="text-2xl font-semibold mb-6">Our Vision</h3>
              <p className="text-sm leading-relaxed text-white/90 mb-3">
                Be Portugal's leading cleaning service known for trust and excellence.
              </p>
              <p className="text-sm leading-relaxed text-white/90">
                Evolve into a multi-industry brand under the Favilla name with consistent quality.
              </p>
            </div>

            {/* Our Mission */}
            <div className="w-[320px] md:w-[360px] min-h-[320px] rounded-3xl 
                            bg-white/20 backdrop-blur-md border border-white/20
                            p-8 text-center text-white">
              <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
              <p className="text-sm leading-relaxed text-white/90 mb-3">
                Provide exceptional, dependable cleaning tailored to each client's needs.
              </p>
              <p className="text-sm leading-relaxed text-white/90">
                Promote healthier spaces and build a skilled team reflecting integrity and passion.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
