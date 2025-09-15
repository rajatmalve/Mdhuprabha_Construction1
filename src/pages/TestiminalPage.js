import React from 'react';
import { Award, Users, Target, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';

const TestimonialPage = () => {
  

  const values = [
    {
      icon: Target,
      title: "Quality First",
      description: "We never compromise on quality. Every project reflects our commitment to excellence and precision in construction."
    },
    {
      icon: CheckCircle,
      title: "Timely Delivery",
      description: "We understand the value of time and ensure all projects are completed within the agreed timeline."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our clients are at the heart of everything we do. We listen, understand, and deliver beyond expectations."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We embrace modern construction techniques and technologies to provide innovative solutions."
    }
  ];

  const teamMembers = [
    {
      name: "Mr. Ashish Londhe",
      role: "Founder & Managing Director",
      experience: "19+ Years Experience",
      image: "/images/vikashsir.jpeg",
    },
    
  ];

  const awards = [
    { image: "/images/certification.jpeg", title: "Times Real Estate Award", caption: "Award received for Prajakta Ikebana — Presented by Hon'ble Shri. Nitinji Gadkari" },
    { image: "/images/PrajactaTai Award-7.jpeg", title: "Recognized for Excellence", caption: "Celebrating innovation and trust at Times Property Real Estate Awards 2022" },
    { image: "/images/PrajactaTai Award-5.jpeg", title: "Apartment Excellence Award", caption: "Honored with the 1st Position at MP Birla Cement Technocrat Awards 2024 for Apartment Building" },
    { image: "/images/PrajactaTai Award-6.jpeg", title: "Celebrating Achievement", caption: "Recognized for outstanding contribution at Times Property Awards 2022" },
    { image: "/images/PrajactaTai Award-4.jpeg", title: "Pride of Achievement", caption: "Recognized with 1st Rank in Apartment Building – MP Birla Cement Awards 2024" },
    { image: "/images/carazol5.JPG", title: " A Moment of Recognition", caption: "Honored with 1st Rank in Apartment Building at MP Birla Cement Awards 2024" },
    { image: "/images/Prajktaproject.JPG", title: " Celebrating Success", caption: "Our team being recognized for the 'Prajakta' project" },
    { image: "/images/PrajctaTai Award-3.jpeg", title: " Recognized for Quality and Excellence", caption: "We are honored to be recognized by the residents of Prajakta Green Serenity" },
    { image: "/images/all member .JPG", title: "Customer Satisfaction Award", caption: "Client-first approach in every decision" },
    
  ];

  return (
    <div className="min-h-screen bg-white">
      
      <section
              className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 text-white overflow-hidden"
              style={{
                backgroundImage: "url('/images/Testimonial Images.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "90vh",
              }}
            >
             
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 bg-white rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-40 sm:w-64 h-40 sm:h-64 bg-white rounded-full blur-2xl"></div>
              </div>
      
              {/* Overlay to darken image */}
              <div className="absolute inset-0"></div>
      
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                 
                  <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4 sm:mb-6">
                    <span className="bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
                      Building Excellence
                    </span>
                    <br />
                    <span className="text-white">Since 2005</span>
                  </h1>
                 
                </div>
              </div>
            </section>
      

      {/* Values Section */}
      

      {/* Our Team Section */}
     
      <Footer />
    </div>
  );
};

export default TestimonialPage;
