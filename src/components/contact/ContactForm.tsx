"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "loading" | "success" | "error";

type FieldErrors = Partial<Record<
  "name" | "email" | "preferredContact" | "weddingLocation" | "weddingDate" | "carLocation" | "carLocationOther" | "preferredDate" | "details",
  string
>>;

function validateClient(data: Record<string, string>): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.name || data.name.trim().length < 2) errors.name = "Bitte einen gültigen Namen angeben.";
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Bitte eine gültige E-Mail-Adresse angeben.";
  if (!data.preferredContact) errors.preferredContact = "Bitte einen bevorzugten Kontaktweg angeben.";
  if (data.projectType === "Hochzeit") {
    if (!data.weddingLocation || data.weddingLocation.trim().length < 2) errors.weddingLocation = "Bitte den Ort der Hochzeit angeben.";
    if (!data.weddingDate) errors.weddingDate = "Bitte ein Hochzeitsdatum angeben.";
  }
  if (data.projectType === "Automotive") {
    if (!data.carLocation || data.carLocation.trim().length < 2) errors.carLocation = "Bitte einen groben Ort angeben.";
    if (data.carLocation === "Andere Region" && (!data.carLocationOther || data.carLocationOther.trim().length < 2)) {
      errors.carLocationOther = "Bitte einen Ort für 'Andere Region' angeben.";
    }
    if (!data.preferredDate) errors.preferredDate = "Bitte einen Wunschtermin angeben.";
  }
  if (!data.details || data.details.trim().length < 20) errors.details = "Bitte eine aussagekräftige Nachricht eingeben (mind. 20 Zeichen).";
  return errors;
}

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const [preferredContact, setPreferredContact] = useState("");
  const [projectType, setProjectType] = useState("");
  const [carLocation, setCarLocation] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formStartedAt] = useState(() => Date.now());

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(
      Array.from(formData.entries()).map(([k, v]) => [k, String(v)])
    );

    const errors = validateClient(data);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setSubmitState("loading");

    if (Date.now() - formStartedAt < 3000) {
      setSubmitState("error");
      setMessage("Bitte versuche es erneut.");
      return;
    }

    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
      subject: `Neue Anfrage (${data.projectType ?? "Sonstiges"}) von ${data.name}`,
      name: data.name,
      email: data.email,
      phone: data.phone ?? "",
      "Bevorzugter Kontaktweg": data.preferredContact ?? "",
      "Projektart": data.projectType ?? "",
      "Ort Hochzeit": data.weddingLocation ?? "",
      "Datum Hochzeit": data.weddingDate ?? "",
      "Grober Ort (Automotive)": data.carLocation ?? "",
      "Andere Region (Automotive)": data.carLocationOther ?? "",
      "Wunschtermin (Automotive)": data.preferredDate ?? "",
      message: data.details ?? "",
      botcheck: data.website ?? "",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Die Nachricht konnte nicht gesendet werden.");
      }

      setSubmitState("success");
      setMessage("Danke! Deine Nachricht wurde erfolgreich gesendet.");
      form.reset();
      setPreferredContact("");
      setProjectType("");
      setCarLocation("");
      return;
    } catch (error) {
      setSubmitState("error");
      setMessage(error instanceof Error ? error.message : "Es ist ein Fehler aufgetreten.");
    }
  }

  return (
    <form className="contact-form space-top" onSubmit={onSubmit} noValidate>
      <input type="hidden" name="formStartedAt" value={String(formStartedAt)} />
      <div className="form-grid">
        <label>
          Name *
          <input
            name="name"
            type="text"
            required
            minLength={2}
            placeholder="Max Mustermann"
            aria-describedby={fieldErrors.name ? "err-name" : undefined}
            aria-invalid={!!fieldErrors.name}
          />
          {fieldErrors.name && <span id="err-name" className="field-error">{fieldErrors.name}</span>}
        </label>
        <label>
          E-Mail *
          <input
            name="email"
            type="email"
            required
            placeholder="name@beispiel.de"
            aria-describedby={fieldErrors.email ? "err-email" : undefined}
            aria-invalid={!!fieldErrors.email}
          />
          {fieldErrors.email && <span id="err-email" className="field-error">{fieldErrors.email}</span>}
        </label>
        <label>
          Telefon (optional)
          <input name="phone" type="tel" placeholder="+49 ..." />
        </label>
        <label>
          Bevorzugter Kontaktweg *
          <select
            name="preferredContact"
            required
            value={preferredContact}
            onChange={(event) => setPreferredContact(event.target.value)}
            aria-describedby={fieldErrors.preferredContact ? "err-preferredContact" : undefined}
            aria-invalid={!!fieldErrors.preferredContact}
          >
            <option value="" disabled>
              Bitte wählen
            </option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Instagram">Instagram</option>
            <option value="E-Mail">E-Mail</option>
          </select>
          {fieldErrors.preferredContact && <span id="err-preferredContact" className="field-error">{fieldErrors.preferredContact}</span>}
        </label>
        <label>
          Projektart *
          <select
            name="projectType"
            required
            value={projectType}
            onChange={(event) => {
              setProjectType(event.target.value);
              setCarLocation("");
            }}
          >
            <option value="" disabled>
              Bitte wählen
            </option>
            <option value="Hochzeit">Hochzeit</option>
            <option value="Automotive">Automotive</option>
            <option value="Sonstiges">Sonstiges</option>
          </select>
        </label>
      </div>

      {projectType === "Hochzeit" && (
        <div className="form-grid">
          <label>
            Wo heiratet ihr? *
            <input
              name="weddingLocation"
              type="text"
              required
              placeholder="Ort / Location"
              aria-describedby={fieldErrors.weddingLocation ? "err-weddingLocation" : undefined}
              aria-invalid={!!fieldErrors.weddingLocation}
            />
            {fieldErrors.weddingLocation && <span id="err-weddingLocation" className="field-error">{fieldErrors.weddingLocation}</span>}
          </label>
          <label>
            Datum *
            <input
              name="weddingDate"
              type="date"
              required
              aria-describedby={fieldErrors.weddingDate ? "err-weddingDate" : undefined}
              aria-invalid={!!fieldErrors.weddingDate}
            />
            {fieldErrors.weddingDate && <span id="err-weddingDate" className="field-error">{fieldErrors.weddingDate}</span>}
          </label>
        </div>
      )}

      {projectType === "Automotive" && (
        <div className="form-grid">
          <label>
            Grober Ort *
            <select
              name="carLocation"
              required
              value={carLocation}
              onChange={(event) => setCarLocation(event.target.value)}
              aria-describedby={fieldErrors.carLocation ? "err-carLocation" : undefined}
              aria-invalid={!!fieldErrors.carLocation}
            >
              <option value="" disabled>
                Landkreis auswählen
              </option>
              <option value="Kreis Minden-Luebbecke">Kreis Minden-Lübbecke</option>
              <option value="Kreis Herford">Kreis Herford</option>
              <option value="Kreis Lippe">Kreis Lippe</option>
              <option value="Kreis Guetersloh">Kreis Gütersloh</option>
              <option value="Kreis Paderborn">Kreis Paderborn</option>
              <option value="Bielefeld">Bielefeld</option>
              <option value="Kreis Osnabrueck">Kreis Osnabrück</option>
              <option value="Schaumburg">Schaumburg</option>
              <option value="Kreis Hoexter">Kreis Höxter</option>
              <option value="Andere Region">Andere Region</option>
            </select>
            {fieldErrors.carLocation && <span id="err-carLocation" className="field-error">{fieldErrors.carLocation}</span>}
          </label>
          {carLocation === "Andere Region" && (
            <label>
              Ort eingeben *
              <input
                name="carLocationOther"
                type="text"
                required
                placeholder="z. B. Hannover"
                aria-describedby={fieldErrors.carLocationOther ? "err-carLocationOther" : undefined}
                aria-invalid={!!fieldErrors.carLocationOther}
              />
              {fieldErrors.carLocationOther && <span id="err-carLocationOther" className="field-error">{fieldErrors.carLocationOther}</span>}
            </label>
          )}
          <label>
            Wunschtermin *
            <input
              name="preferredDate"
              type="date"
              required
              aria-describedby={fieldErrors.preferredDate ? "err-preferredDate" : undefined}
              aria-invalid={!!fieldErrors.preferredDate}
            />
            {fieldErrors.preferredDate && <span id="err-preferredDate" className="field-error">{fieldErrors.preferredDate}</span>}
          </label>
        </div>
      )}

      <label>
        Nachricht *
        <textarea
          name="details"
          required
          minLength={20}
          rows={6}
          placeholder="Erzähle kurz von deinem Vorhaben, Termin und Wünschen ..."
          aria-describedby={fieldErrors.details ? "err-details" : undefined}
          aria-invalid={!!fieldErrors.details}
        />
        {fieldErrors.details && <span id="err-details" className="field-error">{fieldErrors.details}</span>}
      </label>

      <label className="honeypot">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <button className="btn" type="submit" disabled={submitState === "loading"}>
        {submitState === "loading" ? "Wird gesendet ..." : "Nachricht senden"}
      </button>

      {message && (
        <p className={`form-message ${submitState === "success" ? "success" : "error"}`}>{message}</p>
      )}
    </form>
  );
}
