import "./FeatureGrid.css";
import { getFeatures } from "../data/getFeatures";
import { getIcon } from "../data/iconMap";

const features = getFeatures();

export default function FeatureGrid() {
  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <span className="features-label">What it actually does</span>
          <h2>No buzzwords. Here's the list.</h2>
        </div>
        <div className="features-grid">
          {features.map((feature) => {
            const Icon = getIcon(feature.icon);
            return (
              <div key={feature.num} className="feature-card">
                <div className="feature-top">
                  <span className="feature-num">{feature.num}</span>
                  <Icon className="feature-icon" strokeWidth={1.5} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
