import Link from "next/link";
import { school } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <h3>{school.name}</h3>
          <p>
            {school.address}
            <br />
            {school.trust}
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <p>
            <Link href="/learning">Learning</Link>
            <br />
            <Link href="/beyond-books">Beyond Books</Link>
            <br />
            <Link href="/admissions">Admissions</Link>
          </p>
        </div>
        <div>
          <h3>Community</h3>
          <p>
            <Link href="/news">News & Events</Link>
            <br />
            <Link href="/alumni">Alumni</Link>
            <br />
            <Link href="/about">About us</Link>
          </p>
        </div>
        <div>
          <h3>Office</h3>
          <p>
            {school.phones[0]}
            <br />
            Transport: {school.transportPhone}
            <br />
            {school.emails[0]}
          </p>
        </div>
      </div>
      <div className="wrap legal">
        <span>© {new Date().getFullYear()} {school.name}. All rights reserved.</span>
        <span>ICSE · Bengaluru</span>
      </div>
    </footer>
  );
}
