@echo off
echo Renaming collection files to use key prefix convention...

cd contentful-upload-ready

REM Rename Events Carousel (using double underscore for collections)
ren "events_carousel_image_1.jpg" "events_carousel__networking_meetup.jpg"
ren "events_carousel_image_2.jpg" "events_carousel__startup_demo.jpg"
ren "events_carousel_image_3.jpg" "events_carousel__guest_speaker.jpg"
ren "events_carousel_image_4.jpg" "events_carousel__workshop_session.jpg"
ren "events_carousel_image_5.jpg" "events_carousel__team_building.jpg"

REM Rename PIA Lessons
ren "pia_lesson_elevator_pitch.jpg" "pia_lessons__elevator_pitch.jpg"
ren "pia_lesson_finance.jpg" "pia_lessons__finance_basics.jpg"
ren "pia_lesson_idea_protection.jpg" "pia_lessons__idea_protection.jpg"
ren "pia_lesson_lean_thinking.jpg" "pia_lessons__lean_thinking.jpg"

REM Rename Sponsors (remove _light suffix, will handle in Contentful)
ren "sponsors_astra_light.png" "sponsors__astra.png"
ren "sponsors_tutored_light.png" "sponsors__tutored.png"
ren "sponsors_polihub_light.png" "sponsors__polihub.png"
ren "sponsors_jemp.png" "sponsors__jemp.png"

REM Rename Branding Assets
ren "branding_learn_network_build.svg" "branding__learn_network_build.svg"
ren "branding_logo_white_svg.svg" "branding__logo_white_svg.svg"
ren "branding_logo_white_png.png" "branding__logo_white_png.png"
ren "branding_logo_colors.png" "branding__logo_colors.png"

REM Rename Network Members
ren "network_member_bocconi.png" "network_members__bocconi.png"
ren "network_member_pavia.png" "network_members__pavia.png"

REM Rename Startup Challenge Logo
ren "startupchallenge_hero_logo_light.jpg" "startupchallenge__hero_logo.jpg"
ren "startupchallenge_hero_logo_dark.jpg" "startupchallenge__hero_logo_dark.jpg"

REM Rename Homepage People (combining light/dark into single entry)
ren "homepage_hero_people_light.svg" "homepage_hero_people.svg"
ren "homepage_hero_people_dark.png" "homepage_hero_people_dark.png"

echo.
echo ✅ Collection files renamed with key prefix convention!
echo.
echo 📋 Updated Structure:
echo    Static Images: {page}_{section}_{purpose}
echo    Collections:   {collection}__{descriptive_name}
echo.
echo 🚀 Ready for Contentful upload with new naming convention!
echo.
cd ..
pause
