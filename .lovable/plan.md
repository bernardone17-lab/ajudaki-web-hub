

# Reordenar Sidebar + Mobile-first na Página de Detalhe

## Mudanças

### 1. Sidebar — mover "Ajude compartilhando" para o final
Ordem atual: Progress → Organizador → **Compartilhando** → Informações
Ordem correta: Progress → Organizador → Informações → **Compartilhando**

### 2. Mobile — arrecadação antes do conteúdo principal
No mobile (`lg:hidden`), duplicar o card de Progress+Doar **acima** da seção "Sobre esta campanha", mostrando apenas no mobile. O card original na sidebar fica visível apenas no desktop (`hidden lg:block`).

## Arquivo modificado
- `src/pages/CampanhaDetalhe.tsx`
  - Adicionar bloco `lg:hidden` com o card de arrecadação logo após o link "Voltar às campanhas" (antes do "Sobre esta campanha")
  - No sidebar, esconder o card de arrecadação no mobile com `hidden lg:block`
  - Trocar a posição dos cards: Informações sobe, Compartilhando desce para último

