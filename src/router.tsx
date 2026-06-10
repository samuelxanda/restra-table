import { createBrowserRouter } from 'react-router-dom'

import { AppShell } from '@/layouts/AppShell'
import { AuthShell } from '@/layouts/AuthShell'
import { FocusShell } from '@/layouts/FocusShell'

import { Discover } from '@/pages/Discover'
import { MapPage } from '@/pages/MapPage'
import { Search } from '@/pages/Search'
import { Bookings } from '@/pages/Bookings'
import { BookingDetail } from '@/pages/BookingDetail'
import { RestaurantDetail } from '@/pages/RestaurantDetail'
import { BookingFlow } from '@/pages/BookingFlow'
import { ListPage } from '@/pages/ListPage'
import { Saved } from '@/pages/Saved'
import { Profile } from '@/pages/Profile'
import { Login } from '@/pages/Login'
import { Signup } from '@/pages/Signup'
import { ForgotPassword } from '@/pages/ForgotPassword'

export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      { index: true, element: <Discover /> },
      { path: 'map', element: <MapPage /> },
      { path: 'search', element: <Search /> },
      { path: 'bookings', element: <Bookings /> },
      { path: 'bookings/:id', element: <BookingDetail /> },
      { path: 'restaurants/:id', element: <RestaurantDetail /> },
      { path: 'list/:slug', element: <ListPage /> },
      { path: 'saved', element: <Saved /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
  {
    element: <AuthShell />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
    ],
  },
  {
    element: <FocusShell />,
    children: [
      { path: 'restaurants/:id/book', element: <BookingFlow /> },
    ],
  },
])
