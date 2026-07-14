import { CTA } from "@/components/website/CTA";
import { SectionHeading } from "@/components/website/SectionHeading";
import { ContactForm } from "@/components/website/ContactForm";
import { SectionImage } from "@/components/website/SectionImage";
import { BRAND } from "@/lib/brand";
import { IMAGES } from "@/lib/images";
import { careerPaths } from "@/lib/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | SPARS ELECTRIC",
  description: "Build your career at SPARS ELECTRIC — campus hiring, internships, and EV industry roles in Noida.",
};

const campusPrograms = [
  "Campus recruitment drives for engineering & diploma graduates",
  "Summer and semester internships across R&D, production, and marketing",
  "Industrial visits and guided factory tours at Noida facility",
  "Live projects mentored by SPARS technical teams",
  "MoU-based placement partnerships with institutions",
  "Skill development workshops aligned to industry requirements",
];

const openRoles = [
  "Graduate Engineer Trainee (GET)",
  "Diploma Engineer Trainee (DET)",
  "Production & Assembly Engineers",
  "Quality Assurance Engineers",
  "Sales & Marketing Executives",
  "R&D & Software Engineers",
  "ITI & Polytechnic Technicians",
];

export default function CareersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <span className="page-hero__eyebrow">Careers</span>
          <h1>Build India&apos;s Electric Future</h1>
          <p>
            Join a high-growth EV company where engineering talent, manufacturing skill, and
            commercial excellence converge. Work on live products at our Noida facility.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="split-section">
            <div className="split-section__content">
              <SectionHeading
                eyebrow="Why Join Us"
                title="Career at SPARS ELECTRIC"
                description="India's electric mobility revolution needs skilled professionals. SPARS offers hands-on factory experience, structured training, and clear career progression."
              />
              <ul className="check-list">
                {careerPaths.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <SectionImage src={IMAGES.team} alt="Team at Kalpna Traders" />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="site-container">
          <SectionHeading
            eyebrow="Institutions"
            title="Engineering Colleges · ITI · Polytechnic"
            description="We actively partner with academic institutions for campus hiring, factory visits, research collaboration, and placement programmes."
            align="center"
          />
          <ul className="check-list" style={{ maxWidth: 720, margin: "0 auto" }}>
            {campusPrograms.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <SectionHeading eyebrow="Open Roles" title="Current Opportunities" align="center" />
          <div className="card-grid card-grid--2">
            {openRoles.map((r) => (
              <article key={r} className="feature-card">
                <p>{r}</p>
              </article>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "1.5rem", color: "var(--spars-muted)" }}>
            Send your resume to{" "}
            <a href={`mailto:${BRAND.careersEmail}`} style={{ color: "var(--spars-green)" }}>
              {BRAND.careersEmail}
            </a>
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="site-container">
          <SectionHeading eyebrow="Apply" title="Career Enquiry" align="center" />
          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <ContactForm defaultSubject="Careers" />
          </div>
        </div>
      </section>

      <CTA
        title="Students & Placement Officers"
        description="Partner with SPARS ELECTRIC for campus drives, MoUs, and industrial training programmes."
        primaryLabel="Institutional Enquiry"
        primaryHref="/contact"
      />
    </>
  );
}
