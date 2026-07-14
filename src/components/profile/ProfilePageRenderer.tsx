import Image from "next/image";
import type { ProfilePageData } from "@/lib/profile-types";
import { BRAND } from "@/lib/profile-types";
import { IMAGES } from "@/lib/images";

function MetaPanel({ meta }: { meta: ProfilePageData["meta"] }) {
  return (
    <div className="profile-meta">
      <div className="profile-meta__block">
        <span className="profile-meta__label">Suggested images</span>
        <p className="profile-meta__text">{meta.images.join(" · ")}</p>
      </div>
      <div className="profile-meta__block">
        <span className="profile-meta__label">Suggested icons</span>
        <p className="profile-meta__text">{meta.icons.join(" · ")}</p>
      </div>
      <div className="profile-meta__block">
        <span className="profile-meta__label">Design notes</span>
        <p className="profile-meta__text">{meta.designNotes}</p>
      </div>
      <div className="profile-meta__block">
        <span className="profile-meta__label">Color palette</span>
        <p className="profile-meta__text">{meta.colors}</p>
      </div>
      <div className="profile-meta__block">
        <span className="profile-meta__label">Layout notes</span>
        <p className="profile-meta__text">{meta.layout}</p>
      </div>
      <div className="profile-meta__block">
        <span className="profile-meta__label">Footer suggestion</span>
        <p className="profile-meta__text">{meta.footer}</p>
      </div>
    </div>
  );
}

function CoverPage({ page }: { page: ProfilePageData }) {
  return (
    <section className="profile-page profile-page--cover" id={page.id}>
      <header className="profile-page__header">
        <div>
          <p className="profile-page__eyebrow">Corporate Profile 2026</p>
          <h1 className="profile-page__title">{page.title}</h1>
        </div>
        <span className="profile-page__page-no">Page {page.pageNumber}</span>
      </header>
      <div className="profile-page__body">
        <div className="profile-cover">
          <div>
            <Image
              src={IMAGES.logo}
              alt="Kalpna Traders"
              width={88}
              height={88}
              className="profile-cover__logo-img"
            />
            <div className="profile-cover__brand">{BRAND.brandName}</div>
            <p className="profile-cover__tagline">{BRAND.tagline}</p>
            <p className="profile-cover__legal">{BRAND.legalName}</p>
          </div>
          <div className="profile-cover__visual">
            <span>Premium EV hero visual · Noida manufacturing excellence</span>
          </div>
        </div>
        <MetaPanel meta={page.meta} />
      </div>
      <footer className="profile-page__footer">
        <span>{BRAND.legalName}</span>
        <span>{BRAND.factory}</span>
      </footer>
    </section>
  );
}

function IndexPage({ page, entries }: { page: ProfilePageData; entries: { n: number; t: string }[] }) {
  return (
    <section className="profile-page" id={page.id}>
      <header className="profile-page__header">
        <div>
          <p className="profile-page__eyebrow">{page.title}</p>
          <h2 className="profile-page__title">{page.heading}</h2>
        </div>
        <span className="profile-page__page-no">Page {page.pageNumber}</span>
      </header>
      <div className="profile-page__body">
        <p className="profile-page__intro">{page.intro}</p>
        <div className="profile-index">
          {entries.map((e) => (
            <div key={e.n}>
              <span>{e.t}</span>
              <span>{e.n}</span>
            </div>
          ))}
        </div>
        <MetaPanel meta={page.meta} />
      </div>
      <footer className="profile-page__footer">
        <span>SPARS ELECTRIC</span>
        <span>Table of Contents</span>
      </footer>
    </section>
  );
}

export function ProfilePageRenderer({
  page,
  indexEntries,
}: {
  page: ProfilePageData;
  indexEntries?: { n: number; t: string }[];
}) {
  if (page.variant === "cover") return <CoverPage page={page} />;
  if (page.id === "index" && indexEntries) return <IndexPage page={page} entries={indexEntries} />;

  const variantClass = page.variant === "inside" ? "profile-page--inside" : "";

  return (
    <section className={`profile-page ${variantClass}`} id={page.id}>
      <header className="profile-page__header">
        <div>
          <p className="profile-page__eyebrow">{page.title}</p>
          <h2 className="profile-page__title">{page.heading}</h2>
        </div>
        <span className="profile-page__page-no">Page {page.pageNumber}</span>
      </header>

      <div className="profile-page__body">
        <div>
          <p className="profile-page__intro">{page.intro}</p>

          {page.bullets && page.bullets.length > 0 && (
            <ul className="profile-list">
              {page.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          {page.stats && page.stats.length > 0 && (
            <div className="profile-grid-3" style={{ marginTop: "4mm" }}>
              {page.stats.map((stat) => (
                <div key={stat.label} className="profile-card profile-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          )}

          {page.cards && page.cards.length > 0 && (
            <div
              className={
                page.cards.length >= 4
                  ? "profile-grid-2"
                  : page.cards.length === 3
                    ? "profile-grid-3"
                    : "profile-grid-2"
              }
              style={{ marginTop: "4mm" }}
            >
              {page.cards.map((card) => (
                <article key={card.title} className="profile-card">
                  <h4>{card.title}</h4>
                  {card.body && <p>{card.body}</p>}
                  {card.bullets && (
                    <ul>
                      {card.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          )}

          {page.timeline && page.timeline.length > 0 && (
            <div className="profile-timeline" style={{ marginTop: "4mm" }}>
              {page.timeline.map((item) => (
                <div key={item.year + item.text} className="profile-timeline__item">
                  <span className="profile-timeline__year">{item.year}</span>
                  <span className="profile-timeline__text">{item.text}</span>
                </div>
              ))}
            </div>
          )}

          {(page.flow || page.flows) && (
            <div style={{ marginTop: "4mm", display: "grid", gap: "3mm" }}>
              {(page.flows ?? (page.flow ? [page.flow] : [])).map((flow) => (
                <div key={flow.title} className="profile-diagram">
                  <p className="profile-diagram__title">{flow.title}</p>
                  <div className="profile-flow">
                    {flow.nodes.map((node, i) => (
                      <span key={node}>
                        <span className="profile-flow__node">{node}</span>
                        {i < flow.nodes.length - 1 && (
                          <span className="profile-flow__arrow"> → </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <MetaPanel meta={page.meta} />
      </div>

      <footer className="profile-page__footer">
        <span>{page.meta.footer}</span>
        <span>Page {page.pageNumber}</span>
      </footer>
    </section>
  );
}
