import Image from "next/image";
import Link from "next/link";
import { BRAND, COMPANY, GROUP_BRANDS, NAV_LINKS, SOCIAL_LINKS } from "@/lib/brand";
import { IMAGES } from "@/lib/images";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer__grid">
        <div>
          <div className="site-footer__brand">
            <Image
              src={IMAGES.logo}
              alt="Kalpana Traders"
              width={48}
              height={48}
              className="site-logo__img"
            />
            <div>
              <strong>{COMPANY.tradeName}</strong>
              <p>{COMPANY.tagline}</p>
            </div>
          </div>
          <p className="site-footer__legal">{COMPANY.legalName}</p>
          <p className="site-footer__gst">{COMPANY.address}</p>
          <p className="site-footer__gst" style={{ marginTop: "0.5rem" }}>
            Brands: {GROUP_BRANDS.map((b) => b.name).join(" · ")}
          </p>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/profile">Company Profile</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Our Brands</h4>
          <ul>
            {GROUP_BRANDS.map((b) => (
              <li key={b.id}>
                {b.websiteUrl ? (
                  <a href={b.websiteUrl} target="_blank" rel="noopener noreferrer">
                    {b.name}
                  </a>
                ) : (
                  <Link href="/brands">{b.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>{COMPANY.address}</li>
            <li>
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            </li>
            <li>
              <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>{COMPANY.phone}</a>
            </li>
            {GROUP_BRANDS.filter((b) => b.websiteUrl).map((b) => (
              <li key={b.id}>
                <a href={b.websiteUrl} target="_blank" rel="noopener noreferrer">
                  {b.name} Website
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Connect</h4>
          <div className="site-footer__social">
            {SOCIAL_LINKS.map((s) => (
              <a key={s.label} href={s.href}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="site-container site-footer__bottom">
        <span>© {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.</span>
        <span>Made in India · Noida, Uttar Pradesh</span>
      </div>
    </footer>
  );
}
