import Hero from "../components/Hero";
import FeatureGrid from "../components/FeatureGrid";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";
import PageTransition from "../components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <FeatureGrid />

      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="cta-label">Ready to stop suffering?</span>
            <h2>Just install it.</h2>
            <p>
              No accounts. No telemetry. If you hate it, uninstall it — Teams
              goes back to exactly how Microsoft intended. For better or worse.
            </p>
            <div className="cta-buttons">
              <Link to="/download" className="btn btn-primary">
                Download — it's free
              </Link>
              <Link to="/plugins" className="btn btn-secondary">
                See what's included
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
