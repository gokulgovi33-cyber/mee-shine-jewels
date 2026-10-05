@echo off
title Mee Shine Jewels - 3D Luxury Experience
color 06
echo ======================================================================
echo           MEE SHINE JEWELS - 3D LUXURY JEWELLERY EXPERIENCE
echo ======================================================================
echo.
echo Launching Mee Shine Jewels in your browser...
echo.
start http://localhost:5173/
echo Starting local server on http://localhost:5173/ ...
echo Keep this command prompt window open while browsing the store.
echo.
call npm run dev -- --host --port 5173
pause
