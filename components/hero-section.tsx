"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { downloadResume } from "@/lib/resume-generator"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function HeroSection() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="home" className="min-h-screen relative overflow-hidden" ref={heroRef}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-hero-gradient-from)] to-[var(--color-hero-gradient-to)]" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-[var(--color-hero-accent)]/10 rounded-full blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Text content */}
          <div className={`space-y-8 animate-on-scroll ${heroVisible ? "visible animate-fade-up" : ""}`}>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-[var(--color-hero-text)] leading-tight">
                Sozita-mae Grace Lucio
                <span className="block text-[var(--color-hero-accent)]">Portfolio</span>
              </h1>
              <p className="text-xl text-[var(--color-hero-text-muted)] max-w-lg leading-relaxed">
                Computer Science Graduate | Video and Photo Editor
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 animate-on-scroll ${heroVisible ? "visible animate-fade-up animate-delay-200" : ""}`}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-[var(--color-hero-text-muted)]/30 text-[var(--color-hero-text)] hover:bg-[var(--color-hero-text)]/10 px-8 py-3 rounded-full bg-transparent"
                onClick={downloadResume}
              >
                Download Resume
              </Button>
            </div>

            {/* Stats */}
            <div
              className={`flex gap-8 pt-8 animate-on-scroll ${heroVisible ? "visible animate-fade-up animate-delay-400" : ""}`}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--color-hero-accent)]">5+</div>
                <div className="text-[var(--color-hero-text-muted)] text-sm">Programming Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--color-hero-accent)]">100+</div>
                <div className="text-[var(--color-hero-text-muted)] text-sm">Media Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--color-hero-accent)]">10+</div>
                <div className="text-[var(--color-hero-text-muted)] text-sm">Technologies</div>
              </div>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div
            className={`relative animate-on-scroll ${heroVisible ? "visible animate-fade-in-right animate-delay-300" : ""}`}
          >
            <div className="w-full max-w-md mx-auto">
              <div className="relative">
                <div className="w-80 h-80 mx-auto mt-16 bg-gradient-to-br from-primary/20 to-[var(--color-hero-accent)]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-hero-text-muted)]/10">
                  <img
                    src="/graduation-photo.jpg"
                    alt="Sozita-mae Grace Lucio - Computer Science Graduate"
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div
          className={`flex justify-center space-x-6 mt-16 animate-on-scroll ${heroVisible ? "visible animate-fade-up animate-delay-500" : ""}`}
        >
          <Button
            variant="ghost"
            size="icon"
            className="text-[var(--color-hero-text-muted)] hover:text-[var(--color-hero-text)]"
            onClick={() => window.open("https://github.com/Lushi-Codes/Portfolio", "_blank")}
          >
            <Github className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-[var(--color-hero-text-muted)] hover:text-[var(--color-hero-text)]"
            onClick={() => window.open("https://www.linkedin.com/in/sozita-lucio/", "_blank")}
          >
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-[var(--color-hero-text-muted)] hover:text-[var(--color-hero-text)]"
            onClick={() => window.open("mailto:lushiedits08@gmail.com", "_blank")}
          >
            <Mail className="h-6 w-6" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div
          className={`flex justify-center mt-12 animate-on-scroll ${heroVisible ? "visible animate-fade-up animate-delay-600" : ""}`}
        >
          <Button
            variant="ghost"
            size="icon"
            className="text-[var(--color-hero-text-muted)] hover:text-[var(--color-hero-text)] animate-bounce"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
