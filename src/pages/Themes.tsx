import "./Themes.css";
import themesData from "../data/themes.json";
import type { Theme } from "../data/types";
import PageHero from "../components/PageHero";
import InfoGrid from "../components/InfoGrid";

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
      {/* Titlebar */}
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

      {/* Body */}
      <div className="mini-body">
        {/* Sidebar */}
        <div
          className="mini-sidebar"
          style={{ borderRightColor: colors.border }}
        >
          <div
            className="mini-item mini-item--active"
            style={{ background: activeBg }}
          >
            <span
              className="mini-bullet"
              style={{ background: colors.primary }}
            />
            <span className="mini-item-text" style={{ color: colors.primary }}>
              General
            </span>
          </div>
          <div className="mini-item">
            <span
              className="mini-item-text"
              style={{ color: colors.textMuted }}
            >
              # standup
            </span>
          </div>
          <div className="mini-item">
            <span
              className="mini-item-text"
              style={{ color: colors.textMuted }}
            >
              # random
            </span>
          </div>
          <div className="mini-item">
            <span
              className="mini-item-text"
              style={{ color: colors.textMuted }}
            >
              # design
            </span>
          </div>
        </div>

        {/* Chat */}
        <div className="mini-chat">
          <div
            className="mini-chat-header"
            style={{ borderBottomColor: colors.border, color: colors.text }}
          >
            # general
          </div>
          <div className="mini-messages">
            <div className="mini-msg">
              <div
                className="mini-avatar"
                style={{ background: colors.primary }}
              >
                A
              </div>
              <div className="mini-msg-lines">
                <div
                  className="mini-line"
                  style={{ background: colors.textMuted, width: "70%" }}
                />
                <div
                  className="mini-line"
                  style={{ background: colors.textMuted, width: "45%" }}
                />
              </div>
            </div>
            <div className="mini-msg">
              <div
                className="mini-avatar"
                style={{ background: colors.accent }}
              >
                B
              </div>
              <div className="mini-msg-lines">
                <div
                  className="mini-line"
                  style={{ background: colors.textMuted, width: "55%" }}
                />
              </div>
            </div>
            <div className="mini-msg">
              <div
                className="mini-avatar"
                style={{ background: colors.primary, opacity: 0.6 }}
              >
                C
              </div>
              <div className="mini-msg-lines">
                <div
                  className="mini-line"
                  style={{ background: colors.textMuted, width: "80%" }}
                />
                <div
                  className="mini-line"
                  style={{ background: colors.textMuted, width: "30%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Themes() {
  return (
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
          {themes.map((t) => (
            <span
              key={t.name}
              className="th-swatch"
              style={{ background: t.colors.primary }}
              title={t.name}
            />
          ))}
        </div>
      </PageHero>

      {/* Theme grid */}
      <section className="th-grid-section">
        <div className="container">
          <div className="themes-grid">
            {themes.map((theme) => (
              <div key={theme.name} className="theme-card">
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
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="info-section">
        <div className="container">
          <InfoGrid cards={infoCards} cols={2} />
        </div>
      </section>
    </div>
  );
}
