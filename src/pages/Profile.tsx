import { User, Mail, CreditCard, Bell, LogOut, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'Account',
    items: [
      { icon: User, label: 'Personal info', href: '#' },
      { icon: Mail, label: 'Email & notifications', href: '#' },
      { icon: CreditCard, label: 'Payment methods', href: '#' },
      { icon: Bell, label: 'Preferences', href: '#' },
    ],
  },
]

export function Profile() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft text-xl font-semibold text-accent">
          JD
        </div>
        <div>
          <h1 className="font-display text-xl font-semibold text-foreground">Jane Doe</h1>
          <p className="text-sm text-muted-foreground">jane@example.com</p>
        </div>
      </div>

      {sections.map((section) => (
        <div key={section.title}>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {section.title}
          </h2>
          <div className="rounded-xl border border-border bg-card divide-y divide-border">
            {section.items.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center gap-3 px-4 py-3.5 text-sm text-foreground hover:bg-muted transition-colors"
              >
                <item.icon className="h-5 w-5 text-muted-foreground" />
                <span className="flex-1">{item.label}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div className="rounded-xl border border-border bg-card">
        <button className="flex w-full items-center gap-3 px-4 py-3.5 text-sm text-destructive hover:bg-muted transition-colors rounded-xl">
          <LogOut className="h-5 w-5" />
          <span>Sign out</span>
        </button>
      </div>

      <p className="text-center text-xs text-muted-foreground">
        Table v0.1.0
      </p>
    </div>
  )
}
