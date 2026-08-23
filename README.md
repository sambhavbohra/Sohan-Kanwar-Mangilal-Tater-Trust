# Sohan Kanwar Mangilal Tater Charitable Trust

A freelancing project built for the Sohan Kanwar Mangilal Tater Charitable Trust — a single-page public website presenting the trust's work, impact metrics, founders, gallery, partners, and donation/contact details.

## Sections

- **Hero** — mission statement and trust emblem
- **Impact at a Glance** — animated stat counters (scholarships, beneficiaries, camps, etc.)
- **Founders** — the trust's founding members
- **Our Work** — programmes by category (Education, Healthcare, Community, Animal Welfare)
- **Deep Dive** — timeline of the trust's history + an interactive India map showing city/state reach (hover to zoom, click to pin)
- **About / Values / Partners** — mission, core values, and partner organisation logos
- **Gallery** — filterable photo gallery from the field (All, Education, Healthcare, Community, Animal Welfare)
- **Donate** — donation details
- **Contact** — contact information

## Tech Stack

- React 19
- TanStack Start / TanStack Router (file-based routing, SSR via Nitro)
- Vite 7 + TypeScript
- Tailwind CSS v4
- Framer Motion (animations, gallery/map transitions)
- Radix UI + shadcn-style `components/ui` primitives
- Lucide React (icons)
- Recharts

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server (http://localhost:5173):

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview a production build:

```bash
npm run start
```

Lint:

```bash
npm run lint
```

## Project Structure

```
src/
  routes/           file-based routes (index.tsx is "/", __root.tsx is the app shell)
  components/       page-level components (India map, magnetic cursor)
  components/site/  shared UI (Navbar, Reveal, Counter)
  components/ui/    Radix/shadcn primitives
  assets/           images and logos used across the site
  styles.css        Tailwind theme + design tokens
```

Routing follows TanStack Start's file-based conventions — see `src/routes/README.md`. `src/routeTree.gen.ts` is auto-generated; don't edit it by hand.

## Deployment

Configured for Vercel via the Nitro `vercel` preset in `vite.config.ts`. Pushing to the connected branch triggers a deploy; no additional environment variables are required.

## Notes

Production-ready gallery/logo assets live in `src/assets`. The local folders `assets to update/` and `attached_assets/` are intentionally gitignored and should not be committed.
