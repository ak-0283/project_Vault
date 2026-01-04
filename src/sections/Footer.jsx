import { Container } from '../components/Container'

export function Footer({ brand }) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">© {year} {brand}. All rights reserved.</p>
        <p className="text-xs text-muted">Built with React + Vite + Tailwind.</p>
      </Container>
    </footer>
  )
}
