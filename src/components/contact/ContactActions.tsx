type ContactActionsProps = {
  className?: string;
};

export function ContactActions({ className = "" }: ContactActionsProps) {
  return (
    <div className={`contact-actions ${className}`.trim()}>
      <a className="btn" href="https://wa.me/491759084870" target="_blank" rel="noreferrer">
        WhatsApp Kontakt
      </a>
      <a className="btn btn-ghost" href="https://www.instagram.com/_je.media_/" target="_blank" rel="noreferrer">
        Instagram
      </a>
      <a className="btn btn-ghost" href="https://www.tiktok.com/@_je.media_" target="_blank" rel="noreferrer">
        TikTok
      </a>
      <a className="btn btn-ghost" href="mailto:Je.Media.videografie@gmail.com">
        E-Mail schreiben
      </a>
    </div>
  );
}

