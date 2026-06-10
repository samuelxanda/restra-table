import { useParams } from 'react-router-dom'

export function BookingDetail() {
  const { id } = useParams()
  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-foreground">Booking</h1>
      <p className="mt-2 text-muted-foreground">Booking #{id}</p>
    </div>
  )
}
