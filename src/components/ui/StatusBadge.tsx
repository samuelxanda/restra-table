export type BookingStatus = 'confirmed' | 'pending' | 'cancelled' | 'completed'

interface StatusBadgeProps {
  status: BookingStatus
}

const statusConfig: Record<BookingStatus, { label: string; className: string }> = {
  confirmed: {
    label: 'Confirmed',
    className: 'bg-success/10 text-success',
  },
  pending: {
    label: 'Pending',
    className: 'bg-warning/10 text-warning',
  },
  cancelled: {
    label: 'Cancelled',
    className: 'bg-destructive/10 text-destructive',
  },
  completed: {
    label: 'Completed',
    className: 'bg-muted text-muted-foreground',
  },
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const { label, className } = statusConfig[status]
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${className}`}
    >
      {label}
    </span>
  )
}
