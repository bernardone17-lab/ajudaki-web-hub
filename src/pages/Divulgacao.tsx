import PageLayout from "@/components/PageLayout";

const Divulgacao = () => (
  <PageLayout>
    <div className="space-y-12">
      <header className="text-center space-y-4">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground">Divulgação</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Parte do valor ajuda a impulsionar campanhas com anúncios e estratégias para alcançar mais apoiadores.
        </p>
      </header>

      <section className="prose prose-lg max-w-none text-muted-foreground space-y-4">
        <p className="leading-relaxed">
          No AjudaKI, a confiança não é apenas um valor, é a base de tudo o que fazemos. Sabemos que cada doação carrega mais do que dinheiro: carrega esperança, empatia e o desejo genuíno de transformar vidas. Por isso, tratamos cada contribuição com a máxima responsabilidade e clareza.
        </p>
        <p className="leading-relaxed">
          Nosso papel é simples, mas poderoso: conectar pessoas dispostas a ajudar com ONGs e causas que realmente precisam de apoio. Fazemos isso criando campanhas impactantes, divulgando com força e facilitando todo o processo de doação para que seja rápido, seguro e eficaz.
        </p>
        <p className="leading-relaxed">
          Quando você doa pelo AjudaKI, o valor passa por nossa estrutura segura e transparente. Uma pequena parte dessa contribuição é destinada a cobrir custos essenciais: equipe, manutenção da plataforma, ações de divulgação, tráfego pago e estratégias que garantem que cada campanha alcance o maior número de pessoas possível. É esse investimento que multiplica o impacto da sua doação, levando a causa mais longe e inspirando mais gente a participar.
        </p>
      </section>
    </div>
  </PageLayout>
);

export default Divulgacao;
