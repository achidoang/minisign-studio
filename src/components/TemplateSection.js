import React, { useState } from 'react';
import { ChevronDown, X, Star, Phone, MapPin, Clock, CheckCircle, MessageCircle, ExternalLink } from 'lucide-react';
import siteData from '../data/siteData';

const TemplateSection = () => {
  const openTemplateLink = () => {
    window.open(siteData.company.templateDriveLink, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-white mb-8">Template Design</h2>
        <p className="text-xl text-white mb-8 opacity-90">
          Lihat berbagai template design yang tersedia untuk papan ucapan mini Anda
        </p>
        <button 
          onClick={openTemplateLink}
          className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg inline-flex items-center"
        >
          <ExternalLink className="w-5 h-5 mr-2" />
          Lihat Template Design
        </button>
      </div>
    </section>
  );
};

export default TemplateSection;