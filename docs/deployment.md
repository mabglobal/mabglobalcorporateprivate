# Deployment

## Requirements

* Node.js 22 or newer (developed on Node 24.12). npm 11.
* Hosting with Node.js server support for `/api/contact` and `src/proxy.ts`. Vercel is assumed; any Next.js-compatible Node host works.

## Build

```bash
npm ci
npm run verify      # lint, typecheck, unit and integration tests, production build
npm run test:e2e    # optional, builds again and runs Playwright against the production server
```

Every page is prerendered at build time. Only `/api/contact` runs per request.

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical origin. Defaults to `https://www.mabglobalpartners.com` |
| `SITE_ENV` | Self-hosting only | `production` enables indexing outside Vercel |
| `VERCEL_ENV` | Set by Vercel | `production` enables indexing |
| `ALLOW_AI_TRAINING_CRAWLERS` | Optional | `false` disallows training crawlers |
| `FORMSPREE_ENDPOINT` | Optional | Overrides the Formspree form in `src/config/contact.ts`; `off` disables delivery |
| `RESEND_API_KEY` | Fallback only | Resend API key, used only when Formspree is off |
| `CONTACT_FROM_EMAIL` | Fallback only | Sender on a verified domain |
| `CONTACT_TO_EMAIL` | Fallback only | Recipient inbox, normally `info@mabglobalpartners.com` |
| `CONTACT_ALLOWED_ORIGINS` | Optional | Extra origins allowed to post the form |

## Contact form delivery (Formspree)

Since 2026-10-31 the form delivers to the client's Formspree form `https://formspree.io/f/xwllrpnr` (set in `src/config/contact.ts`). Submissions appear in the Formspree dashboard and are emailed to the account owner. No environment variable is needed in production.

* The browser posts to the site's own `POST /api/contact`. That route checks the origin, body size, honeypot, completion time and rate limit, validates the fields, and then posts the submission to Formspree as JSON from the server. The form shows success only when Formspree answers with a success status.
* Formspree uses the visitor's `email` field as reply-to, so replying from the Formspree email answers the visitor.
* If "Restrict to domain" is turned on in the Formspree form settings, server-side submissions carry no browser origin and may be rejected; leave that setting off or test after enabling it.
* The end-to-end tests set `FORMSPREE_ENDPOINT` to an empty value so they never create real submissions.
* Resend remains as an optional fallback when Formspree is set to `off` and the three Resend variables are present.

The rate limiter is in-memory and applies per server instance. If spam becomes a problem, add Vercel Firewall rate limiting for `POST /api/contact` or Vercel BotID.

## Domain configuration (decision needed)

On 2026-10-12, `mabglobalpartners.com` redirected to `www.mabglobalpartners.com`, and `www` served an existing application titled "MAB Partner Portal | Hakediş Yönetim Sistemi" (redirecting to `/login`) on Vercel. Deploying this website to `www` would replace that portal. Before launch:

1. Move the partner portal to its own subdomain (for example `portal.mabglobalpartners.com`) and update its users.
2. Assign `www.mabglobalpartners.com` to this project and keep the apex redirecting to `www`.
3. If a different canonical host is chosen, set `NEXT_PUBLIC_SITE_URL` accordingly and redeploy.

## Launch checklist

* Production deployment shows `index, follow` in page source and robots.txt allows crawling.
* `https://www.mabglobalpartners.com/sitemap.xml` lists 30 URLs; submit it in Google Search Console and Bing Webmaster Tools.
* Validate structured data on a service and an article page with validator.schema.org and the Rich Results Test.
* Submit a test contact request in production.
* Confirm the items in `content-verification.md` with the business.
