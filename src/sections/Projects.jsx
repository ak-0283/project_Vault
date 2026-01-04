import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'

export function Projects({ projects }) {
  return (
    <section id="projects" className="scroll-mt-24 py-14 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            title="Projects"
            subtitle="A few recent builds — each card includes the problem, the solution, and the stack used."
          />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <Reveal key={p.title} delayMs={80 + idx * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
