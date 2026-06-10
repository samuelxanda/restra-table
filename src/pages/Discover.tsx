import { Search, MapPin, ChevronRight } from 'lucide-react'
import { Chip, RestaurantCard } from '@/components/ui'

const categories = ['Italian', 'Sushi', 'Mexican', 'Indian', 'Japanese', 'French']

const featured = [
  { id: '1', name: 'Noma', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop', cuisine: 'Italian', price: '$$$', rating: 4.8, reviewCount: 342, distance: '0.2 mi', location: 'Downtown' },
  { id: '2', name: 'Flour + Water', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop', cuisine: 'Italian', price: '$$$', rating: 4.7, reviewCount: 256, distance: '0.4 mi', location: 'Downtown' },
  { id: '3', name: 'Octo', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop', cuisine: 'Seafood', price: '$$$$', rating: 4.9, reviewCount: 189, distance: '0.6 mi', location: 'Downtown' },
  { id: '4', name: 'Barano', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop', cuisine: 'Pizza', price: '$$', rating: 4.5, reviewCount: 178, distance: '0.8 mi', location: 'Downtown' },
]

const nearby = [
  { id: '5', name: 'Zuni Cafe', image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=400&h=300&fit=crop', cuisine: 'American', price: '$$$', rating: 4.6, reviewCount: 423, distance: '0.3 mi', location: 'Downtown' },
  { id: '6', name: 'State Bird', image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=300&fit=crop', cuisine: 'Californian', price: '$$$', rating: 4.7, reviewCount: 312, distance: '0.5 mi', location: 'Downtown' },
]

export function Discover() {
  return (
    <div className="space-y-8">
      <div className="relative lg:hidden">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search restaurants, cuisines..."
          className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4" />
        <span>Downtown</span>
        <span className="text-border">&middot;</span>
        <span>2.4 mi</span>
        <ChevronRight className="h-3 w-3" />
      </div>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Categories
          </h2>
          <button className="text-xs font-medium text-accent hover:underline">
            See all
          </button>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <Chip key={cat}>{cat}</Chip>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Featured this week
          </h2>
          <button className="text-sm font-medium text-accent hover:underline">
            See all
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {featured.map((restaurant) => (
            <div key={restaurant.id} className="min-w-[260px] flex-shrink-0">
              <RestaurantCard {...restaurant} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Closest to you
          </h2>
          <button className="text-sm font-medium text-accent hover:underline">
            See all
          </button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nearby.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>
      </section>
    </div>
  )
}
