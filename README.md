# projeto-1

Projeto Next.js criado com `create-next-app`, usando App Router, TypeScript e Tailwind CSS.

## Stack

- **Next.js** 16.3.4 (App Router)
- **React** 19.2.8
- **TypeScript** 5
- **Tailwind CSS** 4 (via `@tailwindcss/postcss`)
- **ESLint** 9 (`eslint-config-next`)

## Estrutura

```
src/
  app/
    layout.tsx     # layout raiz, fontes Geist e metadata
    page.tsx       # página inicial (scaffold padrão do create-next-app)
    globals.css     # estilos globais / Tailwind
public/              # assets estáticos
```

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts

| Comando          | Descrição                        |
|-------------------|-----------------------------------|
| `npm run dev`     | servidor de desenvolvimento       |
| `npm run build`   | build de produção                 |
| `npm run start`   | inicia o build de produção        |
| `npm run lint`    | roda o ESLint                     |

## Status

Scaffold inicial ainda no estado padrão do `create-next-app` (página `src/app/page.tsx` não foi customizada). Pronto para começar o desenvolvimento.

## Observação para desenvolvimento com IA

O `AGENTS.md` deste projeto alerta que o Next.js 16 tem mudanças que quebram compatibilidade com o conhecimento de treinamento de alguns modelos. Antes de gerar código novo, vale consultar a documentação em `node_modules/next/dist/docs/`.
