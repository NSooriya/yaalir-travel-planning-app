import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUsers, FaCalendarAlt, FaMoneyBillWave, FaSave, FaLock } from 'react-icons/fa';
import { itineraryAPI } from '../api';
import { useAuth } from '../context/AuthContext';

const ItineraryBuilder = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    travelers: 2,
    duration: 3,
    budget: '50000',
  });
  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateItinerary = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await itineraryAPI.generate(formData);
      setItinerary(response.data);
      setSaved(false);
    } catch (error) {
      console.error('Error generating itinerary:', error);
      alert('Error generating itinerary. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const saveItinerary = async () => {
    if (!user) {
      alert('Please login to save itinerary');
      return;
    }

    try {
      await itineraryAPI.save({ itineraryData: { ...formData, ...itinerary } });
      setSaved(true);
      alert('Itinerary saved successfully!');
    } catch (error) {
      console.error('Error saving itinerary:', error);
      alert('Error saving itinerary. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-tn-maroon-700 dark:text-tn-gold-400 mb-4">
            {t('itinerary.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Let us help you plan an unforgettable journey through Tamil Nadu
          </p>
        </motion.div>

        {/* Blurred Content for Non-Logged-In Users */}
        {!user && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 dark:bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 max-w-md mx-4 text-center border-2 border-[#7A1C1C] dark:border-[#D4AF37]"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#7A1C1C] to-[#5A1515] dark:from-[#D4AF37] dark:to-[#B8941F] rounded-full flex items-center justify-center shadow-lg">
                <FaLock className="text-4xl text-white dark:text-gray-900" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#7A1C1C] dark:text-[#D4AF37] mb-4">
                Login Required
              </h2>
              <p className="text-gray-700 dark:text-gray-200 mb-6 text-lg leading-relaxed">
                Please log in to create personalized travel plans and save your itineraries.
              </p>
              <div className="space-y-3">
                <Link
                  to="/login"
                  className="block w-full bg-gradient-to-r from-[#7A1C1C] to-[#5A1515] dark:from-[#D4AF37] dark:to-[#B8941F] text-white dark:text-gray-900 px-6 py-3 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  Login to Continue
                </Link>
                <Link
                  to="/register"
                  className="block w-full border-2 border-[#7A1C1C] dark:border-[#D4AF37] text-[#7A1C1C] dark:text-[#D4AF37] px-6 py-3 rounded-lg font-semibold hover:bg-[#7A1C1C]/10 dark:hover:bg-[#D4AF37]/10 transition-all"
                >
                  Create Account
                </Link>
              </div>
            </motion.div>
          </div>
        )}

        {/* Main Content - Blurred when not logged in */}
        <div className={!user ? 'filter blur-lg pointer-events-none select-none' : ''}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-tn-maroon-700 dark:text-tn-gold-400 mb-6">
              Your Preferences
            </h2>

            <form onSubmit={generateItinerary} className="space-y-6">
              {/* Travelers */}
              <div>
                <label className="flex items-center text-gray-700 dark:text-gray-300 mb-2 font-semibold">
                  <FaUsers className="mr-2 text-tn-maroon-600 dark:text-tn-gold-400" />
                  {t('itinerary.travelers')}
                </label>
                <input
                  type="number"
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleChange}
                  min="1"
                  max="20"
                  className="input-field"
                  required
                />
              </div>

              {/* Duration */}
              <div>
                <label className="flex items-center text-gray-700 dark:text-gray-300 mb-2 font-semibold">
                  <FaCalendarAlt className="mr-2 text-tn-maroon-600 dark:text-tn-gold-400" />
                  {t('itinerary.duration')}
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="input-field"
                  required
                >
                  <option value="3">3 Days - Weekend Getaway (Chennai & Mahabalipuram)</option>
                  <option value="5">5 Days - Temple Circuit (Chennai, Mahabalipuram, Thanjavur)</option>
                  <option value="7">7 Days - Classic Tour (Chennai, Mahabalipuram, Thanjavur, Madurai)</option>
                  <option value="10">10 Days - Grand Tour (All major destinations)</option>
                </select>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Recommended duration based on travel time and site visits
                </p>
              </div>

              {/* Budget */}
              <div>
                <label className="flex items-center text-gray-700 dark:text-gray-300 mb-2 font-semibold">
                  <FaMoneyBillWave className="mr-2 text-tn-maroon-600 dark:text-tn-gold-400" />
                  {t('itinerary.budget')}
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="input-field"
                  required
                >
                  <option value="20000">₹20,000 - Budget</option>
                  <option value="50000">₹50,000 - Standard</option>
                  <option value="100000">₹1,00,000 - Premium</option>
                  <option value="200000">₹2,00,000+ - Luxury</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? t('common.loading') : t('itinerary.generate_btn')}
              </button>
            </form>
          </motion.div>

          {/* Generated Itinerary */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold text-tn-maroon-700 dark:text-tn-gold-400 mb-6">
              Your Itinerary
            </h2>

            {!itinerary ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill out the form and click "Generate Itinerary" to create your custom travel plan
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Summary */}
                <div className="bg-tn-ivory-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-tn-maroon-700 dark:text-tn-gold-400">
                    Trip Summary
                  </h3>
                  <div className="space-y-1 text-gray-700 dark:text-gray-300">
                    <p>�️ Circuit: {itinerary.summary.circuit}</p>
                    <p>�👥 Travelers: {itinerary.summary.travelers}</p>
                    <p>📅 Duration: {itinerary.summary.duration} days</p>
                    <p>🏛️ Places: {itinerary.summary.totalPlaces}</p>
                    <p>💰 Estimated Cost: ₹{itinerary.summary.estimatedTotalCost.toLocaleString()}</p>
                    <p className={itinerary.summary.budgetMatch ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                      {itinerary.summary.budgetMatch ? '✓ Within Budget' : '⚠ Exceeds Budget'}
                    </p>
                  </div>
                </div>

                {/* Day-wise Itinerary */}
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {Array.isArray(itinerary.itinerary) && itinerary.itinerary.map((day) => (
                    <div key={day.day} className="border-l-4 border-tn-maroon-600 dark:border-tn-gold-400 pl-4">
                      <h4 className="font-bold text-lg text-tn-maroon-700 dark:text-tn-gold-400 mb-1">
                        {t('itinerary.day')} {day.day} - {day.region}
                      </h4>
                      {day.note && (
                        <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-2">
                          {day.note}
                        </p>
                      )}
                      <div className="space-y-2">
                        {Array.isArray(day.places) && day.places.map((place, index) => (
                          <div key={index} className="text-gray-700 dark:text-gray-300">
                            <p className="font-semibold">{place.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              📍 {place.location} • ⏱️ {place.duration}
                            </p>
                          </div>
                        ))}
                        <p className="text-sm font-semibold text-tn-maroon-600 dark:text-tn-gold-400">
                          Day Cost: ₹{day.estimatedCost?.toLocaleString() || 0}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Save Button */}
                {user && (
                  <button
                    onClick={saveItinerary}
                    disabled={saved}
                    className={`w-full flex items-center justify-center space-x-2 py-3 rounded-lg font-semibold transition-all ${
                      saved
                        ? 'bg-green-500 text-white cursor-default'
                        : 'btn-secondary'
                    }`}
                  >
                    <FaSave />
                    <span>{saved ? 'Saved!' : t('itinerary.save_btn')}</span>
                  </button>
                )}

                {!user && (
                  <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                    Login to save your itinerary
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryBuilder;
