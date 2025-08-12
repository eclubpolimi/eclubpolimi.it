# 🚀 Image Migration Plan: Local → Contentful

## Strategy: Content-First Asset Management

### Phase 1: Create Contentful Asset Schema
**New Content Types to Create:**

1. **Site Assets** (siteAssets)
   - `key` (Symbol) - Unique identifier (e.g., "homepage_hero", "pia_background")
   - `image` (Media) - The actual image
   - `altText` (Text) - Alternative text
   - `description` (Text) - Internal description for content managers

2. **Page Assets** (pageAssets) 
   - `pageName` (Symbol) - Which page it belongs to
   - `assets` (Reference, Multiple) - Links to Site Assets
   - `fallbackUrls` (Text) - Temporary fallback during migration

### Phase 2: Upload Strategy
**Location-Based Naming Convention:**
```
homepage_hero_background
homepage_section_people_light
homepage_section_people_dark
homepage_section_events_image_1
homepage_section_events_image_2
homepage_section_travel_image
homepage_section_startup_challenge_logo

pia_hero_background

about_hero_background

join_hero_background

network_hero_background
network_hero_logo

trips_hero_background (fallback)

startupchallenge_hero_logo_light
startupchallenge_hero_logo_dark

sponsors_footer_astra_light
sponsors_footer_astra_dark
sponsors_footer_tutored_light
sponsors_footer_tutored_dark
sponsors_footer_polihub_light
sponsors_footer_polihub_dark
sponsors_footer_jemp
```

### Phase 3: Code Migration
**Replace:**
```tsx
// Old
import homepageHero from 'assets/homepage_hero.jpg';
<Image src={homepageHero} />

// New - Location-based approach
<Image src={assets?.homepage_hero_background?.url || '/fallback.jpg'} />

// Example: Tomorrow you change Munich trip to Paris trip
// The image key stays: homepage_section_travel_image
// Only the actual image content changes in Contentful
```

**Benefits:**
- ✅ Future-proof naming (location-based, not content-based)
- ✅ When Munich becomes Paris, code doesn't change
- ✅ Clear mapping: each page section has predictable asset keys
- ✅ Content managers know exactly where each image appears
- ✅ No code changes when swapping image content

### Phase 4: Implementation Steps
1. Create new GraphQL queries for site assets
2. Create `useAssets()` hook for easy access
3. Update `Data.tsx` to use Contentful URLs
4. Migrate page-by-page with fallbacks
5. Remove local asset files once migration complete

### Phase 5: Enhanced Features
- Dynamic dark/light mode images
- A/B testing for hero images
- Seasonal content updates
- Multi-language image support
