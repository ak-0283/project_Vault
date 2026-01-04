import { cn } from '../utils/cn'

export function SectionHeading({ title, subtitle, className }) {
  return (
    <header className={cn('max-w-2xl', className)}>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {subtitle ? (
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{subtitle}</p>
      ) : null}
    </header>
  )
}
