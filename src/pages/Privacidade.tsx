import PageLayout from "@/components/PageLayout";

const sections = [
  {
    title: "1. Coleta de Dados Pessoais (Art. 5º e 7º da LGPD)",
    content: "Coletamos informações fornecidas diretamente por você, como nome, e-mail, CPF, telefone e dados de pagamento. Também coletamos dados de navegação (endereço IP, cookies, localização aproximada, tempo de uso), conforme permitido pelo Art. 7º, incisos I, V e IX da LGPD.",
  },
  {
    title: "2. Finalidades do Tratamento (Art. 6º da LGPD)",
    content: "Os dados coletados são utilizados para viabilizar a realização de doações, emissão de recibos, envio de informações institucionais, auditoria de campanhas e cumprimento de obrigações legais e regulatórias, conforme os princípios da finalidade, adequação e necessidade.",
  },
  {
    title: "3. Compartilhamento e Responsabilidade (Art. 13 e 14 da LGPD)",
    content: "Podemos compartilhar seus dados com terceiros apenas para fins específicos, como processadores de pagamento, prestadores de serviço e órgãos reguladores, respeitando os requisitos do Art. 7º, inciso V. Todos os parceiros seguem contratos com cláusulas de confidencialidade e proteção de dados.",
  },
  {
    title: "4. Armazenamento e Segurança (Art. 46 da LGPD)",
    content: "Adotamos medidas de segurança técnicas e administrativas, como criptografia, controle de acesso e firewalls, para proteger seus dados contra acesso não autorizado, perda ou destruição. Os dados são armazenados enquanto necessários ao cumprimento de sua finalidade ou exigência legal.",
  },
  {
    title: "5. Seus Direitos (Art. 18 da LGPD)",
    content: "",
    list: [
      "Confirmação da existência de tratamento",
      "Acesso aos dados",
      "Correção de dados incompletos ou incorretos",
      "Anonimização, bloqueio ou eliminação",
      "Portabilidade",
      "Revogação do consentimento",
    ],
  },
  {
    title: "6. Cookies e Tecnologias (Art. 7º, inciso IX)",
    content: "Utilizamos cookies para oferecer uma melhor experiência de navegação e análise de desempenho do site. Você pode gerenciar sua aceitação diretamente nas configurações do seu navegador.",
  },
  {
    title: "7. Alterações nesta Política",
    content: "Esta Política poderá ser atualizada a qualquer momento. Em caso de mudanças relevantes, comunicaremos aos usuários por meio do site. Recomendamos a leitura periódica para se manter informado.",
  },
  {
    title: "8. Encarregado pelo Tratamento de Dados (Art. 41 da LGPD)",
    content: "Para exercer seus direitos ou obter mais informações, entre em contato com nosso Encarregado de Proteção de Dados (DPO) pelo e-mail: contato@ajudaki.com.",
  },
];

const Privacidade = () => (
  <PageLayout>
    <div className="space-y-12">
      <header className="text-center space-y-4">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground">
          Política de Privacidade
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Transparência e proteção dos seus dados pessoais de acordo com a LGPD e demais normas aplicáveis.
        </p>
      </header>

      <p className="text-muted-foreground leading-relaxed">
        Esta Política de Privacidade descreve como o Instituto AjudaKI coleta, armazena, utiliza e protege os dados pessoais dos usuários de acordo com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018), o Marco Civil da Internet (Lei nº 12.965/2014), o Código de Defesa do Consumidor (Lei nº 8.078/1990), entre outras normas aplicáveis.
      </p>

      {sections.map((s) => (
        <section key={s.title} className="space-y-3">
          <h2 className="font-heading text-xl font-bold text-foreground">{s.title}</h2>
          {s.content && <p className="text-muted-foreground leading-relaxed">{s.content}</p>}
          {s.list && (
            <ul className="space-y-1 ml-4">
              {s.list.map((item) => (
                <li key={item} className="text-muted-foreground flex gap-2 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  </PageLayout>
);

export default Privacidade;
