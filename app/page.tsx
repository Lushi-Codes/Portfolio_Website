import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { MediaSection } from "@/components/media-section"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <MediaSection />
        </main>

        {/* Footer */}
        <footer className="bg-muted/30 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-muted-foreground">© 2025 Lucio Portfolio.</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
