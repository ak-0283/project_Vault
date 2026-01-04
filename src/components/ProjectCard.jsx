import { Badge } from './Badge'
import { Button } from './Button'

export function ProjectCard({ project }) {
  // Tracks cursor position to place the hover glow (no heavy animation libs).
  const onPointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    e.currentTarget.style.setProperty('--x', `${x}%`)
    e.currentTarget.style.setProperty('--y', `${y}%`)
  }

  const onPointerLeave = (e) => {
    e.currentTarget.style.removeProperty('--x')
    e.currentTarget.style.removeProperty('--y')
  }

  return (
    <article
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="glass group relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl p-5 transition hover:bg-surface2/60"
    >
      {/* Gradient edge on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(800px circle at var(--x, 20%) var(--y, 20%), rgba(99,102,241,0.20), transparent 45%), radial-gradient(700px circle at 80% 20%, rgba(34,211,238,0.16), transparent 40%)',
        }}
      />

      <div className="relative flex flex-1 flex-col">
        <h3 className="text-base font-semibold tracking-tight sm:text-lg">
          {project.title}
        </h3>

        {/* Problem + solution in a single short paragraph */}
        <p
          className="mt-2 text-sm leading-relaxed text-muted"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <Button
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            className="w-full sm:w-auto"
          >
            Live project
            <span aria-hidden="true" className="text-text/70">
              →
            </span>
          </Button>
        </div>
      </div>
    </article>
  )
}
