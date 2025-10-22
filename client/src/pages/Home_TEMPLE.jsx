import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/explore?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Heritage Circuits - Curated Trails
  const heritageCircuits = [
    {
      title: 'Chola Trail',
      subtitle: 'Temple Architecture Marvel',
      description: 'Journey through the magnificent temples built by the Chola dynasty',
      icon: '🛕',
      gradient: 'from-tn-maroon-950 to-tn-maroon-700',
      count: '8 Sites',
    },
    {
      title: 'Pandya Legacy',
      subtitle: 'Southern Splendor',
      description: 'Discover the rich heritage of the Pandya kingdom',
      icon: '👑',
      gradient: 'from-tn-gold-700 to-tn-turmeric-500',
      count: '6 Sites',
    },
    {
      title: 'Pallava Marvels',
      subtitle: 'Rock-Cut Wonders',
      description: 'Explore ancient rock-cut temples and shore temples',
      icon: '⛰️',
      gradient: 'from-tn-peacock-500 to-tn-lotus-500',
      count: '7 Sites',
    },
  ];

  // Spiritual Temples
  const spiritualTemples = [
    {
      name: 'Meenakshi Amman Temple',
      location: 'Madurai',
      image: 'https://picsum.photos/seed/meenakshi/800/600',
      highlight: '14 Magnificent Gopurams',
      icon: '🪷',
    },
    {
      name: 'Brihadeeswarar Temple',
      location: 'Thanjavur',
      image: 'https://picsum.photos/seed/brihadeeswarar/800/600',
      highlight: 'UNESCO World Heritage',
      icon: '🕉️',
    },
    {
      name: 'Ranganathaswamy Temple',
      location: 'Srirangam',
      image: 'https://picsum.photos/seed/ranganathaswamy/800/600',
      highlight: 'Largest Temple Complex',
      icon: '🙏',
    },
  ];

  // Handicrafts & Artisans
  const crafts = [
    {
      name: 'Kanchipuram Silk',
      artisan: 'Silk Weavers Cooperative',
      image: 'https://picsum.photos/seed/kanchipuram/600/400',
      tradition: '400+ Years',
      icon: '🧵',
    },
    {
      name: 'Thanjavur Painting',
      artisan: 'Traditional Artists',
      image: 'https://picsum.photos/seed/thanjavurart/600/400',
      tradition: 'Chola Era',
      icon: '🎨',
    },
    {
      name: 'Tanjore Dolls',
      artisan: 'Terracotta Craftsmen',
      image: 'https://picsum.photos/seed/thanjavurdoll/600/400',
      tradition: 'Maratha Heritage',
      icon: '🎎',
    },
  ];

  return (
    <div className="min-h-screen bg-tn-ivory-50 dark:bg-gray-900">
      {/* Hero Section - Temple Gopuram Inspired */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-tn-maroon-950 via-tn-maroon-800 to-tn-stone-500"
      >
        {/* Animated Kolam Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 animate-pulse">
          <div className="absolute inset-0 bg-kolam-pattern"></div>
        </div>

        {/* Temple Image Overlay */}
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
          style={{
            backgroundImage: "url('https://picsum.photos/seed/temple-gopuram/1920/1080')",
          }}
        ></div>

        {/* Floating Temple Lamp Animation */}
        <div className="absolute top-10 right-10 text-6xl animate-float">
          🪔
        </div>
        <div className="absolute bottom-20 left-10 text-5xl animate-float" style={{ animationDelay: '1s' }}>
          🕉️
        </div>

        <div className="relative container mx-auto px-4 py-20 text-center z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Sacred OM Symbol */}
            <div className="text-tn-gold-950 text-7xl mb-6 animate-glow">
              ॐ
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-6xl md:text-8xl font-bold text-tn-gold-950 mb-6 drop-shadow-2xl tracking-wide">
              {t('home.hero_title')}
            </h1>
            
            <p className="text-xl md:text-3xl text-tn-ivory-50 mb-12 max-w-3xl mx-auto font-light italic">
              {t('home.hero_subtitle')}
            </p>

            {/* Search Bar */}
            <motion.form
              onSubmit={handleSearch}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="max-w-2xl mx-auto mb-12"
            >
              <div className="relative group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="🔍 Where in Tamil Nadu do you want to explore?"
                  className="w-full px-8 py-5 rounded-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 text-lg border-2 border-tn-gold-950/30 focus:border-tn-gold-950 focus:outline-none shadow-divine transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-tn-maroon-950 to-tn-maroon-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-glow-gold transition-all duration-300"
                >
                  Search
                </button>
              </div>
            </motion.form>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-6 justify-center"
            >
              <Link
                to="/explore"
                className="group relative px-10 py-4 bg-gradient-to-r from-tn-gold-950 to-tn-turmeric-500 text-tn-maroon-950 rounded-temple font-bold text-lg shadow-divine hover:shadow-glow-gold transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="relative z-10">✨ {t('home.explore_btn')}</span>
              </Link>
              <Link
                to="/itinerary"
                className="px-10 py-4 bg-white/10 backdrop-blur-md border-2 border-tn-gold-950 text-tn-ivory-50 rounded-temple font-bold text-lg hover:bg-tn-gold-950 hover:text-tn-maroon-950 transition-all duration-300 transform hover:-translate-y-1"
              >
                🗺️ {t('home.plan_btn')}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Temple Arch Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-tn-ivory-50 dark:from-gray-900 to-transparent"></div>
      </motion.section>

      {/* Heritage Circuits Section */}
      <section className="py-24 bg-gradient-to-br from-tn-ivory-50 to-tn-ivory-100 dark:from-gray-900 dark:to-gray-800 relative">
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-tn-maroon-950 via-tn-gold-950 to-tn-maroon-950"></div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-5xl mb-4">🕉️</div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-tn-maroon-950 dark:text-tn-gold-950 mb-4">
              {t('home.popular_title')}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-tn-gold-950 to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-tn-stone-500 dark:text-gray-300 max-w-2xl mx-auto">
              Embark on curated journeys through dynasties and devotion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {heritageCircuits.map((circuit, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`relative overflow-hidden rounded-temple bg-gradient-to-br ${circuit.gradient} p-8 shadow-temple hover:shadow-divine transition-all duration-500 transform hover:-translate-y-3 border-t-4 border-tn-gold-950`}>
                  {/* Icon */}
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {circuit.icon}
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-3xl font-bold text-white mb-2">
                    {circuit.title}
                  </h3>
                  <p className="text-tn-ivory-50 text-sm font-semibold mb-3 uppercase tracking-wider">
                    {circuit.subtitle}
                  </p>
                  <p className="text-tn-ivory-100 mb-6 leading-relaxed">
                    {circuit.description}
                  </p>

                  {/* Count Badge */}
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold text-sm">
                    {circuit.count}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-tn-gold-950/20 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual Temples Showcase */}
      <section className="py-24 bg-gradient-to-br from-tn-lotus-500/10 to-tn-peacock-500/10 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Floating Lotus Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-9xl">🪷</div>
          <div className="absolute bottom-10 right-10 text-9xl">🪷</div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-5xl mb-4">🛕</div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-tn-maroon-950 dark:text-tn-gold-950 mb-4">
              {t('home.spiritual_title')}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-tn-lotus-500 to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-tn-stone-500 dark:text-gray-300 max-w-2xl mx-auto">
              Sacred spaces where divinity meets artistry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spiritualTemples.map((temple, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="group heritage-card"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={temple.image}
                    alt={temple.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-tn-maroon-950 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-14 h-14 bg-tn-gold-950 rounded-full flex items-center justify-center text-2xl shadow-divine animate-float">
                    {temple.icon}
                  </div>

                  {/* Highlight Badge */}
                  <div className="absolute bottom-4 left-4 bg-tn-lotus-500/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-white text-sm font-bold">✨ {temple.highlight}</span>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800">
                  <h3 className="font-heading text-2xl font-bold text-tn-maroon-950 dark:text-tn-gold-950 mb-2">
                    {temple.name}
                  </h3>
                  <p className="text-tn-stone-500 dark:text-gray-400 mb-4 flex items-center gap-2">
                    <span className="text-tn-lotus-500">📍</span> {temple.location}
                  </p>
                  <Link
                    to="/explore"
                    className="inline-flex items-center gap-2 text-tn-maroon-950 dark:text-tn-gold-950 font-semibold hover:gap-3 transition-all duration-300"
                  >
                    Explore Temple <span>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/explore"
              className="inline-block px-10 py-4 bg-gradient-to-r from-tn-maroon-950 to-tn-maroon-700 text-white rounded-temple font-bold text-lg shadow-temple hover:shadow-divine transition-all duration-300 transform hover:-translate-y-1"
            >
              View All Sacred Temples 🕉️
            </Link>
          </div>
        </div>
      </section>

      {/* Handicrafts & Artisans Section */}
      <section className="py-24 bg-gradient-to-br from-tn-turmeric-500/10 to-tn-gold-950/10 dark:from-gray-900 dark:to-gray-800 relative">
        {/* Palm Leaf Texture Pattern */}
        <div className="absolute inset-0 opacity-5 bg-repeat" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M50 0 Q 30 25 50 50 Q 70 25 50 0\" fill=\"%2354473E\" /%3E%3C/svg%3E')"
        }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-5xl mb-4">🎨</div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-tn-maroon-950 dark:text-tn-gold-950 mb-4">
              {t('home.crafts_title')}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-tn-turmeric-500 to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-tn-stone-500 dark:text-gray-300 max-w-2xl mx-auto">
              Masterpieces woven through generations of artisan excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {crafts.map((craft, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0, rotate: -5 }}
                whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-temple overflow-hidden shadow-temple hover:shadow-divine transition-all duration-500 transform hover:-translate-y-2 border-2 border-tn-gold-950/20">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={craft.image}
                      alt={craft.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Icon */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-tn-turmeric-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
                      {craft.icon}
                    </div>

                    {/* Tradition Badge */}
                    <div className="absolute bottom-4 right-4 bg-tn-maroon-950/80 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-tn-gold-950 text-xs font-bold">⏳ {craft.tradition}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading text-2xl font-bold text-tn-maroon-950 dark:text-tn-gold-950 mb-2">
                      {craft.name}
                    </h3>
                    <p className="text-tn-stone-500 dark:text-gray-400 text-sm mb-4 flex items-center gap-2">
                      <span>👨‍🎨</span> {craft.artisan}
                    </p>
                    <Link
                      to="/marketplace"
                      className="inline-flex items-center gap-2 text-tn-turmeric-500 dark:text-tn-gold-950 font-semibold hover:gap-3 transition-all duration-300"
                    >
                      Explore Crafts <span>→</span>
                    </Link>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-tn-gold-950/10 rounded-bl-full"></div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/marketplace"
              className="inline-block px-10 py-4 bg-gradient-to-r from-tn-turmeric-500 to-tn-gold-950 text-tn-maroon-950 rounded-temple font-bold text-lg shadow-temple hover:shadow-divine transition-all duration-300 transform hover:-translate-y-1"
            >
              Visit Artisan Marketplace 🛍️
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Temple Bell Inspired */}
      <section className="py-24 bg-gradient-to-br from-tn-maroon-950 via-tn-maroon-800 to-tn-stone-500 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tn-gold-950 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tn-lotus-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-7xl mb-6 animate-float">
              🔔
            </div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-tn-gold-950 mb-6">
              Ready to Explore Tamil Nadu's Heritage?
            </h2>
            <p className="text-2xl text-tn-ivory-50 mb-12 max-w-3xl mx-auto font-light">
              Let ancient temples guide your journey, and timeless traditions tell your story
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link
                to="/itinerary"
                className="px-12 py-5 bg-gradient-to-r from-tn-gold-950 to-tn-turmeric-500 text-tn-maroon-950 rounded-temple font-bold text-xl shadow-divine hover:shadow-glow-gold transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                🗺️ Create Your Sacred Journey
              </Link>
              <Link
                to="/marketplace"
                className="px-12 py-5 bg-white/10 backdrop-blur-md border-2 border-tn-gold-950 text-tn-ivory-50 rounded-temple font-bold text-xl hover:bg-tn-gold-950 hover:text-tn-maroon-950 transition-all duration-300 transform hover:-translate-y-2"
              >
                🛍️ Discover Artisan Treasures
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
