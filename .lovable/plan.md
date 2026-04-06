

# Adicionar Seções Faltantes na Página de Detalhe da Campanha

## O que falta (da imagem de referência)

A página atual tem apenas: hero image, descrição, sidebar com progresso e organizador. Faltam 3 seções que aparecem na referência:

### 1. Seção "Fotos" (galeria)
- Card branco arredondado com ícone de foto + título "Fotos" + badge com contagem
- Grid de thumbnails da campanha
- Como não temos múltiplas fotos nos dados, adicionar campo `photos: string[]` ao Campaign interface e reutilizar a imagem principal duplicada por enquanto

### 2. Seção "Ajude compartilhando"
- Card branco com título "Ajude compartilhando" e subtexto "Compartilhar pode ser tão importante quanto doar. Espalhe essa causa!"
- Botões coloridos: WhatsApp (verde), Facebook (azul escuro), Twitter (azul), Copiar link (cinza escuro), Mais opções (roxo)
- Botões usam `window.open` com URLs de share e `navigator.clipboard` para copiar link

### 3. Seção "Informações"
- Card branco com ícone info + título "Informações"
- Grid 2 colunas com: Categoria (tag da campanha), Localização, Criada em (data)
- Cada item com ícone, label pequeno e valor em bold
- Adicionar campos `location` e `createdAt` ao Campaign interface

### 4. Organizador — melhorar layout
- Adicionar avatar circular com inicial do nome (como na referência: círculo roxo com letra)
- Subtítulo "Organizador da campanha" abaixo do nome

## Dados do Campaign — novos campos

```ts
photos: string[];      // array de imagens (inicialmente [image, image])
location: string;      // ex: "São Paulo, SP"
createdAt: string;     // ex: "06 de abril de 2026"
```

## Arquivos modificados

| Arquivo | Ação |
|---|---|
| `src/data/campaigns.ts` | Adicionar `photos`, `location`, `createdAt` ao interface e dados |
| `src/pages/CampanhaDetalhe.tsx` | Adicionar seções Fotos, Compartilhar, Informações + melhorar Organizador |

## Ordem das seções na sidebar/abaixo do conteúdo principal:
1. Progress + Doar (já existe)
2. Fotos (novo)
3. Organizador (melhorado)
4. Ajude compartilhando (novo)
5. Informações (novo)

