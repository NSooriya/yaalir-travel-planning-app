import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 20;
    const y = (clientY - top - height / 2) / 20;
    setMousePosition({ x, y });
  };

  // Destination data
  const destinations = [
    {
      id: 1,
      title: 'Mahabalipuram',
      subtitle: 'The Stone Symphony by the Sea',
      image: 'https://picsum.photos/seed/mahabalipuram/800/1000',
      location: 'Coastal Tamil Nadu',
    },
    {
      id: 2,
      title: 'Thanjavur',
      subtitle: 'Where Art Meets Devotion',
      image: 'https://picsum.photos/seed/thanjavur/800/1000',
      location: 'Cauvery Delta',
    },
    {
      id: 3,
      title: 'Madurai',
      subtitle: 'The Temple City of Eternal Flame',
      image: 'https://picsum.photos/seed/madurai/800/1000',
      location: 'Southern Tamil Nadu',
    },
    {
      id: 4,
      title: 'Rameswaram',
      subtitle: 'Sacred Island of Legends',
      image: 'https://picsum.photos/seed/rameswaram/800/1000',
      location: 'Pamban Island',
    },
    {
      id: 5,
      title: 'Ooty',
      subtitle: 'Queen of the Nilgiris',
      image: 'https://picsum.photos/seed/ooty/800/1000',
      location: 'Nilgiri Hills',
    },
    {
      id: 6,
      title: 'Chettinad',
      subtitle: 'Heritage Mansions & Spice Routes',
      image: 'https://picsum.photos/seed/chettinad/800/1000',
      location: 'Sivaganga District',
    },
  ];

  // Crafts data
  const crafts = [
    {
      id: 1,
      title: 'Kanchipuram Silk',
      artisan: 'Lakshmi Devi',
      image: 'https://picsum.photos/seed/silk1/600/700',
      story: '5 generations of master weavers',
    },
    {
      id: 2,
      title: 'Thanjavur Painting',
      artisan: 'Ravi Kumar',
      image: 'https://picsum.photos/seed/painting1/600/800',
      story: 'Classical art since 1650',
    },
    {
      id: 3,
      title: 'Bhavani Jamakalam',
      artisan: 'Murugan Textiles',
      image: 'https://picsum.photos/seed/jamakalam1/600/600',
      story: 'Handwoven floor coverings',
    },
    {
      id: 4,
      title: 'Bronze Sculptures',
      artisan: 'Swaminathan Family',
      image: 'https://picsum.photos/seed/bronze1/600/750',
      story: 'Chola dynasty techniques',
    },
    {
      id: 5,
      title: 'Tanjore Dolls',
      artisan: 'Priya Crafts',
      image: 'https://picsum.photos/seed/dolls1/600/650',
      story: 'Dancing bobblehead tradition',
    },
    {
      id: 6,
      title: 'Pattamadai Mats',
      artisan: 'Konar Weavers',
      image: 'https://picsum.photos/seed/mats1/600/700',
      story: 'Silky soft palm mats',
    },
  ];

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
              backgroundImage: 'url(https://picsum.photos/seed/tamilnadu-hero/1920/1080)',
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
              Discover Tamil Nadu
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
                    alt={destination.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="inline-block px-3 py-1 bg-peacock-blue-600 rounded-full text-xs font-semibold mb-3">
                      📍 {destination.location}
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-2">{destination.title}</h3>
                    <p className="font-body text-sm text-gray-200 mb-4">{destination.subtitle}</p>
                    <Link
                      to={`/explore/${destination.id}`}
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
                <div className="relative overflow-hidden">
                  <img
                    src={craft.image}
                    alt={craft.title}
                    className="w-full h-auto object-cover group-hover:brightness-110 transition-all duration-500"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-chola-red-900/90 via-chola-red-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <button className="px-4 py-2 bg-regal-gold-500 text-stone-dark-900 rounded-full text-sm font-semibold hover:bg-regal-gold-400 transition-colors">
                        Meet the Artisan 👤
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-chola-red-900 dark:text-regal-gold-300 mb-1">
                    {craft.title}
                  </h3>
                  <p className="font-body text-sm text-peacock-blue-700 dark:text-peacock-blue-400 mb-2">
                    by {craft.artisan}
                  </p>
                  <p className="font-body text-xs text-gray-600 dark:text-gray-400">
                    ✨ {craft.story}
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
