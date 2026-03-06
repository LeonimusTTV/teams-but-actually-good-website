import "./Themes.css";

interface Theme {
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    textMuted: string;
    border: string;
  };
  isLight?: boolean;
}

const themes: Theme[] = [
  {
    name: "Dark Purple",
    description: "The default Teams look, but bearable.",
    colors: {
      primary: "#6264a7",
      secondary: "#1a1a2e",
      accent: "#8661c1",
      text: "rgba(255,255,255,0.85)",
      textMuted: "rgba(255,255,255,0.3)",
      border: "rgba(255,255,255,0.07)",
    },
  },
  {
    name: "Midnight Blue",
    description: "Deep navy for the night owls.",
    colors: {
      primary: "#3b82f6",
      secondary: "#0f1419",
      accent: "#60a5fa",
      text: "rgba(255,255,255,0.85)",
      textMuted: "rgba(255,255,255,0.3)",
      border: "rgba(255,255,255,0.07)",
    },
  },
  {
    name: "Forest Green",
    description: "Calm, focused, easy on the eyes.",
    colors: {
      primary: "#10b981",
      secondary: "#0a1f15",
      accent: "#34d399",
      text: "rgba(255,255,255,0.85)",
      textMuted: "rgba(255,255,255,0.3)",
      border: "rgba(255,255,255,0.07)",
    },
  },
  {
    name: "Sunset Orange",
    description: "Warm tones for the chronically online.",
    colors: {
      primary: "#f59e0b",
      secondary: "#1a1108",
      accent: "#fb923c",
      text: "rgba(255,255,255,0.85)",
      textMuted: "rgba(255,255,255,0.3)",
      border: "rgba(255,255,255,0.07)",
    },
  },
  {
    name: "Ocean Teal",
    description: "Cool, clean, and slightly nautical.",
    colors: {
      primary: "#14b8a6",
      secondary: "#081615",
      accent: "#2dd4bf",
      text: "rgba(255,255,255,0.85)",
      textMuted: "rgba(255,255,255,0.3)",
      border: "rgba(255,255,255,0.07)",
    },
  },
  {
    name: "Rose Pink",
    description: "Soft pink with violet accents.",
    colors: {
      primary: "#ec4899",
      secondary: "#160a10",
      accent: "#f472b6",
      text: "rgba(255,255,255,0.85)",
      textMuted: "rgba(255,255,255,0.3)",
      border: "rgba(255,255,255,0.07)",
    },
  },
  {
    name: "Monochrome",
    description: "No color. Just work.",
    colors: {
      primary: "#94a3b8",
      secondary: "#0c0c0c",
      accent: "#cbd5e1",
      text: "rgba(255,255,255,0.85)",
      textMuted: "rgba(255,255,255,0.3)",
      border: "rgba(255,255,255,0.07)",
    },
  },
  {
    name: "Light Mode",
    description: "For the brave. Or the misguided.",
    colors: {
      primary: "#6264a7",
      secondary: "#f5f5f7",
      accent: "#8b5cf6",
      text: "rgba(0,0,0,0.8)",
      textMuted: "rgba(0,0,0,0.35)",
      border: "rgba(0,0,0,0.09)",
    },
    isLight: true,
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
      <div
        className="mini-bar"
        style={{ borderBottomColor: colors.border }}
      >
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
        <div className="mini-sidebar" style={{ borderRightColor: colors.border }}>
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

      {/* Hero */}
      <section className="th-hero">
        <div className="th-hero-glow" />
        <div className="container">
          <span className="th-label">Themes</span>
          <h1 className="th-title">
            8 ways to make<br />
            <em>Teams less ugly.</em>
          </h1>
          <p className="th-sub">
            Switch instantly from the settings panel. No restart. Your choice
            is saved and applied every time Teams starts.
          </p>
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
        </div>
      </section>

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
                    {theme.isLight && (
                      <span className="theme-tag">Light</span>
                    )}
                  </div>
                  <p className="theme-desc">{theme.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="th-info-section">
        <div className="container">
          <div className="th-info-grid">
            <div className="th-info-card">
              <span className="th-info-num">01</span>
              <h3>Switching themes</h3>
              <p>Open settings, pick a theme, done. Your choice is saved and applied every time Teams starts.</p>
            </div>
            <div className="th-info-card">
              <span className="th-info-num">02</span>
              <h3>Custom themes</h3>
              <p>A theme editor is in the works. You'll be able to build and share your own. Not done yet — but it's coming.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
