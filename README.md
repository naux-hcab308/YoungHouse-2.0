# YoungHouse

A [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Linting**: [ESLint](https://eslint.org)

## Getting Started

Install dependencies (already done if you ran `create-next-app`):

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
└── app/
    ├── layout.tsx      # Root layout (fonts, metadata)
    ├── page.tsx        # Home page
    └── globals.css     # Global styles & Tailwind imports
public/                 # Static assets
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm run start` | Run production build |
| `npm run lint` | Run ESLint |

## Deployment

Deploy instantly on [Vercel](https://vercel.com/new) or any Node.js-compatible platform.
