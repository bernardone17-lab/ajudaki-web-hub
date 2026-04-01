import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
          Cada gesto conta.
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10">
          Comece a transformar vidas agora.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-base px-8"
          >
            Fazer uma Doação
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8"
          >
            Conhecer Causas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
