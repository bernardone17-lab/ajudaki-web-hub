

# Fix ImpactGrid Layout to Match Reference

## Problems (current vs reference)

1. **Hero title wraps 4 lines** — needs smaller font or wider center area. Reference shows 2 lines.
2. **Row 2 cards invisible** — AnimatedCard animation not triggering because they're below the fold. The `useInView` threshold of 0.15 may not fire. Need to check if cards render but are stuck at `opacity-0`.
3. **Emergency card too faded** — gradient needs to be lighter at top, content needs to be more visible.
4. **Grid proportions off** — center cols need more width relative to side cols.
5. **+12k card position** — in reference, it sits lower (aligned with subtitle/buttons area, not the title).

## Changes to `src/components/ImpactGrid.tsx`

### Grid structure
- Change columns to `grid-cols-[1.3fr_1fr_1.8fr_1fr_1.2fr]` — give center col (now single col-span-2 → cols 3-4) more breathing room
- Keep `grid-rows-[300px_240px]` but add `gap-3`

### Hero title
- Reduce from `text-4xl lg:text-5xl` to `text-3xl lg:text-4xl` so it fits in 2 lines
- Tighten subtitle and button spacing

### Fix invisible row 2 cards  
- Reduce `useInView` threshold from `0.15` to `0.05` so cards animate in sooner
- Or add a fallback: if cards are already visible on load, skip animation delay

### Emergency card
- Lighten the gradient overlay: `from-black/60 via-black/20 to-black/5`
- Ensure progress bar and CTA text have enough contrast

### +12k purple card
- Add `mt-auto` or adjust vertical alignment so its content gravitates to the bottom half, giving visual impression it starts lower than the hero title

## Files modified
- `src/components/ImpactGrid.tsx` — grid proportions, font sizes, animation threshold, gradient fixes
- `src/hooks/use-in-view.ts` — possibly lower threshold default

