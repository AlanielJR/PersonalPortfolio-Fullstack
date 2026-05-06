import { GitBranch, Globe, Mail, MessageSquare } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "alaniel31@gmail.com",
    href: "mailto:alaniel31@gmail.com",
    description: "Respuesta en menos de 24 horas",
  },
  {
    icon: GitBranch,
    label: "GitHub",
    value: "github.com/AlanielJR",
    href: "https://github.com/AlanielJR",
    description: "Proyectos y código fuente",
  },
  {
    icon: Globe,
    label: "LinkedIn",
    value: "Alaniel Ríos",
    href: "https://www.linkedin.com/in/alaniel-rios-57705a296",
    description: "Perfil profesional",
  },
];

export function Contact() {
  return (
    <section id="contacto" className="py-20 lg:py-28 bg-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="¿Hablamos?"
          subtitle="Cuéntame tu proyecto. La primera consulta es gratuita y sin compromiso."
          light
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {channels.map(({ icon: Icon, label, value, href, description }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="bg-white/5 border border-white/10 p-7 hover:bg-white/10 hover:border-gold/40 transition-all duration-200 group"
            >
              <div className="w-11 h-11 bg-gold/10 border border-gold/20 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                {label}
              </p>
              <p className="text-white font-semibold text-sm group-hover:text-gold transition-colors">
                {value}
              </p>
              <p className="text-white/40 text-xs mt-1">{description}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-white/40 text-sm">
            <MessageSquare className="w-4 h-4" />
            También disponible por WhatsApp — contáctame primero por email para coordinar.
          </div>
        </div>
      </div>
    </section>
  );
}
