import React, { useState, useEffect } from 'react';
import siteData from '../data/siteData';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // pantau scroll untuk ubah background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* === Logo (gambar + fallback text) === */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            {siteData.company.logoUrl ? (
              <img
                src={siteData.company.logoUrl}
                alt={siteData.company.name}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <span className="text-2xl font-bold text-purple-600">
                {siteData.company.name}
              </span>
            )}
          </div>

          {/* === Desktop menu === */}
          <div className="hidden md:flex space-x-8">
            {['home','product','gallery','testimonials','contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`transition ${
                  scrolled
                    ? 'text-gray-700 hover:text-purple-600'
                    : 'text-white hover:text-purple-200'
                }`}
              >
                {id === 'home' ? 'Home'
                  : id === 'product' ? 'Produk'
                  : id === 'gallery' ? 'Galeri'
                  : id === 'testimonials' ? 'Testimoni'
                  : 'Kontak'}
              </button>
            ))}
          </div>

          {/* === Mobile toggle === */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <div className="w-6 h-6 flex flex-col justify-center">
              <span
                className={`block w-6 h-0.5 bg-current transition-transform ${
                  isOpen ? 'rotate-45 translate-y-0.5' : ''
                } ${scrolled ? 'text-gray-700' : 'text-white'}`}
              ></span>
              <span
                className={`block w-6 h-0.5 mt-1 bg-current transition-opacity ${
                  isOpen ? 'opacity-0' : ''
                } ${scrolled ? 'text-gray-700' : 'text-white'}`}
              ></span>
              <span
                className={`block w-6 h-0.5 mt-1 bg-current transition-transform ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : ''
                } ${scrolled ? 'text-gray-700' : 'text-white'}`}
              ></span>
            </div>
          </button>
        </div>

        {/* === Mobile menu === */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {['home','product','gallery','testimonials','contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`block py-2 w-full text-left transition ${
                  scrolled
                    ? 'text-gray-700 hover:text-purple-600'
                    : 'text-white hover:text-purple-200'
                }`}
              >
                {id === 'home' ? 'Home'
                  : id === 'product' ? 'Produk'
                  : id === 'gallery' ? 'Galeri'
                  : id === 'testimonials' ? 'Testimoni'
                  : 'Kontak'}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
