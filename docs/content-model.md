# Content model

All public content lives in typed modules under `src/content`. Types are defined in `src/types/content.ts`. TypeScript checks the shape at build time and unit tests check the relationships.

## Registries

| Module | Type | Rendered at |
|---|---|---|
| `services.ts` | `Service[]` | `/services`, `/services/<slug>`, homepage grid (`featured`) |
| `sectors.ts` | `Sector[]` | `/industries`, `/industries/<slug>`, homepage grid |
| `faqs.ts` | `FaqItem[]` | Referenced by id from services, sectors and the homepage |
| `articles/*.ts` | `Article` | `/insights`, `/insights/<slug>` |
| `pages.ts` | `StaticPage` | Titles, descriptions and dates of fixed pages |
| `home.ts`, `about.ts` | objects | Homepage and Hakkımızda copy |
| `legal.ts` | `LegalDocument` | Legal pages (title and date come from `pages.ts`) |
| `navigation.ts` | `NavItem[]` | Header, mobile menu, footer |
| `testimonials.ts` | `Testimonial[]` | Homepage section, hidden while empty |

Shared business facts (name, URL, email, address, maps link) live in `src/config/site.ts` and `src/config/contact.ts`.

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

## Copy rules

Public text is natural, formal English. The client's rules (2026-10-12) carry the earlier Turkish rules over to English and add three new ones:

* Address the reader in the imperative ("Form your company", "Book a Consultation") and state facts in the simple present ("covers", "depends"). Avoid the progressive tense ("we are handling").
* Avoid the words "not" and "n't", "beyond", "also", "additionally", "moreover", "furthermore", and the phrases "in conclusion" and "as a result". Do not use colons, em dashes or en dashes.
* Headings, labels, tags, buttons and chips use Title Case (APA style: minor words such as "a", "and", "in", "the" stay lowercase after the first word; each part of a hyphenated compound is capitalized, as in "Year-End").
* Headings, labels and one-line descriptions carry no commas. Long paragraphs may use a comma where a list needs one; prefer "and" or "along with".
* Descriptions under headings and inside cards fit on one line on desktop widths of 1440 px and wider. Shorten the copy when a line wraps.
* Use no gendered pronouns for people whose pronouns are unconfirmed; repeat the name instead.

Checks:

* `tests/unit/copy-rules.test.ts` scans every content module, form message and option label for the word, tense, punctuation, comma and Title Case rules.
* `tests/e2e/pages.spec.ts` scans the rendered text of every page in the sitemap, checks every visible heading for Title Case and commas, and verifies that every element marked `data-single-line` renders on one line at 1440 px.

Exemptions: the official office address (kept verbatim for consistency with the Google Maps listing, it contains "No: 7"), the titles of cited official sources, FAQ questions (sentence case), and `llms.txt`, whose link format uses a colon by specification.

## Claims policy

Only publish facts that are verified in `docs/content-verification.md`. No invented statistics, testimonials, logos, credentials, founding dates, offices, phone numbers or guarantees about timelines, approvals or tax outcomes.
