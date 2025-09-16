import React, { useState } from 'react';
import { ChevronDown, X, Star, Phone, MapPin, Clock, CheckCircle, MessageCircle, ExternalLink } from 'lucide-react';
import siteData from '../data/siteData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-purple-600">
            {siteData.company.name}
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 transition">Home</button>
            <button onClick={() => scrollToSection('product')} className="text-gray-700 hover:text-purple-600 transition">Produk</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-purple-600 transition">Galeri</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-purple-600 transition">Testimoni</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition">Kontak</button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center">
              <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 mt-1 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 mt-1 transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <button onClick={() => scrollToSection('home')} className="block py-2 text-gray-700 hover:text-purple-600">Home</button>
            <button onClick={() => scrollToSection('product')} className="block py-2 text-gray-700 hover:text-purple-600">Produk</button>
            <button onClick={() => scrollToSection('gallery')} className="block py-2 text-gray-700 hover:text-purple-600">Galeri</button>
            <button onClick={() => scrollToSection('testimonials')} className="block py-2 text-gray-700 hover:text-purple-600">Testimoni</button>
            <button onClick={() => scrollToSection('contact')} className="block py-2 text-gray-700 hover:text-purple-600">Kontak</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;