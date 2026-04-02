import { Button } from "@/components/ui/button";
import MobileAutoCarousel from "@/components/animations/MobileAutoCarousel";
import { Progress } from "@/components/ui/progress";
import impactMeals from "@/assets/impact-meals.jpg";
import impactFamilies from "@/assets/impact-families.jpg";
import impactPeople from "@/assets/impact-people.jpg";

const stories = [
  {
    image: impactFamilies,
    type: "emergency",
    label: "🚨 Emergência",
    title: "Enchentes no Rio Grande do Sul",
    description: "Famílias desabrigadas precisam de ajuda imediata.",
    progress: 80,
    cta: "Ajudar Agora",
  },
  {
    image: impactPeople,
    type: "individual",
    label: "💛 Apoio Individual",
    title: "Dona Maria precisa de uma cirurgia",
    description: "Após 3 meses de espera, Maria finalmente pode contar com você.",
    progress: null,
    cta: "Apoiar Maria",
  },
  {
    image: impactMeals,
    type: "stat",
    label: "📊 Impacto Real",
    title: "+18.500 refeições distribuídas",
    description: "Sua doação alimentou milhares de famílias no último trimestre.",
    progress: null,
    cta: "Ver Relatório",
  },
];

const HistoriasImpacto = () => {
  return (
    <section id="impacto" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Histórias de Impacto
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
          Veja como as doações estão transformando vidas reais.
        </p>
        <MobileAutoCarousel desktopClassName="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stories.map((s) => (
            <div
              key={s.title}
              className="min-w-[300px] md:min-w-[340px] flex-shrink-0 snap-center rounded-2xl overflow-hidden border border-border bg-card shadow-sm"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <span className="absolute top-3 left-3 bg-card/90 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {s.label}
                </span>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-heading font-bold text-foreground text-lg">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.description}</p>
                {s.progress !== null && (
                  <div className="space-y-1">
                    <Progress value={s.progress} className="h-2.5 bg-muted [&>div]:bg-accent" />
                    <p className="text-xs text-muted-foreground text-right">{s.progress}% alcançado</p>
                  </div>
                )}
                <Button
                  className={
                    s.type === "emergency"
                      ? "w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                      : s.type === "individual"
                      ? "w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      : "w-full"
                  }
                >
                  {s.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoriasImpacto;
