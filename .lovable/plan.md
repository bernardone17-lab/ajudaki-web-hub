

# Adicionar "Transparência" com Dropdown e Páginas Internas

## O que muda

### 1. Navbar — Dropdown "Transparência"
Adicionar um item "Transparência" na navegação que ao hover/click abre um **dropdown com cards** para cada sub-página:
- Sobre Ajudaki
- Segurança
- Divulgação
- Política de Privacidade LGPD
- Política de Cookies
- Como funciona o Ajudaki
- Destino Certo

O dropdown terá cards com ícone, título e descrição curta (estilo mega-menu). No mobile, expande como accordion dentro do menu.

### 2. Criar 7 páginas novas
Cada página terá layout consistente: Navbar + conteúdo + Footer. Conteúdo extraído do arquivo `ajudakitextos.rtf` fornecido:

| Rota | Conteúdo |
|------|----------|
| `/sobre` | História, Missão, Visão, Valores |
| `/seguranca` | Segurança das doações |
| `/divulgacao` | Como funciona a divulgação |
| `/privacidade` | Política de Privacidade LGPD completa |
| `/cookies` | Política de Cookies completa |
| `/como-funciona-ajudaki` | Para quem precisa + quem quer ajudar + FAQ |
| `/destino-certo` | Transparência dos repasses |

### 3. Layout compartilhado
Criar um componente `PageLayout` que envolve Navbar + children + Footer para reutilizar nas páginas internas.

## Detalhes Técnicos

### Navbar
- Usar estado `hover`/`click` para abrir dropdown
- Dropdown posicionado absoluto abaixo do link "Transparência"
- Cards com ícones Lucide (Shield, Eye, FileText, Cookie, HelpCircle, Target, Info)
- No mobile: seção colapsável dentro do menu

### Rotas (App.tsx)
Adicionar 7 rotas novas antes do catch-all.

### Páginas
Cada página é um componente simples com o texto do RTF formatado em seções com headings, parágrafos e listas.

## Arquivos
- `src/components/Navbar.tsx` — dropdown Transparência
- `src/components/PageLayout.tsx` — novo layout wrapper
- `src/pages/Sobre.tsx`
- `src/pages/Seguranca.tsx`
- `src/pages/Divulgacao.tsx`
- `src/pages/Privacidade.tsx`
- `src/pages/Cookies.tsx`
- `src/pages/ComoFuncionaPage.tsx`
- `src/pages/DestinoCerto.tsx`
- `src/App.tsx` — novas rotas

