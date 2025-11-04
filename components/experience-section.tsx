"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ExperienceSection() {
  const { ref: experienceRef, isVisible: experienceVisible } = useScrollAnimation({ threshold: 0.1 })

  const experiences = [
    {
      title: "Video and Photo Editor",
      company: "Dronegenuity",
      period: "February 2025 - November 2025",
      description: "While working at Dronegenuity, I supported myself financially and continued growing my programming skills. At the same time, I explored photo and video editing, where I learned practical techniques to create content more efficiently and effectively.",
      technologies: ["Adobe After Effects", "Adobe Photoshop", "Lightroom", "AI Text-to-Speech"],
      achievements: [
        "Improved editing performance for about 40-50%",
        "Successfully produced over 100+ client videos, improving audience engagement and helping Dronegenuity deliver consistent, brand-aligned content on time.",
      ],
    },
    {
      title: "Part-time Video Editor",
      company: "Blox Labs Media",
      period: "Part-time, December 2022 - July 2025",
      description:
        "As a part-time Video Editor at Blox Labs, I edited and produced videos that matched the client's vision and brand. I added effects, transitions, and graphics to make the videos more engaging. I worked with the team on ideas, managed deadlines, and turned raw footage into polished, professional content.",
      technologies: ["Adobe After Effects", "Adobe Photoshop", "AI Text-to-Speech"],
      achievements: [
        "Introduced creative use of AI text-to-speech, which reduced production turnaround by 40%",
        "Successfully produced over 50 client videos, improving audience engagement and helping Blox Labs deliver consistent, brand-aligned content on time.",
      ],
    },
    {
      title: "Teaching Assistant",
      company: "University of Baguio",
      period: "August 2023 - May 2025",
      description:
        "Assisted students in programming courses such as Introduction to PHP, Java, and Algorithm Structures",
      technologies: ["Java", "PHP", "Algorithm Structures", "Database (SQL)"],
      achievements: [
        "Helped freshmen students improve their understandings",
        "Received excellent feedback from students",
      ],
    },
    {
      title: "Student Administrative Assistant",
      company: "University of Baguio",
      period: "August 2022 - May 2025",
      description:
        "Assisted students and parents by providing accurate information about school programs, requirements, and department services. Supported faculty with managing schedules, appointments, and event coordination to ensure smooth academic operations. Also helped maintain organized student records and departmental files, improving accessibility and workflow efficiency.",
      technologies: ["Microsoft Office Suite", "Google Workspace"],
      achievements: [
        "Provided timely and accurate information to over 100 students and parents each semester",
        "Assisted in coordinating faculty schedules and department events efficiently",
        "Helped streamline appointment scheduling and record management",
        "Received consistent positive feedback from students and faculty for reliability and professionalism"
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30" ref={experienceRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 animate-on-scroll ${experienceVisible ? "visible animate-fade-up" : ""}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional experience and internships that have shaped my development as a software engineer and in the
            media field.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`group hover:shadow-lg transition-all duration-300 bg-card border-border animate-on-scroll ${experienceVisible ? `visible animate-fade-up animate-delay-${(index + 1) * 100}` : ""}`}
            >
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-card-foreground mb-1">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="secondary" className="mt-2 sm:mt-0 w-fit">
                        {exp.period}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-card-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-muted-foreground text-sm flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <h4 className="font-medium text-card-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
