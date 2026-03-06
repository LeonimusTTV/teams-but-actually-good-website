import { Paintbrush, Zap, Puzzle, Palette, ShieldCheck, Download } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import "./FeatureGrid.css";

interface Feature {
  num: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

const features: Feature[] = [
  {
    num: "01",
    title: "Cleaner UI",
    description:
      "Strips the clutter Microsoft glued onto Teams. Less noise, more work.",
    Icon: Paintbrush,
  },
  {
    num: "02",
    title: "Actually Fast",
    description:
      "Cuts the bloat that makes Teams crawl. Meetings load faster. You suffer less.",
    Icon: Zap,
  },
  {
    num: "03",
    title: "9 Built-in Plugins",
    description:
      "Pre-installed, opt-in. Enable what you need, ignore the rest. No marketplace, no accounts.",
    Icon: Puzzle,
  },
  {
    num: "04",
    title: "8 Themes",
    description:
      "Dark, light, and everything in between. Switch instantly from the settings panel.",
    Icon: Palette,
  },
  {
    num: "05",
    title: "No Telemetry",
    description:
      "Microsoft already knows enough about you. We block what we can.",
    Icon: ShieldCheck,
  },
  {
    num: "06",
    title: "One Installer",
    description:
      "Download, run, done. No admin rights. Uninstall any time — Teams goes back to normal.",
    Icon: Download,
  },
];

export default function FeatureGrid() {
  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <span className="features-label">What it actually does</span>
          <h2>No buzzwords. Here's the list.</h2>
        </div>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.num} className="feature-card">
              <div className="feature-top">
                <span className="feature-num">{feature.num}</span>
                <feature.Icon className="feature-icon" strokeWidth={1.5} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
