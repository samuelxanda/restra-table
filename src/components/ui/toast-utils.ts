type ToastVariant = 'success' | 'error' | 'info' | 'warning'

export interface ToastCall {
  variant: ToastVariant
  message: string
  undoAction?: () => void
}

let addToastFn: ((t: ToastCall) => void) | null = null

export function toast(variant: ToastVariant, message: string, undoAction?: () => void) {
  addToastFn?.({ variant, message, undoAction })
}

export function setToastHandler(fn: (t: ToastCall) => void) {
  addToastFn = fn
}
