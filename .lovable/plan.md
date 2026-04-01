

# Melhorar Disposição e Adicionar Logos/Ícones Oficiais

## O que muda

### 1. Adicionar assets oficiais ao projeto
- Copiar o logo horizontal roxo (`Ajudaki_Horizontal_-_14_1.png`) para usar na Navbar e Footer
- Copiar o ícone (`Ícone_-_1-100.jpg`) para usar como favicon e elemento decorativo
- Copiar o coração puzzle (`Coração_-_1.png`) para usar como elemento visual no Hero

### 2. Navbar — usar logo oficial
- Substituir o texto "ajudaki" pelo logo horizontal (`Ajudaki_Horizontal_-_14_1.png`) com altura ~32px
- Manter a mesma estrutura de links e botões

### 3. HeroSection — melhorar disposição
- Adicionar o ícone/coração puzzle como elemento decorativo acima ou ao lado do título
- Aumentar o espaçamento vertical para respirar mais
- Manter layout centralizado conforme a referência pagina_82

### 4. ImpactGrid — melhorar disposição do mosaico
- Ajustar alturas dos cards para ficarem mais proporcionais (aumentar `gridAutoRows`)
- Melhorar o espaçamento entre cards (`gap-4` em vez de `gap-3`)
- Adicionar o coração puzzle como detalhe em algum card de texto (card 6)

### 5. TopBanner — adicionar ícone do coração
- Substituir o emoji 🤝 pelo coração puzzle como mini ícone inline

### 6. Footer — usar logo oficial
- Substituir texto "ajudaki" pelo logo horizontal (versão branca/clara ou o mesmo com filtro)

## Arquivos modificados
- `src/components/Navbar.tsx` — logo img
- `src/components/HeroSection.tsx` — coração decorativo + espaçamento
- `src/components/ImpactGrid.tsx` — melhor grid spacing
- `src/components/TopBanner.tsx` — ícone coração
- `src/components/Footer.tsx` — logo img
- Copiar 3 assets para `src/assets/`

