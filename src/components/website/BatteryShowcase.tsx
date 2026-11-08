import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/website/SectionHeading";
import { ProductCardItem } from "@/components/website/ProductCard";
import {
  batteryCapabilities,
  batteryCertifications,
  batteryGallery,
  batteryProcess,
  batteryStats,
} from "@/lib/battery-data";
import { IMAGES } from "@/lib/images";
import { brandProducts } from "@/lib/site-data";

const batteryFeatures = [
  {
    title: "Fast Charge Technology",
    text: "Compatible with standard and fast chargers — reduced downtime for fleet and daily commuters.",
  },
  {
    title: "High Performance Output",
    text: "Consistent power delivery across Indian temperature ranges, gradients, and stop-start traffic.",
  },
  {
    title: "Maintenance Free Design",
    text: "Sealed lithium-ion architecture — no electrolyte topping, no periodic maintenance required.",
  },
  {
    title: "Safe & Reliable BMS",
    text: "Multi-layer protection: overcharge, deep discharge, short circuit, and thermal runaway prevention.",
  },
  {
    title: "2 Year Warranty Programme",
    text: "Industry-leading coverage — 1 year full replacement + 1 year service warranty on all packs.",
  },
  {
    title: "Made in India · Noida",
    text: "Proudly manufactured at our Noida, UP facility — supporting Atmanirbhar Bharat in EV energy.",
  },
];

export function BatteryShowcase() {
  const products = brandProducts["spars-battery"] ?? [];

  return (
    <section className="section section--battery" id="spars-battery">
      <div className="site-container">
        <SectionHeading
          eyebrow="SPARS BATTERY · Manufacturing Division"
          title="India's Growing Lithium-Ion Battery Manufacturer"
          description="SPARS Battery is the energy backbone of the Kalpana Traders group — a large-scale lithium-ion manufacturing division producing premium EV battery packs for scooters, fleets, dealers, and OEM partners across India. Power. Performance. Reliability."
          align="center"
        />

        <div className="battery-stats">
          {batteryStats.map((s) => (
            <div key={s.label} className="battery-stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>

        <div className="battery-showcase">
          <div className="battery-showcase__hero">
            <Image
              src={IMAGES.battery}
              alt="SPARS Battery Premium Lithium-Ion Battery"
              width={600}
              height={700}
              className="battery-showcase__poster"
            />
            <p className="battery-showcase__caption">
              SPARS Premium Lithium-Ion Battery · 48V · 28Ah to 45Ah · Perfect for E-Scooter &amp; E-Vehicles
            </p>
          </div>
          <div className="battery-showcase__grid">
            {batteryGallery.slice(1, 4).map((img) => (
              <div key={img.src} className="battery-showcase__photo">
                <Image src={img.src} alt={img.label} fill sizes="33vw" className="battery-showcase__img" />
                <span>{img.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-grid card-grid--3" style={{ marginTop: "2.5rem" }}>
          {batteryCapabilities.map((c) => (
            <article key={c.title} className="feature-card feature-card--battery">
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>

        <div style={{ marginTop: "3rem" }}>
          <SectionHeading
            eyebrow="Production Process"
            title="Battery Manufacturing Workflow"
            description="Six-stage documented production system — from cell incoming QC to dealer-ready dispatch."
            align="center"
          />
          <div className="process-grid">
            {batteryProcess.map((step) => (
              <div key={step.step} className="process-step process-step--battery">
                <span className="process-step__num">{step.step}</span>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="battery-gallery" style={{ marginTop: "3rem" }}>
          <SectionHeading eyebrow="Facility" title="Manufacturing & Quality Gallery" align="center" />
          <div className="battery-gallery__grid">
            {batteryGallery.map((img) => (
              <div key={img.src} className="battery-gallery__item">
                <Image src={img.src} alt={img.label} fill sizes="(max-width:768px) 50vw, 16vw" className="battery-gallery__img" />
                <span>{img.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="battery-certs" style={{ marginTop: "2.5rem" }}>
          {batteryCertifications.map((cert) => (
            <span key={cert} className="battery-cert-badge">
              {cert}
            </span>
          ))}
        </div>

        <div className="card-grid card-grid--3" style={{ marginTop: "2.5rem" }}>
          {batteryFeatures.map((f) => (
            <article key={f.title} className="feature-card feature-card--battery">
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>

        <div style={{ marginTop: "3rem" }}>
          <SectionHeading eyebrow="Product Range" title="SPARS Battery Product Line" align="center" />
          <div className="card-grid card-grid--3">
            {products.map((p) => (
              <ProductCardItem key={p.id} product={p} />
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link href="/products#spars-battery" className="btn btn--primary">
            Full Battery Catalogue
          </Link>
        </div>
      </div>
    </section>
  );
}
