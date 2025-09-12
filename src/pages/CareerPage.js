import React from 'react';
import { Award, Users, Target, Building2, CheckCircle, TrendingUp } from 'lucide-react';
import { aboutUsData } from '../mockData';
import Footer from '../components/Footer';

const CareerPage = () => {
  

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
    {
      name: "Mr. Vikas Mishra",
      role: "Project Manager",
      experience: "12+ Years Experience",
      image: "/images/project_manager.jpeg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-24 sm:pt-28 pb-16 sm:pb-20   text-white overflow-hidden"
        style={{
  backgroundImage: "url('/images/career 1.jpg')",
  backgroundSize: "100% 100%",   // pura div fill karega
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: '60vh', // Adjust height as needed
}}
      >
        {/* White blur lights */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-40 sm:w-64 h-40 sm:h-64 bg-white rounded-full blur-2xl"></div>
        </div>

        {/* Overlay to darken image */}
        <div className="absolute inset-0 "></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            
           
            <p className="text-base sm:text-lg md:text-xl text-red-100 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed">
              
            </p>
          </div>

          {/* Achievements */}
          
        </div>
      </section>


      {/* Journey Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our{' '}
                <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                  Journey
                </span>
              </h2>
              <div className="prose prose-base sm:prose-lg text-gray-600 text-justify">
                <p className="mb-4 sm:mb-6">
                  {aboutUsData.fullDescription.split('\n\n')[0]}
                </p>
                <p className="mb-4 sm:mb-6">
                  {aboutUsData.fullDescription.split('\n\n')[1]}
                </p>
                <p>
                  {aboutUsData.fullDescription.split('\n\n')[2]}
                </p>
              </div>
            </div>

            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4 sm:space-y-6">
                  <img
                    src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&h=300&fit=crop&crop=center"
                    alt="Construction Excellence"
                    className="w-full rounded-xl sm:rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=200&fit=crop&crop=center"
                    alt="Modern Architecture"
                    className="w-full rounded-xl sm:rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-12">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop&crop=center"
                    alt="Quality Work"
                    className="w-full rounded-xl sm:rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop&crop=center"
                    alt="Happy Clients"
                    className="w-full rounded-xl sm:rounded-2xl shadow-lg"
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-gradient-to-r from-red-500 to-red-700 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold">20+</div>
                  <div className="text-xs sm:text-sm opacity-90">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
              These core values guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group p-6 sm:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 hover:border-red-300 transform hover:-translate-y-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-justify">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 sm:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
              Meet the leaders who drive our vision and ensure excellence in every project.
            </p>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-red-100 transition-all duration-300 overflow-hidden w-full max-w-sm"
              >
                {/* Image */}
                <div className="flex justify-center mt-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 sm:w-36 sm:h-36 object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="px-6 py-6 text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.experience}</p>
                </div>

                {/* Accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-red-500 to-red-400"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Accent */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 right-10 w-56 h-56 bg-red-200 rounded-full blur-3xl opacity-40"></div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CareerPage;
