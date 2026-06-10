import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Anfrage stellen – Hochzeitsvideograf Espelkamp",
  description:
    "Jetzt Hochzeitsvideo anfragen: JE Media aus Espelkamp begleitet eure Hochzeit in OWL, Minden, Bielefeld und ganz NRW. Schnelle Rückmeldung innerhalb 24–48 Stunden.",
  alternates: { canonical: "https://jemedia.de/kontakt" },
  openGraph: {
    title: "Anfrage stellen – Hochzeitsvideograf Espelkamp | JE Media",
    description:
      "Jetzt Hochzeitsvideo anfragen: JE Media aus Espelkamp begleitet eure Hochzeit in OWL, Minden, Bielefeld und ganz NRW.",
    url: "https://jemedia.de/kontakt",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://jemedia.de" },
    { "@type": "ListItem", position: 2, name: "Kontakt & Anfrage", item: "https://jemedia.de/kontakt" },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    <section className="section">
      <div className="container narrow">
        <h1>Hochzeitsvideo anfragen – JE Media Espelkamp</h1>
        <p>
          Habt ihr Interesse oder Fragen? Schreibt mir einfach eure Eckdaten. Am schnellsten erreicht
          ihr mich über WhatsApp, Instagram oder via Kontaktformular – ich antworte meist innerhalb
          von 24–48 Stunden.
        </p>
        <ContactForm />
        <div className="contact-actions space-top">
          <a className="btn" href="https://wa.me/491759084870" target="_blank" rel="noreferrer">
            WhatsApp Kontakt
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
