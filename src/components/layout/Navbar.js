import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  // Smooth scroll function
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Close mobile menu after navigation
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl border-b border-gray-200/20 dark:border-gray-700/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
            <a 
              href="#hero" 
              onClick={(e) => handleSmoothScroll(e, '#hero')}
              className="text-2xl font-bold text-primary hover:text-primary-700 transition-all duration-300"
            >
              TechSolutions Pro
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-white px-4 py-2 text-sm font-semibold transition-all duration-300 relative group rounded-lg hover:bg-primary"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-primary rounded-full transition-all duration-300 group-hover:w-3/4"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-500 ease-in-out ${
        isMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-t border-gray-200/20 dark:border-gray-700/20">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="group text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-primary block px-4 py-3 text-base font-semibold transition-all duration-300 rounded-lg transform hover:translate-x-2"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;