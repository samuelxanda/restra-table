interface SkeletonProps {
  className?: string
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-muted ${className}`}
    />
  )
}

export function SkeletonCard() {
  return (
    <div className="rounded-xl border border-border bg-card p-0">
      <Skeleton className="h-40 rounded-b-none" />
      <div className="space-y-2 p-4">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-3 w-1/3" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  )
}
