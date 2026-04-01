import PageLayout from "@/components/PageLayout";
import coracaoPuzzle from "@/assets/coracao-puzzle.png";

const Sobre = () => (
  <PageLayout>
    <div className="space-y-12">
      <header className="text-center space-y-4">
        <img src={coracaoPuzzle} alt="" className="h-16 mx-auto" />
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground">
          Sobre o Ajudaki
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Conectamos corações solidários com pessoas que precisam de ajuda. Nossa missão é tornar a solidariedade mais acessível e transparente.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl font-bold text-foreground">Nossa História</h2>
        <p className="text-muted-foreground leading-relaxed">
          O AjudaKI nasceu de uma ideia simples, mas poderosa: criar um espaço onde causas legítimas pudessem ganhar visibilidade e apoio rapidamente. Observamos que muitas pessoas e organizações tinham histórias inspiradoras e necessidades urgentes, mas enfrentavam barreiras para impulsionar suas campanhas. Foi então que decidimos agir, unir tecnologia, solidariedade e transparência para que a ajuda chegasse onde realmente é necessária, no menor tempo possível.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Ainda estamos escrevendo nossa trajetória e, embora não tenhamos um "grande momento" para contar, cada nova causa apoiada e cada doação recebida já são marcos importantes na construção do nosso impacto.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl font-bold text-foreground">Missão</h2>
        <p className="text-muted-foreground leading-relaxed">
          Conectar pessoas dispostas a ajudar com causas reais, garantindo que cada apoio gere impacto verdadeiro. Nosso compromisso é tornar o processo de arrecadação rápido, seguro e acessível, para que nenhuma boa causa fique sem voz.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl font-bold text-foreground">Visão</h2>
        <p className="text-muted-foreground leading-relaxed">
          Ser a principal ponte de confiança entre doadores e causas no Brasil, transformando a solidariedade em resultados concretos e ampliando o alcance de quem precisa.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-2xl font-bold text-foreground">Nossos Valores</h2>
        <ul className="space-y-3">
          {[
            { title: "Transparência", desc: "Cada causa é avaliada e acompanhada com clareza, para que doadores tenham total confiança." },
            { title: "Agilidade", desc: "Sabemos que muitas necessidades são urgentes — por isso, agimos rápido." },
            { title: "Empatia", desc: "Colocamos as pessoas no centro de tudo o que fazemos." },
            { title: "Inovação", desc: "Usamos tecnologia para aproximar quem pode ajudar de quem precisa." },
            { title: "Compromisso Social", desc: "Atuamos sempre para gerar mudanças positivas e duradouras." },
          ].map((v) => (
            <li key={v.title} className="flex gap-3 items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-muted-foreground">
                <strong className="text-foreground">{v.title}:</strong> {v.desc}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </PageLayout>
);

export default Sobre;
