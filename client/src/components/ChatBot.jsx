import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane, FaRobot, FaDownload } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import jsPDF from 'jspdf';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Vanakkam! 🙏 I'm your Tamil Nadu Heritage Travel Assistant. I can help you plan your perfect itinerary! Just tell me:\n\n• How many days do you have?\n• What interests you? (temples, monuments, crafts, food)\n• Your travel style? (budget, standard, luxury)\n\nWhat would you like to explore?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentItinerary, setCurrentItinerary] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const { user } = useAuth();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const generateItineraryResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check if it's itinerary-related
    const itineraryKeywords = [
      'trip', 'travel', 'visit', 'tour', 'itinerary', 'plan', 'days', 'places',
      'temple', 'monument', 'heritage', 'craft', 'food', 'chennai', 'madurai',
      'thanjavur', 'mahabalipuram', 'kanchipuram', 'recommend', 'suggest',
      'where', 'what', 'how', 'budget', 'cost', 'package'
    ];

    const isItineraryRelated = itineraryKeywords.some(keyword => 
      lowerMessage.includes(keyword)
    );

    if (!isItineraryRelated) {
      return { text: "I'm a specialized travel planning assistant for Tamil Nadu heritage sites. I can only help you plan your itinerary and suggest places to visit. For other queries, please contact our support team. 😊\n\nWould you like me to help plan your Tamil Nadu trip?", type: 'text' };
    }

    // Extract trip duration
    const durationMatch = lowerMessage.match(/(\d+)\s*(day|days)/);
    const days = durationMatch ? parseInt(durationMatch[1]) : null;

    // Detect interests
    const interests = {
      temples: /temple|spiritual|religious|worship|god|deity/i.test(lowerMessage),
      monuments: /monument|historical|fort|palace|architecture|heritage/i.test(lowerMessage),
      crafts: /craft|art|silk|bronze|painting|artisan|handicraft/i.test(lowerMessage),
      food: /food|cuisine|dish|eat|restaurant|halwa/i.test(lowerMessage),
      beaches: /beach|sea|shore|coast/i.test(lowerMessage)
    };

    // Detect budget level
    let budgetLevel = 'standard';
    if (/budget|cheap|affordable|economical/i.test(lowerMessage)) {
      budgetLevel = 'budget';
    } else if (/luxury|premium|deluxe|high.end/i.test(lowerMessage)) {
      budgetLevel = 'luxury';
    }

    // Generate response based on days
    if (days === 3) {
      const itinerary = {
        title: "3-Day Chennai Weekend Package",
        duration: 3,
        cost: 8000,
        description: `Great choice! Here's a perfect **3-Day Chennai Weekend Package**:\n\n**Day 1 - Chennai City**\n• Fort St. George (2 hours)\n• San Thome Basilica (1 hour)\n• Marina Beach evening walk\n💰 Estimated: ₹2,500/person\n\n**Day 2 - Mahabalipuram (60km)**\n• Shore Temple at sunrise\n• Pancha Rathas\n• Arjuna's Penance\n💰 Estimated: ₹3,000/person\n\n**Day 3 - Kanchipuram & Return**\n• Kanchi Kamakshi Temple\n• Silk saree shopping\n• Return to Chennai\n💰 Estimated: ₹2,500/person\n\n**Total Cost: ₹8,000/person**\n\nAll locations are within 60km radius - perfect for a weekend!\n\n📥 Click the Download button below to get your itinerary as PDF!`,
        details: {
          day1: "Chennai City - Fort St. George, San Thome Basilica, Marina Beach",
          day2: "Mahabalipuram - Shore Temple, Pancha Rathas, Arjuna's Penance",
          day3: "Kanchipuram & Return - Kanchi Kamakshi Temple, Silk saree shopping"
        }
      };
      setCurrentItinerary(itinerary);
      return { text: itinerary.description, type: 'itinerary', data: itinerary };
    } else if (days === 5) {
      const itinerary = {
        title: "5-Day Temple Circuit Package",
        duration: 5,
        cost: 14000,
        description: `Excellent! Here's a **5-Day Temple Circuit Package**:\n\n**Day 1** - Chennai (Fort St. George, San Thome)\n**Day 2** - Mahabalipuram monuments\n**Day 3** - Travel to Thanjavur via Gangaikonda Cholapuram\n**Day 4** - Thanjavur (Brihadeeswara Temple, Palace, crafts)\n**Day 5** - Return via Chidambaram\n\n**Total Distance**: ~650km\n**Estimated Cost**: ₹14,000/person (${budgetLevel} package)\n\nThis covers the iconic Chola heritage trail!\n\n📥 Click the Download button below to get your itinerary as PDF!`,
        details: {
          day1: "Chennai - Fort St. George, San Thome",
          day2: "Mahabalipuram monuments",
          day3: "Travel to Thanjavur via Gangaikonda Cholapuram",
          day4: "Thanjavur - Brihadeeswara Temple, Palace, crafts",
          day5: "Return via Chidambaram"
        }
      };
      setCurrentItinerary(itinerary);
      return { text: itinerary.description, type: 'itinerary', data: itinerary };
    } else if (days === 7) {
      const itinerary = {
        title: "7-Day Grand Heritage Package",
        duration: 7,
        cost: 22000,
        description: `Perfect for a comprehensive tour! **7-Day Grand Heritage Package**:\n\n**Days 1-2** - Chennai & Mahabalipuram\n**Day 3** - Drive to Thanjavur (340km)\n**Days 4-5** - Thanjavur & surrounding temples\n**Day 6** - Chettinad heritage & Madurai\n**Day 7** - Meenakshi Temple & return\n\n**Highlights**: Temples, palaces, crafts, Chettinad cuisine\n**Cost**: ₹19,000-25,000/person\n\n📥 Click the Download button below to get your itinerary as PDF!`,
        details: {
          day1_2: "Chennai & Mahabalipuram",
          day3: "Drive to Thanjavur (340km)",
          day4_5: "Thanjavur & surrounding temples",
          day6: "Chettinad heritage & Madurai",
          day7: "Meenakshi Temple & return"
        }
      };
      setCurrentItinerary(itinerary);
      return { text: itinerary.description, type: 'itinerary', data: itinerary };
    } else if (days === 10 || days >= 10) {
      const itinerary = {
        title: "10-Day Ultimate Tamil Nadu Experience",
        duration: 10,
        cost: 31500,
        description: `Amazing! The **10-Day Ultimate Tamil Nadu Experience**:\n\nThis covers the complete circuit from Chennai to Kanyakumari:\n• Chennai → Mahabalipuram → Pondicherry\n• Thanjavur → Trichy → Madurai\n• Rameshwaram → Kanyakumari\n• Return via Tirunelveli & crafts villages\n\n**19 Heritage Sites** | **Complete North-South Circuit**\n**Cost**: ₹28,000-35,000/person\n\nYou'll experience temples, monuments, beaches, crafts, and authentic Tamil cuisine!\n\n📥 Click the Download button below to get your itinerary as PDF!`,
        details: {
          route: "Chennai → Mahabalipuram → Pondicherry → Thanjavur → Trichy → Madurai → Rameshwaram → Kanyakumari → Tirunelveli",
          sites: 19,
          highlights: "temples, monuments, beaches, crafts, authentic Tamil cuisine"
        }
      };
      setCurrentItinerary(itinerary);
      return { text: itinerary.description, type: 'itinerary', data: itinerary };
    }

    // General recommendation if no specific days mentioned
    if (interests.temples && interests.crafts) {
      return { text: `Based on your interest in **temples and traditional crafts**, I recommend:\n\n**Best Destinations**:\n• Thanjavur - Brihadeeswara Temple + Paintings & Bronze works\n• Swamimalai - Bronze sculpture workshops\n• Kumbakonam - Temple circuit + crafts\n• Kanchipuram - Temples + Silk sarees\n\n**Ideal Duration**: 5-7 days\n**Budget**: ₹15,000-20,000/person\n\nHow many days do you have for your trip?`, type: 'text' };
    } else if (interests.temples) {
      return { text: `For a **spiritual temple tour**, I suggest:\n\n🕉️ **Must-Visit Temples**:\n• Meenakshi Amman Temple, Madurai\n• Brihadeeswara Temple, Thanjavur\n• Shore Temple, Mahabalipuram\n• Ramanathaswamy Temple, Rameshwaram\n\n**5-7 days** would be ideal to cover these properly.\n\nWhat's your preferred trip duration?`, type: 'text' };
    } else if (interests.monuments) {
      return { text: `Great! For **historical monuments and architecture**:\n\n🏛️ **Top Picks**:\n• Mahabalipuram Group of Monuments (UNESCO)\n• Thanjavur Maratha Palace\n• Gangaikonda Cholapuram\n• Fort St. George, Chennai\n• Chettinad Mansions\n\n**3-5 days** covers major sites.\n\nTell me your trip duration and I'll create a detailed itinerary!`, type: 'text' };
    }

    // Default response
    return { text: `I'd love to help plan your Tamil Nadu heritage trip! 🏛️\n\nTo create the perfect itinerary, please tell me:\n\n1️⃣ **How many days** do you have? (3, 5, 7, or 10 days)\n2️⃣ **What interests you?**\n   • Temples & spiritual sites\n   • Historical monuments\n   • Traditional crafts\n   • Local cuisine\n3️⃣ **Budget preference?** (Budget/Standard/Luxury)\n\nShare your preferences and I'll craft a personalized itinerary for you!`, type: 'text' };
  };

  const downloadItinerary = (itinerary) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const maxWidth = pageWidth - 2 * margin;
    let yPosition = 20;

    // Helper function to clean text from emojis and special characters
    const cleanText = (text) => {
      return text
        .replace(/[🙏💰✅🗺️🕉️🏛️]/g, '') // Remove emojis
        .replace(/•/g, '-') // Replace bullet with dash
        .replace(/₹/g, 'Rs. ') // Replace rupee symbol
        .trim();
    };

    // Helper function to add text with word wrap
    const addText = (text, size = 12, style = 'normal', color = [0, 0, 0]) => {
      const cleanedText = cleanText(text);
      if (!cleanedText) return;

      doc.setFontSize(size);
      doc.setFont('helvetica', style);
      doc.setTextColor(...color);
      
      const lines = doc.splitTextToSize(cleanedText, maxWidth);
      lines.forEach(line => {
        if (yPosition > 280) {
          doc.addPage();
          yPosition = 20;
        }
        doc.text(line, margin, yPosition);
        yPosition += size * 0.5;
      });
      yPosition += 3;
    };

    // Header - Yaalir Branding
    doc.setFillColor(122, 28, 28); // Chola Red
    doc.rect(0, 0, pageWidth, 40, 'F');
    
    // Add logo to PDF header
    try {
      const logoImg = new Image();
      logoImg.src = '/logo.png';
      doc.addImage(logoImg, 'PNG', 15, 5, 30, 30);
    } catch (error) {
      console.log('Logo not loaded in PDF');
    }
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('Yaalir Heritage', pageWidth / 2, 17, { align: 'center' });
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Tamil Nadu Travel Itinerary', pageWidth / 2, 28, { align: 'center' });

    yPosition = 55;

    // Title
    addText(itinerary.title, 18, 'bold', [122, 28, 28]);
    yPosition += 5;

    // Divider line
    doc.setDrawColor(122, 28, 28);
    doc.setLineWidth(0.5);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 8;

    // Summary
    addText(`Duration: ${itinerary.duration} days`, 12, 'bold');
    addText(`Estimated Cost: Rs. ${itinerary.cost.toLocaleString()}/person`, 12, 'bold');
    yPosition += 5;

    // Description - Parse and format
    const description = itinerary.description
      .replace(/\*\*/g, '')
      .replace(/📥.*Click the Download button.*$/gms, '')
      .replace(/✅.*$/gm, '')
      .replace(/Type "Yes".*$/gm, '')
      .trim();

    const lines = description.split('\n');
    lines.forEach(line => {
      const trimmedLine = line.trim();
      if (!trimmedLine) {
        yPosition += 3;
        return;
      }

      // Check if it's a header (contains "Day" or ends with ":")
      if (trimmedLine.match(/^Day\s+\d+/) || trimmedLine.match(/^\*\*.*\*\*$/)) {
        yPosition += 3;
        addText(trimmedLine, 13, 'bold', [122, 28, 28]);
      } 
      // Check if it's a bullet point or dash point
      else if (trimmedLine.startsWith('•') || trimmedLine.startsWith('-')) {
        addText(trimmedLine, 11, 'normal', [60, 60, 60]);
      }
      // Check if it's a cost line
      else if (trimmedLine.match(/^💰|Estimated:|Rs\./)) {
        addText(trimmedLine, 10, 'italic', [80, 80, 80]);
      }
      // Regular text
      else {
        addText(trimmedLine, 11, 'normal');
      }
    });

    // Footer
    const footerY = doc.internal.pageSize.getHeight() - 20;
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, footerY - 5, pageWidth - margin, footerY - 5);
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.setFont('helvetica', 'italic');
    doc.text('Generated by Yaalir AI Heritage Travel Assistant', pageWidth / 2, footerY, { align: 'center' });
    doc.text(`Date: ${new Date().toLocaleDateString('en-IN')}`, pageWidth / 2, footerY + 5, { align: 'center' });

    // Save the PDF
    doc.save(`${itinerary.title.replace(/\s+/g, '_')}.pdf`);
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = generateItineraryResponse(currentInput);

      const botMessage = {
        id: messages.length + 2,
        text: botResponse.text,
        sender: 'bot',
        timestamp: new Date(),
        hasActions: botResponse.type === 'itinerary',
        itineraryData: botResponse.data
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#7A1C1C] to-[#5A1515] dark:from-[#D4AF37] dark:to-[#B8941F] rounded-full shadow-2xl flex items-center justify-center text-white dark:text-gray-900 hover:shadow-glow-gold transition-shadow"
            aria-label="Open chat assistant"
          >
            <FaComments className="text-2xl" />
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-[calc(100vw-2rem)] md:w-96 h-[70vh] md:h-[600px] max-h-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#7A1C1C] to-[#5A1515] dark:from-[#D4AF37] dark:to-[#B8941F] p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-md">
                  <FaRobot className="text-[#7A1C1C] dark:text-[#D4AF37] text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-white dark:text-gray-900">Yaalir Assistant</h3>
                  <p className="text-xs text-white/90 dark:text-gray-800/90">Heritage Travel Planner</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white dark:text-gray-900 hover:bg-white/20 dark:hover:bg-black/10 p-2 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-950">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm ${
                      message.sender === 'user'
                        ? 'bg-[#7A1C1C] dark:bg-[#D4AF37] text-white dark:text-gray-900'
                        : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-2 ${
                      message.sender === 'user' 
                        ? 'text-white/80 dark:text-gray-900/70' 
                        : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                  
                  {/* Action Buttons for Itinerary */}
                  {message.hasActions && message.itineraryData && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-2"
                    >
                      <button
                        onClick={() => downloadItinerary(message.itineraryData)}
                        className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 dark:from-blue-400 dark:to-blue-500 dark:hover:from-blue-500 dark:hover:to-blue-600 text-white rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-lg transform hover:scale-105"
                      >
                        <FaDownload className="text-sm" />
                        Download PDF
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl px-4 py-3 shadow-sm">
                    <div className="flex space-x-2">
                      <motion.div
                        className="w-2 h-2 bg-[#7A1C1C] dark:bg-[#D4AF37] rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-[#7A1C1C] dark:bg-[#D4AF37] rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-[#7A1C1C] dark:bg-[#D4AF37] rounded-full"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about your trip..."
                  className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-[#7A1C1C] dark:focus:ring-[#D4AF37] focus:border-transparent outline-none text-sm placeholder-gray-500 dark:placeholder-gray-400"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className="w-12 h-12 bg-[#7A1C1C] dark:bg-[#D4AF37] text-white dark:text-gray-900 rounded-xl flex items-center justify-center hover:bg-[#5A1515] dark:hover:bg-[#B8941F] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
                  aria-label="Send message"
                >
                  <FaPaperPlane className="text-lg" />
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                Powered by Yaalir AI • Heritage Travel Expert
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
