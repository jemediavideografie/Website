"use client";

import { useState } from "react";

const VIMEO_ID = "1212891426";

export function ShowreelPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="showreel-player">
      {playing ? (
        <iframe
          className="showreel-frame"
          src={`https://player.vimeo.com/video/${VIMEO_ID}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`}
          allow="autoplay; fullscreen; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          title="JE Media – Showreel"
        />
      ) : (
        <button
          type="button"
          className="showreel-facade"
          onClick={() => setPlaying(true)}
          aria-label="Showreel abspielen"
        >
          <img
            src="/images/showreel-poster.jpg"
            alt=""
            width={1280}
            height={720}
            loading="lazy"
            decoding="async"
          />
          <span className="showreel-play" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.3-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
