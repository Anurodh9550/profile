import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/website/CTA";
import { BatteryShowcase } from "@/components/website/BatteryShowcase";
import { BrandCard } from "@/components/website/BrandCard";
import { BrandLogo } from "@/components/website/BrandLogo";
import { ProductCardItem } from "@/components/website/ProductCard";
import { SectionHeading } from "@/components/website/SectionHeading";
import { SectionImage } from "@/components/website/SectionImage";
import { COMPANY, GROUP_BRANDS } from "@/lib/brand";
import { IMAGES } from "@/lib/images";
import {
  allProducts,
  brandProducts,
  expansionTimeline,
  manufacturingSteps,
  stats,
  whyChoose,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Image
          src={IMAGES.hero}
          alt="Electric scooter"
          fill
          priority
          className="hero__bg"
          sizes="100vw"
        />
        <div className="site-container hero__inner">
          <div className="hero__brand-row">
            <Image
              src={IMAGES.logo}
              alt="Kalpna Traders"
              width={56}
              height={56}
              className="hero__logo"
            />
            {GROUP_BRANDS.map((b) => (
              <BrandLogo key={b.id} brandId={b.id} size={44} className="hero__brand-icon" />
            ))}
          </div>
          <span className="hero__badge">{COMPANY.legalName} · Noida, UP</span>
          <h1>
            <span>Kalpna Traders</span> — Powering India&apos;s EV Future
          </h1>
          <p className="hero__tagline">{COMPANY.tagline}</p>
          <div className="hero__actions">
            <Link href="/products" className="btn btn--primary">
              Explore Products
            </Link>
            <Link href="/dealers" className="btn btn--outline-light">
              Become a Dealer
            </Link>
          </div>
          <div className="hero__stats">
            {stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="site-container">
          <SectionHeading
            eyebrow="Group Companies"
            title={`Brands of ${COMPANY.legalName}`}
            description="One parent company powering three specialised brands across electric mobility, battery technology, and electronics — from Noida, Uttar Pradesh."
            align="center"
          />
          <div className="card-grid card-grid--3">
            {GROUP_BRANDS.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/brands" className="btn btn--ghost">
              Explore All Brands
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="split-section">
            <SectionImage src={IMAGES.factory} alt="Manufacturing facility Noida" />
            <div className="split-section__content">
              <SectionHeading
                eyebrow="About Us"
                title="Multi-Brand Manufacturing from Noida"
                description={`${COMPANY.tradeName} manufactures electric scooters (SPARS Electric), battery packs (SPARS Battery), and electronics (Killa Electronics) — one integrated group based in Noida, Uttar Pradesh.`}
              />
              <Link href="/about" className="btn btn--ghost">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="site-container">
          <SectionHeading
            eyebrow="Product Portfolio"
            title="50+ Products · 3 Manufacturing Divisions"
            description="Electric scooters, lithium battery packs, motor controllers, displays, chargers, and EV components — all manufactured under Kalpna Traders."
            align="center"
          />
          {GROUP_BRANDS.map((brand) => {
            const items = (brandProducts[brand.id] ?? []).slice(0, 3);
            return (
              <div key={brand.id} className="brand-product-section">
                <div className="brand-product-section__title">
                  <BrandLogo brandId={brand.id} size={40} />
                  <h3>{brand.name}</h3>
                </div>
                <div className="card-grid card-grid--3">
                  {items.map((p) => (
                    <ProductCardItem key={p.id} product={p} />
                  ))}
                </div>
              </div>
            );
          })}
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/products" className="btn btn--primary">
              View All {allProducts.length} Products
            </Link>
          </div>
        </div>
      </section>

      <BatteryShowcase />

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Why Kalpna Traders"
            title="Built for Dealers, Investors & Partners"
            align="center"
          />
          <div className="card-grid card-grid--3">
            {whyChoose.map((item, i) => (
              <article key={item.title} className="feature-card">
                <div className="feature-card__icon">{String(i + 1).padStart(2, "0")}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="site-container">
          <div className="split-section">
            <div className="split-section__content">
              <SectionHeading
                eyebrow="Manufacturing"
                title="Noida Assembly Excellence"
                description="Every product passes through documented assembly, testing, and quality verification at our Noida facility."
              />
              <div className="process-grid process-grid--compact">
                {manufacturingSteps.map((step) => (
                  <div key={step.step} className="process-step">
                    <span className="process-step__num">{step.step}</span>
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                ))}
              </div>
              <Link href="/manufacturing" className="btn btn--ghost" style={{ marginTop: "1.5rem" }}>
                Tour Our Facility
              </Link>
            </div>
            <SectionImage src={IMAGES.warehouse} alt="Warehouse and dispatch" />
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="site-container">
          <SectionHeading
            eyebrow="Growth Roadmap"
            title="Expansion Plan 2026 – 2030"
            align="center"
            light
          />
          <div className="roadmap">
            {expansionTimeline.map((item) => (
              <div key={item.year} className="roadmap__item">
                <span className="roadmap__year">{item.year}</span>
                <span className="roadmap__text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Partner with India's Electric Future"
        description="Join our dealer network, explore fleet solutions, or connect with our investor relations team."
        primaryLabel="Become a Dealer"
        primaryHref="/dealers"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
