import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [careerDropdownOpen, setCareerDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (careerDropdownOpen && !event.target.closest('.career-dropdown')) {
        setCareerDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [careerDropdownOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Become Partner', path: '/becomePartner' },
    { name: 'Awards', path: '/awards' },
    { name: 'CSR Activity', path: '/csrActivity' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  const careerDropdownItems = [
    { name: 'Career', path: '/career' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${location.pathname === '/' 
          ? (scrolled ? 'bg-[#011321] shadow-md' : 'bg-transparent')
          : 'bg-[#011321] shadow-md'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center focus:outline-none focus:ring-0">
            <div className="h-32 w-auto flex items-center">
              <img
                src="/images/about (4).png"
                alt="Madhuprabha Construction Logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-2 py-1 font-medium transition focus:outline-none focus:ring-0
                  ${isActive(item.path)
                    ? 'text-white font-semibold'
                    : location.pathname === '/'
                    ? (scrolled ? 'text-white hover:text-[#011321]' : 'text-white hover:text-white')
                    : 'text-white hover:text-white'
                  }
                `}
              >
                <span>{item.name}</span>
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-white rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-xl transition-colors focus:outline-none focus:ring-0
                ${location.pathname === '/'
                  ? (scrolled ? 'bg-slate-800 text-white' : 'bg-white/10 backdrop-blur-sm text-white border border-white/20')
                  : 'bg-slate-800 text-white'
                }
              `}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-3xl shadow">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-4 mx-3 rounded-2xl transition focus:outline-none focus:ring-0
                  ${isActive(item.path)
                    ? 'bg-[#011321] text-white font-semibold shadow-md'
                    : 'text-[#011321] hover:bg-gray-100 hover:text-[#011321]'
                  }
                `}
              >
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
