import { type ButtonHTMLAttributes } from 'react'

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean
}

export function Chip({ selected = false, className = '', children, ...props }: ChipProps) {
  return (
    <button
      className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors ${
        selected
          ? 'border-accent bg-accent-soft text-accent'
          : 'border-border bg-background text-foreground hover:bg-muted'
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
