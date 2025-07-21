import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "learning-management-platform",
    title: "Learning Management Platform",
    description: "A full-fledged e-learning application that allows users to watch video lectures, purchase courses, and access blog content.",
    longDescription: "Developed a comprehensive learning management system with secure user authentication, dynamic routing, and clean dashboard layouts for both students and instructors. The platform includes course management, video streaming, payment integration, and blog functionality.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "Stripe", "Video Streaming"],
    features: [
      "User authentication and authorization",
      "Course catalog and enrollment system",
      "Video lecture streaming",
      "Payment integration with Stripe",
      "Student and instructor dashboards",
      "Blog and content management",
      "Progress tracking and certificates",
      "Responsive design for all devices"
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    images: ["/images/projects/lms-1.jpg", "/images/projects/lms-2.jpg"],
    category: "Full Stack",
    status: "completed",
    featured: true
  },
  {
    id: "ai-job-portal",
    title: "AI-Driven Job Portal",
    description: "An intelligent job matching platform designed to assist recruiters in shortlisting candidates efficiently using AI-based filtering mechanisms.",
    longDescription: "Built an advanced job portal with AI integration that automates resume screening and matches candidates with suitable job roles. The platform uses machine learning algorithms to analyze resumes, skills, and job requirements to provide intelligent recommendations.",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "AI/ML APIs", "Natural Language Processing"],
    features: [
      "AI-powered candidate matching",
      "Automated resume screening",
      "Smart job recommendations",
      "Advanced search and filtering",
      "Recruiter dashboard with analytics",
      "Candidate profile management",
      "Real-time notifications",
      "Interview scheduling system"
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    images: ["/images/projects/job-portal-1.jpg", "/images/projects/job-portal-2.jpg"],
    category: "AI/ML",
    status: "completed",
    featured: true
  },
  {
    id: "project-management-system",
    title: "Project Management System",
    description: "A comprehensive project management platform with user authentication, dashboard, and role-based access control, developed during internship at Asite Solutions.",
    longDescription: "Developed the frontend modules for an enterprise project management system during my internship. The system includes sophisticated user management, role-based permissions, project tracking, and team collaboration features.",
    technologies: ["Angular", "TypeScript", "Java", "Spring Boot", "MySQL", "REST APIs"],
    features: [
      "User authentication and authorization",
      "Role-based access control (RBAC)",
      "Project creation and management",
      "Team collaboration tools",
      "Task assignment and tracking",
      "Real-time updates and notifications",
      "Reporting and analytics dashboard",
      "Integration with backend Java services"
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    images: ["/images/projects/pms-1.jpg", "/images/projects/pms-2.jpg"],
    category: "Enterprise",
    status: "completed",
    featured: false
  },
  {
    id: "portfolio-website",
    title: "Interactive Portfolio Website",
    description: "A modern, responsive portfolio website built with React, TypeScript, and Framer Motion featuring smooth animations and interactive elements.",
    longDescription: "This portfolio website showcases my professional experience, skills, and projects with a focus on modern design principles and user experience. Built with the latest web technologies and optimized for performance and accessibility.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Lucide Icons"],
    features: [
      "Responsive design with mobile-first approach",
      "Smooth scroll animations and micro-interactions",
      "Interactive skill visualization",
      "Project filtering and categorization",
      "Contact form with validation",
      "SEO optimization",
      "Dark/light theme support",
      "Progressive Web App features"
    ],
    liveUrl: undefined,
    githubUrl: "https://github.com/pritam0710/portfolio",
    images: ["/images/projects/portfolio-1.jpg", "/images/projects/portfolio-2.jpg"],
    category: "Frontend",
    status: "in-progress",
    featured: true
  }
]; 