import PageLayout from "@/components/PageLayout";
import { Shield, CreditCard, Eye } from "lucide-react";

const cards = [
  { icon: Shield, title: "Verificação Rigorosa", desc: "Todas as campanhas passam por análise criteriosa antes de serem publicadas." },
  { icon: CreditCard, title: "Pagamentos Seguros", desc: "Utilizamos as melhores tecnologias de criptografia para proteger seus dados." },
  { icon: Eye, title: "Total Transparência", desc: "Acompanhe em tempo real como as doações estão sendo utilizadas." },
];

const Seguranca = () => (
  <PageLayout>
    <div className="space-y-12">
      <header className="text-center space-y-4">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground">Segurança</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Todas as doações passam por um processo seguro e monitorado, garantindo que cheguem ao destino certo.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div key={c.title} className="rounded-2xl border border-border bg-card p-6 text-center space-y-3">
            <c.icon className="h-10 w-10 mx-auto text-primary" />
            <h3 className="font-heading font-bold text-foreground">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>

      <section className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          Sua confiança é nossa prioridade. Por isso, implementamos as melhores práticas de segurança e transparência em todo o processo de doação.
        </p>
      </section>
    </div>
  </PageLayout>
);

export default Seguranca;
