import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";

const heroSlides = [
  {
    title: "Welcome to Lawrence",
    text: "Where learning is exciting, purposeful, and relevant.",
    image: "/images/hero-campus.png",
    alt: "Lawrence High ICSE campus building in HSR Layout"
  },
  {
    title: "Every child a champion",
    text: "At Lawrence, we blend tradition, innovation and encouragement to make every child a champion.",
    image: "/images/hero-classroom.png",
    alt: "Technology-enabled classroom at Lawrence High School"
  },
  {
    title: "A vibrant campus",
    text: "Visit our campus to discover a wide variety of extracurricular programs.",
    image: "/images/hero-robotics.png",
    alt: "Students in the robotics lab at Lawrence High School"
  }
];

export default function HeroSection() {
  return (
    <div className="hero-banner">
      <Carousel
        className="hero-wrap"
        slides={heroSlides.map((slide, index) => (
          <section key={slide.title} className="hero hero-slide">
            <div className="hero-bg">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="100vw"
                priority={index === 0}
              />
            </div>
          </section>
        ))}
      />
      <Link className="hero-learn-more" href="/about">
        Learn more
      </Link>
    </div>
  );
}
