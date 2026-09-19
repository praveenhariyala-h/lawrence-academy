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
  const [closedHref, setClosedHref] = useState<string | null>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const closeDropdown = useCallback(
    (href: string, event?: { currentTarget: HTMLElement }) => {
      setClosedHref(href);
      onNavigate();
      event?.currentTarget.blur();
    },
    [onNavigate]
  );

  return (
    <>
      {nav.map((link) => {
        if (!link.children?.length) {
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              onClick={onNavigate}
            >
              {link.label}
            </Link>
          );
        }

        return (
          <div
            key={link.href}
            className={closedHref === link.href ? "nav-item is-closed" : "nav-item"}
            onMouseLeave={() => setClosedHref(null)}
          >
            <Link
              href={link.href}
              className="nav-parent"
              aria-current={isActive(link.href) ? "page" : undefined}
              aria-haspopup="true"
              onClick={(event) => closeDropdown(link.href, event)}
            >
              {link.label}
              <span className="nav-caret" aria-hidden="true" />
            </Link>
            <div className="nav-sub">
              {link.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  aria-current={pathname === child.href ? "page" : undefined}
                  onClick={(event) => closeDropdown(link.href, event)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        );
      })}
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
              width={1024}
              height={341}
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
          <Link className="btn btn--blue header-apply" href="/admissions" onClick={closeMenu}>
            Apply
          </Link>
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
        <Link className="btn btn--blue" href="/admissions" onClick={closeMenu}>
          Apply
        </Link>
      </nav>
    </>
  );
}

export default memo(Header);
