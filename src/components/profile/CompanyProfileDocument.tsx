import Image from "next/image";
import {
  COMPANY,
  GROUP_BRANDS,
  SPARS_ELECTRIC_WEBSITE,
  KILLA_ELECTRONICS_WEBSITE,
} from "@/lib/brand";
import { batteryCapabilities, batteryProcess, batteryStats } from "@/lib/battery-data";
import { BRAND_HERO_IMAGES, IMAGES, PRODUCT_IMAGES } from "@/lib/images";
import {
  brandProducts,
  expansionTimeline,
  manufacturingSteps,
  stats,
  whyChoose,
} from "@/lib/site-data";

const TOTAL_PAGES = 18;

const INDEX = [
  { n: 3, t: "Company Overview" },
  { n: 4, t: "About Kalpna Traders" },
  { n: 5, t: "Our Brands" },
  { n: 6, t: "SPARS Electric" },
  { n: 7, t: "SPARS Electric — Products" },
  { n: 8, t: "SPARS Battery" },
  { n: 9, t: "SPARS Battery — Products & Process" },
  { n: 10, t: "Killa Electronics" },
  { n: 11, t: "Killa Electronics — Products" },
  { n: 12, t: "Manufacturing Excellence" },
  { n: 13, t: "Integrated EV Ecosystem" },
  { n: 14, t: "Why Partner With Us" },
  { n: 15, t: "Dealer & Partnership Program" },
  { n: 16, t: "Vision · Mission · Values" },
  { n: 17, t: "Growth Roadmap" },
  { n: 18, t: "Contact & Connect" },
];

function PageFooter({ left, page }: { left: string; page: number }) {
  return (
    <footer className="cpdf-page__footer">
      <span>{left}</span>
      <span>Page {page} of {TOTAL_PAGES}</span>
    </footer>
  );
}

function PageShell({
  page,
  eyebrow,
  title,
  accent,
  children,
  footerLeft,
}: {
  page: number;
  eyebrow: string;
  title: string;
  accent?: "green" | "blue" | "orange";
  children: React.ReactNode;
  footerLeft?: string;
}) {
  const barClass = accent === "blue" ? " cpdf-page__bar--blue" : accent === "orange" ? " cpdf-page__bar--orange" : "";
  const eyebrowClass = accent === "blue" ? " cpdf-page__eyebrow--blue" : accent === "orange" ? " cpdf-page__eyebrow--orange" : "";

  return (
    <section className="cpdf-page">
      <div className={`cpdf-page__bar${barClass}`} />
      <header className="cpdf-page__header">
        <div>
          <p className={`cpdf-page__eyebrow${eyebrowClass}`}>{eyebrow}</p>
          <h2 className="cpdf-page__title">{title}</h2>
        </div>
        <span className="cpdf-page__no">{page} / {TOTAL_PAGES}</span>
      </header>
      <div className="cpdf-page__body">{children}</div>
      <PageFooter left={footerLeft ?? COMPANY.tradeName} page={page} />
    </section>
  );
}

function CoverPage() {
  return (
    <section className="cpdf-cover">
      <div className="cpdf-cover__top">
        <Image src={IMAGES.logo} alt="Kalpna Traders" width={72} height={72} className="cpdf-cover__logo" />
        <span className="cpdf-cover__year">Corporate Profile · 2026</span>
      </div>
      <div className="cpdf-cover__main">
        <div>
          <p className="cpdf-cover__legal">{COMPANY.legalName}</p>
          <h1 className="cpdf-cover__brand">{COMPANY.tradeName}</h1>
          <p className="cpdf-cover__tagline">
            {COMPANY.tagline}
            <br /><br />
            Multi-brand manufacturing group from Noida, Uttar Pradesh — powering India&apos;s electric
            mobility revolution through SPARS Electric, SPARS Battery, and Killa Electronics.
          </p>
          <div className="cpdf-cover__brands">
            {GROUP_BRANDS.map((b) => (
              <span key={b.id} className="cpdf-cover__brand-pill">{b.name}</span>
            ))}
          </div>
        </div>
        <div className="cpdf-cover__visual">
          <Image src={IMAGES.scooters.lineup6} alt="SPARS Electric scooters" fill sizes="50vw" priority />
        </div>
      </div>
      <div className="cpdf-cover__bottom">
        <div className="cpdf-cover__contact">
          <strong>Registered Office</strong>
          {COMPANY.address}
          <br />Phone: {COMPANY.phone}
          <br />Email: {COMPANY.email}
        </div>
        <div className="cpdf-cover__contact" style={{ textAlign: "right" }}>
          <strong>Brand Websites</strong>
          sparselectric.com
          <br />kilaelectronics.com
        </div>
      </div>
    </section>
  );
}

function IndexPage() {
  return (
    <PageShell page={2} eyebrow="Contents" title="Company Profile Index">
      <p className="cpdf-page__intro">
        A comprehensive corporate profile of {COMPANY.legalName} — designed for investors, dealers,
        fleet operators, institutional partners, and government stakeholders.
      </p>
      <div className="cpdf-index">
        {INDEX.map((item) => (
          <div key={item.n} className="cpdf-index__item">
            <span>{item.t}</span>
            <span>{item.n}</span>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

function BrandHero({
  brandId,
  accent,
}: {
  brandId: string;
  accent: "green" | "blue" | "orange";
}) {
  const brand = GROUP_BRANDS.find((b) => b.id === brandId)!;
  const imgClass = accent === "blue" ? " cpdf-brand-hero__img--blue" : accent === "orange" ? " cpdf-brand-hero__img--orange" : "";
  const tagClass = accent === "blue" ? " cpdf-brand-hero__tagline--blue" : accent === "orange" ? " cpdf-brand-hero__tagline--orange" : "";
  const linkClass = accent === "blue" ? " cpdf-website-link--blue" : accent === "orange" ? " cpdf-website-link--orange" : "";

  return (
    <div className="cpdf-brand-hero">
      <div className={`cpdf-brand-hero__img${imgClass}`}>
        <Image src={BRAND_HERO_IMAGES[brandId]} alt={brand.name} fill sizes="40vw" />
      </div>
      <div className="cpdf-brand-hero__info">
        <p className={`cpdf-brand-hero__tagline${tagClass}`}>{brand.tagline}</p>
        <h3>{brand.name}</h3>
        <p>{brand.description}</p>
        <p><strong>Manufacturing:</strong> {brand.manufacturing}</p>
        {brand.websiteUrl && (
          <span className={`cpdf-website-link${linkClass}`}>{brand.websiteUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</span>
        )}
      </div>
    </div>
  );
}

function ProductGrid({ brandId, accent }: { brandId: string; accent: "green" | "blue" | "orange" }) {
  const products = brandProducts[brandId] ?? [];
  const catClass = accent === "blue" ? " cpdf-product__cat--blue" : accent === "orange" ? " cpdf-product__cat--orange" : "";

  return (
    <div className="cpdf-grid-3">
      {products.map((p) => (
        <article key={p.id} className="cpdf-product">
          <div className="cpdf-product__img">
            <Image
              src={PRODUCT_IMAGES[p.id] ?? IMAGES.hero}
              alt={p.name}
              fill
              sizes="80px"
            />
          </div>
          <span className={`cpdf-product__cat${catClass}`}>{p.category}</span>
          <h4>{p.name}</h4>
          <p>{p.description}</p>
          {p.specs && <span className="cpdf-product__specs">{p.specs}</span>}
        </article>
      ))}
    </div>
  );
}

export function CompanyProfileDocument() {
  const sparsElectric = GROUP_BRANDS.find((b) => b.id === "spars-electric")!;
  const sparsBattery = GROUP_BRANDS.find((b) => b.id === "spars-battery")!;
  const killa = GROUP_BRANDS.find((b) => b.id === "killa-electronics")!;

  return (
    <div className="cpdf-stack">
      <CoverPage />
      <IndexPage />

      <PageShell page={3} eyebrow="Overview" title="Company Overview">
        <p className="cpdf-page__intro">
          {COMPANY.legalName} ({COMPANY.tradeName}) is a Noida-based multi-brand manufacturing and
          trading group operating three specialised divisions — SPARS Electric (electric vehicles),
          SPARS Battery (lithium-ion energy solutions), and Killa Electronics (smart EV components).
          From our facility at {COMPANY.address}, we serve dealers, fleet operators, OEM partners,
          and institutional clients across India.
        </p>
        <div className="cpdf-grid-4" style={{ marginBottom: "5mm" }}>
          {stats.map((s) => (
            <div key={s.label} className="cpdf-stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
        <div className="cpdf-grid-2">
          <div className="cpdf-card cpdf-card--green">
            <h4>Registered Address</h4>
            <p>{COMPANY.address}</p>
          </div>
          <div className="cpdf-card cpdf-card--green">
            <h4>Contact</h4>
            <p>Phone: {COMPANY.phone}<br />Email: {COMPANY.email}<br />Web: {COMPANY.website}</p>
          </div>
        </div>
      </PageShell>

      <PageShell page={4} eyebrow="About" title="About Kalpna Traders">
        <p className="cpdf-page__intro">
          Kalpna Traders was established with a clear vision: to build an integrated electric mobility
          ecosystem under one corporate umbrella. Rather than operating as isolated product lines, our
          three brands collaborate — SPARS Electric scooters are powered by SPARS Battery packs and
          controlled by Killa Electronics components — creating a vertically aligned supply chain from
          Noida.
        </p>
        <ul className="cpdf-list">
          <li>Electric scooter manufacturing, assembly, road testing & quality control</li>
          <li>Large-scale lithium-ion battery pack manufacturing with smart BMS integration</li>
          <li>Electronics manufacturing — motor controllers, displays, chargers & IoT modules</li>
          <li>Pan-India dealer network development and institutional partnership programmes</li>
          <li>Fleet electrification solutions for delivery, logistics & corporate mobility</li>
        </ul>
        <div className="cpdf-grid-3" style={{ marginTop: "5mm" }}>
          <div className="cpdf-card cpdf-card--green">
            <h4>Who We Serve</h4>
            <ul>
              <li>EV dealers & franchise partners</li>
              <li>Fleet & delivery operators</li>
              <li>Investors & NBFCs</li>
            </ul>
          </div>
          <div className="cpdf-card cpdf-card--blue">
            <h4>What We Make</h4>
            <ul>
              <li>Electric scooters (6 models)</li>
              <li>Battery packs (6 variants)</li>
              <li>EV electronics (8 products)</li>
            </ul>
          </div>
          <div className="cpdf-card cpdf-card--orange">
            <h4>Where We Operate</h4>
            <ul>
              <li>Noida manufacturing hub</li>
              <li>Uttar Pradesh & North India</li>
              <li>Pan-India expansion vision</li>
            </ul>
          </div>
        </div>
      </PageShell>

      <PageShell page={5} eyebrow="Brands" title="Our Three Brands">
        <p className="cpdf-page__intro">
          Each brand under Kalpna Traders operates with dedicated manufacturing capability, product
          portfolio, and market focus — while sharing infrastructure, quality systems, and commercial
          partnerships at the group level.
        </p>
        <div className="cpdf-grid-3">
          {GROUP_BRANDS.map((b) => (
            <div
              key={b.id}
              className={`cpdf-card cpdf-card--${b.accent === "green" ? "green" : b.accent === "blue" ? "blue" : "orange"}`}
            >
              <h4>{b.name}</h4>
              <p style={{ marginBottom: "2mm", fontWeight: 700, fontSize: "0.65rem", color: "var(--spars-muted)" }}>{b.segment}</p>
              <p>{b.description}</p>
              <ul>
                {b.focus.slice(0, 3).map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              {b.websiteUrl && (
                <p style={{ marginTop: "2mm", fontSize: "0.62rem", fontWeight: 700, color: "var(--spars-green)" }}>
                  {b.websiteUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="cpdf-flow" style={{ marginTop: "6mm" }}>
          <span className="cpdf-flow__node">Killa Electronics</span>
          <span className="cpdf-flow__arrow">→</span>
          <span className="cpdf-flow__node">SPARS Battery</span>
          <span className="cpdf-flow__arrow">→</span>
          <span className="cpdf-flow__node">SPARS Electric</span>
          <span className="cpdf-flow__arrow">→</span>
          <span className="cpdf-flow__node">Dealer Network</span>
        </div>
      </PageShell>

      <PageShell page={6} eyebrow="Brand Profile" title="SPARS Electric" accent="green" footerLeft="SPARS Electric · sparselectric.com">
        <BrandHero brandId="spars-electric" accent="green" />
        <p className="cpdf-page__intro">
          SPARS Electric is Kalpna Traders&apos; flagship electric vehicle brand — manufacturing premium
          electric scooters from Noida for urban commuters, young professionals, and fleet operators.
          With models including ENVY, VICTORY, RX-100, OMEGA, KNIGHT, and KNIGHT-X, SPARS Electric
          offers zero-emission mobility with in-house financing, lithium battery integration, and a
          growing dealer network across Uttar Pradesh and India.
        </p>
        <div className="cpdf-grid-2">
          {sparsElectric.focus.map((f) => (
            <div key={f} className="cpdf-card cpdf-card--green">
              <p>{f}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: "4mm", fontSize: "0.72rem" }}>
          <strong>Official Website:</strong> {SPARS_ELECTRIC_WEBSITE} · Phone: +91 9289975452 · Showroom: C-77, Sector 63A, Noida
        </p>
      </PageShell>

      <PageShell page={7} eyebrow="Products" title="SPARS Electric — Product Range" accent="green" footerLeft="SPARS Electric Products">
        <p className="cpdf-page__intro">
          SPARS Electric offers a structured portfolio of electric scooters engineered for Indian road
          conditions — from affordable city commuters to high-torque fleet vehicles and commercial cargo
          solutions. All models feature lithium-ion battery packs, digital displays, and dealer-backed
          after-sales support.
        </p>
        <ProductGrid brandId="spars-electric" accent="green" />
      </PageShell>

      <PageShell page={8} eyebrow="Brand Profile" title="SPARS Battery" accent="blue" footerLeft="SPARS Battery · Made in Noida">
        <BrandHero brandId="spars-battery" accent="blue" />
        <p className="cpdf-page__intro">
          SPARS Battery is a dedicated lithium-ion manufacturing division producing premium EV battery
          packs at scale. With automated assembly lines, smart BMS integration, and a 48V product range
          from 28Ah to 45Ah, SPARS Battery powers SPARS Electric vehicles and supplies dealers, OEMs,
          and fleet operators nationwide.
        </p>
        <div className="cpdf-grid-4" style={{ marginBottom: "4mm" }}>
          {batteryStats.map((s) => (
            <div key={s.label} className="cpdf-stat cpdf-stat--blue">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
        <div className="cpdf-grid-3">
          {batteryCapabilities.map((c) => (
            <div key={c.title} className="cpdf-card cpdf-card--blue">
              <h4>{c.title}</h4>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </PageShell>

      <PageShell page={9} eyebrow="Products & Process" title="SPARS Battery — Products & Manufacturing" accent="blue" footerLeft="SPARS Battery Products">
        <p className="cpdf-page__intro">
          Every SPARS battery pack follows a documented six-stage production workflow — from incoming
          cell QC to load testing and warranty registration — ensuring consistency, safety, and
          dealer-ready quality at scale.
        </p>
        <ProductGrid brandId="spars-battery" accent="blue" />
        <div className="cpdf-grid-3" style={{ marginTop: "4mm" }}>
          {batteryProcess.map((step) => (
            <div key={step.step} className="cpdf-card cpdf-card--blue">
              <h4>{step.step} · {step.title}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </PageShell>

      <PageShell page={10} eyebrow="Brand Profile" title="Killa Electronics" accent="orange" footerLeft="Killa Electronics · kilaelectronics.com">
        <BrandHero brandId="killa-electronics" accent="orange" />
        <p className="cpdf-page__intro">
          Killa Electronics manufactures and supplies smart electronic components for electric vehicles
          and industrial applications — including motor controllers, digital displays, EV chargers,
          DC-DC converters, IoT telematics modules, and complete wiring kits. Based in Noida, Killa
          Electronics supports SPARS Electric production and independent OEM customers.
        </p>
        <div className="cpdf-grid-2">
          {killa.focus.map((f) => (
            <div key={f} className="cpdf-card cpdf-card--orange">
              <p>{f}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: "4mm", fontSize: "0.72rem" }}>
          <strong>Official Website:</strong> {KILLA_ELECTRONICS_WEBSITE}
        </p>
      </PageShell>

      <PageShell page={11} eyebrow="Products" title="Killa Electronics — Product Range" accent="orange" footerLeft="Killa Electronics Products">
        <p className="cpdf-page__intro">
          Killa Electronics offers a complete suite of EV electronics — from powertrain control to
          connectivity and user interface components. All products undergo functional testing and QC
          before dispatch.
        </p>
        <ProductGrid brandId="killa-electronics" accent="orange" />
      </PageShell>

      <PageShell page={12} eyebrow="Operations" title="Manufacturing Excellence">
        <p className="cpdf-page__intro">
          Our Noida facility at {COMPANY.address} houses structured manufacturing zones for electric
          scooter assembly, battery pack production, and electronics manufacturing — with segregated
          inbound, production, testing, and outbound areas for audit-ready operations.
        </p>
        <div className="cpdf-grid-2" style={{ marginBottom: "5mm" }}>
          <div className="cpdf-brand-hero__img" style={{ height: "70mm" }}>
            <Image src={IMAGES.factory} alt="Manufacturing facility" fill sizes="50vw" />
          </div>
          <div className="cpdf-brand-hero__img" style={{ height: "70mm" }}>
            <Image src={IMAGES.batteryAssembly} alt="Battery assembly" fill sizes="50vw" />
          </div>
        </div>
        <div className="cpdf-grid-3">
          {manufacturingSteps.map((step) => (
            <div key={step.title} className="cpdf-card cpdf-card--green">
              <h4>{step.step} · {step.title}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </PageShell>

      <PageShell page={13} eyebrow="Synergy" title="Integrated EV Ecosystem">
        <p className="cpdf-page__intro">
          Kalpna Traders&apos; unique advantage is vertical integration — components, batteries, and
          vehicles designed and manufactured together, reducing cost, improving quality control, and
          enabling faster product development cycles.
        </p>
        <div className="cpdf-flow" style={{ marginBottom: "6mm" }}>
          <span className="cpdf-flow__node">Cell Sourcing</span>
          <span className="cpdf-flow__arrow">→</span>
          <span className="cpdf-flow__node">Battery Pack</span>
          <span className="cpdf-flow__arrow">→</span>
          <span className="cpdf-flow__node">Electronics</span>
          <span className="cpdf-flow__arrow">→</span>
          <span className="cpdf-flow__node">Scooter Assembly</span>
          <span className="cpdf-flow__arrow">→</span>
          <span className="cpdf-flow__node">Dealer Delivery</span>
        </div>
        <div className="cpdf-gallery">
          {[
            { src: IMAGES.scooters.lineup4, label: "SPARS Electric Lineup" },
            { src: IMAGES.battery, label: "SPARS Battery Packs" },
            { src: IMAGES.electronics, label: "Electronics Lab" },
            { src: IMAGES.batteryPacks, label: "Battery Inventory" },
            { src: IMAGES.warehouse, label: "Warehouse & Dispatch" },
            { src: IMAGES.dealer, label: "Dealer Network" },
          ].map((img) => (
            <div key={img.label} className="cpdf-gallery__item">
              <Image src={img.src} alt={img.label} fill sizes="100px" />
              <span className="cpdf-gallery__label">{img.label}</span>
            </div>
          ))}
        </div>
      </PageShell>

      <PageShell page={14} eyebrow="Partnership" title="Why Partner With Kalpna Traders">
        <p className="cpdf-page__intro">
          Kalpna Traders offers dealers, investors, and institutional partners a compelling platform —
          multi-brand product depth, Noida manufacturing credibility, and an integrated EV supply chain.
        </p>
        <div className="cpdf-grid-3">
          {whyChoose.map((item) => (
            <div key={item.title} className="cpdf-card cpdf-card--green">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </PageShell>

      <PageShell page={15} eyebrow="Dealers" title="Dealer & Partnership Program">
        <p className="cpdf-page__intro">
          Join the Kalpna Traders dealer network and represent SPARS Electric, SPARS Battery, and Killa
          Electronics in your territory. We provide structured onboarding, product training, marketing
          support, and competitive margins.
        </p>
        <div className="cpdf-grid-2">
          <div className="cpdf-card cpdf-card--green">
            <h4>Dealer Benefits</h4>
            <ul>
              <li>Exclusive territory allocation</li>
              <li>Product & technical training</li>
              <li>Marketing co-support & POS materials</li>
              <li>Competitive margins on all three brands</li>
              <li>Genuine spare parts supply chain</li>
              <li>In-house financing support (via SPARS Electric)</li>
            </ul>
          </div>
          <div className="cpdf-card cpdf-card--green">
            <h4>Partnership Types</h4>
            <ul>
              <li>EV scooter dealership (SPARS Electric)</li>
              <li>Battery distributor (SPARS Battery)</li>
              <li>Electronics OEM supply (Killa Electronics)</li>
              <li>Fleet & institutional bulk orders</li>
              <li>Investor & strategic collaborations</li>
            </ul>
          </div>
        </div>
        <p style={{ marginTop: "5mm", fontSize: "0.78rem" }}>
          <strong>Enquiries:</strong> {COMPANY.phone} · {COMPANY.email}
        </p>
      </PageShell>

      <PageShell page={16} eyebrow="Purpose" title="Vision · Mission · Core Values">
        <div className="cpdf-grid-3" style={{ marginBottom: "5mm" }}>
          <div className="cpdf-card cpdf-card--green">
            <h4>Vision</h4>
            <p>To become India&apos;s most trusted multi-brand EV manufacturing group — powering clean mobility for every Bharatiya commuter, dealer, and fleet operator.</p>
          </div>
          <div className="cpdf-card cpdf-card--blue">
            <h4>Mission</h4>
            <p>To manufacture world-class electric scooters, battery packs, and electronics from Noida — with quality, affordability, and dealer success at the centre of everything we build.</p>
          </div>
          <div className="cpdf-card cpdf-card--orange">
            <h4>Values</h4>
            <ul>
              <li>Quality without compromise</li>
              <li>Dealer & partner prosperity</li>
              <li>Environmental responsibility</li>
              <li>Integrity & compliance</li>
            </ul>
          </div>
        </div>
        <ul className="cpdf-list">
          <li>Democratise premium electric two-wheeler mobility across India</li>
          <li>Invest in disciplined assembly, rigorous testing, and long-term brand equity</li>
          <li>Create sustainable manufacturing employment in Uttar Pradesh</li>
          <li>Build technology-led products that delight customers and empower dealers</li>
        </ul>
      </PageShell>

      <PageShell page={17} eyebrow="Growth" title="Expansion Roadmap">
        <p className="cpdf-page__intro">
          Kalpna Traders is on a defined growth trajectory — scaling manufacturing capacity, expanding
          geographic coverage, diversifying product lines, and strengthening technology capabilities.
        </p>
        <div className="cpdf-timeline">
          {expansionTimeline.map((item) => (
            <div key={item.year} className="cpdf-timeline__item">
              <span className="cpdf-timeline__year">{item.year}</span>
              <span className="cpdf-timeline__text">{item.text}</span>
            </div>
          ))}
        </div>
      </PageShell>

      <section className="cpdf-back">
        <div className="cpdf-page__bar" />
        <div className="cpdf-back__main">
          <div>
            <h2 className="cpdf-back__title">Let&apos;s Connect</h2>
            <p style={{ fontSize: "0.82rem", lineHeight: 1.65, color: "rgba(255,255,255,0.8)", margin: "0 0 6mm" }}>
              Thank you for your interest in {COMPANY.legalName}. We welcome enquiries from dealers,
              investors, fleet operators, institutions, and strategic partners.
            </p>
            <div className="cpdf-back__block">
              <h4>Corporate Office</h4>
              <p>{COMPANY.address}</p>
              <h4>Phone & Email</h4>
              <p>{COMPANY.phone}<br />{COMPANY.email}</p>
              <h4>Brand Websites</h4>
              <p>
                SPARS Electric: sparselectric.com<br />
                Killa Electronics: kilaelectronics.com
              </p>
            </div>
          </div>
          <div className="cpdf-brand-hero__img" style={{ height: "90mm", borderColor: "rgba(0,200,83,0.4)" }}>
            <Image src={IMAGES.scooters.lineup3} alt="SPARS Electric" fill sizes="50vw" />
          </div>
        </div>
        <footer className="cpdf-page__footer" style={{ borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.5)" }}>
          <span>{COMPANY.legalName} · Confidential Corporate Profile 2026</span>
          <span>Page {TOTAL_PAGES} of {TOTAL_PAGES}</span>
        </footer>
      </section>
    </div>
  );
}
