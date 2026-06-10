import { useParams } from 'react-router-dom'

export function ListPage() {
  const { slug } = useParams()
  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-foreground capitalize">{slug?.replace(/-/g, ' ')}</h1>
      <p className="mt-2 text-muted-foreground">Curated list of restaurants.</p>
    </div>
  )
}
