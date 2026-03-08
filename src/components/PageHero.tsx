import { motion } from "framer-motion";
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
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="page-hero">
      <div
        className={`page-hero-glow${glowSide === "left" ? " page-hero-glow--left" : ""}`}
      />
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          {label}
        </motion.span>
        <motion.h1
          className="page-hero-title"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="page-hero-sub"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease }}
        >
          {subtitle}
        </motion.p>
        {children && (
          <motion.div
            className="page-hero-extra"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
