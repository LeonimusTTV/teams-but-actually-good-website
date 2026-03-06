import { Monitor, Apple, Terminal, ArrowRight } from "lucide-react";
import "./Download.css";

const platforms = [
  {
    Icon: Monitor,
    name: "Windows",
    req: "Windows 10 / 11 · 64-bit",
    label: "Download for Windows",
    ext: ".exe",
  },
  {
    Icon: Apple,
    name: "macOS",
    req: "macOS 11 Big Sur or later",
    label: "Download for macOS",
    ext: ".dmg",
  },
  {
    Icon: Terminal,
    name: "Linux",
    req: "Most distributions · .deb and .rpm",
    label: "Download for Linux",
    ext: ".tar.gz",
  },
];

export default function Download() {
  return (
    <div className="download-page">
      {/* Hero */}
      <section className="dl-hero">
        <div className="dl-hero-glow" />
        <div className="container">
          <span className="dl-label">Download</span>
          <h1 className="dl-title">
            One file.
            <br />
            <em>Three platforms.</em>
            <br />
            Zero drama.
          </h1>
          <p className="dl-sub">
            No account. No license key. It's just a file.
          </p>
        </div>
      </section>

      {/* Platform rows */}
      <section className="dl-platforms">
        <div className="container">
          <div className="platform-list">
            {platforms.map(({ Icon, name, req, label, ext }) => (
              <div className="platform-row" key={name}>
                <div className="platform-left">
                  <Icon className="platform-os-icon" strokeWidth={1} />
                  <div className="platform-meta">
                    <span className="platform-name">{name}</span>
                    <span className="platform-req">{req}</span>
                  </div>
                </div>
                <div className="platform-right">
                  <span className="platform-ext">{ext}</span>
                  <button className="btn btn-primary platform-btn">
                    {label} <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="dl-steps">
        <div className="container">
          <span className="dl-section-label">How it works</span>
          <div className="steps-rail">
            <div className="step-node">
              <span className="step-n">01</span>
              <h3>Download</h3>
              <p>Grab the file for your platform above.</p>
            </div>
            <div className="step-connector" aria-hidden="true" />
            <div className="step-node">
              <span className="step-n">02</span>
              <h3>Run it</h3>
              <p>Open the installer. No admin rights needed.</p>
            </div>
            <div className="step-connector" aria-hidden="true" />
            <div className="step-node">
              <span className="step-n">03</span>
              <h3>Open Teams</h3>
              <p>Launch Teams. It'll look different. That's the point.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal */}
      <section className="dl-terminal-section">
        <div className="container">
          <div className="dl-terminal">
            <div className="dl-terminal-bar">
              <div className="term-dots">
                <span className="tdot tdot-red" />
                <span className="tdot tdot-yellow" />
                <span className="tdot tdot-green" />
              </div>
              <span className="dl-terminal-title">install.log</span>
            </div>
            <div className="dl-terminal-body">
              <div className="tline tline-1">
                <span className="tp">$</span> teams-good-installer.exe
              </div>
              <div className="tline tline-2">
                <span className="ta">›</span> Detecting Teams installation…{" "}
                <span className="tg">found</span>
              </div>
              <div className="tline tline-3">
                <span className="ta">›</span> Patching core modules…{" "}
                <span className="tg">done</span>
              </div>
              <div className="tline tline-4">
                <span className="ta">›</span> Applying 9 plugins…{" "}
                <span className="tg">done</span>
              </div>
              <div className="tline tline-5">
                <span className="ta">›</span> Blocking telemetry endpoints…{" "}
                <span className="tg">done</span>
              </div>
              <div className="tline tline-6">
                <span className="ta">›</span>{" "}
                <span className="tg">All done. Launch Teams to begin.</span>
              </div>
              <div className="tline tline-7">
                <span className="tp">$</span> <span className="t-cursor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="dl-faq">
        <div className="container">
          <span className="dl-section-label">FAQ</span>
          <h2 className="faq-heading">Questions you might have</h2>
          <div className="faq-grid">
            <div className="faq-q">
              <h3>Is it safe?</h3>
              <p>
                Yes. It's open source — read every line. All modifications run
                locally and don't touch Teams' servers.
              </p>
            </div>
            <div className="faq-q">
              <h3>Will Microsoft ban me?</h3>
              <p>
                This is a client-side mod. It doesn't violate Teams' terms of
                service. Use your judgment in corporate environments.
              </p>
            </div>
            <div className="faq-q">
              <h3>How do updates work?</h3>
              <p>
                There's a built-in updater. It'll notify you when something new
                is available. No action needed.
              </p>
            </div>
            <div className="faq-q">
              <h3>Can I uninstall it?</h3>
              <p>
                Yes. Uninstall like any other app. Teams goes back to exactly
                how Microsoft intended — for better or worse.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
