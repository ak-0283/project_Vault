import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'

export function Hero({ profile }) {
  return (
    <section id="top" className="pt-10 sm:pt-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-text/80">
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent2/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent2" />
                </span>
                Building calm, high-signal UI
              </div>
            </Reveal>

            <Reveal delayMs={80}>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                <span className="block text-text/90">Hi, I’m</span>
                <span className="block bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>
            </Reveal>

            <Reveal delayMs={140}>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                <span className="text-text/85">{profile.role}</span> — {profile.tagline}
              </p>
            </Reveal>

            <Reveal delayMs={200}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="#projects">View projects</Button>
                <Button href="#contact" variant="secondary">
                  Let’s talk
                </Button>
              </div>
            </Reveal>

            <Reveal delayMs={260}>
              <div className="mt-8 flex flex-wrap gap-3 text-xs text-muted">
                <span className="glass rounded-full px-3 py-1">{profile.location}</span>
                <a
                  className="focus-ring glass rounded-full px-3 py-1 hover:bg-surface2/60"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delayMs={120}>
              <div className="glass relative overflow-hidden rounded-3xl p-6">
                {/*
                  “Glass” showcase card: gives the hero a unique identity without templates.
                  Keeps content minimal while highlighting polish.
                */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-70"
                  style={{
                    background:
                      'radial-gradient(600px circle at 20% 20%, rgba(99,102,241,0.28), transparent 45%), radial-gradient(520px circle at 80% 35%, rgba(34,211,238,0.22), transparent 40%)',
                  }}
                />

                <div className="relative">
                  <p className="text-xs font-medium text-text/80">Focus</p>
                  <p className="mt-2 text-sm text-muted">
                    UI engineering • UX systems • animation polish • accessibility
                  </p>

                  <div className="mt-6 grid gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs font-medium text-text/80">What you get</p>
                      <p className="mt-2 text-sm text-muted">
                        Clean components, responsive layouts, and thoughtful micro-interactions.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs font-medium text-text/80">Principle</p>
                      <p className="mt-2 text-sm text-muted">
                        Clarity first — visuals support the message.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
