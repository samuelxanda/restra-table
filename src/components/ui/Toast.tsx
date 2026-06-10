import { useEffect, useState } from 'react'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'
import { setToastHandler, type ToastCall } from './toast-utils'

interface Toast {
  id: string
  variant: ToastCall['variant']
  message: string
  undoAction?: () => void
}

const icons: Record<ToastCall['variant'], typeof CheckCircle> = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
  warning: AlertTriangle,
}

const colorMap: Record<ToastCall['variant'], string> = {
  success: 'text-success',
  error: 'text-destructive',
  info: 'text-info',
  warning: 'text-warning',
}

function ToastItem({ t, onRemove }: { t: Toast; onRemove: (id: string) => void }) {
  const Icon = icons[t.variant]

  useEffect(() => {
    const timer = setTimeout(() => onRemove(t.id), 4000)
    return () => clearTimeout(timer)
  }, [t.id, onRemove])

  return (
    <div
      className={`flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 shadow-raised ${
        t.undoAction ? 'pr-2' : 'pr-4'
      }`}
    >
      <Icon className={`h-5 w-5 flex-shrink-0 ${colorMap[t.variant]}`} />
      <p className="flex-1 text-sm text-foreground">{t.message}</p>
      {t.undoAction && (
        <button
          onClick={() => { t.undoAction!(); onRemove(t.id) }}
          className="text-sm font-medium text-accent hover:underline whitespace-nowrap"
        >
          Undo
        </button>
      )}
      <button onClick={() => onRemove(t.id)} className="text-muted-foreground hover:text-foreground">
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    setToastHandler((t) => {
      const id = Math.random().toString(36).slice(2)
      setToasts((prev) => [...prev, { ...t, id }])
    })
  }, [])

  const remove = (id: string) => setToasts((prev) => prev.filter((t) => t.id !== id))

  if (toasts.length === 0) return null

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 flex flex-col gap-2 lg:bottom-4 lg:left-auto lg:w-96">
      {toasts.map((t) => (
        <ToastItem key={t.id} t={t} onRemove={remove} />
      ))}
    </div>
  )
}
