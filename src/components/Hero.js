import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselData = [
    {
      id: 1,
      title: "LAMASON",
      image: "/images/secondProject.jpg",
      gradient: "from-blue-400 via-cyan-300 to-green-300",
    },
    {
      id: 2,
      title: "PRAJKTA PARK",
      image: "/images/prajktaclassic.png",
      gradient: "from-pink-500 via-red-400 to-yellow-400",
    },
    {
      id: 3,
      title: "PRAJKTA CLASSIC",
      image: "/images/lomolon.jpg",
      gradient: "from-purple-400 via-pink-300 to-orange-300",
    },
    {
      id: 4,
      title: "PRAJKTA GREEN SERENITY",
      image: "/images/prajkta green serenity1.jpeg",
      gradient: "from-green-400 via-lime-300 to-emerald-500",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  return (
    <section className="relative h-[40vh] sm:h-[55vh] md:h-[70vh] lg:h-screen overflow-hidden">
      {/* Carousel Container */}
      <div
        className="relative h-full w-full flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {carouselData.map((slide, index) => (
          <div key={slide.id} className="min-w-full h-full relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Image Title and Explore Button centered */}
            {index === currentSlide && (
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-30">
                {/* Gradient Text Title with Playfair Display */}
                <h2
                  style={{ fontFamily: 'Playfair Display, serif' }}
                  className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wider drop-shadow-2xl 
                  bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent`}
                >
                  {slide.title}
                </h2>

                {/* Glassmorphism Stylish Button */}
                <button
                  style={{ fontFamily: 'Playfair Display, serif' }}
                  className="mt-6 px-8 py-3 text-lg font-semibold rounded-full 
                             bg-white/10 backdrop-blur-md border border-white/30 text-white 
                             shadow-lg hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 
                             hover:text-white transition-all duration-500"
                >
                  EXPLORE PROJECT
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-30 group p-4 bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 text-white rounded-full hover:bg-white/20 hover:border-white hover:text-white transform hover:scale-110 transition-all duration-500"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-30 group p-4 bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 text-white rounded-full hover:bg-white/20 hover:border-white hover:text-white transform hover:scale-110 transition-all duration-500"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-12 left-1/2 -translate-x-1/2 z-30 flex space-x-4">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative transition-all duration-500 ${index === currentSlide ? 'scale-125' : 'hover:scale-110'
              }`}
          >
            <div
              className={`w-4 h-4 rounded-full transition-all duration-500 ${index === currentSlide ? 'bg-white shadow-lg' : 'bg-white/40 hover:bg-white/70'
                }`}
            ></div>
            {index === currentSlide && (
              <div className="absolute inset-0 bg-white rounded-full blur animate-pulse"></div>
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
