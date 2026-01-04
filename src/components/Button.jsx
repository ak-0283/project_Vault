import { cn } from '../utils/cn'
import { createElement } from 'react'

const variants = {
  primary:
    'bg-gradient-to-r from-accent/90 to-accent2/80 text-bg hover:from-accent hover:to-accent2',
  secondary:
    'glass text-text hover:bg-surface2/60',
  ghost:
    'text-text/80 hover:text-text hover:bg-white/5',
}

export function Button({ as: Component = 'a', variant = 'primary', className, ...props }) {
  const { children, ...rest } = props

  return createElement(
    Component,
    {
      className: cn(
        'focus-ring inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium',
        'transition duration-200 ease-out',
        'border border-white/10',
        variants[variant],
        className,
      ),
      ...rest,
    },
    children,
  )
}
