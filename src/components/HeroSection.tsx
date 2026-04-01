import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-background pt-20 pb-14">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
          Conectamos quem ajuda a quem mais precisa.
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          A Ajudaki é uma ponte segura entre doadores e causas sociais, garantindo
          que cada contribuição chegue com transparência, empatia e impacto real.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8">
            Fazer uma Doação
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 font-semibold text-base px-8"
          >
            Conhecer Causas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
