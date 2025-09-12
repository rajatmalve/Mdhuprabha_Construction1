import React, { useState, useEffect } from 'react';
import { Users, Award, Clock, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stats = [
    { 
      icon: <Award className="w-8 h-8" />, 
      number: "500+", 
      label: "Projects Completed",
      gradient: "from-pink-500 to-red-500",
      bg: "bg-pink-50"
    },
    { 
      icon: <Clock className="w-8 h-8" />, 
      number: "25+", 
      label: "Years Experience",
      gradient: "from-yellow-400 to-orange-500",
      bg: "bg-yellow-50"
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      number: "1000+", 
      label: "Happy Clients",
      gradient: "from-green-400 to-emerald-500",
      bg: "bg-green-50"
    },
    { 
      icon: <CheckCircle className="w-8 h-8" />, 
      number: "100%", 
      label: "On-Time Delivery",
      gradient: "from-blue-500 to-indigo-600",
      bg: "bg-blue-50"
    }
  ];

  const carouselImages = [
    "/images/about.jpg",
    "/images/vikashsir.jpeg",
    "/images/Prajktaproject.JPG",
    "/images/certification.jpeg",
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About <span className="text-red-600">Madhuprabha</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Madhu Prabha Constructions began its journey in 2005 as Ashish Construction, founded with a simple yet powerful vision: to build structures that not only meet but exceed expectations. Over the years, we have evolved from a small construction company to one of Maharashtra's most trusted construction partners.
            </p>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our transformation to Madhu Prabha Constructions reflects our growth while maintaining the core values that have guided us from the beginning. We believe that construction is not just about building structures; it's about creating spaces where lives unfold, businesses thrive, and communities flourish. Today, with over 500 completed projects and more than 1000 satisfied clients, we continue to set new standards in construction excellence, always staying true to our founding principles of quality, integrity, and customer satisfaction.
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

          {/* Right Carousel with Slide Effect */}
          <div className="relative w-full">
            <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-2xl">
              <div
                className="flex h-full transition-transform duration-1000"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="w-full flex-shrink-0 h-full object-cover"
                  />
                ))}
              </div>
            </div>

            {/* Card below carousel, left side */}
            <div className="relative mt-4 mr-5">
              <div className="absolute -top-16 left-0 bg-white rounded-2xl p-6 shadow-xl w-44">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">25+</div>
                  <div className="text-sm text-slate-600">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 ${stat.bg}`}
            >
              <div
                className={`inline-flex items-center justify-center w-20 h-20 
                           bg-gradient-to-br ${stat.gradient} text-white 
                           rounded-2xl mb-4 border-4 border-white shadow-lg
                           group-hover:scale-110 transition-transform duration-300`}
              >
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
