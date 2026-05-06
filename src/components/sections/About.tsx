import { CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const highlights = [
  "Entrega de proyectos a tiempo y con calidad",
  "Comunicación clara en cada etapa del desarrollo",
  "Código limpio, escalable y fácil de mantener",
  "Diseño orientado a la experiencia del usuario final",
];

export function About() {
  return (
    <section id="sobre-mi" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <SectionHeader title="Sobre mí" subtitle="" centered={false} />
            <p className="mt-6 text-navy-mid leading-relaxed">
              Soy Alaniel Ríos, desarrollador Fullstack con base en Panamá. Me especializo
              en construir sitios web y aplicaciones que combinan diseño profesional con
              tecnología moderna — priorizando siempre que el producto le genere valor real
              al cliente.
            </p>
            <p className="mt-4 text-navy-mid leading-relaxed">
              Trabajo principalmente con el ecosistema de React y Next.js, con especial
              foco en el desarrollo de landing pages y sitios web para profesionales
              independientes y pequeñas empresas.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-navy-dark text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats card */}
          <div className="bg-navy p-10 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
            <h3 className="font-heading text-2xl font-bold text-white mb-8">
              ¿Por qué trabajar conmigo?
            </h3>
            <div className="grid grid-cols-2 gap-8">
              {[
                { value: "2+", label: "Proyectos entregados" },
                { value: "100%", label: "Clientes satisfechos" },
                { value: "~2 sem", label: "Tiempo de entrega" },
                { value: "$0", label: "Costo de hosting" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-heading text-4xl font-bold text-gold">
                    {s.value}
                  </div>
                  <div className="text-white/60 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-white/70 text-sm italic leading-relaxed">
                &ldquo;Mi objetivo es que cada cliente tenga una presencia digital
                profesional sin los costos y complejidades que normalmente implica.&rdquo;
              </p>
              <p className="mt-3 text-gold text-sm font-semibold">— Alaniel Ríos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
