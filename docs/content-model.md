# Content model

All public content lives in typed modules under `src/content`. Types are defined in `src/types/content.ts`. TypeScript checks the shape at build time and unit tests check the relationships.

## Registries

| Module | Type | Rendered at |
|---|---|---|
| `services.ts` | `Service[]` | `/hizmetler`, `/hizmetler/<slug>`, homepage grid (`featured`) |
| `sectors.ts` | `Sector[]` | `/sektorler`, `/sektorler/<slug>`, homepage grid |
| `faqs.ts` | `FaqItem[]` | Referenced by id from services, sectors and the homepage |
| `articles/*.ts` | `Article` | `/bilgi-merkezi`, `/bilgi-merkezi/<slug>` |
| `pages.ts` | `StaticPage` | Titles, descriptions and dates of fixed pages |
| `home.ts`, `about.ts` | objects | Homepage and Hakkımızda copy |
| `legal.ts` | `LegalDocument` | Legal pages (title and date come from `pages.ts`) |
| `navigation.ts` | `NavItem[]` | Header, mobile menu, footer |
| `testimonials.ts` | `Testimonial[]` | Homepage section, hidden while empty |

Shared business facts (name, URL, email, address, maps link, founder) live in `src/config/site.ts` and `src/config/contact.ts`.

## Publication status

Every service, sector, FAQ, article and testimonial has `status: "published" | "review" | "draft"`. Each registry exports only published entries, so drafts are never rendered, linked, listed in the sitemap or included in llms.txt. Set `status: "review"` while a fact awaits confirmation.

## Service fields

`slug`, `title`, `shortTitle`, `icon`, `jurisdiction`, `summary` (card text), `definition` (one-sentence factual definition used at the top of the page and in llms-full.txt), `intro[]`, `audience[]`, `scope[]`, `process[]`, `documents[]` (optional), `considerations[]`, `relatedServices[]`, `relatedSectors[]`, `faqIds[]`, `externalReference` (optional verified sister brand), `featured`, `seo { title, description }`, `status`, `updatedAt`.

## Sector fields

`slug`, `title`, `shortTitle`, `icon`, `summary`, `intro[]`, `examples[]`, `needs[]`, `services[]`, `considerations[]`, `faqIds[]`, `seo`, `status`, `updatedAt`.

## Article fields

`slug`, `title`, `summary`, `category`, `author` (organizational attribution until a verified person is approved), `publishedAt`, `updatedAt`, `reviewBy`, `sections[]`, `sources[]` (title, publisher, URL, access date), `relatedLinks[]`, `seo`, `status`.

Rules enforced by tests: at least one HTTPS source, related links resolve to published pages, `reviewBy` later than `updatedAt`.

## Dates

`updatedAt` is the date of the last real content change. It feeds `lastModified` in the sitemap and `dateModified` in structured data. Do not bump it for code-only changes.

## Turkish copy rules

Public text must be natural, formal Turkish and must not contain the word "değil", "ötesinde", "ayrıca", the phrase "sonuç olarak", colons, em dashes or en dashes. Two checks enforce this:

* `tests/unit/copy-rules.test.ts` scans every content module, form message and option label.
* `tests/e2e/pages.spec.ts` scans the rendered text of every page in the sitemap.

Exemptions: the official office address (kept verbatim for consistency with the Google Maps listing, it contains "No: 7"), English titles of cited official sources, and `llms.txt`, whose link format uses a colon by specification.

## Claims policy

Only publish facts that are verified in `docs/content-verification.md`. No invented statistics, testimonials, logos, credentials, founding dates, offices, phone numbers or guarantees about timelines, approvals or tax outcomes.
