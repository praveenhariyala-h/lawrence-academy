import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main">
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
      </main>
      <Footer />
    </>
  );
}
