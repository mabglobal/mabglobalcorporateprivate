# Maintenance

Run `npm run verify` after every change. The tests catch most inconsistencies: missing pages, orphaned routes, broken internal links, missing FAQs, duplicate metadata and copy rule violations.

## Add a service

1. Add the slug to `ServiceSlug` in `src/types/content.ts`.
2. Add the entry to `src/content/services.ts` with `status: "review"` and fill every field. Write content unique to the service.
3. Create `src/app/services/<slug>/page.tsx` by copying an existing service page and changing the slug.
4. Add any new FAQs to `src/content/faqs.ts` and reference them in `faqIds`.
5. Record the source of each claim in `docs/content-verification.md`, then set `status: "published"`.

Navigation, footer, sitemap, contact form options, llms.txt and llms-full.txt update automatically. Set `featured: true` to show it in the homepage grid (the grid is designed for six cards).

## Add a sector

Same steps with `SectorSlug`, `src/content/sectors.ts` and `src/app/industries/<slug>/page.tsx`.

## Add an article

1. Create `src/content/articles/<slug>.ts` exporting an `Article`.
2. Import it in `src/content/articles/index.ts` and add it to `allArticles`.
3. Cite official sources with access dates, link related service pages, and set `reviewBy` (six months is the default).

No route file is needed. Unknown slugs return 404 through `src/proxy.ts`, which reads the same registry.

## Add an FAQ

Add an entry to `src/content/faqs.ts` and reference its id from a service, a sector or `homepageFaqIds`. Answers must be accurate, qualified where requirements vary, and follow the copy rules.

## Add a navigation item

Edit `src/content/navigation.ts`. Links must point to a page in the sitemap; the route test fails otherwise.

## Add a testimonial

Only with written approval from the customer. Add it to `src/content/testimonials.ts` with `approval.approvedAt` and `approval.reference`, then set `status: "published"`. The homepage section appears automatically.

## Change contact details

Edit `src/config/contact.ts` only. Footer, contact page, structured data, legal texts and llms files read from it.

## Change brand colors

Edit `src/styles/tokens.css` and `src/config/brand.ts` together; the unit test fails if they differ. Recheck text contrast for any changed pair.

## Content review cycle

* Articles: re-check against their sources before `reviewBy`, then update `updatedAt` and `reviewBy`.
* Services and sectors: review every six months or when a regulation changes (for example Companies House identity verification or IRS reporting rules).
* AI crawler table in `llm-discoverability.md`: review every six months.

## Dependency updates

Pin new versions that are at least two weeks old. Update the lockfile with npm 11.19 or newer (`npx npm@11.19.0 install`), the version used by CI. Older npm releases on macOS omit Linux-only optional packages (`@emnapi/*`), which makes `npm ci` fail in CI. After `npm update`, run `npm run verify` and `npm run test:e2e`. `npm audit` currently reports advisories in ESLint tooling only (`braces` via `eslint-config-next`); they do not reach the production bundle, and the suggested `--force` fix would downgrade the Next.js lint config.
