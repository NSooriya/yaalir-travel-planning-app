# TamilNadu Heritage Explorer - Setup Script
# Run this script to install all dependencies

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "TamilNadu Heritage Explorer - Setup" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "Checking for Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js is not installed!" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

# Check if npm is installed
Write-Host "Checking for npm..." -ForegroundColor Yellow
try {
    $npmVersion = npm --version
    Write-Host "✓ npm found: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ npm is not installed!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "Installing Server Dependencies..." -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan

Set-Location -Path "$PSScriptRoot\server"
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Server dependencies installed successfully!" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to install server dependencies!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "Installing Client Dependencies..." -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan

Set-Location -Path "$PSScriptRoot\client"
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Client dependencies installed successfully!" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to install client dependencies!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=====================================" -ForegroundColor Green
Write-Host "Setup completed successfully!" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green
Write-Host ""
Write-Host "To run the application:" -ForegroundColor Cyan
Write-Host "1. Start the backend server:" -ForegroundColor White
Write-Host "   cd server" -ForegroundColor Yellow
Write-Host "   npm start" -ForegroundColor Yellow
Write-Host ""
Write-Host "2. In a new terminal, start the frontend:" -ForegroundColor White
Write-Host "   cd client" -ForegroundColor Yellow
Write-Host "   npm run dev" -ForegroundColor Yellow
Write-Host ""
Write-Host "3. Open your browser and visit:" -ForegroundColor White
Write-Host "   http://localhost:5173" -ForegroundColor Yellow
Write-Host ""
