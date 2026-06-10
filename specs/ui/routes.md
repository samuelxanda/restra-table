# Routes — Table

| Route | Shell | Purpose (one line) | Spec |
|---|---|---|---|
| / | AppShell | Discover: browse restaurants, search, curated lists | screens/discover-screen.md |
| /map | AppShell | Map-based discovery: see restaurants near current location | — |
| /search | AppShell | Full search results with filters | — |
| /bookings | AppShell | User's upcoming and past reservations | — |
| /bookings/:id | AppShell | Single booking detail and actions (cancel, modify) | — |
| /restaurants/:id | AppShell | Full restaurant profile: photos, menu, reviews, booking CTA | screens/restaurant-detail-screen.md |
| /restaurants/:id/book | FocusShell | Multi-step booking flow: date/time/guests/confirm | screens/booking-flow-screen.md |
| /list/:slug | AppShell | Curated list view (e.g. "Best Italian", "Top 10 Date Spots") | — |
| /saved | AppShell | User's saved/wishlist restaurants | — |
| /profile | AppShell | Account settings, preferences, payment methods | — |
| /login | AuthShell | Sign in with email or OAuth | — |
| /signup | AuthShell | Create account | — |
| /forgot-password | AuthShell | Password reset flow | — |

## Hierarchy

```
/login
/signup
/forgot-password
/
  ├── /search
  ├── /map
  ├── /restaurants/:id
  │     └── /restaurants/:id/book
  ├── /bookings
  │     └── /bookings/:id
  ├── /list/:slug
  ├── /saved
  └── /profile
```
