import { Heart, Shield, BarChart3 } from "lucide-react";
import MobileAutoCarousel from "@/components/animations/MobileAutoCarousel";

const steps = [
  {
    icon: Heart,
    title: "Escolha uma Causa",
    description:
      "Navegue por campanhas verificadas e encontre a causa que mais te inspira a ajudar.",
  },
  {
    icon: Shield,
    title: "Doe com Segurança",
    description:
      "Faça sua doação de forma rápida e segura. Todo o processo é protegido e transparente.",
  },
  {
    icon: BarChart3,
    title: "Acompanhe o Impacto",
    description:
      "Receba atualizações sobre como sua doação está fazendo a diferença na vida das pessoas.",
  },
];

const ComoFunciona = () => {
  return (
    <section id="como-funciona" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Como Funciona
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
          Em três passos simples, sua doação chega a quem mais precisa.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="bg-card rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="inline-block bg-primary text-primary-foreground text-xs font-bold rounded-full w-7 h-7 leading-7 mb-3">
                {i + 1}
              </span>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
