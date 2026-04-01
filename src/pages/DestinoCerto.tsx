import PageLayout from "@/components/PageLayout";
import { Target, Megaphone } from "lucide-react";

const DestinoCerto = () => (
  <PageLayout>
    <div className="space-y-12">
      <header className="text-center space-y-4">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground">
          Destino Certo
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A maior parte da contribuição vai direto para a ONG ou causa beneficiada, sem desvios.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-border bg-card p-8 space-y-4">
          <Target className="h-10 w-10 text-primary" />
          <h3 className="font-heading text-xl font-bold text-foreground">Repasse direto</h3>
          <p className="text-muted-foreground leading-relaxed">
            O restante do valor é repassado diretamente para a ONG ou causa beneficiada, com total responsabilidade. Mantemos registros de cada transação e garantimos que o repasse seja feito de forma correta e dentro dos prazos estabelecidos.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8 space-y-4">
          <Megaphone className="h-10 w-10 text-accent" />
          <h3 className="font-heading text-xl font-bold text-foreground">Impulsiona a causa</h3>
          <p className="text-muted-foreground leading-relaxed">
            Uma pequena parte da contribuição é destinada a cobrir custos essenciais: equipe, manutenção da plataforma, ações de divulgação e estratégias que garantem que cada campanha alcance o maior número de pessoas possível.
          </p>
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl font-bold text-foreground">Sua doação trabalha em duas frentes</h2>
        <ul className="space-y-3 ml-4">
          <li className="text-muted-foreground flex gap-2 items-start">
            <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            <strong className="text-foreground">Impulsiona a causa</strong>, aumentando o alcance e a visibilidade.
          </li>
          <li className="text-muted-foreground flex gap-2 items-start">
            <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
            <strong className="text-foreground">Chega ao destino final</strong>, gerando impacto real e transformando vidas.
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          Você doa, nós impulsionamos, e juntos transformamos realidades com segurança, eficiência e a certeza de que cada gesto de solidariedade conta para mudar histórias.
        </p>
      </section>
    </div>
  </PageLayout>
);

export default DestinoCerto;
