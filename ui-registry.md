# UI Registry — Table

## Button

File: `src/components/ui/Button.tsx`
Last updated: 2026-06-10

| Property | Class |
| --- | --- |
| Background (primary) | `bg-accent` |
| Text (primary) | `text-accent-foreground` |
| Background (secondary) | `bg-background` |
| Border (secondary) | `border border-border` |
| Text (secondary) | `text-foreground` |
| Background (ghost) | none / `hover:bg-muted` |
| Background (danger) | `bg-destructive` |
| Text (danger) | `text-destructive-foreground` |
| Border radius | `rounded-lg` |
| Font | `font-medium` |
| Transition | `transition-colors` |
| Focus ring | `focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2` |
| Disabled | `disabled:pointer-events-none disabled:opacity-50` |
| Hover (primary) | `hover:bg-accent-hover` |
| Hover (secondary/ghost) | `hover:bg-muted` |
| Hover (danger) | `hover:opacity-90` |
| Shadow (primary) | `shadow-sm` |
| Sizes | sm: `px-3 py-1.5 text-xs`, md: `px-4 py-2 text-sm`, lg: `px-6 py-3 text-base` |

**Pattern notes:**
- One primary per view. Use secondary/ghost for less prominent actions.
- All buttons use inline-flex with items-center justify-center gap-2.

## Input

File: `src/components/ui/Input.tsx`
Last updated: 2026-06-10

| Property | Class |
| --- | --- |
| Background | `bg-background` |
| Border | `border border-border` |
| Text | `text-foreground` |
| Placeholder | `placeholder:text-muted-foreground` |
| Border radius | `rounded-lg` |
| Padding | `px-3 py-2` |
| Font size | `text-sm` |
| Focus | `focus:outline-none focus:ring-2 focus:ring-ring` |
| Disabled | `disabled:cursor-not-allowed disabled:opacity-50` |
| Label | `text-sm font-medium text-foreground` |
| Label spacing | wrapper `space-y-2` |

**Pattern notes:**
- Always use wrapper div with `space-y-2` for label + input combos.
- W-full by default.

## Card

File: `src/components/ui/Card.tsx`
Last updated: 2026-06-10

| Property | Class |
| --- | --- |
| Background | `bg-card` |
| Border | `border border-border` |
| Border radius | `rounded-xl` |
| Shadow (resting) | `shadow-resting` |
| Shadow (raised/hover) | `transition-shadow hover:shadow-raised` |
| Image container | `overflow-hidden rounded-t-xl` |
| Image | `h-full w-full object-cover` |
| Content padding | `p-4` |

**Pattern notes:**
- Cards are the primary container for restaurant listings.
- Resting shadow by default; interactive cards get hover:shadow-raised.

## RestaurantCard

File: `src/components/ui/RestaurantCard.tsx`
Last updated: 2026-06-10

| Property | Class |
| --- | --- |
| Background | `bg-card` |
| Border | `border border-border` |
| Border radius | `rounded-xl` |
| Shadow (resting) | none |
| Shadow (hover) | `hover:shadow-raised` |
| Image aspect | `aspect-[4/3]` |
| Image hover | `group-hover:scale-105 transition-transform duration-300` |
| Name | `font-display text-lg font-semibold text-foreground` |
| Detail text | `text-sm text-muted-foreground` |
| Distance/location | `text-xs text-muted-foreground` |
| Content spacing | `space-y-1.5` inside text block, `p-4` |
| Button area | `px-4 pb-4` |

**Pattern notes:**
- Restaurant name uses Playfair Display (`font-display`).
- The "Reserve" button fills card width on mobile.

## Chip

File: `src/components/ui/Chip.tsx`
Last updated: 2026-06-10

| Property | Class |
| --- | --- |
| Background (default) | `bg-background` |
| Border (default) | `border border-border` |
| Text (default) | `text-foreground` |
| Background (selected) | `bg-accent-soft` |
| Border (selected) | `border-accent` |
| Text (selected) | `text-accent` |
| Border radius | `rounded-full` |
| Padding | `px-3 py-1` |
| Font | `text-sm font-medium` |
| Hover (default) | `hover:bg-muted` |

**Pattern notes:**
- Used for category/cuisine filters.
- Selected state uses accent color palette.

## StarRating

File: `src/components/ui/StarRating.tsx`
Last updated: 2026-06-10

| Property | Class |
| --- | --- |
| Filled star | `fill-warning text-warning` |
| Empty star | `text-border` |
| Rating number | `font-medium text-warning` |
| Review count | `text-muted-foreground` |
| Layout | `inline-flex items-center gap-1` |
| Sizes | sm: `h-3 w-3 text-xs`, md: `h-4 w-4 text-sm`, lg: `h-5 w-5 text-base` |

**Pattern notes:**
- Warning color token used for star ratings (gold).
- Display-only for now; no interactive variant.

## StatusBadge

File: `src/components/ui/StatusBadge.tsx`
Last updated: 2026-06-10

| Property | Class |
| --- | --- |
| Border radius | `rounded-full` |
| Padding | `px-2.5 py-0.5` |
| Font | `text-xs font-medium` |
| Layout | `inline-flex items-center` |
| Confirmed | `bg-success/10 text-success` |
| Pending | `bg-warning/10 text-warning` |
| Cancelled | `bg-destructive/10 text-destructive` |
| Completed | `bg-muted text-muted-foreground` |

**Pattern notes:**
- Status uses 10% opacity background with matching text color.

## Skeleton

File: `src/components/ui/Skeleton.tsx`
Last updated: 2026-06-10

| Property | Class |
| --- | --- |
| Background | `bg-muted` |
| Border radius | `rounded-lg` |
| Animation | `animate-pulse` |
| SkeletonCard radius | `rounded-xl` |
| SkeletonCard border | `border border-border` |
| SkeletonCard bg | `bg-card` |

## BottomTabBar

File: `src/components/BottomTabBar.tsx`
Last updated: 2026-06-10

| Property | Class |
| --- | --- |
| Bar background | `bg-card` |
| Bar border | `border-t border-border` |
| Bar height | `h-16` |
| Tab text (inactive) | `text-muted-foreground text-xs font-medium` |
| Tab text (active) | `text-accent` |
| Icon size | `h-5 w-5` |
| Layout | `fixed bottom-0 left-0 right-0 z-50` |

**Pattern notes:**
- Only visible on mobile (< 1024px).
- Active tab uses accent color.

## AppShell Top Bar

File: `src/layouts/AppShell.tsx`
Last updated: 2026-06-10

| Property | Class |
| --- | --- |
| Bar background | `bg-card` |
| Bar border | `border-b border-border` |
| Bar height | `h-16` |
| Content max-width | `max-w-[1200px]` |
| Desktop breakpoint | `lg:block` (hidden on mobile) |
| Search input | same as Input component pattern |
| Brand text | `font-display text-xl font-semibold text-foreground` |
| Icon buttons | `text-muted-foreground hover:text-foreground transition-colors` |
| Reserve button | matches Button primary pattern |

## AuthShell

File: `src/layouts/AuthShell.tsx`
Last updated: 2026-06-10

| Property | Class |
| --- | --- |
| Layout | `min-h-dvh flex items-center justify-center` |
| Background | `bg-background` |
| Content max-width | `max-w-sm` |
| Brand text | `font-display text-3xl font-semibold text-foreground` |
| Brand subtitle | `text-sm text-muted-foreground` center aligned |

## FocusShell

File: `src/layouts/FocusShell.tsx`
Last updated: 2026-06-10

| Property | Class |
| --- | --- |
| Background | `bg-background` |
| Header bg | `bg-card` |
| Header border | `border-b border-border` |
| Header height | `h-14` |
| Content max-width | `max-w-[800px]` |
| Brand text | `font-display text-lg font-semibold text-foreground` |
| Back/exit text | `text-sm font-medium text-muted-foreground hover:text-foreground transition-colors` |

## ImageGallery

File: `src/components/ui/ImageGallery.tsx`
Last updated: 2026-06-10

| Property | Class |
| --- | --- |
| Wrapper | `relative overflow-hidden rounded-xl bg-muted` |
| Image | `aspect-[16/9] h-full w-full object-cover` |
| Nav button | `absolute left/right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white hover:bg-black/60` |
| Dot indicators | `h-1.5 rounded-full` active: `w-4 bg-white`, inactive: `w-1.5 bg-white/60` |
| Counter | `absolute right-3 top-3 rounded-full bg-black/50 px-2 py-0.5 text-xs text-white` |

**Pattern notes:**
- Carousel with dot indicators and prev/next arrows.
- Counter badge in top-right corner.

## Restaurant Detail Page

File: `src/pages/RestaurantDetail.tsx`
Last updated: 2026-06-10

| Property | Class |
| --- | --- |
| Layout (desktop) | `lg:grid lg:grid-cols-5 lg:gap-8` with image spanning 3 cols, info 2 cols |
| Divider sections | `text-xs font-semibold uppercase tracking-wider text-muted-foreground` |
| Tag pills | `rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent` |
| Info row | `flex items-center gap-2 text-sm text-muted-foreground` |
| Menu item | `flex w-full items-center justify-between rounded-lg border border-border px-4 py-3 text-sm text-foreground hover:bg-muted` |
| Review card | `rounded-xl border border-border bg-card p-4` |
| Avatar | `flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-medium text-foreground` |
| Sticky sidebar (desktop) | `sticky top-24` with booking summary card |
| Booking summary card | `rounded-xl border border-border bg-card p-4` |
| Booking detail boxes | `rounded-lg border border-border bg-background px-3 py-2 text-center` |

**Pattern notes:**
- Desktop uses a 5-column grid: 3 cols for content, 2 for sticky sidebar.
- Mobile is a single-column stack.
- Back/action buttons row: `flex items-center justify-between`.

## BookingFlow

File: `src/pages/BookingFlow.tsx`
Last updated: 2026-06-10

| Property | Class |
| --- | --- |
| Step circle (completed) | `bg-accent text-accent-foreground` with Check icon |
| Step circle (current) | `border-2 border-accent bg-accent-soft text-accent` |
| Step circle (upcoming) | `border-2 border-border bg-background text-muted-foreground` |
| Step connector | `h-px w-12 sm:w-20` completed: `bg-accent`, pending: `bg-border` |
| Selection (active) | `border-accent bg-accent-soft text-accent` |
| Selection (default) | `border-border bg-background text-foreground hover:bg-muted` |
| Time grid | `grid grid-cols-3 gap-2 sm:grid-cols-4` |
| Confirmation card | `rounded-xl border border-border bg-card p-6 text-center` |
| Success icon circle | `h-16 w-16 rounded-full bg-success/10` with `text-success` Check |
| Detail row | `flex justify-between text-sm` with `text-muted-foreground` label and `font-medium text-foreground` value |

**Pattern notes:**
- 3-step flow: When → Your Info → Confirm.
- Step indicator shows completed (checkmark), current (outlined), and upcoming (muted) states.
- All selections use the same active/inactive pattern as Chip.

## Search / Filter Panel

File: `src/pages/Search.tsx`
Last updated: 2026-06-10

| Property | Class |
| --- | --- |
| Filter panel | `rounded-xl border border-border bg-card p-4` |
| Filter section heading | `text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2` |
| Active filter badge | `h-5 w-5 rounded-full bg-accent text-xs text-accent-foreground` |
| Clear filters | `text-xs text-accent hover:underline` |
| Empty state | `rounded-xl border border-border bg-card p-12 text-center` |
| Empty icon | `mx-auto h-10 w-10 text-muted-foreground/40` |
| Empty heading | `font-display text-lg font-semibold text-foreground` |

## Bookings

File: `src/pages/Bookings.tsx`
Last updated: 2026-06-10

| Property | Class |
| --- | --- |
| Tab bar | `flex gap-1 rounded-lg bg-muted p-1` |
| Tab (active) | `flex-1 rounded-md bg-card text-foreground shadow-sm` |
| Tab (inactive) | `flex-1 text-muted-foreground hover:text-foreground` |
| Booking card | `flex gap-4 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-raised` |
| Booking image | `h-20 w-20 rounded-lg object-cover flex-shrink-0` |
| Booking name | `font-display text-base font-semibold text-foreground truncate` |
| Booking detail row | `flex items-center gap-1.5 text-sm text-muted-foreground` |

**Pattern notes:**
- Tab bar uses `bg-muted` container with `bg-card shadow-sm` for active tab.

## Profile

File: `src/pages/Profile.tsx`
Last updated: 2026-06-10

| Property | Class |
| --- | --- |
| Avatar | `h-16 w-16 rounded-full bg-accent-soft text-xl font-semibold text-accent` |
| Section heading | `text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3` |
| Settings list | `rounded-xl border border-border bg-card divide-y divide-border` |
| Settings item | `flex items-center gap-3 px-4 py-3.5 text-sm text-foreground hover:bg-muted` |
| Settings icon | `h-5 w-5 text-muted-foreground` |
| Sign out | `text-destructive` |
| Version | `text-center text-xs text-muted-foreground` |

## Map Page

File: `src/pages/MapPage.tsx`
Last updated: 2026-06-10

| Property | Class |
| --- | --- |
| Map container | `aspect-[4/3] rounded-xl bg-muted lg:aspect-auto lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)]` |
| Location button | `absolute bottom-4 right-4 rounded-full bg-card px-4 py-2 shadow-raised hover:bg-muted` |
| Desktop layout | `lg:grid lg:grid-cols-2 lg:gap-6` |

## BookingFlow

File: `src/pages/BookingFlow.tsx`

All values defined in `src/index.css` as CSS custom properties, mapped through `@theme inline` for Tailwind v4.

| Token | Variable | Value |
| --- | --- | --- |
| bg-background | `--background` | `#F8F7F5` |
| bg-card | `--card` | `#FFFFFF` |
| bg-muted | `--muted` | `#EDEBE7` |
| text-foreground | `--foreground` | `#1A1817` |
| text-muted-foreground | `--muted-foreground` | `#6B6966` |
| text-accent | `--accent` | `#E85D3A` |
| text-warning | `--warning` | `#D4A130` |
| text-destructive | `--destructive` | `#D43B3B` |
| text-success | `--success` | `#2E7D5E` |
| border-border | `--border` | `#E2DFDB` |
| ring-ring | `--ring` | `#E85D3A` |
| rounded-lg | `--radius` | 0.75rem |
| rounded-xl | calc | 1rem (0.75rem + 0.25rem) |
| font-sans | `--font-sans` | Inter |
| font-display | `--font-display` | Playfair Display |
