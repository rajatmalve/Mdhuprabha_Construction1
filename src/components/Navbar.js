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
    // { name: 'Career', path: '/career', hasDropdown: true },
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
          ? (scrolled ? 'bg-white shadow-md' : 'bg-transparent')
          : 'bg-white shadow-md'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center focus:outline-none focus:ring-0">
            <div className="w-50 h-10 rounded-lg overflow-hidden">
              <img
                src="/images/Madhuprabhalogo.jpg"
                alt="Madhuprabha Construction Logo"
                className="w-full h-full object-fill"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.name} 
                    className="relative career-dropdown"
                  >
                    <div 
                      onClick={() => setCareerDropdownOpen(!careerDropdownOpen)}
                      className={`relative px-2 py-1 flex items-center space-x-2 font-medium transition cursor-pointer focus:outline-none focus:ring-0
                        ${careerDropdownItems.some(dropdownItem => isActive(dropdownItem.path))
                          ? 'text-red-600 font-semibold'
                          : location.pathname === '/'
                          ? (scrolled ? 'text-red-500 hover:text-red-600' : 'text-white hover:text-red-200')
                          : 'text-red-500 hover:text-red-600'
                        }
                      `}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform ${careerDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>

                    {careerDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {careerDropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            onClick={() => setCareerDropdownOpen(false)}
                            className={`flex items-center space-x-3 px-4 py-2 text-sm transition focus:outline-none focus:ring-0
                              ${isActive(dropdownItem.path)
                                ? 'bg-red-50 text-red-600 font-semibold'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'}`}
                          >
                            <span>{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-2 py-1 font-medium transition focus:outline-none focus:ring-0
                    ${isActive(item.path)
                      ? 'text-red-600 font-semibold'
                      : location.pathname === '/'
                      ? (scrolled ? 'text-red-500 hover:text-red-600' : 'text-white hover:text-red-200')
                      : 'text-red-500 hover:text-red-600'
                    }
                  `}
                >
                  <span>{item.name}</span>
                  {isActive(item.path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-600 rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-xl transition-colors focus:outline-none focus:ring-0
                ${location.pathname === '/' 
                  ? (scrolled ? 'bg-slate-800 text-red-500' : 'bg-white/10 backdrop-blur-sm text-white border border-white/20')
                  : 'bg-slate-800 text-red-500'
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
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.name}>
                    <div
                      onClick={() => setCareerDropdownOpen(!careerDropdownOpen)}
                      className="flex-1 px-6 py-4 mx-3 rounded-2xl flex items-center justify-between transition cursor-pointer text-red-500 hover:bg-red-100 hover:text-red-600 focus:outline-none focus:ring-0"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${careerDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>

                    {careerDropdownOpen && (
                      <div className="ml-6 mr-3 mt-2 space-y-2">
                        {careerDropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            onClick={() => {
                              setIsOpen(false);
                              setCareerDropdownOpen(false);
                            }}
                            className={`block px-4 py-3 rounded-xl transition focus:outline-none focus:ring-0
                              ${isActive(dropdownItem.path)
                                ? 'bg-red-600 text-white font-semibold'
                                : 'text-red-500 hover:bg-red-100 hover:text-red-600'}`}
                          >
                            <span className="font-medium">{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 mx-3 rounded-2xl transition focus:outline-none focus:ring-0
                    ${isActive(item.path)
                      ? 'bg-red-600 text-white font-semibold'
                      : 'text-red-500 hover:bg-red-100 hover:text-red-600'}
                  `}
                >
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}

            <div className="px-2 pt-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full py-2 bg-red-600 text-white text-center font-bold rounded-[30px] focus:outline-none focus:ring-0"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
