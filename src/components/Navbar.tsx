import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Search, Info, Shield, Target, Zap, PlusCircle } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png";

const comoFuncionaLinks = [
  { label: "O Ajudaki", href: "/sobre", icon: Info, desc: "Conheça a plataforma" },
  { label: "Segurança", href: "/seguranca", icon: Shield, desc: "Como protegemos suas doações" },
  { label: "Pagamentos e Destino Certo", href: "/destino-certo", icon: Target, desc: "Para onde vai sua doação" },
  { label: "Como Funciona", href: "/como-funciona-ajudaki", icon: Zap, desc: "Veja o passo a passo" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 relative">
        {/* Left links - desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {/* Como Funciona dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Como Funciona
              <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[520px] bg-card border border-border rounded-2xl shadow-xl p-4 grid grid-cols-2 gap-2 animate-fade-in">
                {comoFuncionaLinks.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-start gap-3 rounded-xl p-3 hover:bg-muted transition-colors group"
                  >
                    <item.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.label}
                      </span>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li>
            <Link
              to="/campanhas"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Causas
            </Link>
          </li>

          <li>
            <Link
              to="/criar-campanha"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Criar Campanha
            </Link>
          </li>
        </ul>

        {/* Logo - centered */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <img src={logoHorizontal} alt="Ajudaki" className="h-8" />
        </Link>

        {/* Right buttons - desktop */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-muted-foreground hover:text-primary transition-colors p-2">
            <Search className="h-5 w-5" />
          </button>
          <Button size="sm">Criar Conta</Button>
          <Button variant="outline" size="sm">
            Acessa sua Conta
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground ml-auto" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          <button
            onClick={() => setMobileDropdown(!mobileDropdown)}
            className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-primary py-1"
          >
            Como Funciona
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileDropdown ? "rotate-180" : ""}`} />
          </button>
          {mobileDropdown && (
            <div className="pl-4 space-y-1">
              {comoFuncionaLinks.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => { setOpen(false); setMobileDropdown(false); }}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary py-1.5"
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <Link
            to="/campanhas"
            className="block text-sm font-medium text-muted-foreground hover:text-primary py-1"
            onClick={() => setOpen(false)}
          >
            Causas
          </Link>

          <Link
            to="/criar-campanha"
            className="block text-sm font-medium text-muted-foreground hover:text-primary py-1"
            onClick={() => setOpen(false)}
          >
            Criar Campanha
          </Link>

          <div className="flex gap-2 pt-2">
            <Button size="sm" className="flex-1">
              Criar Conta
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              Acessa sua Conta
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
