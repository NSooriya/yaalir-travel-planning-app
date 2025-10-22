# 🚀 Installation & Running Guide

## Prerequisites Check

Before starting, ensure you have:
- ✅ **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- ✅ **npm** (comes with Node.js)
- ✅ A modern web browser (Chrome, Firefox, Edge, Safari)

### Verify Installation
Open PowerShell and run:
```powershell
node --version
npm --version
```
You should see version numbers. If not, install Node.js first.

---

## 🎯 Installation Steps

### Step 1: Navigate to Project Directory
```powershell
cd "C:\Users\nagar\OneDrive\Documents\College\FINAL YEAR PROJECT\tamilnadu-heritage-explorer"
```

### Step 2: Run Automated Setup (RECOMMENDED)
```powershell
.\setup.ps1
```

This script will:
- ✓ Check for Node.js and npm
- ✓ Install all server dependencies
- ✓ Install all client dependencies
- ✓ Show you what to do next

### Alternative: Manual Installation

If the setup script doesn't work, install manually:

#### Install Backend Dependencies
```powershell
cd server
npm install
```

Expected packages:
- express
- cors
- bcryptjs
- jsonwebtoken
- dotenv

#### Install Frontend Dependencies
```powershell
cd ../client
npm install
```

Expected packages:
- react
- react-dom
- react-router-dom
- axios
- i18next
- framer-motion
- tailwindcss
- vite

---

## 🏃‍♂️ Running the Application

### Method 1: Using Scripts (Easiest)

**Terminal 1 - Backend Server:**
```powershell
cd server
.\start-server.ps1
```
✅ Server will start on http://localhost:5000

**Terminal 2 - Frontend App:**
```powershell
cd client
.\start-client.ps1
```
✅ Frontend will start on http://localhost:5173

### Method 2: Manual Commands

**Terminal 1 - Backend:**
```powershell
cd "C:\Users\nagar\OneDrive\Documents\College\FINAL YEAR PROJECT\tamilnadu-heritage-explorer\server"
npm start
```

**Terminal 2 - Frontend:**
```powershell
cd "C:\Users\nagar\OneDrive\Documents\College\FINAL YEAR PROJECT\tamilnadu-heritage-explorer\client"
npm run dev
```

---

## 🌐 Access the Application

Once both servers are running:

1. **Open your browser**
2. **Navigate to:** http://localhost:5173
3. **You should see** the TamilNadu Heritage Explorer home page!

---

## 🎮 Getting Started with the App

### 1. Register a New Account
- Click "Login" in the navigation
- Click "Register" link
- Fill in your details:
  - Name: Your Name
  - Email: your@email.com
  - Password: (at least 6 characters)
- Click "Register"

### 2. Login
- Email: your@email.com
- Password: (your password)
- Click "Login"

### 3. Explore Features

#### 🏛️ Explore Heritage Sites
- Click "Explore" in navigation
- Browse 8 heritage sites and 5 crafts
- Filter by category
- Click bookmark icon to save favorites
- Click "View on Map" to see location

#### 🗺️ Create Itinerary
- Click "Plan Trip" in navigation
- Fill in the form:
  - Number of travelers
  - Duration (days)
  - Budget range
  - Select interests
- Click "Generate Itinerary"
- Review your custom plan
- Click "Save Itinerary" to keep it

#### 🛍️ Browse Marketplace
- Click "Marketplace" in navigation
- Browse 10 authentic handicrafts
- Read cultural background
- Click "Contact Seller" (demo feature)

#### 👤 View Your Profile
- Click "Profile" in navigation
- See your bookmarked places
- View saved itineraries
- Check your statistics

#### 🌍 Change Language
- Click globe icon in navigation
- Select language:
  - English
  - தமிழ் (Tamil)
  - 日本語 (Japanese)

#### 🌙 Toggle Dark Mode
- Click sun/moon icon in navigation
- Toggle between light and dark themes

---

## ⚠️ Troubleshooting

### Problem: npm not found
**Solution:** Install Node.js from https://nodejs.org/

### Problem: Port already in use
**Solutions:**
1. Kill the process using that port
2. Or change the port:
   - Backend: Edit `server/.env` → Change `PORT=5000` to another port
   - Frontend: Edit `client/vite.config.js` → Change `port: 5173` to another port

### Problem: Dependencies installation fails
**Solutions:**
1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again

### Problem: CORS errors
**Solution:** Make sure backend is running before starting frontend

### Problem: Can't access http://localhost:5173
**Solutions:**
1. Check if frontend server is running
2. Check terminal for errors
3. Try http://127.0.0.1:5173 instead

### Problem: API requests failing
**Solutions:**
1. Ensure backend server is running on port 5000
2. Check backend terminal for errors
3. Verify `client/vite.config.js` has correct proxy settings

---

## 🔍 Verification Checklist

After starting the application, verify:

- [ ] Backend server running on http://localhost:5000
- [ ] Frontend server running on http://localhost:5173
- [ ] Can access home page in browser
- [ ] Can register a new account
- [ ] Can login with credentials
- [ ] Can browse explore page
- [ ] Can generate itinerary
- [ ] Can bookmark places
- [ ] Can view profile
- [ ] Can change language
- [ ] Can toggle dark/light mode

---

## 📝 Important Notes

### Data Persistence
- User data is stored in `server/data/users.json`
- Bookmarks and itineraries are saved per user
- Data persists between server restarts

### Demo Mode
- "Contact Seller" in marketplace is a demo feature
- Shows alert instead of sending actual email

### Development Mode
- Frontend runs in development mode with hot reload
- Changes to code automatically reflect in browser
- Backend needs manual restart for code changes

---

## 🎓 Learning Resources

### React
- [React Documentation](https://react.dev/)
- [React Router](https://reactrouter.com/)

### TailwindCSS
- [Tailwind Documentation](https://tailwindcss.com/)

### Express.js
- [Express Documentation](https://expressjs.com/)

### JWT
- [JWT.io](https://jwt.io/)

---

## 📊 Server Endpoints Reference

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/me` - Get current user

### Heritage
- GET `/api/heritage` - Get all heritage sites
- GET `/api/crafts` - Get all crafts

### Bookmarks
- GET `/api/bookmarks` - Get user bookmarks
- POST `/api/bookmarks/add` - Add bookmark
- POST `/api/bookmarks/remove` - Remove bookmark

### Itinerary
- POST `/api/itinerary/generate` - Generate itinerary
- POST `/api/itinerary/save` - Save itinerary
- GET `/api/itinerary` - Get saved itineraries

### Marketplace
- GET `/api/marketplace` - Get all products

### Other
- GET `/api/lang` - Get language translations
- GET `/api/health` - Health check

---

## 🎉 Success!

If you can see the home page and interact with features, congratulations! 🎊

You've successfully set up the **TamilNadu Heritage Explorer** application.

### What's Next?
1. Explore all the features
2. Try creating different itineraries
3. Bookmark your favorite places
4. Test the multilingual support
5. Try dark mode

### Need Help?
Refer to:
- `README.md` - Complete documentation
- `PROJECT_SUMMARY.md` - Feature overview
- `QUICKSTART.md` - Quick reference

---

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review error messages in the terminal
3. Ensure all dependencies are installed
4. Verify Node.js version is 16 or higher

---

**Happy Exploring! 🏛️✨**
