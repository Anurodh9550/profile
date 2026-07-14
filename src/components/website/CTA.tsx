import Link from "next/link";

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function CTA({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="cta-band">
      <div className="site-container cta-band__inner">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cta-band__actions">
          <Link href={primaryHref} className="btn btn--primary">
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryHref &&
            (isExternal(secondaryHref) ? (
              <a
                href={secondaryHref}
                className="btn btn--outline-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                {secondaryLabel}
              </a>
            ) : (
              <Link href={secondaryHref} className="btn btn--outline-light">
                {secondaryLabel}
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
