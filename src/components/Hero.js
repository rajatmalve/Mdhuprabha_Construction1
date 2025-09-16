import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselData = [
    {
      id: 1,
      title: "PRAJAKTA LA-MAISON",
      tagline: " The Soul of france now in your city",
      image: "/images/secondProject.jpg",
      status: "Ongoing",
      gradient: "from-blue-400 via-indigo-500 to-purple-600",
    },
    {
      id: 2,
      title: "PRAJAKTA PARK",
      tagline: " 3BHKD park facing premium flats in abhayankar nagar",
      image: "/images/HD PHOTO 1.jpg",
      status: "Ongoing",
      gradient: "from-pink-500 via-red-400 to-yellow-400",
    },
    {
      id: 3,
      title: "PRAJAKTA CLASSIC",
      tagline: "spacious duplex with garden and parking facility",
      status: "Completed",
      image: "/images/park_img_page-0001.jpg",
      gradient: "from-pink-500 via-red-400 to-yellow-400",
    },
    {
      id: 4,
      title: "PRAJAKTA GREEN SERENITY",
      tagline: "Luxury with Quality and Tranquility...",
      status: "Completed",
      image: "/images/3 (1).png",
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
              className="w-full h-full"
            />

            {index === currentSlide && (
              <>
                {/* Logo + Title Bottom Left */}
                <div className="absolute bottom-10 left-10 z-30 text-left">
                  {/* Logo Above Title */}
                  <img
                    src="/images/WhatsApp Image 2025-09-13 at 16.54.10_b60a3e66.jpg"
                    alt="Credai Nagpur Metro"
                    className="w-24 sm:w-28 md:w-32 lg:w-36 object-contain mb-3 drop-shadow-lg"
                  />

                  {/* Title */}


               <div className="inline-block text-center">
  <h2
    style={{ fontFamily: 'Playfair Display, serif' }}
    className="relative px-4 py-6 rounded-lg 
      text-xl sm:text-2xl md:text-4xl lg:text-5xl 
      font-extrabold uppercase tracking-wider drop-shadow-2xl 
      bg-black/60 text-white text-center"
  >
    {/* Status Badge 👇 (inside h2) */}
    <span
      style={{ fontFamily: 'Julee, cursive' }}
      className={`absolute -top-4 right-4 px-4 py-1 rounded-full text-sm sm:text-base font-semibold shadow-lg 
        ${slide.status === "Completed" ? "bg-green-500 text-white" : "bg-yellow-400 text-black"}`}
    >
      {slide.status}
    </span>

    {slide.title}
    <span
      style={{ fontFamily: 'Julee, cursive' }}
      className="block mt-2 text-sm sm:text-base md:text-lg lg:text-xl font-normal tracking-normal"
    >
      {slide.tagline}
    </span>
  </h2>
</div>





                </div>

                {/* Explore Project Button Center */}
                <div className="absolute inset-0 flex justify-center items-center z-30">
                  <Link to={`/project/${slide.id}`}>
                    <button
                      style={{ fontFamily: 'Playfair Display, serif' }}
                      className="px-8 py-3 text-lg font-semibold rounded-full 
                                 bg-white/10 backdrop-blur-md border border-white/30 text-white 
                                 shadow-lg hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 
                                 hover:text-white transition-all duration-500"
                    >
                      EXPLORE PROJECT
                    </button>
                  </Link>
                </div>
              </>
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
    </section>
  );
};

export default Hero;
