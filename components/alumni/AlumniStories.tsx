import Image from "next/image";

const stories = [
  {
    name: "Ananya Rao",
    batch: "Batch of 2018",
    role: "Software Engineer",
    place: "Bangalore, India",
    photo: "/images/alumni/ananya.jpg",
    quote:
      "My years at Lawrence gave me a strong foundation, wonderful friendships and the confidence to chase my dreams. The nurturing environment here helped me discover my interests and believe in myself."
  },
  {
    name: "Rohan Mehta",
    batch: "Batch of 2016",
    role: "Mechanical Engineer",
    place: "Singapore",
    photo: "/images/alumni/rohan.jpg",
    quote:
      "Lawrence taught me the importance of discipline, curiosity and kindness. The values I learnt here continue to guide me in every step of my journey. I am grateful to my teachers who always encouraged me to do my best."
  },
  {
    name: "Meera Nair",
    batch: "Batch of 2019",
    role: "Medical Student",
    place: "Chennai, India",
    photo: "/images/alumni/meera.jpg",
    quote:
      "Lawrence gave me a space to learn, grow and explore my passions. The support from teachers and the friendships I built here will always remain a special part of my life."
  },
  {
    name: "Arjun Singh",
    batch: "Batch of 2015",
    role: "Entrepreneur",
    place: "Dubai, UAE",
    photo: "/images/alumni/arjun.jpg",
    quote:
      "From sports to academics, Lawrence helped me develop confidence, resilience and a love for learning. The experiences here shaped who I am today."
  },
  {
    name: "Neha Varghese",
    batch: "Batch of 2017",
    role: "Chartered Accountant",
    place: "Bangalore, India",
    photo: "/images/alumni/neha.jpg",
    quote:
      "The values, teachers and opportunities at Lawrence helped me become a better version of myself. I will always be proud to be a Lawrencian."
  }
];

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

export default function AlumniStories() {
  return (
    <section className="alumni-stories" aria-labelledby="alumni-stories-title">
      <Leaves />
      <div className="wrap">
        <h2 className="visually-hidden" id="alumni-stories-title">
          Alumni stories
        </h2>
        <p className="alumni-stories-intro">
          Wherever life takes them, our alumni carry Lawrence with them — the lessons, the friendships, the values and the person they are today.
        </p>
        <div className="alumni-story-list">
          {stories.map((story, index) => (
            <article className={index % 2 === 1 ? "alumni-story is-reverse" : "alumni-story"} key={story.name}>
              <Image
                className="alumni-story-photo"
                src={story.photo}
                alt=""
                width={480}
                height={360}
              />
              <div className="alumni-story-id">
                <h3>{story.name}</h3>
                <p className="alumni-story-batch">{story.batch}</p>
                <p>{story.role}</p>
                <p>{story.place}</p>
              </div>
              <span className="alumni-story-rule" aria-hidden="true" />
              <blockquote className="alumni-story-quote">
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
