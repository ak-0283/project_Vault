import { Backdrop } from './components/Backdrop'
import { Navbar } from './components/Navbar'
import { ScrollToTop } from './components/ScrollToTop'
import { profile } from './data/profile'
import { projects } from './data/projects'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <>
      <Backdrop />

      {/* Keyboard users can skip repeated navigation quickly */}
      <a
        href="#content"
        className="focus-ring sr-only fixed left-4 top-4 z-[60] rounded-lg bg-surface px-3 py-2 text-sm text-text shadow-sm shadow-black/30 focus:not-sr-only"
      >
        Skip to content
      </a>

      <Navbar brand={profile.name} />

      <main id="content" className="pb-12">
        <Hero profile={profile} />
        <Projects projects={projects} />
        <Contact profile={profile} />
      </main>

      <ScrollToTop />
      <Footer brand={profile.name} />
    </>
  )
}
