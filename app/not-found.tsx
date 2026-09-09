import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero
        kicker="Not found"
        title="This page isn’t on campus."
        lede="The link may be old. Head home or visit admissions to keep exploring."
      />
      <section className="section">
        <div className="wrap btn-row">
          <Link className="btn btn--dark" href="/">
            Back home
          </Link>
          <Link className="btn btn--ghost-dark" href="/contact">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
