import { Badge } from "@/components/ui/badge";
import MobileAutoCarousel from "@/components/animations/MobileAutoCarousel";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import campaignEducation from "@/assets/campaign-education.jpg";
import campaignHealth from "@/assets/campaign-health.jpg";
import campaignSocial from "@/assets/campaign-social.jpg";

const campaigns = [
  {
    image: campaignEducation,
    tag: "Educação",
    title: "Material escolar para 500 crianças",
    description: "Ajude crianças em vulnerabilidade a terem acesso a materiais escolares de qualidade.",
    raised: 12450,
    goal: 25000,
    daysLeft: 18,
  },
  {
    image: campaignHealth,
    tag: "Saúde",
    title: "Equipamentos para clínica comunitária",
    description: "Uma clínica que atende mais de 200 famílias precisa de novos equipamentos médicos.",
    raised: 38200,
    goal: 50000,
    daysLeft: 7,
  },
  {
    image: campaignSocial,
    tag: "Assistência Social",
    title: "Abrigo para idosos em situação de rua",
    description: "Construir um espaço seguro e acolhedor para idosos em situação de vulnerabilidade.",
    raised: 67800,
    goal: 100000,
    daysLeft: 32,
  },
];

const formatCurrency = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const Campanhas = () => {
  return (
    <section id="campanhas" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Campanhas em Destaque
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
          Conheça as campanhas que estão transformando vidas agora mesmo.
        </p>
        <MobileAutoCarousel desktopClassName="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {campaigns.map((c) => {
            const pct = Math.round((c.raised / c.goal) * 100);
            return (
              <div
                key={c.title}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary hover:bg-primary">{c.tag}</Badge>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="font-heading font-semibold text-foreground text-lg leading-snug">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.description}</p>
                  <Progress value={pct} className="h-2.5 bg-muted [&>div]:bg-primary" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{pct}% arrecadado</span>
                    <span className="text-muted-foreground">{c.daysLeft} dias restantes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-foreground">{formatCurrency(c.raised)}</span>
                    <span className="text-sm text-muted-foreground">Meta: {formatCurrency(c.goal)}</span>
                  </div>
                  <Button className="w-full mt-1">Doar Agora</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Campanhas;
