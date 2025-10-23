import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { HiGlobeAlt, HiSun, HiMoon } from 'react-icons/hi';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 md:space-x-3">
            <img 
              src="/logo.png" 
              alt="Yaalir Logo" 
              className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full bg-white dark:bg-gray-800 p-0.5 shadow-sm"
            />
            <span className="text-xl md:text-2xl font-display font-bold text-heritage-maroon-700 dark:text-heritage-gold-500">
              Yaalir
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-heritage-maroon-700 dark:hover:text-heritage-gold-500 transition-colors font-medium">
              {t('nav.home')}
            </Link>
            <Link to="/explore" className="text-gray-700 dark:text-gray-300 hover:text-heritage-maroon-700 dark:hover:text-heritage-gold-500 transition-colors font-medium">
              {t('nav.explore')}
            </Link>
            <Link to="/itinerary" className="text-gray-700 dark:text-gray-300 hover:text-heritage-maroon-700 dark:hover:text-heritage-gold-500 transition-colors font-medium">
              {t('nav.itinerary')}
            </Link>
            <Link to="/marketplace" className="text-gray-700 dark:text-gray-300 hover:text-heritage-maroon-700 dark:hover:text-heritage-gold-500 transition-colors font-medium">
              {t('nav.marketplace')}
            </Link>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Language Selector */}
            <div className="relative group">
              <button className="p-1.5 md:p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-heritage-maroon-700 dark:hover:text-heritage-gold-500 transition-all">
                <HiGlobeAlt className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-gray-200 dark:border-gray-700 z-50">
                <button
                  onClick={() => changeLanguage('en')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage('ta')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  தமிழ்
                </button>
                <button
                  onClick={() => changeLanguage('fr')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-lg"
                >
                  Français
                </button>
              </div>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 md:p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-heritage-maroon-700 dark:hover:text-heritage-gold-500 transition-all"
            >
              {isDark ? (
                <HiSun className="w-4 h-4 md:w-5 md:h-5" />
              ) : (
                <HiMoon className="w-4 h-4 md:w-5 md:h-5" />
              )}
            </button>

            {/* User Actions */}
            {user ? (
              <div className="relative group">
                {/* Profile Avatar */}
                <Link 
                  to="/profile" 
                  className="flex items-center space-x-2 hover:opacity-90 transition-all"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-regal-gold-400 to-regal-gold-600 dark:from-regal-gold-300 dark:to-regal-gold-500 flex items-center justify-center text-stone-dark-900 font-bold border-2 border-white dark:border-regal-gold-200 shadow-lg dark:shadow-glow-gold text-sm md:text-base">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden lg:block text-sm text-gray-700 dark:text-white font-semibold">{user.name}</span>
                </Link>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all border border-gray-200 dark:border-gray-700 z-50">
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg transition-colors"
                  >
                    <FaUser className="text-heritage-maroon-700 dark:text-heritage-gold-500" />
                    <span>{t('nav.profile')}</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-lg transition-colors"
                  >
                    <FaSignOutAlt className="text-heritage-maroon-700 dark:text-heritage-gold-500" />
                    <span>{t('nav.logout')}</span>
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-tn-gold-500 hover:bg-tn-gold-600 text-gray-900 dark:text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-colors text-sm md:text-base"
              >
                {t('nav.login')}
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden pb-3 flex flex-wrap gap-2 text-gray-700 dark:text-gray-300">
          <Link to="/" className="text-xs hover:text-heritage-maroon-700 dark:hover:text-heritage-gold-500 transition-colors">
            {t('nav.home')}
          </Link>
          <span className="text-gray-400">•</span>
          <Link to="/explore" className="text-xs hover:text-heritage-maroon-700 dark:hover:text-heritage-gold-500 transition-colors">
            {t('nav.explore')}
          </Link>
          <span className="text-gray-400">•</span>
          <Link to="/itinerary" className="text-xs hover:text-heritage-maroon-700 dark:hover:text-heritage-gold-500 transition-colors">
            {t('nav.itinerary')}
          </Link>
          <span className="text-gray-400">•</span>
          <Link to="/marketplace" className="text-xs hover:text-heritage-maroon-700 dark:hover:text-heritage-gold-500 transition-colors">
            {t('nav.marketplace')}
          </Link>
          {user && (
            <>
              <span className="text-gray-400">•</span>
              <Link to="/profile" className="text-xs hover:text-heritage-maroon-700 dark:hover:text-heritage-gold-500 transition-colors">
                {t('nav.profile')}
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
