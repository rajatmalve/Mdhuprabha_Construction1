import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { Star, Quote, ArrowRight, Users, Award, Clock, CheckCircle, MapPin, Home } from 'lucide-react';

const HomePage = () => {
  const statsRef = useRef(null);
  const [startCounter, setStartCounter] = useState(false);

  const stats = [
    { icon: <Award className="w-8 h-8 text-yellow-500" />, number: 200000, suffix: "+", label: "Sq.Ft Area Delivered" },
    { icon: <Clock className="w-8 h-8 text-yellow-500" />, number: 20, suffix: "+", label: "Years Experience" },
    { icon: <Users className="w-8 h-8 text-green-500" />, number: 200, suffix: "+", label: "Happy Clients" },
    { icon: <CheckCircle className="w-8 h-8 text-blue-500" />, number: 25, suffix: "+", label: "Projects done" },
  ];

  // Updated useCounter hook to reset when not visible
  const useCounter = (end, duration = 2000, start = false) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) {
        setCount(0); // reset counter if section not visible
        return;
      }

      let startVal = 0;
      const increment = end / (duration / 30);

      const timer = setInterval(() => {
        startVal += increment;
        if (startVal >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(startVal));
        }
      }, 30);

      return () => clearInterval(timer);
    }, [end, duration, start]);

    return count;
  };

  // Intersection Observer to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true); // section visible → animate
        } else {
          setStartCounter(false); // section hidden → reset
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
    <div className="min-h-screen text-gray-900">
      <Hero />
      <AboutSection />

      {/* Current Projects */}
      <section className="bg-[#1e3c72b5] py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-2">Current Projects</h2>
        <p className="text-lg text-white max-w-2xl text-center mx-auto mb-12 leading-relaxed">
          Building your vision with precision and care. From concept to creation, we deliver structures that stand the test of time.
        </p>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <img
              src="/images/HDPHOTO1.jpg"
              alt="Prajakta Park"
              className="w-full h-full object-fill transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center text-white px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-2xl font-bold mb-2 text-['#011321']">Prajakta Park</h3>
              <p className="text-sm leading-relaxed mb-3 max-w-md">
                A thoughtfully designed residential project blending nature with modern living. Spacious homes surrounded by greenery.
              </p>
              <div className="flex items-center space-x-2 text-sm mb-1">
                <MapPin className="w-4 h-4 text-white" />
                <span>Abhyankar Nagar, Nagpur</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Home className="w-4 h-4 text-['#fff']" />
                <span>Residential</span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="relative group rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <img
              src="/images/secondProject.jpg"
              alt="Prajakta La Maison"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center text-white px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-2xl font-bold mb-2 text-['#011321']">Prajakta La Maison</h3>
              <p className="text-sm leading-relaxed mb-3 max-w-md">
                A 7-level luxurious 3BHK apartment located in the lap of nature. Peaceful mornings in the heart of the city with blissful greenery.
              </p>
              <div className="flex items-center space-x-2 text-sm mb-1">
                <MapPin className="w-4 h-4 text-white" />
                <span>Pandey Layout</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Home className="w-4 h-4 text-['#fff']" />
                <span>Residential</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative bg-white py-20" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#011321] mb-4">Statistics</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Strength, Quality, and Trust in Every Structure — showcasing our experience and satisfied clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((counter, index) => {
              const count = useCounter(counter.number, 2000, startCounter);
              return (
                <div
                  key={index}
                  className="relative flex flex-col items-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 border border-gray-200"
                >
                  <div className="absolute -top-6 w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center text-3xl shadow-lg">
                    {counter.icon}
                  </div>
                  <div className="mt-12 text-center">
                    <span className="text-3xl md:text-4xl font-extrabold text-[#011321]">
                      {count}{counter.suffix}
                    </span>
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

      <FeaturedProjects />
      <Footer />
    </div>
  );
};

export default HomePage;
