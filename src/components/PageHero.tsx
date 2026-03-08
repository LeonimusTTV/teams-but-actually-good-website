import "./PageHero.css";

interface PageHeroProps {
  label: string;
  title: React.ReactNode;
  subtitle: string;
  glowSide?: "left" | "right";
  children?: React.ReactNode;
}

export default function PageHero({
  label,
  title,
  subtitle,
  glowSide = "right",
  children,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div
        className={`page-hero-glow${glowSide === "left" ? " page-hero-glow--left" : ""}`}
      />
      <div className="container">
        <span className="section-label">{label}</span>
        <h1 className="page-hero-title">{title}</h1>
        <p className="page-hero-sub">{subtitle}</p>
        {children && <div className="page-hero-extra">{children}</div>}
      </div>
    </section>
  );
}
