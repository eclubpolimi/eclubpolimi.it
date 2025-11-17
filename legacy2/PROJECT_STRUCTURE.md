# E-Club Polimi Website - Project Structure

## 📁 Folder Organization

```
eclubpolimi/
├── src/
│   ├── components/              # Shared/reusable components
│   │   ├── ui/                 # shadCN UI library (46 components)
│   │   ├── FlipCard.tsx        # Flip card with hover effect
│   │   ├── Footer.tsx          # Site footer with links
│   │   ├── Navbar.tsx          # Navigation with dropdown menu
│   │   ├── TeamMemberCard.tsx  # Team member display card
│   │   └── ThemeToggle.tsx     # Dark mode toggle button
│   │
│   ├── pages/                   # Astro pages (file-based routing)
│   │   ├── home/               # Home page components
│   │   │   ├── Hero.tsx        # Hero section with CTA
│   │   │   ├── CoreValues.tsx  # Core values with flip cards
│   │   │   ├── WhatWeDo.tsx    # What we do section
│   │   │   └── Sponsors.tsx    # Sponsor logos section
│   │   │
│   │   ├── team/               # Team page components
│   │   │   └── OurTeamSection.tsx  # Team members grid
│   │   │
│   │   ├── events/             # Events page components
│   │   │   └── EventTimeline.tsx   # Events timeline
│   │   │
│   │   ├── index.astro         # Home page
│   │   ├── events.astro        # Events page
│   │   ├── join.astro          # Join/Apply page
│   │   ├── network.astro       # Network page
│   │   ├── our-team.astro      # Team page
│   │   ├── usc-2024.astro      # USC 2024 page
│   │   ├── usc-2025.astro      # USC 2025 page
│   │   └── usc-2026.astro      # USC 2026 (Coming Soon)
│   │
│   ├── layouts/                 # Layout templates
│   │   └── main.astro          # Main layout with nav & footer
│   │
│   ├── lib/                     # Utility libraries
│   │   ├── base-url.ts         # Base URL helper for routes
│   │   └── utils.ts            # Utility functions (cn, etc.)
│   │
│   ├── hooks/                   # React hooks
│   │   └── use-mobile.ts       # Mobile detection hook
│   │
│   ├── styles/                  # Global styles
│   │   └── global.css          # Global CSS with Tailwind
│   │
│   ├── site-components/         # Webflow Devlink components
│   │   └── (auto-generated)    # DevLink Provider & components
│   │
│   ├── assets/                  # Static assets
│   │   └── images/             # Image files
│   │
│   ├── env.d.ts                # TypeScript environment types
│   └── middleware.ts           # Astro middleware
│
├── generated/                   # Webflow generated files
│   ├── fonts.css               # Font imports
│   └── webflow.css             # Webflow design tokens
│
├── astro.config.mjs            # Astro configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies
├── wrangler.jsonc              # Cloudflare Workers config
└── README.md                   # Project documentation
```

## 🎯 Key Features

### Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, Core Values, What We Do, Sponsors |
| Events | `/events` | Timeline of past and upcoming events |
| Join | `/join` | Application page for students & partners |
| Network | `/network` | Network showcase with sponsors |
| Team | `/our-team` | Team members showcase |
| USC 2024 | `/usc-2024` | University Startup Challenge 2024 |
| USC 2025 | `/usc-2025` | University Startup Challenge 2025 |
| USC 2026 | `/usc-2026` | Coming Soon page for USC 2026 |

### Component Dependencies

```
Main Layout (main.astro)
├── Navbar.tsx
├── ThemeToggle.tsx
└── Footer.tsx

Home Page (index.astro)
├── Hero.tsx
├── CoreValues.tsx (uses FlipCard.tsx)
├── WhatWeDo.tsx (uses FlipCard.tsx)
└── Sponsors.tsx

Team Page (our-team.astro)
└── OurTeamSection.tsx (uses TeamMemberCard.tsx)

Events Page (events.astro)
└── EventTimeline.tsx
```

## 🎨 Styling Architecture

### CSS Layers
1. **Webflow Tokens** (`generated/webflow.css`) - Design system variables
2. **Global Styles** (`src/styles/global.css`) - Base styles & Tailwind
3. **Component Styles** - Scoped within components

### Theme Support
- Light & Dark mode fully implemented
- CSS variables for theming
- Theme toggle persists in localStorage
- Smooth transitions between themes

## 🚀 Tech Stack

- **Framework**: Astro 5.x
- **UI Library**: React 19.x
- **Styling**: Tailwind CSS 4.x
- **UI Components**: shadCN UI
- **Deployment**: Cloudflare Workers
- **Type Safety**: TypeScript

## 📦 Build & Development

```bash
# Development
npm run dev              # Start dev server on port 3000

# Production
npm run build           # Build for production
npm run preview         # Preview production build

# Deployment
npm run deploy          # Deploy to Cloudflare Workers
```

## ✅ Code Quality

- ✅ No console logs or debug statements
- ✅ Full TypeScript implementation
- ✅ Consistent naming conventions
- ✅ Component-based architecture
- ✅ Mobile-first responsive design
- ✅ Dark mode support throughout
- ✅ Optimized bundle size with tree-shaking
- ✅ No unused dependencies

## 📝 Naming Conventions

- **Components**: PascalCase (e.g., `FlipCard.tsx`)
- **Pages**: kebab-case (e.g., `usc-2024.astro`)
- **Utilities**: camelCase (e.g., `baseUrl.ts`)
- **Folders**: kebab-case (e.g., `site-components/`)

## 🔧 Configuration Files

- `astro.config.mjs` - Astro framework settings
- `tsconfig.json` - TypeScript compiler options
- `components.json` - shadCN UI configuration
- `wrangler.jsonc` - Cloudflare Workers settings
- `package.json` - Project dependencies

## 📊 Bundle Size (Optimized)

- Only used UI components are bundled
- Tree-shaking eliminates unused code
- Component-level hydration with Astro
- Static site generation for fast loading

## 🎯 Next Steps

1. **Content**: Add real images and content
2. **SEO**: Add meta tags and Open Graph
3. **Analytics**: Integrate tracking (optional)
4. **CMS**: Add Webflow CMS integration (optional)
5. **Forms**: Implement contact forms (optional)

---

**Last Updated**: November 2025  
**Status**: ✅ Production Ready
