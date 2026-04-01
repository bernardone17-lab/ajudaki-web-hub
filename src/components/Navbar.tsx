import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#hero" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Campanhas", href: "#campanhas" },
  { label: "Impacto", href: "#impacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Left links - desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <a href="#" className="font-heading text-2xl font-extrabold text-primary tracking-tight">
          ajudaki
        </a>

        {/* Right buttons - desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm">
            Acessar Conta
          </Button>
          <Button size="sm">Criar Conta</Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-muted-foreground hover:text-primary py-1"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2">
            <Button variant="outline" size="sm" className="flex-1">
              Acessar Conta
            </Button>
            <Button size="sm" className="flex-1">
              Criar Conta
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
