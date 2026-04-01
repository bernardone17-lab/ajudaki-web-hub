

# Ajustar Espaçamentos e Proporções do Mosaico

## Problemas Identificados (do screenshot atual)

1. **Hero text ocupa só 1 coluna** (col 3) — deveria ocupar cols 3-4 para ter mais espaço horizontal
2. **Botões "Fazer uma Doação" e "Conhecer Causas" vazam para a segunda row** — ficam sobrepondo os cards de baixo
3. **Col 4 Row 1 está vazia** (spacer div) — desperdício de espaço
4. **Rows muito altas** (280px cada) — na referência são mais compactas (~220-240px)

## Mudanças

### `src/components/ImpactGrid.tsx`
1. **Hero text span 2 colunas**: Mudar de col 3 sozinha para `col-span-2` (cols 3-4), removendo o spacer vazio
2. **Reduzir altura das rows**: De `280px` para `240px` cada
3. **Grid 5 colunas com proporções melhores**: `grid-cols-[1.2fr_1fr_1fr_1fr_1fr]` para dar mais espaço ao card de refeições (col 1 row-span-2)
4. **Remover o `<div />` spacer** da col 4 row 1
5. **Reduzir padding/gap**: gap de `gap-3` em vez de `gap-4`

## Arquivos modificados
- `src/components/ImpactGrid.tsx` — ajustes de grid, span e alturas

