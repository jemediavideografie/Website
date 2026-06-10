import type { Metadata } from "next";
import Script from "next/script";
import { Cinzel, Great_Vibes } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jemedia.de"),
  title: {
    default: "JE Media – Hochzeitsvideograf Espelkamp & OWL",
    template: "%s | JE Media",
  },
  description:
    "Cinematischer Hochzeitsvideograf aus Espelkamp, NRW. Emotionale Hochzeitsfilme in 4K für Paare in OWL, Minden, Bielefeld und ganz NRW.",
  keywords: [
    "Hochzeitsvideograf Espelkamp",
    "Hochzeitsfilm OWL",
    "Hochzeitsvideo NRW",
    "Videograf Hochzeit Minden",
    "Hochzeitsfilm Bielefeld",
    "cinematische Hochzeitsvideografie",
    "Hochzeitsvideograf Ostwestfalen",
    "JE Media",
  ],
  authors: [{ name: "Joel", url: "https://jemedia.de" }],
  creator: "Joel – JE Media",
  openGraph: {
    title: "JE Media – Hochzeitsvideograf Espelkamp & OWL",
    description:
      "Cinematischer Hochzeitsvideograf aus Espelkamp, NRW. Emotionale Hochzeitsfilme in 4K für Paare in OWL, Minden, Bielefeld und ganz NRW.",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "JE Media – Hochzeitsvideograf aus Espelkamp" }],
    locale: "de_DE",
    type: "website",
    siteName: "JE Media",
    url: "https://jemedia.de",
  },
  twitter: {
    card: "summary_large_image",
    title: "JE Media – Hochzeitsvideograf Espelkamp & OWL",
    description:
      "Cinematischer Hochzeitsvideograf aus Espelkamp, NRW. Emotionale Hochzeitsfilme in 4K.",
    images: ["/images/hero.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "manifest", url: "/manifest.json" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://jemedia.de",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://jemedia.de/#joel",
  name: "Joel",
  jobTitle: "Hochzeitsvideograf",
  url: "https://jemedia.de/ueber-mich",
  image: "https://jemedia.de/images/portrait.jpg",
  worksFor: { "@id": "https://jemedia.de/#business" },
  sameAs: [
    "https://www.instagram.com/_je.media_/",
    "https://www.tiktok.com/@_je.media_",
  ],
  knowsAbout: ["Hochzeitsvideografie", "Cinematografie", "Videobearbeitung", "Sony A7 III"],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://jemedia.de/#business",
  name: "JE Media",
  description:
    "Cinematischer Hochzeitsvideograf aus Espelkamp, NRW. Emotionale Hochzeitsfilme in 4K für Paare in Ostwestfalen-Lippe und ganz NRW.",
  url: "https://jemedia.de",
  telephone: "+491759084870",
  image: "https://jemedia.de/images/portrait.jpg",
  logo: "https://jemedia.de/images/logoclean.png",
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Banküberweisung",
  founder: { "@id": "https://jemedia.de/#joel" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Espelkamp",
    addressRegion: "Nordrhein-Westfalen",
    postalCode: "32339",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.3757,
    longitude: 8.6194,
  },
  areaServed: [
    { "@type": "City", name: "Espelkamp" },
    { "@type": "City", name: "Minden" },
    { "@type": "City", name: "Bielefeld" },
    { "@type": "City", name: "Herford" },
    { "@type": "City", name: "Paderborn" },
    { "@type": "City", name: "Osnabrück" },
    { "@type": "City", name: "Münster" },
    { "@type": "State", name: "Nordrhein-Westfalen" },
  ],
  sameAs: [
    "https://www.instagram.com/_je.media_/",
    "https://www.tiktok.com/@_je.media_",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hochzeitsvideografie Pakete",
    itemListElement: [
      { "@type": "Offer", name: "First Look & Trauung", price: "180", priceCurrency: "EUR" },
      { "@type": "Offer", name: "Trauung & Nachfeier", price: "200", priceCurrency: "EUR" },
      { "@type": "Offer", name: "Ganztagesreportage", price: "350", priceCurrency: "EUR" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${cinzel.variable} ${greatVibes.variable}`}>
      <head>
        <Script
          defer
          data-domain="jemedia.de"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}




