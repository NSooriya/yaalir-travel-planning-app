import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaBookmark, FaRegBookmark, FaMapMarkerAlt, FaClock, FaMoneyBillWave } from 'react-icons/fa';
import { heritageAPI, bookmarksAPI } from '../api';
import { useAuth } from '../context/AuthContext';

const Explore = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [places, setPlaces] = useState([]);
  const [filter, setFilter] = useState('all');
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const heritageRes = await heritageAPI.getAll();
      // Ensure it's an array
      const heritageData = Array.isArray(heritageRes.data) ? heritageRes.data : [];
      setPlaces(heritageData);

      if (user) {
        const bookmarksRes = await bookmarksAPI.getAll();
        const bookmarksData = bookmarksRes.data?.bookmarks || [];
        setBookmarks(Array.isArray(bookmarksData) ? bookmarksData : []);
      }
    } catch (error) {
      console.error('Error loading data:', error);
      // Set empty arrays on error
      setPlaces([]);
      setBookmarks([]);
    } finally {
      setLoading(false);
    }
  };

  const handleBookmark = async (placeName) => {
    if (!user) {
      alert('Please login to bookmark places');
      return;
    }

    try {
      if (bookmarks.includes(placeName)) {
        await bookmarksAPI.remove({ placeName });
        setBookmarks(bookmarks.filter(b => b !== placeName));
      } else {
        await bookmarksAPI.add({ placeName });
        setBookmarks([...bookmarks, placeName]);
      }
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  };

  const getFilteredItems = () => {
    if (filter === 'all') {
      return places;
    }
    return places.filter(p => p.category === filter);
  };

  const openMap = (coordinates, name) => {
    if (coordinates) {
      const url = `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`;
      window.open(url, '_blank');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory-500 dark:bg-stone-dark-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-chola-red-700"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory-500 dark:bg-stone-dark-900 py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-chola-red-900 dark:text-regal-gold-400 mb-3 md:mb-4 px-4">
            {t('explore.title')}
          </h1>
          <p className="font-body text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Discover the magnificent heritage sites of Tamil Nadu
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-2">
          {['all', 'historical', 'spiritual'].map((filterType) => (
            <motion.button
              key={filterType}
              onClick={() => setFilter(filterType)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 md:px-8 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                filter === filterType
                  ? 'bg-chola-red-700 text-white shadow-lift'
                  : 'bg-white dark:bg-stone-dark-800 text-gray-700 dark:text-gray-300 hover:bg-sandstone-200 dark:hover:bg-stone-dark-700 shadow-soft'
              }`}
            >
              {t(`explore.filter_${filterType}`)}
            </motion.button>
          ))}
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {getFilteredItems().map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-stone-dark-800 rounded-2xl shadow-soft hover:shadow-lift transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {user && (
                  <button
                    onClick={() => handleBookmark(item.name)}
                    className="absolute top-4 right-4 bg-white/90 dark:bg-stone-dark-800/90 backdrop-blur-sm p-3 rounded-full shadow-medium hover:scale-110 transition-transform"
                  >
                    {bookmarks.includes(item.name) ? (
                      <FaBookmark className="text-regal-gold-500 text-xl" />
                    ) : (
                      <FaRegBookmark className="text-gray-600 dark:text-gray-300 text-xl" />
                    )}
                  </button>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-chola-red-900 dark:text-regal-gold-400 mb-2">
                  {item.name}
                </h3>
                
                <p className="font-body text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <FaMapMarkerAlt className="mr-2 text-peacock-blue-600 dark:text-peacock-blue-400" />
                    <span className="text-sm font-body">{item.location}</span>
                  </div>

                  {item.entry_fee && (
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <FaMoneyBillWave className="mr-2 text-regal-gold-600 dark:text-regal-gold-400" />
                      <span className="text-sm font-body">{t('explore.entry_fee')}: {item.entry_fee}</span>
                    </div>
                  )}

                  {item.timing && (
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <FaClock className="mr-2 text-chola-red-600 dark:text-chola-red-400" />
                      <span className="text-sm font-body">{t('explore.timings')}: {item.timing}</span>
                    </div>
                  )}

                  {item.priceRange && (
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <FaMoneyBillWave className="mr-2 text-regal-gold-600 dark:text-regal-gold-400" />
                      <span className="text-sm font-body">{item.priceRange}</span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                {item.coordinates && (
                  <button
                    onClick={() => openMap(item.coordinates, item.name)}
                    className="w-full bg-gradient-to-r from-chola-red-700 to-chola-red-600 hover:from-chola-red-800 hover:to-chola-red-700 text-white py-3 rounded-full font-semibold transition-all duration-300 shadow-soft hover:shadow-medium"
                  >
                    {t('explore.view_map')} 📍
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {getFilteredItems().length === 0 && (
          <div className="text-center py-20">
            <p className="font-body text-xl text-gray-600 dark:text-gray-400">
              No items found for this filter
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
