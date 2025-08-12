@echo off
echo Copying and renaming images for Contentful upload...

REM Create upload directory if it doesn't exist
if not exist "contentful-upload-ready" mkdir "contentful-upload-ready"

REM Homepage Images
copy "src\assets\homepage_hero.jpg" "contentful-upload-ready\homepage_hero_background.jpg"
copy "src\assets\people_graphics.svg" "contentful-upload-ready\homepage_hero_people_light.svg"
copy "src\assets\people_graphics_darkmode.png" "contentful-upload-ready\homepage_hero_people_dark.png"
copy "src\assets\munich2.jpg" "contentful-upload-ready\homepage_section_events_image.jpg"
copy "src\assets\munich3.jpg" "contentful-upload-ready\homepage_section_travel_image.jpg"
copy "src\assets\logo_startupchallenge.jpg" "contentful-upload-ready\homepage_section_startup_logo.jpg"

REM About Page Images
copy "public\netsonsImages\aboutUs_hero.png" "contentful-upload-ready\about_hero_background.png"

REM PIA Page Images
copy "public\netsonsImages\pia_hero.png" "contentful-upload-ready\pia_hero_background.png"

REM Join Page Images (reusing homepage hero)
copy "src\assets\homepage_hero.jpg" "contentful-upload-ready\join_hero_background.jpg"

REM Network Page Images
copy "public\netsonsImages\network_hero.jpg" "contentful-upload-ready\network_hero_background.jpg"
copy "src\assets\eclub-network.png" "contentful-upload-ready\network_hero_logo.png"

REM Trips Page Images
copy "src\assets\travelMainBackground.webp" "contentful-upload-ready\trips_hero_background_fallback.webp"

REM Startup Challenge Images
copy "src\assets\logo_startupchallenge.jpg" "contentful-upload-ready\startupchallenge_hero_logo_light.jpg"
copy "src\assets\logo_startupchallenge_darkmode.jpg" "contentful-upload-ready\startupchallenge_hero_logo_dark.jpg"

REM Events Carousel Images
copy "public\netsonsImages\carousel1.jpg" "contentful-upload-ready\events_carousel_image_1.jpg"
copy "public\netsonsImages\carousel2.jpg" "contentful-upload-ready\events_carousel_image_2.jpg"
copy "public\netsonsImages\carousel3.jpg" "contentful-upload-ready\events_carousel_image_3.jpg"
copy "public\netsonsImages\carousel4.jpg" "contentful-upload-ready\events_carousel_image_4.jpg"
copy "public\netsonsImages\carousel5.jpg" "contentful-upload-ready\events_carousel_image_5.jpg"

REM Sponsor Images
copy "public\netsonsImages\Astra.png" "contentful-upload-ready\sponsors_astra_light.png"
copy "public\netsonsImages\Tutored.png" "contentful-upload-ready\sponsors_tutored_light.png"
copy "public\netsonsImages\Polihub.png" "contentful-upload-ready\sponsors_polihub_light.png"
copy "public\netsonsImages\Jemp.png" "contentful-upload-ready\sponsors_jemp.png"

REM Branding Assets
copy "src\assets\logo_learn_network_build.svg" "contentful-upload-ready\branding_learn_network_build.svg"
copy "src\assets\logo_white.svg" "contentful-upload-ready\branding_logo_white_svg.svg"
copy "src\assets\logo_white.png" "contentful-upload-ready\branding_logo_white_png.png"
copy "src\assets\logo-colors.png" "contentful-upload-ready\branding_logo_colors.png"
copy "src\assets\img-eclub-bocconi.png" "contentful-upload-ready\network_member_bocconi.png"
copy "src\assets\img-eclub-pavia.png" "contentful-upload-ready\network_member_pavia.png"

REM PIA Lesson Images (if they exist)
if exist "public\netsonsImages\elevator_pitch.jpg" copy "public\netsonsImages\elevator_pitch.jpg" "contentful-upload-ready\pia_lesson_elevator_pitch.jpg"
if exist "public\netsonsImages\finance.jpg" copy "public\netsonsImages\finance.jpg" "contentful-upload-ready\pia_lesson_finance.jpg"
if exist "public\netsonsImages\idea_protection.jpg" copy "public\netsonsImages\idea_protection.jpg" "contentful-upload-ready\pia_lesson_idea_protection.jpg"
if exist "public\netsonsImages\lean_thinking.jpg" copy "public\netsonsImages\lean_thinking.jpg" "contentful-upload-ready\pia_lesson_lean_thinking.jpg"

echo.
echo ✅ All images copied and renamed!
echo.
echo 📁 Check the 'contentful-upload-ready' folder
echo 🚀 Now you can drag and drop these files into Contentful
echo 💡 Use the filename (without extension) as the 'key' field
echo.
echo Example: homepage_hero_background.jpg → key: "homepage_hero_background"
echo.
pause
