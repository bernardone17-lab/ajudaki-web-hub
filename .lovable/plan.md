# Reestruturar Cabeçalho (Navbar)

## Estrutura atual

`Sobre | Como Funciona | Campanhas | Depoimentos | Transparência ▾`

## Nova estrutura

`Como Funciona ▾ | Causas | Criar Campanha`

### Dropdown "Como Funciona"

O dropdown herda os itens do antigo "Transparência" + novo item "O Ajudaki":

- **O Ajudaki** → `/sobre` (ícone Info) — "Conheça a plataforma"
- **Segurança** → `/seguranca` — "Como protegemos suas doações"
- **Pagamentos e Destino Certo** → `/destino-certo` — "Para onde vai sua doação"
- **Como Funciona** → `/como-funciona-ajudaki` (ícone existente) — "Veja o passo a passo"

### Links diretos

- **Causas** → `/campanhas` (renomeia "Campanhas")
- **Criar Campanha** → nova rota ou âncora (por enquanto pode ser link placeholder)

## Arquivo modificado

- `src/components/Navbar.tsx`
  - Remover `navLinks` array antigo e `transparenciaLinks`
  - Criar novo array `comoFuncionaLinks` com os 4-5 itens do dropdown
  - Renomear dropdown de "Transparência" para "Como Funciona"
  - Adicionar links diretos "Causas" (`/campanhas`) e "Criar Campanha"
  - Atualizar menu mobile com a mesma estrutura

> **Dúvida**: "O Ajudaki" deve apontar para `/sobre` (mesma página do antigo "Sobre Ajudaki") ou para uma rota diferente? Se for a mesma, posso unificar os dois itens. Caso contrário, preciso saber a rota.