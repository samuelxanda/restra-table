import { Children, cloneElement, isValidElement, type ReactElement } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Slot({ children, className, ...props }: any) {
  if (!isValidElement(children)) return null
  const child = Children.only(children) as ReactElement<{ className?: string }>
  const mergedClasses = [child.props.className, className].filter(Boolean).join(' ')
  return cloneElement(child, { ...props, className: mergedClasses })
}
