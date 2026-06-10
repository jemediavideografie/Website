import type { Metadata } from "next";
import Link from "next/link";
import { PricingList, type Package, type Addon } from "@/components/pricing/PricingList";

export const metadata: Metadata = {
  title: "Preise & Pakete – Hochzeitsvideograf Espelkamp",
  description:
    "Hochzeitsvideo Pakete ab 180 € – Grundpreis + Stundensatz. Cinematische Filme in 4K von JE Media aus Espelkamp für Hochzeiten in OWL & NRW.",
  alternates: { canonical: "https://jemedia.de/preise" },
  openGraph: {
    title: "Preise & Pakete – Hochzeitsvideograf Espelkamp | JE Media",
    description:
      "Hochzeitsvideo Pakete ab 180 € – Cinematische Filme in 4K von JE Media aus Espelkamp für Hochzeiten in OWL & NRW.",
    url: "https://jemedia.de/preise",
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hochzeitsvideografie",
  provider: { "@id": "https://jemedia.de/#business" },
  areaServed: { "@type": "State", name: "Nordrhein-Westfalen" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hochzeitsvideo Pakete",
    itemListElement: [
      {
        "@type": "Offer",
        name: "First Look & Trauung",
        description: "First Look, Trauungszeremonie, cinematische Videobearbeitung, 4K Download",
        price: "180",
        priceCurrency: "EUR",
        priceSpecification: { "@type": "UnitPriceSpecification", price: "180", priceCurrency: "EUR", unitText: "Grundpreis" },
      },
      {
        "@type": "Offer",
        name: "Trauung & Nachfeier",
        description: "Trauungszeremonie, Nachfeier, cinematische Videobearbeitung, 4K Download",
        price: "200",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Get Ready, First Look & Trauung",
        description: "Getting Ready, First Look, Trauungszeremonie, cinematische Videobearbeitung, 4K Download",
        price: "270",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "First Look, Trauung & Nachfeier",
        description: "First Look, Trauungszeremonie, Nachfeier, cinematische Videobearbeitung, 4K Download",
        price: "300",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Ganztagesreportage",
        description: "Getting Ready, First Look, Trauungszeremonie, Nachfeier, cinematische Videobearbeitung, 4K Download",
        price: "350",
        priceCurrency: "EUR",
      },
    ],
  },
};

const packages: Package[] = [
  {
    id: "01",
    name: "First Look & Trauung",
    base: 180,
    hourly: 45,
    includes: [
      "First Look",
      "Trauungszeremonie",
      "Cinematische Videobearbeitung",
      "Fertigstellung als 4K Download",
    ],
  },
  {
    id: "02",
    name: "Trauung & Nachfeier",
    base: 200,
    hourly: 65,
    includes: [
      "Trauungszeremonie",
      "Nachfeier",
      "Cinematische Videobearbeitung",
      "Fertigstellung als 4K Download",
    ],
  },
  {
    id: "03",
    name: "Get Ready, First Look & Trauung",
    base: 270,
    hourly: 40,
    includes: [
      "Getting Ready",
      "First Look",
      "Trauungszeremonie",
      "Cinematische Videobearbeitung",
      "Fertigstellung als 4K Download",
    ],
  },
  {
    id: "04",
    name: "First Look, Trauung & Nachfeier",
    base: 300,
    hourly: 35,
    includes: [
      "First Look",
      "Trauungszeremonie",
      "Nachfeier",
      "Cinematische Videobearbeitung",
      "Fertigstellung als 4K Download",
    ],
  },
  {
    id: "05",
    name: "Ganztagesreportage",
    base: 350,
    hourly: 25,
    includes: [
      "Getting Ready",
      "First Look",
      "Trauungszeremonie",
      "Nachfeier",
      "Cinematische Videobearbeitung",
      "Fertigstellung als 4K Download",
    ],
    special: {
      label: "Mit Fotograf & Fotobox",
      price: 1300,
      pricePrefix: "ab ",
      note: "Gesamtpreis · kein Stundensatz · Fotobox inklusive",
    },
  },
];

const addons: Addon[] = [
  { name: "Drohnenaufnahmen", price: "auf Anfrage" },
  { name: "Events & Veranstaltungen", price: "auf Anfrage" },
  { name: "Automotive", price: "auf Anfrage" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://jemedia.de" },
    { "@type": "ListItem", position: 2, name: "Preise & Pakete", item: "https://jemedia.de/preise" },
  ],
};

export default function PreisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <section className="section">
        <div className="container">
          <span className="eyebrow-script">Hochzeitsvideografie</span>
          <h1>Preise & Pakete</h1>
          <p className="muted" style={{ maxWidth: "620px", margin: "0.5rem 0 1.5rem" }}>
            Hochzeitsfilme aus Espelkamp für Paare in OWL & NRW – alle Pakete inkl.
            cinematischer Videobearbeitung und Übergabe in 4K.
          </p>

          <div className="pricing-note">
            ✓ Alle Pakete inkl. Videobearbeitung
          </div>

          <PricingList packages={packages} addons={addons} />

          <div className="card" style={{ marginTop: "3rem", padding: "2.5rem", borderRadius: "20px" }}>
            <h2 style={{ marginBottom: "0.5rem" }}>Individuelles Angebot gewünscht?</h2>
            <p className="muted" style={{ marginBottom: "1.2rem" }}>
              Ich erstelle euch gerne ein maßgeschneidertes Angebot. Schreibt mir einfach.
            </p>
            <div className="contact-actions">
              <Link className="btn" href="/kontakt">
                Anfrage stellen
              </Link>
              <a
                className="btn btn-ghost"
                href="https://wa.me/491759084870"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
