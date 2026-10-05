@echo off
title Mee Shine Jewels - Production Preview
color 06
echo ======================================================================
echo           MEE SHINE JEWELS - PRODUCTION BUILD PREVIEW
echo ======================================================================
echo.
echo Launching Production Preview in your browser...
echo.
start http://localhost:4173/
call npm run preview -- --host --port 4173
pause
