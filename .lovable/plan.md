

# Reestruturar Footer, Navbar e Separadores de Seções

## Resumo das mudanças

### 1. Footer — Redesign completo (baseado na imagem de referência)

Layout 4 colunas seguindo a referência:

**Coluna 1 — Branding:**
- Nome "Ajudaki" em bold com linha laranja (accent) embaixo
- Texto: "A plataforma de arrecadação de fundos mais confiável do Brasil. Conectamos pessoas e transformamos vidas através da solidariedade."
- Ícones sociais: Facebook, Twitter, Instagram, LinkedIn

**Coluna 2 — Plataforma:**
- Como funciona → `/como-funciona-ajudaki`
- Criar campanha → `#`
- Explorar Campanhas → `#campanhas`

**Coluna 3 — Institucional:**
- Sobre Nós → `/sobre`
- Transparência (link para dropdown ou `/seguranca`)
- ONGs → `#`

**Coluna 4 — Suporte (substitui "Contato"):**
- Contato → `#`
- FAQ → `#`

**Barra inferior:** Copyright à esquerda + links "Termos", "Privacidade", "Cookies" à direita (como na referência).

### 2. Navbar — Reestruturar dropdown Transparência

Remover do dropdown: Divulgação, Privacidade LGPD, Cookies, Como Funciona.

Novo conteúdo do dropdown Transparência:
- Sobre Ajudaki → `/sobre`
- Segurança → `/seguranca`
- Pagamentos e Destino Certo → `/destino-certo`

Mover "Divulgação" para dentro da página "Como Funciona" (conteúdo, não navbar).

### 3. Criar página Termos de Uso

Nova página `/termos-de-uso` com texto genérico de termos de uso para plataforma de doações. Adicionar rota no `App.tsx`.

### 4. Separadores entre seções — linha sutil com degradê da marca

Substituir o `border-t border-border/40` atual por um `<div>` decorativo com gradiente horizontal `primary → accent → primary` (roxo → laranja → roxo), altura de 1-2px, com opacidade suave. Adicionar `py-24` (mais respiro) nas seções em vez do `py-20` atual.

### 5. Mover links existentes

- "Como Funciona" no navbar continua apontando para `#como-funciona` (seção da home)
- A página `/como-funciona-ajudaki` fica acessível pelo footer "Plataforma > Como funciona"

## Arquivos modificados
- `src/components/Footer.tsx` — redesign completo
- `src/components/Navbar.tsx` — reduzir dropdown Transparência
- `src/pages/TermosDeUso.tsx` — nova página
- `src/App.tsx` — adicionar rota `/termos-de-uso`
- `src/components/ComoFunciona.tsx` — aumentar padding, separador degradê
- `src/components/Campanhas.tsx` — idem
- `src/components/HistoriasImpacto.tsx` — idem

