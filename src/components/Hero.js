import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const carouselData = [
    { id: 1, title: "Prajakta La-Maison", tagline: "The Soul of france now in your city", image: "/images/secondProject.jpg", status: "Ongoing", fonts: { title: "Dancing Script, cursive", status: "Julee, cursive", tagline: "Merriweather, serif" } },
    { id: 2, title: "Prajakta Park", tagline: "3BHKD park facing premium flats in abhayankar nagar", image: "/images/HDPHOTO1.jpg", status: "Ongoing", fonts: { title: "Italianno, cursive", status: "Dancing Script, cursive", tagline: "Calibri" } },
    { id: 3, title: "PRAJAKTA CLASSIC", tagline: "Spacious duplex with garden and parking facility", image: "/images/park_img_page-0001.jpg", status: "Completed", fonts: { title: "Montserrat, sans-serif", status: "Julee, cursive", tagline: "Open Sans, sans-serif" } },
    { id: 4, title: "PRAJAKTA GREEN SERENITY", tagline: "Luxury with Quality and Tranquility...", image: "/images/cam_no_32_FINAL_Right_Night_copy[1].jpg", status: "Completed", fonts: { title: "Cinzel, serif", status: "Satisfy, cursive", tagline: "Merriweather, serif" } },
    { id: 5, title: "", tagline: "", status: "", image: "/images/certification.jpeg", fonts: { title: "", status: "", tagline: "" } }
  ];

  const slides = [carouselData[carouselData.length - 1], ...carouselData, carouselData[0]];

  const [currentSlide, setCurrentSlide] = useState(1);
  const [transition, setTransition] = useState(true);
  const slideRef = useRef();

  const nextSlide = () => setCurrentSlide(prev => prev + 1);
  const prevSlide = () => setCurrentSlide(prev => prev - 1);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!transition) return;

    if (currentSlide === slides.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrentSlide(1);
      }, 1000);
    }
    if (currentSlide === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrentSlide(slides.length - 2);
      }, 1000);
    }
  }, [currentSlide]);

  useEffect(() => {
    if (!transition) {
      setTimeout(() => setTransition(true), 50);
    }
  }, [transition]);

  return (
    <section className="relative h-[100dvh] sm:h-[55vh] md:h-[70vh] lg:h-screen overflow-hidden">
      {/* Carousel Wrapper */}
      <div
        ref={slideRef}
        className={`flex h-full w-full ${transition ? "transition-transform duration-1000 ease-in-out" : ""}`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
       {slides.map((slide, index) => (
  <div key={index} className="min-w-full h-full relative">
    <img src={slide.image} alt={slide.title} className="w-full h-full object-fill" />

    {index === currentSlide && slide.title && (
      <div className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 z-30 text-left max-w-[90%] sm:max-w-[70%]">
        <img src="/images/WhatsApp Image 2025-09-13 at 16.54.10_b60a3e66.jpg" alt="Logo" className="w-12 sm:w-20 md:w-28 lg:w-36 object-contain mb-2 sm:mb-4 drop-shadow-lg" />
        <div className="inline-block text-left">
          <h2 style={{ fontFamily: slide.fonts.title }} className="relative px-3 py-4 sm:px-4 sm:py-6 rounded-lg text-lg sm:text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-wider drop-shadow-2xl bg-black/50 text-white">
            <span style={{ fontFamily: slide.fonts.status }} className={`absolute -top-3 right-3 px-3 py-1 rounded-full text-xs sm:text-sm md:text-base font-semibold shadow-lg ${slide.status === "Completed" ? "bg-[#011321] text-white" : "bg-yellow-400 text-black"}`}>{slide.status}</span>
            {slide.title}
            <span style={{ fontFamily: slide.fonts.tagline }} className="block mt-1 sm:mt-2 text-xs sm:text-sm md:text-lg lg:text-xl font-normal tracking-normal">{slide.tagline}</span>
          </h2>
        </div>
      </div>
    )}

    {/* Member CREDAI image on 5th slide */}
    {index === currentSlide && slide.id === 5 && (
      <div className="absolute bottom-6 left-6 z-30">
        <img src="/images/WhatsApp Image 2025-09-13 at 16.54.10_b60a3e66.jpg" alt="Member CREDAI Nagpur Metro" className="w-24 sm:w-32 md:w-40 lg:w-48 object-contain drop-shadow-lg" />
      </div>
    )}
  </div>
))}

      </div>

      {/* Centered Explore Button */}
      <div className="absolute inset-0 flex justify-center items-center z-40 pointer-events-none">
        {slides[currentSlide]?.title && (
          <Link to={`/project/${slides[currentSlide].id}`} className="pointer-events-auto">
            <button style={{ fontFamily: "Playfair Display, serif" }} className="px-6 sm:px-12 py-3 sm:py-4 text-sm sm:text-lg font-semibold rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white shadow-lg hover:bg-[#011321] hover:text-white transition-all duration-500">
              EXPLORE PROJECT
            </button>
          </Link>
        )}
      </div>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-30 group p-4 bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 text-white rounded-full hover:bg-white/20 hover:border-white transform hover:scale-110 transition-all duration-500"><ChevronLeft className="w-8 h-8" /></button>
      <button onClick={nextSlide} className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-30 group p-4 bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 text-white rounded-full hover:bg-white/20 hover:border-white transform hover:scale-110 transition-all duration-500"><ChevronRight className="w-8 h-8" /></button>
    </section>
  );
};

export default Hero;
