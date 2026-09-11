import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import type { HomeHeroSlide } from "@/lib/home";

export default function HeroSection({
  slides,
  learnMoreHref,
  learnMoreLabel
}: {
  slides: HomeHeroSlide[];
  learnMoreHref: string;
  learnMoreLabel: string;
}) {
  return (
    <div className="hero-banner">
      <Carousel
        className="hero-wrap"
        slides={slides.map((slide, index) => (
          <section key={`${slide.title}-${index}`} className="hero hero-slide">
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
      <Link className="hero-learn-more" href={learnMoreHref}>
        {learnMoreLabel}
      </Link>
    </div>
  );
}
