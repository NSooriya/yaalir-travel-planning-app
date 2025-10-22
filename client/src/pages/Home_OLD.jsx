import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Home = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <span className="text-4xl">🛕</span>,
      title: 'Ancient Temples',
      description: 'Explore centuries-old temples with magnificent architecture',
    },
    {
      icon: <span className="text-4xl">🏛️</span>,
      title: 'Historic Monuments',
      description: 'Visit UNESCO World Heritage Sites and historic landmarks',
    },
    {
      icon: <span className="text-4xl">🎨</span>,
      title: 'Traditional Crafts',
      description: 'Discover authentic handicrafts and artisan traditions',
    },
    {
      icon: <span className="text-4xl">🗺️</span>,
      title: 'Custom Itineraries',
      description: 'Create personalized travel plans based on your interests',
    },
    {
      icon: <span className="text-4xl">📍</span>,
      title: 'Interactive Maps',
      description: 'Navigate with detailed maps and location guides',
    },
    {
      icon: <span className="text-4xl">❤️</span>,
      title: 'Save Favorites',
      description: 'Bookmark places and create your personal travel list',
    },
  ];

  const popularDestinations = [
    {
      name: 'Meenakshi Amman Temple',
      location: 'Madurai',
      image: 'https://picsum.photos/seed/meenakshi/800/600',
    },
    {
      name: 'Brihadeeswarar Temple',
      location: 'Thanjavur',
      image: 'https://picsum.photos/seed/brihadeeswarar/800/600',
    },
    {
      name: 'Mahabalipuram',
      location: 'Chengalpattu',
      image: 'https://picsum.photos/seed/mahabalipuram/800/600',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen bg-gradient-to-r from-tn-maroon-800 to-tn-maroon-600 dark:from-tn-maroon-950 dark:to-tn-maroon-800 text-white"
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://picsum.photos/seed/tnheritage/1920/1080')",
          }}
        ></div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-tn-gold-300">
              {t('home.hero_title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {t('home.hero_subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/explore" className="btn-secondary">
                {t('home.explore_btn')}
              </Link>
              <Link to="/itinerary" className="btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-tn-maroon-700">
                {t('home.plan_btn')}
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-tn-maroon-700 dark:text-tn-gold-400 mb-4">
              Why Choose TN Heritage Explorer?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Your gateway to Tamil Nadu's magnificent cultural heritage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-tn-ivory-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-tn-maroon-600 dark:text-tn-gold-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-gradient-to-br from-tn-gold-50 to-tn-ivory-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-tn-maroon-700 dark:text-tn-gold-400 mb-4">
              {t('home.popular_title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Must-visit heritage sites in Tamil Nadu
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularDestinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="heritage-card"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-tn-maroon-700 dark:text-tn-gold-400 mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    📍 {destination.location}
                  </p>
                  <Link
                    to="/explore"
                    className="text-tn-maroon-600 dark:text-tn-gold-400 font-semibold hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/explore" className="btn-primary">
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-tn-maroon-700 dark:bg-tn-maroon-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-tn-gold-300">
              Ready to Explore Tamil Nadu's Heritage?
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Start planning your journey through ancient temples, historic monuments, and vibrant traditions
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/itinerary" className="btn-secondary">
                Create Your Itinerary
              </Link>
              <Link to="/marketplace" className="btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-tn-maroon-700">
                Browse Handicrafts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
