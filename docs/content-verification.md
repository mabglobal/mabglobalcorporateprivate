# Content verification register

Internal document. It lists the business facts used on the website, their source, and the items that need confirmation from MAB Global Partners before launch. Sources were reviewed on 2026-10-12.

Sources:

* **S1** `https://mehmetakifbirkan.com` (home, `/hakkimizda`, `/amerika-sirket-kurulumu`, `/ingilterede-sirket-kurmak`, `/amerika-vergi-ve-muhasebesel-danismanlik`, `/iletisim` service options)
* **S2** `https://www.mabregisteredagent.com` (MAB Registered Agent Inc.)
* **S3** Contact details supplied in the project brief
* **S4** Client brochure "MAB İngiltere Danışmanlık Hizmetleri" (UK services and fees), supplied 2026-11-09. Fees are kept out of the site
* **S5** Client change list "Web Sitesi Düzenleme ve Geliştirme Talepleri", supplied 2026-11-09

## Published facts

| Fact on the site | Where used | Source |
|---|---|---|
| Brand name MAB Global Partners | Everywhere | S2, S3 |
| Email info@mabglobalpartners.com, office address, Google Maps link | Contact page, contact band, structured data, llms | S3 |
| Second email info@mehmetakifbirkan.com | Contact page, contact band, llms | Client request, 2026-10-31 |
| Headquarters in Istanbul (full address with the country); office in Oxford, United Kingdom; New Jersey office at 311 60th Street, West New York, New Jersey 07093; Florida office by state only | About, contact page, contact band, structured data (`location`), llms | Client requests, 2026-11-03 and S5. The New Jersey street address reverses the state-only decision of 2026-11-03 |
| Phone +1 (551) 327-9241, shown without a person's name | Contact page, contact band, footer, structured data, llms | S5 |
| Founded in Türkiye | About | S2 ("Originally established in Türkiye") |
| Grew from US market support into formation, tax, accounting and business address services | About | S2 timeline |
| MAB Registered Agent Inc. is a brand within MAB Global Partners | Registered agent service, about, llms | S2 |
| Registered agent in all 50 states and Washington D.C., all entity types | Registered agent page, homepage facts, FAQ | S2 |
| US company formation (LLC, corporation), EIN, ITIN, registered agent, tax return, annual company address, bank account support | US formation service | S1 `/amerika-sirket-kurulumu`, S2 |
| US tax return, tax form preparation, tax planning, preventive follow-up | Tax service | S1 tax page |
| US accounting | Accounting service | S1 service options, S2 |
| US business address, annual compliance | Address and operations service | S2 |
| Company dissolution (US), share and company transfer (US), DUNS number, trademark (US), FDA registration, warehouse services | Address and operations service, e-commerce and export sectors | S1 service options |
| Amazon account opening, suspension support, hourly consultations, e-commerce business development | International consulting, e-commerce sector, FAQ | S1 menu and home |
| UK company services (16 items), every brochure row except the monthly director salary, without prices | UK Company Services, UK Company Formation (package) | S4, client decisions 2026-11-09 |
| International bank account opening as a separate service | Bank Account Opening service | S5, S1 (`Amerika Banka Hesap Açılışları`), S4 (UK package) |
| Amazon account opening, private label, wholesale and arbitrage, suspension solutions, e-commerce growth program, hourly sessions | Amazon and E-Commerce service | S1 menu, S5 item 7 |
| Europe coverage | European Company Services, market copy | S5 item 8 and client decision 2026-11-09: general coverage without a country list |
| Philosophy line "Everyone has the right to accurate information." (from the founder's quote "Herkesin doğru bilgiye ulaşma hakkı vardır.", published without attribution) | About | S1 `/hakkimizda` (translated) |

## Market coverage

On 2026-10-12 the client asked to remove everything related to the United Kingdom, and the site covered the United States only. On 2026-11-09 the client reversed this (S5 items 8 and 9): services now cover the United States, the United Kingdom and Europe, and the site presents an international consulting and company services structure. The UK company formation service, the UK limited company guide and the UK FAQs were restored from git history (commit before `9a8e06d`), and the UK identity verification rule was re-checked on GOV.UK on 2026-11-09.

## UK services

The brochure (S4) lists 17 rows. All are published except "Direktör Maaş" (monthly director salary), which the client excluded on 2026-11-09. "Onay Vergisi Beyanı" is published under its UK name, Confirmation Statement. The client decided on 2026-11-09 that prices stay off the site, so the fee column is left out and a unit test rejects currency amounts in service and FAQ copy.

## Europe

On 2026-11-09 the client decided that the Europe page stays general and names no individual countries.

## USPTO and IRS

On 2026-10-12 the client asked for the USPTO logo and an "EIN logo" (the EIN is issued by the IRS) labeled as agencies the firm works with, without a partner claim. The logos were not used: both agencies forbid third-party use of their logos and seals, and the USPTO warns the public about firms that use its insignia. The client then asked on 2026-10-13 to drop the plain text mention as well, so the site names neither agency in the strip. Trademark applications by applicants domiciled outside the US must be filed by a US-licensed attorney; describe the trademark service as preparation support unless such an attorney files them.

## Bank and payment platform logos

On 2026-10-12 the client asked for logos of Bank of America, Capital One, Mercury, Wise and Payoneer in the strip under the hero, without presenting them as partners. They are shown in single-color navy under the caption "Banking and Payment Platforms" with the note "Logos belong to their respective owners and show no partnership or endorsement." Sources: Wikimedia Commons for Bank of America, Capital One, Wise and Payoneer (marked public domain there, trademarks still apply) and the mercury.com header for Mercury. On 2026-11-03 WorldFirst (worldfirst.com header asset), Zyla (zyla.com header asset) and Intuit QuickBooks (Wikimedia Commons, marked public domain there, trademark still applies) were added the same way, and the caption became "Banking and Accounting Platforms". On 2026-11-03 the client asked for the Zyla logo to link to https://portal.zyla.com/register?affiliate_id=11418&region=US&step=0 and the WorldFirst logo to https://portal.worldfirst.com/register?affiliate_id=11418&region=TR&step=0. These are referral links, so they carry rel="sponsored" and the note became "Logos belong to their respective owners. Zyla and WorldFirst logos lead to our referral sign-up pages." The client asked for the IRS logo in the same row as well; it was not added, for the reasons under Official logos and seals. Most of these brands restrict logo use without written permission; the client accepted that risk. Remove a logo on request from its owner, and replace the row with the brands' official partner assets if a partnership is signed.

On 2026-11-09 (S5 items 5 and 10) the WorldFirst logo moved from the referral sign-up to the client's partner profile `https://www.global-voyage.worldfirst.com/cn/partner-resources/mab-global-partners`, so it no longer carries `rel="sponsored"`. The client confirmed the Chinese-language `/cn/` address on 2026-11-09. The client asked to remove the phrase "Bank of U" and its bank section. No such phrase exists on the site, so the Bank of America logo, the only close match, was removed. The WorldFirst logo has to stay clickable, so the strip itself remains.

## Official logos and seals

On 2026-10-12 the client asked for the IRS logo in the header and the New Jersey and Florida state seals in the footer. They were not added. Agency logos and state seals are official insignia; showing them on a private company's site suggests a government affiliation or endorsement, the IRS forbids third-party use of its logo and seal, and both states restrict use of their great seals (for Florida, section 15.03 of the Florida Statutes). Permitted alternatives: an "Authorized IRS e-file Provider" or Certifying Acceptance Agent statement only if the firm holds that authorization, and plain state names or map outlines with a factual statement of what the firm does in each state.

## Email and form routing check (2026-11-09)

Public DNS, checked through 1.1.1.1 and 8.8.8.8: `mabglobalpartners.com` and `uscompanyaddress.com` publish no MX record, so mail to `info@mabglobalpartners.com` cannot be delivered until mail hosting is configured. `mehmetakifbirkan.com` uses Google Workspace and `mabregisteredagent.com` uses kurumsaleposta.com. Forwarding rules and the inbox behind the Formspree form sit in those accounts and could not be read from here.

## Language

On 2026-10-12 the client switched the site from Turkish to English. All copy was translated from the verified Turkish texts without adding facts. Two points need the client's confirmation:

* The English wording of service descriptions, legal texts and guides. The legal texts in particular need review by a lawyer in English.
* English-language service. The site now presents itself in English and the structured data lists `availableLanguage` as English and Turkish. Confirm that consultations are offered in English.

## Pending confirmation (not published)

| Item | Why it is withheld |
|---|---|
| Founding year | S2 states 2019 for MAB Global Partners; S1 states 2020 for "MAB Danışmanlık". Confirm the correct year and entity before publishing |
| "Operating as an international CPA firm" (S2) | CPA is a regulated credential. Publish only with license details |
| "400'den fazla danışana %100 memnuniyetle" (S1), "Serving thousands of businesses" (S2) | Unverified statistics |
| Response time commitments ("24 saat içinde", S1 and S2) | Service-level commitment; confirm before publishing |
| Legal entity name (ticari unvan), MERSİS or tax number | Needed for the data controller statement in the data protection notice (Law No. 6698); legal pages currently name "MAB Global Partners" |
| Social media accounts | None supplied |
| Street addresses for Oxford and Florida | Needed for a map link; only the city or state was supplied |
| Whether the rest of the S1 service list (FDA, DUNS, warehouse) is offered under the MAB Global Partners brand | Listed on the founder's site; confirm scope and wording. Trademark, dissolution, share transfer and Amazon services are confirmed by S4 and S5 |
| Taking over maintenance of existing foreign companies (FAQ `mevcut-sirket-devralma`) | Reasonable extension of accounting and tax services; confirm |
| Registered trademark sign | The logo supplied on 2026-10-12 carries the ® sign. Use ® only for a registered mark; confirm the registration (office and number) or remove the sign from the artwork |
| Customer testimonials and client logos | None supplied; the section is hidden |
| Founder and team members | The client asked on 2026-10-12 that the founder is not named on the site; no person is mentioned in copy or structured data |

## Logo

The client supplied `mab new.png` (6250 x 6250 px, white on black) on 2026-10-12. It was traced to vector with potrace into `src/config/logo.ts` (mark, mark without ®, and lockup with the tagline "Formation | Tax | Accounting | Investment | Business Advisory"). `public/images/brand/` holds navy SVG versions for structured data. The header, the footer and the social image use the full lockup with the tagline (client decision, 2026-10-12; in the header the tagline is about 4 px tall); the favicon and home screen icon use the letters without ®.

On 2026-10-31 the client supplied the horizontal wordmark `mab global partners 26.png` (6250 x 6250 px: orange MAB, navy GLOBAL PARTNERS, registered sign and the tagline "Formation | Tax | Accounting | Investment | Business Advisory" on white). It was split by color and traced with potrace into `wordmarkArt` in `src/config/logo.ts`, filled with the brand orange (#F45800), deep navy (#0A1A36) and navy (#12264A). The header and the footer are white and use this wordmark, and `public/images/brand/mab-global-partners-logo.svg` (the structured data logo) is the same artwork. The social image and the icons keep the MAB monogram, because the wordmark colors are made for white backgrounds. The registered sign note under Pending confirmation applies to this artwork too.

## Images

| Image | Source | License |
|---|---|---|
| `src/assets/images/hero-architecture.jpg` | Composite of classical colonnades and a dome, supplied by MAB Global Partners on 2026-10-12 | **Confirm before launch** that MAB Global Partners holds the rights to every photograph in the composite. The baked-in transparency checkerboard was removed and the sky set to white. Credited on the Yasal Uyarı page as supplied by MAB Global Partners |
| `src/assets/images/about-columns.jpg` | "National Capitol columns at the United States National Arboretum", Carol M. Highsmith, Library of Congress (LCCN 2010641854), via Wikimedia Commons | Public domain. Converted to grayscale and cropped. Credited on the Yasal Uyarı page |

## Legal texts

`src/content/legal.ts` describes only what the site does today: no analytics or advertising cookies, self-hosted fonts, form data received and stored by Formspree and emailed to the team, hosting logs. Have a lawyer review the privacy policy, cookie policy, data protection notice and legal notice before launch, and add the legal entity name. Update the texts if analytics, chat, maps embeds or other third-party tools are added.

## Article fact checks

| Article | Key claims | Official sources |
|---|---|---|
| `amerika-sirket-kurulusu-rehberi` | State-level formation, registered agent before filing, EIN free of charge, online EIN eligibility, Form 5472 for foreign-owned single-member LLCs, USD 25,000 penalty | SBA, IRS EIN page, IRS Instructions for Form 5472 |
| `registered-agent-nedir` | Definition, entity types that need one, location in the state of registration | SBA |

Re-check each article before its `reviewBy` date.
