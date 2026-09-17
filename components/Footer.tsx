import Image from "next/image";
import Link from "next/link";
import { school } from "@/lib/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/alumni", label: "Alumni" },
  { href: "/about/campus", label: "Campus" },
  { href: "/about/facilities", label: "Facilities" }
];

const admissionLinks = [
  { href: "/admissions#process", label: "Admission Process" },
  { href: "/admissions#fees", label: "Fee Structure" },
  { href: "/admissions#apply", label: "Apply Now" },
  { href: "/contact", label: "FAQs" }
];

function SocialIcon({ label }: { label: string }) {
  const common = {
    viewBox: "0 0 24 24",
    "aria-hidden": true as const
  };

  if (label === "Facebook") {
    return (
      <svg {...common}>
        <path fill="currentColor" d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1Z" />
      </svg>
    );
  }
  if (label === "Instagram") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.4" />
        <circle cx="16.8" cy="7.2" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (label === "YouTube") {
    return (
      <svg {...common}>
        <path fill="currentColor" d="M22 8.2a3 3 0 0 0-2.1-2.1C18.2 5.7 12 5.7 12 5.7s-6.2 0-7.9.4A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12a31 31 0 0 0 .4 3.8 3 3 0 0 0 2.1 2.1c1.7.4 7.9.4 7.9.4s6.2 0 7.9-.4a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-3.8 31 31 0 0 0-.4-3.8ZM10 15.2V8.8L15.5 12 10 15.2Z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path fill="currentColor" d="M6.5 9.5v8h-3v-8h3Zm-1.5-5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM20 17.5h-3v-4.2c0-1.4-.5-2.3-1.7-2.3-1 0-1.5.7-1.7 1.3-.1.2-.1.5-.1.8v4.4h-3s.1-7.1 0-8h3v1.1c.4-.6 1.1-1.5 2.8-1.5 2 0 3.5 1.3 3.5 4.2v4.2Z" />
    </svg>
  );
}

function ContactIcon({ type }: { type: "pin" | "phone" | "mail" }) {
  const common = {
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
    className: "footer-contact-icon"
  };

  if (type === "pin") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 21s7-6.2 7-11.2A7 7 0 1 0 5 9.8C5 14.8 12 21 12 21Z" />
        <circle cx="12" cy="9.8" r="2.2" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7.2 4.8h2.4l1.2 3-1.6 1.1a12 12 0 0 0 5.9 5.9l1.1-1.6 3 1.2v2.4c0 .7-.6 1.3-1.3 1.3C10.4 18.1 5.9 13.6 5.9 6.1c0-.7.6-1.3 1.3-1.3Z" />
      </svg>
    );
  }

  return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="m5 8 7 5 7-5" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Image
              src="/images/logo-footer.png"
              alt={school.name}
              width={1024}
              height={292}
              sizes="240px"
              unoptimized
            />
          </Link>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Admissions</h3>
          <ul>
            {admissionLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <p className="footer-contact-line">
            <ContactIcon type="pin" />
            <span>{school.address}</span>
          </p>
          <p className="footer-contact-line">
            <ContactIcon type="phone" />
            <a href={`tel:${school.phones[0].replace(/\s/g, "")}`}>{school.phones[0]}</a>
          </p>
          <p className="footer-contact-line">
            <ContactIcon type="mail" />
            <a href={`mailto:${school.emails[0]}`}>{school.emails[0]}</a>
          </p>
        </div>

        <div>
          <h3>Follow Us</h3>
          <div className="footer-socials">
            {school.socials.map((item) => (
              <a key={item.label} href={item.href} aria-label={item.label} target="_blank" rel="noreferrer">
                <SocialIcon label={item.label} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap legal">
        <span>© {year} {school.name}. All rights reserved.</span>
        <span className="legal-links">
          <Link href="/contact">Privacy Policy</Link>
          <Link href="/contact">Terms of Use</Link>
          <Link href="/">Sitemap</Link>
        </span>
      </div>
    </footer>
  );
}
