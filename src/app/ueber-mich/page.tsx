import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über mich – Hochzeitsvideograf aus Espelkamp",
  description:
    "Joel aus Espelkamp – Hochzeitsvideograf mit Fokus auf emotionale, cinematische Filme. Sony A7 III, RS4 Pro Gimbal. Hochzeiten in OWL & NRW.",
  alternates: { canonical: "https://jemedia.de/ueber-mich" },
  openGraph: {
    title: "Über mich – Hochzeitsvideograf aus Espelkamp | JE Media",
    description:
      "Joel aus Espelkamp – Hochzeitsvideograf mit Fokus auf emotionale, cinematische Filme. Sony A7 III, RS4 Pro Gimbal. Hochzeiten in OWL & NRW.",
    url: "https://jemedia.de/ueber-mich",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: "https://jemedia.de" },
    { "@type": "ListItem", position: 2, name: "Über mich", item: "https://jemedia.de/ueber-mich" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="section">
        <div className="container split">
          <div>
            <h1>Über mich – Hochzeitsvideograf Joel aus Espelkamp</h1>
            <p>
              Ich bin Joel, Hochzeitsvideograf aus Espelkamp im Kreis Minden-Lübbecke (NRW).
              Was mich antreibt? 
              Die Momente, die man nicht stellen kann. Der Blick, wenn jemand seinen Partner zum ersten Mal am Altar sieht. 
              Das Lachen beim ersten Tanz. Diese Sekunden festzuhalten, das ist mein Handwerk. 
              Ich bin überzeugt, dass ein gutes Hochzeitsvideo kein Luxus sein sollte. Jedes Paar verdient einen Film, der ehrlich und emotional erzählt, was an diesem Tag wirklich passiert ist.
              Ich begleite euch von der Getting-Ready-Phase bis weit in den Abend und sorge dafür, dass ihr später genau das seht, was ihr gefühlt habt.
            </p>
            <p>
              Ich begleite Hochzeiten in der gesamten Region: NRW & Niedersachenund auf Anfrage auch darüber hinaus.
              Ich arbeite alleine – persönlich, unauffällig und mit viel Gespür für den richtigen Moment.
            </p>
            <p>
              Mein Portfolio und Content gibt es auf Instagram und TikTok:
            </p>
            <div className="contact-actions">
              <a className="btn btn-ghost" href="https://www.instagram.com/_je.media_/" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a className="btn btn-ghost" href="https://www.tiktok.com/@_je.media_" target="_blank" rel="noreferrer">
                TikTok
              </a>
            </div>
          </div>
          <div>
            <Image
              src="/images/portrait.jpg"
              alt="Joel – Hochzeitsvideograf aus Espelkamp, NRW"
              width={620}
              height={760}
              className="about-portrait"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>So arbeite ich</h2>
          <div className="card-grid two process-grid">
            <article className="card process-card">
              <span className="process-step">01</span>
              <h3>Kostenloses Kennenlerngespräch</h3>
              <p>Bevor ihr euch entscheidet, wollen wir erst wissen, ob es zwischen uns passt.
                In einem kurzen Gespräch erzähle ich euch, wie ich arbeite, und ihr erzählt mir, was euch wichtig ist.
                Kein Druck, keine Verpflichtung.
                Wir sprechen über euren Tag oder euer Projekt, eure Wünsche und den gewünschten Look.</p>
            </article>
            <article className="card process-card">
              <span className="process-step">02</span>
              <h3>Individuelles Angebot</h3>
              <p>Auf Basis eurer Eckdaten erhaltet ihr ein unverbindliches, passendes Angebot.</p>
            </article>
            <article className="card process-card">
              <span className="process-step">03</span>
              <h3>Dreharbeiten</h3>
              <p>Authentisch, unaufdringlich und mit Zeitgefühl, damit echte Momente entstehen.</p>
            </article>
            <article className="card process-card">
              <span className="process-step">04</span>
              <h3>Schnitt & Übergabe</h3>
              <p>Ich setze die Story filmisch um und liefere euch euer fertiges Video als Download.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section contact-strip">
        <div className="container">
          <h2>Bereit für euren Film?</h2>
          <p>Schreibt mir direkt auf WhatsApp oder stellt eine Anfrage über das Kontaktformular.</p>
          <div className="contact-actions space-top">
            <a className="btn" href="https://wa.me/491759084870" target="_blank" rel="noreferrer">
              WhatsApp Kontakt
            </a>
            <Link className="btn btn-ghost" href="/kontakt">
              Kennlerngespräch buchen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
