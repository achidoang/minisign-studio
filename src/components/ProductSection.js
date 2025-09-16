import React, { useState } from 'react';
import { ChevronDown, X, Star, Phone, MapPin, Clock, CheckCircle, MessageCircle, ExternalLink } from 'lucide-react';
import siteData from '../data/siteData';

const ProductSection = () => {
  const discountPercentage = Math.round(((siteData.product.normalPrice - siteData.product.discountPrice) / siteData.product.normalPrice) * 100);

  return (
    <section id="product" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Produk Kami</h2>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl">🎨</span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{siteData.product.name}</h3>
            
            <div className="mb-6">
              <span className="text-gray-500 line-through text-lg">
                Rp {siteData.product.normalPrice.toLocaleString('id-ID')}
              </span>
              <div className="text-3xl font-bold text-purple-600">
                Rp {siteData.product.discountPrice.toLocaleString('id-ID')}
              </div>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Diskon {discountPercentage}%!
              </span>
            </div>
            
            <ul className="text-left text-gray-600 mb-6 space-y-2">
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Bahan berkualitas tinggi</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Design custom sesuai keinginan</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Proses cepat 1-3 hari</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" /> Cocok untuk berbagai momen</li>
            </ul>
            
            <a 
              href={`https://wa.me/${siteData.company.whatsappNumber}?text=Halo, saya ingin pesan papan ucapan mini!`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-green-600 transition inline-flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;