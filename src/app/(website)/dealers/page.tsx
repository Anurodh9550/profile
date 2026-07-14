import { CTA } from "@/components/website/CTA";
import { SectionHeading } from "@/components/website/SectionHeading";
import { ContactForm } from "@/components/website/ContactForm";
import { SectionImage } from "@/components/website/SectionImage";
import { BRAND } from "@/lib/brand";
import { IMAGES } from "@/lib/images";
import { dealerBenefits } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dealer Program | SPARS ELECTRIC",
  description: "Join the SPARS ELECTRIC dealer network — exclusive territories, training, and marketing support.",
};

const onboardingSteps = [
  { step: "01", title: "Application", text: "Submit dealer enquiry with location and business profile." },
  { step: "02", title: "Evaluation", text: "Infrastructure, financial capability, and market assessment." },
  { step: "03", title: "Agreement", text: "Territory allocation, branding standards, and onboarding." },
  { step: "04", title: "Launch", text: "Training certification, inventory planning, and go-live support." },
];

export default function DealersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <span className="page-hero__eyebrow">Dealer Network</span>
          <h1>Grow with SPARS ELECTRIC</h1>
          <p>
            Our dealer programme is engineered for profitable, sustainable partnerships — combining
            exclusive territories, structured margins, and comprehensive business support.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <SectionHeading eyebrow="Benefits" title="Dealer Programme Advantages" align="center" />
          <div className="card-grid card-grid--2">
            {dealerBenefits.map((b) => (
              <article key={b} className="feature-card">
                <p>{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="site-container">
          <SectionHeading eyebrow="Process" title="Dealer Selection & Onboarding" align="center" />
          <div className="process-grid">
            {onboardingSteps.map((s) => (
              <div key={s.step} className="process-step">
                <span className="process-step__num">{s.step}</span>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <p className="section-heading__desc" style={{ textAlign: "center", marginBottom: "1rem" }}>
              Dealer growth funnel
            </p>
            <div className="flow-bar" style={{ justifyContent: "center" }}>
              {["Enquiry", "Evaluation", "Onboarding", "Launch", "Scale", "Flagship"].map(
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
          <div className="split-section">
            <SectionImage src={IMAGES.dealer} alt="Dealer partnership" />
            <div className="split-section__content">
              <SectionHeading
                eyebrow="Support"
                title="Everything You Need to Succeed"
                description="From CRM-enabled lead generation to technical helpline and co-branded marketing — SPARS supports dealers at every stage."
              />
              <ul className="check-list">
                <li>Exclusive territory protection with performance milestones</li>
                <li>Sales, service, and product training certification</li>
                <li>Digital marketing templates and launch event kits</li>
                <li>Central leads routed to your territory via CRM</li>
                <li>Genuine spare parts and warranty claim support</li>
              </ul>
              <p style={{ marginTop: "1rem", fontSize: "0.88rem", color: "var(--spars-muted)" }}>
                Dealer enquiries:{" "}
                <a href={`mailto:${BRAND.dealerEmail}`} style={{ color: "var(--spars-green)" }}>
                  {BRAND.dealerEmail}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="site-container">
          <SectionHeading eyebrow="Apply" title="Dealer Enquiry Form" align="center" />
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <ContactForm defaultSubject="Dealer Partnership" />
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Represent SPARS ELECTRIC?"
        description="Join India's fastest-growing electric mobility segment with a premium, partner-ready brand."
        primaryLabel="Apply Now"
        primaryHref="/contact"
      />
    </>
  );
}
