# 🐾 PetShop Amigo

Landing page institucional para um pet shop fictício, com seções de serviços, estatísticas, depoimentos e chamada para agendamento. Construído em Next.js 16 com App Router.

## Stack

- **Next.js** 16.3.4 (App Router, Turbopack)
- **React** 19.2.8
- **TypeScript** 5
- **Tailwind CSS** 4 (via `@tailwindcss/postcss`)
- **ESLint** 9 (`eslint-config-next`)

> O `CLAUDE.md` do projeto descreve convenções para uma stack mais completa (shadcn/ui, React Hook Form + Zod, Server Actions, Supabase, Stripe) a ser adotada conforme o projeto evoluir para além da landing page atual.

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts

| Comando           | Descrição                    |
| ------------------ | ----------------------------- |
| `npm run dev`      | servidor de desenvolvimento   |
| `npm run build`    | build de produção             |
| `npm run start`    | inicia o build de produção    |
| `npm run lint`     | roda o ESLint                 |

## Estrutura

```
src/
  app/
    layout.tsx     # layout raiz, fontes Geist e metadata
    page.tsx        # landing page (hero, serviços, sobre, depoimentos, CTA)
    globals.css     # estilos globais / Tailwind
public/              # assets estáticos (ícones/svg)
```

## Seções da página

- **Hero** — chamada principal e CTA de agendamento
- **Stats** — anos de experiência, pets atendidos, avaliação
- **Serviços** — banho & tosa, consulta veterinária, hotel para pets, loja & acessórios
- **Sobre** — diferenciais do pet shop
- **Depoimentos** — avaliações de clientes
- **Contato/CTA** — telefone e chamada final para agendamento

## Convenções de desenvolvimento

Consulte o `CLAUDE.md` na raiz do projeto para diretrizes de arquitetura, estilo de código e workflow (Server Components por padrão, Server Actions em `actions/`, sem `any` explícito, Tailwind only, etc.).
