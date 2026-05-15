# Angular Developer Portfolio Template

A professional, responsive portfolio/CV site built with **Angular 17**, Bootstrap Icons, and server-side rendering (SSR). One config file — edit your data, ship your portfolio.

## Quick Start

```bash
npm install
npm start          # Dev server at http://localhost:4200
npm run build      # Production build
```

## Customization — the only file you need to edit

Open [src/app/portfolio.config.ts](src/app/portfolio.config.ts) and replace every value with your own:

```typescript
export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: 'Your Name',
    title: 'Your Title',
    subtitle: 'Your Stack | Your Role',
    tagline: 'Your one-liner bio',
    profileImage: 'assets/pp.jpeg',
    resumeFile: 'assets/resume.pdf',
    resumeFileName: 'YourName_Resume.pdf',
  },
  contact: {
    email: 'you@example.com',
    phone: '+1 234 567 890',
    address: 'City, Country',
    website: 'https://yoursite.com',
    linkedin: 'https://linkedin.com/in/yourhandle',
    github: 'https://github.com/yourhandle',
    twitter: 'https://x.com/yourhandle',
  },
  summary: 'Your professional bio...',
  skills: [ /* your skill categories */ ],
  experience: { jobs: [ /* your jobs */ ], training: [ /* optional */ ] },
  education: [ /* your degrees */ ],
  projects: [ /* your projects */ ],
  certifications: [ /* your certs */ ],
  contentCreation: { /* optional */ },
};
```

Then replace these two asset files:
- `src/assets/pp.jpeg` — your profile photo (100×100px recommended)
- `src/assets/Muhammad_Waseem_Resume.pdf` — your resume PDF  
  (also update `resumeFile` and `resumeFileName` in the config)

## Features

- Responsive layout: fixed sidebar on desktop, horizontal scrollable nav on mobile
- Scroll-spy navigation — active section highlighted automatically
- CV download button
- Server-side rendering (SSR) for SEO
- 8 portfolio sections: Headline, Summary, Skills, Employment, Education, Projects, Content Creation, Certifications
- Fade-in animations and hover effects

## Tech Stack

| Package | Version | Purpose |
|---------|---------|---------|
| Angular | 17.3 | Framework |
| ng-bootstrap | 16 | UI components |
| Bootstrap | 5.3 | Grid & utilities |
| bootstrap-icons | 1.11 | Icons |
| Express | 4.18 | SSR server |

## Deployment

**Static hosting** (Vercel, Netlify, GitHub Pages):
```bash
npm run build
# Deploy dist/resume/browser/
```

**Node.js SSR**:
```bash
npm run build && node dist/resume/server/server.mjs
```

## Project Structure

```
src/
├── app/
│   ├── portfolio.config.ts     ← Edit this file
│   ├── app.component.ts/html   ← Sidebar + layout
│   └── features/
│       ├── headline/
│       ├── profile-summary/
│       ├── skills/
│       ├── employment/
│       ├── education/
│       ├── project/
│       ├── content-creator/
│       └── certification/
└── assets/
    ├── pp.jpeg                 ← Your photo
    └── Muhammad_Waseem_Resume.pdf  ← Your CV
```
