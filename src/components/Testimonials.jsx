import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Favila Cleaning transformed our office spotless, fresh, and perfectly organised. Highly recommended!",
      author: "Satisfied Client",
    },
    {
      text: "Favila Cleaning transformed our office spotless, fresh, and perfectly organised. Highly recommended!",
      author: "Satisfied Client",
    },
  ];

  return (
    <section
      className="relative w-full min-h-[450px] bg-cover bg-center"
      style={{ backgroundImage: `url('/photo4.jpg')` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 py-16">
        <h2 className="text-white text-3xl md:text-4xl font-semibold text-center mb-12">
          What Some Satisfied Clients Said
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative min-h-[200px] rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center p-8 overflow-hidden"
            >
              {/* Content */}
              <div className="relative z-10 text-center">
                <p className="text-white text-sm md:text-base leading-relaxed italic mb-4">
                  "{testimonial.text}"
                </p>
                <p className="text-white/80 text-xs font-semibold">
                  — {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;