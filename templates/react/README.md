# React Developer Portfolio Template

A professional, responsive portfolio/CV site built with **React 18**, **Vite**, **Tailwind CSS**, and **React Icons**. One config file — edit your data, ship your portfolio.

## Quick Start

```bash
npm install
npm run dev      # Dev server at http://localhost:5173
npm run build    # Production build → dist/
npm run preview  # Preview the production build locally
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
    profileImage: '/profile_picture.png',
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
- `public/profile_picture.png` — your profile photo (100×100px recommended)
- `public/resume.pdf` — your resume PDF

## Features

- Responsive layout: fixed sidebar on desktop, horizontal scrollable nav on mobile
- Scroll-spy navigation — active section highlighted automatically
- CV download button
- 8 portfolio sections: Headline, Summary, Skills, Employment, Education, Projects, Content Creation, Certifications
- Fade-in animations and hover effects

## Tech Stack

| Package | Version | Purpose |
|---------|---------|---------|
| React | 18 | UI library |
| Vite | 6 | Build tool + dev server |
| Tailwind CSS | 3.4 | Styling |
| react-icons | 5 | Bootstrap Icons |
| TypeScript | 5 | Type safety |

## Deployment

This is a plain static SPA — the `dist/` folder can be served from any static host
(GitHub Pages, Netlify, Vercel, S3, Cloudflare Pages).

### Sub-path deploys (GitHub Pages project sites)

Vite needs to know the sub-path it will be served from. Set `VITE_BASE_PATH`
before building:

```bash
VITE_BASE_PATH=/my-repo/react/ npm run build
```

All asset paths (profile photo, resume) resolve against this base automatically
via the `asset()` helper, so they keep working on sub-path deploys.

## Project Structure

```
src/
├── main.tsx                ← Entry point, mounts <App>, sets document metadata
├── App.tsx                 ← Main page composition
├── index.css              ← Tailwind + global styles
├── lib/
│   └── asset.ts            ← Resolves public asset paths against the base URL
├── components/
│   ├── layout/
│   │   ├── Sidebar.tsx     ← Desktop sidebar
│   │   └── MobileNav.tsx   ← Mobile top nav
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
├── profile_picture.png     ← Your photo
└── resume.pdf              ← Your CV
```

## Type Safety

All portfolio data is fully typed via `portfolio.types.ts`. TypeScript will catch any missing or mistyped fields when you edit the config.
