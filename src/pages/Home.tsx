import Hero from "../components/Hero";
import FeatureGrid from "../components/FeatureGrid";
import { Link } from "react-router-dom";
import "./Home.css";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <FeatureGrid />

      <section className="cta-section">
        <div className="container">
          <Reveal className="cta-content">
            <span className="cta-label">Ready to stop suffering?</span>
            <h2>Just install it.</h2>
            <p>
              No accounts. No telemetry. If you hate it, uninstall it, Teams
              goes back to exactly how Microsoft intended. For better or worse.
            </p>
            <div className="cta-buttons">
              <Link to="/download" className="btn btn-primary">
                Download, it's free
              </Link>
              <Link to="/plugins" className="btn btn-secondary">
                See what's included
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
