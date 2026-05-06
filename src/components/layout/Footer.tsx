import { GitBranch, Globe, Mail, Code2 } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-gold flex items-center justify-center">
            <Code2 className="w-3.5 h-3.5 text-navy-dark" />
          </div>
          <span className="font-heading font-bold text-white text-sm">
            Alaniel Ríos
          </span>
        </div>

        <p className="text-white/40 text-xs">
          © {year} Alaniel Ríos. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/AlanielJR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-gold transition-colors"
            aria-label="GitHub"
          >
            <GitBranch className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/alaniel-rios-57705a296"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-gold transition-colors"
            aria-label="LinkedIn"
          >
            <Globe className="w-5 h-5" />
          </a>
          <a
            href="mailto:alaniel31@gmail.com"
            className="text-white/50 hover:text-gold transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
