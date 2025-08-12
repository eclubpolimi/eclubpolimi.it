# 🚀 Updated Contentful Upload Guide (Light/Dark Mode Structure)

## Your Content Type Structure
```
Content Type: Site Image Asset
Fields:
- key (Symbol, required, unique)
- image (Media, required) - Light mode image
- image-dark mode (Media, optional) - Dark mode variant
```

## 📸 Reorganized Upload Plan

### Single Image Entries (No Dark Mode Variant)
| Key | Light Mode Image | Description |
|-----|------------------|-------------|
| `homepage_hero_background` | homepage_hero_background.jpg | Main hero background |
| `homepage_section_events_image` | homepage_section_events_image.jpg | Events section image |
| `homepage_section_travel_image` | homepage_section_travel_image.jpg | Travel section image |
| `about_hero_background` | about_hero_background.png | About page hero |
| `pia_hero_background` | pia_hero_background.png | PIA page hero |
| `join_hero_background` | join_hero_background.jpg | Join page hero |
| `network_hero_background` | network_hero_background.jpg | Network page hero |
| `network_hero_logo` | network_hero_logo.png | Network hero logo |
| `trips_hero_background_fallback` | trips_hero_background_fallback.webp | Trips fallback image |

### Light/Dark Mode Pairs (Two Images Per Entry)
| Key | Light Mode Image | Dark Mode Image | Description |
|-----|------------------|-----------------|-------------|
| `homepage_hero_people` | homepage_hero_people_light.svg | homepage_hero_people_dark.png | People graphics |
| `startupchallenge_hero_logo` | startupchallenge_hero_logo_light.jpg | startupchallenge_hero_logo_dark.jpg | Startup Challenge logo |
| `branding_logo_white` | branding_logo_white_svg.svg | *(leave empty)* | White logo (SVG) |
| `sponsors_astra` | sponsors_astra_light.png | *(need dark variant)* | Astra sponsor |
| `sponsors_tutored` | sponsors_tutored_light.png | *(need dark variant)* | Tutored sponsor |
| `sponsors_polihub` | sponsors_polihub_light.png | *(need dark variant)* | Polihub sponsor |

### Events Carousel (5 separate entries)
| Key | Light Mode Image |
|-----|------------------|
| `events_carousel_image_1` | events_carousel_image_1.jpg |
| `events_carousel_image_2` | events_carousel_image_2.jpg |
| `events_carousel_image_3` | events_carousel_image_3.jpg |
| `events_carousel_image_4` | events_carousel_image_4.jpg |
| `events_carousel_image_5` | events_carousel_image_5.jpg |

### Branding Assets (4 separate entries)
| Key | Light Mode Image |
|-----|------------------|
| `branding_learn_network_build` | branding_learn_network_build.svg |
| `branding_logo_colors` | branding_logo_colors.png |
| `branding_logo_white_png` | branding_logo_white_png.png |
| `network_member_bocconi` | network_member_bocconi.png |
| `network_member_pavia` | network_member_pavia.png |

### PIA Lessons (4 separate entries)
| Key | Light Mode Image |
|-----|------------------|
| `pia_lesson_elevator_pitch` | pia_lesson_elevator_pitch.jpg |
| `pia_lesson_finance` | pia_lesson_finance.jpg |
| `pia_lesson_idea_protection` | pia_lesson_idea_protection.jpg |
| `pia_lesson_lean_thinking` | pia_lesson_lean_thinking.jpg |

### Sponsor Images (Individual entries, add dark variants if available)
| Key | Light Mode Image | Notes |
|-----|------------------|-------|
| `sponsors_astra` | sponsors_astra_light.png | Add dark variant if available |
| `sponsors_tutored` | sponsors_tutored_light.png | Add dark variant if available |
| `sponsors_polihub` | sponsors_polihub_light.png | Add dark variant if available |
| `sponsors_jemp` | sponsors_jemp.png | Single image (no dark variant) |

## 🎯 Total Entries to Create: ~25 entries
(Much fewer than 33 individual images since light/dark pairs are combined!)

## 📝 Upload Process:
1. Create entry with key `homepage_hero_background`
2. Upload `homepage_hero_background.jpg` to **image** field
3. Leave **image-dark mode** empty (no dark variant exists)
4. For `homepage_hero_people`:
   - Upload `homepage_hero_people_light.svg` to **image** field
   - Upload `homepage_hero_people_dark.png` to **image-dark mode** field

## 🚀 Benefits of This Structure:
- ✅ Single entry manages both light/dark variants
- ✅ Cleaner content management
- ✅ Easier to query in code: `asset.image` and `asset.imageDarkMode`
- ✅ Future-proof for adding dark variants later
