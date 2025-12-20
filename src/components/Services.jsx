import React from "react";

const services = [
  {
    title: "House Cleaning",
    desc: "Regular maintenance to keep your living space fresh, tidy, and consistently inviting.",
    highlight: true,
  },
  {
    title: "Deep Cleaning",
    desc: "A thorough, top-to-bottom scrub that targets hidden dirt, grime, and hard-to-reach areas.",
  },
  {
    title: "Office & Corporate Cleaning",
    desc: "Create a pristine, productive work environment for your team and a professional impression for clients.",
  },
  {
    title: "Hotel Cleaning",
    desc: "Immaculate housekeeping standards designed to ensure 5-star guest satisfaction and glowing reviews.",
  },
  {
    title: "Factory Cleaning",
    desc: "Specialized industrial cleaning to maintain safety compliance and operational efficiency on the floor.",
  },
  {
    title: "Airbnb / Short-Let Cleaning",
    desc: "Fast, reliable turnovers with hotel-quality details to secure that \"Superhost\" status.",
  },
  {
    title: "Event Cleaning",
    desc: "We handle the pre-party prep and the post-party cleanup so you can focus on hosting.",
  },
  {
    title: "Spring & Summer Cleaning",
    desc: "A seasonal refresh to air out your home, declutter, and breathe new life into your space.",
  },
  {
    title: "Post-Construction Cleaning",
    desc: "Removing fine dust, debris, and construction residue to make your new project move-in ready.",
  },
];

const Services = () => {
  return (
    <section className="w-full bg-[#FFF9F6] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#F25C2A] mb-4">
            Our Professional Cleaning Services
          </h2>
          <p className="text-[#555] max-w-2xl mx-auto">
            We provide tailored cleaning solutions for residential, commercial,
            and industrial needs:
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 flex flex-col justify-between min-h-[220px]
                ${
                  service.highlight
                    ? "bg-[#F25C2A] text-white"
                    : "bg-[#FDE3D3] text-[#222]"
                }
              `}
            >
              <div>
                <h3
                  className={`text-xl font-semibold mb-3 ${
                    service.highlight ? "text-white" : "text-[#111]"
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed ${
                    service.highlight ? "text-white/90" : "text-[#444]"
                  }`}
                >
                  {service.desc}
                </p>
              </div>

              <div className="mt-6">
                <button
                  className={`font-semibold flex items-center gap-2 text-sm
                    ${
                      service.highlight
                        ? "text-white"
                        : "text-[#F25C2A]"
                    }
                  `}
                >
                  Read More <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
