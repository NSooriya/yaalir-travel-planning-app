import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaEnvelope } from 'react-icons/fa';
import { heritageAPI } from '../api';

const Marketplace = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await heritageAPI.getCrafts();
      // Ensure it's an array
      const productsData = Array.isArray(response.data) ? response.data : [];
      setProducts(productsData);
    } catch (error) {
      console.error('Error loading products:', error);
      // Set empty array on error
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const contactSeller = (product) => {
    alert(`To purchase ${product.name}, please contact: ${product.seller}\nThis is a demo - actual contact functionality would be implemented in production.`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory-500 dark:bg-stone-dark-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-chola-red-700"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory-500 dark:bg-stone-dark-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold text-chola-red-900 dark:text-regal-gold-400 mb-4">
            {t('marketplace.title')}
          </h1>
          <p className="font-body text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Authentic handcrafted products from Tamil Nadu's master artisans
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-white dark:bg-stone-dark-800 rounded-2xl shadow-soft hover:shadow-lift transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-peacock-blue-700 dark:text-peacock-blue-400 bg-peacock-blue-50 dark:bg-stone-dark-700 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-chola-red-900 dark:text-regal-gold-400 mb-2">
                  {product.name}
                </h3>

                <p className="font-body text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Artisan Story */}
                <div className="bg-sandstone-100 dark:bg-stone-dark-700 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-sm text-chola-red-700 dark:text-regal-gold-400 mb-2">
                    Artisan Story
                  </h4>
                  <p className="font-body text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                    {product.artisanStory}
                  </p>
                </div>

                {/* Price and Artisan */}
                <div className="mb-4">
                  <p className="text-2xl font-bold text-regal-gold-600 dark:text-regal-gold-400 mb-1">
                    {product.priceRange}
                  </p>
                  <p className="font-body text-sm text-gray-600 dark:text-gray-400">
                    by {product.artisan}
                  </p>
                </div>

                {/* Contact Button */}
                <button
                  onClick={() => contactSeller(product)}
                  className="w-full bg-gradient-to-r from-chola-red-700 to-chola-red-600 hover:from-chola-red-800 hover:to-chola-red-700 text-white py-3 rounded-full font-semibold transition-all duration-300 shadow-soft hover:shadow-medium flex items-center justify-center space-x-2"
                >
                  <FaEnvelope />
                  <span>{t('marketplace.contact_seller') || 'Contact Artisan'}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-20">
            <p className="font-body text-xl text-gray-600 dark:text-gray-400">
              No products found in this category
            </p>
          </div>
        )}

        {/* Info Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-chola-red-900 via-chola-red-800 to-peacock-blue-900 text-white rounded-2xl p-8 text-center shadow-lift"
        >
          <h3 className="font-display text-3xl font-bold mb-4 text-regal-gold-300">
            Supporting Local Artisans
          </h3>
          <p className="font-body text-gray-200 max-w-3xl mx-auto text-lg">
            Every purchase directly supports traditional artisans and helps preserve Tamil Nadu's rich craft heritage.
            These authentic products are handmade using techniques passed down through generations.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Marketplace;
