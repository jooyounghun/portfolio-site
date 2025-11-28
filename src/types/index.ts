export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string[];
}
