import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ChatBot from './components/ChatBot';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Explore from './pages/Explore';
import ItineraryBuilder from './pages/ItineraryBuilder';
import Marketplace from './pages/Marketplace';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

// Component to conditionally render ChatBot
const ChatBotWrapper = () => {
  const location = useLocation();
  const { user } = useAuth();
  
  // Don't show chatbot on itinerary builder page
  const hideChatBot = location.pathname === '/itinerary';
  
  // Only show chatbot if user is logged in and not on itinerary page
  return (!hideChatBot && user) ? <ChatBot /> : null;
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/itinerary" element={<ItineraryBuilder />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
            <Footer />
            {/* Chatbot - shown on all pages except /itinerary */}
            <ChatBotWrapper />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
