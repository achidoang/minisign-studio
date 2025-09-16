import React, { useState } from 'react';
import { ChevronDown, X, Star, Phone, MapPin, Clock, CheckCircle, MessageCircle, ExternalLink } from 'lucide-react';
import siteData from '../data/siteData';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Hubungi Kami</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-green-400" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a href={`https://wa.me/${siteData.company.whatsappNumber}`} className="text-green-400 hover:underline">
                    {siteData.company.whatsappNumber}
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-4 text-blue-400" />
                <div>
                  <p className="font-semibold">Jam Operasional</p>
                  <p className="text-gray-300">Senin - Minggu: 09:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Rekening Pembayaran</h3>
            <div className="space-y-3">
              {siteData.paymentMethods.map((method, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-blue-400">{method.bank}</span>
                    <span className="text-sm text-gray-400">{method.name}</span>
                  </div>
                  <div className="font-mono text-lg">{method.account}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;