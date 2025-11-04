"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code, Coffee, Gamepad2 } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function AboutSection() {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="about" className="py-20" ref={aboutRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 animate-on-scroll ${aboutVisible ? "visible animate-fade-in-left" : ""}`}>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">About Me</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a Computer Science graduate with a background in video editing, social media management, and admin
                  work—but at heart, I'm more of a programmer than anything else. While a lot of my job experience has
                  been in creative roles (like working part-time as a Video Editor at Blox Labs or freelancing on music
                  videos and school projects), I've always been drawn to the technical side of things.
                </p>
                <p>
                  I enjoy coding and problem-solving, and I've been building up my skills in web development using PHP,
                  Java, and JavaScript. Lately, I've been diving deeper into database engineering—especially with
                  PostgreSQL and AWS—and I'm really passionate about learning more in game development using Unreal
                  Engine. I'm someone who loves learning new tools, figuring things out, and creating things that
                  actually work.
                </p>
              </div>
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-4 animate-on-scroll ${aboutVisible ? "visible" : ""}`}>
            <Card
              className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-on-scroll ${aboutVisible ? "visible animate-scale-in animate-delay-100" : ""}`}
            >
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">Education</h3>
                <p className="text-sm text-muted-foreground">Computer Science Major</p>
                <p className="text-sm text-muted-foreground">Graduated 2025</p>
              </CardContent>
            </Card>

            <Card
              className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-on-scroll ${aboutVisible ? "visible animate-scale-in animate-delay-200" : ""}`}
            >
              <CardContent className="p-6 text-center">
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">Coding</h3>
                <p className="text-sm text-muted-foreground">3+ Years</p>
                <p className="text-sm text-muted-foreground">Experience Academically</p>
              </CardContent>
            </Card>

            <Card
              className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-on-scroll ${aboutVisible ? "visible animate-scale-in animate-delay-300" : ""}`}
            >
              <CardContent className="p-6 text-center">
                <Coffee className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">Snacks and Fresh Milk</h3>
                <p className="text-sm text-muted-foreground">Fuel for</p>
                <p className="text-sm text-muted-foreground">Late Night Coding</p>
              </CardContent>
            </Card>

            <Card
              className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-on-scroll ${aboutVisible ? "visible animate-scale-in animate-delay-400" : ""}`}
            >
              <CardContent className="p-6 text-center">
                <Gamepad2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">Gaming</h3>
                <p className="text-sm text-muted-foreground">Strategy & </p>
                <p className="text-sm text-muted-foreground">Problem Solving</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
