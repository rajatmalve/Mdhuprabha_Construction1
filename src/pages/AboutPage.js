import React from "react";
import { Award, Users, Target, CheckCircle, Eye, Check, } from "lucide-react";
import Footer from "../components/Footer";

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Quality First",
      description:
        "We never compromise on quality. Every project reflects our commitment to excellence and precision in construction.",
    },
    {
      icon: CheckCircle,
      title: "Timely Delivery",
      description:
        "We understand the value of time and ensure all projects are completed within the agreed timeline.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Our clients are at the heart of everything we do. We listen, understand, and deliver beyond expectations.",
    },
    {
      icon: Award,
      title: "Innovation",
      description:
        "We embrace modern construction techniques and technologies to provide innovative solutions.",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/Green and White Modern Simple Minimalist Geometric Abstract Shape Real Estate Presentation[1].png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
            Building Trust,
            <br />
            <span className="text-white-400">Shaping The Future</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-gray-200">
            With decades of experience in the construction industry, we craft
            spaces that inspire confidence and excellence.
          </p>
        </div>
      </section>



      {/* Leadership Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#e0f2fe] via-white to-[#e0f2fe] overflow-hidden">
        {/* Optional floating blob */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 ">
              Leadership <span className="text-[#2a5298]">Excellence</span>
            </h2>
            <p className="text-gray-700 mt-3">
              Meet the visionary driving our company’s success
            </p>
          </div>

          <div className="grid grid-cols-1 text-justify lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="animate-fade-in-left">
              {/* 👇 Yahan Experienced Leadership hata diya aur Name + Designation dala */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Mr. Ashish Londhe
              </h3>
              <p className="text-[#234683] font-semibold mb-6">
                Founder & Managing Director
              </p>

              <p className="text-gray-700 text-lg mb-4">
                Mr. Ashish Londhe (B.E, M.B.A) is the sole proprietor of the company.
                He has served as JOINT SECRETARY in CREDAI (Confederation of Real Estate
                Developers Association of India) from 2015 - 2019. Presently is serving
                as VICE PRESIDENT for 2019-2023 in CREDAI.
              </p>
              <p className="text-gray-700 text-lg">
                CREDAI TREASURER 2023-2025, an association with 13,000+ members nationwide,
                25 state chapters, 180 city chapters. Nagpur has nearly 350 members. Known
                for construction quality & transparency.
              </p>
              <div className="mb-6 space-y-1 mt-4"> {["Visionary Leader", "Strong Ethics", "Quality Focus",].map((point, index) => (<div key={index} className="flex items-center space-x-1"> <Check className="w-5 h-5 text-[red]" /> <span className="text-md text-[#011321] font-medium">{point}</span> </div>))} </div>
            </div>

            {/* Image */}
            <div className="flex flex-col items-center lg:items-end text-center lg:text-right animate-fade-in-right">
              <div className="relative group">
                <img
                  src="/images/vikashsir.jpeg"
                  alt="Leadership"
                  className="w-full max-w-md rounded-2xl object-cover shadow-xl transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl"
                />
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#234683] to-[#011321] text-white px-4 py-2 rounded-xl shadow-lg text-sm font-semibold">
                  20+ Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-snug -mt-[30px]">
              Our{" "}
              <span className="bg-gradient-to-r from-[#011321] to-[#011321] bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-gray-700 text-lg mb-4 italic border-l-4 border-[#3357a7] pl-4 ">
              "A house is made of walls and beams; a home is built with love and dreams."
            </p>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed text-justify">
              Madhuprabha Construction was started in the year 2005. The business start was modest
              with the regular clients in Nagpur. Over the last 20 years, we have grown into a leading
              company in the construction industry. Our projects extend not only in Nagpur but also across
              Central India.
            </p>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed text-justify">
              The journey of hard work, dedication, and trust of our clients has brought us this long way.
              We specialize in commercial and housing societies, with higher standards of quality that remain
              affordable to everyone. Known for our perfect carvings and core commitment, we approach every
              project with futuristic planning and timely delivery.
            </p>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed text-justify">
              We are committed to designing housing societies and commercial complexes for a progressive
              India while adhering to traditional values that make places better to live in—filled with
              positivity and peace. Quality and transparency remain our main criteria.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed text-justify">
              Success is a state of mind. Anything you want, you can have! You just need to have dreams;
              believe that you deserve them, and work hard to achieve them. This philosophy has been the
              motivational factor behind our company’s growth.
            </p>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 relative">
            <img
              src="/images/family-portrait-sofa.jpg"
              alt="Construction Excellence"
              className="w-full rounded-2xl shadow-lg hover:scale-105 transition duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=200&fit=crop&crop=center"
              alt="Modern Architecture"
              className="w-full rounded-2xl shadow-lg hover:scale-105 transition duration-500 mt-6"
            />
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop&crop=center"
              alt="Quality Work"
              className="w-full rounded-2xl shadow-lg hover:scale-105 transition duration-500"
            />
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop&crop=center"
              alt="Happy Clients"
              className="w-full rounded-2xl shadow-lg hover:scale-105 transition duration-500 mt-6"
            />

            {/* Floating Badge */}
            <div className="absolute -top-2 -right-2 sm:-top-6 sm:-right-6
                bg-gradient-to-r from-[#011321] to-blue-500 text-white
                p-1 sm:p-6 rounded-md sm:rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-base sm:text-3xl font-extrabold">20+</div>
                <div className="text-[8px] sm:text-sm opacity-90">Years Experience</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>
        {`
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
`}
      </style>




      {/* Mission & Vision Section */}
      <section className="py-24 bg-gradient-to-r from-[#1e3c72] to-[#2a5298] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Text Cards */}
          <div className="space-y-10">
            {/* Vision */}
            <div className="p-8 bg-white/10 rounded-3xl shadow-xl hover:bg-white/20 transition duration-300">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Eye className="w-8 h-8 text-yellow-400" /> Vision
              </h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                To be recognized as one of the top construction organizations, setting benchmarks in quality, trust, and innovation.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 bg-white/10 rounded-3xl shadow-xl hover:bg-white/20 transition duration-300">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Target className="w-8 h-8 text-yellow-400" /> Mission
              </h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                To maintain trust and loyalty with our clients by delivering high-quality services at affordable prices through our qualified team.
              </p>
            </div>
          </div>

          {/* Image Row - single line like Journey section */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <img
              src="/images/d3c4736c-73ad-4eca-81ae-2b81035df543.jpg"
              alt="Mission Vision Illustration"
              className="w-80 sm:w-96 md:w-96 lg:w-[400px] rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />

          </div>
        </div>
      </section>







      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Our <span className="text-[#2a5298]">Values</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              These core values guide every decision we make and every project
              we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;