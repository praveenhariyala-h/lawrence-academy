import Image from "next/image";

export default function PageBanner({
  src,
  alt,
  title,
  kicker,
  lede,
  grades,
  pills,
  path,
  showTitle,
  className
}: {
  src: string;
  alt: string;
  title: string;
  kicker?: string;
  lede?: string;
  grades?: string;
  pills?: string[];
  path?: string[];
  showTitle?: boolean;
  className?: string;
}) {
  const hasCopy = Boolean(showTitle || kicker || lede || grades || pills?.length || path?.length);

  return (
    <section className="about-hero">
      <div className={`about-hero-banner about-reveal${hasCopy ? " has-copy" : ""}${className ? ` ${className}` : ""}`}>
        <Image src={src} alt={alt} fill priority sizes="100vw" />
        {hasCopy ? (
          <div className="page-banner-copy">
            {kicker ? <span className="kicker">{kicker}</span> : null}
            {grades ? <p className="page-banner-meta">{grades}</p> : null}
            <h1>{title}</h1>
            {pills?.length ? (
              <ul className="page-banner-pills">
                {pills.map((pill) => (
                  <li key={pill}>{pill}</li>
                ))}
              </ul>
            ) : null}
            {path?.length ? (
              <ul className="pr-hero-path">
                {path.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {lede ? <p className="lede">{lede}</p> : null}
          </div>
        ) : (
          <h1 className="visually-hidden">{title}</h1>
        )}
      </div>
    </section>
  );
}
