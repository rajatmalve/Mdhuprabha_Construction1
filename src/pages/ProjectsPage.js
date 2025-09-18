import React, { useState } from 'react';
import { MapPin, Home, Calendar, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../mockData';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [showAll, setShowAll] = useState(false);

  const projectTypes = ['all'];

  const filteredProjects = projectsData.filter(project =>
    filter === 'all' || project.type.toLowerCase().includes(filter.toLowerCase())
  );

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.completionDate) - new Date(a.completionDate);
    }
    if (sortBy === 'area') {
      return parseInt(b.area) - parseInt(a.area);
    }
    return 0;
  });

  const visibleProjects = showAll ? sortedProjects : sortedProjects.slice(0, 12);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: "url(/images/architects-collaborating-blueprints-construction-site.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Decorative blobs */}
        <div className="absolute inset-0 opacity-20 z-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gray-200 rounded-full blur-2xl"></div>
        </div>

        {/* Centered Content */}
        <div className="relative z-10 max-w-5xl px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="bg-white bg-clip-text text-transparent drop-shadow-lg">
              Projects
            </span>

            {/* <span className="text-white">Projects</span> */}
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successfully completed residential construction projects that showcase our commitment to quality, innovation, and customer satisfaction.
          </p>
        </div>
      </section>


      {/* 
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="bg-white bg-clip-text text-transparent drop-shadow-lg">
              Completed
            </span>
            <br />
            <span className="text-white">Projects</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successfully completed residential construction projects that showcase our commitment to quality, innovation, and customer satisfaction.
          </p>
        </div>
      </section> */}

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'grid' ? (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {visibleProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group bg-white border border-['#011321'] rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                  >
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-fill group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-1 bg-[#011321] text-white text-[10px] font-semibold rounded-full shadow">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#011321] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-gray-600 text-xs mb-2">
                        <MapPin className="w-3 h-3 mr-1 text-[#011321] flex-shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <p className="text-gray-700 text-xs leading-snug mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <Link
                        to={`/project/${project.id}`}
                        className="w-full inline-block text-center py-2 px-3 bg-[#011321] text-white text-sm font-semibold rounded-lg hover:bg-['#011321'] transform hover:scale-105 transition-all duration-300"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* ✅ Read More / Show Less Button (Left side) */}
              {sortedProjects.length > 12 && (
                <div className="text-left mt-10">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="px-6 py-3 bg-[#000] text-white font-semibold rounded-lg hover:bg-['#011321'] transform hover:scale-105 transition-all duration-300"
                  >
                    {showAll ? "Show Less" : "View More"}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {visibleProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white border border-['#011321']] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image */}
                    <div className="lg:w-1/3 h-64 lg:h-auto relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#011321] text-white text-xs font-semibold rounded-full shadow-lg">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-2/3 p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#011321] transition-colors duration-300">
                          {project.title}
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center text-gray-600 text-sm">
                            <MapPin className="w-4 h-4 mr-2 text-[#011321]" />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-sm">
                            <Home className="w-4 h-4 mr-2 text-[#011321]" />
                            <span>{project.area}</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-sm">
                            <Calendar className="w-4 h-4 mr-2 text-[#011321]" />
                            <span>{project.completionDate}</span>
                          </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                          {project.description}
                        </p>

                        <div className="inline-flex px-3 py-1 bg-['#011321'] text-red-800 text-sm font-medium rounded-full">
                          {project.type}
                        </div>
                      </div>

                      <div className="flex justify-end mt-6">
                        <Link
                          to={`/project/${project.id}`}
                          className="px-6 py-3 bg-[#011321] text-white font-semibold rounded-xl hover:bg-['#011321'] transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2"
                        >
                          <span>View Details</span>
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* ✅ Read More / Show Less Button (Left side) */}
              {sortedProjects.length > 12 && (
                <div className="text-left mt-10">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="px-6 py-3 bg-[#011321] text-white font-semibold rounded-lg hover:bg-['#011321'] "
                  >
                    {showAll ? "Show Less" : "View More"}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
