import React from 'react';
import { Newspaper, Calendar, ExternalLink } from 'lucide-react';
import Footer from '../components/Footer';

const PressPage = () => {
  const pressReleases = [
    {
      id: 1,
      title: "Madhuprabha Construction Wins Excellence Award 2024",
      date: "2024-01-15",
      summary: "Company recognized for outstanding project delivery and quality construction practices.",
      image: "/images/Awards image.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "New Residential Project Launch in Nagpur",
      date: "2024-01-10",
      summary: "Prajakta Green Serenity project officially launched with modern amenities and eco-friendly design.",
      image: "/images/prajkta green serenity1.jpeg",
      link: "#"
    },
    {
      id: 3,
      title: "Partnership with Leading Material Suppliers",
      date: "2024-01-05",
      summary: "Strategic partnerships established to ensure quality materials and timely project completion.",
      image: "/images/project.jpg",
      link: "#"
    },
    {
      id: 4,
      title: "CSR Initiative: Building Schools in Rural Areas",
      date: "2023-12-20",
      summary: "Company's commitment to social responsibility through educational infrastructure development.",
      image: "/images/career 1.jpg",
      link: "#"
    },
    {
      id: 5,
      title: "Technology Integration in Construction",
      date: "2023-12-15",
      summary: "Adopting modern construction technologies for improved efficiency and quality.",
      image: "/images/projectdone.jpg",
      link: "#"
    },
    {
      id: 6,
      title: "Award for Best Construction Company 2023",
      date: "2023-12-10",
      summary: "Recognition for consistent quality and customer satisfaction in construction industry.",
      image: "/images/Awards image 3.jpg",
      link: "#"
    }
  ];

  const mediaCoverage = [
    {
      source: "Times of India",
      title: "Construction Industry Growth in Maharashtra",
      date: "2024-01-12",
      link: "#"
    },
    {
      source: "Economic Times",
      title: "Real Estate Development in Nagpur",
      date: "2024-01-08",
      link: "#"
    },
    {
      source: "Construction Today",
      title: "Innovative Construction Techniques",
      date: "2024-01-03",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Press Releases Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Press{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                Releases
              </span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
              Stay updated with our latest news, achievements, and company announcements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pressReleases.map((release) => (
              <div
                key={release.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={release.image}
                    alt={release.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-red-600">
                      <Newspaper className="w-4 h-4" />
                      <span className="text-xs font-semibold">Press Release</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(release.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {release.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {release.summary}
                  </p>
                  
                  <a
                    href={release.link}
                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm transition-colors"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Media{' '}
              <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                Coverage
              </span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
              Our work and achievements featured in leading publications and media outlets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {mediaCoverage.map((coverage, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 p-6 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-sm font-semibold text-red-600">
                    {coverage.source}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(coverage.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {coverage.title}
                </h3>
                
                <a
                  href={coverage.link}
                  className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm transition-colors"
                >
                  Read Article
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PressPage;
