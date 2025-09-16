import React from 'react';
import { Award, Users, Target, CheckCircle } from 'lucide-react';
import { aboutUsData } from '../mockData';
import Footer from '../components/Footer';

const AboutPage = () => {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 text-white overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/About image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
        }}
      >
        {/* White blur lights */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-40 sm:w-64 h-40 sm:h-64 bg-white rounded-full blur-2xl"></div>
        </div>

        {/* Overlay to darken image */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Centered Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight">
            <span className="from-white to-white-200">Building Trust,</span>
            <br />
            <span className="text-white">Shaping The Future</span>
          </h1>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our <span className="bg-[#011321] bg-clip-text text-transparent">Journey</span>
              </h2>
              <div className="prose prose-base sm:prose-lg text-gray-600 text-justify">
                <p className="mb-4 sm:mb-6">{aboutUsData.fullDescription.split('\n\n')[0]}</p>
                <p className="mb-4 sm:mb-6">{aboutUsData.fullDescription.split('\n\n')[1]}</p>
                <p>{aboutUsData.fullDescription.split('\n\n')[2]}</p>
              </div>
            </div>

            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4 sm:space-y-6">
                  <img src="/images/family-portrait-sofa.jpg" alt="Construction Excellence" className="w-full rounded-xl sm:rounded-2xl shadow-lg" />
                  <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=200&fit=crop&crop=center" alt="Modern Architecture" className="w-full rounded-xl sm:rounded-2xl shadow-lg" />
                </div>
                <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-12">
                  <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop&crop=center" alt="Quality Work" className="w-full rounded-xl sm:rounded-2xl shadow-lg" />
                  <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop&crop=center" alt="Happy Clients" className="w-full rounded-xl sm:rounded-2xl shadow-lg" />
                </div>
              </div>

              {/* Floating Badge */}
             {/* Floating Badge */}
<div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-gradient-to-r from-black to-gray-700 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl">
  <div className="text-center">
    <div className="text-lg sm:text-2xl font-bold">20+</div>
    <div className="text-xs sm:text-sm opacity-90">Years</div>
  </div>
</div>

            </div>
          </div>
        </div>
      </section>



      {/* mission vision Section start */}
      <section className="py-16 sm:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"></h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Meet the visionaries behind our success</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Experienced Leadership</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Mr.Ashish Londhe (B.E, M.B.A) is the sole proprietor of the company. He has served as JOINT SECRETARY in CREDAI (Confederation of Real Estate Developers Association of India) from 2015 - 2019. Presently is serving as a VICE PRESIDENT for the year 2019-2023 in CREDAI. 
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                 CREDAI TREASURER 2023-2025 an association that has more than 13000 Members Nation Wide, it has 25 State chapters, 180 city chapters. Nagpur has got nearly 350 Members. Confederation is known for the best construction quality and Transparency.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
              <img src="/images/vikashsir.jpeg" alt="Leadership" className="w-full max-w-md rounded-2xl shadow-lg object-cover mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Mr. Ashish Londhe</h3>
              <p className="text-red-600 font-semibold">Founder & Managing Director</p>
              <p className="text-gray-600">20+ Years Experience</p>
            </div>
          </div>
        </div>
      </section>
      {/* mission vision Section end */}

      {/* Leadership Section */}
      <section className="py-16 sm:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Leadership Excellence</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Meet the visionaries behind our success</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Experienced Leadership</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Mr.Ashish Londhe (B.E, M.B.A) is the sole proprietor of the company. He has served as JOINT SECRETARY in CREDAI (Confederation of Real Estate Developers Association of India) from 2015 - 2019. Presently is serving as a VICE PRESIDENT for the year 2019-2023 in CREDAI. 
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                 CREDAI TREASURER 2023-2025 an association that has more than 13000 Members Nation Wide, it has 25 State chapters, 180 city chapters. Nagpur has got nearly 350 Members. Confederation is known for the best construction quality and Transparency.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
              <img src="/images/vikashsir.jpeg" alt="Leadership" className="w-full max-w-md rounded-2xl shadow-lg object-cover mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Mr. Ashish Londhe</h3>
              <p className="text-red-600 font-semibold">Founder & Managing Director</p>
              <p className="text-gray-600">20+ Years Experience</p>
            </div>
          </div>
        </div>
      </section>

     {/* Values Section */}
<section className="py-12 sm:py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8 sm:mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
        Our <span className="bg-[#011321] bg-clip-text text-transparent">Values</span>
      </h2>
      <p className="text-sm sm:text-base text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
        These core values guide every decision we make and every project we undertake.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {values.map((value, index) => {
        const Icon = value.icon;
        return (
          <div key={index} className="flex items-start gap-3 p-4 sm:p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#011321]">
            {/* Black & White Icon */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">{value.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-justify">{value.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default AboutPage;
