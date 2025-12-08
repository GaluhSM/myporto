export interface Service {
  title: string;
  description: string;
  icon?: string;
}

export const SERVICES: Service[] = [
  {
    title: "Web Development",
    description: "Membangun website responsif dan performa tinggi dengan stack modern.",
  },
  {
    title: "UI Engineering",
    description: "Menerjemahkan desain Figma menjadi kode yang presisi dan interaktif.",
  },
  {
    title: "Performance Optimization",
    description: "Audit dan optimasi web vitals untuk pengalaman pengguna terbaik.",
  }
];

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Java", "PHP", "SQL", "Python"]
  },
  {
    category: "Frameworks",
    skills: ["Astro", "Svelte", "React", "Next.js", "Tailwind CSS", "Laravel", "Spring Boot"]
  },
  {
    category: "Tools",
    skills: ["Git", "Figma", "Podman", "Postman", "VS Code", "Swagger", "JaCoCo", "Keycloak"]
  }
];