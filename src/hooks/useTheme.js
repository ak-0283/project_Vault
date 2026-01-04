import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'pv-theme'

function getInitialTheme() {
  if (typeof document === 'undefined') return 'dark'

  const attr = document.documentElement.dataset.theme
  if (attr === 'light' || attr === 'dark') return attr

  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored

  const prefersLight = window.matchMedia?.('(prefers-color-scheme: light)')?.matches
  return prefersLight ? 'light' : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  const set = useCallback((next) => {
    setTheme(next)
    document.documentElement.dataset.theme = next
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const toggle = useCallback(() => {
    set(theme === 'dark' ? 'light' : 'dark')
  }, [set, theme])

  useEffect(() => {
    // Keep DOM in sync even if state was initialized before the early script ran.
    document.documentElement.dataset.theme = theme
  }, [theme])

  return { theme, setTheme: set, toggleTheme: toggle }
}
