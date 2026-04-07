import PageLayout from "@/components/PageLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const passosPrecisa = [
  "Cadastre sua campanha: Conte sua história de forma clara e honesta",
  "Adicione documentos: Comprove sua necessidade com documentos",
  "Aguarde aprovação: Nossa equipe analisa e aprova campanhas legítimas",
  "Divulgue: Compartilhe sua campanha nas redes sociais",
  "Receba as doações: O dinheiro vai direto para sua conta",
];

const passosAjudar = [
  "Explore campanhas: Navegue pelas causas disponíveis",
  "Escolha uma causa: Leia as histórias e escolha como ajudar",
  "Defina o valor: Doe qualquer quantia, por menor que seja",
  "Pague com segurança: PIX ou Cartão",
  "Acompanhe o impacto: Veja como sua doação fez a diferença",
];

const faqs = [
  {
    q: "Como posso ter certeza de que minha doação chegará ao destinatário?",
    a: "Todas as campanhas passam por verificação rigorosa. Além disso, você pode acompanhar o progresso da campanha e receber atualizações sobre como sua doação está sendo utilizada.",
  },
  {
    q: "Qual o valor mínimo para doar?",
    a: "Não há valor mínimo! Qualquer quantia, por menor que seja, faz a diferença. Acreditamos que todos podem ajudar, independente do valor.",
  },
  {
    q: "Como funciona o processo de aprovação das campanhas?",
    a: "Nossa equipe analisa cada campanha verificando documentos, histórico e legitimidade da necessidade. Apenas campanhas genuínas são aprovadas.",
  },
  {
    q: "Posso cancelar minha doação?",
    a: "Após a confirmação do pagamento, a doação não pode ser cancelada, pois o valor é transferido diretamente para o beneficiário. Certifique-se antes de confirmar.",
  },
];

const StepList = ({ steps }: { steps: string[] }) => (
  <ol className="space-y-4">
    {steps.map((step, i) => {
      const [title, ...rest] = step.split(": ");
      return (
        <li key={i} className="flex gap-4 items-start">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm shrink-0">
            {i + 1}
          </span>
          <div>
            <span className="font-semibold text-foreground">{title}</span>
            {rest.length > 0 && <span className="text-muted-foreground">: {rest.join(": ")}</span>}
          </div>
        </li>
      );
    })}
  </ol>
);

const ComoFuncionaPage = () => (
  <PageLayout>
    <div className="space-y-16">
      <header className="text-center space-y-4">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground">
          Como Funciona o Ajudaki
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Conectamos pessoas que precisam de ajuda com pessoas que querem ajudar. É simples, seguro e transparente.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="font-heading text-2xl font-bold text-foreground">Para quem precisa de ajuda</h2>
        <p className="text-muted-foreground">
          Se você está passando por dificuldades e precisa de apoio financeiro, o Ajudaki é o lugar certo para você.
        </p>
        <StepList steps={passosPrecisa} />
      </section>

      <section className="space-y-6">
        <h2 className="font-heading text-2xl font-bold text-foreground">Para quem quer ajudar</h2>
        <p className="text-muted-foreground">
          Fazer o bem nunca foi tão fácil. Escolha uma causa que toque seu coração e faça a diferença na vida de alguém.
        </p>
        <StepList steps={passosAjudar} />
      </section>

      <section className="space-y-6">
        <h2 className="font-heading text-2xl font-bold text-foreground">Perguntas Frequentes</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  </PageLayout>
);

export default ComoFuncionaPage;
