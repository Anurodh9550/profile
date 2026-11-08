import { CTA } from "@/components/website/CTA";
import { BrandLogo } from "@/components/website/BrandLogo";
import { ProductCardItem } from "@/components/website/ProductCard";
import { SectionHeading } from "@/components/website/SectionHeading";
import { GROUP_BRANDS } from "@/lib/brand";
import { brandProducts } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Kalpana Traders",
  description:
    "Explore products from SPARS ELECTRIC, SPARS BATTERY, and KILLA ELECTRONICS — manufacturing from Noida, India.",
};

const brandManufacturing: Record<string, string> = {
  "spars-electric": "Electric scooter manufacturing & assembly — Noida facility",
  "spars-battery":
    "Large-scale lithium-ion battery manufacturing division — automated cell assembly, pack integration, BMS testing & pan-India dealer supply from Noida, UP. 10,000+ packs annual capacity.",
  "killa-electronics": "Electronics manufacturing, PCB assembly & QC — Noida facility",
};

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero page-hero--with-image">
        <div className="site-container">
          <span className="page-hero__eyebrow">Products</span>
          <h1>50+ Products Across Three Brands</h1>
          <p>
            Kalpana Traders manufactures electric scooters, battery packs, and electronics
            components — an integrated product ecosystem from Noida, Uttar Pradesh.
          </p>
        </div>
      </section>

      {GROUP_BRANDS.map((brand, index) => {
        const items = brandProducts[brand.id] ?? [];

        return (
          <section
            key={brand.id}
            className={`section ${index % 2 === 1 ? "section--alt" : ""}`}
            id={brand.id}
          >
            <div className="site-container">
              <div className="brand-product-section__title brand-product-section__title--large">
                <BrandLogo brandId={brand.id} size={56} />
                <div>
                  <SectionHeading
                    eyebrow={`${brand.name} · Manufacturing`}
                    title={brand.name}
                    description={`${brandManufacturing[brand.id]}. ${brand.description}`}
                  />
                </div>
              </div>
              <div className="card-grid card-grid--3">
                {items.map((p) => (
                  <ProductCardItem key={p.id} product={p} />
                ))}
              </div>
              {brand.websiteUrl && (
                <div style={{ marginTop: "1.75rem" }}>
                  <a
                    href={brand.websiteUrl}
                    className="btn btn--ghost"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit {brand.name} Website →
                  </a>
                </div>
              )}
            </div>
          </section>
        );
      })}

      <section className="section section--dark">
        <div className="site-container">
          <SectionHeading
            eyebrow="Integrated Ecosystem"
            title="One Group. Complete EV Solution."
            description="SPARS Electric vehicles powered by SPARS Battery packs, controlled by Killa Electronics components — manufactured under one roof."
            align="center"
            light
          />
          <div className="brands-flow-logos">
            <BrandLogo brandId="killa-electronics" size={48} />
            <span className="flow-bar__arrow">→</span>
            <BrandLogo brandId="spars-battery" size={48} />
            <span className="flow-bar__arrow">→</span>
            <BrandLogo brandId="spars-electric" size={48} />
          </div>
        </div>
      </section>

      <CTA
        title="Need Bulk Pricing or Dealer Rates?"
        description="Contact our sales team for product catalogues, fleet orders, and dealership enquiries."
        primaryLabel="Contact Sales"
        primaryHref="/contact"
        secondaryLabel="Become a Dealer"
        secondaryHref="/dealers"
      />
    </>
  );
}
