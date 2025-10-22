# TamilNadu Heritage Explorer - Start Frontend

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "Starting Frontend Development Server..." -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

Set-Location -Path "$PSScriptRoot"

Write-Host "Frontend will run on: http://localhost:5173" -ForegroundColor Green
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

npm run dev
