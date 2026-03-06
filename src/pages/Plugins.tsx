import "./Plugins.css";
import pluginsData from "../data/plugins.json";
import { getIcon } from "../data/iconMap";

const plugins = pluginsData;
const enabledCount = plugins.filter((p) => p.enabled).length;
const optionalCount = plugins.filter((p) => !p.enabled).length;

export default function Plugins() {
  return (
    <div className="plugins-page">
      {/* Hero */}
      <section className="pl-hero">
        <div className="pl-hero-glow" />
        <div className="container">
          <span className="pl-label">Plugins</span>
          <h1 className="pl-title">
            {plugins.length} things
            <br />
            <em>we fixed.</em>
          </h1>
          <p className="pl-sub">
            All pre-installed. Toggle each one from the settings panel. No
            restarts.
          </p>
          <div className="pl-meta">
            <span className="pl-meta-item">
              <span className="pl-meta-dot pl-meta-dot--on" />
              {enabledCount} on by default
            </span>
            <span className="pl-meta-sep" />
            <span className="pl-meta-item">
              <span className="pl-meta-dot" />
              {optionalCount} optional
            </span>
            <span className="pl-meta-sep" />
            <span className="pl-meta-item">0 accounts needed</span>
          </div>
        </div>
      </section>

      {/* Plugin list */}
      <section className="pl-list-section">
        <div className="container">
          <div className="pl-list">
            <div className="pl-list-header">
              <span className="plh-num">#</span>
              <span className="plh-name">Plugin</span>
              <span className="plh-cat">Category</span>
              <span className="plh-status">Default</span>
            </div>
            {plugins.map((plugin, i) => {
              const Icon = getIcon(plugin.icon);
              return (
                <div
                  key={plugin.name}
                  className={`pl-row${plugin.enabled ? " pl-row--on" : ""}`}
                >
                  <span className="pl-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pl-info">
                    <div className="pl-name-row">
                      <Icon className="pl-icon" strokeWidth={1.5} />
                      <span className="pl-name">{plugin.name}</span>
                    </div>
                    <p className="pl-desc">{plugin.description}</p>
                  </div>
                  <span className="pl-cat">{plugin.category}</span>
                  <span
                    className={`pl-toggle${plugin.enabled ? " pl-toggle--on" : ""}`}
                  >
                    {plugin.enabled ? "On" : "Off"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info grid */}
      <section className="pl-info-section">
        <div className="container">
          <div className="pl-info-grid">
            <div className="pl-info-card">
              <span className="pl-info-num">01</span>
              <h3>Toggle from settings</h3>
              <p>
                Open the settings panel after installing. Enable or disable any
                plugin with one click. No restart. No drama.
              </p>
            </div>
            <div className="pl-info-card">
              <span className="pl-info-num">02</span>
              <h3>Each plugin is independent</h3>
              <p>
                Nothing is coupled. Turn off what you don't want. The rest keeps
                working exactly as expected.
              </p>
            </div>
            <div className="pl-info-card">
              <span className="pl-info-num">03</span>
              <h3>More coming</h3>
              <p>
                A plugin API is in the works. Write your own, share it with the
                community. Not ready yet — but it's coming.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
