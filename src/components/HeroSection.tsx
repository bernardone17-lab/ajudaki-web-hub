import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[600px] flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt="Voluntários distribuindo doações"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/80 to-primary/60" />
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl space-y-6">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight">
            Conectamos quem ajuda a quem mais precisa.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-lg">
            A Ajudaki é a plataforma que conecta doadores a causas reais com total
            transparência e impacto mensurável.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8">
              Fazer uma Doação
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8"
            >
              Conhecer Causas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
