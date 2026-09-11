import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import Markdoc, { type Node } from "@markdoc/markdoc";
import PageHero from "@/components/PageHero";
import { formatNewsDate, reader } from "@/lib/keystatic";

type NewsPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await reader.collections.posts.all();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await reader.collections.posts.read(slug);
  if (!post) {
    return { title: "News" };
  }
  return {
    title: post.title,
    description: post.summary || undefined
  };
}

export default async function NewsPostPage({ params }: NewsPageProps) {
  const { slug } = await params;
  const post = await reader.collections.posts.read(slug);
  if (!post) {
    notFound();
  }

  const { node } = await post.content();
  const ast = node as unknown as Node;
  const errors = Markdoc.validate(ast);
  if (errors.length) {
    console.error(errors);
    throw new Error("Invalid news content");
  }
  const renderable = Markdoc.transform(ast);

  return (
    <>
      <PageHero
        kicker={formatNewsDate(post.date)}
        title={post.title}
        lede={post.summary || "News from Lawrence High School."}
      />
      <section className="band band--white">
        <div className="wrap news-article">
          {Markdoc.renderers.react(renderable, React)}
          <p>
            <Link href="/news">Back to news</Link>
          </p>
        </div>
      </section>
    </>
  );
}
