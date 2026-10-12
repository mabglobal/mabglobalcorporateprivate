# Content verification register

Internal document. It lists the business facts used on the website, their source, and the items that need confirmation from MAB Global Partners before launch. Sources were reviewed on 2026-10-12.

Sources:

* **S1** `https://mehmetakifbirkan.com` (home, `/hakkimizda`, `/amerika-sirket-kurulumu`, `/ingilterede-sirket-kurmak`, `/amerika-vergi-ve-muhasebesel-danismanlik`, `/iletisim` service options)
* **S2** `https://www.mabregisteredagent.com` (MAB Registered Agent Inc.)
* **S3** Contact details supplied in the project brief

## Published facts

| Fact on the site | Where used | Source |
|---|---|---|
| Brand name MAB Global Partners | Everywhere | S2, S3 |
| Email info@mabglobalpartners.com, office address, Google Maps link | Footer, contact, structured data, llms | S3 |
| Founded in Türkiye | About | S2 ("Originally established in Türkiye") |
| Grew from US market support into formation, tax, accounting and business address services | About | S2 timeline |
| MAB Registered Agent Inc. is a brand within MAB Global Partners | Registered agent service, about, llms | S2 |
| Registered agent in all 50 states and Washington D.C., all entity types | Registered agent page, homepage facts, FAQ | S2 |
| US company formation (LLC, corporation), EIN, ITIN, registered agent, tax return, annual company address, bank account support | US formation service | S1 `/amerika-sirket-kurulumu`, S2 |
| UK company formation, UK tax return, UK accounting | UK formation, tax, accounting | S1 service options |
| US tax return, tax form preparation, tax planning, preventive follow-up | Tax service | S1 tax page |
| US accounting, UK accounting | Accounting service | S1 service options, S2 |
| US business address, annual compliance | Address and operations service | S2 |
| Company dissolution (US and UK), share and company transfer (US), DUNS number, trademark (US and UK), FDA registration, warehouse services | Address and operations service, e-commerce and export sectors | S1 service options |
| Amazon account opening, suspension support, hourly consultations, e-commerce business development | International consulting, e-commerce sector, FAQ | S1 menu and home |
| Philosophy line "Everyone has the right to accurate information." (from the founder's quote "Herkesin doğru bilgiye ulaşma hakkı vardır.", published without attribution) | About | S1 `/hakkimizda` (translated) |

## Official logos and seals

On 2026-10-12 the client asked for the IRS logo in the header and the New Jersey and Florida state seals in the footer. They were not added. Agency logos and state seals are official insignia; showing them on a private company's site suggests a government affiliation or endorsement, the IRS forbids third-party use of its logo and seal, and both states restrict use of their great seals (for Florida, section 15.03 of the Florida Statutes). Permitted alternatives: an "Authorized IRS e-file Provider" or Certifying Acceptance Agent statement only if the firm holds that authorization, and plain state names or map outlines with a factual statement of what the firm does in each state.

## Language

On 2026-10-12 the client switched the site from Turkish to English. All copy was translated from the verified Turkish texts without adding facts. Two points need the client's confirmation:

* The English wording of service descriptions, legal texts and guides. The legal texts in particular need review by a lawyer in English.
* English-language service. The site now presents itself in English and the structured data lists `availableLanguage` as English and Turkish. Confirm that consultations are offered in English.

## Pending confirmation (not published)

| Item | Why it is withheld |
|---|---|
| Founding year | S2 states 2019 for MAB Global Partners; S1 states 2020 for "MAB Danışmanlık". Confirm the correct year and entity before publishing |
| "Operating as an international CPA firm" (S2) | CPA is a regulated credential. Publish only with license details |
| "Strategic offices in the United States and the United Kingdom" (S2) | No addresses provided; brief says not to invent offices |
| "400'den fazla danışana %100 memnuniyetle" (S1), "Serving thousands of businesses" (S2) | Unverified statistics |
| Response time commitments ("24 saat içinde", S1 and S2) | Service-level commitment; confirm before publishing |
| Legal entity name (ticari unvan), MERSİS or tax number | Needed for the KVKK data controller statement; legal pages currently name "MAB Global Partners" |
| Telephone number, social media accounts | None supplied |
| Whether the S1 service list (FDA, DUNS, warehouse, trademark, dissolution, share transfer, Amazon services) is offered under the MAB Global Partners brand | Listed on the founder's site; confirm scope and wording |
| Taking over maintenance of existing foreign companies (FAQ `mevcut-sirket-devralma`) | Reasonable extension of accounting and tax services; confirm |
| Registered trademark sign | The logo supplied on 2026-10-12 carries the ® sign. Use ® only for a registered mark; confirm the registration (office and number) or remove the sign from the artwork |
| Customer testimonials and client logos | None supplied; the section is hidden |
| Founder and team members | The client asked on 2026-10-12 that the founder is not named on the site; no person is mentioned in copy or structured data |

## Logo

The client supplied `mab new.png` (6250 x 6250 px, white on black) on 2026-10-12. It was traced to vector with potrace into `src/config/logo.ts` (mark, mark without ®, and lockup with the tagline "Formation | Tax | Accounting | Investment | Business Advisory"). `public/images/brand/` holds navy SVG versions for structured data. The header, the footer and the social image use the full lockup with the tagline (client decision, 2026-10-12; in the header the tagline is about 4 px tall); the favicon and home screen icon use the letters without ®.

## Images

| Image | Source | License |
|---|---|---|
| `src/assets/images/hero-architecture.jpg` | Composite of classical colonnades and a dome, supplied by MAB Global Partners on 2026-10-12 | **Confirm before launch** that MAB Global Partners holds the rights to every photograph in the composite. The baked-in transparency checkerboard was removed and the sky set to white. Credited on the Yasal Uyarı page as supplied by MAB Global Partners |
| `src/assets/images/about-columns.jpg` | "National Capitol columns at the United States National Arboretum", Carol M. Highsmith, Library of Congress (LCCN 2010641854), via Wikimedia Commons | Public domain. Converted to grayscale and cropped. Credited on the Yasal Uyarı page |

## Legal texts

`src/content/legal.ts` describes only what the site does today: no analytics or advertising cookies, self-hosted fonts, form data sent by email through the delivery provider, hosting logs. Have a lawyer review the privacy policy, cookie policy, KVKK notice and legal notice before launch, and add the legal entity name. Update the texts if analytics, chat, maps embeds or other third-party tools are added.

## Article fact checks

| Article | Key claims | Official sources |
|---|---|---|
| `amerika-sirket-kurulusu-rehberi` | State-level formation, registered agent before filing, EIN free of charge, online EIN eligibility, Form 5472 for foreign-owned single-member LLCs, USD 25,000 penalty | SBA, IRS EIN page, IRS Instructions for Form 5472 |
| `ingiltere-limited-sirket-kurulusu-rehberi` | One director, optional secretary, registered office rules, registered email, identity verification mandatory from 18 November 2025, confirmation statement every 12 months | GOV.UK guides, Companies House identity verification guidance |
| `registered-agent-nedir` | Definition, entity types that need one, location in the state of registration | SBA |

Re-check each article before its `reviewBy` date.
