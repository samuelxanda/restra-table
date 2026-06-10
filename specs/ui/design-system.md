# Design System — Table

## Direction
Warm, editorial, photography-forward. Restaurants sell with visuals — the UI is a clean gallery that gets out of the way. A coral accent (appetite-stimulating, energetic) on a chalky-warm neutral base. Editorial serif for restaurant names evokes food magazines and trusted guides; a crisp sans for UI keeps browsing fast. The signature element: restaurant cards that feel like stacked Polaroids — generous image, minimal text overlay, whitespace breathing around each.

## Color tokens

| Token | Value | Use |
|---|---|---|
| surface-base | #F8F7F5 | page background — warm chalk |
| surface-raised | #FFFFFF | cards, panels, sheets |
| surface-sunken | #EDEBE7 | skeleton, depressed states |
| content-primary | #1A1817 | main text (near-black, warm tint) |
| content-secondary | #6B6966 | supporting text, labels |
| content-disabled | #B0AEAB | disabled text |
| accent | #E85D3A | primary action — coral |
| accent-hover | #D04A2A | hover/pressed |
| accent-soft | #FDF0EC | badge, light background for accent |
| success | #2E7D5E | confirmed booking, available |
| warning | #D4A130 | popular time, limited seats |
| danger | #D43B3B | cancellation, error |
| info | #4A7BA7 | informational |
| border | #E2DFDB | dividers, input borders |

**Dark mode tokens** (same roles, shifted values):
| Token | Value |
|---|---|
| surface-base | #1A1817 |
| surface-raised | #242220 |
| surface-sunken | #121110 |
| content-primary | #F0EFED |
| content-secondary | #A09E9B |
| accent | #F07A5A |
| border | #3A3835 |

## Typography

- **Display**: `Playfair Display`, weights 400 (regular), 600 (semibold), 700 (bold) — used for restaurant names, hero headings, brand voice elements
- **Body**: `Inter`, weights 400 (regular), 500 (medium), 600 (semibold) — used for all UI, body copy, labels
- **Scale** (ratio 1.25 — major third): 12 / 14 / 16 / 20 / 25 / 31 / 39 / 49
- Body text: 16px, line-height 1.5, max line length 70ch
- Heading line-height: 1.15–1.25, tighter letter-spacing at larger sizes
- Restaurant names: 20px/25px Playfair Display Semibold — immediately distinguishable from UI text

## Spacing, shape, elevation

- **Spacing scale (4px base)**: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96
- **Radius**: 4px (inputs, small elements), 12px (cards, sheets), 20px (modals), 9999px (pills, badges, avatars)
- **Elevation** (3 levels):
  - *Resting*: 0 1px 2px rgba(26,24,23,0.06) — default cards
  - *Raised*: 0 4px 12px rgba(26,24,23,0.10) — hovered card, dropdown
  - *Overlay*: 0 8px 32px rgba(26,24,23,0.14) — modal, side panel
- **Density**: Comfortable — 48px minimum row height, 16px card internal padding, 24px section spacing

## Component inventory

| Component | Variants | Notes |
|---|---|---|
| Button | primary (filled accent), secondary (outlined), ghost, danger | one primary per view |
| Input | text, search, textarea, select, date/time picker | label above, inline validation |
| Card | restaurant (image+dots), booking (info), interactive | 12px radius, raised on hover |
| RestaurantCard | grid card, list card | image, name, cuisine, rating, price, distance, book CTA |
| ImageGallery | hero (single), carousel (multi), thumbnail strip | aspect-ratio locked, no layout shift |
| Chip | filter, category, cuisine tag | rounded pill, selectable |
| BottomTabBar | 4 tabs with icons+labels | current tab marked with accent |
| Modal | confirm, cancel-booking | one level max, never stacked |
| Sheet | bottom sheet (mobile), side panel (desktop) | for date/time/guest picker |
| Toast / Banner | success, error, info | toast transient (4s + undo), banner persistent |
| EmptyState | icon + heading + description + action | never blank |
| Skeleton | text, card, image, list-row | mirrors final layout dimensions |
| StarRating | interactive (tap) and display-only | show decimal + review count |
| StatusBadge | confirmed, pending, cancelled, completed | |
| Avatar | user photo or initials | 40px default |
| Tabs | horizontal, scrollable | for restaurant detail sub-sections |

## Amendment log
| Date | Change | Reason |
|---|---|---|
| 2026-06-10 | Added `accent-hover` token (#D04A2A) | Required for Button hover state; spec referenced it but no token existed |
| 2026-06-10 | Added 3-level shadow tokens (resting/raised/overlay) | Needed for Card elevation per design spec |
| 2026-06-10 | Added ImageGallery component | Carousel for restaurant detail hero images |
| 2026-06-10 | Added RestaurantCard component | Core listing card — image + info + CTA |
| 2026-06-10 | Added StarRating, Chip, StatusBadge, Skeleton components | Filled gaps in component inventory |
| 2026-06-10 | Added Modal, Sheet, Toast, Avatar, Slot components | Filled gaps from unimplemented inventory; Slot enables Button asChild |
| 2026-06-10 | Added screen specs for Discover, Restaurant Detail, Booking Flow | Screen specs were entirely missing |
| 2026-06-10 | Fixed FocusShell exit guard | Spec required booking-flow exit confirmation; was missing |
| 2026-06-10 | Fixed step indicator touch targets (32px → 44px) | Violated accessibility baseline for mobile touch targets |
