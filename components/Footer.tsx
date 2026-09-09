import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <h3>Lawrence Academy</h3>
          <p>
            18 River Road, Hartwell
            <br />
            JK–12 independent school
          </p>
        </div>
        <div>
          <h3>Visit</h3>
          <p>
            <Link href="/admissions">Admissions</Link>
            <br />
            <Link href="/contact">Request a tour</Link>
            <br />
            <Link href="/academics">Academics</Link>
          </p>
        </div>
        <div>
          <h3>Life</h3>
          <p>
            <Link href="/campus">Athletics & arts</Link>
            <br />
            <Link href="/about">Our mission</Link>
            <br />
            <Link href="/contact">Employment</Link>
          </p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            (555) 012-4800
            <br />
            hello@lawrence.academy
          </p>
        </div>
      </div>
      <div className="wrap legal">
        <span>© {new Date().getFullYear()} Lawrence Academy. All rights reserved.</span>
        <span>Responsive Next.js SPA</span>
      </div>
    </footer>
  );
}
