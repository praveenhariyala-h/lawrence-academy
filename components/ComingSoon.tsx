import PageHero from "@/components/PageHero";

export default function ComingSoon({
  kicker,
  title
}: {
  kicker: string;
  title: string;
}) {
  return (
    <PageHero
      kicker={kicker}
      title={title}
      lede="This page content is hidden for now. The home page is ready to review."
    />
  );
}
