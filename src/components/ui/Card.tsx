import { type HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export function Card({ hover = false, className = '', children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-card ${hover ? 'transition-shadow hover:shadow-raised' : 'shadow-resting'} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-t-xl ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  )
}

export function CardContent({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  )
}
