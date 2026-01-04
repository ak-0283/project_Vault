import { useEffect, useState } from 'react'

// Respects the user's OS accessibility preference.
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(Boolean(media.matches))

    onChange()

    // Safari < 14 fallback
    if (media.addEventListener) media.addEventListener('change', onChange)
    else media.addListener(onChange)

    return () => {
      if (media.removeEventListener) media.removeEventListener('change', onChange)
      else media.removeListener(onChange)
    }
  }, [])

  return reduced
}
