# Screen — Discover

**Route:** `/` · **Shell:** AppShell · **Primary action:** Tap a restaurant card → navigate to detail

## Purpose
The user discovers restaurants to book — the most frequent task is scanning nearby/featured options and tapping one that looks interesting.

## Component tree
PageHeader (mobile)
  Input(search, placeholder: "Search restaurants, cuisines...")
  MapPin(location), Chip("Downtown"), Chip("2.4 mi")
CategoryRow
  Chip(cuisine) × 6, Link("See all")
Section("Featured this week")
  Link("See all")
  ScrollRow
    RestaurantCard × 4 (horizontal scroll)
Section("Closest to you")
  Link("See all")
  CardGrid
    RestaurantCard × N
EmptyState(when no restaurants)
  SearchIcon, heading, description

## Wireframe
```
DESKTOP                                                      MOBILE
(handled by AppShell top bar)                                ┌──────────────────────────┐
┌──────────────────────────────────────────────┐             │ [⌕ Search restaurants___]│
│ LOGO  [⌕ Search...]  [SF ▾]  👤             │             │                          │
├──────────────────────────────────────────────┤             │ 📍 Downtown · 2.4 mi ▾  │
│ 📍 Downtown ▾        CATEGORIES:             │             │                          │
│ [Italian][Sushi][Mexican][Indian][More ▸]    │             │ CATEGORIES →             │
│                                                │             │ [Italian][Sushi][Mexica]│
│ FEATURED THIS WEEK      → See all             │             │                          │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐       │             │ FEATURED THIS WEEK  →   │
│ │ ~img~    │ │ ~img~    │ │ ~img~    │←scroll│             │ ┌────┐ ┌────┐ ┌────┐    │
│ │ Noma     │ │ Flour    │ │ Octo     │       │             │ │img~│ │img~│ │img~│    │
│ │ Italian$$│ │ Sushi $$ │ │ Seafood$$│       │             │ │Noma│ │Flou│ │Octo│    │
│ │ ★4.8     │ │ ★4.7     │ │ ★4.9     │       │             │ └────┘ └────┘ └────┘    │
│ │ [*Book*] │ │ [*Book*] │ │ [*Book*] │       │             │                          │
│ └──────────┘ └──────────┘ └──────────┘       │             │ CLOSEST TO YOU  →        │
│                                                │             │ ┌────────────────────┐  │
│ CLOSEST TO YOU          → See all              │             │ │~img~ NOMA          │  │
│ ┌────────────────┐ ┌────────────────┐          │             │ │      Italian · $$  │  │
│ │ ~img~  NOMA   │ │ ~img~  FLOUR   │          │             │ │      ★4.8 · 0.2mi  │  │
│ │        Ita·$$ │ │        Sus·$$  │          │             │ │      [*Book*]      │  │
│ │        ★4.8   │ │        ★4.6   │          │             │ └────────────────────┘  │
│ │        [*Bk*] │ │        [*Bk*] │          │             ├──────────────────────────┤
│ └────────────────┘ └────────────────┘          │             │ ⌂  ⌕  ☰  👤            │
└──────────────────────────────────────────────┘             └──────────────────────────┘
```

## Interactions
- RestaurantCard tap → navigates to `/restaurants/:id`
- "See all" → navigates to filtered list or `/search` with pre-applied filter
- Category Chip tap → navigates to `/search?cuisine=Italian`
- Search input → debounced, navigates to `/search?q=...` after 300ms idle
- Location chip → opens Sheet with location picker
- Heart icon on RestaurantCard (future) → optimistic toggle, toast "Saved · Undo"

## States
| State | Spec |
|---|---|
| Default | Featured horizontal scroll row + nearby grid. At least 2 restaurant cards visible above the fold on mobile. |
| Empty | Icon (Compass), "No restaurants found in your area — try expanding your search radius." [Browse all]. Only shows if geolocation + filters yield zero results. |
| Loading | Skeleton: 3 category chips (narrow bars) + 4 restaurant card skeletons (aspect-[4/3] image bar + 3 text bars) in horizontal scroll + 2 more card skeletons in grid below. |
| Error | Banner above sections: "Couldn't load restaurant data. [Retry]" — content area shows cached/demo data if available, otherwise shows EmptyState with retry path. |
| Mobile | Search input renders inside page (not in shell header). Featured section scrolls horizontally. Bottom tab bar visible. Desktop search lives in shell top bar. |

## Copy
| Element | Text |
|---|---|
| Search placeholder | Search restaurants, cuisines... |
| Categories heading | CATEGORIES |
| Featured heading | Featured this week |
| Nearby heading | Closest to you |
| See all | See all |
| Empty state heading | No restaurants found |
| Empty state body | Try expanding your search radius |
| Error banner | Couldn't load restaurant data. Retry |

## Proposed design-system amendment
None — uses existing system.
