import { useEffect, useMemo, useRef, useState } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { cn } from '../utils/cn'

// Scroll-reveal without any animation library.
export function Reveal({ children, className, delayMs = 0 }) {
  const reducedMotion = useReducedMotion()
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  const style = useMemo(() => {
    if (!delayMs) return undefined
    return { transitionDelay: `${delayMs}ms` }
  }, [delayMs])

  useEffect(() => {
    if (reducedMotion) return

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [reducedMotion])

  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        className,
        reducedMotion
          ? ''
          : 'transform-gpu transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
        reducedMotion || inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
      )}
    >
      {children}
    </div>
  )
}
