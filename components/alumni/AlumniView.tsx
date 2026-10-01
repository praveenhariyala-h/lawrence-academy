"use client";

import AboutReveal from "@/components/about/AboutReveal";
import AlumniHero from "@/components/alumni/AlumniHero";
import AlumniStories from "@/components/alumni/AlumniStories";
import AlumniTestimonials from "@/components/alumni/AlumniTestimonials";
import { useEditable } from "@/components/tina/EditablePage";
import type { AlumniContent } from "@/lib/alumni";

export default function AlumniView({ content: initial }: { content: AlumniContent }) {
  const content = useEditable("alumni", initial);

  return (
    <div className="alumni-page">
      <AboutReveal>
        <AlumniHero hero={content.hero} stories={content.stories} />
      </AboutReveal>

      <AlumniStories stories={content.stories} form={content.form} />
      {content.testimonials ? <AlumniTestimonials testimonials={content.testimonials} /> : null}
    </div>
  );
}
