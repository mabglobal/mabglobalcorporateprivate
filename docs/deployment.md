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
| `RESEND_API_KEY` | For the form | Resend API key |
| `CONTACT_FROM_EMAIL` | For the form | Sender on a verified domain |
| `CONTACT_TO_EMAIL` | For the form | Recipient inbox, normally `info@mabglobalpartners.com` |
| `CONTACT_ALLOWED_ORIGINS` | Optional | Extra origins allowed to post the form |

## Contact form integration (outstanding)

The form is implemented end to end, but **email delivery is not active until Resend is provisioned**. Until then the API answers `503 not_configured` and the form shows an error with the email address. It never shows a success message.

1. Install the Vercel CLI and link the project: `npm i -g vercel`, then `vercel link`.
2. Provision Resend from the Vercel Marketplace: `vercel integration add resend/resend-email`. This needs the account owner's approval in the browser and provisions `RESEND_API_KEY`.
3. In Resend, verify the sending domain (`mabglobalpartners.com`) by adding the DNS records it shows.
4. Set `CONTACT_FROM_EMAIL` (for example `MAB Global Partners <form@mabglobalpartners.com>`) and `CONTACT_TO_EMAIL` for Production and Preview: `vercel env add CONTACT_FROM_EMAIL`.
5. Redeploy, submit a test request and confirm it arrives. Replies go to the visitor because `reply_to` is set to their address.

The rate limiter is in-memory and applies per server instance. If spam becomes a problem, add Vercel Firewall rate limiting for `POST /api/contact` or Vercel BotID.

## Domain configuration (decision needed)

On 2026-10-12, `mabglobalpartners.com` redirected to `www.mabglobalpartners.com`, and `www` served an existing application titled "MAB Partner Portal | Hakediş Yönetim Sistemi" (redirecting to `/login`) on Vercel. Deploying this website to `www` would replace that portal. Before launch:

1. Move the partner portal to its own subdomain (for example `portal.mabglobalpartners.com`) and update its users.
2. Assign `www.mabglobalpartners.com` to this project and keep the apex redirecting to `www`.
3. If a different canonical host is chosen, set `NEXT_PUBLIC_SITE_URL` accordingly and redeploy.

## Launch checklist

* Production deployment shows `index, follow` in page source and robots.txt allows crawling.
* `https://www.mabglobalpartners.com/sitemap.xml` lists 26 URLs; submit it in Google Search Console and Bing Webmaster Tools.
* Validate structured data on a service and an article page with validator.schema.org and the Rich Results Test.
* Submit a test contact request in production.
* Confirm the items in `content-verification.md` with the business.
