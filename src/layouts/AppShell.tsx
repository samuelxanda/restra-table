import { Link, Outlet } from 'react-router-dom'
import { Search, MapPin, Heart, User } from 'lucide-react'
import { BottomTabBar } from '@/components/BottomTabBar'
import { ToastContainer } from '@/components/ui/Toast'

export function AppShell() {
  return (
    <div className="relative flex min-h-dvh flex-col bg-background">
      <header className="sticky top-0 z-40 hidden border-b border-border bg-card lg:block">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center gap-6 px-6">
          <Link to="/" className="font-display text-xl font-semibold text-foreground">
            Table
          </Link>

          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search restaurants, cuisines..."
              className="w-full rounded-lg border border-border bg-background py-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <button className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
            <MapPin className="h-4 w-4" />
            San Francisco
          </button>

          <button className="flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-accent-hover transition-colors">
            Reserve
          </button>

          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Heart className="h-5 w-5" />
          </button>

          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <User className="h-5 w-5" />
          </button>
        </div>
      </header>

      <main className="flex-1 pb-16 lg:pb-0">
        <div className="mx-auto w-full max-w-[1200px] px-4 py-6 lg:px-6">
          <Outlet />
        </div>
      </main>

      <BottomTabBar />
      <ToastContainer />
    </div>
  )
}
