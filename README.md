# literate-sniffle

A simple personal website for spartacus300, hosted with Cloudflare Pages.

## Files

- `index.html` — main website
- `style.css` — website styling
- `script.js` — theme toggle and animations
- `404.html` — not-found page
- `_headers` — Cloudflare Pages security headers
- `_redirects` — optional Cloudflare redirects

## How to edit

Open `index.html` and replace:

- `Person Name`
- profile text
- about text
- project cards
- social links
- contact email

Open `style.css` to change colors, spacing, layout, and design.

## Cloudflare Pages

Use these settings:

- Framework preset: `None`
- Build command: leave empty
- Build output directory: `/`

Make sure `index.html` is in the root of the repository.

## Git commands

```bash
git add .
git commit -m "Add website starter"
git push