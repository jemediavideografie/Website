import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="container split">
          <div>
            <h1>Über mich</h1>
            <p>
              Ich bin Videograf mit Fokus auf emotionale Storys und cineastische Bilder. Mein Anspruch ist,
              echte Momente so einzufangen, dass sie auch Jahre später wieder lebendig wirken.
            </p>
            <p>
              Ich arbeite in der Regel alleine und begleite jedes Projekt persönlich - flexibel, unauffällig
              und mit viel Gespür für Timing und Stimmung.
            </p>
            <p>
              Equipment: Sony A7 III, RS4 Pro Gimbal und ein flexibles 24-70mm Setup für hochwertige
              Aufnahmen in jeder Situation.
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
              alt="Videograf von JE Media"
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
          <div className="card-grid two">
            <article className="card">
              <h3>Kennenlerngespräch</h3>
              <p>Wir sprechen über euren Tag oder euer Projekt, eure Wünsche und den gewünschten Look.</p>
            </article>
            <article className="card">
              <h3>Individuelles Angebot</h3>
              <p>Auf Basis eurer Eckdaten erhaltet ihr ein unverbindliches, passendes Angebot.</p>
            </article>
            <article className="card">
              <h3>Dreharbeiten</h3>
              <p>Authentisch, unaufdringlich und mit Zeitgefühl - damit echte Momente entstehen.</p>
            </article>
            <article className="card">
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
