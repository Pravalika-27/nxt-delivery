import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <img src="/WhatsApp Image 2025-06-02 at 11.26.23 PM.jpeg" alt="NXT Delivery Logo" className="h-10 w-10 mr-2" />
          <span className="text-xl font-semibold text-secondary">NXT Delivery</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-800 hover:text-primary transition-colors">Services</a>
          <a href="#book" className="text-gray-800 hover:text-primary transition-colors">Book Now</a>
          <a href="#pricing" className="text-gray-800 hover:text-primary transition-colors">Pricing</a>
          <a href="#coverage" className="text-gray-800 hover:text-primary transition-colors">Coverage</a>
          <a href="#track" className="text-gray-800 hover:text-primary transition-colors">Track</a>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <a 
              href="#services" 
              className="text-gray-800 hover:text-primary transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#book" 
              className="text-gray-800 hover:text-primary transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </a>
            <a 
              href="#pricing" 
              className="text-gray-800 hover:text-primary transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#coverage" 
              className="text-gray-800 hover:text-primary transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Coverage
            </a>
            <a 
              href="#track" 
              className="text-gray-800 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Track
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};