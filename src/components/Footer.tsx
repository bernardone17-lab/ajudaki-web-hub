import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png";

const Footer = () => (
  <footer className="bg-foreground text-background">
    {/* Main footer */}
    <div className="container mx-auto px-4 py-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Branding */}
        <div className="space-y-4">
          <img src={logoHorizontal} alt="Ajudaki" className="h-8 brightness-0 invert" />
          <p className="text-background/60 text-sm leading-relaxed">
            Conectamos quem ajuda a quem mais precisa, com transparência e impacto real.
          </p>
          <div className="flex gap-3 pt-1">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Plataforma */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Plataforma</h4>
          <ul className="space-y-2.5 text-sm text-background/60">
            <li>
              <Link to="/como-funciona-ajudaki" className="hover:text-background transition-colors">
                Como funciona
              </Link>
            </li>
            <li>
              <Link to="/contato" className="hover:text-background transition-colors">Criar campanha</Link>
            </li>
            <li>
              <a href="/#campanhas" className="hover:text-background transition-colors">Explorar Campanhas</a>
            </li>
          </ul>
        </div>

        {/* Institucional */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Institucional</h4>
          <ul className="space-y-2.5 text-sm text-background/60">
            <li>
              <Link to="/sobre" className="hover:text-background transition-colors">Sobre Nós</Link>
            </li>
            <li>
              <Link to="/seguranca" className="hover:text-background transition-colors">Transparência</Link>
            </li>
            <li>
              <Link to="/ongs" className="hover:text-background transition-colors">ONGs</Link>
            </li>
          </ul>
        </div>

        {/* Suporte */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Suporte</h4>
          <ul className="space-y-2.5 text-sm text-background/60">
            <li>
              <a href="#" className="hover:text-background transition-colors">Contato</a>
            </li>
            <li>
              <a href="#" className="hover:text-background transition-colors">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-background/10">
      <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-background/40">
        <span>© 2026 Ajudaki. Todos os direitos reservados.</span>
        <div className="flex gap-6">
          <Link to="/termos-de-uso" className="hover:text-background transition-colors">Termos</Link>
          <Link to="/privacidade" className="hover:text-background transition-colors">Privacidade</Link>
          <Link to="/cookies" className="hover:text-background transition-colors">Cookies</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
