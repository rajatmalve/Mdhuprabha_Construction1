import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Home,
  Calendar,
  User,
  Award,
  CheckCircle,
  Clock,
  Container,
  ExternalLink,
} from "lucide-react";
import { projectsData, currentProjectsData } from "../mockData";
import Footer from "../components/Footer";
import ImageLightbox from "../components/ImageLightbox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const zoomInUp = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lightboxOpen]);

  const allProjects = [...projectsData, ...currentProjectsData];
  const project = allProjects.find((p) => p.id === parseInt(id));
  const isCurrentProject = project.status === "Ongoing";
  const getProjectBrochure = (projectTitle) => {
    const brochureMap = {
      "PRAJAKTA LA-MAISON": "/images/MP LA Maison_Brochure.pdf",
      "PRAJAKTA PARK": "/images/Prajakta-Park-E-Brochure-New-1_compressed (1)(final).pdf",
      "PRAJAKTA CLASSIC": "/images/Prajakta-Park-E-Brochure-New-1_compressed.pdf",
      "Prajakta Green Serenity": "/images/Green Serenity E-brochure..pdf",
      "keshav enclave nandanwan": "/images/Keshav-Enclave-Brochure.pdf",
      "Prajakta cross Winds": "/images/Prajakta-Crosswinds-Brochure.pdf",
      "Prajakta Prabhakamal": "/images/Prajakta-Prabhakamal-Brochure.pdf",
      "Prajakta Orchid": "/images/Prajakta-Orchid-Brochure.pdf",
    };

    return brochureMap[projectTitle] || "/images/Prajakta-Park-E-Brochure-New-1_compressed.pdf";
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.gallery.length) % project.gallery.length
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[55vh] md:h-[70vh] lg:h-screen overflow-hidden text-white mt-16">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-fill"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <button
          onClick={() => {
            if (window.history.length > 2) {
              navigate(-1); 
            } else {
              navigate("/projects"); 
            }
          }}
          className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 
               flex items-center space-x-2 text-white/80 hover:text-white 
               transition-colors duration-300 bg-black/40 px-3 py-2 
               rounded-full backdrop-blur-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="hidden sm:inline">Back</span>
        </button>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-start justify-end h-full text-left px-4 sm:px-6 lg:px-12 pb-8 sm:pb-12 lg:pb-16">
          <div
            className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-4 sm:mb-6 ${isCurrentProject
              ? "bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-400/30"
              : "bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/30"
              }`}
          >
            {isCurrentProject ? (
              <Clock className="w-4 h-4 text-emerald-400" />
            ) : (
              <CheckCircle className="w-4 h-4 text-amber-400" />
            )}
            <span
              className={`text-sm font-semibold ${isCurrentProject ? "text-emerald-300" : "text-amber-300"
                }`}
            >
              {project.status}
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight max-w-3xl">
            <span
              className={`bg-gradient-to-r ${isCurrentProject
                ? "from-emerald-400 to-green-500"
                : "from-amber-400 to-yellow-500"
                } bg-clip-text text-transparent`}
            >
              {project.title}
            </span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl">
            {project.description}
          </p>
        </div>
      </section>
      {/* Project Overview */}
      <section className="relative py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Project Overview Heading */}
          <motion.h2
            className="text-5xl sm:text-6xl font-extrabold text-[#011321] mb-12 italic"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Project Overview
          </motion.h2>
          <motion.div
            className="flex flex-col items-center space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.5 } },
            }}
          >
            {project.fullDescription.split("\n").map((line, index) => (
              <motion.p
                key={index}
                className="text-lg sm:text-xl text-slate-900 font-semibold text-center max-w-2xl"
                variants={Container}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: false, amount: 0 }}
              >
                {line}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>
      <div
        className="relative bg-fixed bg-center bg-cover py-16 sm:py-20 lg:py-24"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
            <motion.div
              className="bg-white/20 backdrop-blur-md rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-xl w-full max-w-full overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={zoomInUp}
            >
              <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-slate-200 mb-4 sm:mb-6 text-center">
                Key Features
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 sm:p-4 rounded-2xl transition-colors duration-300"
                  >
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0 text-white" />
                    <span className="text-slate-200 text-sm sm:text-base leading-relaxed break-words hyphens-auto">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={zoomInUp}
            >
              <h3 className="text-2xl font-bold text-slate-200 mb-6 text-center">Project Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-slate-200 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-200">Location</div>
                    <div className="text-slate-200">{project.location}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Home className="w-6 h-6 text-slate-200 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-200">Type</div>
                    <div className="text-slate-200">{project.type}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Calendar className="w-6 h-6 text-slate-200 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-200">
                      {isCurrentProject ? "Ongoing" : "Completed"}
                    </div>
                    <div className="text-slate-200">
                      {isCurrentProject ? project.expectedCompletion : project.completionDate}
                    </div>
                  </div>
                </div>
                {project.architecture && (
                  <div className="flex items-start space-x-4">
                    <Award className="w-6 h-6 text-slate-200 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-200">Architecture</div>
                      <div className="text-slate-200">{project.architecture}</div>
                    </div>
                  </div>
                )}
                {project.vastuConsultant && (
                  <div className="flex items-start space-x-4">
                    <User className="w-6 h-6 text-slate-200 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-200">Vastu Consultant</div>
                      <div className="text-slate-200">{project.vastuConsultant}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <a
                  href={getProjectBrochure(project.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full py-4 px-6 font-bold rounded-2xl 
              overflow-hidden transition-all duration-500 transform hover:scale-105 
              flex items-center justify-center space-x-2"
                >
                  <div className="absolute inset-0 bg-[#011321] group-hover:bg-[#022d57] transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
              skew-x-12 -translate-x-full group-hover:translate-x-full 
              transition-transform duration-1000"></div>
                  <div className="absolute -inset-1 bg-[#011321] rounded-2xl blur opacity-30 
              group-hover:opacity-60 transition-opacity duration-500"></div>
                  <span className="relative z-10 text-white">Download E-Brochure</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Project Gallery */}
      <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200/50">
        {/* Centered Heading */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Project Gallery
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="rounded-2xl"
        >
          {project.gallery.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="group relative w-full h-64 md:h-56 lg:h-64 overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Swiper Button Styling */}

      </div>

      {/* Image Lightbox */}
      <ImageLightbox
        images={project.gallery}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
