

# Ajustes no Navbar e Página Segurança

## Mudanças

### 1. Página Segurança (`src/pages/Seguranca.tsx`)
Remover todos os "—" (travessões) dos textos:
- Linha 21: "recebemos — só" → "recebemos, só"
- Linha 25: "necessário. Você também pode" (sem travessão, ok)
- Linha 83: "identidade — e você" → "identidade, e você"

### 2. Navbar (`src/components/Navbar.tsx`)
- **Remover** "Pagamentos e Destino Certo" do array `comoFuncionaLinks` (linha 10)
- **Alterar** desc do "O Ajudaki": de "Conheça a plataforma" para "Saiba mais sobre nós" (linha 8)

### Resultado do dropdown "Como Funciona":
- O Ajudaki → "Saiba mais sobre nós"
- Segurança e Transparência → "Como protegemos suas doações"
- Como Funciona → "Veja o passo a passo"

## Arquivos modificados
- `src/pages/Seguranca.tsx`
- `src/components/Navbar.tsx`

