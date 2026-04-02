import { ArrowRight } from "lucide-react";
import "./Download.css";
import platformsData from "../data/platforms.json";
import pluginsData from "../data/plugins.json";
import { getIcon } from "../data/iconMap";
import PageHero from "../components/PageHero";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import { useEffect, useState } from "react";

const META_URL =
  "https://api.github.com/repos/LeonimusTTV/teams-but-actually-good/releases/latest";

const platforms = platformsData;
const pluginCount = pluginsData.length;

export default function Download() {
  // get latest version from meta url
  const [version, setVersion] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(META_URL, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch latest version: ${response.status}`);
        }

        return response.json();
      })
      .then((data: { tag_name?: string }) => {
        if (data.tag_name) {
          setVersion(data.tag_name.replace(/^v/, ""));
        }
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <PageTransition>
      <div className="download-page">
        <PageHero
          label="Download"
          title={
            <>
              Every platform.
              <br />
              <em>One experience.</em>
              <br />
              Zero drama.
            </>
          }
          subtitle="No account. No license key. Pick your platform."
        />

        {/* Platform rows */}
        <section className="dl-platforms">
          <div className="container">
            <div className="platform-list">
              {platforms.map((platform, i) => {
                const Icon = getIcon(platform.icon);
                return (
                  <Reveal
                    className="platform-row"
                    key={platform.name}
                    delay={i * 0.1}
                    x={-20}
                    y={0}
                  >
                    <div className="platform-left">
                      <Icon className="platform-os-icon" strokeWidth={1} />
                      <div className="platform-meta">
                        <span className="platform-name">{platform.name}</span>
                        <span className="platform-req">
                          {platform.requirement}
                        </span>
                      </div>
                    </div>
                    <div className="platform-right">
                      <span className="platform-ext">{platform.extension}</span>
                      <button
                        className="btn btn-primary platform-btn"
                        onClick={() => {
                          window.open(
                            platform.url.replace("${version}", version || ""),
                            "_blank",
                          );
                        }}
                      >
                        {platform.label} <ArrowRight size={14} />
                      </button>
                      {platform.storeUrl && (
                        <button
                          className="btn btn-secondary platform-btn"
                          onClick={() => {
                            window.open(platform.storeUrl, "_blank");
                          }}
                        >
                          {platform.storeLabel} <ArrowRight size={14} />
                        </button>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="dl-steps">
          <div className="container">
            <Reveal>
              <span className="section-label" style={{ marginBottom: "3rem" }}>
                How it works
              </span>
            </Reveal>
            <div className="steps-rail">
              {[
                {
                  n: "01",
                  title: "Download",
                  desc: "Grab the file for your platform above.",
                },
                {
                  n: "02",
                  title: "Run it",
                  desc: "Open the installer. No admin rights needed.",
                },
                {
                  n: "03",
                  title: "Open Teams",
                  desc: "Launch Teams. It'll look different. That's the point.",
                },
              ].map((step, i) => (
                <>
                  <Reveal key={step.n} className="step-node" delay={i * 0.12}>
                    <span className="step-n">{step.n}</span>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </Reveal>
                  {i < 2 && (
                    <div className="step-connector" aria-hidden="true" />
                  )}
                </>
              ))}
            </div>
          </div>
        </section>

        {/* Terminal */}
        <section className="dl-terminal-section">
          <div className="container">
            <Reveal className="dl-terminal" scale={0.98}>
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
                  <span className="ta">›</span> Applying {pluginCount} plugins…{" "}
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
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="dl-faq">
          <div className="container">
            <Reveal>
              <span className="section-label" style={{ marginBottom: "3rem" }}>
                FAQ
              </span>
              <h2 className="faq-heading">Questions you might have</h2>
            </Reveal>
            <div className="faq-grid">
              {[
                {
                  q: "Is it safe?",
                  a: "Yes. It's open source, read every line. All modifications run locally and don't touch Teams' servers.",
                },
                {
                  q: "Will Microsoft ban me?",
                  a: "This is a client-side mod. It doesn't violate Teams' terms of service. Use your judgment in corporate environments.",
                },
                {
                  q: "How do updates work?",
                  a: "There's a built-in updater. It'll notify you when something new is available. No action needed.",
                },
                {
                  q: "Can I uninstall it?",
                  a: "Yes. Uninstall like any other app. Teams goes back to exactly how Microsoft intended, for better or worse.",
                },
              ].map((item, i) => (
                <Reveal key={item.q} className="faq-q" delay={i * 0.09}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
