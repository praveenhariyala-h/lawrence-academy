"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useCallback, useEffect, useState } from "react";
import { nav } from "@/lib/site";

const NavLinks = memo(function NavLinks({
  pathname,
  onNavigate
}: {
  pathname: string;
  onNavigate: () => void;
}) {
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {nav.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-current={isActive(link.href) ? "page" : undefined}
          onClick={onNavigate}
        >
          {link.label}
        </Link>
      ))}
      <Link className="btn btn--blue" href="/admissions" onClick={onNavigate}>
        Apply
      </Link>
    </>
  );
});

function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = useCallback(() => setOpen(false), []);
  const toggleMenu = useCallback(() => setOpen((value) => !value), []);

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

  useEffect(() => {
    document.body.classList.toggle("nav-locked", open);
    return () => document.body.classList.remove("nav-locked");
  }, [open]);

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span className="topbar-helpline">
            Admission Helpline:{" "}
            <a href="tel:+918025722777">080 2572 2777</a>
          </span>
          <Link className="btn topbar-btn" href="/admissions" prefetch>
            Admission Enquiry
          </Link>
        </div>
      </div>
      <header className="header">
        <div className="wrap">
          <Link className="logo" href="/" onClick={closeMenu}>
            <Image
              className="logo-lockup"
              src="/images/logo-lockup.png"
              alt="Lawrence High School, HSR Layout, Bengaluru"
              width={522}
              height={150}
              priority
            />
          </Link>
          <button
            className={open ? "nav-toggle is-open" : "nav-toggle"}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={toggleMenu}
          >
            <span />
          </button>
          <nav className="nav-desktop" aria-label="Primary">
            <NavLinks pathname={pathname} onNavigate={closeMenu} />
          </nav>
        </div>
      </header>
      <div
        className={open ? "nav-overlay is-open" : "nav-overlay"}
        onClick={closeMenu}
      />
      <nav
        id="mobile-nav"
        className={open ? "nav-drawer is-open" : "nav-drawer"}
        aria-label="Mobile"
        aria-hidden={!open}
      >
        <NavLinks pathname={pathname} onNavigate={closeMenu} />
      </nav>
    </>
  );
}

export default memo(Header);
