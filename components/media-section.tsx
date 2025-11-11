"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, ImageIcon, Award, TrendingUp, ExternalLink } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function MediaSection() {
  const { ref: mediaRef, isVisible: mediaVisible } = useScrollAnimation({ threshold: 0.1 })

  const mediaProjects = [
    {
      title: "Drone Media Editing",
      category: "Photo & Video Editing",
      description:
        "Edited and optimized 100+ drone videos and photos for various clients at Dronegenuity, ensuring high-quality output and consistent branding across all deliverables. Projects covered not only real estate and infrastructure but also occasions such as weddings, birthdays, and corporate events. Clients included major companies like KB Home Retail and Amazon Warehouses across the USA. Not all edited media are publicly shared due to company confidentiality and client privacy policies.",
      image: "/aerial-residential-development.jpg",
      stats: { projects: "100+", clients: "Multiple", improvement: "25% faster turnaround" },
      tools: ["Adobe After Effects", "Lightroom", "Photoshop", "Envato"],
      icon: Play,
      driveUrl: "https://mega.nz/folder/QCAAAY7K#K-5KUS7Bu2UNjd_b6Q0zng", 
    },
    {
      title: "Client Video Productions",
      category: "Video Editing",
      description:
        "Produced over 50 professional videos for Blox Labs Media, incorporating creative effects, transitions, and graphics while maintaining brand consistency and meeting tight deadlines. Some reels are not publicly included due to client confidentiality and internal company use.",
      image: "/blox-labs-logo.jpg",
      stats: { projects: "50+", duration: "3 years", achievement: "40% faster with AI" },
      tools: ["Adobe After Effects", "AI Text-to-Speech"],
      icon: Play,
      driveUrl: "https://drive.google.com/drive/folders/1rMmo1lA33MedSlUfiW1HzcGGiiIe7KF9?usp=sharing", // Replace with your actual Google Drive or portfolio link
    },
    {
      title: "Social Media Manager",
      category: "Photo & Video Editing with Videography & Photography",
      description:
        "Documented and covered various university events as the Public Relations Officer of the School of Information Technology. Created press releases, social media content, and visual materials to promote departmental activities and student achievements. Collaborated with faculty and student organizations to ensure timely communication and publication. Represented the department in several university-wide video editing competitions, winning multiple awards for creativity and storytelling.",
      image: "/SAC.jpg",
      stats: { experience: "3 years", projects: "Various" },
      tools: ["After Effects", "Adobe Photoshop", "Adobe Lightroom", "Canva"],
      icon: ImageIcon,
      driveUrl: "https://www.facebook.com/UBSITSAC", // Replace with your actual Google Drive or portfolio link
    },
  ]

  const skills = [
    {
      category: "Video Editing",
      tools: ["Adobe Premiere Pro", "Adobe After Effects", "Sony Vegas Pro"],
      level: "Advanced",
    },
    {
      category: "Photo Editing",
      tools: ["Adobe Photoshop", "Adobe Lightroom", "Canva", "GIMP"],
      level: "Advanced",
    },
    {
      category: "Motion Graphics",
      tools: ["Adobe After Effects", "Blender"],
      level: "Basic",
    },
    {
      category: "AI Tools",
      tools: ["AI Text-to-Speech", "AI Enhancement Tools", "Automated Workflows"],
      level: "Proficient",
    },
  ]

  return (
    <section id="media" className="py-20 bg-muted/30" ref={mediaRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 animate-on-scroll ${mediaVisible ? "visible animate-fade-up" : ""}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Media Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional video and photo editing work showcasing creativity, technical expertise, and attention to
            detail
          </p>
        </div>

        {/* Key Achievements */}
        <div
          className={`grid md:grid-cols-3 gap-6 mb-16 animate-on-scroll ${mediaVisible ? "visible animate-fade-up animate-delay-100" : ""}`}
        >
          <Card className="bg-card border-border">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-card-foreground mb-2">150+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-card-foreground mb-2">75%</h3>
              <p className="text-muted-foreground">Faster Turnaround</p>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-6 text-center">
              <ImageIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-card-foreground mb-2">4+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </CardContent>
          </Card>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3
            className={`text-2xl font-bold text-foreground mb-8 animate-on-scroll ${mediaVisible ? "visible animate-fade-up animate-delay-200" : ""}`}
          >
            Featured Work
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaProjects.map((project, index) => (
              <Card
                key={index}
                className={`group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border animate-on-scroll ${mediaVisible ? `visible animate-scale-in animate-delay-${(index + 3) * 100}` : ""}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-black/90">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-black/90 hover:bg-grey flex items-center gap-2 cursor-pointer"
                      onClick={() => window.open(project.driveUrl, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Portfolio
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-card-foreground mb-2">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-muted/50 rounded-lg">
                    {Object.entries(project.stats).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-sm font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills & Tools */}
        <div>
          <h3
            className={`text-2xl font-bold text-foreground mb-8 animate-on-scroll ${mediaVisible ? "visible animate-fade-up animate-delay-400" : ""}`}
          >
            Skills & Tools
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className={`bg-card border-border hover:shadow-lg transition-all duration-300 animate-on-scroll ${mediaVisible ? `visible animate-scale-in animate-delay-${(index + 6) * 100}` : ""}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-card-foreground">{skill.category}</h4>
                    <Badge variant="outline" className="text-primary border-primary">
                      {skill.level}
                    </Badge>
                  </div>
                  <ul className="space-y-2">
                    {skill.tools.map((tool, toolIndex) => (
                      <li key={toolIndex} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
