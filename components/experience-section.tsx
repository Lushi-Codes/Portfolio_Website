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
      technologies: ["Adobe After Effects", "Adobe Photoshop", "Lightroom", "AI Text-to-Speech", "SalesForce"],
      achievements: [
        "Improved editing performance for about 40-50%",
        "Successfully produced over 100+ client videos, improving audience engagement and helping Dronegenuity deliver consistent, brand-aligned content on time.",
      ],
    },
  
    {
      title: "Teaching Assistant",
      company: "University of Baguio",
      period: "August 2023 - May 2025",
      description:
        "Assisted students in programming courses such as Introduction to PHP, Java, and Algorithm Structures",
      technologies: ["Java", "PHP", "Data Structures", "Database (SQL)", "Algorithm"],
      achievements: [
        "Helped freshmen students improve their understandings",
        "Received excellent feedback from students",
      ],
    },
    {
      title: "Part-time Video Editor",
      company: "Blox Labs Media",
      period: "Part-time, December 2022 - July 2025",
      description:
        "As a part-time Video Editor at Blox Labs, I edited and produced videos that matched the client's vision and brand. I added effects, transitions, and graphics to make the videos more engaging. I worked with the team on ideas, managed deadlines, and turned raw footage into polished, professional content.",
      technologies: ["Adobe After Effects", "Adobe Photoshop", "AI Text-to-Speech", "Discord", "Zoom"],
      achievements: [
        "Introduced creative use of AI text-to-speech, which reduced production turnaround by 40%",
        "Successfully produced over 50 client videos, improving audience engagement and helping Blox Labs deliver consistent, brand-aligned content on time.",
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
    {
      title: "Graphic Designer (Contract)",
      company: "Revest360",
      period: "September 2022 - December 2022",
      description:
        "Created visual assets and marketing materials using Canva and Adobe Photoshop. Customized templates based on client branding and project requirements, ensuring designs matched the intended message, tone, and audience. Collaborated with the client to refine layouts, color themes, and typography choices to produce consistent and high-impact designs across digital platforms.",
      technologies: ["Canva", "Adobe Photoshop", "Basic Photo Retouching", "Social Media Graphics"],
      achievements: [
        "Produced high-quality marketing materials tailored to client specifications, resulting in consistent and on-brand visuals.",
        "Customized Canva templates to match client campaigns, improving visual cohesion across social media and promotional content.",
        "Enhanced images through photo editing and retouching using Adobe Photoshop to improve clarity and presentation.",
        "Delivered all design tasks within tight deadlines, supporting the client’s content schedule and promotional timelines.",
        "Collaborated closely with the client to refine design direction, ensuring high satisfaction and successful project outcomes."
      ],
    },
    {
      title: "Administrative Assistant and Sales Person",
      company: "Conexus Tech and Arts Center (Computer and Repair Shop)",
      period: "December 2021 to July 2022",
      description:
        "I assisted customers with a variety of tech-related issues, including troubleshooting computers, printers, and laptops, both in person and through remote consultations. I also handled online inquiries, ensuring quick, clear, and helpful responses.Alongside technical support, I managed several administrative tasks such as tracking inventory, preparing invoices for tax and sales records, and maintaining organized daily documentation to support smooth business operations. I also took charge of the business’ social media pages, creating captions, uploading content, and keeping posts consistent and engaging. To help increase visibility and attract new customers, I participated in marketing efforts, including handing out flyers and speaking with people in the community. Overall, I supported the business across technical, administrative, online communication, and promotional activities — ensuring customers received reliable service and the business stayed organized and visible.",
      technologies: ["Microsoft Office Suite", "Google Workspace", "Customer Service Communication", "Social Media Management", "Basic Computer Troubleshooting", "Remote Support Tools", "Canva", "Inventory Management", "Manual Point of Sale (POS)"],
      achievements: [
        "Provided successful troubleshooting and tech support for 100+ customer devices, both in-person and remotely.",
        "Improved customer response time by efficiently handling online inquiries and remote consultations.",
        "Maintained organized inventory and daily sales documentation, helping streamline business operations.",
        "Created consistent social media content that increased engagement and helped attract new customers.",
        "Supported marketing efforts through flyer distribution and community outreach, contributing to higher store visibility.",
        "Ensured accurate invoice preparation for tax and sales records, reducing errors and improving documentation processes."
      ],
    },
    {
      title: "Data Annotator (Freelance)",
      company: "Remotasks",
      period: "April 2021 - December 2021",
      description:
        "Specialized in video and photo annotation tasks, including object labeling, frame-by-frame tagging, activity recognition, and scene categorization. Carefully tagged visual elements such as people, vehicles, objects, and environments to support computer vision model training. Followed strict quality guidelines to ensure accurate, consistent, and high-value annotations for machine learning datasets.",
      technologies: ["Video Annotation Tools", "Image Labeling Platforms", "Quality Assurance for Visual Data", "Attention to Detail"],
      achievements: [
        "Labeled hundreds of frames for object recognition, tracking, and visual dataset training.",
        "Maintained top-tier quality scores by consistently following annotation guidelines and visual standards.",
        "Contributed to the improvement of computer vision models by delivering detailed and precise annotations.",
        "Handled multiple project types such as object detection, action recognition, and environmental scene tagging."
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
