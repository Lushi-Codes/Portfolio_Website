"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ProjectsSection() {
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation({ threshold: 0.1 })

  const projects = [
    {
      title: "AI-Powered ebook Library System (2025)",
      description:
        "EBOOK-LIB is a full-stack web application built with Next.js, TypeScript, and Tailwind CSS that serves as a digital bookstore and reading hub.Users can browse, search, purchase, and download ebooks — or access free titles instantly — while AI helps them discover new books through smart recommendations and conversational search.",
      image: "/ebook.png",
      technologies: ["Next.js", "TypeScript", "Neon Database (PostgresSQL)", "Github", "Tailwind CSS", "Prisma ORM", "Visual Studio Code", "OpenAI API"],
      liveUrl:
        "#",
    },
    {
      title: "DIWA: Divine Wars. A Real-time Strategy Game Based on Phillippine Mythology (2025)",
      description:
        "Divine Wars (DIWA) is a real-time strategy (RTS) game inspired by Philippine mythology, developed as our thesis project. In the game, players must defend their land against the evil god Sitan. What makes this project especially meaningful is that our team started with no prior experience in game development. Over the course of a single semester, we dove into learning the fundamentals of RTS gameplay, and managed to implement core mechanics, create animations, add visual effects, and even design a unique gameplay mode. The project became not just a game, but a testament to our dedication, creativity, and ability to learn and adapt under tight deadlines.",
      image: "/retro-sunburst-illustration.jpg",
      technologies: ["Unreal Engine 5", "Blueprint", "Game Design", "2D Graphics", "Game Design Document (GDD)"],
      liveUrl: "https://jdkepler0115.itch.io/divine-wars",
    },
    {
      title: "DentalFix Dental Clinic Online Appointment Booking System (2024)",
      description:
        "DentalFix Dental Clinic is a web-based system developed for a client to boost online engagement, streamline appointment scheduling, and ensure patient data privacy. The system features appointment booking and rescheduling, CRUD operations for managing patients, services, and staff records, and a report generator for tracking daily appointments and clinic performance. It also integrates various APIs such as a calendar API for real-time scheduling, a payment gateway API for secure online transactions, and an SMS reminder API to notify patients of upcoming appointments. The project was fully documented with both a Software Requirements Specification (SRS) and a Software Design Document (SDD) detailing its architecture, database schema, and user flow. Although the original version previously hosted on GitHub has since been deleted by our project manager, the project demonstrates our ability to design, document, and develop practical, client-focused systems that enhance operational efficiency and user experience.",
      image: "/dentalfix-clinic-website.png",
      technologies: ["Next.js", "MongoDB", "TypeScript", "Visual Studio Code", "Figma", "GitHub", "API", "Software Requirements Specification (SRS)", "Software Design Document (SDD)"],
      liveUrl:
        "https://www.figma.com/proto/IaUwll2Kw7e1OBR75OvYhT/Entech-Proto--Copy-?node-id=0-1&t=HpJcazH6pPIcjlth-1",
    },
    {
      title: "Movie Rental System (2019)",
      description:
        "Movie Rental System was developed collaboratively by myself, Mr. Fagyan, and Ms. Tomelden as our final database project. The system was built in Microsoft Visual Studio using the C# language and the ASP.NET framework, with the database managed in MySQL (XAMPP) as required for the course. It was deployed locally for testing and demonstration purposes, with Google Drive used for version control before we were introduced to GitHub. The system features three user roles — Admin, Staff, and User — each with unique interfaces and access permissions. Core functionalities include borrowing and returning movies, real-time stock availability, and an integrated payment system. Additional features such as searching, browsing, and filtering improve usability and streamline the rental process.",
      image: "/MovieRental.png",
      technologies: ["C# (ASP.NET)", "Microsoft Visual Studio", "MySQL XAMPP", "Google Drive", "Bootstrap"],
      liveUrl:
        "https://drive.google.com/drive/folders/17Axq8KPV_PXGz-0iyWVzRa22NW9DhjsI?usp=sharing",
    },
  ]

  return (
    <section id="projects" className="py-20" ref={projectsRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 animate-on-scroll ${projectsVisible ? "visible animate-fade-up" : ""}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Featured Programming Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            These projects were developed during my university years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
                {project.liveUrl && (
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-black/90 hover:bg-gray gap-2 cursor-pointer"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live
                    </Button>
                  </div>
                )}
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
