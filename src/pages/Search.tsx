import { useState } from 'react'
import { Search as SearchIcon, SlidersHorizontal } from 'lucide-react'
import { Chip, RestaurantCard } from '@/components/ui'

const allCuisines = ['Italian', 'Sushi', 'Mexican', 'Indian', 'Japanese', 'French', 'American', 'Californian', 'Seafood', 'Pizza', 'Asian']
const priceLevels = ['$', '$$', '$$$', '$$$$']

const results = [
  { id: '1', name: 'Noma', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop', cuisine: 'Italian', price: '$$$', rating: 4.8, reviewCount: 342, distance: '0.2 mi', location: 'Downtown' },
  { id: '2', name: 'Flour + Water', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop', cuisine: 'Italian', price: '$$$', rating: 4.7, reviewCount: 256, distance: '0.4 mi', location: 'Downtown' },
  { id: '3', name: 'Octo', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop', cuisine: 'Seafood', price: '$$$$', rating: 4.9, reviewCount: 189, distance: '0.6 mi', location: 'Downtown' },
  { id: '4', name: 'Barano', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop', cuisine: 'Pizza', price: '$$', rating: 4.5, reviewCount: 178, distance: '0.8 mi', location: 'Downtown' },
  { id: '5', name: 'Zuni Cafe', image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=400&h=300&fit=crop', cuisine: 'American', price: '$$$', rating: 4.6, reviewCount: 423, distance: '0.3 mi', location: 'Downtown' },
  { id: '6', name: 'State Bird', image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=400&h=300&fit=crop', cuisine: 'Californian', price: '$$$', rating: 4.7, reviewCount: 312, distance: '0.5 mi', location: 'Downtown' },
  { id: '7', name: 'Saison', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop', cuisine: 'American', price: '$$$$', rating: 4.9, reviewCount: 198, distance: '0.7 mi', location: 'SoMa' },
  { id: '8', name: 'Benu', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop', cuisine: 'Asian', price: '$$$$', rating: 4.8, reviewCount: 267, distance: '0.9 mi', location: 'SoMa' },
]

export function Search() {
  const [query, setQuery] = useState('')
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([])
  const [selectedPrices, setSelectedPrices] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const toggleCuisine = (c: string) => {
    setSelectedCuisines((p) => p.includes(c) ? p.filter((x) => x !== c) : [...p, c])
  }
  const togglePrice = (p: string) => {
    setSelectedPrices((prev) => prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p])
  }

  const filtered = results.filter((r) => {
    if (query && !r.name.toLowerCase().includes(query.toLowerCase()) && !r.cuisine.toLowerCase().includes(query.toLowerCase())) return false
    if (selectedCuisines.length && !selectedCuisines.includes(r.cuisine)) return false
    if (selectedPrices.length && !selectedPrices.includes(r.price)) return false
    return true
  })

  const activeFilters = selectedCuisines.length + selectedPrices.length

  return (
    <div className="space-y-6">
      <div className="relative lg:hidden">
        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search restaurants, cuisines..."
          className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? 'result' : 'results'}
        </p>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition-colors"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
          {activeFilters > 0 && (
            <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs text-accent-foreground">
              {activeFilters}
            </span>
          )}
        </button>
      </div>

      {showFilters && (
        <div className="rounded-xl border border-border bg-card p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">Filters</h3>
            <button
              onClick={() => { setSelectedCuisines([]); setSelectedPrices([]) }}
              className="text-xs text-accent hover:underline"
            >
              Clear all
            </button>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Cuisine
            </h4>
            <div className="flex flex-wrap gap-2">
              {allCuisines.map((c) => (
                <Chip key={c} selected={selectedCuisines.includes(c)} onClick={() => toggleCuisine(c)}>
                  {c}
                </Chip>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Price
            </h4>
            <div className="flex gap-2">
              {priceLevels.map((p) => (
                <Chip key={p} selected={selectedPrices.includes(p)} onClick={() => togglePrice(p)}>
                  {p}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      )}

      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <RestaurantCard key={r.id} {...r} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-card p-12 text-center">
          <SearchIcon className="mx-auto h-10 w-10 text-muted-foreground/40" />
          <h3 className="mt-4 font-display text-lg font-semibold text-foreground">No results found</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Try adjusting your search or filters
          </p>
        </div>
      )}
    </div>
  )
}
