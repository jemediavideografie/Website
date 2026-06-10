export const dynamic = "force-static";
import type { MetadataRoute } from "next";

const base = "https://jemedia.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/preise`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/kontakt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/ueber-mich`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/impressum`, lastModified: new Date("2025-01-01"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/datenschutz`, lastModified: new Date("2025-01-01"), changeFrequency: "yearly", priority: 0.2 },
  ];
}
