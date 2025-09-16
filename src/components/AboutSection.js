import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Clock, CheckCircle } from 'lucide-react';
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
              className=" bg-[#011321] text-white px-8 py-3 rounded-full font-medium hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              <button>
                More About Us
              </button>
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

        <section className="bg-gray-50 py-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#011321] text-center mb-12">
              Current Projects
            </h2>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
            {/* Left Image */}
            <div className="flex justify-center">
              <img
                src="/images/secondProject.jpg"
                alt="Mission Vision"
                className="rounded-2xl shadow-lg object-fill"
              />
            </div>

            {/* Right Cards */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 relative border-t-4 border-[#011321]">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#011321] flex items-center justify-center shadow-md">
                  🚀
                </div>
                <h3 className="mt-10 text-xl font-bold text-[#011321] text-center">Prajakta  Park </h3>
                <ul className="mt-4 text-[#011321] text-sm leading-relaxed list-disc list-inside space-y-1">
                  <li>
                    PRAJAKTA PARK – A thoughtfully designed residential project that blends nature with modern living. Prajakta Park
                    offers spacious homes surrounded by greenery, ensuring peace and comfort in every corner.
                  </li>
                  <li>Abhyankar nagar, Nagpur</li>
                  <li>Residential</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left Image */}
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl shadow-lg p-6  relative border-t-4 border-[#011321]">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#011321] flex items-center justify-center shadow-md">
                  👁️
                </div>
                <h3 className="mt-10 text-xl font-bold text-[#011321] text-center">Prajakta La Maison</h3>
                <ul className="mt-4 text-[#011321] text-sm leading-relaxed list-disc list-inside space-y-1">
                  <li>
                    Introducing ‘PRAJAKTA La-Masion’, our 7 level 3BHK luxurious view apartment
                    located in the lap of nature. A peaceful location in the heart of the city
                    where you can enjoy your mornings with blissful greenery.
                  </li>
                  <li>Panday Layout</li>
                  <li>Residential</li>
                </ul>
              </div>

            </div>

            {/* Right Cards */}
            <div className="space-y-8">
              <img
                src="/images/secondProject.jpg"
                alt="Mission Vision"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </section>


      <section className="bg-white py-16" ref={statsRef}>
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold text-[#011321] text-center mb-12">
     Statistics 
    </h2>

    {/* Counter Grid */}
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
  {stats.map((counter, index) => {
    const count = useCounter(counter.number, 2000, startCounter); 
    return (
      <div
        key={index}
        className="flex flex-col items-center border-4 border-[#011321] rounded-2xl p-6 shadow-md hover:shadow-lg transition"
      >
        {/* Icon */}
        <div className="text-5xl mb-4">{counter.icon}</div>

        {/* Animated Number */}
        <span className="text-3xl md:text-4xl font-extrabold text-[#011321]">
          {count}
          {counter.suffix}
        </span>

        {/* Label */}
        <p className="mt-2 text-sm text-gray-600 max-w-[200px]">
          {counter.label}
        </p>
      </div>
    );
  })}
</div>

  </div>
</section>



      </div>
    </section>
  );
};

export default AboutSection;
