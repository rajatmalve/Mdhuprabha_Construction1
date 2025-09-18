import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { testimonials } from '../mockData';
import { Star, Quote, ArrowRight, Users, Award, Clock, CheckCircle } from 'lucide-react';

const HomePage = () => {
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
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      number: 20,
      suffix: "+",
      label: "Years Experience",
      gradient: "from--400 to-orange-500",
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
    <div className="min-h-screen  text-gray-900">
      <Hero />

      {/* About Section with subtle gradient */}
      <div>
        <AboutSection />
      </div>

      <section className="bg-[#1e3c72] py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-2">
          Current Projects
        </h2>
        <p className="text-lg text-white max-w-2xl text-center mx-auto  mb-12 leading-relaxed">
          Building your vision with precision and care.
          From concept to creation, we deliver structures that stand the test of time.
        </p>


        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="space-y-8">

            <div className="bg-white text-slate-600 rounded-t-2xl shadow-lg p-6 relative 
                  border-t-4  border-[#011321]">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#011321] flex items-center justify-center shadow-md font-3xl">
                🏢
              </div>
              <h3 className="mt-10 text-xl font-bold text-[#011321] text-center">Prajakta Park</h3>
              <div className="mt-4 text-slate-600 leading-relaxed list-disc list-inside space-y-1 mb-2">
                <p>
                  PRAJAKTA PARK – A thoughtfully designed residential project that blends nature with modern living. Prajakta Park
                  offers spacious homes surrounded by greenery, ensuring peace and comfort in every corner
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-slate-600"> Location:</span> Abhyankar nagar, Nagpur
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-slate-600">Type: </span> Residential
                </p>
              </div>
            </div>

          </div>


          {/* Right Cards */}
          <div className="space-y-8">

            <div className="bg-white text-slate-600 rounded-t-2xl shadow-lg p-6 relative 
                  border-t-4  border-[#011321]">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#011321] flex items-center justify-center shadow-md font-3xl">
                🏢
              </div>
              <h3 className="mt-10 text-xl font-bold text-[#011321] text-center">Prajakta La Maison</h3>
              <div className="mt-4 text-slate-600 leading-relaxed list-disc list-inside space-y-1 mb-2">
                <p>
                  Introducing ‘PRAJAKTA La-Masion’, our 7 level 3BHK luxurious view apartment
                  located in the lap of nature. A peaceful location in the heart of the city
                  where you can enjoy your mornings with blissful greenery.
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-slate-600"> Location:</span> Pandey Layout
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-slate-600">Type: </span> Residential
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="space-y-8">
            <img
              src="/images/secondProject.jpg"
              alt="Mission Vision"
              className="rounded-b-2xl shadow-lg"
            />
          </div>


          {/* Right Cards */}
          <div className="space-y-8">
            <img
              src="/images/secondProject.jpg"
              alt="Mission Vision"
              className="rounded-b-2xl shadow-lg"
            />
          </div>
        </div>
      </section>


      <section className="relative bg-white py-20" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#011321] mb-4">
              Statistics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Strength, Quality, and Trust in Every Structure — showcasing our experience and satisfied clients.
            </p>
          </div>

          {/* Counter Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((counter, index) => {
              const count = useCounter(counter.number, 2000, startCounter);
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 border border-gray-200"
                >
                  {/* Decorative Circle */}
                  <div className="absolute -top-6 w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center text-3xl shadow-lg">
                    {counter.icon}
                  </div>

                  {/* Spacer for icon */}
                  <div className="mt-12 text-center">
                    {/* Animated Number */}
                    <span className="text-3xl md:text-4xl font-extrabold text-[#011321]">
                      {count}{counter.suffix}
                    </span>

                    {/* Label */}
                    <p className="mt-2 text-gray-600 text-sm md:text-base font-medium">
                      {counter.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Featured Projects Section with distinct gradient */}
      <div>
        <FeaturedProjects />
      </div>

      {/* Contact Section */}
      <div>
        <ContactSection />
      </div>





      <Footer />
    </div>
  );
};

export default HomePage;
