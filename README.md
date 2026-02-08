# Tastemaker Site

Public website for [Tastemaker](https://trytastemaker.com), serving legal documents and landing pages.

## Tech Stack

[Eleventy](https://www.11ty.dev/) v3 static site generator with Nunjucks templates.

## Getting Started

```bash
npm install
npm start       # Dev server at localhost:8080
```

To build for production:

```bash
npm run build   # Output to _site/
```

## Project Structure

```
src/
├── _includes/
│   └── layout.njk    # Base HTML template
├── index.md           # Landing page
├── privacy.md         # Privacy Policy → /privacy/
└── terms.md           # Terms of Service → /terms/
```

Add a page by creating `src/page-name.md` with `layout: layout.njk` frontmatter.

## Deployment

Cloudflare Pages auto-deploys on push to `main`. Custom domain: `trytastemaker.com`.
