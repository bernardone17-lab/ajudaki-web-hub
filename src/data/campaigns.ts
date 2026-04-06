import campaignEducation from "@/assets/campaign-education.jpg";
import campaignHealth from "@/assets/campaign-health.jpg";
import campaignSocial from "@/assets/campaign-social.jpg";

export interface Campaign {
  id: string;
  image: string;
  photos: string[];
  tag: string;
  title: string;
  description: string;
  fullDescription: string;
  raised: number;
  goal: number;
  daysLeft: number;
  organizer: string;
  organizerDesc: string;
  location: string;
  createdAt: string;
  pixKey: string;
}

export const campaigns: Campaign[] = [
  {
    id: "material-escolar-500-criancas",
    image: campaignEducation,
    photos: [campaignEducation, campaignEducation, campaignEducation],
    tag: "Educação",
    title: "Material escolar para 500 crianças",
    description: "Ajude crianças em vulnerabilidade a terem acesso a materiais escolares de qualidade.",
    fullDescription:
      "Esta campanha busca arrecadar fundos para comprar kits escolares completos — cadernos, lápis, mochilas, livros didáticos e material de arte — para 500 crianças em situação de vulnerabilidade social em comunidades da periferia de São Paulo. Cada kit custa em média R$ 50 e faz toda a diferença para uma criança que, sem esse apoio, não teria condições de acompanhar o ano letivo. A distribuição será feita em parceria com escolas públicas e ONGs locais.",
    raised: 12450,
    goal: 25000,
    daysLeft: 18,
    organizer: "ONG Educação para Todos",
    organizerDesc: "Atuando desde 2018 na periferia de São Paulo, já beneficiou mais de 3.000 crianças.",
    location: "São Paulo, SP",
    createdAt: "15 de março de 2026",
    pixKey: "material-escolar@ajudaki.com",
  },
  {
    id: "equipamentos-clinica-comunitaria",
    image: campaignHealth,
    photos: [campaignHealth, campaignHealth, campaignHealth],
    tag: "Saúde",
    title: "Equipamentos para clínica comunitária",
    description: "Uma clínica que atende mais de 200 famílias precisa de novos equipamentos médicos.",
    fullDescription:
      "A Clínica Comunitária Esperança atende gratuitamente mais de 200 famílias por mês na região metropolitana de Belo Horizonte. Os equipamentos atuais estão desgastados e alguns já não funcionam, comprometendo o atendimento. Com os recursos arrecadados, será possível adquirir um novo aparelho de ultrassom, estetoscópios, medidores de pressão digital e materiais de primeiros-socorros. Cada doação contribui diretamente para manter a saúde dessas famílias.",
    raised: 38200,
    goal: 50000,
    daysLeft: 7,
    organizer: "Clínica Esperança",
    organizerDesc: "Clínica comunitária em BH que atende gratuitamente famílias de baixa renda desde 2015.",
    location: "Belo Horizonte, MG",
    createdAt: "20 de fevereiro de 2026",
    pixKey: "clinica-esperanca@ajudaki.com",
  },
  {
    id: "abrigo-idosos-situacao-rua",
    image: campaignSocial,
    photos: [campaignSocial, campaignSocial, campaignSocial],
    tag: "Assistência Social",
    title: "Abrigo para idosos em situação de rua",
    description: "Construir um espaço seguro e acolhedor para idosos em situação de vulnerabilidade.",
    fullDescription:
      "Este projeto visa reformar e equipar um imóvel doado para transformá-lo em um abrigo com capacidade para 30 idosos em situação de rua na cidade de Curitiba. O espaço contará com quartos individuais, refeitório, área de convivência, consultório médico e jardim terapêutico. A reforma inclui adequação de acessibilidade, instalação elétrica e hidráulica, mobiliário e roupas de cama. O abrigo será gerido pela Associação Mãos que Acolhem.",
    raised: 67800,
    goal: 100000,
    daysLeft: 32,
    organizer: "Associação Mãos que Acolhem",
    organizerDesc: "ONG de Curitiba dedicada ao acolhimento de pessoas em situação de vulnerabilidade desde 2012.",
    location: "Curitiba, PR",
    createdAt: "10 de janeiro de 2026",
    pixKey: "maos-que-acolhem@ajudaki.com",
  },
];

export const formatCurrency = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
