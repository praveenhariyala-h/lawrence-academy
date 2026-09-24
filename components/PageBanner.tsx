import Image from "next/image";

function BannerHeading({ title }: { title: string }) {
  const pieces = title.split(/(\*[^*]+\*)/g).filter(Boolean);

  return (
    <h1>
      {pieces.map((piece, index) =>
        piece.startsWith("*") && piece.endsWith("*") ? (
          <span className="page-banner-accent" key={index}>
            {piece.slice(1, -1)}
          </span>
        ) : (
          piece
        )
      )}
    </h1>
  );
}

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
  gradesAfter,
  ledeItalic,
  fit = "cover",
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
  gradesAfter?: boolean;
  ledeItalic?: boolean;
  fit?: "cover" | "contain";
  className?: string;
}) {
  const hasCopy = Boolean(showTitle || kicker || lede || grades || pills?.length || path?.length);
  const isTitleBanner = Boolean(className?.includes("page-banner-title"));
  const plainTitle = title.replace(/\*/g, "");

  return (
    <section className="about-hero">
      <div
        className={`about-hero-banner${hasCopy ? " has-copy" : ""}${fit === "contain" ? " is-contain" : ""}${className ? ` ${className}` : ""}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          quality={100}
          unoptimized={fit === "contain"}
          sizes={fit === "contain" ? "(max-width: 1024px) 100vw, 1024px" : "100vw"}
          style={{ objectFit: fit, objectPosition: "center center" }}
        />
        {hasCopy ? (
          <div className="page-banner-copy about-reveal">
            {isTitleBanner || kicker ? (
              <span className="page-banner-kicker-row">
                {isTitleBanner ? <span className="page-banner-dash" aria-hidden="true" /> : null}
                {kicker ? <span className="kicker">{kicker}</span> : null}
              </span>
            ) : null}
            {grades && !gradesAfter ? <p className="page-banner-meta">{grades}</p> : null}
            <BannerHeading title={title} />
            {grades && gradesAfter ? <p className="page-banner-meta">{grades}</p> : null}
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
            {lede ? <p className={ledeItalic ? "lede is-italic" : "lede"}>{lede}</p> : null}
          </div>
        ) : (
          <h1 className="visually-hidden">{plainTitle}</h1>
        )}
      </div>
    </section>
  );
}
