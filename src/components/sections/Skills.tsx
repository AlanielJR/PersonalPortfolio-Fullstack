import { Monitor, Server, Wrench } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const categories = [
  {
    icon: Monitor,
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5 / CSS3",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [
      "Java",
      "Android",
      "C#",
      "Node.js",
      "REST APIs",
    ],
  },
  {
    icon: Wrench,
    title: "Herramientas",
    skills: [
      "Git & GitHub",
      "Vercel",
      "Cloudflare Pages",
      "VS Code",
      "Figma",
      "Linux",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Stack Tecnológico"
          subtitle="Las tecnologías con las que construyo productos digitales."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(({ icon: Icon, title, skills }) => (
            <div
              key={title}
              className="bg-cream border border-navy/10 p-8 hover:shadow-lg hover:shadow-navy/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-navy flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-gold" />
              </div>
              <div className="h-0.5 w-8 bg-gold mb-5" />
              <h3 className="font-heading text-lg font-bold text-navy-dark mb-5">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 bg-gold flex-shrink-0" />
                    <span className="text-navy-mid text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
