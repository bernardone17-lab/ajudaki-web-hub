import PageLayout from "@/components/PageLayout";

const TermosDeUso = () => (
  <PageLayout>
    <div className="space-y-12">
      <header className="text-center space-y-4">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground">Termos de Uso</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Leia atentamente os termos e condições de uso da plataforma Ajudaki.
        </p>
      </header>

      <section className="prose prose-lg max-w-none text-muted-foreground space-y-6">
        <h2 className="font-heading text-2xl font-bold text-foreground">1. Aceitação dos Termos</h2>
        <p className="leading-relaxed">
          Ao acessar ou utilizar a plataforma Ajudaki, você concorda com estes Termos de Uso e com nossa Política de Privacidade. Se você não concorda com qualquer parte destes termos, não utilize a plataforma.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground">2. Descrição do Serviço</h2>
        <p className="leading-relaxed">
          A Ajudaki é uma plataforma de intermediação de doações que conecta doadores a organizações não governamentais (ONGs), projetos sociais e campanhas de arrecadação. A Ajudaki não é uma instituição financeira e atua exclusivamente como facilitadora do processo de doação.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground">3. Cadastro e Conta</h2>
        <p className="leading-relaxed">
          Para utilizar determinadas funcionalidades da plataforma, é necessário criar uma conta. Você é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades realizadas em sua conta. Informações falsas ou imprecisas podem resultar no encerramento da conta.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground">4. Doações</h2>
        <p className="leading-relaxed">
          Todas as doações realizadas através da plataforma são voluntárias e não reembolsáveis, salvo em casos excepcionais previstos em lei. A Ajudaki se compromete a repassar os valores arrecadados às campanhas e organizações beneficiadas, descontada a taxa de serviço previamente informada.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground">5. Taxas e Cobranças</h2>
        <p className="leading-relaxed">
          A Ajudaki cobra uma taxa de serviço sobre cada doação para cobrir custos operacionais, incluindo manutenção da plataforma, segurança, suporte ao usuário e divulgação das campanhas. O percentual da taxa é informado de forma transparente antes da confirmação de cada doação.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground">6. Responsabilidades do Usuário</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Fornecer informações verdadeiras e atualizadas durante o cadastro.</li>
          <li>Não utilizar a plataforma para fins ilícitos, fraudulentos ou que violem direitos de terceiros.</li>
          <li>Não criar campanhas falsas ou enganosas.</li>
          <li>Respeitar os demais usuários e as regras de convivência da plataforma.</li>
        </ul>

        <h2 className="font-heading text-2xl font-bold text-foreground">7. Propriedade Intelectual</h2>
        <p className="leading-relaxed">
          Todo o conteúdo da plataforma, incluindo textos, imagens, logotipos, design e código-fonte, é de propriedade da Ajudaki ou de seus licenciadores e está protegido pelas leis de propriedade intelectual. É vedada a reprodução, distribuição ou modificação sem autorização prévia.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground">8. Limitação de Responsabilidade</h2>
        <p className="leading-relaxed">
          A Ajudaki não se responsabiliza por danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou da impossibilidade de uso da plataforma. A plataforma é fornecida "como está", sem garantias de qualquer natureza, expressas ou implícitas.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground">9. Modificações dos Termos</h2>
        <p className="leading-relaxed">
          A Ajudaki reserva-se o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação na plataforma. O uso continuado da plataforma após a publicação de alterações constitui aceitação dos novos termos.
        </p>

        <h2 className="font-heading text-2xl font-bold text-foreground">10. Legislação Aplicável</h2>
        <p className="leading-relaxed">
          Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer litígio será submetido ao foro da comarca de domicílio do usuário consumidor, conforme previsto no Código de Defesa do Consumidor.
        </p>

        <p className="text-sm text-muted-foreground/60 pt-4">
          Última atualização: Abril de 2026.
        </p>
      </section>
    </div>
  </PageLayout>
);

export default TermosDeUso;
