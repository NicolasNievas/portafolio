# Portfolio — Nicolás Nievas

Personal portfolio built with [Next.js](https://nextjs.org) (App Router) and deployed on Vercel.

Bilingual interface (Spanish / English), dark and light mode, with a CV available for download in both languages.

## Tech Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- Custom i18n (context + JSON message files)
- SEO: `robots.txt` and `sitemap.xml` routes

## Features

- Bilingual UI (ES / EN) with persisted language preference
- Dark / light theme toggle with persisted preference
- Sections: Hero, Experience, Projects, Skills, Contact
- Downloadable CVs (`public/cv-es.pdf`, `public/cv-en.pdf`)
- Security headers and CSP in `next.config.ts`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | Description                |
| ---------------- | -------------------------- |
| `npm run dev`    | Start the dev server      |
| `npm run build`  | Production build          |
| `npm run start`  | Serve the production build |
| `npm run lint`   | Run ESLint                |

## Deploy

Deploy on [Vercel](https://vercel.com): import the repository, set the production URL as the canonical domain in `src/app/layout.tsx`, `src/app/sitemap.ts` and `src/app/robots.ts`, and push to `main`.