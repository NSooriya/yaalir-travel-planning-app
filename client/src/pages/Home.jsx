import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { heritageAPI } from '../api';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [destinations, setDestinations] = useState([]);
  const [crafts, setCrafts] = useState([]);
  const [loading, setLoading] = useState(true);
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [heritageRes, craftsRes] = await Promise.all([
        heritageAPI.getAll(),
        heritageAPI.getCrafts(),
      ]);
      
      // Get first 6 heritage sites for home page
      setDestinations(heritageRes.data.slice(0, 6));
      // Get first 6 crafts for home page
      setCrafts(craftsRes.data.slice(0, 6));
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 20;
    const y = (clientY - top - height / 2) / 20;
    setMousePosition({ x, y });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory-500 dark:bg-stone-dark-900">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-chola-red-700"></div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION - Full Screen Cinematic */}
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1607925944353-a2387542dd93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBmZXN0aXZhbHxlbnwwfHx8fDE3NjExMTcwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080)',
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Discover the Soul of Tamil Nadu
            </h1>
            <p className="font-display text-2xl md:text-4xl text-regal-gold-300 mb-4">
              A Journey Through Time, Art, and Heritage
            </p>
            <p className="font-body text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-12">
              Where ancient temples whisper stories, stone sculptures dance with sunlight, 
              and every corner unveils a masterpiece of culture and tradition.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              to="/explore"
              className="inline-block px-12 py-5 bg-gradient-to-r from-chola-red-700 to-chola-red-600 
                       text-white font-display text-lg font-semibold rounded-full 
                       shadow-lift hover:shadow-glow-gold hover:scale-105 
                       transition-all duration-300 animate-float"
            >
              Start Your Journey ✨
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white/70 rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPLORE DESTINATIONS SECTION */}
      <section className="py-24 px-6 bg-ivory-500 dark:bg-stone-dark-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold text-chola-red-900 dark:text-regal-gold-400 mb-4">
              Explore Timeless Destinations
            </h2>
            <p className="font-body text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From coastal marvels to temple towns, discover places where history lives and breathes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-lift transition-all duration-300 bg-white dark:bg-stone-dark-800"
              >
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="inline-block px-3 py-1 bg-peacock-blue-600 rounded-full text-xs font-semibold mb-3">
                      📍 {destination.location}
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-2">{destination.name}</h3>
                    <p className="font-body text-sm text-gray-200 mb-4 line-clamp-2">{destination.description}</p>
                    <Link
                      to={`/explore`}
                      className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm 
                               border border-white/50 rounded-full text-sm font-semibold 
                               hover:bg-white hover:text-chola-red-700 
                               transition-all duration-300"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTISAN CRAFTS MARKETPLACE */}
      <section className="py-24 px-6 bg-sandstone-100 dark:bg-stone-dark-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold text-chola-red-900 dark:text-regal-gold-400 mb-4">
              Artisan Treasures
            </h2>
            <p className="font-body text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Meet the master craftspeople keeping centuries-old traditions alive through their art
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {crafts.map((craft, index) => (
              <motion.div
                key={craft.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl shadow-medium hover:shadow-lift transition-all duration-300 bg-white dark:bg-stone-dark-700"
              >
                <div className="relative overflow-hidden min-h-[300px]">
                  <img
                    src={craft.image}
                    alt={craft.name}
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=600&fit=crop';
                    }}
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-chola-red-900 dark:text-regal-gold-300 mb-1">
                    {craft.name}
                  </h3>
                  <p className="font-body text-sm text-peacock-blue-700 dark:text-peacock-blue-400">
                    by {craft.artisan}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-6 bg-gradient-to-br from-chola-red-900 via-chola-red-800 to-peacock-blue-900 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-regal-gold-500 to-transparent animate-shimmer" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Experience Tamil Nadu?
            </h2>
            <p className="font-body text-xl text-regal-gold-200 mb-12">
              Let us craft your perfect journey through history, culture, and wonder
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/itinerary"
                className="px-10 py-4 bg-white text-chola-red-900 font-display text-lg font-semibold rounded-full shadow-lift hover:shadow-glow-gold hover:scale-105 transition-all duration-300"
              >
                Plan Your Journey 🗺️
              </Link>
              <Link
                to="/marketplace"
                className="px-10 py-4 bg-transparent border-2 border-white text-white font-display text-lg font-semibold rounded-full hover:bg-white hover:text-chola-red-900 transition-all duration-300"
              >
                Explore Crafts 🎨
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
