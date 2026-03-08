import { motion } from "framer-motion";
import "./Themes.css";
import themesData from "../data/themes.json";
import type { Theme } from "../data/types";
import PageHero from "../components/PageHero";
import InfoGrid from "../components/InfoGrid";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";

const themes: Theme[] = themesData;

const infoCards = [
  {
    num: "01",
    title: "Switching themes",
    body: "Open settings, pick a theme, done. Your choice is saved and applied every time Teams starts.",
  },
  {
    num: "02",
    title: "Custom themes",
    body: "A theme editor is in the works. You'll be able to build and share your own. Not done yet — but it's coming.",
  },
];

interface MiniMockupProps {
  colors: Theme["colors"];
}

function MiniMockup({ colors }: MiniMockupProps) {
  const activeBg = `${colors.primary}28`;

  return (
    <div
      className="mini-mockup"
      style={{ background: colors.secondary, borderColor: colors.border }}
    >
      <div className="mini-bar" style={{ borderBottomColor: colors.border }}>
        <div className="mini-dots">
          <span className="mini-dot" style={{ background: "#ff5f57" }} />
          <span className="mini-dot" style={{ background: "#febc2e" }} />
          <span className="mini-dot" style={{ background: "#28c840" }} />
        </div>
        <span className="mini-title" style={{ color: colors.textMuted }}>
          Microsoft Teams
        </span>
        <span
          className="mini-badge"
          style={{
            color: colors.accent,
            borderColor: `${colors.accent}50`,
            background: `${colors.accent}18`,
          }}
        >
          mod
        </span>
      </div>

      <div className="mini-body">
        <div
          className="mini-sidebar"
          style={{ borderRightColor: colors.border }}
        >
          <div
            className="mini-item mini-item--active"
            style={{ background: activeBg }}
          >
            <span className="mini-bullet" style={{ background: colors.primary }} />
            <span className="mini-item-text" style={{ color: colors.primary }}>
              General
            </span>
          </div>
          <div className="mini-item">
            <span className="mini-item-text" style={{ color: colors.textMuted }}>
              # standup
            </span>
          </div>
          <div className="mini-item">
            <span className="mini-item-text" style={{ color: colors.textMuted }}>
              # random
            </span>
          </div>
          <div className="mini-item">
            <span className="mini-item-text" style={{ color: colors.textMuted }}>
              # design
            </span>
          </div>
        </div>

        <div className="mini-chat">
          <div
            className="mini-chat-header"
            style={{ borderBottomColor: colors.border, color: colors.text }}
          >
            # general
          </div>
          <div className="mini-messages">
            <div className="mini-msg">
              <div className="mini-avatar" style={{ background: colors.primary }}>A</div>
              <div className="mini-msg-lines">
                <div className="mini-line" style={{ background: colors.textMuted, width: "70%" }} />
                <div className="mini-line" style={{ background: colors.textMuted, width: "45%" }} />
              </div>
            </div>
            <div className="mini-msg">
              <div className="mini-avatar" style={{ background: colors.accent }}>B</div>
              <div className="mini-msg-lines">
                <div className="mini-line" style={{ background: colors.textMuted, width: "55%" }} />
              </div>
            </div>
            <div className="mini-msg">
              <div className="mini-avatar" style={{ background: colors.primary, opacity: 0.6 }}>C</div>
              <div className="mini-msg-lines">
                <div className="mini-line" style={{ background: colors.textMuted, width: "80%" }} />
                <div className="mini-line" style={{ background: colors.textMuted, width: "30%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ThemeCard({ theme, index }: { theme: Theme; index: number }) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--tilt-x", `${-y * 8}deg`);
    el.style.setProperty("--tilt-y", `${x * 8}deg`);
    el.style.transition = "transform 0.05s ease";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
    el.style.transition = "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
  };

  return (
    <Reveal delay={index * 0.07} y={30} scale={0.97}>
      <div
        className="theme-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={
          {
            transform:
              "perspective(900px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))",
          } as React.CSSProperties
        }
      >
        <div className="theme-preview-wrap">
          <MiniMockup colors={theme.colors} />
        </div>
        <div className="theme-info">
          <div className="theme-info-row">
            <h3 className="theme-name">{theme.name}</h3>
            {theme.isLight && <span className="theme-tag">Light</span>}
          </div>
          <p className="theme-desc">{theme.description}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Themes() {
  return (
    <PageTransition>
      <div className="themes-page">
        <PageHero
          label="Themes"
          title={
            <>
              {themes.length} ways to make
              <br />
              <em>Teams less ugly.</em>
            </>
          }
          subtitle="Switch instantly from the settings panel. No restart. Your choice is saved and applied every time Teams starts."
        >
          <div className="th-swatches">
            {themes.map((t, i) => (
              <motion.span
                key={t.name}
                className="th-swatch"
                style={{ background: t.colors.primary }}
                title={t.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 + i * 0.04, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </div>
        </PageHero>

        {/* Theme grid */}
        <section className="th-grid-section">
          <div className="container">
            <div className="themes-grid">
              {themes.map((theme, i) => (
                <ThemeCard key={theme.name} theme={theme} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Info */}
        <section className="info-section">
          <div className="container">
            <Reveal delay={0.1}>
              <InfoGrid cards={infoCards} cols={2} />
            </Reveal>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
