import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "ReactJS", level: 90, category: "frontend", icon: "react" },
      { name: "Redux", level: 85, category: "frontend", icon: "redux" },
      { name: "React Query", level: 80, category: "frontend", icon: "react-query" },
      { name: "Angular 17", level: 85, category: "frontend", icon: "angular" },
      { name: "AngularJS", level: 75, category: "frontend", icon: "angularjs" },
      { name: "RxJS", level: 75, category: "frontend", icon: "rxjs" },
      { name: "JavaScript", level: 90, category: "frontend", icon: "javascript" },
      { name: "TypeScript", level: 85, category: "frontend", icon: "typescript" },
      { name: "HTML5", level: 95, category: "frontend", icon: "html5" },
      { name: "CSS3", level: 90, category: "frontend", icon: "css3" },
      { name: "NextJS", level: 60, category: "frontend", icon: "nextjs" },
      { name: "AlpineJS", level: 50, category: "frontend", icon: "alpine" }
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "NodeJS", level: 85, category: "backend", icon: "nodejs" },
      { name: "NestJS", level: 80, category: "backend", icon: "nestjs" },
      { name: "MongoDB", level: 85, category: "backend", icon: "mongodb" },
      { name: "SQL", level: 75, category: "backend", icon: "database" },
      { name: "Redis", level: 70, category: "backend", icon: "redis" },
      { name: "Microservices", level: 60, category: "backend", icon: "microservices" },
      { name: "RESTful APIs", level: 90, category: "backend", icon: "api" }
    ]
  },
  {
    name: "Tools & DevOps",
    skills: [
      { name: "Git", level: 85, category: "tools", icon: "git" },
      { name: "GitHub", level: 85, category: "tools", icon: "github" },
      { name: "Bitbucket", level: 80, category: "tools", icon: "bitbucket" },
      { name: "Docker", level: 60, category: "tools", icon: "docker" },
      { name: "Jira", level: 80, category: "tools", icon: "jira" },
      { name: "VS Code", level: 90, category: "tools", icon: "vscode" },
      { name: "Figma", level: 70, category: "tools", icon: "figma" }
    ]
  }
]; 