# Ye Rin Kim — personal academic website

Source for [pimang62.github.io/yerin-kim](https://pimang62.github.io/yerin-kim/).
Built with [Astro](https://astro.build/) and deployed to GitHub Pages via GitHub Actions.

## Editing content

Almost everything lives in two data files — no need to touch the page templates:

- **`src/data/profile.js`** — name, tagline, bio, research overview, news,
  education, experience, and (optional) awards / services / teaching.
- **`src/data/publications.js`** — publications. Set `selected: true` to
  feature a paper on the home page; `category` is `"preprint"` or `"conference"`.

Profile photo and favicon live in `public/` (`img/profile.png`, `favicon.svg`).

## Pages

- `/` — home: Research Overview, News, Selected Publications, Get in Touch
- `/publications/` — full publication list, grouped by type
- `/cv/` — CV (research interests, education, experience)

Site structure: `src/pages/*.astro` (pages), `src/layouts/Base.astro`
(shared shell + nav + footer), `src/styles/global.css` (all styling).

## Develop locally

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

Requires Node 18+.

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds
the project with [`withastro/action`](https://github.com/withastro/action)
and publishes to GitHub Pages. The site is served under the `/yerin-kim`
base path (set via `base` in `astro.config.mjs`).

## Credits

Design adapted from [YangYongJin.github.io](https://github.com/YangYongJin/YangYongJin.github.io).
