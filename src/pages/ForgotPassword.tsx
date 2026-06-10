import { Link } from 'react-router-dom'

export function ForgotPassword() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="font-display text-xl font-semibold text-foreground">Reset password</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and we'll send you a reset link
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <button className="w-full rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground hover:bg-accent-hover transition-colors">
          Send reset link
        </button>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        <Link to="/login" className="hover:text-foreground">Back to sign in</Link>
      </p>
    </div>
  )
}
