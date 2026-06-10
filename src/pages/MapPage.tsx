import { MapPin, Navigation } from 'lucide-react'
import { RestaurantCard } from '@/components/ui/RestaurantCard'

const nearby = [
  { id: '1', name: 'Noma', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop', cuisine: 'Italian', price: '$$$', rating: 4.8, reviewCount: 342, distance: '0.2 mi', location: 'Downtown' },
  { id: '2', name: 'Flour + Water', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop', cuisine: 'Italian', price: '$$$', rating: 4.7, reviewCount: 256, distance: '0.4 mi', location: 'Downtown' },
  { id: '3', name: 'Octo', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop', cuisine: 'Seafood', price: '$$$$', rating: 4.9, reviewCount: 189, distance: '0.6 mi', location: 'Downtown' },
  { id: '4', name: 'Barano', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop', cuisine: 'Pizza', price: '$$', rating: 4.5, reviewCount: 178, distance: '0.8 mi', location: 'Downtown' },
  { id: '5', name: 'Zuni Cafe', image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=400&h=300&fit=crop', cuisine: 'American', price: '$$$', rating: 4.6, reviewCount: 423, distance: '0.3 mi', location: 'Downtown' },
  { id: '6', name: 'State Bird', image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=300&fit=crop', cuisine: 'Californian', price: '$$$', rating: 4.7, reviewCount: 312, distance: '0.5 mi', location: 'Downtown' },
  { id: '7', name: 'Saison', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop', cuisine: 'American', price: '$$$$', rating: 4.9, reviewCount: 198, distance: '0.7 mi', location: 'SoMa' },
  { id: '8', name: 'Benu', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop', cuisine: 'Asian', price: '$$$$', rating: 4.8, reviewCount: 267, distance: '0.9 mi', location: 'SoMa' },
]

export function MapPage() {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-6">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted lg:aspect-auto lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)]">
        <div className="flex h-full w-full items-center justify-center">
          <div className="text-center">
            <MapPin className="mx-auto h-12 w-12 text-muted-foreground/40" />
            <p className="mt-3 text-sm text-muted-foreground">Map placeholder</p>
            <p className="text-xs text-muted-foreground/60">Interactive map would render here</p>
          </div>
        </div>
        <button className="absolute bottom-4 right-4 rounded-full bg-card px-4 py-2 text-sm font-medium text-foreground shadow-raised hover:bg-muted transition-colors">
          <Navigation className="inline h-4 w-4" /> Current location
        </button>
      </div>

      <div className="mt-4 lg:mt-0 space-y-4 overflow-y-auto">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Near you
          </h2>
          <p className="text-sm text-muted-foreground">
            {nearby.length} restaurants
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {nearby.map((r) => (
            <RestaurantCard key={r.id} {...r} />
          ))}
        </div>
      </div>
    </div>
  )
}
