"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function SkillsSection() {
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation({ threshold: 0.1 })

  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Bootsstrap"],
      icon: "💻",
    },
    {
      category: "Backend",
      technologies: ["Laravel (PHP)", "ASP.NET (C#)", "PostgreSQL", "Javascript (Next.js)"],
      icon: "⚙️",
    },
    {
      category: "Tools",
      technologies: ["GitHub", "Docker"],
      icon: "🛠️",
    },
    {
      category: "Languages",
      technologies: ["JavaScript", "Python (Basic)", "Java", "C#"],
      icon: "🔤",
    },
    {
      category: "Game Development",
      technologies: ["Unreal Engine 5 (Blueprint)", "Blender", "Adobe Illustrator"],
      icon: "🎮",
    },
    {
      category: "Office Productivity Software & Collaboration Tools",
      technologies: ["Microsoft Office Suites", "Google Workspace", "Salesforce", "Jira", "Slack", "Discord"],
      icon: "💼",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30" ref={skillsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 animate-on-scroll ${skillsVisible ? "visible animate-fade-up" : ""}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital
            experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-on-scroll ${skillsVisible ? `visible animate-scale-in animate-delay-${(index + 1) * 100}` : ""}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{skill.icon}</span>
                  <h3 className="text-xl font-semibold text-card-foreground">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
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
