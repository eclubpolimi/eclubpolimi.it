# E-Club Website Development Conventions

## Overview
This document outlines coding conventions and best practices for the E-Club website. Following these conventions ensures consistency, maintainability, and optimal user experience as the codebase is passed between teams.

---

## 🔗 Navigation & Routing

### Use Next.js Link for Internal Navigation
**Always use `Link` from Next.js for internal page navigation** to enable smooth client-side routing.

#### ✅ Correct
```tsx
import Link from 'next/link';

// Internal navigation (same domain)
<Link href="/about">About Us</Link>
<Link href="/events">Events</Link>
<Link href="/startupchallenge/2025">USC 2025</Link>
```

#### ❌ Incorrect
```tsx
// This causes full page reloads - AVOID
<a href="/about">About Us</a>
<a href="/events">Events</a>
```

### Use `<a>` Tags for External Links
Use regular anchor tags for external URLs, downloads, and special protocols.

#### ✅ Correct
```tsx
// External websites
<a href="https://google.com" target="_blank" rel="noopener noreferrer">
  Visit Google
</a>

// File downloads
<a href="/documents/brochure.pdf" download>
  Download Brochure
</a>

// Email/phone links
<a href="mailto:contact@eclubpolimi.it">Email Us</a>
<a href="tel:+390123456789">Call Us</a>
```

### Quick Decision Guide
- **Internal route** (`/about`, `/events`) → Use `Link`
- **External URL** (`https://...`) → Use `<a>` with `target="_blank"`
- **File download** (`.pdf`, `.doc`) → Use `<a>` with `download`
- **Email/phone** (`mailto:`, `tel:`) → Use `<a>`

---

## 🎯 Button Component Usage

### Button Variants
The custom Button component has three distinct variants for different use cases:

#### Navigation Buttons (Internal Routing)
For internal routing with Next.js Link:
```tsx
<Button variant="navigation" href="/join">
  Join Us
</Button>
```

#### External Link Buttons
For external URLs:
```tsx
<Button variant="external" href="https://forms.google.com">
  Apply Now
</Button>
```

#### Action Buttons (Click Handlers)
For click handlers (proper HTML button element):
```tsx
<Button variant="action" onClick={() => downloadPDF()}>
  Download PDF
</Button>
```

### Button Themes
```tsx
// Orange theme (default)
<Button variant="navigation" href="/about">About</Button>

// Light theme
<Button variant="action" theme="light" onClick={handleClick}>
  Light Button
</Button>

// Dark theme
<Button variant="external" theme="dark" href="https://example.com">
  Dark Button
</Button>
```

### Migration from Old API
The Button component has been redesigned to separate navigation and action concerns properly.

| Old Prop | New API |
|----------|---------|
| `to="/internal"` | `variant="navigation" href="/internal"` |
| `to="https://external.com"` | `variant="external" href="https://external.com"` |
| `to="#"` with `onClick` | `variant="action" onClick={handler}` |
| `forceAnchor={true}` | Use `variant="external"` |

**Before:**
```tsx
<Button to="/about">About</Button>
<Button to="https://google.com">Google</Button>
<Button to="#" onClick={() => alert('hi')}>Click</Button>
```

**After:**
```tsx
<Button variant="navigation" href="/about">About</Button>
<Button variant="external" href="https://google.com">Google</Button>
<Button variant="action" onClick={() => alert('hi')}>Click</Button>
```

### Complete Props Reference

#### Common Props (all variants)
- `theme?: 'orange' | 'light' | 'dark'` - Visual theme (default: 'orange')
- `disabled?: boolean` - Disable the button
- `className?: string` - Additional CSS classes
- `children: React.ReactNode` - Button content
- `scaleLevel?: 'tiny' | 'small' | 'medium' | 'large' | 'huge'` - Hover scale effect
- `disableHoverScale?: boolean` - Disable hover scaling

#### Navigation Variant
- `variant: 'navigation'`
- `href: string` - Internal route
- `onClick?: () => void` - Optional click handler

#### External Variant
- `variant: 'external'`
- `href: string` - External URL
- `onClick?: () => void` - Optional click handler
- `target?: '_blank' | '_self'` - Link target (default: '_blank')
- `rel?: string` - Link relationship (default: 'noopener noreferrer')

#### Action Variant
- `variant: 'action'`
- `onClick: () => void` - Required click handler
- `type?: 'button' | 'submit' | 'reset'` - Button type (default: 'button')

### Benefits of New Design
1. **Semantic HTML**: Proper `<button>` elements for actions, `<a>` for navigation
2. **Better Accessibility**: Screen readers can properly identify interactive elements
3. **Type Safety**: TypeScript prevents invalid prop combinations
4. **Next.js Integration**: Proper use of Next.js Link for client-side routing
5. **Cleaner Logic**: No more confusing `to="#"` hacks

---

## 🎨 Styling Conventions

### Tailwind CSS Classes
- Use Tailwind utility classes for styling
- Group related classes together for readability
- Use dark mode variants: `dark:bg-ec_background_darkmode`

#### ✅ Good Class Organization
```tsx
<div className="flex flex-col items-center justify-center gap-4 p-6 
                bg-white dark:bg-ec_background_darkmode 
                border border-ec_border_light dark:border-ec_border_darkmode 
                rounded-lg shadow-md">
```

### Color System
Use the predefined E-Club color variables:
- **Orange**: `ec_orange`, `ec_orange_darkmode`, `ec_orange_hover`
- **Blue**: `ec_blue`, `ec_blue_darkmode`
- **Text**: `ec_text`, `ec_text_darkmode`
- **Background**: `ec_background_darkmode`
- **Grey**: `ec_grey`, `ec_grey_darkmode`

---

## 🏗️ Component Structure

### Import Organization
```tsx
// 1. React/Next.js imports
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 2. Third-party libraries
import { motion } from 'framer-motion';

// 3. Custom components
import Button from '@/components/Button/Button';

// 4. Hooks and utilities
import { useImageAsset } from '@/hooks/useImageAssets';

// 5. Data and constants
import SiteData from '@/Data';

// 6. Types
import type { ComponentProps } from './types';
```

### TypeScript Props
Always define clear TypeScript interfaces for component props:

```tsx
interface ComponentProps {
  title: string;
  description?: string;
  isVisible?: boolean;
  onClose: () => void;
}

const Component = ({ title, description, isVisible = true, onClose }: ComponentProps) => {
  // Component implementation
};
```

---

## 📱 Responsive Design

### Mobile-First Approach
Use Tailwind's responsive prefixes in mobile-first order:

```tsx
<div className="flex-col md:flex-row lg:gap-8 xl:gap-12">
  {/* Mobile: column layout, larger screens: row layout */}
</div>
```

### Common Breakpoints
- **Base**: Mobile (default)
- **md**: Tablet (768px+)
- **lg**: Desktop (1024px+)
- **xl**: Large desktop (1280px+)

---

## 🎭 Interactive Elements

### InteractiveSection Usage
Use InteractiveSection components for hover effects:

```tsx
<InteractiveSectionGroup defaultScaleLevel="small" rememberZIndex={false}>
  <InteractiveSection sectionId="unique-id" elementType="text">
    <Button variant="navigation" href="/about">
      Hover Me
    </Button>
  </InteractiveSection>
</InteractiveSectionGroup>
```

---

## 📄 File Organization

### Component Structure
```
components/
  ComponentName/
    ComponentName.tsx     # Main component
    ComponentName.module.css  # CSS modules (if needed)
    index.ts             # Export file
    README.md            # Component documentation
```

### Naming Conventions
- **Components**: PascalCase (`Button`, `StartupChallengeDropdown`)
- **Files**: PascalCase for components, camelCase for utilities
- **Variables**: camelCase (`isVisible`, `userInfo`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)

---

## 🔧 Performance Best Practices

### Image Optimization
Always use Next.js Image component:

```tsx
import Image from 'next/image';

<Image
  src="/images/hero.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  className="w-full h-auto"
/>
```

### Dynamic Imports
Use dynamic imports for heavy components:

```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
});
```

---

## ✅ Common Pitfalls to Avoid

1. **❌ Using `<a>` for internal navigation** → Use `Link`
2. **❌ Missing alt text on images** → Always provide descriptive alt text
3. **❌ Inconsistent button patterns** → Use the custom Button component
4. **❌ Hardcoded colors** → Use CSS custom properties and Tailwind classes
5. **❌ Missing TypeScript types** → Always type your props and state
6. **❌ Inline styles** → Use Tailwind classes or CSS modules
7. **❌ Complex responsive CSS** → Use Tailwind's responsive prefixes instead of complex CSS classes
8. **❌ Overlapping interactive elements** → Ensure clickable areas don't interfere with each other

## 🔧 Responsive Design Best Practices

### Mobile Navigation
For responsive navigation, use clear separation between mobile and desktop layouts:

```tsx
{/* Desktop Navigation - Hidden on mobile */}
<ul className="hidden xl:flex gap-8 items-center">
  {/* Desktop nav items */}
</ul>

{/* Mobile Navigation - Hidden on desktop */}
<div className="xl:hidden">
  {/* Mobile burger menu */}
</div>

{/* Mobile Dropdown - Only shown when clicked */}
<ul className={`xl:hidden ${isOpen ? 'block' : 'hidden'}`}>
  {/* Mobile nav items */}
</ul>
```

---

## 🚀 Getting Started Checklist

Before making changes:
- [ ] Understand the existing component structure
- [ ] Check if similar functionality already exists
- [ ] Use the custom Button component for buttons
- [ ] Use Link for internal navigation, `<a>` for external
- [ ] Follow the established color system
- [ ] Add TypeScript types for new props
- [ ] Test in both light and dark modes
- [ ] Verify responsive behavior on mobile

---

*This document should be updated as new conventions are established. When in doubt, follow the patterns established in existing components.*
