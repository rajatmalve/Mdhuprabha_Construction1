import React, { useState, useEffect } from 'react';
import { Users, Award, Clock, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stats = [
    { icon: <Award className="w-8 h-8" />, number: "500+", label: "Projects Completed" },
    { icon: <Clock className="w-8 h-8" />, number: "25+", label: "Years Experience" },
    { icon: <Users className="w-8 h-8" />, number: "1000+", label: "Happy Clients" },
    { icon: <CheckCircle className="w-8 h-8" />, number: "100%", label: "On-Time Delivery" }
  ];

  const carouselImages = [
    "/images/about.jpg",
    "/images/vikashsir.jpeg",
    "/i",
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section 
      id="about" 
      className="py-20 bg-gradient-to-br from-white via-red-50 to-red-100"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About <span className="text-red-600">Madhuprabha</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Since 1998, Madhuprabha Constructions has been at the forefront of India's construction industry, 
              delivering exceptional residential, commercial, and infrastructure projects with unwavering commitment 
              to quality and innovation.
            </p>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our journey began with a simple vision: to transform blueprints into lasting legacies. Today, we stand 
              as a testament to architectural excellence, having crafted spaces that inspire, protect, and endure.
            </p>

            {/* Mission & Values */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Our Mission</h4>
                  <p className="text-slate-600">To create sustainable, innovative structures that enhance communities and exceed expectations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Our Values</h4>
                  <p className="text-slate-600">Integrity, Quality, Innovation, and Customer Satisfaction guide every decision we make.</p>
                </div>
              </div>
            </div>

            <button className="mt-8 bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-3 rounded-full font-medium hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105">
              Learn More About Us
            </button>
          </div>

          {/* Right Carousel */}
          <div className="relative">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden">
              <img
                src={carouselImages[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-96 object-cover rounded-2xl transition-all duration-700"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">25+</div>
                <div className="text-sm text-slate-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
