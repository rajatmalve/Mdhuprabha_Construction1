import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Clock, CheckCircle,ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startCounter, setStartCounter] = useState(false); 

  const stats = [
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      number: 200000,
      suffix: "+",
      label: "Sq.Ft Area Delivered",
      gradient: "from-pink-500 to-red-500",
      bg: "bg-pink-50"
    },
    {
      icon:<Clock className="w-8 h-8 text-yellow-500" />,
      number: 20,
      suffix: "+",
      label: "Years Experience",
      gradient: "from-yellow-400 to-orange-500",
      bg: "bg-yellow-50"
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      number: 200,
      suffix: "+",
      label: "Happy Clients",
      gradient: "from-green-400 to-emerald-500",
      bg: "bg-green-50"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
      number: 25,
      suffix: "+",
      label: "Projects done",
      gradient: "from-blue-500 to-indigo-600",
      bg: "bg-blue-50"
    }
  ];

  const carouselImages = [
    "/images/about.jpg",
    // "/images/WhatsApp Image 2025-09-13 at 16.54.10_5316750b.jpg",
    "/images/vikashsir.jpeg",
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Counter hook
  const useCounter = (end, duration = 2000, start = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return; // only start when section is visible

      let startVal = 0;
      const increment = end / (duration / 30);
      const timer = setInterval(() => {
        startVal += increment;
        if (startVal >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.ceil(startVal));
        }
      }, 30);

      return () => clearInterval(timer);
    }, [end, duration, start]);

    return count;
  };

  // Detect when Stats Section is visible
  const statsRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
        }
      },
      { threshold: 0.3 } // 30% visible
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      className="py-20 "
    >
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className='mb-8'>
            <h2 className="text-4xl md:text-5xl font-bold text-[#011321] mb-6">
              About <span className="text-[#011321]">Madhuprabha</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed text-justify">
              Madhuprabha Construction was started in the year 2005. The business
              start was modest with the regular clients in Nagpur. Over the period,
              in last 20 years, now we are the leading company in the construction group.
              Our projects not only deal in Nagpur but also in and around Central India.
              The journey of hard work, dedication, and trust of our clients has brought
              us this long way. We deal in the commercials and housing society.
              With the experience in designing and building these, our company has
              higher standards in terms of quality and at the same time, it remains
              affordable to everyone. We are also very well known for the perfect carvings
              and core commitment for every project.</p>


            <Link
              to="/about"
              className="group inline-flex items-center space-x-2 px-8 py-3 font-semibold text-sm rounded-full border border-[#011321] bg-[#011321] hover:bg-[#011321] transition-all duration-300"
            >
              <span className="text-white group-hover:text-white">
                            More About Us
                 </span>
                          <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

          {/* Right Carousel */}
          <div className="relative w-full flex justify-center items-center">
            <div className="relative w-full h-80 md:h-96 overflow-hidden rounded-3xl shadow-2xl">
              <div
                className="flex h-full transition-transform duration-1000"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselImages.map((img, index) => (
                  <div key={index} className="relative w-full flex-shrink-0 h-full">
                    <img
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute top-80 left-2 bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-lg">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-[#011321]">20+</span>
                <span className="text-sm text-slate-700">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default AboutSection;
