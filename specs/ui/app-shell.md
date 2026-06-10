# App Shell — Table

## Navigation model
**Bottom tab bar (4 tabs) on mobile; condensed top bar on desktop.** Consumer mobile-first app — people discover restaurants on phones while out or planning. The bottom bar keeps core destinations one thumb-reach away. Desktop gets a persistent top search bar because browsing shifts to "planning mode" with more screen real estate. The primary action (booking) lives inside restaurant detail, not in global nav.

## Shell layout

```
MOBILE                              DESKTOP
┌──────────────────────┐           ┌────────────────────────────────────────────┐
│                      │           │ LOGO   [⌕ Search restaurants, cuisine...]   │
│    CONTENT AREA      │           │       ┌─[San Francisco ▾]                  │
│    (full width)      │           │       │  [*Reserve*]  ♡  👤  ⋯            │
│                      │           ├────────────────────────────────────────────┤
│                      │           │          CONTENT AREA                      │
│                      │           │    (max-width 1200px, centered)            │
│                      │           │                                            │
│                      │           │                                            │
├──────────────────────┤           └────────────────────────────────────────────┘
│  ⌂ Explore  ⌕ Map   │
│  ☰ Bookings  👤 Me  │
└──────────────────────┘
```

## Layout shells

| Shell | Used by | Structure |
|---|---|---|
| AppShell | all primary tabs, restaurant detail, booking flow | mobile: full content + bottom tab bar; desktop: top bar + centered content (no bottom bar) |
| AuthShell | login, signup, forgot-password | centered card, no nav elements, brand logo at top |
| FocusShell | checkout/booking confirmation | minimal: logo + progress stepper + content + exit guard ("Leave? Your table won't be held") |

## Overlay policy
- **Bottom sheet** (mobile) / **Side panel** (desktop): date/time/party-size picker, restaurant filters, confirm booking details
- **Modal**: booking cancellation confirmation, destructive actions — one level deep, never stacked
- **Toast**: bottom-center mobile / bottom-left desktop, 4s auto-dismiss, includes undo for cancellations
- **Full-screen overlay**: photo gallery when tapping a restaurant image

## Responsive strategy
- **Breakpoints**: 360 / 768 / 1024 / 1280
- **≤ 767 (mobile)**: bottom tab bar, full-width cards, sheets slide up from bottom, filters in bottom sheet
- **768–1023 (tablet)**: bottom tab bar remains, 2-column card grid, side panel instead of bottom sheet
- **≥ 1024 (desktop)**: top bar replaces bottom tab bar, 3-column card grid, left sidebar for persistent filters on search
- **≥ 1280**: max-width 1200px content container centered, optional map sidebar on Discover

## Key screens (wireframes)

### Screen 1: Discover (home tab — the most frequent entry point)

```
MOBILE                                              DESKTOP
┌──────────────────────────────────────┐           ┌──────────────────────────────────────────────┐
│ [⌕ Search restaurants, cuisines...]  │           │ LOGO  [⌕ Search...]  [SF ▾]  👤             │
│                                      │           ├──────────────────────────────────────────────┤
│ 📍 Downtown · 2.4 mi ▾              │           │ 📍 Downtown ▾        CATEGORIES:              │
│                                      │           │ [Italian][Sushi][Mexican][Indian][More ▸]    │
│ CATEGORIES →                         │           │                                                │
│ [Italian] [Sushi] [Mexican] [▸]     │           │ FEATURED THIS WEEK    → See all               │
│                                      │           │ ┌────────┐ ┌────────┐ ┌────────┐             │
│ FEATURED THIS WEEK   →               │           │ │ ~img~  │ │ ~img~  │ │ ~img~  │  ← scroll   │
│ ┌────┐ ┌────┐ ┌────┐ ← scroll       │           │ │ Noma   │ │ Flour  │ │ Octo   │             │
│ │~img~│ │~img~│ │~img~│             │           │ └────────┘ └────────┘ └────────┘             │
│ │Noma │ │Flour│ │Octo │             │           │                                                │
│ └────┘ └────┘ └────┘               │           │ CLOSEST TO YOU    → See all                    │
│                                      │           │ ┌────────────────────────┐ ┌────────────────┐ │
│ NEARBY   →                           │           │ │ ~img~   Noma          │ │ ~img~  Flour   │ │
│ ▦ ┌──────────────────────┐          │           │ │         Italian · $$   │ │       Sushi·$$ │ │
│   │ ~img~  NOMA          │          │           │ │         ★4.8 · 0.2 mi  │ │       ★4.6 ·0.4│ │
│   │        Italian · $$   │          │           │ │         [*Book*]       │ │       [*Book*] │ │
│   │        ★4.8 · 0.2mi  │          │           │ └────────────────────────┘ └────────────────┘ │
│   │        [*Book*]      │          │           │ ┌────────────────────────┐ ┌────────────────┐ │
│   └──────────────────────┘          │           │ │ ~img~   Octo          │ │ ~img~  Barano  │ │
│ ▦ ┌──────────────────────┐          │           │ │         Seafood · $$$  │ │       Pizza·$$ │ │
│   │ ~img~  FLOUR + WATER │          │           │ │         ★4.7 · 0.6 mi  │ │       ★4.5 ·0.8│ │
│   │        Sushi · $$     │          │           │ │         [*Reserve*]    │ │       [*Book*] │ │
│   │        ★4.6 · 0.4mi  │          │           │ └────────────────────────┘ └────────────────┘ │
│   │        [*Book*]      │          │           │                                                │
│   └──────────────────────┘          │           ├──────────────────────────────────────────────┤
│                                      │           │ (no bottom bar)                               │
├──────────────────────────────────────┤           └──────────────────────────────────────────────┘
│ ⌂ Explore  ⌕ Map  ☰ Bookings  👤 Me│
└──────────────────────────────────────┘
```

### Screen 2: Restaurant Detail (the conversion screen)

```
MOBILE                                              DESKTOP
┌──────────────────────┐                           ┌──────────────────────────────────────────────┐
│ ← Back     ♡  ⋯     │                           │ ← Back to results    ♡  Share  [*Reserve*]   │
├──────────────────────┤                           ├──────────────────────────────────────────────┤
│ ┌──────────────────┐ │                           │ ┌───────────────┬──────────────────────────┐ │
│ │                  │ │                           │ │               │ NOMA                     │ │
│ │    ~ Hero ~      │ │                           │ │   ~ Main      │ Italian · $$$           │ │
│ │    Gallery       │ │                           │ │     Image     │ ★ 4.8 (342 reviews)     │ │
│ │    ◂ 1/4 ▸      │ │                           │ │               │ 📍 0.2 mi · Downtown     │ │
│ └──────────────────┘ │                           │ └───────────────┴──────────────────────────┤ │
│                      │                           │ ┌──────────────────────────────────────────┐ │
│ NOMA                 │                           │ │ [*Reserve a table*]                      │ │
│ Italian · $$$        │                           │ │ Tue, Jun 16 · 8:00 PM · 2 guests ▸      │ │
│ ★ 4.8 (342 reviews)  │                           │ └──────────────────────────────────────────┘ │
│ 📍 0.2 mi · Downtown │                           │                                              │
│                      │                           │ ────── ABOUT ──────────────────────────     │
│ [*Reserve a table*]  │                           │ "The best pasta north of Rome." — NYT       │
│ Tue · 8PM · 2 guests│                           │ Italian · $$$ · Mon-Sat 5PM-11PM            │
│                      │                           │ (555) 123-4567 · noma.city                 │
│ ───── ABOUT ─────── │                           │                                              │
│ "The best pasta      │                           │ ────── MENU ─────────────────────────────── │
│  north of Rome."     │                           │ ▸ Dinner Menu     (PDF)                     │
│ Mon–Sat 5PM–11PM     │                           │ ▸ Wine List       (PDF)                     │
│                      │                           │ ▸ Lunch Menu      (PDF)                     │
│ ▸ Menu & Prices      │                           │                                              │
│ ▸ Reviews    (342)   │                           │ ────── REVIEWS ───────────────────────────── │
│ ▸ Location   [Map]   │                           │ ┌─────┐ ★★★★★                              │
│                      │                           │ │ ~   │ "Incredible tasting menu. We did    │ │
│                      │                           │ │ a   │ the wine pairing and it was worth   │ │
│                      │                           │ │ v   │ every penny. The service..."        │ │
│                      │                           │ │ a   │ — Maria K. · 2 days ago             │ │
│                      │                           │ │ t   └───────────────────────────────────── │
│                      │                           │ │ a   │ ★★★★★                               │
│                      │                           │ │ r   │ "Cozy atmosphere, impeccable         │ │
│                      │                           │ │ │   │ pasta." — James L. · 1 week ago     │ │
│                      │                           │ └─────┘                                    │
│                      │                           │ [See all 342 reviews →]                     │
├──────────────────────┤                           └──────────────────────────────────────────────┘
│ ⌂  ⌕  ☰  ♡  👤     │
└──────────────────────┘
```

### Screen 3: Booking Flow (the transaction)

```
MOBILE                                              DESKTOP
┌──────────────────────┐                           ┌──────────────────────────────────────────────┐
│ Reserve · Noma       │                           │ LOGO    Booking · Noma              ✕       │
│ Step 2 of 3          │                           ├──────────────────────────────────────────────┤
│ ━━━━━●━━━━━━━━       │                           │ Step 2 of 3  ── ● ────────────               │
├──────────────────────┤                           ├──────────────────────────────────────────────┤
│                      │                           │ ┌──────────────────────────────────────────┐ │
│ WHEN                 │                           │ │ WHEN                      GUESTS          │ │
│                      │                           │ │ ┌────────┐ ┌────────┐   ┌──────────────┐ │ │
│ ┌───┬───┬───┬───┐   │                           │ │ │ Tue    │ │ Jun 16 │   │ 2 guests ▾   │ │
│ │Mo │Tu │We │Th │   │                           │ │ └────────┘ └────────┘   └──────────────┘ │ │
│ └───┴───┴───┴───┘   │                           │ │ ┌────┬────┬────┬────┬────┬────┬────┐     │ │
│ ┌────┬────┬────┐    │                           │ │ │Mo  │Tu  │We  │Th  │Fr  │Sa  │Su  │     │ │
│ │Jun │ 16 │ ▾  │    │                           │ │ └────┴────┴────┴────┴────┴────┴────┘     │ │
│ └────┴────┴────┘    │                           │ │ [5:30] [6:00] [6:30] [7:00] [7:30]       │ │
│                      │                           │ │ [8:00] [8:30] [9:00]                     │ │
│ 5:30  6:00  6:30    │                           │ └──────────────────────────────────────────┘ │
│ 7:00  7:30  8:00    │                           │                                              │
│ 8:30  9:00          │                           │ ┌──────────────────────────────────────────┐ │
│                      │                           │ │ YOUR INFO                                │ │
│ GUESTS               │                           │ │ Name:   [input_______________________]   │ │
│ [2 guests ▾]        │                           │ │ Email:  [input_______________________]   │ │
│                      │                           │ │ Phone:  [input_______________________]   │ │
│ YOUR INFO            │                           │ │ Special requests (optional)              │ │
│ Name   [input____]  │                           │ │ [input___________________________________]│ │
│ Email  [input____]  │                           │ └──────────────────────────────────────────┘ │
│ Phone  [input____]  │                           │                                              │
│                      │                           │ [*Confirm booking*]                          │
│ [*Confirm booking*]  │                           │ No charge for cancellations up to 2hrs      │
│ No charge if         │                           └──────────────────────────────────────────────┘
│ cancelled 2hrs+      │
├──────────────────────┤
│ ⌂  ⌕  ☰  ♡  👤     │
└──────────────────────┘
```
