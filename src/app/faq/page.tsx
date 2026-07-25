import type { Metadata } from "next";
import { FaqCategories } from "@/components/faq/FaqCategories";
import { faqContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ – Häufige Fragen zur Hochzeitsvideografie",
  description:
    "Alle Antworten rund um Hochzeitsfilme von JE Media: Buchung, Ablauf, Pakete, Bearbeitungszeit, Equipment und mehr. Videograf aus Espelkamp, OWL.",
  alternates: { canonical: "https://www.jemedia-videografie.de/faq" },
  openGraph: {
    title: "FAQ – Häufige Fragen zur Hochzeitsvideografie | JE Media",
    description:
      "Alle Antworten rund um Hochzeitsfilme von JE Media: Buchung, Ablauf, Pakete, Bearbeitungszeit und mehr.",
    url: "https://www.jemedia-videografie.de/faq",
  },
};

const allFaqs = [
  ...faqContent.hochzeit,
  ...faqContent.allgemein,
  ...faqContent.automotive,
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.jemedia-videografie.de" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://www.jemedia-videografie.de/faq" },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqCategories />
    </>
  );
}
