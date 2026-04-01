import { Progress } from "@/components/ui/progress";
import coracaoPuzzle from "@/assets/coracao-puzzle.png";
import impactMeals from "@/assets/impact-meals.jpg";
import impactFamilies from "@/assets/impact-families.jpg";
import impactTrees from "@/assets/impact-trees.jpg";
import impactSports from "@/assets/impact-sports.jpg";
import impactPeople from "@/assets/impact-people.jpg";
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
    <section className="container mx-auto px-4 pb-20">
      {/* Desktop mosaic */}
      <div className="hidden md:grid grid-cols-5 grid-rows-2 gap-4 max-w-6xl mx-auto" style={{ gridAutoRows: "240px" }}>
        {/* Card 1: Refeições */}
        <AnimatedCard delay={0} className="relative rounded-2xl overflow-hidden row-span-2 group">
          <img src={impactMeals} alt="Refeições distribuídas" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={800} height={800} />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/60 to-primary/30" />
          <div className="relative z-10 h-full flex flex-col justify-end p-6">
            <p className="font-heading text-4xl font-extrabold text-primary-foreground">+18.500</p>
            <p className="text-primary-foreground font-semibold text-sm">refeições distribuídas</p>
            <p className="text-primary-foreground/80 text-xs mt-1">Com a sua ajuda, mais mesas seguem cheias.</p>
            <a href="#" className="text-accent text-xs font-semibold mt-3 hover:underline">Doe Agora →</a>
          </div>
        </AnimatedCard>

        {/* Card 2: Famílias */}
        <AnimatedCard delay={100} className="relative rounded-2xl overflow-hidden group">
          <img src={impactFamilies} alt="Famílias assistidas" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={800} height={512} />
          <div className="absolute inset-0 bg-gradient-to-t from-accent/85 via-accent/50 to-accent/20" />
          <div className="relative z-10 h-full flex flex-col justify-end p-5">
            <p className="font-heading text-3xl font-extrabold text-primary-foreground">+12.000</p>
            <p className="text-primary-foreground font-semibold text-xs">Famílias assistidas</p>
            <a href="#" className="text-primary-foreground text-xs font-semibold mt-2 hover:underline">Saiba Mais →</a>
          </div>
        </AnimatedCard>

        {/* Card 3: Árvores */}
        <AnimatedCard delay={200} className="relative rounded-2xl overflow-hidden row-span-2 group">
          <img src={impactTrees} alt="Árvores plantadas" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={800} height={800} />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary-dark))]/90 via-primary/50 to-primary/20" />
          <div className="relative z-10 h-full flex flex-col justify-end p-6">
            <p className="font-heading text-4xl font-extrabold text-primary-foreground">+10.000</p>
            <p className="text-primary-foreground font-semibold text-sm">árvores plantadas</p>
            <p className="text-primary-foreground/80 text-xs mt-1">Cada muda é um passo para o futuro.</p>
            <a href="#" className="text-accent text-xs font-semibold mt-3 hover:underline">Saiba Mais →</a>
          </div>
        </AnimatedCard>

        {/* Card 4: Esportes */}
        <AnimatedCard delay={300} className="relative rounded-2xl overflow-hidden row-span-2 group">
          <img src={impactSports} alt="Atividades comunitárias" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={800} height={800} />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end p-6">
            <p className="text-primary-foreground/90 text-xs">Com sua ajuda, crianças têm acesso a esporte e educação.</p>
            <a href="#" className="text-accent text-xs font-semibold mt-2 hover:underline">Seja + um Apoiador →</a>
          </div>
        </AnimatedCard>

        {/* Card 5: Emergency */}
        <AnimatedCard delay={150} className="relative rounded-2xl overflow-hidden bg-card border border-border">
          <div className="h-full flex flex-col justify-between p-5">
            <div>
              <span className="inline-block bg-destructive/10 text-destructive text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide mb-2">Emergência</span>
              <p className="font-heading text-sm font-bold text-foreground leading-snug">Enchentes no RS: famílias precisam de abrigo</p>
            </div>
            <div>
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>R$ 48.000</span>
                <span>80%</span>
              </div>
              <Progress value={80} className="h-2" />
              <a href="#" className="text-primary text-xs font-semibold mt-2 inline-block hover:underline">Ajudar Agora →</a>
            </div>
          </div>
        </AnimatedCard>

        {/* Card 6: Heart/Support */}
        <AnimatedCard delay={250} className="relative rounded-2xl overflow-hidden bg-card border border-border">
          <div className="h-full flex flex-col justify-end p-5">
            <img src={coracaoPuzzle} alt="" className="h-8 w-8 object-contain mb-2 opacity-80" />
            <p className="font-heading text-xs font-bold text-foreground leading-snug mb-1">Sua ajuda transforma vidas todos os dias</p>
            <p className="text-muted-foreground text-[11px]">Doe para causas verificadas com total transparência.</p>
            <a href="#" className="text-primary text-xs font-semibold mt-2 hover:underline">Comece Agora →</a>
          </div>
        </AnimatedCard>

        {/* Card 7: Pessoas impactadas */}
        <AnimatedCard delay={400} className="relative rounded-2xl overflow-hidden group">
          <img src={impactPeople} alt="Pessoas impactadas" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={800} height={512} />
          <div className="absolute inset-0 bg-gradient-to-t from-accent/85 via-accent/40 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-end p-5">
            <p className="font-heading text-3xl font-extrabold text-primary-foreground">+50.000</p>
            <p className="text-primary-foreground font-semibold text-xs">pessoas impactadas</p>
          </div>
        </AnimatedCard>
      </div>

      {/* Mobile stacked layout */}
      <div className="md:hidden grid grid-cols-2 gap-4">
        {[
          { img: impactMeals, num: "+18.500", label: "refeições distribuídas", overlay: "from-primary/90 to-primary/40" },
          { img: impactFamilies, num: "+12.000", label: "famílias assistidas", overlay: "from-accent/85 to-accent/30" },
          { img: impactTrees, num: "+10.000", label: "árvores plantadas", overlay: "from-primary/90 to-primary/40" },
          { img: impactPeople, num: "+50.000", label: "pessoas impactadas", overlay: "from-accent/85 to-accent/30" },
        ].map((item, i) => (
          <div key={item.label} className="relative rounded-2xl overflow-hidden min-h-[200px] flex items-end p-4 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
            <img src={item.img} alt={item.label} className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={400} height={300} />
            <div className={`absolute inset-0 bg-gradient-to-t ${item.overlay}`} />
            <div className="relative z-10">
              <p className="font-heading text-2xl font-extrabold text-primary-foreground">{item.num}</p>
              <p className="text-primary-foreground/90 text-xs font-medium">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactGrid;
