const Footer = () => (
  <footer className="bg-foreground text-background py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-heading text-xl font-bold mb-3">ajudaki</h3>
          <p className="text-background/60 text-sm">
            Conectamos quem ajuda a quem mais precisa, com transparência e impacto real.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Plataforma</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><a href="#como-funciona" className="hover:text-background transition-colors">Como Funciona</a></li>
            <li><a href="#campanhas" className="hover:text-background transition-colors">Campanhas</a></li>
            <li><a href="#" className="hover:text-background transition-colors">Transparência</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Institucional</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><a href="#" className="hover:text-background transition-colors">Sobre Nós</a></li>
            <li><a href="#" className="hover:text-background transition-colors">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-background transition-colors">Política de Privacidade</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Contato</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li>contato@ajudaki.com.br</li>
            <li>@ajudaki</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 pt-6 text-center text-sm text-background/40">
        © 2026 Ajudaki. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
