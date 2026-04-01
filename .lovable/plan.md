

# Redesign Completo: Hero + Impact Grid Integrados

## Problema
Na referência, o hero e os cards de impacto formam **uma única seção integrada** — os cards envolvem o texto centralizado. Atualmente são dois componentes separados (HeroSection em cima, ImpactGrid embaixo).

## Layout da Referência (desktop)

```text
┌──────────────────────────────────────────────────────────┐
│  Col 1          Col 2         Col 3       Col 4    Col 5 │
│ ┌─────────┐  ┌─────────┐                        ┌──────┐│
│ │         │  │ ROXO    │   Conectamos quem       │EMERG.││
│ │ Homem   │  │ +12.000 │   ajuda a quem mais     │(foto)││
│ │ sorrindo│  │ Famílias│   precisa.              │ 80%  ││
│ │         │  │         │                         │      ││
│ │ +18.500 │  │Saiba Mais│  [Doar] [Conhecer]     │CTA → ││
│ │refeições│  └─────────┘                         └──────┘│
│ │         │  ┌─────────┐  ┌──────────┐ ┌───────┐┌──────┐│
│ │Doe Agora│  │ Mãos    │  │ Árvores  │ │Esporte││ROXO  ││
│ └─────────┘  │"essenc."│  │ +10.000  │ │CTA →  ││+50000││
│              └─────────┘  └──────────┘ └───────┘└──────┘│
└──────────────────────────────────────────────────────────┘
```

## Mudanças Específicas

### 1. Unificar Hero + ImpactGrid em um só componente
- Criar grid 5 colunas com o texto hero ocupando as colunas 2-4 no topo
- Cards posicionados ao redor do texto

### 2. Card +12.000 Famílias → Fundo roxo sólido (sem foto)
- Background `bg-primary`, sem imagem
- Texto: "+12.000", "Famílias foram ajudadas com muitas doações voluntárias.", "Saiba Mais →"

### 3. Card Emergência → Com foto de fundo (pessoa em cama)
- Manter a foto `impact-families` ou similar como background
- Tag "EMERGÊNCIA" + barra de progresso 80% sobrepostos
- Mini CTA overlay: "Uma chance a mais para o Carlos" + botão circular laranja

### 4. Card +50.000 → Fundo roxo sólido (sem foto)
- Background `bg-primary`, texto branco
- "+50.000", "Pessoas apoiadas por campanhas verificadas pela Ajudaki. ✓"
- "Seja + um Apoiador"

### 5. Card inferior esquerdo (col 2 bottom) → Mãos + "Sua ajuda é essencial!"
- Usar `impact-families` como foto de mãos
- Texto overlay: "Sua ajuda é essencial!"

### 6. Card Esportes (col 4) → CTA overlay
- "Com sua ajuda, o jogo continua" + "Apoie o retorno do João ao futebol"
- Botão circular laranja →

### 7. Textos atualizados
- Refeições: "refeições garantidas" (não "distribuídas")
- Árvores: "Graças às pessoas que acreditam no futuro."

## Arquivos modificados
- `src/components/HeroSection.tsx` — remover (conteúdo movido para ImpactGrid)
- `src/components/ImpactGrid.tsx` — reescrever completamente com hero integrado
- `src/pages/Index.tsx` — remover HeroSection, manter só ImpactGrid

## Detalhes Técnicos
- Grid CSS: `grid-cols-5 grid-rows-3` com hero text usando `col-start-2 col-span-3 row-start-1`
- Cards roxos sólidos: `bg-primary text-primary-foreground` sem tag `<img>`
- Cards com foto: overlay gradient + texto
- Cards da col 5: `rounded-[2rem]` estilo celular/phone
- Mobile: layout empilhado com hero no topo e cards abaixo em 2 colunas

