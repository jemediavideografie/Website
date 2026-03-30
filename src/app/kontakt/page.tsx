import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container narrow">
        <h1>Anfrage stellen</h1>
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
  );
}
