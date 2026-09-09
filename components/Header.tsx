"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/campus", label: "Campus Life" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="topbar">
        <div className="wrap">
          <span>Hartwell Campus · Grades JK–12</span>
          <span>
            <a href="tel:+15550124800">(555) 012-4800</a> ·{" "}
            <Link href="/admissions">Parent Portal</Link>
          </span>
        </div>
      </div>
      <header className="header">
        <div className="wrap">
          <Link className="logo" href="/" onClick={() => setOpen(false)}>
            <span className="logo-mark">LA</span>
            <span className="logo-text">
              <strong>Lawrence Academy</strong>
              <span>Established 1894</span>
            </span>
          </Link>
          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
          </button>
          <nav className={open ? "nav is-open" : "nav"} aria-label="Primary">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link className="btn btn--gold" href="/admissions">
              Apply
            </Link>
          </nav>
        </div>
      </header>
      <div
        className={open ? "nav-overlay is-open" : "nav-overlay"}
        onClick={() => setOpen(false)}
      />
    </>
  );
}
