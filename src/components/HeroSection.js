
import React from 'react';
import siteData from '../data/siteData';

export default function HeroSection() {
  const openGoogleForm = () => window.open(siteData.company.googleFormLink, '_blank');

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-bounce">
          {siteData.company.name}
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">{siteData.company.tagline}</p>
        <button
          onClick={openGoogleForm}
          className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Pesan Sekarang! 🎉
        </button>
      </div>
    </section>
  );
}
