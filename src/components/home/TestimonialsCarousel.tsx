"use client";

import { useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  date: string;
};

const PER_PAGE = 3;

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const total = items.length;
  const pages = Math.ceil(total / PER_PAGE);

  function prev() {
    setIndex((i) => (i - 1 + pages) % pages);
  }

  function next() {
    setIndex((i) => (i + 1) % pages);
  }

  const visible = items.slice(index * PER_PAGE, index * PER_PAGE + PER_PAGE);

  return (
    <div className="testimonials-carousel">
      <div className="testimonials-grid">
        {visible.map((t) => (
          <article key={t.name} className="testimonial-card">
            <p className="testimonial-quote">{t.quote}</p>
            <div>
              <p className="testimonial-author">{t.name}</p>
              <p className="testimonial-date">{t.date}</p>
            </div>
          </article>
        ))}
      </div>

      {pages > 1 && (
        <div className="testimonials-nav">
          <button
            type="button"
            className="testimonials-nav-btn"
            onClick={prev}
            aria-label="Vorherige Rezensionen"
          >
            ←
          </button>
          <span className="testimonials-dots">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={`testimonials-dot${i === index ? " active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Seite ${i + 1}`}
              />
            ))}
          </span>
          <button
            type="button"
            className="testimonials-nav-btn"
            onClick={next}
            aria-label="Nächste Rezensionen"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}
