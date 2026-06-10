# Memory — Table (Restaurant Booking App)

Last updated: Wed Jun 10 2026

## What was built

### Session 1 — Routing + Layout Shells + UI Component Library

**Routing & Layouts:**
- 3 layout shells: AppShell, AuthShell, FocusShell
- 14 routes wired in `src/router.tsx` matching the route spec
- Responsive AppShell: bottom tab bar on mobile, sticky top bar on desktop (≥1024px)
- BottomTabBar with 4 tabs: Explore, Map, Bookings, Me
- AuthShell: centered card with brand logo
- FocusShell: minimal shell with back/exit for booking flow
- 13 placeholder pages in `src/pages/`

**UI Component Library (`src/components/ui/`):**
- Button (4 variants: primary, secondary, ghost, danger; 3 sizes)
- Input (with label, forwardRef)
- Card, CardImage, CardContent (with shadow-resting/raised)
- RestaurantCard (image, details, Reserve CTA)
- Chip (category pills with selected state)
- StarRating (full/half/empty stars, display-only)
- StatusBadge (confirmed, pending, cancelled, completed)
- Skeleton, SkeletonCard

**Discover page** — updated with real components:
- Search bar, location picker, category chips, featured horizontal scroll, nearby grid

**Visual consistency:**
- `ui-registry.md` created with all component patterns captured
- Design system tokens in `src/index.css` with `accent-hover` and shadow custom properties added
- `tailwindcss-animate` installed (fixed missing dep)
- Old Vite boilerplate removed (App.css deleted, App.tsx rewritten)

### Session 4 — Map, Search, Bookings, Saved, Profile pages

- **Map page** (`/map`): Sticky map placeholder on desktop (left column), scrollable restaurant list (right column). Mobile: stacked with map above, list below. "Current location" button. 8 nearby restaurants with RestaurantCard grid.
- **Search page** (`/search`): Mobile search bar, Cuisine + Price filter chips in collapsible panel, active filter count badge, filtering by name/cuisine/price/cuisine, empty state, results in responsive grid (1/2/3 columns).
- **Bookings page** (`/bookings`): Upcoming/Past tab toggle, booking cards with image, restaurant name, StatusBadge, date/time/guests. Links to `/bookings/:id`. Empty states per tab.
- **Saved page** (`/saved`): Grid of saved RestaurantCards, empty state with instructions.
- **Profile page** (`/profile`): User avatar with initials, name/email, Account settings list with icons, Sign out button with destructive color, version number.
- Exported `BookingStatus` type from StatusBadge.

### Session 3 — Booking Flow

- Multi-step booking flow (3 steps: When → Your Info → Confirm)
- StepIndicator component with completed/current/upcoming states
- Step 1: Day picker, date selector, guest count dropdown, time slot grid
- Step 2: Name, email, phone inputs + special requests textarea, with booking summary
- Step 3: Confirmation with success animation, booking summary, add-to-calendar
- Responsive: mobile-first, fine on desktop with FocusShell's 800px max-width
- Client-side validation: requires day+time on step 1, name+email+phone on step 2
- Imprinted to ui-registry.md

### Session 2 — Restaurant Detail Page

- ImageGallery component with carousel, dot indicators, counter
- Full Restaurant Detail page matching wireframe:
  - Hero gallery (mobile: full-width carousel; desktop: left column, 3/5 width)
  - Info panel with name, cuisine, price, rating, distance
  - Booking CTA card with date/time/guests prefill
  - About section with tags (cuisine, price, fine dining), hours, phone, address, website
  - Menu section with 3 downloadable PDF links
  - Reviews section with avatar, star rating, text
  - Sticky booking sidebar on desktop (top-24)
  - Fully responsive: mobile single column, desktop 5-col grid
- Imprinted to ui-registry.md

## Next session starts with

Build remaining screens:
1. Booking Flow (multi-step)
2. Map page, Search with filters, Bookings list, etc.

## Open questions

- None
