export default function PageHero({
  kicker,
  title,
  lede
}: {
  kicker: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <span className="kicker">{kicker}</span>
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
      </div>
    </section>
  );
}
