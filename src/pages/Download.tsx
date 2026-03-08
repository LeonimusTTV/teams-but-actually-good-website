import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import "./Download.css";
import platformsData from "../data/platforms.json";
import pluginsData from "../data/plugins.json";
import { getIcon } from "../data/iconMap";
import PageHero from "../components/PageHero";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";

const platforms = platformsData;
const pluginCount = pluginsData.length;

export default function Download() {
  return (
    <PageTransition>
      <div className="download-page">
        <PageHero
          label="Download"
          title={
            <>
              One file.
              <br />
              <em>Three platforms.</em>
              <br />
              Zero drama.
            </>
          }
          subtitle="No account. No license key. It's just a file."
        />

        {/* Platform rows */}
        <section className="dl-platforms">
          <div className="container">
            <div className="platform-list">
              {platforms.map((platform, i) => {
                const Icon = getIcon(platform.icon);
                return (
                  <motion.div
                    className="platform-row"
                    key={platform.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
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
                      <button className="btn btn-primary platform-btn">
                        {platform.label} <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
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
                { n: "01", title: "Download", desc: "Grab the file for your platform above." },
                { n: "02", title: "Run it", desc: "Open the installer. No admin rights needed." },
                { n: "03", title: "Open Teams", desc: "Launch Teams. It'll look different. That's the point." },
              ].map((step, i) => (
                <>
                  <motion.div
                    key={step.n}
                    className="step-node"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="step-n">{step.n}</span>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </motion.div>
                  {i < 2 && <div className="step-connector" aria-hidden="true" />}
                </>
              ))}
            </div>
          </div>
        </section>

        {/* Terminal */}
        <section className="dl-terminal-section">
          <div className="container">
            <motion.div
              className="dl-terminal"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
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
            </motion.div>
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
                  a: "Yes. It's open source — read every line. All modifications run locally and don't touch Teams' servers.",
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
                  a: "Yes. Uninstall like any other app. Teams goes back to exactly how Microsoft intended — for better or worse.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.q}
                  className="faq-q"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
