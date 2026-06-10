import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
  reviewCount?: number
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'h-3 w-3',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
}

const textSizeMap = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
}

export function StarRating({ rating, reviewCount, size = 'sm' }: StarRatingProps) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating - fullStars >= 0.5
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0)

  return (
    <div className="inline-flex items-center gap-1">
      <div className="flex">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            className={`${sizeMap[size]} fill-warning text-warning`}
          />
        ))}
        {hasHalf && (
          <span className="relative">
            <Star className={`${sizeMap[size]} text-warning`} />
            <span className="absolute inset-0 overflow-hidden w-1/2">
              <Star className={`${sizeMap[size]} fill-warning text-warning`} />
            </span>
          </span>
        )}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star key={`empty-${i}`} className={`${sizeMap[size]} text-border`} />
        ))}
      </div>
      <span className={`font-medium text-warning ${textSizeMap[size]}`}>
        {rating.toFixed(1)}
      </span>
      {reviewCount !== undefined && (
        <span className={`text-muted-foreground ${textSizeMap[size]}`}>
          ({reviewCount.toLocaleString()})
        </span>
      )}
    </div>
  )
}
