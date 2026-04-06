

# Criar Página de Campanhas + Página de Detalhe da Campanha

## O que será feito

1. **Dados centralizados** — Extrair os dados das campanhas para `src/data/campaigns.ts` com `id` (slug) em cada campanha, reutilizável na home e nas novas páginas.

2. **Página `/campanhas`** — Lista todas as campanhas ativas com:
   - Hero com título "Explorar Campanhas" e subtítulo
   - Filtros por categoria (Todas, Educação, Saúde, Assistência Social) usando Tabs do shadcn
   - Grid 3 colunas (desktop) / 1 coluna (mobile) com os mesmos cards estilizados
   - Cada card é clicável e leva a `/campanhas/:id`

3. **Página `/campanhas/:id`** — Detalhe da campanha com:
   - Imagem grande no topo (hero banner)
   - Tag da categoria + título narrativo
   - Barra de progresso com valores arrecadados / meta / dias restantes
   - Descrição completa da campanha
   - Botão "Doar Agora" em destaque
   - Seção lateral (desktop) ou abaixo (mobile) com informações do organizador

4. **Links atualizados**:
   - Footer "Explorar Campanhas" → `/campanhas`
   - Cards da home (seção Campanhas em Destaque) viram links para `/campanhas/:id`
   - Navbar: adicionar link "Campanhas" nos navLinks

## Arquivos

| Arquivo | Ação |
|---|---|
| `src/data/campaigns.ts` | Criar — dados centralizados com id/slug |
| `src/pages/CampanhasPage.tsx` | Criar — listagem com filtros |
| `src/pages/CampanhaDetalhe.tsx` | Criar — página de detalhe |
| `src/App.tsx` | Adicionar rotas `/campanhas` e `/campanhas/:id` |
| `src/components/Campanhas.tsx` | Importar dados de `campaigns.ts`, tornar cards clicáveis com `<Link>` |
| `src/components/Footer.tsx` | "Explorar Campanhas" → `/campanhas` |
| `src/components/Navbar.tsx` | Adicionar "Campanhas" aos navLinks |

## Detalhes técnicos
- `CampanhasPage` usa `Tabs` + `TabsList` + `TabsTrigger` + `TabsContent` para filtros
- `CampanhaDetalhe` usa `useParams` para pegar o slug e encontrar a campanha nos dados
- Cards clicáveis com `<Link to={/campanhas/${c.id}}>` wrapping o card
- Todas as páginas usam `PageLayout` ou Navbar+Footer direto
- Identidade visual: cores `primary`/`accent`, Poppins headings, Inter body, fundo `#f2f0fc`

