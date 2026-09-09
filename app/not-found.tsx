import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero
        kicker="Not found"
        title="This page isn’t on campus."
        lede="Try the home page, admissions, or contact."
      />
      <section className="band band--white">
        <div className="wrap btn-row">
          <Link className="btn btn--blue" href="/">
            Home
          </Link>
          <Link className="btn btn--ghost-dark" href="/contact">
            Contact
          </Link>
        </div>
      </section>
    </>
  );
}
