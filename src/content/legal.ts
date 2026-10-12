import { contactConfig } from "@/config/contact";
import type { LegalDocument } from "@/types/content";

/**
 * Legal texts. They describe only technologies the site actually uses
 * (no analytics, advertising or tracking cookies). Legal review is pending;
 * see docs/content-verification.md before launch.
 */
const controllerSentence = `The data controller is MAB Global Partners. You can reach us at ${contactConfig.email} or at ${contactConfig.address.full}.`;

export const legalDocuments: Record<LegalDocument["key"], LegalDocument> = {
  privacy: {
    key: "privacy",
    intro:
      "This policy explains how MAB Global Partners processes your personal data when you visit the website and contact us.",
    sections: [
      {
        heading: "Data Controller",
        paragraphs: [controllerSentence],
      },
      {
        heading: "Information We Collect",
        paragraphs: [
          "When you use the contact form we receive your name and email address along with an optional company or brand name. We receive the service you are interested in and your industry along with your message.",
          "Our hosting provider keeps technical logs such as IP address and browser details along with request times for a limited period to keep the website secure.",
        ],
      },
      {
        heading: "How We Use Information",
        paragraphs: ["We use the information we collect only for the purposes below."],
        list: [
          "Reviewing your consultation request and replying to you",
          "Planning an initial consultation for the service you request",
          "Keeping the website secure and preventing misuse",
          "Meeting our legal obligations",
        ],
      },
      {
        heading: "Sharing Information",
        paragraphs: [
          "We never sell your personal data or share it with third parties for marketing.",
          "We work with service providers for website hosting and for the email delivery of form messages. Their servers may be located outside Türkiye. Transfers follow the provisions of Turkish Personal Data Protection Law No. 6698 on transfers abroad.",
        ],
      },
      {
        heading: "Retention Period",
        paragraphs: [
          "We keep contact requests for as long as we need to review them and to run any resulting service relationship. Requests that lead to no service relationship are deleted after a reasonable period.",
        ],
      },
      {
        heading: "Your Rights",
        paragraphs: [
          "You can find your rights regarding personal data and how to apply in the KVKK Privacy Notice.",
        ],
      },
      {
        heading: "Changes",
        paragraphs: [
          "We update this policy when the technologies on the website or our data processing change. The current date appears at the top of the page.",
        ],
      },
    ],
  },
  cookies: {
    key: "cookies",
    intro:
      "This page explains how the MAB Global Partners website uses cookies and similar technologies.",
    sections: [
      {
        heading: "Cookies We Use",
        paragraphs: [
          "Our website uses no cookies for analytics or advertising or user tracking. For this reason the site has no cookie preference panel.",
          "Fonts load from our own server. Viewing our pages sends no request to a font provider.",
        ],
      },
      {
        heading: "Browser Storage",
        paragraphs: [
          "During submission the contact form keeps only the information it needs in browser memory for a short time. This information is deleted when you close the page.",
        ],
      },
      {
        heading: "Future Changes",
        paragraphs: [
          "If we add analytics or a similar tool to the website we will update this policy and ask for your consent where required.",
        ],
      },
      {
        heading: "Managing Cookies",
        paragraphs: ["You can view and delete cookies at any time in your browser settings."],
      },
    ],
  },
  kvkk: {
    key: "kvkk",
    intro:
      "This notice is provided under Article 10 of Turkish Personal Data Protection Law No. 6698 (KVKK) for personal data you share through the contact form and by email.",
    sections: [
      {
        heading: "Data Controller",
        paragraphs: [controllerSentence],
      },
      {
        heading: "Personal Data We Process",
        paragraphs: [
          "We process your first and last name as identity data and your email address as contact data. We process your company or brand name and the service you are interested in along with your industry and message as request data. For security we process transaction security data such as IP address and request time.",
        ],
      },
      {
        heading: "Purposes of Processing",
        paragraphs: [
          "We process your personal data to review your consultation request and to contact you. We process it to plan an initial consultation and to keep the website secure.",
        ],
      },
      {
        heading: "Legal Grounds",
        paragraphs: [
          "We process your personal data on the legal grounds in Article 5(2) of the Law. These are that processing is directly related to the formation of a contract and that it is necessary for our legitimate interests provided it causes no harm to your fundamental rights and freedoms.",
        ],
      },
      {
        heading: "Method of Collection",
        paragraphs: [
          "We collect your personal data electronically through the contact form on our website and by email.",
        ],
      },
      {
        heading: "Transfers",
        paragraphs: [
          "We may transfer your personal data in line with Article 9 of the Law to service providers for website hosting and for the email delivery of form messages. Their servers may be located outside Türkiye. Where a legal obligation exists we may share data with authorized public bodies.",
        ],
      },
      {
        heading: "Your Rights",
        paragraphs: ["Under Article 11 of the Law you have the rights below."],
        list: [
          "To learn whether your personal data is processed",
          "To request information about processing that has taken place",
          "To learn the purpose of processing and whether data is used for that purpose",
          "To know the third parties in Türkiye or abroad that receive your data",
          "To ask for correction of incomplete or inaccurate data",
          "To ask for deletion or destruction of data under the conditions of the Law",
          "To ask that third parties who received your data are told about any correction or deletion",
          "To object to a result against you that arises only from automated analysis",
          "To claim compensation for damage caused by unlawful processing",
        ],
      },
      {
        heading: "Applications",
        paragraphs: [
          `Send requests about your rights by email to ${contactConfig.email}. We conclude each application within thirty days at the latest.`,
        ],
      },
    ],
  },
  legalNotice: {
    key: "legalNotice",
    intro: "MAB Global Partners publishes the content on this website for general information.",
    sections: [
      {
        heading: "Informational Purpose",
        paragraphs: [
          "Service descriptions and Insights guides on this website provide general information. They are no substitute for personal legal or tax or financial advice.",
          "Company formation and tax obligations vary with the laws of each country and state and with your personal situation. We recommend a detailed review of your situation before you decide.",
        ],
      },
      {
        heading: "Limits of Commitment",
        paragraphs: [
          "Official processing times and account approvals by banks and payment providers depend on the review of each institution along with tax outcomes. We give no fixed commitment on timing or results in these areas.",
        ],
      },
      {
        heading: "Accuracy",
        paragraphs: [
          "We review our content regularly. Some information may become outdated after changes in the law. Each guide shows its publication and update dates on its page.",
        ],
      },
      {
        heading: "Intellectual Property",
        paragraphs: [
          "The text and design along with the images on this website belong to MAB Global Partners. Commercial use requires prior permission.",
        ],
      },
      {
        heading: "Images",
        paragraphs: [
          "MAB Global Partners supplied the architectural image on the homepage.",
          "Carol M. Highsmith took the column photograph in the About section. The Library of Congress publishes it in the public domain.",
        ],
      },
      {
        heading: "External Links",
        paragraphs: [
          "Our website links to pages of public agencies and business partners. Each organization is responsible for the content of its own pages.",
        ],
      },
    ],
  },
};
