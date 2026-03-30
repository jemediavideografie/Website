"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type HeroVideoCompareProps = {
  leftLabel?: string;
  rightLabel?: string;
  leftVideoSrc: string;
  rightVideoSrc: string;
};

export function HeroVideoCompare({
  leftLabel = "Hochzeit",
  rightLabel = "Automotive",
  leftVideoSrc,
  rightVideoSrc,
}: HeroVideoCompareProps) {
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);

  const [value, setValue] = useState(50);
  const [showHint, setShowHint] = useState(true);
  const [leftLoaded, setLeftLoaded] = useState(false);
  const [rightLoaded, setRightLoaded] = useState(false);
  const videosLoaded = leftLoaded && rightLoaded;

  const setValueFromClientX = (clientX: number) => {
    const el = mediaRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    const clamped = Math.max(0, Math.min(100, pct));
    setValue(Math.round(clamped));
  };

  const topClipPath = useMemo(() => `inset(0 0 0 ${value}%)`, [value]);
  const leftTintClip = useMemo(() => `inset(0 ${100 - value}% 0 0)`, [value]);
  const rightTintClip = useMemo(() => `inset(0 0 0 ${value}%)`, [value]);

  useEffect(() => {
    const t = window.setTimeout(() => setShowHint(false), 6000);
    return () => window.clearTimeout(t);
  }, []);

  function onHandlePointerDown(event: React.PointerEvent<HTMLButtonElement>) {
    draggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    setValueFromClientX(event.clientX);
  }

  function onHandlePointerMove(event: React.PointerEvent<HTMLButtonElement>) {
    if (!draggingRef.current) return;
    setValueFromClientX(event.clientX);
  }

  function stopDragging() {
    draggingRef.current = false;
  }

  return (
    <>
      <div className="hero-compare hero-compare-desktop" aria-label="Video Vergleich">
        <div className="hero-compare-media" ref={mediaRef}>
          <div
            className={`hero-video-skeleton${videosLoaded ? " hero-video-skeleton--loaded" : ""}`}
            aria-hidden="true"
          />

          <video
            className="hero-compare-video base"
            src={leftVideoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onCanPlay={() => setLeftLoaded(true)}
          />
          <video
            className="hero-compare-video top"
            src={rightVideoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onCanPlay={() => setRightLoaded(true)}
            style={{ clipPath: topClipPath, WebkitClipPath: topClipPath }}
          />

          <div
            className="hero-compare-tint hero-compare-tint-left"
            style={{ clipPath: leftTintClip, WebkitClipPath: leftTintClip }}
          />
          <div
            className="hero-compare-tint hero-compare-tint-right"
            style={{ clipPath: rightTintClip, WebkitClipPath: rightTintClip }}
          />

          <div className="hero-compare-divider" style={{ left: `${value}%` }} aria-hidden="true" />

          <button
            type="button"
            className="hero-compare-handle"
            style={{ left: `${value}%` }}
            aria-label="Videos vergleichen (ziehen)"
            onPointerDown={onHandlePointerDown}
            onPointerMove={onHandlePointerMove}
            onPointerUp={stopDragging}
            onPointerCancel={stopDragging}
          />

          {showHint && (
            <div className="hero-compare-hint" aria-hidden="true">
              Zieh den Balken, um zu wechseln
            </div>
          )}

          <div className="hero-compare-badges" aria-hidden="true">
            <span className="badge hero-compare-badge-left">{leftLabel}</span>
            <span className="badge hero-compare-badge-right">{rightLabel}</span>
          </div>
        </div>

        <div className="hero-compare-controls">
          <input
            id="hero-compare-range"
            className="hero-compare-range"
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            aria-label="Video Vergleich Regler"
          />
        </div>
      </div>

      <div className="hero-compare hero-compare-mobile" aria-label="Video Vergleich (mobil gestapelt)">
        <div className="hero-compare-media">
          <div className="hero-compare-mobile-half hero-compare-mobile-half-top" aria-hidden="true">
            <div className={`hero-video-skeleton${leftLoaded ? " hero-video-skeleton--loaded" : ""}`} aria-hidden="true" />
            <video
              className="hero-compare-video base"
              src={leftVideoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onCanPlay={() => setLeftLoaded(true)}
            />
          </div>

          <div className="hero-compare-mobile-half hero-compare-mobile-half-bottom" aria-hidden="true">
            <div className={`hero-video-skeleton${rightLoaded ? " hero-video-skeleton--loaded" : ""}`} aria-hidden="true" />
            <video
              className="hero-compare-video base"
              src={rightVideoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onCanPlay={() => setRightLoaded(true)}
            />
          </div>

          <div className="hero-compare-mobile-divider" aria-hidden="true" />

          <div className="hero-compare-badges" aria-hidden="true">
            <span className="badge hero-compare-badge-left">{leftLabel}</span>
            <span className="badge hero-compare-badge-right">{rightLabel}</span>
          </div>
        </div>
      </div>
    </>
  );
}
