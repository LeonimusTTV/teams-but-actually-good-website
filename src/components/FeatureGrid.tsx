import { motion } from "framer-motion";
import "./FeatureGrid.css";
import { getFeatures } from "../data/getFeatures";
import { getIcon } from "../data/iconMap";
import Reveal from "./Reveal";

const features = getFeatures();

function TiltCard({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className: string;
  delay: number;
}) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--tilt-x", `${-y * 14}deg`);
    el.style.setProperty("--tilt-y", `${x * 14}deg`);
    el.style.setProperty("--shine-x", `${x * 100 + 50}%`);
    el.style.setProperty("--shine-y", `${y * 100 + 50}%`);
    el.style.transition = "transform 0.05s ease, background 0.15s ease";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
    el.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.15s ease";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </motion.div>
  );
}

export default function FeatureGrid() {
  return (
    <section className="features">
      <div className="container">
        <Reveal className="features-header">
          <span className="features-label">What it actually does</span>
          <h2>No buzzwords. Here's the list.</h2>
        </Reveal>
        <div className="features-grid">
          {features.map((feature, i) => {
            const Icon = getIcon(feature.icon);
            return (
              <TiltCard
                key={feature.num}
                className="feature-card"
                delay={i * 0.07}
              >
                <div className="feature-shine" />
                <div className="feature-top">
                  <span className="feature-num">{feature.num}</span>
                  <Icon className="feature-icon" strokeWidth={1.5} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
