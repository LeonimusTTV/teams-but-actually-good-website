import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-glow" />
      </div>

      <div className="container">
        <div className="hero-inner">
          {/* Left: text */}
          <div className="hero-text">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-badge"
            >
              <span className="badge-dot" />
              Open source · MIT license
            </a>

            <h1 className="hero-title">
              Teams is bad.
              <br />
              <em>We fixed it.</em>
            </h1>

            <p className="hero-desc">
              An open-source mod that strips the bloat, blocks telemetry, and
              makes Microsoft Teams usable. One installer. No accounts. Free.
            </p>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-num">9</span>
                <span className="stat-label">plugins</span>
              </div>
              <div className="stat-sep" />
              <div className="stat">
                <span className="stat-num">8</span>
                <span className="stat-label">themes</span>
              </div>
              <div className="stat-sep" />
              <div className="stat">
                <span className="stat-num">0</span>
                <span className="stat-label">telemetry</span>
              </div>
              <div className="stat-sep" />
              <div className="stat">
                <span className="stat-num">free</span>
                <span className="stat-label">always</span>
              </div>
            </div>

            <div className="hero-actions">
              <Link to="/download" className="btn btn-primary">
                Download — it's free
              </Link>
              <Link to="/plugins" className="btn btn-ghost">
                See what's included →
              </Link>
            </div>
          </div>

          {/* Right: CSS Teams mockup */}
          <div className="hero-visual" aria-hidden="true">
            <div className="mockup">
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
                    <div className="chat-msg">
                      <div className="avatar" style={{ background: "#3b82f6" }}>
                        A
                      </div>
                      <div className="msg-content">
                        <div className="msg-meta">
                          <span className="msg-name">Alice</span>
                          <span className="msg-time">9:41 AM</span>
                        </div>
                        <p>
                          Is it just me or does Teams actually run fast now??
                        </p>
                      </div>
                    </div>

                    <div className="chat-msg">
                      <div
                        className="avatar"
                        style={{ background: "#22d3ee", color: "#060910" }}
                      >
                        B
                      </div>
                      <div className="msg-content">
                        <div className="msg-meta">
                          <span className="msg-name">Bob</span>
                          <span className="msg-time">9:42 AM</span>
                        </div>
                        <p>Installed the mod. Night and day difference 🙏</p>
                      </div>
                    </div>

                    <div className="chat-msg">
                      <div className="avatar" style={{ background: "#a78bfa" }}>
                        C
                      </div>
                      <div className="msg-content">
                        <div className="msg-meta">
                          <span className="msg-name">Carol</span>
                          <span className="msg-time">9:43 AM</span>
                        </div>
                        <p>
                          No telemetry?? Microsoft is going to hate this lol
                        </p>
                      </div>
                    </div>

                    <div className="chat-msg">
                      <div className="avatar" style={{ background: "#f59e0b" }}>
                        D
                      </div>
                      <div className="msg-content">
                        <div className="msg-meta">
                          <span className="msg-name">Dave</span>
                          <span className="msg-time">9:44 AM</span>
                        </div>
                        <p>Sending the link to the whole team rn</p>
                      </div>
                    </div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
