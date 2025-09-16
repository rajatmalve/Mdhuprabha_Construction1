import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Building, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowUp, Sparkles, MessageCircle, Award, Briefcase } from 'lucide-react';

import { contactData } from '../mockData';
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  // Visitor counter using localStorage
  useEffect(() => {
    let count = localStorage.getItem("visitorCount");
    if (!count) {
      count = 1;
    } else {
      count = parseInt(count) + 1;
    }
    localStorage.setItem("visitorCount", count);
    setVisitorCount(count);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },

    { name: 'Projects', path: '/projects' },
    { name: 'Become Partner', path: '/becomePartner' },
    { name: 'Awards', path: '/awards', icon: Award },
    { name: 'CSR Activity', path: '/csrActivity' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Career', path: '/career', icon: Briefcase }





  ];

  const services = [
    'Residential Construction',
    'Villa Development',
    'Apartment Projects',
    'Home Renovation',
    'Interior Design',
    'Project Consultation'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-white-500' },
    { icon: Instagram, href: '#', color: 'hover:text-white-500' },
    { icon: Twitter, href: '#', color: 'hover:text-white-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-white-500' }
  ];

  return (
    <footer className="relative overflow-hidden bg-gray-900 text-gray-300"
      style={{
        backgroundImage: "url('/images/Footer-image-bg.png')",
        backgroundSize: "fill",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}

    >
      <div className="absolute inset-0 bg-gray/50"></div>
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-8">
            <Link to="/" className="group flex items-center space-x-4">
              {/* Updated Logo */}
              <div className="relative h-32 w-auto rounded-lg overflow-hidden transform group-hover:scale-105 transition-all duration-500 shadow-md">
                <img
                  src="/images/about (4).png"
                  alt="Madhuprabha Construction Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-white-400 leading-relaxed">
              Building dreams into reality with 20+ years of experience in premium residential construction.
              Quality craftsmanship and customer satisfaction is our priority.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`group relative w-12 h-12 bg-white-800 border border-gray-700 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-white-500 hover:text-white-500`}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          {/* Quick Links */}
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center text-white-400 hover:text-white-500 transition-all duration-300"
                  >
                    {/* SVG Arrow */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-2 text-white-500 group-hover:translate-x-1 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                    </svg>
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>



          {/* Services */}
          {/* <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Our Services</h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="group flex items-center text-white-400 cursor-pointer transition-all duration-300">
                    <span className="transform transition-transform duration-300">{service}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white flex items-center space-x-2">
              <span>Contact Info</span>
              {/* <Sparkles className="w-4 h-4 text-white-500 animate-pulse" /> */}
            </h4>

            <div className="space-y-6">
              <div className="group flex items-start space-x-4 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-white-500 mt-1 flex-shrink-0" />
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactData.address)}`} target="_blank" rel="noopener noreferrer" className="text-white-300">{contactData.address}</a>
              </div>

              <div className="group flex items-center space-x-4 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
                <Phone className="w-6 h-6 text-white-500 flex-shrink-0" />
                <a href={`tel:${contactData.phone1}`} className="text-white-300">{contactData.phone1}</a>
              </div>

              <div className="group flex items-start space-x-4 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
                <Mail className="w-6 h-6 text-white-500 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <a
                    href={`mailto:${contactData.email}`}
                    className="block text-white-300 break-words"
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full mt-12 border-t border-gray-700 pt-6 
                flex flex-col lg:flex-row lg:justify-between lg:items-center 
                gap-4 text-gray-800 text-sm 
                bg-yellow-400 px-4 py-4">

        {/* Left: Copyright */}
        <p className="font-bold text-base sm:text-lg text-gray-800 text-center lg:text-left">
          © 2025 Madhuprabha Construction. All rights reserved.
        </p>

        {/* Middle: Visitor Counter */}
        <div className="flex items-center justify-center lg:justify-start space-x-2">
          <span className="text-gray-800 font-bold text-base sm:text-lg">Visitors:</span>
          <div className="flex space-x-1">
            {visitorCount
              .toString()
              .padStart(6, "0")
              .split("")
              .map((digit, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-white font-mono 
                       text-base sm:text-lg md:text-xl 
                       px-2 py-1 rounded-md shadow-inner border border-gray-700"
                >
                  {digit}
                </span>
              ))}
          </div>
        </div>

        {/* Right: Developer Credit */}
        <div className="text-center lg:text-right">
          <a
            href="https://www.rsinfotechsys.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer font-bold text-base sm:text-lg text-gray-800 text-center lg:text-left hover:text-blue-600 transition-colors"
          >
            Design & Developed by RIGHT SERVE INFOTECH SYSTEMS PVT. LTD.
          </a>
        </div>

      </div>


      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 group w-14 h-14 bg-gray-800 text-white-500 border border-white-500 rounded-full shadow-lg hover:bg-white-500 hover:text-white transform hover:scale-110 transition-all duration-500 flex items-center justify-center z-50"
      >
        <ArrowUp className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" />
      </button>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/9522901659?text=Hello"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-28 right-8 group w-14 h-14 bg-green-500 text-white border border-green-600 rounded-full shadow-lg 
             hover:bg-green-600 transform hover:scale-110 transition-all duration-500 flex items-center justify-center z-50 animate-spin-slow"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>

    </footer>
  );
};

export default Footer;
