import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Hero carousel slides - focus on architecture & landscapes, NOT religious symbols
  const heroSlides = [
    {
      id: 1,
      image: 'https://picsum.photos/seed/shore-temple-1920/1920/1080',
      title: 'Discover Tamil Nadu',
      subtitle: 'A Land of Ancient Architecture and Living Heritage',
      cta: 'Explore Now',
    },
    {
      id: 2,
      image: 'https://picsum.photos/seed/chettinad-mansion-1920/1920/1080',
      title: 'Architectural Marvels',
      subtitle: 'From Grand Palaces to Historic Monuments',
      cta: 'View Sites',
    },
    {
      id: 3,
      image: 'https://picsum.photos/seed/tamil-craft-1920/1920/1080',
      title: 'Traditional Crafts',
      subtitle: 'Handcrafted Excellence Passed Through Generations',
      cta: 'Shop Crafts',
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Featured categories - clean grid layout
  const categories = [
    {
      id: 1,
      title: 'Heritage Sites',
      description: 'Explore UNESCO World Heritage sites and ancient monuments',
      image: 'https://picsum.photos/seed/heritage-600/600/400',
      count: '150+ Sites',
      link: '/explore?filter=heritage',
    },
    {
      id: 2,
      title: 'Cultural Experiences',
      description: 'Immerse yourself in traditional arts, music, and dance',
      image: 'https://picsum.photos/seed/culture-600/600/400',
      count: '80+ Experiences',
      link: '/explore?filter=culture',
    },
    {
      id: 3,
      title: 'Handcrafted Treasures',
      description: 'Discover authentic Tamil Nadu crafts and textiles',
      image: 'https://picsum.photos/seed/crafts-600/600/400',
      count: '200+ Products',
      link: '/marketplace',
    },
  ];

  // Featured destinations - card-based layout
  const featuredDestinations = [
    {
      id: 1,
      name: 'Mahabalipuram',
      description: 'Ancient port city with rock-cut architecture',
      image: 'https://picsum.photos/seed/mahabalipuram-800/800/600',
      type: 'UNESCO Heritage Site',
    },
    {
      id: 2,
      name: 'Thanjavur',
      description: 'Capital of ancient Chola dynasty',
      image: 'https://picsum.photos/seed/thanjavur-800/800/600',
      type: 'Historical City',
    },
    {
      id: 3,
      name: 'Chettinad',
      description: 'Mansions showcasing traditional architecture',
      image: 'https://picsum.photos/seed/chettinad-800/800/600',
      type: 'Architectural Heritage',
    },
    {
      id: 4,
      name: 'Madurai',
      description: 'Ancient city with rich cultural heritage',
      image: 'https://picsum.photos/seed/madurai-800/800/600',
      type: 'Cultural Hub',
    },
  ];

  // Featured crafts
  const featuredCrafts = [
    {
      id: 1,
      name: 'Kanchipuram Silk',
      description: 'Handwoven silk sarees with gold zari',
      image: 'https://picsum.photos/seed/kanchi-silk-500/500/400',
      region: 'Kanchipuram',
    },
    {
      id: 2,
      name: 'Thanjavur Paintings',
      description: 'Traditional art with gold leaf embellishments',
      image: 'https://picsum.photos/seed/thanjavur-art-500/500/400',
      region: 'Thanjavur',
    },
    {
      id: 3,
      name: 'Bronze Sculptures',
      description: 'Ancient lost-wax casting technique',
      image: 'https://picsum.photos/seed/bronze-500/500/400',
      region: 'Swamimalai',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Carousel */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Hero Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="hero-overlay"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-6 text-center text-white">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-6xl font-display font-bold mb-4"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-xl md:text-2xl mb-8 font-light"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  onClick={() => navigate('/explore')}
                  className="btn-primary text-lg"
                >
                  {slide.cta}
                </motion.button>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Search Bar */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Search for destinations, experiences, or crafts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field flex-1"
              />
              <button
                onClick={() => navigate(`/explore?q=${searchQuery}`)}
                className="btn-primary whitespace-nowrap"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-gray-900 dark:text-white">
            Explore Tamil Nadu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onClick={() => navigate(category.link)}
                className="heritage-card cursor-pointer group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="image-overlay"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm font-semibold bg-heritage-gold-500 text-gray-900 px-3 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-2 text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white">
              Top Destinations
            </h2>
            <button
              onClick={() => navigate('/explore')}
              className="btn-outline"
            >
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => navigate(`/explore/${destination.id}`)}
                className="heritage-card cursor-pointer"
              >
                <div className="relative h-56">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="image-overlay"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <span className="text-xs font-medium bg-heritage-maroon-700 px-2 py-1 rounded mb-2 inline-block">
                      {destination.type}
                    </span>
                    <h3 className="text-lg font-semibold">{destination.name}</h3>
                    <p className="text-sm opacity-90">{destination.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Crafts */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">
                Traditional Crafts
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Handcrafted with centuries of heritage
              </p>
            </div>
            <button
              onClick={() => navigate('/marketplace')}
              className="btn-secondary"
            >
              Shop Now
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCrafts.map((craft, index) => (
              <motion.div
                key={craft.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => navigate(`/marketplace?craft=${craft.id}`)}
                className="heritage-card cursor-pointer"
              >
                <div className="relative h-64">
                  <img
                    src={craft.image}
                    alt={craft.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-heritage-gold-600 mb-2 block">
                    {craft.region}
                  </span>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {craft.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {craft.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-heritage-maroon-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Plan Your Tamil Nadu Journey
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Create personalized itineraries and discover hidden gems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/itinerary')}
              className="bg-white text-heritage-maroon-700 hover:bg-gray-100 px-8 py-4 rounded-md font-semibold text-lg transition-all duration-200"
            >
              Build Itinerary
            </button>
            <button
              onClick={() => navigate('/explore')}
              className="border-2 border-white text-white hover:bg-white hover:text-heritage-maroon-700 px-8 py-4 rounded-md font-semibold text-lg transition-all duration-200"
            >
              Explore All Sites
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
