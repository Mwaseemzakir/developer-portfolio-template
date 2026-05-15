# Contributing

## Adding a New Framework Template

Each framework template lives in `templates/<framework-name>/`. The goal is to deliver the **same portfolio sections and visual design** in every framework, with a single config file as the user-facing API.

### Requirements for a new template

1. **Single config file** at a predictable path (e.g., `src/config/portfolio.config.ts`)
2. **All eight sections** — Headline, ProfileSummary, Skills, Employment, Education, Projects, ContentCreator, Certifications
3. **Responsive layout** — fixed sidebar on desktop, horizontal scrollable nav on mobile
4. **CV download** button in the sidebar
5. **Scroll-spy navigation** — active nav item tracks the visible section
6. **SSR or static generation** — for SEO
7. **Own README** at `templates/<name>/README.md` with setup instructions

### Config file contract

The config object must cover all fields defined in [`shared/portfolio.schema.json`](./shared/portfolio.schema.json). Use [`shared/portfolio.config.example.ts`](./shared/portfolio.config.example.ts) as the reference implementation.

### Steps

1. Fork the repo and create a branch: `feature/add-<framework>-template`
2. Create `templates/<framework>/` with a working project
3. Implement all eight sections reading from a single config file
4. Add a `templates/<framework>/README.md`
5. Update the table in the root `README.md`
6. Open a pull request — include screenshots of desktop and mobile views

### Code style

- TypeScript everywhere
- No inline credentials or personal data in the template — use placeholder values
- The placeholder profile image is `public/pp.jpeg` (or `assets/pp.jpeg` for Angular)
- The placeholder resume is `public/resume.pdf` (or `assets/Muhammad_Waseem_Resume.pdf` for Angular)

### Design tokens

| Token | Value | Usage |
|-------|-------|-------|
| Sidebar bg | `#0f172a → #1e293b` | Sidebar gradient |
| Accent | `#2563eb` | Active nav, badges, skill tags |
| Accent hover | `#1d4ed8` | Hover states |
| Main bg | `#f1f5f9` | Page background |
| Card bg | `#ffffff` | Section cards |
| Border | `#e2e8f0` | Card and input borders |
| Text primary | `#0f172a` | Headings |
| Text secondary | `#475569` | Body copy |
| Text muted | `#94a3b8` | Labels, metadata |
| Font heading | Playfair Display | `font-family: 'Playfair Display', serif` |
| Font body | Inter | `font-family: 'Inter', sans-serif` |
