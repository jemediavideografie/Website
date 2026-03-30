import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z
  .object({
    name: z.string().min(2, "Bitte einen gültigen Namen angeben."),
    email: z.string().email("Bitte eine gültige E-Mail-Adresse angeben."),
    phone: z.string().optional(),
    preferredContact: z.enum(["WhatsApp", "Instagram", "E-Mail"], {
      error: "Bitte einen bevorzugten Kontaktweg angeben.",
    }),
    projectType: z.enum(["Hochzeit", "Automotive", "Sonstiges"], {
      error: "Bitte eine Projektart auswählen.",
    }),
    weddingLocation: z.string().optional(),
    weddingDate: z.string().optional(),
    carLocation: z.string().optional(),
    carLocationOther: z.string().optional(),
    preferredDate: z.string().optional(),
    details: z.string().min(20, "Bitte eine aussagekräftige Nachricht eingeben (mind. 20 Zeichen)."),
    website: z.string().max(0, "Spam erkannt."),
    formStartedAt: z.number(),
  })
  .superRefine((data, ctx) => {
    if (data.projectType === "Hochzeit") {
      if (!data.weddingLocation || data.weddingLocation.trim().length < 2) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Bitte den Ort der Hochzeit angeben.", path: ["weddingLocation"] });
      }
      if (!data.weddingDate) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Bitte ein Hochzeitsdatum angeben.", path: ["weddingDate"] });
      }
    }
    if (data.projectType === "Automotive") {
      if (!data.carLocation || data.carLocation.trim().length < 2) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Bitte einen groben Ort für das Automotive-Projekt angeben.", path: ["carLocation"] });
      }
      if (data.carLocation === "Andere Region" && (!data.carLocationOther || data.carLocationOther.trim().length < 2)) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Bitte einen Ort für 'Andere Region' angeben.", path: ["carLocationOther"] });
      }
      if (!data.preferredDate) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Bitte einen Wunschtermin angeben.", path: ["preferredDate"] });
      }
    }
    if (Date.now() - data.formStartedAt < 3000) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Bitte versuche es erneut.", path: ["formStartedAt"] });
    }
  });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const firstError = result.error.issues[0]?.message ?? "Ungültige Eingabe.";
      return NextResponse.json({ message: firstError }, { status: 400 });
    }

    const payload = result.data;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { message: "Server-Konfiguration fehlt (RESEND_API_KEY)." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const toAddress = process.env.CONTACT_TO_EMAIL ?? "Je.Media.videografie@gmail.com";
    const fromAddress = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

    await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: payload.email,
      subject: `Neue Anfrage (${payload.projectType}) von ${payload.name}`,
      text: [
        `Name: ${payload.name}`,
        `E-Mail: ${payload.email}`,
        `Telefon: ${payload.phone || "-"}`,
        `Bevorzugter Kontaktweg: ${payload.preferredContact}`,
        `Projektart: ${payload.projectType}`,
        `Ort Hochzeit: ${payload.weddingLocation || "-"}`,
        `Datum Hochzeit: ${payload.weddingDate || "-"}`,
        `Grober Ort (Automotive): ${payload.carLocation || "-"}`,
        `Andere Region (Automotive): ${payload.carLocationOther || "-"}`,
        `Wunschtermin (Automotive): ${payload.preferredDate || "-"}`,
        "",
        "Nachricht:",
        payload.details,
      ].join("\n"),
    });

    return NextResponse.json({ message: "OK" });
  } catch {
    return NextResponse.json(
      { message: "Beim Senden ist ein Fehler aufgetreten. Bitte später erneut versuchen." },
      { status: 500 },
    );
  }
}
