# 🎯 Single Underscore Naming Convention (29 Entries)

## Updated Naming: Double Underscore → Single Underscore

### **Static Images (12 entries)**
| Old Key (Double __) | New Key (Single _) | Usage |
|---------------------|-------------------|-------|
| `homepage_hero_background` | `homepage_hero_background` | ✅ No change |
| `homepage_hero_people` | `homepage_hero_people` | ✅ No change |
| `homepage_section_events_image` | `homepage_section_events_image` | ✅ No change |
| `homepage_section_travel_image` | `homepage_section_travel_image` | ✅ No change |
| `homepage_section_startup_logo` | `homepage_section_startup_logo` | ✅ No change |
| `about_hero_background` | `about_hero_background` | ✅ No change |
| `pia_hero_background` | `pia_hero_background` | ✅ No change |
| `join_hero_background` | `join_hero_background` | ✅ No change |
| `network_hero_background` | `network_hero_background` | ✅ No change |
| `network_hero_logo` | `network_hero_logo` | ✅ No change |
| `trips_hero_background_fallback` | `trips_hero_background_fallback` | ✅ No change |
| `startupchallenge_hero_logo` | `startupchallenge_hero_logo` | ✅ No change |

### **Collection Images (17 entries)**
| Old Key (Double __) | New Key (Single _) | Collection |
|---------------------|-------------------|------------|
| `events_carousel__networking_meetup` | `events_carousel_networking_meetup` | Events |
| `events_carousel__startup_demo` | `events_carousel_startup_demo` | Events |
| `events_carousel__guest_speaker` | `events_carousel_guest_speaker` | Events |
| `events_carousel__workshop_session` | `events_carousel_workshop_session` | Events |
| `events_carousel__team_building` | `events_carousel_team_building` | Events |
| `pia_lessons__elevator_pitch` | `pia_lessons_elevator_pitch` | PIA |
| `pia_lessons__finance_basics` | `pia_lessons_finance_basics` | PIA |
| `pia_lessons__idea_protection` | `pia_lessons_idea_protection` | PIA |
| `pia_lessons__lean_thinking` | `pia_lessons_lean_thinking` | PIA |
| `sponsors__astra` | `sponsors_astra` | Sponsors |
| `sponsors__tutored` | `sponsors_tutored` | Sponsors |
| `sponsors__polihub` | `sponsors_polihub` | Sponsors |
| `sponsors__jemp` | `sponsors_jemp` | Sponsors |
| `branding__learn_network_build` | `branding_learn_network_build` | Branding |
| `branding__logo_white_svg` | `branding_logo_white_svg` | Branding |
| `branding__logo_white_png` | `branding_logo_white_png` | Branding |
| `branding__logo_colors` | `branding_logo_colors` | Branding |
| `network_members__bocconi` | `network_members_bocconi` | Network |
| `network_members__pavia` | `network_members_pavia` | Network |

**Total: 12 static + 17 collection = 29 entries** ✅

## 🚀 Code Usage Examples

### Get Static Images:
```tsx
const { getUrl } = useImageAsset('homepage_hero_background');
const heroUrl = getUrl(); // Light mode
const heroDarkUrl = getUrl(true); // Dark mode (if available)
```

### Get Collection Images:
```tsx
const { assets } = useImageAssetsByPrefix('events_carousel_');
// Returns all carousel images for dynamic loading

const { assets } = useImageAssetsByPrefix('sponsors_');
// Returns all sponsor logos
```

### Replace Hardcoded Images:
```tsx
// Old
import heroImage from 'assets/homepage_hero.jpg';

// New
const { getUrl } = useImageAsset('homepage_hero_background');
const heroImage = getUrl();
```

## 📝 Implementation Priority:
1. **Homepage** - Most visible, test the system
2. **About page** - Hero background
3. **Sponsors** - Dynamic sponsor loading
4. **Events carousel** - Dynamic image collection
5. **Remaining pages** - Network, PIA, Join, etc.

Ready to start implementing! 🎉
