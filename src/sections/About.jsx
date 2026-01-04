import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Badge } from '../components/Badge'
import { Reveal } from '../components/Reveal'

export function About({ profile }) {
  return (
    <section id="about" className="scroll-mt-24 py-14 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            title="About"
            subtitle="A quick snapshot of how I work and what I care about."
          />
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal delayMs={120}>
            <div className="glass rounded-3xl p-6">
              <div className="space-y-3 text-sm leading-relaxed text-muted">
                {profile.about.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <div className="mt-6">
                <p className="text-xs font-medium text-text/80">Toolbox</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {profile.skills.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
