import type { PersonalInfo, SocialLink } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Pritam Prakash",
  email: "prakashpritam07@gmail.com",
  phone: "+91 8271345623",
  location: "Ahmedabad, India",
  linkedin: "https://www.linkedin.com/in/pritam-prakash-11924019b",
  github: "https://github.com/pritam0710",
  summary: "Detail-oriented Web Developer with over 2 years of experience, currently working as an Associate Software Engineer at Asite Solutions. Proven track record of delivering scalable, responsive, and maintainable applications using modern web technologies. Experienced in migrating legacy systems, developing custom UI components, and building RESTful APIs. Possesses a solid understanding of Agile methodologies, microservices, and DevOps practices."
};

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pritam-prakash-11924019b",
    icon: "linkedin",
    color: "#0077b5"
  },
  {
    name: "GitHub", 
    url: "https://github.com/pritam0710",
    icon: "github",
    color: "#333333"
  },
  {
    name: "Email",
    url: "mailto:prakashpritam07@gmail.com",
    icon: "mail",
    color: "#ea4335"
  },
  {
    name: "Phone",
    url: "tel:+918271345623",
    icon: "phone",
    color: "#34a853"
  }
]; 