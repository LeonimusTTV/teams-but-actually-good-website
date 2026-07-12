import Hero from "../components/Hero";
import FeatureGrid from "../components/FeatureGrid";
import { Link } from "react-router-dom";
import "./Home.css";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <PageTransition>
      <Seo
        title="Teams but (actually) good — A faster, lighter Microsoft Teams"
        description="Teams but (actually) good is a free, open-source Microsoft Teams mod for Windows, macOS, Linux, Chrome, and Firefox that removes bloat and adds quality-of-life plugins and themes."
        path="/"
      />
      <Hero />
      <FeatureGrid />

      <section className="cta-section">
        <div className="container">
          <Reveal className="cta-content">
            <span className="cta-label">Ready to stop suffering?</span>
            <h2>Just install it.</h2>
            <p>
              No accounts. If you hate it, uninstall it, Teams goes back to
              exactly how Microsoft intended. For better or worse.
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
