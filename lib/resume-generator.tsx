import { resumeData } from "./resume-data"

export function generateResumeHTML(): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${resumeData.personalInfo.name} - Resume</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background: white;
            padding: 40px;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #3b82f6;
        }
        
        .name {
            font-size: 2.5em;
            font-weight: bold;
            color: #1e40af;
            margin-bottom: 10px;
        }
        
        .contact-info {
            font-size: 0.9em;
            color: #666;
            margin-bottom: 10px;
        }
        
        .section {
            margin-bottom: 25px;
        }
        
        .section-title {
            font-size: 1.3em;
            font-weight: bold;
            color: #1e40af;
            margin-bottom: 15px;
            padding-bottom: 5px;
            border-bottom: 1px solid #e5e7eb;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .about-text {
            text-align: justify;
            margin-bottom: 15px;
            line-height: 1.7;
        }
        
        .competencies {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 10px;
            margin-bottom: 15px;
        }
        
        .competency {
            background: #f8fafc;
            padding: 8px 12px;
            border-left: 3px solid #3b82f6;
            font-size: 0.9em;
        }
        
        .experience-item, .education-item, .extracurricular-item {
            margin-bottom: 20px;
            padding: 15px;
            background: #f8fafc;
            border-radius: 5px;
        }
        
        .job-title {
            font-size: 1.1em;
            font-weight: bold;
            color: #1e40af;
        }
        
        .company {
            font-weight: bold;
            color: #374151;
            margin-bottom: 5px;
        }
        
        .duration {
            font-style: italic;
            color: #6b7280;
            margin-bottom: 10px;
        }
        
        .description {
            text-align: justify;
            line-height: 1.6;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
        }
        
        .skill-category {
            background: #f8fafc;
            padding: 15px;
            border-radius: 5px;
            border-left: 4px solid #3b82f6;
        }
        
        .skill-category-title {
            font-weight: bold;
            color: #1e40af;
            margin-bottom: 10px;
            text-transform: uppercase;
            font-size: 0.9em;
        }
        
        .skill-list {
            list-style: none;
        }
        
        .skill-list li {
            padding: 3px 0;
            color: #374151;
            font-size: 0.9em;
        }
        
        .skill-list li:before {
            content: "• ";
            color: #3b82f6;
            font-weight: bold;
        }
        
        @media print {
            body {
                padding: 20px;
                font-size: 12px;
            }
            
            .name {
                font-size: 2em;
            }
            
            .section-title {
                font-size: 1.1em;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="name">${resumeData.personalInfo.name}</div>
        <div class="contact-info">
            ${resumeData.personalInfo.phone} · ${resumeData.personalInfo.email} · ${resumeData.personalInfo.portfolio}
        </div>
        <div class="contact-info">
            ${resumeData.personalInfo.location}
        </div>
    </div>

    <div class="section">
        <div class="section-title">About</div>
        <div class="about-text">${resumeData.about}</div>
    </div>

    <div class="section">
        <div class="section-title">Key Competencies</div>
        <div class="competencies">
            ${resumeData.keyCompetencies.map((comp) => `<div class="competency">${comp}</div>`).join("")}
        </div>
    </div>

    <div class="section">
        <div class="section-title">Professional Experience</div>
        ${resumeData.experience
          .map(
            (exp) => `
            <div class="experience-item">
                <div class="company">${exp.company}</div>
                <div class="job-title">${exp.position}</div>
                <div class="duration">${exp.type} | ${exp.duration}</div>
                <div class="description">${exp.description}</div>
            </div>
        `,
          )
          .join("")}
    </div>

    <div class="section">
        <div class="section-title">Education & Certifications</div>
        ${resumeData.education
          .map(
            (edu) => `
            <div class="education-item">
                <div class="job-title">${edu.degree}</div>
                <div class="company">${edu.institution}</div>
                <div class="duration">${edu.duration}</div>
            </div>
        `,
          )
          .join("")}
    </div>

    <div class="section">
        <div class="section-title">Extracurricular Activities</div>
        ${resumeData.extracurricular
          .map(
            (ext) => `
            <div class="extracurricular-item">
                <div class="job-title">${ext.role}</div>
                <div class="company">${ext.organization}</div>
                <div class="company">${ext.institution}</div>
                <div class="duration">${ext.duration}</div>
            </div>
        `,
          )
          .join("")}
    </div>

    <div class="section">
        <div class="section-title">Skills</div>
        <div class="skills-grid">
            <div class="skill-category">
                <div class="skill-category-title">Video & Photo Editing</div>
                <ul class="skill-list">
                    ${resumeData.skills.videoPhotoEditing.map((skill) => `<li>${skill}</li>`).join("")}
                </ul>
            </div>
            <div class="skill-category">
                <div class="skill-category-title">Frontend</div>
                <ul class="skill-list">
                    ${resumeData.skills.frontend.map((skill) => `<li>${skill}</li>`).join("")}
                </ul>
            </div>
            <div class="skill-category">
                <div class="skill-category-title">Backend</div>
                <ul class="skill-list">
                    ${resumeData.skills.backend.map((skill) => `<li>${skill}</li>`).join("")}
                </ul>
            </div>
            <div class="skill-category">
                <div class="skill-category-title">Others</div>
                <ul class="skill-list">
                    ${resumeData.skills.others.map((skill) => `<li>${skill}</li>`).join("")}
                </ul>
            </div>
        </div>
    </div>
</body>
</html>
  `
}

export function downloadResume() {
  const resumeHTML = generateResumeHTML()

  // Create a new window for printing
  const printWindow = window.open("", "_blank")
  if (printWindow) {
    printWindow.document.write(resumeHTML)
    printWindow.document.close()

    // Wait for content to load, then print
    printWindow.onload = () => {
      printWindow.print()
      // Close the window after printing (optional)
      printWindow.onafterprint = () => {
        printWindow.close()
      }
    }
  }
}
