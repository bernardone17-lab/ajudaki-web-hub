import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import impactMeals from "@/assets/impact-meals.jpg";
import impactFamilies from "@/assets/impact-families.jpg";
import impactTrees from "@/assets/impact-trees.jpg";
import impactSports from "@/assets/impact-sports.jpg";
import { useInView } from "@/hooks/use-in-view";

const AnimatedCard = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, isInView } = useInView(0.15);
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const ImpactGrid = () => {
  return (
    <section id="hero" className="container mx-auto px-4 pt-20 pb-20">
      {/* Desktop: integrated hero + mosaic */}
      <div className="hidden md:grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr] grid-rows-[240px_240px] gap-3 max-w-6xl mx-auto">

        {/* Col 1: Refeições — row-span-2 */}
        <AnimatedCard delay={0} className="relative rounded-2xl overflow-hidden row-span-2 group">
          <img src={impactMeals} alt="Refeições garantidas" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-primary/30" />
          <div className="relative z-10 h-full flex flex-col justify-end p-6">
            <p className="font-heading text-4xl font-extrabold text-primary-foreground">+18.500</p>
            <p className="text-primary-foreground font-semibold text-sm">refeições garantidas</p>
            <p className="text-primary-foreground/80 text-xs mt-1">Com a sua ajuda, mais mesas seguem cheias.</p>
            <a href="#" className="text-accent text-xs font-semibold mt-3 hover:underline">Doe Agora →</a>
          </div>
        </AnimatedCard>

        {/* Col 2 Row 1: +12.000 Famílias — roxo sólido */}
        <AnimatedCard delay={100} className="relative rounded-2xl overflow-hidden bg-primary">
          <div className="h-full flex flex-col justify-end p-5">
            <p className="font-heading text-3xl font-extrabold text-primary-foreground">+12.000</p>
            <p className="text-primary-foreground/90 text-xs mt-1">Famílias foram ajudadas com muitas doações voluntárias.</p>
            <a href="#" className="text-accent text-xs font-semibold mt-2 hover:underline">Saiba Mais →</a>
          </div>
        </AnimatedCard>

        {/* Col 3 Row 1: HERO TEXT (spans col 3) */}
        <div className="flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-heading text-3xl lg:text-4xl font-extrabold text-foreground leading-tight mb-4">
            Conectamos quem ajuda a quem mais precisa.
          </h1>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
            A Ajudaki é uma ponte segura entre doadores e causas sociais, garantindo que cada contribuição chegue com transparência.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6">
              Fazer uma Doação
            </Button>
            <Button size="sm" variant="outline" className="border-foreground text-foreground hover:bg-foreground/10 font-semibold px-6">
              Conhecer Causas
            </Button>
          </div>
        </div>

        {/* Col 4 Row 1: empty spacer — hero text visually extends */}
        <div />

        {/* Col 5 Row 1: Emergência — rounded phone style */}
        <AnimatedCard delay={200} className="relative rounded-[2rem] overflow-hidden group">
          <img src={impactFamilies} alt="Emergência" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
          <div className="relative z-10 h-full flex flex-col justify-between p-4">
            <span className="inline-block self-start bg-destructive/90 text-destructive-foreground text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Emergência</span>
            <div>
              <div className="flex justify-between text-xs text-primary-foreground/80 mb-1">
                <span>R$ 48.000</span>
                <span>80%</span>
              </div>
              <Progress value={80} className="h-2" />
              <div className="mt-2 bg-card/90 backdrop-blur-sm rounded-xl p-2 flex items-center gap-2">
                <span className="text-foreground text-[11px] font-semibold flex-1">Uma chance a mais para o Carlos</span>
                <a href="#" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full h-7 w-7 flex items-center justify-center text-sm font-bold transition-colors shrink-0">→</a>
              </div>
            </div>
          </div>
        </AnimatedCard>

        {/* Row 2 */}

        {/* Col 2 Row 2: Mãos — "Sua ajuda é essencial" */}
        <AnimatedCard delay={150} className="relative rounded-2xl overflow-hidden group">
          <img src={impactFamilies} alt="Sua ajuda é essencial" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-accent/85 via-accent/40 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end p-5">
            <p className="text-primary-foreground font-heading text-sm font-bold">Sua ajuda é essencial!</p>
          </div>
        </AnimatedCard>

        {/* Col 3 Row 2: Árvores */}
        <AnimatedCard delay={250} className="relative rounded-2xl overflow-hidden group">
          <img src={impactTrees} alt="Árvores plantadas" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/20" />
          <div className="relative z-10 h-full flex flex-col justify-end p-5">
            <p className="font-heading text-3xl font-extrabold text-primary-foreground">+10.000</p>
            <p className="text-primary-foreground font-semibold text-xs">árvores plantadas</p>
            <p className="text-primary-foreground/80 text-[11px] mt-1">Graças às pessoas que acreditam no futuro.</p>
            <a href="#" className="text-accent text-xs font-semibold mt-2 hover:underline">Saiba Mais →</a>
          </div>
        </AnimatedCard>

        {/* Col 4 Row 2: Esportes com CTA */}
        <AnimatedCard delay={350} className="relative rounded-2xl overflow-hidden group">
          <img src={impactSports} alt="Esportes" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end p-4">
            <p className="text-primary-foreground/90 text-[11px]">Com sua ajuda, o jogo continua.</p>
            <div className="mt-2 bg-card/90 backdrop-blur-sm rounded-xl p-2 flex items-center gap-2">
              <span className="text-foreground text-[11px] font-semibold flex-1">Apoie o retorno do João ao futebol</span>
              <a href="#" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full h-7 w-7 flex items-center justify-center text-sm font-bold transition-colors shrink-0">→</a>
            </div>
          </div>
        </AnimatedCard>

        {/* Col 5 Row 2: +50.000 roxo sólido — rounded phone style */}
        <AnimatedCard delay={400} className="relative rounded-[2rem] overflow-hidden bg-primary">
          <div className="h-full flex flex-col justify-end p-5">
            <p className="font-heading text-3xl font-extrabold text-primary-foreground">+50.000</p>
            <p className="text-primary-foreground/90 text-[11px] mt-1">Pessoas apoiadas por campanhas verificadas pela Ajudaki. ✓</p>
            <a href="#" className="text-accent text-xs font-semibold mt-2 hover:underline">Seja + um Apoiador →</a>
          </div>
        </AnimatedCard>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden">
        {/* Hero text */}
        <div className="text-center mb-8">
          <h1 className="font-heading text-3xl font-extrabold text-foreground leading-tight mb-4">
            Conectamos quem ajuda a quem mais precisa.
          </h1>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
            A Ajudaki é uma ponte segura entre doadores e causas sociais, garantindo que cada contribuição chegue com transparência.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6">
              Fazer uma Doação
            </Button>
            <Button size="sm" variant="outline" className="border-foreground text-foreground hover:bg-foreground/10 font-semibold px-6">
              Conhecer Causas
            </Button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { img: impactMeals, num: "+18.500", label: "refeições garantidas", overlay: "from-primary/90 to-primary/40" },
            { img: null, num: "+12.000", label: "famílias assistidas", overlay: "" },
            { img: impactTrees, num: "+10.000", label: "árvores plantadas", overlay: "from-primary/90 to-primary/40" },
            { img: null, num: "+50.000", label: "pessoas apoiadas", overlay: "" },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`relative rounded-2xl overflow-hidden min-h-[200px] flex items-end p-4 animate-fade-in ${!item.img ? "bg-primary" : ""}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {item.img && (
                <>
                  <img src={item.img} alt={item.label} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.overlay}`} />
                </>
              )}
              <div className="relative z-10">
                <p className="font-heading text-2xl font-extrabold text-primary-foreground">{item.num}</p>
                <p className="text-primary-foreground/90 text-xs font-medium">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactGrid;
