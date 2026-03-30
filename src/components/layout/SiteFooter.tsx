import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <p>
          © {new Date().getFullYear()} JE Media. Alle Rechte vorbehalten. Website von{" "}
          <a href="https://www.vexaro.design" target="_blank" rel="noreferrer">
            vexaro.design
          </a>
          .
        </p>
        <div className="footer-links">
          <a href="mailto:Je.Media.videografie@gmail.com">Je.Media.videografie@gmail.com</a>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
