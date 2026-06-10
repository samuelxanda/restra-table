import { Link } from 'react-router-dom'
import { StarRating } from '@/components/ui/StarRating'
import { Button } from '@/components/ui/Button'

interface RestaurantCardProps {
  id: string
  name: string
  image: string
  cuisine: string
  price: string
  rating: number
  reviewCount: number
  distance: string
  location: string
}

export function RestaurantCard({
  id,
  name,
  image,
  cuisine,
  price,
  rating,
  reviewCount,
  distance,
  location,
}: RestaurantCardProps) {
  return (
    <div className="group rounded-xl border border-border bg-card transition-shadow hover:shadow-raised">
      <Link to={`/restaurants/${id}`}>
        <div className="aspect-[4/3] overflow-hidden rounded-t-xl">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="space-y-1.5 p-4">
          <h3 className="font-display text-lg font-semibold text-foreground">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {cuisine} &middot; {price}
          </p>
          <StarRating rating={rating} reviewCount={reviewCount} size="sm" />
          <p className="text-xs text-muted-foreground">
            {distance} &middot; {location}
          </p>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <Button variant="primary" size="sm" className="w-full">
          Reserve
        </Button>
      </div>
    </div>
  )
}
