import { cn } from '../utils/cn'
import { createElement } from 'react'

export function Container({ as: Component = 'div', className, children, ...props }) {
  return createElement(
    Component,
    {
      className: cn('mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8', className),
      ...props,
    },
    children,
  )
}
