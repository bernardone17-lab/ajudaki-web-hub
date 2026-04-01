

# 4 Melhorias: Verificação, Favicon, Animações e Seção CTA

## 1. Verificar logos e ícones
Os componentes já referenciam os assets corretos (`logo-horizontal.png`, `coracao-puzzle.png`). Console sem erros. Os assets foram criados no último edit. Se algum não carregar, será visível no preview — sem mudança de código necessária aqui.

## 2. Atualizar favicon com ícone oficial
- Copiar `user-uploads://Ícone_-_1-100.jpg` para `public/favicon.jpg`
- Remover `public/favicon.ico` se existir
- Atualizar `index.html` com `<link rel="icon" href="/favicon.jpg" type="image/jpeg">`

## 3. Animações nos cards do mosaico (sem framer-motion)
Em vez de adicionar uma dependência, usar **Intersection Observer** com CSS animations já disponíveis no projeto (`animate-fade-in`):
- Criar um hook `useInView` simples
- Aplicar classes `opacity-0` → `animate-fade-in` com delays escalonados nos cards do `ImpactGrid`
- Cada card aparece com um leve delay incremental (0ms, 100ms, 200ms...)

## 4. Nova seção CTA abaixo de Histórias de Impacto
- Criar `src/components/CTASection.tsx`
- Background roxo/primary com texto branco centralizado
- Frase: "Cada gesto conta. Comece a transformar vidas agora."
- Dois botões iguais ao Hero: "Fazer uma Doação" (branco filled) + "Conhecer Causas" (outline branco)
- Adicionar ao `Index.tsx` entre `HistoriasImpacto` e `Footer`

## Arquivos modificados
- `index.html` — favicon
- `src/components/ImpactGrid.tsx` — animações de entrada
- `src/components/CTASection.tsx` — novo componente
- `src/pages/Index.tsx` — incluir CTASection

