

# Adicionar PIX ao Card de Doação + Compartilhar via Pop-up

## Mudanças

### 1. Card de doação (ProgressCard) — adicionar seção PIX
Abaixo do botão "Doar Agora", adicionar:
- Texto "OU DOE VIA PIX" em caps, cor muted
- Input readonly com a chave PIX da campanha (ex: `slug@ajudaki.com`)
- Botão "Copiar chave PIX" com ícone de cópia, fundo lilás claro, que copia para clipboard e mostra toast

### 2. Substituir card "Ajude compartilhando" por botão grande
- Remover o card inteiro de compartilhamento (linhas 218-258)
- No lugar, colocar um único `Button` largo: "Compartilhar esta campanha" com ícone Share2
- Estilo: `w-full`, variant outline ou secondary, tamanho `lg`

### 3. Pop-up de compartilhamento (Dialog)
Ao clicar no botão, abre um `Dialog` com:
- Título "Compartilhamento rápido" + botão X para fechar
- "Link da vaquinha:" + input readonly com URL + botão copiar
- Texto motivacional: "Compartilhe também nas redes sociais e alcance ainda mais doadores!"
- Mensagem: "Olá! A campanha '{title}' precisa do seu apoio..."
- Grid de ícones circulares: Facebook, WhatsApp, X (Twitter), Messenger, LinkedIn, E-mail
- Cada ícone com cor da marca e label abaixo

### 4. Adicionar campo `pixKey` ao Campaign interface
- Novo campo string no interface e dados: ex `"nome-da-campanha@ajudaki.com"`

## Arquivos modificados
- `src/data/campaigns.ts` — adicionar `pixKey` ao interface e dados mock
- `src/pages/CampanhaDetalhe.tsx` — PIX no ProgressCard, remover card compartilhar, adicionar botão + Dialog com ícones de redes sociais

