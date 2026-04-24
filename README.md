# evverywhere

Cape Town creative agency website. Next.js 14 + TypeScript + Tailwind + Three.js (R3F) + GSAP.

## Stack

- **Framework:** Next.js 14 (App Router) + React 18 + TypeScript
- **Styling:** Tailwind CSS, OKLCH design tokens, Utopia fluid type scale
- **Type:** `next/font` — Cormorant Garamond (display serif) + Inter Tight (sans) + JetBrains Mono
- **Animation:** GSAP + ScrollTrigger (narrative pin), Lenis (smooth scroll)
- **3D:** Three.js via React Three Fiber + custom GLSL starfield & nebula shaders
- **SEO:** Metadata API, JSON-LD (Organization, LocalBusiness, Service, WebSite, BreadcrumbList), sitemap, robots, dynamic OG image
- **A11y:** WCAG 2.2 AA, semantic landmarks, focus-visible rings, skip link, `prefers-reduced-motion`

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build      # production build
npm run start      # serve production build
npm run typecheck  # tsc --noEmit
npm run lint
```

## Environment

Optional. Defaults work out of the box.

```bash
cp .env.example .env.local
```

| Var | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://evverywhere.com` | Used for canonical URLs, sitemap, JSON-LD, OG |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | `https://formsubmit.co/ajax/hello@evverywhere.com` | Contact form POST target |

> Formsubmit requires a one-time confirmation email on first submission.

## Deploy to Vercel

**One-click:** [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FsantTheMan%2FGemini&project-name=evverywhere&repository-name=evverywhere)

Or manually:

1. <https://vercel.com/new> → **Import Git Repository** → pick `santTheMan/Gemini`.
2. **Branch** → `claude/install-dev-tools-ITKYo` (or set as default after merge).
3. Framework preset auto-detects as **Next.js**. No build config changes needed.
4. (Optional) Set `NEXT_PUBLIC_SITE_URL` to your production domain (e.g. `https://evverywhere.com`).
5. **Deploy** (≈90 seconds).

Vercel auto-provisions the Edge Network, AVIF/WebP image optimisation, and the `/sitemap.xml` + `/robots.txt` routes. Region pinning (`cpt1`, `fra1`) is set in `vercel.json` for South African latency.

## Project structure

```
app/
  layout.tsx           # Root layout, metadata, JSON-LD, fonts
  page.tsx             # Single-page composition
  globals.css          # Tailwind + base styles
  sitemap.ts           # /sitemap.xml
  robots.ts            # /robots.txt
  icon.tsx             # Favicon (dynamic)
  opengraph-image.tsx  # /opengraph-image (1200x630)
components/
  nav.tsx footer.tsx hero.tsx reveal.tsx smooth-scroll.tsx json-ld.tsx
  cosmos/
    scene.tsx          # R3F <Canvas> + camera rig
    starfield.tsx      # Instanced points + GLSL shader
    nebula.tsx         # Volumetric drift via fbm noise shader
  sections/
    origin.tsx eras.tsx now.tsx pull-quote.tsx strip.tsx next-cta.tsx
hooks/
  use-reduced-motion.ts
lib/
  fonts.ts site.ts utils.ts
```

## Narrative

The site reads as a journey: **Hero (cosmos) → Origin → Now (services) → Eras (work) → Next (contact)**. The hero pins for ~3.2 viewports while GSAP ScrollTrigger drives the Three.js camera forward through the starfield and rotates the HUD copy through five chapters.

## SEO targets

Metadata, structured data, and semantic HTML are wired for **Lighthouse SEO 100**. Verify on the Vercel preview — Lighthouse scores measured on the deployed build, not in dev.

## License

© 2025 evverywhere. All rights reserved.
