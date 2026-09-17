export const academicsStages = [
  {
    slug: "kindergarten",
    label: "Kindergarten",
    title: "A Joyful Beginning for a Brighter Tomorrow",
    description:
      "Kindergarten at Lawrence High School ICSE — Nursery, LKG and UKG. A play-based programme aligned with NEP 2020 and the Collins Kindergarten Series.",
    lede: "Nursery, LKG and UKG — a play-based beginning that builds literacy, numeracy, confidence and a lifelong love for learning."
  },
  {
    slug: "primary",
    label: "Primary",
    title: "Nurturing Foundations, Inspiring Futures",
    description:
      "Primary School at Lawrence High School ICSE — Grades 1 to 4. Strong foundations in knowledge, curiosity, confidence and character.",
    lede: "Grades 1 to 4 — academic knowledge with space to explore, create, communicate and grow in confidence."
  },
  {
    slug: "middle-school",
    label: "Middle School",
    title: "Bridging the Gap: Preparing Students for High School Success",
    description:
      "Middle School at Lawrence High School ICSE — Grades 5 to 7. NEWS: Navigate, Explore, Work Hard, Succeed.",
    lede: "Grades 5 to 7 — deeper learning, new interests, and a confident bridge into high school."
  },
  {
    slug: "high-school",
    label: "High School",
    title: "Building Future-Ready Individuals",
    description:
      "High School at Lawrence High School ICSE — Grades 8 to 10. ICSE curriculum, mentorship, and holistic development for board success.",
    lede: "Grades 8 to 10 — ICSE academics, mentorship, and character that prepare students for tomorrow."
  }
] as const;

export type AcademicsStageSlug = (typeof academicsStages)[number]["slug"];

export const academicsNav = academicsStages.map((stage) => ({
  href: `/academics/${stage.slug}`,
  label: stage.label
}));

export function getAcademicsStage(slug: string) {
  return academicsStages.find((stage) => stage.slug === slug);
}
