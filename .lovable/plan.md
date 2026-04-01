

# Ajustar Layout para Corresponder à Referência (pagina_82)

## Diferenças identificadas entre o código atual e a imagem de referência

### 1. Navbar — Reorganizar completamente
**Atual**: Links "Sobre, Como Funciona, Campanhas, Impacto" à esquerda. Logo à direita. Botões "Acessar Conta" + "Criar Conta".
**Referência**: Links "Sobre, Como Funciona, Transparência, Depoimentos" à esquerda. Logo **centralizado** (com ícone acima do texto). Direita: ícone de busca + "Criar Conta" (roxo preenchido) + "Acessa sua Conta" (outlined).

Mudanças:
- Trocar links para: Sobre, Como Funciona, Transparência, Depoimentos
- Logo centralizado (posição absoluta no centro da navbar)
- Adicionar ícone de busca (Search do Lucide) à direita
- Inverter ordem dos botões: "Criar Conta" preenchido primeiro, "Acessa sua Conta" outlined depois

### 2. HeroSection — Remover ícone decorativo
- Remover o coração puzzle acima do título
- Manter apenas: título, subtítulo e dois botões centralizados
- Botão "Fazer uma Doação" roxo preenchido, "Conhecer Causas" outlined com borda escura

### 3. ImpactGrid — Ajustar formato dos cards da direita
- Os cards da coluna 5 (emergência + pessoas) devem ter cantos **super arredondados** (estilo celular/phone, `rounded-3xl`)
- O card de esportes (col 4) deve ter um mini card de CTA overlay na parte inferior com botão laranja circular
- Ajustar proporções para corresponder melhor ao mosaico da referência

### 4. TopBanner — Destacar texto em negrito
- Na referência, parte do texto do banner está em **negrito**: "A cada doação feita hoje, a Ajudaki contribui junto."

## Arquivos modificados
- `src/components/Navbar.tsx` — reorganizar layout, links, botões, busca
- `src/components/HeroSection.tsx` — remover coração, limpar
- `src/components/ImpactGrid.tsx` — rounded-3xl nos cards direitos, overlay CTA
- `src/components/TopBanner.tsx` — texto parcialmente em negrito

