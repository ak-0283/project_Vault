import { useEffect, useId, useState } from 'react'
import { Container } from './Container'
import { useTheme } from '../hooks/useTheme'

const links = [
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar({ brand }) {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const panelId = useId()

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-50">
      <div className="glass border-x-0 border-t-0">
        <Container className="flex items-center justify-between py-3">
          <a href="#top" className="focus-ring rounded-lg px-2 py-1">
            <span className="text-sm font-semibold tracking-tight">{brand}</span>
          </a>

          <nav aria-label="Primary" className="flex items-center gap-2">
            {/* Desktop links */}
            <div className="hidden items-center gap-1 sm:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="focus-ring rounded-xl px-3 py-2 text-sm text-text/80 hover:bg-white/5 hover:text-text"
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="focus-ring glass inline-flex items-center justify-center rounded-xl px-3 py-2 text-xs text-text/80 hover:bg-surface2/60"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
            </button>

            {/* Hamburger (mobile) */}
            <button
              type="button"
              className="focus-ring glass inline-flex items-center justify-center rounded-xl px-3 py-2 sm:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-text/80"
              >
                {open ? (
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7H20M4 12H20M4 17H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </nav>
        </Container>

        {/* Mobile dropdown panel */}
        <div id={panelId} className={open ? 'sm:hidden' : 'hidden'}>
          <Container className="pb-3">
            <div className="glass rounded-2xl p-3">
              <div className="flex flex-col gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="focus-ring rounded-xl px-3 py-2 text-sm text-text/80 hover:bg-surface2/60 hover:text-text"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

            </div>
          </Container>
        </div>
      </div>
    </header>
  )
}
