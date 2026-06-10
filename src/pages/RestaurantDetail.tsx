import { Link, useParams } from 'react-router-dom'
import { Heart, Share2, MapPin, Clock, Phone, ExternalLink } from 'lucide-react'
import { ImageGallery } from '@/components/ui/ImageGallery'
import { StarRating } from '@/components/ui/StarRating'
import { Button } from '@/components/ui/Button'

const mockRestaurant = {
  id: '1',
  name: 'Noma',
  cuisine: 'Italian',
  price: '$$$',
  rating: 4.8,
  reviewCount: 342,
  distance: '0.2 mi',
  location: 'Downtown',
  address: '123 Main St, San Francisco, CA 94102',
  phone: '(555) 123-4567',
  website: 'noma.city',
  hours: 'Mon–Sat 5PM–11PM',
  description: '"The best pasta north of Rome." — NYT',
  tags: ['Italian', '$$$', 'Fine Dining'],
  images: [
    { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop', alt: 'Noma interior' },
    { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=500&fit=crop', alt: 'Noma dish' },
    { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=500&fit=crop', alt: 'Noma plating' },
    { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=500&fit=crop', alt: 'Noma atmosphere' },
  ],
  reviews: [
    { name: 'Maria K.', avatar: 'MK', date: '2 days ago', rating: 5, text: 'Incredible tasting menu. We did the wine pairing and it was worth every penny. The service was impeccable.' },
    { name: 'James L.', avatar: 'JL', date: '1 week ago', rating: 5, text: 'Cozy atmosphere, impeccable pasta. The cacio e pepe was the best I have had outside of Rome.' },
    { name: 'Sarah M.', avatar: 'SM', date: '2 weeks ago', rating: 4, text: 'Beautiful space and creative dishes. The tasting menu is a journey. A bit pricey but worth it for a special occasion.' },
  ],
}

export function RestaurantDetail() {
  const { id } = useParams()
  const r = mockRestaurant

  return (
    <div className="lg:px-0">
      <div className="mb-4 flex items-center justify-between lg:mb-6">
        <Link to="/" className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
          &larr; Back to results
        </Link>
        <div className="flex items-center gap-3">
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Heart className="h-5 w-5" />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-5 lg:gap-8">
        <div className="lg:col-span-3">
          <ImageGallery images={r.images} />
        </div>

        <div className="mt-4 lg:col-span-2 lg:mt-0">
          <h1 className="font-display text-2xl font-semibold text-foreground lg:text-3xl">
            {r.name}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {r.cuisine} &middot; {r.price}
          </p>
          <div className="mt-2">
            <StarRating rating={r.rating} reviewCount={r.reviewCount} size="md" />
          </div>
          <p className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            {r.distance} &middot; {r.location}
          </p>

          <div className="mt-6 space-y-3 rounded-xl border border-border bg-card p-4">
            <Button asChild className="w-full">
            <Link to={`/restaurants/${id}/book`}>Reserve a table</Link>
          </Button>
          <p className="text-center text-xs text-muted-foreground">
              Tue, Jun 16 &middot; 8:00 PM &middot; 2 guests
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-8">
          <section>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              About
            </h2>
            <p className="text-foreground">{r.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {r.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {r.hours}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {r.phone}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {r.address}
              </p>
              <a
                href={`https://${r.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-accent hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                {r.website}
              </a>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Menu
            </h2>
            <div className="space-y-2">
              {['Dinner Menu (PDF)', 'Wine List (PDF)', 'Lunch Menu (PDF)'].map((item) => (
                <button
                  key={item}
                  className="flex w-full items-center justify-between rounded-lg border border-border px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors"
                >
                  <span>{item}</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </button>
              ))}
            </div>
          </section>

          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Reviews ({r.reviewCount})
              </h2>
              <button className="text-sm font-medium text-accent hover:underline">
                See all &rarr;
              </button>
            </div>
            <div className="space-y-4">
              {r.reviews.map((review) => (
                <div key={review.name} className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-medium text-foreground">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                    <div className="ml-auto">
                      <StarRating rating={review.rating} size="sm" />
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-foreground leading-relaxed">
                    {review.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:col-span-2">
          <div className="sticky top-24 space-y-4">
            <div className="rounded-xl border border-border bg-card p-4">
              <h3 className="text-sm font-semibold text-foreground">Make a reservation</h3>
              <div className="mt-3 space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-lg border border-border bg-background px-3 py-2 text-center">
                    <p className="text-xs text-muted-foreground">Date</p>
                    <p className="text-sm font-medium text-foreground">Jun 16</p>
                  </div>
                  <div className="rounded-lg border border-border bg-background px-3 py-2 text-center">
                    <p className="text-xs text-muted-foreground">Time</p>
                    <p className="text-sm font-medium text-foreground">8:00 PM</p>
                  </div>
                  <div className="rounded-lg border border-border bg-background px-3 py-2 text-center">
                    <p className="text-xs text-muted-foreground">Guests</p>
                    <p className="text-sm font-medium text-foreground">2</p>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link to={`/restaurants/${id}/book`}>Reserve a table</Link>
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  No charge for cancellations up to 2hrs before
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
