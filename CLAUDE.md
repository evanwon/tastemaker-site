# Tastemaker Site

Public website for Tastemaker, hosted at `trytastemaker.com` via Cloudflare Pages.

Currently serves legal documents (privacy policy, terms of service) required for Google Play submission. May expand to marketing/landing pages.

## Related Repo

The main app repo is `evanwon/tastemaker` (private). This site is intentionally separate and public so legal document URLs are accessible without authentication.

## Tech Stack

[11ty (Eleventy)](https://www.11ty.dev/) v3 static site generator with Nunjucks templates.

## Commands

- `npm start` - Dev server at `localhost:8080`
- `npm run build` - Build to `_site/`

## Project Structure

```
src/
├── _includes/
│   └── layout.njk    # Base HTML template (inline CSS, Tastemaker-branded)
├── index.md           # Landing page
├── privacy.md         # Privacy Policy → /privacy/
└── terms.md           # Terms of Service → /terms/
```

## Adding a Page

1. Create `src/page-name.md` with frontmatter:
   ```yaml
   ---
   title: Page Title
   layout: layout.njk
   permalink: /page-name/
   ---
   ```
2. Write content in Markdown below the frontmatter
3. The layout template wraps it with header, footer, and branded styling

## Brand Colors (from main app's design-tokens.ts)

These are hardcoded in `layout.njk` inline CSS:

| Token           | Value     | Usage                    |
| --------------- | --------- | ------------------------ |
| background      | `#FDF8F4` | Page background          |
| foreground      | `#171717` | Body text                |
| mutedForeground | `#8A8078` | Secondary text, footer   |
| primary         | `#3A7CA5` | Links                    |
| secondary       | `#C96F28` | Header logo/accent       |
| border          | `#F0EBE5` | Header/footer separators |

If brand colors change in the main app, update these values in `layout.njk` to match.

## Deployment

Cloudflare Pages auto-deploys on push to `main`. Build settings:
- Build command: `npm run build`
- Output directory: `_site`
- Custom domain: `trytastemaker.com`

No manual deploy steps needed — just push.
