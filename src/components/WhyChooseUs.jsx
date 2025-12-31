import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#F25C2A] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-4xl font-bold text-[#111] mb-20">
          Why Choose Favilla Cleaning Services?
        </h2>

        {/* Content Row */}
        <div className="flex justify-center items-center gap-8 overflow-x-auto scrollbar-hide">

          {/* Card 1 */}
          <div className="w-[260px] h-[260px] bg-[#FFD6C6] rounded-3xl flex flex-col justify-center text-center p-6
                          transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex-shrink-0">
            <h3 className="text-lg font-semibold text-[#111] mb-4">
              Skilled & Trustworthy Team
            </h3>
            <p className="text-sm text-[#555] leading-relaxed">
              Every cleaner is trained, disciplined, and committed to excellence.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-[260px] h-[260px] bg-[#FFD6C6] rounded-3xl flex flex-col justify-center text-center p-6
                          transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex-shrink-0">
            <h3 className="text-lg font-semibold text-[#111] mb-4">
              Custom Cleaning Plans
            </h3>
            <p className="text-sm text-[#555] leading-relaxed">
              We adapt to your lifestyle, routine, or business operations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-[260px] h-[260px] bg-[#FFD6C6] rounded-3xl flex flex-col justify-center text-center p-6
                          transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex-shrink-0">
            <h3 className="text-lg font-semibold text-[#111] mb-4">
              Eco-Friendly Options
            </h3>
            <p className="text-sm text-[#555] leading-relaxed">
              Safe and sustainable cleaning products available on request.
            </p>
          </div>

          {/* Card 4 */}
          <div className="w-[260px] h-[260px] bg-[#FFD6C6] rounded-3xl flex flex-col justify-center text-center p-6
                          transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex-shrink-0">
            <h3 className="text-lg font-semibold text-[#111] mb-4">
              High Standards & Ethical Practices
            </h3>
            <p className="text-sm text-[#555] leading-relaxed">
              We promote healthier environments with every visit.
            </p>
          </div>

          {/* Card 5 */}
          <div className="w-[260px] h-[260px] bg-[#FFD6C6] rounded-3xl flex flex-col justify-center text-center p-6
                          transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex-shrink-0">
            <h3 className="text-lg font-semibold text-[#111] mb-4">
              Consistent Quality, Every Time
            </h3>
            <p className="text-sm text-[#555] leading-relaxed">
              We don't just clean — we elevate your space.
            </p>
          </div>

        </div>
      </div>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @media (min-width: 1024px) {
          .scrollbar-hide {
            overflow-x: visible !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
