export interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  description: string;
  tech: string[];
  accentColor: string;
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Kimberly Nieto — Abogada",
    client: "Kimberly Nieto",
    category: "Landing Page",
    description:
      "Sitio web profesional para abogada individual en Ciudad de Panamá. Diseño cálido con paleta chocolate y dorado, formulario de contacto, sección de servicios y perfil de la abogada.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    accentColor: "#52200a",
    github: "https://github.com/AlanielJR",
  },
  {
    id: 2,
    title: "Pinzón & Pinzón Asociados",
    client: "Pinzón & Pinzón",
    category: "Landing Page",
    description:
      "Landing page para firma de abogados en Panamá con equipo multidisciplinario. Paleta azul mar profundo, sección de testimonios, preguntas frecuentes y formulario de contacto.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    accentColor: "#0c3070",
    github: "https://github.com/AlanielJR/pinzon-pinzon-asociados",
  },
];
