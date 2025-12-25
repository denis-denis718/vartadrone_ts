# VARTA DRONE — Military Defense Technology Platform

> **Mission:** Create a world-class military defense technology website for anti-drone systems.
> **Domain:** https://vartadrone.com
> **Style:** Tactical, Minimalist, Professional — inspired by Palantir, Anduril, AB3.army, Azov

---

## 🎯 Project Overview

**VARTA DroneHunter** — Ukrainian manufacturer of anti-drone defense systems. Products include tactical modules for FPV drones designed to intercept and neutralize enemy UAVs.

### Products
- **KOZAK** — Anti-drone module with stabilization
- **SICH** — Compact interception system  
- **BULAVA** — Heavy-duty anti-drone device
- **SPYS20/SPYS2K** — Specialized cartridges
- **LuckyStrike** — Complete kit solutions

### Target Audience
- Military units (Ukrainian Armed Forces, Special Operations)
- Defense contractors
- NATO allies & international partners
- Investors in defense technology

---

## 🛠 Tech Stack

```
Framework:      Next.js 15+ (App Router)
Language:       TypeScript (strict mode)
Styling:        Tailwind CSS + CSS Modules
3D/Animation:   Three.js, React Three Fiber, Framer Motion, GSAP
i18n:           next-intl (Ukrainian 🇺🇦 / English 🇬🇧)
State:          Zustand
Forms:          React Hook Form + Zod
CMS:            Sanity / Strapi (optional)
Deployment:     Vercel
```

---

## 🎨 Design System — "MULTICAM TACTICAL"

### Color Palette

```css
:root {
  /* === PRIMARY — MULTICAM CAMO === */
  --color-camo-dark:      #1C1F1A;    /* Deep forest — backgrounds */
  --color-camo-olive:     #4A5240;    /* Olive drab — primary accent */
  --color-camo-khaki:     #8B7355;    /* Khaki tan — secondary */
  --color-camo-sand:      #C4B39A;    /* Desert sand — highlights */
  --color-camo-brown:     #5C4033;    /* Earth brown — depth */
  
  /* === TACTICAL BLACKS === */
  --color-black-pure:     #000000;    /* Pure black */
  --color-black-rich:     #0A0A0A;    /* Rich black — main bg */
  --color-black-soft:     #141414;    /* Soft black — cards */
  --color-black-muted:    #1A1A1A;    /* Muted — sections */
  --color-black-elevated: #242424;    /* Elevated surfaces */
  
  /* === NEUTRAL GRAYS === */
  --color-gray-900:       #18181B;
  --color-gray-800:       #27272A;
  --color-gray-700:       #3F3F46;
  --color-gray-600:       #52525B;
  --color-gray-500:       #71717A;
  --color-gray-400:       #A1A1AA;
  --color-gray-300:       #D4D4D8;
  --color-gray-100:       #F4F4F5;
  
  /* === ACCENT COLORS === */
  --color-accent-gold:    #C9A227;    /* Military gold — CTAs */
  --color-accent-amber:   #D4A84B;    /* Warm amber — hover */
  --color-accent-red:     #8B2635;    /* Alert red — warnings */
  --color-accent-green:   #2D5A3D;    /* Success green */
  
  /* === TEXT === */
  --color-text-primary:   #FAFAFA;    /* White text */
  --color-text-secondary: #A1A1AA;    /* Muted text */
  --color-text-muted:     #71717A;    /* Subtle text */
}
```

### Typography

```css
/* === FONT FAMILIES === */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-display: 'Bebas Neue', 'Oswald', 'Anton', sans-serif;  /* Headlines */
--font-mono: 'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;  /* Specs */
--font-tactical: 'Black Ops One', 'Russo One', sans-serif;  /* Decorative */

/* === FONT SIZES (rem only!) === */
--text-xs:    0.75rem;    /* 12px — metadata */
--text-sm:    0.875rem;   /* 14px — captions */
--text-base:  1rem;       /* 16px — body */
--text-lg:    1.125rem;   /* 18px — lead */
--text-xl:    1.25rem;    /* 20px — subheadings */
--text-2xl:   1.5rem;     /* 24px — h4 */
--text-3xl:   1.875rem;   /* 30px — h3 */
--text-4xl:   2.25rem;    /* 36px — h2 */
--text-5xl:   3rem;       /* 48px — h1 */
--text-6xl:   3.75rem;    /* 60px — hero */
--text-7xl:   4.5rem;     /* 72px — display */

/* === LINE HEIGHTS === */
--leading-tight:  1.1;    /* Headlines */
--leading-snug:   1.25;   /* Subheadings */
--leading-normal: 1.5;    /* Body text */
--leading-relaxed: 1.75;  /* Long-form */

/* === FONT WEIGHTS === */
--font-light:    300;
--font-regular:  400;
--font-medium:   500;
--font-semibold: 600;
--font-bold:     700;
--font-black:    900;
```

### Spacing System

```css
--space-1:  0.25rem;   /* 4px */
--space-2:  0.5rem;    /* 8px */
--space-3:  0.75rem;   /* 12px */
--space-4:  1rem;      /* 16px */
--space-5:  1.25rem;   /* 20px */
--space-6:  1.5rem;    /* 24px */
--space-8:  2rem;      /* 32px */
--space-10: 2.5rem;    /* 40px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
--space-24: 6rem;      /* 96px */
--space-32: 8rem;      /* 128px */
```

---

## 📁 Project Structure

```
vartadrone/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx                    # Homepage
│   │   ├── products/
│   │   │   ├── page.tsx                # Products catalog
│   │   │   ├── kozak/page.tsx
│   │   │   ├── sich/page.tsx
│   │   │   ├── bulava/page.tsx
│   │   │   └── spys/page.tsx
│   │   ├── solutions/page.tsx          # LuckyStrike kits
│   │   ├── technology/page.tsx         # R&D, Patents
│   │   ├── investors/page.tsx          # For investors
│   │   ├── about/page.tsx              # Company, Team
│   │   ├── contact/page.tsx            # Contact form
│   │   └── news/page.tsx               # Updates, Press
│   ├── api/
│   │   ├── contact/route.ts
│   │   └── newsletter/route.ts
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Navigation/
│   │   └── LanguageSwitcher/
│   ├── sections/
│   │   ├── Hero/
│   │   ├── Products/
│   │   ├── Features/
│   │   ├── Specs/
│   │   ├── Gallery/
│   │   ├── Testimonials/
│   │   ├── Partners/
│   │   └── CTA/
│   ├── ui/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Badge/
│   │   ├── Modal/
│   │   ├── Tabs/
│   │   └── Input/
│   ├── 3d/
│   │   ├── DroneModel/
│   │   ├── ProductViewer/
│   │   └── ParticleField/
│   └── animations/
│       ├── FadeIn/
│       ├── SlideUp/
│       ├── Parallax/
│       └── TextReveal/
├── lib/
│   ├── i18n/
│   ├── utils/
│   └── constants/
├── hooks/
├── types/
├── messages/
│   ├── uk.json
│   └── en.json
├── public/
│   ├── images/
│   ├── videos/
│   ├── models/                         # 3D models (.glb)
│   └── fonts/
└── styles/
    ├── variables.css
    └── animations.css
```

---

## 🧩 Component Guidelines

### Naming Conventions
```
PascalCase     → Components, Types, Interfaces
camelCase      → Functions, Variables, Hooks
kebab-case     → Files, Folders, CSS classes
SCREAMING_CASE → Constants, Env variables
```

### Component Template
```tsx
// components/ui/Button/Button.tsx
'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(styles.button, styles[variant], styles[size], className)}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Spinner /> : children}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

---

## 🌍 Internationalization (i18n)

### Languages
- **Ukrainian (uk)** — Primary, default
- **English (en)** — International

### Message Structure
```json
// messages/uk.json
{
  "common": {
    "cta": {
      "request": "Зробити запит",
      "learnMore": "Дізнатись більше",
      "contact": "Зв'язатись"
    }
  },
  "nav": {
    "products": "Продукти",
    "solutions": "Рішення",
    "technology": "Технології",
    "investors": "Інвесторам",
    "about": "Про нас",
    "contact": "Контакти"
  },
  "hero": {
    "title": "DroneHunter VARTA",
    "subtitle": "Інноваційна система антидронової боротьби",
    "description": "Передові технології перехоплення ворожих БПЛА"
  },
  "products": {
    "kozak": {
      "name": "KOZAK",
      "tagline": "Тактичний антидроновий модуль"
    }
  }
}
```

### Usage Rules
- Never hardcode text strings
- Use `useTranslations()` hook in components
- Format dates/numbers with `useFormatter()`
- All UI text must support both languages

---

## 🎬 Animation Guidelines

### Performance Rules
```typescript
// ✅ DO: Use CSS transforms
transform: translateX(100px);
opacity: 0;

// ❌ DON'T: Animate layout properties
left: 100px;
width: 200px;
height: 100px;
```

### Animation Timing
```css
--ease-out-expo:   cubic-bezier(0.16, 1, 0.3, 1);
--ease-out-quint:  cubic-bezier(0.22, 1, 0.36, 1);
--ease-in-out:     cubic-bezier(0.65, 0, 0.35, 1);

--duration-fast:   150ms;
--duration-normal: 300ms;
--duration-slow:   500ms;
--duration-slower: 800ms;
```

### Three.js Guidelines
```typescript
// Always dispose of resources
useEffect(() => {
  return () => {
    geometry.dispose();
    material.dispose();
    texture.dispose();
  };
}, []);

// Use lazy loading for 3D models
const Model = dynamic(() => import('./DroneModel'), {
  ssr: false,
  loading: () => <ModelSkeleton />
});
```

---

## 📐 Section Templates

### Hero Section
```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]                    NAV                    [Lang][CTA]│
├─────────────────────────────────────────────────────────────┤
│                                                              │
│         ██████╗ ██████╗  ██████╗ ███╗   ██╗███████╗         │
│         ██╔══██╗██╔══██╗██╔═══██╗████╗  ██║██╔════╝         │
│         ██║  ██║██████╔╝██║   ██║██╔██╗ ██║█████╗           │
│         ██║  ██║██╔══██╗██║   ██║██║╚██╗██║██╔══╝           │
│         ██████╔╝██║  ██║╚██████╔╝██║ ╚████║███████╗         │
│         ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝         │
│                     HUNTER VARTA                             │
│                                                              │
│            « Інноваційна система антидронової               │
│                      боротьби »                              │
│                                                              │
│               [ЗРОБИТИ ЗАПИТ]  [КАТАЛОГ]                     │
│                                                              │
│         ┌─────────────────────────────────────┐              │
│         │     3D Drone Model (Three.js)      │              │
│         │         Interactive Viewer          │              │
│         └─────────────────────────────────────┘              │
│                                                              │
│    ▼ Scroll indicator                                        │
└─────────────────────────────────────────────────────────────┘
```

### Product Card
```
┌─────────────────────────────────┐
│  ┌───────────────────────────┐  │
│  │                           │  │
│  │      Product Image        │  │
│  │      (hover: rotate)      │  │
│  │                           │  │
│  └───────────────────────────┘  │
│                                 │
│  [NATO STANDARD]  [COMBAT TESTED]│
│                                 │
│  KOZAK                          │
│  ─────────────────────────────  │
│  Тактичний антидроновий модуль  │
│  зі стабілізацією               │
│                                 │
│  Дальність: 800м                │
│  Вага: 1.2кг                    │
│  Патрони: 6                     │
│                                 │
│  [Детальніше →]                 │
└─────────────────────────────────┘
```

### Specs Table
```
┌───────────────────────────────────────────────────────┐
│  ТЕХНІЧНІ ХАРАКТЕРИСТИКИ                              │
├───────────────────────────────────────────────────────┤
│                                                        │
│  Параметр              │  KOZAK   │  SICH   │ BULAVA  │
│  ──────────────────────┼──────────┼─────────┼─────────│
│  Ефективна дальність   │  800 м   │  600 м  │ 1200 м  │
│  Маса пристрою         │  1.2 кг  │  0.8 кг │  2.4 кг │
│  Боєкомплект           │  6 шт    │  4 шт   │  12 шт  │
│  Час перезарядки       │  8 сек   │  6 сек  │  15 сек │
│  Стандарт              │  NATO    │  NATO   │  NATO   │
│                                                        │
│  * Всі дані — monospace font (JetBrains Mono)         │
└───────────────────────────────────────────────────────┘
```

---

## ⚡ MCP Tools Integration

### Context7 — Documentation
```bash
# Before implementing any library, ALWAYS check docs:
context7 search "framer motion scroll animations"
context7 search "three.js react fiber"
context7 search "next-intl app router"
context7 search "tailwind css animation"
```

### Playwright — Website Analysis
```bash
# Analyze reference sites for inspiration:
playwright analyze https://www.palantir.com
playwright analyze https://www.anduril.com
playwright analyze https://ab3.army
playwright analyze https://azov.org.ua

# Test own site:
playwright test https://vartadrone.com --viewport=mobile
playwright screenshot https://vartadrone.com/products
```

### Usage Protocol
1. **Before coding** → Use Context7 to read library docs
2. **Before designing** → Use Playwright to analyze reference sites
3. **After building** → Use Playwright to test responsiveness
4. **When debugging** → Use Context7 for error solutions

---

## ✅ Quality Checklist

### Before Every Commit
- [ ] TypeScript: No `any` types, strict mode passes
- [ ] i18n: All strings in `messages/` files
- [ ] Accessibility: Color contrast ≥ 4.5:1, keyboard nav works
- [ ] Performance: Lighthouse score ≥ 90
- [ ] Responsive: Tested on mobile, tablet, desktop
- [ ] Animations: Respects `prefers-reduced-motion`
- [ ] 3D: Models optimized (<2MB), lazy loaded

### Typography Audit
- [ ] Display fonts for headlines only (Bebas Neue)
- [ ] Inter for all body text
- [ ] Monospace for specs, data, numbers
- [ ] All sizes in `rem` units
- [ ] Line-height appropriate for context

### Military UI Patterns
- [ ] Multicam color palette consistent
- [ ] Badges styled tactically (NATO STANDARD, COMBAT TESTED)
- [ ] Grid patterns subtle, not overwhelming
- [ ] Dark theme default, no light mode
- [ ] Data displays use tabular figures

---

## 🔐 Security Rules

```typescript
// NEVER commit:
- API keys
- Database credentials  
- Private certificates
- .env files with secrets

// ALWAYS:
- Validate all user inputs (Zod)
- Sanitize HTML content
- Use HTTPS everywhere
- Implement rate limiting on forms
- Add honeypot fields to contact forms
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile first approach */
--screen-sm:  640px;   /* Small phones → Large phones */
--screen-md:  768px;   /* Tablets */
--screen-lg:  1024px;  /* Small laptops */
--screen-xl:  1280px;  /* Desktops */
--screen-2xl: 1536px;  /* Large displays */
```

---

## 🚀 Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Total Blocking Time | < 300ms |
| Bundle Size (initial) | < 150KB |

---

## 📚 Reference Sites

**ALWAYS analyze these before creating new sections:**

| Site | Focus |
|------|-------|
| [palantir.com](https://www.palantir.com) | Clean, dark, data-driven aesthetic |
| [anduril.com](https://www.anduril.com) | Defense tech, product showcases |
| [ab3.army](https://ab3.army) | Ukrainian military, bilingual |
| [azov.org.ua](https://azov.org.ua) | Ukrainian military branding, CTAs |

---

## 🗣 Tone of Voice

### Ukrainian Version
- Прямий, конкретний, без води
- Технічна точність
- Патріотичний, але не пафосний
- "Ми" замість "компанія"

### English Version
- Professional, authoritative
- Technical precision
- NATO/defense industry terminology
- Direct, no marketing fluff

### Examples
```
❌ "Наша компанія пропонує інноваційні рішення..."
✅ "Перехоплюємо ворожі дрони на відстані до 800м"

❌ "We are excited to present our cutting-edge solutions..."
✅ "800m effective interception range. NATO certified."
```

---

## 🆘 Common Issues

### Three.js Performance
```typescript
// Problem: Slow 3D rendering
// Solution: Use instanced meshes, LOD, draco compression
import { useGLTF } from '@react-three/drei';
useGLTF.preload('/models/drone.glb');
```

### Framer Motion Memory Leaks
```typescript
// Problem: Animations continue after unmount
// Solution: Always use AnimatePresence
<AnimatePresence mode="wait">
  {isVisible && <Motion key="unique" />}
</AnimatePresence>
```

### Next.js i18n Hydration
```typescript
// Problem: Hydration mismatch with dates/numbers
// Solution: Use suppressHydrationWarning or client-only
<time suppressHydrationWarning>{formattedDate}</time>
```

---

## 📞 Contact & Support

- **Domain:** vartadrone.com
- **Tech Stack Questions:** Check Context7 first
- **Design Questions:** Analyze reference sites with Playwright
- **Bugs:** Create detailed issue with reproduction steps

---

*Last updated: December 2025*
*Version: 2.0.0*
