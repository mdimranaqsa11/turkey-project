# Turkey International Academy (TIAMA) — Redesign Build Summary

Premium glassmorphism redesign of turkeyinternationalacademy.com, built page-by-page in Next.js (App Router) + Tailwind CSS v4 + Framer Motion. Content and information architecture preserved from the original site; visual design fully reimagined.

## Stack

- **Framework:** Next.js 16.3 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4 (CSS-based `@theme` tokens)
- **Animation:** Framer Motion
- **Fonts:** Plus Jakarta Sans (display/headings) + Inter (body), via `next/font/google`
- **Utilities:** `clsx` + `tailwind-merge` (via `cn()` helper)

## Design System

Defined in [src/app/globals.css](src/app/globals.css):

- **Palette:** deep navy/ink (`ink-950`–`ink-600`), royal blue (`royal-600`–`royal-100`), warm gold accent (`gold-600`–`gold-100`), mist neutrals
- **Glassmorphism:** `.glass-panel`, `.glass-panel-strong`, `.glass-panel-dark` utility classes (blur + saturation + translucent surface + border)
- **Gradients:** `.text-gradient-gold`, `.text-gradient-royal`, `.bg-mesh-hero` (radial gradient mesh)
- **Tokens:** radius scale (`--radius-xs` → `--radius-full`), glass/gold/royal shadow glows, `--ease-premium` cubic-bezier for all transitions

## Reusable Components

**UI primitives** — [src/components/ui/](src/components/ui/)
| Component | Purpose |
|---|---|
| `Container` | Max-width page container |
| `Button` | primary / gold / glass / ghost variants, works as `<Link>` or `<button>` |
| `GlassCard` | light / strong / dark glass surface wrapper |
| `SectionHeading`, `Eyebrow` | Section titles with pill eyebrow label |
| `PageHero` | Dark glass hero banner for interior pages (courses, about, etc.) |
| `Accordion` | Single-open animated accordion (used in FAQ) |

**Motion** — [src/components/motion/](src/components/motion/)
| Component | Purpose |
|---|---|
| `Reveal` | Scroll-triggered fade/slide-in |
| `StaggerGroup` / `StaggerItem` | Staggered entrance for card grids |
| `Counter` | Animated number counter (spring-based) |

**Layout** (global, in `layout.js`) — [src/components/layout/](src/components/layout/)
| Component | Purpose |
|---|---|
| `Navbar` | Scroll-aware glass navbar, mobile menu |
| `Footer` | Brand blurb, quick links, popular courses, contact, newsletter |
| `FloatingChatButton` | Fixed bottom-right chat affordance (decorative) |

## Pages Built

### 1. Homepage (`/`) — [src/app/page.js](src/app/page.js)

| Section | Component | Content source |
|---|---|---|
| Hero | `Hero` | 2-slide carousel (Turkish copy), registration ID |
| About/Intro | `AboutIntro` | "Where Trust Meets Medical Training" + 4 credential chips |
| Accreditation | `AccreditationStrip` | 4 partner/accreditation logos |
| Pricing | `PricingSection` | 4 certification tiers + CTA banner + stats (127+, 31+, 12+, 100%) |
| Future/Accordion | `FutureSection` | Portrait image + collapsible list (Accredited Institutions / Empowering Professionals / Global Excellence) |
| Legacy stats | `LegacyBanner` | Dark banner, 4 animated counters (12+, 31+, 12K+, 129+) |
| Feature strip | `FeatureStrip` | 4 checkmark feature chips |
| Testimonials | `Testimonials` | 6-quote auto-rotating carousel |

**Note:** Footer copy (quick links, contact info) was read from the provided screenshot, not the Firecrawl text — worth double-checking against the live site.

### 2. Courses (`/courses`) — [src/app/courses/page.js](src/app/courses/page.js)

| Section | Component |
|---|---|
| Page hero | `PageHero` |
| Course category cards | `CourseCategories` (5 cards: Certification, Fellowship, PG Diploma, Cosmetology & Aesthetic, Other Specialised) |
| FAQ | `CoursesFAQ` (6 Q&As via `Accordion`) |

## Images

Sourced from user-provided `homepage images` and `courses page images` folders, copied into `public/images/`. No stock imagery substituted — all photos/logos are from the provided assets. One accreditation logo (5th shield visible in the homepage screenshot) was not found in the provided folder and is still missing.

## Verification

Each page has been:
- Built with `npm run build` (no errors)
- Rendered via headless Chromium (Playwright) at desktop (1440px) and mobile (390px) widths, scrolled through to trigger scroll animations, checked for console errors

## Known Gaps / Follow-ups

- Missing 5th accreditation logo (homepage)
- Footer contact details should be verified against the live site
- No other pages built yet (About, Accreditation & CFO, Blog, Contact, individual course/program pages, login/register)
- `Explore Programs` buttons on `/courses` currently link back to `/courses` as a placeholder pending individual program pages
