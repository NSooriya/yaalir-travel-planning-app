import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('interests');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* HERO SECTION - Full width video/image */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="https://picsum.photos/seed/tamil-nadu-hero-1920/1920/1080"
          alt="Tamil Nadu Heritage"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Discover<br />Tamil Nadu
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
                A land of timeless heritage, ancient architecture, and living traditions
              </p>
              
              {/* Search Widget - Incredible India Style */}
              <div className="bg-white rounded-lg shadow-2xl p-6 max-w-2xl">
                <div className="flex gap-4 mb-4">
                  <button className="px-6 py-2 bg-heritage-maroon-700 text-white rounded-md font-medium">
                    Destinations
                  </button>
                  <button className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium">
                    Experiences
                  </button>
                  <button className="px-6 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium">
                    Itineraries
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Search for destinations, attractions, experiences..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-heritage-maroon-500 focus:border-transparent"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS SECTION - Grid Layout like Incredible India */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-sm uppercase tracking-widest text-heritage-maroon-700 font-semibold mb-2">
              DESTINATIONS
            </h2>
            <h3 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white">
              for every bucket list
            </h3>
          </div>
          
          {/* Multi-row Grid - Incredible India Style */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Chennai', image: 'https://picsum.photos/seed/chennai/400/500' },
              { name: 'Madurai', image: 'https://picsum.photos/seed/madurai/400/500' },
              { name: 'Thanjavur', image: 'https://picsum.photos/seed/thanjavur/400/500' },
              { name: 'Mahabalipuram', image: 'https://picsum.photos/seed/mahabalipuram/400/500' },
              { name: 'Rameswaram', image: 'https://picsum.photos/seed/rameswaram/400/500' },
              { name: 'Kanyakumari', image: 'https://picsum.photos/seed/kanyakumari/400/500' },
              { name: 'Ooty', image: 'https://picsum.photos/seed/ooty/400/500' },
              { name: 'Kodaikanal', image: 'https://picsum.photos/seed/kodaikanal/400/500' },
              { name: 'Chettinad', image: 'https://picsum.photos/seed/chettinad/400/500' },
              { name: 'Kanchipuram', image: 'https://picsum.photos/seed/kanchipuram/400/500' },
              { name: 'Pondicherry', image: 'https://picsum.photos/seed/pondicherry/400/500' },
              { name: 'Trichy', image: 'https://picsum.photos/seed/trichy/400/500' },
            ].map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => navigate('/explore')}
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white text-lg font-semibold">{dest.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/explore')}
              className="inline-block px-8 py-3 bg-white dark:bg-gray-700 text-heritage-maroon-700 dark:text-heritage-gold-500 rounded-md font-semibold hover:shadow-lg transition-all"
            >
              Discover more
            </button>
          </div>
        </div>
      </section>

      {/* ATTRACTIONS SECTION - Horizontal Scroll */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-sm uppercase tracking-widest text-heritage-maroon-700 font-semibold mb-2">
              ATTRACTIONS
            </h2>
            <h3 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white">
              worth a thousand stories
            </h3>
          </div>
          
          {/* Horizontal Scrolling Cards */}
          <div className="mt-12 overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4">
              {[
                { name: 'Shore Temple', location: 'Mahabalipuram', image: 'https://picsum.photos/seed/shore-temple/600/400' },
                { name: 'Brihadeeswarar Temple', location: 'Thanjavur', image: 'https://picsum.photos/seed/brihadeeswara/600/400' },
                { name: 'Meenakshi Amman Temple', location: 'Madurai', image: 'https://picsum.photos/seed/meenakshi-arch/600/400' },
                { name: 'Rock Fort', location: 'Trichy', image: 'https://picsum.photos/seed/rockfort/600/400' },
                { name: 'Chettinad Mansions', location: 'Karaikudi', image: 'https://picsum.photos/seed/chettinad-house/600/400' },
              ].map((attraction, index) => (
                <div
                  key={attraction.name}
                  className="flex-shrink-0 w-80 group cursor-pointer"
                  onClick={() => navigate('/explore')}
                >
                  <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="text-xl font-semibold mb-1">{attraction.name}</h4>
                      <p className="text-sm opacity-90">{attraction.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button
              onClick={() => navigate('/explore')}
              className="inline-block px-8 py-3 bg-white dark:bg-gray-700 text-heritage-maroon-700 dark:text-heritage-gold-500 rounded-md font-semibold hover:shadow-lg transition-all"
            >
              Discover more
            </button>
          </div>
        </div>
      </section>

      {/* TRAVEL DIARIES SECTION - Tabbed Interface */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-sm uppercase tracking-widest text-heritage-maroon-700 font-semibold mb-2">
              TRAVEL DIARIES
            </h2>
            <h3 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white">
              for every passion
            </h3>
          </div>
          
          {/* Tabs */}
          <div className="flex justify-center gap-4 mt-12 mb-8">
            <button
              onClick={() => setActiveTab('interests')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'interests'
                  ? 'bg-heritage-maroon-700 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              Interests
            </button>
            <button
              onClick={() => setActiveTab('regions')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'regions'
                  ? 'bg-heritage-maroon-700 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              Regions
            </button>
          </div>
          
          {/* Travel Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Heritage Sites of Tamil Nadu', category: 'Heritage', image: 'https://picsum.photos/seed/heritage-blog/600/400' },
              { title: 'Traditional Crafts Journey', category: 'Culture', image: 'https://picsum.photos/seed/crafts-blog/600/400' },
              { title: 'Hill Station Escapes', category: 'Nature', image: 'https://picsum.photos/seed/hills-blog/600/400' },
            ].map((diary) => (
              <div
                key={diary.title}
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
                onClick={() => navigate('/explore')}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={diary.image}
                    alt={diary.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-wider text-heritage-maroon-700 font-semibold">
                    {diary.category}
                  </span>
                  <h4 className="text-xl font-semibold mt-2 text-gray-900 dark:text-white">
                    {diary.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/explore')}
              className="inline-block px-8 py-3 bg-white dark:bg-gray-700 text-heritage-maroon-700 dark:text-heritage-gold-500 rounded-md font-semibold hover:shadow-lg transition-all"
            >
              Discover more
            </button>
          </div>
        </div>
      </section>

      {/* EXQUISITE CRAFTS SECTION - Horizontal Scroll */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-sm uppercase tracking-widest text-heritage-maroon-700 font-semibold mb-2">
              EXQUISITE CRAFTS
            </h2>
            <h3 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white">
              of timeless tradition
            </h3>
          </div>
          
          {/* Horizontal Scrolling Craft Cards */}
          <div className="mt-12 overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4">
              {[
                { name: 'Kanchipuram Silk', location: 'Kanchipuram', image: 'https://picsum.photos/seed/kanchi-silk-400/400/400' },
                { name: 'Thanjavur Paintings', location: 'Thanjavur', image: 'https://picsum.photos/seed/thanjavur-painting/400/400' },
                { name: 'Bronze Sculptures', location: 'Swamimalai', image: 'https://picsum.photos/seed/bronze-art/400/400' },
                { name: 'Tanjore Dolls', location: 'Thanjavur', image: 'https://picsum.photos/seed/tanjore-dolls/400/400' },
                { name: 'Temple Jewelry', location: 'Nagercoil', image: 'https://picsum.photos/seed/temple-jewelry/400/400' },
              ].map((craft) => (
                <div
                  key={craft.name}
                  className="flex-shrink-0 w-72 cursor-pointer group"
                  onClick={() => navigate('/marketplace')}
                >
                  <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <img
                      src={craft.image}
                      alt={craft.name}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-heritage-maroon-700 dark:text-heritage-gold-500 font-semibold">
                      {craft.location}
                    </p>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                      {craft.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/marketplace')}
              className="inline-block px-8 py-3 bg-white dark:bg-gray-700 text-heritage-maroon-700 dark:text-heritage-gold-500 rounded-md font-semibold hover:shadow-lg transition-all"
            >
              Discover more
            </button>
          </div>
        </div>
      </section>

      {/* GET STARTED SECTION - CTA */}
      <section className="py-20 px-6 bg-heritage-maroon-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Inspired?
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold mb-8">
            GET STARTED
          </h3>
          <p className="text-xl mb-12 opacity-90">
            Plan your perfect Tamil Nadu journey with our custom itinerary builder
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/itinerary')}
              className="px-10 py-4 bg-white text-heritage-maroon-700 rounded-md font-semibold text-lg hover:shadow-xl transition-all"
            >
              Plan Your Trip
            </button>
            <button
              onClick={() => navigate('/explore')}
              className="px-10 py-4 border-2 border-white text-white rounded-md font-semibold text-lg hover:bg-white hover:text-heritage-maroon-700 transition-all"
            >
              Explore Destinations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
