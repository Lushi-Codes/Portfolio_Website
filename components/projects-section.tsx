"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ProjectsSection() {
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation({ threshold: 0.1 })

  const projects = [
    {
      title: "DIWA: Divine Wars",
      description:
        "Divine Wars (DIWA) is a real-time strategy (RTS) game inspired by Philippine mythology, developed as our thesis project. In the game, players must defend their land against the evil god Sitan. What makes this project especially meaningful is that our team started with no prior experience in game development. Over the course of a single semester, we dove into learning the fundamentals of RTS gameplay, and managed to implement core mechanics, create animations, add visual effects, and even design a unique gameplay mode. The project became not just a game, but a testament to our dedication, creativity, and ability to learn and adapt under tight deadlines.",
      image: "/retro-sunburst-illustration.jpg",
      technologies: ["Unreal Engine 5", "Blueprint", "Game Design", "2D Graphics"],
      liveUrl: "https://jdkepler0115.itch.io/divine-wars",
    },
    {
      title: "DentalFix Dental Clinic Appointment System",
      description: "DentalFix Dental Clinic is a system developed for our client to boost online engagement, streamline appointment scheduling, and protect the privacy of patients’ records. The system was fully functional and in use, though unfortunately, the version previously hosted on GitHub has been deleted. Despite this, the project demonstrates our ability to create practical, client-focused solutions that enhance both business operations and user experience.",
      image: "/dentalfix-clinic-website.png",
      technologies: ["NextJS", "MongoDB", "TypeScript", "Vsiual Studio Code", "Figma"],
      liveUrl: "https://www.figma.com/proto/IaUwll2Kw7e1OBR75OvYhT/Entech-Proto--Copy-?node-id=0-1&t=HpJcazH6pPIcjlth-1",
    },
  ]

  return (
    <section id="projects" className="py-20" ref={projectsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 animate-on-scroll ${projectsVisible ? "visible animate-fade-up" : ""}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These projects were developed during my university years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border animate-on-scroll ${projectsVisible ? `visible animate-scale-in animate-delay-${(index + 1) * 200}` : ""}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl !== "#" && (
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/90 hover:bg-white"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
