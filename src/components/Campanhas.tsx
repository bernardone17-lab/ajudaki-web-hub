import { Link } from "react-router-dom";
import MobileAutoCarousel from "@/components/animations/MobileAutoCarousel";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { campaigns, formatCurrency } from "@/data/campaigns";

const Campanhas = () => {
  return (
    <section id="campanhas" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
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
              <Link
                key={c.id}
                to={`/campanhas/${c.id}`}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow block"
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
              </Link>
            );
          })}
        </MobileAutoCarousel>
      </div>
    </section>
  );
};

export default Campanhas;
