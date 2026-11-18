# firaskudsy.github.io

Personal site of Firas Kudsy, built with [Astro](https://astro.build). Static HTML, plain CSS, a few lines of vanilla JS (theme toggle, notes filter, phone menu).

## Run it

Needs Node 22.23 or newer.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check + build to dist/
npm run preview   # serve dist/ locally
```

## Add a note

Create one Markdown file in `src/content/notes/`. The file name becomes the URL: `my-idea.md` → `/notes/my-idea/`.

```md
---
title: "My idea"
description: "One sentence shown in the notes list, RSS and link previews."
pubDate: 2026-12-01
topic: Agents        # Agents | Evals | RAG | Security | Engineering | Science
tags: [agents, memory]
source:              # optional "Based on" card
  title: "Article title"
  url: https://example.com/article
  publisher: Publisher name
  date: 2026-11-20
linkedin: ""         # paste the LinkedIn post URL after posting
draft: false         # true = only visible in `npm run dev`
---
the note text, written however you like..
```

Use `.mdx` instead of `.md` if the note needs a component (see `more-memory-is-not-better-memory.mdx`, which uses `StatRow`).

The site calls these "articles". The home page features the 5 newest; `/notes/` shows all of them, newest first. New articles appear in `/rss.xml` and the sitemap automatically.

## Edit the home page

All home page text and data (hero, skills, background, contact) is in `src/data/site.ts`.

- **Comments:** fill in `src/data/giscus.ts` (values from <https://giscus.app>). Until then the comments section stays hidden.
- **Link preview image:** `public/og.png`, generated from `scripts/og.html` (instructions in that file).

## Deploy

Pushing to `gh-pages` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. You can also run it by hand from the repo's **Actions** tab.

One-time setup: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.

Custom domain later: add `public/CNAME` containing the domain (e.g. `firaskudsy.com`), set the domain in Settings → Pages, and change `site` in `astro.config.mjs`.

## Notes on the old site

`public/service-worker.js` is a kill-switch: the old Create React App site registered a service worker at that path, and this version clears its caches and unregisters it for returning visitors. The new site doesn't use a service worker.
