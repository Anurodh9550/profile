import Image from "next/image";
import { BRAND_HERO_IMAGES } from "@/lib/images";
import type { GroupBrand } from "@/lib/brand";
import { BrandLogo } from "./BrandLogo";

export function BrandCard({ brand }: { brand: GroupBrand }) {
  const hero = BRAND_HERO_IMAGES[brand.id];

  return (
    <article className={`brand-card brand-card--${brand.accent}`}>
      <div className="brand-card__header">
        <BrandLogo brandId={brand.id} size={52} className="brand-card__logo" />
        <div className="brand-card__visual">
          {hero && (
            <Image src={hero} alt={brand.name} fill sizes="120px" className="brand-card__bg" />
          )}
        </div>
      </div>
      <span className="brand-card__segment">
        {brand.segment} · {brand.productCount} Products
      </span>
      <h3>{brand.name}</h3>
      <p className="brand-card__tagline">{brand.tagline}</p>
      <p className="brand-card__manufacturing">{brand.manufacturing}</p>
      <p className="brand-card__desc">{brand.description}</p>
      <ul className="brand-card__focus">
        {brand.focus.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      {brand.websiteUrl && (
        <a
          href={brand.websiteUrl}
          className="brand-card__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit {brand.name} Website →
        </a>
      )}
    </article>
  );
}
