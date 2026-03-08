import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import "./Hero.css";
import pluginsData from "../data/plugins.json";
import themesData from "../data/themes.json";
import ParticleField from "./ParticleField";
import { useTextScramble } from "../hooks/useTextScramble";
import { useCountUp } from "../hooks/useCountUp";

function ScrambleText({ text, delay = 0 }: { text: string; delay?: number }) {
  const { text: out } = useTextScramble(text, delay, 1000);
  return <>{out}</>;
}

function CountStat({
  value,
  label,
  delay = 0,
}: {
  value: number | string;
  label: string;
  delay?: number;
}) {
  const isNum = typeof value === "number";
  const { value: count, ref } = useCountUp(isNum ? value : 0, 1400, delay);

  return (
    <div className="stat">
      <span className="stat-num" ref={isNum ? ref : undefined}>
        {isNum ? count : value}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function MagneticLink({
  to,
  className,
  children,
}: {
  to: string;
  className: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.28;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.28;
    el.style.transform = `translate(${x}px, ${y}px)`;
    el.style.transition = "transform 0.1s ease";
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
    el.style.transition = "transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
  };

  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <Link to={to} className={className}>
        {children}
      </Link>
    </div>
  );
}

const E = [0.22, 1, 0.36, 1] as const;

// Stagger container variants
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: E },
  },
};

export default function Hero() {
  const pluginCount = pluginsData.length;
  const themeCount = themesData.length;

  return (
    <section className="hero">
      {/* Animated background */}
      <div className="hero-bg" aria-hidden="true">
        <ParticleField />
        <div className="hero-glow" />
        <div className="hero-aurora" />
      </div>

      <div className="container">
        <div className="hero-inner">
          {/* Left: text */}
          <motion.div
            className="hero-text"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-badge"
              >
                <span className="badge-dot" />
                Open source · MIT license
              </a>
            </motion.div>

            <motion.h1
              className="hero-title"
              aria-label="Teams is bad. We fixed it."
              variants={item}
            >
              <span
                className="hero-title-line1"
                data-text="Teams is bad."
              >
                <ScrambleText text="Teams is bad." delay={200} />
              </span>
              <br />
              <em>
                <ScrambleText text="We fixed it." delay={750} />
              </em>
            </motion.h1>

            <motion.p className="hero-desc" variants={item}>
              An open-source mod that strips the bloat, blocks telemetry, and
              makes Microsoft Teams usable. One installer. No accounts. Free.
            </motion.p>

            <motion.div className="hero-stats" variants={item}>
              <CountStat value={pluginCount} label="plugins" delay={300} />
              <div className="stat-sep" />
              <CountStat value={themeCount} label="themes" delay={500} />
              <div className="stat-sep" />
              <CountStat value={0} label="telemetry" delay={700} />
              <div className="stat-sep" />
              <CountStat value={"free"} label="always" />
            </motion.div>

            <motion.div className="hero-actions" variants={item}>
              <MagneticLink to="/download" className="btn btn-primary">
                Download — it's free
              </MagneticLink>
              <MagneticLink to="/plugins" className="btn btn-ghost">
                See what's included →
              </MagneticLink>
            </motion.div>
          </motion.div>

          {/* Right: CSS Teams mockup */}
          <motion.div
            className="hero-visual"
            aria-hidden="true"
            initial={{ opacity: 0, x: 40, filter: "blur(12px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mockup">
              <div className="mockup-scan" />
              <div className="mockup-bar">
                <div className="mockup-dots">
                  <span className="mdot red" />
                  <span className="mdot yellow" />
                  <span className="mdot green" />
                </div>
                <span className="mockup-title">Microsoft Teams</span>
                <span className="mod-badge">mod active</span>
              </div>

              <div className="mockup-body">
                <aside className="mockup-sidebar">
                  <div className="sidebar-section">Teams</div>
                  <div className="sidebar-item sidebar-item--active">
                    <span className="sidebar-bullet" />
                    General
                  </div>
                  <div className="sidebar-item"># standup</div>
                  <div className="sidebar-item"># random</div>
                  <div className="sidebar-item"># announcements</div>
                  <div className="sidebar-divider" />
                  <div className="sidebar-item"># design</div>
                  <div className="sidebar-item"># engineering</div>
                </aside>

                <div className="mockup-chat">
                  <div className="chat-header">
                    <span className="chat-channel"># general</span>
                    <span className="chat-count">42 members</span>
                  </div>

                  <div className="chat-messages">
                    {[
                      { color: "#3b82f6", name: "Alice", time: "9:41 AM", msg: "Is it just me or does Teams actually run fast now??" },
                      { color: "#22d3ee", textColor: "#060910", name: "Bob", time: "9:42 AM", msg: "Installed the mod. Night and day difference 🙏" },
                      { color: "#a78bfa", name: "Carol", time: "9:43 AM", msg: "No telemetry?? Microsoft is going to hate this lol" },
                      { color: "#f59e0b", name: "Dave", time: "9:44 AM", msg: "Sending the link to the whole team rn" },
                    ].map((m, i) => (
                      <div
                        key={m.name}
                        className="chat-msg"
                        style={{ animationDelay: `${0.6 + i * 0.18}s` }}
                      >
                        <div
                          className="avatar"
                          style={{
                            background: m.color,
                            color: m.textColor ?? "white",
                          }}
                        >
                          {m.name[0]}
                        </div>
                        <div className="msg-content">
                          <div className="msg-meta">
                            <span className="msg-name">{m.name}</span>
                            <span className="msg-time">{m.time}</span>
                          </div>
                          <p>{m.msg}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="chat-input">
                    <span className="chat-input-placeholder">
                      Message #general
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mockup-glow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
