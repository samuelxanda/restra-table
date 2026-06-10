import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Slot } from '@/components/ui/Slot'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
  children?: ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-accent-foreground hover:bg-accent-hover shadow-sm',
  secondary:
    'border border-border bg-background text-foreground hover:bg-muted',
  ghost:
    'text-foreground hover:bg-muted',
  danger:
    'bg-destructive text-destructive-foreground hover:opacity-90',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

export function Button({
  variant = 'primary',
  size = 'md',
  asChild = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (asChild) {
    return (
      <Slot className={classes} {...props}>
        {children as React.ReactElement}
      </Slot>
    )
  }

  return (
    <button className={classes} {...props as ButtonHTMLAttributes<HTMLButtonElement>}>
      {children}
    </button>
  )
}
