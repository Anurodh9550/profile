import { CTA } from "@/components/website/CTA";
import { SectionHeading } from "@/components/website/SectionHeading";
import { SectionImage } from "@/components/website/SectionImage";
import { BRAND } from "@/lib/brand";
import { IMAGES } from "@/lib/images";
import { manufacturingSteps } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing | SPARS ELECTRIC",
  description: "SPARS ELECTRIC manufacturing & assembly unit in Noida — quality-driven EV production.",
};

const qcSteps = [
  "Incoming material inspection (IMI)",
  "In-process quality checks (IPQC)",
  "Electrical & functional testing",
  "Road simulation verification",
  "End-of-line comprehensive inspection (FQC)",
];

const facilityZones = [
  { title: "Inbound Zone", text: "Component receiving, inspection, and lot traceability." },
  { title: "Assembly Bay", text: "Station-based production with skill-mapped operators." },
  { title: "Testing Lab", text: "Electrical, brake, lighting, and BMS validation." },
  { title: "Packaging & Dispatch", text: "Dealer-ready packaging with VIN documentation." },
  { title: "Warehouse", text: "Components, finished goods, and spare parts storage." },
  { title: "Future Expansion", text: "Additional lines and regional warehouse network." },
];

export default function ManufacturingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <span className="page-hero__eyebrow">Manufacturing</span>
          <h1>Noida Assembly Excellence</h1>
          <p>
            {BRAND.factory} — a modern electric scooter assembly centre with structured
            production, multi-stage quality control, and audit-ready operations.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="split-section">
            <SectionImage src={IMAGES.factory} alt="SPARS manufacturing Noida" />
            <div className="split-section__content">
              <SectionHeading
                eyebrow="Facility"
                title="Manufacturing & Assembly Unit"
                description="Strategically located in Noida for North India distribution efficiency, with modular bays supporting scalable throughput and disciplined production flow."
              />
              <ul className="check-list">
                <li>Segregated inbound, assembly, testing, and outbound zones</li>
                <li>Documented standard work instructions at every station</li>
                <li>Component lot traceability from supplier to dispatch</li>
                <li>Dedicated QC and road-test verification area</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="site-container">
          <SectionHeading eyebrow="Process" title="Assembly Production Line" align="center" />
          <div className="process-grid">
            {manufacturingSteps.map((step) => (
              <div key={step.step} className="process-step">
                <span className="process-step__num">{step.step}</span>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <p className="section-heading__desc" style={{ textAlign: "center", marginBottom: "1rem" }}>
              Manufacturing flowchart
            </p>
            <div className="flow-bar" style={{ justifyContent: "center" }}>
              {["Inbound", "Component QC", "Assembly", "Testing", "Road Test", "Packaging", "Dispatch"].map(
                (node, i, arr) => (
                  <span key={node}>
                    <span className="flow-bar__node">{node}</span>
                    {i < arr.length - 1 && <span className="flow-bar__arrow"> → </span>}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <SectionHeading eyebrow="Quality" title="Quality Control & Testing" align="center" />
          <ul className="check-list" style={{ maxWidth: 640, margin: "0 auto" }}>
            {qcSteps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--alt">
        <div className="site-container">
          <SectionHeading eyebrow="Infrastructure" title="Facility Zones" align="center" />
          <div className="card-grid card-grid--3">
            {facilityZones.map((z) => (
              <article key={z.title} className="feature-card">
                <h3>{z.title}</h3>
                <p>{z.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="site-container">
          <div className="split-section">
            <SectionImage src={IMAGES.batteryAssembly} alt="SPARS Battery assembly line Noida" />
            <div className="split-section__content">
              <SectionHeading
                eyebrow="SPARS Battery Division"
                title="Large-Scale Battery Manufacturing & Assembly"
                description="SPARS Battery operates a dedicated lithium-ion manufacturing division at our Noida facility — with automated cell assembly lines, modular pack integration bays, smart BMS programming stations, and capacity to serve OEM partners, dealer networks, and fleet operators at national scale. Every pack passes through six-stage quality verification before dispatch."
              />
              <ul className="check-list">
                <li>10,000+ battery packs annual manufacturing capacity</li>
                <li>48V · 28Ah, 32Ah, 36Ah, 42Ah & 45Ah production range</li>
                <li>2-year warranty — 1 year replacement + 1 year service</li>
                <li>RoHS · CE · ISO · Made in India certified processes</li>
                <li>OEM, dealer, fleet & replacement battery supply programmes</li>
                <li>Dedicated technical helpline and after-sales support network</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Schedule a Factory Visit"
        description="Engineering colleges, ITIs, polytechnics, and institutional partners are welcome to visit our Noida facility."
        primaryLabel="Book a Visit"
        primaryHref="/contact"
        secondaryLabel="Careers"
        secondaryHref="/careers"
      />
    </>
  );
}
