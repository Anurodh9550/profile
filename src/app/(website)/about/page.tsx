import Link from "next/link";
import { CTA } from "@/components/website/CTA";
import { BrandCard } from "@/components/website/BrandCard";
import { SectionHeading } from "@/components/website/SectionHeading";
import { SectionImage } from "@/components/website/SectionImage";
import { BRAND, COMPANY, GROUP_BRANDS } from "@/lib/brand";
import { IMAGES } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | SPARS ELECTRIC",
  description: "Learn about SPARS ELECTRIC — India's premium electric scooter brand manufactured in Noida.",
};

const journey = [
  { year: "Foundation", text: `${COMPANY.legalName} established as a multi-brand trading & manufacturing group.` },
  { year: "Brands", text: "SPARS ELECTRIC, SPARS BATTERY, and KILLA ELECTRONICS launched under one entity." },
  { year: "Noida Setup", text: "Manufacturing & assembly infrastructure commissioned in Uttar Pradesh." },
  { year: "Market Launch", text: "Electric scooter portfolio and dealer network rollout initiated." },
  { year: "Scale", text: "Pan-India expansion across EV, battery, and electronics verticals." },
];

const values = ["Integrity", "Quality", "Innovation", "Partnership", "Sustainability"];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <span className="page-hero__eyebrow">About Us</span>
          <h1>Multi-Brand Group from Noida</h1>
          <p>
            {COMPANY.legalName} operates SPARS ELECTRIC, SPARS BATTERY, and KILLA ELECTRONICS —
            delivering electric mobility, energy solutions, and smart electronics from Noida, India.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="split-section">
            <div className="split-section__content">
              <SectionHeading
                eyebrow="Company Overview"
                title="Who We Are"
                description={`${COMPANY.legalName} is a multi-brand company based in Noida, Uttar Pradesh. ${BRAND.brandName} is our flagship electric vehicle brand, supported by SPARS BATTERY and KILLA ELECTRONICS.`}
              />
              <ul className="check-list">
                <li>SPARS ELECTRIC — electric scooter manufacturing & assembly</li>
                <li>SPARS BATTERY — EV battery packs & energy storage</li>
                <li>KILLA ELECTRONICS — controllers, displays & EV electronics</li>
                <li>Dealer network, fleet solutions & institutional partnerships</li>
              </ul>
            </div>
            <SectionImage src={IMAGES.about} alt="Kalpana Traders corporate" />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="site-container">
          <SectionHeading eyebrow="Purpose" title="Vision & Mission" align="center" />
          <div className="card-grid card-grid--2">
            <article className="feature-card">
              <h3>Our Vision</h3>
              <p>
                To become India&apos;s most trusted and technology-forward electric two-wheeler brand
                — engineered in Noida, embraced across Bharat.
              </p>
            </article>
            <article className="feature-card">
              <h3>Our Mission</h3>
              <p>
                To design, assemble, and distribute high-quality electric scooters through
                disciplined manufacturing, empowered dealer networks, and customer-centric
                after-sales excellence.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="site-container">
          <SectionHeading eyebrow="Portfolio" title="Our Brand Family" align="center" />
          <div className="card-grid card-grid--3">
            {GROUP_BRANDS.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="site-container">
          <SectionHeading eyebrow="Values" title="Core Values" align="center" light />
          <div className="values-grid">
            {values.map((v) => (
              <div key={v} className="value-pill">
                {v}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <SectionHeading eyebrow="Heritage" title="Company Journey" align="center" />
          <div className="roadmap">
            {journey.map((item) => (
              <div key={item.year} className="roadmap__item">
                <span className="roadmap__year">{item.year}</span>
                <span className="roadmap__text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="site-container" style={{ textAlign: "center" }}>
          <SectionHeading
            eyebrow="Corporate Profile"
            title="Download Our Full Company Profile"
            description="40-page investor-ready corporate profile with manufacturing, dealer, and expansion details."
            align="center"
          />
          <Link href="/profile" className="btn btn--primary">
            View Company Profile
          </Link>
        </div>
      </section>

      <CTA
        title="Ready to Partner with SPARS ELECTRIC?"
        description="Explore dealer opportunities, fleet solutions, or institutional collaboration."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Products"
        secondaryHref="/products"
      />
    </>
  );
}
