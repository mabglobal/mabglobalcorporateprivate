# MAB Global Partners website

Turkish-language corporate website for MAB Global Partners: international company formation, tax, accounting and registered agent services for the United States and the United Kingdom.

Built with Next.js 16 (App Router, Cache Components), React 19, TypeScript, Tailwind CSS 4 and Google Sans Flex. All pages are prerendered; the contact API is the only request-time route.

## Getting started

```bash
npm install
cp .env.example .env.local   # optional, see docs/deployment.md
npm run dev                  # http://localhost:3000
```

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (Next.js core web vitals and TypeScript rules) |
| `npm run typecheck` | Generate route types and run `tsc --noEmit` |
| `npm run test` | Vitest unit and integration tests |
| `npm run test:e2e` | Playwright end-to-end tests (builds and starts the site on port 4400; run `npx playwright install chromium` once) |
| `npm run verify` | Lint, typecheck, tests and build |

GitHub Actions (`.github/workflows/ci.yml`) runs `npm run verify` and the end-to-end suite on every push to `main` and on pull requests.

To preview production behavior locally (indexable metadata, full sitemap), build and start with `SITE_ENV=production`.

## What is where

* Content: `src/content` (services, sectors, FAQs, articles, pages, legal)
* Business facts and policies: `src/config`
* Templates and sections: `src/components`
* SEO, structured data, llms files, contact pipeline: `src/lib`

## Documentation

* [Architecture](docs/architecture.md): stack, folders, routing, rendering, design system, security, measured performance
* [Content model](docs/content-model.md): registries, publication status, copy rules
* [SEO strategy](docs/seo-strategy.md): canonical host, metadata, sitemap, robots, structured data, linking
* [LLM discoverability](docs/llm-discoverability.md): llms.txt, llms-full.txt, AI crawler policy
* [Deployment](docs/deployment.md): environment variables, contact form integration, domain decision, launch checklist
* [Maintenance](docs/maintenance.md): adding services, sectors, articles, FAQs and navigation items
* [Content verification](docs/content-verification.md): sources for published facts and items pending confirmation

## Outstanding before launch

1. Provision Resend and set the contact email variables (the form reports "not configured" until then).
2. Decide the domain: `www.mabglobalpartners.com` currently serves the partner portal.
3. Confirm the pending items in `docs/content-verification.md` and have the legal texts reviewed.
