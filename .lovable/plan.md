

# Adicionar Carrossel Mobile nas Seções

## O que muda

Criar um componente `MobileAutoCarousel` (igual ao do projeto Agência Criativa Digital) que no **desktop** renderiza o grid normal, e no **mobile** troca por um carrossel horizontal com autoplay e dots de navegação.

Aplicar nas 3 seções:
- **Como Funciona** — 3 cards de passos
- **Campanhas** — 3 cards de campanhas
- **Histórias de Impacto** — 3 cards de histórias

## Arquivos

### 1. Instalar `embla-carousel-autoplay`
O projeto já tem `embla-carousel-react`, mas precisa do plugin `embla-carousel-autoplay`.

### 2. Criar `src/components/animations/MobileAutoCarousel.tsx`
- No desktop: renderiza `children` dentro de uma div com a `desktopClassName` (grid)
- No mobile: usa `embla-carousel-react` com `Autoplay` plugin, loop infinito, 90% width por slide, dots indicator na parte inferior
- Props: `children`, `autoplayInterval` (default 4000ms), `desktopClassName`

### 3. Atualizar `src/components/ComoFunciona.tsx`
- Substituir `<div className="grid grid-cols-1 md:grid-cols-3 ...">` por `<MobileAutoCarousel desktopClassName="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">`
- Cada card vira um child direto do carousel

### 4. Atualizar `src/components/Campanhas.tsx`
- Substituir o grid por `<MobileAutoCarousel desktopClassName="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">`

### 5. Atualizar `src/components/HistoriasImpacto.tsx`
- Substituir o `flex overflow-x-auto snap-x` por `<MobileAutoCarousel desktopClassName="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">`
- No desktop passa a ser grid em vez de scroll horizontal

## Arquivos modificados
- `package.json` — adicionar `embla-carousel-autoplay`
- `src/components/animations/MobileAutoCarousel.tsx` — novo componente
- `src/components/ComoFunciona.tsx` — usar MobileAutoCarousel
- `src/components/Campanhas.tsx` — usar MobileAutoCarousel
- `src/components/HistoriasImpacto.tsx` — usar MobileAutoCarousel

