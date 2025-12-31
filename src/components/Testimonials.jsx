import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Favila Cleaning transformed our office spotless, fresh, and perfectly organised. Highly recommended!",
      author: "Maria Silva",
      role: "Office Manager",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      text: "Favila Cleaning transformed our office spotless, fresh, and perfectly organised. Highly recommended!",
      author: "João Santos",
      role: "Business Owner",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
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
              className="relative min-h-[280px] rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 flex flex-col items-center justify-center p-8 overflow-hidden"
            >
              {/* Content */}
              <div className="relative z-10 text-center">
                <p className="text-white text-sm md:text-base leading-relaxed italic mb-6">
                  "{testimonial.text}"
                </p>

                {/* Profile Section */}
                <div className="flex flex-col items-center gap-3">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F25C2A]">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name and Role */}
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-white/70 text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;