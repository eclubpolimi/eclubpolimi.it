# E-Club Polimi Website

## ⚠️ Important Notice

This is the official website for the **Entrepreneurship Club at Politecnico di Milano (E-Club Polimi)**. The website showcases our mission, events, team members, and activities.

This repository has been shared with you by **Giuseppe Ingrassia (Consultant)** for collaboration purposes. For any questions or support, contact Giuseppe via WhatsApp.

---

## 🚀 Features

- 🏠 **Home Page** - Hero section, core values, what we do, and sponsors
- 👥 **Team Page** - Meet our team members with interactive flip cards
- 📅 **Events Page** - Timeline of our events and activities
- 🎓 **Class Pages** - Dedicated pages for USC (University Startup Challenge) 2024, 2025, and 2026
- 🌓 **Dark Mode** - Full dark mode support with theme toggle
- 📱 **Responsive Design** - Works perfectly on all devices
- ✅ **Production Ready** - Optimized, tested, and deployed to Vercel

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Astro 5.x** | Framework for static generation & partial hydration |
| **React 19.x** | UI component library |
| **TypeScript** | Type-safe development |
| **Tailwind CSS 4.x** | Utility-first styling |
| **shadCN UI** | Pre-built UI components & design system |
| **Contentful CMS** | Content management with GraphQL/REST APIs |
| **Vercel** | Deployment & edge runtime |
| **Webflow** | Design system variables & auto-generated components |

---

## 💻 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with Contentful credentials:
   ```env
   CONTENTFUL_SPACE_ID=your_space_id
   CONTENTFUL_ENVIRONMENT=master
   CONTENTFUL_DELIVERY_TOKEN=your_delivery_token
   CONTENTFUL_PREVIEW_TOKEN=your_preview_token
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at **[http://localhost:3000](http://localhost:3000)**

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

### Deploying to Vercel

1. Install [Vercel CLI](https://vercel.com/docs/cli):
   ```bash
   npm i -g vercel
   ```

2. Deploy to production:
   ```bash
   vercel deploy --prod
   ```

3. Or connect your GitHub repo to Vercel dashboard for automatic deploys on push.

Vercel will automatically inject environment variables and serve the built app from its global edge network.

---

## 📁 Project Structure

The project follows a **clean, hierarchical organization** with clear separation of concerns:

```
eclubpolimi.it/
├── src/
│   ├── pages/                    # Astro route files (.astro only)
│   │   ├── api/                  # API routes
│   │   ├── index.astro           # Home page
│   │   ├── events.astro          # Events page
│   │   ├── our-team.astro        # Team page
│   │   ├── join.astro            # Join/Apply page
│   │   ├── network.astro         # Network page
│   │   ├── calendar.astro        # Calendar page
│   │   ├── usc-2024.astro        # USC 2024 page
│   │   ├── usc-2025.astro        # USC 2025 page
│   │   └── usc-2026.astro        # USC 2026 (Coming Soon)
│   │
│   ├── components/               # All React components (organized by purpose)
│   │   ├── layout/               # Layout components
│   │   │   ├── Navbar.tsx        # Navigation with Startup Challenge dropdown
│   │   │   └── Footer.tsx        # Site footer with links
│   │   │
│   │   ├── home/                 # Home page-specific components
│   │   │   ├── _Hero.tsx         # Hero section with CTA
│   │   │   ├── _CoreValues.tsx   # Core values with flip cards
│   │   │   ├── _WhatWeDo.tsx     # What we do section
│   │   │   └── _Sponsors.tsx     # Sponsor logos section
│   │   │
│   │   ├── team/                 # Team page-specific components
│   │   │   └── _OurTeamSection.tsx
│   │   │
│   │   ├── events/               # Events page-specific components
│   │   │   └── _EventTimeline.tsx
│   │   │
│   │   ├── shared/               # Reusable across multiple pages
│   │   │   ├── FlipCard.tsx      # Flip card with hover effect
│   │   │   ├── TeamMemberCard.tsx
│   │   │   ├── EventHighlightGallery.tsx
│   │   │   └── HighlightGallery.tsx
│   │   │
│   │   └── ui/                   # shadCN UI design system (46 components)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       └── ... (44 more)
│   │
│   ├── layouts/                  # Astro layout templates
│   │   └── main.astro            # Main layout with nav & footer
│   │
│   ├── lib/                      # Utilities & helpers
│   │   ├── base-url.ts           # Base URL helper for routes
│   │   ├── contentful.ts         # Contentful GraphQL queries & fetchers
│   │   ├── google.ts             # Google OAuth functions
│   │   └── utils.ts              # General utilities (cn, etc.)
│   │
│   ├── hooks/                    # Custom React hooks
│   │   └── use-mobile.ts         # Mobile device detection
│   │
│   ├── styles/                   # Global styles
│   │   ├── global.css            # Global CSS & Tailwind imports
│   │   └── fullcalendar.css      # Calendar library styles
│   │
│   ├── site-components/          # Webflow-generated DevLink components
│   │   ├── global.css
│   │   └── _Builtin/             # Auto-generated Webflow components
│   │
│   ├── assets/                   # Static resources
│   │   └── images/               # Image files
│   │
│   ├── env.d.ts                  # TypeScript environment type definitions
│   └── middleware.ts             # Astro middleware
│
├── generated/                    # Webflow auto-generated files
│   ├── dev-only.js               # Dev-only scripts
│   ├── fonts.css                 # Font imports
│   └── webflow.css               # Design tokens & variables
│
├── public/                       # Static files (robots.txt, favicons, etc.)
├── astro.config.mjs              # Astro configuration
├── tsconfig.json                 # TypeScript configuration
├── components.json               # shadCN UI configuration
├── package.json                  # Dependencies & scripts
└── README.md                     # This file
```

---

## 📋 Pages Overview

| Page | Route | Description | Components |
|------|-------|-------------|-----------|
| **Home** | `/` | Hero, Core Values, What We Do, Sponsors | `_Hero`, `_CoreValues`, `_WhatWeDo`, `_Sponsors` |
| **Events** | `/events` | Timeline of past and upcoming events | `_EventTimeline`, `EventHighlightGallery` |
| **Team** | `/our-team` | Team members showcase | `_OurTeamSection`, `TeamMemberCard` |
| **Join** | `/join` | Application page for students & partners | Custom form components |
| **Network** | `/network` | Network showcase with sponsors | `HighlightGallery` |
| **Calendar** | `/calendar` | Event calendar view | FullCalendar integration |
| **USC 2024** | `/usc-2024` | University Startup Challenge 2024 | Dynamic content from Contentful |
| **USC 2025** | `/usc-2025` | University Startup Challenge 2025 | Dynamic content from Contentful |
| **USC 2026** | `/usc-2026` | Coming Soon for USC 2026 | Landing page |

---

## 🏗️ Component Architecture

### Folder Organization Principles

| Folder | Purpose | When to Use |
|--------|---------|------------|
| **`pages/`** | Route definitions only | `.astro` files that define URLs (file-based routing) |
| **`layout/`** | Navbar, Footer, shared layouts | Components that wrap multiple pages |
| **`home/`, `events/`, `team/`** | Page-specific components | Components used only on one page (prefixed with `_`) |
| **`shared/`** | Reusable components | Components used on 2+ pages across the site |
| **`ui/`** | Design system primitives | shadCN components, buttons, forms, dialogs, etc. |

### Component Naming Convention

- **Page-specific components**: Prefixed with `_` (e.g., `_Hero.tsx`, `_CoreValues.tsx`)
- **Shared/reusable components**: No prefix (e.g., `FlipCard.tsx`, `TeamMemberCard.tsx`)
- **UI primitives**: Lowercase with hyphen (e.g., `button.tsx`, `card.tsx`)

### Component Dependencies

```
main.astro (Layout)
├── Navbar.tsx (Desktop & Mobile nav)
└── Footer.tsx (Footer with links)

index.astro (Home Page)
├── _Hero.tsx
├── _CoreValues.tsx (→ uses FlipCard.tsx)
├── _WhatWeDo.tsx (→ uses FlipCard.tsx)
└── _Sponsors.tsx

our-team.astro (Team Page)
└── _OurTeamSection.tsx (→ uses TeamMemberCard.tsx)

events.astro (Events Page)
├── _EventTimeline.tsx
└── EventHighlightGallery.tsx

network.astro (Network Page)
└── HighlightGallery.tsx
```

---

## 🎨 Styling Architecture

### CSS Layers & Precedence

1. **Webflow Tokens** (`generated/webflow.css`) - Design system variables
2. **Global Styles** (`src/styles/global.css`) - Base styles, Tailwind initialization
3. **Component Styles** - Scoped Tailwind classes within components

### Theme Support

- ✅ Full light & dark mode support
- ✅ CSS variables for theming
- ✅ Theme preference persists in localStorage
- ✅ Smooth transitions between themes
- ✅ System preference detection fallback

### Color Scheme

- **Primary Blue**: `#2B5DAA`
- **Primary Red/Orange**: `#FC3F1A`
- **Dark Blue**: `#1e3a5f`

---

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Astro framework settings, output target (Vercel), custom integrations |
| `tsconfig.json` | TypeScript compiler options & path aliases |
| `components.json` | shadCN UI component configuration |
| `package.json` | Dependencies, scripts, project metadata |
| `blaxel.toml` | Blaxel build configuration (if applicable) |

---

## ✅ Code Quality Standards

- ✅ Full TypeScript type safety
- ✅ No console logs or debug statements
- ✅ Consistent naming conventions (PascalCase components, camelCase utilities)
- ✅ Component-based modular architecture
- ✅ Mobile-first responsive design
- ✅ Dark mode support throughout
- ✅ Optimized bundle size with tree-shaking
- ✅ No unused dependencies
- ✅ Proper error handling & loading states

---

## 🔌 Content Management (Contentful)

### Environment Variables

Configure Contentful credentials in `.env`:

```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ENVIRONMENT=master
CONTENTFUL_DELIVERY_TOKEN=your_delivery_token
CONTENTFUL_PREVIEW_TOKEN=your_preview_token
```

### Data Fetching

- **Server-side fetching**: In `.astro` pages using top-level `await`
- **GraphQL queries**: Defined in `src/lib/contentful.ts`
- **Available functions**:
  - `fetchTeamMembersFromContentful()` - Team member data
  - `fetchEventsFromContentful()` - Events data
  - Add custom queries as needed

### Example Usage

```tsx
// In src/pages/our-team.astro
import { fetchTeamMembersFromContentful } from '../lib/contentful';

const teamMembers = await fetchTeamMembersFromContentful();
```

---

## 🚀 Deployment & CI/CD

### Build Process

```bash
npm run build
# Creates optimized production build in dist/
```

### Local Preview

```bash
npm run preview
# Start local server on port 3000
```

### Vercel Deployment

- **Auto-deploy**: Connect GitHub repo to Vercel dashboard
- **Manual deploy**: Run `vercel deploy --prod`
- **Environment variables**: Set in Vercel project settings
- **Edge runtime**: Automatic for Vercel

---

## 📊 Optimization & Performance

| Metric | Status |
|--------|--------|
| Static Generation | ✅ Pre-built at deploy time |
| Partial Hydration | ✅ Only interactive components hydrate |
| Tree-shaking | ✅ Unused code eliminated |
| Bundle Size | ✅ Optimized with component-level splitting |
| Image Optimization | ✅ Lazy loading, responsive images |
| CSS Minification | ✅ Tailwind purges unused styles |

---

## 📝 How to Add New Content

### Adding a New Page

1. Create route file: `src/pages/new-page.astro`
2. Create components directory: `src/components/new-page/`
3. Create page components: `src/components/new-page/_Section.tsx`
4. Import in route file and add to layout

**Example:**
```tsx
// src/pages/blog.astro
import MainLayout from '../layouts/main.astro';
import BlogHeader from '../components/blog/_BlogHeader';
import BlogGrid from '../components/blog/_BlogGrid';

const posts = await fetchBlogPostsFromContentful();
---

<MainLayout title="Blog">
  <BlogHeader />
  <BlogGrid client:load posts={posts} />
</MainLayout>
```

### Adding a Reusable Component

1. Create in `src/components/shared/NewComponent.tsx`
2. Import where needed across pages
3. Keep prop interfaces clear and documented

### Adding UI Components from shadCN

```bash
npx shadcn-ui@latest add component-name
```

Components are added to `src/components/ui/` and ready to use.

---

## 🔒 Collaboration Guidelines

- Always pull latest changes before starting work
- Create feature branches for new work: `git checkout -b feature/your-feature`
- Test thoroughly before committing
- Keep commit messages clear and descriptive
- Contact Giuseppe for any uncertainties or blockers
- This project is **private** — for E-Club Polimi use only

---

## 🎯 Next Steps (Optional Enhancements)

- [ ] Add TypeScript declarations file (`src/lib/types.ts`)
- [ ] Add constants file (`src/lib/constants.ts`)
- [ ] Implement Storybook for component documentation
- [ ] Add automated tests (Vitest, Playwright)
- [ ] Set up GitHub Actions for CI/CD
- [ ] Add SEO meta tags & Open Graph
- [ ] Integrate analytics (Vercel Analytics or Google Analytics)
- [ ] Add form validation with Zod or similar

---

## 📞 Support & Questions

For questions, issues, or clarifications:
- **Contact**: Giuseppe Ingrassia
- **Method**: WhatsApp
- **Repository**: E-Club Polimi Website

---

## 📄 License

This project is **private** and for **E-Club Polimi** use only.

---

**Last Updated**: December 2025  
**Status**: ✅ Production Ready for Vercel + Contentful
