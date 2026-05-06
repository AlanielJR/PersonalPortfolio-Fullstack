import { ExternalLink, GitBranch, Layers } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";

const techColors: Record<string, string> = {
  "Next.js": "bg-navy-dark text-white",
  "React": "bg-navy-mid/20 text-navy-mid",
  "TypeScript": "bg-navy/20 text-navy",
  "Tailwind CSS": "bg-navy-light/20 text-navy-light",
  "Vercel": "bg-navy-pale/20 text-navy-dark",
};

function getTechClass(tech: string) {
  return techColors[tech] ?? "bg-navy/10 text-navy-mid";
}

export function Projects() {
  return (
    <section id="proyectos" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Proyectos"
          subtitle="Trabajos entregados a clientes reales. Cada proyecto construido con atención al detalle y orientado a resultados."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-white border border-navy/10 group hover:shadow-xl hover:shadow-navy/10 transition-all duration-300 flex flex-col"
            >
              {/* Color banner */}
              <div
                className="h-2 w-full flex-shrink-0"
                style={{ backgroundColor: project.accentColor }}
              />

              {/* Visual preview */}
              <div
                className="h-48 flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: project.accentColor + "15" }}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 50%, ${project.accentColor} 0%, transparent 60%)`,
                  }}
                />
                <div className="relative flex flex-col items-center gap-3 p-6 text-center">
                  <div
                    className="w-14 h-14 flex items-center justify-center"
                    style={{ backgroundColor: project.accentColor }}
                  >
                    <Layers className="w-7 h-7 text-white" />
                  </div>
                  <span
                    className="text-xs font-semibold uppercase tracking-widest px-3 py-1 border"
                    style={{
                      color: project.accentColor,
                      borderColor: project.accentColor + "60",
                      backgroundColor: project.accentColor + "10",
                    }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <p className="text-navy-light text-xs font-semibold uppercase tracking-widest mb-1">
                  {project.client}
                </p>
                <h3 className="font-heading text-xl font-bold text-navy-dark mb-3 group-hover:text-navy transition-colors">
                  {project.title}
                </h3>
                <p className="text-navy-mid text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs font-medium px-2.5 py-1 ${getTechClass(t)}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-5 pt-5 border-t border-navy/10 flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-navy-mid hover:text-gold text-sm font-medium transition-colors"
                    >
                      <GitBranch className="w-4 h-4" />
                      Código
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-navy-mid hover:text-gold text-sm font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver sitio
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}

          {/* Placeholder card for future projects */}
          <article className="bg-white border-2 border-dashed border-navy/15 flex flex-col items-center justify-center text-center p-10 min-h-[340px]">
            <div className="w-12 h-12 border-2 border-dashed border-navy/20 flex items-center justify-center mb-4">
              <span className="text-navy/30 text-2xl font-bold">+</span>
            </div>
            <p className="text-navy-mid font-medium text-sm">Próximos proyectos</p>
            <p className="text-navy/40 text-xs mt-1">En camino...</p>
          </article>
        </div>
      </div>
    </section>
  );
}
