

# Criar FAQ, Contato e Finalizar Páginas/Botões Pendentes

## Páginas a criar

### 1. FAQ (`/faq`)
Página com accordion usando o texto fornecido (8 perguntas sobre doações, taxas, anonimato, comprovantes, fraude). Layout com PageLayout, hero section com título "Perguntas Frequentes" e accordion estilizado com as cores da marca.

### 2. Contato (`/contato`)
Baseado no layout do projeto [Agência Criativa Digital](/projects/95240fd2-6118-41b6-9dbf-16be3feba9e0): hero com título "Fale Conosco", grid 1/3 + 2/3 com:
- **Coluna esquerda**: cards com WhatsApp, e-mail, telefone e redes sociais do Ajudaki
- **Coluna direita**: formulário com campos Nome, E-mail, Telefone, Assunto (select: Dúvida, Sugestão, Problema, Parceria, Outro), Mensagem e botão Enviar

Sem Supabase por enquanto — apenas toast de sucesso no submit. Sem zod (simplificar). Adaptado para a identidade visual Ajudaki (cores roxo/laranja, Poppins/Inter).

### 3. ONGs (`/ongs`)
Página placeholder simples com título "ONGs Parceiras" e texto "Em breve você poderá conhecer todas as ONGs parceiras do Ajudaki."

## Links/botões a conectar

### Footer
- "Contato" → `/contato`
- "FAQ" → `/faq`
- "ONGs" → `/ongs`
- "Criar campanha" → `/contato` (por enquanto)

### Navbar
- Botões "Criar Conta" e "Acessa sua Conta" → mantém `#` (sem auth ainda)
- Busca (Search icon) → mantém `#` (sem funcionalidade ainda)

## Arquivos

| Arquivo | Ação |
|---|---|
| `src/pages/FAQ.tsx` | Criar — accordion com 8 perguntas |
| `src/pages/Contato.tsx` | Criar — layout igual Agência Criativa, adaptado Ajudaki |
| `src/pages/ONGs.tsx` | Criar — placeholder |
| `src/App.tsx` | Adicionar rotas `/faq`, `/contato`, `/ongs` |
| `src/components/Footer.tsx` | Atualizar links Contato→`/contato`, FAQ→`/faq`, ONGs→`/ongs`, Criar campanha→`/contato` |

## Detalhes técnicos
- FAQ usa `Accordion` do shadcn/ui (já existe em `src/components/ui/accordion.tsx`)
- Contato usa `Card`, `Input`, `Textarea`, `Select`, `Label`, `Button` (todos já existem)
- Todas as páginas usam `PageLayout` existente
- Contato terá layout customizado (não usa o `max-w-4xl` do PageLayout padrão — usará Navbar+Footer diretamente com container mais largo)

