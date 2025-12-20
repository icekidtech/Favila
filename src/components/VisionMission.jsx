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
              <p className="text-sm leading-relaxed text-white/90">
                To be Portugal’s leading cleaning service known for trust,
                excellence, and consistent quality — while evolving into a
                multi-industry brand under the Favilla name.
              </p>
            </div>

            {/* Our Mission */}
            <div className="w-[320px] md:w-[360px] min-h-[320px] rounded-3xl 
                            bg-white/20 backdrop-blur-md border border-white/20
                            p-8 text-center text-white">
              <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
              <p className="text-sm leading-relaxed text-white/90 mb-3">
                Provide exceptional and dependable cleaning tailored to each client.
              </p>
              <p className="text-sm leading-relaxed text-white/90 mb-3">
                Promote healthier, cleaner spaces through high standards.
              </p>
              <p className="text-sm leading-relaxed text-white/90 mb-3">
                Build a skilled team that reflects integrity and passion.
              </p>
              <p className="text-sm leading-relaxed text-white/90">
                Consistently exceed expectations on every project.
              </p>
            </div>

          </div>

          {/* Bottom Text */}
          <h2 className="text-white text-3xl md:text-4xl font-semibold text-center">
            What Some Satisfied Clients Said
          </h2>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
