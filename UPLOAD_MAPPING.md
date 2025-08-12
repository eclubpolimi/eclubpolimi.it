# 📸 Complete Image Upload Mapping

## Your Contentful Upload Checklist

### Step 1: Create Content Type "Site Image Asset"
```
Content Type Name: Site Image Asset  
Content Type ID: siteImageAsset

Fields:
1. key (Symbol, required, unique) - The location-based identifier
2. image (Media, required) - Light mode image
3. image-dark mode (Media, optional) - Dark mode variant
```

### Step 2: Upload Images with These Exact Keys

#### **Homepage Images**
| Current File | New Contentful Key | Description |
|--------------|-------------------|-------------|
| `assets/homepage_hero.jpg` | `homepage_hero_background` | Main hero background |
| `assets/people_graphics.svg` | `homepage_hero_people_light` | People graphic (light mode) |
| `assets/people_graphics_darkmode.png` | `homepage_hero_people_dark` | People graphic (dark mode) |
| `assets/munich2.jpg` | `homepage_section_events_image` | Events section image |
| `assets/munich3.jpg` | `homepage_section_travel_image` | Travel section image |
| `assets/logo_startupchallenge.jpg` | `homepage_section_startup_logo` | Startup Challenge section logo |

#### **About Page Images**
| Current File | New Contentful Key | Description |
|--------------|-------------------|-------------|
| `netsonsImages/aboutUs_hero.png` | `about_hero_background` | About page hero background |

#### **PIA (Passion in Action) Images**
| Current File | New Contentful Key | Description |
|--------------|-------------------|-------------|
| `netsonsImages/pia_hero.png` | `pia_hero_background` | PIA page hero background |

#### **Join Page Images**
| Current File | New Contentful Key | Description |
|--------------|-------------------|-------------|
| `assets/homepage_hero.jpg` | `join_hero_background` | Join page hero background |

#### **Network Page Images**
| Current File | New Contentful Key | Description |
|--------------|-------------------|-------------|
| `netsonsImages/network_hero.jpg` | `network_hero_background` | Network page hero background |
| `assets/eclub-network.png` | `network_hero_logo` | Network hero logo overlay |

#### **Trips Page Images**
| Current File | New Contentful Key | Description |
|--------------|-------------------|-------------|
| `assets/travelMainBackground.webp` | `trips_hero_background_fallback` | Fallback when no trip image |

#### **Startup Challenge Images**
| Current File | New Contentful Key | Description |
|--------------|-------------------|-------------|
| `assets/logo_startupchallenge.jpg` | `startupchallenge_hero_logo_light` | Logo (light mode) |
| `assets/logo_startupchallenge_darkmode.jpg` | `startupchallenge_hero_logo_dark` | Logo (dark mode) |

#### **Events Carousel Images**
| Current File | New Contentful Key | Description |
|--------------|-------------------|-------------|
| `netsonsImages/carousel1.jpg` | `events_carousel_image_1` | Events carousel slide 1 |
| `netsonsImages/carousel2.jpg` | `events_carousel_image_2` | Events carousel slide 2 |
| `netsonsImages/carousel3.jpg` | `events_carousel_image_3` | Events carousel slide 3 |
| `netsonsImages/carousel4.jpg` | `events_carousel_image_4` | Events carousel slide 4 |
| `netsonsImages/carousel5.jpg` | `events_carousel_image_5` | Events carousel slide 5 |

#### **Sponsor/Footer Images**
| Current File | New Contentful Key | Description |
|--------------|-------------------|-------------|
| `netsonsImages/Astra.png` | `sponsors_astra_light` | Astra sponsor logo (light) |
| `netsonsImages/Astra_darkmode.png` | `sponsors_astra_dark` | Astra sponsor logo (dark) |
| `netsonsImages/Tutored.png` | `sponsors_tutored_light` | Tutored sponsor logo (light) |
| `netsonsImages/Tutored_darkmode.png` | `sponsors_tutored_dark` | Tutored sponsor logo (dark) |
| `netsonsImages/Polihub.png` | `sponsors_polihub_light` | Polihub sponsor logo (light) |
| `netsonsImages/Polihub_darkmode.png` | `sponsors_polihub_dark` | Polihub sponsor logo (dark) |
| `netsonsImages/Jemp.png` | `sponsors_jemp` | Jemp sponsor logo |

#### **Logo/Branding Assets**
| Current File | New Contentful Key | Description |
|--------------|-------------------|-------------|
| `assets/logo_learn_network_build.svg` | `branding_learn_network_build` | Learn Network Build logo |
| `assets/logo_white.svg` | `branding_logo_white_svg` | White logo SVG |
| `assets/logo_white.png` | `branding_logo_white_png` | White logo PNG |
| `assets/logo-colors.png` | `branding_logo_colors` | Colored logo |
| `assets/img-eclub-bocconi.png` | `network_member_bocconi` | E-Club Bocconi logo |
| `assets/img-eclub-pavia.png` | `network_member_pavia` | E-Club Pavia logo |

### Step 3: Quality Check
After uploading, verify:
- [ ] All keys exactly match the table above
- [ ] Images are optimized (Contentful will help with this)
- [ ] Alt text is provided for accessibility
- [ ] Light/dark variants are correctly paired

## 🚀 Once You're Done
Let me know when you've:
1. ✅ Created the "Site Assets" content type
2. ✅ Uploaded all images with the exact keys above
3. ✅ Published the content type and assets

Then I'll implement the code changes to use your new Contentful assets!
