import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { formatNewsDate, reader } from "@/lib/keystatic";

export const metadata: Metadata = {
  title: "News & Events",
  description:
    "Awards, results, and campus news from Lawrence High School ICSE, HSR Layout, Bengaluru."
};

export default async function NewsPage() {
  const posts = await reader.collections.posts.all();
  const sorted = [...posts].sort((a, b) =>
    (b.entry.date ?? "").localeCompare(a.entry.date ?? "")
  );

  return (
    <>
      <PageHero
        kicker="News & events"
        title="Bulletin board, results and big wins."
        lede="Awards, competitions, and campus stories from Lawrence High School."
      />

      <section className="band band--white">
        <div className="wrap">
          {sorted.length === 0 ? (
            <p className="lede">Stories will appear here once they are published.</p>
          ) : (
            <div className="cards news-list">
              {sorted.map((post) => (
                <Link key={post.slug} className="card" href={`/news/${post.slug}`}>
                  <span className="kicker">{formatNewsDate(post.entry.date)}</span>
                  <h2>{post.entry.title}</h2>
                  {post.entry.summary ? <p>{post.entry.summary}</p> : null}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
