export default function PageHero({
  kicker,
  title,
  lede,
  fields
}: {
  kicker: string;
  title: string;
  lede: string;
  fields?: {
    kicker?: string;
    title?: string;
    lede?: string;
  };
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <span className="kicker" data-tina-field={fields?.kicker}>
          {kicker}
        </span>
        <h1 data-tina-field={fields?.title}>{title}</h1>
        <p className="lede" data-tina-field={fields?.lede}>
          {lede}
        </p>
      </div>
    </section>
  );
}
