import PageLayout from "@/components/PageLayout";

const cookieTypes = [
  { title: "Cookies Essenciais", desc: "Necessários para o funcionamento do site e para viabilizar funcionalidades básicas, como login e segurança." },
  { title: "Cookies de Desempenho", desc: "Coletam informações sobre como os usuários interagem com o site, permitindo melhorar seu funcionamento e conteúdo." },
  { title: "Cookies de Funcionalidade", desc: "Armazenam preferências e personalizações escolhidas pelo usuário, como idioma ou layout." },
  { title: "Cookies de Publicidade e Marketing", desc: "Utilizados para exibir anúncios relevantes e medir a eficácia de campanhas publicitárias." },
];

const Cookies = () => (
  <PageLayout>
    <div className="space-y-12">
      <header className="text-center space-y-4">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground">
          Política de Cookies
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Transparência sobre como utilizamos cookies e tecnologias semelhantes de acordo com a LGPD e demais normas aplicáveis.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="font-heading text-xl font-bold text-foreground">1. O que são Cookies</h2>
        <p className="text-muted-foreground leading-relaxed">
          Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. Eles permitem reconhecer seu navegador, lembrar preferências e melhorar sua experiência de navegação.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-xl font-bold text-foreground">2. Tipos de Cookies Utilizados</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {cookieTypes.map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-5 space-y-2">
              <h3 className="font-heading font-semibold text-foreground">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-xl font-bold text-foreground">3. Finalidade do Uso de Cookies</h2>
        <ul className="space-y-1 ml-4">
          {[
            "Garantir a operação e segurança do site",
            "Melhorar a navegação e a experiência do usuário",
            "Analisar métricas e estatísticas de uso",
            "Exibir campanhas e conteúdos mais relevantes ao usuário",
          ].map((item) => (
            <li key={item} className="text-muted-foreground flex gap-2 items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-xl font-bold text-foreground">4. Consentimento</h2>
        <p className="text-muted-foreground leading-relaxed">
          Ao acessar o site do AjudaKI pela primeira vez, você será informado sobre o uso de cookies e poderá consentir ou gerenciar suas preferências. Esse consentimento pode ser alterado a qualquer momento nas configurações do seu navegador.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-xl font-bold text-foreground">5. Como Gerenciar ou Desativar Cookies</h2>
        <p className="text-muted-foreground leading-relaxed">
          Você pode configurar seu navegador para recusar todos os cookies ou para alertá-lo quando um cookie estiver sendo enviado. No entanto, a desativação de certos cookies pode afetar a funcionalidade e a experiência no site.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-xl font-bold text-foreground">6. Contato</h2>
        <p className="text-muted-foreground leading-relaxed">
          Para dúvidas ou solicitações sobre o uso de cookies e proteção de dados, entre em contato com nosso Encarregado de Proteção de Dados (DPO) pelo e-mail: <a href="mailto:contato@ajudaki.com" className="text-primary hover:underline">contato@ajudaki.com</a>.
        </p>
      </section>
    </div>
  </PageLayout>
);

export default Cookies;
