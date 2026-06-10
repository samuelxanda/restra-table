import { useEffect, type ReactNode } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
  onConfirm?: () => void
  confirmLabel?: string
  confirmVariant?: 'primary' | 'danger'
}

export function Modal({
  open,
  onClose,
  title,
  children,
  onConfirm,
  confirmLabel = 'Confirm',
  confirmVariant = 'primary',
}: ModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 mx-4 w-full max-w-sm rounded-xl bg-card p-6 shadow-overlay">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-lg font-semibold text-foreground">{title}</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="text-sm text-foreground">{children}</div>
        {onConfirm && (
          <div className="mt-6 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                confirmVariant === 'danger'
                  ? 'bg-destructive text-destructive-foreground hover:opacity-90'
                  : 'bg-accent text-accent-foreground hover:bg-accent-hover'
              }`}
            >
              {confirmLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
