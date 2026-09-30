import Image from "next/image";
import { tinaMark } from "@/components/tina/EditablePage";
import type { AlumniContent } from "@/lib/alumni";

function Leaves() {
  return (
    <svg className="alumni-stories-leaves" viewBox="0 0 160 90" aria-hidden="true">
      <path
        d="M118 18c18 8 32 24 34 42-16-2-30-12-38-26 8-2 14-8 16-16-6 2-10 1-12 0Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M128 28c8 10 10 22 8 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M96 8c14 14 18 32 14 48-14-6-24-18-28-32 6-2 10-8 14-16Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export default function AlumniStories({ stories }: { stories: AlumniContent["stories"] }) {
  const items = (stories.items ?? []).filter((story) => story && (story.name || story.quote || story.photo));

  return (
    <section className="alumni-stories" aria-labelledby="alumni-stories-title">
      <Leaves />
      <div className="wrap">
        <h2 className="visually-hidden" id="alumni-stories-title" data-tina-field={tinaMark(stories, "title")}>
          {stories.title}
        </h2>
        <p className="alumni-stories-intro" data-tina-field={tinaMark(stories, "intro")}>
          {stories.intro}
        </p>
        <div className="alumni-story-list">
          {items.map((story, index) => (
            <article className={index % 2 === 1 ? "alumni-story is-reverse" : "alumni-story"} key={`${story.name}-${index}`}>
              {story.photo ? (
                <Image
                  className="alumni-story-photo"
                  src={story.photo}
                  alt={story.photoAlt || story.name}
                  width={480}
                  height={360}
                  data-tina-field={tinaMark(story, "photo")}
                />
              ) : null}
              <div className="alumni-story-id">
                <h3 data-tina-field={tinaMark(story, "name")}>{story.name}</h3>
                <p className="alumni-story-batch" data-tina-field={tinaMark(story, "batch")}>
                  {story.batch}
                </p>
                <p data-tina-field={tinaMark(story, "role")}>{story.role}</p>
                <p data-tina-field={tinaMark(story, "place")}>{story.place}</p>
              </div>
              <span className="alumni-story-rule" aria-hidden="true" />
              <blockquote className="alumni-story-quote" data-tina-field={tinaMark(story, "quote")}>
                <span aria-hidden="true">“</span>
                <p>&ldquo;{story.quote}&rdquo;</p>
              </blockquote>
            </article>
          ))}
        </div>
        <a className="alumni-stories-next" href="#alumni-form" aria-label="Continue to the alumni form">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 5v12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M7 13.5 12 18.5l5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
