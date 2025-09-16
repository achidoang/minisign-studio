import React, { useState } from 'react';
import { ChevronDown, X, Star, Phone, MapPin, Clock, CheckCircle, MessageCircle, ExternalLink } from 'lucide-react';
import siteData from '../data/siteData';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg font-semibold mb-2">{siteData.company.name}</p>
        <p className="text-gray-400">{siteData.company.tagline}</p>
        <p className="text-gray-500 mt-4">© 2025 MiniSign Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;