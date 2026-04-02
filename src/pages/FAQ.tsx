import PageLayout from "@/components/PageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como posso fazer uma doação?",
    answer:
      "Você pode fazer uma doação diretamente pela nossa plataforma. Basta escolher a campanha que deseja apoiar, clicar em \"Doar\" e seguir as instruções. Aceitamos cartão de crédito, débito, Pix e boleto bancário.",
  },
  {
    question: "A Ajudaki cobra alguma taxa sobre as doações?",
    answer:
      "Sim, cobramos uma pequena taxa administrativa para manter a plataforma funcionando e garantir a segurança de todas as transações. A taxa é transparente e sempre informada antes da confirmação da doação.",
  },
  {
    question: "Posso fazer doações anônimas?",
    answer:
      "Sim! Ao realizar uma doação, você pode optar por não exibir seu nome publicamente. Sua identidade ficará protegida, mas o beneficiário ainda receberá o valor normalmente.",
  },
  {
    question: "Como sei que minha doação chegou ao destino certo?",
    answer:
      "A Ajudaki possui um sistema de rastreamento completo. Você recebe atualizações sobre o uso dos recursos e pode acompanhar o progresso de cada campanha diretamente na plataforma.",
  },
  {
    question: "Recebo comprovante da minha doação?",
    answer:
      "Sim, após cada doação você recebe um comprovante por e-mail com todos os detalhes da transação, incluindo valor, data, campanha beneficiada e método de pagamento utilizado.",
  },
  {
    question: "Como a Ajudaki combate fraudes?",
    answer:
      "Utilizamos tecnologia avançada de verificação, análise de documentos e monitoramento contínuo das campanhas. Toda campanha passa por um processo de validação antes de ser publicada na plataforma.",
  },
  {
    question: "Posso criar uma campanha para arrecadar fundos?",
    answer:
      "Sim! Qualquer pessoa ou organização pode criar uma campanha na Ajudaki. Basta se cadastrar, preencher as informações da campanha e aguardar a aprovação da nossa equipe de validação.",
  },
  {
    question: "Como entro em contato com o suporte da Ajudaki?",
    answer:
      "Você pode entrar em contato conosco pela página de Contato, por e-mail em contato@ajudaki.com.br ou pelo WhatsApp. Nossa equipe está disponível de segunda a sexta, das 9h às 18h.",
  },
];

const FAQ = () => (
  <PageLayout>
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Perguntas Frequentes
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Tire suas dúvidas sobre a plataforma Ajudaki, doações, segurança e muito mais.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="border border-border/50 rounded-xl px-5 bg-card shadow-sm"
          >
            <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </PageLayout>
);

export default FAQ;
