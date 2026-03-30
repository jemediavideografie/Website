"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Start" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const leftNavItems = navItems.slice(0, 2);
  const rightNavItems = navItems.slice(2);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container nav-wrap">
        <Link href="/" className="brand brand-mobile" aria-label="Zur Startseite">
          <Image src="/images/logoclean.png" alt="JE Media Logo" width={44} height={44} />
        </Link>
        <nav className="main-nav">
          {leftNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/" className="nav-logo-link" aria-label="Zur Startseite">
            <Image src="/images/logoclean.png" alt="JE Media Logo" width={110} height={110} />
          </Link>
          {rightNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMobileOpen((value) => !value)}
          aria-expanded={mobileOpen}
          aria-label="Menü öffnen"
        >
          Menü
        </button>
        <Link className="btn btn-small header-cta" href="/kontakt">
          Anfrage stellen
        </Link>
      </div>
      {mobileOpen && (
        <nav className="mobile-nav container">
          {navItems.map((item) => (
            <Link
              key={`mobile-${item.href}`}
              href={item.href}
              className={pathname === item.href ? "active" : ""}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
