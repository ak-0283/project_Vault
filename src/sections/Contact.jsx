import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'

export function Contact({ profile }) {
  return (
    <section id="contact" className="scroll-mt-24 py-14 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            title="Contact"
            subtitle="If you have a role, a product idea, or a UI that needs refinement, I’m happy to chat."
          />
        </Reveal>

        <Reveal delayMs={120}>
          <div className="mt-8 glass rounded-3xl p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-medium text-text/80">Email</p>
                <a
                  className="focus-ring mt-2 inline-flex rounded-lg text-sm text-text/90 hover:text-text"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href={`mailto:${profile.email}`} variant="primary">
                  Send email
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
