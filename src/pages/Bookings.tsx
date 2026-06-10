import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, Users } from 'lucide-react'
import { StatusBadge } from '@/components/ui'
import type { BookingStatus } from '@/components/ui/StatusBadge'

type Booking = {
  id: string
  restaurant: string
  date: string
  time: string
  guests: number
  status: BookingStatus
  image: string
}

const allBookings: Booking[] = [
  { id: '1', restaurant: 'Noma', date: 'Jun 16, 2026', time: '8:00 PM', guests: 2, status: 'confirmed', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=200&h=150&fit=crop' },
  { id: '2', restaurant: 'Flour + Water', date: 'Jun 20, 2026', time: '7:30 PM', guests: 4, status: 'confirmed', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&h=150&fit=crop' },
  { id: '3', restaurant: 'Octo', date: 'Jun 5, 2026', time: '6:00 PM', guests: 2, status: 'completed', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=150&fit=crop' },
  { id: '4', restaurant: 'Zuni Cafe', date: 'May 28, 2026', time: '8:30 PM', guests: 3, status: 'completed', image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=200&h=150&fit=crop' },
  { id: '5', restaurant: 'Barano', date: 'May 15, 2026', time: '7:00 PM', guests: 2, status: 'cancelled', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=150&fit=crop' },
]

function BookingCard({ booking }: { booking: Booking }) {
  return (
    <Link
      to={`/bookings/${booking.id}`}
      className="flex gap-4 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-raised"
    >
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
        <img src={booking.image} alt={booking.restaurant} className="h-full w-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-base font-semibold text-foreground truncate">
            {booking.restaurant}
          </h3>
          <StatusBadge status={booking.status} />
        </div>
        <div className="mt-2 space-y-1 text-sm text-muted-foreground">
          <p className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {booking.date}
          </p>
          <p className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {booking.time}
          </p>
          <p className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" />
            {booking.guests} {booking.guests === 1 ? 'guest' : 'guests'}
          </p>
        </div>
      </div>
    </Link>
  )
}

export function Bookings() {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming')

  const filtered = allBookings.filter((b) => {
    if (tab === 'upcoming') return b.status === 'confirmed' || b.status === 'pending'
    return b.status === 'completed' || b.status === 'cancelled'
  })

  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-semibold text-foreground">Bookings</h1>

      <div className="flex gap-1 rounded-lg bg-muted p-1">
        <button
          onClick={() => setTab('upcoming')}
          className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            tab === 'upcoming' ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setTab('past')}
          className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            tab === 'past' ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Past
        </button>
      </div>

      {filtered.length > 0 ? (
        <div className="space-y-3">
          {filtered.map((b) => (
            <BookingCard key={b.id} booking={b} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-card p-12 text-center">
          <Calendar className="mx-auto h-10 w-10 text-muted-foreground/40" />
          <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
            No {tab} bookings
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {tab === 'upcoming' ? 'Start exploring to book a table' : 'Your past reservations will appear here'}
          </p>
        </div>
      )}
    </div>
  )
}
