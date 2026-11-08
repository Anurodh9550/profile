import Image from "next/image";
import { CTA } from "@/components/website/CTA";
import { BrandCard } from "@/components/website/BrandCard";
import { BrandLogo } from "@/components/website/BrandLogo";
import { SectionHeading } from "@/components/website/SectionHeading";
import { BRAND, COMPANY, GROUP_BRANDS, SPARS_ELECTRIC_WEBSITE } from "@/lib/brand";
import { IMAGES } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Brands | Mass Kalpana Traders",
  description:
    "SPARS ELECTRIC, SPARS BATTERY, and KILLA ELECTRONICS — multi-brand portfolio under Mass Kalpana Traders, Noida.",
};

export default function BrandsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <span className="page-hero__eyebrow">Our Brands</span>
          <h1>One Company. Three Powerful Brands.</h1>
          <p>
            {COMPANY.legalName} operates a diversified portfolio across electric mobility,
            battery technology, and electronics — united by manufacturing excellence from Noida.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Parent Company"
            title={COMPANY.legalName}
            description={`${COMPANY.address} · ${COMPANY.phone}`}
            align="center"
          />
          <div className="parent-company-banner">
            <Image src={IMAGES.logo} alt={COMPANY.tradeName} width={80} height={80} className="parent-company-banner__logo" />
            <div>
              <h2>{COMPANY.tradeName}</h2>
              <p>{COMPANY.address}</p>
              <p>
                <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>{COMPANY.phone}</a>
              </p>
            </div>
          </div>
          <div className="card-grid card-grid--3">
            {GROUP_BRANDS.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="site-container">
          <SectionHeading
            eyebrow="Group Synergy"
            title="Integrated Business Ecosystem"
            description="Our brands work together — SPARS ELECTRIC vehicles powered by SPARS BATTERY packs, controlled by KILLA ELECTRONICS components."
            align="center"
          />
          <div className="brands-flow-logos">
            <BrandLogo brandId="killa-electronics" size={52} />
            <span className="flow-bar__arrow">→</span>
            <BrandLogo brandId="spars-battery" size={52} />
            <span className="flow-bar__arrow">→</span>
            <BrandLogo brandId="spars-electric" size={52} />
          </div>
        </div>
      </section>

      <CTA
        title={`Partner with ${BRAND.brandName}`}
        description="Explore dealer opportunities, product enquiries, or visit the official SPARS Electric website."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Visit SPARS Electric"
        secondaryHref={SPARS_ELECTRIC_WEBSITE}
      />
    </>
  );
}
