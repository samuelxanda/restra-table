# Screen — Restaurant Detail

**Route:** `/restaurants/:id` · **Shell:** AppShell · **Primary action:** Reserve a table

## Purpose
The user evaluates a restaurant and commits to a booking — the conversion screen. The most frequent task is reading reviews + checking availability, then tapping Reserve.

## Component tree
PageHeader
  Link("← Back to results"), Heart(icon), Share(icon)
ImageGallery
  Image × N (carousel with dots + counter)
InfoPanel
  Name(display), Cuisine & Price, StarRating, MapPin(distance & location)
BookingCTACard
  Button(primary: "Reserve a table")
  Caption("Date · Time · Guests summary")
AboutSection
  Description, Tags × N, Hours(Clock), Phone, Address(MapPin), Website(ExternalLink)
MenuSection
  ListItem("Dinner Menu (PDF)"), ListItem("Wine List (PDF)"), ListItem("Lunch Menu (PDF)")
ReviewsSection
  Heading("Reviews (N)"), Link("See all →")
  ReviewCard × N
    Avatar(initials), Name, Date, StarRating, Text
DesktopBookingSidebar(sticky)
  Card("Make a reservation"), Date/Time/Guests picker, Button(primary: "Reserve a table"), Caption

## Wireframe
```
DESKTOP                                                    MOBILE
┌──────────────────────────────────────────────────────┐   ┌──────────────────────────┐
│ ← Back to results                         ♡  Share  │   │ ← Back        ♡  ⋯       │
├──────────────────────────────────────────────────────┤   ├──────────────────────────┤
│ ┌─────────────────┬────────────────────────────┐     │   │ ┌──────────────────────┐ │
│ │                 │ NOMA                       │     │   │ │    ~ Hero ~          │ │
│ │   ~ Main        │ Italian · $$$              │     │   │ │    Gallery           │ │
│ │     Image       │ ★ 4.8 (342 reviews)        │     │   │ │    ◂ 1/4 ▸          │ │
│ │                 │ 📍 0.2 mi · Downtown       │     │   │ └──────────────────────┘ │
│ └─────────────────┴────────────────────────────┤     │   │                          │
│ ┌────────────────────────────────────────────┐ │     │   │ NOMA                     │
│ │ [*Reserve a table*]                        │ │     │   │ Italian · $$$            │
│ │ Tue, Jun 16 · 8:00 PM · 2 guests           │ │     │   │ ★ 4.8 (342 reviews)      │
│ └────────────────────────────────────────────┘ │     │   │ 📍 0.2 mi · Downtown     │
│                                                  │     │   │                          │
│ ───── ABOUT ────────────────────────────────     │     │   │ [*Reserve a table*]      │
│ "The best pasta north of Rome." — NYT           │     │   │ Tue · 8PM · 2 guests     │
│ Italian · $$$ · Mon–Sat 5PM–11PM               │     │   │                          │
│ (555) 123-4567 · noma.city                      │     │   │ ──── ABOUT ────────────  │
│                                                  │     │   │ "The best pasta..."      │
│ ───── MENU ────────────────────────────────     │     │   │ Mon–Sat 5PM–11PM         │
│ ▸ Dinner Menu     (PDF)                         │     │   │                          │
│ ▸ Wine List       (PDF)                         │     │   │ ▸ Menu & Prices          │
│ ▸ Lunch Menu      (PDF)                         │     │   │ ▸ Reviews    (342)       │
│                                                  │     │   │ ▸ Location   [Map]      │
│ ───── REVIEWS ──────────────────────────────     │     │   │                          │
│ (avatar) ★★★★★ "Incredible..." — Maria K.      │     │   ├──────────────────────────┤
│ [See all 342 reviews →]                          │     │   │ ⌂  ⌕  ☰  ♡  👤          │
└──────────────────────────────────────────────────────┘   └──────────────────────────┘
```

## Interactions
- "Reserve a table" → navigates to `/restaurants/:id/book`
- Gallery arrows/dots → cycle images; full-screen overlay on tap (future)
- Heart → optimistic toggle, toast "Saved to wishlist · Undo"
- Share → native share sheet (mobile) or copy link (desktop)
- Menu items → open PDF in new tab (or trigger download)
- "See all reviews" → expands to full review list inline or navigates (TBD)

## States
| State | Spec |
|---|---|
| Default | Gallery + info + booking CTA + about + menu + reviews, all populated. Sticky booking sidebar on desktop. |
| Empty | N/A — restaurant detail is always for a specific restaurant. 404 state if ID is invalid: "Restaurant not found. [Back to Discover]" |
| Loading | Skeleton: aspect-[16/9] gallery bar + heading bar (2 lines) + 3 text bars + button bar + section divider + 4 review card skeletons. |
| Error | Banner: "Couldn't load restaurant details. [Retry]" — if partial data exists (name + image loaded), show what's available with the error banner above. |
| Mobile | Gallery full-width above fold. Info stacked below. Booking CTA floats or sits inline after gallery. Bottom tab bar visible. Desktop: 5-col grid with sticky sidebar. |

## Copy
| Element | Text |
|---|---|
| Back link | ← Back to results |
| Reserve button | Reserve a table |
| Booking summary | Tue, Jun 16 · 8:00 PM · 2 guests |
| Cancellation policy | No charge for cancellations up to 2hrs before |
| About heading | ABOUT |
| Menu heading | MENU |
| Reviews heading | Reviews (N) |
| See all reviews | See all → |
| 404 | Restaurant not found. Back to Discover |
| Error banner | Couldn't load restaurant details. Retry |

## Proposed design-system amendment
None — uses existing system.
