import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FooterCtaVideo } from "@/components/home/FooterCtaVideo";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";

export const metadata: Metadata = {
  title: "Hochzeitsvideograf Espelkamp & OWL – Emotionale Filme",
  description:
    "JE Media – Dein Hochzeitsvideograf aus Espelkamp. Cinematische Hochzeitsfilme in 4K für Paare in OWL, Minden, Bielefeld und NRW. Jetzt Termin anfragen.",
  alternates: { canonical: "https://jemedia.de" },
  openGraph: {
    title: "Hochzeitsvideograf Espelkamp & OWL – Emotionale Hochzeitsfilme",
    description:
      "JE Media – Dein Hochzeitsvideograf aus Espelkamp. Cinematische Hochzeitsfilme in 4K für Paare in OWL, Minden, Bielefeld und NRW.",
    url: "https://jemedia.de",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://jemedia.de/#website",
  name: "JE Media",
  url: "https://jemedia.de",
  publisher: { "@id": "https://jemedia.de/#business" },
};

const testimonials = [
  {
    quote:
      "Joel hat es geschafft, unseren Hochzeitstag emotional und authentisch festzuhalten. Trotz kleiner Zeitprobleme zwischendurch blieb er jederzeit ruhig, professionell und organisiert – sodass wir uns komplett auf den Moment konzentrieren konnten.",
    name: "Alex & Julia",
    date: "Hochzeit Dezember 2024",
  },
  {
    quote:
      "Unglaublich, echt Hammer geworden – vielen vielen Dank! Das hat unsere Erwartungen komplett übertroffen.",
    name: "Luis & Melina",
    date: "Hochzeit September 2023",
  },
  {
    quote:
      "Wir sind so glücklich mit dem Video. Joel hat unseren Tag wunderschön eingefangen – wir finden seine Arbeit einfach großartig.",
    name: "Jonas & Jasmin",
    date: "Hochzeit August 2025",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {/* HERO */}
      <section className="hero hero-wedding">
        <video
          className="hero-video-bg"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/videos/Hochzeit.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container hero-content">
          <span className="eyebrow-script">JE Media</span>
          <h1>Emotionale Filme<br />für deine Hochzeit</h1>
          <p>
            Cinematischer Hochzeitsvideograf aus Espelkamp –
            für Paare in OWL, Minden, Bielefeld und ganz NRW.
            Echte Emotionen, bewegende Bilder, für immer festgehalten.
          </p>
          <div className="hero-actions">
            <Link className="btn" href="/kontakt">
              Anfrage stellen
            </Link>
            <Link className="btn btn-ghost" href="/preise">
              Pakete & Preise
            </Link>
          </div>
        </div>
      </section>

      {/* ÜBER MICH */}
      <section className="section home-about">
        <div className="container split">
          <div>
            <span className="eyebrow-script">Wer bin ich?</span>
            <h2>Über mich</h2>
            <p>
              Ich bin Joel, Hochzeitsvideograf aus Espelkamp in Nordrhein-Westfalen.
              Mein Fokus liegt auf emotionalen Storys und cineastischen Bildern –
              echte Momente so festgehalten, dass sie auch Jahre später noch lebendig wirken.
            </p>
            <p>
              Ich begleite Hochzeiten in der gesamten Region: NRW & Niedersachen und auf Anfrage auch darüber hinaus.
              Ich arbeite alleine – persönlich, unauffällig und mit viel Gespür für den richtigen Moment
            </p>
            <div className="contact-actions space-top">
              <Link className="btn btn-ghost" href="/ueber-mich">
                Mehr über mich
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/images/portrait.jpg"
              alt="Joel – Videograf von JE Media"
              width={620}
              height={760}
              className="about-portrait"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      {/* SO ARBEITE ICH */}
      <section className="section home-process">
        <div className="container">
          <span className="eyebrow-script">Mein Ablauf</span>
          <h2>So arbeite ich</h2>
          <div className="card-grid two process-grid">
            <article className="card process-card">
              <span className="process-step">01</span>
              <h3>Kostenloses Kennenlerngespräch</h3>
              <p>Wir sprechen über euren Tag, eure Wünsche und den gewünschten Look – persönlich, per Telefon oder Skype.</p>
            </article>
            <article className="card process-card">
              <span className="process-step">02</span>
              <h3>Individuelles Angebot</h3>
              <p>Auf Basis eurer Eckdaten erhaltet ihr ein unverbindliches, auf euch zugeschnittenes Angebot.</p>
            </article>
            <article className="card process-card">
              <span className="process-step">03</span>
              <h3>Dreharbeiten</h3>
              <p>Authentisch, unaufdringlich und mit Zeitgefühl – damit echte Momente entstehen können.</p>
            </article>
            <article className="card process-card">
              <span className="process-step">04</span>
              <h3>Schnitt & Übergabe</h3>
              <p>Ich setze eure Geschichte filmisch um und liefere euren fertigen Film als Download in 4K.</p>
            </article>
          </div>
        </div>
      </section>

      {/* SHOWREEL */}
      <section className="section home-showreel">
        <div className="container">
          <span className="eyebrow-script">Meine Arbeit</span>
          <h2>Showreel</h2>
          <div className="showreel-box">
            <svg
              className="showreel-f-svg"
              viewBox="0 0 100 160"
              fill="none"
              aria-hidden="true"
            >
              <line
                x1="38" y1="18" x2="38" y2="142"
                stroke="var(--accent)"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="draw-vert"
              />
              <line
                x1="38" y1="18" x2="82" y2="18"
                stroke="var(--accent)"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="draw-top"
              />
              <line
                x1="38" y1="76" x2="70" y2="76"
                stroke="var(--accent)"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="draw-mid"
              />
            </svg>
            <p className="showreel-coming-text" lang="en">Coming Soon</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section home-testimonials">
        <div className="container">
          <span className="eyebrow-script">Was Paare sagen</span>
          <h2>Stimmen</h2>
          <p className="muted" style={{ marginBottom: "2rem", maxWidth: "600px" }}>
            Echte Worte von Paaren, die ihren besonderen Tag mit mir geteilt haben.
          </p>
          <TestimonialsCarousel items={testimonials} />
          <div className="contact-actions" style={{ marginTop: "2rem" }}>
            <a
              className="btn btn-ghost"
              href="https://g.page/r/CSU91lap3ZMwEAE/review"
              target="_blank"
              rel="noreferrer"
            >
              Bewertung auf Google schreiben
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="footer-cta" aria-label="Anfrage stellen">
        <FooterCtaVideo />
        <div className="footer-cta-overlay" aria-hidden="true" />
        <div className="container footer-cta-content">
          <span className="eyebrow-script">Euer großer Tag</span>
          <h2>Bereit für euren Film?</h2>
          <p>Schreibt mir – ich freue mich darauf, eure Geschichte zu erzählen.</p>
          <div className="footer-cta-actions">
            <Link className="btn" href="/kontakt">
              Kennlerngespräch buchen
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
      </section>
    </>
  );
}
