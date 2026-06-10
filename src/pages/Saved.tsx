import { Heart } from 'lucide-react'
import { RestaurantCard } from '@/components/ui'

const saved = [
  { id: '1', name: 'Noma', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop', cuisine: 'Italian', price: '$$$', rating: 4.8, reviewCount: 342, distance: '0.2 mi', location: 'Downtown' },
  { id: '3', name: 'Octo', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop', cuisine: 'Seafood', price: '$$$$', rating: 4.9, reviewCount: 189, distance: '0.6 mi', location: 'Downtown' },
  { id: '7', name: 'Saison', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop', cuisine: 'American', price: '$$$$', rating: 4.9, reviewCount: 198, distance: '0.7 mi', location: 'SoMa' },
]

export function Saved() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-semibold text-foreground">Saved</h1>

      {saved.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {saved.map((r) => (
            <RestaurantCard key={r.id} {...r} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-card p-12 text-center">
          <Heart className="mx-auto h-10 w-10 text-muted-foreground/40" />
          <h3 className="mt-4 font-display text-lg font-semibold text-foreground">No saved restaurants</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Tap the heart icon on any restaurant to save it here
          </p>
        </div>
      )}
    </div>
  )
}
