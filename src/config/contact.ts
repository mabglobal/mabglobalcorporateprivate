/**
 * Official contact details. This is the only place these values are defined;
 * the footer, contact page, structured data and llms.txt all read from here.
 *
 * The headquarters address follows the Google Maps listing, with the country
 * added at the client's request (2026-11-09).
 */
export const contactConfig = {
  email: "info@mabglobalpartners.com",
  /** Second address shown next to the main one (client request, 2026-10-31). */
  secondaryEmail: "info@mehmetakifbirkan.com",
  /** US line supplied by the client (2026-11-09). */
  phone: {
    display: "+1 (551) 327-9241",
    e164: "+15513279241",
  },
  /**
   * Formspree form that receives contact submissions (client form, 2026-10-31).
   * Not a secret: a form endpoint is public by design. FORMSPREE_ENDPOINT can
   * override or disable it; see src/lib/contact/formspree-delivery.ts.
   */
  formspreeEndpoint: "https://formspree.io/f/xwllrpnr",
  address: {
    full: "Sultan Selim, Hümeyra Sokagi NEF 09 B Blok No: 7 İç Kapı No: 35, 34415 Kağıthane/İstanbul, Türkiye",
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

export interface Office {
  id: string;
  heading: string;
  location: string;
  /** Street address. Offices without one are published by city or state only. */
  address?: string;
  mapsUrl?: string;
  postal: {
    streetAddress?: string;
    postalCode?: string;
    locality?: string;
    region?: string;
    countryCode: string;
  };
}

const newJerseyAddress = "311 60th Street, West New York, New Jersey 07093, United States";

/**
 * Offices named by the client (2026-11-03 and 2026-11-09). The New Jersey
 * street address replaces the earlier state-only listing. Oxford and Florida
 * stay without a street address and map link until the client supplies one.
 */
export const offices: readonly Office[] = [
  {
    id: "istanbul",
    heading: "Headquarters",
    location: "Istanbul, Türkiye",
    address: contactConfig.address.full,
    mapsUrl: contactConfig.mapsUrl,
    postal: {
      streetAddress: contactConfig.address.streetAddress,
      postalCode: contactConfig.address.postalCode,
      locality: contactConfig.address.locality,
      region: contactConfig.address.region,
      countryCode: contactConfig.address.countryCode,
    },
  },
  {
    id: "oxford",
    heading: "United Kingdom Office",
    location: "Oxford, United Kingdom",
    postal: { locality: "Oxford", countryCode: "GB" },
  },
  {
    id: "new-jersey",
    heading: "New Jersey Office",
    location: "New Jersey, United States",
    address: newJerseyAddress,
    mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(newJerseyAddress)}`,
    postal: {
      streetAddress: "311 60th Street",
      postalCode: "07093",
      locality: "West New York",
      region: "NJ",
      countryCode: "US",
    },
  },
  {
    id: "florida",
    heading: "Florida Office",
    location: "Florida, United States",
    postal: { region: "FL", countryCode: "US" },
  },
];

export const branchOffices = offices.filter((office) => office.id !== "istanbul");

export const mailtoHref = `mailto:${contactConfig.email}`;
export const secondaryMailtoHref = `mailto:${contactConfig.secondaryEmail}`;
export const phoneHref = `tel:${contactConfig.phone.e164}`;
