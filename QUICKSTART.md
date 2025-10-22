# Quick Start Guide

## Prerequisites
- Node.js v16 or higher
- npm (comes with Node.js)

## Installation Steps

### Option 1: Automatic Setup (Recommended)
Run the setup script to install all dependencies:
```powershell
cd "C:\Users\nagar\OneDrive\Documents\College\FINAL YEAR PROJECT\tamilnadu-heritage-explorer"
.\setup.ps1
```

### Option 2: Manual Setup

#### Step 1: Install Server Dependencies
```powershell
cd "C:\Users\nagar\OneDrive\Documents\College\FINAL YEAR PROJECT\tamilnadu-heritage-explorer\server"
npm install
```

#### Step 2: Install Client Dependencies
```powershell
cd "C:\Users\nagar\OneDrive\Documents\College\FINAL YEAR PROJECT\tamilnadu-heritage-explorer\client"
npm install
```

## Running the Application

### Start Backend Server (Terminal 1)
```powershell
cd "C:\Users\nagar\OneDrive\Documents\College\FINAL YEAR PROJECT\tamilnadu-heritage-explorer\server"
npm start
```
Server runs on: http://localhost:5000

### Start Frontend (Terminal 2)
```powershell
cd "C:\Users\nagar\OneDrive\Documents\College\FINAL YEAR PROJECT\tamilnadu-heritage-explorer\client"
npm run dev
```
Frontend runs on: http://localhost:5173

## Quick Start Scripts

### Backend
```powershell
cd server
.\start-server.ps1
```

### Frontend
```powershell
cd client
.\start-client.ps1
```

## Access the Application
Open your browser and navigate to:
**http://localhost:5173**

## Demo Credentials
You can register a new account or use these for testing:
- Email: demo@example.com
- Password: (You'll need to register first)

## Features to Try
1. ✅ Register/Login
2. ✅ Browse heritage sites on Explore page
3. ✅ Create custom itineraries
4. ✅ Bookmark favorite places
5. ✅ Browse marketplace
6. ✅ Switch languages (EN/TA/JA)
7. ✅ Toggle dark/light mode

## Troubleshooting

### npm not found
Install Node.js from: https://nodejs.org/

### Port already in use
Change ports in:
- Backend: `server/.env` (PORT=5000)
- Frontend: `client/vite.config.js` (port: 5173)

### Dependencies issues
Delete node_modules folders and run:
```powershell
npm install
```

## Project Structure
```
tamilnadu-heritage-explorer/
├── client/          # React frontend
├── server/          # Express backend
├── README.md        # Full documentation
└── setup.ps1        # Setup script
```

## Support
For issues or questions, refer to README.md for detailed documentation.
