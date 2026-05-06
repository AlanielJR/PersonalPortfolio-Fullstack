import { ArrowDown, GitBranch, Globe, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, #c1985f 0%, transparent 45%),
                           radial-gradient(circle at 80% 70%, #1a4a9e 0%, transparent 50%)`,
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 px-4 py-1.5 text-gold text-sm font-medium tracking-wider uppercase mb-8">
          <span className="w-1.5 h-1.5 bg-gold rounded-full" />
          Disponible para proyectos · Panamá
        </div>

        {/* Heading */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl mx-auto">
          Hola, soy{" "}
          <span className="text-gold italic">Alaniel Ríos</span>
        </h1>

        <div className="mt-4 h-0.5 w-20 bg-gold mx-auto" />

        <p className="mt-6 text-2xl sm:text-3xl font-heading font-semibold text-white/80">
          Desarrollador Fullstack
        </p>

        <p className="mt-4 text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Diseño y construyo productos digitales — desde landing pages profesionales
          hasta aplicaciones web completas, con foco en diseño, rendimiento y resultados.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#proyectos" variant="primary" size="lg">
            Ver proyectos
            <ArrowDown className="ml-2 w-4 h-4" />
          </Button>
          <Button href="#contacto" variant="outline" size="lg">
            Contáctame
          </Button>
        </div>

        {/* Social links */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href="https://github.com/AlanielJR"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-sm"
          >
            <GitBranch className="w-4 h-4" />
            GitHub
          </a>
          <span className="text-white/20">·</span>
          <a
            href="https://www.linkedin.com/in/alaniel-rios-57705a296"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-sm"
          >
            <Globe className="w-4 h-4" />
            LinkedIn
          </a>
          <span className="text-white/20">·</span>
          <a
            href="mailto:alaniel31@gmail.com"
            className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-sm"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
