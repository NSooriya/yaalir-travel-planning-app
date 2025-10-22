# TamilNadu Heritage Explorer 🏛️

A comprehensive full-stack web application for exploring Tamil Nadu's rich cultural heritage, ancient temples, and traditional crafts.

## 🌟 Features

- **User Authentication**: JWT-based secure login and registration
- **Heritage Explorer**: Browse historical sites, spiritual places, and traditional crafts
- **Itinerary Builder**: Create customized travel plans based on preferences
- **Marketplace**: Discover and purchase authentic Tamil Nadu handicrafts
- **Bookmarks**: Save favorite destinations
- **Multilingual Support**: English, Tamil (தமிழ்), and Japanese (日本語)
- **Dark/Light Mode**: Toggle between themes
- **Responsive Design**: Works seamlessly on all devices
- **Interactive Maps**: Google Maps integration for location viewing

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- TailwindCSS
- React Router DOM
- Axios
- i18next (Multilingual)
- Framer Motion (Animations)
- React Icons
- Leaflet Maps

### Backend
- Node.js
- Express.js
- JWT (Authentication)
- bcryptjs (Password Hashing)
- JSON File Storage (No Database)

## 📁 Project Structure

```
tamilnadu-heritage-explorer/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React Context (Auth, Theme)
│   │   ├── api.js         # API service layer
│   │   ├── i18n.js        # i18next configuration
│   │   ├── App.jsx        # Main App component
│   │   └── main.jsx       # Entry point
│   ├── index.html
│   ├── package.json
│   └── tailwind.config.js
│
└── server/                # Backend Node.js server
    ├── data/              # JSON data files
    │   ├── users.json
    │   ├── heritage.json
    │   ├── crafts.json
    │   ├── marketplace.json
    │   └── lang.json
    ├── routes/            # API routes
    │   ├── auth.js
    │   ├── bookmarks.js
    │   └── itinerary.js
    ├── utils/             # Utility functions
    │   ├── jwt.js
    │   └── fileHandler.js
    ├── server.js          # Express server
    └── package.json
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Step 1: Clone and Navigate
```powershell
cd "C:\Users\nagar\OneDrive\Documents\College\FINAL YEAR PROJECT\tamilnadu-heritage-explorer"
```

### Step 2: Install Server Dependencies
```powershell
cd server
npm install
```

### Step 3: Install Client Dependencies
```powershell
cd ../client
npm install
```

### Step 4: Start the Backend Server
```powershell
cd ../server
npm start
```
Server will run on: http://localhost:5000

### Step 5: Start the Frontend (Open new terminal)
```powershell
cd "C:\Users\nagar\OneDrive\Documents\College\FINAL YEAR PROJECT\tamilnadu-heritage-explorer\client"
npm run dev
```
Frontend will run on: http://localhost:5173

## 🎯 Usage

1. **Open your browser** and navigate to `http://localhost:5173`

2. **Register a new account** or use demo credentials:
   - Email: `demo@example.com`
   - Password: `demo123` (Note: You'll need to register first as the demo user needs proper password hash)

3. **Explore Features**:
   - Browse heritage sites on the Explore page
   - Create custom itineraries based on your preferences
   - Bookmark favorite places
   - Shop for traditional handicrafts
   - Switch languages (English/Tamil/Japanese)
   - Toggle dark/light mode

## 🗺️ Available Pages

- **Home** (`/`) - Hero section with featured destinations
- **Explore** (`/explore`) - Browse all heritage sites and crafts
- **Plan Trip** (`/itinerary`) - Create custom itineraries
- **Marketplace** (`/marketplace`) - Traditional handicrafts
- **Profile** (`/profile`) - User bookmarks and saved itineraries (Protected)
- **Login** (`/login`) - User authentication
- **Register** (`/register`) - New user registration

## 🎨 Color Palette

- **Maroon**: Primary brand color (#a02f2f)
- **Gold**: Accent color (#ffc225)
- **Ivory**: Background accent (#f0e08a)

## 📊 Sample Data

The application includes comprehensive data for:

### Heritage Sites (8 locations)
- Gangaikonda Cholapuram
- Mahabalipuram
- Fort St. George
- Pancha Rathas
- Arjuna's Penance
- Meenakshi Amman Temple
- Brihadeeswarar Temple
- Sri Ranganathaswamy Temple

### Traditional Crafts (5 types)
- Kovalam Village Handicrafts
- Bhavani Jamakalam
- Kanchipuram Silk
- Thanjavur Dolls
- Tirunelveli Halwa

### Marketplace Items (10 products)
- Silk Sarees
- Bronze Statues
- Tanjore Paintings
- Temple Jewelry
- Handwoven Carpets
- And more...

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Heritage
- `GET /api/heritage` - Get all heritage sites
- `GET /api/crafts` - Get all crafts

### Bookmarks
- `GET /api/bookmarks` - Get user bookmarks
- `POST /api/bookmarks/add` - Add bookmark
- `POST /api/bookmarks/remove` - Remove bookmark

### Itinerary
- `POST /api/itinerary/generate` - Generate itinerary
- `POST /api/itinerary/save` - Save itinerary
- `GET /api/itinerary` - Get saved itineraries

### Marketplace
- `GET /api/marketplace` - Get all products

## 🌐 Multilingual Support

The application supports three languages:
- **English** (en)
- **Tamil** (ta) - தமிழ்
- **Japanese** (ja) - 日本語

Switch languages using the globe icon in the navigation bar.

## 🎬 Features in Detail

### 1. User Authentication
- Secure JWT-based authentication
- Password hashing with bcrypt
- Protected routes for authenticated users

### 2. Itinerary Builder
- Dynamic itinerary generation based on:
  - Number of travelers
  - Trip duration
  - Budget range
  - Interests (Historical, Spiritual, Crafts, Food)
- Automatic cost calculation
- Save itineraries to profile

### 3. Bookmarks System
- One-click bookmarking of places
- View all bookmarks in profile
- Persistent across sessions

### 4. Dark Mode
- System-wide dark/light theme toggle
- Persistent theme preference
- Smooth transitions

### 5. Responsive Design
- Mobile-first approach
- Works on tablets, phones, and desktops
- Touch-friendly interface

## 🔧 Development

### Run Backend in Development Mode
```powershell
cd server
npm run dev
```

### Build Frontend for Production
```powershell
cd client
npm run build
```

## 📝 Notes

- This is a **demo application** using JSON file storage
- For production, consider migrating to a proper database (MongoDB, PostgreSQL)
- The marketplace "Contact Seller" is a demo feature
- Map integration uses Google Maps URLs (can be enhanced with API key)

## 🤝 Contributing

This is a college final year project. For improvements or suggestions, feel free to fork and enhance!

## 📄 License

ISC License - Free to use for educational purposes

## 👥 Credits

**Developed by**: [Your Name]
**Project**: Final Year Project
**Institution**: [Your College Name]
**Year**: 2024

## 🌐 Tourism Links

- [Tamil Nadu Tourism](https://www.tamilnadutourism.tn.gov.in/)
- [Incredible India](https://www.incredibleindia.org)
- [Archaeological Survey of India](https://asi.nic.in/)

---

**🎉 Enjoy exploring Tamil Nadu's magnificent heritage! 🏛️**
