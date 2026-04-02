

# Bordas/Sombras entre Seções + Verificar Fundo + Identidade Visual

## 1. Fundo uniforme #f2f0fc

**Problema**: `--background` e `--muted` já são ambos `250 33% 97%` (= `#f2f0fc`), mas:
- `ComoFunciona` usa `bg-muted` ✓
- `HistoriasImpacto` usa `bg-muted` ✓
- `Campanhas` não tem classe de fundo — herda `bg-background` ✓
- `CTASection` usa `bg-primary` (roxo) — correto, é a seção CTA
- `Navbar` usa `bg-card/95` — cards são `#ffffff`, ok para contraste
- `Footer` usa `bg-foreground` — escuro, ok
- `PageLayout` não tem fundo explícito — herda `bg-background` ✓

**Resultado**: Todas as seções de conteúdo já usam #f2f0fc. Sem mudança necessária aqui.

## 2. Separação visual entre seções com mesmo fundo

Como ComoFunciona, Campanhas e HistoriasImpacto agora têm o mesmo fundo, ficam visualmente grudadas. Solução:

- Adicionar um **divisor sutil** entre cada seção usando um `<div>` com `border-t border-border/50` (linha fina lilás clara) no container
- Alternativa melhor: dar a cada seção cards com sombras mais pronunciadas (`shadow-md`) e adicionar espaçamento vertical consistente

**Abordagem escolhida**: Adicionar `border-t border-border/40` no topo de cada seção (exceto a primeira e o CTA/Footer que já têm fundo diferente).

### Arquivos:
- `src/components/ComoFunciona.tsx` — adicionar `border-t border-border/40` na section
- `src/components/Campanhas.tsx` — adicionar `border-t border-border/40`
- `src/components/HistoriasImpacto.tsx` — adicionar `border-t border-border/40`

## 3. Verificação da identidade visual (brand memory)

Checklist contra o brand doc:
- ✅ Primary `#685bc7` → CSS `--primary: 250 43% 56%` = `hsl(250,43%,56%)` ≈ `#685bc7` ✓
- ✅ Accent `#f68d2e` → CSS `--accent: 28 92% 57%` ≈ `#f68d2e` ✓
- ✅ Background `#f2f0fc` → `--background: 250 33% 97%` ✓
- ✅ Poppins headings, Inter body ✓
- ✅ Cards white, rounded-2xl, soft shadows ✓
- ⚠️ `--primary-dark: 267 60% 37%` — brand says `#4d2dad`. HSL(267,60%,37%) ≈ `#5b2d96`, not exactly `#4d2dad` (HSL ~268,60%,34%). Minor fix.
- ⚠️ `--secondary: 264 100% 81%` — brand says `#9964ff` which is HSL(264,100%,70%). Currently HSL(264,100%,81%) ≈ `#c0a0ff`. **Needs fix to match #9964ff → `264 100% 70%`**.
- ✅ Logo horizontal, coração puzzle, ícone — all referenced correctly in Navbar, Footer, TopBanner

### Fixes in `src/index.css`:
- `--secondary` from `264 100% 81%` → `264 100% 70%` (matches `#9964ff`)
- `--primary-dark` from `267 60% 37%` → `268 60% 34%` (matches `#4d2dad`)

## Resumo de arquivos modificados
- `src/index.css` — corrigir `--secondary` e `--primary-dark`
- `src/components/ComoFunciona.tsx` — `border-t`
- `src/components/Campanhas.tsx` — `border-t`
- `src/components/HistoriasImpacto.tsx` — `border-t`

