import { NavLink } from 'react-router-dom'
import { Compass, Map, Calendar, User } from 'lucide-react'

const tabs = [
  { to: '/', label: 'Explore', icon: Compass },
  { to: '/map', label: 'Map', icon: Map },
  { to: '/bookings', label: 'Bookings', icon: Calendar },
  { to: '/profile', label: 'Me', icon: User },
]

export function BottomTabBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card lg:hidden">
      <div className="flex h-16 items-center justify-around px-2">
        {tabs.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className="flex flex-col items-center gap-0.5 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors aria-[current=page]:text-accent"
          >
            <Icon className="h-5 w-5" />
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
