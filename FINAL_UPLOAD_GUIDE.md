# 🎯 Final Upload Guide - Key Prefix Convention

## ✅ Your Content Type Structure
```
Content Type: Site Image Asset
Fields:
- key (Symbol, required, unique)
- image (Media, required) - Light mode image  
- image-dark mode (Media, optional) - Dark mode variant
```

## 📋 Upload Strategy

### **Static Images (Individual Entries)**
| Key | Light Mode Image | Dark Mode Image | Usage |
|-----|------------------|-----------------|-------|
| `homepage_hero_background` | homepage_hero_background.jpg | *(empty)* | Homepage hero |
| `homepage_hero_people` | homepage_hero_people.svg | homepage_hero_people_dark.png | People graphics |
| `homepage_section_events_image` | homepage_section_events_image.jpg | *(empty)* | Events section |
| `homepage_section_travel_image` | homepage_section_travel_image.jpg | *(empty)* | Travel section |
| `homepage_section_startup_logo` | homepage_section_startup_logo.jpg | *(empty)* | Startup logo |
| `about_hero_background` | about_hero_background.png | *(empty)* | About page hero |
| `pia_hero_background` | pia_hero_background.png | *(empty)* | PIA page hero |
| `join_hero_background` | join_hero_background.jpg | *(empty)* | Join page hero |
| `network_hero_background` | network_hero_background.jpg | *(empty)* | Network hero bg |
| `network_hero_logo` | network_hero_logo.png | *(empty)* | Network hero logo |
| `trips_hero_background_fallback` | trips_hero_background_fallback.webp | *(empty)* | Trips fallback |
| `startupchallenge__hero_logo` | startupchallenge__hero_logo.jpg | startupchallenge__hero_logo_dark.jpg | SC logo |

### **Collection Images (Key Prefix Groups)**

#### Events Carousel: `events_carousel__*`
| Key | Image File |
|-----|------------|
| `events_carousel__networking_meetup` | events_carousel__networking_meetup.jpg |
| `events_carousel__startup_demo` | events_carousel__startup_demo.jpg |
| `events_carousel__guest_speaker` | events_carousel__guest_speaker.jpg |
| `events_carousel__workshop_session` | events_carousel__workshop_session.jpg |
| `events_carousel__team_building` | events_carousel__team_building.jpg |

#### PIA Lessons: `pia_lessons__*`
| Key | Image File |
|-----|------------|
| `pia_lessons__elevator_pitch` | pia_lessons__elevator_pitch.jpg |
| `pia_lessons__finance_basics` | pia_lessons__finance_basics.jpg |
| `pia_lessons__idea_protection` | pia_lessons__idea_protection.jpg |
| `pia_lessons__lean_thinking` | pia_lessons__lean_thinking.jpg |

#### Sponsors: `sponsors__*`
| Key | Image File |
|-----|------------|
| `sponsors__astra` | sponsors__astra.png |
| `sponsors__tutored` | sponsors__tutored.png |
| `sponsors__polihub` | sponsors__polihub.png |
| `sponsors__jemp` | sponsors__jemp.png |

#### Branding: `branding__*`
| Key | Image File |
|-----|------------|
| `branding__learn_network_build` | branding__learn_network_build.svg |
| `branding__logo_white_svg` | branding__logo_white_svg.svg |
| `branding__logo_white_png` | branding__logo_white_png.png |
| `branding__logo_colors` | branding__logo_colors.png |

#### Network Members: `network_members__*`
| Key | Image File |
|-----|------------|
| `network_members__bocconi` | network_members__bocconi.png |
| `network_members__pavia` | network_members__pavia.png |

## 🚀 Upload Tips

### For Static Images:
1. Key = exact filename without extension
2. Upload to **image** field
3. Add **image-dark mode** only if you have a dark variant

### For Collection Images:  
1. Key = filename without extension (with double underscore)
2. These will be queried by prefix in code
3. Order doesn't matter - code will handle sorting

## 🎯 Code Benefits (What I'll Implement)
```tsx
// Get all carousel images dynamically
const carouselImages = useImageAssets('events_carousel__');

// Get all PIA lessons
const piaLessons = useImageAssets('pia_lessons__');

// Get specific static image
const heroBackground = useImageAsset('homepage_hero_background');
```

## 📊 Summary
- **Total Entries**: ~25 entries
- **Collections**: 5 different prefixes
- **Static Images**: 12 individual entries
- **Flexible**: Add new carousel/lesson images anytime without code changes!

**Ready to upload? This new structure will make your site incredibly flexible! 🎉**
