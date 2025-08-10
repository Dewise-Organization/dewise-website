## Dewise Foundation Website

A fast, accessible, and maintainable static website for the Dewise Foundation built with Next.js (App Router), TypeScript, and Tailwind CSS.

### Stack
- Next.js (SSG with `output: 'export'`)
- TypeScript
- Tailwind CSS
- MDX for Blog/News (content in `content/`)
- Decap CMS (GitHub backend)

### Getting Started
1) Install dependencies:
```
npm install
```
2) Start the dev server (images auto-synced; MDX auto-loaded):
```
npm run dev
```
3) Open http://localhost:3000

### Building & Static Export
```
npm run build
npm run export
```
Static files are generated in the `out/` directory. You can preview locally:
```
npm run serve
```

### Content Editing (MDX + Decap CMS)
- Blog posts: `content/blog/*.mdx`
- News posts: `content/news/*.mdx`
- CMS access: navigate to `/admin/` after deploying; configure `static/admin/config.yml` with your repo.

### Image Management
- Place organization photos in the repository `pictures/` folder.
- A script copies and updates them into `public/images/` at dev/build time.

### Deployment (Free)
- GitHub Pages (recommended):
  - Option A: Push the `out/` directory to a `gh-pages` branch and enable Pages.
  - Option B: Use the included GitHub Actions workflow `.github/workflows/deploy.yml` for automatic deploys on push to `main`.
- Vercel: Import this repo in Vercel and deploy. No extra config needed.

If using GitHub Pages for a project site (subpath), set `basePath` and `assetPrefix` in `next.config.mjs` accordingly. For an org/user site (root), the current config works as-is.

### Content Editing
- Initial content is defined in `lib/siteData.ts` and React pages.
- Future-friendly: can be migrated to MDX or a headless CMS with minimal changes.

### License
MIT


# dewise-website
