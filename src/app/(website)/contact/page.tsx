import { SectionHeading } from "@/components/website/SectionHeading";
import { ContactForm } from "@/components/website/ContactForm";
import { BRAND, COMPANY, GROUP_BRANDS, SOCIAL_LINKS } from "@/lib/brand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Kalpana Traders",
  description: "Contact Kalpana Traders for dealer partnerships, fleet enquiries, careers, and business collaboration.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-container">
          <span className="page-hero__eyebrow">Contact</span>
          <h1>Get in Touch</h1>
          <p>
            Connect with Kalpana Traders for dealer partnerships, fleet solutions, product
            enquiries, careers, and institutional collaboration.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="contact-grid">
            <div>
              <SectionHeading eyebrow="Reach Us" title="Contact Information" />
              <div className="contact-info">
                <div className="contact-info__item">
                  <h4>Company</h4>
                  <p>{COMPANY.legalName}</p>
                  <p>{COMPANY.tradeName}</p>
                </div>
                <div className="contact-info__item">
                  <h4>Address</h4>
                  <p>{COMPANY.address}</p>
                </div>
                <div className="contact-info__item">
                  <h4>Phone</h4>
                  <p>
                    <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>{COMPANY.phone}</a>
                  </p>
                </div>
                <div className="contact-info__item">
                  <h4>Email</h4>
                  <p>
                    <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                  </p>
                </div>
                <div className="contact-info__item">
                  <h4>Group Brands</h4>
                  <p>{GROUP_BRANDS.map((b) => b.name).join(" · ")}</p>
                </div>
                <div className="contact-info__item">
                  <h4>Dealer Enquiries</h4>
                  <p>
                    <a href={`mailto:${BRAND.dealerEmail}`}>{BRAND.dealerEmail}</a>
                  </p>
                </div>
                <div className="contact-info__item">
                  <h4>Careers</h4>
                  <p>
                    <a href={`mailto:${BRAND.careersEmail}`}>{BRAND.careersEmail}</a>
                  </p>
                </div>
                {GROUP_BRANDS.map((b) =>
                  b.websiteUrl ? (
                    <div className="contact-info__item" key={b.id}>
                      <h4>{b.name} Website</h4>
                      <p>
                        <a href={b.websiteUrl} target="_blank" rel="noopener noreferrer">
                          {b.websiteUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                        </a>
                      </p>
                    </div>
                  ) : null,
                )}
                <div className="contact-info__item">
                  <h4>Website</h4>
                  <p>{COMPANY.website}</p>
                </div>
                <div className="contact-info__item">
                  <h4>Social Media</h4>
                  <p>
                    {SOCIAL_LINKS.map((s) => (
                      <a key={s.label} href={s.href} style={{ marginRight: "0.75rem" }}>
                        {s.label}
                      </a>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="Enquiry" title="Send Us a Message" />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
