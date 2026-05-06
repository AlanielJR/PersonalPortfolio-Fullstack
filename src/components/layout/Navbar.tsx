"use client";

import { useState } from "react";
import { Menu, X, GitBranch, Code2 } from "lucide-react";

const links = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#skills", label: "Skills" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gold flex items-center justify-center">
              <Code2 className="w-4 h-4 text-navy-dark" />
            </div>
            <span className="font-heading font-bold text-white group-hover:text-gold transition-colors">
              Alaniel Ríos
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/70 hover:text-gold text-sm font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://github.com/AlanielJR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-gold transition-colors"
              aria-label="GitHub"
            >
              <GitBranch className="w-5 h-5" />
            </a>
          </nav>

          <button
            className="md:hidden text-white/70 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-navy-dark border-t border-white/10 px-4 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-white/70 hover:text-gold text-sm font-medium py-1 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/AlanielJR"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/60 hover:text-gold text-sm transition-colors pt-2 border-t border-white/10"
          >
            <GitBranch className="w-4 h-4" />
            GitHub
          </a>
        </div>
      )}
    </header>
  );
}
