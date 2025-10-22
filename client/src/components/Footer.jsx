import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-heritage-gold-500">TN Heritage Explorer</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover the rich cultural heritage of Tamil Nadu through our comprehensive travel platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-400 hover:text-heritage-gold-500 transition-colors">Home</a></li>
              <li><a href="/explore" className="text-gray-400 hover:text-heritage-gold-500 transition-colors">Explore</a></li>
              <li><a href="/itinerary" className="text-gray-400 hover:text-heritage-gold-500 transition-colors">Plan Trip</a></li>
              <li><a href="/marketplace" className="text-gray-400 hover:text-heritage-gold-500 transition-colors">Marketplace</a></li>
            </ul>
          </div>

          {/* Tourism Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Tourism Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.tamilnadutourism.tn.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-heritage-gold-500 transition-colors">Tamil Nadu Tourism</a></li>
              <li><a href="https://www.incredibleindia.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-heritage-gold-500 transition-colors">Incredible India</a></li>
              <li><a href="https://asi.nic.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-heritage-gold-500 transition-colors">ASI</a></li>
              <li><a href="https://www.heritageconservation.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-heritage-gold-500 transition-colors">Heritage Conservation</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect With Us</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Email: info@tnheritage.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p className="text-gray-400">&copy; 2025 Yaalir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
