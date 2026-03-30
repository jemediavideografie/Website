import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Allow local network testing on mobile devices in development.
  allowedDevOrigins: ["10.42.0.38", "192.168.178.184"],
};

export default nextConfig;
