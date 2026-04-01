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
    <section id="hero" className="container mx-auto px-4 pt-12 pb-16">
      {/* Desktop layout */}
      <div className="hidden md:block max-w-[1100px] mx-auto">
        {/* Hero text — full width centered above cards */}
        <div className="text-center mb-6">
          <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-4">
            Conectamos quem ajuda<br />a quem mais precisa.
          </h1>
          <p className="text-sm lg:text-base text-muted-foreground max-w-lg mx-auto mb-6">
            A Ajudaki é uma ponte segura entre doadores e causas sociais,
            garantindo que cada contribuição chegue com transparência,
            empatia e impacto real.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-11 rounded-full">
              Fazer uma Doação
            </Button>
            <Button variant="outline" className="border-foreground/30 text-foreground hover:bg-foreground/5 font-semibold px-8 h-11 rounded-full">
              Conhecer Causas
            </Button>
          </div>
        </div>

        {/* Mosaic grid — 5 columns, 2 rows */}
        <div className="grid grid-cols-[1.4fr_1fr_1.2fr_1fr_1.2fr] grid-rows-[220px_220px] gap-3">
          {/* Col 1: Refeições — row-span-2 */}
          <AnimatedCard delay={0} className="relative rounded-2xl overflow-hidden row-span-2 group">
            <img src={impactMeals} alt="Refeições garantidas" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-5">
              <p className="font-heading text-4xl font-extrabold text-white">+18.500</p>
              <p className="text-white font-semibold text-sm">refeições garantidas.</p>
              <p className="text-white/80 text-xs mt-1">Com a sua ajuda, mais<br />mesas seguem cheias.</p>
              <a href="#" className="text-accent text-xs font-semibold mt-3 hover:underline">Doe Agora →</a>
            </div>
          </AnimatedCard>

          {/* Col 2 Row 1: +12.000 Famílias — roxo sólido */}
          <AnimatedCard delay={100} className="rounded-2xl overflow-hidden bg-primary flex flex-col justify-end p-5">
            <p className="font-heading text-3xl font-extrabold text-white">+12.000</p>
            <p className="text-white/90 text-xs mt-1 leading-relaxed">Famílias foram ajudadas com muitas doações voluntárias.</p>
            <a href="#" className="text-accent text-xs font-semibold mt-3 hover:underline">Saiba Mais →</a>
          </AnimatedCard>

          {/* Col 3 Row 1: Árvores */}
          <AnimatedCard delay={200} className="relative rounded-2xl overflow-hidden group">
            <img src={impactTrees} alt="Árvores plantadas" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-5">
              <p className="font-heading text-3xl font-extrabold text-white">+10.000</p>
              <p className="text-white font-semibold text-xs">Árvores plantadas</p>
              <p className="text-white/80 text-[11px] mt-1">Graças às pessoas<br />que acreditam no futuro.</p>
              <a href="#" className="text-accent text-xs font-semibold mt-2 hover:underline">Saiba Mais</a>
            </div>
          </AnimatedCard>

          {/* Col 4 Row 1: Esportes com CTA */}
          <AnimatedCard delay={300} className="relative rounded-2xl overflow-hidden group">
            <img src={impactSports} alt="Esportes" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-4">
              <p className="text-white/90 text-[11px] mb-2">Com sua ajuda, o jogo continua.</p>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2.5 flex items-center gap-2">
                <span className="text-foreground text-[11px] font-semibold flex-1 leading-tight">Apoie o retorno do João ao futebol</span>
                <a href="#" className="bg-accent hover:bg-accent/90 text-white rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold transition-colors shrink-0">→</a>
              </div>
            </div>
          </AnimatedCard>

          {/* Col 5 Row 1: Emergência — phone style */}
          <AnimatedCard delay={150} className="relative rounded-[2rem] overflow-hidden group row-span-2">
            <img src={impactFamilies} alt="Emergência" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
            <div className="relative z-10 h-full flex flex-col justify-between p-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 bg-primary/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                  <span className="text-[8px]">✦</span> Emergência
                </span>
                <span className="text-white/90 text-xs font-bold">80%</span>
              </div>
              <div>
                <div className="mb-2">
                  <div className="flex justify-between text-xs text-white/70 mb-1">
                    <span>R$ 48.000</span>
                  </div>
                  <Progress value={80} className="h-1.5" />
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2.5 flex items-center gap-2">
                  <div className="flex-1">
                    <span className="text-foreground text-[11px] font-bold leading-tight block">Uma chance a mais para o Carlos.</span>
                    <span className="text-muted-foreground text-[9px]">Gastrite Vascular Especial (GVE)</span>
                  </div>
                  <a href="#" className="bg-accent hover:bg-accent/90 text-white rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold transition-colors shrink-0">→</a>
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Row 2 */}

          {/* Col 2 Row 2: Mãos — "Sua ajuda é essencial" */}
          <AnimatedCard delay={200} className="relative rounded-2xl overflow-hidden group">
            <img src={impactFamilies} alt="Sua ajuda é essencial" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/30 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-5">
              <p className="text-white font-heading text-sm font-bold">Sua ajuda é essencial!</p>
            </div>
          </AnimatedCard>

          {/* Col 3 Row 2: empty or additional — match reference shows this merged */}
          {/* In reference: col 3 row 2 seems to be part of trees or a separate card */}
          {/* Reference shows: hands | trees spans both? No — separate cards */}
          {/* Col 3 Row 2 is blank in reference or part of layout */}

          {/* Col 3-4 Row 2: +50.000 roxo sólido */}
          <AnimatedCard delay={350} className="rounded-2xl overflow-hidden bg-primary flex flex-col justify-end p-5 col-span-2">
            <p className="font-heading text-3xl font-extrabold text-white">+50.000</p>
            <p className="text-white/90 text-[11px] mt-1 leading-relaxed">Pessoas apoiadas por campanhas verificadas pela Ajudaki. ✅</p>
            <a href="#" className="text-accent text-xs font-semibold mt-2 hover:underline">Seja + um Apoiador →</a>
          </AnimatedCard>

          {/* Col 5 Row 2 is taken by emergency row-span-2 */}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden">
        <div className="text-center mb-8">
          <h1 className="font-heading text-3xl font-extrabold text-foreground leading-tight mb-4">
            Conectamos quem ajuda a quem mais precisa.
          </h1>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
            A Ajudaki é uma ponte segura entre doadores e causas sociais, garantindo que cada contribuição chegue com transparência, empatia e impacto real.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-full">
              Fazer uma Doação
            </Button>
            <Button variant="outline" className="border-foreground/30 text-foreground hover:bg-foreground/5 font-semibold px-6 rounded-full">
              Conhecer Causas
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { img: impactMeals, num: "+18.500", label: "refeições garantidas", overlay: "from-black/70 to-transparent" },
            { img: null, num: "+12.000", label: "famílias assistidas", overlay: "" },
            { img: impactTrees, num: "+10.000", label: "árvores plantadas", overlay: "from-primary/90 to-transparent" },
            { img: null, num: "+50.000", label: "pessoas apoiadas", overlay: "" },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`relative rounded-2xl overflow-hidden min-h-[180px] flex items-end p-4 animate-fade-in ${!item.img ? "bg-primary" : ""}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {item.img && (
                <>
                  <img src={item.img} alt={item.label} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.overlay}`} />
                </>
              )}
              <div className="relative z-10">
                <p className="font-heading text-2xl font-extrabold text-white">{item.num}</p>
                <p className="text-white/90 text-xs font-medium">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactGrid;
