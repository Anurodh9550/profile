export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`section-heading section-heading--${align} ${light ? "section-heading--light" : ""}`}>
      <span className="section-heading__eyebrow">{eyebrow}</span>
      <h2 className="section-heading__title">{title}</h2>
      {description && <p className="section-heading__desc">{description}</p>}
    </div>
  );
}
