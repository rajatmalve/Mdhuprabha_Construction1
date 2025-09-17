import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Home, ExternalLink } from "lucide-react";

const currentProjectsData = [
  {
    id: 1,
    title: "PRAJAKTA LA-MAISON",
    image: "/images/secondProject.jpg",
    status: "Ongoing",
    location: "Pandey layout",
    area: "2050 sq.ft - 2600 sq.ft",
    type: "3 / 4 BHK - 7 floor",
    description:
      "Modern 3 - 4 BHK apartments with premium amenities, landscaped gardens, and easy access to city hubs.",
    brouchure: "Prajakta La Maison_Brochure(4) (2).pdf",
  },
  {
    id: 2,
    title: "PRAJAKTA PARK",
    image: "/images/HDPHOTO1.jpg",
    status: "Ongoing",
    location: "Abhyankar Nagar Nagpur, Maharashtra",
    area: "1800 sq.ft",
    type: "3 BHKD - 5 floor",
    description:
      "Affordable yet stylish flats with contemporary architecture and spacious interiors.",
    brouchure: "Prajakta-Park-E-Brochure-New-1_compressed (1)(final).pdf",
  },
  {
    id: 3,
    title: "PRAJAKTA CLASSIC",
    image: "/images/park_img_page-0001.jpg",
    status: "Complete",
    location: "Abhyankar Nagar,NAGPUR",
    area: "2800 sq.ft",
    type: "3 BHK",
    description:
      "Luxurious 3 BHK apartments with eco-friendly design, solar power, and smart home features.",
    brouchure: "Prajakta-Park-E-Brochure-New-1_compressed.pdf",
  },
];

const FeaturedProjects = () => {
  return (

    <section className="py-16 bg-[#01132129] relative overflow-hidden">
      {/* Subtle Red Background Glow */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-10 w-60 h-60 bg-[#011321] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-16 w-48 h-48 bg-[#011321] rounded-full blur-2xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-[#011321]">
              Our Projects
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore our ongoing residential construction projects that reflect
            our dedication to quality, innovation, and detail.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-center">
          {currentProjectsData.map((project) => (
            <div
              key={project.id}

              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-[#011321]"

            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-100/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-3 right-3">
                  <div className="px-2 py-1 bg-[#011321] text-white text-xs font-semibold rounded-full shadow-md border border-[#011321]">
                    {project.status}
                  </div>
                </div>
              </div>

              {/* Content */}

              <div className="p-4">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#011321] transition-colors duration-500 line-clamp-2">

                  {project.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-slate-600 text-xs">
                    <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center mr-2">
                      <MapPin className="w-3 h-3 text-[#011321]" />
                    </div>
                    <span className="line-clamp-1">{project.location}</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-xs">
                    <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center mr-2">
                      <Home className="w-3 h-3 text-[#011321]" />
                    </div>
                    <span className="line-clamp-1">
                      {project.area} • {project.type}
                    </span>
                  </div>
                </div>

                <p className="text-slate-700 text-xs leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-col gap-2">
                  <Link
                    to={`/project/${project.id}`}
                    className="group py-2 px-4 text-xs font-semibold rounded-xl border border-[#011321] bg-white hover:bg-red-50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center space-x-1 text-[#011321] group-hover:text-[#011321]">
                      <span>View</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>

                  <a
                    href={`/images/${project.brouchure}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group py-2 px-4 text-xs font-semibold rounded-xl border border-[#011321] bg-white hover:bg-red-50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center space-x-1 text-[#011321] group-hover:text-[#011321]">
                      <span>Brochure</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Link
            to="/projects"
            className="group inline-flex items-center space-x-2 px-8 py-3 font-semibold text-sm rounded-full border border-[#011321] bg-[#011321] hover:bg-[#011321] transition-all duration-300"
          >
            <span className="text-white group-hover:text-white">
              View All Projects
            </span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
