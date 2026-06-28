# Plain HTML Portfolio Template

A zero-build version of the portfolio — vanilla HTML, CSS, and JavaScript. No
framework, no bundler, no `npm install`.

## Customize

Edit the single config file [`config.js`](./config.js) — replace the data with
your own, swap the `profileImage` URL for your photo, and drop in your own
`resume.pdf`. That's it.

## Run locally

Just open `index.html` in a browser, or serve the folder with any static server:

```bash
npx serve .        # http://localhost:3000
# or
python -m http.server
```

## Deploy

Copy the folder to any static host (GitHub Pages, Netlify, S3, …). All asset
paths are relative, so it works from any sub-path without configuration.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page shell |
| `config.js` | **Your data** — the only file you need to edit |
| `app.js` | Renders the config into the page |
| `styles.css` | Shared design system |
| `resume.pdf` | Your downloadable CV |
