# Developer Portfolio Template

A professional, fully-featured developer portfolio/CV template available in multiple framework flavors. Pick the technology you already know and ship your portfolio in minutes.

## Available Templates

| Framework | Directory | Stack | Status |
|-----------|-----------|-------|--------|
| **Angular** | [`templates/angular`](./templates/angular) | Angular 17, Bootstrap, SSR | ✅ Ready |
| **Next.js** | [`templates/nextjs`](./templates/nextjs) | Next.js 14, Tailwind CSS, App Router | ✅ Ready |
| Astro | `templates/astro` | Coming soon | 🔜 Planned |
| Vue / Nuxt | `templates/nuxt` | Coming soon | 🔜 Planned |
| SvelteKit | `templates/sveltekit` | Coming soon | 🔜 Planned |

## What's Inside

Every template ships with the same full-featured portfolio layout:

- **Headline** — Name, title, tagline, and contact links (email, location, website, LinkedIn, GitHub, X)
- **Profile Summary** — Professional bio paragraph
- **Skills** — Categorized skill badges
- **Employment** — Timeline with companies, roles, durations, and tech stacks
- **Education** — Degree, institution, grades, and coursework
- **Projects** — Portfolio projects with company, year, and technologies
- **Content Creation** — Blog/YouTube/newsletter platforms
- **Certifications** — Credential cards with issuers and dates
- **Responsive Design** — Fixed sidebar on desktop, scrollable top-nav on mobile
- **CV Download** — One-click resume PDF download
- **SEO** — Server-side rendering / static generation ready

## How to Customize

Every template uses a **single configuration file** — the only file you need to edit:

```
templates/angular/src/app/portfolio.config.ts
templates/nextjs/src/config/portfolio.config.ts
```

Open that file, replace the data with your own information, swap `public/pp.jpeg` for your photo and `public/resume.pdf` for your CV, then deploy.

## Quick Start

### Angular

```bash
cd templates/angular
npm install
npm start          # http://localhost:4200
npm run build      # production build
```

### Next.js

```bash
cd templates/nextjs
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve production build
```

## Folder Structure

```
developer-portfolio-template/
├── README.md                    # You are here
├── CONTRIBUTING.md              # How to add a new framework template
├── shared/
│   ├── portfolio.schema.json    # JSON Schema — the contract every template implements
│   └── portfolio.config.example.ts  # Fully annotated TypeScript config example
└── templates/
    ├── angular/                 # Angular 17 + Bootstrap template
    └── nextjs/                  # Next.js 14 + Tailwind CSS template
```

## Design

All templates share the same visual identity:

- **Dark sidebar** (`#0f172a → #1e293b` gradient) with white navigation
- **Light main area** (`#f1f5f9`) with white section cards
- **Accent color** `#2563eb` (blue-600) for active states, badges, and skill tags
- **Typography**: Playfair Display (headings) + Inter (body)
- **3px accent stripe** at the top of each section card

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for how to add a new framework version.

## License

MIT — use freely for personal or commercial portfolios.
