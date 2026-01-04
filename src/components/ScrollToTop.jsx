import { useEffect, useState } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function ScrollToTop() {
  const reducedMotion = useReducedMotion()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 520)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={
        (visible ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-2') +
        ' focus-ring glass fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-2xl px-5 py-3 text-sm text-text/85 shadow-sm shadow-black/20 transition'
      }
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <span aria-hidden="true" className="text-base">
        ↑
      </span>
      <span className="hidden sm:inline">Top</span>
    </button>
  )
}
