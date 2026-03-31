import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true, // ← wichtig! Next.js Image Optimization läuft nicht auf static hosting
  },
  allowedDevOrigins: ["10.42.0.3x", "192.168.178.184"],
};

export default nextConfig;
