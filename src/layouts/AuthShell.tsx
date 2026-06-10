import { Link, Outlet } from 'react-router-dom'

export function AuthShell() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <Link to="/" className="font-display text-3xl font-semibold text-foreground">
            Table
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">
            Discover & book the best restaurants
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  )
}
