/**
 * Official contact details. This is the only place these values are defined;
 * the footer, contact page, structured data and llms.txt all read from here.
 *
 * The address is kept exactly as supplied by the business so it stays
 * consistent with the Google Maps listing.
 */
export const contactConfig = {
  email: "info@mabglobalpartners.com",
  /** Second address shown next to the main one (client request, 2026-10-31). */
  secondaryEmail: "info@mehmetakifbirkan.com",
  /**
   * Formspree form that receives contact submissions (client form, 2026-10-31).
   * Not a secret: a form endpoint is public by design. FORMSPREE_ENDPOINT can
   * override or disable it; see src/lib/contact/formspree-delivery.ts.
   */
  formspreeEndpoint: "https://formspree.io/f/xwllrpnr",
  address: {
    full: "Sultan Selim, Hümeyra Sokagi NEF 09 B Blok No: 7 İç Kapı No: 35, 34415 Kağıthane/İstanbul",
    streetAddress: "Sultan Selim, Hümeyra Sokagi NEF 09 B Blok No: 7 İç Kapı No: 35",
    postalCode: "34415",
    locality: "Kağıthane",
    region: "İstanbul",
    countryCode: "TR",
    countryName: "Türkiye",
  },
  mapsUrl:
    "https://www.google.com/maps/place//data=!4m2!3m1!1s0x14cab7f8896c6d39:0xc9fd9bf14f451176?sa=X&ved=1t:8290&ictx=111",
} as const;

export const mailtoHref = `mailto:${contactConfig.email}`;
export const secondaryMailtoHref = `mailto:${contactConfig.secondaryEmail}`;
