"use client";

import { useEffect, useRef } from "react";

export function FooterCtaVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className="footer-cta-video"
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
    >
      <source src="/videos/Hochzeit.mp4" type="video/mp4" />
    </video>
  );
}
