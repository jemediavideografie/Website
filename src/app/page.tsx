import { HeroVideoCompare } from "@/components/HeroVideoCompare";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <HeroVideoCompare
          leftVideoSrc="/videos/Hochzeit.mp4"
          rightVideoSrc="/videos/automotive.mp4"
          leftLabel="Hochzeit"
          rightLabel="Automotive"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container hero-content">
          <p className="eyebrow">JE Media</p>
          <h1>Emotionale Filme für Hochzeit und Automotive</h1>
          <p>
            Bewegte Bilder, echte Emotionen und ein moderner, cinematischer Look für Erinnerungen, die
            bleiben.
          </p>
        </div>
      </section>

      <section className="section home-services">
        <div className="container">
          <h2>Leistungen</h2>
          <div className="card-grid two services-grid">
            <article className="card service-card">
              <h3>Hochzeitsvideografie</h3>
              <p>
                Authentische Begleitung eures Tages - vom First Look bis zur Feier - in einem emotionalen
                Highlightfilm.
              </p>
            </article>
            <article className="card service-card">
              <h3>Automotive Videos</h3>
              <p>
                Dynamische und detailreiche Aufnahmen für Autos und Motorräder mit Fokus auf Stil und
                Charakter.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section home-process">
        <div className="container">
          <h2>So arbeite ich</h2>
          <div className="card-grid two process-grid">
            <article className="card process-card">
              <span className="process-step">01</span>
              <h3>Kennenlerngespräch</h3>
              <p>Wir sprechen über euren Tag oder euer Projekt, eure Wünsche und den gewünschten Look.</p>
            </article>
            <article className="card process-card">
              <span className="process-step">02</span>
              <h3>Individuelles Angebot</h3>
              <p>Auf Basis eurer Eckdaten erhaltet ihr ein unverbindliches, passendes Angebot.</p>
            </article>
            <article className="card process-card">
              <span className="process-step">03</span>
              <h3>Dreharbeiten</h3>
              <p>Authentisch, unaufdringlich und mit Zeitgefühl - damit echte Momente entstehen.</p>
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
          <div className="contact-actions">
            <a className="btn" href="https://wa.me/491759084870" target="_blank" rel="noreferrer">
              WhatsApp Kontakt
            </a>
            <Link className="btn btn-ghost" href="/kontakt">
              Anfrage stellen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
