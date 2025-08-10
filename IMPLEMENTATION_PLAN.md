## Dewise Foundation Website — Implementation Plan

### Goals
- Build a beautiful, fast, accessible, low-maintenance website for Dewise Foundation.
- Keep hosting 100% free and reliable (24/7) with simple workflows for updates.
- Design a repo structure that is clean, extensible, and easy for new contributors.
- Optimize for platform elasticity: responsive across devices, low bandwidth modes, and offline-first behaviors where possible.

### Architecture Decisions
- Framework: Next.js (App Router) with TypeScript and Tailwind CSS.
  - Reason: First-class static export support, excellent DX, easy future growth to serverless if needed, and strong ecosystem.
- Rendering: Static Site Generation (SSG) with `next export` for GitHub Pages. Also compatible with Vercel/Netlify.
- Assets: Images synced from repository `pictures/` to `public/images/` at build/dev via a simple Node script (`scripts/sync-images.js`).
- Content Strategy:
  - Core site content kept in `lib/siteData.ts`.
  - Editorial content (Blog/News) stored as MDX in `content/blog` and `content/news` using frontmatter.
  - CMS via Decap (GitHub backend) for editing MDX and managing media, with an `/admin/` route.
- Forms: Use external providers to keep backend cost-free (Formspree/Netlify Forms). Links and basic mailto fallback included.
- Donations: Outbound to payment provider (e.g., PayPal/Stripe) to avoid maintaining a backend.
 - i18n: Lightweight EN/FR client toggle initially; later upgrade to route-based i18n with dictionaries.

### Repository Structure
```
dewise/
  app/                # Next.js app router pages
    blog/             # MDX blog index and dynamic routes
    news/             # MDX news index and dynamic routes
  components/         # Reusable UI components
  lib/                # Typed content and helpers
    content.ts        # MDX file readers and metadata
  public/
    images/           # Populated by sync script from /pictures
    admin/            # Decap CMS UI (index.html + config.yml)
    .nojekyll         # Ensures GitHub Pages serves _next assets
  scripts/            # Build utilities (e.g., sync-images)
  styles/             # Global CSS (Tailwind)
  content/            # MDX content (blog/news)
  pictures/           # Source images provided by the organization (already present)
  IMPLEMENTATION_PLAN.md
  README.md
  next.config.mjs
  package.json
  postcss.config.js
  tailwind.config.ts
  tsconfig.json
```

### Pages and IA
- Home: Mission, hero, featured programs, quick donate, partner logos, and recent photos gallery.
- About: Story, mission, values, founders, and impact summary.
- Programs: Overview + detail pages for Community Engagement, Youth Empowerment, Climate Change, Clean Energy.
- Projects: WiseCool, WiseBox, Solar Bright Minds (individual pages, outcomes, and media).
- Blog: MDX-based posts under `content/blog` with frontmatter (title, date, summary, tags).
- News: MDX-based news items under `content/news` with frontmatter.
- Impact: Key metrics, testimonials, and gallery.
- Partners: Logos/list and partnership call-to-action.
- Team: Leadership and core team (from `context.md`).
- News: Optional section for future posts/press.
- Donate: External link(s) to donation provider; transparent usage statement.
- Contact: Email, social links, location, and a lightweight form provider option.

### Styling & UX
- Tailwind CSS with a lightweight, modern, accessible design.
- Dark-on-light, high contrast, large tap targets, and focus-visible outlines.
- Image lazy-loading and responsive `srcset` where appropriate.
- Mobile-first breakpoints and content prioritization.

### Performance & Accessibility
- Static export, optimized metadata, OG tags, and semantic HTML.
- Avoid heavy JavaScript on content pages.
- Alt text for images; ARIA labels in navigation.
 - Add `.nojekyll` so GitHub Pages serves Next.js `_next` assets correctly.

### Deployment Options (All Free)
- GitHub Pages (recommended for zero-cost static hosting). Use `next export` → `out/` → GitHub Pages.
- Vercel (free tier, automatic builds on push, custom domain support). No server functions needed.
- Netlify (free tier) as an alternative.

Steps (GitHub Pages with Actions):
1) Create a GitHub repository (personal or an org like `Dewise`).
2) Push this repo to GitHub.
3) Ensure Actions are enabled and Pages source is set to “GitHub Actions”.
4) The included workflow builds and publishes from `out/` on push to `main`.
5) Visit the Pages URL provided under the repo → Settings → Pages.

### Future Growth
- Add MDX/Contentlayer for editorial content.
- Integrate a free headless CMS (e.g., Decap CMS via GitHub) if non-technical editors need browser-based editing.
- Add i18n for French/English.
- Add analytics (privacy-first, free options: Plausible self-hosted or Umami on free-tier hosts) or Vercel Analytics.

### Analytics Options (Free)
- Google Analytics (simple, free): add tracking script to `app/layout.tsx`.
- Cloudflare Web Analytics (free, privacy-friendly) if using Cloudflare DNS.
- Umami or Plausible (self-host on a free tier VM or deploy to Render/Fly.io free tier).

### Zero-Cost Full-Stack Roadmap (Optional)
- Auth & DB: Supabase (Generous free tier) or Firebase.
- Admin Portal: Protect `/admin-portal` route with Supabase auth; role-based access.
- LMS: Start with MDX-based courses; store videos on YouTube/Drive/Cloudinary free tiers, or adopt an open-source LMS later.
- User Content: Gate features behind auth; store content metadata in Supabase; keep heavy media on object storage.


### Milestones
1) Scaffold project + repo structure.
2) Build core pages with content from `context.md`.
3) Wire gallery to auto-detect images from `public/images`.
4) Verify responsiveness and a11y manually.
5) Build and export statically; document deployment steps in `README.md`.
6) Optional: Add GitHub Actions workflow for Pages deployment.

### Testing
- Smoke E2E: Verify navigation, core content presence, and image gallery renders.
- Manual responsive checks on mobile/desktop.

 