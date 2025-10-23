import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaBookmark, FaRoute, FaEdit, FaSave, FaDownload } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { authAPI, heritageAPI } from '../api';
import jsPDF from 'jspdf';

const Profile = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [allPlaces, setAllPlaces] = useState([]);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUserData();
    loadPlaces();
  }, []);

  const loadUserData = async () => {
    try {
      const response = await authAPI.getCurrentUser();
      setUserData(response.data);
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadPlaces = async () => {
    try {
      const [heritageRes, craftsRes] = await Promise.all([
        heritageAPI.getAll(),
        heritageAPI.getCrafts(),
      ]);
      setAllPlaces([...heritageRes.data, ...craftsRes.data]);
    } catch (error) {
      console.error('Error loading places:', error);
    }
  };

  const getBookmarkedPlaces = () => {
    if (!userData || !userData.bookmarks) return [];
    return allPlaces.filter(place => userData.bookmarks.includes(place.name));
  };

  const downloadItineraryPDF = (itinerary, index) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    let yPos = margin;

    // Helper to clean special characters
    const cleanText = (text) => {
      return text
        .replace(/[🙏💰✅🗺️🕉️🏛️]/g, '')
        .replace(/•/g, '-')
        .replace(/₹/g, 'Rs. ')
        .trim();
    };

    // Header with branding
    doc.setFillColor(122, 28, 28); // Chola Red
    doc.rect(0, 0, pageWidth, 45, 'F');
    
    // Add logo to PDF header
    try {
      const logoImg = new Image();
      logoImg.src = '/logo.png';
      doc.addImage(logoImg, 'PNG', margin, 8, 30, 30);
    } catch (error) {
      console.log('Logo not loaded in PDF');
    }
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(28);
    doc.setFont('helvetica', 'bold');
    doc.text('Yaalir', margin + 35, 22);
    
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.text('Tamil Nadu Heritage Explorer', margin + 35, 32);
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'italic');
    doc.text('Your Journey Through Time, Art, and Heritage', margin + 35, 39);

    yPos = 60;

    // Itinerary Title
    doc.setTextColor(122, 28, 28);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    const title = cleanText(itinerary.title || itinerary.summary?.packageName || `${itinerary.duration || 'Custom'} Day Tamil Nadu Tour`);
    const titleLines = doc.splitTextToSize(title, pageWidth - 2 * margin);
    doc.text(titleLines, margin, yPos);
    yPos += titleLines.length * 8 + 5;

    // Package Description
    const description = itinerary.description || itinerary.summary?.description;
    if (description) {
      doc.setFontSize(10);
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(80, 80, 80);
      const cleanDesc = cleanText(description);
      const splitDesc = doc.splitTextToSize(cleanDesc, pageWidth - 2 * margin);
      doc.text(splitDesc, margin, yPos);
      yPos += splitDesc.length * 5 + 8;
    } else {
      yPos += 3;
    }

    // Trip Summary Box
    doc.setFillColor(255, 248, 240);
    doc.setDrawColor(212, 175, 55);
    doc.setLineWidth(1);
    doc.roundedRect(margin, yPos, pageWidth - 2 * margin, 40, 3, 3, 'FD');
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(122, 28, 28);
    doc.text('Trip Summary', margin + 5, yPos + 10);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    
    const summaryY = yPos + 20;
    const col1X = margin + 5;
    const col2X = pageWidth / 2 + 5;
    
    // Left column
    if (itinerary.travelers) {
      doc.setFont('helvetica', 'bold');
      doc.text('Travelers:', col1X, summaryY);
      doc.setFont('helvetica', 'normal');
      doc.text(String(itinerary.travelers), col1X + 25, summaryY);
    }
    
    doc.setFont('helvetica', 'bold');
    doc.text('Duration:', col1X, summaryY + 7);
    doc.setFont('helvetica', 'normal');
    doc.text(`${itinerary.duration || 'N/A'} days`, col1X + 25, summaryY + 7);
    
    // Right column
    const totalPlaces = itinerary.summary?.totalPlaces;
    if (totalPlaces) {
      doc.setFont('helvetica', 'bold');
      doc.text('Total Places:', col2X, summaryY);
      doc.setFont('helvetica', 'normal');
      doc.text(String(totalPlaces), col2X + 28, summaryY);
    }
    
    const totalCost = itinerary.estimatedCost || itinerary.summary?.estimatedTotalCost;
    if (totalCost) {
      doc.setFont('helvetica', 'bold');
      doc.text('Total Cost:', col2X, summaryY + 7);
      doc.setFont('helvetica', 'normal');
      doc.text(`Rs. ${totalCost.toLocaleString('en-IN')}`, col2X + 28, summaryY + 7);
    }

    yPos += 50;

    // Day-wise Itinerary Section
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(122, 28, 28);
    doc.text('Detailed Itinerary', margin, yPos);
    yPos += 12;

    if (itinerary.itinerary && itinerary.itinerary.length > 0) {
      // Full itinerary with places
      itinerary.itinerary.forEach((day, dayIndex) => {
        if (yPos > pageHeight - 70) {
          doc.addPage();
          yPos = margin + 10;
        }

        doc.setFillColor(212, 175, 55);
        doc.roundedRect(margin, yPos, pageWidth - 2 * margin, 10, 2, 2, 'F');
        
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(255, 255, 255);
        const dayTitle = cleanText(`Day ${day.day || dayIndex + 1} - ${day.region || 'Travel Day'}`);
        doc.text(dayTitle, margin + 4, yPos + 7);
        yPos += 14;

        if (day.places && day.places.length > 0) {
          doc.setFontSize(10);

          day.places.forEach((place, placeIndex) => {
            if (yPos > pageHeight - 50) {
              doc.addPage();
              yPos = margin + 10;
            }

            doc.setFont('helvetica', 'bold');
            doc.setTextColor(0, 0, 0);
            doc.setFontSize(11);
            const placeName = cleanText(`${placeIndex + 1}. ${place.name || 'Unnamed Place'}`);
            const placeNameLines = doc.splitTextToSize(placeName, pageWidth - 2 * margin - 10);
            doc.text(placeNameLines, margin + 5, yPos);
            yPos += placeNameLines.length * 5 + 3;

            doc.setFont('helvetica', 'normal');
            doc.setTextColor(60, 60, 60);
            doc.setFontSize(9);
            
            if (place.location) {
              doc.setFont('helvetica', 'bold');
              doc.text('Location:', margin + 8, yPos);
              doc.setFont('helvetica', 'normal');
              const locationText = doc.splitTextToSize(cleanText(place.location), pageWidth - 2 * margin - 35);
              doc.text(locationText, margin + 28, yPos);
              yPos += locationText.length * 4 + 2;
            }
            
            if (place.duration) {
              doc.setFont('helvetica', 'bold');
              doc.text('Duration:', margin + 8, yPos);
              doc.setFont('helvetica', 'normal');
              doc.text(cleanText(place.duration), margin + 28, yPos);
              yPos += 5;
            }
            
            if (place.entry_fee) {
              doc.setFont('helvetica', 'bold');
              doc.text('Entry Fee:', margin + 8, yPos);
              doc.setFont('helvetica', 'normal');
              const feeText = doc.splitTextToSize(cleanText(place.entry_fee), pageWidth - 2 * margin - 35);
              doc.text(feeText, margin + 28, yPos);
              yPos += feeText.length * 4 + 2;
            }
            
            yPos += 4;
          });

          doc.setFillColor(255, 248, 240);
          doc.roundedRect(margin + 5, yPos, pageWidth - 2 * margin - 10, 8, 1, 1, 'F');
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(10);
          doc.setTextColor(122, 28, 28);
          const dayCost = day.estimatedCost || 0;
          doc.text(`Day ${day.day || dayIndex + 1} Cost: Rs. ${dayCost.toLocaleString('en-IN')} per person`, margin + 8, yPos + 5.5);
          yPos += 12;
        } else {
          doc.setFont('helvetica', 'italic');
          doc.setTextColor(120, 120, 120);
          doc.setFontSize(10);
          doc.text('Travel day - Moving between destinations', margin + 8, yPos);
          yPos += 12;
        }

        yPos += 3;
      });
    } else if (itinerary.description) {
      // Chatbot-style itinerary with text description
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(60, 60, 60);
      doc.setFontSize(10);
      
      const cleanDesc = cleanText(itinerary.description)
        .replace(/\*\*/g, '')
        .replace(/Would you like to accept.*$/gm, '')
        .trim();
      
      const lines = cleanDesc.split('\n');
      lines.forEach(line => {
        const trimmedLine = line.trim();
        if (!trimmedLine) {
          yPos += 4;
          return;
        }

        if (yPos > pageHeight - 30) {
          doc.addPage();
          yPos = margin + 10;
        }

        if (trimmedLine.match(/^Day\s+\d+/)) {
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(12);
          doc.setTextColor(122, 28, 28);
          yPos += 3;
        } else if (trimmedLine.startsWith('-') || trimmedLine.startsWith('•')) {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(10);
          doc.setTextColor(60, 60, 60);
        } else {
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(10);
          doc.setTextColor(0, 0, 0);
        }

        const textLines = doc.splitTextToSize(trimmedLine, pageWidth - 2 * margin);
        doc.text(textLines, margin, yPos);
        yPos += textLines.length * 5 + 2;
      });
    } else {
      doc.setFont('helvetica', 'italic');
      doc.setTextColor(120, 120, 120);
      doc.setFontSize(10);
      doc.text('No detailed itinerary available', margin, yPos);
    }

    // Add footer on all pages
    const totalPages = doc.internal.pages.length - 1;
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      const footerY = pageHeight - 10;
      
      doc.setDrawColor(212, 175, 55);
      doc.setLineWidth(0.5);
      doc.line(margin, footerY - 5, pageWidth - margin, footerY - 5);
      
      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100, 100, 100);
      doc.text(`Generated: ${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}`, margin, footerY);
      
      doc.setFont('helvetica', 'italic');
      const centerText = '(c) 2025 Yaalir - Tamil Nadu Heritage Explorer';
      const centerTextWidth = doc.getTextWidth(centerText);
      doc.text(centerText, (pageWidth - centerTextWidth) / 2, footerY);
      
      const pageText = `Page ${i} of ${totalPages}`;
      const pageTextWidth = doc.getTextWidth(pageText);
      doc.text(pageText, pageWidth - margin - pageTextWidth, footerY);
    }

    // Save the PDF
    const packageName = itinerary.title || itinerary.summary?.packageName || 'Itinerary';
    const safeName = cleanText(packageName).replace(/[^a-z0-9]/gi, '_').substring(0, 30);
    const fileName = `Yaalir_${safeName}_${itinerary.duration || 'Custom'}Days.pdf`;
    doc.save(fileName);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-tn-maroon-600"></div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600 dark:text-gray-400">Error loading profile</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-tn-maroon-700 dark:text-tn-gold-400 mb-4">
            {t('profile.title')}
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Info Card */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-tn-maroon-600 dark:bg-tn-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUser className="text-4xl text-white dark:text-gray-900" />
                </div>
                <h2 className="text-2xl font-bold text-tn-maroon-700 dark:text-tn-gold-400 mb-2">
                  {userData.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center">
                  <FaEnvelope className="mr-2" />
                  {userData.email}
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300 flex items-center">
                    <FaBookmark className="mr-2 text-tn-maroon-600 dark:text-tn-gold-400" />
                    Bookmarks
                  </span>
                  <span className="font-bold text-tn-maroon-700 dark:text-tn-gold-400">
                    {userData.bookmarks?.length || 0}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300 flex items-center">
                    <FaRoute className="mr-2 text-tn-maroon-600 dark:text-tn-gold-400" />
                    Itineraries
                  </span>
                  <span className="font-bold text-tn-maroon-700 dark:text-tn-gold-400">
                    {userData.itineraries?.length || 0}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bookmarks and Itineraries */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Bookmarked Places */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-tn-maroon-700 dark:text-tn-gold-400 mb-6 flex items-center">
                <FaBookmark className="mr-3" />
                {t('profile.bookmarks')}
              </h3>

              {getBookmarkedPlaces().length === 0 ? (
                <p className="text-gray-600 dark:text-gray-400 text-center py-8">
                  No bookmarks yet. Start exploring and save your favorite places!
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {getBookmarkedPlaces().map((place) => (
                    <div
                      key={place.id}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition-shadow"
                    >
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h4 className="font-bold text-tn-maroon-700 dark:text-tn-gold-400 mb-1">
                        {place.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {place.location}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Saved Itineraries */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-tn-maroon-700 dark:text-tn-gold-400 mb-6 flex items-center">
                <FaRoute className="mr-3" />
                {t('profile.itineraries')}
              </h3>

              {!userData.itineraries || userData.itineraries.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-400 text-center py-8">
                  No saved itineraries yet. Use the chatbot assistant to create your first travel plan!
                </p>
              ) : (
                <div className="space-y-4">
                  {userData.itineraries.map((itinerary, index) => (
                    <div
                      key={itinerary.id || index}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-tn-maroon-700 dark:text-tn-gold-400 mb-2">
                            {itinerary.title || itinerary.summary?.packageName || `${itinerary.duration} Day Trip`}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Created: {new Date(itinerary.createdAt).toLocaleDateString('en-IN', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                        <button
                          onClick={() => downloadItineraryPDF(itinerary, index)}
                          className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 dark:from-blue-400 dark:to-blue-500 dark:hover:from-blue-500 dark:hover:to-blue-600 text-white px-5 py-2.5 rounded-lg transition-all font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
                          title="Download PDF"
                        >
                          <FaDownload className="text-sm" />
                          <span>Download PDF</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                        {itinerary.travelers && (
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Travelers</p>
                            <p className="font-bold text-tn-maroon-700 dark:text-tn-gold-400">
                              {itinerary.travelers}
                            </p>
                          </div>
                        )}
                        <div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                          <p className="font-bold text-tn-maroon-700 dark:text-tn-gold-400">
                            {itinerary.duration} days
                          </p>
                        </div>
                        {(itinerary.estimatedCost || itinerary.summary?.estimatedTotalCost) && (
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Est. Cost</p>
                            <p className="font-bold text-tn-maroon-700 dark:text-tn-gold-400">
                              ₹{(itinerary.estimatedCost || itinerary.summary?.estimatedTotalCost)?.toLocaleString()}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="bg-tn-ivory-50 dark:bg-gray-700 p-4 rounded-lg">
                        {itinerary.summary && (
                          <>
                            {itinerary.summary.totalPlaces > 0 && (
                              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                                <span className="font-semibold">Places to Visit:</span> {itinerary.summary.totalPlaces}
                              </p>
                            )}
                            {itinerary.summary.description && (
                              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                                {itinerary.summary.description}
                              </p>
                            )}
                          </>
                        )}
                        {itinerary.description && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 whitespace-pre-line line-clamp-3">
                            {itinerary.description}
                          </p>
                        )}
                        {itinerary.itinerary && itinerary.itinerary.length > 0 && (
                          <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                            {itinerary.itinerary.length} days of detailed planning
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
