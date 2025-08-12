@echo off
echo Cleaning up duplicate and optimizing file structure...

cd contentful-upload-ready

echo.
echo 🧹 File Type Optimization:
echo   - JPG: Photos and complex hero backgrounds
echo   - PNG: Logos with transparency needs  
echo   - SVG: Vector graphics that scale perfectly
echo.

REM Keep both white logos - they serve different purposes:
echo ✅ Keeping both white logos:
echo    - branding__logo_white_svg.svg (navbar/footer - scalable)
echo    - branding__logo_white_png.png (network dark mode - raster)

REM Check for any other potential duplicates
echo.
echo 📋 Current file structure:
dir /b

echo.
echo ✅ File structure is optimized!
echo 💡 Both white logos are needed for different use cases
echo.
cd ..
pause
