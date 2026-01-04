// Decorative background layer (unique, dark, glass-friendly).
// Kept as a component so sections stay clean and semantic.
export function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-bg" />

      {/* Soft gradient blobs */}
      <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/25 blur-3xl animate-float" />
      <div className="absolute -bottom-40 -left-16 h-[520px] w-[520px] rounded-full bg-accent2/15 blur-3xl" />
      <div className="absolute top-1/3 -right-24 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />

      {/* Subtle grid, blended into the dark */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(circle at 50% 0%, black 0%, transparent 70%)',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, transparent 0%, rgba(9,11,18,0.35) 55%, rgba(9,11,18,0.75) 100%)',
        }}
      />
    </div>
  )
}
