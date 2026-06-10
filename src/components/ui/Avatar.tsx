interface AvatarProps {
  src?: string
  initials: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-16 w-16 text-xl',
}

export function Avatar({ src, initials, size = 'md' }: AvatarProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={initials}
        className={`rounded-full object-cover bg-muted ${sizeMap[size]}`}
      />
    )
  }

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-accent-soft font-semibold text-accent ${sizeMap[size]}`}
    >
      {initials}
    </div>
  )
}
