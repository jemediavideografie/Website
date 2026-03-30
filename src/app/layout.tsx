import type { Metadata } from "next";
import Script from "next/script";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};


export const metadata: Metadata = {
  metadataBase: new URL("https://jemedia.de"),
  title: "JE Media",
  description:
    "Cinematische Hochzeits- und Automotive-Videografie aus OWL. Kontakt direkt per WhatsApp und Instagram.",
  openGraph: {
    title: "JE Media",
    description:
      "Cinematische Hochzeits- und Automotive-Videografie aus OWL. Kontakt direkt per WhatsApp und Instagram.",
    images: ["/images/hero.jpg"],
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <Script
          defer
          data-domain="jemedia.de"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}




