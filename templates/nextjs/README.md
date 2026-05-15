# Next.js Developer Portfolio Template

A professional, responsive portfolio/CV site built with **Next.js 14** (App Router), **Tailwind CSS**, and **React Icons**. One config file — edit your data, ship your portfolio.

## Quick Start

```bash
npm install
npm run dev    # Dev server at http://localhost:3000
npm run build  # Production build
npm start      # Serve production build
```

## Customization — the only file you need to edit

Open [src/config/portfolio.config.ts](src/config/portfolio.config.ts) and replace every value with your own:

```typescript
const portfolioConfig: PortfolioConfig = {
  personal: {
    name: 'Your Name',
    title: 'Your Title',
    subtitle: 'Your Stack | Your Role',
    tagline: 'Your one-liner bio',
    profileImage: '/pp.jpeg',
    resumeFile: '/resume.pdf',
    resumeFileName: 'YourName_Resume.pdf',
  },
  contact: {
    email: 'you@example.com',
    // ...
  },
  // skills, experience, education, projects, certifications, contentCreation
};
```

Then replace these two files in `public/`:
- `public/pp.jpeg` — your profile photo (100×100px recommended)
- `public/resume.pdf` — your resume PDF

## Features

- Responsive layout: fixed sidebar on desktop, horizontal scrollable nav on mobile
- Scroll-spy navigation — active section highlighted automatically
- CV download button
- Server components for SEO (metadata, OpenGraph tags auto-generated from config)
- 8 portfolio sections: Headline, Summary, Skills, Employment, Education, Projects, Content Creation, Certifications
- Fade-in animations and hover effects

## Tech Stack

| Package | Version | Purpose |
|---------|---------|---------|
| Next.js | 14.2 | Framework + SSR/SSG |
| React | 18 | UI library |
| Tailwind CSS | 3.4 | Styling |
| react-icons | 5 | Bootstrap Icons |
| TypeScript | 5 | Type safety |

## Deployment

### Vercel (recommended — one click)

Push to GitHub, connect to Vercel, deploy.

### Static export (GitHub Pages, S3, Cloudflare Pages)

Uncomment `output: 'export'` in `next.config.ts`, then:

```bash
npm run build
# Upload the /out directory
```

### Docker

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          ← Root layout, fonts, metadata
│   ├── page.tsx            ← Main page composition
│   └── globals.css         ← Tailwind + global styles
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx     ← Desktop sidebar (client)
│   │   └── MobileNav.tsx   ← Mobile top nav (client)
│   └── sections/
│       ├── Headline.tsx
│       ├── ProfileSummary.tsx
│       ├── Skills.tsx
│       ├── Employment.tsx
│       ├── Education.tsx
│       ├── Projects.tsx
│       ├── ContentCreator.tsx
│       └── Certifications.tsx
└── config/
    ├── portfolio.config.ts ← Edit this file
    └── portfolio.types.ts  ← TypeScript interfaces
public/
├── pp.jpeg                 ← Your photo
└── resume.pdf              ← Your CV
```

## Type Safety

All portfolio data is fully typed via `portfolio.types.ts`. TypeScript will catch any missing or mistyped fields when you edit the config.
