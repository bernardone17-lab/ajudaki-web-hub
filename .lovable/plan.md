

# Corrigir Layout: Hero Text Dentro do Grid

## Problema Central
O texto hero ("Conectamos quem ajuda...") está renderizado **acima** do grid como bloco separado. Na referência, ele está **dentro** do grid, ocupando as colunas centrais da primeira linha, ladeado pelos cards de impacto.

## Layout Correto (da referência)

```text
Row 1: [Meals(tall)] [+12k roxo]  [HERO TEXT + botões] [Emergency(tall)]
Row 2: [Meals cont.] [Mãos foto]  [Árvores] [Esportes] [+50k roxo]
```

- Col 1: Meals — row-span-2, foto com overlay escuro
- Col 2 Row 1: +12.000 — fundo roxo sólido
- Cols 3-4 Row 1: Hero text centralizado (título, subtítulo, 2 botões)
- Col 5: Emergência — row-span-2, rounded-[2rem], foto com progress bar
- Col 2 Row 2: Mãos — foto com overlay laranja, "Sua ajuda é essencial!"
- Col 3 Row 2: Árvores — foto com overlay roxo
- Col 4 Row 2: Esportes — foto com CTA overlay
- Col 5 Row 2: +50.000 — fundo roxo sólido (MAS col 5 já é row-span-2 com emergência)

Correção: Na referência, a col 5 row 2 é o card roxo +50.000, e a emergência fica sozinha na row 1. Olhando melhor a imagem:
- Col 5 Row 1: Emergência (só 1 row, mais alto com rounded)  
- Col 5 Row 2: +50.000 roxo

## Mudanças no `ImpactGrid.tsx`

1. **Remover o bloco hero separado** (linhas 28-45)
2. **Inserir hero text como grid item** nas cols 3-4 row 1 com `col-span-2`
3. **Ajustar grid**: `grid-cols-[1.4fr_1fr_1.2fr_1fr_1.2fr] grid-rows-[280px_240px]`
4. **Emergência**: remover `row-span-2`, ficar só na row 1 com rounded-[2rem] e altura automática
5. **+50.000 roxo**: mover para col 5 row 2 (sozinho, não col-span-2)
6. **Reordenar cards na row 2**: Mãos (col2), Árvores (col3), Esportes (col4), +50k (col5)

## Estrutura final do grid

```
grid-cols-[1.4fr_1fr_1.5fr_1fr_1.3fr] grid-rows-[300px_240px]

Item 1: col1, row-span-2 — Meals
Item 2: col2, row1 — +12k roxo
Item 3: col3-4, row1 — Hero text
Item 4: col5, row1 — Emergência
Item 5: col2, row2 — Mãos
Item 6: col3, row2 — Árvores
Item 7: col4, row2 — Esportes
Item 8: col5, row2 — +50k roxo
```

## Arquivo modificado
- `src/components/ImpactGrid.tsx` — reescrever a seção desktop do grid

