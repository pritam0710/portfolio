import type { Experience } from '../types';

export const experienceData: Experience[] = [
  {
    company: "Asite Solutions Pvt. Ltd.",
    position: "Associate Software Engineer",
    duration: "Jun 2024 – Present",
    location: "Ahmedabad, India",
    type: "full-time",
    responsibilities: [
      "Spearheaded the migration of core enterprise modules from AngularJS 1.8 to Angular 17, enhancing performance and maintainability",
      "Designed and developed reusable UI components including DatePicker, TimePicker, dynamic Repeating Tables, and Layout Manager for form-building applications",
      "Implemented advanced business logic using Blockly for real-time calculation and form behavior customization",
      "Created and consumed RESTful APIs using NestJS to support migrated frontend modules"
    ],
    technologies: ["Angular 17", "AngularJS", "TypeScript", "NestJS", "MongoDB", "Blockly", "RESTful APIs"],
    achievements: [
      "Successfully migrated legacy enterprise modules improving performance by 40%",
      "Developed reusable component library used across multiple projects",
      "Implemented complex business logic with visual programming using Blockly"
    ]
  },
  {
    company: "Asite Solutions Pvt. Ltd.",
    position: "Trainee Software Engineer",
    duration: "Jun 2023 – May 2024",
    location: "Ahmedabad, India", 
    type: "full-time",
    responsibilities: [
      "Addressed high-priority bug fixes and contributed to client-specific feature enhancements under tight deadlines",
      "Integrated multilingual font support and implemented custom Blockly blocks for advanced use cases",
      "Collaborated with QA and backend teams to develop robust solutions, including a Puppeteer-based module for exporting dynamic forms as PDFs",
      "Supported the extension of date-time difference calculations and custom auto-numbering logic"
    ],
    technologies: ["Angular", "JavaScript", "Puppeteer", "Blockly", "Java", "PDF Generation"],
    achievements: [
      "Delivered critical bug fixes improving system stability by 25%",
      "Implemented multilingual support increasing global user accessibility",
      "Developed PDF export functionality for dynamic forms"
    ]
  },
  {
    company: "Asite Solutions Pvt. Ltd.",
    position: "Software Development Intern",
    duration: "Feb 2023 – May 2023",
    location: "Ahmedabad, India",
    type: "internship",
    responsibilities: [
      "Developed key UI modules for a Project Management System, including authentication, authorization, dashboard, and role-based access control using Angular",
      "Collaborated closely with the backend team (Java) and UI team members to ensure smooth integration and code consistency",
      "Gained practical experience in Agile development, version control (Git), and cross-functional teamwork"
    ],
    technologies: ["Angular", "TypeScript", "Java", "Git", "Project Management"],
    achievements: [
      "Built complete authentication and authorization system",
      "Implemented role-based access control for enterprise application",
      "Successfully completed internship with offer for full-time position"
    ]
  }
]; 