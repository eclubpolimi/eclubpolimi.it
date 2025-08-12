# 🎯 Final Image Naming Convention (Key Prefix Approach)

## Content Type Structure
```
Content Type: Site Image Asset
Fields:
- key (Symbol, required, unique) - Location/purpose-based identifier
- image (Media, required) - Light mode image
- image-dark mode (Media, optional) - Dark mode variant
```

## 📋 Naming Convention Rules

### **1. Static Page Elements**
Format: `{page}_{section}_{purpose}`
```
homepage_hero_background
homepage_hero_people
about_hero_background
pia_hero_background
join_hero_background
network_hero_background
network_hero_logo
trips_hero_fallback
```

### **2. Dynamic Collections (Key Prefix)**
Format: `{collection}__{descriptive_name}`

#### Events Carousel: `events_carousel__*`
```
events_carousel__networking_meetup
events_carousel__startup_demo
events_carousel__guest_speaker
events_carousel__workshop_session
events_carousel__team_building
```

#### PIA Lessons: `pia_lessons__*`
```
pia_lessons__elevator_pitch
pia_lessons__finance_basics
pia_lessons__idea_protection
pia_lessons__lean_thinking
```

#### Sponsors: `sponsors__*`
```
sponsors__astra
sponsors__tutored
sponsors__polihub
sponsors__jemp
```

#### Branding Assets: `branding__*`
```
branding__logo_white_svg
branding__logo_white_png
branding__logo_colors
branding__learn_network_build
```

#### Network Members: `network_members__*`
```
network_members__polimi
network_members__bocconi
network_members__pavia
```

#### Startup Challenge: `startupchallenge__*`
```
startupchallenge__hero_logo
```

## 🚀 Code Implementation Benefits

### Query Examples:
```tsx
// Get all carousel images (up to 20)
const carouselImages = assets
  .filter(asset => asset.key.startsWith('events_carousel__'))
  .slice(0, 20);

// Get all PIA lesson images
const piaLessons = assets
  .filter(asset => asset.key.startsWith('pia_lessons__'));

// Get all sponsor logos
const sponsors = assets
  .filter(asset => asset.key.startsWith('sponsors__'));

// Get specific static image
const heroBackground = assets
  .find(asset => asset.key === 'homepage_hero_background');
```

### Benefits:
- ✅ **Add carousel images** without touching code
- ✅ **Automatic loading** of collections
- ✅ **Descriptive names** instead of numbers
- ✅ **Flexible ordering** (by name, upload date, or custom field)
- ✅ **Future-proof** for new collections
- ✅ **Single content type** for everything

## 📁 Updated File Mapping

Since we're using double underscore `__` as separator for collections, I need to update the renamed files:

### Static Images (No Change)
- homepage_hero_background.jpg
- about_hero_background.png
- pia_hero_background.png
- join_hero_background.jpg
- network_hero_background.jpg
- network_hero_logo.png
- trips_hero_fallback.webp

### Collection Images (Rename Required)
| Old Filename | New Filename | Contentful Key |
|-------------|--------------|----------------|
| events_carousel_image_1.jpg | events_carousel__networking_meetup.jpg | `events_carousel__networking_meetup` |
| events_carousel_image_2.jpg | events_carousel__startup_demo.jpg | `events_carousel__startup_demo` |
| events_carousel_image_3.jpg | events_carousel__guest_speaker.jpg | `events_carousel__guest_speaker` |
| events_carousel_image_4.jpg | events_carousel__workshop_session.jpg | `events_carousel__workshop_session` |
| events_carousel_image_5.jpg | events_carousel__team_building.jpg | `events_carousel__team_building` |
| pia_lesson_elevator_pitch.jpg | pia_lessons__elevator_pitch.jpg | `pia_lessons__elevator_pitch` |
| pia_lesson_finance.jpg | pia_lessons__finance_basics.jpg | `pia_lessons__finance_basics` |
| pia_lesson_idea_protection.jpg | pia_lessons__idea_protection.jpg | `pia_lessons__idea_protection` |
| pia_lesson_lean_thinking.jpg | pia_lessons__lean_thinking.jpg | `pia_lessons__lean_thinking` |
| sponsors_astra_light.png | sponsors__astra.png | `sponsors__astra` |
| sponsors_tutored_light.png | sponsors__tutored.png | `sponsors__tutored` |
| sponsors_polihub_light.png | sponsors__polihub.png | `sponsors__polihub` |
| sponsors_jemp.png | sponsors__jemp.png | `sponsors__jemp` |

## 🛠️ Next Steps:
1. **Rename the collection files** with new convention
2. **Upload to Contentful** with the new keys
3. **Implement GraphQL queries** with prefix filtering
4. **Update components** to use dynamic loading

Ready to proceed with the file renaming?
