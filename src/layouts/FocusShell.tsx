import { useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { ArrowLeft, X } from 'lucide-react'
import { Modal } from '@/components/ui/Modal'
import { ToastContainer } from '@/components/ui/Toast'

export function FocusShell() {
  const navigate = useNavigate()
  const [showExitGuard, setShowExitGuard] = useState(false)
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null)

  const guard = (action: () => void) => {
    setPendingAction(() => action)
    setShowExitGuard(true)
  }

  const confirmLeave = () => {
    setShowExitGuard(false)
    pendingAction?.()
  }

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-card">
        <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-4">
          <button
            onClick={() => guard(() => navigate(-1))}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          <span className="font-display text-lg font-semibold text-foreground">
            Table
          </span>

          <button
            onClick={() => guard(() => navigate('/'))}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto w-full max-w-[800px] px-4 py-6">
          <Outlet />
        </div>
      </main>

      <Modal
        open={showExitGuard}
        onClose={() => setShowExitGuard(false)}
        title="Leave?"
        onConfirm={confirmLeave}
        confirmLabel="Leave"
        confirmVariant="danger"
      >
        <p>Your table won't be held. Are you sure you want to leave?</p>
      </Modal>
      <ToastContainer />
    </div>
  )
}
