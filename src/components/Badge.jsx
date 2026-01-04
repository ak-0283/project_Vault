import { cn } from '../utils/cn'

export function Badge({ className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs',
        'bg-white/5 text-text/80 border border-white/10',
        className,
      )}
    >
      {children}
    </span>
  )
}
