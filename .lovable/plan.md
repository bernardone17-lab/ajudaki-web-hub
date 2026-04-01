

# Redesign Hero Section to Match Reference Image

## What Changes

The current hero has a dark full-width background image with left-aligned text. The reference image (pagina_82) shows a completely different layout:

### New Hero Layout
- **Light background** (the site's `#f2f0fc` background) — no dark photo overlay
- **Centered text**: title "Conectamos quem ajuda a quem mais precisa." centered, bold, dark text
- **Centered subtitle**: "A Ajudaki é uma ponte segura entre doadores e causas sociais, garantindo que cada contribuição chegue com transparência, empatia e impacto real."
- **Two centered CTAs**: "Fazer uma Doação" (purple filled) + "Conhecer Causas" (outline)

### Impact Mosaic Integrated Into Hero
The reference shows the impact grid as part of the hero area, not a separate section. The layout is a **5-column mosaic**:

```text
┌──────────┬──────────┬──────────┬──────────┬──────────┐
│          │ +12.000  │          │          │ EMERGÊN- │
│ +18.500  │ Famílias │  (tree   │ (sports  │ CIA 80%  │
│ refeições│          │  photo)  │  photo)  │          │
│ (2 rows) │──────────│ +10.000  │          │ story    │
│          │ (hands   │ Árvores  │          │ card     │
│          │  photo)  │          │          │          │
│          │          │          │          ├──────────┤
│          │ "Sua     │          │ "Com sua │ +50.000  │
│          │  ajuda"  │ "Saiba   │  ajuda"  │ Pessoas  │
└──────────┴──────────┴──Mais────┴──────────┴──────────┘
```

Each card has:
- Rounded corners (`rounded-2xl`)
- Photo background with gradient overlay
- Stats number + label + description text
- Small CTA links at bottom ("Doe Agora", "Saiba Mais", "Seja + um Apoiador")
- The right column includes "story" style cards (emergency card with progress bar, individual story card)

## Technical Plan

### 1. Rewrite `HeroSection.tsx`
- Remove background image, use light bg
- Center title, subtitle, and CTAs
- Use dark text colors (`text-foreground`)

### 2. Rewrite `ImpactGrid.tsx` as the mosaic
- 5-column grid layout matching the reference
- Each card: photo bg, gradient overlay, stat number, label, description, CTA link
- Add two "story" cards on the right column (emergency with progress bar, individual story)
- Cards have varying heights using `row-span`
- Include descriptive text under stats (e.g., "Com a sua ajuda, mais mesas seguem cheias.")
- Responsive: stack on mobile, mosaic on desktop

### 3. Update `Index.tsx`
- Keep HeroSection and ImpactGrid as separate components but visually they flow together (no extra heading in ImpactGrid)
- Remove the "Nosso Impacto" heading and subtitle from ImpactGrid since stats are now part of the hero visual

### 4. Regenerate images
- Generate new images for the mosaic cards to match the reference (smiling man, hands, tree planting, sports/cooking, emergency)

