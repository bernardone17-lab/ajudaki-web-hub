import PageLayout from "@/components/PageLayout";
import { Search, Lock, Heart } from "lucide-react";

const cards = [
  { icon: Search, title: "Causas Verificadas", desc: "Cada campanha passa pela nossa análise antes de chegar até você." },
  { icon: Lock, title: "Pagamentos Protegidos", desc: "Seus dados e transações são criptografados do início ao fim." },
  { icon: Heart, title: "Repasse Garantido", desc: "O valor doado chega ao destino certo, sem desvios ou surpresas." },
];

const sections = [
  {
    title: "Sua segurança é nossa prioridade",
    text: "Utilizamos tecnologias avançadas para proteger seus dados e transações. Todas as informações são criptografadas e protegidas contra acessos não autorizados em cada etapa do processo.",
  },
  {
    title: "Transparência de verdade",
    text: "Você sabe exatamente para onde vai a sua doação. O valor é repassado diretamente à ONG ou causa beneficiada, sem desvios ou surpresas.",
  },
  {
    title: "Causas verificadas",
    text: "Antes de qualquer causa ser publicada, nossa equipe analisa os dados e documentos do cadastrante. Não publicamos tudo que recebemos, só o que passou pela nossa verificação.",
  },
  {
    title: "Você está protegido",
    text: "Se identificarmos qualquer irregularidade, agimos imediatamente: suspendemos a causa, bloqueamos os repasses e acionamos as autoridades quando necessário. Você também pode nos reportar qualquer situação suspeita.",
  },
];

const Seguranca = () => (
  <PageLayout>
    <div className="space-y-16">
      {/* Header */}
      <header className="text-center space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Saiba mais sobre nossa
        </p>
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground">
          Segurança e Transparência
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          No AJUDAKI, cada doação carrega esperança, empatia e o desejo genuíno de transformar vidas. Por isso, tratamos cada contribuição com responsabilidade total e clareza absoluta.
        </p>
      </header>

      {/* Segurança subtitle + cards */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Segurança</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Todas as doações passam por um processo seguro e monitorado, garantindo que cheguem ao destino certo.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-8 text-center space-y-4">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <c.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detail sections */}
      <section className="space-y-8 max-w-3xl mx-auto">
        {sections.map((s) => (
          <div key={s.title} className="space-y-2">
            <h3 className="font-heading text-xl font-bold text-foreground">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.text}</p>
          </div>
        ))}
      </section>

      {/* Final block */}
      <section className="rounded-2xl bg-primary text-primary-foreground p-8 md:p-12 space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest opacity-80">Aqui no Ajudaki</p>
        <h2 className="font-heading text-2xl md:text-3xl font-bold">
          Conectamos quem ajuda a quem mais precisa. 💜
        </h2>
        <p className="max-w-2xl mx-auto text-sm leading-relaxed opacity-90">
          O AJUDAKI é operado pela N3X INTERMEDIAÇÕES LTDA (CNPJ 61.182.936/0001-75), uma empresa brasileira legalmente constituída. Verificamos identidades, monitoramos causas ativas e mantemos registro de cada transação realizada na plataforma. Acreditamos que transparência começa pela identidade, e você tem o direito de saber com quem está lidando.
        </p>
      </section>
    </div>
  </PageLayout>
);

export default Seguranca;
